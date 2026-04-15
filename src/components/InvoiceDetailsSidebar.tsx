import React, { useState, useEffect, useRef } from 'react';
import { 
  Sheet, 
  SheetContent,
  SheetTitle,
  SheetDescription 
} from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import { 
  FileText, 
  Package,
  X,
  Loader2,
  Maximize2,
  Minimize2,
  Plus
} from 'lucide-react';
import { AddChargesPopover } from './figma/AddChargesPopover';
import AuditSidebar, { type AuditCardData } from './AuditSidebar';
import FloatingAuditReport from './FloatingAuditReport';
import ItemDetailsTable from './ItemDetailsTable';
import StatementsTable from './StatementsTable';
import SupportingDocumentsTable from './SupportingDocumentsTable';
import { Input } from './ui/input';
import { Select, SelectContent as BaseSelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import EnhancedPdfViewer from './EnhancedPdfViewer';
import VerificationStation from './VerificationStation';
import { InvoiceHeader } from './InvoiceHeader';
import { SectionHeader, FormRow, FormField, FigmaSwitch } from './FigmaForm';
import Footer from '../imports/Footer';
import HssDetails from '../imports/HssDetails';
import Onboarding from './Onboarding';
import ItemDetailsSidebar from './ItemDetailsSidebar';

const SelectContent = (props: any) => (
  <BaseSelectContent {...props} className={`[&_*]:text-[14px] ${props.className || ''}`} />
);

interface InvoiceDetailsSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoiceData: any;
  onSave?: (data: any) => void;
  onNextInvoice?: () => void;
  onPrevInvoice?: () => void;
  auditItems?: AuditCardData[];
  initialPdfOpen?: boolean;
  layoutMode?: 'stacked' | 'split';
  dataType?: 'invoice' | 'item';
  jobType?: string;
}

const NAV_ITEMS = [
  { id: 'invoice-info', label: 'Invoice Info', icon: FileText },
  { id: 'item-details', label: 'Item Details', icon: Package },
  { id: 'statements', label: 'Statements', icon: FileText },
  { id: 'supporting-documents', label: 'Supporting Documents', icon: FileText },
];

export default function InvoiceDetailsSidebar({ 
  open, 
  onOpenChange, 
  invoiceData,
  onSave,
  onNextInvoice,
  onPrevInvoice,
  auditItems,
  initialPdfOpen = false,
  layoutMode = 'split',
  dataType = 'invoice',
  jobType
}: InvoiceDetailsSidebarProps) {
  const isExport = jobType === 'Export';
  const [isLoading, setIsLoading] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isAuditFloating, setIsAuditFloating] = useState(false);
  const [svbRelated, setSvbRelated] = useState(false);
  const [formData, setFormData] = useState<any>(invoiceData || {});
  const [sameAsConsignee, setSameAsConsignee] = useState(false);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>('sample_invoice.pdf');
  const [itemDetailsSearch, setItemDetailsSearch] = useState('');
  const [showTour, setShowTour] = useState(false);
  
  // Item Edit State
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isItemEditOpen, setIsItemEditOpen] = useState(false);

  // Trigger tour on first open
  useEffect(() => {
    if (open) {
      const tourShown = localStorage.getItem('invoiceEditTourShown');
      if (!tourShown) {
        const timer = setTimeout(() => setShowTour(true), 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [open]);

  const handleTourComplete = () => {
    setShowTour(false);
    localStorage.setItem('invoiceEditTourShown', 'true');
  };
  
  // Default: Item Details is docked in the right grid (2 grids total)
  // When true: Item Details takes over the entire content area (full screen focus)
  const [isItemDetailsFullScreen, setIsItemDetailsFullScreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'items' | 'statements' | 'docs'>('details');
  
  // Section expanded/collapsed state
  const [sections, setSections] = useState({
    invoiceInfo: true,
    supplierDetails: true,
    svbDetails: true,
    freightInsuranceMisc: true,
    packingCharges: true,
    hssSection: false,
    loadingCharges: false,
    agencyCommission: false,
    discountSection: false,
    miscSubCharges: false,
    brokerDetails: false,
    sellerDetails: false,
    thirdPartyDetails: false,
    otherInfo: false,
    itemDetails: true,
    statements: true,
    supportingDocuments: true
  });

  const SECTION_TITLES: Record<string, string> = {
    invoiceInfo: "Invoice info",
    supplierDetails: jobType === 'Export' ? "Buyer details" : "Supplier details",
    svbDetails: "SVB details",
    freightInsuranceMisc: jobType === 'Export' ? "Freight & Insurance Charges" : "Freight, Insurance & Misc Charges",
    packingCharges: "Packing charges",
    hssSection: "HSS",
    loadingCharges: jobType === 'Export' ? "Commission charges" : "Loading charges",
    agencyCommission: jobType === 'Export' ? "Deduction charges" : "Agency commission",
    discountSection: "Discount",
    miscSubCharges: "Misc sub charges",
    brokerDetails: "Broker details",
    sellerDetails: "Seller details",
    thirdPartyDetails: "Third party details",
    otherInfo: jobType === 'Export' ? "Cargo details" : "Other info",
    itemDetails: "Item details",
    statements: "Statements",
    supportingDocuments: "Supporting documents"
  };

  const toggleableSections = Object.keys(sections);

  const toggleSection = (key: string) => {
    setSections(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const inputClass = "w-full h-full !border-none !outline-none rounded-none bg-transparent px-2 text-[14px] font-medium text-[#050e25] placeholder:text-[#9497a1] transition-none focus:!ring-1 focus:!ring-[#3874FF] focus:!ring-inset focus:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] focus-visible:!ring-1 focus-visible:!ring-[#3874FF] focus-visible:!ring-inset focus-visible:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] hover:ring-1 hover:ring-[#3874FF] hover:ring-inset data-[state=open]:!ring-1 data-[state=open]:!ring-[#3874FF] data-[state=open]:!ring-inset data-[state=open]:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)]";
  const dividerClass = "w-[1px] bg-[#d0d5e3] shrink-0";

  const ChargeRow = ({ label, hasToggle = false, rate, amount, currency, showCurrency = true }: { label: string, hasToggle?: boolean, rate?: string, amount?: string, currency?: string, showCurrency?: boolean }) => {
    const [enabled, setEnabled] = useState(false);
    return (
    <div className="flex w-full min-h-[32px] border-b border-[#d0d5e3] last:border-b-0 group">
      <div className="w-[306px] bg-[#EBEEF7] flex items-center px-2 py-1.5 border-r border-[#d0d5e3] shrink-0 justify-between transition-colors duration-200 group-hover:bg-[#CEF6F0] group-focus-within:bg-[#CEF6F0] relative">
         <div className="absolute inset-0 border border-[#02B196] pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 z-10" />
         <span className="text-[#050e25] text-[14px] font-semibold relative z-20">{label}</span>
         {hasToggle && <div className="w-[90px] relative z-20"><FigmaSwitch fieldId={`charge-${label.replace(/\s+/g, '-').toLowerCase()}`} checked={enabled} onCheckedChange={setEnabled} /></div>}
      </div>
      <div className="w-[86px] bg-white flex items-center px-0 border-r border-[#d0d5e3] shrink-0">
          <Input className={inputClass} placeholder="1" defaultValue={rate} />
      </div>
      <div className="flex-1 bg-white flex items-center px-0 border-r border-[#d0d5e3]">
          <Input className={inputClass} placeholder="Amount" defaultValue={amount} />
      </div>
      {showCurrency && (
        <div className="flex-1 bg-white flex items-center px-0">
             <Select defaultValue={currency?.toLowerCase()}>
                <SelectTrigger className={inputClass}>
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                    <SelectItem value="jpy">JPY</SelectItem>
                    <SelectItem value="cad">CAD</SelectItem>
                </SelectContent>
             </Select>
        </div>
      )}
    </div>
    );
  };

  const ChargesHeader = ({ showCurrency = true }: { showCurrency?: boolean }) => (
    <div className="flex w-full min-h-[32px] border-b border-[#d0d5e3] bg-white">
        <div className="w-[306px] border-r border-[#d0d5e3] shrink-0"></div>
        <div className="w-[86px] bg-[#EBEEF7] flex items-center px-2 py-1.5 border-r border-[#d0d5e3] shrink-0">
            <span className="text-[#050e25] text-[14px] font-semibold">Rate</span>
        </div>
        <div className="flex-1 bg-[#EBEEF7] flex items-center px-2 py-1.5 border-r border-[#d0d5e3]">
            <span className="text-[#050e25] text-[14px] font-semibold">Amount</span>
        </div>
        {showCurrency && (
          <div className="flex-1 bg-[#EBEEF7] flex items-center px-2 py-1.5">
              <span className="text-[#050e25] text-[14px] font-semibold">Currency</span>
          </div>
        )}
    </div>
  );

  useEffect(() => {
    setIsPdfOpen(false); // Explicitly ensure it stays false unless user triggers it
  }, [initialPdfOpen]);

  useEffect(() => {
    if (invoiceData) {
      setFormData(invoiceData);
    }
  }, [invoiceData]);

  const updateField = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleAuditFloat = () => {
    setIsAuditFloating(true);
    setIsAuditOpen(false);
  };

  const handleFloatingDock = () => {
    setIsAuditFloating(false);
    setIsAuditOpen(true);
  };

  useEffect(() => {
    if (invoiceData) {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }
  }, [invoiceData]);
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const visibleSections = useRef(new Set<string>());

  // --- RENDER FUNCTIONS FOR SECTIONS ---

  const renderInvoiceInfo = (index: number) => {
    return (
    <div id="invoice-info" className="flex flex-col w-full">
      <SectionHeader title={SECTION_TITLES.invoiceInfo} expanded={sections.invoiceInfo} onToggle={() => toggleSection('invoiceInfo')} />
      {sections.invoiceInfo && (
        <>
          <FormRow>
            <FormField label="Inv. No & Dt." required hasError={!formData.invoiceNumber || !formData.invoiceDate}>
               <div className="flex w-full h-full">
                 <Input 
                    placeholder="Inv No" 
                    value={formData.invoiceNumber || ''} 
                    onChange={(e) => updateField('invoiceNumber', e.target.value)}
                    className={`${inputClass} flex-1 text-[#7E22CE]`} 
                 />
                 <div className={dividerClass} />
                 <Input 
                    type="date" 
                    value={formData.invoiceDate || ''} 
                    onChange={(e) => updateField('invoiceDate', e.target.value)}
                    className={`${inputClass} w-[110px] text-[#7E22CE]`} 
                 />
               </div>
            </FormField>
            {!isExport && (
              <FormField label="AssVal. & Duty">
                 <div className="flex w-full h-full">
                   <Input placeholder="Value" className={`${inputClass} flex-1`} />
                   <div className={dividerClass} />
                   <Input placeholder="Duty" className={`${inputClass} w-[80px]`} />
                 </div>
              </FormField>
            )}
          </FormRow>
          {isExport ? (
            <>
              <FormRow>
                <FormField label="Nature of Contract" required hasError={!formData.terms}>
                  <Select value={formData.terms?.toLowerCase() || ''} onValueChange={(val) => updateField('terms', val)}>
                    <SelectTrigger className={`${inputClass} flex justify-between`}><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent><SelectItem value="fob">FOB</SelectItem><SelectItem value="cif">CIF</SelectItem></SelectContent>
                  </Select>
                </FormField>
                <FormField label="Unit Price Includes">
                   <Select value={formData.unitPriceIncludes || ''} onValueChange={(val) => updateField('unitPriceIncludes', val)}>
                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent><SelectItem value="freight">Freight</SelectItem></SelectContent>
                   </Select>
                </FormField>
              </FormRow>
              <FormRow>
                <FormField label="Terms Place" required hasError={!formData.termsPlace}>
                  <Input 
                    placeholder="Place" 
                    className={inputClass} 
                    value={formData.termsPlace || ''}
                    onChange={(e) => updateField('termsPlace', e.target.value)}
                  />
                </FormField>
                <FormField label="IGST Calculation Method">
                   <Select value={formData.igstCalculationMethod || ''} onValueChange={(val) => updateField('igstCalculationMethod', val)}>
                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent><SelectItem value="method1">Value Wise</SelectItem></SelectContent>
                   </Select>
                </FormField>
              </FormRow>
              <FormRow>
                <FormField label="Nature of Payment">
                   <Select value={formData.natureOfPayment || ''} onValueChange={(val) => updateField('natureOfPayment', val)}>
                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent><SelectItem value="dp">DP-Direct Payment</SelectItem></SelectContent>
                   </Select>
                </FormField>
                <FormField label="Period of Payment" required>
                   <Input 
                     placeholder="Period" 
                     className={inputClass}
                     value={formData.periodOfPayment || ''}
                     onChange={(e) => updateField('periodOfPayment', e.target.value)}
                   />
                </FormField>
              </FormRow>
              <FormRow>
                <FormField label="Exporter Contact No.">
                   <Input 
                     placeholder="Contact No" 
                     className={inputClass}
                     value={formData.exporterContactNo || ''}
                     onChange={(e) => updateField('exporterContactNo', e.target.value)}
                   />
                </FormField>
                <FormField label="Exporter Contact Date">
                   <Input 
                     type="date"
                     className={inputClass}
                     value={formData.exporterContactDate || ''}
                     onChange={(e) => updateField('exporterContactDate', e.target.value)}
                   />
                </FormField>
              </FormRow>
            </>
          ) : (
            <>
              <FormRow>
                <FormField label="Terms of Invoice" required hasError={!formData.terms}>
                  <Select value={formData.terms?.toLowerCase() || ''} onValueChange={(val) => updateField('terms', val)}>
                    <SelectTrigger className={`${inputClass} flex justify-between`}><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent><SelectItem value="fob">FOB</SelectItem><SelectItem value="cif">CIF</SelectItem></SelectContent>
                  </Select>
                </FormField>
                <FormField label="Terms Place" required hasError={!formData.termsPlace}>
                  <Input 
                    placeholder="Place" 
                    className={inputClass} 
                    value={formData.termsPlace || ''}
                    onChange={(e) => updateField('termsPlace', e.target.value)}
                  />
                </FormField>
              </FormRow>
              <FormRow>
                  <FormField label="Nature of Transctn.">
                       <Select>
                          <SelectTrigger className={inputClass}><SelectValue placeholder="Nature" /></SelectTrigger>
                          <SelectContent><SelectItem value="sale">Sale</SelectItem></SelectContent>
                       </Select>
                  </FormField>
                  <FormField label="Payment Terms">
                      <Select>
                          <SelectTrigger className={inputClass}><SelectValue placeholder="Terms" /></SelectTrigger>
                          <SelectContent><SelectItem value="lc">LC</SelectItem></SelectContent>
                      </Select>
                  </FormField>
                </FormRow>
            </>
          )}
          {!isExport && (
            <FormRow>
              <FormField label="Valuation Method">
                   <Select>
                      <SelectTrigger className={inputClass}><SelectValue placeholder="Method" /></SelectTrigger>
                      <SelectContent><SelectItem value="1">Method 1</SelectItem></SelectContent>
                  </Select>
              </FormField>
              <FormField label="Other Related">
                  <Input placeholder="Related" className={inputClass} />
              </FormField>
            </FormRow>
          )}
          <FormRow>
            <FormField label="Invoice Value" required hasError={!formData.value || !formData.currency}>
               <div className="flex w-full h-full">
                 <Input 
                    placeholder="Value" 
                    value={formData.value || ''} 
                    onChange={(e) => updateField('value', e.target.value)}
                    className={`${inputClass} flex-1 ${[2, 3, 4, '2', '3', '4'].includes(formData.sNo) || ['2', '3', '4'].includes(formData.id) ? 'text-[#7E22CE]' : ''}`} 
                 />
                 <div className={dividerClass} />
                 <Select value={formData.currency?.toLowerCase() || ''} onValueChange={(val) => updateField('currency', val)}>
                    <SelectTrigger className={`${inputClass} w-[80px]`}><SelectValue placeholder="USD" /></SelectTrigger>
                    <SelectContent><SelectItem value="usd">USD</SelectItem><SelectItem value="eur">EUR</SelectItem><SelectItem value="gbp">GBP</SelectItem><SelectItem value="jpy">JPY</SelectItem><SelectItem value="cad">CAD</SelectItem></SelectContent>
                 </Select>
               </div>
            </FormField>
            {!isExport && (
              <FormField label="Exchange Rate">
                  <Input placeholder="Rate" className={inputClass} />
              </FormField>
            )}
          </FormRow>
        </>
      )}
    </div>
    );
  };

  const renderSupplierDetails = (index: number) => {
    const buyerHeaderRightContent = isExport ? (
      <div className="flex items-center gap-2 mr-2">
        <span className="text-[12px] font-medium text-[#050E25] whitespace-nowrap">Same as Consignee</span>
        <FigmaSwitch fieldId="same-as-consignee" checked={sameAsConsignee} onCheckedChange={setSameAsConsignee} />
      </div>
    ) : null;

    return (
    <div id="supplier-details" className="flex flex-col w-full">
        <SectionHeader 
          title={SECTION_TITLES.supplierDetails} 
          expanded={sections.supplierDetails} 
          onToggle={() => toggleSection('supplierDetails')} 
          rightContent={buyerHeaderRightContent}
        />
        {sections.supplierDetails && (
          <>
            <FormRow>
                <FormField label="Name" required hasError={!formData.supplierName}>
                    <Input 
                        placeholder="Supplier Name" 
                        className={`${inputClass} text-[#3874FF]`} 
                        value={formData.supplierName || ''} 
                        onChange={(e) => updateField('supplierName', e.target.value)}
                    />
                </FormField>
                <FormField label="ID">
                    <Input placeholder="ID" className={inputClass} />
                </FormField>
            </FormRow>
            <div className="flex w-full border-b border-[#d0d5e3] last:border-b-0">
                 <div className="flex-1 flex min-h-[64px]">
                    <FormField label="Address" className="flex-1 h-full border-r border-[#d0d5e3]">
                        <Input placeholder="Address" className={inputClass} />
                    </FormField>
                 </div>
                 <div className="flex-1 flex flex-col">
                      <FormField label="Pin" className="border-b border-[#d0d5e3]">
                        <Input placeholder="Pin" className={inputClass} />
                      </FormField>
                      <FormField label="Country">
                        <Select><SelectTrigger className={inputClass}><SelectValue placeholder="Country" /></SelectTrigger><SelectContent><SelectItem value="country">Country</SelectItem></SelectContent></Select>
                      </FormField>
                 </div>
            </div>
          </>
        )}
    </div>
    );
  };

  const renderSvbDetails = (index: number) => {
    return (
    <div id="svb-details" className="flex flex-col w-full">
         <SectionHeader title={SECTION_TITLES.svbDetails} expanded={sections.svbDetails} onToggle={() => toggleSection('svbDetails')} />
         {sections.svbDetails && (
          <>
             <FormRow>
                <FormField label="Related">
                     <div className="flex items-center h-full px-2 w-[90px]">
                        <FigmaSwitch fieldId="svb-related" checked={svbRelated} onCheckedChange={setSvbRelated} />
                     </div>
                </FormField>
                <FormField label="SVB Ref No & Dt">
                    <div className="flex w-full h-full">
                        <Input placeholder="Ref No" className={`${inputClass} flex-1`} />
                        <div className={dividerClass} />
                        <Input type="date" className={`${inputClass} w-[110px]`} />
                    </div>
                </FormField>
             </FormRow>
             <FormRow>
                <FormField label="SVB Flag">
                     <Select><SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="y">Yes</SelectItem></SelectContent></Select>
                </FormField>
                <FormField label="Cus. House">
                     <Select><SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="h">House</SelectItem></SelectContent></Select>
                </FormField>
             </FormRow>
             <FormRow>
                <FormField label="SVB Load(Assbl)">
                     <div className="flex w-full h-full">
                        <Input placeholder="Value" className={`${inputClass} flex-1`} />
                        <div className={dividerClass} />
                        <Select><SelectTrigger className={`${inputClass} flex-1`}><SelectValue placeholder="Final/Prov" /></SelectTrigger><SelectContent><SelectItem value="f">Final</SelectItem></SelectContent></Select>
                     </div>
                </FormField>
                <FormField label="SVB Load(Duty)">
                     <div className="flex w-full h-full">
                        <Input placeholder="Value" className={`${inputClass} flex-1`} />
                        <div className={dividerClass} />
                        <Select><SelectTrigger className={`${inputClass} flex-1`}><SelectValue placeholder="Final/Prov" /></SelectTrigger><SelectContent><SelectItem value="f">Final</SelectItem></SelectContent></Select>
                     </div>
                </FormField>
             </FormRow>
          </>
         )}
    </div>
    );
  };

  const renderFreightInsuranceMisc = (index: number) => {
    return (
    <div id="freight-insurance-misc" className="flex flex-col w-full border border-[#d0d5e3] border-t-0">
         <SectionHeader title={SECTION_TITLES.freightInsuranceMisc} expanded={sections.freightInsuranceMisc} onToggle={() => toggleSection('freightInsuranceMisc')} />
         {sections.freightInsuranceMisc && (
          <>
            <ChargesHeader />
            {!isExport && (
              <ChargeRow label="Misc Charge" 
                 amount={invoiceData?.miscChargesAmount} 
                 rate={invoiceData?.miscChargesRate} 
                 currency={invoiceData?.miscChargesCurrency}
              />
            )}
            <ChargeRow label="Freight" hasToggle={!isExport} 
               amount={invoiceData?.freightAmount} 
               rate={invoiceData?.freightRate} 
               currency={invoiceData?.freightCurrency}
            />
            <ChargeRow label="Insurance" 
               amount={invoiceData?.insuranceAmount} 
               rate={invoiceData?.insuranceRate} 
               currency={invoiceData?.insuranceCurrency}
            />
          </>
         )}
    </div>
    );
  };

  const renderPackingCharges = (index: number) => {
    return (
      <div id="packing-charges" className="flex flex-col w-full border border-[#d0d5e3] border-t-0 mt-0">
        <SectionHeader title={SECTION_TITLES.packingCharges} expanded={sections.packingCharges} onToggle={() => toggleSection('packingCharges')} />
        {sections.packingCharges && (
          <>
            <div className="flex w-full min-h-[32px] border-b border-[#d0d5e3] bg-white">
                <div className="w-[306px] border-r border-[#d0d5e3] shrink-0"></div>
                <div className="flex-1 bg-[#EBEEF7] flex items-center px-2 py-1.5 border-r border-[#d0d5e3]">
                    <span className="text-[#050e25] text-[14px] font-semibold">Total Package</span>
                </div>
                <div className="flex-1 bg-[#EBEEF7] flex items-center px-2 py-1.5">
                    <span className="text-[#050e25] text-[14px] font-semibold">Amount</span>
                </div>
            </div>
            <div className="flex w-full min-h-[32px] border-b border-[#d0d5e3] last:border-b-0 group">
              <div className="w-[306px] bg-[#EBEEF7] flex items-center px-2 py-1.5 border-r border-[#d0d5e3] shrink-0 transition-colors duration-200 group-hover:bg-[#CEF6F0] group-focus-within:bg-[#CEF6F0] relative">
                 <div className="absolute inset-0 border border-[#02B196] pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 z-10" />
                 <span className="text-[#050e25] text-[14px] font-semibold relative z-20">Packing charge</span>
              </div>
              <div className="flex-1 bg-white flex items-center px-0 border-r border-[#d0d5e3]">
                  <Input className={inputClass} placeholder="Total" defaultValue={invoiceData?.packingTotalPackages} />
              </div>
              <div className="flex-1 bg-white flex items-center px-0">
                  <Input className={inputClass} placeholder="Amount" defaultValue={invoiceData?.packingAmount} />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const renderHssSection = (index: number) => {
    return (
      <div id="hss-section" className="flex flex-col w-full border border-[#d0d5e3] border-t-0 mt-0">
        <SectionHeader title={SECTION_TITLES.hssSection} expanded={sections.hssSection} onToggle={() => toggleSection('hssSection')} />
        {sections.hssSection && (
          <>
            <ChargesHeader showCurrency={false} />
            <ChargeRow label="HSS" showCurrency={false} />
          </>
        )}
      </div>
    );
  };

  const renderLoadingCharges = (index: number) => {
    return (
      <div id="loading-charges" className="flex flex-col w-full border border-[#d0d5e3] border-t-0 mt-0">
        <SectionHeader title={SECTION_TITLES.loadingCharges} expanded={sections.loadingCharges} onToggle={() => toggleSection('loadingCharges')} />
        {sections.loadingCharges && (
          <>
            <ChargesHeader showCurrency={true} />
            <ChargeRow label={jobType === 'Export' ? "Commission charges" : "Loading charges"} showCurrency={true} />
          </>
        )}
      </div>
    );
  };

  const renderAgencyCommission = (index: number) => {
    return (
      <div id="agency-commission" className="flex flex-col w-full border border-[#d0d5e3] border-t-0 mt-0">
        <SectionHeader title={SECTION_TITLES.agencyCommission} expanded={sections.agencyCommission} onToggle={() => toggleSection('agencyCommission')} />
        {sections.agencyCommission && (
          <>
            <ChargesHeader showCurrency={true} />
            <ChargeRow label={jobType === 'Export' ? "Deduction charges" : "Agency commission"} showCurrency={true} />
          </>
        )}
      </div>
    );
  };

  const renderDiscountSection = (index: number) => {
    return (
      <div id="discount-section" className="flex flex-col w-full border border-[#d0d5e3] border-t-0 mt-0">
        <SectionHeader title={SECTION_TITLES.discountSection} expanded={sections.discountSection} onToggle={() => toggleSection('discountSection')} />
        {sections.discountSection && (
          <>
            <div className="flex w-full min-h-[32px] border-b border-[#d0d5e3] bg-white">
                <div className="w-[306px] border-r border-[#d0d5e3] shrink-0"></div>
                <div className="w-[86px] bg-[#EBEEF7] flex items-center px-2 py-1.5 border-r border-[#d0d5e3] shrink-0">
                    <span className="text-[#050e25] text-[14px] font-semibold">Rate</span>
                </div>
                <div className="flex-1 bg-[#EBEEF7] flex items-center px-2 py-1.5 border-r border-[#d0d5e3]">
                    <span className="text-[#050e25] text-[14px] font-semibold">Amount</span>
                </div>
                <div className="flex-1 bg-[#EBEEF7] flex items-center px-2 py-1.5">
                    <span className="text-[#050e25] text-[14px] font-semibold">Nature of Discount</span>
                </div>
            </div>
            <div className="flex w-full min-h-[32px] border-b border-[#d0d5e3] last:border-b-0 group">
              <div className="w-[306px] bg-[#EBEEF7] flex items-center px-2 py-1.5 border-r border-[#d0d5e3] shrink-0 justify-between transition-colors duration-200 group-hover:bg-[#CEF6F0] group-focus-within:bg-[#CEF6F0] relative">
                 <div className="absolute inset-0 border border-[#02B196] pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 z-10" />
                 <span className="text-[#050e25] text-[14px] font-semibold relative z-20">Discount</span>
              </div>
              <div className="w-[86px] bg-white flex items-center px-0 border-r border-[#d0d5e3] shrink-0">
                  <Input className={inputClass} placeholder="1" />
              </div>
              <div className="flex-1 bg-white flex items-center px-0 border-r border-[#d0d5e3]">
                  <Input className={inputClass} placeholder="Amount" />
              </div>
              <div className="flex-1 bg-white flex items-center px-0">
                  <Input className={inputClass} placeholder="Nature" />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const [activeMiscCharges, setActiveMiscCharges] = useState([
    "Brokerage & Commissions",
    "Cost of Containers",
    "Cost of Packing",
    "Handling Charges"
  ]);

  const renderMiscSubCharges = (index: number) => {
    return (
    <div id="misc-sub-charges" className="flex flex-col w-full border border-[#d0d5e3] border-t-0 mt-0">
         <SectionHeader title={SECTION_TITLES.miscSubCharges} expanded={sections.miscSubCharges} onToggle={() => toggleSection('miscSubCharges')} />
         {sections.miscSubCharges && (
          <>
            <ChargesHeader />
            {activeMiscCharges.map((charge) => (
               <ChargeRow key={charge} label={charge} />
            ))}
            
            {/* Add Charge Button Row */}
            <div className="flex w-full min-h-[32px] border-b border-[#d0d5e3] last:border-b-0 bg-[#F5F7FA] hover:bg-[#EBEEF7] transition-colors cursor-pointer group/add">
              <AddChargesPopover 
                onApply={(newCharges) => setActiveMiscCharges(newCharges)} 
                currentCharges={activeMiscCharges}
              >
                  <button 
                    className="flex items-center gap-2 px-3 py-1.5 w-full text-left"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#3874FF] text-white">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] font-semibold text-[#3874FF]">Add Charge</span>
                  </button>
              </AddChargesPopover>
            </div>
          </>
         )}
    </div>
    );
  };

  const renderBrokerDetails = (index: number) => {
    return (
    <div id="broker-details" className="flex flex-col w-full">
        <SectionHeader title={SECTION_TITLES.brokerDetails} expanded={sections.brokerDetails} onToggle={() => toggleSection('brokerDetails')} />
        {sections.brokerDetails && (
          <>
            <FormRow>
                <FormField label="Name">
                    <Input placeholder="Name" className={inputClass} defaultValue={invoiceData?.brokerName} />
                </FormField>
                <FormField label="ID">
                    <Input placeholder="ID" className={inputClass} />
                </FormField>
            </FormRow>
            <div className="flex w-full border-b border-[#d0d5e3] last:border-b-0">
                 <div className="flex-1 flex min-h-[64px]">
                    <FormField label="Address" className="flex-1 h-full border-r border-[#d0d5e3]">
                        <Input placeholder="Address" className={inputClass} />
                    </FormField>
                 </div>
                 <div className="flex-1 flex flex-col">
                      <FormField label="Pin" className="border-b border-[#d0d5e3]">
                        <Input placeholder="Pin" className={inputClass} />
                      </FormField>
                      <FormField label="Country">
                        <Select><SelectTrigger className={inputClass}><SelectValue placeholder="Country" /></SelectTrigger><SelectContent><SelectItem value="country">Country</SelectItem></SelectContent></Select>
                      </FormField>
                 </div>
            </div>
          </>
        )}
    </div>
    );
  };

  const renderSellerDetails = (index: number) => {
    return (
   <div id="seller-details" className="flex flex-col w-full">
       <SectionHeader title={SECTION_TITLES.sellerDetails} expanded={sections.sellerDetails} onToggle={() => toggleSection('sellerDetails')} />
       {sections.sellerDetails && (
        <>
          <FormRow>
              <FormField label="Name">
                  <Input placeholder="Name" className={inputClass} defaultValue={invoiceData?.sellerName} />
              </FormField>
              <FormField label="ID">
                  <Input placeholder="ID" className={inputClass} />
              </FormField>
          </FormRow>
          <div className="flex w-full border-b border-[#d0d5e3] last:border-b-0">
                 <div className="flex-1 flex min-h-[64px]">
                    <FormField label="Address" className="flex-1 h-full border-r border-[#d0d5e3]">
                        <Input placeholder="Address" className={inputClass} />
                    </FormField>
                 </div>
                 <div className="flex-1 flex flex-col">
                      <FormField label="Pin" className="border-b border-[#d0d5e3]">
                        <Input placeholder="Pin" className={inputClass} />
                      </FormField>
                      <FormField label="Country">
                        <Select><SelectTrigger className={inputClass}><SelectValue placeholder="Country" /></SelectTrigger><SelectContent><SelectItem value="country">Country</SelectItem></SelectContent></Select>
                      </FormField>
                 </div>
          </div>
        </>
       )}
   </div>
   );
  };

  const renderThirdPartyDetails = (index: number) => {
    return (
   <div id="third-party-details" className="flex flex-col w-full">
       <SectionHeader title={SECTION_TITLES.thirdPartyDetails} expanded={sections.thirdPartyDetails} onToggle={() => toggleSection('thirdPartyDetails')} />
       {sections.thirdPartyDetails && (
        <>
          <FormRow>
              <FormField label="Name">
                  <Input placeholder="Name" className={inputClass} defaultValue={invoiceData?.thirdParty} />
              </FormField>
              <FormField label="ID">
                  <Input placeholder="ID" className={inputClass} />
              </FormField>
          </FormRow>
          <div className="flex w-full border-b border-[#d0d5e3] last:border-b-0">
                <div className="flex-1 flex min-h-[64px]">
                  <FormField label="Address" className="flex-1 h-full border-r border-[#d0d5e3]">
                      <Input placeholder="Address" className={inputClass} />
                  </FormField>
                </div>
                <div className="flex-1 flex flex-col">
                    <FormField label="Pin" className="border-b border-[#d0d5e3]">
                      <Input placeholder="Pin" className={inputClass} />
                    </FormField>
                    <FormField label="Country">
                      <Select><SelectTrigger className={inputClass}><SelectValue placeholder="Country" /></SelectTrigger><SelectContent><SelectItem value="country">Country</SelectItem></SelectContent></Select>
                    </FormField>
                </div>
          </div>
            <FormRow>
              <FormField label="AEO Code & Country">
                    <div className="flex w-full h-full">
                      <Input placeholder="AEO Code" className={`${inputClass} flex-1`} />
                      <div className={dividerClass} />
                      <Select><SelectTrigger className={`${inputClass} flex-1`}><SelectValue placeholder="AEO Country" /></SelectTrigger><SelectContent><SelectItem value="c">Country</SelectItem></SelectContent></Select>
                  </div>
              </FormField>
              <FormField label="AEO Role">
                  <Input placeholder="AEO Role" className={inputClass} />
              </FormField>
          </FormRow>
        </>
       )}
   </div>
   );
  };

  const renderOtherInfo = (index: number) => {
    return (
   <div id="other-info" className="flex flex-col w-full">
        <SectionHeader title={SECTION_TITLES.otherInfo} expanded={sections.otherInfo} onToggle={() => toggleSection('otherInfo')} />
        {sections.otherInfo && (
          <>
            {isExport ? (
               <>
                 <FormRow>
                   <FormField label="Gross Weight">
                       <Input placeholder="Gross Weight" className={inputClass} defaultValue={invoiceData?.grossWeight} />
                   </FormField>
                   <FormField label="Net Weight">
                       <Input placeholder="Net Weight" className={inputClass} defaultValue={invoiceData?.netWeight} />
                   </FormField>
                 </FormRow>
                 <FormRow>
                   <FormField label="UQC">
                       <Input placeholder="UQC" className={inputClass} defaultValue={invoiceData?.uqc} />
                   </FormField>
                   <FormField label="No. of Packets">
                       <Input placeholder="Number of Packets" className={inputClass} defaultValue={invoiceData?.numberOfPackets} />
                   </FormField>
                 </FormRow>
                 <FormRow>
                   <FormField label="Pkg Code UOM">
                       <Input placeholder="Package Code UOM" className={inputClass} defaultValue={invoiceData?.packageCodeUom} />
                   </FormField>
                 </FormRow>
               </>
             ) : (
               <>
            <FormRow>
              <FormField label="PO No. & Dt.">
                  <div className="flex w-full h-full">
                      <Input placeholder="PO No." className={`${inputClass} flex-1`} />
                      <div className={dividerClass} />
                      <Input type="date" className={`${inputClass} w-[110px]`} />
                  </div>
              </FormField>
              <FormField label="Contract No & Dt.">
                  <div className="flex w-full h-full">
                      <Input placeholder="Contract No" className={`${inputClass} flex-1`} />
                      <div className={dividerClass} />
                      <Input type="date" className={`${inputClass} w-[100px]`} />
                  </div>
              </FormField>
            </FormRow>
            <FormRow>
              <FormField label="LC Number & Dt.">
                  <div className="flex w-full h-full">
                      <Input placeholder="LC Number" className={`${inputClass} flex-1`} />
                      <div className={dividerClass} />
                      <Input type="date" className={`${inputClass} w-[110px]`} />
                  </div>
              </FormField>
            </FormRow>
            <FormRow>
              <FormField label="Sales Condition 1">
                  <Input placeholder="Sales Condition 1" className={inputClass} />
              </FormField>
              <FormField label="Sales Condition 2">
                  <Input placeholder="Sales Condition 2" className={inputClass} />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField label="Sales Condition 3">
                  <Input placeholder="Sales Condition 3" className={inputClass} />
              </FormField>
              <FormField label="Sales Condition 4">
                  <Input placeholder="Sales Condition 4" className={inputClass} />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField label="Sales Condition 5">
                  <Input placeholder="Sales Condition 5" className={inputClass} />
              </FormField>
            </FormRow>
              </>
            )}
          </>
        )}
   </div>
   );
  };

  const renderStatements = (index: number) => {
    return (
   <div id="statements" className="flex flex-col w-full">
      <SectionHeader 
        title={SECTION_TITLES.statements}
        expanded={sections.statements} 
        onToggle={() => toggleSection('statements')} 
      />
      {sections.statements && (
        <div className="border border-[#d0d5e3] rounded-md overflow-y-auto bg-white h-48">
          <StatementsTable showHeader={false} />
        </div>
      )}
   </div>
   );
  };

  const renderSupportingDocuments = (index: number) => {
    return (
   <div id="supporting-documents" className="flex flex-col w-full">
      <SectionHeader 
        title={SECTION_TITLES.supportingDocuments}
        expanded={sections.supportingDocuments} 
        onToggle={() => toggleSection('supportingDocuments')} 
      />
      {sections.supportingDocuments && (
        <div className="border border-[#d0d5e3] rounded-md overflow-y-auto bg-white h-48">
          <SupportingDocumentsTable showHeader={false} />
        </div>
      )}
   </div>
   );
  };

  const renderItemDetails = (index: number) => {
    return (
    <div id="item-details" className="flex flex-col w-full h-full">
      <div className="flex items-center justify-between px-3 py-2 bg-[#EBEEF7] border-b border-[#D0D5E3] shrink-0">
        <span className="text-[14px] font-semibold text-[#050E25]">Item Details</span>
        <div className="flex items-center gap-3">
           <div className="flex items-center relative">
             <input
               type="text"
               placeholder="Search..."
               value={itemDetailsSearch}
               onChange={(e) => setItemDetailsSearch(e.target.value)}
               className="bg-white border border-[#D0D5E3] rounded px-3 h-[24px] text-black text-[12px] font-['Inter',_sans-serif] placeholder:text-[#9497A1] focus:outline-none focus:border-[#3874ff] w-[150px] transition-colors"
               onClick={(e) => e.stopPropagation()}
             />
             {itemDetailsSearch && (
               <button
                 onClick={(e) => {
                   e.stopPropagation();
                   setItemDetailsSearch('');
                 }}
                 className="absolute right-2 text-[#9497A1] hover:text-black transition-colors"
               >
                 <X className="w-3 h-3" />
               </button>
             )}
           </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden bg-white pb-3">
         <ItemDetailsTable 
            invoiceFilter="1" 
            searchQuery={itemDetailsSearch} 
            showHeader={false} 
            isExport={isExport}
            onExpandRow={(item) => {
              setSelectedItem(item);
              setIsItemEditOpen(true);
            }}
         />
      </div>
    </div>
    );
  };

  const renderStatementsTab = () => (
    <div className="flex flex-col w-full h-full">
       <div className="px-3 py-2 bg-[#EBEEF7] border-b border-[#D0D5E3] shrink-0">
          <span className="text-[14px] font-semibold text-[#050E25]">Statements</span>
       </div>
       <div className="flex-1 overflow-hidden bg-white pb-3">
          <StatementsTable />
       </div>
    </div>
  );

  const renderSupportingDocumentsTab = () => (
    <div className="flex flex-col w-full h-full">
       <div className="px-3 py-2 bg-[#EBEEF7] border-b border-[#D0D5E3] shrink-0">
          <span className="text-[14px] font-semibold text-[#050E25]">Supporting Documents</span>
       </div>
       <div className="flex-1 overflow-hidden bg-white">
          <SupportingDocumentsTable />
       </div>
    </div>
  );

  // Map of component renderers
  const sectionComponents: Record<string, (index: number) => JSX.Element> = {
      invoiceInfo: renderInvoiceInfo,
      supplierDetails: renderSupplierDetails,
      svbDetails: renderSvbDetails,
      freightInsuranceMisc: renderFreightInsuranceMisc,
      packingCharges: renderPackingCharges,
      hssSection: renderHssSection,
      loadingCharges: renderLoadingCharges,
      agencyCommission: renderAgencyCommission,
      discountSection: renderDiscountSection,
      miscSubCharges: renderMiscSubCharges,
      brokerDetails: renderBrokerDetails,
      sellerDetails: renderSellerDetails,
      thirdPartyDetails: renderThirdPartyDetails,
      otherInfo: renderOtherInfo,
      itemDetails: renderItemDetails,
      statements: renderStatements,
      supportingDocuments: renderSupportingDocuments
  };

  // Logic to distribute sections based on 'Item Details' state
  // If isItemDetailsFullScreen is true: Item Details is rendered as the primary content
  
  const isItemDetailsExpanded = sections.itemDetails; // For accordion collapse logic inside

  const TABS_CONFIG = [
    { id: 'details', label: 'Invoice Details' },
    { id: 'items', label: 'Item Details' },
    { id: 'statements', label: 'Statements' },
    { id: 'docs', label: 'Supporting Documents' }
  ] as const;

  let leftColumnKeys = ['invoiceInfo', 'supplierDetails', 'svbDetails', 'miscSubCharges'];
  let rightColumnKeys = ['freightInsuranceMisc', 'packingCharges', 'hssSection', 'loadingCharges', 'agencyCommission', 'discountSection', 'brokerDetails', 'sellerDetails', 'thirdPartyDetails', 'otherInfo'];

  if (isExport) {
    // Export specific layout:
    // Left: Invoice, Supplier, ThirdParty, OtherInfo (Cargo)
    leftColumnKeys = ['invoiceInfo', 'supplierDetails', 'thirdPartyDetails', 'otherInfo'];
    
    // Right: Freight, Packing, Loading (Commission), Discount, Agency (Deduction)
    rightColumnKeys = ['freightInsuranceMisc', 'packingCharges', 'loadingCharges', 'discountSection', 'agencyCommission'];
  } else {
    // Import Logic (Default)
    // Only show packingCharges for Export (filtered out here)
    rightColumnKeys = rightColumnKeys.filter(k => k !== 'packingCharges');
  }

  // Calculate starting index for each column to maintain continuous numbering
  const leftStartIndex = 1;
  const rightStartIndex = leftStartIndex + leftColumnKeys.length;

  const scrollToSection = (sectionId: string) => {
    setActiveTab('details'); // Switch to details tab if scrolling to a section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Right Arrow -> Next Tab
      if (e.ctrlKey && e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIndex = TABS_CONFIG.findIndex(t => t.id === activeTab);
        if (currentIndex < TABS_CONFIG.length - 1) {
          setActiveTab(TABS_CONFIG[currentIndex + 1].id);
        }
      }
      // Ctrl + Left Arrow -> Previous Tab
      else if (e.ctrlKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIndex = TABS_CONFIG.findIndex(t => t.id === activeTab);
        if (currentIndex > 0) {
          setActiveTab(TABS_CONFIG[currentIndex - 1].id);
        }
      }
      // Shift + Right Arrow (or >) -> Next Invoice
      else if (e.shiftKey && (e.key === 'ArrowRight' || e.key === '>')) {
        e.preventDefault();
        onNextInvoice?.();
      }
      // Shift + Left Arrow (or <) -> Previous Invoice
      else if (e.shiftKey && (e.key === 'ArrowLeft' || e.key === '<')) {
        e.preventDefault();
        onPrevInvoice?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, activeTab, onNextInvoice, onPrevInvoice]);

  // Observe intersection to update active section on scroll
  // (Disabled for now as we use tabs instead of long scroll navigation)
  useEffect(() => {
    // Scroll observation logic removed in favor of tabbed navigation
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-screen max-w-none sm:max-w-none p-0 gap-0 border-none bg-[#F8FAFC] z-[90] top-[48px] h-[calc(100vh-48px)] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <SheetTitle className="hidden">Edit Invoice</SheetTitle>
        <SheetDescription className="hidden">Edit invoice details form</SheetDescription>
        {/* Header */}
        <div className="shrink-0 w-full" data-onboarding="invoice-header-controls">
            <InvoiceHeader 
                onClose={() => onOpenChange(false)} 
                progress="50%" 
                onNext={onNextInvoice} 
                onPrev={onPrevInvoice} 
                currentInvoiceId={invoiceData?.id}
                onPdfClick={() => {
                  setIsPdfOpen(!isPdfOpen);
                  setIsVerificationOpen(false);
                }}
                onVerificationClick={() => {
                  setIsVerificationOpen(!isVerificationOpen);
                  setIsPdfOpen(false);
                }}
                onSave={() => {
                   onSave?.(formData);
                   onOpenChange(false);
                }}
                onAuditClick={() => {
                    if (isAuditOpen) {
                        setIsAuditOpen(false);
                    } else {
                        setIsAuditOpen(true);
                        setIsAuditFloating(false);
                    }
                }}
            />
        </div>

        <div className="flex flex-1 overflow-hidden h-full">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            {isPdfOpen && (
              <>
                <ResizablePanel defaultSize={50} minSize={30} className="relative">
                   <div className="h-full bg-[#f6f9ff] relative">
                       <EnhancedPdfViewer selectedPdf={selectedPdf} onClose={() => setIsPdfOpen(false)} />
                   </div>
                </ResizablePanel>
                <ResizableHandle />
              </>
            )}
            {isVerificationOpen && (
              <>
                <ResizablePanel defaultSize={50} minSize={30} className="relative">
                   <div className="h-full bg-white relative">
                       <VerificationStation onClose={() => setIsVerificationOpen(false)} />
                   </div>
                </ResizablePanel>
                <ResizableHandle />
              </>
            )}
            <ResizablePanel defaultSize={(isPdfOpen || isVerificationOpen) ? 50 : 100}>
                <div className="flex h-full w-full overflow-hidden">
                  {/* Right Content */}
                  <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#CAD2E5] relative">
                    {/* Tabs replace Chips */}
                    {!isItemDetailsFullScreen && (
                      <div className="flex items-center bg-[#EBEEF7] shrink-0 border-b border-[#D0D5E3] px-3 h-[40px] gap-1" data-onboarding="section-tabs">
                        {TABS_CONFIG.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 h-full text-[13px] font-medium transition-all relative ${
                              activeTab === tab.id 
                                ? 'text-[#3874FF]' 
                                : 'text-[#626776] hover:text-[#050E25]'
                            }`}
                          >
                            {tab.label}
                            {activeTab === tab.id && (
                              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3874FF]" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    {isLoading && (
                       <div className="absolute inset-0 flex items-center justify-center bg-white z-[100]">
                          <Loader2 className="h-12 w-12 animate-spin text-[#3B82F6]" />
                       </div>
                    )}
                    
                         <div className="flex flex-1 overflow-hidden flex-col h-full">
                              {isItemDetailsFullScreen ? (
                                <div className="flex-1 w-full bg-[#CAD2E5] p-3 overflow-hidden flex flex-col">
                                   {renderItemDetails(1)}
                                </div>
                              ) : (
                                <div className="flex-1 min-h-0 w-full flex transition-all duration-300 ease-in-out">
                                    {activeTab === 'details' ? (
                                      (isPdfOpen || isVerificationOpen) ? (
                                        <div className="w-full h-full bg-[#CAD2E5] overflow-hidden">
                                           <ScrollArea className="h-full w-full">
                                              <div className="flex flex-col gap-3 p-3">
                                                 {leftColumnKeys.map((key, idx) => (
                                                     <React.Fragment key={key}>
                                                         {sectionComponents[key](leftStartIndex + idx)}
                                                     </React.Fragment>
                                                 ))}
                                                 {rightColumnKeys.filter(k => k !== 'itemDetails' && k !== 'statements' && k !== 'supportingDocuments').map((key, idx) => (
                                                     <React.Fragment key={key}>
                                                         {sectionComponents[key](rightStartIndex + idx)}
                                                     </React.Fragment>
                                                 ))}
                                              </div>
                                           </ScrollArea>
                                        </div>
                                      ) : (
                                        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
                                          {/* Left Column (50%) with Independent Scroll */}
                                          <ResizablePanel defaultSize={50} minSize={30} className="border-r border-[#d0d5e3]">
                                          <div className="h-full w-full bg-[#CAD2E5] overflow-hidden">
                                             <ScrollArea className="h-full w-full">
                                                <div className="flex flex-col gap-3 p-3">
                                                   {leftColumnKeys.map((key, idx) => (
                                                       <React.Fragment key={key}>
                                                           {sectionComponents[key](leftStartIndex + idx)}
                                                       </React.Fragment>
                                                   ))}
                                                </div>
                                             </ScrollArea>
                                          </div>
                                          </ResizablePanel>
                                          
                                          <ResizableHandle withHandle />

                                          {/* Right Column (50%) with Independent Scroll */}
                                          <ResizablePanel defaultSize={50} minSize={20}>
                                          <div className="h-full w-full bg-[#CAD2E5] overflow-hidden">
                                             <ScrollArea className="h-full w-full">
                                                <div className="flex flex-col gap-3 pr-3 py-3 pl-3">
                                                   {rightColumnKeys.filter(k => k !== 'itemDetails' && k !== 'statements' && k !== 'supportingDocuments').map((key, idx) => (
                                                       <React.Fragment key={key}>
                                                           {sectionComponents[key](rightStartIndex + idx)}
                                                       </React.Fragment>
                                                   ))}
                                                </div>
                                             </ScrollArea>
                                          </div>
                                          </ResizablePanel>
                                        </ResizablePanelGroup>
                                      )
                                    ) : activeTab === 'items' ? (
                                      <div className="flex-1 w-full bg-[#CAD2E5] p-3 overflow-hidden flex flex-col">
                                        {renderItemDetails(1)}
                                      </div>
                                    ) : activeTab === 'statements' ? (
                                      <div className="flex-1 w-full bg-[#CAD2E5] p-3 overflow-hidden flex flex-col">
                                        {renderStatements(1)}
                                      </div>
                                    ) : (
                                      <div className="flex-1 w-full bg-[#CAD2E5] p-3 overflow-hidden flex flex-col">
                                        {renderSupportingDocuments(1)}
                                      </div>
                                    )}
                                </div>
                              )}
                         </div>
                  </div>
                  <AuditSidebar 
                    isOpen={isAuditOpen} 
                    onClose={() => setIsAuditOpen(false)}
                    onFloat={handleAuditFloat}
                    auditItems={auditItems}
                  />
                  <FloatingAuditReport 
                    isOpen={isAuditFloating}
                    onClose={() => setIsAuditFloating(false)}
                    onDock={handleFloatingDock}
                    auditItems={auditItems}
                  />
                </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <div className="shrink-0 w-full">
          <Footer isExport={isExport} />
        </div>

        {/* Onboarding Tour */}
        <Onboarding 
          isOpen={showTour} 
          onComplete={handleTourComplete} 
          onSkip={handleTourComplete} 
          tourType="invoice-edit" 
        />

        {/* Item Edit Sidebar */}
        <ItemDetailsSidebar 
           open={isItemEditOpen}
           onOpenChange={setIsItemEditOpen}
           itemData={selectedItem}
           auditItems={auditItems}
           isExport={isExport}
        />
      </SheetContent>
    </Sheet>
  );
}