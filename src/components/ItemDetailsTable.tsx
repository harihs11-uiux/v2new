import React, { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { MoreVertical, ChevronLeft, ChevronRight, FileText, LayoutGrid } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import gridIcon from "figma:asset/e05d8e275db1c32c7ab42a7d8745192623b62a44.png";
import { Resizable } from 're-resizable';
import SectionHeader from '../imports/SectionHeader';
import TooltipRowTable from '../imports/TooltipRowTable-5533-1576';
import AdvanceItemMaster from '../imports/AdvanceItemMaster';
import TableRow1 from '../imports/TableRow1-1267-1698';
import TableRow5 from '../imports/TableRow5';
import InvoiceSeparator from './InvoiceSeparator';
import AddRowButton from './AddRowButton';
import exampleImage from 'figma:asset/dcd86229ed0597d1d5ffe971b88524552145b1e5.png';
import scrollableImage from 'figma:asset/3130073027bcfe3bb88276afafd66e600cf8cd16.png';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import FiltersSort from '../imports/FiltersSort';
import filterSvgPaths from '../imports/svg-xkhl016h09';
import ExpandContent from '../imports/ExpandContent';
import { ItemActionMenu } from './ItemActionMenu';
import { ItemTableBulkActions } from './ItemTableBulkActions';

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

interface ItemRow {
  id: string;
  sNo: string; // Changed from number to string to support "1/1" format
  partCode: string;
  invoiceDescription: string;
  concatenatedDescription: string;
  hsn: string;
  bcdNotificationNo: string;
  bcdSrNo: string;
  bcdRate: string;
  bcdAmount: string;
  aicedAmount: string; // Customs Agri & Infrastructure Development Cess
  swcAmount: string; // Social Welfare Charges
  cvdAmount: string; // Countervailing Duty
  igstNotificationNo: string;
  igstSrNo: string;
  igstRate: string;
  igstAmount: string;
  igstCompCessAmount: string; // IGST Compensation Cess Levy
  saptaNotificationNo: string;
  saptaNotificationSrNo: string;
  saptaRate: string;
  saptaAmount: string;
  countryOfOrigin: string;
  sourceCountry: string;
  transitCountry: string;
  assblValue: string;
  assbleDuty: string;
  endUse: string;
  brand: string;
  model: string;
  accessoryStatus: string;
  accessories: string;
  quantity: string;
  uom: string;
  custQty: string;
  custUom: string;
  unitPrice: string;
  noOfUnitPer?: string;
  amount: string;
  isSelected: boolean;
}

// Editing cell interface
interface EditingCell {
  rowId: string;
  columnKey: keyof ItemRow;
}

// Enhanced hover state interface - includes individual cell tracking
interface HoverState {
  rowId: string | null;
  cellId: string | null;
  columnIndex: number | null;
}

export const mockData: ItemRow[] = [
  {
    id: '1',
    sNo: '1/1', // Updated to new format
    partCode: '8374926510',
    invoiceDescription: '',
    concatenatedDescription: 'Electronic Components - High-grade Semiconductors for Industrial Use',
    hsn: '84099120',
    bcdNotificationNo: '50/2017',
    bcdSrNo: '01',
    bcdRate: '10.00%',
    bcdAmount: '2,550.00',
    aicedAmount: '320.00',
    swcAmount: '180.00',
    cvdAmount: '1,500.00',
    igstNotificationNo: 'IGST-2025-001',
    igstSrNo: '001',
    igstRate: '18.00%',
    igstAmount: '4,590.00',
    igstCompCessAmount: '0.00',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'China',
    sourceCountry: 'China',
    transitCountry: 'Singapore',
    assblValue: '48,500.00',
    assbleDuty: '7,140.00',
    endUse: 'Manufacturing',
    brand: 'TechCorp',
    model: 'TC-2025',
    accessoryStatus: 'Main',
    accessories: 'None',
    quantity: '1000',
    uom: 'PCS',
    custQty: '1000',
    custUom: 'PCS',
    unitPrice: '25.50',
    noOfUnitPer: '1',
    amount: '25,500.00',
    isSelected: false
  },
  {
    id: '2',
    sNo: '1/2', // Updated to new format
    partCode: '5926183740',
    invoiceDescription: 'Automotive Parts - Engine Components',
    concatenatedDescription: 'Automotive Engine Components - Precision Engineered Parts',
    hsn: '',
    bcdNotificationNo: '',
    bcdSrNo: '',
    bcdRate: '',
    bcdAmount: '',
    aicedAmount: '',
    swcAmount: '',
    cvdAmount: '',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '',
    igstAmount: '',
    igstCompCessAmount: '',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'Germany',
    sourceCountry: 'Germany',
    transitCountry: 'Netherlands',
    assblValue: '22,800.00',
    assbleDuty: '3,450.00',
    endUse: 'Automotive',
    brand: 'AutoTech',
    model: 'AT-Engine-V2',
    accessoryStatus: 'Main',
    accessories: 'Gaskets, Bolts',
    quantity: '500',
    uom: 'PCS',
    custQty: '500',
    custUom: 'PCS',
    unitPrice: '45.75',
    amount: '22,875.00',
    isSelected: false
  },
  {
    id: '3',
    sNo: '1/3', // Updated to new format
    partCode: '2973475834',
    invoiceDescription: 'Textile Products - Cotton Fabric',
    concatenatedDescription: 'Premium Cotton Fabric - High Thread Count Natural Cotton',
    hsn: '52121300',
    bcdNotificationNo: '80/2017',
    bcdSrNo: '1',
    bcdRate: '5.00%',
    bcdAmount: '1,600.00',
    aicedAmount: '0.00',
    swcAmount: '0.00',
    cvdAmount: '0.00',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '',
    igstAmount: '',
    igstCompCessAmount: '',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'India',
    sourceCountry: 'India',
    transitCountry: 'Direct',
    assblValue: '15,200.00',
    assbleDuty: '1,600.00',
    endUse: 'Textile Manufacturing',
    brand: 'CottonPlus',
    model: 'CP-Premium',
    accessoryStatus: 'Main',
    accessories: 'None',
    quantity: '2500',
    uom: 'MTR',
    custQty: '2500',
    custUom: 'MTR',
    unitPrice: '12.80',
    amount: '32,000.00',
    isSelected: false
  },
  {
    id: '4',
    sNo: '1/4', // Updated to new format
    partCode: '6148259073',
    invoiceDescription: 'Chemical Products - Industrial Polymers',
    concatenatedDescription: 'Industrial Grade Polymers - High Performance Thermoplastics',
    hsn: '39130001',
    bcdNotificationNo: '43/2017',
    bcdSrNo: '1',
    bcdRate: '10.00%',
    bcdAmount: '2,865.00',
    aicedAmount: '450.00',
    swcAmount: '120.00',
    cvdAmount: '0.00',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '',
    igstAmount: '',
    igstCompCessAmount: '',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'South Korea',
    sourceCountry: 'South Korea',
    transitCountry: 'Japan',
    assblValue: '18,900.00',
    assbleDuty: '2,865.00',
    endUse: 'Chemical Processing',
    brand: 'PolyKorea',
    model: 'PK-Industrial',
    accessoryStatus: 'Main',
    accessories: 'Stabilizers',
    quantity: '750',
    uom: 'KGS',
    custQty: '750',
    custUom: 'KGS',
    unitPrice: '38.20',
    amount: '28,650.00',
    isSelected: false
  },
  {
    id: '5',
    sNo: '2/1',
    partCode: '7263849501',
    invoiceDescription: '',
    concatenatedDescription: 'Medical Equipment - Diagnostic Devices for Hospital Use',
    hsn: '90181900',
    bcdNotificationNo: '55/2017',
    bcdSrNo: '02',
    bcdRate: '7.50%',
    bcdAmount: '3,750.00',
    aicedAmount: '0.00',
    swcAmount: '0.00',
    cvdAmount: '0.00',
    igstNotificationNo: 'IGST-2025-002',
    igstSrNo: '002',
    igstRate: '12.00%',
    igstAmount: '6,000.00',
    igstCompCessAmount: '0.00',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'USA',
    sourceCountry: 'USA',
    transitCountry: 'Dubai',
    assblValue: '62,400.00',
    assbleDuty: '9,750.00',
    endUse: 'Medical',
    brand: 'MedTech',
    model: 'MT-Diagnostic',
    accessoryStatus: 'Main',
    accessories: 'Cables, Sensors',
    quantity: '200',
    uom: 'PCS',
    custQty: '200',
    custUom: 'PCS',
    unitPrice: '250.00',
    amount: '50,000.00',
    isSelected: false
  },
  {
    id: '6',
    sNo: '2/2',
    partCode: '4857293641',
    invoiceDescription: 'Pharmaceutical Products - Tablets',
    concatenatedDescription: 'Pharmaceutical Grade Tablets - High Quality Medicine',
    hsn: '',
    bcdNotificationNo: '',
    bcdSrNo: '',
    bcdRate: '',
    bcdAmount: '',
    aicedAmount: '',
    swcAmount: '',
    cvdAmount: '',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '',
    igstAmount: '',
    igstCompCessAmount: '',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'Switzerland',
    sourceCountry: 'Switzerland',
    transitCountry: 'France',
    assblValue: '35,700.00',
    assbleDuty: '5,250.00',
    endUse: 'Pharmaceutical',
    brand: 'PharmaCorp',
    model: 'PC-Premium',
    accessoryStatus: 'Main',
    accessories: 'None',
    quantity: '10000',
    uom: 'TABS',
    custQty: '10000',
    custUom: 'TABS',
    unitPrice: '5.25',
    amount: '52,500.00',
    isSelected: false
  },
  {
    id: '7',
    sNo: '2/3',
    partCode: '9182736450',
    invoiceDescription: 'Construction Materials - Steel Rods',
    concatenatedDescription: 'High Tensile Steel Rods - Construction Grade',
    hsn: '72142000',
    bcdNotificationNo: '88/2017',
    bcdSrNo: '3',
    bcdRate: '12.50%',
    bcdAmount: '5,625.00',
    aicedAmount: '0.00',
    swcAmount: '0.00',
    cvdAmount: '0.00',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '',
    igstAmount: '',
    igstCompCessAmount: '',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'Japan',
    sourceCountry: 'Japan',
    transitCountry: 'Singapore',
    assblValue: '37,500.00',
    assbleDuty: '5,625.00',
    endUse: 'Construction',
    brand: 'SteelPro',
    model: 'SP-Construction',
    accessoryStatus: 'Main',
    accessories: 'Fasteners',
    quantity: '3000',
    uom: 'KGS',
    custQty: '3000',
    custUom: 'KGS',
    unitPrice: '15.00',
    amount: '45,000.00',
    isSelected: false
  },
  {
    id: '8',
    sNo: '2/4',
    partCode: '3647582910',
    invoiceDescription: 'Food Products - Organic Spices',
    concatenatedDescription: 'Premium Organic Spices - Export Quality',
    hsn: '09042200',
    bcdNotificationNo: '60/2017',
    bcdSrNo: '2',
    bcdRate: '15.00%',
    bcdAmount: '7,500.00',
    aicedAmount: '0.00',
    swcAmount: '0.00',
    cvdAmount: '0.00',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '',
    igstAmount: '',
    igstCompCessAmount: '',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'Vietnam',
    sourceCountry: 'Vietnam',
    transitCountry: 'Thailand',
    assblValue: '50,000.00',
    assbleDuty: '7,500.00',
    endUse: 'Food Processing',
    brand: 'SpiceKing',
    model: 'SK-Organic',
    accessoryStatus: 'Main',
    accessories: 'Packaging',
    quantity: '5000',
    uom: 'KGS',
    custQty: '5000',
    custUom: 'KGS',
    unitPrice: '10.00',
    amount: '50,000.00',
    isSelected: false
  },
  {
    id: '9',
    sNo: '3/1',
    partCode: '1827364509',
    invoiceDescription: 'Electronic Goods - Circuit Boards',
    concatenatedDescription: 'Printed Circuit Boards - High Density Interconnect',
    hsn: '85340000',
    bcdNotificationNo: '24/2017',
    bcdSrNo: '1',
    bcdRate: '0.00%',
    bcdAmount: '0.00',
    aicedAmount: '0.00',
    swcAmount: '0.00',
    cvdAmount: '0.00',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '18.00%',
    igstAmount: '2,772.00',
    igstCompCessAmount: '0.00',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'Taiwan',
    sourceCountry: 'Taiwan',
    transitCountry: 'Hong Kong',
    assblValue: '18,480.00',
    assbleDuty: '2,772.00',
    endUse: 'Electronics Manufacturing',
    brand: 'TSMC',
    model: 'PCB-HDI-5',
    accessoryStatus: 'Main',
    accessories: 'None',
    quantity: '500',
    uom: 'PCS',
    custQty: '500',
    custUom: 'PCS',
    unitPrice: '30.80',
    amount: '15,400.00',
    isSelected: false
  },
  {
    id: '10',
    sNo: '3/2',
    partCode: '5049382716',
    invoiceDescription: 'Cables - Fiber Optic',
    concatenatedDescription: 'Optical Fiber Cables - Single Mode',
    hsn: '85447090',
    bcdNotificationNo: '57/2017',
    bcdSrNo: '12',
    bcdRate: '10.00%',
    bcdAmount: '850.00',
    aicedAmount: '0.00',
    swcAmount: '0.00',
    cvdAmount: '0.00',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '18.00%',
    igstAmount: '1,530.00',
    igstCompCessAmount: '0.00',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'South Korea',
    sourceCountry: 'South Korea',
    transitCountry: 'China',
    assblValue: '17,000.00',
    assbleDuty: '2,380.00',
    endUse: 'Telecommunications',
    brand: 'Samsung',
    model: 'FO-SM-100',
    accessoryStatus: 'Main',
    accessories: 'Connectors',
    quantity: '200',
    uom: 'MTR',
    custQty: '200',
    custUom: 'MTR',
    unitPrice: '42.50',
    amount: '8,500.00',
    isSelected: false
  },
  {
    id: '11',
    sNo: '4/1',
    partCode: '9384756201',
    invoiceDescription: 'Machinery Parts - Bearings',
    concatenatedDescription: 'Industrial Ball Bearings - Heavy Duty',
    hsn: '84821011',
    bcdNotificationNo: '15/2017',
    bcdSrNo: '5',
    bcdRate: '7.50%',
    bcdAmount: '915.00',
    aicedAmount: '0.00',
    swcAmount: '0.00',
    cvdAmount: '0.00',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '18.00%',
    igstAmount: '2,196.00',
    igstCompCessAmount: '0.00',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'Germany',
    sourceCountry: 'Germany',
    transitCountry: 'Direct',
    assblValue: '21,500.00',
    assbleDuty: '3,111.00',
    endUse: 'Industrial Machinery',
    brand: 'SKF',
    model: 'BB-HD-500',
    accessoryStatus: 'Main',
    accessories: 'Lubricant',
    quantity: '100',
    uom: 'PCS',
    custQty: '100',
    custUom: 'PCS',
    unitPrice: '122.00',
    amount: '12,200.00',
    isSelected: false
  },
  {
    id: '12',
    sNo: '4/2',
    partCode: '2019384756',
    invoiceDescription: 'Hydraulic Seals',
    concatenatedDescription: 'Hydraulic Cylinder Seals - High Pressure',
    hsn: '40169330',
    bcdNotificationNo: '21/2017',
    bcdSrNo: '3',
    bcdRate: '10.00%',
    bcdAmount: '450.00',
    igstNotificationNo: '',
    igstSrNo: '',
    igstRate: '18.00%',
    igstAmount: '810.00',
    saptaNotificationNo: '',
    saptaNotificationSrNo: '',
    saptaRate: '',
    saptaAmount: '',
    countryOfOrigin: 'Italy',
    sourceCountry: 'Italy',
    transitCountry: 'France',
    endUse: 'Hydraulics',
    brand: 'Trelleborg',
    model: 'HS-HP-25',
    accessoryStatus: 'Main',
    accessories: 'None',
    quantity: '300',
    uom: 'PCS',
    custQty: '300',
    custUom: 'PCS',
    unitPrice: '15.00',
    amount: '4,500.00',
    isSelected: false
  }
];

const ALL_COLUMNS = [
  { header: 'Invoice Description', key: 'invoiceDescription', width: 180 },
  { header: 'Concatenated Description', key: 'concatenatedDescription', width: 200 },
  { header: 'HSN', key: 'hsn', width: 120 },
  { header: 'BCD Notification No', key: 'bcdNotificationNo', width: 140 },
  { header: 'BCD Sr.No', key: 'bcdSrNo', width: 80 },
  { header: 'BCD Rate', key: 'bcdRate', width: 100 },
  { header: 'BCD Amount', key: 'bcdAmount', width: 120 },
  { header: 'IGST Notification NO', key: 'igstNotificationNo', width: 140 },
  { header: 'IGST Sr.No', key: 'igstSrNo', width: 80 },
  { header: 'IGST Rate', key: 'igstRate', width: 100 },
  { header: 'IGST Amount', key: 'igstAmount', width: 120 },
  { header: 'Quantity', key: 'quantity', width: 140 },
  { header: 'UOM', key: 'uom', width: 100 },
  { header: 'Cust Qty', key: 'custQty', width: 120 },
  { header: 'UOM', key: 'custUom', width: 80 },
  { header: 'Unit Price', key: 'unitPrice', width: 120 },
  { header: 'No of Unit Per', key: 'noOfUnitPer', width: 120 },
  { header: 'Amount', key: 'amount', width: 150 },
  { header: 'SAPTA Notification No', key: 'saptaNotificationNo', width: 140 },
  { header: 'SAPTA Notification Sr.NO', key: 'saptaNotificationSrNo', width: 80 },
  { header: 'SAPTA Rate', key: 'saptaRate', width: 100 },
  { header: 'SAPTA Amount', key: 'saptaAmount', width: 120 },
  { header: 'Country of Origin', key: 'countryOfOrigin', width: 140 },
  { header: 'Source Country', key: 'sourceCountry', width: 140 },
  { header: 'Transit Country', key: 'transitCountry', width: 140 },
  { header: 'Assbl Value', key: 'assblValue', width: 130 },
  { header: 'Assble Duty', key: 'assbleDuty', width: 130 },
  { header: 'End Use', key: 'endUse', width: 120 },
  { header: 'Brand', key: 'brand', width: 140 },
  { header: 'Model', key: 'model', width: 120 },
  { header: 'Accessory Status', key: 'accessoryStatus', width: 100 },
  { header: 'Accessories', key: 'accessories', width: 120 }
];

const EXPORT_EXCLUDED_HEADERS = [
  'BCD Notification No', 'BCD Sr.No', 'BCD Rate', 'BCD Amount',
  'IGST Notification NO', 'IGST Sr.No', 'IGST Rate', 'IGST Amount',
  'SAPTA Notification No', 'SAPTA Notification Sr.NO', 'SAPTA Rate', 'SAPTA Amount',
  'Country of Origin', 'Source Country', 'Transit Country', 'Assbl Value', 'Assble Duty',
  'End Use', 'Brand', 'Model', 'Accessory Status', 'Accessories'
];

interface ItemDetailsTableProps {
  activeCell?: { section: string; rowIndex: number; columnId: string } | null;
  invoiceFilter?: string;
  onExpandRow?: (row: ItemRow, mode?: 'split' | 'stacked') => void;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  showHeader?: boolean;
  isExport?: boolean;
}

export default function ItemDetailsTable({ activeCell, invoiceFilter, onExpandRow, searchQuery: propSearchQuery = '', onSearchChange, showHeader = true, isExport = false }: ItemDetailsTableProps) {
  const [data, setData] = useState<ItemRow[]>(mockData);
  const [selectAll, setSelectAll] = useState(false);
  const [showPartCodeModal, setShowPartCodeModal] = useState(false);
  const [showAdvanceItemMaster, setShowAdvanceItemMaster] = useState(false);
  const [selectedPartCode, setSelectedPartCode] = useState<string | null>(null);
  const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>({
    '2': true,
    '3': true,
    '4': true
  });
  
  // Tab navigation state - tracks cell in navigation mode (yellow border/background)
  const [tabActiveCell, setTabActiveCell] = useState<{ rowIndex: number; columnKey: keyof ItemRow } | null>(null);
  
  // Search state - use prop if available, otherwise local state
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const isSearchControlled = onSearchChange !== undefined;
  // Use prop value if controlled, otherwise use local state
  const searchQuery = isSearchControlled ? propSearchQuery : localSearchQuery;

  const handleSearch = (value: string) => {
    if (isSearchControlled && onSearchChange) {
      onSearchChange(value);
    } else {
      setLocalSearchQuery(value);
    }
  };
  
  // Filter state
  const [openFilterColumn, setOpenFilterColumn] = useState<string | null>(null);
  const [filteredInvoices, setFilteredInvoices] = useState<string[]>([]);
  const [filteredPartCodes, setFilteredPartCodes] = useState<string[]>([]);
  const [filteredInvoiceDescriptions, setFilteredInvoiceDescriptions] = useState<string[]>([]);
  const [filteredConcatenatedDescriptions, setFilteredConcatenatedDescriptions] = useState<string[]>([]);
  const [filteredHSN, setFilteredHSN] = useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);
  
  // Invoice number mapping
  const invoiceIds: { [key: string]: string } = {
    '1': '123456789012345',
    '2': '384838858384845',
    '3': '728493827461029',
    '4': '918273645019283'
  };
  
  // Invoice dates and amounts
  const invoiceDates: { [key: string]: string } = {
    '1': '22/04/2025',
    '2': '22/04/2025',
    '3': '23/04/2025',
    '4': '23/04/2025'
  };
  
  const invoiceAmounts: { [key: string]: string } = {
    '1': 'EUR 22,800.00',
    '2': 'EUR 22,800.00',
    '3': 'USD 15,400.00',
    '4': 'GBP 12,200.00'
  };
  
  // Toggle collapse state for an invoice
  const toggleInvoiceCollapse = (invoiceNum: string) => {
    setCollapsedInvoices(prev => ({
      ...prev,
      [invoiceNum]: !prev[invoiceNum]
    }));
  };
  
  // Scroll to active cell when it changes
  useEffect(() => {
    if (activeCell && activeCell.section === 'itemDetails') {
      setTimeout(() => {
        const cellElement = document.querySelector(`[data-cell-id="${activeCell.rowIndex}-${activeCell.columnId}"]`) as HTMLElement;
        if (cellElement) {
          cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
      }, 300);
    }
  }, [activeCell]);

  // Left section column widths - now includes checkbox, S.No., and Part Code
  const [leftColumnWidths, setLeftColumnWidths] = useState<number[]>([50, 80, 150]); // Checkbox, S.No., Part Code
  
  // Filter columns based on export status
  const filteredColumns = useMemo(() => {
    return isExport 
      ? ALL_COLUMNS.filter(c => !EXPORT_EXCLUDED_HEADERS.includes(c.header))
      : ALL_COLUMNS.filter(c => c.header !== 'No of Unit Per');
  }, [isExport]);

  // Middle section column widths state for resizable functionality
  const [columnWidths, setColumnWidths] = useState<number[]>(() => filteredColumns.map(c => c.width));

  useEffect(() => {
     setColumnWidths(filteredColumns.map(c => c.width));
  }, [filteredColumns]);

  // Editing state management
  const [editingCell, setEditingCell] = useState<EditingCell | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const [tooltipOpen, setTooltipOpen] = useState<string | null>(null); // Track which cell's tooltip is open
  const inputRef = useRef<HTMLInputElement>(null);

  // Scrolling synchronization refs
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
      dataScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (dataScrollRef.current) {
      dataScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Enhanced hover state management - includes individual cell tracking
  const [hoverState, setHoverState] = useState<HoverState>({ 
    rowId: null, 
    cellId: null,
    columnIndex: null 
  });

  // Define which columns are editable and navigable
  const editableColumns: (keyof ItemRow)[] = [
    'partCode', 'invoiceDescription', 'concatenatedDescription', 'hsn', 'bcdNotificationNo', 'bcdSrNo', 'bcdRate', 'bcdAmount',
    'igstNotificationNo', 'igstSrNo', 'igstRate', 'igstAmount', 'saptaNotificationNo', 'saptaNotificationSrNo', 'saptaRate', 'saptaAmount', 'countryOfOrigin', 'sourceCountry', 'transitCountry', 'endUse',
    'brand', 'model', 'accessoryStatus', 'accessories', 'quantity', 'uom', 'custQty', 'custUom', 'unitPrice', 'amount'
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
    // Generate the next S.No in the format "1/X" where X is the next number
    const nextIndex = data.length + 1;
    const newSNo = `1/${nextIndex}`;
    
    const newRow: ItemRow = {
      id: Date.now().toString(),
      sNo: newSNo, // Use the new format
      partCode: Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'),
      invoiceDescription: 'New Item Description',
      concatenatedDescription: 'New Item Concatenated Description',
      hsn: '00000000',
      bcdNotificationNo: 'BCD-NEW',
      bcdSrNo: '000',
      bcdRate: '0.00%',
      bcdAmount: '0.00',
      igstNotificationNo: 'IGST-NEW',
      igstSrNo: '000',
      igstRate: '0.00%',
      igstAmount: '0.00',
      saptaNotificationNo: 'SAPTA-NEW',
      saptaNotificationSrNo: '000',
      saptaRate: '0.00%',
      saptaAmount: '0.00',
      countryOfOrigin: 'Unknown',
      sourceCountry: 'Unknown',
      transitCountry: 'Direct',
      endUse: 'General',
      brand: 'Unknown',
      model: 'Unknown',
      accessoryStatus: 'Main',
      accessories: 'None',
      quantity: '0',
      uom: 'PCS',
      custQty: '0',
      custUom: 'PCS',
      unitPrice: '0.00',
      amount: '0.00',
      isSelected: false
    };
    setData(prev => [...prev, newRow]);
    
    // Update serial numbers for all rows to maintain the 1/X format
    setData(prev => prev.map((row, index) => ({
      ...row,
      sNo: `1/${index + 1}`
    })));
  };

  // Handle adding a new row after a specific row
  const handleAddRowAfter = (targetRowId: string) => {
    setData(prev => {
      const targetIndex = prev.findIndex(r => r.id === targetRowId);
      if (targetIndex === -1) return prev;
      
      const targetRow = prev[targetIndex];
      const invoiceNum = targetRow.sNo.split('/')[0];
      
      const newRow: ItemRow = {
        id: Date.now().toString(),
        sNo: '', // Will be renumbered
        partCode: '',
        invoiceDescription: '',
        concatenatedDescription: '',
        hsn: '',
        bcdNotificationNo: '',
        bcdSrNo: '',
        bcdRate: '',
        bcdAmount: '',
        igstNotificationNo: '',
        igstSrNo: '',
        igstRate: '',
        igstAmount: '',
        saptaNotificationNo: '',
        saptaNotificationSrNo: '',
        saptaRate: '',
        saptaAmount: '',
        countryOfOrigin: '',
        sourceCountry: '',
        transitCountry: '',
        endUse: '',
        brand: '',
        model: '',
        accessoryStatus: '',
        accessories: '',
        quantity: '',
        uom: '',
        custQty: '',
        custUom: '',
        unitPrice: '',
        amount: '',
        isSelected: false
      };
      
      const newData = [...prev];
      newData.splice(targetIndex + 1, 0, newRow);
      
      // Renumber all rows within this invoice
      const invoiceCounters: Record<string, number> = {};
      return newData.map(row => {
        const inv = row.sNo.includes('/') ? row.sNo.split('/')[0] : invoiceNum;
        if (!invoiceCounters[inv]) invoiceCounters[inv] = 0;
        invoiceCounters[inv]++;
        return {
          ...row,
          sNo: `${inv}/${invoiceCounters[inv]}`
        };
      });
    });
  };

  const handleAddRowAbove = (targetRowId: string) => {
    setData(prev => {
      const targetIndex = prev.findIndex(r => r.id === targetRowId);
      if (targetIndex === -1) return prev;
      
      const targetRow = prev[targetIndex];
      const invoiceNum = targetRow.sNo.split('/')[0];
      
      const newRow: ItemRow = {
        id: Date.now().toString(),
        sNo: '', // Will be renumbered
        partCode: '',
        invoiceDescription: '',
        concatenatedDescription: '',
        hsn: '',
        bcdNotificationNo: '',
        bcdSrNo: '',
        bcdRate: '',
        bcdAmount: '',
        igstNotificationNo: '',
        igstSrNo: '',
        igstRate: '',
        igstAmount: '',
        saptaNotificationNo: '',
        saptaNotificationSrNo: '',
        saptaRate: '',
        saptaAmount: '',
        countryOfOrigin: '',
        sourceCountry: '',
        transitCountry: '',
        endUse: '',
        brand: '',
        model: '',
        accessoryStatus: '',
        accessories: '',
        quantity: '',
        uom: '',
        custQty: '',
        custUom: '',
        unitPrice: '',
        amount: '',
        isSelected: false
      };
      
      const newData = [...prev];
      newData.splice(targetIndex, 0, newRow);
      
      const invoiceCounters: Record<string, number> = {};
      return newData.map(row => {
        const inv = row.sNo.includes('/') ? row.sNo.split('/')[0] : invoiceNum;
        if (!invoiceCounters[inv]) invoiceCounters[inv] = 0;
        invoiceCounters[inv]++;
        return {
          ...row,
          sNo: `${inv}/${invoiceCounters[inv]}`
        };
      });
    });
  };

  const handleDuplicateItem = (rowId: string) => {
    setData(prev => {
      const rowIndex = prev.findIndex(r => r.id === rowId);
      if (rowIndex === -1) return prev;
      
      const rowToDuplicate = prev[rowIndex];
      const invoiceNum = rowToDuplicate.sNo.split('/')[0];
      
      const newRow: ItemRow = {
        ...rowToDuplicate,
        id: Date.now().toString(),
        isSelected: false
      };
      
      const newData = [...prev];
      newData.splice(rowIndex + 1, 0, newRow);
      
      let invoiceRowCount = 0;
      return newData.map(row => {
        if (row.sNo.startsWith(`${invoiceNum}/`)) {
          invoiceRowCount++;
          return { ...row, sNo: `${invoiceNum}/${invoiceRowCount}` };
        }
        return row;
      });
    });
  };

  const handleDeleteItem = (rowId: string) => {
    setData(prev => {
      const rowToDelete = prev.find(r => r.id === rowId);
      if (!rowToDelete) return prev;
      
      const invoiceNum = rowToDelete.sNo.split('/')[0];
      const newData = prev.filter(r => r.id !== rowId);
      
      let invoiceRowCount = 0;
      return newData.map(row => {
        if (row.sNo.startsWith(`${invoiceNum}/`)) {
          invoiceRowCount++;
          return { ...row, sNo: `${invoiceNum}/${invoiceRowCount}` };
        }
        return row;
      });
    });
  };

  // Handle more options click
  const handleMoreOptionsClick = (rowId: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('More options clicked for row:', rowId);
    // Add your dropdown menu logic here
  };

  const selectedCount = data.filter(item => item.isSelected).length;

  const handleBulkAction = (action: string) => {
    if (action === 'delete') {
      setData(prev => {
        const remaining = prev.filter(item => !item.isSelected);
        const invoiceCounters: Record<string, number> = {};
        
        return remaining.map(row => {
          const invoiceNum = row.sNo.split('/')[0];
          if (!invoiceCounters[invoiceNum]) invoiceCounters[invoiceNum] = 0;
          invoiceCounters[invoiceNum]++;
          return {
            ...row,
            sNo: `${invoiceNum}/${invoiceCounters[invoiceNum]}`
          };
        });
      });
      setSelectAll(false);
    } else {
      console.log(`Bulk action ${action} triggered`);
    }
  };

  // Synchronized horizontal scrolling
  const handleHeaderScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    if (dataScrollRef.current) {
      dataScrollRef.current.scrollLeft = scrollLeft;
    }
    if (footerScrollRef.current) {
      footerScrollRef.current.scrollLeft = scrollLeft;
    }
  };

  const handleDataScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    if (headerScrollRef.current) {
      headerScrollRef.current.scrollLeft = scrollLeft;
    }
    if (footerScrollRef.current) {
      footerScrollRef.current.scrollLeft = scrollLeft;
    }
  };

  const handleFooterScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    if (headerScrollRef.current) {
      headerScrollRef.current.scrollLeft = scrollLeft;
    }
    if (dataScrollRef.current) {
      dataScrollRef.current.scrollLeft = scrollLeft;
    }
  };

  // Enhanced hover state handlers - includes individual cell tracking
  const handleCellHover = (rowId: string, cellId: string, columnIndex: number) => {
    setHoverState({ rowId, cellId, columnIndex });
  };

  const handleCellLeave = () => {
    setHoverState({ rowId: null, cellId: null, columnIndex: null });
  };

  // Editing handlers
  const startEdit = (rowId: string, columnKey: keyof ItemRow, currentValue: any) => {
    if (!editableColumns.includes(columnKey)) return;
    
    setEditingCell({ rowId, columnKey });
    setEditValue(String(currentValue || ''));
  };

  // Programmatically activate edit mode for a specific cell by row index and column
  const activateEditByRowIndex = (rowIndex: number, columnKey: keyof ItemRow) => {
    if (rowIndex >= 0 && rowIndex < data.length) {
      const row = data[rowIndex];
      if (row && editableColumns.includes(columnKey)) {
        // Clear any existing editing state first
        if (editingCell) {
          cancelEdit();
        }
        
        // Small delay to ensure state is cleared
        setTimeout(() => {
          startEdit(row.id, columnKey, row[columnKey]);
          
          // Add temporary highlight effect to indicate successful activation
          const cellElement = document.querySelector(`[data-cell-id="${rowIndex}-${columnKey}"]`) as HTMLElement;
          if (cellElement) {
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
      }
    }
  };

  // Expose function globally for external access - but prevent any automatic sidebar triggers
  useEffect(() => {
    // Store the original function without any side effects that might trigger sidebars
    (window as any).activateItemDetailsCell = (rowIndex: number, columnKey: keyof ItemRow) => {
      // Only activate the cell, no other side effects
      activateEditByRowIndex(rowIndex, columnKey);
    };

    // Expose add row function
    (window as any).addItemDetailsRow = () => {
      handleAddRow();
    };

    // Expose delete row function (deletes specific index or last row)
    (window as any).deleteItemDetailsRow = (index?: number) => {
      setData(prev => {
        if (prev.length === 0) return prev;
        
        let newData;
        if (index !== undefined && index >= 0 && index < prev.length) {
           newData = [...prev];
           newData.splice(index, 1);
        } else {
           // Delete last row
           newData = prev.slice(0, -1);
        }

        // Renumber the remaining rows
        return newData.map((row, i) => ({
          ...row,
          sNo: `1/${i + 1}`
        }));
      });
    };
    
    return () => {
      delete (window as any).activateItemDetailsCell;
      delete (window as any).addItemDetailsRow;
      delete (window as any).deleteItemDetailsRow;
    };
  }, [data, activateEditByRowIndex]);

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

  // Enhanced keyboard navigation with arrow keys and Tab
  const handleKeyPress = (e: React.KeyboardEvent) => {
    // Handle Ctrl + Arrow keys for navigation while editing
    if (e.ctrlKey && (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
      e.stopPropagation();
      
      const currentEditing = editingCell;
      saveEdit();
      
      if (currentEditing) {
        const rowIndex = data.findIndex(r => r.id === currentEditing.rowId);
        if (rowIndex >= 0) {
          const currentColumnIndex = editableColumns.indexOf(currentEditing.columnKey);
          
          let nextRowIndex = rowIndex;
          let nextColumnKey: keyof ItemRow | null = null;
          
          if (e.key === 'ArrowRight') {
             // Logic for next cell (same as Tab)
             if (currentColumnIndex >= 0 && currentColumnIndex < editableColumns.length - 1) {
               nextColumnKey = editableColumns[currentColumnIndex + 1];
             } else if (rowIndex < data.length - 1) {
               nextRowIndex = rowIndex + 1;
               nextColumnKey = editableColumns[0];
             }
          } else if (e.key === 'ArrowLeft') {
             // Logic for previous cell
             if (currentColumnIndex > 0) {
               nextColumnKey = editableColumns[currentColumnIndex - 1];
             } else if (rowIndex > 0) {
               nextRowIndex = rowIndex - 1;
               nextColumnKey = editableColumns[editableColumns.length - 1];
             }
          } else if (e.key === 'ArrowDown') {
             if (rowIndex < data.length - 1) {
               nextRowIndex = rowIndex + 1;
               nextColumnKey = currentEditing.columnKey;
             }
          } else if (e.key === 'ArrowUp') {
             if (rowIndex > 0) {
               nextRowIndex = rowIndex - 1;
               nextColumnKey = currentEditing.columnKey;
             }
          }
          
          if (nextColumnKey) {
            setTabActiveCell({ rowIndex: nextRowIndex, columnKey: nextColumnKey });
            setTimeout(() => {
              const cellElement = document.querySelector(`[data-cell-id="${nextRowIndex}-${nextColumnKey}"]`) as HTMLElement;
              if (cellElement) {
                cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                cellElement.focus();
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
      
      // Capture current editing position before saving
      const currentEditing = editingCell;
      
      saveEdit();
      
      // Restore focus/active state to the same cell
      if (currentEditing) {
        const rowIndex = data.findIndex(r => r.id === currentEditing.rowId);
        if (rowIndex >= 0) {
          setTabActiveCell({ rowIndex, columnKey: currentEditing.columnKey });
          
          // Ensure visual focus returns to the cell
          setTimeout(() => {
            const cellElement = document.querySelector(`[data-cell-id="${rowIndex}-${currentEditing.columnKey}"]`) as HTMLElement;
            if (cellElement) {
              cellElement.focus();
            }
          }, 50);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      
      // Capture current editing position
      const currentEditing = editingCell;
      
      saveEdit();
      
      // Move to next cell
      if (currentEditing) {
        const rowIndex = data.findIndex(r => r.id === currentEditing.rowId);
        if (rowIndex >= 0) {
          const currentColumnIndex = editableColumns.indexOf(currentEditing.columnKey);
          
          // Calculate next position
          let nextRowIndex = rowIndex;
          let nextColumnKey: keyof ItemRow | null = null;
          
          if (currentColumnIndex >= 0 && currentColumnIndex < editableColumns.length - 1) {
            // Next column in same row
            nextColumnKey = editableColumns[currentColumnIndex + 1];
          } else if (rowIndex < data.length - 1) {
            // First column of next row
            nextRowIndex = rowIndex + 1;
            nextColumnKey = editableColumns[0];
          }
          
          if (nextColumnKey) {
            setTabActiveCell({ rowIndex: nextRowIndex, columnKey: nextColumnKey });
            
            // Scroll to and focus new cell
            setTimeout(() => {
              const cellElement = document.querySelector(`[data-cell-id="${nextRowIndex}-${nextColumnKey}"]`) as HTMLElement;
              if (cellElement) {
                cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                cellElement.focus();
              }
            }, 50);
          }
        }
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      cancelEdit();
    }
  };

  // Handle Tab and Arrow key navigation
  const handleCellKeyDown = (e: React.KeyboardEvent, rowIndex: number, columnKey: keyof ItemRow) => {
    // Enter key - activate edit mode
    if (e.key === 'Enter') {
      e.preventDefault();
      const row = data[rowIndex];
      if (row) {
        // Clear tab active state and start editing
        setTabActiveCell(null);
        startEdit(row.id, columnKey, row[columnKey]);
      }
      return;
    }
    
    // Tab key - navigate to next cell
    if (e.key === 'Tab') {
      e.preventDefault();
      
      // Move to next cell
      const currentColumnIndex = editableColumns.indexOf(columnKey);
      if (currentColumnIndex >= 0 && currentColumnIndex < editableColumns.length - 1) {
        // Move to next column in same row
        const nextColumn = editableColumns[currentColumnIndex + 1];
        setTabActiveCell({ rowIndex, columnKey: nextColumn });
        
        // Scroll to the new cell
        setTimeout(() => {
          const cellElement = document.querySelector(`[data-cell-id="${rowIndex}-${nextColumn}"]`) as HTMLElement;
          if (cellElement) {
            cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            cellElement.focus();
          }
        }, 50);
      } else if (rowIndex < data.length - 1) {
        // Move to first column of next row
        const nextColumn = editableColumns[0];
        setTabActiveCell({ rowIndex: rowIndex + 1, columnKey: nextColumn });
        
        // Scroll to the new cell
        setTimeout(() => {
          const cellElement = document.querySelector(`[data-cell-id="${rowIndex + 1}-${nextColumn}"]`) as HTMLElement;
          if (cellElement) {
            cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            cellElement.focus();
          }
        }, 50);
      }
    }
    // Arrow key navigation
    else if (e.ctrlKey && (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
       // Ctrl + Arrow navigation logic for non-editing mode
       e.preventDefault();
       
       if (e.key === 'ArrowRight') {
          // Next cell logic
          const currentColumnIndex = editableColumns.indexOf(columnKey);
          if (currentColumnIndex >= 0 && currentColumnIndex < editableColumns.length - 1) {
            const nextColumn = editableColumns[currentColumnIndex + 1];
            setTabActiveCell({ rowIndex, columnKey: nextColumn });
            setTimeout(() => {
              const cellElement = document.querySelector(`[data-cell-id="${rowIndex}-${nextColumn}"]`) as HTMLElement;
              if (cellElement) {
                cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                cellElement.focus();
              }
            }, 50);
          } else if (rowIndex < data.length - 1) {
            const nextColumn = editableColumns[0];
            setTabActiveCell({ rowIndex: rowIndex + 1, columnKey: nextColumn });
            setTimeout(() => {
              const cellElement = document.querySelector(`[data-cell-id="${rowIndex + 1}-${nextColumn}"]`) as HTMLElement;
              if (cellElement) {
                cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                cellElement.focus();
              }
            }, 50);
          }
       } else if (e.key === 'ArrowLeft') {
          // Previous cell logic
          const currentColumnIndex = editableColumns.indexOf(columnKey);
          if (currentColumnIndex > 0) {
            const prevColumn = editableColumns[currentColumnIndex - 1];
            setTabActiveCell({ rowIndex, columnKey: prevColumn });
            setTimeout(() => {
              const cellElement = document.querySelector(`[data-cell-id="${rowIndex}-${prevColumn}"]`) as HTMLElement;
              if (cellElement) {
                cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                cellElement.focus();
              }
            }, 50);
          } else if (rowIndex > 0) {
            const prevColumn = editableColumns[editableColumns.length - 1];
            setTabActiveCell({ rowIndex: rowIndex - 1, columnKey: prevColumn });
            setTimeout(() => {
              const cellElement = document.querySelector(`[data-cell-id="${rowIndex - 1}-${prevColumn}"]`) as HTMLElement;
              if (cellElement) {
                cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                cellElement.focus();
              }
            }, 50);
          }
       } else if (e.key === 'ArrowUp') {
          if (rowIndex > 0) {
            setTabActiveCell({ rowIndex: rowIndex - 1, columnKey });
            setTimeout(() => {
              const cellElement = document.querySelector(`[data-cell-id="${rowIndex - 1}-${columnKey}"]`) as HTMLElement;
              if (cellElement) {
                cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                cellElement.focus();
              }
            }, 50);
          }
       } else if (e.key === 'ArrowDown') {
          if (rowIndex < data.length - 1) {
            setTabActiveCell({ rowIndex: rowIndex + 1, columnKey });
            setTimeout(() => {
              const cellElement = document.querySelector(`[data-cell-id="${rowIndex + 1}-${columnKey}"]`) as HTMLElement;
              if (cellElement) {
                cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                cellElement.focus();
              }
            }, 50);
          }
       }
    }
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (rowIndex > 0) {
        setTabActiveCell({ rowIndex: rowIndex - 1, columnKey });
        setTimeout(() => {
          const cellElement = document.querySelector(`[data-cell-id="${rowIndex - 1}-${columnKey}"]`) as HTMLElement;
          if (cellElement) {
            cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            cellElement.focus();
          }
        }, 50);
      }
    }
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (rowIndex < data.length - 1) {
        setTabActiveCell({ rowIndex: rowIndex + 1, columnKey });
        setTimeout(() => {
          const cellElement = document.querySelector(`[data-cell-id="${rowIndex + 1}-${columnKey}"]`) as HTMLElement;
          if (cellElement) {
            cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            cellElement.focus();
          }
        }, 50);
      }
    }
    else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const currentColumnIndex = editableColumns.indexOf(columnKey);
      if (currentColumnIndex > 0) {
        const prevColumn = editableColumns[currentColumnIndex - 1];
        setTabActiveCell({ rowIndex, columnKey: prevColumn });
        setTimeout(() => {
          const cellElement = document.querySelector(`[data-cell-id="${rowIndex}-${prevColumn}"]`) as HTMLElement;
          if (cellElement) {
            cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            cellElement.focus();
          }
        }, 50);
      }
    }
    else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const currentColumnIndex = editableColumns.indexOf(columnKey);
      if (currentColumnIndex >= 0 && currentColumnIndex < editableColumns.length - 1) {
        const nextColumn = editableColumns[currentColumnIndex + 1];
        setTabActiveCell({ rowIndex, columnKey: nextColumn });
        setTimeout(() => {
          const cellElement = document.querySelector(`[data-cell-id="${rowIndex}-${nextColumn}"]`) as HTMLElement;
          if (cellElement) {
            cellElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            cellElement.focus();
          }
        }, 50);
      }
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

  // Check scroll position when data changes
  useEffect(() => {
    const timer = setTimeout(() => checkScrollPosition(), 100);
    return () => clearTimeout(timer);
  }, [data]);

  // Helper functions for state checks
  const shouldShowRowHover = (rowId: string) => {
    return hoverState.rowId === rowId;
  };

  const shouldShowRowActive = (rowId: string) => {
    return editingCell?.rowId === rowId;
  };

  // Updated row highlighting logic - show when editing or when row is hovered (but individual cell is not the target)
  const shouldShowRowHighlight = (rowId: string) => {
    // Show row highlighting when actively editing OR when row is hovered
    return shouldShowRowActive(rowId) || shouldShowRowHover(rowId);
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
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: '#02B196',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: '#02B196',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#02B196',
        borderLeftWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: '#02B196'
      };
    }
    return {};
  };

  // Handle part code click
  const handlePartCodeClick = (partCode: string) => {
    setSelectedPartCode(partCode);
    setShowPartCodeModal(true);
  };

  // Enhanced editable cell renderer with hybrid hover behavior
  const renderEditableCell = (
    row: ItemRow, 
    columnKey: keyof ItemRow, 
    value: any,
    className: string = '',
    style: React.CSSProperties = {},
    cellId: string = '',
    columnIndex: number = -1,
    rowIndex: number = -1,
    isFirstItemInInvoice: boolean = false
  ) => {
    const isEditing = editingCell?.rowId === row.id && editingCell?.columnKey === columnKey;
    const isEditable = editableColumns.includes(columnKey);
    const isRowHighlighted = shouldShowRowHighlight(row.id);
    const isCellHovered = shouldShowCellHover(cellId);
    const isCurrentCellBeingHovered = isCellHovered;
    const isOtherCellInRowBeingHovered = isRowHighlighted && !isCellHovered;

    // Check if this is an error cell (1st row invoiceDescription or 2nd row hsn)
    const isFirstRowDescriptionCell = isFirstItemInInvoice && columnKey === 'invoiceDescription';
    const isSecondRowHsnCell = rowIndex === 1 && columnKey === 'hsn';
    const isErrorCell = isFirstRowDescriptionCell || isSecondRowHsnCell;

    if (isEditing) {
      const borderWidth = isErrorCell ? '1px' : '2px';
      const borderColor = isErrorCell ? '#E53935' : '#3874FF';
      
      // Remove all borders from parent div
      const cleanStyle = { ...style };
      delete cleanStyle.borderTopWidth;
      delete cleanStyle.borderTopStyle;
      delete cleanStyle.borderTopColor;
      delete cleanStyle.borderRightWidth;
      delete cleanStyle.borderRightStyle;
      delete cleanStyle.borderRightColor;
      delete cleanStyle.borderBottomWidth;
      delete cleanStyle.borderBottomStyle;
      delete cleanStyle.borderBottomColor;
      delete cleanStyle.borderLeftWidth;
      delete cleanStyle.borderLeftStyle;
      delete cleanStyle.borderLeftColor;
      delete cleanStyle.border;
      
      return (
        <div className={`relative ${className}`} style={{...cleanStyle, zIndex: 100, position: 'relative', overflow: 'visible'}}>
          {columnKey === 'invoiceDescription' && (
             <img 
               src={gridIcon} 
               alt="" 
               style={{ 
                 width: '18px', 
                 height: '18px',
                 position: 'absolute',
                 left: '8px',
                 top: '50%',
                 transform: 'translateY(-50%)',
                 zIndex: 1001,
                 cursor: 'pointer'
               }} 
               className="flex-shrink-0"
               onMouseDown={(e) => {
                 e.preventDefault();
                 e.stopPropagation();
                 setShowAdvanceItemMaster(true);
               }}
             />
          )}
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            autoFocus
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={saveEdit}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="absolute outline-none text-black text-sm"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px',
              width: 'calc(100% + 2px)',
              height: 'calc(100% + 2px)',
              minHeight: '36px',
              maxHeight: '36px',
              margin: 0,
              padding: columnKey === 'invoiceDescription' 
                ? '0 60px 0 32px' // Increased right padding for counter
                : (columnKey === 'concatenatedDescription' ? '0 60px 0 8px' : '0 8px'),
              left: '-1px',
              top: '-1px',
              boxSizing: 'border-box',
              borderWidth: borderWidth,
              borderStyle: 'solid',
              borderColor: borderColor,
              backgroundColor: '#FFFFFF',
              boxShadow: isErrorCell ? '0 0 0 4px rgba(229, 57, 53, 0.25)' : '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
              zIndex: 1000,
              borderRadius: '0px'
            }}
          />
          {(columnKey === 'invoiceDescription' || columnKey === 'concatenatedDescription') && (
            <div
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '10px',
                color: editValue.length > 500 ? '#F97316' : '#9497A1',
                zIndex: 1002,
                pointerEvents: 'none',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {editValue.length}/500
            </div>
          )}
          {columnKey === 'invoiceDescription' && editValue && editValue.length > 0 && (
             <div 
               style={{ 
                 position: 'absolute', 
                 top: '100%', 
                 left: 0, 
                 zIndex: 99999, 
                 width: 'max-content', 
                 marginTop: '4px', 
                 boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)', 
                 borderRadius: '4px' 
               }} 
               onMouseDown={(e) => e.preventDefault()}
             >
               <TooltipRowTable />
             </div>
          )}
        </div>
      );
    }

    // Check if this cell matches the activeCell from audit report
    const isActiveCellFromAudit = activeCell && 
      activeCell.section === 'itemDetails' && 
      activeCell.rowIndex === rowIndex && 
      activeCell.columnId === columnKey;

    // Enhanced styling logic with five states:
    // 1. Error cells (1st row description, 2nd row HSN): Red border + light red background (always)
    // 2. Active cell from audit report: Yellow/gold highlight with special border
    // 3. Current cell being hovered: White background + blue borders on all sides (unless error cell)
    // 4. Other cells in the same row when any cell is hovered: Teal background + no individual borders
    // 5. Default state: Standard borders
    
    let cellBackgroundColor = 'transparent';
    let cellBorderStyles = {};
    let boxShadow = 'none';

    // Error cells ALWAYS have red border and light red background in normal state
    if (isErrorCell) {
      cellBackgroundColor = '#FFEBEE';
      cellBorderStyles = {
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: '#E53935',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: '#E53935',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#E53935',
        borderLeftWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: '#E53935'
      };
      boxShadow = 'none';
    } else if (isActiveCellFromAudit) {
      // Active cell from audit report: highlight with yellow/gold background and special border
      cellBackgroundColor = '#FFF3E0';
      cellBorderStyles = {
        borderTopWidth: '3px',
        borderTopStyle: 'solid',
        borderTopColor: '#FF9800',
        borderRightWidth: '3px',
        borderRightStyle: 'solid',
        borderRightColor: '#FF9800',
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#FF9800',
        borderLeftWidth: '3px',
        borderLeftStyle: 'solid',
        borderLeftColor: '#FF9800'
      };
      boxShadow = '0 2px 12px 0 rgba(255, 152, 0, 0.47)';
    } else if (isCurrentCellBeingHovered) {
      // The specific cell being hovered gets white background with blue borders on all sides
      cellBackgroundColor = '#FFFFFF';
      cellBorderStyles = {
        borderTopWidth: '1px',
        borderTopStyle: 'solid', 
        borderTopColor: '#3874FF',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: '#3874FF',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#3874FF',
        borderLeftWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: '#3874FF'
      };
    } else if (isOtherCellInRowBeingHovered) {
      // Other cells in the same row get teal background and hide their individual borders
      cellBackgroundColor = 'transparent'; // Row container will provide the teal background
      cellBorderStyles = {
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: '#D0D5E3',
        borderBottomWidth: '0px',
        borderBottomStyle: 'none',
        borderBottomColor: 'transparent',
        borderTopWidth: '0px',
        borderTopStyle: 'none',
        borderTopColor: 'transparent',
        borderLeftWidth: '0px',
        borderLeftStyle: 'none',
        borderLeftColor: 'transparent'
      };
    } else {
      // Default state - standard gray borders
      cellBorderStyles = {
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: '#D0D5E3',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#D0D5E3',
        borderTopWidth: '0px',
        borderTopStyle: 'none',
        borderTopColor: 'transparent',
        borderLeftWidth: '0px',
        borderLeftStyle: 'none',
        borderLeftColor: 'transparent'
      };
    }

    return (
      <div
        className={`${className} ${isEditable ? 'cursor-pointer transition-all duration-200 group editable-cell' : ''} relative`}
        style={{
          ...style,
          ...cellBorderStyles,
          backgroundColor: cellBackgroundColor,
          boxShadow: boxShadow
        }}
        data-cell-id={rowIndex >= 0 ? `${rowIndex}-${columnKey}` : undefined}
        onClick={(e) => {
          if (isEditable) {
            // Ensure we clear any existing editing state first
            if (editingCell && (editingCell.rowId !== row.id || editingCell.columnKey !== columnKey)) {
              cancelEdit();
            }
            // Clear tab active state when clicking to edit
            setTabActiveCell(null);
            startEdit(row.id, columnKey, value);
          }
        }}
        title={isEditable ? 'Click to edit' : String(value)}
        tabIndex={isEditable ? 0 : -1}
        onKeyDown={(e) => {
          if (isEditable && rowIndex >= 0) {
            handleCellKeyDown(e, rowIndex, columnKey);
          }
        }}
        onMouseEnter={() => handleCellHover(row.id, cellId, columnIndex)}
        onMouseLeave={handleCellLeave}
      >
        {/* Placeholder handling for various fields */}
        {columnKey === 'partCode' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Part Code
          </span>
        ) : columnKey === 'invoiceDescription' && (!value || value === '') ? (
          <div className="flex items-center w-full overflow-hidden">
            <img src={gridIcon} alt="" style={{ width: '18px', height: '18px' }} className="mr-1.5 flex-shrink-0" />
            <span 
              className="text-sm font-normal truncate block flex items-center"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
            >
              Enter Invoice Description
              {row.sNo === '1/1' && (
                <span 
                  className="ml-1 inline-block w-1 h-1 rounded-full"
                  style={{ backgroundColor: '#FF0000' }}
                ></span>
              )}
            </span>
          </div>
        ) : columnKey === 'concatenatedDescription' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Concatenated Description
          </span>
        ) : columnKey === 'hsn' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block flex items-center"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter HSN
            {row.sNo === '1/2' && (
              <span 
                className="ml-1 inline-block w-1 h-1 rounded-full"
                style={{ backgroundColor: '#FF0000' }}
              ></span>
            )}
          </span>
        ) : columnKey === 'bcdNotificationNo' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Notification No
          </span>
        ) : columnKey === 'bcdSrNo' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Sr.No
          </span>
        ) : columnKey === 'bcdRate' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Rate
          </span>
        ) : columnKey === 'bcdAmount' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Amount
          </span>
        ) : columnKey === 'igstNotificationNo' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Notification No
          </span>
        ) : columnKey === 'igstSrNo' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Sr.No
          </span>
        ) : columnKey === 'igstRate' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Rate
          </span>
        ) : columnKey === 'igstAmount' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Amount
          </span>
        ) : columnKey === 'saptaNotificationNo' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Notification No
          </span>
        ) : columnKey === 'saptaNotificationSrNo' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Sr.No
          </span>
        ) : columnKey === 'saptaRate' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Rate
          </span>
        ) : columnKey === 'saptaAmount' && (!value || value === '') ? (
          <span 
            className="text-sm font-normal truncate block"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9497A1' }}
          >
            Enter Amount
          </span>
        ) : (
          <div className="flex items-center w-full overflow-hidden relative">
            {columnKey === 'invoiceDescription' && (
               <img 
                 src={gridIcon} 
                 alt="" 
                 style={{ width: '18px', height: '18px', cursor: 'pointer' }} 
                 className="mr-1.5 flex-shrink-0" 
                 onClick={(e) => {
                   e.stopPropagation();
                   setShowAdvanceItemMaster(true);
                 }}
               />
            )}
            <div className="flex items-center justify-between flex-1 min-w-0 overflow-hidden">
              <span 
                className="text-sm font-normal truncate block flex-1" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '14px',
                  color: columnKey === 'partCode' || columnKey === 'invoiceDescription' || columnKey === 'hsn' ? '#7E22CE' : 
                         columnKey === 'concatenatedDescription' ? '#3874FF' : '#000000'
                }}
              >
                {String(value || '')}
              </span>
              
              {(columnKey === 'invoiceDescription' || columnKey === 'concatenatedDescription') && (
                <span 
                  className="text-[10px] whitespace-nowrap flex-shrink-0 ml-1"
                  style={{
                    color: String(value || '').length > 500 ? '#F97316' : '#9497A1',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {String(value || '').length}/500
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tooltip for Assble Duty column */}
        {columnKey === 'assbleDuty' && value && value !== '' && value !== '0' && value !== '0.00' && (
          <Popover open={tooltipOpen === `${row.id}-assbleDuty`} onOpenChange={(open) => {
            if (!open) setTooltipOpen(null);
          }}>
            <PopoverTrigger asChild>
              <div 
                className="absolute inset-0 cursor-help" 
                onMouseEnter={() => setTooltipOpen(`${row.id}-assbleDuty`)}
                onMouseLeave={() => setTooltipOpen(null)}
              />
            </PopoverTrigger>
            <PopoverContent 
              className="w-80 p-4 border-0 shadow-lg" 
              style={{ backgroundColor: '#050E25' }}
              side="top" 
              align="start"
              onMouseEnter={() => setTooltipOpen(`${row.id}-assbleDuty`)}
              onMouseLeave={() => setTooltipOpen(null)}
            >
              <div className="space-y-2">
                <div className="text-sm font-semibold mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
                  Duty Breakdown
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: '#B8BCC8' }}>Basic Customs Duty (BCD)</span>
                    <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{row.bcdAmount || '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: '#B8BCC8' }}>Customs Agri & Infrastructure Development Cess</span>
                    <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{row.aicedAmount || '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: '#B8BCC8' }}>Social Welfare Charges</span>
                    <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{row.swcAmount || '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: '#B8BCC8' }}>Countervailing Duty</span>
                    <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{row.cvdAmount || '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: '#B8BCC8' }}>IGST Levy</span>
                    <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{row.igstAmount || '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span style={{ color: '#B8BCC8' }}>IGST Compensation Cess Levy</span>
                    <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{row.igstCompCessAmount || '0.00'}</span>
                  </div>
                  <div className="border-t mt-2 pt-2" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <div className="flex justify-between text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span style={{ color: '#FFFFFF' }}>Total</span>
                      <span style={{ color: '#FFFFFF' }}>{value}</span>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
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

  // Group data by invoice number (extracted from sNo like "1/1" → invoice 1)
  // Apply filters to data
  const filteredData = data.filter(row => {
    // Apply Invoice Filter Prop if present
    if (invoiceFilter) {
      const invoiceNum = row.sNo.split('/')[0];
      if (invoiceNum !== invoiceFilter) {
        return false;
      }
    }

    // Apply search filter first
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        (row.sNo || '').toLowerCase().includes(query) ||
        (row.partCode || '').toLowerCase().includes(query) ||
        (row.invoiceDescription || '').toLowerCase().includes(query) ||
        (row.concatenatedDescription || '').toLowerCase().includes(query) ||
        (row.hsn || '').toLowerCase().includes(query) ||
        (row.bcdNotificationNo || '').toLowerCase().includes(query) ||
        (row.bcdSrNo || '').toLowerCase().includes(query) ||
        (row.countryOfOrigin || '').toLowerCase().includes(query) ||
        (row.sourceCountry || '').toLowerCase().includes(query) ||
        (row.transitCountry || '').toLowerCase().includes(query) ||
        (row.brand || '').toLowerCase().includes(query) ||
        (row.model || '').toLowerCase().includes(query) ||
        (row.grade || '').toLowerCase().includes(query) ||
        (row.specification || '').toLowerCase().includes(query) ||
        (row.quantity || '').toLowerCase().includes(query) ||
        (row.uqc || '').toLowerCase().includes(query) ||
        (row.rate || '').toLowerCase().includes(query) ||
        (row.amount || '').toLowerCase().includes(query);
      
      if (!matchesSearch) {
        return false;
      }
    }
    
    // Filter by Invoice Number (from S.No.)
    const invoiceNum = row.sNo.split('/')[0];
    if (filteredInvoices.length > 0 && !filteredInvoices.includes(invoiceNum)) {
      return false;
    }
    
    // Filter by Part Code
    if (filteredPartCodes.length > 0 && !filteredPartCodes.includes(row.partCode)) {
      return false;
    }
    
    // Filter by Invoice Description
    if (filteredInvoiceDescriptions.length > 0 && !filteredInvoiceDescriptions.includes(row.invoiceDescription)) {
      return false;
    }
    
    // Filter by Concatenated Description
    if (filteredConcatenatedDescriptions.length > 0 && !filteredConcatenatedDescriptions.includes(row.concatenatedDescription)) {
      return false;
    }
    
    // Filter by HSN
    if (filteredHSN.length > 0 && !filteredHSN.includes(row.hsn)) {
      return false;
    }
    
    // Filter by Country of Origin
    if (filteredCountries.length > 0 && !filteredCountries.includes(row.countryOfOrigin)) {
      return false;
    }
    
    // Filter by Brand
    if (filteredBrands.length > 0 && !filteredBrands.includes(row.brand)) {
      return false;
    }
    
    return true;
  });

  // Group filtered data by invoice
  const groupedData = filteredData.reduce((acc, row) => {
    const invoiceNum = row.sNo.split('/')[0];
    if (!acc[invoiceNum]) {
      acc[invoiceNum] = [];
    }
    acc[invoiceNum].push(row);
    return acc;
  }, {} as Record<string, ItemRow[]>);

  // Calculate totals for each invoice
  const invoiceTotals = Object.keys(groupedData).reduce((acc, invoiceNum) => {
    const invoiceRows = groupedData[invoiceNum];
    acc[invoiceNum] = {
      quantity: invoiceRows.reduce((sum, row) => sum + parseFloat(row.quantity || '0'), 0),
      amount: invoiceRows.reduce((sum, row) => sum + parseFloat(row.amount.replace(/,/g, '') || '0'), 0),
      assblValue: invoiceRows.reduce((sum, row) => sum + parseFloat((row.assblValue || '0').replace(/,/g, '') || '0'), 0),
      assbleDuty: invoiceRows.reduce((sum, row) => sum + parseFloat((row.assbleDuty || '0').replace(/,/g, '') || '0'), 0),
      bcdAmount: invoiceRows.reduce((sum, row) => sum + parseFloat((row.bcdAmount || '0').replace(/,/g, '') || '0'), 0),
      aicedAmount: invoiceRows.reduce((sum, row) => sum + parseFloat((row.aicedAmount || '0').replace(/,/g, '') || '0'), 0),
      swcAmount: invoiceRows.reduce((sum, row) => sum + parseFloat((row.swcAmount || '0').replace(/,/g, '') || '0'), 0),
      cvdAmount: invoiceRows.reduce((sum, row) => sum + parseFloat((row.cvdAmount || '0').replace(/,/g, '') || '0'), 0),
      igstAmount: invoiceRows.reduce((sum, row) => sum + parseFloat((row.igstAmount || '0').replace(/,/g, '') || '0'), 0),
      igstCompCessAmount: invoiceRows.reduce((sum, row) => sum + parseFloat((row.igstCompCessAmount || '0').replace(/,/g, '') || '0'), 0)
    };
    return acc;
  }, {} as Record<string, { quantity: number; amount: number; assblValue: number; assbleDuty: number; bcdAmount: number; aicedAmount: number; swcAmount: number; cvdAmount: number; igstAmount: number; igstCompCessAmount: number }>);

  // Calculate grand totals for footer (use filtered data)
  const totalQuantity = filteredData.reduce((sum, row) => sum + parseFloat(row.quantity || '0'), 0);
  const totalAmount = filteredData.reduce((sum, row) => sum + parseFloat(row.amount.replace(/,/g, '') || '0'), 0);
  const totalAssblValue = filteredData.reduce((sum, row) => sum + parseFloat((row.assblValue || '0').replace(/,/g, '') || '0'), 0);
  const totalAssbleDuty = filteredData.reduce((sum, row) => sum + parseFloat((row.assbleDuty || '0').replace(/,/g, '') || '0'), 0);
  const totalBcdAmount = filteredData.reduce((sum, row) => sum + parseFloat((row.bcdAmount || '0').replace(/,/g, '') || '0'), 0);
  const totalAicedAmount = filteredData.reduce((sum, row) => sum + parseFloat((row.aicedAmount || '0').replace(/,/g, '') || '0'), 0);
  const totalSwcAmount = filteredData.reduce((sum, row) => sum + parseFloat((row.swcAmount || '0').replace(/,/g, '') || '0'), 0);
  const totalCvdAmount = filteredData.reduce((sum, row) => sum + parseFloat((row.cvdAmount || '0').replace(/,/g, '') || '0'), 0);
  const totalIgstAmount = filteredData.reduce((sum, row) => sum + parseFloat((row.igstAmount || '0').replace(/,/g, '') || '0'), 0);
  const totalIgstCompCessAmount = filteredData.reduce((sum, row) => sum + parseFloat((row.igstCompCessAmount || '0').replace(/,/g, '') || '0'), 0);

  // Invoice numbers to invoice IDs mapping
  const invoiceNumbers: Record<string, string> = {
    '1': '123456789012345',
    '2': '384838858384845',
    '3': '728493827461029',
    '4': '918273645019283'
  };

  const columnHeaders = filteredColumns.map(c => c.header);
  const columnKeys = filteredColumns.map(c => c.key) as (keyof ItemRow)[];
  const leftColumnHeaders = ['', 'S.No.', 'Part Code']; // First column is for checkbox

  // CSS classes for scrollbar control
  const hiddenScrollbarClass = 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden';
  const visibleScrollbarClass = 'overflow-x-auto overflow-y-hidden [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500';

  // Helper function to render invoice header row
  const renderInvoiceHeader = (invoiceNum: string, section: 'left' | 'middle' | 'right') => {
    const invoiceId = invoiceNumbers[invoiceNum] || '';
    const invoiceText = `Inv ${invoiceNum}. ${invoiceId}`;

    if (section === 'left') {
      return (
        <div key={`invoice-header-${invoiceNum}-left`} className="flex" style={{ height: '30px', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center px-2" style={{ width: `${leftSectionWidth}px` }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#050E25' }}>
              {invoiceText}
            </span>
          </div>
        </div>
      );
    } else if (section === 'middle') {
      return (
        <div key={`invoice-header-${invoiceNum}-middle`} style={{ height: '30px', backgroundColor: '#FFFFFF', width: `${scrollWidth}px` }} />
      );
    } else {
      return (
        <div key={`invoice-header-${invoiceNum}-right`} style={{ height: '30px', backgroundColor: '#FFFFFF' }} />
      );
    }
  };

  // Helper function to render invoice footer row
  const renderInvoiceFooter = (invoiceNum: string, section: 'left' | 'middle' | 'right') => {
    const totals = invoiceTotals[invoiceNum];

    if (section === 'left') {
      return (
        <div key={`invoice-footer-${invoiceNum}-left`} className="flex" style={{ height: '36px', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center px-2" style={{ width: `${leftSectionWidth}px`, fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600' }}>
            <span>TOTAL</span>
          </div>
        </div>
      );
    } else if (section === 'middle') {
      return (
        <div key={`invoice-footer-${invoiceNum}-middle`} className="flex" style={{ height: '36px', backgroundColor: '#FFFFFF', width: `${scrollWidth}px` }}>
          {columnKeys.map((key, index) => (
            <div 
              key={`footer-${invoiceNum}-${key}`}
              className="h-full flex items-center px-2 relative"
              style={{ 
                width: `${columnWidths[index]}px`,
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: '#D0D5E3',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#050E25'
              }}
            >
              {key === 'quantity' && (
                <span className="truncate">{totals.quantity.toLocaleString()}</span>
              )}
              {key === 'amount' && (
                <span className="truncate">{totals.amount.toLocaleString()}</span>
              )}
              {key === 'assblValue' && totals.assblValue > 0 && (
                <span className="truncate">{totals.assblValue.toLocaleString()}</span>
              )}
              {key === 'assbleDuty' && totals.assbleDuty > 0 && (
                <>
                  <span className="truncate">{totals.assbleDuty.toLocaleString()}</span>
                  <Popover open={tooltipOpen === `footer-${invoiceNum}-assbleDuty`} onOpenChange={(open) => {
                    if (!open) setTooltipOpen(null);
                  }}>
                    <PopoverTrigger asChild>
                      <div 
                        className="absolute inset-0 cursor-help" 
                        onMouseEnter={() => setTooltipOpen(`footer-${invoiceNum}-assbleDuty`)}
                        onMouseLeave={() => setTooltipOpen(null)}
                      />
                    </PopoverTrigger>
                    <PopoverContent 
                      className="w-80 p-4 border-0 shadow-lg" 
                      style={{ backgroundColor: '#050E25' }}
                      side="top" 
                      align="start"
                      onMouseEnter={() => setTooltipOpen(`footer-${invoiceNum}-assbleDuty`)}
                      onMouseLeave={() => setTooltipOpen(null)}
                    >
                      <div className="space-y-2">
                        <div className="text-sm font-semibold mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
                          Duty Breakdown
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <span style={{ color: '#B8BCC8' }}>Basic Customs Duty (BCD)</span>
                            <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totals.bcdAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <span style={{ color: '#B8BCC8' }}>Customs Agri & Infrastructure Development Cess</span>
                            <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totals.aicedAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <span style={{ color: '#B8BCC8' }}>Social Welfare Charges</span>
                            <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totals.swcAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <span style={{ color: '#B8BCC8' }}>Countervailing Duty</span>
                            <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totals.cvdAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <span style={{ color: '#B8BCC8' }}>IGST Levy</span>
                            <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totals.igstAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <span style={{ color: '#B8BCC8' }}>IGST Compensation Cess Levy</span>
                            <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totals.igstCompCessAmount.toLocaleString()}</span>
                          </div>
                          <div className="border-t mt-2 pt-2" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                            <div className="flex justify-between text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <span style={{ color: '#FFFFFF' }}>Total</span>
                              <span style={{ color: '#FFFFFF' }}>{totals.assbleDuty.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div key={`invoice-footer-${invoiceNum}-right`} style={{ height: '36px', backgroundColor: '#FFFFFF' }} />
      );
    }
  };

  return (
    <div id="itemDetails" className="w-full relative overflow-hidden border border-gray-300 table-component" style={{ fontFamily: 'Inter, sans-serif', height: '100%' }}>
      {showHeader && (
        <SectionHeader 
          title="Item Details" 
          onAdd={handleAddRow} 
          showSearch={true}
          searchValue={searchQuery}
          onSearchChange={handleSearch}
        />
      )}
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
      
      {/* Table Container with Header, Scrollable Body, and Fixed Footer */}
      <div 
        className="w-full flex flex-col"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          height: showHeader ? 'calc(100% - 48px)' : '100%'
        }}
      >
        
        {/* Fixed Header Row */}
        <div 
          className="w-full grid"
          style={{ 
            gridTemplateColumns: `${leftSectionWidth}px 1fr 50px`,
            backgroundColor: '#EBEEF7',
            height: '34px',
            minHeight: '34px',
            maxHeight: '34px'
          }}
        >
          {/* Left Header Section - Now includes Checkbox, S.No., Part Code */}
          <div className="flex">
            {leftColumnHeaders.map((header, index) => (
              <Resizable
                key={`left-header-${index}`}
                size={{ width: leftColumnWidths[index], height: 34 }}
                onResizeStop={(e, direction, ref, delta) => {
                  const minWidths = [40, 60, 120]; // Minimum widths for checkbox, S.No., Part Code
                  const newWidth = leftColumnWidths[index] + delta.width;
                  if (newWidth >= minWidths[index]) {
                    handleLeftColumnResize(index, newWidth);
                  }
                }}
                minWidth={index === 0 ? 40 : index === 1 ? 60 : 120}
                maxWidth={index === 0 ? 80 : index === 1 ? 150 : 400}
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
                    position: 'absolute',
                    right: '0px',
                    top: '0px',
                    bottom: '0px',
                    width: '4px',
                    cursor: 'col-resize',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                <div 
                  className="h-full flex items-center justify-center px-2 relative gap-1"
                  style={{ 
                    borderRightWidth: '1px',
                    borderRightStyle: 'solid',
                    borderRightColor: '#D0D5E3',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#050E25'
                  }}
                >
                  {index === 0 ? (
                    <Checkbox 
                      checked={selectAll} 
                      onCheckedChange={handleSelectAll}
                      className="border-gray-300"
                      style={{ 
                        borderColor: '#9CA3AF',
                        backgroundColor: 'transparent',
                        width: '18px',
                        height: '18px'
                      }}
                    />
                  ) : index === 1 ? (
                    <>
                      <span className="flex-1 truncate">{header}</span>
                      <Popover open={openFilterColumn === 'sNo'} onOpenChange={(open) => setOpenFilterColumn(open ? 'sNo' : null)}>
                        <PopoverTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-[18px] h-[18px] p-0 hover:bg-gray-200"
                          >
                            <FilterIcon 
                              className="w-[18px] h-[18px] text-[#050E25] opacity-60" 
                              isOpen={openFilterColumn === 'sNo'}
                              onClick={() => setOpenFilterColumn(openFilterColumn === 'sNo' ? null : 'sNo')}
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
                            searchPlaceholder="Search by Invoice"
                            availableJobNumbers={Array.from(new Set(data.map(item => item.sNo.split('/')[0]).filter(v => v)))}
                            initialSelectedJobs={filteredInvoices}
                            onApplyFilter={(selected) => {
                              setFilteredInvoices(selected);
                              setOpenFilterColumn(null);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </>
                  ) : index === 2 ? (
                    <>
                      <span className="flex-1 truncate">{header}</span>
                      <Popover open={openFilterColumn === 'partCode'} onOpenChange={(open) => setOpenFilterColumn(open ? 'partCode' : null)}>
                        <PopoverTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-[18px] h-[18px] p-0 hover:bg-gray-200"
                          >
                            <FilterIcon 
                              className="w-[18px] h-[18px] text-[#050E25] opacity-60" 
                              isOpen={openFilterColumn === 'partCode'}
                              onClick={() => setOpenFilterColumn(openFilterColumn === 'partCode' ? null : 'partCode')}
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
                            title="Filter by Part Code"
                            searchPlaceholder="Search by Part Code"
                            availableJobNumbers={Array.from(new Set(data.map(item => item.partCode).filter(v => v)))}
                            initialSelectedJobs={filteredPartCodes}
                            onApplyFilter={(selected) => {
                              setFilteredPartCodes(selected);
                              setOpenFilterColumn(null);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </>
                  ) : (
                    <span className="truncate">{header}</span>
                  )}
                </div>
              </Resizable>
            ))}
          </div>

          {/* Middle Header Section */}
          <div 
            ref={headerScrollRef}
            className={hiddenScrollbarClass}
            onScroll={handleHeaderScroll}
          >
            <div className="flex" style={{ width: `${scrollWidth}px` }}>
              {columnHeaders.map((header, index) => (
                <Resizable
                  key={`middle-header-${index}`}
                  size={{ width: columnWidths[index], height: 34 }}
                  onResizeStop={(e, direction, ref, delta) => {
                    const newWidth = columnWidths[index] + delta.width;
                    if (newWidth >= 80) {
                      handleColumnResize(index, newWidth);
                    }
                  }}
                  minWidth={80}
                  maxWidth={400}
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
                      position: 'absolute',
                      right: '0px',
                      top: '0px',
                      bottom: '0px',
                      width: '4px',
                      cursor: 'col-resize',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  <div 
                    className="h-full flex items-center justify-center px-2 relative gap-1"
                    style={{ 
                      ...getColumnHeaderHoverStyles(index),
                      borderRightWidth: '1px',
                      borderRightStyle: 'solid',
                      borderRightColor: '#D0D5E3',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#050E25'
                    }}
                    onMouseEnter={() => setHoverState(prev => ({ ...prev, columnIndex: index }))}
                    onMouseLeave={() => setHoverState(prev => ({ ...prev, columnIndex: null }))}
                  >
                    <span className="flex-1 truncate text-center">{header}</span>
                    {/* Render Filter Icon for specific columns */}
                    {['invoiceDescription', 'concatenatedDescription', 'hsn', 'countryOfOrigin', 'brand'].includes(columnKeys[index]) && (
                      <Popover open={openFilterColumn === columnKeys[index]} onOpenChange={(open) => setOpenFilterColumn(open ? columnKeys[index] : null)}>
                        <PopoverTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-[18px] h-[18px] p-0 hover:bg-gray-200"
                          >
                            <FilterIcon 
                              className="w-[18px] h-[18px] text-[#050E25] opacity-60" 
                              isOpen={openFilterColumn === columnKeys[index]}
                              onClick={() => setOpenFilterColumn(openFilterColumn === columnKeys[index] ? null : columnKeys[index])}
                            />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent 
                          align="start" 
                          className="w-[320px] h-[480px] p-0 border-none shadow-lg"
                          side="bottom"
                          sideOffset={5}
                        >
                          {columnKeys[index] === 'invoiceDescription' && (
                            <FiltersSort 
                              title="Filter by Invoice Description"
                              searchPlaceholder="Search by Description"
                              availableJobNumbers={Array.from(new Set(data.map(item => item.invoiceDescription).filter(v => v)))}
                              initialSelectedJobs={filteredInvoiceDescriptions}
                              onApplyFilter={(selected) => {
                                setFilteredInvoiceDescriptions(selected);
                                setOpenFilterColumn(null);
                              }}
                            />
                          )}
                          {columnKeys[index] === 'concatenatedDescription' && (
                            <FiltersSort 
                              title="Filter by Concatenated Description"
                              searchPlaceholder="Search by Description"
                              availableJobNumbers={Array.from(new Set(data.map(item => item.concatenatedDescription).filter(v => v)))}
                              initialSelectedJobs={filteredConcatenatedDescriptions}
                              onApplyFilter={(selected) => {
                                setFilteredConcatenatedDescriptions(selected);
                                setOpenFilterColumn(null);
                              }}
                            />
                          )}
                          {columnKeys[index] === 'hsn' && (
                            <FiltersSort 
                              title="Filter by HSN"
                              searchPlaceholder="Search by HSN"
                              availableJobNumbers={Array.from(new Set(data.map(item => item.hsn).filter(v => v)))}
                              initialSelectedJobs={filteredHSN}
                              onApplyFilter={(selected) => {
                                setFilteredHSN(selected);
                                setOpenFilterColumn(null);
                              }}
                            />
                          )}
                          {columnKeys[index] === 'countryOfOrigin' && (
                            <FiltersSort 
                              title="Filter by Country of Origin"
                              searchPlaceholder="Search by Country"
                              availableJobNumbers={Array.from(new Set(data.map(item => item.countryOfOrigin).filter(v => v)))}
                              initialSelectedJobs={filteredCountries}
                              onApplyFilter={(selected) => {
                                setFilteredCountries(selected);
                                setOpenFilterColumn(null);
                              }}
                            />
                          )}
                          {columnKeys[index] === 'brand' && (
                            <FiltersSort 
                              title="Filter by Brand"
                              searchPlaceholder="Search by Brand"
                              availableJobNumbers={Array.from(new Set(data.map(item => item.brand).filter(v => v)))}
                              initialSelectedJobs={filteredBrands}
                              onApplyFilter={(selected) => {
                                setFilteredBrands(selected);
                                setOpenFilterColumn(null);
                              }}
                            />
                          )}
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                </Resizable>
              ))}
            </div>
          </div>

          {/* Right Header Section */}
          <div 
            className="flex items-center justify-center px-2"
            style={{ 
              borderLeftWidth: '1px',
              borderLeftStyle: 'solid',
              borderLeftColor: '#D0D5E3',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#050E25'
            }}
          >
            <MoreVertical size={16} />
          </div>
        </div>
        
        {/* Scrollable Data Body */}
        <div 
          className="flex-1 overflow-y-auto overflow-x-hidden [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500"
          style={{
            display: 'grid',
            gridTemplateColumns: `${leftSectionWidth}px 1fr 50px`,
            minHeight: '0',
            maxHeight: 'calc(100% - 34px - 40px)' // Subtract header and footer heights
          }}
        >
          {/* Left Data Section */}
          <div className="flex flex-col" style={{ backgroundColor: 'white' }}>
            {Object.keys(groupedData).map((invoiceNum, invIndex) => {
              const invoiceRows = groupedData[invoiceNum];
              const startRowIndex = data.findIndex(r => r.sNo.startsWith(`${invoiceNum}/`));
              
              return (
                <div key={`invoice-${invoiceNum}-left`}>
                  {/* Invoice Separator */}
                  <div style={{ width: '100%' }}>
                    <InvoiceSeparator 
                      invoiceNumber={invoiceNum} 
                      invoiceId={invoiceIds[invoiceNum]}
                      invoiceDate={invoiceDates[invoiceNum]}
                      invoiceAmount={invoiceAmounts[invoiceNum]}
                      isCollapsed={collapsedInvoices[invoiceNum]}
                      onToggleCollapse={() => toggleInvoiceCollapse(invoiceNum)}
                      showId={false}
                    />
                  </div>
                  
                  {/* Invoice Items */}
                  {!collapsedInvoices[invoiceNum] && invoiceRows.map((row, relativeIndex) => {
                    const rowIndex = data.indexOf(row);
                    // Check if row has error (first row or second row of entire dataset)
                    const rowHasError = rowIndex === 0 || rowIndex === 1;
                    
                    return (
                    <div key={row.id}>
                      <div className="flex">
                {/* Checkbox Column */}
                <div
                  className={`h-[36px] flex items-center justify-center relative ${ 
                    shouldShowRowHighlight(row.id) && !shouldShowCellHover(`${row.id}-left-0`) 
                      ? 'bg-[#CEF6F0]' 
                      : ''
                  }`}
                  style={{ 
                    width: `${leftColumnWidths[0]}px`,
                    minWidth: `${leftColumnWidths[0]}px`,
                    borderRightWidth: '1px',
                    borderRightStyle: 'solid',
                    borderRightColor: '#D0D5E3',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#D0D5E3'
                  }}
                >
                  {/* Red vertical bar for error rows */}
                  {rowHasError && (
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
                  <Checkbox 
                    checked={row.isSelected} 
                    onCheckedChange={() => handleRowSelect(row.id)}
                    className="border-gray-300"
                    style={{ 
                      borderColor: '#9CA3AF',
                      backgroundColor: 'transparent',
                      width: '18px',
                      height: '18px'
                    }}
                  />
                </div>

                {/* S.No. Column */}
                <div
                  className={`h-[36px] flex items-center justify-between px-2 relative ${ 
                    shouldShowRowHighlight(row.id) && !shouldShowCellHover(`${row.id}-left-1`) 
                      ? 'bg-[#CEF6F0]' 
                      : ''
                  }`}
                  style={{ 
                    width: `${leftColumnWidths[1]}px`,
                    minWidth: `${leftColumnWidths[1]}px`,
                    borderRightWidth: '1px',
                    borderRightStyle: 'solid',
                    borderRightColor: '#D0D5E3',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#D0D5E3'
                  }}
                >
                  <span 
                    className="text-sm font-normal text-[#000000] cursor-pointer hover:underline" 
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onExpandRow?.(row, 'stacked');
                    }}
                  >
                    {row.sNo}
                  </span>
                  <div 
                    className="size-[18px] shrink-0 cursor-pointer hover:bg-gray-100 rounded flex items-center justify-center ml-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      onExpandRow?.(row, 'split');
                    }}
                  >
                    <ExpandContent />
                  </div>
                </div>

                {/* Part Code Column */}
                <div
                  className={`h-[36px] flex items-center px-2 relative ${ 
                    shouldShowRowHighlight(row.id) && !shouldShowCellHover(`${row.id}-left-2`) 
                      ? 'bg-[#CEF6F0]' 
                      : ''
                  }`}
                  style={{ 
                    width: `${leftColumnWidths[2]}px`,
                    minWidth: `${leftColumnWidths[2]}px`,
                    borderRightWidth: '1px',
                    borderRightStyle: 'solid',
                    borderRightColor: '#D0D5E3',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#D0D5E3'
                  }}
                >
                  {renderEditableCell(
                    row,
                    'partCode',
                    row.partCode,
                    'text-sm font-normal text-black',
                    { fontFamily: 'Inter, sans-serif', fontSize: '14px', width: '100%' },
                    `${row.id}-left-2`,
                    -1, // columnIndex for left section
                    rowIndex,
                    relativeIndex === 0 // isFirstItemInInvoice
                  )}
                </div>
              </div>
              
              {/* Add Row Button - Only show after last row of each invoice */}
              {relativeIndex === invoiceRows.length - 1 && (
                <div className="flex" style={{ width: `${leftSectionWidth}px`, paddingLeft: '8px' }}>
                  <AddRowButton onAddRow={() => handleAddRowAfter(row.id)} />
                </div>
              )}
              </div>
            );
          })}
                  
                  {/* Invoice Footer */}
                  {!collapsedInvoices[invoiceNum] && renderInvoiceFooter(invoiceNum, 'left')}
                </div>
              );
            })}
          </div>

          {/* Middle Data Section */}
          <div 
            ref={dataScrollRef}
            className={hiddenScrollbarClass} 
            style={{ position: 'relative', backgroundColor: 'white' }}
            onScroll={handleDataScroll}
          >
            <div className="flex flex-col" style={{ width: `${scrollWidth}px`, backgroundColor: 'white' }}>
              {Object.keys(groupedData).map((invoiceNum, invIndex) => {
                const invoiceRows = groupedData[invoiceNum];
                const startRowIndex = data.findIndex(r => r.sNo.startsWith(`${invoiceNum}/`));
                
                return (
                  <div key={`invoice-${invoiceNum}-middle`}>
                    {/* Invoice Separator */}
                    <div style={{ width: `${scrollWidth}px` }}>
                      <InvoiceSeparator 
                        invoiceNumber={invoiceNum} 
                        invoiceId={invoiceIds[invoiceNum]}
                        invoiceDate={invoiceDates[invoiceNum]}
                        invoiceAmount={invoiceAmounts[invoiceNum]}
                        showText={false}
                        showToggle={false}
                        isCollapsed={collapsedInvoices[invoiceNum]}
                        onToggleCollapse={() => toggleInvoiceCollapse(invoiceNum)}
                      />
                    </div>
                    
                    {/* Invoice Items */}
                    {!collapsedInvoices[invoiceNum] && invoiceRows.map((row, relativeIndex) => {
                      const rowIndex = data.indexOf(row);
                      return (
                        <div key={row.id}>
                        <div 
                          className={`flex ${shouldShowRowHighlight(row.id) ? 'bg-[#CEF6F0]' : ''}`}
                        >
                          {columnKeys.map((key, index) => (
                            <div 
                              key={`${row.id}-${key}`} 
                              style={{ 
                                width: `${columnWidths[index]}px`,
                                minWidth: `${columnWidths[index]}px`,
                                height: '36px'
                              }}
                            >
                              {renderEditableCell(
                                row,
                                key,
                                row[key],
                                'px-2 py-2 h-[36px] flex items-center',
                                { fontFamily: 'Inter, sans-serif', fontSize: '14px' },
                                `${row.id}-${key}`,
                                index,
                                rowIndex,
                                relativeIndex === 0 // isFirstItemInInvoice
                              )}
                            </div>
                          ))}
                        </div>
                        
                        {/* Blank row for add button alignment - middle section */}
                        {relativeIndex === invoiceRows.length - 1 && (
                          <div className="flex bg-white" style={{ width: `${scrollWidth}px`, height: '36px' }}>
                          </div>
                        )}
                        </div>
                      );
                    })}
                    
                    {/* Invoice Footer */}
                    {!collapsedInvoices[invoiceNum] && renderInvoiceFooter(invoiceNum, 'middle')}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Data Section */}
          <div className="flex flex-col" style={{ backgroundColor: 'white' }}>
            {Object.keys(groupedData).map((invoiceNum, invIndex) => {
              const invoiceRows = groupedData[invoiceNum];
              
              return (
                <div key={`invoice-${invoiceNum}-right`}>
                  {/* Invoice Separator */}
                  <div style={{ width: '100%' }}>
                    <InvoiceSeparator 
                      invoiceNumber={invoiceNum} 
                      invoiceId={invoiceIds[invoiceNum]}
                      invoiceDate={invoiceDates[invoiceNum]}
                      invoiceAmount={invoiceAmounts[invoiceNum]}
                      showText={false}
                      showToggle={false}
                      isCollapsed={collapsedInvoices[invoiceNum]}
                      onToggleCollapse={() => toggleInvoiceCollapse(invoiceNum)}
                    />
                  </div>
                  
                  {/* Invoice Items */}
                  {!collapsedInvoices[invoiceNum] && invoiceRows.map((row, relativeIndex) => (
                    <div key={`${row.id}-actions`}>
                    <div 
                      className={`h-[36px] flex items-center justify-center px-2 ${
                        shouldShowRowHighlight(row.id) ? 'bg-[#CEF6F0]' : ''
                      }`}
                      style={{ 
                        borderLeftWidth: '1px',
                        borderLeftStyle: 'solid',
                        borderLeftColor: '#D0D5E3',
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#D0D5E3'
                      }}
                    >
                      <ItemActionMenu 
                        onAction={(action) => {
                          if (action === 'add_above') handleAddRowAbove(row.id);
                          if (action === 'add_below') handleAddRowAfter(row.id);
                          if (action === 'duplicate') handleDuplicateItem(row.id);
                          if (action === 'delete') handleDeleteItem(row.id);
                          if (action === 'edit') onExpandRow?.(row, 'stacked');
                        }}
                        trigger={
                          <MoreVertical 
                            size={16} 
                            className="text-gray-400 cursor-pointer hover:text-gray-600 outline-none"
                          />
                        }
                      />
                    </div>
                    
                    {/* Blank row for add button alignment - right section */}
                    {relativeIndex === invoiceRows.length - 1 && (
                      <div className="bg-white" style={{ width: '50px', height: '36px' }} />
                    )}
                    </div>
                  ))}
                  
                  {/* Invoice Footer */}
                  {!collapsedInvoices[invoiceNum] && renderInvoiceFooter(invoiceNum, 'right')}
                </div>
              );
            })}
          </div>
        </div>

        {/* Fixed Footer Row */}
        <div 
          className="w-full grid"
          style={{ 
            gridTemplateColumns: `${leftSectionWidth}px 1fr 50px`,
            backgroundColor: '#FFFFFF',
            height: '40px',
            minHeight: '40px',
            maxHeight: '40px',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: '#D0D5E3'
          }}
        >
          {/* Left Footer Section */}
          <div className="flex">
            {/* Checkbox Column Footer */}
            <div 
              className="h-full flex items-center px-2"
              style={{ 
                width: `${leftColumnWidths[0]}px`,
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: '#D0D5E3',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#050E25'
              }}
            >
              {/* Empty for checkbox column */}
            </div>
            
            {/* S.No. Column Footer */}
            <div 
              className="h-full flex items-center px-2"
              style={{ 
                width: `${leftColumnWidths[1]}px`,
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: '#D0D5E3',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#050E25'
              }}
            >
              {/* Empty for S.No. column */}
            </div>
            
            {/* Part Code Column Footer */}
            <div 
              className="h-full flex items-center px-2"
              style={{ 
                width: `${leftColumnWidths[2]}px`,
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: '#D0D5E3',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#050E25'
              }}
            >
              <span className="truncate">TOTAL</span>
            </div>
          </div>

          {/* Middle Footer Section */}
          <div 
            ref={footerScrollRef}
            className={hiddenScrollbarClass}
            onScroll={handleFooterScroll}
          >
            <div className="flex h-full" style={{ width: `${scrollWidth}px` }}>
              {columnKeys.map((key, index) => (
                <div 
                  key={`footer-${key}`}
                  className="h-full flex items-center px-2 relative"
                  style={{ 
                    width: `${columnWidths[index]}px`,
                    borderRightWidth: '1px',
                    borderRightStyle: 'solid',
                    borderRightColor: '#D0D5E3',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#050E25'
                  }}
                >
                  {key === 'quantity' && (
                    <span className="truncate">{totalQuantity.toLocaleString()}</span>
                  )}
                  {key === 'amount' && (
                    <span className="truncate">{totalAmount.toLocaleString()}</span>
                  )}
                  {key === 'assblValue' && totalAssblValue > 0 && (
                    <span className="truncate">{totalAssblValue.toLocaleString()}</span>
                  )}
                  {key === 'assbleDuty' && totalAssbleDuty > 0 && (
                    <>
                      <span className="truncate">{totalAssbleDuty.toLocaleString()}</span>
                      <Popover open={tooltipOpen === 'footer-overall-assbleDuty'} onOpenChange={(open) => {
                        if (!open) setTooltipOpen(null);
                      }}>
                        <PopoverTrigger asChild>
                          <div 
                            className="absolute inset-0 cursor-help" 
                            onMouseEnter={() => setTooltipOpen('footer-overall-assbleDuty')}
                            onMouseLeave={() => setTooltipOpen(null)}
                          />
                        </PopoverTrigger>
                        <PopoverContent 
                          className="w-80 p-4 border-0 shadow-lg" 
                          style={{ backgroundColor: '#050E25' }}
                          side="top" 
                          align="start"
                          onMouseEnter={() => setTooltipOpen('footer-overall-assbleDuty')}
                          onMouseLeave={() => setTooltipOpen(null)}
                        >
                          <div className="space-y-2">
                            <div className="text-sm font-semibold mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
                              Duty Breakdown
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span style={{ color: '#B8BCC8' }}>Basic Customs Duty (BCD)</span>
                                <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totalBcdAmount.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span style={{ color: '#B8BCC8' }}>Customs Agri & Infrastructure Development Cess</span>
                                <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totalAicedAmount.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span style={{ color: '#B8BCC8' }}>Social Welfare Charges</span>
                                <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totalSwcAmount.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span style={{ color: '#B8BCC8' }}>Countervailing Duty</span>
                                <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totalCvdAmount.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span style={{ color: '#B8BCC8' }}>IGST Levy</span>
                                <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totalIgstAmount.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span style={{ color: '#B8BCC8' }}>IGST Compensation Cess Levy</span>
                                <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{totalIgstCompCessAmount.toLocaleString()}</span>
                              </div>
                              <div className="border-t mt-2 pt-2" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="flex justify-between text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  <span style={{ color: '#FFFFFF' }}>Total</span>
                                  <span style={{ color: '#FFFFFF' }}>{totalAssbleDuty.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Footer Section */}
          <div 
            className="flex items-center justify-center px-2"
            style={{ 
              borderLeftWidth: '1px',
              borderLeftStyle: 'solid',
              borderLeftColor: '#D0D5E3'
            }}
          >
            {/* Empty for actions column */}
          </div>
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedCount > 0 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-[90]">
          <ItemTableBulkActions 
            selectedCount={selectedCount} 
            onAction={handleBulkAction}
          />
        </div>
      )}

      {/* Part Code Modal */}
      {showPartCodeModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowPartCodeModal(false)}
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4">Part Code Details</h3>
            <p>Part Code: {selectedPartCode}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowPartCodeModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Part Code Image Modal */}
      {showPartCodeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={() => setShowPartCodeModal(false)}
        >
          {/* Main Modal Image Container */}
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '1200px',
              height: '824px'
            }}
          >
            {/* Main Modal Image */}
            <img
              src={exampleImage}
              alt={`Part Code: ${selectedPartCode}`}
              style={{
                width: '1200px',
                height: '824px',
                objectFit: 'contain'
              }}
            />
            
            {/* Scrollable Image Overlay - positioned relative to main image */}
            <div
              className="absolute z-10"
              style={{
                left: '244px',
                top: '155px',
                width: '940px',
                height: '585px',
                overflowY: 'auto',
                overflowX: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={scrollableImage}
                alt={`Part Code Details: ${selectedPartCode}`}
                style={{
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20"
              onClick={() => setShowPartCodeModal(false)}
              style={{ fontSize: '18px', color: '#333' }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Advance Item Master Modal */}
      {showAdvanceItemMaster && createPortal(
        <div
          className="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center"
          onClick={() => setShowAdvanceItemMaster(false)}
        >
          <div
            className="relative w-[95vw] max-w-[1280px] h-[700px] z-[2001]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Transparent overlay for Close button matching MasterSelection */}
            <div
              className="absolute top-[24px] right-[12px] w-[30px] h-[30px] cursor-pointer z-[2100] bg-transparent"
              onClick={() => setShowAdvanceItemMaster(false)}
              role="button"
              aria-label="Close"
            />
            
            <div className="w-full h-full bg-white rounded-[16px] overflow-auto">
              <AdvanceItemMaster onClose={() => setShowAdvanceItemMaster(false)} />
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}