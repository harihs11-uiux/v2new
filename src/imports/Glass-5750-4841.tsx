import svgPaths from "./svg-kjkwloe49l";
import imgAsset12 from "figma:asset/23ede0e5e2b2a7e8a2f17c11a0dca8fef11cbd46.png";
import imgFrame42089 from "figma:asset/99e55445d88486cd505da6eab4df04addb36a57d.png";
import { imgArrowBack2 } from "./svg-m28c0";

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0" data-name="Logo">
      <div className="relative shrink-0 size-[24px]" data-name="Asset 1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset12} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-full">{`You’re now in Product Support. `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] w-full">You’re now in Product Support. Tell us what you need help with.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[12px] top-[76px] w-[269px]">
      <Logo />
      <Button />
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
        To create a job, follow these steps:
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        1. Click Create Job
        <br aria-hidden="true" />
        2. Enter the required details in the sidebar and click Create
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[12px] top-[250px] w-[266px]">
      <Logo1 />
      <Button1 />
    </div>
  );
}

function UserQuestion() {
  return (
    <div className="bg-[rgba(255,255,255,0.77)] content-stretch flex h-[48px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0" data-name="User Question">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] max-w-[200px] not-italic relative shrink-0 text-[#050e25] text-[14px]">How to Create a Job?</p>
    </div>
  );
}

function UserPov() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-end justify-center right-[12px] rounded-[16px] top-[182px]" data-name="User Pov">
      <UserQuestion />
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Back />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Product Support</p>
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
      <Frame8 />
      <Close />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[320px]">
      <ChatSupportTitlebar />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame7 />
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+1px)] top-[calc(50%-0.5px)]" data-name="arrow_back_2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[16.922px] items-center justify-center left-[calc(50%+1px)] top-[calc(50%-0.5px)] w-[13.296px]">
        <div className="flex-none rotate-180">
          <div className="h-[16.922px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.352px_-3.539px] mask-size-[24px_24px] relative w-[13.296px]" data-name="arrow_back_2" style={{ maskImage: `url('${imgArrowBack2}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2957 16.9217">
              <path d={svgPaths.p32e56c00} fill="var(--fill-0, white)" id="arrow_back_2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+0.5px)]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[44px] top-[calc(50%+0.5px)]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" fill="var(--fill-0, #3874FF)" id="Ellipse 3" r="22" />
        </svg>
      </div>
      <ArrowBack />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[139px] mb-[-1px] overflow-clip relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-0.06%] max-w-none top-[0.37%] w-[123.22%]" src={imgFrame42089} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
      </div>
      <Group1 />
    </div>
  );
}

function Alarm() {
  return (
    <div className="h-[17.333px] relative shrink-0 w-[16px]" data-name="alarm">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.3333">
        <g id="alarm">
          <mask height="18" id="mask0_5741_33" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="17.3333" id="Bounding box" width="16" y="0.00016278" />
          </mask>
          <g mask="url(#mask0_5741_33)">
            <path d={svgPaths.p34e90600} fill="var(--fill-0, #CDCFD3)" id="alarm_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0">
      <Alarm />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1-min tutorial</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] mb-[-1px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <Frame2 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
            <p className="leading-[16px] whitespace-pre-wrap">How to Create a job?</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[40px] rounded-[16px] top-[398px] w-[238px]">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] w-full">
        <Frame3 />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

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

function Button2() {
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
      <Button2 />
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

function Button3() {
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
      <Button3 />
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

function Frame4() {
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
      <Frame4 />
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
      <Frame9 />
      <Frame10 />
      <UserPov />
      <Group />
      <Frame />
      <Textfield />
    </div>
  );
}