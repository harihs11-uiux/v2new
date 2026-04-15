import React, { useState } from 'react';
import svgPaths from '../imports/svg-9dz9e1dmix';
import createJobSvgPaths from '../imports/svg-26kguuw50j';
import CollapsedCard from '../imports/CollapsedCard-1306-2163';
import Card from '../imports/Card';

interface FunctionalLeftNavProps {
  onCreateJob?: () => void;
  activeVersion?: string;
  versions?: string[];
  onVersionChange?: (version: string) => void;
}

// Create Job Button Components
function CreateJobIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="add_circle">
          <mask
            height="18"
            id="mask0_823_3203"
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
              x="0"
              y="0"
            />
          </mask>
          <g mask="url(#mask0_823_3203)">
            <path
              d={createJobSvgPaths.p3865e500}
              fill="var(--fill-0, white)"
              id="add_circle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CreateJobButton({ onClick, isCollapsed = false }: { onClick?: () => void; isCollapsed?: boolean }) {
  return (
    <div
      className={`bg-[#3874ff] relative rounded shrink-0 cursor-pointer h-[34px] ${
        isCollapsed ? 'w-[50px]' : 'w-full'
      }`}
      data-name="Create Job Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-2 relative shrink-0 h-full">
        <CreateJobIcon />
        {!isCollapsed && (
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[14px] ml-1">
            Generate New Version
          </span>
        )}
      </div>
    </div>
  );
}

// Version Panel Components
function Indcator() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 14 14"
      >
        <g id="indcator">
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="5.25"
          />
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="2.625"
          />
        </g>
      </svg>
    </div>
  );
}

function VersionToggleIcon({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer" 
      data-name="Icon"
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="double_arrow">
          <mask
            height="18"
            id="mask0_594_128875"
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
          <g mask="url(#mask0_594_128875)">
            <path
              d={isCollapsed ? svgPaths.p2c139180 : svgPaths.p1cebca00}
              fill="var(--fill-0, #CDCFD3)"
              id="double_arrow_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function VersionPanel({ 
  isCollapsed, 
  onToggle, 
  onCreateJob,
  activeVersion,
  versions = ['live', 'cl01'],
  onVersionChange
}: { 
  isCollapsed: boolean; 
  onToggle: () => void;
  onCreateJob?: () => void;
  activeVersion: string;
  versions?: string[];
  onVersionChange: (version: string) => void;
}) {
  return (
    <div className={`bg-[#242c40] flex flex-col transition-all duration-300 h-full ${isCollapsed ? 'w-[76px]' : 'w-[240px]'}`}>
      <div className="border-r border-[#505767] border-solid h-full flex flex-col">
        {/* Header */}
        <div className="h-12 overflow-clip relative shrink-0">
          <div className={`box-border content-stretch flex flex-row h-12 items-center overflow-clip px-2 py-3.5 relative ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!isCollapsed && (
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic text-[#ffffff] text-[16px] text-left text-nowrap">
                <p className="block leading-[20px] whitespace-pre">Version</p>
              </div>
            )}
            <VersionToggleIcon isCollapsed={isCollapsed} onClick={onToggle} />
          </div>
          <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex-1 box-border content-stretch flex flex-col items-center justify-start overflow-hidden px-3 py-3 h-full">
          {/* Action Button (Sticky) */}
          <div className={`w-full mb-2 shrink-0 ${isCollapsed ? 'flex justify-center' : ''}`}>
            <CreateJobButton onClick={onCreateJob} isCollapsed={isCollapsed} />
          </div>

          <div className="flex-1 w-full overflow-y-auto space-y-2">
            {versions.map((version) => {
              if (version === 'live') return null;
              
              const isLive = version === 'live';
              const isActive = activeVersion === version;
              
              if (isCollapsed) {
                if (isLive) {
                  return (
                    <div 
                      key={version}
                      className={`rounded shadow-[0px_0px_11px_1px_#272d3f] bg-[#32394c] p-2 w-[50px] h-[34px] cursor-pointer mx-auto ${
                        isActive ? 'border border-[#3874ff] border-solid' : ''
                      }`}
                      onClick={() => onVersionChange(version)}
                    >
                      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0 h-full">
                        <Indcator />
                        <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
                          isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
                        }`}>
                          <p className="block leading-[20px] whitespace-pre">Live</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <div key={version} className="w-[50px] h-[34px] mx-auto">
                    <CollapsedCard 
                      isActive={isActive} 
                      onClick={() => onVersionChange(version)} 
                      label={version.toUpperCase()}
                    />
                  </div>
                );
              }

              // Expanded view
              if (isLive) {
                return (
                  <div 
                    key={version}
                    className={`bg-[#32394c] rounded shadow-[0px_0px_11px_1px_#272d3f] p-3 cursor-pointer ${
                      isActive ? 'border border-[#3874ff] border-solid' : ''
                    }`}
                    onClick={() => onVersionChange(version)}
                  >
                    <div className="flex items-center gap-2">
                      <Indcator />
                      <span className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] ${
                        isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
                      }`}>Live</span>
                    </div>
                    <div className="mt-2 text-[#cdcfd3] text-[12px]">
                      Current active version
                    </div>
                  </div>
                );
              }

              return (
                <div 
                  key={version}
                  className={`w-full cursor-pointer transition-all duration-200 ${ 
                    isActive ? 'border border-[#3874ff] border-solid rounded-lg' : ''
                  }`}
                  onClick={() => onVersionChange(version)}
                >
                  <Card 
                    label={version.toUpperCase()} 
                    title={version.startsWith('cl') ? `Checklist Version ${parseInt(version.replace('cl', ''), 10)}` : version}
                    approveCount={version === 'cl01' ? 5 : 3}
                    rejectCount={version === 'cl01' ? 2 : 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main export function with Version panel collapsed by default
export default function FunctionalLeftNav({
  onCreateJob,
  activeVersion = 'live',
  versions = ['live', 'cl01'],
  onVersionChange = () => {},
}: FunctionalLeftNavProps) {
  // Version Panel State - Default to expanded (false)
  const [isVersionPanelCollapsed, setIsVersionPanelCollapsed] = useState(false);

  const handleVersionPanelToggle = () => {
    setIsVersionPanelCollapsed(!isVersionPanelCollapsed);
  };

  return (
    <div className="flex flex-row h-full">
      {/* Version Panel */}
      <VersionPanel 
        isCollapsed={isVersionPanelCollapsed}
        onToggle={handleVersionPanelToggle}
        onCreateJob={onCreateJob}
        activeVersion={activeVersion}
        versions={versions}
        onVersionChange={onVersionChange}
      />
    </div>
  );
}