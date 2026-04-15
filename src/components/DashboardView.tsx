import { useState, useEffect, useRef, useCallback } from 'react';
import dashboardNavSvgPaths from "../imports/svg-gup212ddf5";
import svgPaths from "../imports/svg-mn5ggoluqe";
import {
  ChevronDown, TrendingUp, TrendingDown, RefreshCw,
  Download, Settings2, AlertCircle, CheckCircle2,
  Clock, FileText, X, ArrowLeft
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend, Sector
} from 'recharts';

interface DashboardViewProps {
  jobs?: any[];
  activeTab?: 'Dashboard' | 'Import' | 'Export';
  onTabChange?: (tab: 'Dashboard' | 'Import' | 'Export') => void;
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const STATUS_COLORS: Record<string, string> = {
  'In Progress': '#3874FF',
  'Completed':   '#22C55E',
  'Pending':     '#F97316',
  'On Hold':     '#EF4444',
};

const IMPORTER_COLORS = ['#3874FF','#22C55E','#F97316','#8B5CF6','#EF4444'];

const BASE_MONTHLY = [
  { month: 'Oct', Import: 118, Export: 76 },
  { month: 'Nov', Import: 135, Export: 89 },
  { month: 'Dec', Import: 142, Export: 95 },
  { month: 'Jan', Import: 128, Export: 84 },
  { month: 'Feb', Import: 156, Export: 102 },
  { month: 'Mar', Import: 171, Export: 118 },
];

const BASE_FILING = [
  { day: 'Mon', Overdue: 3, Today: 5, Upcoming: 8 },
  { day: 'Tue', Overdue: 2, Today: 7, Upcoming: 6 },
  { day: 'Wed', Overdue: 4, Today: 4, Upcoming: 9 },
  { day: 'Thu', Overdue: 1, Today: 6, Upcoming: 7 },
  { day: 'Fri', Overdue: 5, Today: 3, Upcoming: 5 },
];

const BASE_TAT = [
  { mode: 'Sea',  Avg: 9,  Target: 7 },
  { mode: 'Air',  Avg: 5,  Target: 7 },
  { mode: 'Road', Avg: 7,  Target: 7 },
  { mode: 'Rail', Avg: 11, Target: 7 },
];

const BASE_IMPORTERS = [
  { name: 'ABC Industries', jobs: 145 },
  { name: 'XYZ Corporation', jobs: 112 },
  { name: 'Tech Solutions',  jobs: 98  },
  { name: 'Global Traders',  jobs: 87  },
  { name: 'Metro Exports',   jobs: 64  },
];

const BASE_STATUS = [
  { name: 'In Progress', value: 234 },
  { name: 'Completed',   value: 589 },
  { name: 'Pending',     value: 24  },
  { name: 'On Hold',     value: 18  },
];

const PERIOD_MULTIPLIERS: Record<string, number> = {
  'Last 7 days':  0.25,
  'Last 30 days': 0.5,
  'Last 3 months': 1,
  'Last 6 months': 1.8,
  'Last year':    3.2,
};

const BRANCH_MULTIPLIERS: Record<string, number> = {
  All: 1, Chennai: 0.45, Mumbai: 0.3, Delhi: 0.15, Bangalore: 0.07, Kolkata: 0.02, Hyderabad: 0.01,
};

function scale(arr: any[], key: string, mult: number) {
  return arr.map(d => ({ ...d, [key]: Math.round(d[key] * mult) }));
}

function generateData(branch: string, mode: string, period: string) {
  const pm = PERIOD_MULTIPLIERS[period] ?? 1;
  const bm = BRANCH_MULTIPLIERS[branch] ?? 1;
  const mult = pm * bm;

  let monthly = BASE_MONTHLY.map(d => ({
    month: d.month,
    Import: Math.round(d.Import * mult),
    Export: Math.round(d.Export * mult),
  }));

  if (mode === 'Sea')  monthly = monthly.map(d => ({ ...d, Import: Math.round(d.Import * 0.55), Export: Math.round(d.Export * 0.6) }));
  if (mode === 'Air')  monthly = monthly.map(d => ({ ...d, Import: Math.round(d.Import * 0.3),  Export: Math.round(d.Export * 0.25) }));
  if (mode === 'Road') monthly = monthly.map(d => ({ ...d, Import: Math.round(d.Import * 0.1),  Export: Math.round(d.Export * 0.1) }));
  if (mode === 'Rail') monthly = monthly.map(d => ({ ...d, Import: Math.round(d.Import * 0.05), Export: Math.round(d.Export * 0.05) }));

  const status = BASE_STATUS.map(d => ({ ...d, value: Math.round(d.value * mult) }));
  const importers = BASE_IMPORTERS.map(d => ({ ...d, jobs: Math.round(d.jobs * mult) }));

  return { monthly, filing: BASE_FILING, tat: BASE_TAT, status, importers };
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    const from = prev.current;
    const to   = value;
    if (from === to) return;
    const duration = 600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (to - from) * ease));
      if (p < 1) requestAnimationFrame(tick);
      else prev.current = to;
    };
    requestAnimationFrame(tick);
  }, [value]);
  return <>{display.toLocaleString()}</>;
}

// ─── TOOLTIP ────────────────────────────────────────────────────────────────

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1e2638] border border-[#3d4a63] rounded-lg shadow-xl p-3 text-[12px] min-w-[140px]">
      {label && <p className="font-semibold text-white mb-2 border-b border-[#3d4a63] pb-1">{label}</p>}
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center justify-between gap-4 mt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: p.color || p.fill }} />
            <span className="text-[#a0aec0]">{p.name}</span>
          </div>
          <span className="font-semibold text-white">{p.value?.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

// ─── ACTIVE DONUT SLICE ───────────────────────────────────────────────────────

function ActiveShape(props: any) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value, percent } = props;
  return (
    <g>
      <text x={cx} y={cy - 10} textAnchor="middle" fill="#050e25" fontSize={13} fontWeight={700}>{payload.name}</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#3874FF" fontSize={18} fontWeight={800}>{value.toLocaleString()}</text>
      <text x={cx} y={cy + 30} textAnchor="middle" fill="#626776" fontSize={11}>{(percent * 100).toFixed(1)}%</text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 8} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} innerRadius={innerRadius - 4} outerRadius={innerRadius - 1} startAngle={startAngle} endAngle={endAngle} fill={fill} />
    </g>
  );
}

// ─── FILTER DROPDOWN ─────────────────────────────────────────────────────────

function FilterDropdown({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}
        className={`flex gap-2 items-center px-3 py-1.5 rounded-full border cursor-pointer transition-all text-[13px] whitespace-nowrap
          ${value !== 'All' ? 'border-[#3874FF] bg-[#3874FF]/10 text-[#3874FF]' : 'border-[#d0d5e3] bg-white text-[#626776] hover:border-[#3874FF]/50'}`}>
        <span>{label}: <span className="font-medium">{value}</span></span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (<>
        <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
        <div className="absolute top-full mt-1 left-0 bg-white border border-[#d0d5e3] rounded-lg shadow-xl z-20 min-w-[160px] py-1 animate-in fade-in slide-in-from-top-1 duration-150">
          {options.map(o => (
            <button key={o} onClick={() => { onChange(o); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-[13px] cursor-pointer hover:bg-[#f5f7ff] flex items-center justify-between
                ${value === o ? 'text-[#3874ff] font-semibold bg-[#f0f4ff]' : 'text-[#050e25]'}`}>
              {o}
              {value === o && <span className="w-1.5 h-1.5 rounded-full bg-[#3874FF]" />}
            </button>
          ))}
        </div>
      </>)}
    </div>
  );
}

// ─── PERIOD TABS ─────────────────────────────────────────────────────────────

function PeriodTabs({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div className="flex bg-[#f0f2f8] rounded-lg p-0.5 gap-0.5">
      {options.map(o => (
        <button key={o} onClick={() => onChange(o)}
          className={`px-3 py-1 rounded-md text-[12px] font-medium transition-all duration-200 whitespace-nowrap
            ${value === o ? 'bg-white text-[#050e25] shadow-sm' : 'text-[#626776] hover:text-[#050e25]'}`}>
          {o.replace('Last ', '')}
        </button>
      ))}
    </div>
  );
}

// ─── STAT CARD ───────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, trend, icon: Icon, color, onClick, active }: any) {
  return (
    <button onClick={onClick}
      className={`bg-white rounded-xl p-4 border text-left transition-all duration-300 hover:shadow-lg group w-full
        ${active ? 'border-[#3874FF] shadow-lg ring-2 ring-[#3874FF]/20 scale-[1.02]' : 'border-[#e2e8f0] hover:border-[#3874FF]/40 hover:scale-[1.01]'}`}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[12px] text-[#626776] font-medium">{label}</p>
        <div className="p-1.5 rounded-lg transition-transform duration-200 group-hover:scale-110" style={{ backgroundColor: color + '18' }}>
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
      </div>
      <p className="text-[26px] font-bold text-[#050e25] leading-none mb-2 tabular-nums">
        <AnimatedNumber value={value} />
      </p>
      <div className="flex items-center gap-1">
        {trend === 'up'   && <TrendingUp   className="w-3 h-3 text-[#22c55e]" />}
        {trend === 'down' && <TrendingDown className="w-3 h-3 text-[#ef4444]" />}
        <p className={`text-[11px] ${trend === 'up' ? 'text-[#22c55e]' : trend === 'down' ? 'text-[#ef4444]' : 'text-[#626776]'}`}>{sub}</p>
      </div>
      {active && <div className="mt-2 h-0.5 rounded-full" style={{ backgroundColor: color }} />}
    </button>
  );
}

// ─── CHART CARD ──────────────────────────────────────────────────────────────

function ChartCard({ title, children, onDrillDown, drillLabel }: { title: string; children: React.ReactNode; onDrillDown?: () => void; drillLabel?: string }) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-semibold text-[#050e25]">{title}</h3>
        {onDrillDown && (
          <button onClick={onDrillDown} className="text-[11px] text-[#3874ff] hover:underline font-medium flex items-center gap-1">
            {drillLabel || 'Details'} →
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

// ─── DRILL DOWN MODAL ────────────────────────────────────────────────────────

function DrillDownModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-auto animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-white border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-[#f0f2f8] transition-colors">
              <ArrowLeft className="w-4 h-4 text-[#626776]" />
            </button>
            <h2 className="text-[16px] font-semibold text-[#050e25]">{title}</h2>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-[#f0f2f8] transition-colors">
            <X className="w-4 h-4 text-[#626776]" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── NAV BAR ────────────────────────────────────────────────────────────────

function DashboardMark() {
  return (
    <div className="absolute h-[32px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[21px]">
      <svg className="block size-full" fill="none" viewBox="0 0 22 32">
        <path d={dashboardNavSvgPaths.p1d1c6f00} fill="url(#dg0)" />
        <path d={dashboardNavSvgPaths.p2f5870f2} fill="url(#dg1)" />
        <path d={dashboardNavSvgPaths.p30e32800} fill="url(#dg2)" />
        <path d={dashboardNavSvgPaths.p11744380} fill="url(#dg3)" />
        <path d={dashboardNavSvgPaths.p31e5ac00} fill="url(#dg4)" />
        <defs>
          <linearGradient id="dg0" gradientUnits="userSpaceOnUse" x1="8.5" x2="2.4" y1="3.4" y2="9.9"><stop stopColor="#3874FF"/><stop offset="1" stopColor="#2852B5"/></linearGradient>
          <linearGradient id="dg1" gradientUnits="userSpaceOnUse" x1="18.7" x2="12.1" y1="22.2" y2="28.5"><stop stopColor="#2852B5"/><stop offset="1" stopColor="#3874FF"/></linearGradient>
          <linearGradient id="dg2" gradientUnits="userSpaceOnUse" x1="8.4" x2="21.4" y1="9.2" y2="15.3"><stop offset="0.08" stopColor="#3874FF"/><stop offset="0.37" stopColor="#82A7FF"/><stop offset="0.81" stopColor="#3874FF"/></linearGradient>
          <linearGradient id="dg3" gradientUnits="userSpaceOnUse" x1="11.8" x2="1.7" y1="23.7" y2="18.2"><stop offset="0.08" stopColor="#3874FF"/><stop offset="0.37" stopColor="#82A7FF"/><stop offset="1" stopColor="#3874FF"/></linearGradient>
          <linearGradient id="dg4" gradientUnits="userSpaceOnUse" x1="3.5" x2="21.5" y1="12.2" y2="19.5"><stop offset="0.14" stopColor="#3874FF"/><stop offset="0.42" stopColor="#82A7FF"/><stop offset="0.75" stopColor="#3874FF"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DashboardNavToolbar({ activeTab = 'Dashboard', onTabChange }: Pick<DashboardViewProps, 'activeTab' | 'onTabChange'>) {
  return (
    <div className="bg-[#242c40] h-[48px] relative w-full shrink-0 flex items-center justify-between px-3" style={{ borderBottom: '1px solid #545d76' }}>
      <div className="flex gap-3 items-center">
        <div className="relative size-8"><DashboardMark /></div>
        <div className="w-px h-6 bg-[#545d76]" />
        <p className="font-semibold text-[16px] text-white">Job Management</p>
      </div>
      <div className="flex items-center">
        {(['Dashboard', 'Import', 'Export'] as const).map(tab => (
          <div key={tab} onClick={() => onTabChange?.(tab)}
            className={`flex h-[48px] items-center justify-center px-4 relative cursor-pointer transition-colors ${activeTab !== tab ? 'hover:bg-[#333b4f]' : ''}`}>
            {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3874FF]" />}
            <p className={`text-[14px] whitespace-nowrap transition-colors ${activeTab === tab ? 'font-semibold text-white' : 'font-medium text-[#cdcfd3]'}`}>{tab}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative cursor-pointer hover:opacity-70 transition-opacity">
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
            <mask id="mn" maskUnits="userSpaceOnUse" width="18" height="18" style={{ maskType: 'alpha' }}><rect width="18" height="18" fill="#D9D9D9"/></mask>
            <g mask="url(#mn)"><path d={dashboardNavSvgPaths.p30a00d00} fill="#CDCFD3"/></g>
          </svg>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#CF3B3B] rounded-full border border-[#242c40]" />
        </div>
        <div className="bg-[#333b4f] border border-[#545d76] rounded px-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#3e4760] transition-colors">
          <div className="w-5 h-5 rounded-full bg-[#FE7C7C] flex items-center justify-center text-white text-[10px] font-bold">A</div>
          <p className="text-[13px] text-white font-medium">Admin</p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

const PERIODS = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months', 'Last year'];

export default function DashboardView({ jobs = [], activeTab = 'Dashboard', onTabChange }: DashboardViewProps) {
  const [branch,   setBranch]   = useState('All');
  const [mode,     setMode]     = useState('All');
  const [importer, setImporter] = useState('All');
  const [period,   setPeriod]   = useState('Last 3 months');
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [data, setData] = useState(() => generateData('All', 'All', 'Last 3 months'));
  const [activePieIndex, setActivePieIndex] = useState(0);
  const [activeBarMonth, setActiveBarMonth] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [drillDown, setDrillDown] = useState<null | 'volume' | 'status' | 'filing' | 'tat' | 'importers'>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setData(generateData(branch, mode, period));
    setActiveBarMonth(null);
    setSelectedStatus(null);
  }, [branch, mode, period]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setRefreshKey(k => k + 1);
      setData(generateData(branch, mode, period));
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 700);
  };

  const handleDownload = () => {
    const rows = [
      ['Dashboard Report'],
      ['Period', period], ['Branch', branch], ['Mode', mode],
      ['',''],
      ['Status', 'Count'],
      ...data.status.map(s => [s.name, s.value]),
      ['',''],
      ['Month', 'Import', 'Export'],
      ...data.monthly.map(m => [m.month, m.Import, m.Export]),
      ['',''],
      ['Generated', new Date().toLocaleString()],
    ];
    const a = document.createElement('a');
    a.href = 'data:text/csv,' + encodeURIComponent(rows.map(r => r.join(',')).join('\n'));
    a.download = `dashboard-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const total     = data.status.reduce((s, d) => s + d.value, 0);
  const completed = data.status.find(s => s.name === 'Completed')?.value  ?? 0;
  const inProgress = data.status.find(s => s.name === 'In Progress')?.value ?? 0;
  const pending   = data.status.find(s => s.name === 'Pending')?.value    ?? 0;

  // filter monthly by clicked bar
  const displayMonthly = activeBarMonth
    ? data.monthly.filter(d => d.month === activeBarMonth)
    : data.monthly;

  // filter status by clicked card
  const displayStatus = selectedStatus
    ? data.status.filter(s => s.name === selectedStatus)
    : data.status;

  // filter importers by selected importer dropdown
  const displayImporters = importer !== 'All'
    ? data.importers.filter(d => d.name === importer || d.name.includes(importer.split(' ')[0]))
    : data.importers;

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#f4f6fb]">
      <DashboardNavToolbar activeTab={activeTab} onTabChange={onTabChange} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* ── Filter Bar ── */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] px-4 py-2.5 flex items-center gap-3 flex-wrap shadow-sm">
          <p className="text-[13px] text-[#050e25] font-semibold shrink-0">Filters</p>
          <div className="w-px h-5 bg-[#e2e8f0] shrink-0" />
          <div className="flex gap-2 flex-wrap flex-1">
            <FilterDropdown label="Branch"   value={branch}   options={['All','Chennai','Mumbai','Delhi','Bangalore','Kolkata','Hyderabad']} onChange={setBranch} />
            <FilterDropdown label="Mode"     value={mode}     options={['All','Sea','Air','Road','Rail']} onChange={setMode} />
            <FilterDropdown label="Importer" value={importer} options={['All','ABC Industries','XYZ Corporation','Tech Solutions','Global Traders','Metro Exports']} onChange={setImporter} />
          </div>
          {(branch !== 'All' || mode !== 'All' || importer !== 'All') && (
            <button onClick={() => { setBranch('All'); setMode('All'); setImporter('All'); }}
              className="flex items-center gap-1 text-[12px] text-[#EF4444] font-medium hover:underline shrink-0">
              <X className="w-3 h-3" /> Clear all
            </button>
          )}
        </div>

        {/* ── Header + Period ── */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-[16px] font-semibold text-[#050e25]">Jobs Overview</h2>
            <p className="text-[11px] text-[#626776] mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse inline-block" />
              Updated {lastUpdated.toLocaleTimeString()}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <PeriodTabs value={period} options={PERIODS} onChange={setPeriod} />
            <button onClick={handleRefresh} title="Refresh"
              className="p-1.5 rounded-lg bg-white border border-[#e2e8f0] hover:border-[#3874FF]/40 transition-all shadow-sm">
              <RefreshCw className={`w-4 h-4 text-[#626776] transition-transform duration-700 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={handleDownload} title="Download CSV"
              className="p-1.5 rounded-lg bg-white border border-[#e2e8f0] hover:border-[#3874FF]/40 transition-all shadow-sm">
              <Download className="w-4 h-4 text-[#626776]" />
            </button>
          </div>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { id: 'total',     label: 'Total Jobs',     value: total,      sub: '+12% vs last period', trend: 'up'     as const, icon: FileText,     color: '#3874FF' },
            { id: 'progress',  label: 'In Progress',    value: inProgress, sub: 'Active shipments',    trend: 'neutral'as const, icon: Clock,        color: '#F97316' },
            { id: 'completed', label: 'Completed',      value: completed,  sub: 'Successfully cleared',trend: 'up'     as const, icon: CheckCircle2, color: '#22C55E' },
            { id: 'pending',   label: 'Pending Action', value: pending,    sub: 'Requires attention',  trend: 'down'   as const, icon: AlertCircle,  color: '#EF4444' },
          ].map(card => (
            <StatCard key={card.id} {...card}
              onClick={() => {
                const statusName = card.id === 'progress' ? 'In Progress' : card.id === 'completed' ? 'Completed' : card.id === 'pending' ? 'Pending' : null;
                setActiveCard(activeCard === card.id ? null : card.id);
                setSelectedStatus(selectedStatus === statusName ? null : statusName);
              }}
              active={activeCard === card.id} />
          ))}
        </div>

        {/* ── Charts Row 1 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Monthly Volume - 3 cols */}
          <div className="lg:col-span-3">
            <ChartCard title="Monthly Volume Trend"
              drillLabel="Full breakdown"
              onDrillDown={() => setDrillDown('volume')}>
              {activeBarMonth && (
                <div className="mb-3 flex items-center gap-2 text-[12px] text-[#626776]">
                  <button onClick={() => setActiveBarMonth(null)} className="flex items-center gap-1 text-[#3874FF] hover:underline font-medium">
                    <ArrowLeft className="w-3 h-3" /> All months
                  </button>
                  <span>/ {activeBarMonth}</span>
                </div>
              )}
              <ResponsiveContainer width="100%" height={220} key={refreshKey}>
                <AreaChart data={displayMonthly} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                  onClick={(e) => { if (e?.activeLabel) setActiveBarMonth(e.activeLabel === activeBarMonth ? null : e.activeLabel); }}>
                  <defs>
                    <linearGradient id="gImp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#3874FF" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#3874FF" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="gExp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#22C55E" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#22C55E" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f8" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#3874FF', strokeWidth: 1, strokeDasharray: '4 4' }} />
                  <Legend iconSize={8} wrapperStyle={{ fontSize: 11, color: '#626776' }} />
                  <Area type="monotone" dataKey="Import" stroke="#3874FF" strokeWidth={2.5}
                    fill="url(#gImp)" dot={{ r: 4, fill: '#3874FF', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 7, fill: '#3874FF', stroke: '#fff', strokeWidth: 2 }}
                    isAnimationActive animationDuration={800} animationEasing="ease-out" />
                  <Area type="monotone" dataKey="Export" stroke="#22C55E" strokeWidth={2.5}
                    fill="url(#gExp)" dot={{ r: 4, fill: '#22C55E', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 7, fill: '#22C55E', stroke: '#fff', strokeWidth: 2 }}
                    isAnimationActive animationDuration={800} animationEasing="ease-out" />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-[11px] text-[#94a3b8] mt-1 text-center">Click a point to zoom into that month</p>
            </ChartCard>
          </div>

          {/* Status Donut - 2 cols */}
          <div className="lg:col-span-2">
            <ChartCard title="Jobs by Status" drillLabel="Breakdown" onDrillDown={() => setDrillDown('status')}>
              {selectedStatus && (
                <div className="mb-2">
                  <button onClick={() => { setSelectedStatus(null); setActiveCard(null); }} className="flex items-center gap-1 text-[12px] text-[#3874FF] hover:underline font-medium">
                    <ArrowLeft className="w-3 h-3" /> All statuses
                  </button>
                </div>
              )}
              <ResponsiveContainer width="100%" height={180} key={refreshKey}>
                <PieChart>
                  <Pie data={displayStatus} cx="50%" cy="50%"
                    innerRadius={52} outerRadius={78}
                    dataKey="value" nameKey="name"
                    activeIndex={activePieIndex}
                    activeShape={<ActiveShape />}
                    onMouseEnter={(_, index) => setActivePieIndex(index)}
                    onClick={(entry) => setSelectedStatus(selectedStatus === entry.name ? null : entry.name)}
                    isAnimationActive animationDuration={600} animationEasing="ease-out"
                    style={{ cursor: 'pointer' }}>
                    {displayStatus.map((entry, i) => (
                      <Cell key={i} fill={STATUS_COLORS[entry.name]} opacity={selectedStatus && selectedStatus !== entry.name ? 0.35 : 1} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 mt-2">
                {displayStatus.map((s, i) => (
                  <button key={s.name} onClick={() => setSelectedStatus(selectedStatus === s.name ? null : s.name)}
                    className={`w-full flex items-center justify-between text-[12px] rounded-lg px-2 py-1 transition-all
                      ${selectedStatus === s.name ? 'bg-[#f0f4ff]' : 'hover:bg-[#f8f9fc]'}`}>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: STATUS_COLORS[s.name] }} />
                      <span className="text-[#626776]">{s.name}</span>
                    </div>
                    <span className="font-semibold text-[#050e25]">{s.value.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </ChartCard>
          </div>
        </div>

        {/* ── Charts Row 2 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Filing Due */}
          <ChartCard title="Filing Due Dates" drillLabel="View calendar" onDrillDown={() => setDrillDown('filing')}>
            <ResponsiveContainer width="100%" height={180} key={refreshKey}>
              <BarChart data={data.filing} margin={{ top: 5, right: 5, left: -20, bottom: 0 }} barGap={2}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f8" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: '#f0f4ff' }} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="Overdue"  fill="#EF4444" radius={[3,3,0,0]} barSize={10} isAnimationActive animationDuration={700} style={{ cursor: 'pointer' }} />
                <Bar dataKey="Today"    fill="#3874FF" radius={[3,3,0,0]} barSize={10} isAnimationActive animationDuration={800} style={{ cursor: 'pointer' }} />
                <Bar dataKey="Upcoming" fill="#94A3B8" radius={[3,3,0,0]} barSize={10} isAnimationActive animationDuration={900} style={{ cursor: 'pointer' }} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* TAT Analysis */}
          <ChartCard title="TAT Analysis (days)" drillLabel="Details" onDrillDown={() => setDrillDown('tat')}>
            <ResponsiveContainer width="100%" height={180} key={refreshKey}>
              <BarChart data={data.tat} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f8" vertical={false} />
                <XAxis dataKey="mode" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: '#f0f4ff' }} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="Avg"    fill="#3874FF" radius={[4,4,0,0]} barSize={28} isAnimationActive animationDuration={700} style={{ cursor: 'pointer' }}>
                  {data.tat.map((entry, i) => (
                    <Cell key={i} fill={entry.Avg > entry.Target ? '#EF4444' : '#3874FF'} />
                  ))}
                </Bar>
                <Bar dataKey="Target" fill="#e2e8f0" radius={[4,4,0,0]} barSize={28} isAnimationActive animationDuration={800} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-[11px] text-[#94a3b8] mt-1 text-center">Red bars = above target TAT</p>
          </ChartCard>

          {/* Top Importers */}
          <ChartCard title="Top Importers" drillLabel="Full list" onDrillDown={() => setDrillDown('importers')}>
            <div className="space-y-3 mt-1">
              {displayImporters.map((imp, i) => {
                const max = data.importers[0].jobs;
                const pct = (imp.jobs / max) * 100;
                const isSelected = importer !== 'All' && displayImporters.length === 1;
                return (
                  <div key={imp.name} className={`rounded-lg p-2 transition-all cursor-pointer hover:bg-[#f8f9fc] ${isSelected ? 'bg-[#f0f4ff]' : ''}`}
                    onClick={() => setImporter(importer === imp.name ? 'All' : imp.name)}>
                    <div className="flex justify-between mb-1.5">
                      <p className="text-[12px] text-[#050e25] truncate max-w-[130px] font-medium">{imp.name}</p>
                      <p className="text-[12px] font-bold text-[#050e25]">{imp.jobs.toLocaleString()}</p>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#e2e8f0] overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${pct}%`, backgroundColor: IMPORTER_COLORS[i] }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-[#94a3b8] mt-2 text-center">Click a bar to filter by importer</p>
          </ChartCard>
        </div>

        {/* ── Recent Jobs ── */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-semibold text-[#050e25]">Recent Jobs</h3>
            <button className="text-[12px] text-[#3874ff] font-medium hover:underline">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b-2 border-[#f0f2f8]">
                  {['Job No.','Importer','Mode','Port','BE Date','Status'].map(h => (
                    <th key={h} className="text-left pb-2.5 text-[#94a3b8] font-semibold pr-6 whitespace-nowrap uppercase tracking-wide text-[10px]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { job: 'ICB/10234/2025-26', importer: 'ABC Industries', mode: 'Sea',  port: 'Chennai', date: '12 Apr 2025', status: 'In Progress', color: '#3874FF' },
                  { job: 'ICB/10198/2025-26', importer: 'XYZ Corporation', mode: 'Air',  port: 'Mumbai',  date: '11 Apr 2025', status: 'Completed',   color: '#22C55E' },
                  { job: 'ICB/10167/2025-26', importer: 'Tech Solutions',  mode: 'Sea',  port: 'Chennai', date: '10 Apr 2025', status: 'Pending',     color: '#F97316' },
                  { job: 'ICB/10142/2025-26', importer: 'Global Traders',  mode: 'Road', port: 'Delhi',   date: '09 Apr 2025', status: 'Completed',   color: '#22C55E' },
                  { job: 'ICB/10118/2025-26', importer: 'Metro Exports',   mode: 'Rail', port: 'Kolkata', date: '08 Apr 2025', status: 'On Hold',     color: '#EF4444' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#f8f9fc] hover:bg-[#f5f7ff] transition-colors cursor-pointer group">
                    <td className="py-3 pr-6 text-[#3874ff] font-semibold whitespace-nowrap group-hover:underline">{row.job}</td>
                    <td className="py-3 pr-6 text-[#050e25] whitespace-nowrap">{row.importer}</td>
                    <td className="py-3 pr-6 text-[#626776]">{row.mode}</td>
                    <td className="py-3 pr-6 text-[#626776]">{row.port}</td>
                    <td className="py-3 pr-6 text-[#626776] whitespace-nowrap">{row.date}</td>
                    <td className="py-3 pr-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{ backgroundColor: row.color + '15', color: row.color }}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Drill-down Modals ── */}
      {drillDown === 'volume' && (
        <DrillDownModal title="Monthly Volume — Full Breakdown" onClose={() => setDrillDown(null)}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data.monthly}>
              <defs>
                <linearGradient id="mdImp" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3874FF" stopOpacity={0.2}/><stop offset="95%" stopColor="#3874FF" stopOpacity={0}/></linearGradient>
                <linearGradient id="mdExp" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22C55E" stopOpacity={0.2}/><stop offset="95%" stopColor="#22C55E" stopOpacity={0}/></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f8"/>
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#626776' }} axisLine={false} tickLine={false}/>
              <YAxis tick={{ fontSize: 12, fill: '#626776' }} axisLine={false} tickLine={false}/>
              <Tooltip content={<ChartTooltip />}/>
              <Legend/>
              <Area type="monotone" dataKey="Import" stroke="#3874FF" strokeWidth={2.5} fill="url(#mdImp)" dot={{ r: 5, fill: '#3874FF', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 8 }}/>
              <Area type="monotone" dataKey="Export" stroke="#22C55E" strokeWidth={2.5} fill="url(#mdExp)" dot={{ r: 5, fill: '#22C55E', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 8 }}/>
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {data.monthly.map(m => (
              <div key={m.month} className="bg-[#f8f9fc] rounded-lg p-3 text-center">
                <p className="text-[11px] text-[#626776] font-medium mb-1">{m.month}</p>
                <p className="text-[13px] font-bold text-[#3874FF]">↑ {m.Import}</p>
                <p className="text-[13px] font-bold text-[#22C55E]">↑ {m.Export}</p>
              </div>
            ))}
          </div>
        </DrillDownModal>
      )}

      {drillDown === 'status' && (
        <DrillDownModal title="Jobs by Status — Full Breakdown" onClose={() => setDrillDown(null)}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {data.status.map(s => (
              <div key={s.name} className="rounded-xl p-4 border-2" style={{ borderColor: STATUS_COLORS[s.name] + '40', backgroundColor: STATUS_COLORS[s.name] + '08' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: STATUS_COLORS[s.name] }} />
                  <p className="text-[13px] font-medium text-[#626776]">{s.name}</p>
                </div>
                <p className="text-[28px] font-bold" style={{ color: STATUS_COLORS[s.name] }}>{s.value.toLocaleString()}</p>
                <p className="text-[12px] text-[#94a3b8] mt-1">{((s.value / total) * 100).toFixed(1)}% of total</p>
              </div>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={data.status} cx="50%" cy="50%" outerRadius={90} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine>
                {data.status.map((e, i) => <Cell key={i} fill={STATUS_COLORS[e.name]} />)}
              </Pie>
              <Tooltip content={<ChartTooltip />}/>
            </PieChart>
          </ResponsiveContainer>
        </DrillDownModal>
      )}

      {drillDown === 'filing' && (
        <DrillDownModal title="Filing Due Dates — Weekly View" onClose={() => setDrillDown(null)}>
          <div className="grid grid-cols-5 gap-3 mb-6">
            {data.filing.map(d => (
              <div key={d.day} className="text-center rounded-xl border border-[#e2e8f0] p-3">
                <p className="text-[12px] font-semibold text-[#050e25] mb-2">{d.day}</p>
                <div className="space-y-1">
                  {d.Overdue  > 0 && <p className="text-[11px] bg-[#FEF2F2] text-[#EF4444] rounded px-1 py-0.5 font-medium">{d.Overdue} overdue</p>}
                  {d.Today    > 0 && <p className="text-[11px] bg-[#EFF6FF] text-[#3874FF] rounded px-1 py-0.5 font-medium">{d.Today} today</p>}
                  {d.Upcoming > 0 && <p className="text-[11px] bg-[#F1F5F9] text-[#64748B] rounded px-1 py-0.5 font-medium">{d.Upcoming} upcoming</p>}
                </div>
              </div>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.filing} barGap={3}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f8" vertical={false}/>
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#626776' }} axisLine={false} tickLine={false}/>
              <YAxis tick={{ fontSize: 12, fill: '#626776' }} axisLine={false} tickLine={false}/>
              <Tooltip content={<ChartTooltip />} cursor={{ fill: '#f0f4ff' }}/>
              <Legend/>
              <Bar dataKey="Overdue"  fill="#EF4444" radius={[3,3,0,0]} barSize={14}/>
              <Bar dataKey="Today"    fill="#3874FF" radius={[3,3,0,0]} barSize={14}/>
              <Bar dataKey="Upcoming" fill="#94A3B8" radius={[3,3,0,0]} barSize={14}/>
            </BarChart>
          </ResponsiveContainer>
        </DrillDownModal>
      )}

      {drillDown === 'tat' && (
        <DrillDownModal title="TAT Analysis — Mode of Transport" onClose={() => setDrillDown(null)}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {data.tat.map(t => (
              <div key={t.mode} className={`rounded-xl p-4 border-2 ${t.Avg > t.Target ? 'border-[#EF4444]/30 bg-[#FEF2F2]' : 'border-[#22C55E]/30 bg-[#F0FDF4]'}`}>
                <p className="text-[13px] font-semibold text-[#050e25] mb-1">{t.mode}</p>
                <div className="flex items-end gap-2">
                  <p className={`text-[28px] font-bold ${t.Avg > t.Target ? 'text-[#EF4444]' : 'text-[#22C55E]'}`}>{t.Avg}d</p>
                  <p className="text-[12px] text-[#94a3b8] mb-1">target: {t.Target}d</p>
                </div>
                <p className="text-[11px] mt-1 font-medium">{t.Avg > t.Target ? `⚠ ${t.Avg - t.Target}d over target` : `✓ ${t.Target - t.Avg}d under target`}</p>
              </div>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.tat}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f8" vertical={false}/>
              <XAxis dataKey="mode" tick={{ fontSize: 12, fill: '#626776' }} axisLine={false} tickLine={false}/>
              <YAxis tick={{ fontSize: 12, fill: '#626776' }} axisLine={false} tickLine={false}/>
              <Tooltip content={<ChartTooltip />} cursor={{ fill: '#f0f4ff' }}/>
              <Legend/>
              <Bar dataKey="Avg" radius={[4,4,0,0]} barSize={36}>
                {data.tat.map((e, i) => <Cell key={i} fill={e.Avg > e.Target ? '#EF4444' : '#22C55E'} />)}
              </Bar>
              <Bar dataKey="Target" fill="#e2e8f0" radius={[4,4,0,0]} barSize={36}/>
            </BarChart>
          </ResponsiveContainer>
        </DrillDownModal>
      )}

      {drillDown === 'importers' && (
        <DrillDownModal title="Top Importers — Full List" onClose={() => setDrillDown(null)}>
          <div className="space-y-3">
            {data.importers.map((imp, i) => {
              const pct = (imp.jobs / data.importers[0].jobs) * 100;
              return (
                <div key={imp.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#f8f9fc] transition-colors cursor-pointer"
                  onClick={() => { setImporter(imp.name); setDrillDown(null); }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                    style={{ backgroundColor: IMPORTER_COLORS[i] }}>#{i + 1}</div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1.5">
                      <p className="text-[13px] font-semibold text-[#050e25]">{imp.name}</p>
                      <p className="text-[13px] font-bold" style={{ color: IMPORTER_COLORS[i] }}>{imp.jobs.toLocaleString()}</p>
                    </div>
                    <div className="h-2 rounded-full bg-[#e2e8f0] overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: IMPORTER_COLORS[i] }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </DrillDownModal>
      )}
    </div>
  );
}
