import svgPaths from "./svg-1ylutpwyl6";

function Close() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
        <g>
          <mask
            height="18"
            id="mask0_1245_19438"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1245_19438)">
            <path d={svgPaths.p4280c0} fill="var(--fill-0, #9497A1)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame42045() {
  return (
    <div className="absolute box-border content-stretch flex gap-1 items-center justify-start p-0 right-3 top-[15px]">
      <Close />
    </div>
  );
}

function IconSkeleton10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
        <g id="Icon Skeleton 10">
          <mask
            height="18"
            id="mask0_1245_19460"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1245_19460)">
            <path d={svgPaths.p3c47ce00} fill="var(--fill-0, #3874FF)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons112Px18Px() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <IconSkeleton10 />
    </div>
  );
}

function IconLeft() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Icon Left"
    >
      <NoOfIcons112Px18Px />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex items-center justify-center p-[4px] relative rounded shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded"
      />
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="block leading-[18px] whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-1 items-center justify-start left-3 p-0 top-1/2 translate-y-[-50%]"
      data-name="Tab"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Audit Report</p>
      </div>
      <Button />
    </div>
  );
}

function TabTitlebar() {
  return (
    <div className="bg-[#242c40] h-12 relative shrink-0 w-full" data-name="Tab Titlebar">
      <div className="h-12 overflow-clip relative w-full">
        <Frame42045 />
        <Tab />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Error() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Error">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #F44545)" id="Ellipse 37" r="7.875" />
          <g id="Vector">
            <path d={svgPaths.p2e6e6f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e6e6f00} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Error1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 overflow-clip relative size-[18px]" data-name="error">
      <Error />
    </div>
  );
}

function IconGroup() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon group"
    >
      <Error1 />
    </div>
  );
}

function Option1() {
  return (
    <div
      className="basis-0 bg-[#505767] grow min-h-px min-w-px relative rounded-sm shadow-[0px_0px_11px_1px_#272d3f] shrink-0"
      data-name="Option 1"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center leading-[0] px-4 py-1 relative w-full">
          <IconGroup />
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
            <p className="block leading-[18px] whitespace-pre">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Warning() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
        <g id="warning">
          <path d={svgPaths.p25951b00} fill="var(--fill-0, #505767)" id="Polygon 1" />
          <rect
            fill="var(--fill-0, white)"
            height="5.625"
            id="Rectangle 1574"
            opacity="0.6"
            rx="0.5625"
            width="1.125"
            x="8.4375"
            y="7.875"
          />
          <circle cx="9" cy="6.1875" fill="var(--fill-0, white)" id="Ellipse 39" opacity="0.6" r="0.5625" />
        </g>
      </svg>
    </div>
  );
}

function IconGroup1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon group"
    >
      <Warning />
    </div>
  );
}

function Option2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded shrink-0" data-name="Option 2">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center leading-[0] px-4 py-1 relative w-full">
          <IconGroup1 />
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
            <p className="block leading-[18px] whitespace-pre">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Success check">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #505767)" id="Base" r="7.875" />
          <rect
            fill="var(--fill-0, #B9BCC2)"
            height="6.025"
            id="Rectangle 1575"
            rx="0.7625"
            stroke="var(--stroke-0, #B9BCC2)"
            strokeWidth="0.4"
            width="1.525"
            x="7.1125"
            y="5.90435"
          />
          <circle
            cx="7.875"
            cy="3.9375"
            fill="var(--fill-0, #B9BCC2)"
            id="Ellipse 40"
            r="0.7625"
            stroke="var(--stroke-0, #B9BCC2)"
            strokeWidth="0.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Format() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 overflow-clip relative size-[18px]" data-name="format">
      <SuccessCheck />
    </div>
  );
}

function IconGroup2() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon group"
    >
      <Format />
    </div>
  );
}

function Option3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded shrink-0" data-name="Option 3">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center leading-[0] px-4 py-1 relative w-full">
          <IconGroup2 />
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
            <p className="block leading-[18px] whitespace-pre">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="bg-[#32394c] relative rounded shrink-0 w-full" data-name="Segmented Control">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-start p-[2px] relative w-full">
          <Option1 />
          <Option2 />
          <Option3 />
        </div>
      </div>
    </div>
  );
}

function FilterList() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter_list">
          <mask
            height="16"
            id="mask0_1245_19432"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1245_19432)">
            <path d={svgPaths.p8cd7480} fill="var(--fill-0, #3874FF)" id="filter_list_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton11() {
  return (
    <div className="relative rounded shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <FilterList />
    </div>
  );
}

function NoOfIcons112Px18Px1() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <IconSkeleton11 />
    </div>
  );
}

function IconLeft1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Left"
    >
      <NoOfIcons112Px18Px1 />
    </div>
  );
}

function IconSkeleton12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1245_19447)" id="Icon Skeleton 10">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #3874FF)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1245_19447">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons112Px18Px2() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <IconSkeleton12 />
    </div>
  );
}

function IconRight() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Right"
    >
      <NoOfIcons112Px18Px2 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-center justify-start leading-[0] px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <IconLeft1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Add Filter</p>
      </div>
      <IconRight />
    </div>
  );
}

function CardControls() {
  return (
    <div
      className="box-border content-stretch flex h-[26px] items-center justify-start p-0 relative shrink-0 w-[215px]"
      data-name="Card Controls"
    >
      <Button1 />
    </div>
  );
}

function CardControls1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card Controls"
    >
      <SegmentedControl />
      <CardControls />
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start px-1 py-0 relative rounded-sm shrink-0"
      data-name="Label"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-nowrap">
        <p className="block leading-[18px] whitespace-pre">1/0</p>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card Header"
    >
      <Label />
      <div className="basis-0 font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cf3b3b] text-[12px]">
        <p className="block css-eoz90d leading-[18px] text-[7.74px]">{` ⬤`}</p>
      </div>
    </div>
  );
}

function Group4339() {
  return (
    <div className="absolute h-4 left-1/2 top-1 translate-x-[-50%] w-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="Group 4339">
          <g filter="url(#filter0_i_1245_19422)" id="Rectangle 274261">
            <path d={svgPaths.pb26d980} fill="url(#paint0_linear_1245_19422)" />
          </g>
          <foreignObject height="8.9" width="18.1309" x="-3.06544" y="1.80515">
            <div
              style={{ backdropFilter: "blur(2px)", height: "100%", width: "100%" }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 6.25515H10.6154"
            data-figma-bg-blur-radius="4"
            id="Line 141"
            stroke="url(#paint1_linear_1245_19422)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <foreignObject height="8.9" width="18.1309" x="-3.06544" y="3.71778">
            <div
              style={{ backdropFilter: "blur(2px)", height: "100%", width: "100%" }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 8.16778H10.6154"
            data-figma-bg-blur-radius="4"
            id="Line 142"
            stroke="url(#paint2_linear_1245_19422)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <foreignObject height="8.9" width="18.1309" x="-3.06544" y="5.63038">
            <div
              style={{ backdropFilter: "blur(2px)", height: "100%", width: "100%" }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 10.0804H10.6154"
            data-figma-bg-blur-radius="4"
            id="Line 143"
            stroke="url(#paint3_linear_1245_19422)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <foreignObject height="8.9" width="18.1309" x="-3.06544" y="7.54297">
            <div
              style={{ backdropFilter: "blur(2px)", height: "100%", width: "100%" }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 11.993H10.6154"
            data-figma-bg-blur-radius="4"
            id="Line 144"
            stroke="url(#paint4_linear_1245_19422)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <foreignObject height="8.9" width="13.5154" x="-3.06544" y="9.45557">
            <div
              style={{ backdropFilter: "blur(2px)", height: "100%", width: "100%" }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 13.9056H6"
            data-figma-bg-blur-radius="4"
            id="Line 145"
            stroke="url(#paint5_linear_1245_19422)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path d={svgPaths.pcfd4e80} fill="url(#paint6_linear_1245_19422)" id="Rectangle 274262" />
          <path d={svgPaths.p1301ce00} fill="url(#paint7_linear_1245_19422)" id="Rectangle 274304" />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16"
            id="filter0_i_1245_19422"
            width="12"
            x="0"
            y="0"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.219608 0 0 0 0 0.137255 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1245_19422" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1245_19422" x1="6" x2="6" y1="0" y2="16">
            <stop offset="0.0844957" stopColor="#FF8B78" />
            <stop offset="1" stopColor="#F8503E" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_1245_19422"
            x1="6"
            x2="6"
            y1="6.25515"
            y2="7.25515"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_1245_19422"
            x1="6"
            x2="6"
            y1="8.16778"
            y2="9.16778"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_1245_19422"
            x1="6"
            x2="6"
            y1="10.0804"
            y2="11.0804"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_1245_19422"
            x1="6"
            x2="6"
            y1="11.993"
            y2="12.993"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_1245_19422"
            x1="3.69228"
            x2="3.69228"
            y1="13.9056"
            y2="14.9056"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_1245_19422"
            x1="10.571"
            x2="7.78375"
            y1="1.09782"
            y2="4.22608"
          >
            <stop stopColor="#FF7667" />
            <stop offset="1" stopColor="#FFC0BA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1245_19422" x1="3" x2="3" y1="1" y2="5">
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
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <Group4339 />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div
      className="box-border content-stretch flex gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ChecklistIconsImports />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="block leading-[20px] whitespace-pre">01</p>
      </div>
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="block leading-[20px] whitespace-pre">INVOICE</p>
      </div>
      <NoOfIcons />
    </div>
  );
}

function Textblock() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Textblock"
    >
      <Title />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] w-full">
        <p className="block leading-[20px]">Invoice Value Cannot be Null or Negative or Zero.</p>
      </div>
    </div>
  );
}

function LabelValue() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#cdcfd3] text-[14px] w-full"
      data-name="Label & Value"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 w-[116px]">
        <p className="block leading-[18px]">Error Code : 205</p>
      </div>
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow min-h-px min-w-px opacity-0 relative shrink-0">
        <p className="block leading-[18px]">Value</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div
      className="bg-[#32394c] relative rounded-lg shadow-[0px_0px_11px_1px_#272d3f] shrink-0 w-full"
      data-name="Card 1"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative w-full">
          <CardHeader />
          <Textblock />
          <LabelValue />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start px-1 py-0 relative rounded-sm shrink-0"
      data-name="Label"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-nowrap">
        <p className="block leading-[18px] whitespace-pre">1/1</p>
      </div>
    </div>
  );
}

function CardHeader1() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card Header"
    >
      <Label1 />
      <div className="basis-0 font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cf3b3b] text-[12px]">
        <p className="block css-eoz90d leading-[18px] text-[7.74px]">{` ⬤`}</p>
      </div>
    </div>
  );
}

function Group42002() {
  return (
    <div className="absolute contents inset-[66.35%_20.86%_22.84%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter inset-[66.35%_20.86%_22.84%_21.03%] rounded-[0.5px]">
        <div
          aria-hidden="true"
          className="absolute border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[0.5px]"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[69.95%_60.81%_26.44%_24.66%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[69.95%_42.66%_26.44%_42.82%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[69.95%_22.68%_26.44%_60.98%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
    </div>
  );
}

function Group42003() {
  return (
    <div className="absolute contents inset-[51.89%_20.95%_37.3%_20.95%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter inset-[51.89%_20.95%_37.3%_20.95%] rounded-[0.5px]">
        <div
          aria-hidden="true"
          className="absolute border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[0.5px]"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[55.5%_61.57%_40.9%_23.9%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[55.5%_43.41%_40.9%_42.06%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[55.5%_23.44%_40.9%_60.22%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
    </div>
  );
}

function Group42005() {
  return (
    <div className="absolute contents inset-[37.43%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter inset-[37.43%_20.86%_51.76%_21.03%] rounded-[0.5px]">
        <div
          aria-hidden="true"
          className="absolute border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[0.5px]"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[41.04%_61.49%_55.36%_23.98%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[41.04%_43.33%_55.36%_42.14%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[41.04%_23.36%_55.36%_60.3%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
    </div>
  );
}

function Group42004() {
  return (
    <div className="absolute contents inset-[24.17%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[24.17%_64.45%_71.54%_21.03%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <Group42005 />
    </div>
  );
}

function Group42037() {
  return (
    <div className="absolute contents left-1 top-1">
      <div className="absolute inset-[16.667%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g filter="url(#filter0_i_1245_19436)" id="Rectangle 274306">
            <path d={svgPaths.p1a4c1380} fill="url(#paint0_linear_1245_19436)" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="16"
              id="filter0_i_1245_19436"
              width="16"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.319581 0 0 0 0 0.136525 0 0 0 0 0.853497 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1245_19436" />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1245_19436"
              x1="-4.5"
              x2="23.0564"
              y1="-4.8"
              y2="1.16171"
            >
              <stop offset="0.0830829" stopColor="#7347F0" />
              <stop offset="0.753236" stopColor="#B49BFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group42002 />
      <Group42003 />
      <Group42004 />
      <div className="absolute left-[11.94px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <foreignObject height="9" width="9" x="-4" y="-4">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_1211_41903_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <g data-figma-bg-blur-radius="4" id="Ellipse 2863">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_1211_41903)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_1211_41903)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1211_41903_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1211_41903"
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="1"
            >
              <stop stopColor="#C7B5FB" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1211_41903"
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="1.91116"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[13.47px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <foreignObject height="9" width="9" x="-4" y="-4">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_1211_41903_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <g data-figma-bg-blur-radius="4" id="Ellipse 2863">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_1211_41903)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_1211_41903)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1211_41903_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1211_41903"
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="1"
            >
              <stop stopColor="#C7B5FB" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1211_41903"
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="1.91116"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[4.283px] right-[4px] top-[4px] w-[4.09px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p39d5e8f0} fill="url(#paint0_linear_1211_42221)" id="Rectangle 274262" />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1211_42221"
              x1="3.26346"
              x2="-1.14494"
              y1="-1.1893"
              y2="3.84843"
            >
              <stop offset="0.0807087" stopColor="#6D3BF8" />
              <stop offset="1" stopColor="#D6C9FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChecklistIconsImports1() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <Group42037 />
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div
      className="box-border content-stretch flex gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ChecklistIconsImports1 />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="block leading-[20px] whitespace-pre">02</p>
      </div>
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="block leading-[20px] whitespace-pre">ITEMS</p>
      </div>
      <NoOfIcons1 />
    </div>
  );
}

function Textblock1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Textblock"
    >
      <Title1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] w-full">
        <p className="block leading-[20px]">Item Description must be entered.</p>
      </div>
    </div>
  );
}

function LabelValue1() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label & Value"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] w-[116px]">
        <p className="block leading-[18px]">Error Code : 306</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div
      className="bg-[#32394c] relative rounded-lg shadow-[0px_0px_11px_1px_#272d3f] shrink-0 w-full"
      data-name="Card 2"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative w-full">
          <CardHeader1 />
          <Textblock1 />
          <LabelValue1 />
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start px-1 py-0 relative rounded-sm shrink-0"
      data-name="Label"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-nowrap">
        <p className="block leading-[18px] whitespace-pre">1/2</p>
      </div>
    </div>
  );
}

function CardHeader2() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card Header"
    >
      <Label2 />
      <div className="basis-0 font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cf3b3b] text-[12px]">
        <p className="block css-eoz90d leading-[18px] text-[7.74px]">{` ⬤`}</p>
      </div>
    </div>
  );
}

function Group42006() {
  return (
    <div className="absolute contents inset-[66.35%_20.86%_22.84%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter inset-[66.35%_20.86%_22.84%_21.03%] rounded-[0.5px]">
        <div
          aria-hidden="true"
          className="absolute border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[0.5px]"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[69.95%_60.81%_26.44%_24.66%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[69.95%_42.66%_26.44%_42.82%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[69.95%_22.68%_26.44%_60.98%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
    </div>
  );
}

function Group42007() {
  return (
    <div className="absolute contents inset-[51.89%_20.95%_37.3%_20.95%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter inset-[51.89%_20.95%_37.3%_20.95%] rounded-[0.5px]">
        <div
          aria-hidden="true"
          className="absolute border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[0.5px]"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[55.5%_61.57%_40.9%_23.9%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[55.5%_43.41%_40.9%_42.06%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[55.5%_23.44%_40.9%_60.22%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
    </div>
  );
}

function Group42008() {
  return (
    <div className="absolute contents inset-[37.43%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter inset-[37.43%_20.86%_51.76%_21.03%] rounded-[0.5px]">
        <div
          aria-hidden="true"
          className="absolute border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[0.5px]"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[41.04%_61.49%_55.36%_23.98%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[41.04%_43.33%_55.36%_42.14%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[41.04%_23.36%_55.36%_60.3%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
    </div>
  );
}

function Group42009() {
  return (
    <div className="absolute contents inset-[24.17%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[2px] backdrop-filter inset-[24.17%_64.45%_71.54%_21.03%] rounded-md">
        <div
          aria-hidden="true"
          className="absolute border-[#ffffff] border-[0.9px] border-solid inset-0 pointer-events-none rounded-md"
        />
      </div>
      <Group42008 />
    </div>
  );
}

function Group42038() {
  return (
    <div className="absolute contents left-1 top-1">
      <div className="absolute inset-[16.667%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g filter="url(#filter0_i_1245_19436)" id="Rectangle 274306">
            <path d={svgPaths.p1a4c1380} fill="url(#paint0_linear_1245_19436)" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="16"
              id="filter0_i_1245_19436"
              width="16"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.319581 0 0 0 0 0.136525 0 0 0 0 0.853497 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1245_19436" />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1245_19436"
              x1="-4.5"
              x2="23.0564"
              y1="-4.8"
              y2="1.16171"
            >
              <stop offset="0.0830829" stopColor="#7347F0" />
              <stop offset="0.753236" stopColor="#B49BFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group42006 />
      <Group42007 />
      <Group42009 />
      <div className="absolute left-[11.94px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <foreignObject height="9" width="9" x="-4" y="-4">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_1211_41903_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <g data-figma-bg-blur-radius="4" id="Ellipse 2863">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_1211_41903)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_1211_41903)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1211_41903_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1211_41903"
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="1"
            >
              <stop stopColor="#C7B5FB" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1211_41903"
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="1.91116"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[13.47px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <foreignObject height="9" width="9" x="-4" y="-4">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_1211_41903_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <g data-figma-bg-blur-radius="4" id="Ellipse 2863">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_1211_41903)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_1211_41903)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1211_41903_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1211_41903"
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="1"
            >
              <stop stopColor="#C7B5FB" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1211_41903"
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="1.91116"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[4.283px] right-[4px] top-[4px] w-[4.09px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p39d5e8f0} fill="url(#paint0_linear_1211_42221)" id="Rectangle 274262" />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1211_42221"
              x1="3.26346"
              x2="-1.14494"
              y1="-1.1893"
              y2="3.84843"
            >
              <stop offset="0.0807087" stopColor="#6D3BF8" />
              <stop offset="1" stopColor="#D6C9FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChecklistIconsImports2() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <Group42038 />
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div
      className="box-border content-stretch flex gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ChecklistIconsImports2 />
    </div>
  );
}

function Title2() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="block leading-[20px] whitespace-pre">03</p>
      </div>
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="block leading-[20px] whitespace-pre">ITEMS</p>
      </div>
      <NoOfIcons2 />
    </div>
  );
}

function Textblock2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Textblock"
    >
      <Title2 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] w-full">
        <p className="block leading-[20px]">Field value is missing for mandatory field HSN</p>
      </div>
    </div>
  );
}

function LabelValue2() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Label & Value"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] w-[116px]">
        <p className="block leading-[18px]">Error Code : 600</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div
      className="bg-[#32394c] relative rounded-lg shadow-[0px_0px_11px_1px_#272d3f] shrink-0 w-full"
      data-name="Card 3"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative w-full">
          <CardHeader2 />
          <Textblock2 />
          <LabelValue2 />
        </div>
      </div>
    </div>
  );
}

function NoOfCardsVertical() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="No of Cards Vertical"
    >
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function CardLists() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px px-0 py-3 relative shrink-0 w-full"
      data-name="Card Lists"
    >
      <CardControls1 />
      <NoOfCardsVertical />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#242c40] relative size-full" data-name="Component">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative size-full">
          <TabTitlebar />
          <CardLists />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}