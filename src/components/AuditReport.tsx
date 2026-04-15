import React, { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-f4tenzgqv2';
import bottomStackPaths from '../imports/svg-8qmasrnuk4';

type DockPosition = 'right' | 'bottom' | 'floating';
type ActiveTab = 'errors' | 'warnings' | 'formatting';

interface AuditReportProps {
  initialPosition?: DockPosition;
  onClose?: () => void;
}

const errorData = [
  { sNo: 1, invoiceSrNo: '0/0', errorCode: '608', table: 'IGM', refNo: '-', description: 'IGM/IR Number should NOT be NULL' },
  { sNo: 2, invoiceSrNo: '0/0', errorCode: '608', table: 'IGM', refNo: '-', description: 'IGM/IR Number should NOT be NULL' },
  { sNo: 3, invoiceSrNo: '0/0', errorCode: '608', table: 'IGM', refNo: '-', description: 'IGM/IR Number should NOT be NULL' },
  { sNo: 4, invoiceSrNo: '0/0', errorCode: '608', table: 'IGM', refNo: '-', description: 'IGM/IR Number should NOT be NULL' },
  { sNo: 5, invoiceSrNo: '0/0', errorCode: '608', table: 'IGM', refNo: '-', description: 'IGM/IR Number should NOT be NULL' },
  { sNo: 6, invoiceSrNo: '0/0', errorCode: '608', table: 'IGM', refNo: '-', description: 'IGM/IR Number should NOT be NULL' },
  { sNo: 7, invoiceSrNo: '0/0', errorCode: '608', table: 'IGM', refNo: '-', description: 'IGM/IR Number should NOT be NULL' },
];

export default function AuditReport({ initialPosition = 'right', onClose }: AuditReportProps) {
  const [dockPosition, setDockPosition] = useState<DockPosition>(initialPosition);
  const [activeTab, setActiveTab] = useState<ActiveTab>('errors');
  const [floatingPosition, setFloatingPosition] = useState({ x: 100, y: 100 });
  const [floatingSize, setFloatingSize] = useState({ width: 862, height: 600 });
  const [bottomHeight, setBottomHeight] = useState(400);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);

  // Handle dragging for floating panel
  const handleMouseDown = (e: React.MouseEvent) => {
    if (dockPosition === 'floating') {
      setIsDragging(true);
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    }
  };

  // Handle resizing
  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && dockPosition === 'floating') {
        setFloatingPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      } else if (isResizing) {
        if (dockPosition === 'floating') {
          const newWidth = e.clientX - floatingPosition.x;
          const newHeight = e.clientY - floatingPosition.y;
          setFloatingSize({
            width: Math.max(400, newWidth),
            height: Math.max(300, newHeight),
          });
        } else if (dockPosition === 'bottom') {
          const newHeight = window.innerHeight - e.clientY;
          setBottomHeight(Math.max(200, Math.min(800, newHeight)));
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, dockPosition, floatingPosition, bottomHeight]);

  const toggleDockPosition = () => {
    if (dockPosition === 'right') {
      setDockPosition('floating');
    } else if (dockPosition === 'floating') {
      setDockPosition('bottom');
    } else {
      setDockPosition('right');
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const getPositionStyles = (): React.CSSProperties => {
    if (dockPosition === 'floating') {
      return {
        position: 'fixed',
        left: `${floatingPosition.x}px`,
        top: `${floatingPosition.y}px`,
        width: `${floatingSize.width}px`,
        height: `${floatingSize.height}px`,
        zIndex: 1000,
      };
    } else if (dockPosition === 'bottom') {
      return {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        height: `${bottomHeight}px`,
        zIndex: 100,
      };
    } else {
      return {
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        width: '862px',
        zIndex: 50,
      };
    }
  };

  const getDockIcon = () => {
    if (dockPosition === 'right') {
      return (
        <button 
          className="relative shrink-0 cursor-pointer hover:opacity-80 bg-[#36415A] rounded-full p-0.5" 
          onClick={toggleDockPosition}
          title="Detach panel"
        >
          <svg className="size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" fill="#36415A" r="12" />
            <path d={svgPaths.p3ca64e00} fill="white" />
          </svg>
        </button>
      );
    } else if (dockPosition === 'bottom') {
      return (
        <button 
          className="text-[#CDCFD3] hover:text-white cursor-pointer text-[14px] font-medium" 
          onClick={toggleDockPosition}
          title="Dock to right"
        >
          Stack in right
        </button>
      );
    } else {
      return (
        <button 
          className="text-[#CDCFD3] hover:text-white cursor-pointer text-[14px] font-medium" 
          onClick={toggleDockPosition}
          title="Dock to bottom"
        >
          Dock Bottom
        </button>
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={`bg-[#050E25] flex flex-col overflow-hidden ${
        dockPosition === 'floating' ? 'rounded-lg shadow-2xl' : dockPosition === 'bottom' ? 'shadow-2xl' : ''
      }`}
      style={getPositionStyles()}
    >
      {/* Resize handle for bottom position */}
      {dockPosition === 'bottom' && (
        <div
          className="absolute top-0 left-0 right-0 h-1 cursor-ns-resize hover:bg-blue-500 bg-[#545D76]"
          onMouseDown={handleResizeMouseDown}
        />
      )}

      {/* Header */}
      <div
        className="bg-[#10182C] border-b border-[#545D76] px-2 h-12 flex items-center justify-between shrink-0"
        onMouseDown={handleMouseDown}
        style={{ cursor: dockPosition === 'floating' ? 'move' : 'default' }}
      >
        <div className="flex items-center gap-1">
          <div className="flex flex-col font-semibold text-white text-[16px]">
            <p>Audit Report</p>
          </div>
          {dockPosition === 'right' && (
            <div className="bg-[rgba(56,116,255,0.1)] box-border flex items-center justify-center p-1 rounded shrink-0 border border-[#3874FF]">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <mask height="16" id="mask0_1494_17872" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }} width="16" x="0" y="0">
                    <rect fill="#D9D9D9" height="16" width="16" />
                  </mask>
                  <g mask="url(#mask0_1494_17872)">
                    <path d={svgPaths.pe68900} fill="#3874FF" />
                  </g>
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {getDockIcon()}
          {/* Float panel button */}
          <button 
            onClick={() => setDockPosition('floating')} 
            className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity hover:scale-110"
            title="Float panel"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={bottomStackPaths.p1ea89400} fill="#CDCFD3" />
            </svg>
          </button>
          {/* Close button */}
          <button onClick={handleClose} className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <mask height="18" id="mask0_1494_17907" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }} width="18" x="0" y="0">
                <rect fill="#D9D9D9" height="18" width="18" />
              </mask>
              <g mask="url(#mask0_1494_17907)">
                <path d={svgPaths.p4280c0} fill="#CDCFD3" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-start shrink-0 bg-[#050E25]">
        <div
          className={`box-border flex gap-2 h-12 items-center justify-center px-3 py-1 cursor-pointer ${
            activeTab === 'errors' ? 'border-b-2 border-[#3874FF]' : ''
          }`}
          onClick={() => setActiveTab('errors')}
        >
          <div className="relative shrink-0 size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <circle cx="7.875" cy="7.875" fill="#F44545" r="7.875" />
              <path d={svgPaths.p2e6e6f00} fill="white" />
              <path d={svgPaths.p2e6e6f00} stroke="white" />
            </svg>
          </div>
          <p className={`text-[14px] font-semibold ${activeTab === 'errors' ? 'text-white' : 'text-[#CDCFD3]'}`}>
            Errors (25)
          </p>
        </div>

        <div
          className={`box-border flex gap-2 h-12 items-center justify-center px-3 py-1 cursor-pointer ${
            activeTab === 'warnings' ? 'border-b-2 border-[#3874FF]' : ''
          }`}
          onClick={() => setActiveTab('warnings')}
        >
          <div className="relative shrink-0 size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p25951b00} fill="#E97330" />
              <rect fill="white" height="5.625" rx="0.5625" width="1.125" x="8.4375" y="7.875" />
              <circle cx="9" cy="6.1875" fill="white" r="0.5625" />
            </svg>
          </div>
          <p className={`text-[14px] font-medium ${activeTab === 'warnings' ? 'text-white' : 'text-[#CDCFD3]'}`}>
            Warnings (0)
          </p>
        </div>

        <div
          className={`box-border flex gap-2 h-12 items-center justify-center px-3 py-1 cursor-pointer ${
            activeTab === 'formatting' ? 'border-b-2 border-[#3874FF]' : ''
          }`}
          onClick={() => setActiveTab('formatting')}
        >
          <div className="relative shrink-0 size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <circle cx="7.875" cy="7.875" fill="#FDCA5F" r="7.875" />
              <rect fill="white" height="5.625" rx="0.5625" width="1.125" x="7.3125" y="6.1875" />
              <circle cx="7.875" cy="4.5" fill="white" r="0.5625" />
            </svg>
          </div>
          <p className={`text-[14px] font-medium ${activeTab === 'formatting' ? 'text-white' : 'text-[#CDCFD3]'}`}>
            Data Formatting
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#050E25] flex flex-wrap gap-2 items-start px-0 py-4 shrink-0">
        {['Table', 'Inv Sr.No', 'It. Sr.No', 'Ref. No.', 'Error Code'].map((filter) => (
          <div
            key={filter}
            className="box-border flex gap-2 items-center px-2 py-1 rounded-full border border-[#505767] shrink-0"
          >
            <p className="text-[#CDCFD3] text-[14px]">{filter}</p>
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p1a435af0} fill="#CDCFD3" />
            </svg>
          </div>
        ))}
        <div className="flex gap-1 items-center px-2 py-1 cursor-pointer">
          <svg className="size-[18px]" fill="none" viewBox="0 0 14 14">
            <path d={svgPaths.pbf27c00} fill="#3874FF" />
          </svg>
          <p className="text-[#3874FF] text-[14px] font-semibold">Clear All</p>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10">
            <tr className="bg-[#222B42]">
              <th className="border border-[#545D76] p-2 text-white text-[14px] font-semibold text-center w-[55px]">
                S.No
              </th>
              <th className="border border-[#545D76] p-2 text-white text-[14px] font-semibold text-left w-[184px]">
                Invoice Sr.No / Item Sr.No
              </th>
              <th className="border border-[#545D76] p-2 text-white text-[14px] font-semibold text-left w-[84px]">
                Error Code
              </th>
              <th className="border border-[#545D76] p-2 text-white text-[14px] font-semibold text-left w-[134px]">
                Table
              </th>
              <th className="border border-[#545D76] p-2 text-white text-[14px] font-semibold text-left w-[134px]">
                Reference No
              </th>
              <th className="border border-[#545D76] p-2 text-white text-[14px] font-semibold text-left min-w-[424px]">
                Description
              </th>
              <th className="border border-[#545D76] p-2 w-[42px]">
                <svg className="size-[18px] mx-auto opacity-0" viewBox="0 0 18 18">
                  <path d={svgPaths.p9838780} fill="#CDCFD3" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {errorData.map((row) => (
              <tr key={row.sNo} className="bg-[#2C364F] hover:bg-[#363F56]">
                <td className="border border-[#545D76] p-2 text-white text-[14px] font-semibold text-center">
                  {row.sNo}
                </td>
                <td className="border border-[#545D76] p-2 text-white text-[14px]">{row.invoiceSrNo}</td>
                <td className="border border-[#545D76] p-2 text-white text-[14px]">{row.errorCode}</td>
                <td className="border border-[#545D76] p-2 text-white text-[14px]">{row.table}</td>
                <td className="border border-[#545D76] p-2 text-white text-[14px]">{row.refNo}</td>
                <td className="border border-[#545D76] p-2 text-white text-[14px]">{row.description}</td>
                <td className="border border-[#545D76] p-2 text-center">
                  <button className="hover:opacity-80">
                    <svg className="size-[18px]" viewBox="0 0 18 18">
                      <path d={svgPaths.p9838780} fill="#CDCFD3" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Resize handle for floating panel */}
      {dockPosition === 'floating' && (
        <div
          ref={resizeRef}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
          onMouseDown={handleResizeMouseDown}
        >
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#545D76]" />
        </div>
      )}
    </div>
  );
}
