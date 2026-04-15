import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoreVertical, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

// Constants matching InvoiceDetailsTable
const TABLE_CONSTANTS = {
  ROW_HEIGHT: 34,
  BORDER_COLOR: '#D0D5E3',
  BORDER_WIDTH: '0.5px',
  ROW_GAP: 0,
  HIGHLIGHT_COLOR: '#CEF6F0',
  HOVER_CELL_BACKGROUND: '#FFFFFF',
  HOVER_BORDER_COLOR: '#3874FF',
  ROW_COLUMN_BORDER_COLOR: '#02B196',
  EDIT_BORDER: '#3874FF',
  EDIT_SHADOW: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
  HEADER_BG: '#ebeef7',
  ERROR_COLOR: '#F44545'
};

const SCROLLBAR_CLASSES = {
  HIDDEN: 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
  VISIBLE: 'overflow-x-auto overflow-y-hidden [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500'
};

export interface BondRow {
  id: string;
  sNo: number;
  bondNo: string;
  bondCode: string;
  bondPort: string;
  isSelected: boolean;
}

const initialData: BondRow[] = [
  {
    id: '1',
    sNo: 1,
    bondNo: '2345432',
    bondCode: 'UT - Undertaking',
    bondPort: 'INADM6 - MRPL-SEZ/AHMEDABAD',
    isSelected: false
  },
  {
    id: '2',
    sNo: 2,
    bondNo: '2345432',
    bondCode: 'UT - Undertaking',
    bondPort: 'INADM6 - MRPL-SEZ/AHMEDABAD',
    isSelected: false
  }
];

// Helper to check if focus is within table
const isFocusWithinTable = (tableRef: React.RefObject<HTMLDivElement>): boolean => {
  if (!tableRef.current) return false;
  const activeElement = document.activeElement;
  if (!activeElement) return false;
  return tableRef.current.contains(activeElement);
};

export default function BondDetails() {
  const [data, setData] = useState<BondRow[]>(initialData);
  const [selectAll, setSelectAll] = useState(false);
  
  // Column Widths
  const checkboxWidth = 40;
  const snoWidth = 60;
  const actionWidth = 40;

  const [columnWidths] = useState<number[]>([
    150, // Bond No.
    250, // Bond Code
    300, // Bond Port
  ]);

  const [editingCell, setEditingCell] = useState<{ rowId: string, columnKey: keyof BondRow } | null>(null);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const [currentPosition, setCurrentPosition] = useState({ rowIndex: 0, columnIndex: 0 });
  const [focusedCellId, setFocusedCellId] = useState<string | null>(null);
  const [highlightPosition, setHighlightPosition] = useState<{ rowIndex: number, columnIndex: number } | null>(null);
  
  const tableRef = useRef<HTMLDivElement>(null);
  
  // Refs for synchronized scrolling
  const headerScrollRef = useRef<HTMLDivElement>(null);
  const dataScrollRef = useRef<HTMLDivElement>(null);
  const footerScrollRef = useRef<HTMLDivElement>(null);

  const scrollingHeaderRef = useRef(false);
  const scrollingDataRef = useRef(false);
  const scrollingFooterRef = useRef(false);

  // Columns Configuration
  const columns: { key: keyof BondRow | 'checkbox' | 'sNo' | 'actions'; label: string; width: number; required?: boolean; fixed?: 'left' | 'right'; left?: number; right?: number }[] = [
    { key: 'checkbox', label: '', width: checkboxWidth, fixed: 'left', left: 0 },
    { key: 'sNo', label: 'S.No', width: snoWidth, fixed: 'left', left: checkboxWidth },
    { key: 'bondNo', label: 'Bond No.', width: columnWidths[0] },
    { key: 'bondCode', label: 'Bond Code', width: columnWidths[1] },
    { key: 'bondPort', label: 'Bond Port', width: columnWidths[2] },
    { key: 'actions', label: '', width: actionWidth, fixed: 'right', right: 0 }
  ];

  // For footer/scrolling logic
  const scrollableColumns = columns.filter(c => !c.fixed);

  const editableKeys: (keyof BondRow)[] = [
    'bondNo', 'bondCode', 'bondPort'
  ];

  const navigableColumns = columns.filter(c => editableKeys.includes(c.key as keyof BondRow));

  // Scroll Handlers
  const handleHeaderScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (scrollingHeaderRef.current) return;
    scrollingHeaderRef.current = true;
    const scrollLeft = e.currentTarget.scrollLeft;
    
    if (dataScrollRef.current && dataScrollRef.current.scrollLeft !== scrollLeft) {
      dataScrollRef.current.scrollLeft = scrollLeft;
    }
    if (footerScrollRef.current && footerScrollRef.current.scrollLeft !== scrollLeft) {
      footerScrollRef.current.scrollLeft = scrollLeft;
    }
    requestAnimationFrame(() => { scrollingHeaderRef.current = false; });
  };

  const handleDataScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (scrollingDataRef.current) return;
    scrollingDataRef.current = true;
    const scrollLeft = e.currentTarget.scrollLeft;
    
    if (headerScrollRef.current && headerScrollRef.current.scrollLeft !== scrollLeft) {
      headerScrollRef.current.scrollLeft = scrollLeft;
    }
    if (footerScrollRef.current && footerScrollRef.current.scrollLeft !== scrollLeft) {
      footerScrollRef.current.scrollLeft = scrollLeft;
    }
    requestAnimationFrame(() => { scrollingDataRef.current = false; });
  };

  const handleFooterScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (scrollingFooterRef.current) return;
    scrollingFooterRef.current = true;
    const scrollLeft = e.currentTarget.scrollLeft;
    
    if (headerScrollRef.current && headerScrollRef.current.scrollLeft !== scrollLeft) {
      headerScrollRef.current.scrollLeft = scrollLeft;
    }
    if (dataScrollRef.current && dataScrollRef.current.scrollLeft !== scrollLeft) {
      dataScrollRef.current.scrollLeft = scrollLeft;
    }
    requestAnimationFrame(() => { scrollingFooterRef.current = false; });
  };


  // State Updates
  const handleSelectAll = () => {
    const newVal = !selectAll;
    setSelectAll(newVal);
    setData(prev => prev.map(r => ({ ...r, isSelected: newVal })));
  };

  const handleRowSelect = (id: string) => {
    setData(prev => {
      const updated = prev.map(r => r.id === id ? { ...r, isSelected: !r.isSelected } : r);
      setSelectAll(updated.every(r => r.isSelected));
      return updated;
    });
  };

  const handleAddRow = () => {
    const newRow: BondRow = {
      id: Date.now().toString(),
      sNo: data.length + 1,
      bondNo: '',
      bondCode: '',
      bondPort: '',
      isSelected: false
    };
    setData([...data, newRow]);
  };

  const handleDeleteRow = (id: string) => {
    const remaining = data.filter(r => r.id !== id).map((r, i) => ({ ...r, sNo: i + 1 }));
    setData(remaining);
  };

  // Editing Logic
  const startEdit = (rowId: string, columnKey: keyof BondRow, value: any) => {
    setEditingCell({ rowId, columnKey });
    setEditValue(String(value || ''));
  };

  const cancelEdit = () => {
    setEditingCell(null);
    setEditValue('');
    if (focusedCellId) {
      setTimeout(() => {
        const el = document.querySelector(`[data-cell-id="${focusedCellId}"]`) as HTMLElement;
        if (el) el.focus();
      }, 10);
    }
  };

  const saveEdit = () => {
    if (!editingCell) return;
    setData(prev => prev.map(r => r.id === editingCell.rowId ? { ...r, [editingCell.columnKey]: editValue } : r));
    cancelEdit();
  };

  useEffect(() => {
    if (editingCell && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingCell]);

  // Navigation Logic
  const navigateTo = (rowIndex: number, colIndex: number) => {
    const r = Math.max(0, Math.min(rowIndex, data.length - 1));
    const c = Math.max(0, Math.min(colIndex, navigableColumns.length - 1));
    setCurrentPosition({ rowIndex: r, columnIndex: c });

    const colKey = navigableColumns[c].key;
    const cellId = `bond-cell-${r}-${colKey}`;
    setFocusedCellId(cellId);
    
    // Calculate global column index for highlighting
    const globalColIndex = columns.findIndex(col => col.key === colKey);
    setHighlightPosition({ rowIndex: r, columnIndex: globalColIndex });

    setTimeout(() => {
      const el = document.querySelector(`[data-cell-id="${cellId}"]`) as HTMLElement;
      if (el) {
        el.focus();
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }, 10);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isFocusWithinTable(tableRef) || !focusedCellId || editingCell) return;
    const { rowIndex, columnIndex } = currentPosition;

    switch (e.key) {
      case 'ArrowUp': e.preventDefault(); navigateTo(rowIndex - 1, columnIndex); break;
      case 'ArrowDown': e.preventDefault(); navigateTo(rowIndex + 1, columnIndex); break;
      case 'ArrowLeft': e.preventDefault(); navigateTo(rowIndex, columnIndex - 1); break;
      case 'ArrowRight': e.preventDefault(); navigateTo(rowIndex, columnIndex + 1); break;
      case 'Enter':
        e.preventDefault();
        const col = navigableColumns[columnIndex];
        if (col && data[rowIndex]) startEdit(data[rowIndex].id, col.key as keyof BondRow, data[rowIndex][col.key as keyof BondRow]);
        break;
      case 'Tab':
        e.preventDefault();
        if (columnIndex < navigableColumns.length - 1) navigateTo(rowIndex, columnIndex + 1);
        else if (rowIndex < data.length - 1) navigateTo(rowIndex + 1, 0);
        break;
    }
  }, [tableRef, focusedCellId, editingCell, currentPosition, data]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Render Helpers
  const shouldHighlightRow = (idx: number) => highlightPosition?.rowIndex === idx;
  const shouldHighlightCol = (idx: number) => highlightPosition?.columnIndex === idx;
  const isHovered = (r: number, c: number) => highlightPosition?.rowIndex === r && highlightPosition?.columnIndex === c;
  const isRowHighlightedOnly = (r: number, c: number) => shouldHighlightRow(r) && !shouldHighlightCol(c) && !isHovered(r, c);

  return (
    <div className="flex flex-col h-full w-full bg-white font-['Inter',sans-serif]" ref={tableRef} onMouseLeave={() => !focusedCellId && setHighlightPosition(null)}>
      {/* Header Section */}
      <div className="flex items-center justify-center h-[40px] bg-[#DDE3F2] border-b border-[#d0d5e3]">
        <h2 className="text-[16px] font-semibold text-[#050e25]">Bond Details</h2>
      </div>

      {/* Main Table Container */}
      <div className="flex-1 overflow-hidden flex flex-col relative border-b border-[#d0d5e3]">
        <div className="flex-1 overflow-auto relative" ref={dataScrollRef} onScroll={handleDataScroll}>
           <div className="min-w-full inline-block">
            {/* Header Row */}
            <div className="flex h-[34px] border-b border-[#d0d5e3] sticky top-0 z-20 bg-[#ebeef7]">
              {columns.map((col, idx) => (
                <div
                  key={col.key}
                  className="flex items-center px-2 h-full border-r border-[#d0d5e3] font-semibold text-[13px] text-[#050e25] whitespace-nowrap bg-[#ebeef7]"
                  style={{
                    width: col.key === 'bondPort' ? 'auto' : col.width,
                    flex: col.key === 'bondPort' ? 1 : 'none',
                    minWidth: col.key === 'bondPort' ? col.width : undefined,
                    position: col.fixed ? 'sticky' : 'relative',
                    left: col.fixed === 'left' ? col.left : undefined,
                    right: col.fixed === 'right' ? col.right : undefined,
                    zIndex: col.fixed ? 30 : 20,
                    borderLeft: col.fixed === 'right' ? `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}` : undefined,
                    boxShadow: col.fixed === 'left' && idx === 2 ? '2px 0 5px -2px rgba(0,0,0,0.1)' : 
                               col.fixed === 'right' ? '-2px 0 5px -2px rgba(0,0,0,0.1)' : undefined
                  }}
                >
                  {col.key === 'checkbox' ? (
                    <div className="w-full flex justify-center"><Checkbox checked={selectAll} onCheckedChange={handleSelectAll} /></div>
                  ) : (
                    <>
                      {col.label}
                      {col.required && <span className="text-red-500 ml-0.5">*</span>}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {data.map((row, rIdx) => (
              <div key={row.id} className="flex h-[34px] group relative">
                {columns.map((col, cIdx) => {
                  const isEditing = editingCell?.rowId === row.id && editingCell?.columnKey === col.key;
                  const cellId = `bond-cell-${rIdx}-${col.key}`;
                  const isFocused = focusedCellId === cellId && !isEditing;
                  const isHoveredCell = isHovered(rIdx, cIdx);
                  const isRowHigh = isRowHighlightedOnly(rIdx, cIdx);
                  
                  // Styles
                  let bg = row.isSelected ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'white';
                  if (isHoveredCell) bg = TABLE_CONSTANTS.HOVER_CELL_BACKGROUND;
                  else if (isRowHigh) bg = TABLE_CONSTANTS.HIGHLIGHT_COLOR;

                  let border = `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`;
                  let shadow = 'none';
                  let zIndex = col.fixed ? 10 : 1;

                  if (isFocused) {
                    border = `2px solid #3874FF`;
                    bg = '#FFFFFF';
                    shadow = '0 2px 12px 0 rgba(113, 144, 214, 0.47)';
                    zIndex = 15; // Focus on top
                  } else if (isHoveredCell) {
                    border = `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`;
                  }

                  const commonStyles: React.CSSProperties = {
                    width: col.key === 'bondPort' ? 'auto' : col.width,
                    flex: col.key === 'bondPort' ? 1 : 'none',
                    minWidth: col.key === 'bondPort' ? col.width : undefined,
                    position: col.fixed ? 'sticky' : 'relative',
                    left: col.fixed === 'left' ? col.left : undefined,
                    right: col.fixed === 'right' ? col.right : undefined,
                    zIndex: zIndex,
                    backgroundColor: bg,
                    borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                    borderBottom: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                    boxShadow: col.fixed === 'left' && cIdx === 2 ? '2px 0 5px -2px rgba(0,0,0,0.1)' : 
                                col.fixed === 'right' ? '-2px 0 5px -2px rgba(0,0,0,0.1)' : undefined
                  };

                  if (isFocused) {
                    commonStyles.border = border;
                    commonStyles.boxShadow = shadow;
                  }

                  if (col.key === 'checkbox') {
                    return (
                      <div key={col.key} className="flex items-center justify-center border-r border-[#d0d5e3]" style={commonStyles}>
                        <Checkbox checked={row.isSelected} onCheckedChange={() => handleRowSelect(row.id)} />
                      </div>
                    );
                  } else if (col.key === 'sNo') {
                    return (
                      <div key={col.key} className="flex items-center justify-center text-[13px] text-[#050e25] border-r border-[#d0d5e3]" style={commonStyles}>
                        {row.sNo}
                      </div>
                    );
                  } else if (col.key === 'actions') {
                    return (
                      <div key={col.key} className="flex items-center justify-center border-l border-[#d0d5e3]" style={commonStyles}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-100">
                              <MoreVertical className="h-4 w-4 text-gray-500" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleDeleteRow(row.id)} className="text-red-600">Delete Row</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    );
                  }

                  // Render Dropdowns for Bond Code and Bond Port
                  if (col.key === 'bondCode' || col.key === 'bondPort') {
                    return (
                        <div 
                        key={col.key} 
                        data-cell-id={cellId}
                        className="flex items-center px-0 text-[13px] text-[#050e25] truncate cursor-pointer outline-none"
                        style={commonStyles}
                        tabIndex={-1}
                        onClick={() => {
                            const navIndex = navigableColumns.findIndex(nc => nc.key === col.key);
                            if (navIndex !== -1) setCurrentPosition({ rowIndex: rIdx, columnIndex: navIndex });
                            setFocusedCellId(cellId);
                            setHighlightPosition({ rowIndex: rIdx, columnIndex: cIdx });
                        }}
                        onMouseEnter={() => !editingCell && setHighlightPosition({ rowIndex: rIdx, columnIndex: cIdx })}
                        >
                             <Select value={row[col.key as keyof BondRow] as string} onValueChange={(val) => {
                                 setData(prev => prev.map(r => r.id === row.id ? { ...r, [col.key]: val } : r));
                             }}>
                                <SelectTrigger className="w-full h-full border-none shadow-none bg-transparent focus:ring-0 px-2 text-[13px] text-[#050e25] !outline-none">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {col.key === 'bondCode' ? (
                                        <SelectItem value="UT - Undertaking">UT - Undertaking</SelectItem>
                                    ) : (
                                        <SelectItem value="INADM6 - MRPL-SEZ/AHMEDABAD">INADM6 - MRPL-SEZ/AHMEDABAD</SelectItem>
                                    )}
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                             </Select>
                        </div>
                    );
                  }

                  return (
                    <div 
                      key={col.key} 
                      data-cell-id={cellId}
                      className="flex items-center px-2 text-[13px] text-[#050e25] truncate cursor-pointer outline-none"
                      style={commonStyles}
                      tabIndex={-1}
                      onClick={() => {
                        const navIndex = navigableColumns.findIndex(nc => nc.key === col.key);
                        if (navIndex !== -1) setCurrentPosition({ rowIndex: rIdx, columnIndex: navIndex });
                        setFocusedCellId(cellId);
                        setHighlightPosition({ rowIndex: rIdx, columnIndex: cIdx });
                      }}
                      onDoubleClick={() => startEdit(row.id, col.key as keyof BondRow, row[col.key as keyof BondRow])}
                      onMouseEnter={() => !editingCell && setHighlightPosition({ rowIndex: rIdx, columnIndex: cIdx })}
                    >
                      {isEditing ? (
                        <input
                          ref={inputRef}
                          className="w-full h-full outline-none bg-white p-1 absolute inset-0 z-50"
                          style={{ border: `2px solid ${TABLE_CONSTANTS.EDIT_BORDER}`, boxShadow: TABLE_CONSTANTS.EDIT_SHADOW }}
                          value={editValue}
                          onChange={e => setEditValue(e.target.value)}
                          onBlur={saveEdit}
                          onKeyDown={e => {
                            if (e.key === 'Enter') saveEdit();
                            if (e.key === 'Escape') cancelEdit();
                          }}
                        />
                      ) : (
                        <>
                          <span className="truncate w-full">{row[col.key as keyof BondRow] as string}</span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Add Row Button Row */}
            <div className="flex h-[34px] group relative cursor-pointer hover:bg-[#F8F9FC]" onClick={handleAddRow}>
               {columns.map((col, cIdx) => {
                 const commonStyles: React.CSSProperties = {
                   width: col.key === 'bondPort' ? 'auto' : col.width,
                   flex: col.key === 'bondPort' ? 1 : 'none',
                   minWidth: col.key === 'bondPort' ? col.width : undefined,
                   position: col.fixed ? 'sticky' : 'relative',
                   left: col.fixed === 'left' ? col.left : undefined,
                   right: col.fixed === 'right' ? col.right : undefined,
                   zIndex: col.fixed ? 10 : 1,
                   backgroundColor: 'inherit',
                   borderRight: 'none',
                   borderBottom: 'none',
                   boxShadow: col.fixed === 'left' && cIdx === 2 ? '2px 0 5px -2px rgba(0,0,0,0.1)' : 
                              col.fixed === 'right' ? '-2px 0 5px -2px rgba(0,0,0,0.1)' : undefined
                 };
                 
                 // Render Content
                 let content = null;
                 if (col.key === 'sNo') {
                    content = (
                      <div className="flex items-center gap-2 text-[#3874FF] font-medium text-[13px] pl-2">
                         <Plus size={14} /> Add
                      </div>
                    );
                 }

                 return (
                   <div key={`add-${col.key}`} className="flex items-center px-2" style={commonStyles}>
                      {content}
                   </div>
                 );
               })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-[#d0d5e3] shadow-[0px_-4px_8px_0px_rgba(0,0,0,0.05)] z-20 bg-white">
        <div className="min-w-max relative overflow-hidden">
          {/* Scrollable footer content synced with main table */}
           <div ref={footerScrollRef} className={SCROLLBAR_CLASSES.HIDDEN} onScroll={handleFooterScroll}>
             <div className="flex h-[34px]">
               {/* Fixed Left Section Footer */}
               <div className="flex sticky left-0 z-30 bg-white shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                 <div style={{ width: checkboxWidth, height: TABLE_CONSTANTS.ROW_HEIGHT }} className="border-r border-[#d0d5e3]" />
                 <div 
                   style={{ width: snoWidth, height: TABLE_CONSTANTS.ROW_HEIGHT }} 
                   className="flex items-center px-2 border-r border-[#d0d5e3] text-[13px] font-medium"
                 >
                   Total
                 </div>
               </div>

               {/* Scrollable Middle Section Footer */}
               <div style={{ width: columnWidths[0], height: TABLE_CONSTANTS.ROW_HEIGHT }} className="border-r border-[#d0d5e3] flex items-center px-2 bg-white text-[12px] font-medium">
                   {data.length} items
               </div>
               {scrollableColumns.filter(c => c.key !== 'bondNo').map((col, idx) => (
                 <div 
                   key={col.key} 
                   style={{ 
                     width: col.key === 'bondPort' ? 'auto' : col.width,
                     flex: col.key === 'bondPort' ? 1 : 'none',
                     minWidth: col.key === 'bondPort' ? col.width : undefined,
                     height: TABLE_CONSTANTS.ROW_HEIGHT 
                   }}
                   className="border-r border-[#d0d5e3] flex items-center px-2 bg-white"
                 >
                 </div>
               ))}

               {/* Fixed Right Section Footer */}
               <div className="sticky right-0 z-30 bg-white shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  <div style={{ width: actionWidth, height: TABLE_CONSTANTS.ROW_HEIGHT }} className="border-l border-[#d0d5e3]" />
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
