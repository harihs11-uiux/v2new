import svgPaths from "./svg-w5u9vvswm6";

function Mark() {
  return (
    <div className="absolute h-[32px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.333px]" data-name="Mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 32">
        <g id="Mark">
          <path d={svgPaths.p1d1c6f00} fill="url(#paint0_linear_3007_18859)" id="Rectangle 1805" />
          <path d={svgPaths.p2f5870f2} fill="url(#paint1_linear_3007_18859)" id="Rectangle 1805_2" />
          <path d={svgPaths.p30e32800} fill="url(#paint2_linear_3007_18859)" id="Rectangle 1813" />
          <path d={svgPaths.p11744380} fill="url(#paint3_linear_3007_18859)" id="Rectangle 1807" />
          <path d={svgPaths.p31e5ac00} fill="url(#paint4_linear_3007_18859)" id="Rectangle 1806" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3007_18859" x1="8.51224" x2="2.42334" y1="3.43591" y2="9.90072">
            <stop stopColor="#3874FF" />
            <stop offset="1" stopColor="#2852B5" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3007_18859" x1="18.734" x2="12.1398" y1="22.2212" y2="28.4871">
            <stop stopColor="#2852B5" />
            <stop offset="1" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3007_18859" x1="8.43409" x2="21.3863" y1="9.2237" y2="15.3269">
            <stop offset="0.0797732" stopColor="#3874FF" />
            <stop offset="0.37268" stopColor="#82A7FF" />
            <stop offset="0.813761" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3007_18859" x1="11.8385" x2="1.67426" y1="23.7239" y2="18.2375">
            <stop offset="0.0797732" stopColor="#3874FF" />
            <stop offset="0.374435" stopColor="#82A7FF" />
            <stop offset="1" stopColor="#3874FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3007_18859" x1="3.46187" x2="21.5248" y1="12.1612" y2="19.5301">
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
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo Mark">
      <SentinelLogo />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <LogoMark />
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_18872)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p3dd41900} fill="var(--fill-0, #CDCFD3)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_18872">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Dropdown Icon">
      <ArrowDropdown />
    </div>
  );
}

function NavbarDropdown() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0" data-name="Navbar Dropdown">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">Job Management</p>
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <DropdownIcon />
        </div>
      </div>
    </div>
  );
}

function ModuleTitle() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Module Title">
      <div aria-hidden="true" className="absolute border-0 border-[#545d76] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <div className="flex h-[48px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[48px]" data-name="Seperator">
                <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(84, 93, 118, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
                    <line id="Seperator" stroke="var(--stroke-0, #545D76)" x2="48" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <NavbarDropdown />
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
    <div className="content-stretch flex h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <div aria-hidden="true" className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Dashoard</p>
      </div>
    </div>
  );
}

function IndividualTab1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px]">Import</p>
      </div>
    </div>
  );
}

function IndividualTab2() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px]">Export</p>
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
          <mask height="18" id="mask0_3007_18848" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_18848)">
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
          <mask height="18" id="mask0_3007_18866" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_18866)">
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
          <mask height="18" id="mask0_3007_18876" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_18876)">
            <path d={svgPaths.p28009c00} fill="var(--fill-0, #CDCFD3)" id="notifications" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
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
        <g clipPath="url(#clip0_3007_18852)" id="unifo 1">
          <path clipRule="evenodd" d={svgPaths.p1c99ee80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3007_18852">
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

function AvatarAlphabet() {
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
      <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative rounded-[inherit]">
        <CustomerLogo />
        <AvatarAlphabet />
      </div>
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ProductUtilities() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Product Utilities">
      <NoOfIcons />
      <ProfileDetails />
    </div>
  );
}

function Utilities() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Utilities">
      <ProductUtilities />
    </div>
  );
}

export default function GlobalNavigation() {
  return (
    <div className="bg-[#242c40] relative size-full" data-name="Global Navigation 1">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-0 relative size-full">
          <LeftSide />
          <HorizontalTab />
          <Utilities />
        </div>
      </div>
    </div>
  );
}