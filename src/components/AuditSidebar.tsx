import React, { useState } from 'react';
import svgPaths from "../imports/svg-1ylutpwyl6";
import bottomStackPaths from '../imports/svg-8qmasrnuk4';

interface AuditSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCardClick?: (cardData: AuditCardData) => void;
  onFloat?: () => void;
  auditItems?: Omit<AuditCardData, 'index'>[];
}

export interface AuditCardData {
  label: string;
  number: string;
  title: string;
  description: string;
  errorCode: string;
  index: number;
}

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

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <div 
      className="absolute box-border content-stretch flex gap-1 items-center justify-start p-0 right-3 top-[15px] cursor-pointer hover:opacity-80 transition-opacity"
      onClick={onClose}
    >
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

function RefreshButton() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex items-center justify-center p-[4px] relative rounded shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.15)] transition-colors"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded"
      />
      <IconSkeleton10 />
    </div>
  );
}

function FloatButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="cursor-pointer hover:opacity-70 transition-opacity hover:scale-110"
      onClick={onClick}
      title="Float panel"
    >
      <div className="relative shrink-0 size-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={bottomStackPaths.p1ea89400} fill="#CDCFD3" />
        </svg>
      </div>
    </div>
  );
}

function TabTitlebar({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#242c40] h-12 relative shrink-0 w-full" data-name="Tab Titlebar">
      <div className="h-12 overflow-clip relative w-full">
        <CloseButton onClose={onClose} />
        <div
          className="absolute box-border content-stretch flex gap-1 items-center justify-start left-3 p-0 top-1/2 translate-y-[-50%]"
          data-name="Tab"
        >
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Audit Report</p>
          </div>
          <RefreshButton />
        </div>
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

function SegmentedControl({ errorCount }: { errorCount?: number }) {
  const displayCount = errorCount !== undefined ? errorCount : 3;

  return (
    <div className="bg-[#32394c] relative rounded shrink-0 w-full" data-name="Segmented Control">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-start p-[2px] relative w-full">
          {/* Error Option - Active */}
          <div className="basis-0 bg-[#505767] grow min-h-px min-w-px relative rounded-sm shadow-[0px_0px_11px_1px_#272d3f] shrink-0">
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex gap-2 items-center justify-center leading-[0] px-4 py-1 relative w-full">
                <div className="[grid-area:1_/_1] ml-0 mt-0 overflow-clip relative size-[18px]">
                  <Error />
                </div>
                <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
                  <p className="block leading-[18px] whitespace-pre">{displayCount}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Warning Option */}
          <div className="basis-0 grow min-h-px min-w-px relative rounded shrink-0">
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex gap-2 items-center justify-center leading-[0] px-4 py-1 relative w-full">
                <Warning />
                <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
                  <p className="block leading-[18px] whitespace-pre">1</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Info Option */}
          <div className="basis-0 grow min-h-px min-w-px relative rounded shrink-0">
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex gap-2 items-center justify-center leading-[0] px-4 py-1 relative w-full">
                <div className="[grid-area:1_/_1] ml-0 mt-0 overflow-clip relative size-[18px]">
                  <SuccessCheck />
                </div>
                <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
                  <p className="block leading-[18px] whitespace-pre">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterButton() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-center justify-start leading-[0] px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.1)] transition-colors"
      data-name="Button"
    >
      <div className="absolute left-0 size-4 top-2">
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
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap ml-5">
        <p className="block leading-[18px] whitespace-pre">Add Filter</p>
      </div>
      <div className="relative shrink-0 size-[18px] ml-1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
          <g clipPath="url(#clip0_1245_19447)">
            <path d={svgPaths.p1a435af0} fill="var(--fill-0, #3874FF)" id="expand_more" />
          </g>
          <defs>
            <clipPath id="clip0_1245_19447">
              <rect fill="white" height="18" width="18" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function AuditCard({ 
  label, 
  number, 
  title, 
  description, 
  errorCode, 
  isSelected, 
  onClick 
}: {
  label: string;
  number: string; 
  title: string;
  description: string;
  errorCode: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div 
      className={`relative rounded-lg shadow-[0px_0px_11px_1px_#272d3f] shrink-0 w-full cursor-pointer transition-all duration-200 hover:opacity-90 ${
        isSelected 
          ? 'bg-[#32394c] border-2 border-[#3874ff]' 
          : 'bg-[#32394c] border-2 border-transparent'
      }`}
      onClick={onClick}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative w-full">
          {/* Card Header */}
          <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex items-start justify-start px-1 py-0 relative rounded-sm shrink-0">
              <div
                aria-hidden="true"
                className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm"
              />
              <div className={`flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap ${
                isSelected ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
              }`}>
                <p className="block leading-[18px] whitespace-pre">{label}</p>
              </div>
            </div>
            <div className="basis-0 font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cf3b3b] text-[12px]">
              <p className="block css-eoz90d leading-[18px] text-[7.74px]">{` ⬤`}</p>
            </div>
          </div>
          
          {/* Text Block */}
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0 w-full">
              <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${
                isSelected ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
              }`}>
                <p className="block leading-[20px] whitespace-pre">{number}</p>
              </div>
              <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${
                isSelected ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
              }`}>
                <p className="block leading-[20px] whitespace-pre">{title}</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-6">
                <div className="absolute h-4 left-1/2 top-1 translate-x-[-50%] w-3">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
                    <g id="Group 4339">
                      <g filter="url(#filter0_i_1245_19422)">
                        <path d={svgPaths.pb26d980} fill="url(#paint0_linear_1245_19422)" />
                      </g>
                      <path d={svgPaths.pcfd4e80} fill="url(#paint6_linear_1245_19422)" />
                      <path d={svgPaths.p1301ce00} fill="url(#paint7_linear_1245_19422)" />
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
              </div>
            </div>
            <div className={`font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] w-full ${
              isSelected ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
            }`}>
              <p className="block leading-[20px]">{description}</p>
            </div>
          </div>
          
          {/* Error Code */}
          <div className={`box-border content-stretch flex items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[14px] w-full ${
            isSelected ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
          }`}>
            <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0">
              <p className="block leading-[18px]">Error Code : {errorCode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardLists({ onCardClick, auditItems = [] }: { onCardClick?: (cardData: AuditCardData) => void, auditItems?: Omit<AuditCardData, 'index'>[] }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  
  const defaultAuditItems = [
    {
      label: "1/0",
      number: "01",
      title: "INVOICE", 
      description: "Invoice Value Cannot be Null or Negative or Zero.",
      errorCode: "205"
    },
    {
      label: "1/1",
      number: "02",
      title: "ITEMS",
      description: "Item Description must be entered.",
      errorCode: "306"
    },
    {
      label: "1/2", 
      number: "03",
      title: "ITEMS",
      description: "Field value is missing for mandatory field HSN",
      errorCode: "600"
    }
  ];

  const displayItems = auditItems.length > 0 ? auditItems : defaultAuditItems;

  const handleCardClick = (item: Omit<AuditCardData, 'index'>, index: number) => {
    setSelectedCardIndex(index);
    if (onCardClick) {
      onCardClick({
        ...item,
        index
      });
    }
  };

  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px px-0 py-3 relative shrink-0 w-full overflow-y-auto">
      {/* Controls */}
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full px-3">
        <SegmentedControl errorCount={displayItems.length} />
        <div className="box-border content-stretch flex h-[26px] items-center justify-start p-0 relative shrink-0 w-full">
          <FilterButton />
        </div>
      </div>
      
      {/* Cards List */}
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full px-3">
        {displayItems.map((item, index) => (
          <AuditCard
            key={index}
            label={item.label}
            number={item.number}
            title={item.title}
            description={item.description}
            errorCode={item.errorCode}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(item, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function AuditSidebar({ isOpen, onClose, onCardClick, onFloat, auditItems }: AuditSidebarProps) {
  if (!isOpen) return null;
  
  return (
    <div className="w-[240px] bg-[#242c40] flex flex-col h-full">
      <div
        aria-hidden="true"
        className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      
      {/* Header without the titlebar since it appears below main toolbar */}
      <div className="bg-[#242c40] h-12 relative shrink-0 w-full flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Audit Report</p>
          </div>
          <RefreshButton />
        </div>
        <div className="flex items-center gap-3">
          {onFloat && <FloatButton onClick={onFloat} />}
          <div 
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onClose}
          >
            <Close />
          </div>
        </div>
      </div>
      
      <CardLists onCardClick={onCardClick} auditItems={auditItems} />
    </div>
  );
}