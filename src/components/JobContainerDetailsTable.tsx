import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, ChevronLeft, ChevronRight, ChevronDown, Calendar as CalendarIcon, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { Resizable } from 're-resizable';
import { 
  createScrollSyncHandlers, 
  createHoverHandlers, 
  getCellBorderStyles,
  getCellBackgroundColor,
  calculateTotalWidth,
  getColumnHeaderHoverStyles
} from './shared/TableUtils';
import AddRowButton from './AddRowButton';

// Define consistent table constants
const TABLE_CONSTANTS = {
  ROW_HEIGHT: 34,
  BORDER_COLOR: '#D0D5E3',
  HOVER_BG: '#F0F9FF',
  ACTIVE_BORDER: '#3874FF',
  EDIT_BORDER: '#3874FF',
  EDIT_SHADOW: '0 0 0 2px rgba(56, 116, 255, 0.2)',
  MIN_COLUMN_WIDTH: 50,
  MAX_COLUMN_WIDTH: 500,
  LEFT_COLUMN_MIN_WIDTHS: [40, 50, 150, 150] // checkbox, S.No, Container No, Container Size
};

const SCROLLBAR_CLASSES = {
  HIDDEN: 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
  VISIBLE: 'overflow-auto [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500'
};

export interface JobContainerRow {
  id: string;
  sNo: number;
  containerNo: string;
  containerSize: string;
  lclFcl: string;
  exciseSealNo: string;
  sealDate: Date | undefined;
  sealTypeIndicator: string;
  sealDeviceId: string;
  docType: string;
  docNo: string;
  isSelected: boolean;
}

interface HoverState {
  rowId: string | null;
  cellId: string | null;
  columnIndex: number | null;
}

const mockData: JobContainerRow[] = [
  {
    id: '1',
    sNo: 1,
    containerNo: '',
    containerSize: '',
    lclFcl: 'LCL',
    exciseSealNo: '3456',
    sealDate: new Date('2025-10-14'),
    sealTypeIndicator: 'BTSL-Bottle Seal',
    sealDeviceId: '65432',
    docType: '123456',
    docNo: '2345',
    isSelected: false
  },
  {
    id: '2',
    sNo: 2,
    containerNo: '',
    containerSize: '',
    lclFcl: 'FCL',
    exciseSealNo: '5432',
    sealDate: new Date('2025-10-14'),
    sealTypeIndicator: 'BTSL-Bottle Seal',
    sealDeviceId: '6543',
    docType: '123456',
    docNo: '34567',
    isSelected: false
  }
];

export default function JobContainerDetailsTable() {
  const [data, setData] = useState<JobContainerRow[]>(mockData);
  const [selectAll, setSelectAll] = useState(false);
  
  // Left section column widths
  const [leftColumnWidths, setLeftColumnWidths] = useState<number[]>([40, 50, 150, 150]);
  
  // Middle section column widths
  const [columnWidths, setColumnWidths] = useState<number[]>([100, 150, 150, 200, 150, 100, 150]);

  // Refs for scrolling
  const headerScrollRef = useRef<HTMLDivElement>(null);
  const dataScrollRef = useRef<HTMLDivElement>(null);
  
  // Scroll arrow state
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollPosition = () => {
    if (!dataScrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = dataScrollRef.current;
    setShowLeftArrow(scrollLeft > 5);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const handleScrollLeft = () => {
    if (dataScrollRef.current) dataScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    if (dataScrollRef.current) dataScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const { handleHeaderScroll, handleDataScroll } = createScrollSyncHandlers(headerScrollRef, dataScrollRef, { current: null });
  
  const [hoverState, setHoverState] = useState<HoverState>({ rowId: null, cellId: null, columnIndex: null });
  const { handleCellHover, handleCellLeave } = createHoverHandlers(setHoverState);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(prev => prev.map(item => ({ ...item, isSelected: newSelectAll })));
  };

  const handleRowSelect = (id: string) => {
    setData(prev => {
      const updated = prev.map(item => item.id === id ? { ...item, isSelected: !item.isSelected } : item);
      setSelectAll(updated.every(item => item.isSelected));
      return updated;
    });
  };

  const handleAddRow = () => {
    const newRow: JobContainerRow = {
      id: Date.now().toString(),
      sNo: data.length + 1,
      containerNo: '',
      containerSize: '',
      lclFcl: 'LCL',
      exciseSealNo: '',
      sealDate: undefined,
      sealTypeIndicator: '',
      sealDeviceId: '',
      docType: '',
      docNo: '',
      isSelected: false
    };
    setData(prev => [...prev, newRow]);
  };

  const updateRow = (id: string, field: keyof JobContainerRow, value: any) => {
    setData(prev => prev.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  // Helper functions
  const shouldShowCellHover = (cellId: string) => hoverState.cellId === cellId;
  const shouldShowRowHighlight = (rowId: string) => hoverState.rowId === rowId;
  const shouldShowColumnHeaderHover = (columnIndex: number) => hoverState.columnIndex === columnIndex;
  const leftSectionWidth = calculateTotalWidth(leftColumnWidths);
  const scrollWidth = calculateTotalWidth(columnWidths);

  // Column definitions
  const leftColumnHeaders = [
    '',
    'S.No',
    <span key="contNo" className="text-[14px]">Container No <span className="text-red-500">*</span></span>,
    <span key="contSize" className="text-[14px]">Container Size <span className="text-red-500">*</span></span>
  ];

  const middleColumnHeaders = [
    'LCL/FCL',
    'Excise Seal No',
    'Seal Date',
    <span key="sealType">Seal Type Indicator <span className="text-red-500">*</span></span>,
    'Seal Device ID',
    'Doc.Type',
    'Doc.No'
  ];

  const renderInputCell = (row: JobContainerRow, field: keyof JobContainerRow, placeholder: string = 'Enter', width: number, isLeft: boolean = false, index: number = -1) => {
    const cellId = `${row.id}-${field}`;
    const isHovered = shouldShowCellHover(cellId);
    
    return (
      <div 
        className="flex items-center justify-start px-2 border-b border-gray-300 h-full relative group"
        style={{ 
          width: `${width}px`, minWidth: `${width}px`,
          backgroundColor: getCellBackgroundColor(isHovered, false, 'transparent'),
          ...getCellBorderStyles(isHovered)
        }}
        onMouseEnter={() => handleCellHover(row.id, cellId, isLeft ? -1 : index)}
        onMouseLeave={handleCellLeave}
      >
        <input
          type="text"
          value={row[field] as string}
          onChange={(e) => updateRow(row.id, field, e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-[14px] text-black placeholder:text-gray-400 h-full"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
        />
      </div>
    );
  };

  const renderSelectCell = (row: JobContainerRow, field: keyof JobContainerRow, options: string[], placeholder: string = 'Select', width: number, isLeft: boolean = false, index: number = -1) => {
    const cellId = `${row.id}-${field}`;
    const isHovered = shouldShowCellHover(cellId);
    
    return (
      <div 
        className="flex items-center justify-start px-2 border-b border-gray-300 h-full relative"
        style={{ 
          width: `${width}px`, minWidth: `${width}px`,
          backgroundColor: getCellBackgroundColor(isHovered, false, 'transparent'),
          ...getCellBorderStyles(isHovered)
        }}
        onMouseEnter={() => handleCellHover(row.id, cellId, isLeft ? -1 : index)}
        onMouseLeave={handleCellLeave}
      >
        <Select value={row[field] as string} onValueChange={(value) => updateRow(row.id, field, value)}>
          <SelectTrigger className="w-full h-[30px] border-none bg-transparent shadow-none focus:ring-0 p-0 text-[14px] text-black data-[placeholder]:text-gray-400">
             <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map(opt => (
              <SelectItem key={opt} value={opt} className="text-[14px]">{opt}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  const renderDateCell = (row: JobContainerRow, field: keyof JobContainerRow, width: number, index: number) => {
    const cellId = `${row.id}-${field}`;
    const isHovered = shouldShowCellHover(cellId);
    const dateValue = row[field] as Date | undefined;

    return (
      <div 
        className="flex items-center justify-start px-2 border-b border-gray-300 h-full relative"
        style={{ 
          width: `${width}px`, minWidth: `${width}px`,
          backgroundColor: getCellBackgroundColor(isHovered, false, 'transparent'),
          ...getCellBorderStyles(isHovered)
        }}
        onMouseEnter={() => handleCellHover(row.id, cellId, index)}
        onMouseLeave={handleCellLeave}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className={`w-full h-[30px] p-0 justify-start text-left font-normal border-none hover:bg-transparent text-[14px] ${!dateValue ? "text-gray-400" : "text-black"}`}
            >
              {dateValue ? format(dateValue, "dd/MM/yyyy") : <span>Pick a date</span>}
              <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateValue}
              onSelect={(date) => updateRow(row.id, field, date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  };

  useEffect(() => {
    const scrollArea = dataScrollRef.current;
    if (!scrollArea) return;
    const timer = setTimeout(() => checkScrollPosition(), 100);
    scrollArea.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      clearTimeout(timer);
      scrollArea.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    setTimeout(checkScrollPosition, 100);
  }, [data, columnWidths]);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-center h-[40px] bg-[#DDE3F2] border-b border-[#d0d5e3]">
         <h2 className="text-[14px] font-bold text-[#050e25]">Container Details</h2>
      </div>

      <div className="flex-1 relative overflow-hidden flex flex-col">
          {/* Scroll Arrows */}
          {showLeftArrow && (
            <button onClick={(e) => { e.preventDefault(); handleScrollLeft(); }} className="absolute bottom-4 left-4 z-50 bg-white p-1 rounded-full shadow border border-gray-200">
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          {showRightArrow && (
            <button onClick={(e) => { e.preventDefault(); handleScrollRight(); }} className="absolute bottom-4 right-4 z-50 bg-white p-1 rounded-full shadow border border-gray-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Table Header Row */}
          <div className="flex w-full bg-[#EBEEF7] border-b border-[#D0D5E3]" style={{ height: TABLE_CONSTANTS.ROW_HEIGHT }}>
              {/* Left Fixed Header */}
              <div className="flex shrink-0">
                  {leftColumnHeaders.map((header, index) => (
                      <Resizable key={`left-header-${index}`} size={{ width: leftColumnWidths[index], height: TABLE_CONSTANTS.ROW_HEIGHT }}
                        onResizeStop={(e, dir, ref, d) => {
                            const newWidths = [...leftColumnWidths];
                            newWidths[index] += d.width;
                            setLeftColumnWidths(newWidths);
                        }}
                        enable={{ right: true }} handleStyles={{ right: { width: '4px', right: '-2px', cursor: 'col-resize', zIndex: 10 } }}
                      >
                          <div className={`w-full h-full flex items-center px-2 ${index === 0 ? 'justify-center' : ''}`}>
                              {index === 0 ? <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} className="w-4 h-4" /> : 
                               <span className="text-xs font-semibold text-[#050E25] text-[14px]">{header}</span>}
                          </div>
                      </Resizable>
                  ))}
              </div>

              {/* Middle Scrollable Header */}
              <div ref={headerScrollRef} className={`flex overflow-hidden ${SCROLLBAR_CLASSES.HIDDEN}`} onScroll={handleHeaderScroll}>
                  <div className="flex" style={{ width: scrollWidth }}>
                      {middleColumnHeaders.map((header, index) => (
                          <Resizable key={`mid-header-${index}`} size={{ width: columnWidths[index], height: TABLE_CONSTANTS.ROW_HEIGHT }}
                            onResizeStop={(e, dir, ref, d) => {
                                const newWidths = [...columnWidths];
                                newWidths[index] += d.width;
                                setColumnWidths(newWidths);
                            }}
                            enable={{ right: true }} handleStyles={{ right: { width: '4px', right: '-2px', cursor: 'col-resize', zIndex: 10 } }}
                          >
                             <div className="w-full h-full flex items-center px-2">
                                <span className="text-xs font-semibold text-[#050E25] text-[14px]">{header}</span>
                             </div>
                          </Resizable>
                      ))}
                  </div>
              </div>

              {/* Right Fixed Header (Action) */}
              <div className="w-[50px] flex items-center justify-center shrink-0 border-l border-[#D0D5E3]">
              </div>
          </div>

          {/* Table Body */}
          <div className="flex-1 overflow-y-auto flex" style={{ height: 'calc(100% - 34px)' }}>
             {/* Left Fixed Data */}
             <div className="flex flex-col shrink-0 bg-white shadow-[2px_0_5px_rgba(0,0,0,0.05)] z-10">
                 {data.map(row => {
                     const isHighlighted = shouldShowRowHighlight(row.id);
                     return (
                         <div key={`left-${row.id}`} className="flex border-b border-[#D0D5E3]" 
                              style={{ 
                                height: TABLE_CONSTANTS.ROW_HEIGHT,
                                backgroundColor: isHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'white'
                              }}
                         >
                             <div className="flex items-center justify-center border-r border-[#D0D5E3]" style={{ width: leftColumnWidths[0] }}>
                                <Checkbox checked={row.isSelected} onCheckedChange={() => handleRowSelect(row.id)} className="w-4 h-4" />
                             </div>
                             <div className="flex items-center justify-center border-r border-[#D0D5E3]" style={{ width: leftColumnWidths[1] }}>
                                <span className="text-sm text-gray-700">{row.sNo}</span>
                             </div>
                             {renderInputCell(row, 'containerNo', 'Enter', leftColumnWidths[2], true)}
                             {renderSelectCell(row, 'containerSize', ['20FT', '40FT', '45FT'], 'Select', leftColumnWidths[3], true)}
                         </div>
                     );
                 })}
                 {/* Add Row Placeholder in Left Column */}
                 <div className="flex h-[36px] items-center px-2 border-b border-transparent">
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto gap-1 text-sm font-medium text-[14px]" onClick={handleAddRow}>
                        <Plus className="w-4 h-4" /> Add
                    </Button>
                 </div>
             </div>

             {/* Middle Scrollable Data */}
             <div className="flex-1 overflow-hidden bg-white relative">
                 <div ref={dataScrollRef} className={`h-full ${SCROLLBAR_CLASSES.HIDDEN}`} onScroll={handleDataScroll}>
                     <div style={{ width: scrollWidth }}>
                         {data.map(row => {
                             const isHighlighted = shouldShowRowHighlight(row.id);
                             return (
                                 <div key={`mid-${row.id}`} className="flex border-b border-[#D0D5E3]" 
                                      style={{ 
                                        height: TABLE_CONSTANTS.ROW_HEIGHT,
                                        backgroundColor: isHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'white'
                                      }}
                                 >
                                     {renderSelectCell(row, 'lclFcl', ['LCL', 'FCL'], 'Select', columnWidths[0], false, 0)}
                                     {renderInputCell(row, 'exciseSealNo', '', columnWidths[1], false, 1)}
                                     {renderDateCell(row, 'sealDate', columnWidths[2], 2)}
                                     {renderSelectCell(row, 'sealTypeIndicator', ['BTSL-Bottle Seal', 'Other'], 'Select', columnWidths[3], false, 3)}
                                     {renderInputCell(row, 'sealDeviceId', '', columnWidths[4], false, 4)}
                                     {renderInputCell(row, 'docType', '', columnWidths[5], false, 5)}
                                     {renderInputCell(row, 'docNo', '', columnWidths[6], false, 6)}
                                 </div>
                             );
                         })}
                     </div>
                 </div>
             </div>

             {/* Right Fixed Data (Action) */}
             <div className="w-[50px] flex flex-col shrink-0 border-l border-[#D0D5E3] bg-white z-10">
                 {data.map(row => {
                     const isHighlighted = shouldShowRowHighlight(row.id);
                     return (
                         <div key={`right-${row.id}`} className="flex items-center justify-center border-b border-[#D0D5E3]" 
                              style={{ 
                                height: TABLE_CONSTANTS.ROW_HEIGHT,
                                backgroundColor: isHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'white'
                              }}
                         >
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-6 w-6 p-0 hover:bg-gray-200 rounded-full">
                                        <MoreVertical className="h-4 w-4 text-gray-500" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => {}}>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                             </DropdownMenu>
                         </div>
                     );
                 })}
             </div>
          </div>
      </div>
    </div>
  );
}
