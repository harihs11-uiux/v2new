import svgPaths from "./svg-6jgi26atiq";

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

function IconSkeleton() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Shapes />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Heading">
      <NoOfIcons />
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



function IconDownload() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
         <path d="M14.25 11.25V14.25H3.75V11.25H2.25V14.25C2.25 15.075 2.925 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V11.25H14.25ZM12.75 8.25L11.6925 7.1925L9.75 9.1275V2.25H8.25V9.1275L6.3075 7.1925L5.25 8.25L9 12L12.75 8.25Z" fill="#626776"/>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconDownload />
    </div>
  );
}

function HeadingUtilities() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="Heading & Utilities">
      <Heading />
      <ToogleSwitch />
      <NoOfIcons1 />
    </div>
  );
}

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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">X-axis : Financial Year</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Year : Current Year</p>
      <ActionIcon2 />
    </div>
  );
}

function ArrowDropdown3() {
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
      <ArrowDropdown3 />
    </div>
  );
}

function FilterDropdown3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Mode of Transport : All</p>
      <ActionIcon3 />
    </div>
  );
}

function ArrowDropdown4() {
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
      <ArrowDropdown4 />
    </div>
  );
}

function FilterDropdown4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Importer : All</p>
      <ActionIcon4 />
    </div>
  );
}

function FilterChips() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[24px] pr-0 py-0 relative shrink-0" data-name="Filter Chips">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#626776] text-[14px] text-nowrap">Apply Filter :</p>
      <FilterDropdown />
      <FilterDropdown1 />
      <FilterDropdown2 />
      <FilterDropdown3 />
      <FilterDropdown4 />
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

function NoOfIcons2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <ClearFIlter />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons2 />
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

function Filter() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Filter">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pl-0 pr-[16px] py-0 relative size-full">
          <FilterChips />
          <Button />
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

function Bar() {
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
      <Bar />
    </div>
  );
}

function Bar1() {
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
      <Bar1 />
    </div>
  );
}

function Bar2() {
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
      <Bar2 />
    </div>
  );
}

function Bar3() {
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
      <Bar3 />
    </div>
  );
}

function Bar4() {
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
      <Bar4 />
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

function Frame5() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <Frame4 />
    </div>
  );
}

function Bar5() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#31cef1] border-[#31cef1] border-[2px_0px_0px] border-solid inset-0 rounded-tl-[2px] rounded-tr-[2px]" />
      <Frame5 />
    </div>
  );
}

function Bars5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[32px]" data-name="Bars">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[12px] text-center w-full">230</p>
      <Bar5 />
    </div>
  );
}

function Bar6() {
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
      <Bar6 />
    </div>
  );
}

function Bar7() {
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
      <Bar7 />
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="bg-[#31cef1] rounded-[6px] self-stretch shrink-0 w-[4px]" />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[#050e25] content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[3px] shrink-0 w-[171px]" data-name="Tooltip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[14px] text-white w-[147px]">Volume Trend</p>
      <Frame11 />
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

function Graph() {
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
      <Graph />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#ebeef7] relative rounded-[8px] size-full" data-name="Section">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative size-full">
          <HeadingUtilities />
          <JobVolumeTrend />
        </div>
      </div>
    </div>
  );
}