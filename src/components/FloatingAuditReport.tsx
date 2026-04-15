import React, { useState, useRef, useEffect } from 'react';
import { Resizable } from 're-resizable';
import svgPaths from '../imports/svg-volk77f95c';

interface FloatingAuditReportProps {
  isOpen: boolean;
  onClose: () => void;
  onDock?: () => void;
  onViewClick?: (errorData: { sNo: number; invoiceNo: string; errorCode: string; table: string; refNo: string; description: string }) => void;
  auditItems?: any[];
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="16" id="mask0_refresh" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
          </mask>
          <g mask="url(#mask0_refresh)">
            <path d={svgPaths.pe68900} fill="var(--fill-0, #3874FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RefreshButton() {
  return (
    <div className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.15)] transition-colors">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconSkeleton />
    </div>
  );
}

function LeftStack({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
      <div className="absolute inset-[-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <circle cx="12" cy="12" fill="var(--fill-0, #36415A)" r="12" />
            <path d={svgPaths.p3ca64e00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Minimize({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <rect fill="var(--fill-0, #CDCFD3)" height="2" rx="1" width="12" x="3" y="11" />
      </svg>
    </div>
  );
}

function Maximize({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <rect stroke="var(--stroke-0, #CDCFD3)" strokeWidth="2" height="10" rx="1" width="10" x="4" y="4" fill="none" />
      </svg>
    </div>
  );
}

function Close({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_close" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" width="18" />
          </mask>
          <g mask="url(#mask0_close)">
            <path d={svgPaths.p4280c0} fill="var(--fill-0, #CDCFD3)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Error1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]">
      <div className="absolute inset-[6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <circle cx="7.875" cy="7.875" fill="var(--fill-0, #F44545)" r="7.875" />
            <g>
              <path d={svgPaths.p2e6e6f00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2e6e6f00} stroke="var(--stroke-0, white)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.p25951b00} fill="var(--fill-0, #E97330)" />
          <rect fill="var(--fill-0, white)" height="5.625" rx="0.5625" width="1.125" x="8.4375" y="7.875" />
          <circle cx="9" cy="6.1875" fill="var(--fill-0, white)" r="0.5625" />
        </g>
      </svg>
    </div>
  );
}

function Format() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]">
      <div className="absolute inset-[6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <circle cx="7.875" cy="7.875" fill="var(--fill-0, #FDCA5F)" r="7.875" />
            <g>
              <rect fill="var(--fill-0, white)" height="5.625" rx="0.5625" width="1.125" x="7.3125" y="6.1875" />
              <circle cx="7.875" cy="4.5" fill="var(--fill-0, white)" r="0.5625" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_arrow)">
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #CDCFD3)" />
        </g>
        <defs>
          <clipPath id="clip0_arrow">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">{label}</p>
      <ArrowDropdown />
    </div>
  );
}

function FilterListOff() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.pbf27c00} fill="var(--fill-0, #3874FF)" />
        </g>
      </svg>
    </div>
  );
}

function ClearAllButton() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.1)] transition-colors">
      <FilterListOff />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Clear All</p>
      </div>
    </div>
  );
}

function ViewIcon({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity" 
      onClick={onClick}
      title="View details"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_view" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" width="18" />
          </mask>
          <g mask="url(#mask0_view)">
            <path 
              d="M9 13.5C10.1625 13.5 11.2125 13.1813 12.15 12.5438C13.0875 11.9063 13.8 11.0625 14.2875 10.0125C14.775 8.9625 14.775 8.0375 14.2875 6.9875C13.8 5.9375 13.0875 5.09375 12.15 4.45625C11.2125 3.81875 10.1625 3.5 9 3.5C7.8375 3.5 6.7875 3.81875 5.85 4.45625C4.9125 5.09375 4.2 5.9375 3.7125 6.9875C3.225 8.0375 3.225 8.9625 3.7125 10.0125C4.2 11.0625 4.9125 11.9063 5.85 12.5438C6.7875 13.1813 7.8375 13.5 9 13.5ZM9 11.5C8.3 11.5 7.70625 11.2563 7.21875 10.7688C6.73125 10.2813 6.4875 9.6875 6.4875 8.9875C6.4875 8.2875 6.73125 7.69375 7.21875 7.20625C7.70625 6.71875 8.3 6.475 9 6.475C9.7 6.475 10.2938 6.71875 10.7813 7.20625C11.2688 7.69375 11.5125 8.2875 11.5125 8.9875C11.5125 9.6875 11.2688 10.2813 10.7813 10.7688C10.2938 11.2563 9.7 11.5 9 11.5Z" 
              fill="var(--fill-0, #CDCFD3)" 
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

const mockErrorData = [
  { sNo: 1, invoiceNo: '1/0', errorCode: '205', table: 'Invoice', refNo: '-', description: 'Invoice Sr.No / Item Sr.No' },
  { sNo: 2, invoiceNo: '1/1', errorCode: '306', table: 'Items', refNo: '-', description: 'Item Description must be entered' },
  { sNo: 3, invoiceNo: '1/2', errorCode: '600', table: 'Items', refNo: '-', description: 'Field value is missing for mandatory field HSN' },
];

export default function FloatingAuditReport({ isOpen, onClose, onDock, onViewClick, auditItems = [] }: FloatingAuditReportProps) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'errors' | 'warnings' | 'formatting'>('errors');
  const [isMinimized, setIsMinimized] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 860, height: 500 });
  
  const headerRef = useRef<HTMLDivElement>(null);

  // Use passed auditItems or fall back to mock data if empty (or just use empty if that's preferred, but let's keep mock for now if empty to avoid breaking layout during dev)
  const displayItems = auditItems.length > 0 ? auditItems.map((item, index) => ({
    sNo: index + 1,
    invoiceNo: item.number || '01',
    errorCode: item.errorCode || '000',
    table: item.title || 'JOB',
    refNo: '-',
    description: item.description || ''
  })) : mockErrorData;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (headerRef.current?.contains(e.target as Node)) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <Resizable
        size={{
           width: dimensions.width,
           height: isMinimized ? 50 : dimensions.height,
        }}
        minWidth={600}
        minHeight={isMinimized ? 50 : 400}
        maxHeight={isMinimized ? 50 : undefined}
        enable={isMinimized ? { } : undefined} // Disable resizing when minimized
        bounds="window"
        onResizeStop={(e, direction, ref, d) => {
          setDimensions({
            width: dimensions.width + d.width,
            height: dimensions.height + d.height,
          });
        }}
        className="bg-[#050e25] rounded-[8px] shadow-2xl transition-[height] duration-200"
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div
            ref={headerRef}
            className="bg-[#2d364d] h-12 relative shrink-0 w-full flex items-center justify-between px-[8px] py-[14px] cursor-move border-b border-[#545d76] rounded-t-[8px] rounded-b-[8px]"
            style={{
                borderRadius: isMinimized ? '8px' : '8px 8px 0 0'
            }}
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center gap-[4px]">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Audit Report</p>
              </div>
              <RefreshButton />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#9497A1] text-[12px] font-['Inter:Regular',sans-serif]">Stack in right</div>
              {isMinimized ? (
                <Maximize onClick={() => setIsMinimized(false)} />
              ) : (
                <Minimize onClick={() => setIsMinimized(true)} />
              )}
              <LeftStack onClick={() => onDock?.()} />
              <Close onClick={onClose} />
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Tabs */}
              <div className="content-stretch flex items-start relative shrink-0 border-b border-[#545d76]">
                <div
                  className={`box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0 cursor-pointer ${
                    activeTab === 'errors' ? 'border-b-2 border-[#3874ff]' : ''
                  }`}
                  onClick={() => setActiveTab('errors')}
                >
                  <Error1 />
                  <div className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${
                    activeTab === 'errors' ? 'text-white' : 'text-[#cdcfd3]'
                  }`}>
                    <p className="leading-[18px] whitespace-pre">Errors ({displayItems.length})</p>
                  </div>
                </div>
                <div
                  className={`box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0 cursor-pointer ${
                    activeTab === 'warnings' ? 'border-b-2 border-[#3874ff]' : ''
                  }`}
                  onClick={() => setActiveTab('warnings')}
                >
                  <Warning />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
                    <p className="leading-[18px] whitespace-pre">Warnings (0)</p>
                  </div>
                </div>
                <div
                  className={`box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0 cursor-pointer ${
                    activeTab === 'formatting' ? 'border-b-2 border-[#3874ff]' : ''
                  }`}
                  onClick={() => setActiveTab('formatting')}
                >
                  <Format />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
                    <p className="leading-[18px] whitespace-pre">Data Formatting</p>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-[#050e25] box-border content-start flex flex-wrap gap-[8px] items-start px-3 py-[16px] relative shrink-0 w-full">
                <FilterDropdown label="Table" />
                <FilterDropdown label="Inv Sr.No" />
                <FilterDropdown label="It. Sr.No" />
                <FilterDropdown label="Ref. No." />
                <FilterDropdown label="Error Code" />
                <ClearAllButton />
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto">
                <table className="w-full text-[14px]">
                  <thead className="bg-[#222b42] sticky top-0">
                    <tr>
                      <th className="border border-[#545d76] p-[8px] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-center w-[70px]">S.No</th>
                      <th className="border border-[#545d76] p-[8px] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-left w-[200px]">Invoice Sr.No / Item Sr.No</th>
                      <th className="border border-[#545d76] p-[8px] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-left w-[100px]">Error Code</th>
                      <th className="border border-[#545d76] p-[8px] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-left w-[150px]">Table</th>
                      <th className="border border-[#545d76] p-[8px] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-left w-[150px]">Reference No</th>
                      <th className="border border-[#545d76] p-[8px] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-left">Description</th>
                      <th className="border border-[#545d76] p-[8px] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-center w-[60px]">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayItems.map((row, index) => (
                      <tr key={index} className="bg-[#2c364f] hover:bg-[#343e59] transition-colors">
                        <td className="border border-[#545d76] p-[8px] text-white font-['Inter:Semi_Bold',sans-serif] text-center">{row.sNo}</td>
                        <td className="border border-[#545d76] p-[8px] text-white font-['Inter:Regular',sans-serif]">{row.invoiceNo}</td>
                        <td className="border border-[#545d76] p-[8px] text-white font-['Inter:Regular',sans-serif]">{row.errorCode}</td>
                        <td className="border border-[#545d76] p-[8px] text-white font-['Inter:Regular',sans-serif]">{row.table}</td>
                        <td className="border border-[#545d76] p-[8px] text-white font-['Inter:Regular',sans-serif]">{row.refNo}</td>
                        <td className="border border-[#545d76] p-[8px] text-white font-['Inter:Regular',sans-serif]">{row.description}</td>
                        <td className="border border-[#545d76] p-[8px] text-center">
                          <div className="flex items-center justify-center">
                            <ViewIcon onClick={() => onViewClick?.(row)} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </Resizable>
    </div>
  );
}
