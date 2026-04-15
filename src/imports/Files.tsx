import svgPaths from "./svg-4ecx0sxhkw";
import imgScreenshot20250212At95415Am1 from "figma:asset/bc3eb327401b3fa4ac091f3c898d9aa470b84123.png";
import imgRectangle273358 from "figma:asset/a61caa2686adc08b76cf277d4e007f86d25b1166.png";
import imgRectangle273362 from "figma:asset/623447e0bb4c1d067ecb799809729800a7eb90ea.png";
import imgRectangle273363 from "figma:asset/1207a0cc31de24b68fac453870e478d803f5ddde.png";
import { imgIcon } from "./svg-itdvi";

function Mark() {
  return (
    <div className="absolute h-[32px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.333px]" data-name="Mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 32">
        <g id="Mark">
          <path d={svgPaths.p1d1c6f00} fill="url(#paint0_linear_1490_36913)" id="Rectangle 1805" />
          <path d={svgPaths.p2f5870f2} fill="url(#paint1_linear_1490_36913)" id="Rectangle 1805_2" />
          <path d={svgPaths.p30e32800} fill="url(#paint2_linear_1490_36913)" id="Rectangle 1813" />
          <path d={svgPaths.p11744380} fill="url(#paint3_linear_1490_36913)" id="Rectangle 1807" />
          <path d={svgPaths.p31e5ac00} fill="url(#paint4_linear_1490_36913)" id="Rectangle 1806" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1490_36913" x1="8.51224" x2="2.42334" y1="3.43591" y2="9.90072">
            <stop stopColor="#3874FF" />
            <stop offset="1" stopColor="#2852B5" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1490_36913" x1="18.734" x2="12.1398" y1="22.2212" y2="28.4871">
            <stop stopColor="#2852B5" />
            <stop offset="1" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1490_36913" x1="8.43409" x2="21.3863" y1="9.2237" y2="15.3269">
            <stop offset="0.0797732" stopColor="#3874FF" />
            <stop offset="0.37268" stopColor="#82A7FF" />
            <stop offset="0.813761" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1490_36913" x1="11.8385" x2="1.67426" y1="23.7239" y2="18.2375">
            <stop offset="0.0797732" stopColor="#3874FF" />
            <stop offset="0.374435" stopColor="#82A7FF" />
            <stop offset="1" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1490_36913" x1="3.46187" x2="21.5248" y1="12.1612" y2="19.5301">
            <stop offset="0.141199" stopColor="#3874FF" />
            <stop offset="0.424841" stopColor="#82A7FF" />
            <stop offset="0.751251" stopColor="#3874FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SentinelLogo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Sentinel Logo">
      <Mark />
    </div>
  );
}

function LogoMark() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Logo Mark">
      <SentinelLogo />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Logo">
      <LogoMark />
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36907)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #CDCFD3)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36907">
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

function NavbarDropdown() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0" data-name="Navbar Dropdown">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-[16px] text-nowrap whitespace-pre">Jobs</p>
      <DropdownIcon />
    </div>
  );
}

function Back() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1490_36899" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36899)">
            <path d={svgPaths.p24caea00} fill="var(--fill-0, #CDCFD3)" id="arrow_back" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[7.38%_16.93%]" data-name="icon">
      <div className="absolute bottom-[-2.59%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
          <g id="icon">
            <path clipRule="evenodd" d={svgPaths.p24f27600} fill="url(#paint0_linear_1490_36873)" fillRule="evenodd" id="Body" />
            <g data-figma-bg-blur-radius="3" filter="url(#filter0_i_1490_36873)" id="Shape 1">
              <rect fill="url(#paint1_linear_1490_36873)" height="9.42427" rx="2" width="11.9047" y="5.91736" />
            </g>
            <g data-figma-bg-blur-radius="15.8888" filter="url(#filter1_d_1490_36873)" id="Union">
              <mask fill="white" id="path-3-inside-1_1490_36873">
                <path d={svgPaths.p13548a80} />
              </mask>
              <path d={svgPaths.p13548a80} fill="url(#paint2_linear_1490_36873)" shapeRendering="crispEdges" />
              <path d={svgPaths.p1a275800} fill="url(#paint3_linear_1490_36873)" mask="url(#path-3-inside-1_1490_36873)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.4243" id="filter0_i_1490_36873" width="17.9047" x="-3" y="2.91736">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.208575 0 0 0 0 0.682247 0 0 0 0 0.610166 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1490_36873" />
            </filter>
            <clipPath id="bgblur_0_1490_36873_clip_path" transform="translate(3 -2.91736)">
              <rect height="9.42427" rx="2" width="11.9047" y="5.91736" />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.5804" id="filter1_d_1490_36873" width="34.3596" x="-11.4069" y="-7.53493">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.29097" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.282353 0 0 0 0 0.717647 0 0 0 0 0.643137 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1490_36873" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1490_36873" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_1_1490_36873_clip_path" transform="translate(11.4069 7.53493)">
              <path d={svgPaths.p13548a80} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1490_36873" x1="5.95233" x2="8.3083" y1="-1.02739" y2="3.42378">
              <stop offset="0.181501" stopColor="#97E9DC" />
              <stop offset="1" stopColor="#00B397" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1490_36873" x1="5.95235" x2="5.95235" y1="6.67078" y2="17.4691">
              <stop stopColor="#ADFFF2" />
              <stop offset="0.781643" stopColor="#00B498" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1490_36873" x1="7.06388" x2="3.9419" y1="9.64485" y2="10.4739">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.97" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1490_36873" x1="3.86774" x2="6.38222" y1="8.92366" y2="11.5296">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Lock">
      <Icon />
    </div>
  );
}

function AvatarAlphabet() {
  return (
    <div className="mr-[-10px] relative shrink-0 size-[24px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Avatar (Alphabet)">
          <circle cx="12" cy="12" fill="var(--fill-0, #FE7C7C)" id="Shape" r="11.5" stroke="var(--stroke-0, #242C40)" />
          <g id="AK">
            <path d={svgPaths.p187c5080} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p30fd8300} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarAlphabet1() {
  return (
    <div className="mr-[-10px] relative shrink-0 size-[24px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Avatar (Alphabet)">
          <circle cx="12" cy="12" fill="var(--fill-0, #FECA7C)" id="Shape" r="11.5" stroke="var(--stroke-0, #242C40)" />
          <g id="VJ">
            <path d={svgPaths.p1b67fd00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p358e6f00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarAlphabet2() {
  return (
    <div className="mr-[-10px] relative shrink-0 size-[24px]" data-name="Avatar (Alphabet)">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="Avatar (Alphabet)">
            <circle cx="13" cy="13" fill="var(--fill-0, #3874FF)" id="Shape" r="12.5" stroke="var(--stroke-0, #242C40)" />
            <g id="+3">
              <path d={svgPaths.pf843280} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p9d3df00} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MultiUsers() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0" data-name="Multi Users">
      <AvatarAlphabet />
      <AvatarAlphabet1 />
      <AvatarAlphabet2 />
    </div>
  );
}

function ScreenBlock() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Screen block">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">ICB/12345/2024-25</p>
      <Lock />
      <MultiUsers />
    </div>
  );
}

function SubModuleTitle() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Sub Module Title">
      <Back />
      <ScreenBlock />
    </div>
  );
}

function ModuleTitle() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Module Title">
      <div aria-hidden="true" className="absolute border-0 border-[#545d76] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <div className="flex h-[48px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "48", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[48px]" data-name="Seperator">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(84, 93, 118, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
                    <line id="Seperator" stroke="var(--stroke-0, #545D76)" x2="48" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <NavbarDropdown />
          <div className="flex h-[48px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "48", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[48px]" data-name="Seperator">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(84, 93, 118, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
                    <line id="Seperator" stroke="var(--stroke-0, #545D76)" x2="48" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <SubModuleTitle />
        </div>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left Side">
      <Logo />
      <ModuleTitle />
    </div>
  );
}

function IndividualTab() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <div aria-hidden="true" className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Files</p>
      </div>
    </div>
  );
}

function IndividualTab1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Job Details</p>
      </div>
    </div>
  );
}

function IndividualTab2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function HorizontalTab() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Horizontal Tab">
      <IndividualTab />
      <IndividualTab1 />
      <IndividualTab2 />
    </div>
  );
}

function ActivityHistory() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Activity history">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1490_36830" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36830)">
            <path d={svgPaths.p6d07b80} fill="var(--fill-0, #CDCFD3)" id="history" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <ActivityHistory />
    </div>
  );
}

function Timer() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1490_36882" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36882)">
            <path d={svgPaths.p1f467dc0} fill="var(--fill-0, #3874FF)" id="timer_play" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[12px] items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <Timer />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons3 />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] relative shrink-0" data-name="Button Content">
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Start</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="arrow">
          <mask height="16" id="mask0_1490_36779" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="8" />
          </mask>
          <g mask="url(#mask0_1490_36779)">
            <path d={svgPaths.p8236000} fill="var(--fill-0, #3874FF)" id="arrow_right" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(40,82,181,0.26)] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ButtonContent />
      <div className="flex h-[8px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "8", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[8px]" data-name="seperator-line">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
                <line id="seperator-line" stroke="var(--stroke-0, #3874FF)" strokeOpacity="0.36" x2="8" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Arrow />
    </div>
  );
}

function NavbarSubModuleIcons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Navbar Sub Module Icons">
      <NoOfIcons />
      <Button />
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute inset-[6.25%_31.25%_62.5%_37.5%]" data-name="indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="indicator">
          <circle cx="2.8125" cy="2.8125" fill="var(--fill-0, #CF3B3B)" fillOpacity="0.19" id="Ellipse 86" r="2.8125" />
          <circle cx="2.8125" cy="2.8125" fill="var(--fill-0, #CF3B3B)" id="Ellipse 85" r="1.6875" />
        </g>
      </svg>
    </div>
  );
}

function Campaign() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Campaign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1490_36847" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36847)">
            <path d={svgPaths.p30a00d00} fill="var(--fill-0, #CDCFD3)" id="campaign" />
          </g>
        </g>
      </svg>
      <Indicator />
    </div>
  );
}

function ChatSupport() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Chat support">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1490_36834" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36834)">
            <path d={svgPaths.p37d2a380} fill="var(--fill-0, #CDCFD3)" id="contact_support" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1490_36895" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36895)">
            <path d={svgPaths.p28009c00} fill="var(--fill-0, #CDCFD3)" id="notifications" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <Campaign />
      <ChatSupport />
      <Notifications />
    </div>
  );
}

function Unifo() {
  return (
    <div className="absolute h-[22px] left-1/2 top-0 translate-x-[-50%] w-[58px]" data-name="unifo 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 22">
        <g clipPath="url(#clip0_1490_36773)" id="unifo 1">
          <path clipRule="evenodd" d={svgPaths.p1c99ee80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36773">
            <rect fill="white" height="22" width="58" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomerLogo() {
  return (
    <div className="h-[24px] overflow-clip relative rounded-[4px] shrink-0 w-[84px]" data-name="Customer Logo">
      <Unifo />
    </div>
  );
}

function AvatarAlphabet3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Avatar (Alphabet)">
          <circle cx="12" cy="12" fill="var(--fill-0, #FE7C7C)" id="Shape" r="12" />
          <g id="AK">
            <path d={svgPaths.p187c5080} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p30fd8300} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="bg-[#242c40] relative rounded-[4px] shrink-0" data-name="Profile Details">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative rounded-[inherit]">
        <CustomerLogo />
        <AvatarAlphabet3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ProductUtilities() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Product Utilities">
      <NoOfIcons4 />
      <ProfileDetails />
    </div>
  );
}

function Utilities() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Utilities">
      <NavbarSubModuleIcons />
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "48", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[48px]" data-name="Seperator-line">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(84, 93, 118, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
                <line id="Seperator" stroke="var(--stroke-0, #545D76)" x2="48" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ProductUtilities />
    </div>
  );
}

function GlobalNavigation() {
  return (
    <div className="absolute bg-[#10182c] box-border content-stretch flex items-center justify-between left-0 px-[12px] py-0 right-0 top-0" data-name="Global Navigation">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LeftSide />
      <HorizontalTab />
      <Utilities />
    </div>
  );
}

function CursorCrosshair() {
  return (
    <div className="absolute left-[579.5px] size-[16px] top-[188px]" data-name="cursor-crosshair 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="cursor-crosshair 1">
          <path clipRule="evenodd" d={svgPaths.p3ea4380} fill="var(--fill-0, #3874FF)" fillRule="evenodd" id="Vector" />
          <g id="Mask group">
            <mask height="14" id="mask0_1490_36814" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="1" y="1">
              <g id="Group">
                <path d={svgPaths.p147c1d80} fill="var(--fill-0, white)" id="Vector_2" />
                <path clipRule="evenodd" d={svgPaths.p3ea4380} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" />
              </g>
            </mask>
            <g mask="url(#mask0_1490_36814)">
              <path d={svgPaths.p2ad41100} fill="var(--fill-0, white)" id="Vector_4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">PDF</p>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="bg-[#242c40] box-border content-stretch flex gap-[10px] items-center justify-center px-[9px] py-[15px] relative shrink-0 w-[76px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Title />
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="16" id="mask0_1490_36851" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1490_36851)">
            <path d={svgPaths.p24901c00} fill="var(--fill-0, white)" id="cancel" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[12px] items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#cf3b3b] box-border content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Reject</p>
      </div>
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="16" id="mask0_1490_36822" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1490_36822)">
            <path d={svgPaths.p365ecc80} fill="var(--fill-0, white)" id="check_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[12px] items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton2 />
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons6 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#00b196] box-border content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft2 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Approve</p>
      </div>
    </div>
  );
}

function AcceptRejectGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Accept & Reject Group">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#3874ff] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Save</p>
      </div>
    </div>
  );
}

function ToolbarActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Toolbar Actions">
      <Button3 />
      <Button4 />
    </div>
  );
}

function ToolbarActions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Toolbar Actions">
      <AcceptRejectGroup />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "24", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[24px]" data-name="Seperator">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(84, 93, 118, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Seperator" stroke="var(--stroke-0, #545D76)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ToolbarActions />
    </div>
  );
}

function RightSideControls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Right Side Controls">
      <ToolbarActions1 />
    </div>
  );
}

function ListToolbar() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="List Toolbar">
      <div aria-hidden="true" className="absolute border-0 border-[#545d76] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-end px-[12px] py-0 relative w-full">
          <RightSideControls />
        </div>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute bg-[#2d364d] content-stretch flex items-center left-0 top-[48px] w-[1440px]" data-name="Toolbar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Block />
      <ListToolbar />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Files</p>
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div className="bg-[#242c40] box-border content-stretch flex gap-[10px] items-center justify-center px-[9px] py-[15px] relative shrink-0 w-[76px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Title1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Pages</p>
      </div>
    </div>
  );
}

function Block2() {
  return (
    <div className="bg-[#36415a] box-border content-stretch flex gap-[10px] items-center justify-center px-[9px] py-[15px] relative shrink-0 w-[76px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Title2 />
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36907)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #CDCFD3)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36907">
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
      <ArrowDropdown1 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center p-[4px] relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">331000 - Commercial inv..</p>
      <DropdownIcon1 />
    </div>
  );
}

function LeftsideControls() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Leftside Controls">
      <Block2 />
      <Dropdown />
    </div>
  );
}

function ZoomOut() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Zoom out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Zoom out">
          <g id="icon">
            <mask height="16" id="mask0_1490_36842" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
            </mask>
            <g mask="url(#mask0_1490_36842)"></g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p1302d900} fill="var(--fill-0, #CDCFD3)" fillRule="evenodd" id="Line 107 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85px]" data-name="Slider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 16">
        <g id="Slider">
          <rect fill="var(--fill-0, #545D76)" height="2" id="Base" rx="1" width="85" y="7" />
          <rect fill="var(--fill-0, #3874FF)" height="2" id="Fill" rx="1" width="26.1875" y="7" />
          <circle cx="24.5564" cy="8" fill="var(--fill-0, #3874FF)" id="Ellipse 1" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="add_circle">
          <mask height="16" id="mask0_1490_36838" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1490_36838)">
            <path d={svgPaths.p17180a00} fill="var(--fill-0, #CDCFD3)" id="add_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ZoomOut />
      <Slider />
      <Add />
    </div>
  );
}

function ZoomPage() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Zoom Page">
      <Frame />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">100 %</p>
    </div>
  );
}

function RotatePdf() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Rotate Pdf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="rotate_left">
          <mask height="18" id="mask0_1490_36865" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36865)">
            <path d={svgPaths.p118840c0} fill="var(--fill-0, #9497A1)" id="rotate_left_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RotatePdf1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Rotate Pdf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="rotate_right">
          <mask height="18" id="mask0_1490_36826" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36826)">
            <path d={svgPaths.p363c5780} fill="var(--fill-0, #9497A1)" id="rotate_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <ZoomPage />
      <RotatePdf />
      <RotatePdf1 />
    </div>
  );
}

function ToolbarIcons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Toolbar Icons">
      <NoOfIcons7 />
    </div>
  );
}

function RightSideControls1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Right Side Controls">
      <ToolbarIcons />
    </div>
  );
}

function ListToolbar1() {
  return (
    <div className="basis-0 bg-[#2d364d] grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="List Toolbar">
      <div aria-hidden="true" className="absolute border-0 border-[#545d76] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between pl-0 pr-[12px] py-0 relative w-full">
          <LeftsideControls />
          <RightSideControls1 />
        </div>
      </div>
    </div>
  );
}

function Toolbar1() {
  return (
    <div className="bg-[#2d364d] content-stretch flex items-center relative shrink-0 w-full" data-name="Toolbar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Block1 />
      <ListToolbar1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="double_arrow">
          <mask height="18" id="mask0_1490_36920" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36920)">
            <path d={svgPaths.p2c139180} fill="var(--fill-0, #9497A1)" id="double_arrow_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <Icon1 />
    </div>
  );
}

function CollapsedTitlebarActions() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Collapsed Titlebar Actions">
      <NoOfIcons8 />
    </div>
  );
}

function SidebarCollapsedTitlebar() {
  return (
    <div className="bg-[#242c40] h-[48px] relative shrink-0 w-[52px]" data-name="Sidebar Collapsed  Titlebar">
      <div className="h-[48px] overflow-clip relative rounded-[inherit] w-[52px]">
        <CollapsedTitlebarActions />
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CollapsedCardTitle() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Collapsed Card Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">FL 01</p>
    </div>
  );
}

function CollapsedCard() {
  return (
    <div className="bg-[#32394c] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[50px]" data-name="Collapsed Card">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_11px_1px_#272d3f]" />
      <CollapsedCardTitle />
    </div>
  );
}

function CollapsedCardTitle1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[32px]" data-name="Collapsed Card Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">FL 02</p>
    </div>
  );
}

function CollapsedCard1() {
  return (
    <div className="bg-[#32394c] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[4px] shadow-[0px_0px_11px_1px_#272d3f] shrink-0 w-[50px]" data-name="Collapsed Card">
      <CollapsedCardTitle1 />
    </div>
  );
}

function CardListCollapsed() {
  return (
    <div className="basis-0 bg-[#242c40] box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px px-0 py-[12px] relative shrink-0" data-name="Card List Collapsed">
      <CollapsedCard />
      <CollapsedCard1 />
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="basis-0 bg-[#242c40] grow min-h-px min-w-px relative shrink-0" data-name="Sidebar Skeleton">
      <div className="box-border content-stretch flex flex-col h-full items-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">
        <SidebarCollapsedTitlebar />
        <CardListCollapsed />
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Sidebar">
      <SidebarSkeleton />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="double_arrow">
          <mask height="18" id="mask0_1490_36920" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36920)">
            <path d={svgPaths.p2c139180} fill="var(--fill-0, #9497A1)" id="double_arrow_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <Icon2 />
    </div>
  );
}

function CollapsedTitlebarActions1() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Collapsed Titlebar Actions">
      <NoOfIcons9 />
    </div>
  );
}

function SidebarCollapsedTitlebar1() {
  return (
    <div className="bg-[#36415a] h-[48px] relative shrink-0 w-[52px]" data-name="Sidebar Collapsed  Titlebar">
      <div className="h-[48px] overflow-clip relative rounded-[inherit] w-[52px]">
        <CollapsedTitlebarActions1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CollapsedCardTitle2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Collapsed Card Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">PG 01</p>
    </div>
  );
}

function CollapsedCard2() {
  return (
    <div className="bg-[#32394c] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[50px]" data-name="Collapsed Card">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_11px_1px_#272d3f]" />
      <CollapsedCardTitle2 />
    </div>
  );
}

function CollapsedCardTitle3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[32px]" data-name="Collapsed Card Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">PG 02</p>
    </div>
  );
}

function CollapsedCard3() {
  return (
    <div className="bg-[#32394c] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[4px] shadow-[0px_0px_11px_1px_#272d3f] shrink-0 w-[50px]" data-name="Collapsed Card">
      <CollapsedCardTitle3 />
    </div>
  );
}

function CardListCollapsed1() {
  return (
    <div className="basis-0 bg-[#36415a] box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px px-0 py-[12px] relative shrink-0" data-name="Card List Collapsed">
      <CollapsedCard2 />
      <CollapsedCard3 />
    </div>
  );
}

function SidebarSkeleton1() {
  return (
    <div className="basis-0 bg-[#36415a] grow min-h-px min-w-px relative shrink-0" data-name="Sidebar Skeleton">
      <div className="box-border content-stretch flex flex-col h-full items-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">
        <SidebarCollapsedTitlebar1 />
        <CardListCollapsed1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Sidebar">
      <SidebarSkeleton1 />
    </div>
  );
}

function Pages() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Pages">
      <div className="absolute aspect-[1818/2350] left-[-2.88%] right-[-6.23%] top-[-0.21px]" data-name="Screenshot 2025-02-12 at 9.54.15 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250212At95415Am1} />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Body">
      <Sidebar />
      <Sidebar1 />
      <Pages />
    </div>
  );
}

function ScrollBar() {
  return (
    <div className="absolute h-[52px] right-0 top-[49px] w-[6px]" data-name="Scroll Bar">
      <div className="absolute bg-[#cdcfd3] inset-0 rounded-[22px]" data-name="Vertical Bar" />
    </div>
  );
}

function ScrollBar1() {
  return (
    <div className="h-[52px] relative w-[6px]" data-name="Scroll Bar">
      <div className="absolute bg-[#cdcfd3] inset-0 rounded-[22px]" data-name="Vertical Bar" />
    </div>
  );
}

function PdfViewer() {
  return (
    <div className="absolute bg-[#cad2e5] content-stretch flex flex-col h-[842px] items-start left-0 overflow-clip top-[96px] w-[715px]" data-name="PDF Viewer">
      <Toolbar1 />
      <Body />
      <ScrollBar />
      <div className="absolute bottom-0 flex h-[6px] items-center justify-center left-[152px] w-[52px]" style={{ "--transform-inner-width": "6", "--transform-inner-height": "52" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <ScrollBar1 />
        </div>
      </div>
    </div>
  );
}

function CursorCrosshair1() {
  return (
    <div className="absolute left-[551.5px] size-[16px] top-[329px]" data-name="cursor-crosshair 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="cursor-crosshair 1">
          <path clipRule="evenodd" d={svgPaths.p3ea4380} fill="var(--fill-0, #3874FF)" fillRule="evenodd" id="Vector" />
          <g id="Mask group">
            <mask height="14" id="mask0_1490_36814" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="14" x="1" y="1">
              <g id="Group">
                <path d={svgPaths.p147c1d80} fill="var(--fill-0, white)" id="Vector_2" />
                <path clipRule="evenodd" d={svgPaths.p3ea4380} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" />
              </g>
            </mask>
            <g mask="url(#mask0_1490_36814)">
              <path d={svgPaths.p2ad41100} fill="var(--fill-0, white)" id="Vector_4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute bg-[rgba(0,208,176,0.05)] content-stretch flex gap-[10px] h-[11px] items-start left-[calc(50%-129.5px)] top-[372px] translate-x-[-50%] w-[51px]" data-name="Box">
      <div aria-hidden="true" className="absolute border border-[#00b196] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="box" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[16px] left-1/2 top-[4px] translate-x-[-50%] w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="Group 4339">
          <g filter="url(#filter0_i_1490_36797)" id="Rectangle 274261">
            <path d={svgPaths.pb26d980} fill="url(#paint0_linear_1490_36797)" />
          </g>
          <path d="M1.38456 6.25515H10.6154" data-figma-bg-blur-radius="4" id="Line 141" stroke="url(#paint1_linear_1490_36797)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 8.16778H10.6154" data-figma-bg-blur-radius="4" id="Line 142" stroke="url(#paint2_linear_1490_36797)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 10.0804H10.6154" data-figma-bg-blur-radius="4" id="Line 143" stroke="url(#paint3_linear_1490_36797)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 11.993H10.6154" data-figma-bg-blur-radius="4" id="Line 144" stroke="url(#paint4_linear_1490_36797)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 13.9056H6" data-figma-bg-blur-radius="4" id="Line 145" stroke="url(#paint5_linear_1490_36797)" strokeLinecap="round" strokeWidth="0.9" />
          <path d={svgPaths.pcfd4e80} fill="url(#paint6_linear_1490_36797)" id="Rectangle 274262" />
          <path d={svgPaths.p1301ce00} fill="url(#paint7_linear_1490_36797)" id="Rectangle 274304" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_1490_36797" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.219608 0 0 0 0 0.137255 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1490_36797" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1490_36797" x1="6" x2="6" y1="0" y2="16">
            <stop offset="0.0844957" stopColor="#FF8B78" />
            <stop offset="1" stopColor="#F8503E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1490_36797" x1="6" x2="6" y1="6.25515" y2="7.25515">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1490_36797" x1="6" x2="6" y1="8.16778" y2="9.16778">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1490_36797" x1="6" x2="6" y1="10.0804" y2="11.0804">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1490_36797" x1="6" x2="6" y1="11.993" y2="12.993">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1490_36797" x1="3.69228" x2="3.69228" y1="13.9056" y2="14.9056">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1490_36797" x1="10.571" x2="7.78375" y1="1.09782" y2="4.22608">
            <stop stopColor="#FF7667" />
            <stop offset="1" stopColor="#FFC0BA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1490_36797" x1="3" x2="3" y1="1" y2="5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.43" />
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

function NoOfIcons10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+124.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Heading">
      <NoOfIcons10 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#050e25] text-[16px] text-nowrap whitespace-pre">Invoice Details</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="bg-[#dde3f2] h-[40px] relative rounded-tl-[4px] shrink-0 w-full" data-name="Section Header">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
      <Heading />
    </div>
  );
}

function SubHeader() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Sub Header">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-152.52px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="1" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">Invoice details</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Invoice No.</p>
    </div>
  );
}

function Textfield() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Enter Invoice No.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield />
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field />
    </div>
  );
}

function GridHorizontal() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell />
      <Component />
    </div>
  );
}

function FormLableCell1() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Invoice Date</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[12.5%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.375px_-2.25px] mask-size-[18px_18px]" data-name="icon" style={{ maskImage: `url('${imgIcon}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <g id="icon">
          <path d={svgPaths.p3e528100} fill="var(--fill-0, #626776)" id="calendar_today" />
          <rect fill="var(--fill-0, #626776)" height="3.375" id="Rectangle 1609" rx="0.5" width="3.375" x="5.625" y="7.875" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="date picker">
      <Icon3 />
    </div>
  );
}

function CalenderIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Calender icon">
      <DatePicker />
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">Select Date</p>
          <CalenderIcon />
        </div>
      </div>
    </div>
  );
}

function GridHorizontal1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell1 />
      <Component1 />
    </div>
  );
}

function FormRow() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal />
      <GridHorizontal1 />
    </div>
  );
}

function FormLableCell2() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Invoice Amount</p>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field1 />
    </div>
  );
}

function GridHorizontal2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell2 />
      <Component2 />
    </div>
  );
}

function FormLableCell3() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Invoice Currency</p>
    </div>
  );
}

function ArrowDropdown2() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36787)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36787">
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
      <ArrowDropdown2 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon2 />
        </div>
      </div>
    </div>
  );
}

function FieldType() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field Type">
      <Dropdown1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <FieldType />
    </div>
  );
}

function GridHorizontal3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell3 />
      <Component3 />
    </div>
  );
}

function FormRow1() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal2 />
      <GridHorizontal3 />
    </div>
  );
}

function FormLableCell4() {
  return (
    <div className="bg-[rgba(0,208,176,0.1)] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border border-[#00b196] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`Supplier  Name`}</p>
    </div>
  );
}

function Textfield2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(113,144,214,0.47)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">|</p>
        </div>
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field2 />
    </div>
  );
}

function GridHorizontal4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell4 />
      <Component4 />
    </div>
  );
}

function FormLableCell5() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Buyer Name</p>
    </div>
  );
}

function Textfield3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Enter Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield3 />
    </div>
  );
}

function Component5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field3 />
    </div>
  );
}

function GridHorizontal5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell5 />
      <Component5 />
    </div>
  );
}

function FormRow2() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal4 />
      <GridHorizontal5 />
    </div>
  );
}

function FormLableCell6() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Supplier Address</p>
        </div>
      </div>
    </div>
  );
}

function LableCount() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-[150px]" data-name="Lable Count">
      <FormLableCell6 />
    </div>
  );
}

function Textfield4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Enter Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield4 />
    </div>
  );
}

function Component6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Component 5">
      <Field4 />
    </div>
  );
}

function FieldCount() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start min-h-px min-w-px relative shrink-0" data-name="Field Count">
      <Component6 />
    </div>
  );
}

function GridHorizontal6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <LableCount />
      <FieldCount />
    </div>
  );
}

function FormLableCell7() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Buyer Address</p>
        </div>
      </div>
    </div>
  );
}

function LableCount1() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-[150px]" data-name="Lable Count">
      <FormLableCell7 />
    </div>
  );
}

function Textfield5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative size-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Enter Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field5() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield5 />
    </div>
  );
}

function Component7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Component 5">
      <Field5 />
    </div>
  );
}

function FieldCount1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start min-h-px min-w-px relative shrink-0" data-name="Field Count">
      <Component7 />
    </div>
  );
}

function GridHorizontal7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <LableCount1 />
      <FieldCount1 />
    </div>
  );
}

function FormRow3() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal6 />
      <GridHorizontal7 />
    </div>
  );
}

function FormLableCell8() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Terms Of Invoice</p>
    </div>
  );
}

function ArrowDropdown3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36787)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36787">
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
      <ArrowDropdown3 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon3 />
        </div>
      </div>
    </div>
  );
}

function Field6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Dropdown2 />
    </div>
  );
}

function Component8() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field6 />
    </div>
  );
}

function GridHorizontal8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell8 />
      <Component8 />
    </div>
  );
}

function FormLableCell9() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Terms Place</p>
    </div>
  );
}

function ArrowDropdown4() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36787)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36787">
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
      <ArrowDropdown4 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select Place</p>
          <DropdownIcon4 />
        </div>
      </div>
    </div>
  );
}

function Field7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Dropdown3 />
    </div>
  );
}

function Component9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field7 />
    </div>
  );
}

function GridHorizontal9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell9 />
      <Component9 />
    </div>
  );
}

function FormRow4() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal8 />
      <GridHorizontal9 />
    </div>
  );
}

function FormLableCell10() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Other Chargers</p>
    </div>
  );
}

function Textfield6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Enter amoutn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field8() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield6 />
    </div>
  );
}

function Component10() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field8 />
    </div>
  );
}

function GridHorizontal10() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell10 />
      <Component10 />
    </div>
  );
}

function FormLableCell11() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Other Currency</p>
    </div>
  );
}

function ArrowDropdown5() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36787)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36787">
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
      <ArrowDropdown5 />
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select Currency</p>
          <DropdownIcon5 />
        </div>
      </div>
    </div>
  );
}

function Field9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Dropdown4 />
    </div>
  );
}

function Component11() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field9 />
    </div>
  );
}

function GridHorizontal11() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell11 />
      <Component11 />
    </div>
  );
}

function FormRow5() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal10 />
      <GridHorizontal11 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <FormRow />
      <FormRow1 />
      <FormRow2 />
      <FormRow3 />
      <FormRow4 />
      <FormRow5 />
    </div>
  );
}

function NoOfRows() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Container />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SubHeader />
      <NoOfRows />
    </div>
  );
}

function SubHeader1() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Sub Header">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%+0.98px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="2" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">CHArges</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell12() {
  return (
    <div className="bg-white h-[30px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell13() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[86px] z-[5]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Rate</p>
    </div>
  );
}

function FormLableCell14() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[4]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Amount</p>
        </div>
      </div>
    </div>
  );
}

function FormLableCell15() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[3]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Currency</p>
        </div>
      </div>
    </div>
  );
}

function FormRow6() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell12 />
      <FormLableCell13 />
      <FormLableCell14 />
      <FormLableCell15 />
    </div>
  );
}

function FormLableCell16() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Freight</p>
    </div>
  );
}

function Textfield7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Enter Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield7 />
    </div>
  );
}

function ArrowDropdown6() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36787)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36787">
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
      <ArrowDropdown6 />
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon6 />
        </div>
      </div>
    </div>
  );
}

function FieldType2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Dropdown5 />
    </div>
  );
}

function ArrowDropdown7() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36787)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36787">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown7 />
    </div>
  );
}

function Dropdown6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select Currency</p>
          <DropdownIcon7 />
        </div>
      </div>
    </div>
  );
}

function FieldType3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown6 />
    </div>
  );
}

function FormRow7() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell16 />
      <FieldType1 />
      <FieldType2 />
      <FieldType3 />
    </div>
  );
}

function FormLableCell17() {
  return (
    <div className="bg-[#f1f4f8] box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Insurance</p>
    </div>
  );
}

function Textfield8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Enter Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield8 />
    </div>
  );
}

function ArrowDropdown8() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36787)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36787">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown8 />
    </div>
  );
}

function Dropdown7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon8 />
        </div>
      </div>
    </div>
  );
}

function FieldType5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Dropdown7 />
    </div>
  );
}

function ArrowDropdown9() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1490_36787)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1490_36787">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown9 />
    </div>
  );
}

function Dropdown8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select Currency</p>
          <DropdownIcon9 />
        </div>
      </div>
    </div>
  );
}

function FieldType6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown8 />
    </div>
  );
}

function FormRow8() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell17 />
      <FieldType4 />
      <FieldType5 />
      <FieldType6 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <FormRow6 />
      <FormRow7 />
      <FormRow8 />
    </div>
  );
}

function NoOfRows1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Table />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SubHeader1 />
      <NoOfRows1 />
    </div>
  );
}

function SubGroup() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub Group">
      <Form />
      <Form1 />
    </div>
  );
}

function Form2() {
  return (
    <div className="bg-white h-[317px] relative rounded-[4px] shrink-0 w-full" data-name="Form">
      <div className="content-stretch flex flex-col h-[317px] items-start overflow-clip relative rounded-[inherit] w-full">
        <SectionHeader />
        <SubGroup />
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_1px_1px_0px] border-solid bottom-[-1px] left-0 pointer-events-none right-[-1px] rounded-bl-[4px] rounded-br-[5px] rounded-tl-[4px] rounded-tr-[5px] top-[-1px]" />
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 2">
          <path d={svgPaths.p1ea89400} fill="var(--fill-0, #626776)" id="dock_to_bottom" />
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1490_36869" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36869)">
            <path d={svgPaths.p1232db80} fill="var(--fill-0, #626776)" id="expand" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons  2">
      <IconSkeleton1 />
      <IconSkeleton4 />
    </div>
  );
}

function IconSkeleton5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_1490_36783" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1490_36783)">
            <path d={svgPaths.p2a7e0f40} fill="var(--fill-0, #626776)" id="docs_add_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons  1">
      <IconSkeleton5 />
    </div>
  );
}

function IconGroup() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[8px] py-[2px] relative rounded-[24px] shrink-0" data-name="Icon Group">
      <NoOfIcons2 />
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "16", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[16px]" data-name="Seperator">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 213, 227, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                <line id="Seperator" stroke="var(--stroke-0, #D0D5E3)" x2="16" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <NoOfIcons1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center justify-center right-[4px] top-1/2 translate-y-[-50%]" data-name="Actions">
      <IconGroup />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[66.35%_20.86%_22.84%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[66.35%_20.86%_22.84%_21.03%] rounded-[0.5px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[69.95%_60.81%_26.44%_24.66%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[69.95%_42.66%_26.44%_42.82%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[69.95%_22.68%_26.44%_60.98%] rounded-[6px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[51.89%_20.95%_37.3%_20.95%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[51.89%_20.95%_37.3%_20.95%] rounded-[0.5px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[55.5%_61.57%_40.9%_23.9%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[55.5%_43.42%_40.9%_42.06%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[55.5%_23.44%_40.9%_60.22%] rounded-[6px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[37.43%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[6.528px] backdrop-filter border-[0.1px] border-[rgba(255,255,255,0.35)] border-solid inset-[37.43%_20.86%_51.76%_21.03%] rounded-[0.5px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[41.04%_61.49%_55.36%_23.98%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[41.04%_43.33%_55.36%_42.14%] rounded-[6px]" />
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[41.04%_23.36%_55.36%_60.3%] rounded-[6px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[24.17%_20.86%_51.76%_21.03%]">
      <div className="absolute backdrop-blur-[2px] backdrop-filter border-[0.9px] border-solid border-white inset-[24.17%_64.45%_71.54%_21.03%] rounded-[6px]" />
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[4px] top-[4px]">
      <div className="absolute inset-[16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g filter="url(#filter0_i_1490_36855)" id="Rectangle 274306">
            <path d={svgPaths.p1a4c1380} fill="url(#paint0_linear_1490_36855)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_1490_36855" width="16" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.319581 0 0 0 0 0.136525 0 0 0 0 0.853497 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1490_36855" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1490_36855" x1="-4.5" x2="23.0564" y1="-4.8" y2="1.16171">
              <stop offset="0.0830829" stopColor="#7347F0" />
              <stop offset="0.753236" stopColor="#B49BFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group2 />
      <Group3 />
      <Group4 />
      <div className="absolute left-[11.94px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <g data-figma-bg-blur-radius="4" id="Ellipse 2863">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_1490_36745)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_1490_36745)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1490_36745_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1490_36745" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop stopColor="#C7B5FB" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1490_36745" x1="0.5" x2="0.5" y1="0" y2="1.91116">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[13.47px] size-px top-[5.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
          <g data-figma-bg-blur-radius="4" id="Ellipse 2863">
            <circle cx="0.5" cy="0.5" fill="url(#paint0_linear_1490_36745)" r="0.5" />
            <circle cx="0.5" cy="0.5" r="0.5" stroke="url(#paint1_linear_1490_36745)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1490_36745_clip_path" transform="translate(4 4)">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1490_36745" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop stopColor="#C7B5FB" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1490_36745" x1="0.5" x2="0.5" y1="0" y2="1.91116">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[4.283px] right-[4px] top-[4px] w-[4.09px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p39d5e8f0} fill="url(#paint0_linear_1490_36903)" id="Rectangle 274262" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1490_36903" x1="3.26346" x2="-1.14494" y1="-1.1893" y2="3.84843">
              <stop offset="0.0807087" stopColor="#6D3BF8" />
              <stop offset="1" stopColor="#D6C9FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconSkeleton6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Skeleton 1">
      <Group6 />
    </div>
  );
}

function NoOfIcons11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Heading">
      <NoOfIcons11 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#050e25] text-[16px] text-nowrap whitespace-pre">Line items</p>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="bg-[#dde3f2] h-[40px] relative shrink-0 w-full" data-name="Section Header">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Actions />
      <Heading1 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative self-stretch shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Checkbox />
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] items-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[55px]">S.No</p>
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] items-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[184px]">Part Code</p>
    </div>
  );
}

function TableFreezedHeader() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 z-[3]" data-name="Table Freezed Header">
      <CheckboxCell />
      <TableHeaderCell />
      <TableHeaderCell1 />
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[424px]">Description</p>
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[84px]">HSN</p>
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[134px]">Quantity</p>
    </div>
  );
}

function TableHeaderCell5() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[134px]">UOM</p>
    </div>
  );
}

function TableHeaderCell6() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[184px]">Customs Qty</p>
    </div>
  );
}

function TableHeaderCell7() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[134px]">Unit Price</p>
    </div>
  );
}

function TableHeaderCell8() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[134px]">Amount</p>
    </div>
  );
}

function TableHeaderCell9() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[184px]">Country of Origin</p>
    </div>
  );
}

function TableHeaderCell10() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[284px]">Additional Description 1</p>
    </div>
  );
}

function TableHeaderCell11() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[284px]">Additional Description 2</p>
    </div>
  );
}

function TableHeaderCell12() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[284px]">Addtitonal Description 3</p>
    </div>
  );
}

function TableHeaderCell13() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[184px]">Brand</p>
    </div>
  );
}

function TableHeaderCell14() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[284px]">Model</p>
    </div>
  );
}

function TableScrollableHeader() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0 z-[2]" data-name="Table Scrollable Header">
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell6 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell7 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell11 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell12 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell14 />
      </div>
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
    </div>
  );
}

function TableEdit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="table edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="table edit">
          <rect fill="var(--fill-0, #626776)" height="12" id="Rectangle 3" width="1.2" x="5" y="3" />
          <path d={svgPaths.p3c1edf00} fill="var(--fill-0, #626776)" id="Subtract" />
          <path d={svgPaths.p6dabd00} fill="var(--fill-0, #626776)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <TableEdit />
    </div>
  );
}

function TableHeaderCell15() {
  return (
    <div className="bg-[#ebeef7] box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons12 />
    </div>
  );
}

function TableFreezedHeaderOptions() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Table Freezed Header Options">
      <TableHeaderCell15 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex isolate items-start overflow-clip relative shrink-0 w-full z-[2]" data-name="Table Header">
      <TableFreezedHeader />
      <TableScrollableHeader />
      <TableFreezedHeaderOptions />
    </div>
  );
}

function Shades() {
  return (
    <div className="absolute h-[26.175px] left-[calc(50%+11.07px)] top-[calc(50%+24.95px)] translate-x-[-50%] translate-y-[-50%] w-[92.673px]" data-name="Shades">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 27">
        <g id="Shades">
          <rect fill="url(#paint0_linear_1490_36761)" fillOpacity="0.89" height="26.1747" id="Rectangle 16" rx="5" width="92.6728" />
          <path d={svgPaths.p7eb7180} fill="url(#paint1_linear_1490_36761)" fillOpacity="0.46" id="Rectangle 273395" />
          <path d={svgPaths.p1f36ef80} fill="url(#paint2_linear_1490_36761)" fillOpacity="0.46" id="Rectangle 273396" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1490_36761" x1="10.9581" x2="92.4394" y1="-0.392411" y2="22.0665">
            <stop stopColor="#D0DBF3" stopOpacity="0.52" />
            <stop offset="1" stopColor="#D0DBF3" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1490_36761" x1="70.1198" x2="47.2319" y1="29.4465" y2="-0.0583544">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.68" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1490_36761" x1="81.6011" x2="58.7131" y1="29.4465" y2="-0.0583597">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.68" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute contents left-[calc(50%+11.07px)] top-[calc(50%-23.72px)] translate-x-[-50%] translate-y-[-50%]" data-name="Card 1">
      <div className="absolute border-[#9fb6e8] border-[0.5px] border-solid h-[28.629px] left-[calc(50%+11.07px)] rounded-[6px] top-[calc(50%-23.72px)] translate-x-[-50%] translate-y-[-50%] w-[92.673px]" />
      <div className="absolute h-[3.272px] left-[calc(50%+15.17px)] rounded-[5.45px] top-[calc(50%-30.67px)] translate-x-[-50%] translate-y-[-50%] w-[71.35px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5.45px] size-full" src={imgRectangle273358} />
      </div>
      <div className="absolute h-[3.272px] left-1/2 rounded-[5.45px] top-[calc(50%-23.31px)] translate-x-[-50%] translate-y-[-50%] w-[41.006px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5.45px] size-full" src={imgRectangle273362} />
      </div>
      <div className="absolute h-[3.272px] left-[calc(50%-4.51px)] rounded-[5.45px] top-[calc(50%-15.95px)] translate-x-[-50%] translate-y-[-50%] w-[31.984px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5.45px] size-full" src={imgRectangle273363} />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.67)] h-[7.362px] left-[calc(50%-27.88px)] rounded-[3px] top-[calc(50%-30.27px)] translate-x-[-50%] translate-y-[-50%] w-[8.201px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute contents left-[calc(50%-17.63px)] top-[calc(50%+11.45px)] translate-x-[-50%] translate-y-[-50%]" data-name="Card2">
      <div className="absolute border-[#9fb6e8] border-[0.5px] border-solid h-[28.629px] left-[calc(50%-17.63px)] rounded-[6px] top-[calc(50%+11.45px)] translate-x-[-50%] translate-y-[-50%] w-[92.673px]" />
      <div className="absolute h-[3.272px] left-[calc(50%-13.53px)] rounded-[5.45px] top-[calc(50%+4.5px)] translate-x-[-50%] translate-y-[-50%] w-[71.35px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5.45px] size-full" src={imgRectangle273358} />
      </div>
      <div className="absolute h-[3.272px] left-[calc(50%-28.7px)] rounded-[5.45px] top-[calc(50%+11.86px)] translate-x-[-50%] translate-y-[-50%] w-[41.006px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5.45px] size-full" src={imgRectangle273362} />
      </div>
      <div className="absolute h-[3.272px] left-[calc(50%-33.21px)] rounded-[5.45px] top-[calc(50%+19.22px)] translate-x-[-50%] translate-y-[-50%] w-[31.984px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5.45px] size-full" src={imgRectangle273363} />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.67)] h-[7.362px] left-[calc(50%-56.59px)] rounded-[3px] top-[calc(50%+4.91px)] translate-x-[-50%] translate-y-[-50%] w-[8.201px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute bg-white border-[#b5c6ed] border-[0.5px] border-dashed h-[89.157px] left-[calc(50%+11.07px)] rounded-[6.54px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[105.795px]" data-name="Base" />
      <Shades />
      <Card />
      <Card1 />
    </div>
  );
}

function EmptyCards() {
  return (
    <div className="h-[120px] relative shrink-0 w-[186px]" data-name="Empty Cards">
      <Group1 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#3874ff] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Add Items</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Button Group">
      <Button5 />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Action">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#050e25] text-[16px] text-center text-nowrap whitespace-pre">No Items Added</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#626776] text-[14px] text-center text-nowrap whitespace-pre">Please click below to add items</p>
      <ButtonGroup />
    </div>
  );
}

function EmptyStateMessage() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Empty State message">
      <EmptyCards />
      <Action />
    </div>
  );
}

function Body1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shadow-[0px_0px_13px_1px_rgba(26,38,120,0.08)] shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[519px] py-[149px] relative size-full">
          <EmptyStateMessage />
        </div>
      </div>
    </div>
  );
}

function Spacing() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Spacing">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center p-[8px] relative size-full">
          <Body1 />
        </div>
      </div>
    </div>
  );
}

function CellTable() {
  return (
    <div className="basis-0 bg-[#fdfeff] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Cell Table">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <Spacing />
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_0px_13px_1px_rgba(26,38,120,0.08)]" />
    </div>
  );
}

function Form3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Form">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <SectionHeader1 />
        <CellTable />
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_1px_1px_0px] border-solid bottom-[-1px] left-0 pointer-events-none right-[-1px] rounded-bl-[4px] rounded-br-[5px] rounded-tl-[4px] rounded-tr-[5px] top-[-1px]" />
    </div>
  );
}

function ItemDetails() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Item Details">
      <Form3 />
    </div>
  );
}

function NoOfSections() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[842px] items-start left-[725px] p-[12px] top-[96px] w-[715px]" data-name="No of Sections">
      <Form2 />
      <ItemDetails />
    </div>
  );
}

function VerticalScrollBar() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-px" data-name="Vertical Scroll Bar">
      <div className="absolute bg-[#9497a1] bottom-[13.81%] left-0 right-0 rounded-[22px] top-0" data-name="Vertical Bar" />
    </div>
  );
}

function DragHandle() {
  return (
    <div className="relative size-[20px]" data-name="drag_handle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="drag_handle">
          <mask height="20" id="mask0_1490_36757" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1490_36757)">
            <path d={svgPaths.p3ac98f00} fill="var(--fill-0, #9497A1)" id="drag_handle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DragPanel() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[842px] items-center justify-center left-[715px] overflow-clip px-[2px] py-0 top-[96px] w-[10px]" data-name="Drag Panel">
      <VerticalScrollBar />
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "20" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <DragHandle />
        </div>
      </div>
      <VerticalScrollBar />
    </div>
  );
}

export default function Files() {
  return (
    <div className="bg-[#cad2e5] relative size-full" data-name="Files">
      <GlobalNavigation />
      <CursorCrosshair />
      <Toolbar />
      <PdfViewer />
      <CursorCrosshair1 />
      <Box />
      <NoOfSections />
      <DragPanel />
    </div>
  );
}