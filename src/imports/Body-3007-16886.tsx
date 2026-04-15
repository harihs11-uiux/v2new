import svgPaths from "./svg-mn5ggoluqe";
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

function ArrowDropdown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown />
    </div>
  );
}

function FilterDropdown() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Branch : Chennai</p>
      <ActionIcon />
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown1 />
    </div>
  );
}

function FilterDropdown1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Mode of Transport : All</p>
      <ActionIcon1 />
    </div>
  );
}

function ArrowDropdown2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown2 />
    </div>
  );
}

function FilterDropdown2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Importer : All</p>
      <ActionIcon2 />
    </div>
  );
}

function FilterChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filter Chips">
      <FilterDropdown />
      <FilterDropdown1 />
      <FilterDropdown2 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">Apply Filter</p>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[26px]" data-name="seperator">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(208, 213, 227, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 1">
                  <line id="seperator" stroke="var(--stroke-0, #D0D5E3)" x2="26" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FilterChips />
    </div>
  );
}

function FilterListOff() {
  return (
    <div className="absolute h-[14px] left-[11.11%] right-[11.11%] top-1/2 translate-y-[-50%]" data-name="filter_list_off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="filter_list_off">
          <path d={svgPaths.pbf27c00} fill="var(--fill-0, #3874FF)" id="filter_list_off_2" />
        </g>
      </svg>
    </div>
  );
}

function ClearFIlter() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Clear FIlter">
      <FilterListOff />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <ClearFIlter />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px]">Clear Filter</p>
      </div>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_3007_17096" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_17096)">
            <path d={svgPaths.p1345fc00} fill="var(--fill-0, white)" id="file_download" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3874ff] content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Download</p>
      </div>
    </div>
  );
}

function FilterBar() {
  return (
    <div className="bg-[#ebeef7] h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Filter bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Content />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[799px]">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-nowrap">Jobs Overview</p>
    </div>
  );
}

function IconSkeleton1() {
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

function IconSkeleton2() {
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

function NoOfIcons2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton1 />
      <IconSkeleton2 />
    </div>
  );
}

function ArrowDropdown3() {
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
      <ArrowDropdown3 />
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <NoOfIcons2 />
      <Dropdown />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
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

function IconSkeleton3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Shapes />
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons3 />
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

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <HeadingUtilities />
      <CardRows />
    </div>
  );
}

function Group3() {
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

function IconSkeleton4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Group3 />
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons4 />
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

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[856px]">
      <HeadingUtilities1 />
      <CardRows1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame16 />
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
      <Frame17 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#ebeef7] relative rounded-[8px] shrink-0 w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame19 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
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

function IconSkeleton5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Group4 />
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons5 />
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-nowrap">{`Pending Job Aging `}</p>
    </div>
  );
}

function ArrowDropdown4() {
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

function DropdownIcon1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown4 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative shrink-0 w-[149px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">{` Last 3 months`}</p>
      <DropdownIcon1 />
    </div>
  );
}

function IconSkeleton6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 2">
          <mask height="16" id="mask0_3007_16985" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_3007_16985)">
            <path d={svgPaths.p1aa3e880} fill="var(--fill-0, #626776)" id="autorenew" />
            <g id="indicator">
              <circle cx="13.5" cy="2.5" fill="var(--fill-0, #CF3B3B)" fillOpacity="0.19" id="Ellipse 86" r="2.5" />
              <circle cx="13.5006" cy="2.49991" fill="var(--fill-0, #CF3B3B)" id="Ellipse 85" r="1.5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_3007_17082" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_17082)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton6 />
      <IconSkeleton7 />
    </div>
  );
}

function HeadingUtilities2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="Heading & Utilities">
      <Heading2 />
      <Dropdown1 />
      <NoOfIcons6 />
    </div>
  );
}

function ArrowDropdown5() {
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

function DropdownIcon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown5 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">Checklist Preparation (99)</p>
          <DropdownIcon2 />
        </div>
      </div>
    </div>
  );
}

function GraphFilter() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Graph Filter">
      <Dropdown2 />
    </div>
  );
}

function GraphBase() {
  return (
    <div className="absolute content-stretch flex h-[236px] items-center justify-between left-[135px] right-[6.33px] top-[calc(50%-8.5px)] translate-y-[-50%]" data-name="Graph Base">
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[10px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle} />
            <div aria-hidden="true" className="absolute border-[#e7ac30] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">02</p>
    </div>
  );
}

function Parameter() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0 w-[172px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">0-2 days</p>
      </div>
      <Bar />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[449.545px] left-[-30px] top-[-45px] w-[75.337px]">
      <div className="absolute inset-[-0.16%_0_0_-0.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 451">
          <g id="Frame 42210">
            <line id="Line 1359" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="75.691" y2="0.353553" />
            <line id="Line 1360" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="83.0284" y2="7.69096" />
            <line id="Line 1361" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="90.3658" y2="15.0284" />
            <line id="Line 1362" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="97.7032" y2="22.3658" />
            <line id="Line 1363" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="105.041" y2="29.7032" />
            <line id="Line 1364" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="112.378" y2="37.0406" />
            <line id="Line 1365" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="119.715" y2="44.378" />
            <line id="Line 1366" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="127.053" y2="51.7154" />
            <line id="Line 1367" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="134.39" y2="59.0528" />
            <line id="Line 1368" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="141.728" y2="66.3902" />
            <line id="Line 1369" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="149.065" y2="73.7276" />
            <line id="Line 1370" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="156.402" y2="81.065" />
            <line id="Line 1371" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="163.74" y2="88.4024" />
            <line id="Line 1372" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="171.077" y2="95.7398" />
            <line id="Line 1373" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="178.415" y2="103.077" />
            <line id="Line 1374" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="185.752" y2="110.415" />
            <line id="Line 1375" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="193.089" y2="117.752" />
            <line id="Line 1376" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="200.427" y2="125.089" />
            <line id="Line 1377" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="207.764" y2="132.427" />
            <line id="Line 1378" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="215.102" y2="139.764" />
            <line id="Line 1379" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="222.439" y2="147.102" />
            <line id="Line 1380" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="229.776" y2="154.439" />
            <line id="Line 1381" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="237.114" y2="161.776" />
            <line id="Line 1382" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="244.451" y2="169.114" />
            <line id="Line 1383" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="251.789" y2="176.451" />
            <line id="Line 1384" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="259.126" y2="183.789" />
            <line id="Line 1385" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="266.463" y2="191.126" />
            <line id="Line 1386" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="273.801" y2="198.463" />
            <line id="Line 1387" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="281.138" y2="205.801" />
            <line id="Line 1388" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="288.476" y2="213.138" />
            <line id="Line 1389" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="295.813" y2="220.476" />
            <line id="Line 1390" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="303.15" y2="227.813" />
            <line id="Line 1391" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="310.488" y2="235.15" />
            <line id="Line 1392" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="317.825" y2="242.488" />
            <line id="Line 1393" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="325.163" y2="249.825" />
            <line id="Line 1394" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="332.5" y2="257.163" />
            <line id="Line 1395" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="339.837" y2="264.5" />
            <line id="Line 1396" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="347.175" y2="271.837" />
            <line id="Line 1397" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="354.512" y2="279.175" />
            <line id="Line 1398" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="361.85" y2="286.512" />
            <line id="Line 1399" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="369.187" y2="293.85" />
            <line id="Line 1400" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="376.524" y2="301.187" />
            <line id="Line 1401" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="383.862" y2="308.524" />
            <line id="Line 1402" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="391.199" y2="315.862" />
            <line id="Line 1403" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="398.537" y2="323.199" />
            <line id="Line 1404" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="405.874" y2="330.537" />
            <line id="Line 1405" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="413.211" y2="337.874" />
            <line id="Line 1406" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="420.549" y2="345.211" />
            <line id="Line 1407" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="427.886" y2="352.549" />
            <line id="Line 1408" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="435.224" y2="359.886" />
            <line id="Line 1409" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="442.561" y2="367.224" />
            <line id="Line 1410" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="449.898" y2="374.561" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Pattern() {
  return (
    <div className="overflow-clip relative size-full" data-name="Pattern">
      <Frame4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
      <div className="absolute flex h-[20px] items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[195px] rotate-[90deg] w-[20px]">
          <div className="bg-[#e87a3b] border-[#e87a3b] border-[2px_0px_0px] border-solid rounded-tl-[2px] rounded-tr-[2px] size-full" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute flex h-[20px] items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[195px] rotate-[90deg] w-[20px]">
          <Pattern />
        </div>
      </div>
    </div>
  );
}

function Bar1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <Frame22 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">25</p>
    </div>
  );
}

function Parameter1() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0 w-[356px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">3-5 days</p>
      </div>
      <Bar1 />
    </div>
  );
}

function Bar2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[207px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle1} />
            <div aria-hidden="true" className="absolute border-[#e25840] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">07</p>
    </div>
  );
}

function Parameter2() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0 w-[368px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">6-10 days</p>
      </div>
      <Bar2 />
    </div>
  );
}

function Bar3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[164px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle2} />
            <div aria-hidden="true" className="absolute border-[#a72f2f] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">14</p>
    </div>
  );
}

function Parameter3() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0 w-[324px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">{`>10 days`}</p>
      </div>
      <Bar3 />
    </div>
  );
}

function Parameter4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[236px] items-start justify-between left-0 top-0 w-[375px]" data-name="Parameter">
      <Parameter />
      <Parameter1 />
      <Parameter2 />
      <Parameter3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] left-[162px] not-italic text-[#626776] text-[10px] text-nowrap top-[241px] w-[217px]" data-name="Footer">
      <p className="relative shrink-0">5</p>
      <p className="relative shrink-0">10</p>
      <p className="relative shrink-0">15</p>
      <p className="relative shrink-0">20</p>
      <p className="relative shrink-0">25</p>
      <p className="relative shrink-0">30</p>
      <p className="relative shrink-0">35</p>
      <p className="relative shrink-0">40</p>
    </div>
  );
}

function Graph() {
  return (
    <div className="h-[253px] relative shrink-0 w-full" data-name="Graph">
      <GraphBase />
      <Parameter4 />
      <Footer />
    </div>
  );
}

function HorizontalGraph() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Horizontal Graph">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[16px] relative size-full">
          <GraphFilter />
          <Graph />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="basis-0 bg-[#ebeef7] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <HeadingUtilities2 />
          <HorizontalGraph />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_16.67%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Group 42024">
          <rect fill="var(--fill-0, #FE9E69)" height="8.9198" id="Rectangle 274401" rx="0.244343" transform="matrix(-0.511437 0.859321 0.894949 0.446169 8.01721 4.16043)" width="0.488685" />
          <rect fill="var(--fill-0, #FE9C66)" height="8.30673" id="Rectangle 274401_2" rx="0.244343" transform="matrix(0.511437 0.859321 -0.894949 0.446169 8.09692 4.12237)" width="0.488685" />
          <rect fill="url(#paint0_linear_3007_16992)" height="1.52001" id="Rectangle 274402" transform="matrix(1 0 0 -1 8.01685 2.92973)" width="0.396094" />
          <rect fill="url(#paint1_linear_3007_16992)" height="1.4097" id="Rectangle 274403" transform="matrix(1 0 0 -1 7.61694 1.4097)" width="1.20077" />
          <g data-figma-bg-blur-radius="3.5" filter="url(#filter0_i_3007_16992)" id="Rectangle 274400">
            <rect fill="var(--fill-0, #FF9E68)" height="10.3626" rx="1" width="16" y="7.63744" />
          </g>
          <g filter="url(#filter1_i_3007_16992)" id="Rectangle 274404">
            <rect fill="var(--fill-0, #F57E3A)" height="7.41635" rx="1" width="13.8183" x="1.09082" y="9.11055" />
          </g>
          <path d={svgPaths.p294b2c00} data-figma-bg-blur-radius="4" id="Line 142" opacity="0.9" stroke="url(#paint2_linear_3007_16992)" strokeLinecap="square" strokeWidth="0.6" />
          <path d={svgPaths.p5036180} data-figma-bg-blur-radius="4" id="Line 144" opacity="0.9" stroke="url(#paint3_linear_3007_16992)" strokeLinecap="square" strokeWidth="0.6" />
          <path d={svgPaths.p24d4c300} data-figma-bg-blur-radius="4" id="Line 146" opacity="0.9" stroke="url(#paint4_linear_3007_16992)" strokeLinecap="square" strokeWidth="0.6" />
          <path d={svgPaths.p10c98a20} data-figma-bg-blur-radius="4" id="Line 148" opacity="0.9" stroke="url(#paint5_linear_3007_16992)" strokeLinecap="square" strokeWidth="0.6" />
          <path d={svgPaths.p21b5d600} data-figma-bg-blur-radius="4" id="Line 149" opacity="0.9" stroke="url(#paint6_linear_3007_16992)" strokeLinecap="square" strokeWidth="0.6" />
          <path d={svgPaths.p1e9f2a80} fill="url(#paint7_linear_3007_16992)" id="Ellipse 2882" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.3626" id="filter0_i_3007_16992" width="23" x="-3.5" y="4.13744">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.951284 0 0 0 0 0.391535 0 0 0 0 0.0729773 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_16992" />
          </filter>
          <clipPath id="bgblur_0_3007_16992_clip_path" transform="translate(3.5 -4.13744)">
            <rect height="10.3626" rx="1" width="16" y="7.63744" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.41635" id="filter1_i_3007_16992" width="13.8183" x="1.09082" y="9.11055">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="0.6" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.877254 0 0 0 0 0.350817 0 0 0 0 0.0512193 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_16992" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_16992" x1="0.198047" x2="0.198047" y1="0" y2="3.81478">
            <stop offset="0.182742" stopColor="#F89F6D" />
            <stop offset="0.355764" stopColor="#D76E33" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_16992" x1="0.600386" x2="0.600386" y1="0" y2="3.53793">
            <stop offset="0.182742" stopColor="#F89F6D" />
            <stop offset="0.36" stopColor="#D76E33" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3007_16992" x1="3.09033" x2="2.09033" y1="12.8173" y2="12.8173">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_16992" x1="5.55518" x2="4.55518" y1="12.8173" y2="12.8173">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3007_16992" x1="7.9903" x2="6.9903" y1="12.8173" y2="12.8173">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_3007_16992" x1="10.4258" x2="9.42585" y1="12.8173" y2="12.8173">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_3007_16992" x1="12.9094" x2="11.9094" y1="12.8173" y2="12.8173">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_3007_16992" x1="8.21486" x2="8.21486" y1="2.40956" y2="8.2219">
            <stop offset="0.182742" stopColor="#F89F6D" />
            <stop offset="0.355764" stopColor="#D76E33" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconSkeleton8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Group1 />
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons7 />
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-nowrap">Filing Due from ETA Date</p>
    </div>
  );
}

function ArrowDropdown6() {
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

function DropdownIcon3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown6 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative shrink-0 w-[149px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">{`Last  3 Months`}</p>
      <DropdownIcon3 />
    </div>
  );
}

function IconSkeleton9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 2">
          <mask height="16" id="mask0_3007_16985" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_3007_16985)">
            <path d={svgPaths.p1aa3e880} fill="var(--fill-0, #626776)" id="autorenew" />
            <g id="indicator">
              <circle cx="13.5" cy="2.5" fill="var(--fill-0, #CF3B3B)" fillOpacity="0.19" id="Ellipse 86" r="2.5" />
              <circle cx="13.5006" cy="2.49991" fill="var(--fill-0, #CF3B3B)" id="Ellipse 85" r="1.5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_3007_17082" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_17082)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton9 />
      <IconSkeleton10 />
    </div>
  );
}

function HeadingUtilities3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="Heading & Utilities">
      <Heading3 />
      <Dropdown3 />
      <NoOfIcons8 />
    </div>
  );
}

function GraphBase1() {
  return (
    <div className="absolute content-stretch flex h-[236px] items-center justify-between left-[135px] right-[6.33px] top-[calc(50%-8.5px)] translate-y-[-50%]" data-name="Graph Base">
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[10px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle3} />
            <div aria-hidden="true" className="absolute border-[#9497a1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">02</p>
    </div>
  );
}

function Parameter5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[172px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">ETA Not Updated</p>
      </div>
      <Bar4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[449.545px] left-[-30px] top-[-45px] w-[75.337px]">
      <div className="absolute inset-[-0.16%_0_0_-0.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 451">
          <g id="Frame 42210">
            <line id="Line 1359" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="75.691" y2="0.353553" />
            <line id="Line 1360" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="83.0284" y2="7.69096" />
            <line id="Line 1361" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="90.3658" y2="15.0284" />
            <line id="Line 1362" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="97.7032" y2="22.3658" />
            <line id="Line 1363" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="105.041" y2="29.7032" />
            <line id="Line 1364" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="112.378" y2="37.0406" />
            <line id="Line 1365" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="119.715" y2="44.378" />
            <line id="Line 1366" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="127.053" y2="51.7154" />
            <line id="Line 1367" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="134.39" y2="59.0528" />
            <line id="Line 1368" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="141.728" y2="66.3902" />
            <line id="Line 1369" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="149.065" y2="73.7276" />
            <line id="Line 1370" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="156.402" y2="81.065" />
            <line id="Line 1371" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="163.74" y2="88.4024" />
            <line id="Line 1372" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="171.077" y2="95.7398" />
            <line id="Line 1373" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="178.415" y2="103.077" />
            <line id="Line 1374" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="185.752" y2="110.415" />
            <line id="Line 1375" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="193.089" y2="117.752" />
            <line id="Line 1376" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="200.427" y2="125.089" />
            <line id="Line 1377" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="207.764" y2="132.427" />
            <line id="Line 1378" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="215.102" y2="139.764" />
            <line id="Line 1379" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="222.439" y2="147.102" />
            <line id="Line 1380" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="229.776" y2="154.439" />
            <line id="Line 1381" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="237.114" y2="161.776" />
            <line id="Line 1382" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="244.451" y2="169.114" />
            <line id="Line 1383" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="251.789" y2="176.451" />
            <line id="Line 1384" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="259.126" y2="183.789" />
            <line id="Line 1385" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="266.463" y2="191.126" />
            <line id="Line 1386" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="273.801" y2="198.463" />
            <line id="Line 1387" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="281.138" y2="205.801" />
            <line id="Line 1388" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="288.476" y2="213.138" />
            <line id="Line 1389" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="295.813" y2="220.476" />
            <line id="Line 1390" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="303.15" y2="227.813" />
            <line id="Line 1391" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="310.488" y2="235.15" />
            <line id="Line 1392" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="317.825" y2="242.488" />
            <line id="Line 1393" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="325.163" y2="249.825" />
            <line id="Line 1394" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="332.5" y2="257.163" />
            <line id="Line 1395" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="339.837" y2="264.5" />
            <line id="Line 1396" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="347.175" y2="271.837" />
            <line id="Line 1397" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="354.512" y2="279.175" />
            <line id="Line 1398" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="361.85" y2="286.512" />
            <line id="Line 1399" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="369.187" y2="293.85" />
            <line id="Line 1400" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="376.524" y2="301.187" />
            <line id="Line 1401" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="383.862" y2="308.524" />
            <line id="Line 1402" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="391.199" y2="315.862" />
            <line id="Line 1403" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="398.537" y2="323.199" />
            <line id="Line 1404" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="405.874" y2="330.537" />
            <line id="Line 1405" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="413.211" y2="337.874" />
            <line id="Line 1406" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="420.549" y2="345.211" />
            <line id="Line 1407" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="427.886" y2="352.549" />
            <line id="Line 1408" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="435.224" y2="359.886" />
            <line id="Line 1409" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="442.561" y2="367.224" />
            <line id="Line 1410" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="449.898" y2="374.561" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Pattern1() {
  return (
    <div className="overflow-clip relative size-full" data-name="Pattern">
      <Frame5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
      <div className="absolute flex h-[20px] items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[195px] rotate-[90deg] w-[20px]">
          <div className="bg-[#e7ac30] border-[#e7ac30] border-[2px_0px_0px] border-solid rounded-tl-[2px] rounded-tr-[2px] size-full" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute flex h-[20px] items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[195px] rotate-[90deg] w-[20px]">
          <Pattern1 />
        </div>
      </div>
    </div>
  );
}

function Bar5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <Frame23 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">25</p>
    </div>
  );
}

function Parameter6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[356px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">Due Today</p>
      </div>
      <Bar5 />
    </div>
  );
}

function Bar6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[207px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle4} />
            <div aria-hidden="true" className="absolute border-[#e3c230] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">07</p>
    </div>
  );
}

function Parameter7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[368px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">Due Tomorrow</p>
      </div>
      <Bar6 />
    </div>
  );
}

function Bar7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[164px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle5} />
            <div aria-hidden="true" className="absolute border-[#e87a3b] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">14</p>
    </div>
  );
}

function Parameter8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[324px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">Overdue 1 Day</p>
      </div>
      <Bar7 />
    </div>
  );
}

function Bar8() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[176px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle6} />
            <div aria-hidden="true" className="absolute border-[#e7ac30] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">38</p>
    </div>
  );
}

function Parameter9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[338px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">Overdue 2 Day</p>
      </div>
      <Bar8 />
    </div>
  );
}

function Bar9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[157px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle7} />
            <div aria-hidden="true" className="absolute border-[#f44545] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">34</p>
    </div>
  );
}

function Parameter10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[319px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">Overdue 3 Day</p>
      </div>
      <Bar9 />
    </div>
  );
}

function Bar10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[169px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle8} />
            <div aria-hidden="true" className="absolute border-[#a72f2f] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">07</p>
    </div>
  );
}

function Parameter11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[330px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">Overdue +3 Day</p>
      </div>
      <Bar10 />
    </div>
  );
}

function Parameter12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[236px] items-start justify-between left-0 top-0 w-[375px]" data-name="Parameter">
      <Parameter5 />
      <Parameter6 />
      <Parameter7 />
      <Parameter8 />
      <Parameter9 />
      <Parameter10 />
      <Parameter11 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] left-[162px] not-italic text-[#626776] text-[10px] text-nowrap top-[241px] w-[217px]" data-name="Footer">
      <p className="relative shrink-0">5</p>
      <p className="relative shrink-0">10</p>
      <p className="relative shrink-0">15</p>
      <p className="relative shrink-0">20</p>
      <p className="relative shrink-0">25</p>
      <p className="relative shrink-0">30</p>
      <p className="relative shrink-0">35</p>
      <p className="relative shrink-0">40</p>
    </div>
  );
}

function Graph1() {
  return (
    <div className="h-[253px] relative shrink-0 w-full" data-name="Graph">
      <GraphBase1 />
      <Parameter12 />
      <Footer1 />
    </div>
  );
}

function HorizontalGraph1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Horizontal Graph">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[16px] relative size-full">
          <Graph1 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="basis-0 bg-[#ebeef7] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <HeadingUtilities3 />
          <HorizontalGraph1 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[19.2%_21.2%_20.8%_18.8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group 4341">
          <g data-figma-bg-blur-radius="13.1178" filter="url(#filter0_i_3007_17078)" id="Shape 1">
            <circle cx="7.2" cy="7.2" fill="url(#paint0_linear_3007_17078)" r="7.2" />
          </g>
          <g filter="url(#filter1_i_3007_17078)" id="Shape 2">
            <circle cx="7.2" cy="7.2" fill="var(--fill-0, white)" r="6.336" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40.6355" id="filter0_i_3007_17078" width="40.6355" x="-13.1178" y="-13.1178">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.830689 0 0 0 0 0.239492 0 0 0 0 0.239492 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_17078" />
          </filter>
          <clipPath id="bgblur_0_3007_17078_clip_path" transform="translate(13.1178 13.1178)">
            <circle cx="7.2" cy="7.2" r="7.2" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.672" id="filter1_i_3007_17078" width="12.672" x="0.863998" y="0.863998">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="6.55889" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.929763 0 0 0 0 0.381767 0 0 0 0 0.381767 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_17078" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_17078" x1="7.2" x2="7.2" y1="0" y2="15.0019">
            <stop stopColor="#FD9B9B" />
            <stop offset="1" stopColor="#E45B5B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[19.2%_21.2%_20.8%_18.8%]">
      <Group />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[18%_11.99%_20.8%_9.6%]">
      <div className="absolute flex inset-[18%_69.09%_56.31%_9.6%] items-center justify-center">
        <div className="flex-none h-[2.303px] rotate-[122.913deg] scale-y-[-100%] w-[5.853px]">
          <div className="relative size-full">
            <div className="absolute inset-[0_0.44%_4.4%_0.46%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3">
                <g filter="url(#filter0_i_3007_17022)" id="Ellipse 2899">
                  <path d={svgPaths.p27d9db00} fill="var(--fill-0, #FF7272)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2.20196" id="filter0_i_3007_17022" width="5.80071" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.75" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.784851 0 0 0 0 0.25542 0 0 0 0 0.25542 0 0 0 1 0" />
                    <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_17022" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18%_11.99%_56.31%_66.7%] items-center justify-center">
        <div className="flex-none h-[2.303px] rotate-[57.087deg] w-[5.853px]">
          <div className="relative size-full">
            <div className="absolute inset-[0_0.44%_4.4%_0.46%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3">
                <g filter="url(#filter0_i_3007_17020)" id="Ellipse 2900">
                  <path d={svgPaths.p27d9db00} fill="var(--fill-0, #FF7272)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2.20196" id="filter0_i_3007_17020" width="5.80071" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.75" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.784851 0 0 0 0 0.25542 0 0 0 0 0.25542 0 0 0 1 0" />
                    <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3007_17020" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group2 />
      <div className="absolute inset-[34.02%_35.68%_44.77%_32%]" data-name="Union">
        <div className="absolute inset-[-167.49%_-109.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23">
            <g filter="url(#filter0_d_3007_17014)" id="Union">
              <path d={svgPaths.p1855cd80} fill="url(#paint0_linear_3007_17014)" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.1439" id="filter0_d_3007_17014" width="24.8109" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.26328" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.989788 0 0 0 0 0.747978 0 0 0 0 0.737903 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3007_17014" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_3007_17014" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_17014" x1="8.74911" x2="8.28103" y1="10.0944" y2="10.9566">
                <stop stopColor="white" />
                <stop offset="0.954632" stopColor="white" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.2%_49.91%_68.82%_48.49%] opacity-60 shadow-[0px_0px_8.527px_0px_#f6acab]" style={{ backgroundImage: "linear-gradient(225.176deg, rgb(255, 255, 255) 12.693%, rgba(255, 255, 255, 0.5) 142.88%)" }} />
      <div className="absolute inset-[66.67%_49.91%_27.35%_48.49%] opacity-60 shadow-[0px_0px_8.527px_0px_#f6acab]" style={{ backgroundImage: "linear-gradient(225.176deg, rgb(255, 255, 255) 12.693%, rgba(255, 255, 255, 0.5) 142.88%)" }} />
      <div className="absolute flex inset-[48.83%_27.6%_49.57%_66.42%] items-center justify-center">
        <div className="flex-none h-[1.436px] rotate-[270deg] w-[0.384px]">
          <div className="opacity-60 shadow-[0px_0px_8.527px_0px_#f6acab] size-full" style={{ backgroundImage: "linear-gradient(225.176deg, rgb(255, 255, 255) 12.693%, rgba(255, 255, 255, 0.5) 142.88%)" }} />
        </div>
      </div>
      <div className="absolute flex inset-[48.83%_68.94%_49.57%_25.08%] items-center justify-center">
        <div className="flex-none h-[1.436px] rotate-[270deg] w-[0.384px]">
          <div className="opacity-60 shadow-[0px_0px_8.527px_0px_#f6acab] size-full" style={{ backgroundImage: "linear-gradient(225.176deg, rgb(255, 255, 255) 12.693%, rgba(255, 255, 255, 0.5) 142.88%)" }} />
        </div>
      </div>
    </div>
  );
}

function IconSkeleton11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <div className="absolute flex inset-[24%_72.29%_64.04%_14.25%] items-center justify-center">
        <div className="flex-none h-[0.864px] rotate-[39.374deg] w-[3.47px]">
          <div className="bg-[#fb9998] rounded-[7px] size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[24%_17.13%_65.22%_70.84%] items-center justify-center">
        <div className="flex-none h-[0.864px] rotate-[140.626deg] scale-y-[-100%] w-[3.025px]">
          <div className="bg-[#fb9998] rounded-[7px] size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[10.8%_47.2%_66.4%_45.6%] items-center justify-center">
        <div className="flex-none h-[1.728px] rotate-[90deg] scale-y-[-100%] w-[5.472px]">
          <div className="bg-[#fb9998] rounded-[7px] size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[64.8%_59.89%_15.68%_20.59%] items-center justify-center">
        <div className="flex-none h-[1.152px] rotate-[135deg] scale-y-[-100%] w-[5.472px]">
          <div className="bg-[#fb9998] rounded-[7px] size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[64.8%_20.48%_15.68%_60%] items-center justify-center">
        <div className="flex-none h-[1.152px] rotate-[45deg] w-[5.472px]">
          <div className="bg-[#fb9998] rounded-[7px] size-full" />
        </div>
      </div>
      <Group5 />
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton11 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons9 />
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-nowrap">TAT Analysis</p>
    </div>
  );
}

function ArrowDropdown7() {
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

function DropdownIcon4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown7 />
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative shrink-0 w-[149px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">{`Last  3 Months`}</p>
      <DropdownIcon4 />
    </div>
  );
}

function IconSkeleton12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 2">
          <mask height="16" id="mask0_3007_16985" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_3007_16985)">
            <path d={svgPaths.p1aa3e880} fill="var(--fill-0, #626776)" id="autorenew" />
            <g id="indicator">
              <circle cx="13.5" cy="2.5" fill="var(--fill-0, #CF3B3B)" fillOpacity="0.19" id="Ellipse 86" r="2.5" />
              <circle cx="13.5006" cy="2.49991" fill="var(--fill-0, #CF3B3B)" id="Ellipse 85" r="1.5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_3007_17082" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_17082)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton12 />
      <IconSkeleton13 />
    </div>
  );
}

function HeadingUtilities4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="Heading & Utilities">
      <Heading4 />
      <Dropdown4 />
      <NoOfIcons10 />
    </div>
  );
}

function ArrowDropdown8() {
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

function DropdownIcon5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown8 />
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">Document Received</p>
      <DropdownIcon5 />
    </div>
  );
}

function ArrowDropdown9() {
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

function DropdownIcon6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown9 />
    </div>
  );
}

function Dropdown6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative shrink-0 w-[155px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">Cargo Delivered</p>
      <DropdownIcon6 />
    </div>
  );
}

function GraphFilter1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Graph Filter">
      <Dropdown5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#626776] text-[14px] text-nowrap">to</p>
      <Dropdown6 />
    </div>
  );
}

function GraphBase2() {
  return (
    <div className="absolute content-stretch flex h-[236px] items-center justify-between left-[135px] right-[6.33px] top-[calc(50%-8.5px)] translate-y-[-50%]" data-name="Graph Base">
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[270deg]">
          <div className="h-full relative w-[236px]" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar11() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="bg-gradient-to-b from-5% from-[rgba(0,150,136,0.52)] h-[10px] relative rounded-tl-[2px] rounded-tr-[2px] to-105% to-[rgba(0,150,136,0.16)] w-full" data-name="Rectangle">
            <div aria-hidden="true" className="absolute border-[#009688] border-[2px_0px_0px] border-solid inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">02</p>
    </div>
  );
}

function Parameter13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[172px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">Same Day</p>
      </div>
      <Bar11 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[449.545px] left-[-30px] top-[-45px] w-[75.337px]">
      <div className="absolute inset-[-0.16%_0_0_-0.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 451">
          <g id="Frame 42210">
            <line id="Line 1359" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="75.691" y2="0.353553" />
            <line id="Line 1360" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="83.0284" y2="7.69096" />
            <line id="Line 1361" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="90.3658" y2="15.0284" />
            <line id="Line 1362" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="97.7032" y2="22.3658" />
            <line id="Line 1363" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="105.041" y2="29.7032" />
            <line id="Line 1364" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="112.378" y2="37.0406" />
            <line id="Line 1365" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="119.715" y2="44.378" />
            <line id="Line 1366" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="127.053" y2="51.7154" />
            <line id="Line 1367" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="134.39" y2="59.0528" />
            <line id="Line 1368" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="141.728" y2="66.3902" />
            <line id="Line 1369" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="149.065" y2="73.7276" />
            <line id="Line 1370" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="156.402" y2="81.065" />
            <line id="Line 1371" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="163.74" y2="88.4024" />
            <line id="Line 1372" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="171.077" y2="95.7398" />
            <line id="Line 1373" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="178.415" y2="103.077" />
            <line id="Line 1374" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="185.752" y2="110.415" />
            <line id="Line 1375" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="193.089" y2="117.752" />
            <line id="Line 1376" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="200.427" y2="125.089" />
            <line id="Line 1377" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="207.764" y2="132.427" />
            <line id="Line 1378" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="215.102" y2="139.764" />
            <line id="Line 1379" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="222.439" y2="147.102" />
            <line id="Line 1380" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="229.776" y2="154.439" />
            <line id="Line 1381" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="237.114" y2="161.776" />
            <line id="Line 1382" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="244.451" y2="169.114" />
            <line id="Line 1383" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="251.789" y2="176.451" />
            <line id="Line 1384" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="259.126" y2="183.789" />
            <line id="Line 1385" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="266.463" y2="191.126" />
            <line id="Line 1386" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="273.801" y2="198.463" />
            <line id="Line 1387" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="281.138" y2="205.801" />
            <line id="Line 1388" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="288.476" y2="213.138" />
            <line id="Line 1389" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="295.813" y2="220.476" />
            <line id="Line 1390" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="303.15" y2="227.813" />
            <line id="Line 1391" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="310.488" y2="235.15" />
            <line id="Line 1392" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="317.825" y2="242.488" />
            <line id="Line 1393" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="325.163" y2="249.825" />
            <line id="Line 1394" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="332.5" y2="257.163" />
            <line id="Line 1395" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="339.837" y2="264.5" />
            <line id="Line 1396" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="347.175" y2="271.837" />
            <line id="Line 1397" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="354.512" y2="279.175" />
            <line id="Line 1398" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="361.85" y2="286.512" />
            <line id="Line 1399" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="369.187" y2="293.85" />
            <line id="Line 1400" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="376.524" y2="301.187" />
            <line id="Line 1401" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="383.862" y2="308.524" />
            <line id="Line 1402" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="391.199" y2="315.862" />
            <line id="Line 1403" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="398.537" y2="323.199" />
            <line id="Line 1404" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="405.874" y2="330.537" />
            <line id="Line 1405" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="413.211" y2="337.874" />
            <line id="Line 1406" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="420.549" y2="345.211" />
            <line id="Line 1407" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="427.886" y2="352.549" />
            <line id="Line 1408" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="435.224" y2="359.886" />
            <line id="Line 1409" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="442.561" y2="367.224" />
            <line id="Line 1410" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="449.898" y2="374.561" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Pattern2() {
  return (
    <div className="overflow-clip relative size-full" data-name="Pattern">
      <Frame6 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
      <div className="absolute flex h-[20px] items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[195px] rotate-[90deg] w-[20px]">
          <div className="bg-[#e7ac30] border-[#e7ac30] border-[2px_0px_0px] border-solid rounded-tl-[2px] rounded-tr-[2px] size-full" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute flex h-[20px] items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[195px] rotate-[90deg] w-[20px]">
          <Pattern2 />
        </div>
      </div>
    </div>
  );
}

function Bar12() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <Frame24 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">25</p>
    </div>
  );
}

function Parameter14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[356px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">1 Day</p>
      </div>
      <Bar12 />
    </div>
  );
}

function Bar13() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[207px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle4} />
            <div aria-hidden="true" className="absolute border-[#e3c230] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">07</p>
    </div>
  );
}

function Parameter15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[368px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">2 Day</p>
      </div>
      <Bar13 />
    </div>
  );
}

function Bar14() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="bg-gradient-to-b from-[0.368%] from-[rgba(197,93,93,0.53)] h-[164px] relative rounded-tl-[2px] rounded-tr-[2px] to-[104.41%] to-[rgba(197,93,93,0.11)] w-full" data-name="Rectangle">
            <div aria-hidden="true" className="absolute border-[#b73434] border-[2px_0px_0px] border-solid inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">14</p>
    </div>
  );
}

function Parameter16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[324px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">3 Days</p>
      </div>
      <Bar14 />
    </div>
  );
}

function Bar15() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div className="basis-0 flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-[176px] pointer-events-none relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[2px] rounded-tr-[2px] size-full" src={imgRectangle9} />
            <div aria-hidden="true" className="absolute border-[#f44545] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">36</p>
    </div>
  );
}

function Parameter17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[338px]" data-name="Parameter">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-right w-[119px]">
        <p className="leading-[18px]">{` +3 Days`}</p>
      </div>
      <Bar15 />
    </div>
  );
}

function Parameter18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[236px] items-start justify-between left-0 top-0 w-[375px]" data-name="Parameter">
      <Parameter13 />
      <Parameter14 />
      <Parameter15 />
      <Parameter16 />
      <Parameter17 />
    </div>
  );
}

function Footer2() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] left-[162px] not-italic text-[#626776] text-[10px] text-nowrap top-[241px] w-[217px]" data-name="Footer">
      <p className="relative shrink-0">5</p>
      <p className="relative shrink-0">10</p>
      <p className="relative shrink-0">15</p>
      <p className="relative shrink-0">20</p>
      <p className="relative shrink-0">25</p>
      <p className="relative shrink-0">30</p>
      <p className="relative shrink-0">35</p>
      <p className="relative shrink-0">40</p>
    </div>
  );
}

function Graph2() {
  return (
    <div className="h-[253px] relative shrink-0 w-full" data-name="Graph">
      <GraphBase2 />
      <Parameter18 />
      <Footer2 />
    </div>
  );
}

function HorizontalGraph2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Horizontal Graph">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[16px] relative w-full">
          <GraphFilter1 />
          <Graph2 />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="basis-0 bg-[#ebeef7] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <HeadingUtilities4 />
          <HorizontalGraph2 />
        </div>
      </div>
    </div>
  );
}

function ETa() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="ETa">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Section1 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Section2 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Section3 />
      </div>
    </div>
  );
}

function Shapes1() {
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

function IconSkeleton14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Shapes1 />
    </div>
  );
}

function NoOfIcons11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton14 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons11 />
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-nowrap">Volume Trend</p>
    </div>
  );
}

function Switch() {
  return (
    <div className="h-[12px] relative shrink-0 w-[25px]" data-name="Switch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
        <g id="Switch">
          <rect fill="var(--fill-0, #CDCFD3)" height="12" id="Base" rx="6" width="25" />
          <circle cx="6" cy="6" fill="var(--fill-0, white)" id="Indicator" r="4" />
        </g>
      </svg>
    </div>
  );
}

function ToogleSwitch() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toogle Switch">
      <Switch />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] text-nowrap">Comparison</p>
    </div>
  );
}

function IconSkeleton15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 2">
          <mask height="16" id="mask0_3007_16985" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_3007_16985)">
            <path d={svgPaths.p1aa3e880} fill="var(--fill-0, #626776)" id="autorenew" />
            <g id="indicator">
              <circle cx="13.5" cy="2.5" fill="var(--fill-0, #CF3B3B)" fillOpacity="0.19" id="Ellipse 86" r="2.5" />
              <circle cx="13.5006" cy="2.49991" fill="var(--fill-0, #CF3B3B)" id="Ellipse 85" r="1.5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton15 />
    </div>
  );
}

function HeadingUtilities5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="Heading & Utilities">
      <Heading5 />
      <ToogleSwitch />
      <NoOfIcons12 />
    </div>
  );
}

function ArrowDropdown10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown10 />
    </div>
  );
}

function FilterDropdown3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Branch : Chennai</p>
      <ActionIcon3 />
    </div>
  );
}

function ArrowDropdown11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown11 />
    </div>
  );
}

function FilterDropdown4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">X-axis : Financial Year</p>
      <ActionIcon4 />
    </div>
  );
}

function ArrowDropdown12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown12 />
    </div>
  );
}

function FilterDropdown5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Year : Current Year</p>
      <ActionIcon5 />
    </div>
  );
}

function ArrowDropdown13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown13 />
    </div>
  );
}

function FilterDropdown6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Mode of Transport : All</p>
      <ActionIcon6 />
    </div>
  );
}

function ArrowDropdown14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown14 />
    </div>
  );
}

function FilterDropdown7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Importer : All</p>
      <ActionIcon7 />
    </div>
  );
}

function FilterChips1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[24px] pr-0 py-0 relative shrink-0" data-name="Filter Chips">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#626776] text-[14px] text-nowrap">Apply Filter :</p>
      <FilterDropdown3 />
      <FilterDropdown4 />
      <FilterDropdown5 />
      <FilterDropdown6 />
      <FilterDropdown7 />
    </div>
  );
}

function FilterListOff1() {
  return (
    <div className="absolute h-[14px] left-[11.11%] right-[11.11%] top-1/2 translate-y-[-50%]" data-name="filter_list_off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="filter_list_off">
          <path d={svgPaths.pbf27c00} fill="var(--fill-0, #3874FF)" id="filter_list_off_2" />
        </g>
      </svg>
    </div>
  );
}

function ClearFIlter1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Clear FIlter">
      <FilterListOff1 />
    </div>
  );
}

function NoOfIcons13() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <ClearFIlter1 />
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons13 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft2 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px]">Clear Filter</p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Filter">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pl-0 pr-[16px] py-0 relative size-full">
          <FilterChips1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Line1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#626776] text-[10px] text-right w-[48px]">600</p>
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1242 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="1242" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#626776] text-[10px] text-right w-[48px]">500</p>
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1242 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="1242" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#626776] text-[10px] text-right w-[48px]">400</p>
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1242 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="1242" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#626776] text-[10px] text-right w-[48px]">300</p>
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1242 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="1242" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#626776] text-[10px] text-right w-[48px]">200</p>
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1242 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="1242" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#626776] text-[10px] text-right w-[48px]">100</p>
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1242 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="1242" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#626776] text-[10px] text-right w-[48px]">0</p>
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full" data-name="border">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(239, 240, 241, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1242 1">
                <line id="border" stroke="var(--stroke-0, #EFF0F1)" x2="1242" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[204px] items-start justify-between left-0 right-[16px] top-0">
      <Line1 />
      <Line />
      <Line2 />
      <Line3 />
      <Line4 />
      <Line5 />
      <Line6 />
    </div>
  );
}

function Bar16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bar">
      <div className="absolute border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" style={{ backgroundImage: "linear-gradient(181.145deg, rgba(49, 206, 241, 0.51) 3.3183%, rgba(49, 206, 241, 0.11) 99.505%)" }} />
    </div>
  );
}

function Bars() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[90px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#626776] text-[12px] text-center w-full">200</p>
      <Bar16 />
    </div>
  );
}

function Bar17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bar">
      <div className="absolute border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" style={{ backgroundImage: "linear-gradient(182.218deg, rgba(49, 206, 241, 0.51) 3.3183%, rgba(49, 206, 241, 0.11) 99.505%)" }} />
    </div>
  );
}

function Bars1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[150px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#626776] text-[12px] text-center w-full">390</p>
      <Bar17 />
    </div>
  );
}

function Bar18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bar">
      <div className="absolute border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" style={{ backgroundImage: "linear-gradient(182.289deg, rgba(49, 206, 241, 0.51) 3.3183%, rgba(49, 206, 241, 0.11) 99.505%)" }} />
    </div>
  );
}

function Bars2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[154px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#626776] text-[12px] text-center w-full">400</p>
      <Bar18 />
    </div>
  );
}

function Bar19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bar">
      <div className="absolute border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" style={{ backgroundImage: "linear-gradient(182.986deg, rgba(49, 206, 241, 0.51) 3.3183%, rgba(49, 206, 241, 0.11) 99.505%)" }} />
    </div>
  );
}

function Bars3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[193px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#626776] text-[12px] text-center w-full">505</p>
      <Bar19 />
    </div>
  );
}

function Bar20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bar">
      <div className="absolute border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" style={{ backgroundImage: "linear-gradient(182.575deg, rgba(49, 206, 241, 0.51) 3.3183%, rgba(49, 206, 241, 0.11) 99.505%)" }} />
    </div>
  );
}

function Bars4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[170px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#626776] text-[12px] text-center w-full">450</p>
      <Bar20 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[449.545px] left-[-30px] top-[-45px] w-[75.337px]">
      <div className="absolute inset-[-0.16%_0_0_-0.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 451">
          <g id="Frame 42210">
            <line id="Line 1359" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="75.691" y2="0.353553" />
            <line id="Line 1360" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="83.0284" y2="7.69096" />
            <line id="Line 1361" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="90.3658" y2="15.0284" />
            <line id="Line 1362" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="97.7032" y2="22.3658" />
            <line id="Line 1363" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="105.041" y2="29.7032" />
            <line id="Line 1364" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="112.378" y2="37.0406" />
            <line id="Line 1365" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="119.715" y2="44.378" />
            <line id="Line 1366" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="127.053" y2="51.7154" />
            <line id="Line 1367" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="134.39" y2="59.0528" />
            <line id="Line 1368" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="141.728" y2="66.3902" />
            <line id="Line 1369" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="149.065" y2="73.7276" />
            <line id="Line 1370" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="156.402" y2="81.065" />
            <line id="Line 1371" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="163.74" y2="88.4024" />
            <line id="Line 1372" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="171.077" y2="95.7398" />
            <line id="Line 1373" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="178.415" y2="103.077" />
            <line id="Line 1374" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="185.752" y2="110.415" />
            <line id="Line 1375" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="193.089" y2="117.752" />
            <line id="Line 1376" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="200.427" y2="125.089" />
            <line id="Line 1377" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="207.764" y2="132.427" />
            <line id="Line 1378" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="215.102" y2="139.764" />
            <line id="Line 1379" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="222.439" y2="147.102" />
            <line id="Line 1380" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="229.776" y2="154.439" />
            <line id="Line 1381" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="237.114" y2="161.776" />
            <line id="Line 1382" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="244.451" y2="169.114" />
            <line id="Line 1383" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="251.789" y2="176.451" />
            <line id="Line 1384" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="259.126" y2="183.789" />
            <line id="Line 1385" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="266.463" y2="191.126" />
            <line id="Line 1386" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="273.801" y2="198.463" />
            <line id="Line 1387" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="281.138" y2="205.801" />
            <line id="Line 1388" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="288.476" y2="213.138" />
            <line id="Line 1389" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="295.813" y2="220.476" />
            <line id="Line 1390" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="303.15" y2="227.813" />
            <line id="Line 1391" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="310.488" y2="235.15" />
            <line id="Line 1392" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="317.825" y2="242.488" />
            <line id="Line 1393" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="325.163" y2="249.825" />
            <line id="Line 1394" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="332.5" y2="257.163" />
            <line id="Line 1395" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="339.837" y2="264.5" />
            <line id="Line 1396" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="347.175" y2="271.837" />
            <line id="Line 1397" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="354.512" y2="279.175" />
            <line id="Line 1398" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="361.85" y2="286.512" />
            <line id="Line 1399" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="369.187" y2="293.85" />
            <line id="Line 1400" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="376.524" y2="301.187" />
            <line id="Line 1401" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="383.862" y2="308.524" />
            <line id="Line 1402" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="391.199" y2="315.862" />
            <line id="Line 1403" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="398.537" y2="323.199" />
            <line id="Line 1404" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="405.874" y2="330.537" />
            <line id="Line 1405" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="413.211" y2="337.874" />
            <line id="Line 1406" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="420.549" y2="345.211" />
            <line id="Line 1407" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="427.886" y2="352.549" />
            <line id="Line 1408" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="435.224" y2="359.886" />
            <line id="Line 1409" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="442.561" y2="367.224" />
            <line id="Line 1410" stroke="var(--stroke-0, white)" strokeOpacity="0.27" x1="0.353553" x2="75.691" y1="449.898" y2="374.561" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <Frame7 />
    </div>
  );
}

function Bar21() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#31cef1] border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
      <Frame8 />
    </div>
  );
}

function Bars5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[12px] text-center w-full">230</p>
      <Bar21 />
    </div>
  );
}

function Bar22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bar">
      <div className="absolute border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" style={{ backgroundImage: "linear-gradient(180.662deg, rgba(49, 206, 241, 0.51) 3.3183%, rgba(49, 206, 241, 0.11) 99.505%)" }} />
    </div>
  );
}

function Bars6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[63px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#626776] text-[12px] text-center w-full">110</p>
      <Bar22 />
    </div>
  );
}

function Bar23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bar">
      <div className="absolute border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" style={{ backgroundImage: "linear-gradient(180.304deg, rgba(49, 206, 241, 0.51) 3.3183%, rgba(49, 206, 241, 0.11) 99.505%)" }} />
    </div>
  );
}

function Bars7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[43px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#626776] text-[12px] text-center w-full">50</p>
      <Bar23 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[16px] not-italic relative shrink-0 text-[12px] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#cdcfd3] w-[96px]">November 2025</p>
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-right text-white">210</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[16px] not-italic relative shrink-0 text-[12px] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#cdcfd3] w-[111px]">Cummulative (April- March 25)</p>
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-right text-white">2680</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="bg-[#31cef1] rounded-[6px] self-stretch shrink-0 w-[4px]" />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[#050e25] content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[3px] shrink-0 w-[171px]" data-name="Tooltip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[14px] text-white w-[147px]">Volume Trend</p>
      <Frame14 />
    </div>
  );
}

function TooltipIndicatorAlignment() {
  return (
    <div className="h-[4px] relative shrink-0 w-full" data-name="Tooltip Indicator Alignment">
      <div className="absolute flex h-[4px] items-center justify-center right-[4px] top-0 w-[8px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[4px] relative w-[8px]" data-name="Polygon">
            <div className="absolute inset-[10.36%_0_0_0]" style={{ "--fill-0": "rgba(5, 14, 37, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4">
                <path d={svgPaths.p369be250} fill="var(--fill-0, #050E25)" id="Polygon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[361px] top-[27px]" data-name="Tooltip">
      <Tooltip />
      <TooltipIndicatorAlignment />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-end flex flex-wrap items-end justify-between left-[44px] px-[7px] py-0 right-[27px] top-[6px]">
      <Bars />
      <Bars1 />
      <Bars2 />
      <Bars3 />
      <Bars4 />
      <Bars5 />
      <Bars4 />
      <Bars4 />
      <Bars4 />
      <Bars4 />
      <Bars6 />
      <Bars7 />
      <Tooltip1 />
    </div>
  );
}

function Graph3() {
  return (
    <div className="h-[226px] relative shrink-0 w-full" data-name="Graph">
      <Frame />
      <Frame1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[3.9%] not-italic right-[93.15%] text-[#626776] text-[10px] top-[208px]">April 25</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[12.1%] not-italic right-[85.11%] text-[#626776] text-[10px] top-[208px]">May 25</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[28.74%] not-italic right-[68.47%] text-[#626776] text-[10px] top-[208px]">July 25</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[20.3%] not-italic right-[76.67%] text-[#626776] text-[10px] top-[208px]">June 25</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[36.39%] not-italic right-[59.71%] text-[#626776] text-[10px] top-[208px]">August 25</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[45.06%] not-italic right-[51.91%] text-[#050e25] text-[10px] top-[208px]">Sept 25</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[52.63%] not-italic right-[43.07%] text-[#626776] text-[10px] top-[208px]">October 25</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[60.51%] not-italic right-[34.39%] text-[#050e25] text-[10px] top-[208px]">November 25</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[68.71%] not-italic right-[26.19%] text-[#626776] text-[10px] top-[208px]">December 25</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[77.47%] not-italic right-[18.31%] text-[#626776] text-[10px] top-[208px]">January 26</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[85.67%] not-italic right-[9.71%] text-[#626776] text-[10px] top-[208px]">February 26</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[94.11%] not-italic right-[2.07%] text-[#626776] text-[10px] top-[208px]">{`March  26`}</p>
    </div>
  );
}

function JobVolumeTrend() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-0 py-[16px] relative rounded-[8px] shadow-[0px_0px_13px_1px_rgba(26,38,120,0.08)] shrink-0 w-full" data-name="Job Volume trend">
      <Filter />
      <Graph3 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#ebeef7] relative rounded-[8px] shrink-0 w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <HeadingUtilities5 />
          <JobVolumeTrend />
        </div>
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Body">
      <FilterBar />
      <Section />
      <ETa />
      <Section4 />
    </div>
  );
}