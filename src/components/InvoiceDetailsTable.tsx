import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { MoreVertical, X, ChevronLeft, ChevronRight, Plus, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Resizable } from 're-resizable';
import SectionHeader from '../imports/SectionHeader';
import FooterActionControlsOriginal from '../imports/FooterActionControls-1331-1513';
import updateInvoiceModal from 'figma:asset/10db6d9e4a69b117b7445acc25d67a2e9de093e6.png';
import invoiceDetailsImage from 'figma:asset/2e0119af9570215c48066e5bd24c5e5fb1c6d48f.png';
import FiltersSort from '../imports/FiltersSort';
import filterSvgPaths from '../imports/svg-xkhl016h09';
import ExpandContent from '../imports/ExpandContent';
import { InvoiceActionMenu } from './InvoiceActionMenu';
import TableBulkActions from './TableBulkActions';
import ItemDetailsTable from './ItemDetailsTable';
import { FigmaSwitch } from './FigmaForm';

// Custom Filter Icon Component
const FilterIcon: React.FC<{ 
  className?: string; 
  isOpen?: boolean; 
  onClick?: () => void; 
}> = ({ className, isOpen = false, onClick }) => {
  const iconColor = isOpen ? '#3874FF' : 'currentColor';
  
  return (
    <svg
      className={`${className} cursor-pointer hover:opacity-80`}
      fill="none"
      viewBox="0 0 16 16"
      onClick={onClick}
    >
      <path
        d={filterSvgPaths.p8cd7480}
        fill={iconColor}
      />
    </svg>
  );
};

// Define consistent table constants
const TABLE_CONSTANTS = {
  ROW_HEIGHT: 34,
  BORDER_COLOR: '#D0D5E3',
  BORDER_WIDTH: '0.5px',
  ROW_GAP: 0,
  CELL_GAP: 0,
  HIGHLIGHT_COLOR: '#CEF6F0',
  HOVER_CELL_BACKGROUND: '#FFFFFF',
  HOVER_BORDER_COLOR: '#3874FF',
  ROW_COLUMN_BORDER_COLOR: '#02B196',
  EDIT_BORDER: '#3874FF',
  EDIT_SHADOW: '0 2px 12px 0 rgba(113, 144, 214, 0.47)'
};

// CSS classes for scrollbar control
const SCROLLBAR_CLASSES = {
  HIDDEN: 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
  VISIBLE: 'overflow-x-auto overflow-y-hidden [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500'
};

export interface InvoiceRow {
  id: string;
  sNo: number;
  invoiceNumber: string;
  invoiceDate: string;
  terms: string;
  unitPriceIncludes?: string;
  natureOfPayment?: string;
  value: string;
  currency: string;
  supplierName: string;
  sameAsConsignee?: string; // For Export jobs - toggle Yes/No
  freightAmount: string;
  freightCurrency: string;
  freightRate: string;
  insuranceAmount: string;
  insuranceCurrency: string;
  insuranceRate: string;
  packingChargesAmount?: string;
  miscChargesAmount: string;
  miscChargesCurrency: string;
  miscChargesRate: string;
  assessableValue?: string;
  duty?: string;
  sellerName: string;
  brokerName: string;
  thirdParty: string;
  isSelected: boolean;
  // SVB Fields
  svbRelated?: string; // Yes/No for switch
  svbRefNo?: string;
  svbRefDate?: string;
  svbFlag?: string;
  cusHouse?: string;
  svbLoadAssbl?: string;
  svbLoadDuty?: string;
}

// Editing cell interface
interface EditingCell {
  rowId: string;
  columnKey: keyof InvoiceRow;
}

// Navigation position interface
interface NavigationPosition {
  rowIndex: number;
  columnIndex: number;
}

// Highlight position interface
interface HighlightPosition {
  rowIndex: number;
  columnIndex: number;
}

export const mockData: InvoiceRow[] = [
  {
    id: '1', sNo: 1, invoiceNumber: '2025011534567890', invoiceDate: '2025-01-15',
    terms: 'CIF', unitPriceIncludes: 'Both', natureOfPayment: 'DP-Direct Payment', value: '', currency: 'USD', supplierName: 'ABC Electronics Co.', sameAsConsignee: 'Yes',
    freightAmount: '450.00', freightCurrency: 'USD', freightRate: '2.5%',
    insuranceAmount: '155.00', insuranceCurrency: 'USD', insuranceRate: '1.0%', packingChargesAmount: '50.00',
    miscChargesAmount: '75.00', miscChargesCurrency: 'USD', miscChargesRate: '0.5%',
    assessableValue: '15,680.00', duty: '1,254.40',
    sellerName: 'ABC Electronics Co.', brokerName: 'Global Freight Brokers',
    thirdParty: 'Logistics Partner A', isSelected: false,
    svbRelated: 'Yes', svbRefNo: 'SVB/2024/001', svbRefDate: '2024-01-10', svbFlag: 'Final', cusHouse: 'Nhava Sheva', svbLoadAssbl: '1.5%', svbLoadDuty: '0.5%'
  },
  {
    id: '2', sNo: 2, invoiceNumber: '2025011678901234', invoiceDate: '2025-01-16',
    terms: 'CIF', unitPriceIncludes: 'Both', natureOfPayment: 'DP-Direct Payment', value: '22,800.00', currency: 'EUR', supplierName: 'XYZ Manufacturing Ltd.', sameAsConsignee: 'No',
    freightAmount: '650.00', freightCurrency: 'EUR', freightRate: '3.0%',
    insuranceAmount: '228.00', insuranceCurrency: 'EUR', insuranceRate: '1.0%', packingChargesAmount: '50.00',
    miscChargesAmount: '114.00', miscChargesCurrency: 'EUR', miscChargesRate: '0.5%',
    assessableValue: '23,792.00', duty: '1,903.36',
    sellerName: 'XYZ Manufacturing Ltd.', brokerName: 'European Freight Services',
    thirdParty: 'Logistics Partner B', isSelected: false,
    svbRelated: 'No', svbRefNo: '', svbRefDate: '', svbFlag: '', cusHouse: '', svbLoadAssbl: '', svbLoadDuty: ''
  },
  {
    id: '3', sNo: 3, invoiceNumber: '2025011756789012', invoiceDate: '2025-01-17',
    terms: 'CIF', unitPriceIncludes: 'Both', natureOfPayment: 'DP-Direct Payment', value: '8,750.00', currency: 'GBP', supplierName: 'Global Supplies Inc.', sameAsConsignee: 'Yes',
    freightAmount: '275.00', freightCurrency: 'GBP', freightRate: '2.8%',
    insuranceAmount: '87.50', insuranceCurrency: 'GBP', insuranceRate: '1.0%', packingChargesAmount: '50.00',
    miscChargesAmount: '43.75', miscChargesCurrency: 'GBP', miscChargesRate: '0.5%',
    assessableValue: '9,156.25', duty: '732.50',
    sellerName: 'Global Supplies Inc.', brokerName: 'UK Shipping Solutions',
    thirdParty: 'Logistics Partner C', isSelected: false,
    svbRelated: 'Yes', svbRefNo: 'SVB/2024/045', svbRefDate: '2024-02-15', svbFlag: 'Provisional', cusHouse: 'Chennai', svbLoadAssbl: '2.0%', svbLoadDuty: '1.0%'
  },
  {
    id: '4', sNo: 4, invoiceNumber: '2025011823456789', invoiceDate: '2025-01-18',
    terms: 'CIF', unitPriceIncludes: 'Both', natureOfPayment: 'DP-Direct Payment', value: '34,200.00', currency: 'JPY', supplierName: 'Tokyo Tech Solutions', sameAsConsignee: 'No',
    freightAmount: '890.00', freightCurrency: 'JPY', freightRate: '2.2%',
    insuranceAmount: '342.00', insuranceCurrency: 'JPY', insuranceRate: '1.0%', packingChargesAmount: '50.00',
    miscChargesAmount: '171.00', miscChargesCurrency: 'JPY', miscChargesRate: '0.5%',
    assessableValue: '35,603.00', duty: '2,848.24',
    sellerName: 'Tokyo Tech Solutions', brokerName: 'Asia Pacific Freight',
    thirdParty: 'Logistics Partner D', isSelected: false,
    svbRelated: 'No', svbRefNo: '', svbRefDate: '', svbFlag: '', cusHouse: '', svbLoadAssbl: '', svbLoadDuty: ''
  },
  {
    id: '5', sNo: 5, invoiceNumber: '2025011945678123', invoiceDate: '2025-01-19',
    terms: 'CIF', unitPriceIncludes: 'Both', natureOfPayment: 'DP-Direct Payment', value: '19,650.00', currency: 'CAD', supplierName: 'Canadian Parts Corp.', sameAsConsignee: 'Yes',
    freightAmount: '520.00', freightCurrency: 'CAD', freightRate: '2.7%',
    insuranceAmount: '196.50', insuranceCurrency: 'CAD', insuranceRate: '1.0%', packingChargesAmount: '50.00',
    miscChargesAmount: '98.25', miscChargesCurrency: 'CAD', miscChargesRate: '0.5%',
    assessableValue: '20,464.75', duty: '1,637.18',
    sellerName: 'Canadian Parts Corp.', brokerName: 'North American Logistics',
    thirdParty: 'Logistics Partner E', isSelected: false,
    svbRelated: 'Yes', svbRefNo: 'SVB/2024/089', svbRefDate: '2024-03-20', svbFlag: 'Final', cusHouse: 'Delhi Air Cargo', svbLoadAssbl: '1.2%', svbLoadDuty: '0.4%'
  }
];

// Helper function to check if focus is within this specific table
const isFocusWithinTable = (tableRef: React.RefObject<HTMLDivElement>): boolean => {
  if (!tableRef.current) return false;
  const activeElement = document.activeElement;
  if (!activeElement) return false;
  return tableRef.current.contains(activeElement);
};

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

export interface InvoiceDetailsTableProps {
  onInvoiceClick?: (invoiceData: any) => void;
  onAddInvoice?: () => void;
  onInvoiceUpload?: (files: File[]) => void;
  activeCell?: { section: string; rowIndex: number; columnId: string } | null;
  onExpandRow?: (row: InvoiceRow, mode?: 'split' | 'stacked') => void;
  jobType?: string;
}

export default function InvoiceDetailsTable({ activeCell, onExpandRow, onInvoiceClick, jobType }: InvoiceDetailsTableProps) {
  const isExport = jobType === 'Export';
  const [data, setData] = useState<InvoiceRow[]>(mockData);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Filter state
  const [openFilterColumn, setOpenFilterColumn] = useState<string | null>(null);
  const [filteredInvoiceNumbers, setFilteredInvoiceNumbers] = useState<string[]>([]);
  const [filteredSupplierNames, setFilteredSupplierNames] = useState<string[]>([]);

  // Left section column widths state for resizable functionality
  const [leftColumnWidths, setLeftColumnWidths] = useState<number[]>([30, 40, 60, 180]); // expand, checkbox, Sr.No, Invoice Number

  // Middle section column widths state for resizable functionality
  const [columnWidths, setColumnWidths] = useState<number[]>(() => {
    if (isExport) {
      return [120, 100, 120, 120, 120, 80, 180, 150, 120, 80, 100, 120, 80, 100, 120, 180];
    } else {
      return [
        120, 100, 120, 80, 180, // Existing first 5
        80, 120, 120, 80, 100, 120, 120, // New 7 SVB columns
        120, 80, 100, 120, 80, 100, 120, 80, 100, 120, 120, 180, 180, 180 // Remaining
      ];
    }
  });

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

  // Editing state management
  const [editingCell, setEditingCell] = useState<EditingCell | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Navigation state management - NO DEFAULT FOCUS
  const [currentPosition, setCurrentPosition] = useState<NavigationPosition>({ rowIndex: 0, columnIndex: 0 });
  const [focusedCellId, setFocusedCellId] = useState<string | null>(null); // No default focus
  const tableRef = useRef<HTMLDivElement>(null);

  // Highlight state management - for row/column highlighting on hover/focus
  const [highlightPosition, setHighlightPosition] = useState<HighlightPosition | null>(null);

  // Scroll arrow state
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Scrolling synchronization refs with footer support
  const headerScrollRef = useRef<HTMLDivElement>(null);
  const dataScrollRef = useRef<HTMLDivElement>(null);
  const footerScrollRef = useRef<HTMLDivElement>(null);
  
  // Prevent recursive scroll events
  const scrollingHeaderRef = useRef<boolean>(false);
  const scrollingDataRef = useRef<boolean>(false);
  const scrollingFooterRef = useRef<boolean>(false);

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

  // Define which columns are editable and navigable
  const editableColumns = useMemo(() => isExport ? [
    'terms', 'unitPriceIncludes', 'natureOfPayment', 'value', 'currency', 'supplierName',
    'freightAmount', 'freightCurrency', 'freightRate', 'insuranceAmount', 
    'insuranceCurrency', 'insuranceRate', 'packingChargesAmount', 'thirdParty'
  ] : [
    'terms', 'value', 'currency', 'supplierName', 
    'svbRelated', 'svbRefNo', 'svbRefDate', 'svbFlag', 'cusHouse', 'svbLoadAssbl', 'svbLoadDuty',
    'freightAmount', 'freightCurrency', 'freightRate', 'insuranceAmount', 
    'insuranceCurrency', 'insuranceRate', 'miscChargesAmount', 'miscChargesCurrency', 
    'miscChargesRate', 'sellerName', 'brokerName', 'thirdParty'
  ], [isExport]);

  // Column mapping including left section
  const allColumnKeys = useMemo(() => [
    null, // expand column (not navigable)
    null, // checkbox column (not navigable)
    null, // serial number column (not navigable)
    'invoiceNumber', // First navigable column
    ...(isExport ? ['invoiceDate', 'terms', 'unitPriceIncludes', 'natureOfPayment', 'value', 'currency', 'supplierName', 'sameAsConsignee',
        'freightAmount', 'freightCurrency', 'freightRate',
        'insuranceAmount', 'insuranceCurrency', 'insuranceRate', 'packingChargesAmount',
        'thirdParty'] 
      : ['invoiceDate', 'terms', 'value', 'currency', 'supplierName',
        'svbRelated', 'svbRefNo', 'svbRefDate', 'svbFlag', 'cusHouse', 'svbLoadAssbl', 'svbLoadDuty',
        'freightAmount', 'freightCurrency', 'freightRate',
        'insuranceAmount', 'insuranceCurrency', 'insuranceRate',
        'miscChargesAmount', 'miscChargesCurrency', 'miscChargesRate',
        'assessableValue', 'duty',
        'sellerName', 'brokerName', 'thirdParty'])
  ], [isExport]);

  // Get navigable columns only
  const getNavigableColumns = () => {
    return allColumnKeys.map((key, index) => ({ key, index })).filter(({ key }) => key !== null);
  };

  // Scroll to active cell when it changes
  useEffect(() => {
    if (activeCell && activeCell.section === 'invoice') {
      setTimeout(() => {
        const cellId = `cell-${activeCell.rowIndex}-${allColumnKeys.findIndex(k => k === activeCell.columnId)}`;
        const cellElement = document.querySelector(`[data-cell-id="${cellId}"]`) as HTMLElement;
        if (cellElement) {
          cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
      }, 300);
    }
  }, [activeCell]);

  // Navigation functions
  const navigateToCell = useCallback((rowIndex: number, columnIndex: number) => {
    const navigableColumns = getNavigableColumns();
    const maxRowIndex = data.length - 1;
    const maxColumnIndex = navigableColumns.length - 1;

    // Clamp values to valid ranges
    const clampedRowIndex = Math.max(0, Math.min(rowIndex, maxRowIndex));
    const clampedColumnIndex = Math.max(0, Math.min(columnIndex, maxColumnIndex));

    setCurrentPosition({ rowIndex: clampedRowIndex, columnIndex: clampedColumnIndex });
    
    // Generate cell ID and update focus
    const actualColumnIndex = navigableColumns[clampedColumnIndex].index;
    const cellId = `cell-${clampedRowIndex}-${actualColumnIndex}`;
    setFocusedCellId(cellId);

    // Update highlight position for row/column highlighting
    setHighlightPosition({ rowIndex: clampedRowIndex, columnIndex: actualColumnIndex });

    // Focus the actual cell element
    setTimeout(() => {
      const cellElement = document.querySelector(`[data-cell-id="${cellId}"]`) as HTMLElement;
      if (cellElement) {
        cellElement.focus();
        
        // Auto-scroll into view if needed
        cellElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }, 10);
  }, [data.length]);

  // Table-specific keyboard navigation handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Only handle keyboard events if focus is within this specific table
    if (!isFocusWithinTable(tableRef)) return;
    
    // Only handle if we have a focused cell and not editing
    if (!focusedCellId || editingCell) return;

    const { rowIndex, columnIndex } = currentPosition;

    // Check for Ctrl + Arrow keys first
    if (e.ctrlKey) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        // Move to next cell (Tab behavior)
        if (columnIndex < getNavigableColumns().length - 1) {
          navigateToCell(rowIndex, columnIndex + 1);
        } else if (rowIndex < data.length - 1) {
          navigateToCell(rowIndex + 1, 0);
        }
        return;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        // Move to previous cell (Shift+Tab behavior)
        if (columnIndex > 0) {
          navigateToCell(rowIndex, columnIndex - 1);
        } else if (rowIndex > 0) {
          const navCols = getNavigableColumns();
          navigateToCell(rowIndex - 1, navCols.length - 1);
        }
        return;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateToCell(rowIndex - 1, columnIndex);
        return;
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateToCell(rowIndex + 1, columnIndex);
        return;
      }
    }

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        navigateToCell(rowIndex - 1, columnIndex);
        break;
      case 'ArrowDown':
        e.preventDefault();
        navigateToCell(rowIndex + 1, columnIndex);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        navigateToCell(rowIndex, columnIndex - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        navigateToCell(rowIndex, columnIndex + 1);
        break;
      // Add Ctrl+Arrow support for navigation mode
      // Removed invalid cases
      case 'Enter':
        e.preventDefault();
        // Start editing current cell
        const navigableColumns = getNavigableColumns();
        const actualColumnIndex = navigableColumns[columnIndex].index;
        const columnKey = allColumnKeys[actualColumnIndex] as keyof InvoiceRow;
        if (columnKey && data[rowIndex]) {
          startEdit(data[rowIndex].id, columnKey, data[rowIndex][columnKey]);
        }
        break;
      case 'Tab':
        e.preventDefault();
        // Navigate right (or to next row if at end)
        if (columnIndex < getNavigableColumns().length - 1) {
          navigateToCell(rowIndex, columnIndex + 1);
        } else if (rowIndex < data.length - 1) {
          navigateToCell(rowIndex + 1, 0);
        }
        break;
    }
  }, [tableRef, focusedCellId, editingCell, currentPosition, data, navigateToCell]);

  // Set up keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

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

  // NO AUTO-INITIALIZATION OF FOCUS - removed the automatic focus effect

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
    const newRow: InvoiceRow = {
      id: Date.now().toString(),
      sNo: data.length + 1,
      invoiceNumber: `${new Date().toISOString().split('T')[0].replace(/-/g, '')}${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
      invoiceDate: new Date().toISOString().split('T')[0],
      terms: 'CIF',
      value: '0.00',
      currency: 'USD',
      supplierName: 'New Supplier',
      sameAsConsignee: 'No',
      freightAmount: '0.00',
      freightCurrency: 'USD',
      freightRate: '0.0%',
      insuranceAmount: '0.00',
      insuranceCurrency: 'USD',
      insuranceRate: '0.0%',
      miscChargesAmount: '0.00',
      miscChargesCurrency: 'USD',
      miscChargesRate: '0.0%',
      assessableValue: '0.00',
      duty: '0.00',
      sellerName: 'New Seller',
      brokerName: 'New Broker',
      thirdParty: 'New Third Party',
      isSelected: false,
      svbRelated: 'No',
      svbRefNo: '',
      svbRefDate: '',
      svbFlag: '',
      cusHouse: '',
      svbLoadAssbl: '',
      svbLoadDuty: ''
    };
    setData(prev => [...prev, newRow]);
    
    // Update serial numbers for all rows
    setData(prev => prev.map((row, index) => ({
      ...row,
      sNo: index + 1
    })));
  };

  // Enhanced synchronized horizontal scrolling with footer support
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
    
    if (footerScrollRef.current && footerScrollRef.current.scrollLeft !== scrollLeft) {
      footerScrollRef.current.scrollLeft = scrollLeft;
    }
    
    requestAnimationFrame(() => {
      scrollingDataRef.current = false;
    });
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
    
    requestAnimationFrame(() => {
      scrollingFooterRef.current = false;
    });
  };

  // Handle cell click to set focus and highlight - USER INITIATED ONLY
  const handleCellClick = (rowIndex: number, actualColumnIndex: number, columnKey: keyof InvoiceRow | null) => {
    if (!columnKey) return;
    
    // Special handling for invoice number clicks
    // if (columnKey === 'invoiceNumber') {
    //   const rowData = data[rowIndex];
    //   if (rowData) {
    //     if (onInvoiceClick) {
    //       onInvoiceClick(rowData);
    //       return;
    //     }
    //     setSelectedInvoiceId(rowData.id);
    //     setShowInvoiceModal(true);
    //     return;
    //   }
    // }
    
    // Find the navigation column index
    const navigableColumns = getNavigableColumns();
    const navigationColumnIndex = navigableColumns.findIndex(({ index }) => index === actualColumnIndex);
    
    if (navigationColumnIndex >= 0) {
      setCurrentPosition({ rowIndex, columnIndex: navigationColumnIndex });
      const cellId = `cell-${rowIndex}-${actualColumnIndex}`;
      setFocusedCellId(cellId);
      setHighlightPosition({ rowIndex, columnIndex: actualColumnIndex });
    }
  };

  // Handle cell hover for highlighting
  const handleCellHover = (rowIndex: number, columnIndex: number) => {
    if (!editingCell) {
      setHighlightPosition({ rowIndex, columnIndex });
    }
  };

  // Handle mouse leave to clear highlight ONLY if no cell is focused
  const handleTableMouseLeave = () => {
    if (!focusedCellId) {
      setHighlightPosition(null);
    }
  };

  // Editing handlers
  const startEdit = (rowId: string, columnKey: keyof InvoiceRow, currentValue: any) => {
    if (!editableColumns.includes(columnKey)) return;
    
    setEditingCell({ rowId, columnKey });
    
    let valueToEdit = String(currentValue || '');
    if (columnKey === 'invoiceDate') {
       valueToEdit = formatDate(valueToEdit);
    }
    
    setEditValue(valueToEdit);
  };

  const cancelEdit = () => {
    setEditingCell(null);
    setEditValue('');
    
    // Restore focus to current cell if there was one
    if (focusedCellId) {
      setTimeout(() => {
        const cellElement = document.querySelector(`[data-cell-id="${focusedCellId}"]`) as HTMLElement;
        if (cellElement) {
          cellElement.focus();
        }
      }, 10);
    }
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

  // Programmatically activate edit mode for a specific cell by row index and column
  const activateEditByRowIndex = useCallback((rowIndex: number, columnKey: keyof InvoiceRow) => {
    console.log('activateEditByRowIndex called with:', rowIndex, columnKey);
    console.log('Data length:', data.length);
    console.log('Available columns:', editableColumns);
    
    if (rowIndex >= 0 && rowIndex < data.length) {
      const row = data[rowIndex];
      console.log('Found row:', row);
      
      if (row && editableColumns.includes(columnKey)) {
        console.log('Column is editable, proceeding with activation...');
        
        // Clear any existing editing state first
        if (editingCell) {
          console.log('Clearing existing edit state...');
          cancelEdit();
        }
        
        // Small delay to ensure state is cleared
        setTimeout(() => {
          console.log('Starting edit for row:', row.id, columnKey, row[columnKey]);
          startEdit(row.id, columnKey, row[columnKey]);
          
          // Add temporary highlight effect to indicate successful activation
          const cellId = `cell-${rowIndex}-${allColumnKeys.findIndex(k => k === columnKey)}`;
          console.log('Looking for cell element with ID:', cellId);
          const cellElement = document.querySelector(`[data-cell-id="${cellId}"]`) as HTMLElement;
          console.log('Found cell element:', !!cellElement);
          
          if (cellElement) {
            console.log('Adding highlight effect to cell...');
            cellElement.style.backgroundColor = '#CEF6F0';
            cellElement.style.borderColor = '#02B196';
            setTimeout(() => {
              // Reset styles after highlighting
              if (!editingCell || editingCell.rowId !== row.id || editingCell.columnKey !== columnKey) {
                cellElement.style.backgroundColor = '';
                cellElement.style.borderColor = '';
              }
            }, 1000);
          }
        }, 50);
      } else {
        console.log('Row not found or column not editable');
      }
    } else {
      console.log('Invalid row index:', rowIndex, 'Data length:', data.length);
    }
  }, [data, editableColumns, editingCell, cancelEdit, startEdit, allColumnKeys]);

  // Expose function globally for external access
  useEffect(() => {
    console.log('Exposing global function: activateInvoiceDetailsCell');
    (window as any).activateInvoiceDetailsCell = activateEditByRowIndex;
    
    // Expose add row function
    (window as any).addInvoiceDetailsRow = () => {
      handleAddRow();
    };

    return () => {
      console.log('Cleaning up global function: activateInvoiceDetailsCell');
      delete (window as any).activateInvoiceDetailsCell;
      delete (window as any).addInvoiceDetailsRow;
    };
  }, [data, activateEditByRowIndex]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    // Handle Ctrl + Arrow keys for navigation while editing
    if (e.ctrlKey && (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      
      const currentEditing = editingCell;
      saveEdit();
      
      if (currentEditing) {
        const rowIndex = data.findIndex(r => r.id === currentEditing.rowId);
        if (rowIndex >= 0) {
          const navigableColumns = getNavigableColumns();
          const currentNavIndex = navigableColumns.findIndex(c => c.key === currentEditing.columnKey);
          
          let nextRowIndex = rowIndex;
          let nextNavIndex = currentNavIndex;
          
          if (e.key === 'ArrowRight') {
             // Logic for next cell (same as Tab)
             if (currentNavIndex >= 0 && currentNavIndex < navigableColumns.length - 1) {
               nextNavIndex = currentNavIndex + 1;
             } else if (rowIndex < data.length - 1) {
               nextRowIndex = rowIndex + 1;
               nextNavIndex = 0;
             }
          } else if (e.key === 'ArrowLeft') {
             // Logic for previous cell
             if (currentNavIndex > 0) {
               nextNavIndex = currentNavIndex - 1;
             } else if (rowIndex > 0) {
               nextRowIndex = rowIndex - 1;
               nextNavIndex = navigableColumns.length - 1;
             }
          } else if (e.key === 'ArrowDown') {
             if (rowIndex < data.length - 1) {
               nextRowIndex = rowIndex + 1;
             }
          } else if (e.key === 'ArrowUp') {
             if (rowIndex > 0) {
               nextRowIndex = rowIndex - 1;
             }
          }
          
          // Use manual state update and focus to ensure it works reliably after edit mode switch
          if (nextNavIndex >= 0 && navigableColumns[nextNavIndex]) {
             const actualColumnIndex = navigableColumns[nextNavIndex].index;
             const cellId = `cell-${nextRowIndex}-${actualColumnIndex}`;
             
             setCurrentPosition({ rowIndex: nextRowIndex, columnIndex: nextNavIndex });
             setFocusedCellId(cellId);
             setHighlightPosition({ rowIndex: nextRowIndex, columnIndex: actualColumnIndex });
             
             // Use a slightly longer timeout to allow the input to be unmounted and the div to be rendered
             setTimeout(() => {
                const cellElement = document.querySelector(`[data-cell-id="${cellId}"]`) as HTMLElement;
                if (cellElement) {
                  cellElement.focus();
                  cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                }
             }, 50);
          }
        }
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      // Stop immediate propagation to prevent document listener from catching it
      e.nativeEvent.stopImmediatePropagation();
      
      // Capture current editing cell information to ensure we stay on it
      const currentEditing = editingCell;
      
      saveEdit();
      
      // Explicitly restore focus to the same cell to prevent any movement
      if (currentEditing) {
        const rowIndex = data.findIndex(r => r.id === currentEditing.rowId);
        if (rowIndex >= 0) {
           const actualColumnIndex = allColumnKeys.findIndex(k => k === currentEditing.columnKey);
           if (actualColumnIndex >= 0) {
             const cellId = `cell-${rowIndex}-${actualColumnIndex}`;
             // Update state to ensure highlight stays
             setHighlightPosition({ rowIndex, columnIndex: actualColumnIndex });
             // Ensure focusedCellId is set to the current cell
             setFocusedCellId(cellId);
             
             // Restore focus
             setTimeout(() => {
                const cellElement = document.querySelector(`[data-cell-id="${cellId}"]`) as HTMLElement;
                if (cellElement) {
                  cellElement.focus();
                }
             }, 10);
           }
        }
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
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
  const shouldShowCellFocused = (cellId: string) => focusedCellId === cellId;
  const shouldHighlightRow = (rowIndex: number) => highlightPosition?.rowIndex === rowIndex;
  const shouldHighlightColumn = (columnIndex: number) => highlightPosition?.columnIndex === columnIndex;
  const isCurrentHoveredCell = (rowIndex: number, columnIndex: number) => 
    highlightPosition?.rowIndex === rowIndex && highlightPosition?.columnIndex === columnIndex;

  // Helper function to check if a cell is in a highlighted row (but not the header)
  const isInHighlightedRowOnly = (rowIndex: number, columnIndex: number) => {
    return shouldHighlightRow(rowIndex) && !shouldHighlightColumn(columnIndex) && !isCurrentHoveredCell(rowIndex, columnIndex) && rowIndex >= 0;
  };

  // Editable cell renderer with navigation and highlighting support
  const renderEditableCell = (
    row: InvoiceRow, 
    columnKey: keyof InvoiceRow, 
    value: any,
    className: string = '',
    style: React.CSSProperties = {},
    cellId: string = '',
    columnIndex: number = -1,
    rowIndex: number = -1
  ) => {
    const isEditing = editingCell?.rowId === row.id && editingCell?.columnKey === columnKey;
    const isEditable = editableColumns.includes(columnKey);
    const isDisabledColumn = columnKey === 'invoiceNumber' || columnKey === 'invoiceDate';
    const isCellFocused = shouldShowCellFocused(cellId) && !isEditing;
    const isHoveredCell = isCurrentHoveredCell(rowIndex, columnIndex);
    const isInHighlightedRow = isInHighlightedRowOnly(rowIndex, columnIndex);

    const displayValue = columnKey === 'invoiceDate' ? formatDate(String(value || '')) : String(value || '');

    // Check if this is the first row's value cell (for editing state styling)
    const isFirstRowValueCellEdit = rowIndex === 0 && columnKey === 'value';

    // Special handling for sameAsConsignee and svbRelated columns - render toggle switch
    if (columnKey === 'sameAsConsignee' || columnKey === 'svbRelated') {
      // Enhanced border and background logic for toggle column
      let cellBorderStyles: React.CSSProperties = {};
      let backgroundColor = 'transparent';
      let boxShadow = 'none';

      if (isCellFocused) {
        cellBorderStyles = {
          borderTop: '2px solid #3874FF',
          borderRight: '2px solid #3874FF',
          borderBottom: '2px solid #3874FF',
          borderLeft: '2px solid #3874FF'
        };
        backgroundColor = '#FFFFFF';
        boxShadow = '0 2px 12px 0 rgba(113, 144, 214, 0.47)';
      } else if (isHoveredCell) {
        cellBorderStyles = {
          borderTop: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
          borderRight: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
          borderBottom: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
          borderLeft: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`
        };
        backgroundColor = TABLE_CONSTANTS.HOVER_CELL_BACKGROUND;
      } else if (isInHighlightedRow) {
        backgroundColor = TABLE_CONSTANTS.HIGHLIGHT_COLOR;
        cellBorderStyles = {
          borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
          borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
          borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
          borderLeft: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
        };
      } else {
        cellBorderStyles = {
          borderTop: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
          borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
          borderBottom: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
          borderLeft: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
        };
      }

      return (
        <div
          data-cell-id={cellId}
          className={`${className} relative`}
          style={{
            ...style,
            ...cellBorderStyles,
            backgroundColor,
            boxShadow
          }}
          onClick={() => handleCellClick(rowIndex, columnIndex, columnKey)}
          onMouseEnter={() => handleCellHover(rowIndex, columnIndex)}
          tabIndex={0}
          onFocus={() => handleCellClick(rowIndex, columnIndex, columnKey)}
        >
          <FigmaSwitch
            fieldId={`invoice-${row.id}-${columnKey}`}
            checked={value === 'Yes'}
            onCheckedChange={(checked) => {
              setData(prev => prev.map(r => 
                r.id === row.id ? { ...r, [columnKey]: checked ? 'Yes' : 'No' } : r
              ));
            }}
          />
        </div>
      );
    }

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
              border: isFirstRowValueCellEdit ? '1px solid #E53935' : `2px solid ${TABLE_CONSTANTS.EDIT_BORDER}`,
              backgroundColor: '#FFFFFF',
              boxShadow: isFirstRowValueCellEdit ? '0 0 0 4px rgba(229, 57, 53, 0.25)' : TABLE_CONSTANTS.EDIT_SHADOW,
              zIndex: 100,
              borderRadius: '0px'
            }}
          />
        </div>
      );
    }

    // Check if this cell matches the activeCell from audit report
    const isActiveCellFromAudit = activeCell && 
      activeCell.section === 'invoice' && 
      activeCell.rowIndex === rowIndex && 
      activeCell.columnId === columnKey;

    // Check if this is the first row's value cell (default red border)
    const isFirstRowValueCell = rowIndex === 0 && columnKey === 'value';

    // Enhanced border and background logic
    let cellBorderStyles: React.CSSProperties = {};
    let backgroundColor = 'transparent';
    let boxShadow = 'none';

    // First row value cell ALWAYS gets red border, regardless of focus/hover state
    if (isFirstRowValueCell) {
      cellBorderStyles = {
        borderTop: '1px solid #E53935',
        borderRight: '1px solid #E53935',
        borderBottom: '1px solid #E53935',
        borderLeft: '1px solid #E53935'
      };
      backgroundColor = '#FFEBEE';
      // No shadow in normal state
      boxShadow = 'none';
    } else if (isActiveCellFromAudit) {
      // Active cell from audit report: highlight with red background and border
      cellBorderStyles = {
        borderTop: '1px solid #E53935',
        borderRight: '1px solid #E53935',
        borderBottom: '1px solid #E53935',
        borderLeft: '1px solid #E53935'
      };
      backgroundColor = '#FFEBEE';
      boxShadow = '0 2px 12px 0 rgba(229, 57, 53, 0.47)';
    } else if (isCellFocused) {
      // Focused cell: blue border and white background with box shadow
      cellBorderStyles = {
        borderTop: '2px solid #3874FF',
        borderRight: '2px solid #3874FF',
        borderBottom: '2px solid #3874FF',
        borderLeft: '2px solid #3874FF'
      };
      backgroundColor = '#FFFFFF';
      boxShadow = '0 2px 12px 0 rgba(113, 144, 214, 0.47)';
    } else if (isHoveredCell) {
      // Hovered cell: blue border on all sides with white background
      cellBorderStyles = {
        borderTop: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
        borderRight: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
        borderBottom: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
        borderLeft: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`
      };
      backgroundColor = TABLE_CONSTANTS.HOVER_CELL_BACKGROUND;
    } else if (isInHighlightedRow) {
      // Row highlighted: teal background with teal top/bottom borders only
      backgroundColor = TABLE_CONSTANTS.HIGHLIGHT_COLOR;
      cellBorderStyles = {
        borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
        borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
        borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
        borderLeft: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
      };
    } else {
      // Default state
      cellBorderStyles = {
        borderTop: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
        borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
        borderBottom: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
        borderLeft: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
      };
    }
    
    // Apply styling based on disabled status
    const cellContent = (
      <div
        data-cell-id={cellId}
        className={`${className} ${isEditable ? 'cursor-pointer transition-all duration-200 group editable-cell' : ''} ${isDisabledColumn ? 'cursor-not-allowed opacity-50' : ''} relative`}
        style={{
          ...style,
          ...cellBorderStyles,
          backgroundColor,
          boxShadow
        }}
        onClick={() => {
          handleCellClick(rowIndex, columnIndex, columnKey);
          if (isEditable) {
            startEdit(row.id, columnKey, value);
          }
        }}
        onMouseEnter={() => handleCellHover(rowIndex, columnIndex)}
        title={!isDisabledColumn && isEditable ? 'Click to edit' : !isDisabledColumn ? displayValue : ''}
        tabIndex={isEditable ? 0 : -1}
        onFocus={() => {
          handleCellClick(rowIndex, columnIndex, columnKey);
        }}
      >
        {/* Special placeholder handling for first row invoice value */}
        {columnKey === 'value' && row.sNo === 1 && (!value || value === '' || value === '0.00') ? (
          <span 
            className="text-sm font-normal truncate block flex items-center"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Amount
            <span 
              className="ml-1 inline-block w-1 h-1 rounded-full"
              style={{ backgroundColor: '#FF0000' }}
            ></span>
          </span>
        ) : (
          <span 
            className="text-sm font-normal truncate block" 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px',
              color: columnKey === 'supplierName' ? '#3874FF' : 
                     (columnKey === 'invoiceNumber' || columnKey === 'invoiceDate') ? '#7E22CE' : 
                     (columnKey === 'value' && (row.sNo === 2 || row.sNo === 3 || row.sNo === 4)) ? '#7E22CE' : '#000000'
            }}
          >
            {displayValue}
          </span>
        )}
      </div>
    );

    if (isDisabledColumn) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {cellContent}
          </TooltipTrigger>
          <TooltipContent>
            <p>Field will be editable in invoice edit screen</p>
          </TooltipContent>
        </Tooltip>
      );
    }

    return cellContent;
  };

  // Non-editable cell renderer with highlighting support (for checkboxes and serial numbers)
  const renderNonEditableCell = (
    content: React.ReactNode,
    className: string = '',
    style: React.CSSProperties = {},
    rowIndex: number = -1,
    columnIndex: number = -1
  ) => {
    const isHoveredCell = isCurrentHoveredCell(rowIndex, columnIndex);
    const isInHighlightedRow = isInHighlightedRowOnly(rowIndex, columnIndex);
    
    // Check if row has error (first row with empty value)
    const rowHasError = rowIndex === 0;
    const isCheckboxColumn = columnIndex === 0;
    
    let backgroundColor = 'transparent';
    let borderStyles: React.CSSProperties = {
      borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
      borderBottom: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
    };

    if (isHoveredCell) {
      // Hovered cell: blue border on all sides with white background
      backgroundColor = TABLE_CONSTANTS.HOVER_CELL_BACKGROUND;
      borderStyles = {
        borderTop: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
        borderRight: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
        borderBottom: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
        borderLeft: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`
      };
    } else if (isInHighlightedRow) {
      // Row highlighted: teal background with teal top/bottom borders only
      backgroundColor = TABLE_CONSTANTS.HIGHLIGHT_COLOR;
      borderStyles = {
        borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
        borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
        borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
        borderLeft: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
      };
    }

    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor,
          ...borderStyles,
          position: 'relative'
        }}
        onMouseEnter={() => handleCellHover(rowIndex, columnIndex)}
      >
        {/* Red vertical bar for error rows in checkbox column */}
        {rowHasError && isCheckboxColumn && (
          <div 
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              bottom: '0px',
              width: '4px',
              backgroundColor: '#E53935'
            }}
          />
        )}
        {content}
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

  // Calculate selected items count
  const selectedCount = data.filter(row => row.isSelected).length;
  const hasSelectedItems = selectedCount > 0;


  // Calculate total widths dynamically
  const leftSectionWidth = leftColumnWidths.reduce((sum, width) => sum + width, 0);
  const scrollWidth = columnWidths.reduce((sum, width) => sum + width, 0);

  // Apply filters to data
  const filteredData = data.filter(row => {
    // Apply search filter first
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        (row.invoiceNumber || '').toLowerCase().includes(query) ||
        (row.invoiceDate || '').toLowerCase().includes(query) ||
        (row.terms || '').toLowerCase().includes(query) ||
        (row.value || '').toLowerCase().includes(query) ||
        (row.currency || '').toLowerCase().includes(query) ||
        (row.supplierName || '').toLowerCase().includes(query) ||
        (isExport && (row.sameAsConsignee || '').toLowerCase().includes(query)) ||
        (row.freightAmount || '').toLowerCase().includes(query) ||
        (row.freightCurrency || '').toLowerCase().includes(query) ||
        (row.insuranceAmount || '').toLowerCase().includes(query) ||
        (row.insuranceCurrency || '').toLowerCase().includes(query) ||
        (row.packingChargesAmount || '').toLowerCase().includes(query) ||
        (row.unitPriceIncludes || '').toLowerCase().includes(query) ||
        (row.natureOfPayment || '').toLowerCase().includes(query) ||
        (!isExport && (row.miscChargesAmount || '').toLowerCase().includes(query)) ||
        (!isExport && (row.miscChargesCurrency || '').toLowerCase().includes(query)) ||
        (!isExport && (row.assessableValue || '').toLowerCase().includes(query)) ||
        (!isExport && (row.duty || '').toLowerCase().includes(query)) ||
        (!isExport && (row.sellerName || '').toLowerCase().includes(query)) ||
        (!isExport && (row.brokerName || '').toLowerCase().includes(query)) ||
        (row.thirdParty || '').toLowerCase().includes(query);
      
      if (!matchesSearch) {
        return false;
      }
    }
    
    // Filter by Invoice Number
    if (filteredInvoiceNumbers.length > 0 && !filteredInvoiceNumbers.includes(row.invoiceNumber)) {
      return false;
    }
    
    // Filter by Supplier Name
    if (filteredSupplierNames.length > 0 && !filteredSupplierNames.includes(row.supplierName)) {
      return false;
    }
    
    return true;
  });

  // Calculate totals for amount columns grouped by currency
  const calculateTotals = () => {
    const totals: { [key: string]: { [currency: string]: number } } = {
      value: {},
      freightAmount: {},
      insuranceAmount: {},
      miscChargesAmount: {},
      packingChargesAmount: {},
      assessableValue: {},
      duty: {}
    };

    filteredData.forEach(row => {
      // Parse and sum value amounts by currency
      const valueAmount = parseFloat(row.value.replace(/,/g, '')) || 0;
      if (!totals.value[row.currency]) totals.value[row.currency] = 0;
      totals.value[row.currency] += valueAmount;

      // Parse and sum freight amounts by currency
      const freightAmount = parseFloat(row.freightAmount.replace(/,/g, '')) || 0;
      if (!totals.freightAmount[row.freightCurrency]) totals.freightAmount[row.freightCurrency] = 0;
      totals.freightAmount[row.freightCurrency] += freightAmount;

      // Parse and sum insurance amounts by currency
      const insuranceAmount = parseFloat(row.insuranceAmount.replace(/,/g, '')) || 0;
      if (!totals.insuranceAmount[row.insuranceCurrency]) totals.insuranceAmount[row.insuranceCurrency] = 0;
      totals.insuranceAmount[row.insuranceCurrency] += insuranceAmount;

      if (isExport) {
        // Parse and sum packing charges (assume invoice currency)
        const packingChargesAmount = parseFloat((row.packingChargesAmount || '').replace(/,/g, '')) || 0;
        const currency = row.currency || 'USD';
        if (!totals.packingChargesAmount[currency]) totals.packingChargesAmount[currency] = 0;
        totals.packingChargesAmount[currency] += packingChargesAmount;
      }

      if (!isExport) {
        // Parse and sum misc charges amounts by currency
        const miscChargesAmount = parseFloat(row.miscChargesAmount.replace(/,/g, '')) || 0;
        if (!totals.miscChargesAmount[row.miscChargesCurrency]) totals.miscChargesAmount[row.miscChargesCurrency] = 0;
        totals.miscChargesAmount[row.miscChargesCurrency] += miscChargesAmount;

        // Parse and sum assessable value (assume invoice currency)
        if (row.assessableValue) {
          const assessableValue = parseFloat(row.assessableValue.replace(/,/g, '')) || 0;
          const currency = row.currency || 'USD';
          if (!totals.assessableValue[currency]) totals.assessableValue[currency] = 0;
          totals.assessableValue[currency] += assessableValue;
        }

        // Parse and sum duty (assume invoice currency)
        if (row.duty) {
          const duty = parseFloat(row.duty.replace(/,/g, '')) || 0;
          const currency = row.currency || 'USD';
          if (!totals.duty[currency]) totals.duty[currency] = 0;
          totals.duty[currency] += duty;
        }
      }
    });

    return totals;
  };

  const totals = calculateTotals();

  // Format currency totals for display
  const formatCurrencyTotals = (currencyTotals: { [currency: string]: number }) => {
    return Object.entries(currencyTotals)
      .filter(([_, amount]) => amount > 0)
      .map(([currency, amount]) => `${currency} ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
      .join(', ');
  };

  const columnHeaders = isExport ? [
    'Invoice Date', 'Terms', 'Unit Price Includes', 'Nature of Payment', 'Value', 'Currency', 'Buyer', 'Same as Consignee',
    'Freight Amount', 'Freight Currency', 'Freight Rate', 
    'Insurance Amount', 'Insurance Currency', 'Insurance Rate', 'Packing Charges Amount',
    'Third Party'
  ] : [
    'Invoice Date', 'Terms', 'Value', 'Currency', 'Supplier Name', 
    'SVB Related', 'SVB Ref No', 'SVB Ref Date', 'SVB Flag', 'Cus House', 'SVB Load Assbl', 'SVB Load Duty',
    'Freight Amount', 'Freight Currency', 'Freight Rate', 
    'Insurance Amount', 'Insurance Currency', 'Insurance Rate',
    'Misc Charges Amount', 'Misc Charges Currency', 'Misc Charges Rate',
    'Assessable Value', 'Duty',
    'Seller Name', 'Broker Name', 'Third Party'
  ];
  
  const columnKeys: (keyof InvoiceRow)[] = isExport ? [
    'invoiceDate', 'terms', 'unitPriceIncludes', 'natureOfPayment', 'value', 'currency', 'supplierName', 'sameAsConsignee',
    'freightAmount', 'freightCurrency', 'freightRate',
    'insuranceAmount', 'insuranceCurrency', 'insuranceRate', 'packingChargesAmount',
    'thirdParty'
  ] : [
    'invoiceDate', 'terms', 'value', 'currency', 'supplierName',
    'svbRelated', 'svbRefNo', 'svbRefDate', 'svbFlag', 'cusHouse', 'svbLoadAssbl', 'svbLoadDuty',
    'freightAmount', 'freightCurrency', 'freightRate',
    'insuranceAmount', 'insuranceCurrency', 'insuranceRate',
    'miscChargesAmount', 'miscChargesCurrency', 'miscChargesRate',
    'assessableValue', 'duty',
    'sellerName', 'brokerName', 'thirdParty'
  ];
  
  const leftColumnHeaders = ['', '', 'Sr.No', 'Invoice Number'];

  return (
    <div 
      ref={tableRef}
      className="w-full relative overflow-hidden border border-gray-300 table-component" 
      style={{ fontFamily: 'Inter, sans-serif', height: '100%' }}
      tabIndex={-1}
      onMouseLeave={handleTableMouseLeave}
    >
      <div ref={tableContainerRef} className="absolute inset-0 pointer-events-none" />
      {/* Left Scroll Arrow - Fixed in Footer Position */}
      {showLeftArrow && (
        <button
          onClick={handleScrollLeft}
          className="z-[100] bg-white hover:bg-gray-50 rounded-full p-1 transition-all hover:scale-110 shadow-lg border border-gray-200"
          style={{ 
            position: 'absolute',
            bottom: '8px',
            left: '8px'
          }}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-[18px] h-[18px] text-[#050E25]" />
        </button>
      )}

      {/* Right Scroll Arrow - Fixed in Footer Position */}
      {showRightArrow && (
        <button
          onClick={handleScrollRight}
          className="z-[100] bg-white hover:bg-gray-50 rounded-full p-1 transition-all hover:scale-110 shadow-lg border border-gray-200"
          style={{ 
            position: 'absolute',
            bottom: '8px',
            right: '8px'
          }}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-[18px] h-[18px] text-[#050E25]" />
        </button>
      )}
      
      <SectionHeader 
        title="Invoice Details" 
        showSearch={true}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div 
        className="w-full flex flex-col"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          height: 'calc(100% - 48px)'
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
          {/* Left Header Section with Shadow */}
          <div 
            className="flex relative"
            style={{
              boxShadow: '4px 0px 8px 0px rgba(0, 0, 0, 0.1)',
              zIndex: 10
            }}
          >
            {leftColumnHeaders.map((header, index) => (
              <Resizable
                key={`left-header-${index}`}
                size={{ width: leftColumnWidths[index], height: TABLE_CONSTANTS.ROW_HEIGHT }}
                onResizeStop={(e, direction, ref, delta) => {
                  const minWidths = [30, 30, 40, 100]; // expand, checkbox, Sr.No, Invoice No
                  const newWidth = leftColumnWidths[index] + delta.width;
                  if (newWidth >= minWidths[index]) {
                    handleLeftColumnResize(index, newWidth);
                  }
                }}
                minWidth={index <= 1 ? 30 : index === 2 ? 40 : 100}
                maxWidth={index <= 1 ? 50 : index === 2 ? 80 : 400}
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
                  className={`w-full h-full flex items-center px-2 gap-1 ${index <= 1 ? 'justify-center' : 'justify-start'}`}
                  style={{ 
                    height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                    backgroundColor: shouldHighlightColumn(index) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'transparent',
                    ...(shouldHighlightColumn(index) ? {
                      borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                      borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                      borderLeft: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                      borderRight: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
                    } : {})
                  }}
                  onMouseEnter={() => handleCellHover(-1, index)}
                >
                  {index === 1 ? (
                    <Checkbox 
                      checked={selectAll}
                      onCheckedChange={handleSelectAll}
                      className="w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white"
                    />
                  ) : index === 3 ? (
                    <div className="contents">
                      <span className="flex-1 text-sm font-medium truncate text-black" title={header} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                        {header}
                      </span>
                      <Popover open={openFilterColumn === 'invoiceNumber'} onOpenChange={(open) => setOpenFilterColumn(open ? 'invoiceNumber' : null)}>
                        <PopoverTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-[18px] h-[18px] p-0 hover:bg-gray-200"
                          >
                            <FilterIcon 
                              className="w-[18px] h-[18px] text-[#050E25] opacity-60" 
                              isOpen={openFilterColumn === 'invoiceNumber'}
                              onClick={() => setOpenFilterColumn(openFilterColumn === 'invoiceNumber' ? null : 'invoiceNumber')}
                            />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent 
                          align="start" 
                          className="w-[320px] h-[480px] p-0 border-none shadow-lg"
                          side="bottom"
                          sideOffset={5}
                        >
                          <FiltersSort 
                            title="Filter by Invoice Number"
                            searchPlaceholder="Search by Invoice Number"
                            availableJobNumbers={Array.from(new Set(data.map(item => item.invoiceNumber).filter(v => v)))}
                            initialSelectedJobs={filteredInvoiceNumbers}
                            onApplyFilter={(selected) => {
                              setFilteredInvoiceNumbers(selected);
                              setOpenFilterColumn(null);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
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
              {columnHeaders.map((header, index) => (
                <Resizable
                  key={`middle-header-${index}`}
                  size={{ width: columnWidths[index], height: TABLE_CONSTANTS.ROW_HEIGHT }}
                  onResizeStop={(e, direction, ref, delta) => {
                    const newWidth = columnWidths[index] + delta.width;
                    if (newWidth >= 80) {
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
                    className="w-full h-full flex items-center justify-start px-2 gap-1"
                    style={{ 
                      height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                      minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                      maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                      borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                      backgroundColor: shouldHighlightColumn(index + 4) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'transparent',
                      ...(shouldHighlightColumn(index + 4) ? {
                        borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                        borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                        borderLeft: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                        borderRight: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
                      } : {})
                    }}
                    onMouseEnter={() => handleCellHover(-1, index + 4)}
                  >
                    <span className="flex-1 text-sm font-medium truncate text-black" title={header} style={{ fontFamily: 'Inter', fontSize: '14px' }}>
                      {header}
                    </span>
                    {index === 4 && (
                      <Popover open={openFilterColumn === 'supplierName'} onOpenChange={(open) => setOpenFilterColumn(open ? 'supplierName' : null)}>
                        <PopoverTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-[18px] h-[18px] p-0 hover:bg-gray-200"
                          >
                            <FilterIcon 
                              className="w-[18px] h-[18px] text-[#050E25] opacity-60" 
                              isOpen={openFilterColumn === 'supplierName'}
                              onClick={() => setOpenFilterColumn(openFilterColumn === 'supplierName' ? null : 'supplierName')}
                            />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent 
                          align="start" 
                          className="w-[320px] h-[480px] p-0 border-none shadow-lg"
                          side="bottom"
                          sideOffset={5}
                        >
                          <FiltersSort 
                            title={isExport ? "Filter by Buyer" : "Filter by Supplier Name"}
                            searchPlaceholder={isExport ? "Search by Buyer" : "Search by Supplier"}
                            availableJobNumbers={Array.from(new Set(data.map(item => item.supplierName).filter(v => v)))}
                            initialSelectedJobs={filteredSupplierNames}
                            onApplyFilter={(selected) => {
                              setFilteredSupplierNames(selected);
                              setOpenFilterColumn(null);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                </Resizable>
              ))}
            </div>
          </div>

          {/* Right spacer with actions */}
          <div 
            className="bg-[#EBEEF7] flex items-center justify-center" 
            style={{ 
              borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
              backgroundColor: '#EBEEF7',
              borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
              width: '50px',
              minWidth: '50px',
              position: 'sticky',
              right: 0,
              zIndex: 20
            }}
          >
             {/* Header for actions column - empty or settings icon */}
          </div>
        </div>

        {/* Data Rows Section */}
        <div className="flex-1 w-full grid" style={{ gridTemplateColumns: `${leftSectionWidth}px 1fr 50px` }}>
          
          {/* Left Data Section - Fixed */}
          <div 
            className="relative"
            style={{
              boxShadow: '4px 0px 8px 0px rgba(0, 0, 0, 0.1)',
              zIndex: 5,
              overflow: 'visible'
            }}
          >
            <div className="h-full" style={{ backgroundColor: '#FFFFFF' }}>
              {filteredData.map((row, rowIndex) => {
                const isExpanded = expandedRowId === row.id;
                
                return (
                  <div key={`left-row-fragment-${row.id}`} className="contents">
                    <div 
                      key={row.id} 
                      className="flex"
                      style={{ 
                        height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                        marginBottom: rowIndex < data.length - 1 ? `${TABLE_CONSTANTS.ROW_GAP}px` : '0px'
                      }}
                    >
                      {/* Expand Icon column */}
                      {renderNonEditableCell(
                        <div className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-gray-100" onClick={() => toggleRowExpansion(row.id)}>
                          {isExpanded ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                        </div>,
                        'flex items-center justify-center px-2',
                        { 
                          width: leftColumnWidths[0],
                          height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
                        },
                        rowIndex,
                        0
                      )}

                      {/* Checkbox column */}
                      {renderNonEditableCell(
                        <Checkbox 
                          checked={row.isSelected}
                          onCheckedChange={() => handleRowSelect(row.id)}
                          className="w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white"
                        />,
                        'flex items-center justify-center px-2',
                        { 
                          width: leftColumnWidths[1],
                          height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
                        },
                        rowIndex,
                        1
                      )}
                      
                      {/* Serial Number column with proper borders */}
                      {renderNonEditableCell(
                        <div className="flex items-center justify-between w-full">
                          <span className="text-sm text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                            {row.sNo}
                          </span>
                          <div 
                            className="size-[18px] shrink-0 cursor-pointer hover:bg-gray-100 rounded flex items-center justify-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              onExpandRow?.(row, 'split');
                            }}
                          >
                            <ExpandContent />
                          </div>
                        </div>,
                        'flex items-center px-2',
                        { 
                          width: leftColumnWidths[2],
                          height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`
                        },
                        rowIndex,
                        2
                      )}
                      
                      {/* Invoice Number column - Editable */}
                      <div style={{ width: leftColumnWidths[3] }}>
                        {renderEditableCell(
                          row,
                          'invoiceNumber',
                          row.invoiceNumber,
                          'h-full flex items-center px-2',
                          { height: `${TABLE_CONSTANTS.ROW_HEIGHT}px` },
                          `cell-${rowIndex}-3`,
                          3,
                          rowIndex
                        )}
                      </div>
                    </div>
                    {isExpanded && (
                      <div 
                        style={{ height: '400px', width: '100%', position: 'relative' }}
                      >
                        <div 
                          style={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            width: tableWidth > 0 ? `${tableWidth - 2}px` : '100vw',
                            height: '400px',
                            backgroundColor: 'white',
                            zIndex: 100,
                            borderBottom: '1px solid #d0d5e3',
                            overflow: 'hidden'
                          }}
                        >
                           <div className="h-full w-full p-4 bg-gray-50/50">
                             <div className="h-full w-full border border-gray-200 bg-white shadow-sm flex flex-col">
                               <ItemDetailsTable 
                                 invoiceFilter={String(row.sNo)}
                                 showHeader={true}
                                 isExport={isExport}
                               />
                             </div>
                           </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Add Button Row - Left Section */}
              <div 
                className="flex items-center justify-start px-2 cursor-pointer hover:bg-gray-50 transition-colors border-r border-[#D0D5E3] border-b border-[#D0D5E3]"
                style={{ 
                  height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  width: `${leftSectionWidth}px`
                }}
                onClick={handleAddRow}
              >
                 <Button variant="ghost" size="sm" className="h-6 w-full justify-start text-[#3874FF] px-1 hover:bg-transparent hover:text-[#3874FF]">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Invoice
                 </Button>
              </div>
            </div>
          </div>

          {/* Middle Data Section - Scrollable */}
          <div 
            ref={dataScrollRef}
            className={SCROLLBAR_CLASSES.VISIBLE}
            onScroll={handleDataScroll}
          >
            <div className="h-full overflow-y-auto" style={{ width: `${scrollWidth}px` }}>
              {filteredData.map((row, rowIndex) => (
                <div key={row.id} className="contents">
                  <div 
                    className="flex"
                  style={{ 
                    height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    marginBottom: rowIndex < data.length - 1 ? `${TABLE_CONSTANTS.ROW_GAP}px` : '0px'
                  }}
                >
                  {columnKeys.map((columnKey, columnIndex) => (
                    <div key={columnKey} style={{ width: columnWidths[columnIndex] }}>
                      {renderEditableCell(
                        row,
                        columnKey,
                        row[columnKey],
                        'h-full flex items-center px-2',
                        { height: `${TABLE_CONSTANTS.ROW_HEIGHT}px` },
                        `cell-${rowIndex}-${columnIndex + 4}`,
                        columnIndex + 4,
                        rowIndex
                      )}
                    </div>
                  ))}
                </div>
                {expandedRowId === row.id && <div style={{ height: '400px', width: `${scrollWidth}px` }} />}
              </div>
            ))}
              
              {/* Empty Row for Alignment - Middle Section */}
              <div 
                className="flex"
                style={{ 
                  height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  borderBottom: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
                }}
              >
                  {columnKeys.map((columnKey, columnIndex) => (
                    <div key={`empty-${columnKey}`} style={{ 
                        width: columnWidths[columnIndex],
                        borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
                    }}></div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right section with more actions for each row */}
          <div className="bg-white">
            <div className="h-full overflow-y-auto">
              {filteredData.map((row, rowIndex) => (
                <div key={`right-row-fragment-${row.id}`} className="contents">
                  <div 
                    key={row.id} 
                    className="flex items-center justify-center"
                    style={{ 
                      height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                      minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                      maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                      marginBottom: rowIndex < data.length - 1 ? `${TABLE_CONSTANTS.ROW_GAP}px` : '0px',
                      borderLeft: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                      borderBottom: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                      backgroundColor: isCurrentHoveredCell(rowIndex, 20) ? TABLE_CONSTANTS.HOVER_CELL_BACKGROUND : 
                                      isInHighlightedRowOnly(rowIndex, 20) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'transparent',
                      ...(isCurrentHoveredCell(rowIndex, 20) ? {
                        borderTop: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
                        borderRight: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
                        borderBottom: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`,
                        borderLeft: `2px solid ${TABLE_CONSTANTS.HOVER_BORDER_COLOR}`
                      } : isInHighlightedRowOnly(rowIndex, 20) ? {
                        borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                        borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
                      } : {})
                    }}
                    onMouseEnter={() => handleCellHover(rowIndex, 20)}
                  >
                    <InvoiceActionMenu 
                      onAddAbove={() => {
                        const newData = [...data];
                        const newRow = { ...row, id: Date.now().toString(), sNo: row.sNo, isSelected: false };
                        newData.splice(rowIndex, 0, newRow);
                        setData(newData.map((r, i) => ({ ...r, sNo: i + 1 })));
                      }}
                      onAddBelow={() => {
                        const newData = [...data];
                        const newRow = { ...row, id: Date.now().toString(), sNo: row.sNo + 1, isSelected: false };
                        newData.splice(rowIndex + 1, 0, newRow);
                        setData(newData.map((r, i) => ({ ...r, sNo: i + 1 })));
                      }}
                      onEdit={() => activateEditByRowIndex(rowIndex, 'invoiceNumber')}
                      onDuplicate={() => {
                        const newData = [...data];
                        const newRow = { ...row, id: Date.now().toString(), isSelected: false };
                        newData.splice(rowIndex + 1, 0, newRow);
                        setData(newData.map((r, i) => ({ ...r, sNo: i + 1 })));
                      }}
                      onDelete={() => {
                        setData(data.filter(r => r.id !== row.id).map((r, i) => ({ ...r, sNo: i + 1 })));
                      }}
                    >
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </InvoiceActionMenu>
                  </div>
                  {expandedRowId === row.id && <div style={{ height: '400px', width: '100%' }} />}
                </div>
              ))}
              
              {/* Empty Row for Alignment - Right Section */}
              <div 
                className="flex items-center justify-center"
                style={{ 
                  height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                  borderLeft: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                  borderBottom: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Footer Section with Totals */}
        <div 
          className="w-full grid"
          style={{ 
            gridTemplateColumns: `${leftSectionWidth}px 1fr 50px`,
            backgroundColor: '#EBEEF7',
            height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
            minHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
            maxHeight: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
            borderTop: `2px solid ${TABLE_CONSTANTS.BORDER_COLOR}`
          }}
        >
          {/* Left Footer Section */}
          <div 
            className="flex relative"
            style={{
              boxShadow: '4px 0px 8px 0px rgba(0, 0, 0, 0.1)',
              zIndex: 10
            }}
          >
          <div 
            className="flex items-center justify-center px-2"
            style={{ 
              width: leftColumnWidths[0],
              height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
              borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
              backgroundColor: shouldHighlightColumn(0) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'transparent',
              ...(shouldHighlightColumn(0) ? {
                borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderLeft: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderRight: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
              } : {})
            }}
            onMouseEnter={() => handleCellHover(-2, 0)}
          >
            <span className="text-sm font-medium text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              
            </span>
          </div>
          <div 
            className="flex items-center justify-center px-2"
            style={{ 
              width: leftColumnWidths[1],
              height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
              borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
              backgroundColor: shouldHighlightColumn(1) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'transparent',
              ...(shouldHighlightColumn(1) ? {
                borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderLeft: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderRight: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
              } : {})
            }}
            onMouseEnter={() => handleCellHover(-2, 1)}
          >
            <span className="text-sm font-medium text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              
            </span>
          </div>
          <div 
            className="flex items-center px-2"
            style={{ 
              width: leftColumnWidths[2],
              height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
              borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
              backgroundColor: shouldHighlightColumn(2) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'transparent',
              ...(shouldHighlightColumn(2) ? {
                borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderLeft: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderRight: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
              } : {})
            }}
            onMouseEnter={() => handleCellHover(-2, 2)}
          >
            <span className="text-sm font-medium text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Total
            </span>
          </div>
          <div 
            className="flex items-center px-2"
            style={{ 
              width: leftColumnWidths[3],
              height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
              borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
              backgroundColor: shouldHighlightColumn(3) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'transparent',
              ...(shouldHighlightColumn(3) ? {
                borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderLeft: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderRight: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
              } : {})
            }}
            onMouseEnter={() => handleCellHover(-2, 3)}
          >
            <span className="text-sm font-medium text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
              {data.length} items
            </span>
          </div>
          </div>

          {/* Middle Footer Section - Scrollable with totals */}
          <div 
            ref={footerScrollRef}
            className={SCROLLBAR_CLASSES.HIDDEN}
            onScroll={handleFooterScroll}
          >
            <div 
              className="flex"
              style={{ 
                width: `${scrollWidth}px`,
                minWidth: `${scrollWidth}px`
              }}
            >
              {columnKeys.map((columnKey, index) => (
                <div 
                  key={columnKey}
                  className="flex items-center px-2"
                  style={{ 
                    width: columnWidths[index],
                    height: `${TABLE_CONSTANTS.ROW_HEIGHT}px`,
                    borderRight: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                    backgroundColor: shouldHighlightColumn(index + 3) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : 'transparent',
                    ...(shouldHighlightColumn(index + 3) ? {
                      borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                      borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                      borderLeft: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                      borderRight: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
                    } : {})
                  }}
                  onMouseEnter={() => handleCellHover(-2, index + 3)}
                >
                  <span className="text-sm font-medium text-black truncate" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
                    {columnKey === 'value' ? formatCurrencyTotals(totals.value) :
                     columnKey === 'freightAmount' ? formatCurrencyTotals(totals.freightAmount) :
                     columnKey === 'insuranceAmount' ? formatCurrencyTotals(totals.insuranceAmount) :
                     (isExport && columnKey === 'packingChargesAmount') ? formatCurrencyTotals(totals.packingChargesAmount) :
                     (!isExport && columnKey === 'miscChargesAmount') ? formatCurrencyTotals(totals.miscChargesAmount) :
                     (!isExport && columnKey === 'assessableValue') ? formatCurrencyTotals(totals.assessableValue) :
                     (!isExport && columnKey === 'duty') ? formatCurrencyTotals(totals.duty) :
                     ''}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Footer spacer */}
          <div 
            className="bg-[#EBEEF7]" 
            style={{ 
              borderLeft: `${TABLE_CONSTANTS.BORDER_WIDTH} solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
              backgroundColor: shouldHighlightColumn(20) ? TABLE_CONSTANTS.HIGHLIGHT_COLOR : '#EBEEF7',
              ...(shouldHighlightColumn(20) ? {
                borderTop: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderBottom: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderLeft: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`,
                borderRight: `2px solid ${TABLE_CONSTANTS.ROW_COLUMN_BORDER_COLOR}`
              } : {})
            }}
            onMouseEnter={() => handleCellHover(-2, 20)}
          />
        </div>
      </div>

      {/* Footer Action Controls - Show when items are selected */}
      {hasSelectedItems && (
        <div 
          className="absolute left-0 right-0 bottom-0 z-40 p-3"
          style={{ 
            background: 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
            paddingTop: '20px'
          }}
        >
          <div className="flex justify-center">
            <div style={{ width: 'auto', height: '44px' }}>
              <TableBulkActions 
                selectedCount={selectedCount} 
                onDelete={() => {
                  setData(data.filter(r => !r.isSelected).map((r, i) => ({ ...r, sNo: i + 1 })));
                  setSelectAll(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}