import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import EnhancedPdfViewer from './EnhancedPdfViewer';
import Form from '../imports/Form-1621-8529';
import { ChevronLeft, ChevronRight, X, Loader2, Info } from 'lucide-react';
import InvoiceDropdown from './figma/InvoiceDropdown';
import ItemDropdown from './figma/ItemDropdown';
import { Audit } from './AuditToolbarItem';
import AuditSidebar, { type AuditCardData } from './AuditSidebar';
import FloatingAuditReport from './FloatingAuditReport';
import HsnInfoSidebar from './HsnInfoSidebar';
import Footer from '../imports/Footer';

const IMPORT_TABS_CONFIG = [
  { id: 'info', label: 'Item Info' },
  { id: 'general-tab', label: 'General Details' },
  { id: 'others', label: 'Section 65/RSP/Reimport Details' },
  { id: 'exim', label: 'Exim Schemes' },
  { id: 'sez', label: 'SEZ BE Details' },
  { id: 'single-window', label: 'Single Window' },
  { id: 'statements', label: 'Statements' },
  { id: 'supporting-documents', label: 'Supporting Documents' }
] as const;

const EXPORT_TABS_CONFIG = [
  { id: 'info', label: 'Item Info' },
  { id: 'exim', label: 'Exim Scheme' },
  { id: 'drawback', label: 'Drawback/ROsCTL/RODTEP' },
  { id: 'igst', label: 'IGST Payment Details' },
  { id: 'ar4', label: 'AR4/Service Tax Refund' },
  { id: 'other-info', label: 'Other Info' },
  { id: 'single-window', label: 'Single Window' },
  { id: 'statements', label: 'Statements' },
  { id: 'supporting-documents', label: 'Supporting Documents' }
] as const;

type ImportTabId = typeof IMPORT_TABS_CONFIG[number]['id'];
type ExportTabId = typeof EXPORT_TABS_CONFIG[number]['id'];
type ItemTabId = ImportTabId | ExportTabId;

interface ItemDetailsSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemData: any;
  onSave?: (data: any) => void;
  onNextItem?: () => void;
  onPrevItem?: () => void;
  initialPdfOpen?: boolean;
  layoutMode?: 'stacked' | 'split';
  auditItems?: AuditCardData[];
  isExport?: boolean;
}

export default function ItemDetailsSidebar({
  open,
  onOpenChange,
  itemData,
  onSave,
  onNextItem,
  onPrevItem,
  initialPdfOpen = false,
  layoutMode = 'split',
  auditItems,
  isExport = false,
}: ItemDetailsSidebarProps) {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>('sample_invoice.pdf');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isAuditFloating, setIsAuditFloating] = useState(false);
  const tabsConfig = isExport ? EXPORT_TABS_CONFIG : IMPORT_TABS_CONFIG;
  const [activeTab, setActiveTab] = useState<ItemTabId>('info');
  const [isMandatoryMode, setIsMandatoryMode] = useState(false);
  const [isHsnInfoOpen, setIsHsnInfoOpen] = useState(false);
  const [currentHsn, setCurrentHsn] = useState('');

  const handleHsnChange = (hsn: string) => {
    setCurrentHsn(hsn);
    if (hsn.length >= 8) {
      setIsHsnInfoOpen(true);
    } else {
      setIsHsnInfoOpen(false);
    }
  };

  const handleAuditFloat = () => {
    setIsAuditFloating(true);
    setIsAuditOpen(false);
  };

  const handleFloatingDock = () => {
    setIsAuditFloating(false);
    setIsAuditOpen(true);
  };

  const handleAuditClick = () => {
    if (isAuditOpen) {
        setIsAuditOpen(false);
    } else {
        setIsAuditOpen(true);
        setIsAuditFloating(false);
    }
  };

  const handleNext = async () => {
    if (onNextItem) {
      setIsTransitioning(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      onNextItem();
      setIsTransitioning(false);
    }
  };

  const handlePrev = async () => {
    if (onPrevItem) {
      setIsTransitioning(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      onPrevItem();
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Tab navigation: Ctrl + Arrow Left/Right
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const currentIndex = tabsConfig.findIndex(tab => tab.id === activeTab);
          const nextIndex = (currentIndex + 1) % tabsConfig.length;
          setActiveTab(tabsConfig[nextIndex].id);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const currentIndex = tabsConfig.findIndex(tab => tab.id === activeTab);
          const prevIndex = (currentIndex - 1 + tabsConfig.length) % tabsConfig.length;
          setActiveTab(tabsConfig[prevIndex].id);
        }
      }

      // Item navigation: Shift + Arrow Left/Right (or < >)
      if (e.shiftKey && !e.ctrlKey && !e.metaKey) {
        if ((e.key === 'ArrowRight' || e.key === '>') && !isTransitioning) {
          e.preventDefault();
          handleNext();
        } else if ((e.key === 'ArrowLeft' || e.key === '<') && !isTransitioning) {
            e.preventDefault();
            handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNextItem, onPrevItem, isTransitioning, activeTab]);

  // We intentionally ignore initialPdfOpen to prevent PDF from showing

  // Header Component
  const ItemHeader = () => (
    <div className="bg-[#2D364D] w-full flex items-center justify-between px-[12px] h-[48px] border-b border-[#545d76] shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <p className="font-semibold text-[16px] text-white">Edit Item</p>
        </div>
        <div className="w-[1px] h-[24px] bg-[#545d76]" />
        
        <InvoiceDropdown />
        <ItemDropdown value={itemData?.sNo?.split('/')[1]?.padStart(2, '0') || "01"} />

        <div className="w-[1px] h-[24px] bg-[#545d76]" />

        <div className="flex items-center gap-4">
             <div className="flex flex-col">
                <span className="text-[10px] text-[#9497A1] font-medium leading-[12px]">Invoice Total</span>
                <span className="text-[13px] text-white font-semibold leading-[16px]">USD 45,231.00</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] text-[#9497A1] font-medium leading-[12px]">Product Total</span>
                <span className="text-[13px] text-white font-semibold leading-[16px]">USD 1,200.00</span>
             </div>
        </div>

        <div className="w-[1px] h-[24px] bg-[#545d76]" />

        {/* Nav Buttons */}
        <div className="flex items-center gap-1">
          <button 
            onClick={handlePrev}
            disabled={isTransitioning}
            className="bg-[#37425a] flex items-center justify-center w-[28px] h-[28px] rounded-[4px] hover:bg-[#465472] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 text-[#CDCFD3]" />
          </button>
          <button 
            onClick={handleNext}
            disabled={isTransitioning}
            className="bg-[#37425a] flex items-center justify-center w-[28px] h-[28px] rounded-[4px] hover:bg-[#465472] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isTransitioning ? (
              <Loader2 className="w-4 h-4 animate-spin text-[#CDCFD3]" />
            ) : (
              <ChevronRight className="w-4 h-4 text-[#CDCFD3]" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {currentHsn.length >= 8 && (
          <button
            onClick={() => setIsHsnInfoOpen(!isHsnInfoOpen)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] transition-colors text-[12px] ${
              isHsnInfoOpen
                ? 'bg-[#3874FF] text-white'
                : 'bg-[#37425a] text-[#CDCFD3] hover:bg-[#465472]'
            }`}
            title="HSN Info"
          >
            <Info className="w-3.5 h-3.5" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>HSN</span>
          </button>
        )}
        <div className="mr-2">
            <Audit onAuditClick={handleAuditClick} />
        </div>

        <button 
          onClick={() => {
            onSave?.(itemData);
            onOpenChange(false);
          }}
          className="bg-[#3874ff] px-4 py-1.5 rounded-[4px] hover:bg-[#2c5bcf] transition-colors text-white text-[14px] font-semibold"
        >
          Save
        </button>

        <button 
          onClick={() => onOpenChange(false)}
          className="w-[28px] h-[28px] flex items-center justify-center hover:bg-[#37425a] rounded-full transition-colors group"
        >
          <X className="w-5 h-5 text-[#CDCFD3] group-hover:text-white" />
        </button>
      </div>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-screen max-w-none sm:max-w-none p-0 gap-0 border-none bg-[#F8FAFC] z-[90] top-[48px] h-[calc(100vh-48px)] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <SheetTitle className="hidden">Edit Item</SheetTitle>
        <SheetDescription className="hidden">Edit item details form</SheetDescription>
        
        <div className="shrink-0 w-full">
          <ItemHeader />
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
            <ResizablePanel defaultSize={isPdfOpen ? 50 : 100}>
                <div className="flex h-full w-full overflow-hidden bg-[#CAD2E5] relative">
                   <div className="flex flex-col flex-1 h-full overflow-hidden">
                      {/* Tabs Navigation */}
                      <div className="flex items-center bg-[#EBEEF7] shrink-0 border-b border-[#D0D5E3] px-3 h-[40px] gap-1">
                        {tabsConfig.map((tab) => (
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
                            {isMandatoryMode && <span className="text-[#CF3B3B] ml-1">*</span>}
                            {activeTab === tab.id && (
                              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3874FF]" />
                            )}
                          </button>
                        ))}
                      </div>

                      <div className="w-full h-full pt-[12px] px-[12px] overflow-y-auto">
                          <Form itemData={itemData} isLoading={isTransitioning} activeTab={activeTab} onMandatoryChange={setIsMandatoryMode} isExport={isExport} onHsnChange={handleHsnChange} />
                      </div>
                   </div>
                   <HsnInfoSidebar
                     isOpen={isHsnInfoOpen}
                     onClose={() => setIsHsnInfoOpen(false)}
                     hsnCode={currentHsn}
                   />
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
      </SheetContent>
    </Sheet>
  );
}