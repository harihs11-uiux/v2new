import { useState } from "react";
import svgPaths from "./svg-yw2xo69gfq";
import InvoiceFilterGrid from "./FilterGrid";
import JobRightPanelContent from "./RightPanelContent";
import ItemFilterGrid from "./FilterGrid-5580-20433";

function Tab() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[20px] text-left">Additional Filters</p>
      </div>
    </div>
  );
}

function SidebarExpandedTitlebar() {
  return (
    <div className="bg-[#242c40] h-[48px] relative shrink-0 w-full" data-name="Sidebar Expanded  Titlebar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-start px-[8px] py-[14px] relative size-full">
          <Tab />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Shapes() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[18px]" data-name="Shapes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="Shapes">
          <path d={svgPaths.p39a43b00} fill="url(#paint0_linear_5556_10499)" id="Ellipse 2840" />
          <g id="Rectangle 274140">
            <g filter="url(#filter0_i_5556_10499)">
              <path d={svgPaths.pc8cec00} fill="var(--fill-0, #8EE1FF)" />
            </g>
            <path d={svgPaths.p203ac500} stroke="url(#paint1_linear_5556_10499)" strokeWidth="0.2" />
          </g>
          <path d={svgPaths.p2fe6a600} data-figma-bg-blur-radius="4" fill="url(#paint2_linear_5556_10499)" id="Rectangle 274141" stroke="url(#paint3_linear_5556_10499)" strokeWidth="0.2" />
          <g data-figma-bg-blur-radius="5.2" filter="url(#filter2_d_5556_10499)" id="Rectangle 274260">
            <rect fill="url(#paint4_linear_5556_10499)" height="2.66667" rx="1" shapeRendering="crispEdges" width="2.36842" x="8.05263" y="8.53333" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.3984" id="filter0_i_5556_10499" width="18" x="0" y="4.60156">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.10293 0 0 0 0 0.702787 0 0 0 0 0.919603 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_5556_10499" />
          </filter>
          <clipPath id="bgblur_0_5556_10499_clip_path" transform="translate(4 1.86667)">
            <path d={svgPaths.p2fe6a600} />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.0667" id="filter2_d_5556_10499" width="12.7684" x="2.85263" y="3.33333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.20749 0 0 0 0 0.706108 0 0 0 0 0.886925 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5556_10499" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_5556_10499" mode="normal" result="shape" />
          </filter>
          <clipPath id="bgblur_1_5556_10499_clip_path" transform="translate(-2.85263 -3.33333)">
            <rect height="2.66667" rx="1" width="2.36842" x="8.05263" y="8.53333" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5556_10499" x1="8.86855" x2="9.23037" y1="-6.1943e-09" y2="11.6804">
            <stop stopColor="#44C0ED" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5556_10499" x1="9" x2="9" y1="5" y2="16">
            <stop stopColor="#AFD9FF" />
            <stop offset="1" stopColor="#ABD0F2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_5556_10499" x1="9" x2="9" y1="2.13333" y2="9.6">
            <stop stopColor="#75DAFF" />
            <stop offset="1" stopColor="#CFF2FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_5556_10499" x1="7.65" x2="7.29872" y1="19.0145" y2="0.673446">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_5556_10499" x1="9.23684" x2="8.9676" y1="8.53333" y2="11.7306">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.29" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChecklistIconsImports() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Shapes />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports />
    </div>
  );
}

function JobDetailsHeader({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <div 
      className={`relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors ${active ? 'bg-[#242c40]' : 'hover:bg-[#2d364d]'}`} 
      onClick={onClick}
    >
      {active && <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons />
          <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] ${active ? 'text-white' : 'text-[#cdcfd3]'}`}>Job Details</p>
        </div>
      </div>
    </div>
  );
}

function InvoiceDetailsHeader({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <div 
      className={`relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors ${active ? 'bg-[#242c40]' : 'hover:bg-[#2d364d]'}`} 
      onClick={onClick}
    >
      {active && <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <ChecklistIconsImports1 />
          <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] ${active ? 'text-white' : 'text-[#cdcfd3]'}`}>Invoice Details</p>
        </div>
      </div>
    </div>
  );
}

function ItemDetailsHeader({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <div 
      className={`relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors ${active ? 'bg-[#242c40]' : 'hover:bg-[#2d364d]'}`} 
      onClick={onClick}
    >
      {active && <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons2 />
          <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] ${active ? 'text-white' : 'text-[#cdcfd3]'}`}>Item Details</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute h-[16px] left-1/2 top-[4px] w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="Group 4339">
          <g filter="url(#filter0_i_5556_10476)" id="Rectangle 274261">
            <path d={svgPaths.pb26d980} fill="var(--fill-0, #5E78BE)" />
          </g>
          <path d="M1.38456 6.25515H10.6154" data-figma-bg-blur-radius="4" id="Line 141" opacity="0.9" stroke="url(#paint0_linear_5556_10476)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 8.16778H10.6154" data-figma-bg-blur-radius="4" id="Line 142" opacity="0.9" stroke="url(#paint1_linear_5556_10476)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 10.0804H10.6154" data-figma-bg-blur-radius="4" id="Line 143" opacity="0.9" stroke="url(#paint2_linear_5556_10476)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 11.993H10.6154" data-figma-bg-blur-radius="4" id="Line 144" opacity="0.9" stroke="url(#paint3_linear_5556_10476)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 13.9056H6" data-figma-bg-blur-radius="4" id="Line 145" opacity="0.9" stroke="url(#paint4_linear_5556_10476)" strokeLinecap="round" strokeWidth="0.9" />
          <path d={svgPaths.pcfd4e80} fill="var(--fill-0, #7C8CB8)" id="Rectangle 274262" />
          <path d={svgPaths.p1301ce00} fill="url(#paint5_linear_5556_10474)" id="Rectangle 274304" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_5556_10476" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_5556_10476" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5556_10476" x1="6.05103" x2="6.05103" y1="5.8633" y2="7.3633">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5556_10476" x1="6.05103" x2="6.05103" y1="7.77593" y2="9.27593">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_5556_10476" x1="6.05103" x2="6.05103" y1="9.68853" y2="11.1885">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_5556_10476" x1="6.05103" x2="6.05103" y1="11.6011" y2="13.1011">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_5556_10476" x1="3.7178" x2="3.7178" y1="13.5137" y2="15.0137">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_5556_10474" x1="3" x2="3" y1="-0.50354" y2="5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChecklistIconsImports1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[66.35%_20.86%_22.84%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[66.35%_20.86%_22.84%_21.03%] rounded-[0.5px]" style={{ backgroundImage: "linear-gradient(120.075deg, rgba(147, 151, 159, 0.41) 35.621%, rgba(255, 255, 255, 0.137) 131.75%)" }} />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[69.95%_60.81%_26.44%_24.66%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[69.95%_42.66%_26.44%_42.82%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[69.95%_22.68%_26.44%_60.98%] rounded-[6px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[51.89%_20.95%_37.3%_20.95%]">
      <div className="absolute backdrop-blur-[6.528px] border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[51.89%_20.95%_37.3%_20.95%] rounded-[0.5px]" style={{ backgroundImage: "linear-gradient(120.075deg, rgba(147, 151, 159, 0.41) 35.621%, rgba(255, 255, 255, 0.137) 131.75%)" }} />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[55.5%_61.57%_40.9%_23.9%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[55.5%_43.42%_40.9%_42.06%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[55.5%_23.44%_40.9%_60.22%] rounded-[6px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[37.43%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[37.43%_20.86%_51.76%_21.03%] rounded-[0.5px]" style={{ backgroundImage: "linear-gradient(120.075deg, rgba(147, 151, 159, 0.41) 35.621%, rgba(255, 255, 255, 0.137) 131.75%)" }} />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[41.04%_61.49%_55.36%_23.98%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[41.04%_43.33%_55.36%_42.14%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] border-[#e3e6ef] border-[0.9px] border-solid inset-[41.04%_23.36%_55.36%_60.3%] rounded-[6px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[24.17%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[2px] border-[#d5dae6] border-[0.9px] border-solid inset-[24.17%_64.45%_71.54%_21.03%] opacity-90 rounded-[6px]" />
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[4px] top-[4px]">
      <div className="absolute inset-[16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g filter="url(#filter0_i_5556_10486)" id="Rectangle 274306">
            <path d={svgPaths.p1a4c1380} fill="var(--fill-0, #586A9C)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18" id="filter0_i_5556_10486" width="16" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_5556_10486" />
            </filter>
          </defs>
        </svg>
      </div>
      <Group1 />
      <Group2 />
      <Group3 />
      <div className="absolute left-[11.94px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <g data-figma-bg-blur-radius="4" id="Ellipse 2863">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_5556_10474)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_5556_10474)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_5556_10474_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5556_10474" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop stopColor="#D1D6E4" />
              <stop offset="1" stopColor="#606F97" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5556_10474" x1="0.5" x2="0.5" y1="0" y2="1.91116">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[13.47px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <g data-figma-bg-blur-radius="4" id="Ellipse 2864">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_5556_10472)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_5556_10472)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_5556_10472_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5556_10472" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop stopColor="#D5D9E6" />
              <stop offset="1" stopColor="#606F97" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5556_10472" x1="0.5" x2="0.5" y1="0" y2="1.91116">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[4.283px] right-[4px] top-[4px] w-[4.09px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08961 4.28287">
          <path d={svgPaths.p39d5e8f0} fill="url(#paint0_linear_5556_10488)" id="Rectangle 274262" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5556_10488" x1="3.26346" x2="-1.14494" y1="-1.1893" y2="3.84843">
              <stop stopColor="#7C8CB8" />
              <stop offset="1" stopColor="#8091B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <Group5 />
    </div>
  );
}

function ExpandedSectionCount({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  return (
    <div className="bg-[#242c40] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto py-[12px] relative w-full" data-name="Expanded Section Count">
      <JobDetailsHeader active={activeTab === 'job'} onClick={() => onTabChange('job')} />
      <InvoiceDetailsHeader active={activeTab === 'invoice'} onClick={() => onTabChange('invoice')} />
      <ItemDetailsHeader active={activeTab === 'item'} onClick={() => onTabChange('item')} />
    </div>
  );
}

function NavigatingSections({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Navigating Sections">
      <ExpandedSectionCount activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

function ScrollBar() {
  return (
    <div className="-translate-y-1/2 absolute h-[52px] opacity-0 right-[3px] top-[calc(50%-340px)] w-[6px]" data-name="Scroll Bar">
      <div className="absolute bg-[#545d76] inset-0 rounded-[22px]" data-name="Vertical Bar" />
    </div>
  );
}

function SidebarSkeleton({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  return (
    <div className="bg-[#242c40] flex-[1_0_0] min-h-px min-w-px relative w-[240px]" data-name="Sidebar Skeleton">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative size-full rounded-[0px]">
        <SidebarExpandedTitlebar />
        <NavigatingSections activeTab={activeTab} onTabChange={onTabChange} />
        <ScrollBar />
      </div>
      <div aria-hidden="true" className="absolute border-[#545d76] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sidebar({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Sidebar">
      <SidebarSkeleton activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

interface FilterState {
  [key: string]: string[];
}

function RightPanel({ activeTab, filters, setFilters, activeView }: { activeTab: string; filters: FilterState; setFilters: (val: FilterState) => void; activeView: 'Imports' | 'Exports' }) {
  return (
    <div className="bg-[#2d364d] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Right Panel Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[16px] relative size-full">
        {activeTab === 'job' && (
          <JobRightPanelContent 
            filters={filters} 
            setFilters={setFilters} 
            activeView={activeView}
          />
        )}
        {activeTab === 'invoice' && (
          <InvoiceFilterGrid 
            filters={filters} 
            setFilters={setFilters} 
            activeView={activeView}
          />
        )}
        {activeTab === 'item' && (
          <ItemFilterGrid 
            filters={filters} 
            setFilters={setFilters} 
            activeView={activeView}
          />
        )}
      </div>
    </div>
  );
}

function Body({ activeTab, onTabChange, filters, setFilters, activeView }: { activeTab: string; onTabChange: (tab: string) => void; filters: FilterState; setFilters: (val: FilterState) => void; activeView: 'Imports' | 'Exports' }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Body">
      <Sidebar activeTab={activeTab} onTabChange={onTabChange} />
      <RightPanel 
        activeTab={activeTab} 
        filters={filters} 
        setFilters={setFilters} 
        activeView={activeView}
      />
    </div>
  );
}

export default function AdditionalFilter({ filters = {}, setFilters = () => {}, activeTab: activeView = 'Imports' }: { filters?: FilterState; setFilters?: (val: FilterState) => void; activeTab?: 'Imports' | 'Exports' }) {
  const [activeTab, setActiveTab] = useState('job');

  return (
    <div className="bg-[#2d364d] content-stretch flex flex-col items-start relative shadow-[0px_5px_11px_0px_#141c38] w-full h-[300px]" data-name="Additional Filter">
      <Body 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        filters={filters} 
        setFilters={setFilters} 
        activeView={activeView}
      />
    </div>
  );
}
