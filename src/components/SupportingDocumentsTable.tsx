import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, ChevronLeft, ChevronRight, ChevronDown, Maximize2, X } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetDescription } from './ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Resizable } from 're-resizable';
import { SectionHeader, FormRow, FormField } from './FigmaForm';
import Footer from '../imports/Footer';
import AddRowButton from './AddRowButton';

const inputClass = "w-full h-full !border-none !outline-none rounded-none bg-transparent px-2 text-[14px] font-medium text-[#050e25] placeholder:text-[#9497a1] transition-none focus:!ring-1 focus:!ring-[#3874FF] focus:!ring-inset focus:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] focus-visible:!ring-1 focus-visible:!ring-[#3874FF] focus-visible:!ring-inset focus-visible:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] hover:ring-1 hover:ring-[#3874FF] hover:ring-inset data-[state=open]:!ring-1 data-[state=open]:!ring-[#3874FF] data-[state=open]:!ring-inset data-[state=open]:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)]";
const dividerClass = "w-[1px] bg-[#d0d5e3] shrink-0";
import { EditingCell, SCROLLBAR_CLASSES, TABLE_CONSTANTS } from './shared/TableTypes';
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

type LevelType = 'Job Level' | 'Invoice Level' | 'Item Level';

export interface DocumentRow {
  id: string;
  sNo: number;
  documentType: string;
  documentInformation: string;
  irnNo: string;
  drnNo: string;
  issuePlace: string;
  issueDate: string;
  expiryDate: string;
  issuingPartyCode: string;
  issuingPartyName: string;
  issuingPartyID: string;
  issuingPartyBranchSrNo: string;
  issuingPartyAddress1: string;
  issuingPartyAddress2: string;
  issuingPartyCity: string;
  issuingPartyPincode: string;
  beneficiaryPartyCode: string;
  beneficiaryPartyName: string;
  beneficiaryPartyID: string;
  beneficiaryPartyBranchSrNo: string;
  beneficiaryPartyAddress1: string;
  beneficiaryPartyAddress2: string;
  beneficiaryPartyCity: string;
  beneficiaryPartyPincode: string;
  submittedBy: string;
  icegateID: string;
  fileType: string;
  invItemSrNo: string;
  isSelected: boolean;
  level: LevelType;
}

const mockData: DocumentRow[] = [
  {
    id: '1',
    sNo: 1,
    documentType: 'Commercial Invoice',
    documentInformation: 'Commercial Invoice for Electronic Components Export',
    irnNo: 'IRN123456789012345678901234567890123456',
    drnNo: 'DRN987654321098765432109876543210987654',
    issuePlace: 'Chennai',
    issueDate: '2025-01-15',
    expiryDate: '2025-12-31',
    issuingPartyCode: 'IP001',
    issuingPartyName: 'Unifo Private Limited',
    issuingPartyID: 'AABLI4333MCH001',
    issuingPartyBranchSrNo: '1',
    issuingPartyAddress1: '5th Floor, Tower C, Rattha Tek Meadows',
    issuingPartyAddress2: 'No. 51, Rajiv Gandhi Salai, Sholinganallur',
    issuingPartyCity: 'Chennai',
    issuingPartyPincode: '600119',
    beneficiaryPartyCode: 'BP001',
    beneficiaryPartyName: 'ABC Electronics Inc.',
    beneficiaryPartyID: 'ABCEL1234USA001',
    beneficiaryPartyBranchSrNo: '1',
    beneficiaryPartyAddress1: '123 Technology Drive',
    beneficiaryPartyAddress2: 'Silicon Valley, CA',
    beneficiaryPartyCity: 'San Francisco',
    beneficiaryPartyPincode: '94103',
    submittedBy: 'Admin User',
    icegateID: 'ICG123456789',
    fileType: 'PDF',
    invItemSrNo: '0/0',
    isSelected: false,
    level: 'Job Level'
  },
  {
    id: '2',
    sNo: 2,
    documentType: 'Packing List',
    documentInformation: 'Detailed Packing List for Electronic Components Shipment',
    irnNo: 'IRN234567890123456789012345678901234567',
    drnNo: 'DRN876543210987654321098765432109876543',
    issuePlace: 'Mumbai',
    issueDate: '2025-01-16',
    expiryDate: '2025-12-31',
    issuingPartyCode: 'IP002',
    issuingPartyName: 'XYZ Logistics Private Limited',
    issuingPartyID: 'XYZLO9876MUM001',
    issuingPartyBranchSrNo: '1',
    issuingPartyAddress1: 'Warehouse Complex, JNPT Area',
    issuingPartyAddress2: 'Navi Mumbai, Maharashtra',
    issuingPartyCity: 'Mumbai',
    issuingPartyPincode: '400706',
    beneficiaryPartyCode: 'BP002',
    beneficiaryPartyName: 'DEF Components Corp.',
    beneficiaryPartyID: 'DEFCO5678USA002',
    beneficiaryPartyBranchSrNo: '1',
    beneficiaryPartyAddress1: '456 Industrial Boulevard',
    beneficiaryPartyAddress2: 'Texas Industrial Zone',
    beneficiaryPartyCity: 'Houston',
    beneficiaryPartyPincode: '77001',
    submittedBy: 'Logistics Manager',
    icegateID: 'ICG234567890',
    fileType: 'PDF',
    invItemSrNo: '1/0',
    isSelected: false,
    level: 'Invoice Level'
  },
  {
    id: '3',
    sNo: 3,
    documentType: 'Bill of Lading',
    documentInformation: 'Master Bill of Lading for Ocean Freight Shipment',
    irnNo: 'IRN345678901234567890123456789012345678',
    drnNo: 'DRN765432109876543210987654321098765432',
    issuePlace: 'Chennai Port',
    issueDate: '2025-01-17',
    expiryDate: '2025-02-17',
    issuingPartyCode: 'IP003',
    issuingPartyName: 'Shipping Corporation of India',
    issuingPartyID: 'SCIPL0123CHN001',
    issuingPartyBranchSrNo: '1',
    issuingPartyAddress1: 'Chennai Port Trust Building',
    issuingPartyAddress2: 'Rajaji Salai, Chennai',
    issuingPartyCity: 'Chennai',
    issuingPartyPincode: '600001',
    beneficiaryPartyCode: 'BP003',
    beneficiaryPartyName: 'Global Freight Solutions LLC',
    beneficiaryPartyID: 'GFSOL3456USA003',
    beneficiaryPartyBranchSrNo: '1',
    beneficiaryPartyAddress1: '789 Harbor View Street',
    beneficiaryPartyAddress2: 'Port Authority Area',
    beneficiaryPartyCity: 'Los Angeles',
    beneficiaryPartyPincode: '90731',
    submittedBy: 'Shipping Agent',
    icegateID: 'ICG345678901',
    fileType: 'PDF',
    invItemSrNo: '1/1',
    isSelected: false,
    level: 'Item Level'
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

const columnHeaders = [
  'Document Information', 'IRN No.', 'DRN No', 'Issue Place', 'Issue Date', 'Expiry Date',
  'Issuing Party Code', 'Issuing Party Name', 'Issuing Party ID', 'Issuing Party Branch Sr.No', 'Issuing Party Address 1',
  'Issuing Party Address 2', 'Issuing Party City', 'Issuing Party Pincode', 'Beneficiary Party Code',
  'Beneficiary Party Name', 'Beneficiary Party ID', 'Beneficiary Party Branch Sr.No', 'Beneficiary Party Address 1',
  'Beneficiary Party Address 2', 'Beneficiary Party City', 'Beneficiary Party Pincode',
  'Submitted By', 'Icegate ID', 'File Type', 'Inv/Item Sr.No'
];
const columnKeys: (keyof DocumentRow)[] = [
  'documentInformation', 'irnNo', 'drnNo', 'issuePlace', 'issueDate', 'expiryDate',
  'issuingPartyCode', 'issuingPartyName', 'issuingPartyID', 'issuingPartyBranchSrNo', 'issuingPartyAddress1',
  'issuingPartyAddress2', 'issuingPartyCity', 'issuingPartyPincode', 'beneficiaryPartyCode',
  'beneficiaryPartyName', 'beneficiaryPartyID', 'beneficiaryPartyBranchSrNo', 'beneficiaryPartyAddress1',
  'beneficiaryPartyAddress2', 'beneficiaryPartyCity', 'beneficiaryPartyPincode',
  'submittedBy', 'icegateID', 'fileType', 'invItemSrNo'
];
const leftColumnHeaders = ['', 'Sr.No', 'Document Type'];
const editableColumns: (keyof DocumentRow)[] = ['documentType', ...columnKeys];

export default function SupportingDocumentsTable({ propData, showHeader = true, enableGrouping = false, className = '' }: { propData?: DocumentRow[]; showHeader?: boolean; enableGrouping?: boolean; className?: string }) {
  const [data, setData] = useState<DocumentRow[]>(mockData);
  
  useEffect(() => {
    if (propData && propData.length > 0) {
      setData(propData);
    }
  }, [propData]);
  
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<DocumentRow | null>(null);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (level: string) => {
    setCollapsedGroups(prev => ({ ...prev, [level]: !prev[level] }));
  };

  const [leftColumnWidths, setLeftColumnWidths] = useState<number[]>([40, 80, 200]);
  const [columnWidths, setColumnWidths] = useState<number[]>([200, 120, 120, 120, 120, 120, 140, 180, 140, 140, 200, 180, 140, 120, 140, 180, 140, 140, 200, 180, 140, 120, 140, 120, 120, 100, 120]);
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
    const groups: Record<LevelType, DocumentRow[]> = {
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
    let defaultInvItemSrNo = '0/0';

    const newRow: DocumentRow = {
      id: Date.now().toString(),
      sNo: data.length + 1,
      documentType: 'New Document',
      documentInformation: 'New Document Information',
      irnNo: 'IRN000000000000000000000000000000000000',
      drnNo: 'DRN000000000000000000000000000000000000',
      issuePlace: 'TBD',
      issueDate: '2025-01-19',
      expiryDate: '2025-12-31',
      issuingPartyCode: 'IP000',
      issuingPartyName: 'TBD',
      issuingPartyID: 'TBD000000000000',
      issuingPartyBranchSrNo: '1',
      issuingPartyAddress1: 'TBD',
      issuingPartyAddress2: 'TBD',
      issuingPartyCity: 'TBD',
      issuingPartyPincode: '000000',
      beneficiaryPartyCode: 'BP000',
      beneficiaryPartyName: 'TBD',
      beneficiaryPartyID: 'TBD000000000000',
      beneficiaryPartyBranchSrNo: '1',
      beneficiaryPartyAddress1: 'TBD',
      beneficiaryPartyAddress2: 'TBD',
      beneficiaryPartyCity: 'TBD',
      beneficiaryPartyPincode: '000000',
      submittedBy: 'New User',
      icegateID: 'ICG000000000',
      fileType: 'PDF',
      invItemSrNo: defaultInvItemSrNo,
      isSelected: false,
      level: 'Job Level'
    };
    setData(prev => [...prev, newRow].map((row, index) => ({ ...row, sNo: index + 1 })));
  };

  useEffect(() => {
    (window as any).addSupportingDocumentRow = () => handleAddRow();
    return () => {
      delete (window as any).addSupportingDocumentRow;
    };
  }, [data]);

  const handleDocumentUpdate = (field: keyof DocumentRow, value: string) => {
    if (selectedDocument) {
      setSelectedDocument({ ...selectedDocument, [field]: value });
    }
  };

  const saveDocumentDetails = () => {
    if (selectedDocument) {
      setData(prev => prev.map(row => row.id === selectedDocument.id ? selectedDocument : row));
      setSelectedDocument(null);
    }
  };

  const [expandedSections, setExpandedSections] = useState({
    docInfo: true,
    issuingParty: true,
    beneficiaryParty: true
  });
  
  const [navigationLevel, setNavigationLevel] = useState<'Job Level' | 'Invoice Level' | 'Item Level'>('Job Level');

  // Navigation Logic
  const getCurrentNavValue = (doc: DocumentRow | null, level: typeof navigationLevel) => {
    if (!doc) return '';
    const index = data.findIndex(d => d.id === doc.id);
    if (index === -1) return '';
    
    switch (level) {
      case 'Job Level': return String(index + 1);
      case 'Invoice Level': return `${index + 1}/0`;
      case 'Item Level': return `1/${index + 1}`;
      default: return String(index + 1);
    }
  };

  const navigateToDocument = (index: number) => {
    if (index >= 0 && index < data.length) {
      setSelectedDocument(data[index]);
    }
  };

  const handleNavValueChange = (val: string) => {
    let index = -1;
    switch (navigationLevel) {
      case 'Job Level': 
        index = parseInt(val) - 1;
        break;
      case 'Invoice Level':
        index = parseInt(val.split('/')[0]) - 1;
        break;
      case 'Item Level':
        index = parseInt(val.split('/')[1]) - 1;
        break;
    }
    navigateToDocument(index);
  };

  useEffect(() => {
    // Add global event listener for keyboard navigation
    // Using capture: true to handle event before parent components (e.g. tabs) see it.
    // This ensures that Shift+Arrow keys navigate rows instead of switching tabs.
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedDocument) return;
      
      if (e.shiftKey) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          // Stop propagation immediately to prevent parent handlers (like tab switching)
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          const currentIndex = data.findIndex(d => d.id === selectedDocument.id);
          // Only navigate if we have next item
          if (currentIndex < data.length - 1) {
             // We need to call navigateToDocument. Since this is inside useEffect, we need dependencies.
             // But simpler to just duplicate logic or make sure navigateToDocument is stable or use refs.
             // Given the context, we can access 'data' from closure if included in dep array.
             const nextId = data[currentIndex + 1]?.id;
             if (nextId) {
                // Manually replicate navigateToDocument logic to avoid dep issues or complex refactoring
                const doc = data.find(d => d.id === nextId);
                if (doc) setSelectedDocument(doc);
             }
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          const currentIndex = data.findIndex(d => d.id === selectedDocument.id);
          if (currentIndex > 0) {
             const prevId = data[currentIndex - 1]?.id;
             if (prevId) {
                const doc = data.find(d => d.id === prevId);
                if (doc) setSelectedDocument(doc);
             }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [selectedDocument, data]);


  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const startEdit = (rowId: string, columnKey: keyof DocumentRow, currentValue: any) => {
    if (!editableColumns.includes(columnKey)) return;
    
    setEditingCell({ rowId, columnKey });
    
    let valueToEdit = String(currentValue || '');
    if (['issueDate', 'expiryDate'].includes(columnKey)) {
       valueToEdit = formatDate(valueToEdit);
    }
    
    setEditValue(valueToEdit);
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

  useEffect(() => {
    const scrollArea = dataScrollRef.current;
    if (!scrollArea) return;

    const initialTimer = setTimeout(() => checkScrollPosition(), 100);
    
    scrollArea.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    
    return () => {
      clearTimeout(initialTimer);
      scrollArea.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => checkScrollPosition(), 100);
    return () => clearTimeout(timer);
  }, [data, columnWidths]);

  const renderEditableCell = (row: DocumentRow, columnKey: keyof DocumentRow, value: any, className: string = '', style: React.CSSProperties = {}, cellId: string = '', columnIndex: number = -1) => {
    const isEditing = editingCell?.rowId === row.id && editingCell?.columnKey === columnKey;
    const isEditable = editableColumns.includes(columnKey);
    const isRowHighlighted = shouldShowRowHighlight(row.id);
    const isCellHovered = shouldShowCellHover(cellId);

    const displayValue = ['issueDate', 'expiryDate'].includes(columnKey) ? formatDate(String(value || '')) : String(value || '');

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
        onClick={() => isEditable && startEdit(row.id, columnKey, value)} title={isEditable ? 'Click to edit' : displayValue}
        tabIndex={isEditable ? 0 : -1} onMouseEnter={() => handleCellHover(row.id, cellId, columnIndex)} onMouseLeave={handleCellLeave}>
        <span className="text-sm font-normal truncate block text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          {displayValue}
        </span>      
      </div>
    );
  };

  return (
    <div className={`h-full flex flex-col ${className}`}>
      {/* Header Section */}
      {showHeader && (
        <div className="flex items-center justify-center h-[40px] bg-[#DDE3F2] border-b border-[#d0d5e3]">
          <h2 className="text-[16px] font-semibold text-[#050e25]">Supporting Documents</h2>
        </div>
      )}

      <div className="w-full relative overflow-hidden border border-gray-300 table-component" style={{ fontFamily: 'Inter, sans-serif', height: showHeader ? 'calc(100% - 40px)' : '100%' }}>
      {/* Left Scroll Arrow */}
      {showLeftArrow && (
        <button
          onClick={(e) => { e.preventDefault(); handleScrollLeft(); }}
          onMouseDown={(e) => e.preventDefault()}
          className="z-[100] bg-white hover:bg-gray-50 rounded-full p-1 shadow-lg border border-gray-200"
          style={{ position: 'absolute', bottom: '8px', left: '8px', transition: 'background-color 0.2s, transform 0.2s', transform: 'scale(1)' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Scroll left"
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
          style={{ position: 'absolute', bottom: '8px', right: '8px', transition: 'background-color 0.2s, transform 0.2s', transform: 'scale(1)' }}
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
                  if (newWidth >= 30) handleLeftColumnResize(index, newWidth);
                }}
                minWidth={index === 0 ? 30 : index === 1 ? 60 : 140} maxWidth={index === 0 ? 80 : index === 1 ? 150 : 500}
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
                      if (newWidth >= 80) handleColumnResize(index, newWidth);
                    }}
                    minWidth={80} maxWidth={500}
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
                            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setSelectedDocument(row)}>
                              <span className="text-sm font-normal truncate block text-center text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                                {row.sNo}
                              </span>
                              <Maximize2 className="w-[18px] h-[18px] text-gray-400" />
                            </div>
                          </div>
                          
                          {renderEditableCell(row, 'documentType', row.documentType, 'flex items-center justify-start px-3 border-b border-gray-300',
                            { width: `${leftColumnWidths[2]}px`, minWidth: `${leftColumnWidths[2]}px`, maxWidth: `${leftColumnWidths[2]}px`,
                              height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                            `${row.id}-documentType`, -1)}
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
                        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setSelectedDocument(row)}>
                          <span className="text-sm font-normal truncate block text-center text-black" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                            {row.sNo}
                          </span>
                          <Maximize2 className="w-[18px] h-[18px] text-gray-400" />
                        </div>
                      </div>
                      
                      {renderEditableCell(row, 'documentType', row.documentType, 'flex items-center justify-start px-3 border-b border-gray-300',
                        { width: `${leftColumnWidths[2]}px`, minWidth: `${leftColumnWidths[2]}px`, maxWidth: `${leftColumnWidths[2]}px`,
                          height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                        `${row.id}-documentType`, -1)}
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
                {/* Empty Add Row Placeholder in Middle Section */}
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
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Delete</DropdownMenuItem>
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
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Delete</DropdownMenuItem>
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
      
      <Sheet open={!!selectedDocument} onOpenChange={(open) => !open && setSelectedDocument(null)}>
        <SheetContent 
          side="right" 
          className="w-screen max-w-none sm:max-w-none p-0 flex flex-col gap-0 bg-[#f4f4f4] z-[150] border-none outline-none"
        >
          <SheetDescription className="sr-only">Edit details for the selected supporting document</SheetDescription>
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
                <SheetTitle className="font-semibold text-[16px] text-white">Supporting Documents</SheetTitle>
              </div>

              {selectedDocument && (
                <>
                  <div className="flex items-center gap-2 ml-4">
                      {/* Level Selector */}
                      <Select value={navigationLevel} onValueChange={(v: any) => setNavigationLevel(v)}>
                        <SelectTrigger className="w-[120px] h-[32px] bg-[#37425a] border-[#545d76] text-white text-xs">
                          <SelectValue placeholder="Level" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#37425a] border-[#545d76] text-white z-[200]">
                          <SelectItem value="Job Level" className="text-white focus:bg-[#4a5568] focus:text-white">Job Level</SelectItem>
                          <SelectItem value="Invoice Level" className="text-white focus:bg-[#4a5568] focus:text-white">Invoice Level</SelectItem>
                          <SelectItem value="Item Level" className="text-white focus:bg-[#4a5568] focus:text-white">Item Level</SelectItem>
                        </SelectContent>
                      </Select>

                      {/* Value Selector */}
                      <Select 
                        value={getCurrentNavValue(selectedDocument, navigationLevel)} 
                        onValueChange={handleNavValueChange}
                      >
                        <SelectTrigger className="w-[100px] h-[32px] bg-[#37425a] border-[#545d76] text-white text-xs">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#37425a] border-[#545d76] text-white max-h-[300px] z-[200]">
                          {data.map((d, idx) => {
                             let val = '';
                             let display = '';
                             switch(navigationLevel) {
                               case 'Job Level': val = String(idx + 1); display = val; break;
                               case 'Invoice Level': val = `${idx + 1}/0`; display = val; break;
                               case 'Item Level': val = `1/${idx + 1}`; display = val; break;
                             }
                             return (
                               <SelectItem key={d.id} value={val} className="text-white focus:bg-[#4a5568] focus:text-white">
                                 {display}
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
                               const idx = data.findIndex(d => d.id === selectedDocument.id);
                               navigateToDocument(idx - 1);
                             }}
                             disabled={data.findIndex(d => d.id === selectedDocument.id) === 0}
                          >
                             <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button 
                             variant="ghost" 
                             size="icon" 
                             className="h-[28px] w-[28px] hover:bg-[#4a5568] text-white"
                             onClick={() => {
                               const idx = data.findIndex(d => d.id === selectedDocument.id);
                               navigateToDocument(idx + 1);
                             }}
                             disabled={data.findIndex(d => d.id === selectedDocument.id) === data.length - 1}
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
                        {selectedDocument.documentType}
                      </span>
                   </div>
                </>
              )}
            </div>

            {/* Right Side: Actions */}
            <div className="flex items-center gap-3">
              {/* Save Button */}
              <button 
                onClick={saveDocumentDetails}
                className="bg-[#3874ff] px-4 py-1.5 rounded-[4px] hover:bg-[#2c5bcf] transition-colors text-white text-[14px] font-semibold shadow-sm"
              >
                Save Changes
              </button>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedDocument(null)}
                className="w-[28px] h-[28px] flex items-center justify-center hover:bg-[#37425a] rounded-full transition-colors group"
              >
                <X className="w-5 h-5 text-[#CDCFD3] group-hover:text-white" />
              </button>
            </div>
          </div>
          
          {selectedDocument && (
            <>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[rgb(202,210,229)]">
              {/* Document Information Section */}
              <div className="flex flex-col w-full bg-white shadow-sm border border-[#d0d5e3]">
                 <SectionHeader title="Document Information" expanded={expandedSections.docInfo} onToggle={() => toggleSection('docInfo')} />
                 {expandedSections.docInfo && (
                   <>
                     <FormRow>
                        <FormField label="Document Info">
                           <Input 
                              value={selectedDocument.documentInformation || ''} 
                              onChange={(e) => handleDocumentUpdate('documentInformation', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                     </FormRow>
                     <FormRow>
                        <FormField label="IRN No.">
                           <Input 
                              value={selectedDocument.irnNo || ''} 
                              onChange={(e) => handleDocumentUpdate('irnNo', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                        <FormField label="DRN No.">
                           <Input 
                              value={selectedDocument.drnNo || ''} 
                              onChange={(e) => handleDocumentUpdate('drnNo', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                     </FormRow>
                     <FormRow>
                        <FormField label="Issue Place">
                           <Input 
                              value={selectedDocument.issuePlace || ''} 
                              onChange={(e) => handleDocumentUpdate('issuePlace', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                        <FormField label="Issue Date">
                           <Input 
                              type="date"
                              value={selectedDocument.issueDate || ''} 
                              onChange={(e) => handleDocumentUpdate('issueDate', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                     </FormRow>
                     <FormRow>
                        <FormField label="Expiry Date">
                           <Input 
                              type="date"
                              value={selectedDocument.expiryDate || ''} 
                              onChange={(e) => handleDocumentUpdate('expiryDate', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                        <FormField label="File Type">
                           <Input 
                              value={selectedDocument.fileType || ''} 
                              onChange={(e) => handleDocumentUpdate('fileType', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                     </FormRow>
                     <FormRow>
                        <FormField label="Submitted By">
                           <Input 
                              value={selectedDocument.submittedBy || ''} 
                              onChange={(e) => handleDocumentUpdate('submittedBy', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                        <FormField label="Icegate ID">
                           <Input 
                              value={selectedDocument.icegateID || ''} 
                              onChange={(e) => handleDocumentUpdate('icegateID', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                     </FormRow>
                     <FormRow>
                        <FormField label="Inv/Item Sr.No">
                           <Input 
                              value={selectedDocument.invItemSrNo || ''} 
                              onChange={(e) => handleDocumentUpdate('invItemSrNo', e.target.value)}
                              className={inputClass} 
                           />
                        </FormField>
                        <FormField label="">
                           {/* Empty spacer */}
                        </FormField>
                     </FormRow>
                   </>
                 )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Issuing Party Section */}
                <div className="flex flex-col w-full bg-white shadow-sm border border-[#d0d5e3]">
                   <SectionHeader title="Issuing Party" expanded={expandedSections.issuingParty} onToggle={() => toggleSection('issuingParty')} />
                   {expandedSections.issuingParty && (
                     <>
                        <FormRow>
                           <FormField label="Code & ID">
                              <div className="flex w-full h-full">
                                 <Input 
                                    placeholder="Code"
                                    value={selectedDocument.issuingPartyCode || ''} 
                                    onChange={(e) => handleDocumentUpdate('issuingPartyCode', e.target.value)}
                                    className={`${inputClass} flex-1`} 
                                 />
                                 <div className={dividerClass} />
                                 <Input 
                                    placeholder="ID"
                                    value={selectedDocument.issuingPartyID || ''} 
                                    onChange={(e) => handleDocumentUpdate('issuingPartyID', e.target.value)}
                                    className={`${inputClass} flex-1`} 
                                 />
                              </div>
                           </FormField>
                        </FormRow>
                        <FormRow>
                           <FormField label="Name">
                               <Input 
                                  value={selectedDocument.issuingPartyName || ''} 
                                  onChange={(e) => handleDocumentUpdate('issuingPartyName', e.target.value)}
                                  className={inputClass} 
                               />
                           </FormField>
                        </FormRow>
                        <FormRow>
                           <FormField label="Address 1">
                               <Input 
                                  value={selectedDocument.issuingPartyAddress1 || ''} 
                                  onChange={(e) => handleDocumentUpdate('issuingPartyAddress1', e.target.value)}
                                  className={inputClass} 
                               />
                           </FormField>
                        </FormRow>
                        <FormRow>
                           <FormField label="Address 2">
                               <Input 
                                  value={selectedDocument.issuingPartyAddress2 || ''} 
                                  onChange={(e) => handleDocumentUpdate('issuingPartyAddress2', e.target.value)}
                                  className={inputClass} 
                               />
                           </FormField>
                        </FormRow>
                        <FormRow>
                           <FormField label="City & Pin">
                              <div className="flex w-full h-full">
                                 <Input 
                                    placeholder="City"
                                    value={selectedDocument.issuingPartyCity || ''} 
                                    onChange={(e) => handleDocumentUpdate('issuingPartyCity', e.target.value)}
                                    className={`${inputClass} flex-1`} 
                                 />
                                 <div className={dividerClass} />
                                 <Input 
                                    placeholder="Pin"
                                    value={selectedDocument.issuingPartyPincode || ''} 
                                    onChange={(e) => handleDocumentUpdate('issuingPartyPincode', e.target.value)}
                                    className={`${inputClass} w-[80px]`} 
                                 />
                              </div>
                           </FormField>
                        </FormRow>
                     </>
                   )}
                </div>

                {/* Beneficiary Party Section */}
                <div className="flex flex-col w-full bg-white shadow-sm border border-[#d0d5e3]">
                   <SectionHeader title="Beneficiary Party" expanded={expandedSections.beneficiaryParty} onToggle={() => toggleSection('beneficiaryParty')} />
                   {expandedSections.beneficiaryParty && (
                     <>
                        <FormRow>
                           <FormField label="Code & ID">
                              <div className="flex w-full h-full">
                                 <Input 
                                    placeholder="Code"
                                    value={selectedDocument.beneficiaryPartyCode || ''} 
                                    onChange={(e) => handleDocumentUpdate('beneficiaryPartyCode', e.target.value)}
                                    className={`${inputClass} flex-1`} 
                                 />
                                 <div className={dividerClass} />
                                 <Input 
                                    placeholder="ID"
                                    value={selectedDocument.beneficiaryPartyID || ''} 
                                    onChange={(e) => handleDocumentUpdate('beneficiaryPartyID', e.target.value)}
                                    className={`${inputClass} flex-1`} 
                                 />
                              </div>
                           </FormField>
                        </FormRow>
                        <FormRow>
                           <FormField label="Name">
                               <Input 
                                  value={selectedDocument.beneficiaryPartyName || ''} 
                                  onChange={(e) => handleDocumentUpdate('beneficiaryPartyName', e.target.value)}
                                  className={inputClass} 
                               />
                           </FormField>
                        </FormRow>
                        <FormRow>
                           <FormField label="Address 1">
                               <Input 
                                  value={selectedDocument.beneficiaryPartyAddress1 || ''} 
                                  onChange={(e) => handleDocumentUpdate('beneficiaryPartyAddress1', e.target.value)}
                                  className={inputClass} 
                               />
                           </FormField>
                        </FormRow>
                        <FormRow>
                           <FormField label="Address 2">
                               <Input 
                                  value={selectedDocument.beneficiaryPartyAddress2 || ''} 
                                  onChange={(e) => handleDocumentUpdate('beneficiaryPartyAddress2', e.target.value)}
                                  className={inputClass} 
                               />
                           </FormField>
                        </FormRow>
                        <FormRow>
                           <FormField label="City & Pin">
                              <div className="flex w-full h-full">
                                 <Input 
                                    placeholder="City"
                                    value={selectedDocument.beneficiaryPartyCity || ''} 
                                    onChange={(e) => handleDocumentUpdate('beneficiaryPartyCity', e.target.value)}
                                    className={`${inputClass} flex-1`} 
                                 />
                                 <div className={dividerClass} />
                                 <Input 
                                    placeholder="Pin"
                                    value={selectedDocument.beneficiaryPartyPincode || ''} 
                                    onChange={(e) => handleDocumentUpdate('beneficiaryPartyPincode', e.target.value)}
                                    className={`${inputClass} w-[80px]`} 
                                 />
                              </div>
                           </FormField>
                        </FormRow>
                     </>
                   )}
                </div>
              </div>
            </div>
            <Footer />
          </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}