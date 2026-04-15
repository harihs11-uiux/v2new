import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, Maximize2, ChevronLeft, ChevronRight, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Resizable } from 're-resizable';
import { SectionHeader as FigmaSectionHeader, FormRow, FormField } from './FigmaForm';
import SectionHeader from '../imports/SectionHeader'; // Keep the original one for the main table header
import AddRowButton from './AddRowButton';
import ContainerDetailsTable from './ContainerDetailsTable';

// Define consistent table constants
const TABLE_CONSTANTS = {
  ROW_HEIGHT: 34,
  BORDER_COLOR: '#D0D5E3'
};

// CSS classes for scrollbar control
const SCROLLBAR_CLASSES = {
  HIDDEN: 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
  VISIBLE: 'overflow-x-auto overflow-y-hidden [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500'
};

interface IGMRow {
  id: string;
  sNo: number;
  lineNo: string;
  subLineNo: string;
  igmNumber: string;
  inwardDate: string;
  gatewayIgmNumber: string;
  cargoType: string;
  mawbBlNo: string;
  hawbBlNo: string;
  totalNoPkg: string;
  igmDate: string;
  gatewayIgmDate: string;
  mawbBlDate: string;
  hawbBlDate: string;
  packageCode: string;
  grossWeight: string;
  uqc: string;
  marksNos1: string;
  marksNos2: string;
  marksNos3: string;
  eta: string;
  bkVesFlt: string;
  bkVoyage: string;
  gatewayPortCode: string;
  carrierCode: string;
  chargeableWeight: string;
  isSelected: boolean;
}

// Editing cell interface
interface EditingCell {
  rowId: string;
  columnKey: keyof IGMRow;
}

// Comprehensive hover state interface
interface HoverState {
  rowId: string | null;
  cellId: string | null;
  columnIndex: number | null;
}

const mockData: IGMRow[] = [
  {
    id: '1',
    sNo: 1,
    lineNo: '001',
    subLineNo: '0',
    igmNumber: 'IGM-2025-001',
    inwardDate: '2025-01-15',
    gatewayIgmNumber: 'IGM-001',
    cargoType: 'General',
    mawbBlNo: 'MAWB-001-2025',
    hawbBlNo: 'HAWB-001-2025', 
    totalNoPkg: '150',
    igmDate: '2025-01-15',
    gatewayIgmDate: '2025-01-15',
    mawbBlDate: '2025-01-14',
    hawbBlDate: '2025-01-14',
    packageCode: 'PKG',
    grossWeight: '1250.50',
    uqc: 'KGS',
    marksNos1: 'CONTAINER-001',
    marksNos2: 'SEAL-ABC123',
    marksNos3: 'LOT-2025-001',
    eta: '2025-01-20',
    bkVesFlt: 'MSC-OSCAR',
    bkVoyage: 'V2025-001',
    gatewayPortCode: 'INNSA',
    carrierCode: 'MSC',
    chargeableWeight: '1300.00',
    isSelected: false
  },
  {
    id: '2',
    sNo: 2,
    lineNo: '002',
    subLineNo: '0',
    igmNumber: 'IGM-2025-002',
    inwardDate: '2025-01-16',
    gatewayIgmNumber: 'IGM-002',
    cargoType: 'General',
    mawbBlNo: 'MAWB-002-2025',
    hawbBlNo: 'HAWB-002-2025',
    totalNoPkg: '250',
    igmDate: '2025-01-16',
    gatewayIgmDate: '2025-01-16',
    mawbBlDate: '2025-01-15',
    hawbBlDate: '2025-01-15',
    packageCode: 'CTN',
    grossWeight: '2150.75',
    uqc: 'KGS',
    marksNos1: 'CONTAINER-002',
    marksNos2: 'SEAL-DEF456',
    marksNos3: 'LOT-2025-002',
    eta: '2025-01-21',
    bkVesFlt: 'EVERGREEN-EVER',
    bkVoyage: 'V2025-002',
    gatewayPortCode: 'INBOM',
    carrierCode: 'EMC',
    chargeableWeight: '2200.00',
    isSelected: false
  },
  {
    id: '3',
    sNo: 3,
    lineNo: '003',
    subLineNo: '0',
    igmNumber: 'IGM-2025-003',
    inwardDate: '2025-01-17',
    gatewayIgmNumber: 'IGM-003',
    cargoType: 'General',
    mawbBlNo: 'MAWB-003-2025',
    hawbBlNo: 'HAWB-003-2025',
    totalNoPkg: '75',
    igmDate: '2025-01-17',
    gatewayIgmDate: '2025-01-17',
    mawbBlDate: '2025-01-16',
    hawbBlDate: '2025-01-16',
    packageCode: 'PLT',
    grossWeight: '3250.25',
    uqc: 'KGS',
    marksNos1: 'CONTAINER-003',
    marksNos2: 'SEAL-GHI789',
    marksNos3: 'LOT-2025-003',
    eta: '2025-01-22',
    bkVesFlt: 'CMA-CGM-LIBERTY',
    bkVoyage: 'V2025-003',
    gatewayPortCode: 'INMAA',
    carrierCode: 'CMA',
    chargeableWeight: '3300.00',
    isSelected: false
  },
  {
    id: '4',
    sNo: 4,
    lineNo: '004',
    subLineNo: '0',
    igmNumber: 'IGM-2025-004',
    inwardDate: '2025-01-18',
    gatewayIgmNumber: 'IGM-004',
    cargoType: 'General',
    mawbBlNo: 'MAWB-004-2025',
    hawbBlNo: 'HAWB-004-2025',
    totalNoPkg: '180',
    igmDate: '2025-01-18',
    gatewayIgmDate: '2025-01-18',
    mawbBlDate: '2025-01-17',
    hawbBlDate: '2025-01-17',
    packageCode: 'BAG',
    grossWeight: '1850.40',
    uqc: 'KGS',
    marksNos1: 'CONTAINER-004',
    marksNos2: 'SEAL-JKL012',
    marksNos3: 'LOT-2025-004',
    eta: '2025-01-23',
    bkVesFlt: 'COSCO-SHIPPING',
    bkVoyage: 'V2025-004',
    gatewayPortCode: 'INCCU',
    carrierCode: 'COSCO',
    chargeableWeight: '1900.00',
    isSelected: false
  }
];

// Helper function to format date
const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  // Check if it matches YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  }
  return dateStr;
};

export default function IGMDetailsTable() {
  const [data, setData] = useState<IGMRow[]>(mockData);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedIGM, setSelectedIGM] = useState<IGMRow | null>(null);
  const [navigationLevel, setNavigationLevel] = useState<string>('IGM Level');
  
  // Left section column widths state for resizable functionality
  const [leftColumnWidths, setLeftColumnWidths] = useState<number[]>([30, 40, 60, 140, 80, 80]); // expand, checkbox, Sr.No, IGM Number, Line No, Sub Line No
  
  // Middle section column widths state for resizable functionality - 22 columns
  const [columnWidths, setColumnWidths] = useState<number[]>([120, 140, 120, 140, 140, 120, 120, 140, 140, 140, 120, 120, 100, 140, 140, 140, 120, 140, 140, 140, 120, 150]);

  // Expansion state
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [tableWidth, setTableWidth] = useState(0);

  useEffect(() => {
    if (tableContainerRef.current) {
        setTableWidth(tableContainerRef.current.offsetWidth);
    }
    
    const handleResize = () => {
        if (tableContainerRef.current) {
            setTableWidth(tableContainerRef.current.offsetWidth);
        }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleRowExpansion = (id: string) => {
    setExpandedRowId(prev => prev === id ? null : id);
  };
  const [editingCell, setEditingCell] = useState<EditingCell | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Scrolling synchronization refs - clean implementation
  const headerScrollRef = useRef<HTMLDivElement>(null);
  const dataScrollRef = useRef<HTMLDivElement>(null);
  
  // Prevent recursive scroll events
  const scrollingHeaderRef = useRef<boolean>(false);
  const scrollingDataRef = useRef<boolean>(false);

  // Comprehensive hover state management
  const [hoverState, setHoverState] = useState<HoverState>({ 
    rowId: null, 
    cellId: null, 
    columnIndex: null 
  });

  // Define which columns are editable and navigable
  const editableColumns: (keyof IGMRow)[] = [
    'igmNumber', 'inwardDate', 'gatewayIgmNumber', 'cargoType', 'mawbBlNo', 'hawbBlNo', 'totalNoPkg', 'igmDate', 'gatewayIgmDate',
    'mawbBlDate', 'hawbBlDate', 'packageCode', 'grossWeight', 'uqc', 'marksNos1', 'marksNos2', 'marksNos3',
    'eta', 'bkVesFlt', 'bkVoyage', 'gatewayPortCode', 'carrierCode', 'chargeableWeight',
    'lineNo', 'subLineNo'
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

  const handleAddRow = () => {
    const newRow: IGMRow = {
      id: Date.now().toString(),
      sNo: data.length + 1,
      lineNo: String(data.length + 1).padStart(3, '0'),
      subLineNo: '0',
      igmNumber: `IGM-2025-${String(data.length + 1).padStart(3, '0')}`,
      inwardDate: '2025-01-23',
      gatewayIgmNumber: `IGM-${String(data.length + 1).padStart(3, '0')}`,
      cargoType: 'General',
      mawbBlNo: `MAWB-${String(data.length + 1).padStart(3, '0')}-2025`,
      hawbBlNo: `HAWB-${String(data.length + 1).padStart(3, '0')}-2025`,
      totalNoPkg: '0',
      igmDate: '2025-01-23',
      gatewayIgmDate: '2025-01-23',
      mawbBlDate: '2025-01-22',
      hawbBlDate: '2025-01-22',
      packageCode: 'PKG',
      grossWeight: '0.00',
      uqc: 'KGS',
      marksNos1: 'NEW-CONTAINER',
      marksNos2: 'NEW-SEAL',
      marksNos3: 'NEW-LOT',
      eta: '2025-01-28',
      bkVesFlt: 'NEW-VESSEL',
      bkVoyage: 'V2025-NEW',
      gatewayPortCode: 'INNEW',
      carrierCode: 'NEW',
      chargeableWeight: '0.00',
      isSelected: false
    };
    setData(prev => [...prev, newRow]);
    
    // Update serial numbers for all rows
    setData(prev => prev.map((row, index) => ({
      ...row,
      sNo: index + 1
    })));
  };

  // Improved synchronized horizontal scrolling with recursion prevention
  const handleHeaderScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (scrollingHeaderRef.current) return;
    
    scrollingHeaderRef.current = true;
    const scrollLeft = e.currentTarget.scrollLeft;
    
    if (dataScrollRef.current && dataScrollRef.current.scrollLeft !== scrollLeft) {
      dataScrollRef.current.scrollLeft = scrollLeft;
    }
    
    // Use requestAnimationFrame to reset the flag to prevent scroll conflicts
    requestAnimationFrame(() => {
      scrollingHeaderRef.current = false;
    });
  };

  const handleDataScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (scrollingDataRef.current) return;
    
    scrollingDataRef.current = true;
    const scrollLeft = e.currentTarget.scrollLeft;
    
    if (headerScrollRef.current && headerScrollRef.current.scrollLeft !== scrollLeft) {
      headerScrollRef.current.scrollLeft = scrollLeft;
    }
    
    // Use requestAnimationFrame to reset the flag to prevent scroll conflicts
    requestAnimationFrame(() => {
      scrollingDataRef.current = false;
    });
  };

  // Comprehensive hover state handlers
  const handleCellHover = (rowId: string, cellId: string, columnIndex: number) => {
    setHoverState({ rowId, cellId, columnIndex });
  };

  const handleCellLeave = () => {
    setHoverState({ rowId: null, cellId: null, columnIndex: null });
  };

  // Editing handlers
  const startEdit = (rowId: string, columnKey: keyof IGMRow, currentValue: any) => {
    if (!editableColumns.includes(columnKey)) return;
    
    setEditingCell({ rowId, columnKey });
    
    // Format if date column
    let valueToEdit = String(currentValue || '');
    if (['igmDate', 'gatewayIgmDate', 'mawbBlDate', 'hawbBlDate', 'eta', 'inwardDate'].includes(columnKey)) {
       valueToEdit = formatDate(valueToEdit);
    }
    
    setEditValue(valueToEdit);
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
    
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingCell(null);
    setEditValue('');
  };

  // Enhanced keyboard navigation with arrow keys
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveEdit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cancelEdit();
    }
  };

  // Auto-focus input when editing starts
  useEffect(() => {
    if (editingCell && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingCell]);

  // Helper functions for state checks
  const shouldShowRowHover = (rowId: string) => {
    return hoverState.rowId === rowId;
  };

  const shouldShowRowActive = (rowId: string) => {
    return editingCell?.rowId === rowId;
  };

  const shouldShowRowHighlight = (rowId: string) => {
    // Show row highlighting for both hover and active (editing) states
    return shouldShowRowHover(rowId) || shouldShowRowActive(rowId);
  };

  const shouldShowCellHover = (cellId: string) => {
    return hoverState.cellId === cellId;
  };

  const shouldShowColumnHeaderHover = (columnIndex: number) => {
    return hoverState.columnIndex === columnIndex;
  };

  // Helper functions for styling
  const getColumnHeaderHoverStyles = (columnIndex: number) => {
    if (shouldShowColumnHeaderHover(columnIndex)) {
      return {
        backgroundColor: '#CEF6F0',
        borderTop: '1px solid #02B196',
        borderRight: '1px solid #02B196',
        borderBottom: '1px solid #02B196',
        borderLeft: '1px solid #02B196'
      };
    }
    return {};
  };

  // Editable cell renderer
  const renderEditableCell = (
    row: IGMRow, 
    columnKey: keyof IGMRow, 
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

    // Format date columns for display and editing initialization
    const dateColumns = ['igmDate', 'gatewayIgmDate', 'mawbBlDate', 'hawbBlDate', 'eta', 'inwardDate'];
    const isDateColumn = dateColumns.includes(columnKey as string);
    
    const displayValue = isDateColumn ? formatDate(String(value || '')) : String(value || '');

    if (isEditing) {
      return (
        <div className={`relative ${className}`} style={{...style, zIndex: 50, position: 'relative', overflow: 'visible'}}>
          <input
            ref={inputRef}
            type="text"
            // Use formatted value for editing if it's a date column and we just started editing (handled by setEditValue in startEdit)
            // But here we bind to editValue state
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
              border: '2px solid #3874FF',
              borderStyle: 'solid',
              borderTopColor: '#3874FF',
              borderRightColor: '#3874FF',
              borderBottomColor: '#3874FF',
              borderLeftColor: '#3874FF',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
              zIndex: 100,
              borderRadius: '0px'
            }}
          />
        </div>
      );
    }

    // Cell hover styling: White background with blue borders on all four sides
    const cellBorderStyles = {
      borderTop: isCellHovered ? '1px solid #3874FF' : 'none',
      borderRight: isCellHovered ? '1px solid #3874FF' : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
      borderBottom: isCellHovered ? '1px solid #3874FF' : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
      borderLeft: isCellHovered ? '1px solid #3874FF' : 'none'
    };

    const backgroundColor = isCellHovered ? '#FFFFFF' : 'transparent';

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
        <span className="text-sm font-normal truncate block text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          {displayValue}
        </span>
      </div>
    );
  };

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
  const leftSectionWidth = leftColumnWidths.reduce((sum, width) => sum + width, 0);
  const scrollWidth = columnWidths.reduce((sum, width) => sum + width, 0);

  const columnHeaders = [
    'Inward Date', 'Gateway IGM No.', 'Cargo Type', 'MAWB BL NO.', 'HAWB BL No.', 'Total No. of PKG', 'IGM Date',
    'Gateway IGM Date', 'MAWB BL Date', 'HAWB BL Date', 'Package Code', 'Gross weight', 'UQC',
    'Marks & Nos 1', 'Marks & Nos 2', 'Marks & Nos 3', 'ETA', 'BK Ves. FLT', 'BK Voyage',
    'Gateway Port Code', 'Carrier Code', 'Chargeable Weight'
  ];
  const columnKeys: (keyof IGMRow)[] = [
    'inwardDate', 'gatewayIgmNumber', 'cargoType', 'mawbBlNo', 'hawbBlNo', 'totalNoPkg', 'igmDate', 'gatewayIgmDate',
    'mawbBlDate', 'hawbBlDate', 'packageCode', 'grossWeight', 'uqc', 'marksNos1', 'marksNos2',
    'marksNos3', 'eta', 'bkVesFlt', 'bkVoyage', 'gatewayPortCode', 'carrierCode', 'chargeableWeight'
  ];
  const leftColumnHeaders = ['', '', 'Sr.No', 'IGM Number', 'Line No', 'Sub Line No'];

  // Sheet Navigation Logic
  const navigateToIGM = (index: number) => {
    if (index >= 0 && index < data.length) {
      setSelectedIGM(data[index]);
    }
  };

  const getCurrentNavValue = (doc: IGMRow | null, level: string) => {
    if (!doc) return '';
    const index = data.findIndex(d => d.id === doc.id);
    if (index === -1) return '';
    return String(index + 1);
  };

  const handleNavValueChange = (val: string) => {
    const idx = parseInt(val) - 1;
    navigateToIGM(idx);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedIGM) return;
      
      if (e.shiftKey) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          const currentIndex = data.findIndex(d => d.id === selectedIGM.id);
          if (currentIndex < data.length - 1) {
             const nextId = data[currentIndex + 1]?.id;
             if (nextId) {
                const doc = data.find(d => d.id === nextId);
                if (doc) setSelectedIGM(doc);
             }
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          const currentIndex = data.findIndex(d => d.id === selectedIGM.id);
          if (currentIndex > 0) {
             const prevId = data[currentIndex - 1]?.id;
             if (prevId) {
                const doc = data.find(d => d.id === prevId);
                if (doc) setSelectedIGM(doc);
             }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [selectedIGM, data]);

  return (
    <div ref={tableContainerRef} className="w-full relative overflow-hidden border border-gray-300 table-component" style={{ fontFamily: 'Inter, sans-serif', height: '100%' }}>
      {/* Section Header with Add functionality */}
      <SectionHeader title="IGM Details" onAdd={handleAddRow} />
      
      {/* Table Container with Header, Scrollable Body */}
      <div 
        className="w-full flex flex-col"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          height: 'calc(100% - 48px)' // Subtract header height
        }}
      >
        
        {/* Fixed Header Row */}
        <div 
          className="w-full grid"
          style={{ 
            gridTemplateColumns: `${leftSectionWidth}px 1fr 50px`,
            backgroundColor: '#EBEEF7',
            height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
            minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
            maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
          }}
        >
          {/* Left Header Section */}
          <div className="flex">
            {leftColumnHeaders.map((header, index) => (
              <Resizable
                key={`left-header-${index}`}
                size={{ width: leftColumnWidths[index], height: TABLE_CONSTANTS.ROW_HEIGHT }}
                onResizeStop={(e, direction, ref, delta) => {
                  const minWidths = [30, 30, 50, 100, 60, 60]; // Minimum widths for each left column
                  const newWidth = leftColumnWidths[index] + delta.width;
                  if (newWidth >= minWidths[index]) {
                    handleLeftColumnResize(index, newWidth);
                  }
                }}
                minWidth={index <= 1 ? 30 : index === 2 ? 50 : 60}
                maxWidth={index <= 1 ? 50 : index === 2 ? 100 : 400}
                enable={{ 
                  top: false, 
                  right: true,
                  bottom: false, 
                  left: false, 
                  topRight: false, 
                  bottomRight: false, 
                  bottomLeft: false, 
                  topLeft: false 
                }}
                handleStyles={{
                  right: {
                    width: '4px',
                    right: '-2px',
                    background: 'rgba(0, 0, 0, 0.1)',
                    cursor: 'col-resize',
                    zIndex: 10
                  }
                }}
                handleClasses={{
                  right: 'hover:bg-gray-300'
                }}
              >
                <div 
                  className={`w-full h-full flex items-center px-2 ${index <= 1 ? 'justify-center' : 'justify-start'}`}
                  style={{ 
                    height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
                  }}
                >
                  {index === 1 ? (
                    <Checkbox 
                      checked={selectAll}
                      onCheckedChange={handleSelectAll}
                      className="w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white"
                    />
                  ) : (
                    <span className="text-sm font-medium truncate text-black" title={header} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                      {header}
                    </span>
                  )}
                </div>
              </Resizable>
            ))}
          </div>

          {/* Middle Header Section - Hidden Scrollbar */}
          <div 
            ref={headerScrollRef}
            className={SCROLLBAR_CLASSES.HIDDEN}
            style={{ 
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
            onScroll={handleHeaderScroll}
          >
            <div 
              className="flex"
              style={{ 
                width: `${scrollWidth}px`,
                minWidth: `${scrollWidth}px`
              }}
            >
              {columnHeaders.map((header, index) => {
                const headerStyles = getColumnHeaderHoverStyles(index);

                return (
                  <Resizable
                    key={`middle-header-${index}`}
                    size={{ width: columnWidths[index], height: TABLE_CONSTANTS.ROW_HEIGHT }}
                    onResizeStop={(e, direction, ref, delta) => {
                      const newWidth = columnWidths[index] + delta.width;
                      if (newWidth >= 80) { // Minimum column width
                        handleColumnResize(index, newWidth);
                      }
                    }}
                    minWidth={80}
                    maxWidth={500}
                    enable={{ 
                      top: false, 
                      right: index < columnHeaders.length - 1,
                      bottom: false, 
                      left: false, 
                      topRight: false, 
                      bottomRight: false, 
                      bottomLeft: false, 
                      topLeft: false 
                    }}
                    handleStyles={{
                      right: {
                        width: '4px',
                        right: '-2px',
                        background: 'rgba(0, 0, 0, 0.1)',
                        cursor: 'col-resize',
                        zIndex: 10
                      }
                    }}
                    handleClasses={{
                      right: 'hover:bg-gray-300'
                    }}
                  >
                    <div 
                      className="w-full h-full flex items-center justify-start px-2"
                      style={{ 
                        ...headerStyles,
                        height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
                      }}
                    >
                      <span className="text-sm font-medium truncate text-black" title={header} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                        {header}
                      </span>
                    </div>
                  </Resizable>
                );
              })}
            </div>
          </div>

          {/* Right Header Section */}
          <div 
            className="flex items-center justify-center"
          >
            <MoreVertical className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* Scrollable Data Body */}
        <div 
          className="flex-1 overflow-y-auto grid"
          style={{ 
            gridTemplateColumns: `${leftSectionWidth}px 1fr 50px`
          }}
        >
          {/* Left Data Section */}
          <div 
            className="text-black flex flex-col" 
            style={{
              position: 'relative',
              boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
              overflow: 'visible', // Changed from hidden to visible to allow expansion overlay
              zIndex: 20
            }}
          >
            <div className="flex-1">
              {data.map((row, rowIndex) => {
                const isRowHighlighted = shouldShowRowHighlight(row.id);
                const isExpanded = expandedRowId === row.id;

                return (
                  <div key={`left-row-fragment-${row.id}`} className="contents">
                    <div 
                      key={`left-row-${row.id}`}
                      className="flex border-b border-gray-300 transition-colors" 
                      style={{
                        position: 'relative', 
                        zIndex: 1, 
                        marginBottom: '0px',
                        backgroundColor: isRowHighlighted ? '#CEF6F0' : 'transparent',
                        borderTop: isRowHighlighted ? '1px solid #02B196' : 'none',
                        borderBottom: isRowHighlighted ? '1px solid #02B196' : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                        height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
                      }}
                    >
                      {/* Left Columns: Expansion, Checkbox, Sr.No, IGM Number, Line No, Sub Line No */}
                      {leftColumnWidths.map((width, index) => {
                        const cellId = `${row.id}-left-${index}`;
                        const columnKey = index === 3 ? 'igmNumber' : index === 4 ? 'lineNo' : index === 5 ? 'subLineNo' : null;
                        
                        return (
                          <div 
                            key={cellId}
                            style={{ 
                              width: `${width}px`, 
                              minWidth: `${width}px`,
                              maxWidth: `${width}px`,
                              height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                              borderRight: shouldShowCellHover(cellId) ? '1px solid #3874FF' : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderBottom: shouldShowCellHover(cellId) ? '1px solid #3874FF' : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                              borderTop: shouldShowCellHover(cellId) ? '1px solid #3874FF' : 'none',
                              borderLeft: shouldShowCellHover(cellId) ? '1px solid #3874FF' : 'none',
                              backgroundColor: shouldShowCellHover(cellId) ? '#FFFFFF' : 'transparent'
                            }}
                            className="relative flex items-center shrink-0 border-b border-gray-300"
                            onMouseEnter={() => handleCellHover(row.id, cellId, -index)}
                            onMouseLeave={handleCellLeave}
                          >
                            {index === 0 ? (
                              <div className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-gray-100" onClick={() => toggleRowExpansion(row.id)}>
                                {expandedRowId === row.id ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                              </div>
                            ) : index === 1 ? (
                              <div className="w-full h-full flex items-center justify-center">
                                <Checkbox 
                                  checked={row.isSelected}
                                  onCheckedChange={() => handleRowSelect(row.id)}
                                  className="w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white"
                                />
                              </div>
                            ) : index === 2 ? (
                              <div className="w-full h-full flex items-center justify-center gap-2 px-2 cursor-pointer" onClick={() => setSelectedIGM(row)}>
                                 <span className="text-sm text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>{row.sNo}</span>
                                 <Maximize2 className="w-[14px] h-[14px] text-gray-400" />
                              </div>
                            ) : columnKey ? (
                              renderEditableCell(row, columnKey as keyof IGMRow, row[columnKey as keyof IGMRow], 'w-full h-full flex items-center px-2', {}, cellId, -index)
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                    {isExpanded && (
                      <div 
                        style={{ height: '400px', width: '100%', position: 'relative' }}
                      >
                        {/* Render ContainerDetailsTable here, absolutely positioned to span across parent columns */}
                        <div 
                          style={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            width: tableWidth > 0 ? `${tableWidth - 2}px` : '100vw', // Subtract border width
                            height: '400px',
                            backgroundColor: 'white',
                            zIndex: 100,
                            borderBottom: '1px solid #d0d5e3',
                            overflow: 'hidden'
                          }}
                        >
                           <div className="h-full w-full p-4 bg-gray-50/50">
                             <div className="h-full w-full border border-gray-200 bg-white shadow-sm">
                               <ContainerDetailsTable 
                                 igmFilter={row.igmNumber} 
                                 showHeader={false} 
                               />
                             </div>
                           </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Add Row Button Row */}
              <div 
                 className="flex border-b border-gray-300 transition-colors bg-white hover:bg-gray-50" 
                 style={{
                   width: '100%',
                   height: '38px',
                   minHeight: '38px',
                   borderRight: `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                   borderBottom: `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                 }}
              >
                 <div className="flex items-center px-1">
                    <AddRowButton onAddRow={handleAddRow} />
                 </div>
              </div>
            </div>
          </div>

          {/* Middle Data Section */}
          <div 
            className="text-black overflow-hidden" 
            style={{ 
              backgroundColor: '#FFFFFF'
            }}
          >
            <div 
              ref={dataScrollRef}
              className={`h-full ${SCROLLBAR_CLASSES.HIDDEN}`}
              style={{ scrollBehavior: 'smooth' }}
              onScroll={handleDataScroll}
            >
              <div className="flex-1">
                {data.map((row, rowIndex) => {
                  const isRowHighlighted = shouldShowRowHighlight(row.id);
                  const isExpanded = expandedRowId === row.id;

                  return (
                    <div key={`middle-row-fragment-${row.id}`} className="contents">
                      <div 
                        key={`middle-row-${row.id}`}
                        className="flex border-b border-gray-300 transition-colors"
                        style={{ 
                          width: `${scrollWidth}px`, 
                          minWidth: `${scrollWidth}px`,
                          position: 'relative', 
                          zIndex: 1, 
                          marginBottom: '0px',
                          backgroundColor: isRowHighlighted ? '#CEF6F0' : 'transparent',
                          borderTop: isRowHighlighted ? '1px solid #02B196' : 'none',
                          borderBottom: isRowHighlighted ? '1px solid #02B196' : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                          height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                          minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                          maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
                        }}
                      >
                        {columnKeys.map((key, index) => (
                          <div key={`${row.id}-${key}`}>
                            {renderEditableCell(
                              row, 
                              key, 
                              row[key], 
                              'flex items-center justify-start px-2 border-b border-gray-300', 
                              { 
                                width: `${columnWidths[index]}px`, 
                                minWidth: `${columnWidths[index]}px`, 
                                height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                                backgroundColor: isRowHighlighted ? '#CEF6F0' : 'transparent'
                              }, 
                              `${row.id}-${key}`,
                              index
                            )}
                          </div>
                        ))}
                      </div>
                      {isExpanded && <div style={{ height: '400px', width: `${scrollWidth}px` }} />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Data Section (Empty for now) */}
          <div 
            className="text-black flex flex-col overflow-hidden" 
            style={{
              backgroundColor: '#FFFFFF'
            }}
          >
            <div className="flex-1">
               {data.map((row) => {
                 const isRowHighlighted = shouldShowRowHighlight(row.id);
                 const isExpanded = expandedRowId === row.id;
                 
                 return (
                  <div key={`right-row-fragment-${row.id}`} className="contents">
                    <div 
                      key={`right-row-${row.id}`}
                      className="flex items-center justify-center border-b border-gray-300 transition-colors"
                      style={{ 
                        borderRight: `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                        backgroundColor: isRowHighlighted ? '#CEF6F0' : 'transparent',
                        borderBottom: isRowHighlighted ? '1px solid #02B196' : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                        borderTop: isRowHighlighted ? '1px solid #02B196' : 'none',
                        borderLeft: 'none',
                        marginBottom: '0px',
                        height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
                      }}
                    >
                    </div>
                    {isExpanded && <div style={{ height: '400px', width: '100%' }} />}
                  </div>
                 );
               })}
            </div>
          </div>
        </div>
      </div>

      <Sheet open={!!selectedIGM} onOpenChange={(open) => !open && setSelectedIGM(null)}>
        <SheetContent 
          side="right" 
          className="w-screen max-w-none sm:max-w-none p-0 flex flex-col gap-0 bg-[#f4f4f4] z-[150] border-none outline-none top-[48px] h-[calc(100vh-48px)]"
        >
          <SheetDescription className="sr-only">Edit IGM details</SheetDescription>
          {/* Custom Header replicating InvoiceHeader */}
          <div className="bg-[#2D364D] w-full flex items-center justify-between px-[12px] h-[48px] border-b border-[#545d76] shrink-0">
            {/* Left Side: Title + Info */}
            <div className="flex items-center gap-4">
              {/* Job Number Placeholder */}
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-medium text-[14px] text-[#9497A1]">ICB/16453/2025-26</p>
              </div>

              {/* Separator */}
              <div className="w-[1px] h-[24px] bg-[#545d76]" />

              {/* Title */}
              <div className="flex items-center gap-3 shrink-0">
                <SheetTitle className="font-semibold text-[16px] text-white">IGM Details</SheetTitle>
              </div>

              {selectedIGM && (
                <div className="contents">
                  <div className="flex items-center gap-2 ml-4">
                      {/* Value Selector */}
                      <Select 
                        value={getCurrentNavValue(selectedIGM, navigationLevel)} 
                        onValueChange={handleNavValueChange}
                      >
                        <SelectTrigger className="w-[100px] h-[32px] bg-[#37425a] border-[#545d76] text-white text-xs">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#37425a] border-[#545d76] text-white max-h-[300px] z-[200]">
                          {data.map((d, idx) => {
                             const val = String(idx + 1);
                             return (
                               <SelectItem key={d.id} value={val} className="text-white focus:bg-[#4a5568] focus:text-white">
                                 {val}
                               </SelectItem>
                             );
                          })}
                        </SelectContent>
                      </Select>

                      {/* Navigation Buttons */}
                      <div className="flex items-center gap-1 bg-[#37425a] rounded-md border border-[#545d76] p-0.5">
                          <Button 
                             variant="ghost" 
                             size="icon" 
                             className="h-[28px] w-[28px] hover:bg-[#4a5568] text-white"
                             onClick={() => {
                               const idx = data.findIndex(d => d.id === selectedIGM.id);
                               navigateToIGM(idx - 1);
                             }}
                             disabled={data.findIndex(d => d.id === selectedIGM.id) === 0}
                          >
                             <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button 
                             variant="ghost" 
                             size="icon" 
                             className="h-[28px] w-[28px] hover:bg-[#4a5568] text-white"
                             onClick={() => {
                               const idx = data.findIndex(d => d.id === selectedIGM.id);
                               navigateToIGM(idx + 1);
                             }}
                             disabled={data.findIndex(d => d.id === selectedIGM.id) === data.length - 1}
                          >
                             <ChevronRight className="h-4 w-4" />
                          </Button>
                      </div>
                   </div>

                  {/* Separator */}
                  <div className="w-[1px] h-[24px] bg-[#545d76]" />
                  {/* Document Type Badge */}
                   <div className="flex items-center gap-2">
                      <span className="bg-[#37425a] text-[#CDCFD3] px-2 py-0.5 rounded text-[12px] border border-[#545d76]">
                        {selectedIGM.igmNumber}
                      </span>
                   </div>
                </div>
              )}
            </div>

            {/* Right Side: Close */}
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-[32px] w-[32px] text-white hover:bg-[#37425a]"
                onClick={() => setSelectedIGM(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sheet Body */}
          <div className="flex-1 overflow-y-auto bg-[#f4f4f4] p-4 flex flex-col gap-4">
              {/* IGM Details Form */}
              <div className="bg-white border border-[#d0d5e3] rounded-sm overflow-hidden flex-shrink-0">
                  <FigmaSectionHeader title="IGM Details" />
                  <div className="flex flex-col">
                      <FormRow>
                          <FormField label="IGM Number">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.igmNumber} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, igmNumber: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, igmNumber: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Inward Date">
                            {selectedIGM && (
                              <Input 
                                type="date"
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.inwardDate} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, inwardDate: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, inwardDate: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Gateway IGM No.">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.gatewayIgmNumber} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, gatewayIgmNumber: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, gatewayIgmNumber: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                      <FormRow>
                          <FormField label="Cargo Type">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.cargoType} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, cargoType: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, cargoType: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="MAWB BL No.">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.mawbBlNo} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, mawbBlNo: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, mawbBlNo: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="HAWB BL No.">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.hawbBlNo} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, hawbBlNo: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, hawbBlNo: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                      <FormRow>
                          <FormField label="IGM Date">
                            {selectedIGM && (
                              <Input 
                                type="date"
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.igmDate} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, igmDate: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, igmDate: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Gateway IGM Date">
                            {selectedIGM && (
                              <Input 
                                type="date"
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.gatewayIgmDate} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, gatewayIgmDate: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, gatewayIgmDate: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                      <FormRow>
                          <FormField label="MAWB BL Date">
                            {selectedIGM && (
                              <Input 
                                type="date"
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.mawbBlDate} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, mawbBlDate: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, mawbBlDate: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="HAWB BL Date">
                            {selectedIGM && (
                              <Input 
                                type="date"
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.hawbBlDate} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, hawbBlDate: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, hawbBlDate: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                      <FormRow>
                          <FormField label="Total No of Pkg">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.totalNoPkg} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, totalNoPkg: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, totalNoPkg: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Package Code">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.packageCode} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, packageCode: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, packageCode: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Gross Weight">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.grossWeight} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, grossWeight: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, grossWeight: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                      <FormRow>
                          <FormField label="UQC">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.uqc} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, uqc: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, uqc: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Chargeable Weight">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.chargeableWeight} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, chargeableWeight: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, chargeableWeight: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                      <FormRow>
                          <FormField label="Marks & Nos 1">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.marksNos1} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, marksNos1: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, marksNos1: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Marks & Nos 2">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.marksNos2} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, marksNos2: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, marksNos2: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Marks & Nos 3">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.marksNos3} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, marksNos3: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, marksNos3: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                      <FormRow>
                          <FormField label="ETA">
                            {selectedIGM && (
                              <Input 
                                type="date"
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.eta} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, eta: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, eta: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Bk Ves Flt">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.bkVesFlt} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, bkVesFlt: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, bkVesFlt: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Bk Voyage">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.bkVoyage} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, bkVoyage: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, bkVoyage: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                      <FormRow>
                          <FormField label="Gateway Port Code">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.gatewayPortCode} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, gatewayPortCode: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, gatewayPortCode: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                          <FormField label="Carrier Code">
                            {selectedIGM && (
                              <Input 
                                className="h-full border-none outline-none bg-transparent px-2 text-sm focus-visible:ring-0" 
                                value={selectedIGM.carrierCode} 
                                onChange={(e) => {
                                  const newVal = e.target.value;
                                  setData(prev => prev.map(row => row.id === selectedIGM.id ? { ...row, carrierCode: newVal } : row));
                                  setSelectedIGM(prev => prev ? { ...prev, carrierCode: newVal } : null);
                                }}
                              />
                            )}
                          </FormField>
                      </FormRow>
                  </div>
              </div>

              {/* Container Details Section */}
              <div className="bg-white border border-[#d0d5e3] rounded-sm overflow-hidden flex-1 flex flex-col min-h-[400px]">
                   <FigmaSectionHeader title="Container Details" />
                   <div className="flex-1 p-0 overflow-hidden">
                      {selectedIGM && (
                        <ContainerDetailsTable 
                          igmFilter={selectedIGM.igmNumber} 
                          showHeader={false} 
                        />
                      )}
                   </div>
              </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}