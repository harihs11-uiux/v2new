import image_f4e406e5f3133d60cef170224e821c55202b23ec from 'figma:asset/f4e406e5f3133d60cef170224e821c55202b23ec.png';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import svgPaths from "../imports/svg-tdbv1ckh3q";
import svgToolbar from '../imports/svg-xt6gnxzo5f';
import FixedColumnsTable from './FixedColumnsTable';
import CreateJobSidebar from './CreateJobSidebar';
import LogoutDropdown from './LogoutDropdown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import AdditionalFilter from '../imports/AdditionalFilter-5579-19491';
import { ChevronDown, GraduationCap } from 'lucide-react';
import newLogo from 'figma:asset/70031002c2d641f99778e91905aaf3765d0b07b6.png';
import { X } from 'lucide-react';
import DashboardView from './DashboardView';
import DashboardToolbar from '../imports/Toolbar-3007-20042';
import FilterBar from '../imports/FilterBar';
import Section from '../imports/Section';
import FilingDueSection from '../imports/Section-3011-16071';
import TATAnalysisSection from '../imports/Section-3011-16959';
import VolumeTrendSection from '../imports/Section-3011-19774';
import Onboarding, { TourType } from './Onboarding';
import SentinelModuleDropdown from '../imports/SentinelModuleDropdown';
import Footer from '../imports/Footer';
import { generateTableData, TableData } from '../utils/jobData';
import Glass from '../imports/Glass';
import { motion, AnimatePresence } from 'motion/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import aiIcon from 'figma:asset/23ede0e5e2b2a7e8a2f17c11a0dca8fef11cbd46.png';
import PartyMasterTable from './PartyMasterTable';
import CreatePartySidebar from './CreatePartySidebar';

function FloatingSphereLogo({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[-10px] rounded-full bg-white/20 blur-[10px] animate-pulse pointer-events-none" />
      <div className="absolute inset-[-15px] rounded-full bg-[#3874FF]/25 blur-[15px] pointer-events-none" />
      
      <svg className="absolute size-0">
        <defs>
          <filter id="sphere-distort-floating" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feDisplacementMap in="SourceGraphic" in2="blur" scale="20" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div 
        className="relative size-full rounded-full overflow-hidden shadow-[inset_0_2px_10px_rgba(255,255,255,0.5),0_5px_15px_rgba(0,0,0,0.4)] border border-white/30 flex items-center justify-center bg-black/10 isolate"
        style={{ 
          filter: "url(#sphere-distort-floating)",
          transform: "translate3d(0,0,0)",
        }}
      >
        <img 
          src={image_f4e406e5f3133d60cef170224e821c55202b23ec} 
          alt="Sentinel AI" 
          className="w-full h-full object-contain"
          style={{
            animation: "spin 10s linear infinite",
            animationPlayState: isHovered ? "paused" : "running"
          }}
        />
        <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-tr from-transparent via-transparent to-white/40 mix-blend-screen" />
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[20%] bg-white/30 blur-[2px] rounded-full rotate-[-30deg]" />
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function Mark() {
  return (
    <div
      className="absolute h-8 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.333px]"
      data-name="Mark"
    >
      <div className="absolute bottom-0 left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 32"
        >
          <g id="Mark">
            <path
              d={svgPaths.p1d1c6f00}
              fill="url(#paint0_linear_2_30155)"
              id="Rectangle 1805"
            />
            <path
              d={svgPaths.p2f5870f2}
              fill="url(#paint1_linear_2_30155)"
              id="Rectangle 1805_2"
            />
            <path
              d={svgPaths.p30e32800}
              fill="url(#paint2_linear_2_30155)"
              id="Rectangle 1813"
            />
            <path
              d={svgPaths.p11744380}
              fill="url(#paint3_linear_2_30155)"
              id="Rectangle 1807"
            />
            <path
              d={svgPaths.p31e5ac00}
              fill="url(#paint4_linear_2_30155)"
              id="Rectangle 1806"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_2_30155"
              x1="8.51224"
              x2="2.42334"
              y1="3.43591"
              y2="9.90072"
            >
              <stop stopColor="#3874FF" />
              <stop offset="1" stopColor="#2852B5" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_2_30155"
              x1="18.734"
              x2="12.1398"
              y1="22.2212"
              y2="28.4871"
            >
              <stop stopColor="#2852B5" />
              <stop offset="1" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_2_30155"
              x1="8.43409"
              x2="21.3863"
              y1="9.2237"
              y2="15.3269"
            >
              <stop offset="0.0797732" stopColor="#3874FF" />
              <stop offset="0.37268" stopColor="#82A7FF" />
              <stop offset="0.813761" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_2_30155"
              x1="11.8385"
              x2="1.67426"
              y1="23.7239"
              y2="18.2375"
            >
              <stop offset="0.0797732" stopColor="#3874FF" />
              <stop offset="0.374435" stopColor="#82A7FF" />
              <stop offset="1" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_2_30155"
              x1="3.46187"
              x2="21.5248"
              y1="12.1612"
              y2="19.5301"
            >
              <stop offset="0.141199" stopColor="#3874FF" />
              <stop offset="0.424841" stopColor="#82A7FF" />
              <stop offset="0.751251" stopColor="#3874FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function SentinelLogo() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-8"
      data-name="Sentinel Logo"
    >
      <Mark />
    </div>
  );
}

function LogoMark() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Logo Mark"
    >
      <SentinelLogo />
    </div>
  );
}

function Logo() {
  return (
    <div
      className="flex items-center justify-start p-0 relative shrink-0"
      data-name="Logo"
    >
      <img 
        src={newLogo} 
        alt="Logo" 
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]"
      data-name="arrow_dropdown"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_2_30119)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p3dd41900}
            fill="var(--fill-0, #9497A1)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_30119">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative"
      data-name="Dropdown Icon"
    >
      <ArrowDropdown />
    </div>
  );
}

interface NavbarDropdownProps {
  onLogout?: () => void;
  onToggleMegaMenu?: () => void;
  isMegaMenuOpen?: boolean;
  activeTab?: string;
}

function NavbarDropdown({ onLogout, onToggleMegaMenu, isMegaMenuOpen, activeTab }: NavbarDropdownProps) {
  return (
    <div 
      className={`flex items-center gap-1 font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] transition-colors cursor-pointer select-none ${isMegaMenuOpen ? 'text-white' : 'text-[#cdcfd3] hover:text-white'}`}
      onClick={onToggleMegaMenu}
      data-onboarding="module-dropdown"
    >
      {activeTab === 'Party' ? 'Party Master' : 'Jobs'}
      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
    </div>
  );
}

function ModuleTitle({ onLogout, onToggleMegaMenu, isMegaMenuOpen, activeTab }: NavbarDropdownProps) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Module Title"
    >
      <div className="absolute border-0 border-[#505767] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-0 pr-2 py-0 relative w-full">
          <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[0px]">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-12" data-name="Seperator">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 48 1"
                  >
                    <line
                      id="Seperator"
                      stroke="var(--stroke-0, #505767)"
                      x2="48"
                      y1="0.5"
                      y2="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <NavbarDropdown onLogout={onLogout} onToggleMegaMenu={onToggleMegaMenu} isMegaMenuOpen={isMegaMenuOpen} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

function LeftSide({ onLogout, onToggleMegaMenu, isMegaMenuOpen, activeTab }: NavbarDropdownProps) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Side"
    >
      <Logo />
      <ModuleTitle onLogout={onLogout} onToggleMegaMenu={onToggleMegaMenu} isMegaMenuOpen={isMegaMenuOpen} activeTab={activeTab} />
    </div>
  );
}

interface IndividualTabProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

function IndividualTab({ active = false, children, onClick }: IndividualTabProps) {
  return (
    <div
      className={`box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-1 relative shrink-0 cursor-pointer transition-colors ${active ? '' : 'hover:bg-[#333b4f]'}`}
      data-name="Individual Tab"
      onClick={onClick}
    >
      {active && <div className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />}
      <div className={`flex flex-col font-['Inter:${active ? 'Semi_Bold' : 'Medium'}',_sans-serif] font-${active ? 'semibold' : 'medium'} justify-center leading-[0] not-italic relative shrink-0 text-[${active ? '#ffffff' : '#cdcfd3'}] text-[14px] text-left text-nowrap`}>
        <p className="block leading-[18px] whitespace-pre">{children}</p>
      </div>
    </div>
  );
}

interface HorizontalTabProps {
  activeTab: 'Dashboard' | 'Imports' | 'Exports' | 'Party';
  onTabChange: (tab: 'Dashboard' | 'Imports' | 'Exports' | 'Party') => void;
}

function HorizontalTab({ activeTab, onTabChange }: HorizontalTabProps) {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Horizontal Tab"
      data-onboarding="tabs"
    >
      <IndividualTab 
        active={activeTab === 'Dashboard'} 
        onClick={() => onTabChange('Dashboard')}
      >
        <span data-onboarding="dashboard-tab">Dashboard</span>
      </IndividualTab>
      <IndividualTab 
        active={activeTab === 'Imports'} 
        onClick={() => onTabChange('Imports')}
      >
        Imports
      </IndividualTab>
      <IndividualTab 
        active={activeTab === 'Exports'} 
        onClick={() => onTabChange('Exports')}
      >
        Exports
      </IndividualTab>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-0" data-name="icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30115"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_2_30115)">
            <path
              d={svgPaths.p30a00d00}
              fill="var(--fill-0, #9497A1)"
              id="campaign"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Indicator() {
  return (
    <div
      className="absolute bottom-[62.5%] left-[37.5%] right-[31.25%] top-[6.25%]"
      data-name="indicator"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 6 6"
      >
        <g id="indicator">
          <circle
            cx="2.8125"
            cy="2.8125"
            fill="var(--fill-0, #CF3B3B)"
            fillOpacity="0.19"
            id="Ellipse 86"
            r="2.8125"
          />
          <circle
            cx="2.8125"
            cy="2.8125"
            fill="var(--fill-0, #CF3B3B)"
            id="Ellipse 85"
            r="1.6875"
          />
        </g>
      </svg>
    </div>
  );
}

function Campaign() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Campaign">
      <Icon />
      <Indicator />
    </div>
  );
}

function ChatSupport() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Chat support">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30123"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_2_30123)">
            <path
              d={svgPaths.p37d2a380}
              fill="var(--fill-0, #9497A1)"
              id="contact_support"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="notifications">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30151"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_2_30151)">
            <path
              d={svgPaths.p28009c00}
              fill="var(--fill-0, #9497A1)"
              id="notifications"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Campaign />
      <ChatSupport />
      <Notifications />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[58px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 58 22"
      >
        <g id="Logo">
          <rect fill="white" height="22" width="58" />
          <path
            d={svgPaths.p13e2be00}
            fill="url(#paint0_linear_2_30134)"
            id="Logo_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_30134"
            x1="2"
            x2="55.0181"
            y1="12.2548"
            y2="11.3354"
          >
            <stop stopColor="#005575" />
            <stop offset="1" stopColor="#01314A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AvatarAlphabet() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar (Alphabet)">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Avatar (Alphabet)">
          <circle
            cx="12"
            cy="12"
            fill="var(--fill-0, #FE7C7C)"
            id="Shape"
            r="12"
          />
          <g id="AK">
            <path
              d={svgPaths.p187c5080}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p30fd8300}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProfileDetails({ onLogout }: { onLogout: () => void }) {
  return (
    <LogoutDropdown onLogout={onLogout}>
      <div
        className="bg-[#242c40] relative rounded shrink-0"
        data-name="Profile Details"
      >
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip p-[4px] relative">
          <Logo1 />
          <AvatarAlphabet />
        </div>
        <div className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded" />
      </div>
    </LogoutDropdown>
  );
}

function ProductUtilities({ onLogout, onStartTour }: { onLogout: () => void; onStartTour?: (tourType: string) => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Product Utilities"
    >
      {/* Tour Button */}
      {onStartTour && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 px-2 py-1.5 bg-[#242c40] hover:bg-[#2d364d] text-[#9497A1] hover:text-[#ffffff] rounded transition-colors border border-[#505767]">
              <GraduationCap className="w-4 h-4" />
              <span className="text-[14px] font-['Inter:Medium',_sans-serif] font-medium">Tour</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-[#242c40] border-[#505767] text-[#ffffff]">
            <DropdownMenuItem 
              onClick={() => onStartTour('welcome')}
              className="cursor-pointer hover:bg-[#2d364d] focus:bg-[#2d364d] text-[#cdcfd3] hover:text-[#ffffff]"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Welcome Tour
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onStartTour('create-job')}
              className="cursor-pointer hover:bg-[#2d364d] focus:bg-[#2d364d] text-[#cdcfd3] hover:text-[#ffffff]"
            >
              How to Create Jobs
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onStartTour('imports-exports')}
              className="cursor-pointer hover:bg-[#2d364d] focus:bg-[#2d364d] text-[#cdcfd3] hover:text-[#ffffff]"
            >
              Managing Imports & Exports
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onStartTour('search')}
              className="cursor-pointer hover:bg-[#2d364d] focus:bg-[#2d364d] text-[#cdcfd3] hover:text-[#ffffff]"
            >
              Search & Filter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      <NoOfIcons />
      <ProfileDetails onLogout={onLogout} />
    </div>
  );
}

function Utilities({ onLogout, onStartTour }: { onLogout: () => void; onStartTour?: (tourType: string) => void }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-5 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Utilities"
    >
      <ProductUtilities onLogout={onLogout} onStartTour={onStartTour} />
    </div>
  );
}

interface GlobalNavigationProps {
  activeTab: 'Dashboard' | 'Imports' | 'Exports' | 'Party';
  onTabChange: (tab: 'Dashboard' | 'Imports' | 'Exports' | 'Party') => void;
  onLogout?: () => void;
  onToggleMegaMenu?: () => void;
  isMegaMenuOpen?: boolean;
  onStartTour?: (tourType: string) => void;
}

function GlobalNavigation({ activeTab, onTabChange, onLogout, onToggleMegaMenu, isMegaMenuOpen, onStartTour }: GlobalNavigationProps) {
  return (
    <div
      className="bg-[#1f2432] h-12 relative shrink-0 w-full z-50"
      data-name="Global Navigation"
    >
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      
      {/* Logo - positioned at exactly 21px from left */}
      <div 
        className="absolute flex items-center top-1/2 translate-y-[-50%]"
        style={{ left: '21px' }}
      >
        <Logo />
      </div>
      
      {/* Jobs Dropdown - positioned at 87px from left */}
      <div 
        className="absolute flex items-center top-1/2 translate-y-[-50%]"
        style={{ left: '87px' }}
      >
        <NavbarDropdown 
          onLogout={onLogout} 
          onToggleMegaMenu={onToggleMegaMenu} 
          isMegaMenuOpen={isMegaMenuOpen} 
          activeTab={activeTab}
        />
      </div>
      
      {/* Separator Line - positioned at 75px from left, full height */}
      <div 
        className="absolute w-px h-12 bg-[#505767] top-0"
        style={{ left: '75px' }}
      />
      
      {/* Center Tabs */}
      <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        {activeTab !== 'Party' && <HorizontalTab activeTab={activeTab} onTabChange={onTabChange} />}
      </div>
      
      {/* Right Side Utilities */}
      <div className="absolute right-3 top-1/2 translate-y-[-50%]">
        <Utilities onLogout={onLogout} onStartTour={onStartTour} />
      </div>
    </div>
  );
}

interface TotalJobsProps {
  count: number;
  loading?: boolean;
  label?: string;
}

function TotalJobs({ count, loading, label = "Total Jobs" }: TotalJobsProps) {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Total Jobs"
    >
      <div className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium ml-0 mt-0 not-italic relative text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          {label}: {loading ? '...' : count}
        </p>
      </div>
    </div>
  );
}

function FilterList() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="filter_list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="filter_list">
          <mask
            height="16"
            id="mask0_2_30048"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_2_30048)">
            <path
              d={svgToolbar.p8cd7480}
              fill="var(--fill-0, #3874FF)"
              id="filter_list_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList />
    </div>
  );
}

function NoOfIcons112Px18Px() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <Filters />
    </div>
  );
}

function IconLeft() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Left"
    >
      <NoOfIcons112Px18Px />
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]"
      data-name="arrow_dropdown"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_2_30164)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgToolbar.p1a435af0}
            fill="var(--fill-0, #3874FF)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_30164">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconRight() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Right"
    >
      <ArrowDropdown1 />
    </div>
  );
}

interface FilterButtonProps {
  onClick: () => void;
  activeTab: 'Dashboard' | 'Imports' | 'Exports' | 'Party';
}

function FilterButton({ onClick, activeTab }: FilterButtonProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const totalActiveFiltersCount = useMemo(() => {
    return Object.values(activeFilters).reduce((sum, current) => sum + current.length, 0);
  }, [activeFilters]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          onClick={onClick}
          className="box-border content-stretch flex flex-row gap-1 items-center justify-center leading-[0] px-2 py-1 relative rounded shrink-0 cursor-pointer transition-colors hover:bg-[#3874ff]/10 border-none bg-transparent outline-none group"
          data-name="Button"
        >
          <IconLeft />
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">
              {totalActiveFiltersCount > 0 ? `Filter applied (${totalActiveFiltersCount})` : 'Add Filter'}
            </p>
          </div>
          <IconRight />
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-fit p-0 border-none shadow-none z-[100] bg-transparent rounded-none" 
        align="start" 
        sideOffset={8}
      >
        <div className="w-[1441px] h-[300px] bg-[#2d364d] overflow-hidden shadow-2xl rounded-none">
          <AdditionalFilter 
            filters={activeFilters} 
            setFilters={setActiveFilters} 
            activeTab={activeTab === 'Exports' ? 'Exports' : 'Imports'}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface LeftsideControlsProps {
  jobCount: number;
  loading?: boolean;
  onAddFilter: () => void;
  activeTab: 'Dashboard' | 'Imports' | 'Exports' | 'Party';
}

function LeftsideControls({ jobCount, loading, onAddFilter, activeTab }: LeftsideControlsProps) {
  if (activeTab === 'Party') {
    return (
      <div
        className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-3 pr-0 py-0 relative shrink-0"
        data-name="Leftside Controls"
      >
        <TotalJobs count={16} label="Total Party" />
        <FilterButton onClick={onAddFilter} activeTab={activeTab} />
      </div>
    );
  }

  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-3 pr-0 py-0 relative shrink-0"
      data-name="Leftside Controls"
    >
      <div data-onboarding="total-jobs">
        <TotalJobs count={jobCount} loading={loading} />
      </div>
      <div data-onboarding="add-filter">
        <FilterButton onClick={onAddFilter} activeTab={activeTab} />
      </div>
    </div>
  );
}

interface JobListPageProps {
  onLogout?: () => void;
  onCreateJob?: (data?: any) => void;
  onCreateParty?: (data?: any) => void;
  initialTab?: 'Dashboard' | 'Imports' | 'Exports' | 'Party';
}

export default function JobListPage({
  onLogout,
  onCreateJob,
  onCreateParty,
  initialTab = 'Dashboard',
}: JobListPageProps) {
  const [activeTab, setActiveTab] = useState<'Dashboard' | 'Imports' | 'Exports' | 'Party'>(initialTab);
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [limitCount, setLimitCount] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState<TableData[]>(() => generateTableData(initialTab === 'Dashboard' || initialTab === 'Party' ? 'Imports' : initialTab));
  const [jobCount, setJobCount] = useState(0);
  const [isCreateJobSidebarOpen, setIsCreateJobSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentTourType, setCurrentTourType] = useState<TourType>('welcome');

  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCreatePartySidebarOpen, setIsCreatePartySidebarOpen] = useState(false);

  const handleTabChange = useCallback((tab: 'Dashboard' | 'Imports' | 'Exports' | 'Party', filter?: { status?: string; limit?: number }) => {
    setActiveTab(tab);
    if (tab === 'Party') {
      // For Party tab, clear filters relevant to jobs
      setStatusFilter(undefined);
      setLimitCount(undefined);
      // Party tab uses its own mock data within PartyMasterTable
    } else if (tab !== 'Dashboard') {
      setJobData(generateTableData(tab));
    }
    
    if (filter) {
      setStatusFilter(filter.status);
      setLimitCount(filter.limit);
    } else {
      setStatusFilter(undefined);
      setLimitCount(undefined);
    }
  }, []);

  // Handle logout and reset tours
  const handleLogout = useCallback(() => {
    // Clear visited tabs so tours restart on next login
    localStorage.removeItem('visitedTabs');
    // Call the original logout handler
    onLogout?.();
  }, [onLogout]);

  // Initialize tour on first page load - ALWAYS show dashboard tour on mount
  useEffect(() => {
    const visitedTabs = JSON.parse(localStorage.getItem('visitedTabs') || '{}');
    
    // Check if Dashboard has been visited
    if (!visitedTabs['Dashboard']) {
      // Mark Dashboard as visited
      visitedTabs['Dashboard'] = true;
      localStorage.setItem('visitedTabs', JSON.stringify(visitedTabs));
      
      // Start dashboard tour after a short delay
      setTimeout(() => {
        setCurrentTourType('dashboard');
        setShowOnboarding(true);
      }, 800);
    }
  }, []); // Run only once on mount

  // Track tab changes and auto-start tours for first visit
  useEffect(() => {
    const visitedTabs = JSON.parse(localStorage.getItem('visitedTabs') || '{}');
    
    // Check if this tab has been visited before
    if (!visitedTabs[activeTab]) {
      // Mark as visited
      visitedTabs[activeTab] = true;
      localStorage.setItem('visitedTabs', JSON.stringify(visitedTabs));
      
      // Determine which tour to show based on the tab
      let tourType: TourType = 'dashboard';
      if (activeTab === 'Dashboard') {
        tourType = 'dashboard';
      } else if (activeTab === 'Imports') {
        tourType = 'imports-exports';
      } else if (activeTab === 'Exports') {
        tourType = 'imports-exports';
      } else if (activeTab === 'Party') {
        // No specific tour for Party tab yet, skip onboarding
        return;
      }
      
      // Small delay to ensure DOM is loaded
      setTimeout(() => {
        setCurrentTourType(tourType);
        setShowOnboarding(true);
      }, 500);
    }
  }, [activeTab]);

  const handleOnboardingComplete = useCallback(() => {
    setShowOnboarding(false);
  }, []);

  const handleOnboardingSkip = useCallback(() => {
    setShowOnboarding(false);
  }, []);

  const handleStartTour = useCallback((tourType: string) => {
    if (tourType === 'reset') {
      // Reset all tours
      localStorage.removeItem('visitedTabs');
      window.location.reload();
      return;
    }
    setCurrentTourType(tourType as TourType);
    setShowOnboarding(true);
  }, []);

  const handleToggleMegaMenu = useCallback(() => {
    setIsMegaMenuOpen(prev => !prev);
  }, []);

  const handleMegaMenuNavigate = useCallback((module: string) => {
    if (module === 'Party' || module === 'Dashboard' || module === 'Imports' || module === 'Exports') {
      setActiveTab(module as 'Dashboard' | 'Imports' | 'Exports' | 'Party');
      // Reset filters when switching main contexts
      if (module === 'Party' || module === 'Dashboard') {
        setStatusFilter(undefined);
        setLimitCount(undefined);
      }
      setIsMegaMenuOpen(false);
    }
  }, []);

  const handleAddFilter = useCallback(() => {
    console.log('Add filter clicked');
  }, []);

  const handleCreateJob = useCallback(() => {
    setIsCreateJobSidebarOpen(true);
  }, []);

  const handleCreateJobSubmit = useCallback((jobData: any) => {
    console.log('Creating job with data:', jobData);
    // Here you would typically send the data to your backend
    setIsCreateJobSidebarOpen(false);
    // Navigate to job creation page
    onCreateJob?.(jobData);
  }, [onCreateJob]);

  const handleCreateParty = useCallback(() => {
    setIsCreatePartySidebarOpen(true);
  }, []);

  const handleCreatePartySubmit = useCallback((partyData: any) => {
    console.log('Creating party with data:', partyData);
    // Here you would typically send the data to your backend
    setIsCreatePartySidebarOpen(false);
    // Navigate to party creation page
    onCreateParty?.(partyData);
  }, [onCreateParty]);

  return (
    <div className="w-full h-full bg-[#CAD2E5] flex flex-col relative overflow-hidden">
      {/* Global Navigation - 48px height */}
      <GlobalNavigation 
        activeTab={activeTab} 
        onTabChange={(tab) => handleTabChange(tab)} 
        onLogout={handleLogout} 
        onToggleMegaMenu={handleToggleMegaMenu}
        isMegaMenuOpen={isMegaMenuOpen}
        onStartTour={handleStartTour}
      />
      
      {/* Mega Menu Overlay and Dropdown */}
      {isMegaMenuOpen && (
        <>
          {/* Overlay - 50% opacity */}
          <div 
            className="fixed inset-0 bg-black/50 z-[99]" 
            style={{ top: '48px' }} // Start below navbar
            onClick={() => setIsMegaMenuOpen(false)}
          />
          {/* Mega Menu Content */}
          <div 
            className="fixed left-0 right-0 z-[100] w-full"
            style={{ top: '48px' }} // Start below navbar
          >
            <SentinelModuleDropdown onNavigate={handleMegaMenuNavigate} activeTab={activeTab} />
          </div>
        </>
      )}

      {/* Main Layout Body - Flex row to include AI Sidebar within screen */}
      <div className="flex-1 flex flex-row overflow-hidden relative">
        <div className="flex-1 flex flex-col min-w-0">
          {/* Toolbar - 48px height */}
          {activeTab === 'Dashboard' ? (
            <div className="h-12 w-full relative shrink-0" data-name="Toolbar">
              <DashboardToolbar />
            </div>
          ) : (
            <div
              className="bg-[#242c40] box-border content-stretch flex flex-row items-center justify-start p-0 relative h-12 w-full shrink-0"
              data-name="Toolbar"
            >
              <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div
                className="basis-0 grow h-12 min-h-px min-w-px relative shrink-0"
                data-name="List Toolbar"
              >
                <div className="absolute border-0 border-[#505767] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center relative size-full">
                  <div className="bg-[#2D364D] box-border content-stretch flex flex-row h-12 items-center justify-between pl-0 pr-3 py-0 relative w-full">
                    <LeftsideControls 
                      jobCount={jobCount}
                      loading={loading}
                      onAddFilter={handleAddFilter}
                      activeTab={activeTab}
                    />
                    <div
                      className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 relative shrink-0"
                      data-name="Right Side Controls"
                    >
                      {activeTab === 'Party' && (
                        <div
                          className="content-stretch flex items-center justify-center relative shrink-0"
                          data-name="Toolbar Actions"
                        >
                          <div
                            className="bg-[#3874ff] content-stretch flex gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[#2563eb] transition-colors"
                            data-name="Button"
                            onClick={handleCreateParty}
                          >
                            <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                              <p className="block leading-[18px] whitespace-pre">Create Party</p>
                            </div>
                            <div className="flex h-[8px] items-center justify-center relative shrink-0 w-0">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[8px]" data-name="seperator-line">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
                                      <line stroke="white" strokeOpacity="0.4" x2="8" y1="0.5" y2="0.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <svg className="w-[4px] h-[8px] shrink-0 rotate-90" viewBox="0 0 4 8" fill="none">
                              <path d="M0 8V0L4 4L0 8Z" fill="white" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {activeTab !== 'Party' && (
                        <div
                          className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0"
                          data-name="Toolbar Actions"
                        >
                          <div
                            className="bg-[#3874ff] box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[#2563eb] transition-colors"
                            data-name="Button"
                            data-onboarding="create-job"
                            onClick={handleCreateJob}
                          >
                            <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                              <p className="block leading-[18px] whitespace-pre">Create Job</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Table Container - Takes remaining viewport height with 12px padding on all sides */}
          <div className={`flex-1 bg-[#CAD2E5] ${activeTab === 'Dashboard' ? 'overflow-y-auto p-3' : 'overflow-hidden flex flex-col'}`}>
            {activeTab === 'Dashboard' && (
              <div className="w-full flex flex-col">
                {/* FilterBar with 12px spacing from toolbar */}
                <div className="h-[40px] mb-3">
                  <FilterBar />
                </div>
                {/* Section component */}
                <div className="mb-3">
                  <Section onTabChange={handleTabChange} />
                </div>
                {/* Analysis sections side-by-side - 50% width each with gap */}
                <div className="flex gap-3 h-[417px] max-h-[417px] mb-3">
                  {/* Filing Due Section */}
                  <div className="w-1/2 h-full max-h-[417px] overflow-hidden">
                    <FilingDueSection />
                  </div>
                  {/* TAT Analysis Section */}
                  <div className="w-1/2 h-full max-h-[417px] overflow-hidden">
                    <TATAnalysisSection />
                  </div>
                </div>
                {/* Volume Trend Section */}
                <div className="h-[400px] mb-3">
                  <VolumeTrendSection />
                </div>
              </div>
            )}
            {activeTab === 'Party' && (
              <div data-onboarding="table" className="flex-1 overflow-hidden p-3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full">
                  <PartyMasterTable />
                </div>
              </div>
            )}
            {(activeTab === 'Imports' || activeTab === 'Exports') && (
              <div data-onboarding="table" className="flex-1 overflow-hidden p-3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full">
                  <FixedColumnsTable 
                    searchQuery={searchQuery} 
                    activeTab={activeTab} 
                    statusFilter={statusFilter}
                    limit={limitCount}
                    data={jobData}
                    onFilteredCountChange={setJobCount}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sentinel AI Agent Sidebar - Now integrated within the screen */}
        <AnimatePresence>
          {isAiSidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="h-full bg-[#1f2432] shrink-0 overflow-hidden relative border-l border-[#505767]"
            >
              <div className="w-[320px] h-full">
                <Glass onClose={() => setIsAiSidebarOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Create Job Sidebar */}
      <CreateJobSidebar
        isOpen={isCreateJobSidebarOpen}
        onClose={() => setIsCreateJobSidebarOpen(false)}
        onSubmit={handleCreateJobSubmit}
        isExport={activeTab === 'Exports'}
      />

      {/* Create Party Sidebar */}
      <CreatePartySidebar
        isOpen={isCreatePartySidebarOpen}
        onClose={() => setIsCreatePartySidebarOpen(false)}
        onSubmit={handleCreatePartySubmit}
      />

      {/* Onboarding */}
      <Onboarding
        isOpen={showOnboarding}
        onComplete={handleOnboardingComplete}
        onSkip={handleOnboardingSkip}
        tourType={currentTourType}
      />

      {/* Floating AI Agent Button - Hidden when sidebar is open to avoid duplication of intent */}
      <AnimatePresence>
        {!isAiSidebarOpen && (
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setIsAiSidebarOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fixed bottom-6 right-6 z-[150] w-[48px] h-[48px] rounded-full cursor-pointer transition-all hover:scale-110 active:scale-95 flex items-center justify-center overflow-visible bg-transparent"
              >
                <FloatingSphereLogo isHovered={isHovered} />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-[#1f2432] text-white border border-[#505767] p-3 max-w-[200px]">
              <p>This is Sentinel Co-Pilot! I'm your AI assistant here to help you navigate Sentinel V2.</p>
            </TooltipContent>
          </Tooltip>
        )}
      </AnimatePresence>
    </div>
  );
}