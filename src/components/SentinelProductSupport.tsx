import svgPaths from "../imports/svg-ums4ti89zn";
import imgAsset12 from "figma:asset/23ede0e5e2b2a7e8a2f17c11a0dca8fef11cbd46.png";
import imgFrame42089 from "figma:asset/99e55445d88486cd505da6eab4df04addb36a57d.png";
import sidebarGlow from "figma:asset/4f28a35684e1680a24105174db4417ab7d2c310e.png";
import { useState } from "react";
import { motion } from "motion/react";

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

function Frame5() {
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
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-between left-[12px] px-[14px] py-[12px] rounded-[8px] bottom-[12px] w-[calc(100%-24px)] border border-[#825ed7]/50 backdrop-blur-md" data-name="Textfield">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Ask me anything</p>
      </div>
      <Frame5 />
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-full">{`You're now in Product Support. `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] w-full">You're now in Product Support. Tell us what you need help with.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white/40 inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[12px] top-[76px] w-[calc(100%-24px)] z-10">
      <Logo />
      <Button2 />
    </div>
  );
}

function Back({ onBack }: { onBack?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Back"
      onClick={onBack}
    >
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

function Frame8({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Back onBack={onBack} />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Product Support</p>
      </div>
    </div>
  );
}

function Close({ onClose }: { onClose?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="close"
      onClick={onClose}
    >
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

function ChatSupportTitlebar({ onClose, onBack }: { onClose?: () => void; onBack?: () => void }) {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.11)] content-stretch flex items-center justify-between left-0 overflow-clip px-[12px] py-[16px] right-0 top-0 z-20 backdrop-blur-sm border-b border-white/20" data-name="Chat Support Titlebar">
      <Frame8 onBack={onBack} />
      <Close onClose={onClose} />
    </div>
  );
}

function Lightbulb() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lightbulb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lightbulb">
          <mask height="18" id="mask0_5740_4852" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5740_4852)">
            <path d={svgPaths.p22ac7980} fill="var(--fill-0, white)" id="lightbulb_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-white">
        <p className="leading-[18px] whitespace-pre-wrap">How to Create a Job?</p>
      </div>
    </div>
  );
}

function Frame10({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[rgba(255,255,255,0.24)] relative rounded-[16px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.3)] transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-solid border-white/30 inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <Lightbulb />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[18px]">How to add masters?</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] relative rounded-[16px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.3)] transition-all duration-200 cursor-pointer">
      <div aria-hidden="true" className="absolute border border-solid border-white/30 inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <Lightbulb />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[18px]">How to add users?</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] relative rounded-[16px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.3)] transition-all duration-200 cursor-pointer">
      <div aria-hidden="true" className="absolute border border-solid border-white/30 inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <Lightbulb />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] relative rounded-[16px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.3)] transition-all duration-200 cursor-pointer">
      <div aria-hidden="true" className="absolute border border-solid border-white/30 inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <Lightbulb />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[18px]">Creating Support tickets?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuggestedQuestion({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <div 
      className="bg-[rgba(255,255,255,0.24)] relative rounded-[16px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.3)] transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-solid border-white/30 inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <Lightbulb />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[18px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14({ onFirstQuestionClick }: { onFirstQuestionClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[18px] whitespace-pre-wrap">Suggested</p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <SuggestedQuestion text="How to use Job Overview?" onClick={onFirstQuestionClick} />
        <SuggestedQuestion text="How to File?" />
        <SuggestedQuestion text="How to use TAT Analysis?" />
        <SuggestedQuestion text="How to use Job Volume trend?" />
      </div>
    </div>
  );
}

// User question bubble component
function UserQuestion() {
  return (
    <div className="bg-[rgba(255,255,255,0.77)] content-stretch flex h-[48px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0" data-name="User Question">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] max-w-[200px] not-italic relative shrink-0 text-[#050e25] text-[14px]">How to Create a Job?</p>
    </div>
  );
}

function UserPov() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-end justify-center right-[12px] rounded-[16px] top-[170px] z-10" data-name="User Pov">
      <UserQuestion />
    </div>
  );
}

// AI response component
function Logo1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0" data-name="Logo">
      <div className="relative shrink-0 size-[24px]" data-name="Asset 1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset12} />
      </div>
    </div>
  );
}

function Frame7() {
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

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white/40 inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function AIResponse() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[12px] top-[234px] w-[calc(100%-24px)] z-10">
      <Logo1 />
      <Button3 />
    </div>
  );
}

// Video tutorial card components
function PlayButton() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2">
      <div className="relative size-[44px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" fill="#3874FF" r="22" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-[14px] h-[17px] ml-1" fill="white" viewBox="0 0 14 17">
            <path d="M0 0L14 8.5L0 17V0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VideoThumbnail() {
  return (
    <div className="h-[139px] mb-[-1px] overflow-clip relative shrink-0 w-full rounded-t-[16px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-0 max-w-none object-cover top-0 w-full" src={imgFrame42089} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
      </div>
      <PlayButton />
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

function VideoInfo() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] mb-[-1px] relative shrink-0 w-full rounded-b-[16px]">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0">
            <Alarm />
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">1-min tutorial</p>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
            <p className="leading-[16px] whitespace-pre-wrap">How to Create a job?</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white/40 inset-0 pointer-events-none rounded-[inherit]" />
    </div>
  );
}

function VideoTutorialCard() {
  return (
    <div className="rounded-[16px] relative w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] w-full">
        <VideoThumbnail />
        <VideoInfo />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white/40 inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

export default function SentinelProductSupport({ onClose, onBack }: { onClose?: () => void; onBack?: () => void }) {
  const [showConversation, setShowConversation] = useState(false);

  const handleFirstQuestionClick = () => {
    setShowConversation(true);
  };

  return (
    <div className="relative size-full overflow-hidden" data-name="Product Support" style={{ background: "linear-gradient(36deg, #3934AF 15.27%, #020033 77.89%)" }}>
      {/* Background animated glow effect - same as home page */}
      <div className="absolute flex h-[600px] items-center justify-center left-1/2 -translate-x-1/2 top-[70px] w-[600px] pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div 
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex-none"
        >
          <img 
            src={sidebarGlow} 
            alt="" 
            className="w-[600px] h-auto pointer-events-none" 
            style={{ filter: "blur(30px)" }}
          />
        </motion.div>
      </div>

      <ChatSupportTitlebar onClose={onClose} onBack={onBack} />
      
      {/* Scrollable chat area */}
      <div className="absolute top-[52px] bottom-[74px] left-0 right-0 overflow-y-auto px-[12px] py-[24px] z-10">
        {/* Initial welcome message */}
        <div className="flex gap-[8px] items-start mb-[8px]">
          <Logo />
          <Button2 />
        </div>
        
        {!showConversation && <Frame14 onFirstQuestionClick={handleFirstQuestionClick} />}
        
        {showConversation && (
          <div className="flex flex-col gap-[16px] mt-[80px]">
            {/* User question */}
            <div className="flex justify-end">
              <UserQuestion />
            </div>
            
            {/* AI text response */}
            <div className="flex gap-[8px] items-start">
              <Logo1 />
              <Button3 />
            </div>
            
            {/* Video tutorial card */}
            <div className="flex gap-[8px] items-start">
              <div className="w-[24px] shrink-0" /> {/* Spacer for alignment */}
              <div className="flex-1">
                <VideoTutorialCard />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Textfield />
    </div>
  );
}