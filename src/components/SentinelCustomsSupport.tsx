import svgPaths from "../imports/svg-ums4ti89zn";
import imgAsset12 from "figma:asset/23ede0e5e2b2a7e8a2f17c11a0dca8fef11cbd46.png";
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
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-between left-[12px] px-[14px] py-[12px] rounded-[8px] bottom-[12px] w-[calc(100%-24px)] border border-[#825ed7]/50 backdrop-blur-md z-20" data-name="Textfield">
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-full">{`You're now in Customs Support. `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] w-full">You're now in Customs Support. Tell us what you need help with.</p>
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
        <p className="leading-[20px]">Customs Support</p>
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
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
            <p className="leading-[18px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14({ onQuestionClick }: { onQuestionClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[18px] whitespace-pre-wrap">Suggested</p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <SuggestedQuestion text="What is HSN?" onClick={onQuestionClick} />
        <SuggestedQuestion text="what is SVB?" />
        <SuggestedQuestion text="What is a commercial invoice?" />
        <SuggestedQuestion text="What is a packing list?" />
      </div>
    </div>
  );
}

// User question bubble component
function UserQuestion() {
  return (
    <div className="bg-[rgba(255,255,255,0.77)] content-stretch flex h-[48px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0" data-name="User Question">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] max-w-[200px] not-italic relative shrink-0 text-[#050e25] text-[14px]">What is HSN?</p>
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
        HSN stands for Harmonized System of Nomenclature. It's an internationally standardized system of names and numbers to classify traded products. HSN codes are used to categorize goods for customs and taxation purposes.
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

export default function SentinelCustomsSupport({ onClose, onBack }: { onClose?: () => void; onBack?: () => void }) {
  const [showConversation, setShowConversation] = useState(false);

  const handleQuestionClick = () => {
    setShowConversation(true);
  };

  return (
    <div className="relative size-full overflow-hidden" data-name="Customs Support" style={{ background: "linear-gradient(36deg, #3934AF 15.27%, #020033 77.89%)" }}>
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
        
        {!showConversation && <Frame14 onQuestionClick={handleQuestionClick} />}
        
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
          </div>
        )}
      </div>
      
      <Textfield />
    </div>
  );
}