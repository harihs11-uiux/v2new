import svgPaths from "./svg-8ijmsmcth2";

function Tab() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Navigation</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="double_arrow">
          <mask height="18" id="mask0_1565_48144" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48144)">
            <path d={svgPaths.p1cebca00} fill="var(--fill-0, #CDCFD3)" id="double_arrow_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Icon />
    </div>
  );
}

function ExpandedTitlebarActions() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Expanded Titlebar Actions">
      <NoOfIcons />
    </div>
  );
}

function SidebarExpandedTitlebar() {
  return (
    <div className="bg-[#242c40] h-[48px] relative shrink-0 w-full" data-name="Sidebar Expanded  Titlebar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[48px] items-center justify-between px-[8px] py-[14px] relative w-full">
          <Tab />
          <ExpandedTitlebarActions />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[16px] left-1/2 top-[4px] translate-x-[-50%] w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="Group 4339">
          <g filter="url(#filter0_i_1565_48285)" id="Rectangle 274261">
            <path d={svgPaths.pb26d980} fill="url(#paint0_linear_1565_48285)" />
          </g>
          <path d="M1.38456 6.25515H10.6154" data-figma-bg-blur-radius="4" id="Line 141" stroke="url(#paint1_linear_1565_48285)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 8.16778H10.6154" data-figma-bg-blur-radius="4" id="Line 142" stroke="url(#paint2_linear_1565_48285)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 10.0804H10.6154" data-figma-bg-blur-radius="4" id="Line 143" stroke="url(#paint3_linear_1565_48285)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 11.993H10.6154" data-figma-bg-blur-radius="4" id="Line 144" stroke="url(#paint4_linear_1565_48285)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 13.9056H6" data-figma-bg-blur-radius="4" id="Line 145" stroke="url(#paint5_linear_1565_48285)" strokeLinecap="round" strokeWidth="0.9" />
          <path d={svgPaths.pcfd4e80} fill="url(#paint6_linear_1565_48285)" id="Rectangle 274262" />
          <path d={svgPaths.p1301ce00} fill="url(#paint7_linear_1565_48285)" id="Rectangle 274304" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_1565_48285" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.219608 0 0 0 0 0.137255 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1565_48285" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48285" x1="6" x2="6" y1="0" y2="16">
            <stop offset="0.0844957" stopColor="#FF8B78" />
            <stop offset="1" stopColor="#F8503E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1565_48285" x1="6" x2="6" y1="6.25515" y2="7.25515">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1565_48285" x1="6" x2="6" y1="8.16778" y2="9.16778">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1565_48285" x1="6" x2="6" y1="10.0804" y2="11.0804">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1565_48285" x1="6" x2="6" y1="11.993" y2="12.993">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1565_48285" x1="3.69228" x2="3.69228" y1="13.9056" y2="14.9056">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1565_48285" x1="10.571" x2="7.78375" y1="1.09782" y2="4.22608">
            <stop stopColor="#FF7667" />
            <stop offset="1" stopColor="#FFC0BA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1565_48285" x1="3" x2="3" y1="1" y2="5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.43" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChecklistIconsImports() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Group />
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports />
    </div>
  );
}

function Header() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons1 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Invoice Info</p>
        </div>
      </div>
    </div>
  );
}

function ChecklistIconsImports1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checklist Icons Imports">
          <path d={svgPaths.p18c09ff0} fill="url(#paint0_linear_1565_48148)" id="Rectangle 274304" stroke="url(#paint1_linear_1565_48148)" strokeWidth="0.2" />
          <path d={svgPaths.p14eed200} data-figma-bg-blur-radius="4" id="Line 147" stroke="url(#paint2_linear_1565_48148)" strokeLinecap="round" strokeWidth="0.3" />
          <path d={svgPaths.p3ceb8aa0} data-figma-bg-blur-radius="4" id="Line 148" stroke="url(#paint3_linear_1565_48148)" strokeLinecap="round" strokeWidth="0.3" />
          <g filter="url(#filter2_i_1565_48148)" id="Rectangle 274411">
            <rect fill="var(--fill-0, #586A9C)" height="16" rx="2" width="16" x="4" y="4" />
          </g>
          <path d={svgPaths.p160e8a80} data-figma-bg-blur-radius="4" id="Line 145" opacity="0.9" stroke="url(#paint4_linear_1565_48148)" strokeLinecap="round" strokeWidth="0.9" />
          <path d={svgPaths.p14177b60} data-figma-bg-blur-radius="4" id="Line 146" opacity="0.9" stroke="url(#paint5_linear_1565_48148)" strokeLinecap="round" strokeWidth="0.9" />
          <path d={svgPaths.p30d4a280} data-figma-bg-blur-radius="4" id="Line 147_2" opacity="0.9" stroke="url(#paint6_linear_1565_48148)" strokeLinecap="round" strokeWidth="0.9" />
          <rect fill="url(#paint7_linear_1565_48148)" height="4.37556" id="Rectangle 274412" rx="1" width="12.2759" x="5.8623" y="6.21704" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18" id="filter2_i_1565_48148" width="16" x="4" y="4">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1565_48148" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48148" x1="7.77067" x2="7.63062" y1="6.12022" y2="10.8386">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.43" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1565_48148" x1="7.77067" x2="7.77067" y1="4.69145" y2="10.6879">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1565_48148" x1="4.89715" x2="8.72943" y1="15.4342" y2="18.3438">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1565_48148" x1="5.46565" x2="7.29375" y1="14.8978" y2="16.1274">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1565_48148" x1="12.0619" x2="12.0619" y1="11.5754" y2="13.4423">
            <stop offset="0.05" stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1565_48148" x1="12.0619" x2="12.0619" y1="13.7797" y2="15.6465">
            <stop offset="0.05" stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1565_48148" x1="12.0619" x2="12.0619" y1="16.0433" y2="17.9102">
            <stop offset="0.05" stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1565_48148" x1="12.0002" x2="12.0002" y1="4.57233" y2="10.5926">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons2 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Supplier Details</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[15.34px] left-[4px] top-[4.66px] w-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g filter="url(#filter0_i_1584_13695)" id="Vector 321">
            <path d={svgPaths.p84a5d80} fill="var(--fill-0, #ABBADF)" />
          </g>
          <rect data-figma-bg-blur-radius="3" fill="url(#paint0_linear_1584_13695)" height="1.97799" id="Rectangle 274441" rx="0.5" transform="matrix(0.797836 0.602875 -0.713249 0.70091 1.4108 11.1204)" width="4.6998" />
          <g id="Group 42032">
            <path d={svgPaths.p2a96980} fill="var(--fill-0, #7786AD)" id="Rectangle 274447" />
            <rect fill="var(--fill-0, #A4B3D9)" height="6.23421" id="Rectangle 274442" rx="0.5" transform="matrix(-0.741247 0.671233 -0.741247 -0.671233 13.4998 4.18461)" width="6.23421" />
            <rect data-figma-bg-blur-radius="13.0567" fill="var(--fill-0, #C6D4F5)" height="3.9" id="Rectangle 274448" rx="0.45" stroke="url(#paint1_linear_1584_13695)" strokeWidth="0.1" transform="matrix(-0.741247 0.671233 -0.741247 -0.671233 11.6927 4.23437)" width="3.9" x="-0.0741247" y="-2.98023e-09" />
            <g filter="url(#filter3_d_1584_13695)" id="Rectangle 274443">
              <rect fill="url(#paint2_linear_1584_13695)" height="2.00891" rx="0.345377" transform="matrix(0.751602 -0.659616 0.730707 0.682691 7.12937 4.41243)" width="0.690754" />
            </g>
            <g filter="url(#filter4_d_1584_13695)" id="Rectangle 274444">
              <rect fill="url(#paint3_linear_1584_13695)" height="2.00891" rx="0.345377" transform="matrix(0.751602 -0.659616 0.730707 0.682691 7.83811 3.69145)" width="0.690754" />
            </g>
            <g filter="url(#filter5_d_1584_13695)" id="Rectangle 274445">
              <rect fill="url(#paint4_linear_1584_13695)" height="2.00891" rx="0.345377" transform="matrix(0.751602 -0.659616 0.730707 0.682691 8.59727 3.04097)" width="0.690754" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.05957" id="filter0_i_1584_13695" width="13.8164" x="1.71366" y="9.09325">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="1.2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.396078 0 0 0 0 0.466667 0 0 0 0 0.666667 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1584_13695" />
          </filter>
          <clipPath id="bgblur_0_1584_13695_clip_path" transform="translate(2.77955 -8.31003)">
            <rect height="1.97799" rx="0.5" transform="matrix(0.797836 0.602875 -0.713249 0.70091 1.4108 11.1204)" width="4.6998" />
          </clipPath>
          <clipPath id="bgblur_1_1584_13695_clip_path" transform="translate(6.94779 11.3605)">
            <rect height="3.9" rx="0.45" transform="matrix(-0.741247 0.671233 -0.741247 -0.671233 11.6927 4.23437)" width="3.9" x="-0.0741247" y="-2.98023e-09" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.95563" id="filter3_d_1584_13695" width="4.08727" x="6.07928" y="2.89253">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.509804 0 0 0 0 0.576471 0 0 0 0 0.717647 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1584_13695" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1584_13695" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.95562" id="filter4_d_1584_13695" width="4.08727" x="6.78802" y="2.17155">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.509804 0 0 0 0 0.576471 0 0 0 0 0.717647 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1584_13695" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1584_13695" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.95563" id="filter5_d_1584_13695" width="4.08728" x="7.54718" y="1.52107">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.509804 0 0 0 0 0.576471 0 0 0 0 0.717647 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1584_13695" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1584_13695" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1584_13695" x1="2.12026" x2="2.34519" y1="-1.33144" y2="3.24211">
            <stop stopColor="#586A9C" />
            <stop offset="1" stopColor="#7487BB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1584_13695" x1="-0.285714" x2="5.3666" y1="0.363636" y2="3.28208">
            <stop stopColor="white" stopOpacity="0.35" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1584_13695" x1="0.345377" x2="0.345377" y1="0" y2="2.00891">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#C1CFF0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1584_13695" x1="0.345377" x2="0.345377" y1="0" y2="2.00891">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#C1CFF0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1584_13695" x1="0.345377" x2="0.345377" y1="0" y2="2.00891">
            <stop stopColor="#E3E3E3" />
            <stop offset="1" stopColor="#C1CFF0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChecklistIconsImports2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Icon1 />
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons3 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">SVB Details</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute bottom-0 left-0 right-[-2.65%] top-[-8.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <g id="Group 4342">
            <rect fill="url(#paint0_linear_1565_48261)" height="1.31986" id="Rectangle 274318" rx="0.65993" stroke="url(#paint1_linear_1565_48261)" strokeWidth="0.1" width="10.7163" x="2.88044" y="10.7062" />
            <rect fill="url(#paint2_linear_1565_48261)" height="1.31986" id="Rectangle 274319" rx="0.65993" stroke="url(#paint3_linear_1565_48261)" strokeWidth="0.1" width="10.7163" x="1.87642" y="12.0312" />
            <rect fill="url(#paint4_linear_1565_48261)" height="1.31986" id="Rectangle 274322" rx="0.65993" stroke="url(#paint5_linear_1565_48261)" strokeWidth="0.1" width="10.7163" x="3.88447" y="13.3264" />
            <rect fill="url(#paint6_linear_1565_48261)" height="1.31986" id="Rectangle 274323" rx="0.65993" stroke="url(#paint7_linear_1565_48261)" strokeWidth="0.1" width="10.7163" x="3.024" y="14.6591" />
            <rect fill="url(#paint8_linear_1565_48261)" height="1.31986" id="Rectangle 274324" rx="0.65993" stroke="url(#paint9_linear_1565_48261)" strokeWidth="0.1" width="10.7163" x="3.024" y="15.9726" />
            <g id="Group 4341">
              <ellipse cx="8.4907" cy="5.89106" fill="url(#paint10_linear_1565_48261)" id="Ellipse 2848" rx="4.40416" ry="4.54855" />
              <path d={svgPaths.p238afbc0} fill="url(#paint11_linear_1565_48261)" id="Shape 1" stroke="url(#paint12_linear_1565_48261)" strokeWidth="0.2" />
              <path d={svgPaths.p3c0bcb00} data-figma-bg-blur-radius="13.0567" fill="url(#paint13_linear_1565_48261)" fillOpacity="0.41" id="Shape 2" stroke="url(#paint14_linear_1565_48261)" strokeWidth="0.1" />
              <g filter="url(#filter1_d_1565_48261)" id="â¹">
                <path d={svgPaths.p3fe77800} fill="url(#paint15_linear_1565_48261)" />
              </g>
            </g>
            <path d={svgPaths.p3a9df680} fill="url(#paint16_linear_1565_48261)" id="Arrow 1" />
            <path d={svgPaths.p2e6fbb00} fill="url(#paint17_linear_1565_48261)" id="Arrow 2" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1565_48261_clip_path" transform="translate(8.39957 10.5791)">
              <path d={svgPaths.p3c0bcb00} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.2152" id="filter1_d_1565_48261" width="10.7726" x="2.85236" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.320502 0 0 0 0 0.387351 0 0 0 0 0.543333 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1565_48261" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1565_48261" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48261" x1="2.83044" x2="13.9603" y1="11.3661" y2="11.3661">
              <stop stopColor="#3A4A70" />
              <stop offset="0.485" stopColor="#6078B8" />
              <stop offset="0.792263" stopColor="#465987" />
              <stop offset="1" stopColor="#344366" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1565_48261" x1="2.83044" x2="14.0532" y1="11.3661" y2="11.3661">
              <stop stopColor="#576A9A" />
              <stop offset="0.484814" stopColor="#879CD2" />
              <stop offset="1" stopColor="#405381" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1565_48261" x1="1.82642" x2="12.9563" y1="12.6911" y2="12.6911">
              <stop stopColor="#3A4A70" />
              <stop offset="0.485" stopColor="#6078B8" />
              <stop offset="0.792263" stopColor="#465987" />
              <stop offset="1" stopColor="#344366" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1565_48261" x1="1.82642" x2="13.0492" y1="12.6911" y2="12.6911">
              <stop stopColor="#576A9A" />
              <stop offset="0.484814" stopColor="#879CD2" />
              <stop offset="1" stopColor="#405381" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1565_48261" x1="3.83447" x2="14.9644" y1="13.9863" y2="13.9863">
              <stop stopColor="#3A4A70" />
              <stop offset="0.485" stopColor="#6078B8" />
              <stop offset="0.792263" stopColor="#465987" />
              <stop offset="1" stopColor="#344366" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1565_48261" x1="3.83447" x2="15.0572" y1="13.9863" y2="13.9863">
              <stop stopColor="#576A9A" />
              <stop offset="0.484814" stopColor="#879CD2" />
              <stop offset="1" stopColor="#405381" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1565_48261" x1="2.974" x2="14.1039" y1="15.319" y2="15.319">
              <stop stopColor="#3A4A70" />
              <stop offset="0.485" stopColor="#6078B8" />
              <stop offset="0.792263" stopColor="#465987" />
              <stop offset="1" stopColor="#344366" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1565_48261" x1="2.974" x2="14.1968" y1="15.319" y2="15.319">
              <stop stopColor="#576A9A" />
              <stop offset="0.484814" stopColor="#879CD2" />
              <stop offset="1" stopColor="#405381" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1565_48261" x1="2.974" x2="14.1039" y1="16.6326" y2="16.6326">
              <stop stopColor="#3A4A70" />
              <stop offset="0.485" stopColor="#6078B8" />
              <stop offset="0.792263" stopColor="#465987" />
              <stop offset="1" stopColor="#344366" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1565_48261" x1="2.974" x2="14.1968" y1="16.6326" y2="16.6326">
              <stop stopColor="#576A9A" />
              <stop offset="0.484814" stopColor="#879CD2" />
              <stop offset="1" stopColor="#405381" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1565_48261" x1="8.31512" x2="8.42047" y1="0.322902" y2="10.4403">
              <stop stopColor="#42537E" />
              <stop offset="1" stopColor="#2E3B5C" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1565_48261" x1="8.063" x2="8.16835" y1="0.539408" y2="10.6568">
              <stop stopColor="#3D4F7B" />
              <stop offset="1" stopColor="#50669D" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1565_48261" x1="8.23858" x2="8.23858" y1="1.55902" y2="10.6561">
              <stop stopColor="#51689D" />
              <stop offset="1" stopColor="#4F649B" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1565_48261" x1="2.23218" x2="18.4117" y1="2.4776" y2="3.47572">
              <stop stopColor="#A6BBF1" />
              <stop offset="1" stopColor="#7283AD" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1565_48261" x1="2.91951" x2="14.0199" y1="-1.42251" y2="7.81067">
              <stop stopColor="white" stopOpacity="0.35" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1565_48261" x1="8.23864" x2="8.23864" y1="0.598067" y2="23.7203">
              <stop stopColor="#DEE6FD" />
              <stop offset="1" stopColor="#93B1FF" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1565_48261" x1="2.28753" x2="0.768734" y1="2.80835" y2="7.90738">
              <stop stopColor="#536CAB" />
              <stop offset="1" stopColor="#354468" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1565_48261" x1="14.843" x2="14.7058" y1="8.39812" y2="3.04425">
              <stop stopColor="#536CAB" />
              <stop offset="1" stopColor="#354468" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChecklistIconsImports3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Group1 />
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports3 />
    </div>
  );
}

function Header3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons4 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Charges</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute h-[17.358px] left-[6px] top-[3.32px] w-[14.103px]" data-name="icon">
      <div className="absolute bottom-[-14.42%] left-0 right-[-14.9%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
          <g id="icon">
            <g filter="url(#filter0_i_1584_13677)" id="Intersect">
              <path d={svgPaths.p195c0500} fill="var(--fill-0, #586A9C)" />
            </g>
            <path d={svgPaths.pa3e2380} data-figma-bg-blur-radius="4" id="Line 144" opacity="0.9" stroke="url(#paint0_linear_1584_13677)" strokeLinecap="round" strokeWidth="0.9" />
            <path d={svgPaths.p1e1d3680} data-figma-bg-blur-radius="4" id="Line 145" opacity="0.9" stroke="url(#paint1_linear_1584_13677)" strokeLinecap="round" strokeWidth="0.9" />
            <path d={svgPaths.p6b76f80} data-figma-bg-blur-radius="4" id="Line 146" opacity="0.9" stroke="url(#paint2_linear_1584_13677)" strokeLinecap="round" strokeWidth="0.9" />
            <path d={svgPaths.p2872f680} data-figma-bg-blur-radius="4" id="Line 147" opacity="0.9" stroke="url(#paint3_linear_1584_13677)" strokeLinecap="round" strokeWidth="0.9" />
            <path d={svgPaths.p364a6a00} fill="url(#paint4_linear_1584_13677)" id="Rectangle 274304" />
            <path d={svgPaths.pe23d80} fill="url(#paint5_linear_1584_13677)" id="Rectangle 274305" />
            <path d={svgPaths.p28037980} fill="url(#paint6_linear_1584_13677)" id="Rectangle 274306" />
            <path d={svgPaths.p14edc780} fill="url(#paint7_linear_1584_13677)" id="Rectangle 274307" />
            <ellipse cx="11.3324" cy="14.5692" data-figma-bg-blur-radius="2" fill="url(#paint8_linear_1584_13677)" fillOpacity="0.41" id="Shape 1" rx="2.77043" ry="2.78928" stroke="url(#paint9_linear_1584_13677)" strokeWidth="0.1" />
            <g filter="url(#filter6_d_1584_13677)" id="â¹">
              <path d={svgPaths.p286d5c00} fill="url(#paint10_linear_1584_13677)" shapeRendering="crispEdges" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.4851" id="filter0_i_1584_13677" width="12" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1584_13677" />
            </filter>
            <clipPath id="bgblur_0_1584_13677_clip_path" transform="translate(-6.51201 -9.72997)">
              <ellipse cx="11.3324" cy="14.5692" rx="2.77043" ry="2.78928" />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10.5848" id="filter6_d_1584_13677" width="9.74407" x="6.46045" y="9.27684">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.580392 0 0 0 0 0.870588 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1584_13677" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1584_13677" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1584_13677" x1="7.39974" x2="7.39974" y1="3.35754" y2="4.85754">
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1584_13677" x1="7.39974" x2="7.39974" y1="6.19156" y2="7.69156">
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1584_13677" x1="7.39974" x2="7.39974" y1="9.02533" y2="10.5253">
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1584_13677" x1="7.39974" x2="7.39974" y1="11.8591" y2="13.3591">
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1584_13677" x1="2.09473" x2="2.09473" y1="2.77551" y2="4.7233">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1584_13677" x1="2.09473" x2="2.09473" y1="5.6095" y2="7.55728">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1584_13677" x1="2.09473" x2="2.09473" y1="8.44328" y2="10.3911">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1584_13677" x1="2.09473" x2="2.09473" y1="11.2771" y2="13.2249">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1584_13677" x1="10.3165" x2="12.5147" y1="12.6737" y2="17.8841">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#BAC8E9" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1584_13677" x1="9.5" x2="15.7984" y1="6.17938" y2="19.1313">
              <stop stopColor="#BAC8E9" stopOpacity="0.4" />
              <stop offset="1" stopColor="#A7B6D8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1584_13677" x1="12.2409" x2="10.7026" y1="13.7076" y2="17.5674">
              <stop stopColor="white" />
              <stop offset="0.954632" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChecklistIconsImports4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Icon2 />
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports4 />
    </div>
  );
}

function Header4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons5 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Misc Sub Charges</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[66.35%_20.86%_22.84%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[66.35%_20.86%_22.84%_21.03%] rounded-[0.5px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[69.95%_60.81%_26.44%_24.66%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[69.95%_42.66%_26.44%_42.82%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[69.95%_22.68%_26.44%_60.98%] rounded-[6px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[51.89%_20.95%_37.3%_20.95%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[51.89%_20.95%_37.3%_20.95%] rounded-[0.5px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[55.5%_61.57%_40.9%_23.9%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[55.5%_43.42%_40.9%_42.06%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[55.5%_23.44%_40.9%_60.22%] rounded-[6px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[37.43%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[37.43%_20.86%_51.76%_21.03%] rounded-[0.5px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[41.04%_61.49%_55.36%_23.98%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[41.04%_43.33%_55.36%_42.14%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#e3e6ef] border-[0.9px] border-solid inset-[41.04%_23.36%_55.36%_60.3%] rounded-[6px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[24.17%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[#d5dae6] border-[0.9px] border-solid inset-[24.17%_64.45%_71.54%_21.03%] opacity-90 rounded-[6px]" />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[4px] top-[4px]">
      <div className="absolute inset-[16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g filter="url(#filter0_i_1565_48244)" id="Rectangle 274306">
            <path d={svgPaths.p1a4c1380} fill="var(--fill-0, #586A9C)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18" id="filter0_i_1565_48244" width="16" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1565_48244" />
            </filter>
          </defs>
        </svg>
      </div>
      <Group2 />
      <Group3 />
      <Group4 />
      <div className="absolute left-[11.94px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <g data-figma-bg-blur-radius="4" id="Ellipse 2863">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_1565_48185)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_1565_48185)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1565_48185_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48185" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop stopColor="#D1D6E4" />
              <stop offset="1" stopColor="#606F97" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1565_48185" x1="0.5" x2="0.5" y1="0" y2="1.91116">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[13.47px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <g data-figma-bg-blur-radius="4" id="Ellipse 2864">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_1565_48057)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_1565_48057)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1565_48057_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48057" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop stopColor="#D5D9E6" />
              <stop offset="1" stopColor="#606F97" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1565_48057" x1="0.5" x2="0.5" y1="0" y2="1.91116">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[4.283px] right-[4px] top-[4px] w-[4.09px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p39d5e8f0} fill="url(#paint0_linear_1565_48162)" id="Rectangle 274262" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48162" x1="3.26346" x2="-1.14494" y1="-1.1893" y2="3.84843">
              <stop stopColor="#7C8CB8" />
              <stop offset="1" stopColor="#8091B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChecklistIconsImports5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Group7 />
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports5 />
    </div>
  );
}

function Header5() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons6 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Item Details</p>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[16.882px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[14.673px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
        <g id="Group 42023">
          <g filter="url(#filter0_i_1584_13706)" id="Rectangle 274261">
            <path d={svgPaths.p103c4a00} fill="var(--fill-0, #586A9C)" />
          </g>
          <path d="M4.20142 5.00775L10 5.00775" data-figma-bg-blur-radius="4" id="Line 141" opacity="0.9" stroke="url(#paint0_linear_1584_13706)" strokeLinecap="round" strokeWidth="0.9" />
          <path d={svgPaths.p17201f00} data-figma-bg-blur-radius="4" id="Line 142" opacity="0.9" stroke="url(#paint1_linear_1584_13706)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M4.09045 9.80121L10 9.80121" data-figma-bg-blur-radius="4" id="Line 143" opacity="0.9" stroke="url(#paint2_linear_1584_13706)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M4.09045 12.2996L10 12.3448" data-figma-bg-blur-radius="4" id="Line 144" opacity="0.9" stroke="url(#paint3_linear_1584_13706)" strokeLinecap="round" strokeWidth="0.9" />
          <circle cx="10.904" cy="13.1136" data-figma-bg-blur-radius="4.7" fill="url(#paint4_linear_1584_13706)" fillOpacity="0.25" id="Shape 1" r="3.76871" />
          <path d={svgPaths.p2c225480} fill="var(--fill-0, #DDE1EB)" id="Union" />
          <rect fill="url(#paint5_linear_1584_13706)" height="0.91272" id="Rectangle 274339" rx="0.45636" width="1.13757" x="1.43713" y="4.55139" />
          <path d="M4.20142 2.61102L10 2.61102" data-figma-bg-blur-radius="4" id="Line 141_2" opacity="0.9" stroke="url(#paint6_linear_1584_13706)" strokeLinecap="round" strokeWidth="0.9" />
          <rect fill="url(#paint7_linear_1584_13706)" height="0.91272" id="Rectangle 274343" rx="0.45636" width="1.13757" x="1.43713" y="2.15466" />
          <rect fill="url(#paint8_linear_1584_13706)" height="0.91272" id="Rectangle 274340" rx="0.45636" width="1.13757" x="1.43713" y="6.94812" />
          <rect fill="url(#paint9_linear_1584_13706)" height="0.91272" id="Rectangle 274341" rx="0.45636" width="1.13757" x="1.43713" y="9.34485" />
          <rect fill="url(#paint10_linear_1584_13706)" height="0.91272" id="Rectangle 274342" rx="0.45636" width="1.13757" x="1.43713" y="11.8432" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.3448" id="filter0_i_1584_13706" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1584_13706" />
          </filter>
          <clipPath id="bgblur_0_1584_13706_clip_path" transform="translate(-2.43525 -4.64485)">
            <circle cx="10.904" cy="13.1136" r="3.76871" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1584_13706" x1="7.13276" x2="7.13276" y1="4.61591" y2="6.11591">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1584_13706" x1="7.16767" x2="7.17245" y1="7.02226" y2="8.52225">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1584_13706" x1="7.0779" x2="7.0779" y1="9.40936" y2="10.9094">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1584_13706" x1="7.0809" x2="7.06941" y1="11.9306" y2="13.4306">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1584_13706" x1="10.7583" x2="11.0496" y1="9.34485" y2="16.8823">
            <stop stopColor="#B8C7E9" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1584_13706" x1="2.00592" x2="2.00592" y1="4.55139" y2="5.46411">
            <stop stopColor="#ECEEF4" />
            <stop offset="1" stopColor="#697AA7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1584_13706" x1="7.13276" x2="7.13276" y1="2.21918" y2="3.71918">
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1584_13706" x1="2.00592" x2="2.00592" y1="2.15466" y2="3.06738">
            <stop stopColor="#ECEEF4" />
            <stop offset="1" stopColor="#697AA7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1584_13706" x1="2.00592" x2="2.00592" y1="6.94812" y2="7.86084">
            <stop stopColor="#ECEEF4" />
            <stop offset="1" stopColor="#697AA7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1584_13706" x1="2.00592" x2="2.00592" y1="9.34485" y2="10.2576">
            <stop stopColor="#ECEEF4" />
            <stop offset="1" stopColor="#697AA7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1584_13706" x1="2.00592" x2="2.00592" y1="11.8432" y2="12.756">
            <stop stopColor="#ECEEF4" />
            <stop offset="1" stopColor="#697AA7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChecklistIconsImports6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Group6 />
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports6 />
    </div>
  );
}

function Header6() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons7 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Statements</p>
        </div>
      </div>
    </div>
  );
}

function ChecklistIconsImports7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checklist Icons Imports">
          <path d={svgPaths.p18c09ff0} fill="url(#paint0_linear_1565_48065)" id="Rectangle 274304" stroke="url(#paint1_linear_1565_48065)" strokeWidth="0.2" />
          <path d={svgPaths.p14eed200} data-figma-bg-blur-radius="4" id="Line 147" stroke="url(#paint2_linear_1565_48065)" strokeLinecap="round" strokeWidth="0.3" />
          <path d={svgPaths.p3ceb8aa0} data-figma-bg-blur-radius="4" id="Line 148" stroke="url(#paint3_linear_1565_48065)" strokeLinecap="round" strokeWidth="0.3" />
          <g id="icon">
            <g id="Group 4345">
              <g filter="url(#filter2_i_1565_48065)" id="Rectangle 274327">
                <path d={svgPaths.p20039680} fill="url(#paint4_linear_1565_48065)" />
              </g>
              <path d={svgPaths.p34b72e80} fill="var(--fill-0, #ABBADF)" id="Rectangle 274328" stroke="var(--stroke-0, #A9BCE3)" strokeWidth="0.1" />
              <path d={svgPaths.p3b5b4a40} fill="var(--fill-0, #DDE8FF)" id="Rectangle 274329" stroke="var(--stroke-0, #BBC8E3)" strokeWidth="0.1" />
              <path d={svgPaths.pdb3c500} fill="var(--fill-0, #ABBADF)" id="Rectangle 274330" stroke="var(--stroke-0, #BBC8E3)" strokeWidth="0.1" />
              <path d={svgPaths.p1ade8480} fill="var(--fill-0, #93A0BF)" id="Rectangle 274331" />
              <path d={svgPaths.p3bf6b700} fill="var(--fill-0, #C0CDEC)" id="Rectangle 274332" />
            </g>
            <g data-figma-bg-blur-radius="4" filter="url(#filter3_i_1565_48065)" id="Rectangle 274326">
              <path d={svgPaths.p800a200} fill="url(#paint5_linear_1565_48065)" />
            </g>
            <path d={svgPaths.pc21bd00} fill="url(#paint6_linear_1565_48065)" id="Rectangle 274304_2" />
            <path d={svgPaths.p2a9ac340} data-figma-bg-blur-radius="4" id="Line 147_2" stroke="url(#paint7_linear_1565_48065)" strokeLinecap="round" strokeWidth="0.3" />
            <path d={svgPaths.p2a8b6800} data-figma-bg-blur-radius="4" id="Line 148_2" stroke="url(#paint8_linear_1565_48065)" strokeLinecap="round" strokeWidth="0.3" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.1414" id="filter2_i_1565_48065" width="14.1726" x="4.9137" y="3">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.356528 0 0 0 0 0.419569 0 0 0 0 0.566667 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1565_48065" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.5755" id="filter3_i_1565_48065" width="15.6314" x="0.913696" y="-1">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="1.15" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1565_48065" />
          </filter>
          <clipPath id="bgblur_0_1565_48065_clip_path" transform="translate(-0.913696 1)">
            <path d={svgPaths.p800a200} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48065" x1="7.77067" x2="7.63062" y1="6.12022" y2="10.8386">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.43" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1565_48065" x1="7.77067" x2="7.77067" y1="4.69145" y2="10.6879">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1565_48065" x1="4.89715" x2="8.72943" y1="15.4342" y2="18.3438">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1565_48065" x1="5.46565" x2="7.29375" y1="14.8978" y2="16.1274">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1565_48065" x1="12" x2="20.3675" y1="3" y2="31.7658">
            <stop stopColor="#586A9C" />
            <stop offset="1" stopColor="#586A9C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1565_48065" x1="8.72939" x2="8.72939" y1="3" y2="21.9541">
            <stop stopColor="#586A9C" />
            <stop offset="1" stopColor="#7487BB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1565_48065" x1="7.63062" x2="7.63062" y1="2.99994" y2="10.8136">
            <stop stopColor="#E0E0E0" />
            <stop offset="1" stopColor="#697BAF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1565_48065" x1="4.89715" x2="9" y1="15.4092" y2="17.9999">
            <stop stopColor="#7D8EBF" />
            <stop offset="1" stopColor="#8896BD" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1565_48065" x1="5.46565" x2="7.35386" y1="14.8728" y2="16.0375">
            <stop stopColor="#7D8EBF" />
            <stop offset="1" stopColor="#8896BD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports7 />
    </div>
  );
}

function Header7() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons8 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Supporting Documents</p>
        </div>
      </div>
    </div>
  );
}

function ExpandedSectionCount() {
  return (
    <div className="bg-[#242c40] content-stretch flex flex-col gap-[8px] h-[1330px] items-start overflow-x-clip overflow-y-auto px-0 py-[12px] relative shrink-0 w-full" data-name="Expanded Section Count">
      <Header />
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Header6 />
      <Header7 />
    </div>
  );
}

function ChecklistIconsImports8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checklist Icons Imports">
          <path d={svgPaths.p18c09ff0} fill="url(#paint0_linear_1565_48202)" id="Rectangle 274304" stroke="url(#paint1_linear_1565_48202)" strokeWidth="0.2" />
          <path d={svgPaths.p14eed200} data-figma-bg-blur-radius="4" id="Line 147" stroke="url(#paint2_linear_1565_48202)" strokeLinecap="round" strokeWidth="0.3" />
          <path d={svgPaths.p3ceb8aa0} data-figma-bg-blur-radius="4" id="Line 148" stroke="url(#paint3_linear_1565_48202)" strokeLinecap="round" strokeWidth="0.3" />
          <g id="icon">
            <g filter="url(#filter2_i_1565_48202)" id="Shape 1">
              <ellipse cx="11.644" cy="12.4165" fill="var(--fill-0, #1B76FF)" fillOpacity="0.82" rx="7.98848" ry="8" />
            </g>
            <circle cx="11.6439" cy="12.4165" fill="url(#paint4_linear_1565_48202)" fillOpacity="0.33" id="Shape 2" r="5.9" stroke="url(#paint5_linear_1565_48202)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" />
            <path d={svgPaths.p1f293580} fill="url(#paint6_linear_1565_48202)" id="+" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter2_i_1565_48202" width="15.977" x="3.65552" y="4.41653">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="1.85" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.27238 0 0 0 0 0.691426 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1565_48202" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48202" x1="7.77067" x2="7.63062" y1="6.12022" y2="10.8386">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.43" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1565_48202" x1="7.77067" x2="7.77067" y1="4.69145" y2="10.6879">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1565_48202" x1="4.89715" x2="8.72943" y1="15.4342" y2="18.3438">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1565_48202" x1="5.46565" x2="7.29375" y1="14.8978" y2="16.1274">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1565_48202" x1="11.6439" x2="11.6439" y1="6.41653" y2="27.3477">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#579AFF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1565_48202" x1="8.22882" x2="12.9583" y1="7.04383" y2="16.973">
            <stop stopColor="white" stopOpacity="0.5" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1565_48202" x1="11.644" x2="11.1204" y1="9.41653" y2="18.7572">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.12" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports8 />
    </div>
  );
}

function VerticalNav() {
  return (
    <div className="bg-[#242c40] relative rounded-[4px] shrink-0 w-full" data-name="Vertical Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <NoOfIcons9 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Add Section</p>
        </div>
      </div>
    </div>
  );
}

function NavigatingSections() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Navigating Sections">
      <ExpandedSectionCount />
      <VerticalNav />
    </div>
  );
}

function ScrollBar() {
  return (
    <div className="absolute h-[52px] opacity-0 right-[3px] top-[calc(50%-339.5px)] translate-y-[-50%] w-[6px]" data-name="Scroll Bar">
      <div className="absolute bg-[#545d76] inset-0 rounded-[22px]" data-name="Vertical Bar" />
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="basis-0 bg-[#242c40] grow min-h-px min-w-px relative shrink-0 w-[240px]" data-name="Sidebar Skeleton">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip px-[12px] py-0 relative rounded-[inherit] w-[240px]">
        <SidebarExpandedTitlebar />
        <NavigatingSections />
        <ScrollBar />
      </div>
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Sidebar">
      <SidebarSkeleton />
    </div>
  );
}