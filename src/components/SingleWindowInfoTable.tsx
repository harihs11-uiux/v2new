import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Resizable } from 're-resizable';
import { 
  createScrollSyncHandlers, 
  createHoverHandlers, 
  getColumnHeaderHoverStyles,
  getCellBorderStyles,
  getCellBackgroundColor,
  calculateTotalWidth
} from './shared/TableUtils';
import InvoiceSeparator from './InvoiceSeparator';
import ItemSeparator from './ItemSeparator';
import AddRowButton from './AddRowButton';
import { InvoiceActionMenu } from './InvoiceActionMenu';
import { ItemActionMenu } from './ItemActionMenu';

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
  LEFT_COLUMN_MIN_WIDTHS: [40, 50, 80, 100] // Checkbox, S.No, Sub It. SNo, PGA Code
};

// CSS classes for scrollbar control
const SCROLLBAR_CLASSES = {
  HIDDEN: 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
  VISIBLE: 'overflow-auto [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500'
};

export interface SingleWindowInfoRow {
  id: string;
  sNo: number;
  itemNo: string; // Used for grouping (e.g., '1', '2')
  subItSNo: string; // Used for display (e.g., '1', '2', '3')
  pgaCode: string;
  infoType: string;
  infoQfr: string;
  infoCode: string;
  infoText: string;
  infoDate: string;
  infoMsr: string;
  infoUqc: string;
  mandatory: string;
  // Production specific fields
  batchIdentifier?: string;
  batchQty?: string;
  unitQtyCode?: string;
  dateOfMfg?: string;
  dateOfExpiry?: string;
  bestBefore?: string;
  
  // Control specific fields
  controlTypeCode?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  resultCode?: string;
  resultText?: string;
  
  // Constituent specific fields
  constituentSrNo?: string;
  elementName?: string;
  constituentCode?: string;
  percentage?: string;
  yieldPercentage?: string;
  activeIngredient?: string;
  
  invoiceNo: string;
  invoiceDate?: string;
  invoiceAmount?: string;
  isSelected: boolean;
}

interface EditingCell {
  rowId: string;
  columnKey: keyof SingleWindowInfoRow;
}

interface HoverState {
  rowId: string | null;
  cellId: string | null;
  columnIndex: number | null;
}

const mockData: SingleWindowInfoRow[] = [
  // Invoice 1 - Item 1 (4 rows)
  {
    id: '1',
    sNo: 1,
    itemNo: '1',
    subItSNo: '1',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-001',
    batchQty: '100',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-01-01',
    dateOfExpiry: '2025-01-01',
    bestBefore: '2025-01-01',
    // Control
    controlTypeCode: 'CTRL-A1',
    location: 'Warehouse A',
    startDate: '2024-01-01',
    endDate: '2024-01-15',
    resultCode: 'PASS',
    resultText: 'All checks passed',
    // Constituent
    constituentSrNo: 'C001',
    elementName: 'Active Compound X',
    constituentCode: 'ACX-99',
    percentage: '45.5%',
    yieldPercentage: '98%',
    activeIngredient: 'Yes',
    invoiceNo: '1',
    invoiceDate: '22/04/2025',
    invoiceAmount: 'EUR 22,800.00',
    isSelected: false
  },
  {
    id: '2',
    sNo: 2,
    itemNo: '1',
    subItSNo: '2',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-002',
    batchQty: '150',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-02-01',
    dateOfExpiry: '2025-02-01',
    bestBefore: '2025-02-01',
    // Control
    controlTypeCode: 'CTRL-A2',
    location: 'Warehouse B',
    startDate: '2024-02-01',
    endDate: '2024-02-15',
    resultCode: 'PENDING',
    resultText: 'Under review',
    // Constituent
    constituentSrNo: 'C002',
    elementName: 'Stabilizer Y',
    constituentCode: 'STY-22',
    percentage: '12.3%',
    yieldPercentage: '95%',
    activeIngredient: 'No',
    invoiceNo: '1',
    invoiceDate: '22/04/2025',
    invoiceAmount: 'EUR 22,800.00',
    isSelected: false
  },
  {
    id: '3',
    sNo: 3,
    itemNo: '1',
    subItSNo: '3',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-003',
    batchQty: '200',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-03-01',
    dateOfExpiry: '2025-03-01',
    bestBefore: '2025-03-01',
    // Control
    controlTypeCode: 'CTRL-B1',
    location: 'Main Lab',
    startDate: '2024-03-01',
    endDate: '2024-03-10',
    resultCode: 'FAIL',
    resultText: 'Improper sealing',
    // Constituent
    constituentSrNo: 'C003',
    elementName: 'Preservative Z',
    constituentCode: 'PRZ-44',
    percentage: '2.5%',
    yieldPercentage: '99%',
    activeIngredient: 'No',
    invoiceNo: '1',
    invoiceDate: '22/04/2025',
    invoiceAmount: 'EUR 22,800.00',
    isSelected: false
  },
  {
    id: '4',
    sNo: 4,
    itemNo: '1',
    subItSNo: '4',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-004',
    batchQty: '80',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-04-01',
    dateOfExpiry: '2025-04-01',
    bestBefore: '2025-04-01',
    // Control
    controlTypeCode: 'CTRL-C1',
    location: 'Dock 4',
    startDate: '2024-04-05',
    endDate: '2024-04-06',
    resultCode: 'PASS',
    resultText: 'Ready for shipping',
    // Constituent
    constituentSrNo: 'C004',
    elementName: 'Colorant Blue',
    constituentCode: 'CBL-01',
    percentage: '0.2%',
    yieldPercentage: '100%',
    activeIngredient: 'No',
    invoiceNo: '1',
    invoiceDate: '22/04/2025',
    invoiceAmount: 'EUR 22,800.00',
    isSelected: false
  },
  // Invoice 2 - Item 1 (4 rows)
  {
    id: '5',
    sNo: 5,
    itemNo: '1',
    subItSNo: '1',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-005',
    batchQty: '250',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-05-01',
    dateOfExpiry: '2025-05-01',
    bestBefore: '2025-05-01',
    // Control
    controlTypeCode: 'CTRL-D1',
    location: 'Warehouse C',
    startDate: '2024-05-01',
    endDate: '2024-05-15',
    resultCode: 'PASS',
    resultText: 'Approved',
    // Constituent
    constituentSrNo: 'C005',
    elementName: 'Binder A',
    constituentCode: 'BND-11',
    percentage: '5.0%',
    yieldPercentage: '97%',
    activeIngredient: 'No',
    invoiceNo: '2',
    invoiceDate: '22/04/2025',
    invoiceAmount: 'EUR 22,800.00',
    isSelected: false
  },
  {
    id: '6',
    sNo: 6,
    itemNo: '1',
    subItSNo: '2',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-006',
    batchQty: '300',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-06-01',
    dateOfExpiry: '2025-06-01',
    bestBefore: '2025-06-01',
    // Control
    controlTypeCode: 'CTRL-D2',
    location: 'Warehouse C',
    startDate: '2024-06-01',
    endDate: '2024-06-15',
    resultCode: 'FAIL',
    resultText: 'Weight mismatch',
    // Constituent
    constituentSrNo: 'C006',
    elementName: 'Filler B',
    constituentCode: 'FLB-05',
    percentage: '25.0%',
    yieldPercentage: '100%',
    activeIngredient: 'No',
    invoiceNo: '2',
    invoiceDate: '22/04/2025',
    invoiceAmount: 'EUR 22,800.00',
    isSelected: false
  },
  {
    id: '7',
    sNo: 7,
    itemNo: '1',
    subItSNo: '3',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    invoiceNo: '2',
    invoiceDate: '22/04/2025',
    invoiceAmount: 'EUR 22,800.00',
    isSelected: false
  },
  {
    id: '8',
    sNo: 8,
    itemNo: '1',
    subItSNo: '4',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    invoiceNo: '2',
    invoiceDate: '22/04/2025',
    invoiceAmount: 'EUR 22,800.00',
    isSelected: false
  },
  // Invoice 3 - Item 1 (2 rows)
  {
    id: '9',
    sNo: 9,
    itemNo: '1',
    subItSNo: '1',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-009',
    batchQty: '120',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-09-01',
    dateOfExpiry: '2025-09-01',
    bestBefore: '2025-09-01',
    // Control
    controlTypeCode: 'CTRL-E1',
    location: 'Warehouse D',
    startDate: '2024-09-01',
    endDate: '2024-09-15',
    resultCode: 'PASS',
    resultText: 'Verified',
    // Constituent
    constituentSrNo: 'C009',
    elementName: 'Catalyst C',
    constituentCode: 'CAT-33',
    percentage: '1.5%',
    yieldPercentage: '96%',
    activeIngredient: 'No',
    invoiceNo: '3',
    invoiceDate: '23/04/2025',
    invoiceAmount: 'USD 15,400.00',
    isSelected: false
  },
  {
    id: '10',
    sNo: 10,
    itemNo: '1',
    subItSNo: '2',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-010',
    batchQty: '180',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-10-01',
    dateOfExpiry: '2025-10-01',
    bestBefore: '2025-10-01',
    // Control
    controlTypeCode: 'CTRL-E2',
    location: 'Warehouse D',
    startDate: '2024-10-01',
    endDate: '2024-10-15',
    resultCode: 'PASS',
    resultText: 'Verified',
    // Constituent
    constituentSrNo: 'C010',
    elementName: 'Solvent D',
    constituentCode: 'SOL-44',
    percentage: '30.0%',
    yieldPercentage: '99%',
    activeIngredient: 'No',
    invoiceNo: '3',
    invoiceDate: '23/04/2025',
    invoiceAmount: 'USD 15,400.00',
    isSelected: false
  },
  // Invoice 4 - Item 1 (2 rows)
  {
    id: '11',
    sNo: 11,
    itemNo: '1',
    subItSNo: '1',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-011',
    batchQty: '90',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-11-01',
    dateOfExpiry: '2025-11-01',
    bestBefore: '2025-11-01',
    // Control
    controlTypeCode: 'CTRL-F1',
    location: 'Warehouse E',
    startDate: '2024-11-01',
    endDate: '2024-11-15',
    resultCode: 'PASS',
    resultText: 'Confirmed',
    // Constituent
    constituentSrNo: 'C011',
    elementName: 'Modifier E',
    constituentCode: 'MOD-55',
    percentage: '4.0%',
    yieldPercentage: '98%',
    activeIngredient: 'No',
    invoiceNo: '4',
    invoiceDate: '23/04/2025',
    invoiceAmount: 'GBP 12,200.00',
    isSelected: false
  },
  {
    id: '12',
    sNo: 12,
    itemNo: '1',
    subItSNo: '2',
    pgaCode: 'AQCS - Animal Quarantine And Certification Services',
    infoType: 'CHR - Item Characteristics',
    infoQfr: 'Breed',
    infoCode: 'Yes',
    infoText: 'Text',
    infoDate: '15/10/2025',
    infoMsr: '42323',
    infoUqc: 'KGS',
    mandatory: 'Mandatory',
    // Production
    batchIdentifier: 'BATCH-012',
    batchQty: '210',
    unitQtyCode: 'KGS',
    dateOfMfg: '2024-12-01',
    dateOfExpiry: '2025-12-01',
    bestBefore: '2025-12-01',
    // Control
    controlTypeCode: 'CTRL-F2',
    location: 'Warehouse E',
    startDate: '2024-12-01',
    endDate: '2024-12-15',
    resultCode: 'FAIL',
    resultText: 'Incomplete',
    // Constituent
    constituentSrNo: 'C012',
    elementName: 'Hardener F',
    constituentCode: 'HRD-66',
    percentage: '10.0%',
    yieldPercentage: '95%',
    activeIngredient: 'Yes',
    invoiceNo: '4',
    invoiceDate: '23/04/2025',
    invoiceAmount: 'GBP 12,200.00',
    isSelected: false
  }
];

export default function SingleWindowInfoTable({ title = "Single window Info" }: { title?: string }) {
  const [data, setData] = useState<SingleWindowInfoRow[]>(mockData);
  const [selectAll, setSelectAll] = useState(false);
  
  // Determine if this is the Production table based on the title
  const isProduction = title.includes("Production");
  const isControl = title.includes("Control");
  const isConstituent = title.includes("Constituent");
  
  const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    const invoices = new Set(mockData.map(d => d.invoiceNo));
    invoices.forEach(inv => {
      initial[inv] = inv !== '1'; // Collapse all except '1'
    });
    return initial;
  });

  const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    mockData.forEach(d => {
      const key = `${d.invoiceNo}-${d.itemNo}`;
      if (key !== '1-1') {
        initial[key] = true; // Collapse all except '1-1'
      }
    });
    return initial;
  });
  
  // Left section column widths: Checkbox, S.No, Sub It. SNo, PGA Code/Batch Identifier
  const [leftColumnWidths, setLeftColumnWidths] = useState<number[]>(
    isProduction ? [40, 50, 80, 250] : 
    isControl ? [40, 50, 80, 150] : 
    isConstituent ? [40, 50, 80, 180] :
    [40, 50, 80, 400]
  );
  
  // Middle section column widths - adjust based on mode
  const [columnWidths, setColumnWidths] = useState<number[]>(
    isProduction ? [150, 150, 180, 180, 400] : // Batch Qty, Unit, Mfg, Expiry, Best Before
    isControl ? [200, 150, 150, 120, 300] : // Location, Start Date, End Date, Result Code, Result Text
    isConstituent ? [300, 150, 150, 200, 250] : // Element Name, Code, Percentage, Yield, Active Ingredient
    [200, 200, 100, 150, 150, 100, 100, 150] // Default columns
  );
  
  // Update column widths if title changes
  useEffect(() => {
    if (isProduction) {
      setLeftColumnWidths([40, 50, 80, 250]);
      setColumnWidths([150, 150, 180, 180, 400]);
    } else if (isControl) {
      setLeftColumnWidths([40, 50, 80, 150]);
      setColumnWidths([200, 150, 150, 120, 300]);
    } else if (isConstituent) {
      setLeftColumnWidths([40, 50, 80, 180]);
      setColumnWidths([300, 150, 150, 200, 250]);
    } else {
      setLeftColumnWidths([40, 50, 80, 400]);
      setColumnWidths([200, 200, 100, 150, 150, 100, 100, 150]);
    }
  }, [isProduction, isControl, isConstituent]);

  // Group data by Invoice No
  const groupedData = React.useMemo(() => {
    const groups: Record<string, SingleWindowInfoRow[]> = {};
    data.forEach(row => {
      if (!groups[row.invoiceNo]) {
        groups[row.invoiceNo] = [];
      }
      groups[row.invoiceNo].push(row);
    });
    return groups;
  }, [data]);

  const toggleInvoiceCollapse = (invoiceNo: string) => {
    setCollapsedInvoices(prev => ({
      ...prev,
      [invoiceNo]: !prev[invoiceNo]
    }));
  };

  const toggleItemCollapse = (invoiceNo: string, itemNo: string) => {
    const key = `${invoiceNo}-${itemNo}`;
    setCollapsedItems(prev => ({
      ...prev,
      [key]: !prev[key]
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

  const checkScrollPosition = () => {
    if (!dataScrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = dataScrollRef.current;
    setShowLeftArrow(scrollLeft > 5);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
  };

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

  const { handleHeaderScroll, handleDataScroll } = createScrollSyncHandlers(headerScrollRef, dataScrollRef, footerScrollRef);
  
  const [hoverState, setHoverState] = useState<HoverState>({ 
    rowId: null, 
    cellId: null, 
    columnIndex: null 
  });

  const { handleCellHover, handleCellLeave } = createHoverHandlers(setHoverState);
  
  const editableColumns: (keyof SingleWindowInfoRow)[] = isProduction 
    ? ['batchIdentifier', 'batchQty', 'unitQtyCode', 'dateOfMfg', 'dateOfExpiry', 'bestBefore']
    : isControl
    ? ['controlTypeCode', 'location', 'startDate', 'endDate', 'resultCode', 'resultText']
    : isConstituent
    ? ['constituentSrNo', 'elementName', 'constituentCode', 'percentage', 'yieldPercentage', 'activeIngredient']
    : ['subItSNo', 'pgaCode', 'infoType', 'infoQfr', 'infoCode', 'infoText', 'infoDate', 'infoMsr', 'infoUqc', 'mandatory'];

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

  const handleAddRow = (targetInvoiceNo: string, targetItemNo: string) => {
    const invoiceNo = targetInvoiceNo;
    
    // Find the next subItSNo for this group
    const groupRows = data.filter(d => d.invoiceNo === targetInvoiceNo && d.itemNo === targetItemNo);
    const maxSubItSNo = groupRows.length > 0 
      ? Math.max(...groupRows.map(r => parseInt(r.subItSNo || '0', 10))) 
      : 0;
    const newSubItSNo = (maxSubItSNo + 1).toString();

    const newRow: SingleWindowInfoRow = {
      id: Date.now().toString(),
      sNo: 0, // Placeholder
      itemNo: targetItemNo,
      subItSNo: newSubItSNo,
      pgaCode: '',
      infoType: '',
      infoQfr: '',
      infoCode: '',
      infoText: '',
      infoDate: '',
      infoMsr: '',
      infoUqc: '',
      mandatory: '',
      invoiceNo: invoiceNo,
      // Inherit invoice details from the group if available
      invoiceDate: data.find(d => d.invoiceNo === invoiceNo)?.invoiceDate,
      invoiceAmount: data.find(d => d.invoiceNo === invoiceNo)?.invoiceAmount,
      isSelected: false
    };

    // Find insertion index: after the last row of the target group
    let insertIndex = -1;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].invoiceNo === targetInvoiceNo && data[i].itemNo === targetItemNo) {
        insertIndex = i + 1;
        break;
      }
    }

    if (insertIndex === -1) {
      // If group not found (shouldn't happen with button placement), append to end
      insertIndex = data.length;
    }

    const newData = [
      ...data.slice(0, insertIndex),
      newRow,
      ...data.slice(insertIndex)
    ].map((row, index) => ({
      ...row,
      sNo: index + 1
    }));

    setData(newData);
    
    // Ensure the group is expanded
    if (collapsedInvoices[invoiceNo]) {
      setCollapsedInvoices(prev => ({ ...prev, [invoiceNo]: false }));
    }
    const itemKey = `${invoiceNo}-${targetItemNo}`;
    if (collapsedItems[itemKey]) {
      setCollapsedItems(prev => ({ ...prev, [itemKey]: false }));
    }
  };

  const handleAddRowAbove = (targetInvoiceNo: string, targetItemNo: string, subItSNo: string) => {
    setData(prev => {
      const rowIndex = prev.findIndex(r => r.invoiceNo === targetInvoiceNo && r.itemNo === targetItemNo && r.subItSNo === subItSNo);
      if (rowIndex === -1) return prev;
      
      const newRow: SingleWindowInfoRow = {
        ...prev[rowIndex],
        id: Date.now().toString(),
        isSelected: false,
        // Reset specific fields
        pgaCode: '', infoType: '', infoQfr: '', infoCode: '', infoText: '', infoDate: '', infoMsr: '', infoUqc: '', mandatory: ''
      };
      
      const newData = [...prev];
      newData.splice(rowIndex, 0, newRow);
      
      // Renumber subItSNo for this group
      let subCount = 0;
      const renumbered = newData.map(row => {
        if (row.invoiceNo === targetInvoiceNo && row.itemNo === targetItemNo) {
          subCount++;
          return { ...row, subItSNo: subCount.toString() };
        }
        return row;
      });

      // Fix global sNo
      return renumbered.map((row, index) => ({ ...row, sNo: index + 1 }));
    });
  };

  const handleDuplicateItem = (rowId: string) => {
    setData(prev => {
      const rowIndex = prev.findIndex(r => r.id === rowId);
      if (rowIndex === -1) return prev;
      
      const rowToDuplicate = prev[rowIndex];
      const newRow: SingleWindowInfoRow = {
        ...rowToDuplicate,
        id: Date.now().toString(),
        isSelected: false
      };
      
      const newData = [...prev];
      newData.splice(rowIndex + 1, 0, newRow);
      
      let subCount = 0;
      const renumbered = newData.map(row => {
        if (row.invoiceNo === rowToDuplicate.invoiceNo && row.itemNo === rowToDuplicate.itemNo) {
          subCount++;
          return { ...row, subItSNo: subCount.toString() };
        }
        return row;
      });

      return renumbered.map((row, index) => ({ ...row, sNo: index + 1 }));
    });
  };

  const handleDeleteItem = (rowId: string) => {
    setData(prev => {
      const rowToDelete = prev.find(r => r.id === rowId);
      if (!rowToDelete) return prev;
      
      const newData = prev.filter(r => r.id !== rowId);
      
      let subCount = 0;
      const renumbered = newData.map(row => {
        if (row.invoiceNo === rowToDelete.invoiceNo && row.itemNo === rowToDelete.itemNo) {
          subCount++;
          return { ...row, subItSNo: subCount.toString() };
        }
        return row;
      });

      return renumbered.map((row, index) => ({ ...row, sNo: index + 1 }));
    });
  };

  const startEdit = (rowId: string, columnKey: keyof SingleWindowInfoRow, currentValue: any) => {
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

  const shouldShowRowHighlight = (rowId: string) => hoverState.rowId === rowId || editingCell?.rowId === rowId;
  const shouldShowCellHover = (cellId: string) => hoverState.cellId === cellId;
  const shouldShowColumnHeaderHover = (columnIndex: number) => hoverState.columnIndex === columnIndex;

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

  const leftSectionWidth = calculateTotalWidth(leftColumnWidths);
  const scrollWidth = calculateTotalWidth(columnWidths);

  const columnHeaders = isProduction 
    ? [
        <span key="batchQty">Batch Qty <span className="text-red-500">*</span></span>,
        <span key="unitQtyCode">Unit Qty Code <span className="text-red-500">*</span></span>,
        'Date of Mfg',
        'Date of Expiry',
        'Best Before'
      ]
    : isControl
    ? [
        <span key="location">Location <span className="text-red-500">*</span></span>,
        'Start Date',
        'End Date',
        'Result Code',
        'Result Text'
      ]
    : isConstituent
    ? [
        <span key="elementName">Element Name <span className="text-red-500">*</span></span>,
        'Code',
        'Percentage',
        'Yield Percentage',
        'Active Ingredient'
      ]
    : [
        <span key="infotype">Info Type <span className="text-red-500">*</span></span>,
        <span key="infoqfr">Info Qfr <span className="text-red-500">*</span></span>,
        <span key="infocode">Info Code <span className="text-red-500">*</span></span>,
        'Info Text',
        'Info Date',
        'Info msr',
        'Info UQC',
        'Mandatory'
      ];
  
  const columnKeys: (keyof SingleWindowInfoRow)[] = isProduction
    ? ['batchQty', 'unitQtyCode', 'dateOfMfg', 'dateOfExpiry', 'bestBefore']
    : isControl
    ? ['location', 'startDate', 'endDate', 'resultCode', 'resultText']
    : isConstituent
    ? ['elementName', 'constituentCode', 'percentage', 'yieldPercentage', 'activeIngredient']
    : ['infoType', 'infoQfr', 'infoCode', 'infoText', 'infoDate', 'infoMsr', 'infoUqc', 'mandatory'];
  
  const leftColumnHeaders = [
    '', 
    'S.No', 
    'Sub It. SNo', 
    isProduction ? 'Batch Identifier' : isControl ? 'Control Type Code' : isConstituent ? 'Constituent Sr No' : 'PGA Code'
  ];

  const renderEditableCell = (
    row: SingleWindowInfoRow, 
    columnKey: keyof SingleWindowInfoRow, 
    value: any,
    className: string = '',
    style: React.CSSProperties = {},
    cellId: string = '',
    columnIndex: number = -1
  ) => {
    const isEditing = editingCell?.rowId === row.id && editingCell?.columnKey === columnKey;
    const isEditable = editableColumns.includes(columnKey);
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
          {['infoType', 'infoQfr', 'infoCode', 'infoUqc', 'pgaCode', 'unitQtyCode', 'dateOfMfg', 'dateOfExpiry', 'bestBefore'].includes(columnKey) && (
            <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
          )}
        </span>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-center h-[40px] bg-[#DDE3F2] border-b border-[#d0d5e3]">
        <h2 className="text-[16px] font-semibold text-[#050e25] flex items-center gap-2">
          {title}
        </h2>
      </div>

      <div className="w-full relative overflow-hidden border border-gray-300 table-component" style={{ fontFamily: 'Inter, sans-serif', height: 'calc(100% - 40px)' }}>
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
                      <span className="text-sm font-medium truncate text-black" title={typeof header === 'string' ? header : undefined} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>{header}</span>}
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
                        <span className="text-sm font-medium truncate text-black" title={typeof header === 'string' ? header : undefined} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>{header}</span>
                      </div>
                    </Resizable>
                  );
                })}
              </div>
            </div>
            
            {/* Right Header (Empty for now) */}
            <div className="flex items-center justify-center">
            </div>
          </div>

          {/* Data Body */}
          <div className="flex-1 overflow-y-auto grid" style={{ gridTemplateColumns: `${leftSectionWidth}px 1fr 50px` }}>
            {/* Left Data */}
            <div className="text-black flex flex-col overflow-hidden" style={{ position: 'relative', boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#FFFFFF' }}>
              <div className="flex-1">
                {Object.keys(groupedData).map((invoiceNo) => {
                  const firstRow = groupedData[invoiceNo][0];
                  return (
                  <React.Fragment key={`left-group-${invoiceNo}`}>
                    {/* Invoice Separator */}
                    <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                      <InvoiceSeparator 
                        invoiceNumber={invoiceNo}
                        invoiceId="986758498435345" // Hardcoded for now as it was part of the string before
                        invoiceDate={firstRow.invoiceDate}
                        invoiceAmount={firstRow.invoiceAmount}
                        isCollapsed={collapsedInvoices[invoiceNo]} 
                        onToggleCollapse={() => toggleInvoiceCollapse(invoiceNo)} 
                      />
                    </div>
                    
                    {!collapsedInvoices[invoiceNo] && (() => {
                      // Group by itemNo for ItemSeparator
                      const itemGroups: Record<string, SingleWindowInfoRow[]> = {};
                      groupedData[invoiceNo].forEach(row => {
                        const itemNo = row.itemNo || 'Unknown';
                        if (!itemGroups[itemNo]) itemGroups[itemNo] = [];
                        itemGroups[itemNo].push(row);
                      });

                      return Object.keys(itemGroups).map(itemNo => {
                        const isItemCollapsed = collapsedItems[`${invoiceNo}-${itemNo}`];
                        
                        return (
                          <React.Fragment key={`left-item-${invoiceNo}-${itemNo}`}>
                             {/* Item Separator */}
                             <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                               <ItemSeparator 
                                 text={`${invoiceNo}/${itemNo}`}
                                 isCollapsed={isItemCollapsed}
                                 onToggleCollapse={() => toggleItemCollapse(invoiceNo, itemNo)}
                               />
                             </div>

                             {!isItemCollapsed && itemGroups[itemNo].map((row) => {
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

                                   {/* Sub It. SNo */}
                                   {renderEditableCell(row, 'subItSNo', row.subItSNo, 'flex items-center justify-start px-3 border-b border-gray-300',
                                     { width: `${leftColumnWidths[2]}px`, minWidth: `${leftColumnWidths[2]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                                     `${row.id}-subItSNo`, -1)}
                                   
                                   {/* PGA Code or Batch Identifier or Control Type Code or Constituent Sr No */}
                                   {isProduction ? (
                                     renderEditableCell(row, 'batchIdentifier', row.batchIdentifier, 'flex items-center justify-start px-3 border-b border-gray-300',
                                       { width: `${leftColumnWidths[3]}px`, minWidth: `${leftColumnWidths[3]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                                       `${row.id}-batchIdentifier`, -1)
                                   ) : isControl ? (
                                     renderEditableCell(row, 'controlTypeCode', row.controlTypeCode, 'flex items-center justify-start px-3 border-b border-gray-300',
                                       { width: `${leftColumnWidths[3]}px`, minWidth: `${leftColumnWidths[3]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                                       `${row.id}-controlTypeCode`, -1)
                                   ) : isConstituent ? (
                                     renderEditableCell(row, 'constituentSrNo', row.constituentSrNo, 'flex items-center justify-start px-3 border-b border-gray-300',
                                       { width: `${leftColumnWidths[3]}px`, minWidth: `${leftColumnWidths[3]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                                       `${row.id}-constituentSrNo`, -1)
                                   ) : (
                                     renderEditableCell(row, 'pgaCode', row.pgaCode, 'flex items-center justify-start px-3 border-b border-gray-300',
                                       { width: `${leftColumnWidths[3]}px`, minWidth: `${leftColumnWidths[3]}px`, height: TABLE_CONSTANTS.ROW_HEIGHT, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent' },
                                       `${row.id}-pgaCode`, -1)
                                   )}
                                 </div>
                               );
                             })}
                             
                             {/* Add Row Button - Per Item Group */}
                             {!isItemCollapsed && (
                               <div className="flex" style={{ width: `${leftSectionWidth}px`, paddingLeft: '8px', height: '36px' }}>
                                 <AddRowButton onAddRow={() => handleAddRow(invoiceNo, itemNo)} />
                               </div>
                             )}
                          </React.Fragment>
                        );
                      });
                    })()}
                    {/* Add Row Button removed from here - moved to inside item loop */}
                  </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Middle Data */}
            <div className="text-black overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <div ref={dataScrollRef} className={`h-full ${SCROLLBAR_CLASSES.HIDDEN}`} style={{ scrollBehavior: 'smooth' }} onScroll={handleDataScroll}>
                <div className="flex-1">
                  {Object.keys(groupedData).map((invoiceNo) => (
                    <React.Fragment key={`middle-group-${invoiceNo}`}>
                      {/* Spacer for Header */}
                      <div style={{ height: '35px', width: `${scrollWidth}px`, minWidth: '100%', backgroundColor: '#f1f4f8', borderBottom: '1px solid #D0D5E3', borderTop: '1px solid #D0D5E3' }} /> 
                      
                      {!collapsedInvoices[invoiceNo] && (() => {
                        // Group by itemNo for ItemSeparator logic
                        const itemGroups: Record<string, SingleWindowInfoRow[]> = {};
                        groupedData[invoiceNo].forEach(row => {
                          const itemNo = row.itemNo || 'Unknown';
                          if (!itemGroups[itemNo]) itemGroups[itemNo] = [];
                          itemGroups[itemNo].push(row);
                        });

                        return Object.keys(itemGroups).map(itemNo => {
                          const isItemCollapsed = collapsedItems[`${invoiceNo}-${itemNo}`];
                          
                          return (
                            <React.Fragment key={`middle-item-${invoiceNo}-${itemNo}`}>
                               {/* Item Separator Spacer */}
                               <div style={{ height: '35px', width: '100%', backgroundColor: '#ebeef7', borderBottom: '1px solid #D0D5E3', borderTop: '1px solid #D0D5E3' }} />

                               {!isItemCollapsed && itemGroups[itemNo].map((row) => {
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

                               {/* Spacer for Add Row Button */}
                               {!isItemCollapsed && (
                                 <div style={{ height: '36px' }} />
                               )}
                            </React.Fragment>
                          );
                        });
                      })()}

                      {/* Spacer for Add Row removed from here */}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Data */}
            <div className="text-black flex flex-col overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="flex-1">
                {Object.keys(groupedData).map((invoiceNo) => (
                  <React.Fragment key={`right-group-${invoiceNo}`}>
                     {/* Invoice Action Menu */}
                     <div className="flex items-center justify-center" style={{ height: '35px', backgroundColor: '#ebeef7', borderBottom: '1px solid #D0D5E3', borderTop: '1px solid #D0D5E3' }}>
                       <InvoiceActionMenu>
                         <div className="cursor-pointer p-1 rounded hover:bg-black/5">
                           <MoreVertical className="w-4 h-4 text-gray-500" />
                         </div>
                       </InvoiceActionMenu>
                     </div>
                     
                     {!collapsedInvoices[invoiceNo] && (() => {
                        // Group by itemNo for ItemSeparator logic
                        const itemGroups: Record<string, SingleWindowInfoRow[]> = {};
                        groupedData[invoiceNo].forEach(row => {
                          const itemNo = row.itemNo || 'Unknown';
                          if (!itemGroups[itemNo]) itemGroups[itemNo] = [];
                          itemGroups[itemNo].push(row);
                        });

                        return Object.keys(itemGroups).map(itemNo => {
                          const isItemCollapsed = collapsedItems[`${invoiceNo}-${itemNo}`];
                          
                          return (
                            <React.Fragment key={`right-item-${invoiceNo}-${itemNo}`}>
                               {/* Item Separator Spacer */}
                               <div style={{ height: '35px', backgroundColor: '#ebeef7', borderBottom: '1px solid #D0D5E3', borderTop: '1px solid #D0D5E3' }} />

                               {!isItemCollapsed && itemGroups[itemNo].map((row) => {
                                 const isRowHighlighted = shouldShowRowHighlight(row.id);
                                 return (
                                   <div key={`right-row-${row.id}`} className="flex items-center justify-center border-b border-gray-300 transition-colors" 
                                     style={{ borderRight: `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`, backgroundColor: isRowHighlighted ? TABLE_CONSTANTS.HOVER_BG : 'transparent',
                                       borderBottom: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
                                       borderTop: isRowHighlighted ? `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}` : 'none', borderLeft: 'none', marginBottom: '0px',
                                       height: TABLE_CONSTANTS.ROW_HEIGHT, minHeight: TABLE_CONSTANTS.ROW_HEIGHT, maxHeight: TABLE_CONSTANTS.ROW_HEIGHT }}>
                                     <ItemActionMenu 
                                       onAction={(action) => {
                                         if (action === 'add_above') handleAddRowAbove(invoiceNo, itemNo, row.subItSNo);
                                         if (action === 'add_below') handleAddRow(invoiceNo, itemNo);
                                         if (action === 'duplicate') handleDuplicateItem(row.id);
                                         if (action === 'delete') handleDeleteItem(row.id);
                                         if (action === 'edit') startEdit(row.id, 'infoText', row.infoText);
                                       }}
                                       trigger={
                                         <div className="cursor-pointer p-1 rounded hover:bg-black/5 outline-none">
                                           <MoreVertical className="w-4 h-4 text-gray-500" />
                                         </div>
                                       }
                                     />
                                   </div>
                                 );
                               })}

                               {/* Spacer for Add Row Button */}
                               {!isItemCollapsed && (
                                 <div style={{ height: '36px', borderRight: `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}` }} />
                               )}
                            </React.Fragment>
                          );
                        });
                      })()}
                    
                    {/* Spacer for Add Row removed from here */}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Footer (Empty for now) */}
          <div ref={footerScrollRef} className={`${SCROLLBAR_CLASSES.VISIBLE} mt-auto bg-[#F9FAFB] border-t border-[#d0d5e3] h-3`}>
            <div style={{ width: `${leftSectionWidth + scrollWidth + 50}px` }} />
          </div>
        </div>
      </div>
    </div>
  );
}