import { useState } from 'react';
import svgPaths from "../imports/svg-mn5ggoluqe";
import dashboardNavSvgPaths from "../imports/svg-gup212ddf5";
import imgRectangle from "figma:asset/8cc819c2d6ea64fde4fdd06223397b7ace3c6e90.png";
import imgRectangle1 from "figma:asset/6e77900023aac277a0be23d4420dc0cc895f81bd.png";
import imgRectangle2 from "figma:asset/0bcb81680f6892fea6e8bb5cbf6a74e628f05704.png";
import imgRectangle3 from "figma:asset/ccfdf8bf550e835f959f29fb388e197e21f34f8a.png";
import imgRectangle4 from "figma:asset/73a3f987b8a9b1d20da3025b0eb5eda864814ba7.png";
import imgRectangle5 from "figma:asset/da80c3e5bed4d321374c7a924645916e05c16609.png";
import imgRectangle6 from "figma:asset/25fbd91f4453ed8a90f9c59569d42ed46e1f1148.png";
import imgRectangle7 from "figma:asset/84911d0d9fb4574fa518d771070f903dfe43583d.png";
import imgRectangle8 from "figma:asset/3a8d80cbb90008d5b549132bacd4adc7f9ae526d.png";
import imgRectangle9 from "figma:asset/d8582cbe37be3d46afacb57db4c949136a085261.png";
import { ChevronDown } from 'lucide-react';
import FilingDueSection from '../imports/Section-3011-16071';

interface DashboardViewProps {
  jobs?: any[];
  activeTab?: 'Dashboard' | 'Import' | 'Export';
  onTabChange?: (tab: 'Dashboard' | 'Import' | 'Export') => void;
}

// Dashboard Navigation Toolbar Components
function DashboardMark() {
  return (
    <div className="absolute h-[32px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.333px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 32">
        <g>
          <path d={dashboardNavSvgPaths.p1d1c6f00} fill="url(#paint0_linear_dashboard)" />
          <path d={dashboardNavSvgPaths.p2f5870f2} fill="url(#paint1_linear_dashboard)" />
          <path d={dashboardNavSvgPaths.p30e32800} fill="url(#paint2_linear_dashboard)" />
          <path d={dashboardNavSvgPaths.p11744380} fill="url(#paint3_linear_dashboard)" />
          <path d={dashboardNavSvgPaths.p31e5ac00} fill="url(#paint4_linear_dashboard)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_dashboard" x1="8.51224" x2="2.42334" y1="3.43591" y2="9.90072">
            <stop stopColor="#3874FF" />
            <stop offset="1" stopColor="#2852B5" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_dashboard" x1="18.734" x2="12.1398" y1="22.2212" y2="28.4871">
            <stop stopColor="#2852B5" />
            <stop offset="1" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_dashboard" x1="8.43409" x2="21.3863" y1="9.2237" y2="15.3269">
            <stop offset="0.0797732" stopColor="#3874FF" />
            <stop offset="0.37268" stopColor="#82A7FF" />
            <stop offset="0.813761" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_dashboard" x1="11.8385" x2="1.67426" y1="23.7239" y2="18.2375">
            <stop offset="0.0797732" stopColor="#3874FF" />
            <stop offset="0.374435" stopColor="#82A7FF" />
            <stop offset="1" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_dashboard" x1="3.46187" x2="21.5248" y1="12.1612" y2="19.5301">
            <stop offset="0.141199" stopColor="#3874FF" />
            <stop offset="0.424841" stopColor="#82A7FF" />
            <stop offset="0.751251" stopColor="#3874FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DashboardNavToolbar({ activeTab = 'Dashboard', onTabChange }: Pick<DashboardViewProps, 'activeTab' | 'onTabChange'>) {
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

  return (
    <div className="bg-[#242c40] h-[48px] relative w-full mb-6" data-name="Dashboard Navigation">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-0 relative size-full">
          {/* Left Side - Logo and Module Title */}
          <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
            {/* Logo */}
            <div className="overflow-clip relative shrink-0 size-[32px]">
              <DashboardMark />
            </div>
            
            {/* Separator */}
            <div className="flex h-[48px] items-center justify-center relative shrink-0 w-0">
              <div className="flex-none rotate-[90deg]">
                <div className="h-0 relative w-[48px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
                      <line stroke="#545D76" x2="48" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Management Dropdown */}
            <div 
              className="content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0 cursor-pointer hover:bg-[#333b4f] rounded transition-colors"
              onClick={() => setIsJobDropdownOpen(!isJobDropdownOpen)}
            >
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                Job Management
              </p>
              <div className="flex items-center justify-center leading-[0] relative shrink-0">
                <ChevronDown className={`h-[18px] w-[18px] text-[#CDCFD3] transition-transform ${isJobDropdownOpen ? '' : 'rotate-180'}`} />
              </div>
            </div>
          </div>

          {/* Center - Tabs */}
          <div className="content-stretch flex items-start relative shrink-0">
            {/* Dashboard Tab */}
            <div 
              className={`content-stretch flex h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0 cursor-pointer transition-colors ${activeTab !== 'Dashboard' ? 'hover:bg-[#333b4f]' : ''}`}
              onClick={() => onTabChange?.('Dashboard')}
            >
              {activeTab === 'Dashboard' && (
                <div aria-hidden="true" className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
              )}
              <div className={`flex flex-col font-['Inter:${activeTab === 'Dashboard' ? 'Semi_Bold' : 'Medium'}',sans-serif] font-${activeTab === 'Dashboard' ? 'semibold' : 'medium'} justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${activeTab === 'Dashboard' ? 'text-white' : 'text-[#cdcfd3]'}`}>
                <p className="leading-[18px]">Dashboard</p>
              </div>
            </div>

            {/* Import Tab */}
            <div 
              className={`content-stretch flex h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0 cursor-pointer transition-colors ${activeTab !== 'Import' ? 'hover:bg-[#333b4f]' : ''}`}
              onClick={() => onTabChange?.('Import')}
            >
              {activeTab === 'Import' && (
                <div aria-hidden="true" className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
              )}
              <div className={`flex flex-col font-['Inter:${activeTab === 'Import' ? 'Semi_Bold' : 'Medium'}',sans-serif] font-${activeTab === 'Import' ? 'semibold' : 'medium'} justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${activeTab === 'Import' ? 'text-white' : 'text-[#cdcfd3]'}`}>
                <p className="leading-[18px]">Import</p>
              </div>
            </div>

            {/* Export Tab */}
            <div 
              className={`content-stretch flex h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0 cursor-pointer transition-colors ${activeTab !== 'Export' ? 'hover:bg-[#333b4f]' : ''}`}
              onClick={() => onTabChange?.('Export')}
            >
              {activeTab === 'Export' && (
                <div aria-hidden="true" className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
              )}
              <div className={`flex flex-col font-['Inter:${activeTab === 'Export' ? 'Semi_Bold' : 'Medium'}',sans-serif] font-${activeTab === 'Export' ? 'semibold' : 'medium'} justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${activeTab === 'Export' ? 'text-white' : 'text-[#cdcfd3]'}`}>
                <p className="leading-[18px]">Export</p>
              </div>
            </div>
          </div>

          {/* Right Side - Icons and Profile */}
          <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              {/* Icons */}
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                {/* Campaign Icon with Notification */}
                <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <mask height="18" id="mask0_campaign" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                      <rect fill="#D9D9D9" height="18" width="18" />
                    </mask>
                    <g mask="url(#mask0_campaign)">
                      <path d={dashboardNavSvgPaths.p30a00d00} fill="#CDCFD3" />
                    </g>
                  </svg>
                  <div className="absolute inset-[6.25%_31.25%_62.5%_37.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                      <circle cx="2.8125" cy="2.8125" fill="#CF3B3B" fillOpacity="0.19" r="2.8125" />
                      <circle cx="2.8125" cy="2.8125" fill="#CF3B3B" r="1.6875" />
                    </svg>
                  </div>
                </div>

                {/* Chat Support Icon */}
                <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <mask height="18" id="mask0_chat" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                      <rect fill="#D9D9D9" height="18" width="18" />
                    </mask>
                    <g mask="url(#mask0_chat)">
                      <path d={dashboardNavSvgPaths.p37d2a380} fill="#CDCFD3" />
                    </g>
                  </svg>
                </div>

                {/* Notifications Icon */}
                <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <mask height="18" id="mask0_notifications" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                      <rect fill="#D9D9D9" height="18" width="18" />
                    </mask>
                    <g mask="url(#mask0_notifications)">
                      <path d={dashboardNavSvgPaths.p28009c00} fill="#CDCFD3" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Profile Details */}
              <div className="bg-[#242c40] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#333b4f] transition-colors">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative rounded-[inherit]">
                  {/* Unifo Logo */}
                  <div className="h-[24px] overflow-clip relative rounded-[4px] shrink-0 w-[84px]">
                    <div className="absolute h-[22px] left-1/2 top-0 translate-x-[-50%] w-[58px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 22">
                        <g clipPath="url(#clip0_unifo)">
                          <path clipRule="evenodd" d={dashboardNavSvgPaths.p1c99ee80} fill="white" fillRule="evenodd" />
                        </g>
                        <defs>
                          <clipPath id="clip0_unifo">
                            <rect fill="white" height="22" width="58" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  {/* Avatar */}
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" fill="#FE7C7C" r="12" />
                      <g>
                        <path d={dashboardNavSvgPaths.p187c5080} fill="white" />
                        <path d={dashboardNavSvgPaths.p30fd8300} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function FilterDropdown({ label, value, options, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div 
        className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] rounded-[28px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">
          {label}: {value}
        </p>
        <ChevronDown className={`h-[18px] w-[18px] text-[#626776] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-1 left-0 bg-white border border-[#d0d5e3] rounded-lg shadow-lg z-20 min-w-[180px]">
            {options.map((option) => (
              <div
                key={option}
                className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-[14px] text-[#050e25] first:rounded-t-lg last:rounded-b-lg"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface PeriodDropdownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function PeriodDropdown({ value, options, onChange }: PeriodDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div 
        className="content-stretch flex gap-[4px] items-center p-[4px] shrink-0 w-[158px] cursor-pointer hover:bg-gray-50 transition-colors" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">
          {value}
        </p>
        <ChevronDown className={`h-[18px] w-[18px] text-[#626776] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-1 right-0 bg-white border border-[#d0d5e3] rounded-lg shadow-lg z-20 min-w-[158px]">
            {options.map((option) => (
              <div
                key={option}
                className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-[14px] text-[#050e25] first:rounded-t-lg last:rounded-b-lg"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function DashboardView({ jobs = [], activeTab = 'Dashboard', onTabChange }: DashboardViewProps) {
  const [branchFilter, setBranchFilter] = useState('Chennai');
  const [modeFilter, setModeFilter] = useState('All');
  const [importerFilter, setImporterFilter] = useState('All');
  const [timePeriod, setTimePeriod] = useState('Last 3 months');
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const branchOptions = ['All', 'Chennai', 'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Hyderabad'];
  const modeOptions = ['All', 'Sea', 'Air', 'Road', 'Rail'];
  const importerOptions = ['All', 'ABC Industries', 'XYZ Corporation', 'Tech Solutions Ltd', 'Global Traders'];
  const periodOptions = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months', 'Last year'];

  const handleClearFilters = () => {
    setBranchFilter('All');
    setModeFilter('All');
    setImporterFilter('All');
    setIsFilterApplied(false);
  };

  const handleApplyFilter = () => {
    setIsFilterApplied(true);
  };

  const handleDownload = () => {
    // Create CSV data
    const csvData = [
      ['Dashboard Report'],
      ['Period:', timePeriod],
      ['Branch:', branchFilter],
      ['Mode of Transport:', modeFilter],
      ['Importer:', importerFilter],
      [''],
      ['Generated on:', new Date().toLocaleString()],
    ];
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dashboard-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleRefresh = () => {
    console.log('Refreshing dashboard data...');
    // Add refresh logic here
  };

  const handleCustomize = () => {
    console.log('Opening customization panel...');
    // Add customization logic here
  };

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full">
      {/* Dashboard Navigation Toolbar */}
      <DashboardNavToolbar activeTab={activeTab} onTabChange={onTabChange} />

      {/* Filter Bar */}
      <div className="bg-[#ebeef7] h-[50px] rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
            {/* Apply Filter Text and Filters */}
            <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">
                Apply Filter
              </p>
              <div className="flex h-full items-center justify-center relative shrink-0 w-0">
                <div className="flex-none h-full rotate-[90deg]">
                  <div className="h-full relative w-[26px]">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 1">
                        <line stroke="#D0D5E3" x2="26" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filter Chips */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <FilterDropdown 
                  label="Branch"
                  value={branchFilter}
                  options={branchOptions}
                  onChange={setBranchFilter}
                />
                <FilterDropdown 
                  label="Mode of Transport"
                  value={modeFilter}
                  options={modeOptions}
                  onChange={setModeFilter}
                />
                <FilterDropdown 
                  label="Importer"
                  value={importerFilter}
                  options={importerOptions}
                  onChange={setImporterFilter}
                />
              </div>
            </div>

            {/* Clear Filter Button */}
            <div 
              className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] rounded-[4px] shrink-0 cursor-pointer hover:bg-white/50 transition-colors"
              onClick={handleClearFilters}
            >
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.pbf27c00} fill="#3874FF" />
                </svg>
              </div>
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
                <p className="leading-[18px]">Clear Filter</p>
              </div>
            </div>

            {/* Download Button removed */}
          </div>
        </div>
      </div>

      {/* Jobs Overview Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-[799px]">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-nowrap">
            Jobs Overview
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          {/* Icons */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            {/* Customize Icon */}
            <div 
              className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity"
              onClick={handleCustomize}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p1e628400} fill="#626776" />
              </svg>
            </div>
            {/* Refresh Icon with Indicator */}
            <div 
              className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity"
              onClick={handleRefresh}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <mask height="18" id="mask0_refresh" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                  <rect fill="#D9D9D9" height="18" width="18" />
                </mask>
                <g mask="url(#mask0_refresh)">
                  <path d={svgPaths.p1e488580} fill="#626776" />
                  <g>
                    <circle cx="15.1875" cy="2.8125" fill="#CF3B3B" fillOpacity="0.19" r="2.8125" />
                    <circle cx="15.1881" cy="2.8124" fill="#CF3B3B" r="1.6875" />
                  </g>
                </g>
              </svg>
            </div>
            
            {/* Download Icon */}
            <div 
              className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity"
              onClick={handleDownload}
            >
               <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                 <path d="M14.25 11.25V14.25H3.75V11.25H2.25V14.25C2.25 15.075 2.925 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V11.25H14.25ZM12.75 8.25L11.6925 7.1925L9.75 9.1275V2.25H8.25V9.1275L6.3075 7.1925L5.25 8.25L9 12L12.75 8.25Z" fill="#626776"/>
               </svg>
            </div>
          </div>
          {/* Period Dropdown */}
          <PeriodDropdown 
            value={timePeriod}
            options={periodOptions}
            onChange={setTimePeriod}
          />
        </div>
      </div>

      {/* Dashboard Content - Import the existing Body component sections */}
      <div className="w-full flex-1 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-lg p-4 border border-[#d0d5e3]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[12px] text-[#626776]">Total Jobs</p>
            </div>
            <p className="text-[24px] font-semibold text-[#050e25]">847</p>
            <p className="text-[12px] text-[#3874ff] mt-1">+12% from last period</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-[#d0d5e3]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[12px] text-[#626776]">In Progress</p>
            </div>
            <p className="text-[24px] font-semibold text-[#050e25]">234</p>
            <p className="text-[12px] text-[#ff9800] mt-1">Active shipments</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-[#d0d5e3]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[12px] text-[#626776]">Completed</p>
            </div>
            <p className="text-[24px] font-semibold text-[#050e25]">589</p>
            <p className="text-[12px] text-[#4caf50] mt-1">Successfully delivered</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-[#d0d5e3]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[12px] text-[#626776]">Pending Action</p>
            </div>
            <p className="text-[24px] font-semibold text-[#050e25]">24</p>
            <p className="text-[12px] text-[#f44336] mt-1">Requires attention</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Chart 1 - Jobs by Status */}
          <div className="bg-white rounded-lg p-6 border border-[#d0d5e3]">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">Jobs by Status</h3>
            <div className="h-[200px] flex items-center justify-center">
              <img src={imgRectangle} alt="Jobs by Status Chart" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          {/* Chart 2 - Monthly Volume */}
          <div className="bg-white rounded-lg p-6 border border-[#d0d5e3]">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">Monthly Volume Trend</h3>
            <div className="h-[200px] flex items-center justify-center">
              <img src={imgRectangle1} alt="Monthly Volume Chart" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Chart 3 */}
          <div className="bg-white rounded-lg p-6 border border-[#d0d5e3]">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">Filing Due Dates</h3>
            <div className="h-[180px] flex items-center justify-center">
              <img src={imgRectangle2} alt="Due Dates" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          {/* Chart 4 */}
          <div className="bg-white rounded-lg p-6 border border-[#d0d5e3]">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">TAT Analysis</h3>
            <div className="h-[180px] flex items-center justify-center">
              <img src={imgRectangle3} alt="TAT Analysis" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          {/* Chart 5 */}
          <div className="bg-white rounded-lg p-6 border border-[#d0d5e3]">
            <h3 className="text-[14px] font-semibold text-[#050e25] mb-4">Top Importers</h3>
            <div className="h-[180px] flex items-center justify-center">
              <img src={imgRectangle4} alt="Top Importers" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>

        {/* Filing Due Section - Separate from Jobs Overview */}
        <div className="w-full h-[400px] mt-6">
          <FilingDueSection />
        </div>
      </div>
    </div>
  );
}