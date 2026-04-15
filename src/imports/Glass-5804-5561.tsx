import svgPaths from "./svg-34rbxel2c6";
import imgAsset12 from "figma:asset/23ede0e5e2b2a7e8a2f17c11a0dca8fef11cbd46.png";

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 10">
          <mask height="18" id="mask0_5740_4856" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5740_4856)">
            <path d={svgPaths.p2816c8c0} fill="var(--fill-0, white)" id="file_upload" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons112Px18Px() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons /1/12 px/18 px">
      <IconSkeleton />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons112Px18Px />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(56,116,255,0.1)] content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <IconLeft />
    </div>
  );
}

function ToolbarActions() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Toolbar Actions">
      <Button />
    </div>
  );
}

function RightSideControls() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Right Side Controls">
      <ToolbarActions />
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="send">
          <mask height="18" id="mask0_5740_4844" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5740_4844)">
            <path d={svgPaths.p18ec1900} fill="var(--fill-0, #5E62CE)" id="send_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons112Px18Px1() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons /1/12 px/18 px">
      <Send />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons112Px18Px1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center leading-[0] p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[18px]">&nbsp;</p>
      </div>
    </div>
  );
}

function ToolbarActions1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Toolbar Actions">
      <Button1 />
    </div>
  );
}

function RightSideControls1() {
  return (
    <div className="content-stretch flex items-center justify-end relative" data-name="Right Side Controls">
      <ToolbarActions1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0">
      <RightSideControls />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <RightSideControls1 />
        </div>
      </div>
    </div>
  );
}

function Textfield() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-between left-[12px] px-[14px] py-[12px] rounded-[8px] top-[742px] w-[296px]" data-name="Textfield">
      <div aria-hidden="true" className="absolute border border-[#825ed7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Ask me anything</p>
      </div>
      <Frame />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0" data-name="Logo">
      <div className="relative shrink-0 size-[24px]" data-name="Asset 1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset12} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-full">Raise a Ticket</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] w-full">I’ll help you create a support ticket step by step.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[12px] top-[76px] w-[269px]">
      <Logo />
      <Button2 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0" data-name="Logo">
      <div className="relative shrink-0 size-[24px]" data-name="Asset 1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset12} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] w-full whitespace-pre-wrap">Please describe the issue you’re facing in detail.</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[12px] top-[170px] w-[269px]">
      <Logo1 />
      <Button3 />
    </div>
  );
}

function Back() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5740_4848" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5740_4848)">
            <path d={svgPaths.p24caea00} fill="var(--fill-0, #CDCFD3)" id="arrow_back" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Back />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Raise Ticket</p>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <mask height="16" id="mask0_5740_4840" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5740_4840)">
            <path d={svgPaths.p299eaef0} fill="var(--fill-0, #9497A1)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChatSupportTitlebar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.11)] content-stretch flex items-center justify-between left-0 overflow-clip px-[12px] py-[16px] right-0 top-0" data-name="Chat Support Titlebar">
      <Frame4 />
      <Close />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[320px]">
      <ChatSupportTitlebar />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame3 />
    </div>
  );
}

export default function Glass() {
  return (
    <div className="relative size-full" data-name="Glass" style={{ backgroundImage: "linear-gradient(61.7469deg, rgb(57, 52, 175) 15.358%, rgb(0, 0, 0) 73.273%)" }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[824.99px] items-center justify-center left-[calc(50%+10.13px)] top-[calc(50%-19.5px)] w-[776.251px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-140.38deg] skew-x-[3.16deg]">
          <div className="h-[584.062px] relative w-[557.116px]">
            <div className="absolute inset-[-5.21%_-5.46%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 617.999 644.945">
                <g filter="url(#filter0_f_5740_4860)" id="Rectangle 39457">
                  <path d={svgPaths.p3061e000} fill="url(#paint0_linear_5740_4860)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="644.945" id="filter0_f_5740_4860" width="617.999" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_5740_4860" stdDeviation="15.2208" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5740_4860" x1="150.243" x2="390.205" y1="522.651" y2="304.456">
                    <stop stopColor="#F4E7DE" />
                    <stop offset="0.31" stopColor="#FFC0FF" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#99C2FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Textfield />
      <Frame5 />
      <Frame6 />
      <Group />
    </div>
  );
}