import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Resizable } from 're-resizable';
import { EditingCell, BaseTableRow, SCROLLBAR_CLASSES, TABLE_CONSTANTS } from './shared/TableTypes';
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
import AddRowButton from './AddRowButton';

type LevelType = 'Job Level' | 'Invoice Level' | 'Item Level';

interface StatementRow extends BaseTableRow {
  statementType: string;
  statementCode: string; // Statement Code
  statementText: string; // Statement Text
  invItemSrNo: string; // Inv/ Item Sr.No.
  level: LevelType;
}

const mockData: StatementRow[] = [
  { id: '1', sNo: 1, statementType: 'DEC', statementCode: 'CUV01', statementText: 'I/We declare that all conditions or restrictions, if any, imposed by the seller of any third party on the disposition or use of the imported goods [as per proviso to Rule 3(2)) of the Customs Valuation Rules, 2007] are specified above.', invItemSrNo: '001', isSelected: false, level: 'Job Level' },
  { id: '2', sNo: 2, statementType: 'DEC', statementCode: 'CUV02', statementText: 'I/We declare that all conditions or restrictions, if any, imposed by the seller of any third party on the disposition or use of the imported goods [as per proviso to Rule 3(2)) of the Customs Valuation Rules, 2007] are specified above.', invItemSrNo: '002', isSelected: false, level: 'Job Level' },
  { id: '3', sNo: 3, statementType: 'DEC', statementCode: 'CUV03', statementText: 'I/We declare that all conditions or restrictions, if any, imposed by the seller of any third party on the disposition or use of the imported goods [as per proviso to Rule 3(2)) of the Customs Valuation Rules, 2007] are specified above.', invItemSrNo: '1/0', isSelected: false, level: 'Invoice Level' },
  { id: '4', sNo: 4, statementType: 'DEC', statementCode: 'CUV04', statementText: 'I/We declare that all conditions or restrictions, if any, imposed by the seller of any third party on the disposition or use of the imported goods [as per proviso to Rule 3(2)) of the Customs Valuation Rules, 2007] are specified above.', invItemSrNo: '2/0', isSelected: false, level: 'Invoice Level' },
  { id: '5', sNo: 5, statementType: 'DEC', statementCode: 'CUV05', statementText: 'I/We declare that all conditions or restrictions, if any, imposed by the seller of any third party on the disposition or use of the imported goods [as per proviso to Rule 3(2)) of the Customs Valuation Rules, 2007] are specified above.', invItemSrNo: '1/1', isSelected: false, level: 'Item Level' },
];

const columnHeaders = ['Statement Code', 'Statement Text', 'Inv/ Item Sr.No.'];
const columnKeys: (keyof StatementRow)[] = ['statementCode', 'statementText', 'invItemSrNo'];
const leftColumnHeaders = ['', 'Sr.No', 'Statement Type'];
const editableColumns: (keyof StatementRow)[] = ['statementType', ...columnKeys];

export default function StatementsTable({ showHeader = true, propData, enableGrouping = false, className = '' }: { showHeader?: boolean; propData?: any[]; enableGrouping?: boolean; className?: string }) {
  const [data, setData] = useState<StatementRow[]>(mockData);
  
  useEffect(() => {
    if (propData && propData.length > 0) {
      // Transform auto-populated data to match StatementRow structure if needed
      // Based on auto-population in Form-1621-8529.tsx: { sNo: 1, type: 'DESC', code: 'AO000', text: '...' }
      const transformedData = propData.map((item, index) => ({
        id: item.id || `auto-${Date.now()}-${index}`,
        sNo: item.sNo || index + 1,
        statementType: item.type || item.statementType || '',
        statementCode: item.code || item.statementCode || '',
        statementText: item.text || item.statementText || '',
        invItemSrNo: item.invItemSrNo || '',
        isSelected: false,
        level: (item.level as LevelType) || 'Job Level' // Default to Job Level if not specified
      }));
      setData(transformedData);
    }
  }, [propData]);
  
  const [selectAll, setSelectAll] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (level: string) => {
    setCollapsedGroups(prev => ({ ...prev, [level]: !prev[level] }));
  };

  const [leftColumnWidths, setLeftColumnWidths] = useState<number[]>([40, 80, 200]);
  const [columnWidths, setColumnWidths] = useState<number[]>([420, 350, 240]);
  const [editingCell, setEditingCell] = useState<EditingCell | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const [hoverState, setHoverState] = useState({ rowId: null, cellId: null, columnIndex: null });

  const headerScrollRef = useRef<HTMLDivElement>(null);
  const dataScrollRef = useRef<HTMLDivElement>(null);
  const footerScrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
  const { handleHeaderScroll, handleDataScroll, handleFooterScroll } = createScrollSyncHandlers(headerScrollRef, dataScrollRef, footerScrollRef);
  const { handleCellHover, handleCellLeave } = createHoverHandlers(setHoverState);
  const { shouldShowRowHighlight, shouldShowCellHover, shouldShowColumnHeaderHover } = createStateCheckers(hoverState, editingCell);
  const { handleLeftColumnResize, handleColumnResize } = createResizeHandlers(setLeftColumnWidths, setColumnWidths);
  const { handleSelectAll, handleRowSelect } = createSelectionHandlers(data, setData, setSelectAll);

  const leftSectionWidth = calculateTotalWidth(leftColumnWidths);
  const scrollWidth = calculateTotalWidth(columnWidths);

  const levels: LevelType[] = ['Job Level', 'Invoice Level', 'Item Level'];
  const groupedData = React.useMemo(() => {
    const groups: Record<LevelType, StatementRow[]> = {
      'Job Level': [],
      'Invoice Level': [],
      'Item Level': []
    };
    data.forEach(row => {
      if (groups[row.level]) {
        groups[row.level].push(row);
      } else {
        groups['Job Level'].push(row);
      }
    });
    return groups;
  }, [data]);

  const handleAddRow = () => {
    let defaultInvItemSrNo = '009';

    const newRow: StatementRow = {
      id: Date.now().toString(), sNo: data.length + 1,
      statementType: 'New Statement', statementCode: 'NS-009', statementText: 'New Statement Description',
      invItemSrNo: defaultInvItemSrNo, isSelected: false, level: 'Job Level'
    };
    setData(prev => [...prev, newRow].map((row, index) => ({ ...row, sNo: index + 1 })));
  };

  useEffect(() => {
    (window as any).addStatementsRow = () => handleAddRow();
    return () => {
      delete (window as any).addStatementsRow;
    };
  }, [data]);

  const startEdit = (rowId: string, columnKey: keyof StatementRow, currentValue: any) => {
    if (!editableColumns.includes(columnKey)) return;
    setEditingCell({ rowId, columnKey });
    setEditValue(String(currentValue || ''));
  };

  const saveEdit = () => {
    if (!editingCell) return;
    setData(prev => prev.map(row => row.id === editingCell.rowId ? { ...row, [editingCell.columnKey]: editValue } : row));
    setEditingCell(null);
    setEditValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') { e.preventDefault(); saveEdit(); }
    else if (e.key === 'Escape') { e.preventDefault(); setEditingCell(null); setEditValue(''); }
  };

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

  const renderEditableCell = (row: StatementRow, columnKey: keyof StatementRow, value: any, className: string = '', style: React.CSSProperties = {}, cellId: string = '', columnIndex: number = -1) => {
    const isEditing = editingCell?.rowId === row.id && editingCell?.columnKey === columnKey;
    const isEditable = editableColumns.includes(columnKey);
    const isRowHighlighted = shouldShowRowHighlight(row.id);
    const isCellHovered = shouldShowCellHover(cellId);

    if (isEditing) {
      return (
        <div className={`relative ${className}`} style={{...style, zIndex: 50, position: 'relative', overflow: 'visible'}}>
          <input ref={inputRef} type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} onKeyDown={handleKeyPress} onBlur={saveEdit}
            className="absolute outline-none text-black text-sm" style={{ 
              fontFamily: 'Inter, sans-serif', fontSize: '14px', width: 'calc(100% + 2px)', height: 'calc(100% + 2px)',
              minHeight: '36px', maxHeight: '36px', margin: 0, padding: '0 8px', left: '-1px', top: '-1px', right: '-1px', bottom: '-1px',
              border: `2px solid ${TABLE_CONSTANTS.EDIT_BORDER}`, backgroundColor: '#FFFFFF', boxShadow: TABLE_CONSTANTS.EDIT_SHADOW, zIndex: 100, borderRadius: '0px'
            }} />
        </div>
      );
    }

    const cellBorderStyles = getCellBorderStyles(isCellHovered);
    const backgroundColor = getCellBackgroundColor(isCellHovered, false, 'transparent');

    return (
      <div className={`${className} ${isEditable ? 'cursor-pointer transition-all duration-200 group editable-cell' : ''} relative`}
        style={{ ...style, ...cellBorderStyles, backgroundColor }}
        onClick={() => isEditable && startEdit(row.id, columnKey, value)} title={isEditable ? 'Click to edit' : String(value)}
        tabIndex={isEditable ? 0 : -1} onMouseEnter={() => handleCellHover(row.id, cellId, columnIndex)} onMouseLeave={handleCellLeave}>
        <span className="text-sm font-normal truncate block text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          {String(value || '')}
        </span>      
      </div>
    );
  };

  return (
    <div className={`h-full flex flex-col ${className}`}>
      {/* Header Section */}
      {showHeader && (
        <div className="flex items-center justify-center h-[40px] bg-[#DDE3F2] border-b border-[#d0d5e3]">
          <h2 className="text-[16px] font-semibold text-[#050e25]">Statements</h2>
        </div>
      )}

      <div className="w-full relative overflow-hidden border border-gray-300 table-component" style={{ fontFamily: 'Inter, sans-serif', height: showHeader ? 'calc(100% - 40px)' : '100%' }}>
      {/* Left Scroll Arrow - Fixed in Footer Position */}
      {showLeftArrow && (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleScrollLeft();
          }}
          onMouseDown={(e) => e.preventDefault()}
          className="z-[100] bg-white hover:bg-gray-50 rounded-full p-1 shadow-lg border border-gray-200"
          style={{ 
            position: 'absolute',
            bottom: '8px',
            left: '8px',
            transition: 'background-color 0.2s, transform 0.2s',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-[18px] h-[18px] text-[#050E25]" />
        </button>
      )}

      {/* Right Scroll Arrow - Fixed in Footer Position */}
      {showRightArrow && (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleScrollRight();
          }}
          onMouseDown={(e) => e.preventDefault()}
          className="z-[100] bg-white hover:bg-gray-50 rounded-full p-1 shadow-lg border border-gray-200"
          style={{ 
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            transition: 'background-color 0.2s, transform 0.2s',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Scroll right"
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
                minWidth={TABLE_CONSTANTS.LEFT_COLUMN_MIN_WIDTHS[index]} maxWidth={index === 0 ? 80 : index === 1 ? 150 : 500}
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
            <MoreVertical className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* Data Body */}
        <div className="flex-1 overflow-y-auto grid" style={{ gridTemplateColumns: `${leftSectionWidth}px 1fr 50px` }}>
          {/* Left Data */}
          <div className="text-black flex flex-col overflow-hidden" style={{ position: 'relative', boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#FFFFFF' }}>
            <div className="flex-1">
              {enableGrouping ? levels.map(level => {
                const groupRows = groupedData[level];
                if (groupRows.length === 0) return null;
                return (
                  <React.Fragment key={level}>
                    <div className="flex items-center px-2 bg-[#F1F4F8] border-b border-[#d0d5e3] cursor-pointer hover:bg-[#e2e6f2] transition-colors" 
                         style={{ height: TABLE_CONSTANTS.ROW_HEIGHT, width: `${leftSectionWidth}px` }}
                         onClick={() => toggleGroup(level)}>
                       <div className="mr-2 p-1 rounded-full hover:bg-white/50">
                          {collapsedGroups[level] ? <ChevronRight className="w-4 h-4 text-[#626776]" /> : <ChevronDown className="w-4 h-4 text-[#626776]" />}
                       </div>
                       <span className="font-semibold text-[13px] text-[#050E25]">{level}</span>
                    </div>
                    {!collapsedGroups[level] && groupRows.map((row) => {
                      const isRowHighlighted = shouldShowRowHighlight(row.id);
                      return (
                        <div key={`left-row-${row.id}`} className="flex border-b border-gray-300 transition-colors" 
                          style={{ position: 'relative', zIndex: 1, marginBottom: '0px', backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent',
                            borderTop: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : 'none',
                            borderBottom: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                            height: TABLE_CONSTANTS.ROW_HEIGHT, minHeight: TABLE_CONSTANTS.ROW_HEIGHT, maxHeight: TABLE_CONSTANTS.ROW_HEIGHT }}>
                          
                          <div className="flex items-center justify-center border-b border-gray-300"
                            style={{ width: `${leftColumnWidths[0]}px`, minWidth: `${leftColumnWidths[0]}px`, maxWidth: `${leftColumnWidths[0]}px`,
                              height: TABLE_CONSTANTS.ROW_HEIGHT, 
                              borderRight: shouldShowCellHover(`${row.id}-checkbox`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderBottom: shouldShowCellHover(`${row.id}-checkbox`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderTop: shouldShowCellHover(`${row.id}-checkbox`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none', 
                              borderLeft: shouldShowCellHover(`${row.id}-checkbox`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none',
                              backgroundColor: shouldShowCellHover(`${row.id}-checkbox`) ? '#FFFFFF' : 'transparent' }}
                            onMouseEnter={() => handleCellHover(row.id, `${row.id}-checkbox`, -1)} onMouseLeave={handleCellLeave}>
                            <Checkbox checked={row.isSelected} onCheckedChange={() => handleRowSelect(row.id)} 
                              className="w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white" />
                          </div>
                          
                          <div className="flex items-center justify-center border-b border-gray-300"
                            style={{ width: `${leftColumnWidths[1]}px`, minWidth: `${leftColumnWidths[1]}px`, maxWidth: `${leftColumnWidths[1]}px`,
                              height: TABLE_CONSTANTS.ROW_HEIGHT, 
                              borderRight: shouldShowCellHover(`${row.id}-srno`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderBottom: shouldShowCellHover(`${row.id}-srno`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderTop: shouldShowCellHover(`${row.id}-srno`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none',
                              borderLeft: shouldShowCellHover(`${row.id}-srno`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none',
                              backgroundColor: shouldShowCellHover(`${row.id}-srno`) ? '#FFFFFF' : 'transparent' }}
                            onMouseEnter={() => handleCellHover(row.id, `${row.id}-srno`, -1)} onMouseLeave={handleCellLeave}>
                            <span className="text-sm font-normal truncate block text-center text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                              {row.sNo}
                            </span>
                          </div>
                          
                          {renderEditableCell(row, 'statementType', row.statementType, 'flex items-center justify-start px-3 border-b border-gray-300',
                            { width: `${leftColumnWidths[2]}px`, minWidth: `${leftColumnWidths[2]}px`, maxWidth: `${leftColumnWidths[2]}px`,
                              height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                            `${row.id}-statementtype`, -1)}
                        </div>
                      );
                    })}
                  </React.Fragment>
                );
              }) : data.map((row) => {
                      const isRowHighlighted = shouldShowRowHighlight(row.id);
                      return (
                        <div key={`left-row-${row.id}`} className="flex border-b border-gray-300 transition-colors" 
                          style={{ position: 'relative', zIndex: 1, marginBottom: '0px', backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent',
                            borderTop: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : 'none',
                            borderBottom: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                            height: TABLE_CONSTANTS.ROW_HEIGHT, minHeight: TABLE_CONSTANTS.ROW_HEIGHT, maxHeight: TABLE_CONSTANTS.ROW_HEIGHT }}>
                          
                          <div className="flex items-center justify-center border-b border-gray-300"
                            style={{ width: `${leftColumnWidths[0]}px`, minWidth: `${leftColumnWidths[0]}px`, maxWidth: `${leftColumnWidths[0]}px`,
                              height: TABLE_CONSTANTS.ROW_HEIGHT, 
                              borderRight: shouldShowCellHover(`${row.id}-checkbox`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderBottom: shouldShowCellHover(`${row.id}-checkbox`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderTop: shouldShowCellHover(`${row.id}-checkbox`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none', 
                              borderLeft: shouldShowCellHover(`${row.id}-checkbox`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none',
                              backgroundColor: shouldShowCellHover(`${row.id}-checkbox`) ? '#FFFFFF' : 'transparent' }}
                            onMouseEnter={() => handleCellHover(row.id, `${row.id}-checkbox`, -1)} onMouseLeave={handleCellLeave}>
                            <Checkbox checked={row.isSelected} onCheckedChange={() => handleRowSelect(row.id)} 
                              className="w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white" />
                          </div>
                          
                          <div className="flex items-center justify-center border-b border-gray-300"
                            style={{ width: `${leftColumnWidths[1]}px`, minWidth: `${leftColumnWidths[1]}px`, maxWidth: `${leftColumnWidths[1]}px`,
                              height: TABLE_CONSTANTS.ROW_HEIGHT, 
                              borderRight: shouldShowCellHover(`${row.id}-srno`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderBottom: shouldShowCellHover(`${row.id}-srno`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderTop: shouldShowCellHover(`${row.id}-srno`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none',
                              borderLeft: shouldShowCellHover(`${row.id}-srno`) ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none',
                              backgroundColor: shouldShowCellHover(`${row.id}-srno`) ? '#FFFFFF' : 'transparent' }}
                            onMouseEnter={() => handleCellHover(row.id, `${row.id}-srno`, -1)} onMouseLeave={handleCellLeave}>
                            <span className="text-sm font-normal truncate block text-center text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                              {row.sNo}
                            </span>
                          </div>
                          
                          {renderEditableCell(row, 'statementType', row.statementType, 'flex items-center justify-start px-3 border-b border-gray-300',
                            { width: `${leftColumnWidths[2]}px`, minWidth: `${leftColumnWidths[2]}px`, maxWidth: `${leftColumnWidths[2]}px`,
                              height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                            `${row.id}-statementtype`, -1)}
                        </div>
                      );
              })}
              {/* Add Row Button in Left Section */}
              <div className="flex border-b border-gray-300" style={{ height: TABLE_CONSTANTS.ROW_HEIGHT, width: `${leftSectionWidth}px` }}>
                 <div style={{ paddingLeft: '8px', paddingTop: '4px' }}>
                   <AddRowButton onAddRow={() => handleAddRow()} />
                 </div>
              </div>
            </div>
          </div>

          {/* Middle Data */}
          <div className="text-black overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
            <div ref={dataScrollRef} className={`h-full ${SCROLLBAR_CLASSES.HIDDEN}`} style={{ scrollBehavior: 'smooth' }} onScroll={handleDataScroll}>
              <div className="flex-1">
                {enableGrouping ? levels.map(level => {
                  const groupRows = groupedData[level];
                  if (groupRows.length === 0) return null;
                  return (
                    <React.Fragment key={level}>
                      <div className="bg-[#F1F4F8] border-b border-[#d0d5e3]" style={{ height: TABLE_CONSTANTS.ROW_HEIGHT, width: `${scrollWidth}px` }}></div>
                      {!collapsedGroups[level] && groupRows.map((row) => {
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
                    </React.Fragment>
                  );
                }) : data.map((row) => {
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
                {/* Empty Add Row Placeholder in Middle Section to maintain alignment */}
                <div className="border-b border-gray-300 bg-white" style={{ height: TABLE_CONSTANTS.ROW_HEIGHT, width: `${scrollWidth}px` }}></div>
              </div>
            </div>
          </div>

          {/* Right Data */}
          <div className="text-black flex flex-col overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex-1">
              {enableGrouping ? levels.map(level => {
                const groupRows = groupedData[level];
                if (groupRows.length === 0) return null;
                return (
                  <React.Fragment key={level}>
                    <div className="bg-[#F1F4F8] border-b border-[#d0d5e3]" style={{ height: TABLE_CONSTANTS.ROW_HEIGHT }}></div>
                    {!collapsedGroups[level] && groupRows.map((row) => {
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
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Statement Details</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                              <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      );
                    })}
                  </React.Fragment>
                );
              }) : data.map((row) => {
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
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Statement Details</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                              <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      );
              })}
              {/* Empty Add Row Placeholder in Right Section */}
              <div className="border-b border-gray-300 bg-white" style={{ height: TABLE_CONSTANTS.ROW_HEIGHT }}></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3] shrink-0" style={{ zIndex: 10, position: 'relative' }}>
             <span className="text-[13px] font-semibold text-[#050e25]">Total Items: {data.length}</span>
        </div>
      </div>
    </div>
    </div>
  );
}