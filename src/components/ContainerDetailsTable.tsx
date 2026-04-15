import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, ChevronLeft, ChevronRight, AlertCircle, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Resizable } from 're-resizable';
import { 
  createScrollSyncHandlers, 
  createHoverHandlers, 
  createStateCheckers,
  getColumnHeaderHoverStyles,
  getCellBorderStyles,
  getCellBackgroundColor,
  calculateTotalWidth,
  createResizeHandlers,
  createSelectionHandlers
} from './shared/TableUtils';
import IgmSeparator from './IgmSeparator';
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
  LEFT_COLUMN_MIN_WIDTHS: [40, 50, 100, 140] // checkbox, S.No, IGM No., Container No.
};

// CSS classes for scrollbar control
const SCROLLBAR_CLASSES = {
  HIDDEN: 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
  VISIBLE: 'overflow-auto [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500'
};

export interface ContainerRow {
  id: string;
  sNo: number;
  igmNo: string;
  containerNo: string;
  sealNo: string;
  lclFcl: 'LCL' | 'FCL' | '20DV - 20 DRY';
  type: string;
  truckNo: string;
  isSelected: boolean;
  hasError?: boolean;
}

// Editing cell interface
interface EditingCell {
  rowId: string;
  columnKey: keyof ContainerRow;
}

// Comprehensive hover state interface
interface HoverState {
  rowId: string | null;
  cellId: string | null;
  columnIndex: number | null;
}

const mockData: ContainerRow[] = [
  {
    id: '1',
    sNo: 1,
    igmNo: 'IGM-2025-001',
    containerNo: '32424244244',
    sealNo: '534343443',
    lclFcl: 'FCL',
    type: '20DV - 20 DRY',
    truckNo: 'TN 04 AB 1234',
    isSelected: false,
    hasError: true
  },
  {
    id: '2',
    sNo: 2,
    igmNo: 'IGM-2025-001',
    containerNo: '87654321098',
    sealNo: '987654321',
    lclFcl: 'LCL',
    type: '40HC - 40 HIGH',
    truckNo: 'TN 05 CD 5678',
    isSelected: false
  },
  {
    id: '3',
    sNo: 3,
    igmNo: 'IGM-2025-002',
    containerNo: '12345678901',
    sealNo: '123123123',
    lclFcl: 'FCL',
    type: '20DV - 20 DRY',
    truckNo: 'KA 01 EF 9012',
    isSelected: false
  }
];

export default function ContainerDetailsTable({ igmFilter, showHeader = true }: { igmFilter?: string, showHeader?: boolean }) {
  const [data, setData] = useState<ContainerRow[]>(mockData);
  const [selectAll, setSelectAll] = useState(false);
  const [collapsedIgms, setCollapsedIgms] = useState<Record<string, boolean>>({});

  // Filter data if igmFilter is present
  const displayData = React.useMemo(() => {
    if (igmFilter) {
      return data.filter(row => row.igmNo === igmFilter);
    }
    return data;
  }, [data, igmFilter]);
  
  // Left section column widths: Checkbox, S.No, IGM No., Container No.
  const [leftColumnWidths, setLeftColumnWidths] = useState<number[]>([40, 50, 150, 200]);
  
  // Middle section column widths: Seal, LCL/FCL, Type, Truck No.
  const [columnWidths, setColumnWidths] = useState<number[]>([200, 150, 250, 400]);

  // Group data by IGM No
  const groupedData = React.useMemo(() => {
    const groups: Record<string, ContainerRow[]> = {};
    displayData.forEach(row => {
      if (!groups[row.igmNo]) {
        groups[row.igmNo] = [];
      }
      groups[row.igmNo].push(row);
    });
    return groups;
  }, [displayData]);

  const toggleIgmCollapse = (igmNo: string) => {
    setCollapsedIgms(prev => ({
      ...prev,
      [igmNo]: !prev[igmNo]
    }));
  };

  // Editing state management
  const [editingCell, setEditingCell] = useState<EditingCell | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Refs for scrolling
  const headerScrollRef = useRef<HTMLDivElement>(null);
  const dataScrollRef = useRef<HTMLDivElement>(null);
  const footerScrollRef = useRef<HTMLDivElement>(null);

  // Scroll arrow state
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (!dataScrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = dataScrollRef.current;
    setShowLeftArrow(scrollLeft > 5);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
  };

  // Scroll left or right by a fixed amount
  const handleScrollLeft = () => {
    if (dataScrollRef.current) {
      dataScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (dataScrollRef.current) {
      dataScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Create utility handlers
  const { handleHeaderScroll, handleDataScroll } = createScrollSyncHandlers(headerScrollRef, dataScrollRef, footerScrollRef);
  
  // Comprehensive hover state management
  const [hoverState, setHoverState] = useState<HoverState>({ 
    rowId: null, 
    cellId: null, 
    columnIndex: null 
  });

  const { handleCellHover, handleCellLeave } = createHoverHandlers(setHoverState);
  
  // Define which columns are editable
  const editableColumns: (keyof ContainerRow)[] = [
    'igmNo', 'containerNo', 'sealNo', 'lclFcl', 'type', 'truckNo'
  ];

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(prev => prev.map(item => ({ ...item, isSelected: newSelectAll })));
  };

  const handleRowSelect = (id: string) => {
    setData(prev => {
      const updated = prev.map(item => 
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      );
      const allSelected = updated.every(item => item.isSelected);
      setSelectAll(allSelected);
      return updated;
    });
  };

  const handleAddRow = (targetIgmNo?: string) => {
    const igmNo = targetIgmNo || 'New IGM';
    const newRow: ContainerRow = {
      id: Date.now().toString(),
      sNo: data.length + 1,
      igmNo: igmNo,
      containerNo: '',
      sealNo: '',
      lclFcl: 'FCL',
      type: '',
      truckNo: '',
      isSelected: false
    };
    setData(prev => [...prev, newRow].map((row, index) => ({ ...row, sNo: index + 1 })));
    
    // Ensure the group is expanded
    if (collapsedIgms[igmNo]) {
      setCollapsedIgms(prev => ({ ...prev, [igmNo]: false }));
    }
  };

  useEffect(() => {
    (window as any).addContainerDetailsRow = () => handleAddRow();
    return () => {
      delete (window as any).addContainerDetailsRow;
    };
  }, [data]);

  // Editing handlers
  const startEdit = (rowId: string, columnKey: keyof ContainerRow, currentValue: any) => {
    if (!editableColumns.includes(columnKey)) return;
    
    setEditingCell({ rowId, columnKey });
    setEditValue(String(currentValue || ''));
  };

  const saveEdit = () => {
    if (!editingCell) return;
    
    setData(prev => prev.map(row => {
      if (row.id === editingCell.rowId) {
        return {
          ...row,
          [editingCell.columnKey]: editValue
        };
      }
      return row;
    }));
    
    setEditingCell(null);
    setEditValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveEdit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setEditingCell(null);
      setEditValue('');
    }
  };

  // Auto-focus input when editing starts
  useEffect(() => {
    if (editingCell && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingCell]);

  // Listen to scroll events for arrows
  useEffect(() => {
    const scrollArea = dataScrollRef.current;
    if (!scrollArea) return;

    // Initial check with a delay to ensure content is rendered
    const initialTimer = setTimeout(() => checkScrollPosition(), 100);
    
    scrollArea.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    
    return () => {
      clearTimeout(initialTimer);
      scrollArea.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  // Check scroll position when data or column widths change
  useEffect(() => {
    const timer = setTimeout(() => checkScrollPosition(), 100);
    return () => clearTimeout(timer);
  }, [data, columnWidths]);

  // Helper functions for state checks
  const shouldShowRowHover = (rowId: string) => hoverState.rowId === rowId;
  const shouldShowRowActive = (rowId: string) => editingCell?.rowId === rowId;
  const shouldShowRowHighlight = (rowId: string) => shouldShowRowHover(rowId) || shouldShowRowActive(rowId);
  const shouldShowCellHover = (cellId: string) => hoverState.cellId === cellId;
  const shouldShowColumnHeaderHover = (columnIndex: number) => hoverState.columnIndex === columnIndex;

  // Helper functions for resizing
  const handleLeftColumnResize = (index: number, width: number) => {
    setLeftColumnWidths(prev => {
      const newWidths = [...prev];
      newWidths[index] = width;
      return newWidths;
    });
  };

  const handleColumnResize = (index: number, width: number) => {
    setColumnWidths(prev => {
      const newWidths = [...prev];
      newWidths[index] = width;
      return newWidths;
    });
  };

  // Calculate total widths dynamically
  const leftSectionWidth = calculateTotalWidth(leftColumnWidths);
  const scrollWidth = calculateTotalWidth(columnWidths);

  const columnHeaders = [
    <span key="seal">Seal <span className="text-red-500">*</span></span>,
    <span key="lclfcl">LCL/FCL <span className="text-red-500">*</span></span>,
    'Type', 
    'Truck No.'
  ];
  const columnKeys: (keyof ContainerRow)[] = ['sealNo', 'lclFcl', 'type', 'truckNo'];
  const leftColumnHeaders = [
    '', 
    'S.No', 
    'IGM No.', 
    <span key="containerno">Container No. <span className="text-red-500">*</span></span>
  ];

  // Render editable cell
  const renderEditableCell = (
    row: ContainerRow, 
    columnKey: keyof ContainerRow, 
    value: any,
    className: string = '',
    style: React.CSSProperties = {},
    cellId: string = '',
    columnIndex: number = -1
  ) => {
    const isEditing = editingCell?.rowId === row.id && editingCell?.columnKey === columnKey;
    const isEditable = editableColumns.includes(columnKey);
    const isRowHighlighted = shouldShowRowHighlight(row.id);
    const isCellHovered = shouldShowCellHover(cellId);
    
    const displayValue = String(value || '');

    if (isEditing) {
      return (
        <div className={`relative ${className}`} style={{...style, zIndex: 50, position: 'relative', overflow: 'visible'}}>
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={saveEdit}
            className="absolute outline-none text-black text-sm"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px',
              width: 'calc(100% + 2px)',
              height: 'calc(100% + 2px)',
              minHeight: '36px',
              maxHeight: '36px',
              margin: 0,
              padding: '0 8px',
              left: '-1px',
              top: '-1px',
              right: '-1px',
              bottom: '-1px',
              border: `2px solid ${TABLE_CONSTANTS.EDIT_BORDER}`,
              backgroundColor: '#FFFFFF',
              boxShadow: TABLE_CONSTANTS.EDIT_SHADOW,
              zIndex: 100,
              borderRadius: '0px'
            }}
          />
        </div>
      );
    }

    const cellBorderStyles = getCellBorderStyles(isCellHovered);
    const backgroundColor = getCellBackgroundColor(isCellHovered, false, 'transparent');

    return (
      <div
        className={`${className} ${isEditable ? 'cursor-pointer transition-all duration-200 group editable-cell' : ''} relative`}
        style={{
          ...style,
          ...cellBorderStyles,
          backgroundColor
        }}
        onClick={() => isEditable && startEdit(row.id, columnKey, value)}
        title={isEditable ? 'Click to edit' : displayValue}
        tabIndex={isEditable ? 0 : -1}
        onMouseEnter={() => handleCellHover(row.id, cellId, columnIndex)}
        onMouseLeave={handleCellLeave}
      >
        <span className="text-sm font-normal truncate block text-black flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          {displayValue}
          {columnKey === 'lclFcl' && (
            <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
          )}
        </span>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header Section */}
      {showHeader && (
        <div className="flex items-center justify-center h-[40px] bg-[#DDE3F2] border-b border-[#d0d5e3]">
          <h2 className="text-[16px] font-semibold text-[#050e25]">Container Details</h2>
        </div>
      )}

      <div className="w-full relative overflow-hidden border border-gray-300 table-component" style={{ fontFamily: 'Inter, sans-serif', height: showHeader ? 'calc(100% - 40px)' : '100%' }}>
        {/* Left Scroll Arrow */}
        {showLeftArrow && (
          <button
            onClick={(e) => { e.preventDefault(); handleScrollLeft(); }}
            onMouseDown={(e) => e.preventDefault()}
            className="z-[100] bg-white hover:bg-gray-50 rounded-full p-1 shadow-lg border border-gray-200"
            style={{ position: 'absolute', bottom: '8px', left: '8px' }}
          >
            <ChevronLeft className="w-[18px] h-[18px] text-[#050E25]" />
          </button>
        )}

        {/* Right Scroll Arrow */}
        {showRightArrow && (
          <button
            onClick={(e) => { e.preventDefault(); handleScrollRight(); }}
            onMouseDown={(e) => e.preventDefault()}
            className="z-[100] bg-white hover:bg-gray-50 rounded-full p-1 shadow-lg border border-gray-200"
            style={{ position: 'absolute', bottom: '8px', right: '8px' }}
          >
            <ChevronRight className="w-[18px] h-[18px] text-[#050E25]" />
          </button>
        )}
        
        <div className="w-full flex flex-col" style={{ fontFamily: 'Inter, sans-serif', height: '100%' }}>
          
          {/* Header */}
          <div className="w-full grid" style={{ gridTemplateColumns: `${leftSectionWidth}px 1fr 50px`, backgroundColor: '#EBEEF7', height: TABLE_CONSTANTS.ROW_HEIGHT, minHeight: TABLE_CONSTANTS.ROW_HEIGHT, maxHeight: TABLE_CONSTANTS.ROW_HEIGHT }}>
            {/* Left Header */}
            <div className="flex">
              {leftColumnHeaders.map((header, index) => (
                <Resizable key={`left-header-${index}`} size={{ width: leftColumnWidths[index], height: 34 }}
                  onResizeStop={(e, direction, ref, delta) => {
                    const newWidth = leftColumnWidths[index] + delta.width;
                    if (newWidth >= TABLE_CONSTANTS.LEFT_COLUMN_MIN_WIDTHS[index]) handleLeftColumnResize(index, newWidth);
                  }}
                  minWidth={TABLE_CONSTANTS.LEFT_COLUMN_MIN_WIDTHS[index]} maxWidth={500}
                  enable={{ right: true }} handleStyles={{ right: { width: '4px', right: '-2px', background: 'rgba(0, 0, 0, 0.1)', cursor: 'col-resize', zIndex: 10 } }}>
                  <div className={`w-full h-full flex items-center px-2 ${index === 0 ? 'justify-center' : 'justify-start'}`} style={{ height: TABLE_CONSTANTS.ROW_HEIGHT }}>
                    {index === 0 ? <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} className="w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white" /> :
                      <span className="text-sm font-medium truncate text-black" title={header} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>{header}</span>}
                  </div>
                </Resizable>
              ))}
            </div>
            
            {/* Middle Header */}
            <div ref={headerScrollRef} className={SCROLLBAR_CLASSES.HIDDEN} onScroll={handleHeaderScroll}>
              <div className="flex" style={{ width: `${scrollWidth}px`, minWidth: `${scrollWidth}px` }}>
                {columnHeaders.map((header, index) => {
                  const headerStyles = getColumnHeaderHoverStyles(index, shouldShowColumnHeaderHover(index));
                  return (
                    <Resizable key={`middle-header-${index}`} size={{ width: columnWidths[index], height: 34 }}
                      onResizeStop={(e, direction, ref, delta) => {
                        const newWidth = columnWidths[index] + delta.width;
                        if (newWidth >= TABLE_CONSTANTS.MIN_COLUMN_WIDTH) handleColumnResize(index, newWidth);
                      }}
                      minWidth={TABLE_CONSTANTS.MIN_COLUMN_WIDTH} maxWidth={TABLE_CONSTANTS.MAX_COLUMN_WIDTH}
                      enable={{ right: index < columnHeaders.length - 1 }} handleStyles={{ right: { width: '4px', right: '-2px', background: 'rgba(0, 0, 0, 0.1)', cursor: 'col-resize', zIndex: 10 } }}>
                      <div className="w-full h-full flex items-center justify-start px-2" style={{ ...headerStyles, height: TABLE_CONSTANTS.ROW_HEIGHT }}>
                        <span className="text-sm font-medium truncate text-black" title={header} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>{header}</span>
                      </div>
                    </Resizable>
                  );
                })}
              </div>
            </div>
            
            {/* Right Header */}
            <div className="flex items-center justify-center">
              {/* Removed MoreVertical icon */}
            </div>
          </div>

          {/* Data Body */}
          <div className="flex-1 overflow-y-auto grid" style={{ gridTemplateColumns: `${leftSectionWidth}px 1fr 50px` }}>
            {/* Left Data */}
            <div className="text-black flex flex-col overflow-hidden" style={{ position: 'relative', boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#FFFFFF' }}>
              <div className="flex-1">
                {Object.keys(groupedData).map((igmNo) => (
                  <React.Fragment key={`left-group-${igmNo}`}>
                    {/* IGM Separator */}
                    <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                      <IgmSeparator 
                        igmNo={igmNo} 
                        isCollapsed={collapsedIgms[igmNo]} 
                        onToggleCollapse={() => toggleIgmCollapse(igmNo)} 
                      />
                    </div>
                    
                    {!collapsedIgms[igmNo] && groupedData[igmNo].map((row, index) => {
                      const isRowHighlighted = shouldShowRowHighlight(row.id);
                      return (
                        <div key={`left-row-${row.id}`} className="flex border-b border-gray-300 transition-colors" 
                          style={{ position: 'relative', zIndex: 1, marginBottom: '0px', backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent',
                            borderTop: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : 'none',
                            borderBottom: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                            height: TABLE_CONSTANTS.ROW_HEIGHT, minHeight: TABLE_CONSTANTS.ROW_HEIGHT, maxHeight: TABLE_CONSTANTS.ROW_HEIGHT }}>
                          
                          {/* Checkbox */}
                          <div className="flex items-center justify-center border-b border-gray-300"
                            style={{ width: `${leftColumnWidths[0]}px`, minWidth: `${leftColumnWidths[0]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT,
                              backgroundColor: shouldShowCellHover(`${row.id}-checkbox`) ? '#FFFFFF' : 'transparent',
                              ...getCellBorderStyles(shouldShowCellHover(`${row.id}-checkbox`)) }}
                            onMouseEnter={() => handleCellHover(row.id, `${row.id}-checkbox`, -1)} onMouseLeave={handleCellLeave}>
                            <Checkbox checked={row.isSelected} onCheckedChange={() => handleRowSelect(row.id)} 
                              className="w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white" />
                          </div>
                          
                          {/* S.No */}
                          <div className="flex items-center justify-center border-b border-gray-300"
                            style={{ width: `${leftColumnWidths[1]}px`, minWidth: `${leftColumnWidths[1]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT,
                              backgroundColor: shouldShowCellHover(`${row.id}-srno`) ? '#FFFFFF' : 'transparent',
                              ...getCellBorderStyles(shouldShowCellHover(`${row.id}-srno`)) }}
                            onMouseEnter={() => handleCellHover(row.id, `${row.id}-srno`, -1)} onMouseLeave={handleCellLeave}>
                            <span className="text-sm font-normal truncate block text-center text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                              {row.sNo}
                            </span>
                          </div>

                          {/* IGM No */}
                          {renderEditableCell(row, 'igmNo', row.igmNo, 'flex items-center justify-start px-3 border-b border-gray-300',
                            { width: `${leftColumnWidths[2]}px`, minWidth: `${leftColumnWidths[2]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                            `${row.id}-igmNo`, -1)}
                          
                          {/* Container No */}
                          {renderEditableCell(row, 'containerNo', row.containerNo, 'flex items-center justify-start px-3 border-b border-gray-300',
                            { width: `${leftColumnWidths[3]}px`, minWidth: `${leftColumnWidths[3]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                            `${row.id}-containerNo`, -1)}
                        </div>
                      );
                    })}
                    
                    {/* Add Row Button */}
                    {!collapsedIgms[igmNo] && (
                      <div className="flex" style={{ width: `${leftSectionWidth}px`, paddingLeft: '8px', height: '36px' }}>
                        <AddRowButton onAddRow={() => handleAddRow(igmNo)} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Middle Data */}
            <div className="text-black overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <div ref={dataScrollRef} className={`h-full ${SCROLLBAR_CLASSES.HIDDEN}`} style={{ scrollBehavior: 'smooth' }} onScroll={handleDataScroll}>
                <div className="flex-1">
                  {Object.keys(groupedData).map((igmNo) => (
                    <React.Fragment key={`middle-group-${igmNo}`}>
                      {/* Spacer for Header */}
                      <div style={{ height: '34px', width: `${scrollWidth}px`, minWidth: '100%', backgroundColor: '#ebeef7', borderBottom: '1px solid #D0D5E3', borderTop: '1px solid #D0D5E3' }} /> 
                      
                      {!collapsedIgms[igmNo] && groupedData[igmNo].map((row) => {
                        const isRowHighlighted = shouldShowRowHighlight(row.id);
                        return (
                          <div key={`middle-row-${row.id}`} className="flex border-b border-gray-300 transition-colors"
                            style={{ width: `${scrollWidth}px`, minWidth: `${scrollWidth}px`, position: 'relative', zIndex: 1, marginBottom: '0px',
                              backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent',
                              borderTop: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : 'none',
                              borderBottom: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              height: TABLE_CONSTANTS.ROW_HEIGHT, minHeight: TABLE_CONSTANTS.ROW_HEIGHT, maxHeight: TABLE_CONSTANTS.ROW_HEIGHT }}>
                            {columnKeys.map((key, index) => (
                              <div key={`${row.id}-${key}`}>
                                {renderEditableCell(row, key, row[key], 'flex items-center justify-start px-2 border-b border-gray-300',
                                  { width: `${columnWidths[index]}px`, minWidth: `${columnWidths[index]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT,
                                    backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' }, `${row.id}-${key}`, index)}
                              </div>
                            ))}
                          </div>
                        );
                      })}

                      {/* Spacer for Add Row */}
                      {!collapsedIgms[igmNo] && (
                        <div style={{ height: '36px' }} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Data */}
            <div className="text-black flex flex-col overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="flex-1">
                {Object.keys(groupedData).map((igmNo) => (
                  <React.Fragment key={`right-group-${igmNo}`}>
                     {/* Spacer for Header */}
                     <div style={{ height: '34px', backgroundColor: '#ebeef7', borderBottom: '1px solid #D0D5E3', borderTop: '1px solid #D0D5E3' }} />
                     
                     {!collapsedIgms[igmNo] && groupedData[igmNo].map((row) => {
                      const isRowHighlighted = shouldShowRowHighlight(row.id);
                      return (
                        <div key={`right-row-${row.id}`} className="flex items-center justify-center border-b border-gray-300 transition-colors" 
                          style={{ borderRight: `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent',
                            borderBottom: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                            borderTop: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : 'none', borderLeft: 'none', marginBottom: '0px',
                            height: TABLE_CONSTANTS.ROW_HEIGHT, minHeight: TABLE_CONSTANTS.ROW_HEIGHT, maxHeight: TABLE_CONSTANTS.ROW_HEIGHT }}
                          onMouseEnter={() => handleCellHover(row.id, `${row.id}-actions`, -1)} onMouseLeave={handleCellLeave}>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-black hover:bg-gray-100">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      );
                    })}
                    
                    {/* Spacer for Add Row */}
                    {!collapsedIgms[igmNo] && (
                      <div style={{ height: '36px' }} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}