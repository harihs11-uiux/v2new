import svgPaths from "./svg-rwhyb0uz56";

function VerticalNav({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#333b4f] ${isActive ? 'bg-[#333b4f]' : ''}`}
      data-name="Vertical Nav"
      onClick={onClick}
    >
      {isActive && (
        <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      )}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className={`basis-0 font-['Inter:${isActive ? 'Semi_Bold' : 'Medium'}',sans-serif] font-${isActive ? 'semibold' : 'medium'} grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] ${isActive ? 'text-white' : 'text-[#cdcfd3]'}`}>CB Jobs</p>
        </div>
      </div>
    </div>
  );
}

function SubModules({ onNavigate, activeTab }: { onNavigate?: (module: string) => void; activeTab?: string }) {
  const isJobsActive = activeTab !== 'Party';
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[37px] right-[24.33px] top-[60px]" data-name="Sub Modules">
      <VerticalNav onClick={() => onNavigate?.('Dashboard')} isActive={isJobsActive} />
    </div>
  );
}

function Shapes() {
  return (
    <div className="absolute h-[16px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Shapes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="Shapes">
          <path d={svgPaths.p39a43b00} fill="url(#paint0_linear_3007_6119)" id="Ellipse 2840" />
          <g id="Rectangle 274140">
            <g filter="url(#filter0_i_3007_6119)">
              <path d={svgPaths.pc8cec00} fill="var(--fill-0, #8EE1FF)" />
            </g>
            <path d={svgPaths.p203ac500} stroke="url(#paint1_linear_3007_6119)" strokeWidth="0.2" />
          </g>
          <path d={svgPaths.p2fe6a600} data-figma-bg-blur-radius="4" fill="url(#paint2_linear_3007_6119)" id="Rectangle 274141" stroke="url(#paint3_linear_3007_6119)" strokeWidth="0.2" />
          <g data-figma-bg-blur-radius="5.2" filter="url(#filter2_d_3007_6119)" id="Rectangle 274260">
            <rect fill="url(#paint4_linear_3007_6119)" height="2.66667" rx="1" shapeRendering="crispEdges" width="2.36842" x="8.05263" y="8.53333" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.3984" id="filter0_i_3007_6119" width="18" x="0" y="4.60156">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.10293 0 0 0 0 0.702787 0 0 0 0 0.919603 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6119" />
          </filter>
          <clipPath id="bgblur_0_3007_6119_clip_path" transform="translate(4 1.86667)">
            <path d={svgPaths.p2fe6a600} />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.0667" id="filter2_d_3007_6119" width="12.7684" x="2.85263" y="3.33333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.20749 0 0 0 0 0.706108 0 0 0 0 0.886925 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3007_6119" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_3007_6119" mode="normal" result="shape" />
          </filter>
          <clipPath id="bgblur_1_3007_6119_clip_path" transform="translate(-2.85263 -3.33333)">
            <rect height="2.66667" rx="1" width="2.36842" x="8.05263" y="8.53333" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_6119" x1="8.86855" x2="9.23037" y1="-6.1943e-09" y2="11.6804">
            <stop stopColor="#44C0ED" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_6119" x1="9" x2="9" y1="5" y2="16">
            <stop stopColor="#AFD9FF" />
            <stop offset="1" stopColor="#ABD0F2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3007_6119" x1="9" x2="9" y1="2.13333" y2="9.6">
            <stop stopColor="#75DAFF" />
            <stop offset="1" stopColor="#CFF2FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_6119" x1="7.65" x2="7.29872" y1="19.0145" y2="0.673446">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3007_6119" x1="9.23684" x2="8.9676" y1="8.53333" y2="11.7306">
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

function Jobs() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[16px] top-[24px]" data-name="Jobs">
      <ChecklistIconsImports />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Jobs</p>
    </div>
  );
}

function Jobs1({ onNavigate, activeTab }: { onNavigate?: (module: string) => void; activeTab?: string }) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Jobs">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <SubModules onNavigate={onNavigate} activeTab={activeTab} />
      <Jobs />
    </div>
  );
}

function Master() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Master">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Master">
          <g filter="url(#filter0_i_3007_6021)" id="Rectangle 274527">
            <rect fill="var(--fill-0, #4E64A3)" height="16" rx="4" width="16" x="4" y="4" />
          </g>
          <g filter="url(#filter1_d_3007_6021)" id="apps">
            <path d={svgPaths.p2ded2480} fill="var(--fill-0, white)" fillOpacity="0.75" shapeRendering="crispEdges" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_3007_6021" width="16" x="4" y="4">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.513917 0 0 0 0 0.588246 0 0 0 0 0.824745 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6021" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.4" id="filter1_d_3007_6021" width="11.4" x="6.3" y="6.3">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.35" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.532274 0 0 0 0 0.560279 0 0 0 0 0.745107 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3007_6021" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_3007_6021" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Masters() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[16px] top-[24px]" data-name="Masters">
      <Master />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[16px] text-nowrap">Masters</p>
    </div>
  );
}

function VerticalNav1({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#333b4f] ${isActive ? 'bg-[#333b4f]' : ''}`}
      data-name="Vertical Nav"
      onClick={onClick}
    >
      {isActive && (
        <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      )}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className={`basis-0 font-['Inter:${isActive ? 'Semi_Bold' : 'Medium'}',sans-serif] font-${isActive ? 'semibold' : 'medium'} grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] ${isActive ? 'text-white' : 'text-[#cdcfd3]'}`}>Party</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Item</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">SVB</p>
        </div>
      </div>
    </div>
  );
}

function SubModules1({ onNavigate, activeTab }: { onNavigate?: (module: string) => void; activeTab?: string }) {
  const isPartyActive = activeTab === 'Party';
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[37px] right-[24.33px] top-[60px]" data-name="Sub Modules">
      <VerticalNav1 onClick={() => onNavigate?.('Party')} isActive={isPartyActive} />
      <VerticalNav2 />
      <VerticalNav3 />
      <VerticalNav17 />
      <VerticalNav18 />
      <VerticalNav21 />
    </div>
  );
}

function Masters1({ onNavigate, activeTab }: { onNavigate?: (module: string) => void; activeTab?: string }) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Masters">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Masters />
      <SubModules1 onNavigate={onNavigate} activeTab={activeTab} />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[18px] left-[5px] top-[3px] w-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g id="icon">
          <g filter="url(#filter0_i_3007_6090)" id="Union">
            <path d={svgPaths.p30ad7e40} fill="url(#paint0_linear_3007_6090)" />
          </g>
          <circle cx="6.99999" cy="6.74079" data-figma-bg-blur-radius="4" fill="url(#paint1_linear_3007_6090)" fillOpacity="0.25" id="Ellipse 2894" r="5.36911" stroke="url(#paint2_linear_3007_6090)" strokeWidth="0.2" />
          <path d={svgPaths.p26974a00} fill="url(#paint3_linear_3007_6090)" id="Star 3" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.6299" id="filter0_i_3007_6090" width="14" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.95" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.568627 0 0 0 0 0.709804 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6090" />
          </filter>
          <clipPath id="bgblur_0_3007_6090_clip_path" transform="translate(2.46912 2.72832)">
            <circle cx="6.99999" cy="6.74079" r="5.36911" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_6090" x1="8.51969" x2="3.3491" y1="14.6193" y2="-2.96552">
            <stop stopColor="#586A9C" />
            <stop offset="1" stopColor="#7487BB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_6090" x1="6.99999" x2="6.99999" y1="1.27168" y2="12.2099">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3007_6090" x1="6.99999" x2="6.99999" y1="-0.27037" y2="12.5111">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_6090" x1="6.99995" x2="6.99995" y1="5.33632" y2="10.881">
            <stop stopColor="#BCC7E4" />
            <stop offset="1" stopColor="white" stopOpacity="0.41" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChecklistIconsImports1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Icon />
    </div>
  );
}

function License() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[16px] top-[24px]" data-name="License">
      <ChecklistIconsImports1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[16px] text-nowrap">EXIM</p>
    </div>
  );
}

function VerticalNav4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav5() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">AA License</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav6() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">EPCG</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav7() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">DFIA</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav8() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">MEIS</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav9() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">SEIS</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav10() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">ROSCTL</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav11() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">RODTEP</p>
        </div>
      </div>
    </div>
  );
}

function SubModules2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[37px] right-[24.33px] top-[60px]" data-name="Sub Modules">
      <VerticalNav4 />
      <VerticalNav5 />
      <VerticalNav6 />
      <VerticalNav7 />
      <VerticalNav8 />
      <VerticalNav9 />
      <VerticalNav10 />
      <VerticalNav11 />
    </div>
  );
}

function License1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="License">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <License />
      <SubModules2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[16px] left-1/2 top-[4px] translate-x-[-50%] w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="Group 4339">
          <g filter="url(#filter0_i_3007_6100)" id="Rectangle 274261">
            <path d={svgPaths.pb26d980} fill="var(--fill-0, #5E78BE)" />
          </g>
          <path d="M1.38456 6.25515H10.6154" data-figma-bg-blur-radius="4" id="Line 141" opacity="0.9" stroke="url(#paint0_linear_3007_6100)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 8.16778H10.6154" data-figma-bg-blur-radius="4" id="Line 142" opacity="0.9" stroke="url(#paint1_linear_3007_6100)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 10.0804H10.6154" data-figma-bg-blur-radius="4" id="Line 143" opacity="0.9" stroke="url(#paint2_linear_3007_6100)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 11.993H10.6154" data-figma-bg-blur-radius="4" id="Line 144" opacity="0.9" stroke="url(#paint3_linear_3007_6100)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 13.9056H6" data-figma-bg-blur-radius="4" id="Line 145" opacity="0.9" stroke="url(#paint4_linear_3007_6100)" strokeLinecap="round" strokeWidth="0.9" />
          <path d={svgPaths.pcfd4e80} fill="var(--fill-0, #7C8CB8)" id="Rectangle 274262" />
          <path d={svgPaths.p1301ce00} fill="url(#paint5_linear_3007_6100)" id="Rectangle 274304" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_3007_6100" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6100" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_6100" x1="6.05103" x2="6.05103" y1="5.8633" y2="7.3633">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_6100" x1="6.05103" x2="6.05103" y1="7.77593" y2="9.27593">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3007_6100" x1="6.05103" x2="6.05103" y1="9.68853" y2="11.1885">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_6100" x1="6.05103" x2="6.05103" y1="11.6011" y2="13.1011">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3007_6100" x1="3.7178" x2="3.7178" y1="13.5137" y2="15.0137">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_3007_6100" x1="3" x2="3" y1="-0.50354" y2="5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChecklistIconsImports2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Group />
    </div>
  );
}

function Reports() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[16px] top-[24px]" data-name="Reports">
      <ChecklistIconsImports2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[16px] text-nowrap">MIS Reports</p>
    </div>
  );
}

function VerticalNav12() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Imports</p>
        </div>
      </div>
    </div>
  );
}

function VerticalNav13() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Exports</p>
        </div>
      </div>
    </div>
  );
}

function SubModules3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[37px] right-[24.33px] top-[60px]" data-name="Sub Modules">
      <VerticalNav12 />
      <VerticalNav13 />
    </div>
  );
}

function Reports1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Reports">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Reports />
      <SubModules3 />
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute inset-[20.03%_5.56%_31.22%_57.17%]" data-name="Bg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
        <g filter="url(#filter0_i_3007_6114)" id="Bg">
          <path d={svgPaths.p38471d80} data-figma-bg-blur-radius="2.21602" fill="var(--fill-0, #C0D1F0)" id="Union" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.7012" id="filter0_i_3007_6114" width="8.94629" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.459518 0 0 0 0 0.550003 0 0 0 0 0.753596 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6114" />
          </filter>
          <clipPath id="bgblur_0_3007_6114_clip_path" transform="translate(2.21602 2.21602)">
            <path d={svgPaths.p38471d80} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Bg1() {
  return (
    <div className="absolute inset-[20.03%_57.17%_31.22%_5.56%]" data-name="Bg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
        <g filter="url(#filter0_i_3007_6065)" id="Bg">
          <path d={svgPaths.pa48b00} data-figma-bg-blur-radius="2.21602" fill="var(--fill-0, #C0D1F0)" id="Union" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.7012" id="filter0_i_3007_6065" width="8.94629" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.514165 0 0 0 0 0.628209 0 0 0 0 0.856296 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6065" />
          </filter>
          <clipPath id="bgblur_0_3007_6065_clip_path" transform="translate(2.21602 2.21602)">
            <path d={svgPaths.pa48b00} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[16.67%_24.36%_16.67%_24.67%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
        <g id="Icon">
          <path d={svgPaths.p3ebced80} data-figma-bg-blur-radius="1.00573" fill="var(--fill-0, #8EABE2)" fillOpacity="0.85" id="Union" />
        </g>
        <defs>
          <clipPath id="bgblur_0_3007_6095_clip_path" transform="translate(1.00573 1.00573)">
            <path d={svgPaths.p3ebced80} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute contents inset-[16.67%_5.56%]" data-name="Profile">
      <Bg />
      <Bg1 />
      <Icon1 />
    </div>
  );
}

function UserManagement() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="User Management">
      <Profile />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <UserManagement />
    </div>
  );
}

function VerticalNav14() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons />
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">User Management</p>
        </div>
      </div>
    </div>
  );
}

function IntegrationLogs() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Integration Logs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Integration Logs">
          <g filter="url(#filter0_i_3007_6025)" id="Rectangle 13">
            <rect fill="var(--fill-0, #3F599B)" height="15" rx="2" width="19.2" x="2.4" y="4.5" />
          </g>
          <path d={svgPaths.p30e2e880} data-figma-bg-blur-radius="13.0567" fill="var(--fill-0, white)" fillOpacity="0.31" id="Rectangle 15" />
          <rect data-figma-bg-blur-radius="13.0567" fill="var(--fill-0, white)" fillOpacity="0.28" height="3.9" id="Rectangle 16" rx="1.95" width="16.2" x="3.6" y="9" />
          <rect data-figma-bg-blur-radius="13.0567" fill="var(--fill-0, white)" fillOpacity="0.28" height="3.9" id="Rectangle 274132" rx="1.95" width="16.2" x="7" y="13.8" />
          <rect fill="url(#paint0_linear_3007_6025)" height="0.9" id="Rectangle 274130" rx="0.45" width="2" x="11" y="10.5" />
          <rect fill="url(#paint1_linear_3007_6025)" height="0.9" id="Rectangle 274137" rx="0.45" width="2" x="15" y="15.3" />
          <rect fill="url(#paint2_linear_3007_6025)" height="0.9" id="Rectangle 274136" rx="0.45" width="2" x="8" y="10.5" />
          <rect fill="url(#paint3_linear_3007_6025)" height="0.9" id="Rectangle 274138" rx="0.45" width="2" x="12" y="15.3" />
          <rect fill="url(#paint4_linear_3007_6025)" height="0.9" id="Rectangle 274131" rx="0.45" width="2" x="14" y="10.5" />
          <rect fill="url(#paint5_linear_3007_6025)" height="0.9" id="Rectangle 274139" rx="0.45" width="2" x="18" y="15.3" />
          <circle cx="17.1" cy="5.7" fill="var(--fill-0, white)" id="Ellipse 2845" r="0.3" />
          <circle cx="18.3" cy="5.7" fill="var(--fill-0, white)" id="Ellipse 2846" r="0.3" />
          <circle cx="19.5" cy="5.7" fill="var(--fill-0, white)" id="Ellipse 2847" r="0.3" />
          <g id="cancel">
            <mask height="4" id="mask0_3007_6025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="4" x="7" y="14">
              <rect fill="var(--fill-0, #D9D9D9)" height="3.15" id="Bounding box" width="3.15" x="7.80005" y="14.2" />
            </mask>
            <g mask="url(#mask0_3007_6025)">
              <path d={svgPaths.p28f1f980} fill="var(--fill-0, white)" id="cancel_2" />
            </g>
          </g>
          <g id="check_circle">
            <mask height="4" id="mask1_3007_6025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="4" x="4" y="9">
              <rect fill="var(--fill-0, #D9D9D9)" height="3.15" id="Bounding box_2" width="3.15" x="4" y="9.29999" />
            </mask>
            <g mask="url(#mask1_3007_6025)">
              <path d={svgPaths.p32917200} fill="var(--fill-0, white)" id="check_circle_2" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15" id="filter0_i_3007_6025" width="19.2" x="2.4" y="4.5">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.148593 0 0 0 0 0.233016 0 0 0 0 0.501634 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6025" />
          </filter>
          <clipPath id="bgblur_0_3007_6025_clip_path" transform="translate(10.6035 8.70674)">
            <path d={svgPaths.p30e2e880} />
          </clipPath>
          <clipPath id="bgblur_1_3007_6025_clip_path" transform="translate(9.45674 4.05674)">
            <rect height="3.9" rx="1.95" width="16.2" x="3.6" y="9" />
          </clipPath>
          <clipPath id="bgblur_2_3007_6025_clip_path" transform="translate(6.05674 -0.743251)">
            <rect height="3.9" rx="1.95" width="16.2" x="7" y="13.8" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_6025" x1="10.7692" x2="14.7902" y1="10.5" y2="11.0728">
            <stop stopColor="white" />
            <stop offset="0.549147" stopColor="white" stopOpacity="0.450853" />
            <stop offset="1" stopColor="#70B2F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_6025" x1="14.7692" x2="18.7902" y1="15.3" y2="15.8728">
            <stop stopColor="white" />
            <stop offset="0.549147" stopColor="white" stopOpacity="0.450853" />
            <stop offset="1" stopColor="#70B2F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3007_6025" x1="7.76923" x2="11.7902" y1="10.5" y2="11.0728">
            <stop stopColor="white" />
            <stop offset="0.549147" stopColor="white" stopOpacity="0.450853" />
            <stop offset="1" stopColor="#70B2F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_6025" x1="11.7692" x2="15.7902" y1="15.3" y2="15.8728">
            <stop stopColor="white" />
            <stop offset="0.549147" stopColor="white" stopOpacity="0.450853" />
            <stop offset="1" stopColor="#70B2F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3007_6025" x1="13.7692" x2="17.7902" y1="10.5" y2="11.0728">
            <stop stopColor="white" />
            <stop offset="0.549147" stopColor="white" stopOpacity="0.450853" />
            <stop offset="1" stopColor="#70B2F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_3007_6025" x1="17.7692" x2="21.7902" y1="15.3" y2="15.8728">
            <stop stopColor="white" />
            <stop offset="0.549147" stopColor="white" stopOpacity="0.450853" />
            <stop offset="1" stopColor="#70B2F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IntegrationLogs />
    </div>
  );
}

function VerticalNav15() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons1 />
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Integration Logs</p>
        </div>
      </div>
    </div>
  );
}

function PartnerExchange() {
  return (
    <div className="absolute bottom-[35%] left-[30%] right-[30%] top-1/4" data-name="partner_exchange">
      <div className="absolute inset-[0_-37.5%_-66.67%_-37.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g filter="url(#filter0_d_3007_6110)" id="partner_exchange">
            <mask height="10" id="mask0_3007_6110" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="3" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="9.6" id="Bounding box" width="9.6" x="3.59999" />
            </mask>
            <g mask="url(#mask0_3007_6110)">
              <path d={svgPaths.p26586b00} fill="url(#paint0_linear_3007_6110)" id="partner_exchange_2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.2" id="filter0_d_3007_6110" width="16.8" x="0" y="0.799955">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.588235 0 0 0 0 0.666667 0 0 0 0 0.854902 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3007_6110" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3007_6110" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_6110" x1="8.4" x2="8.4" y1="0.799955" y2="7.99996">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.65" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CustmerRelationMManagement() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Custmer Relation MManagement">
      <div className="absolute bg-[#4e64a3] inset-[19%_15%_29%_15%] rounded-[2px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_0px_#8396d2]" />
      </div>
      <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(251,255,254,0.02)] inset-[24%_21%_34%_21%] rounded-[2px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1px_7px_0px_rgba(255,255,255,0.45)]" />
      </div>
      <div className="absolute bg-[#4e64a3] inset-[74%_10%_20%_10%] rounded-[4px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_0px_#8396d2]" />
      </div>
      <PartnerExchange />
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <CustmerRelationMManagement />
    </div>
  );
}

function VerticalNav16() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons2 />
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Customer Relation</p>
        </div>
      </div>
    </div>
  );
}

function Master1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Master">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Master">
          <g filter="url(#filter0_i_3007_6021)" id="Rectangle 274527">
            <rect fill="var(--fill-0, #4E64A3)" height="16" rx="4" width="16" x="4" y="4" />
          </g>
          <g filter="url(#filter1_d_3007_6021)" id="apps">
            <path d={svgPaths.p2ded2480} fill="var(--fill-0, white)" fillOpacity="0.75" shapeRendering="crispEdges" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_3007_6021" width="16" x="4" y="4">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.513917 0 0 0 0 0.588246 0 0 0 0 0.824745 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6021" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.4" id="filter1_d_3007_6021" width="11.4" x="6.3" y="6.3">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.35" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.532274 0 0 0 0 0.560279 0 0 0 0 0.745107 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3007_6021" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_3007_6021" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Master1 />
    </div>
  );
}

function VerticalNav17() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Bond</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute inset-[8.33%_4.17%_10.66%_4.17%]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="icon">
          <path d={svgPaths.p3ce62000} data-figma-bg-blur-radius="4" fill="var(--fill-0, #7DCFF9)" id="Rectangle 273341" stroke="url(#paint0_linear_3007_6046)" strokeWidth="0.2" />
          <g filter="url(#filter1_i_3007_6046)" id="Rectangle 273342">
            <path d={svgPaths.p284b6d00} fill="var(--fill-0, #6378B5)" />
          </g>
          <g filter="url(#filter2_i_3007_6046)" id="Vector 2">
            <path d={svgPaths.p15144700} fill="var(--fill-0, #6378B5)" />
          </g>
          <path d={svgPaths.p120d6000} fill="var(--fill-0, white)" fillOpacity="0.28" id="Vector 3" />
          <rect data-figma-bg-blur-radius="4" fill="var(--fill-0, #455F9F)" height="2" id="Rectangle 273316" rx="0.5" width="18" x="2" y="7" />
          <g id="Rectangle 273318">
            <mask fill="white" id="path-6-inside-1_3007_6046">
              <path d="M6 9L6 18L4 18L4 9L6 9Z" />
            </mask>
            <path d="M6 9L6 18L4 18L4 9L6 9Z" fill="var(--fill-0, #8998C3)" />
            <path d={svgPaths.p2828c100} fill="var(--stroke-0, #5374B5)" mask="url(#path-6-inside-1_3007_6046)" />
          </g>
          <g id="Rectangle 273319">
            <mask fill="white" id="path-8-inside-2_3007_6046">
              <path d="M10 9L10 18L8 18L8 9L10 9Z" />
            </mask>
            <path d="M10 9L10 18L8 18L8 9L10 9Z" fill="var(--fill-0, #8998C3)" />
            <path d={svgPaths.p33690d00} fill="var(--stroke-0, #5374B5)" mask="url(#path-8-inside-2_3007_6046)" />
          </g>
          <g id="Rectangle 273320">
            <mask fill="white" id="path-10-inside-3_3007_6046">
              <path d="M14 9L14 18L12 18L12 9L14 9Z" />
            </mask>
            <path d="M14 9L14 18L12 18L12 9L14 9Z" fill="var(--fill-0, #8998C3)" />
            <path d={svgPaths.p32cf7300} fill="var(--stroke-0, #5374B5)" mask="url(#path-10-inside-3_3007_6046)" />
          </g>
          <g id="Rectangle 273321">
            <mask fill="white" id="path-12-inside-4_3007_6046">
              <path d="M18 9L18 18L16 18L16 9L18 9Z" />
            </mask>
            <path d="M18 9L18 18L16 18L16 9L18 9Z" fill="var(--fill-0, #8998C3)" />
            <path d={svgPaths.p49a5100} fill="var(--stroke-0, #5374B5)" mask="url(#path-12-inside-4_3007_6046)" />
          </g>
          <rect data-figma-bg-blur-radius="4" fill="var(--fill-0, #455F9F)" height="1.8" id="Rectangle 273339" rx="0.4" stroke="url(#paint1_linear_3007_6046)" strokeWidth="0.2" width="17.8" x="2.1" y="17.5423" />
        </g>
        <defs>
          <clipPath id="bgblur_0_3007_6046_clip_path" transform="translate(1 -5)">
            <path d={svgPaths.p3ce62000} />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter1_i_3007_6046" width="16" x="3" y="7">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.513917 0 0 0 0 0.588246 0 0 0 0 0.824745 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6046" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="6.62938" id="filter2_i_3007_6046" width="21.0271" x="0.484962" y="0.37062">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.513917 0 0 0 0 0.588246 0 0 0 0 0.824745 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6046" />
          </filter>
          <clipPath id="bgblur_1_3007_6046_clip_path" transform="translate(2 -3)">
            <rect height="2" rx="0.5" width="18" x="2" y="7" />
          </clipPath>
          <clipPath id="bgblur_2_3007_6046_clip_path" transform="translate(2 -13.4423)">
            <rect height="1.8" rx="0.4" width="17.8" x="2.1" y="17.5423" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_6046" x1="10.9509" x2="10.9509" y1="2.99117" y2="18.8374">
            <stop stopColor="#FD9643" stopOpacity="0.13" />
            <stop offset="1" stopColor="white" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_6046" x1="10.9448" x2="11" y1="16.2207" y2="19.4423">
            <stop stopColor="#A8DEFA" stopOpacity="0.13" />
            <stop offset="1" stopColor="white" stopOpacity="0.14" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BankGurantee() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bank  gurantee">
      <Icon2 />
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <BankGurantee />
    </div>
  );
}

function VerticalNav18() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Bank Guarantee</p>
        </div>
      </div>
    </div>
  );
}

function RackRetturnnablePallete() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="rack retturnnable pallete">
      <div className="absolute flex h-[2px] items-center justify-center left-[4px] top-[10px] w-[16px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#4c64ae] h-[16px] w-[2px]" />
        </div>
      </div>
      <div className="absolute flex h-[2px] items-center justify-center left-[4px] top-[16px] w-[16px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#4c64ae] h-[16px] w-[2px]" />
        </div>
      </div>
      <div className="absolute bg-[#6479b7] h-[16px] left-[5px] rounded-[1px] top-[5px] w-[3px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_0px_#8396d2]" />
      </div>
      <div className="absolute bg-[#6479b7] h-[16px] left-[16px] rounded-[1px] top-[5px] w-[3px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_0px_#8396d2]" />
      </div>
      <div className="absolute bg-[#8196d3] left-[8.5px] rounded-[0.4px] size-[3px] top-[7px]" />
      <div className="absolute bg-[#8196d3] left-[8.5px] rounded-[0.4px] size-[3px] top-[13px]" />
      <div className="absolute bg-[#8196d3] left-[12.5px] rounded-[0.4px] size-[3px] top-[7px]" />
      <div className="absolute bg-[#8196d3] left-[12.5px] rounded-[0.4px] size-[3px] top-[13px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[9px] size-px top-[7px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[9px] size-px top-[13px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[13px] size-px top-[7px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[13px] size-px top-[13px]" />
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <RackRetturnnablePallete />
    </div>
  );
}

function VerticalNav19() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="size-full">
        <div className="content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <NoOfIcons5 />
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Rack Returnable Pallete</p>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="List">
      <VerticalNav14 />
      <VerticalNav15 />
      <VerticalNav16 />
      <VerticalNav19 />
    </div>
  );
}

function OtherModules() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Other Modules -1">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function ChecklistIconsImports3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checklist Icons Imports">
          <path d={svgPaths.p3ceb8aa0} data-figma-bg-blur-radius="4" id="Line 148" stroke="url(#paint0_linear_3007_6070)" strokeLinecap="round" strokeWidth="0.3" />
          <g id="icon">
            <path d={svgPaths.p28f8cc00} data-figma-bg-blur-radius="4" fill="url(#paint1_linear_3007_6070)" id="Rectangle 274314" />
            <path d={svgPaths.p842fb00} fill="var(--fill-0, #ADC4FC)" id="Rectangle 274310" />
            <g filter="url(#filter2_i_3007_6070)" id="Rectangle 274505">
              <path d={svgPaths.p31acc100} fill="url(#paint2_radial_3007_6070)" />
            </g>
            <path d={svgPaths.p3cef0780} data-figma-bg-blur-radius="8" fill="var(--fill-0, #5E709D)" id="Rectangle 274506" stroke="url(#paint3_linear_3007_6070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p363cf780} fill="url(#paint4_linear_3007_6070)" id="Rectangle 274516" />
            <path d={svgPaths.p17712300} fill="url(#paint5_linear_3007_6070)" id="Rectangle 274523" />
            <path d={svgPaths.pdefe800} fill="url(#paint6_linear_3007_6070)" id="Rectangle 274525" />
            <path d={svgPaths.p7dd1600} fill="url(#paint7_linear_3007_6070)" id="Rectangle 274522" />
            <path d={svgPaths.p15c33000} fill="url(#paint8_linear_3007_6070)" id="Rectangle 274524" />
            <path d={svgPaths.p1364c000} fill="url(#paint9_linear_3007_6070)" id="Rectangle 274526" />
            <path d={svgPaths.p30509300} data-figma-bg-blur-radius="4" fill="url(#paint10_linear_3007_6070)" id="Vector 337" />
            <path d={svgPaths.p1f213900} data-figma-bg-blur-radius="8" fill="url(#paint11_linear_3007_6070)" id="Rectangle 274515" stroke="url(#paint12_linear_3007_6070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p349444f2} data-figma-bg-blur-radius="4" fill="url(#paint13_linear_3007_6070)" fillOpacity="0.47" id="Rectangle 274518" stroke="url(#paint14_linear_3007_6070)" strokeWidth="0.2" />
            <path d="M9.29893 12.9794H14.7491" id="Vector 338" stroke="url(#paint15_linear_3007_6070)" strokeWidth="0.2" />
            <path d="M9.29893 12.3424H14.7491" id="Vector 339" stroke="url(#paint16_linear_3007_6070)" strokeWidth="0.2" />
            <rect fill="url(#paint17_linear_3007_6070)" height="1.14014" id="Rectangle 274521" rx="0.2" width="1.79758" x="11.125" y="9.17061" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_3007_6070_clip_path" transform="translate(-2.70117 -0.878197)">
            <path d={svgPaths.p28f8cc00} />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.3893" id="filter2_i_3007_6070" width="12.5807" x="5.73242" y="5.86882">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.435174 0 0 0 0 0.512122 0 0 0 0 0.691667 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6070" />
          </filter>
          <clipPath id="bgblur_1_3007_6070_clip_path" transform="translate(-0.0546875 -3.62652)">
            <path d={svgPaths.p3cef0780} />
          </clipPath>
          <clipPath id="bgblur_2_3007_6070_clip_path" transform="translate(-0.255004 -0.615383)">
            <path d={svgPaths.p30509300} />
          </clipPath>
          <clipPath id="bgblur_3_3007_6070_clip_path" transform="translate(3.06445 -10.5162)">
            <path d={svgPaths.p1f213900} />
          </clipPath>
          <clipPath id="bgblur_4_3007_6070_clip_path" transform="translate(-4.05585 -7.62652)">
            <path d={svgPaths.p349444f2} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_6070" x1="5.46565" x2="7.29375" y1="14.8978" y2="16.1274">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_6070" x1="7.76639" x2="7.76639" y1="-3.67228" y2="19.5504">
            <stop offset="0.119655" stopColor="#A6BBF1" />
            <stop offset="0.454764" stopColor="#7283AD" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(0 5.43657 -5.10952 -0.00125369 12.0228 12.5635)" gradientUnits="userSpaceOnUse" id="paint2_radial_3007_6070" r="1">
            <stop stopColor="#586A9C" />
            <stop offset="1" stopColor="#344366" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_6070" x1="4" x2="5.10577" y1="19.0001" y2="22.9197">
            <stop stopColor="#979CA7" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3007_6070" x1="10.181" x2="10.0163" y1="14.9242" y2="17.0803">
            <stop stopColor="#DEE6FD" />
            <stop offset="1" stopColor="#93B1FF" stopOpacity="0.29" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_3007_6070" x1="12.0301" x2="11.8654" y1="14.9242" y2="17.0803">
            <stop stopColor="#DEE6FD" />
            <stop offset="1" stopColor="#93B1FF" stopOpacity="0.29" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_3007_6070" x1="13.879" x2="13.7142" y1="14.9242" y2="17.0803">
            <stop stopColor="#DEE6FD" />
            <stop offset="1" stopColor="#93B1FF" stopOpacity="0.29" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_3007_6070" x1="10.302" x2="10.3123" y1="16.5" y2="18.4999">
            <stop stopColor="#8196CC" />
            <stop offset="1" stopColor="#DDE5FD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_3007_6070" x1="12.1511" x2="12.1614" y1="16.5" y2="18.4999">
            <stop stopColor="#8196CC" />
            <stop offset="1" stopColor="#DDE5FD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_3007_6070" x1="14" x2="14.0102" y1="16.5" y2="18.4999">
            <stop stopColor="#8196CC" />
            <stop offset="1" stopColor="#DDE5FD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_3007_6070" x1="11.5" x2="11.5" y1="-3.99995" y2="19">
            <stop stopColor="#A6BBF1" />
            <stop offset="0.827995" stopColor="#7283AD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_3007_6070" x1="10.5" x2="10.5" y1="11" y2="23">
            <stop stopColor="#A6BBF1" />
            <stop offset="1" stopColor="#7283AD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_3007_6070" x1="11.6651" x2="14.8371" y1="23.3378" y2="15.7146">
            <stop stopColor="#919DBB" />
            <stop offset="1" stopColor="#919DBB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_3007_6070" x1="10.0505" x2="9.95926" y1="13.6953" y2="11.7657">
            <stop stopColor="#859ACF" />
            <stop offset="1" stopColor="#D1DBF7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_3007_6070" x1="12.0484" x2="12.0484" y1="14.9589" y2="11.6265">
            <stop stopColor="white" stopOpacity="0.13" />
            <stop offset="1" stopColor="white" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_3007_6070" x1="9.29893" x2="14.7491" y1="13.4794" y2="13.4794">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.19042" stopColor="white" stopOpacity="0.388839" />
            <stop offset="0.489713" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_3007_6070" x1="9.29893" x2="14.7491" y1="12.8424" y2="12.8424">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.489713" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_3007_6070" x1="8.04678" x2="16.252" y1="9.17061" y2="10.3754">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports3 />
    </div>
  );
}

function VerticalNav20() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="size-full">
        <div className="content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <NoOfIcons6 />
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Warehousing</p>
        </div>
      </div>
    </div>
  );
}

function Icegate() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icegate">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icegate">
          <path d={svgPaths.p2ac42700} fill="var(--fill-0, #6479B7)" id="Exclude" />
          <path d={svgPaths.p3f762c00} fill="var(--fill-0, #485C97)" id="Rectangle 274541" />
          <path d={svgPaths.p3fbf9800} fill="var(--fill-0, #9FAFDF)" id="Vector 341" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Icegate />
    </div>
  );
}

function VerticalNav21() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Icegate</p>
        </div>
      </div>
    </div>
  );
}

function Warehouse() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Warehouse">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checklist Icons Imports">
          <path d={svgPaths.p3ceb8aa0} data-figma-bg-blur-radius="4" id="Line 148" stroke="url(#paint0_linear_3007_6070)" strokeLinecap="round" strokeWidth="0.3" />
          <g id="icon">
            <path d={svgPaths.p28f8cc00} data-figma-bg-blur-radius="4" fill="url(#paint1_linear_3007_6070)" id="Rectangle 274314" />
            <path d={svgPaths.p842fb00} fill="var(--fill-0, #ADC4FC)" id="Rectangle 274310" />
            <g filter="url(#filter2_i_3007_6070)" id="Rectangle 274505">
              <path d={svgPaths.p31acc100} fill="url(#paint2_radial_3007_6070)" />
            </g>
            <path d={svgPaths.p3cef0780} data-figma-bg-blur-radius="8" fill="var(--fill-0, #5E709D)" id="Rectangle 274506" stroke="url(#paint3_linear_3007_6070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p363cf780} fill="url(#paint4_linear_3007_6070)" id="Rectangle 274516" />
            <path d={svgPaths.p17712300} fill="url(#paint5_linear_3007_6070)" id="Rectangle 274523" />
            <path d={svgPaths.pdefe800} fill="url(#paint6_linear_3007_6070)" id="Rectangle 274525" />
            <path d={svgPaths.p7dd1600} fill="url(#paint7_linear_3007_6070)" id="Rectangle 274522" />
            <path d={svgPaths.p15c33000} fill="url(#paint8_linear_3007_6070)" id="Rectangle 274524" />
            <path d={svgPaths.p1364c000} fill="url(#paint9_linear_3007_6070)" id="Rectangle 274526" />
            <path d={svgPaths.p30509300} data-figma-bg-blur-radius="4" fill="url(#paint10_linear_3007_6070)" id="Vector 337" />
            <path d={svgPaths.p1f213900} data-figma-bg-blur-radius="8" fill="url(#paint11_linear_3007_6070)" id="Rectangle 274515" stroke="url(#paint12_linear_3007_6070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" />
            <path d={svgPaths.p349444f2} data-figma-bg-blur-radius="4" fill="url(#paint13_linear_3007_6070)" fillOpacity="0.47" id="Rectangle 274518" stroke="url(#paint14_linear_3007_6070)" strokeWidth="0.2" />
            <path d="M9.29893 12.9794H14.7491" id="Vector 338" stroke="url(#paint15_linear_3007_6070)" strokeWidth="0.2" />
            <path d="M9.29893 12.3424H14.7491" id="Vector 339" stroke="url(#paint16_linear_3007_6070)" strokeWidth="0.2" />
            <rect fill="url(#paint17_linear_3007_6070)" height="1.14014" id="Rectangle 274521" rx="0.2" width="1.79758" x="11.125" y="9.17061" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_3007_6070_clip_path" transform="translate(-2.70117 -0.878197)">
            <path d={svgPaths.p28f8cc00} />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.3893" id="filter2_i_3007_6070" width="12.5807" x="5.73242" y="5.86882">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.435174 0 0 0 0 0.512122 0 0 0 0 0.691667 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_6070" />
          </filter>
          <clipPath id="bgblur_1_3007_6070_clip_path" transform="translate(-0.0546875 -3.62652)">
            <path d={svgPaths.p3cef0780} />
          </clipPath>
          <clipPath id="bgblur_2_3007_6070_clip_path" transform="translate(-0.255004 -0.615383)">
            <path d={svgPaths.p30509300} />
          </clipPath>
          <clipPath id="bgblur_3_3007_6070_clip_path" transform="translate(3.06445 -10.5162)">
            <path d={svgPaths.p1f213900} />
          </clipPath>
          <clipPath id="bgblur_4_3007_6070_clip_path" transform="translate(-4.05585 -7.62652)">
            <path d={svgPaths.p349444f2} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_6070" x1="5.46565" x2="7.29375" y1="14.8978" y2="16.1274">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_6070" x1="7.76639" x2="7.76639" y1="-3.67228" y2="19.5504">
            <stop offset="0.119655" stopColor="#A6BBF1" />
            <stop offset="0.454764" stopColor="#7283AD" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(0 5.43657 -5.10952 -0.00125369 12.0228 12.5635)" gradientUnits="userSpaceOnUse" id="paint2_radial_3007_6070" r="1">
            <stop stopColor="#586A9C" />
            <stop offset="1" stopColor="#344366" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_6070" x1="4" x2="5.10577" y1="19.0001" y2="22.9197">
            <stop stopColor="#979CA7" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3007_6070" x1="10.181" x2="10.0163" y1="14.9242" y2="17.0803">
            <stop stopColor="#DEE6FD" />
            <stop offset="1" stopColor="#93B1FF" stopOpacity="0.29" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_3007_6070" x1="12.0301" x2="11.8654" y1="14.9242" y2="17.0803">
            <stop stopColor="#DEE6FD" />
            <stop offset="1" stopColor="#93B1FF" stopOpacity="0.29" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_3007_6070" x1="13.879" x2="13.7142" y1="14.9242" y2="17.0803">
            <stop stopColor="#DEE6FD" />
            <stop offset="1" stopColor="#93B1FF" stopOpacity="0.29" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_3007_6070" x1="10.302" x2="10.3123" y1="16.5" y2="18.4999">
            <stop stopColor="#8196CC" />
            <stop offset="1" stopColor="#DDE5FD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_3007_6070" x1="12.1511" x2="12.1614" y1="16.5" y2="18.4999">
            <stop stopColor="#8196CC" />
            <stop offset="1" stopColor="#DDE5FD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_3007_6070" x1="14" x2="14.0102" y1="16.5" y2="18.4999">
            <stop stopColor="#8196CC" />
            <stop offset="1" stopColor="#DDE5FD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_3007_6070" x1="11.5" x2="11.5" y1="-3.99995" y2="19">
            <stop stopColor="#A6BBF1" />
            <stop offset="0.827995" stopColor="#7283AD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_3007_6070" x1="10.5" x2="10.5" y1="11" y2="23">
            <stop stopColor="#A6BBF1" />
            <stop offset="1" stopColor="#7283AD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_3007_6070" x1="11.6651" x2="14.8371" y1="23.3378" y2="15.7146">
            <stop stopColor="#919DBB" />
            <stop offset="1" stopColor="#919DBB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_3007_6070" x1="10.0505" x2="9.95926" y1="13.6953" y2="11.7657">
            <stop stopColor="#859ACF" />
            <stop offset="1" stopColor="#D1DBF7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_3007_6070" x1="12.0484" x2="12.0484" y1="14.9589" y2="11.6265">
            <stop stopColor="white" stopOpacity="0.13" />
            <stop offset="1" stopColor="white" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_3007_6070" x1="9.29893" x2="14.7491" y1="13.4794" y2="13.4794">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.19042" stopColor="white" stopOpacity="0.388839" />
            <stop offset="0.489713" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_3007_6070" x1="9.29893" x2="14.7491" y1="12.8424" y2="12.8424">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.489713" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_3007_6070" x1="8.04678" x2="16.252" y1="9.17061" y2="10.3754">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Warehouse />
    </div>
  );
}

function VerticalNav22() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons8 />
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Remote Sign</p>
        </div>
      </div>
    </div>
  );
}

function Organization() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Organization">
      <div className="absolute bg-[#425799] h-[10px] left-[15px] rounded-[1px] top-[9px] w-[5px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_0px_#8396d2]" />
      </div>
      <div className="absolute bg-[#425799] h-[10px] left-[4px] rounded-[1px] top-[9px] w-[5px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_4px_0px_#8396d2]" />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[#455a9c] h-[2px] left-[calc(50%-5px)] rounded-tl-[1px] rounded-tr-[1px] top-[8px] translate-x-[-50%] w-[8px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[#455a9c] h-[2px] left-[calc(50%+5px)] rounded-tl-[1px] rounded-tr-[1px] top-[8px] translate-x-[-50%] w-[8px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[#4b68c5] h-[13px] left-1/2 rounded-tl-[1px] rounded-tr-[1px] top-[6px] translate-x-[-50%] w-[8px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[10px] rounded-tl-[1px] rounded-tr-[1px] size-[4px] top-[15px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[9px] rounded-tl-[1px] rounded-tr-[1px] size-[2px] top-[8px]" />
      <div className="absolute bg-[rgba(255,255,255,0.39)] left-[5px] rounded-tl-[1px] rounded-tr-[1px] size-[2px] top-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[9px] rounded-tl-[1px] rounded-tr-[1px] size-[2px] top-[11px]" />
      <div className="absolute bg-[rgba(255,255,255,0.39)] left-[5px] rounded-tl-[1px] rounded-tr-[1px] size-[2px] top-[15px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[13px] rounded-tl-[1px] rounded-tr-[1px] size-[2px] top-[8px]" />
      <div className="absolute bg-[rgba(255,255,255,0.39)] left-[17px] rounded-tl-[1px] rounded-tr-[1px] size-[2px] top-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0.55)] left-[13px] rounded-tl-[1px] rounded-tr-[1px] size-[2px] top-[11px]" />
      <div className="absolute bg-[rgba(255,255,255,0.39)] left-[17px] rounded-tl-[1px] rounded-tr-[1px] size-[2px] top-[15px]" />
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Organization />
    </div>
  );
}

function VerticalNav23() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons9 />
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Organization</p>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <VerticalNav20 />
      <VerticalNav22 />
      <VerticalNav23 />
    </div>
  );
}

function OtherModules1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Other Modules -2">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <List1 />
        </div>
      </div>
    </div>
  );
}

function Modules({ onNavigate, activeTab }: { onNavigate?: (module: string) => void; activeTab?: string }) {
  return (
    <div className="content-stretch flex h-[414px] items-center relative shrink-0 w-full" data-name="Modules">
      <Jobs1 onNavigate={onNavigate} activeTab={activeTab} />
      <Masters1 onNavigate={onNavigate} activeTab={activeTab} />
      <License1 />
      <Reports1 />
      <OtherModules />
      <OtherModules1 />
    </div>
  );
}

export default function SentinelModuleDropdown({ onNavigate, activeTab }: { onNavigate?: (module: string) => void; activeTab?: string }) {
  return (
    <div className="bg-[#10182c] relative size-full" data-name="Sentinel Module Dropdown">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Modules onNavigate={onNavigate} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}