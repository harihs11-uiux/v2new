import { useState, useEffect, useRef } from 'react';
import svgPaths from "../imports/svg-mn5ggoluqe";
import dashboardNavSvgPaths from "../imports/svg-gup212ddf5";
import { ChevronDown, TrendingUp, TrendingDown, RefreshCw, Download, Settings2, AlertCircle, CheckCircle2, Clock, FileText } from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';

interface DashboardViewProps {
  jobs?: any[];
  activeTab?: 'Dashboard' | 'Import' | 'Export';
  onTabChange?: (tab: 'Dashboard' | 'Import' | 'Export') => void;
}

const generateData = (branch: string, mode: string, importer: string, period: string) => {
  const seed = (branch + mode + importer + period).length;
  const r = (base: number, variance: number) => Math.round(base + (seed % variance) - variance / 2);

  const monthlyVolume = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((month, i) => ({
    month,
    Import: r(120 + i * 10, 40),
    Export: r(80 + i * 8, 30),
  }));

  const jobsByStatus = [
    { name: 'In Progress', value: r(234, 60), color: '#3874FF' },
    { name: 'Completed', value: r(589, 80), color: '#22C55E' },
    { name: 'Pending', value: r(24, 12), color: '#F97316' },
    { name: 'On Hold', value: r(18, 10), color: '#EF4444' },
  ];

  const tatData = ['Sea', 'Air', 'Road', 'Rail'].map((m) => ({
    mode: m, Avg: r(8, 6), Target: 7,
  }));

  const filingDue = [
    { day: 'Mon', Overdue: r(3, 4), Today: r(5, 4), Upcoming: r(8, 6) },
    { day: 'Tue', Overdue: r(2, 3), Today: r(7, 4), Upcoming: r(6, 4) },
    { day: 'Wed', Overdue: r(4, 4), Today: r(4, 4), Upcoming: r(9, 6) },
    { day: 'Thu', Overdue: r(1, 3), Today: r(6, 4), Upcoming: r(7, 5) },
    { day: 'Fri', Overdue: r(5, 4), Today: r(3, 3), Upcoming: r(5, 4) },
  ];

  const topImporters = [
    { name: 'ABC Industries', jobs: r(145, 40) },
    { name: 'XYZ Corporation', jobs: r(112, 30) },
    { name: 'Tech Solutions', jobs: r(98, 25) },
    { name: 'Global Traders', jobs: r(87, 20) },
    { name: 'Metro Exports', jobs: r(64, 18) },
  ];

  const total = jobsByStatus.reduce((a, b) => a + b.value, 0);
  return { monthlyVolume, jobsByStatus, tatData, filingDue, topImporters, total, completed: jobsByStatus[1].value, inProgress: jobsByStatus[0].value, pending: jobsByStatus[2].value };
};

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(value);
  useEffect(() => {
    const start = ref.current;
    const diff = value - start;
    const steps = 30;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setDisplay(Math.round(start + (diff * step) / steps));
      if (step >= steps) { clearInterval(timer); ref.current = value; }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <>{display.toLocaleString()}</>;
}

function StatCard({ label, value, sub, trend, icon: Icon, color, onClick, active }: any) {
  return (
    <div onClick={onClick} className={`bg-white rounded-lg p-4 border cursor-pointer transition-all duration-200 hover:shadow-md ${active ? 'border-[#3874FF] shadow-md ring-1 ring-[#3874FF]/20' : 'border-[#d0d5e3]'}`}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[12px] text-[#626776] font-medium">{label}</p>
        <div className="p-1.5 rounded-md" style={{ backgroundColor: color + '18' }}>
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
      </div>
      <p className="text-[28px] font-semibold text-[#050e25] leading-none mb-2"><AnimatedNumber value={value} /></p>
      <div className="flex items-center gap-1">
        {trend === 'up' && <TrendingUp className="w-3 h-3 text-[#22c55e]" />}
        {trend === 'down' && <TrendingDown className="w-3 h-3 text-[#ef4444]" />}
        <p className={`text-[11px] ${trend === 'up' ? 'text-[#22c55e]' : trend === 'down' ? 'text-[#ef4444]' : 'text-[#626776]'}`}>{sub}</p>
      </div>
    </div>
  );
}

function FilterDropdown({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)} className="flex gap-2 items-center px-3 py-1.5 rounded-full border border-[#d0d5e3] cursor-pointer hover:bg-white transition-colors">
        <p className="text-[13px] text-[#626776] whitespace-nowrap">{label}: <span className="text-[#050e25] font-medium">{value}</span></p>
        <ChevronDown className={`w-3.5 h-3.5 text-[#626776] transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (<>
        <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
        <div className="absolute top-full mt-1 left-0 bg-white border border-[#d0d5e3] rounded-lg shadow-lg z-20 min-w-[160px] py-1">
          {options.map(o => (
            <div key={o} onClick={() => { onChange(o); setOpen(false); }}
              className={`px-3 py-2 text-[13px] cursor-pointer hover:bg-[#f5f7ff] ${value === o ? 'text-[#3874ff] font-medium bg-[#f5f7ff]' : 'text-[#050e25]'}`}>{o}</div>
          ))}
        </div>
      </>)}
    </div>
  );
}

function PeriodDropdown({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)} className="flex gap-2 items-center px-3 py-1.5 cursor-pointer hover:bg-gray-50 rounded border border-[#d0d5e3] min-w-[140px]">
        <p className="text-[13px] text-[#050e25] flex-1">{value}</p>
        <ChevronDown className={`w-3.5 h-3.5 text-[#626776] transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (<>
        <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
        <div className="absolute top-full mt-1 right-0 bg-white border border-[#d0d5e3] rounded-lg shadow-lg z-20 min-w-[160px] py-1">
          {options.map(o => (
            <div key={o} onClick={() => { onChange(o); setOpen(false); }}
              className={`px-3 py-2 text-[13px] cursor-pointer hover:bg-[#f5f7ff] ${value === o ? 'text-[#3874ff] font-medium bg-[#f5f7ff]' : 'text-[#050e25]'}`}>{o}</div>
          ))}
        </div>
      </>)}
    </div>
  );
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#d0d5e3] rounded-lg shadow-lg p-3 text-[12px]">
      {label && <p className="font-semibold text-[#050e25] mb-1">{label}</p>}
      {payload.map((p: any) => (
        <p key={p.dataKey} className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-[#626776]">{p.name}:</span>
          <span className="font-semibold text-[#050e25]">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

function DashboardMark() {
  return (
    <div className="absolute h-[32px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.333px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 32">
        <g>
          <path d={dashboardNavSvgPaths.p1d1c6f00} fill="url(#pg0)" />
          <path d={dashboardNavSvgPaths.p2f5870f2} fill="url(#pg1)" />
          <path d={dashboardNavSvgPaths.p30e32800} fill="url(#pg2)" />
          <path d={dashboardNavSvgPaths.p11744380} fill="url(#pg3)" />
          <path d={dashboardNavSvgPaths.p31e5ac00} fill="url(#pg4)" />
        </g>
        <defs>
          {[['pg0','8.51224','2.42334','3.43591','9.90072','#3874FF','#2852B5'],
            ['pg1','18.734','12.1398','22.2212','28.4871','#2852B5','#3874FF']].map(([id,x1,x2,y1,y2,c1,c2]) => (
            <linearGradient key={id} gradientUnits="userSpaceOnUse" id={id} x1={x1} x2={x2} y1={y1} y2={y2}>
              <stop stopColor={c1} /><stop offset="1" stopColor={c2} />
            </linearGradient>
          ))}
          {[['pg2','8.43409','21.3863','9.2237','15.3269'],
            ['pg3','11.8385','1.67426','23.7239','18.2375'],
            ['pg4','3.46187','21.5248','12.1612','19.5301']].map(([id,x1,x2,y1,y2]) => (
            <linearGradient key={id} gradientUnits="userSpaceOnUse" id={id} x1={x1} x2={x2} y1={y1} y2={y2}>
              <stop offset="0.08" stopColor="#3874FF" /><stop offset="0.37" stopColor="#82A7FF" /><stop offset="0.81" stopColor="#3874FF" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
}

function DashboardNavToolbar({ activeTab = 'Dashboard', onTabChange }: Pick<DashboardViewProps, 'activeTab' | 'onTabChange'>) {
  return (
    <div className="bg-[#242c40] h-[48px] relative w-full shrink-0">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-between h-full px-3">
        <div className="flex gap-3 items-center">
          <div className="overflow-clip relative shrink-0 size-[32px]"><DashboardMark /></div>
          <div className="w-px h-6 bg-[#545d76]" />
          <p className="font-semibold text-[16px] text-white">Job Management</p>
        </div>
        <div className="flex items-center">
          {(['Dashboard', 'Import', 'Export'] as const).map(tab => (
            <div key={tab} onClick={() => onTabChange?.(tab)}
              className={`flex h-[48px] items-center justify-center px-3 py-1 relative cursor-pointer transition-colors ${activeTab !== tab ? 'hover:bg-[#333b4f]' : ''}`}>
              {activeTab === tab && <div aria-hidden="true" className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />}
              <p className={`text-[14px] whitespace-nowrap ${activeTab === tab ? 'font-semibold text-white' : 'font-medium text-[#cdcfd3]'}`}>{tab}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70">
            <svg className="block size-full" fill="none" viewBox="0 0 18 18">
              <mask height="18" id="mc" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }} width="18" x="0" y="0"><rect fill="#D9D9D9" height="18" width="18" /></mask>
              <g mask="url(#mc)"><path d={dashboardNavSvgPaths.p30a00d00} fill="#CDCFD3" /></g>
            </svg>
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#CF3B3B] rounded-full border border-[#242c40]" />
          </div>
          <div className="bg-[#333b4f] border border-[#545d76] rounded px-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-[#3e4760] transition-colors">
            <div className="w-5 h-5 rounded-full bg-[#FE7C7C] flex items-center justify-center text-white text-[10px] font-bold">A</div>
            <p className="text-[13px] text-white font-medium">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardView({ jobs = [], activeTab = 'Dashboard', onTabChange }: DashboardViewProps) {
  const [branch, setBranch] = useState('Chennai');
  const [mode, setMode] = useState('All');
  const [importer, setImporter] = useState('All');
  const [period, setPeriod] = useState('Last 3 months');
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [data, setData] = useState(() => generateData('Chennai', 'All', 'All', 'Last 3 months'));

  useEffect(() => { setData(generateData(branch, mode, importer, period)); }, [branch, mode, importer, period]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setData(generateData(branch + Math.random(), mode, importer, period));
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 800);
  };

  const handleDownload = () => {
    const rows = [['Metric','Value'],['Total Jobs',data.total],['Completed',data.completed],['In Progress',data.inProgress],['Pending',data.pending],['Period',period],['Branch',branch],['Mode',mode],['Importer',importer],['Generated',new Date().toLocaleString()]];
    const a = document.createElement('a');
    a.href = 'data:text/csv,' + encodeURIComponent(rows.map(r => r.join(',')).join('\n'));
    a.download = `dashboard-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const RADIAN = Math.PI / 180;
  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 0.08) return null;
    const r = innerRadius + (outerRadius - innerRadius) * 0.5;
    return <text x={cx + r * Math.cos(-midAngle * RADIAN)} y={cy + r * Math.sin(-midAngle * RADIAN)} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>{`${(percent * 100).toFixed(0)}%`}</text>;
  };

  const recentJobs = [
    { job: 'ICB/10234/2025-26', importer: 'ABC Industries', mode: 'Sea', port: 'Chennai', date: '12 Apr 2025', status: 'In Progress', color: '#3874FF' },
    { job: 'ICB/10198/2025-26', importer: 'XYZ Corporation', mode: 'Air', port: 'Mumbai', date: '11 Apr 2025', status: 'Completed', color: '#22C55E' },
    { job: 'ICB/10167/2025-26', importer: 'Tech Solutions', mode: 'Sea', port: 'Chennai', date: '10 Apr 2025', status: 'Pending', color: '#F97316' },
    { job: 'ICB/10142/2025-26', importer: 'Global Traders', mode: 'Road', port: 'Delhi', date: '09 Apr 2025', status: 'Completed', color: '#22C55E' },
    { job: 'ICB/10118/2025-26', importer: 'Metro Exports', mode: 'Rail', port: 'Kolkata', date: '08 Apr 2025', status: 'On Hold', color: '#EF4444' },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#f4f6fb]">
      <DashboardNavToolbar activeTab={activeTab} onTabChange={onTabChange} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Filter Bar */}
        <div className="bg-white rounded-lg border border-[#d0d5e3] px-4 py-2.5 flex items-center gap-4 flex-wrap">
          <p className="text-[13px] text-[#050e25] font-medium shrink-0">Apply Filter</p>
          <div className="w-px h-5 bg-[#d0d5e3]" />
          <div className="flex gap-2 flex-wrap flex-1">
            <FilterDropdown label="Branch" value={branch} options={['All','Chennai','Mumbai','Delhi','Bangalore','Kolkata','Hyderabad']} onChange={setBranch} />
            <FilterDropdown label="Mode" value={mode} options={['All','Sea','Air','Road','Rail']} onChange={setMode} />
            <FilterDropdown label="Importer" value={importer} options={['All','ABC Industries','XYZ Corporation','Tech Solutions','Global Traders','Metro Exports']} onChange={setImporter} />
          </div>
          <button onClick={() => { setBranch('All'); setMode('All'); setImporter('All'); }}
            className="text-[13px] text-[#3874ff] font-semibold hover:underline flex items-center gap-1 shrink-0">
            Clear Filter
          </button>
        </div>

        {/* Header Row */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[16px] font-semibold text-[#050e25]">Jobs Overview</h2>
            <p className="text-[11px] text-[#626776] mt-0.5">Last updated: {lastUpdated.toLocaleTimeString()}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleRefresh} title="Refresh" className="p-1.5 rounded hover:bg-white border border-transparent hover:border-[#d0d5e3] transition-all">
              <RefreshCw className={`w-4 h-4 text-[#626776] ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={handleDownload} title="Download CSV" className="p-1.5 rounded hover:bg-white border border-transparent hover:border-[#d0d5e3] transition-all">
              <Download className="w-4 h-4 text-[#626776]" />
            </button>
            <button title="Customize" className="p-1.5 rounded hover:bg-white border border-transparent hover:border-[#d0d5e3] transition-all">
              <Settings2 className="w-4 h-4 text-[#626776]" />
            </button>
            <PeriodDropdown value={period} options={['Last 7 days','Last 30 days','Last 3 months','Last 6 months','Last year']} onChange={setPeriod} />
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard label="Total Jobs" value={data.total} sub="+12% from last period" trend="up" icon={FileText} color="#3874FF" onClick={() => setActiveCard(activeCard === 'total' ? null : 'total')} active={activeCard === 'total'} />
          <StatCard label="In Progress" value={data.inProgress} sub="Active shipments" trend="neutral" icon={Clock} color="#F97316" onClick={() => setActiveCard(activeCard === 'progress' ? null : 'progress')} active={activeCard === 'progress'} />
          <StatCard label="Completed" value={data.completed} sub="Successfully cleared" trend="up" icon={CheckCircle2} color="#22C55E" onClick={() => setActiveCard(activeCard === 'completed' ? null : 'completed')} active={activeCard === 'completed'} />
          <StatCard label="Pending Action" value={data.pending} sub="Requires attention" trend="down" icon={AlertCircle} color="#EF4444" onClick={() => setActiveCard(activeCard === 'pending' ? null : 'pending')} active={activeCard === 'pending'} />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-[#d0d5e3] p-5">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">Monthly Volume Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={data.monthlyVolume}>
                <defs>
                  <linearGradient id="gImport" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3874FF" stopOpacity={0.15} /><stop offset="95%" stopColor="#3874FF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gExport" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.15} /><stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#626776' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#626776' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                <Area type="monotone" dataKey="Import" stroke="#3874FF" strokeWidth={2} fill="url(#gImport)" dot={{ r: 3, fill: '#3874FF' }} activeDot={{ r: 5 }} />
                <Area type="monotone" dataKey="Export" stroke="#22C55E" strokeWidth={2} fill="url(#gExport)" dot={{ r: 3, fill: '#22C55E' }} activeDot={{ r: 5 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg border border-[#d0d5e3] p-5">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">Jobs by Status</h3>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width="55%" height={200}>
                <PieChart>
                  <Pie data={data.jobsByStatus} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" labelLine={false} label={renderLabel}>
                    {data.jobsByStatus.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-2.5">
                {data.jobsByStatus.map(s => (
                  <div key={s.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
                      <p className="text-[12px] text-[#626776]">{s.name}</p>
                    </div>
                    <p className="text-[13px] font-semibold text-[#050e25]">{s.value.toLocaleString()}</p>
                  </div>
                ))}
                <div className="pt-2 border-t border-[#f0f0f0] flex justify-between">
                  <p className="text-[12px] font-medium text-[#626776]">Total</p>
                  <p className="text-[13px] font-semibold text-[#050e25]">{data.total.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-[#d0d5e3] p-5">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">Filing Due Dates</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={data.filingDue} barSize={10}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#626776' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#626776' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="Overdue" fill="#EF4444" radius={[3,3,0,0]} />
                <Bar dataKey="Today" fill="#3874FF" radius={[3,3,0,0]} />
                <Bar dataKey="Upcoming" fill="#94A3B8" radius={[3,3,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg border border-[#d0d5e3] p-5">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">TAT Analysis (days)</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={data.tatData} barSize={24}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="mode" tick={{ fontSize: 11, fill: '#626776' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#626776' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="Avg" fill="#3874FF" radius={[3,3,0,0]} />
                <Bar dataKey="Target" fill="#EF444440" radius={[3,3,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg border border-[#d0d5e3] p-5">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">Top Importers</h3>
            <div className="space-y-3">
              {data.topImporters.map((imp, i) => {
                const pct = (imp.jobs / data.topImporters[0].jobs) * 100;
                const colors = ['#3874FF','#22C55E','#F97316','#8B5CF6','#EF4444'];
                return (
                  <div key={imp.name}>
                    <div className="flex justify-between mb-1">
                      <p className="text-[12px] text-[#050e25] truncate max-w-[130px]">{imp.name}</p>
                      <p className="text-[12px] font-semibold text-[#050e25]">{imp.jobs}</p>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#ebeef7] overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: colors[i] }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Jobs Table */}
        <div className="bg-white rounded-lg border border-[#d0d5e3] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-semibold text-[#050e25]">Recent Jobs</h3>
            <button className="text-[12px] text-[#3874ff] font-medium hover:underline">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-[#f0f0f0]">
                  {['Job No.','Importer','Mode','Port','BE Date','Status'].map(h => (
                    <th key={h} className="text-left pb-2.5 text-[#626776] font-medium pr-6 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentJobs.map((row, i) => (
                  <tr key={i} className="border-b border-[#fafafa] hover:bg-[#f5f7ff] transition-colors cursor-pointer group">
                    <td className="py-2.5 pr-6 text-[#3874ff] font-medium whitespace-nowrap group-hover:underline">{row.job}</td>
                    <td className="py-2.5 pr-6 text-[#050e25] whitespace-nowrap">{row.importer}</td>
                    <td className="py-2.5 pr-6 text-[#626776]">{row.mode}</td>
                    <td className="py-2.5 pr-6 text-[#626776]">{row.port}</td>
                    <td className="py-2.5 pr-6 text-[#626776] whitespace-nowrap">{row.date}</td>
                    <td className="py-2.5 pr-6">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium" style={{ backgroundColor: row.color + '15', color: row.color }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
