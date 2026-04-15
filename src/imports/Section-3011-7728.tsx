import svgPaths from "./svg-054bfomqvg";

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[799px]">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-nowrap">Jobs Overview</p>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 2">
          <path d={svgPaths.p1e628400} fill="var(--fill-0, #626776)" id="dashboard_customize" />
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_3007_17089" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_17089)">
            <path d={svgPaths.p1e488580} fill="var(--fill-0, #626776)" id="autorenew" />
            <g id="indicator">
              <circle cx="15.1875" cy="2.8125" fill="var(--fill-0, #CF3B3B)" fillOpacity="0.19" id="Ellipse 86" r="2.8125" />
              <circle cx="15.1881" cy="2.8124" fill="var(--fill-0, #CF3B3B)" id="Ellipse 85" r="1.6875" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton />
      <IconSkeleton1 />
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16981)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16981">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative shrink-0 w-[158px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">{` Last 3 months`}</p>
      <DropdownIcon />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <NoOfIcons />
      <Dropdown />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Shapes() {
  return (
    <div className="absolute h-[16px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Shapes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="Shapes">
          <path d={svgPaths.p39a43b00} fill="url(#paint0_linear_3007_16915)" id="Ellipse 2840" />
          <g id="Rectangle 274140">
            <g filter="url(#filter0_i_3007_16915)">
              <path d={svgPaths.pc8cec00} fill="url(#paint1_linear_3007_16915)" />
            </g>
            <path d={svgPaths.p203ac500} stroke="url(#paint2_linear_3007_16915)" strokeWidth="0.2" />
          </g>
          <path d={svgPaths.p2fe6a600} data-figma-bg-blur-radius="4" fill="url(#paint3_linear_3007_16915)" fillOpacity="0.62" id="Rectangle 274141" stroke="url(#paint4_linear_3007_16915)" strokeWidth="0.2" />
          <g data-figma-bg-blur-radius="5.2" filter="url(#filter2_d_3007_16915)" id="Rectangle 274260">
            <rect fill="url(#paint5_linear_3007_16915)" height="2.66667" rx="1" shapeRendering="crispEdges" width="2.36842" x="8.05263" y="8.53333" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.3984" id="filter0_i_3007_16915" width="18" x="0" y="4.60156">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.380392 0 0 0 0 0.72549 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_16915" />
          </filter>
          <clipPath id="bgblur_0_3007_16915_clip_path" transform="translate(4 1.86667)">
            <path d={svgPaths.p2fe6a600} />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.0667" id="filter2_d_3007_16915" width="12.7684" x="2.85263" y="3.33333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.201389 0 0 0 0 0.349959 0 0 0 0 0.483333 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3007_16915" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_3007_16915" mode="normal" result="shape" />
          </filter>
          <clipPath id="bgblur_1_3007_16915_clip_path" transform="translate(-2.85263 -3.33333)">
            <rect height="2.66667" rx="1" width="2.36842" x="8.05263" y="8.53333" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_16915" x1="8.86855" x2="9.23037" y1="-6.1943e-09" y2="11.6804">
            <stop stopColor="#75BEFF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_16915" x1="9" x2="8.05644" y1="0.450782" y2="22.6738">
            <stop stopColor="#75BEFF" />
            <stop offset="0.362664" stopColor="#75BEFF" />
            <stop offset="1" stopColor="#67A8E1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3007_16915" x1="9" x2="9" y1="5" y2="16">
            <stop stopColor="#AFD9FF" />
            <stop offset="1" stopColor="#ABD0F2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_16915" x1="9" x2="9.05054" y1="-5.44762" y2="9.59983">
            <stop stopColor="#5DADF4" />
            <stop offset="0.649512" stopColor="#B0D8FC" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3007_16915" x1="7.65" x2="7.29872" y1="19.0145" y2="0.673446">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_3007_16915" x1="9.23684" x2="8.9676" y1="8.53333" y2="11.7306">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.29" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Shapes />
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons1 />
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#626776] text-[14px] text-nowrap">Jobs Handled</p>
    </div>
  );
}

function HeadingUtilities() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="Heading & Utilities">
      <Heading />
    </div>
  );
}

function MetricsCard() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Jobs Created</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">100</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard1() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Checklist Prepared</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">50</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard2() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">BOE Filed</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard3() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Metrics Card">
      <MetricsCard />
      <MetricsCard1 />
      <MetricsCard2 />
    </div>
  );
}

function MetricsCard4() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">BOE Amendments</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard5() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">BOE Late Filed</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard6() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">RMS</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard7() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Metrics Card">
      <MetricsCard4 />
      <MetricsCard5 />
      <MetricsCard6 />
    </div>
  );
}

function MetricsCard8() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Non RMS</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard9() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px opacity-0 relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">RMS</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard10() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px opacity-0 relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Name</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard11() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Metrics Card">
      <MetricsCard8 />
      <MetricsCard9 />
      <MetricsCard10 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card">
      <MetricsCard3 />
      <MetricsCard7 />
      <MetricsCard11 />
    </div>
  );
}

function CardRows() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Rows">
      <Card />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <HeadingUtilities />
      <CardRows />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[3px] size-[18px] top-1/2 translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group 42063">
          <g filter="url(#filter0_i_3007_17100)" id="Ellipse 2899">
            <circle cx="8.47059" cy="8.47059" fill="url(#paint0_linear_3007_17100)" r="8.47059" />
          </g>
          <circle cx="9.52941" cy="9.52941" data-figma-bg-blur-radius="4" fill="url(#paint1_linear_3007_17100)" fillOpacity="0.4" id="Ellipse 2898" r="8.47059" />
          <path d={svgPaths.pe549100} fill="var(--fill-0, white)" id="exclamation" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.9412" id="filter0_i_3007_17100" width="16.9412" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.825477 0 0 0 0 0.187048 0 0 0 0 0.116112 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_17100" />
          </filter>
          <clipPath id="bgblur_0_3007_17100_clip_path" transform="translate(2.94118 2.94118)">
            <circle cx="9.52941" cy="9.52941" r="8.47059" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_17100" x1="8.47059" x2="8.47059" y1="0" y2="16.9412">
            <stop offset="0.0844957" stopColor="#FF9C8C" />
            <stop offset="1" stopColor="#B74F40" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_17100" x1="0.529412" x2="12.1765" y1="2.11765" y2="18.5294">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconSkeleton3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Group />
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons2 />
      <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#626776] text-[14px] text-nowrap">
        <p className="leading-[18px] overflow-ellipsis overflow-hidden">Pending Jobs : 1188</p>
      </div>
    </div>
  );
}

function HeadingUtilities1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="Heading & Utilities">
      <Heading1 />
    </div>
  );
}

function MetricsCard12() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_0px_6px_0px_#b0bce0] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Checklist Preparation</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard13() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Checklist Approval</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard14() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Icegate Ack.</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard15() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Query Reply</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard16() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Negative Ack Resolution</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard17() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Metrics Card">
      <MetricsCard12 />
      <MetricsCard13 />
      <MetricsCard14 />
      <MetricsCard15 />
      <MetricsCard16 />
    </div>
  );
}

function MetricsCard18() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">IGM Regularize</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard19() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">First Copy</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard20() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Examination</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard21() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Duty payment</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard22() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">DO Collection</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard23() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Metrics Card">
      <MetricsCard18 />
      <MetricsCard19 />
      <MetricsCard20 />
      <MetricsCard21 />
      <MetricsCard22 />
    </div>
  );
}

function MetricsCard24() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">OOC</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard25() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Gatepass</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard26() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Cargo Delivery</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard27() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px opacity-0 relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Cargo Delivery</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard28() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px opacity-0 relative rounded-[4px] shrink-0" data-name="Metrics Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-start not-italic p-[8px] relative size-full">
          <p className="leading-[16px] relative shrink-0 text-[#050e25] text-[12px] w-full">Name</p>
          <p className="leading-[28px] relative shrink-0 text-[#3874ff] text-[20px] w-full">99</p>
        </div>
      </div>
    </div>
  );
}

function MetricsCard29() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Metrics Card">
      <MetricsCard24 />
      <MetricsCard25 />
      <MetricsCard26 />
      <MetricsCard27 />
      <MetricsCard28 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card">
      <MetricsCard17 />
      <MetricsCard23 />
      <MetricsCard29 />
    </div>
  );
}

function CardRows1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Rows">
      <Card1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[856px]">
      <HeadingUtilities1 />
      <CardRows1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="flex h-[254px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[254px]">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(208, 213, 227, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 254 1">
                <line id="Line 1449" stroke="var(--stroke-0, #D0D5E3)" x2="254" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#ebeef7] relative rounded-[8px] size-full" data-name="Section">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative size-full">
          <Frame3 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}