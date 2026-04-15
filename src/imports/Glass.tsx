import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from "./svg-sq7003n3ln";
import backgroundSvgPaths from "./svg-efb8t457vt";
import aiLogo from "figma:asset/f4e406e5f3133d60cef170224e821c55202b23ec.png";
import sidebarGlow from "figma:asset/4f28a35684e1680a24105174db4417ab7d2c310e.png";
import SentinelProductSupport from "../components/SentinelProductSupport";
import SentinelCustomsSupport from "../components/SentinelCustomsSupport";
import RaiseTicketSidebar from '../components/RaiseTicketSidebar';
import TalkToSupportSidebar from '../components/TalkToSupportSidebar';

function Close({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute right-[12px] size-[18px] top-[12px] cursor-pointer z-50 hover:opacity-80 transition-opacity" 
      data-name="close"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_5603_6020" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5603_6020)">
            <path d={svgPaths.p4280c0} fill="var(--fill-0, white)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 10">
          <mask height="18" id="mask0_5603_6048" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5603_6048)">
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
      <IconSkeleton1 />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Icon Left">
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
          <mask height="18" id="mask0_5603_6024" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5603_6024)">
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Icon Left">
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

function Frame8() {
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
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim()) {
      setValue("");
      // Logic for sending could go here
    }
  };

  return (
    <form 
      onSubmit={(e) => { e.preventDefault(); if(value.trim()) setValue(""); }}
      className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-between left-[12px] px-[14px] py-[10px] rounded-[12px] bottom-[12px] w-[calc(100%-24px)] border border-white/30 backdrop-blur-md z-20" 
      data-name="Textfield"
    >
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        className="bg-transparent border-none outline-none font-['Inter',sans-serif] font-medium text-[14px] text-white placeholder:text-white/50 w-full mr-2"
      />
      <div className="cursor-pointer hover:opacity-80 transition-opacity active:scale-95" onClick={() => value.trim() && setValue("")}>
        <Frame8 />
      </div>
    </form>
  );
}



function SentinelLogo() {
  return (
    <div 
      className="relative w-[78px] h-[78px] z-10 shrink-0 -mt-3 -ml-[30px]" 
      data-name="Sentinel Logo"
    >
      {/* Bottom Glow from User Request - Placed first to sit behind logo without negative z-index */}
      <div 
        className="absolute left-1/2 -bottom-[12px] -translate-x-1/2 w-[70%] h-[35%] blur-[18px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(189, 101, 250, 0.9) 0%, rgba(189, 101, 250, 0.6) 40%, rgba(189, 101, 250, 0.0) 70%)"
        }}
      />

      <div className="absolute inset-[-15px] rounded-full bg-white/20 blur-[20px] animate-pulse pointer-events-none" />
      <div className="absolute inset-[-25px] rounded-full bg-[#3874FF]/25 blur-[30px] pointer-events-none" />
      <div className="absolute inset-[-40px] rounded-full bg-[#8A58FF]/15 blur-[45px] pointer-events-none" />
      
      <svg className="absolute size-0">
        <defs>
          <filter id="sphere-distort" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feDisplacementMap in="SourceGraphic" in2="blur" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div 
        className="relative size-full rounded-full overflow-hidden shadow-[inset_0_2px_15px_rgba(255,255,255,0.5),0_10px_30px_rgba(0,0,0,0.4)] border border-white/30 flex items-center justify-center bg-black/10 isolate"
        style={{ 
          filter: "url(#sphere-distort)",
          transform: "translate3d(0,0,0)",
          WebkitTransform: "translate3d(0,0,0)"
        }}
      >
        <motion.img 
          animate={{
            rotateZ: [0, -360],
            rotateX: [10, -10, 15, -15, 10],
            rotateY: [5, 20, -10, 15, 5],
          }}
          transition={{
            rotateZ: { duration: 30, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 22, repeat: Infinity, ease: "easeInOut" },
          }}
          alt="Sentinel AI" 
          className="w-full h-full max-w-none object-contain pointer-events-none shrink-0" 
          style={{ 
            filter: "brightness(1.1)",
            transformOrigin: "center center",
            backfaceVisibility: "hidden",
            willChange: "transform"
          }}
          src={aiLogo} 
        />
        <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-tr from-transparent via-transparent to-white/40 mix-blend-screen" />
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[20%] bg-white/30 blur-[4px] rounded-full rotate-[-30deg]" />
        <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5)]" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex flex-col gap-[8px] items-center w-[240px] shrink-0">
      <p className="bg-clip-text bg-gradient-to-r font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#d4e1ff] from-[1.432%] leading-none relative shrink-0 text-[18px] to-[#f1d0ad] to-[95.472%] tracking-[-0.18px] via-[#ffc0ff] via-[45.827%] w-full text-center" style={{ WebkitTextFillColor: "transparent" }}>
        Sentinel AI Agent
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.82)] w-full text-center whitespace-pre-wrap">{`Welcome to Sentinel Co-Pilot! I'm your AI assistant here to help you navigate Sentinel V2.`}</p>
    </div>
  );
}

function ActionButtons({ onNavigate, onCustomsNavigate, onRaiseTicket, onTalkToSupport }: { onNavigate?: () => void; onCustomsNavigate?: () => void; onRaiseTicket?: () => void; onTalkToSupport?: () => void }) {
  return (
    <div className="flex flex-col gap-[8px] w-[240px] shrink-0">
      <Button2 onNavigate={onNavigate} />
      <Button3 onNavigate={onCustomsNavigate} />
      <Button4 onNavigate={onRaiseTicket} />
      <Button5 onNavigate={onTalkToSupport} />
    </div>
  );
}



function Frame10() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-[-1.56%_-3.13%_-4.69%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 34">
          <g id="Frame 42139">
            <ellipse cx="16.5" cy="17" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 544" rx="16.5" ry="17" />
            <g id="icon">
              <mask height="23" id="mask0_5603_6014" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="23" x="4" y="5">
                <rect fill="var(--fill-0, #D9D9D9)" height="22" id="Bounding box" width="22" x="4.5" y="5.5" />
              </mask>
              <g mask="url(#mask0_5603_6014)">
                <path d={svgPaths.p1fa3ca80} fill="var(--fill-0, white)" id="contact_support" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-[130px] whitespace-pre-wrap">Product Support</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] text-center">{`Get help with features & Usage`}</p>
    </div>
  );
}

function Button2({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0.11)] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div 
          className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[16px] relative w-full border border-white/30 rounded-[16px] transition-all duration-300 hover:[background-image:linear-gradient(transparent,transparent),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0))] hover:[background-origin:border-box] hover:[background-clip:padding-box,border-box] cursor-pointer"
          onClick={onNavigate}
        >
          <Frame10 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-[-1.56%_-3.13%_-4.69%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 34">
          <g id="Frame 42139">
            <ellipse cx="16.5" cy="17" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 544" rx="16.5" ry="17" />
            <g id="icon">
              <mask height="23" id="mask0_5603_6014" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="23" x="4" y="5">
                <rect fill="var(--fill-0, #D9D9D9)" height="22" id="Bounding box" width="22" x="4.5" y="5.5" />
              </mask>
              <g mask="url(#mask0_5603_6014)">
                <path d={svgPaths.p1fa3ca80} fill="var(--fill-0, white)" id="contact_support" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-[130px] whitespace-pre-wrap">Customs Support</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] text-center">{`Get help with features & Usage`}</p>
    </div>
  );
}

function Button3({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0.11)] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div 
          className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[16px] relative w-full border border-white/30 rounded-[16px] transition-all duration-300 hover:[background-image:linear-gradient(transparent,transparent),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0))] hover:[background-origin:border-box] hover:[background-clip:padding-box,border-box] cursor-pointer"
          onClick={onNavigate}
        >
          <Frame11 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_5603_6044" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5603_6044)">
            <path d={svgPaths.p34736e00} fill="var(--fill-0, white)" id="confirmation_number" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="absolute content-stretch flex items-center left-[6.5px] top-[7px]" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="absolute contents left-[6.5px] top-[7px]" data-name="Icon Left">
      <NoOfIcons />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="-translate-x-1/2 absolute h-[34px] left-[calc(50%+0.5px)] top-[-0.5px] w-[33px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 34">
          <ellipse cx="16.5" cy="17" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 544" rx="16.5" ry="17" />
        </svg>
      </div>
      <IconLeft2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-[130px] whitespace-pre-wrap">Raise Ticket</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] text-center">{`Get help with features & Usage`}</p>
    </div>
  );
}

function Button4({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0.11)] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div 
          className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[16px] relative w-full border border-white/30 rounded-[16px] transition-all duration-300 hover:[background-image:linear-gradient(transparent,transparent),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0))] hover:[background-origin:border-box] hover:[background-clip:padding-box,border-box] cursor-pointer"
          onClick={onNavigate}
        >
          <Frame13 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-[-1.56%_-3.13%_-4.69%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 34">
          <g id="Frame 42139">
            <ellipse cx="16.5" cy="17" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 544" rx="16.5" ry="17" />
            <g id="icon">
              <mask height="23" id="mask0_5603_6014" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="23" x="4" y="5">
                <rect fill="var(--fill-0, #D9D9D9)" height="22" id="Bounding box" width="22" x="4.5" y="5.5" />
              </mask>
              <g mask="url(#mask0_5603_6014)">
                <path d={svgPaths.p1fa3ca80} fill="var(--fill-0, white)" id="contact_support" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-[130px] whitespace-pre-wrap">Talk to Support</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] text-center">{`Get help with features & Usage`}</p>
    </div>
  );
}

function Button5({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0.11)] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div 
          className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[16px] relative w-full border border-white/30 rounded-[16px] transition-all duration-300 hover:[background-image:linear-gradient(transparent,transparent),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0))] hover:[background-origin:border-box] hover:[background-clip:padding-box,border-box] cursor-pointer"
          onClick={onNavigate}
        >
          <Frame15 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Package() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="package_2">
          <mask height="16" id="mask0_5603_6032" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5603_6032)">
            <path d={svgPaths.p3bfdfa00} fill="url(#paint0_linear_5603_6032)" id="package_2_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5603_6032" x1="1.46154" x2="15.7705" y1="5.81867" y2="5.97559">
            <stop stopColor="#3874FF" />
            <stop offset="1" stopColor="#8A58FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Package />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#626776] text-[12px]">
        <p className="leading-[18px] whitespace-pre-wrap">Customs and Compliance Questions?</p>
      </div>
    </div>
  );
}

function Dangerous() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="dangerous">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="dangerous">
          <mask height="16" id="mask0_5603_6028" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5603_6028)">
            <path d={svgPaths.pd4fe380} fill="url(#paint0_linear_5603_6028)" id="dangerous_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5603_6028" x1="1.46154" x2="15.7701" y1="6.03846" y2="6.21296">
            <stop stopColor="#3874FF" />
            <stop offset="1" stopColor="#8A58FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Dangerous />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Trouble shooting Issues?</p>
      </div>
    </div>
  );
}

function AnimatedImages() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="animated_images">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="animated_images">
          <mask height="16" id="mask0_5603_6040" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5603_6040)">
            <path d={svgPaths.pe3b0410} fill="url(#paint0_linear_5603_6040)" id="animated_images_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5603_6040" x1="0.778305" x2="16.6694" y1="5.77846" y2="5.9724">
            <stop stopColor="#3874FF" />
            <stop offset="1" stopColor="#8A58FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AnimatedImages />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Training and tutorials?</p>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tooltip_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tooltip_2">
          <mask height="16" id="mask0_5603_6036" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5603_6036)">
            <path d={svgPaths.p339fbe80} fill="url(#paint0_linear_5603_6036)" id="tooltip_2_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5603_6036" x1="0.692308" x2="16.6843" y1="5.80769" y2="6.00272">
            <stop stopColor="#3874FF" />
            <stop offset="1" stopColor="#8A58FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Tooltip />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Creating Support tickets?</p>
      </div>
    </div>
  );
}

function SuggestionItem({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#626776] text-[12px]">
        <p className="leading-[18px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <SuggestionItem text="Know about Job Overview" />
      <SuggestionItem text="Know more about Filing Due From ETA Date" />
      <SuggestionItem text="Know More about TAT Analysis" />
      <SuggestionItem text="Know more about Job Volume trend" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(255,255,255,0.77)] content-stretch flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[240px] border border-white/30 transition-all duration-300 hover:[background-image:linear-gradient(rgba(255,255,255,0.77),rgba(255,255,255,0.77)),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0))] hover:[background-origin:border-box] hover:[background-clip:padding-box,border-box]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[12px] w-full">
        <p className="leading-[18px] whitespace-pre-wrap">Suggested</p>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[calc(50%-0.5px)] top-[230px]">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Frame6 />
    </div>
  );
}

// Main Sentinel Co-Pilot Home View
function SentinelHome({ onNavigateToSupport, onNavigateToCustoms, onRaiseTicket, onTalkToSupport }: { onNavigateToSupport?: () => void; onNavigateToCustoms?: () => void; onRaiseTicket?: () => void; onTalkToSupport?: () => void }) {
  return (
    <>
      {/* Suggested Card Glow - Centered */}
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

      {/* Content Container - Flex & Scrollable */}
      <div className="flex-1 w-full overflow-y-auto custom-scrollbar z-10 relative">
        <div className="flex flex-col items-center w-full px-6 pt-12 pb-[100px] gap-6 min-h-full justify-center">
          <SentinelLogo />
          <div className="mt-[16px]">
            <Frame7 />
          </div>
          <ActionButtons onNavigate={onNavigateToSupport} onCustomsNavigate={onNavigateToCustoms} onRaiseTicket={onRaiseTicket} onTalkToSupport={onTalkToSupport} />
          <Frame6 />
        </div>
      </div>

      <Textfield />
    </>
  );
}

export default function Glass({ onClose }: { onClose?: () => void }) {
  const [currentView, setCurrentView] = useState<'home' | 'product-support' | 'customs-support' | 'raise-ticket' | 'talk-to-support'>('home');
  
  return (
    <div className="relative size-full overflow-hidden flex flex-col" data-name="Glass" style={{ background: "linear-gradient(36deg, #3934AF 15.27%, #020033 77.89%)" }}>
      <Close onClick={onClose} />
      
      {currentView === 'home' ? (
        <SentinelHome 
          onNavigateToSupport={() => setCurrentView('product-support')} 
          onNavigateToCustoms={() => setCurrentView('customs-support')}
          onRaiseTicket={() => setCurrentView('raise-ticket')}
          onTalkToSupport={() => setCurrentView('talk-to-support')}
        />
      ) : currentView === 'product-support' ? (
        <SentinelProductSupport onClose={onClose} onBack={() => setCurrentView('home')} />
      ) : currentView === 'customs-support' ? (
        <SentinelCustomsSupport onClose={onClose} onBack={() => setCurrentView('home')} />
      ) : currentView === 'raise-ticket' ? (
        <RaiseTicketSidebar onClose={onClose} onBack={() => setCurrentView('home')} />
      ) : (
        <TalkToSupportSidebar onClose={onClose} onBack={() => setCurrentView('home')} />
      )}
    </div>
  );
}