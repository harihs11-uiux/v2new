import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, Plus, MousePointer2, Trash2, X, ZoomIn, ZoomOut, FileCheck } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from './ui/popover';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import FunctionalGlobalNavigation from './FunctionalGlobalNavigation';
import SplitViewPdfLayout from './SplitViewPdfLayout';
import EnhancedPdfViewer from './EnhancedPdfViewer';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import HorizontalJobNavigation from './HorizontalJobNavigation';
import FunctionalLeftNav from './FunctionalLeftNav';
import JobDetailsLeftSidebar from './JobDetailsLeftSidebar';
import ItemDetailsLeftSidebar, { importSectionIds, exportSectionIds } from './ItemDetailsLeftSidebar';
import EnhancedJobDetailsForm from './EnhancedJobDetailsForm';
import JobContainerDetailsTable from './JobContainerDetailsTable';
import type { EnhancedJobDetailsFormHandle } from './EnhancedJobDetailsForm';
import Frame42680Enhanced from './Frame42680Enhanced';
import Toolbar1309 from '../imports/Toolbar-1309-6614';
import ChecklistToolbar from './checklist/ChecklistToolbar';
import StatusToolbarBase from '../imports/Toolbar-1315-3296';
import InvoiceTable, { mockData } from './InvoiceDetailsTable';
import IGMTable from './IGMDetailsTable';
import ShipmentDetailsForm from './ShipmentDetailsForm';
import ItemDetailsTable, { mockData as itemMockData } from './ItemDetailsTable';
import SupportingDocumentsTable from './SupportingDocumentsTable';
import SingleWindowInfoTable from './SingleWindowInfoTable';
import StatementsTable from './StatementsTable';
import StatusTable, { initialData as initialStatusData, type StatusData } from './StatusTable';
import InvoiceDetailsSidebar from './InvoiceDetailsSidebar';
import ItemDetailsSidebar from './ItemDetailsSidebar';
import HssDetails from '../imports/HssDetails';
import BondDetails from '../imports/BondDetails';
import CertificateDetails from '../imports/CertificateDetails';
import ExchangeRateDetails from '../imports/ExchangeRateDetails';
import { 
  LicenseDetailsSection, 
  SezBeTypeSection, 
  Section65Section, 
  ReimportSection, 
  RspSection, 
  FtaSection, 
  ItemManufacturerSection, 
  PreviousBeSection 
} from './JobDetailSections';
import { 
  CessSection, 
  ThirdPartyExporterSection, 
  Ar4Section, 
  DrawbackSection, 
  RodtepSection, 
  RawMaterialsSection, 
  JobWorkSection, 
  DepbSection, 
  DepbParentSection, 
  DeecSection, 
  DfiaSection, 
  EpcgSection, 
  ReexportSection 
} from './ExportJobSections';
import AuditSidebar from './AuditSidebar';
import SuggestionsSidebar from './SuggestionsSidebar';
import FloatingAuditReport from './FloatingAuditReport';
import Footer from '../imports/Footer';
import checklistImage1 from 'figma:asset/7ae1a7bb5f45a46dd895098e95c83cf2b5e69bb9.png';
import checklistImage2 from 'figma:asset/800ed84cb2166f3c8072a05143ee0d87e25bae51.png';
import exportChecklistImage1 from 'figma:asset/885314e7902e0a00ac9a1282a30f1ffa9944fc22.png';
import exportChecklistImage2 from 'figma:asset/174eefe321f761c46ebf93bddf5e423224d14fb9.png';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import avatarSP from 'figma:asset/ec9ab09f46bb0b98e2ab97d99072a998fc9fc3d5.png';
import Onboarding, { TourType } from './Onboarding';
import SentinelModuleDropdown from '../imports/SentinelModuleDropdown';

interface AuditCardData {
  label: string;
  number: string;
  title: string;
  description: string;
  errorCode: string;
  index: number;
}

interface Comment {
  id: string;
  imageId: 1 | 2;
  x: number; // percentage
  y: number; // percentage
  text: string;
  timestamp: Date;
}

interface JobDetailsPageProps {
  onLogout: () => void;
  onBackToJobList: () => void;
  onCreateJob?: (data?: any) => void;
  onGenerateVersion?: () => void;
  jobData?: any;
  activeVersion?: string;
  versions?: string[];
  onVersionChange?: (version: string) => void;
}

const ICEGATE_STATUS_OPTIONS = [
  'Job Submitted To IceGate',
  'Negative Acknowledgement',
  'Positive Acknowledgement',
  'Query Raised',
  'Query Reply',
  'Amendment',
  '1st Copy Of Processed BE',
  'Out Of Charge',
  'Gatepass Received',
  'PRN Generated'
];

const CUSTOMIZED_STATUS_OPTIONS = [
  'Document send to eSanchit',
  'eSanchit Processed',
  'Cargo Ready',
  'Cargo/Container Picked Up',
  'Cargo Received',
  'Carting Order Received',
  'Custom Clearance Planned',
  'Cargo Cleared',
  'Cargo Delivered to FF/Airlines',
  'EP Copy Received',
  'EP Copy Sent',
  'Ready For Billing'
];

// Functional Status Toolbar Component
function StatusToolbar({ onAddStatus, onClose, onSave }: { onAddStatus: (statusName: string, type?: string) => void, onClose?: () => void, onSave?: () => void }) {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleShare = () => {
    console.log('Share status clicked');
    // Add share functionality here
  };

  const handleClose = () => {
    console.log('Close status clicked');
    if (onSave) {
      setDialogOpen(true);
    } else if (onClose) {
      onClose();
    }
  };

  const handleSaveAndQuit = () => {
    if (onSave) onSave();
    setDialogOpen(false);
    if (onClose) onClose();
  };

  const handleDontSave = () => {
    setDialogOpen(false);
    if (onClose) onClose();
  };

  return (
    <div className="w-full h-12 relative" onClick={(e) => e.stopPropagation()}>
      <StatusToolbarBase />
      
      {/* Invisible clickable areas over the buttons */}
      {/* Share button overlay */}
      <div 
        className="absolute cursor-pointer hover:bg-white hover:bg-opacity-10 rounded transition-colors"
        style={{
          right: '180px', // Position over share icon - adjusted for wider "Add Milestone" button
          top: '50%',
          transform: 'translateY(-50%)',
          width: '32px',
          height: '32px'
        }}
        onClick={handleShare}
        title="Share Status"
      />
      
      {/* Add Status button with Popover overlay */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div 
            className="absolute cursor-pointer hover:bg-blue-600 rounded transition-colors z-30"
            style={{
              right: '88px', // Position over Add Status button
              top: '50%',
              transform: 'translateY(-50%)',
              width: '120px', // Increased width for "Add Milestone"
              height: '32px'
            }}
            title="Add Milestone"
          />
        </PopoverTrigger>
        <PopoverContent className="w-[600px] p-0 z-[100]" align="end">
          <Command className="overflow-hidden">
            <CommandInput placeholder="Search milestone..." />
            <CommandList className="max-h-[500px]">
              <CommandEmpty>No milestone found.</CommandEmpty>
              <div className="flex flex-row">
                {/* Column 1: Icegate Status Set */}
                <div className="flex-1 border-r border-gray-200">
                  <CommandGroup 
                    heading="Icegate Status Set"
                    className="[&_[cmdk-group-heading]]:text-[16px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-black [&_[cmdk-group-heading]]:py-3 [&_[cmdk-group-heading]]:px-4"
                  >
                    {ICEGATE_STATUS_OPTIONS.map((status) => (
                      <CommandItem
                        key={status}
                        className="text-[14px] py-2 px-4 cursor-pointer"
                        onSelect={() => {
                          onAddStatus(status, 'Icegate');
                          setOpen(false);
                        }}
                      >
                        {status}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </div>

                {/* Column 2: Customized Status */}
                <div className="flex-1">
                  <CommandGroup 
                    heading="Customized Status"
                    className="[&_[cmdk-group-heading]]:text-[16px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-black [&_[cmdk-group-heading]]:py-3 [&_[cmdk-group-heading]]:px-4"
                  >
                    {CUSTOMIZED_STATUS_OPTIONS.map((status) => (
                      <CommandItem
                        key={status}
                        className="text-[14px] py-2 px-4 cursor-pointer"
                        onSelect={() => {
                          onAddStatus(status, 'Custom');
                          setOpen(false);
                        }}
                      >
                        {status}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </div>
              </div>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      {/* Close button overlay */}
      <div 
        className="absolute cursor-pointer hover:bg-blue-100 rounded transition-colors"
        style={{
          right: '12px', // Position over Close button
          top: '50%',
          transform: 'translateY(-50%)',
          width: '56px',
          height: '32px'
        }}
        onClick={handleClose}
        title="Close"
      />

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
            <AlertDialogDescription>
              Do you want to save the job before quitting?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDialogOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDontSave} className="bg-destructive hover:bg-destructive/90">
              Don't Save
            </AlertDialogAction>
            <AlertDialogAction onClick={handleSaveAndQuit}>
              Save & Quit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// Section components for each form section
function InvoiceDetailsSection({ activeCell, onExpandRow, jobType }: { activeCell: { section: string; rowIndex: number; columnId: string } | null, onExpandRow?: (row: any, mode?: 'split' | 'stacked') => void, jobType?: string }) {
  const handleInvoiceClick = (invoiceData: any) => {
    console.log('Invoice clicked:', invoiceData);
    // Handle invoice click - could open details modal, navigate to edit page, etc.
    if (onExpandRow) {
      onExpandRow(invoiceData, 'stacked');
    }
  };

  const handleAddInvoice = () => {
    console.log('Add invoice clicked');
    // Handle add invoice action
  };

  const handleInvoiceUpload = (files: File[]) => {
    console.log('Invoice files uploaded:', files);
    // Handle invoice file upload
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col" data-section="invoice">
      <div className="flex-1 w-full min-h-0">
        <InvoiceTable 
          onInvoiceClick={handleInvoiceClick}
          onAddInvoice={handleAddInvoice}
          onInvoiceUpload={handleInvoiceUpload}
          activeCell={activeCell}
          onExpandRow={onExpandRow}
          jobType={jobType}
        />
      </div>
    </div>
  );
}

function IGMDetailsSection({ jobType }: { jobType?: string }) {
  const handleIGMClick = (igmData: any) => {
    console.log('IGM clicked:', igmData);
    // Handle IGM click - could open details modal, navigate to edit page, etc.
  };

  const handleAddIGM = () => {
    console.log('Add IGM clicked');
    // Handle add IGM action
  };

  const handleIGMUpload = (files: File[]) => {
    console.log('IGM files uploaded:', files);
    // Handle IGM file upload
  };

  if (jobType === 'Export') {
    return <ShipmentDetailsForm />;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
      <div className="flex-1 w-full min-h-0">
        <IGMTable />
      </div>
    </div>
  );
}

function SingleWindowInfoSection({ title }: { title?: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
      <div className="flex-1 w-full min-h-0">
        <SingleWindowInfoTable title={title} />
      </div>
    </div>
  );
}

function ItemDetailsSection({ activeCell, onExpandRow, isExport }: { activeCell: { section: string; rowIndex: number; columnId: string } | null, onExpandRow?: (row: any, mode: 'split' | 'stacked') => void, isExport?: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col" data-section="itemDetails">
      <div className="flex-1 w-full min-h-0">
        <ItemDetailsTable activeCell={activeCell} onExpandRow={onExpandRow} isExport={isExport} />
      </div>
    </div>
  );
}

function SupportingDocsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
      <div className="flex-1 w-full min-h-0">
        <SupportingDocumentsTable enableGrouping={true} />
      </div>
    </div>
  );
}

function StatementsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
      <div className="flex-1 w-full min-h-0">
        <StatementsTable enableGrouping={true} />
      </div>
    </div>
  );
}

export default function JobDetailsPage({ 
  onLogout, 
  onBackToJobList, 
  onCreateJob, 
  onGenerateVersion,
  jobData, 
  activeVersion: propActiveVersion, 
  versions: propVersions,
  onVersionChange: propOnVersionChange 
}: JobDetailsPageProps) {
  const [activeTab, setActiveTab] = useState<'files' | 'jobDetails' | 'status' | 'auditChecklist'>('files');
  const [selectedPdf, setSelectedPdf] = useState<string | null>('sample_invoice.pdf');
  const [activeNavigationSection, setActiveNavigationSection] = useState('jobDetails');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);
  const [isInvoiceSidebarOpen, setIsInvoiceSidebarOpen] = useState(false);
  const [invoiceSidebarLayoutMode, setInvoiceSidebarLayoutMode] = useState<'stacked' | 'split'>('split');
  const [invoiceSidebarPdfOpen, setInvoiceSidebarPdfOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  
  // Item Sidebar State
  const [isItemSidebarOpen, setIsItemSidebarOpen] = useState(false);
  const [itemSidebarLayoutMode, setItemSidebarLayoutMode] = useState<'stacked' | 'split'>('split');
  const [itemSidebarPdfOpen, setItemSidebarPdfOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isAuditSidebarOpen, setIsAuditSidebarOpen] = useState(false);
  const [isAuditSidebarFloating, setIsAuditSidebarFloating] = useState(false);
  const [isSuggestionsSidebarOpen, setIsSuggestionsSidebarOpen] = useState(false);
  // Type of data selected for the sidebar (invoice or item)
  const [selectedDataType, setSelectedDataType] = useState<'invoice' | 'item'>('invoice');
  // Version management state - use props if provided, otherwise default to 'live'
  const activeVersion = propActiveVersion || 'live';
  const versions = propVersions || ['live', 'cl01'];
  const handleVersionChange = propOnVersionChange || (() => {});
  
  // Force live version when switching to Job Details tab, and checklist version for Audit Checklist
  useEffect(() => {
    if (activeTab === 'jobDetails' && activeVersion !== 'live') {
      handleVersionChange('live');
    } else if (activeTab === 'auditChecklist' && activeVersion === 'live') {
      const checklistVersion = versions.find(v => v.startsWith('cl'));
      if (checklistVersion) {
        handleVersionChange(checklistVersion);
      }
    }
  }, [activeTab, activeVersion, versions, handleVersionChange]);
  
  // Expanded sections state for navigation
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  
  // Zoom state for CL01 images - separate zoom levels for each image
  const [image1ZoomLevel, setImage1ZoomLevel] = useState(0.7); // 0.7 = 70%
  const [image2ZoomLevel, setImage2ZoomLevel] = useState(0.7);
  const [image1Rotation, setImage1Rotation] = useState(0);
  
  const [activeCell, setActiveCell] = useState<{
    section: string;
    rowIndex: number;
    columnId: string;
  } | null>(null);

  const [statusData, setStatusData] = useState<StatusData[]>(initialStatusData);

  const handleAddStatus = (statusName: string, type: string = 'Icegate') => {
    const newStatus: StatusData = {
      key: `new-${Date.now()}`,
      sNo: statusData.length + 1,
      statusName,
      statusType: type,
      remarks: `Added via status toolbar: ${statusName}`,
      statusCode: `${Math.floor(Math.random() * 399) + 200}`,
      createdAt: `${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`,
      capturedBy: 'Suresh Patel',
      capturedByAvatar: avatarSP,
      actions: 'edit'
    };
    setStatusData(prev => [newStatus, ...prev].map((item, index) => ({ ...item, sNo: index + 1 })));
  };

  // Form Data State for Validation
  const [currentFormData, setCurrentFormData] = useState<any>(null);

  // Onboarding State
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentTourType, setCurrentTourType] = useState<TourType>('job-files');

  // Track tab changes and auto-start tours for new jobs
  useEffect(() => {
    // Only start tour if this is a new job
    if (!jobData?.isNewJob) return;

    const visitedTabs = JSON.parse(localStorage.getItem('visitedJobTabs') || '{}');
    // Use job number + tab as key to ensure it shows for this specific job's tabs
    const key = `visited-${jobData.jobNumber}-${activeTab}`;
    
    if (!visitedTabs[key]) {
      visitedTabs[key] = true;
      localStorage.setItem('visitedJobTabs', JSON.stringify(visitedTabs));
      
      let tourType: TourType | null = null;
      if (activeTab === 'files') {
        tourType = 'job-files';
      } else if (activeTab === 'jobDetails') {
        tourType = 'job-details-info';
      } else if (activeTab === 'status') {
        tourType = 'job-status';
      }
      
      if (tourType) {
        setTimeout(() => {
          setCurrentTourType(tourType!);
          setShowOnboarding(true);
        }, 800);
      }
    }
  }, [activeTab, jobData]);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  const handleToggleMegaMenu = useCallback(() => {
    setIsMegaMenuOpen(prev => !prev);
  }, []);
  
  const defaultAuditItems: AuditCardData[] = [
    {
      label: "1/0",
      number: "01",
      title: "INVOICE", 
      description: "Invoice Value Cannot be Null or Negative or Zero.",
      errorCode: "205",
      index: 0
    },
    {
      label: "1/1",
      number: "02",
      title: "ITEMS",
      description: "Item Description must be entered.",
      errorCode: "306",
      index: 1
    },
    {
      label: "1/2", 
      number: "03",
      title: "ITEMS",
      description: "Field value is missing for mandatory field HSN",
      errorCode: "600",
      index: 2
    }
  ];

  const [auditItems, setAuditItems] = useState<AuditCardData[]>(defaultAuditItems);

  // Validation Logic triggered on Save
  const handleSave = () => {
    if (!currentFormData) return;

    // Start with default/existing errors
    const items: AuditCardData[] = [...defaultAuditItems];
    let errorIndex = items.length;

    const addError = (label: string, number: string, title: string, description: string, errorCode: string) => {
      items.push({
        label,
        number,
        title,
        description,
        errorCode,
        index: errorIndex++
      });
    };

    // CB Details
    if (!currentFormData.name?.trim()) addError("1/0", "01", "CB DETAILS", "Name must be entered.", "601");
    if (!currentFormData.licenseNo?.trim()) addError("1/1", "02", "CB DETAILS", "License No must be entered.", "602");
    if (!currentFormData.brSlNo?.trim()) addError("1/2", "03", "CB DETAILS", "BR. SL No must be entered.", "603");

    // Job Info
    if (!currentFormData.priorBe) addError("2/0", "04", "JOB INFO", "Prior BE must be selected.", "604");
    if (!currentFormData.mot) addError("2/1", "05", "JOB INFO", "MOT must be selected.", "605");
    if (!currentFormData.beType) addError("2/2", "06", "JOB INFO", "BE Type must be selected.", "606");
    if (!currentFormData.customsHouseCd) addError("2/3", "07", "JOB INFO", "Customs House Cd must be selected.", "607");
    if (!currentFormData.portOfOrigin) addError("2/4", "08", "JOB INFO", "Port of Origin must be selected.", "608");
    if (!currentFormData.countryOfOrigin) addError("2/5", "09", "JOB INFO", "Country of Origin must be selected.", "609");
    if (!currentFormData.portOfShipment) addError("2/6", "10", "JOB INFO", "Port of Shipment must be selected.", "610");
    if (!currentFormData.consCountry) addError("2/7", "11", "JOB INFO", "Cons Country must be selected.", "611");
    if (!currentFormData.paytMthodCd) addError("2/8", "12", "JOB INFO", "Payt Method Cd must be selected.", "612");
    if (!currentFormData.section48Reason?.trim()) addError("2/9", "13", "JOB INFO", "Section 48 Reason must be entered.", "613");
    if (!currentFormData.firstCheckReason?.trim()) addError("2/10", "14", "JOB INFO", "First Check Reason must be entered.", "614");

    // Importer Details
    if (!currentFormData.importerName?.trim()) addError("3/0", "15", "IMPORTER", "Importer Name must be entered.", "615");
    if (!currentFormData.iecPan?.trim()) addError("3/1", "16", "IMPORTER", "IEC/PAN must be entered.", "616");
    if (!currentFormData.importerId?.trim()) addError("3/2", "17", "IMPORTER", "Importer ID must be entered.", "617");

    // Commercial Tax Type
    if (!currentFormData.stateCode) addError("4/0", "18", "TAX TYPE", "State Code must be selected.", "618");
    if (!currentFormData.taxType) addError("4/1", "19", "TAX TYPE", "Tax Type must be selected.", "619");
    if (!currentFormData.registrationNo?.trim()) addError("4/2", "20", "TAX TYPE", "Registration No must be entered.", "620");

    setAuditItems(items);
    
    // Also open the audit sidebar to show the new errors
    setIsAuditSidebarOpen(true);
  };

  // Comment System State
  const [comments, setComments] = useState<Comment[]>([]);
  const [isCommentMode, setIsCommentMode] = useState(false);
  const [pendingComment, setPendingComment] = useState<{imageId: 1|2, x: number, y: number} | null>(null);
  const [commentText, setCommentText] = useState("");
  const [openCommentId, setOpenCommentId] = useState<string | null>(null);

  // Refs for smooth scrolling to sections - only for CL01
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Refs for each section to focus on first input
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Ref for EnhancedJobDetailsForm to trigger focus
  const jobDetailsFormRef = useRef<EnhancedJobDetailsFormHandle>(null);

  // Handler for when user navigates from left nav to first field
  const handleNavigateToFirstField = (sectionId: string) => {
    if (jobDetailsFormRef.current) {
      jobDetailsFormRef.current.focusFirstField(sectionId);
    }
  };

  const handleNavigationClick = (section: string) => {
    setActiveNavigationSection(section);
  };

  // Invoice Navigation
  const handleNextInvoice = () => {
    if (!selectedInvoice) return;
    const currentIndex = mockData.findIndex(inv => inv.id === (selectedInvoice as any).id);
    if (currentIndex !== -1 && currentIndex < mockData.length - 1) {
      setSelectedInvoice({ ...mockData[currentIndex + 1], jobNo: jobData?.jobNo || 'ICB/16453/2025-26' } as any);
    }
  };

  const handlePrevInvoice = () => {
    if (!selectedInvoice) return;
    const currentIndex = mockData.findIndex(inv => inv.id === (selectedInvoice as any).id);
    if (currentIndex > 0) {
      setSelectedInvoice({ ...mockData[currentIndex - 1], jobNo: jobData?.jobNo || 'ICB/16453/2025-26' } as any);
    }
  };

  const handleNextJob = () => {
    // In a real app, this would fetch the next job from the list
    // For now, we'll simulate it by updating the job number
    const currentJobNo = jobData?.jobNumber || 'ICB/12345/2025-26';
    const parts = currentJobNo.split('/');
    if (parts.length >= 2) {
      const num = parseInt(parts[1], 10);
      const nextNum = num + 1;
      const nextJobNo = `${parts[0]}/${nextNum}/${parts[2]}`;
      
      // Dispatch event to update app state
      const event = new CustomEvent('navigateToJobDetails', { 
        detail: { 
          jobData: { ...jobData, jobNumber: nextJobNo },
          activeTab: 'jobDetails'
        } 
      });
      window.dispatchEvent(event);
    }
  };

  const handlePrevJob = () => {
    // In a real app, this would fetch the previous job from the list
    const currentJobNo = jobData?.jobNumber || 'ICB/12345/2025-26';
    const parts = currentJobNo.split('/');
    if (parts.length >= 2) {
      const num = parseInt(parts[1], 10);
      if (num > 0) {
        const prevNum = num - 1;
        const prevJobNo = `${parts[0]}/${prevNum}/${parts[2]}`;
        
        // Dispatch event to update app state
        const event = new CustomEvent('navigateToJobDetails', { 
          detail: { 
            jobData: { ...jobData, jobNumber: prevJobNo },
            activeTab: 'jobDetails'
          } 
        });
        window.dispatchEvent(event);
      }
    }
  };

  // Define section order for keyboard navigation
  const sectionOrder = [
    'jobDetails',
    'containerDetails',
    'hss',
    'bondDetails',
    'certificateDetails',
    'exchangeRate',
    'igmDetails',
    'invoiceDetails',
    'itemDetails',
    'swInfo',
    'swProduction',
    'swControl',
    'swConstituent',
    'licenseDetails',
    'sezBeType',
    'section65',
    'reimport',
    'rsp',
    'fta',
    'itemManufacturer',
    'previousBe',
    'supportingDocs',
    'statements'
  ];

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Shift + Arrow keys are pressed
      if (event.shiftKey && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault(); // Prevent default scrolling behavior
        
        const currentIndex = sectionOrder.indexOf(activeNavigationSection);
        
        if (event.key === 'ArrowDown') {
          // Navigate to next section
          const nextIndex = (currentIndex + 1) % sectionOrder.length;
          setActiveNavigationSection(sectionOrder[nextIndex]);
        } else if (event.key === 'ArrowUp') {
          // Navigate to previous section
          const prevIndex = currentIndex === 0 ? sectionOrder.length - 1 : currentIndex - 1;
          setActiveNavigationSection(sectionOrder[prevIndex]);
        }
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeNavigationSection]);

  // Auto-expand parent sections when navigating to subsections
  useEffect(() => {
    // Define subsection to parent mapping
    const subsectionParentMap: Record<string, string> = {
      'containerDetails': 'jobDetails',
      'hss': 'jobDetails',
      'bondDetails': 'jobDetails',
      'certificateDetails': 'jobDetails',
      'exchangeRate': 'jobDetails',
      'swInfo': 'itemDetails',
      'swProduction': 'itemDetails',
      'swControl': 'itemDetails',
      'swConstituent': 'itemDetails',
      'licenseDetails': 'itemDetails',
      'sezBeType': 'itemDetails',
      'section65': 'itemDetails',
      'reimport': 'itemDetails',
      'rsp': 'itemDetails',
      'fta': 'itemDetails',
      'itemManufacturer': 'itemDetails',
      'previousBe': 'itemDetails',
    };

    // Check if current section is a subsection
    const parentSection = subsectionParentMap[activeNavigationSection];
    
    if (parentSection && !expandedSections.has(parentSection)) {
      // Expand parent section
      setExpandedSections(prev => {
        const newSet = new Set(prev);
        newSet.add(parentSection);
        return newSet;
      });
    }
  }, [activeNavigationSection]);

  // Right Arrow key handler to focus first cell in active section
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle Right Arrow key when not in an input, textarea, or select
      // and when Shift is not pressed (to avoid conflict with Shift+Arrow navigation)
      if (event.key === 'ArrowRight' && 
          !event.shiftKey &&
          !(event.target instanceof HTMLInputElement || 
            event.target instanceof HTMLTextAreaElement ||
            event.target instanceof HTMLSelectElement)) {
        
        // Focus first input in active section
        const focusFirstInputInSection = () => {
          // Define section selectors
          let selectorId = '';
          
          // Map navigation section to actual DOM section
          if (activeNavigationSection === 'jobDetails') {
            selectorId = '#jobDetails';
          } else if (['hss', 'bondDetails', 'certificateDetails', 'exchangeRate'].includes(activeNavigationSection)) {
            selectorId = `#${activeNavigationSection}`;
          } else if (activeNavigationSection === 'igmDetails') {
            selectorId = '#igmDetails';
          } else if (activeNavigationSection === 'invoiceDetails') {
            selectorId = '#invoiceDetails';
          } else if (['swInfo', 'swProduction', 'swControl', 'swConstituent'].includes(activeNavigationSection)) {
             selectorId = `#${activeNavigationSection}`;
          } else if (['itemDetails', 
                      'licenseDetails', 'sezBeType', 'section65', 'reimport', 'rsp', 'fta', 
                      'itemManufacturer', 'previousBe'].includes(activeNavigationSection)) {
            selectorId = '#itemDetails';
          } else if (activeNavigationSection === 'supportingDocs') {
            selectorId = '#supportingDocs';
          } else if (activeNavigationSection === 'statements') {
            selectorId = '#statements';
          }
          
          if (selectorId) {
            const section = document.querySelector(selectorId);
            if (section) {
              // First, try to find focusable input, textarea, or select element (for forms)
              const firstInput = section.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
                'input:not([disabled]):not([readonly]), textarea:not([disabled]):not([readonly]), select:not([disabled])'
              );
              
              if (firstInput) {
                firstInput.focus();
                
                // If it's an input or textarea, select all text
                if (firstInput instanceof HTMLInputElement || firstInput instanceof HTMLTextAreaElement) {
                  firstInput.select();
                }
              } else {
                // For table-based sections, find the first editable cell
                // Tables use tabindex to indicate editable cells
                const firstEditableCell = section.querySelector<HTMLElement>('[tabindex="0"]');
                
                if (firstEditableCell) {
                  // Click the cell to activate editing
                  firstEditableCell.click();
                  
                  // Give it time to activate, then try to focus the input that appears
                  setTimeout(() => {
                    const editInput = section.querySelector<HTMLInputElement>('input[type="text"], textarea');
                    if (editInput) {
                      editInput.focus();
                      editInput.select();
                    }
                  }, 50);
                } else {
                  // Fallback: try to find any clickable cell using data-cell-id
                  const firstCell = section.querySelector<HTMLElement>('[data-cell-id]');
                  if (firstCell) {
                    firstCell.click();
                  }
                }
              }
            }
          }
        };
        
        focusFirstInputInSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeNavigationSection]);

  // Add global cell click listener for suggestions sidebar - only for Item Details
  useEffect(() => {
    const handleCellClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const cellElement = target.closest('[data-cell-id]');
      
      if (cellElement) {
        const cellId = cellElement.getAttribute('data-cell-id');
        
        if (cellId) {
          // Parse cell ID to extract section, row, and column info
          const parts = cellId.split('-');
          
          if (parts.length >= 2) {
            const rowIndex = parseInt(parts[0]);
            const columnId = parts[1];
            
            // Only proceed if this is an Item Details cell
            const itemDetailsSection = cellElement.closest('#itemDetails');
            
            if (itemDetailsSection) {
              const sectionName = 'itemDetails';
              setActiveCell({
                section: sectionName,
                rowIndex: isNaN(rowIndex) ? 0 : rowIndex,
                columnId
              });
              
              // Remove auto-open functionality - user must click the toolbar icon
              // setIsSuggestionsSidebarOpen(true);
            } else {
              // Clear active cell if clicking outside Item Details
              setActiveCell(null);
            }
          }
        }
      } else {
        // Clear active cell if clicking outside any table cell
        setActiveCell(null);
      }
    };

    // Add event listener to document
    document.addEventListener('click', handleCellClick, true);
    
    return () => {
      document.removeEventListener('click', handleCellClick, true);
    };
  }, []);

  const handleUpload = () => {
    console.log('Upload files clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
    handleBackToJobList();
  };

  // Enhanced Audit Click Handler with Mutual Exclusivity
  const handleAuditClick = () => {
    // Check if suggestions sidebar is open
    if (isSuggestionsSidebarOpen) {
      // Prevent opening audit sidebar when suggestions sidebar is open
      console.log('Cannot open Audit sidebar - Suggestions sidebar is currently open. Please close it first.');
      return;
    }
    
    // Open audit sidebar only if no other sidebar is open
    setIsAuditSidebarOpen(true);
  };

  const handleAuditSidebarClose = () => {
    setIsAuditSidebarOpen(false);
    setIsAuditSidebarFloating(false);
  };

  const handleAuditSidebarFloat = () => {
    setIsAuditSidebarFloating(true);
    setIsAuditSidebarOpen(false); // Close the sidebar when floating
  };

  const handleFloatingAuditReportClose = () => {
    setIsAuditSidebarFloating(false);
  };

  const handleFloatingAuditReportDock = () => {
    setIsAuditSidebarFloating(false);
    setIsAuditSidebarOpen(true); // Dock back to sidebar
  };

  const handleAuditErrorViewClick = (errorData: { sNo: number; invoiceNo: string; errorCode: string; table: string; refNo: string; description: string }) => {
    console.log('View error clicked:', errorData);
    
    // Map specific errors to their target cells
    let targetSection = '';
    let columnId = '';
    let rowIndex = 0;
    
    // Row 1: Invoice 1/0 - Error 205 - value cell in first invoice
    if (errorData.sNo === 1) {
      targetSection = 'invoice';
      columnId = 'value';
      rowIndex = 0; // First invoice row
    }
    // Row 2: Invoice 1/1 - Error 306 - description cell in first item
    else if (errorData.sNo === 2) {
      targetSection = 'itemDetails';
      columnId = 'invoiceDescription';
      rowIndex = 0; // First item row
    }
    // Row 3: Invoice 1/2 - Error 600 - hsn cell in second item
    else if (errorData.sNo === 3) {
      targetSection = 'itemDetails';
      columnId = 'hsn';
      rowIndex = 1; // Second item row
    }
    
    // Set active cell to highlight the field
    if (targetSection && columnId) {
      setActiveCell({
        section: targetSection,
        rowIndex: rowIndex,
        columnId: columnId
      });
      
      // Navigate to the appropriate tab if not already there
      if (targetSection === 'invoice') {
        setActiveNavigationSection('invoiceDetails');
      } else if (targetSection === 'itemDetails') {
        setActiveNavigationSection('itemDetails');
      }
      
      // Scroll to the section after a brief delay to allow state update
      setTimeout(() => {
        const sectionElement = document.querySelector(`[data-section="${targetSection}"]`);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleBackToJobList = () => {
    // Navigate back to job list specifically to the Imports tab
    onBackToJobList();
  };

  // Enhanced Batch Prediction Click Handler with Mutual Exclusivity
  const handleBatchPredictionClick = () => {
    // Check if audit sidebar is open
    if (isAuditSidebarOpen) {
      // Prevent opening suggestions sidebar when audit sidebar is open
      console.log('Cannot open Suggestions sidebar - Audit sidebar is currently open. Please close it first.');
      return;
    }
    
    // Open suggestions sidebar only if no other sidebar is open
    setIsSuggestionsSidebarOpen(true);
  };

  const handleSuggestionsSidebarClose = () => {
    setIsSuggestionsSidebarOpen(false);
  };

  const handleInvoiceExpand = (row: any, mode: 'split' | 'stacked' = 'split', type: 'invoice' | 'item' = 'invoice') => {
    setSelectedInvoice({ ...row, jobNo: jobData?.jobNo || 'ICB/16453/2025-26' });
    setSelectedDataType(type);
    setInvoiceSidebarLayoutMode(mode);
    setInvoiceSidebarPdfOpen(mode === 'split');
    setIsInvoiceSidebarOpen(true);
  };

  const handleItemExpand = (row: any, mode: 'split' | 'stacked' = 'split') => {
    setSelectedItem({ ...row, jobNo: jobData?.jobNo || 'ICB/16453/2025-26' });
    setItemSidebarLayoutMode(mode);
    setItemSidebarPdfOpen(mode === 'split');
    setIsItemSidebarOpen(true);
  };

  const handleNextItem = () => {
    if (!selectedItem) return;
    const currentIndex = itemMockData.findIndex(item => item.id === selectedItem.id);
    if (currentIndex < itemMockData.length - 1) {
      setSelectedItem({ ...itemMockData[currentIndex + 1], jobNo: jobData?.jobNo || 'ICB/16453/2025-26' });
    }
  };

  const handlePrevItem = () => {
    if (!selectedItem) return;
    const currentIndex = itemMockData.findIndex(item => item.id === selectedItem.id);
    if (currentIndex > 0) {
      setSelectedItem({ ...itemMockData[currentIndex - 1], jobNo: jobData?.jobNo || 'ICB/16453/2025-26' });
    }
  };

  const handleAuditCardClick = (cardData: AuditCardData) => {
    console.log('Audit card clicked:', cardData.index, cardData.title);
    
    // Navigate to different sections and make specific cells active based on audit card
    if (cardData.index === 0) {
      // First card relates to "Invoice Value Cannot be Null or Negative or Zero"
      setActiveNavigationSection('invoiceDetails');
      
      // Activate the first row value cell
      setTimeout(() => {
        // We don't need to find the section in DOM since we switch view, just focus the cell
        // Fallback: Use global function to directly activate edit mode
        console.log('Using global activation function...');
        const activateCell = (window as any).activateInvoiceDetailsCell;
        if (activateCell) {
          console.log('Calling global activation function with parameters: 0, value');
          activateCell(0, 'value');
        }
      }, 100); // Shorter timeout since render should be fast
    } else if (cardData.index === 1) { 
      // Second card relates to "Item Description must be entered"
      setActiveNavigationSection('itemDetails');

      setTimeout(() => {
        const activateCell = (window as any).activateItemDetailsCell;
        if (activateCell) {
          activateCell(0, 'invoiceDescription');
        }
      }, 100);
    } else if (cardData.index === 2) {
      // Third card relates to "HSN must be entered"
      setActiveNavigationSection('itemDetails');

      setTimeout(() => {
        const activateCell = (window as any).activateItemDetailsCell;
        if (activateCell) {
          activateCell(1, 'hsn');
        }
      }, 100);
    }
  };

  const handleImageClickWithComment = (e: React.MouseEvent<HTMLImageElement>, imageId: 1 | 2) => {
    if (isCommentMode) {
      // Calculate percentage coordinates
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setPendingComment({ imageId, x, y });
      setCommentText("");
      setOpenCommentId(null); // Close other popovers
    } else {
      // Existing zoom logic
      if (imageId === 1) handleImage1Click();
      else handleImage2Click();
    }
  };

  const handleSaveComment = () => {
    if (pendingComment && commentText.trim()) {
      const newComment: Comment = {
        id: Math.random().toString(36).substr(2, 9),
        imageId: pendingComment.imageId,
        x: pendingComment.x,
        y: pendingComment.y,
        text: commentText,
        timestamp: new Date()
      };
      setComments([...comments, newComment]);
      setPendingComment(null);
      setCommentText("");
    }
  };

  const handleDeleteComment = (id: string) => {
    setComments(comments.filter(c => c.id !== id));
    setOpenCommentId(null);
  };

  // Handle image zoom functionality
  const handleImage1Click = () => {
    setImage1ZoomLevel(prevZoom => {
      if (prevZoom >= 3) return 1; // Reset to normal after 3x zoom
      return prevZoom + 1; // Zoom in
    });
  };

  const handleImage2Click = () => {
    setImage2ZoomLevel(prevZoom => {
      if (prevZoom >= 3) return 1; // Reset to normal after 3x zoom
      return prevZoom + 1; // Zoom in
    });
  };

  // Global zoom controls
  const handleGlobalZoomIn = () => {
    setImage1ZoomLevel(prev => Math.min(prev + 0.1, 3));
    setImage2ZoomLevel(prev => Math.min(prev + 0.1, 3));
  };

  const handleGlobalZoomOut = () => {
    setImage1ZoomLevel(prev => Math.max(prev - 0.1, 0.1));
    setImage2ZoomLevel(prev => Math.max(prev - 0.1, 0.1));
  };

  // Reset zoom levels when switching away from CL01
  useEffect(() => {
    if (activeVersion !== 'cl01') {
      setImage1ZoomLevel(0.7);
      setImage2ZoomLevel(0.7);
    }
  }, [activeVersion]);

  const renderChecklistContent = () => {
    // Determine which images to show based on job type
    const isExport = jobData?.type === 'Export';
    const currentImage1 = isExport ? exportChecklistImage1 : checklistImage1;
    const currentImage2 = isExport ? exportChecklistImage2 : checklistImage2;

    return (
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto bg-[#525659] p-8 space-y-8 relative h-full flex flex-col items-center"
        style={{ 
          scrollBehavior: 'smooth',
          minHeight: '0' // Ensure proper flex behavior
        }}
      >
        {/* First Checklist Image */}
        <div 
          className="relative transition-all duration-300 ease-in-out shadow-lg bg-white shrink-0"
          style={{ 
            width: `${image1ZoomLevel * 100}%`,
          }}
        >
          <img 
            src={currentImage1} 
            alt={`Checklist Page 1`} 
            className={`block w-full h-auto ${
              isCommentMode ? 'cursor-crosshair' : ''
            }`}
            onClick={(e) => isCommentMode && handleImageClickWithComment(e, 1)}
          />
          
          {/* Render Comments for Image 1 */}
          {comments.filter(c => c.imageId === 1).map(comment => (
            <Popover key={comment.id} open={openCommentId === comment.id} onOpenChange={(open) => setOpenCommentId(open ? comment.id : null)}>
              <PopoverTrigger asChild>
                <button
                  className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 z-20 border-2 border-white"
                  style={{ left: `${comment.x}%`, top: `${comment.y}%` }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="font-bold text-xs">{comments.indexOf(comment) + 1}</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 overflow-hidden" side="top">
                  <div className="bg-slate-50 p-3 border-b flex justify-between items-center">
                    <span className="font-semibold text-sm">Comment #{comments.indexOf(comment) + 1}</span>
                    <span className="text-xs text-slate-500">{comment.timestamp.toLocaleDateString()}</span>
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-slate-700 whitespace-pre-wrap">{comment.text}</p>
                  </div>
                  <div className="p-2 bg-slate-50 border-t flex justify-end">
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteComment(comment.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 px-2">
                      <Trash2 size={14} className="mr-1" /> Delete
                    </Button>
                  </div>
              </PopoverContent>
            </Popover>
          ))}

          {/* Pending Comment Popover for Image 1 */}
          {pendingComment && pendingComment.imageId === 1 && (
            <Popover open={true} onOpenChange={(open) => !open && setPendingComment(null)}>
              <PopoverAnchor
                  className="absolute w-1 h-1 bg-transparent pointer-events-none"
                  style={{ left: `${pendingComment.x}%`, top: `${pendingComment.y}%` }}
              />
              <PopoverContent className="w-80 p-4 shadow-xl" side="right" align="start" onInteractOutside={(e) => { e.preventDefault(); }}>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-sm">Add Comment</h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setPendingComment(null)}>
                      <X size={14} />
                    </Button>
                  </div>
                  <Textarea 
                    value={commentText} 
                    onChange={(e) => setCommentText(e.target.value)} 
                    placeholder="Type your comment here..."
                    className="mb-3 min-h-[100px]"
                    autoFocus
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => setPendingComment(null)}>Cancel</Button>
                    <Button size="sm" onClick={handleSaveComment}>Save Comment</Button>
                  </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Second Checklist Image */}
        <div 
          className="relative transition-all duration-300 ease-in-out shadow-lg bg-white shrink-0"
          style={{ 
            width: `${image2ZoomLevel * 100}%`,
          }}
        >
          <img 
            src={currentImage2} 
            alt="Checklist Page 2" 
            className={`block w-full h-auto ${
              isCommentMode ? 'cursor-crosshair' : ''
            }`}
            onClick={(e) => isCommentMode && handleImageClickWithComment(e, 2)}
          />

          {/* Render Comments for Image 2 */}
          {comments.filter(c => c.imageId === 2).map(comment => (
            <Popover key={comment.id} open={openCommentId === comment.id} onOpenChange={(open) => setOpenCommentId(open ? comment.id : null)}>
              <PopoverTrigger asChild>
                <button
                  className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 z-20 border-2 border-white"
                  style={{ left: `${comment.x}%`, top: `${comment.y}%` }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="font-bold text-xs">{comments.indexOf(comment) + 1}</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 overflow-hidden" side="top">
                  <div className="bg-slate-50 p-3 border-b flex justify-between items-center">
                    <span className="font-semibold text-sm">Comment #{comments.indexOf(comment) + 1}</span>
                    <span className="text-xs text-slate-500">{comment.timestamp.toLocaleDateString()}</span>
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-slate-700 whitespace-pre-wrap">{comment.text}</p>
                  </div>
                  <div className="p-2 bg-slate-50 border-t flex justify-end">
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteComment(comment.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 px-2">
                      <Trash2 size={14} className="mr-1" /> Delete
                    </Button>
                  </div>
              </PopoverContent>
            </Popover>
          ))}

          {/* Pending Comment Popover for Image 2 */}
          {pendingComment && pendingComment.imageId === 2 && (
            <Popover open={true} onOpenChange={(open) => !open && setPendingComment(null)}>
              <PopoverAnchor
                  className="absolute w-1 h-1 bg-transparent pointer-events-none"
                  style={{ left: `${pendingComment.x}%`, top: `${pendingComment.y}%` }}
              />
              <PopoverContent className="w-80 p-4 shadow-xl" side="right" align="start" onInteractOutside={(e) => { e.preventDefault(); }}>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-sm">Add Comment</h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setPendingComment(null)}>
                      <X size={14} />
                    </Button>
                  </div>
                  <Textarea 
                    value={commentText} 
                    onChange={(e) => setCommentText(e.target.value)} 
                    placeholder="Type your comment here..."
                    className="mb-3 min-h-[100px]"
                    autoFocus
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => setPendingComment(null)}>Cancel</Button>
                    <Button size="sm" onClick={handleSaveComment}>Save Comment</Button>
                  </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
        
        <div className="h-20 shrink-0" />
      </div>
    );
  };

  // Render content based on version
  const renderScrollableSections = () => {
    // Live version - show active form section
    return (
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-hidden flex flex-col relative"
        style={{ 
          height: activeTab === 'status' ? 'calc(100vh - 144px - 60px)' : 'calc(100vh - 96px - 60px)', // Account for footer (60px) + 0px spacing
        }}
      >
        <div className="flex-1 overflow-y-auto p-2 sm:p-3 md:p-4 pb-4">{/* 16px bottom padding for footer spacing */}

          {/* Conditional Rendering based on Active Section */}
          {(['jobDetails'].includes(activeNavigationSection)) && (
            <div id="jobDetails" className="w-full min-h-full">
              <EnhancedJobDetailsForm 
                jobData={jobData} 
                activeSection={activeNavigationSection} 
                ref={jobDetailsFormRef} 
                onFormChange={setCurrentFormData}
              />
            </div>
          )}

          {activeNavigationSection === 'containerDetails' && (
            <div id="containerDetails" className="w-full h-full">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
                <div className="flex-1 w-full min-h-0">
                  <JobContainerDetailsTable />
                </div>
              </div>
            </div>
          )}

          {activeNavigationSection === 'hss' && (
            <div id="hss" className="w-full h-full">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
                <div className="flex-1 w-full min-h-0">
                  <HssDetails />
                </div>
              </div>
            </div>
          )}

          {activeNavigationSection === 'bondDetails' && (
            <div id="bondDetails" className="w-full h-full">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
                <div className="flex-1 w-full min-h-0">
                  <BondDetails />
                </div>
              </div>
            </div>
          )}

          {activeNavigationSection === 'certificateDetails' && (
            <div id="certificateDetails" className="w-full h-full">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
                <div className="flex-1 w-full min-h-0">
                  <CertificateDetails />
                </div>
              </div>
            </div>
          )}

          {activeNavigationSection === 'exchangeRate' && (
            <div id="exchangeRate" className="w-full h-full">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
                <div className="flex-1 w-full min-h-0">
                  <ExchangeRateDetails />
                </div>
              </div>
            </div>
          )}

          {activeNavigationSection === 'igmDetails' && (
            <div id="igmDetails" className="w-full h-full">
              <IGMDetailsSection jobType={jobData?.type} />
            </div>
          )}

          {activeNavigationSection === 'invoiceDetails' && (
            <div id="invoiceDetails" className="w-full h-full">
              <InvoiceDetailsSection activeCell={activeCell} onExpandRow={handleInvoiceExpand} jobType={jobData?.type} />
            </div>
          )}

          {['swInfo', 'swProduction', 'swControl', 'swConstituent'].includes(activeNavigationSection) && (
            <div id={activeNavigationSection} className="w-full h-full">
              <SingleWindowInfoSection 
                title={
                  activeNavigationSection === 'swProduction' ? 'Single Window Production' :
                  activeNavigationSection === 'swControl' ? 'Single Window Control' :
                  activeNavigationSection === 'swConstituent' ? 'Single Window Constituent' :
                  'Single Window Info'
                } 
              />
            </div>
          )}

          {activeNavigationSection === 'itemDetails' && (
            <div id="itemDetails" className="w-full h-full">
              <ItemDetailsSection activeCell={activeCell} onExpandRow={handleItemExpand} isExport={jobData?.type === 'Export'} />
            </div>
          )}

          {activeNavigationSection === 'licenseDetails' && (
            <div id="licenseDetails" className="w-full h-full">
              <LicenseDetailsSection />
            </div>
          )}

          {activeNavigationSection === 'sezBeType' && (
            <div id="sezBeType" className="w-full h-full">
              <SezBeTypeSection />
            </div>
          )}

          {activeNavigationSection === 'section65' && (
            <div id="section65" className="w-full h-full">
              <Section65Section />
            </div>
          )}

          {activeNavigationSection === 'reimport' && (
            <div id="reimport" className="w-full h-full">
              <ReimportSection />
            </div>
          )}

          {activeNavigationSection === 'rsp' && (
            <div id="rsp" className="w-full h-full">
              <RspSection />
            </div>
          )}

          {activeNavigationSection === 'fta' && (
            <div id="fta" className="w-full h-full">
              <FtaSection />
            </div>
          )}

          {activeNavigationSection === 'itemManufacturer' && (
            <div id="itemManufacturer" className="w-full h-full">
              <ItemManufacturerSection />
            </div>
          )}

          {activeNavigationSection === 'previousBe' && (
            <div id="previousBe" className="w-full h-full">
              <PreviousBeSection />
            </div>
          )}

          {activeNavigationSection === 'cess' && (
            <div id="cess" className="w-full h-full">
              <CessSection />
            </div>
          )}

          {activeNavigationSection === 'thirdPartyExporter' && (
            <div id="thirdPartyExporter" className="w-full h-full">
              <ThirdPartyExporterSection />
            </div>
          )}

          {activeNavigationSection === 'ar4' && (
            <div id="ar4" className="w-full h-full">
              <Ar4Section />
            </div>
          )}

          {activeNavigationSection === 'drawback' && (
            <div id="drawback" className="w-full h-full">
              <DrawbackSection />
            </div>
          )}

          {activeNavigationSection === 'rodtep' && (
            <div id="rodtep" className="w-full h-full">
              <RodtepSection />
            </div>
          )}

          {activeNavigationSection === 'rawMaterials' && (
            <div id="rawMaterials" className="w-full h-full">
              <RawMaterialsSection />
            </div>
          )}

          {activeNavigationSection === 'jobWork' && (
            <div id="jobWork" className="w-full h-full">
              <JobWorkSection />
            </div>
          )}

          {activeNavigationSection === 'depb' && (
            <div id="depb" className="w-full h-full">
              <DepbSection />
            </div>
          )}

          {activeNavigationSection === 'depbParent' && (
            <div id="depbParent" className="w-full h-full">
              <DepbParentSection />
            </div>
          )}

          {activeNavigationSection === 'deec' && (
            <div id="deec" className="w-full h-full">
              <DeecSection />
            </div>
          )}

          {activeNavigationSection === 'dfia' && (
            <div id="dfia" className="w-full h-full">
              <DfiaSection />
            </div>
          )}

          {activeNavigationSection === 'epcg' && (
            <div id="epcg" className="w-full h-full">
              <EpcgSection />
            </div>
          )}

          {activeNavigationSection === 'reexport' && (
            <div id="reexport" className="w-full h-full">
              <ReexportSection />
            </div>
          )}

          {activeNavigationSection === 'supportingDocs' && (
            <div id="supportingDocs" className="w-full h-full">
              <SupportingDocsSection />
            </div>
          )}

          {activeNavigationSection === 'statements' && (
            <div id="statements" className="w-full h-full">
              <StatementsSection />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderNavigationAndForm = () => (
    <div className="flex flex-col h-full bg-[#C9D1E5] overflow-hidden w-full">
      {/* Horizontal Navigation - Fixed below toolbar */}
      <div className="flex-shrink-0 z-10 relative" data-onboarding="job-nav-bar">
        <HorizontalJobNavigation 
          activeSection={activeNavigationSection}
          onSectionClick={handleNavigationClick}
          onAuditClick={handleAuditClick}
          onSave={handleSave}
          onClose={handleBackToJobList}
          jobType={jobData?.type}
        />
      </div>
      
      {/* Content Area with Sidebars */}
      <div className="flex-1 flex flex-row overflow-hidden relative">
        {['jobDetails', 'containerDetails', 'hss', 'bondDetails', 'certificateDetails', 'exchangeRate'].includes(activeNavigationSection) && (
            <JobDetailsLeftSidebar 
              activeSection={activeNavigationSection}
              onSectionClick={handleNavigationClick}
              isExport={jobData?.type === 'Export'}
            />
        )}

        {[...importSectionIds, ...exportSectionIds].includes(activeNavigationSection) && (
            <ItemDetailsLeftSidebar 
              activeSection={activeNavigationSection}
              onSectionClick={handleNavigationClick}
              isExport={jobData?.type === 'Export'}
            />
        )}
        
        {/* Scrollable Form Content */}
        <div className="flex-1 bg-[#C9D1E5] flex flex-col relative overflow-hidden">
          {renderScrollableSections()}
        </div>

        {/* Audit Sidebar */}
        <AuditSidebar 
          isOpen={isAuditSidebarOpen} 
          onClose={handleAuditSidebarClose}
          onCardClick={handleAuditCardClick}
          onFloat={handleAuditSidebarFloat}
          auditItems={auditItems}
        />
        
        {/* Suggestions Sidebar */}
        <SuggestionsSidebar 
          isOpen={isSuggestionsSidebarOpen} 
          onClose={handleSuggestionsSidebarClose}
          activeCell={activeCell}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen bg-[#CAD2E5] flex flex-col overflow-hidden">
      {/* Fixed Top Navigation Bar */}
      <div className="h-12 flex-shrink-0 z-[100] relative">
        <FunctionalGlobalNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onBackToJobList={handleBackToJobList}
          onLogout={onLogout}
          jobData={jobData}
          onToggleMegaMenu={handleToggleMegaMenu}
          isMegaMenuOpen={isMegaMenuOpen}
          onSave={handleSave}
          onNextJob={handleNextJob}
          onPrevJob={handlePrevJob}
        />
      </div>

      {/* Mega Menu Overlay and Dropdown */}
      {isMegaMenuOpen && (
        <>
          {/* Overlay - 50% opacity */}
          <div 
            className="fixed inset-0 bg-black/50 z-[110]" 
            style={{ top: '48px' }} // Start below navbar
            onClick={() => setIsMegaMenuOpen(false)}
          />
          {/* Mega Menu Content */}
          <div 
            className="fixed left-0 right-0 z-[120] w-full"
            style={{ top: '48px' }} // Start below navbar
          >
            <SentinelModuleDropdown />
          </div>
        </>
      )}

      {/* Status Toolbar - shown only when Status tab is active */}
      {activeTab === 'status' && (
        <div className="h-12 flex-shrink-0 z-20 relative">
          <StatusToolbar onAddStatus={handleAddStatus} onClose={handleBackToJobList} onSave={handleSave} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {activeTab === 'files' && (
          <div className="h-full pb-[72px]" data-onboarding="upload-files">{/* Account for footer (60px) + 12px spacing */}
            <SplitViewPdfLayout
              onUpload={handleUpload}
              onClose={handleClose}
              onSave={handleSave}
              jobData={jobData}
            />
          </div>
        )}

        {activeTab === 'status' && (
          <div className="h-full pb-[60px] px-3" style={{ backgroundColor: '#C9D1E5' }}>{/* Account for footer (60px) + 0px spacing, 12px left/right spacing */}
            {/* Status Table with 16px spacing from top and bottom */}
            <div className="py-4 h-full overflow-hidden" data-onboarding="status-timeline">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full">
                <StatusTable data={statusData} onDataChange={setStatusData} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'auditChecklist' && (
          <div className="h-full bg-[#CAD2E5] pb-[60px] flex flex-row overflow-hidden">
            {/* Left Navigation (Version Panel moved here) */}
            <div className="flex-shrink-0 bg-[#C9D1E5] z-10 relative">
              <FunctionalLeftNav 
                onCreateJob={onGenerateVersion}
                activeVersion={activeVersion}
                versions={versions}
                onVersionChange={handleVersionChange}
              />
            </div>
            {/* Checklist Content */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
              <div className="flex-shrink-0 z-10 relative">
                <ChecklistToolbar 
                  zoomLevel={image1ZoomLevel}
                  onZoomIn={handleGlobalZoomIn}
                  onZoomOut={handleGlobalZoomOut}
                  onRotateLeft={() => setImage1Rotation(prev => prev - 90)}
                  onRotateRight={() => setImage1Rotation(prev => prev + 90)}
                  onAuditClick={handleAuditClick}
                  onClose={handleBackToJobList}
                  onSave={handleSave}
                  auditStats={{
                    errors: 28, // Placeholder as per design
                    warnings: 28, // Placeholder as per design
                    formatted: 28 // Placeholder as per design
                  }}
                />
              </div>
              <div className="flex-1 flex flex-row overflow-hidden relative">
                {renderChecklistContent()}
                <AuditSidebar 
                  isOpen={isAuditSidebarOpen} 
                  onClose={handleAuditSidebarClose}
                  onCardClick={handleAuditCardClick}
                  onFloat={handleAuditSidebarFloat}
                  auditItems={auditItems}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobDetails' && (
          <div className="h-full bg-[#CAD2E5] pb-[60px]">{/* Account for footer (60px) + 0px spacing */}
            {isPdfViewerOpen ? (
              /* Resizable Split View when PDF viewer is open */
              <ResizablePanelGroup direction="horizontal" className="h-full">
                {/* Left Panel - PDF Viewer Component */}
                <ResizablePanel defaultSize={50} minSize={30} className="relative">
                  <div className="h-full bg-[#f6f9ff] relative">
                    <EnhancedPdfViewer
                      selectedPdf={selectedPdf}
                      onClose={() => {
                        setSelectedPdf(null);
                        setIsPdfViewerOpen(false);
                      }}
                      initialZoom={110}
                      initialRotation={0}
                    />
                  </div>
                </ResizablePanel>

                {/* Standard Resizable Handle */}
                <ResizableHandle withHandle className="w-[8px] bg-[#DDE3F2] hover:bg-blue-500 transition-colors duration-200" />

                {/* Right Panel - Contains Fixed Toolbar and Navigation + Form */}
                <ResizablePanel defaultSize={50} minSize={20}>
                  <div className="h-full bg-[#C9D1E5] relative flex flex-col overflow-hidden">
                    {/* Fixed Toolbar at the top - spans full width */}
                    {activeVersion === 'cl01' && (
                      <div className="h-12 flex-shrink-0 relative z-10">
                        <Toolbar1309 
                          onPdfClick={() => setIsPdfViewerOpen(!isPdfViewerOpen)} 
                          onClose={handleBackToJobList}
                        />
                      </div>
                    )}
                    
                    {/* Content area below toolbar */}
                    <div className="flex-1 overflow-hidden relative">
                      {renderNavigationAndForm()}
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            ) : (
              /* Full width layout when PDF viewer is closed */
              <div className="h-full bg-[#C9D1E5] relative flex flex-col overflow-hidden">
                {/* Fixed Toolbar at the top - spans full width */}
                {activeVersion === 'cl01' && (
                  <div className="h-12 flex-shrink-0 relative z-10">
                    <Toolbar1309 
                      onPdfClick={() => setIsPdfViewerOpen(!isPdfViewerOpen)} 
                      onClose={handleBackToJobList}
                    />
                  </div>
                )}
                
                {/* Content area below toolbar */}
                <div className="flex-1 overflow-hidden relative">
                  {renderNavigationAndForm()}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
      
      {/* Invoice Details Sidebar */}
      <InvoiceDetailsSidebar 
        open={isInvoiceSidebarOpen}
        onOpenChange={setIsInvoiceSidebarOpen}
        invoiceData={selectedInvoice}
        layoutMode={invoiceSidebarLayoutMode}
        initialPdfOpen={invoiceSidebarPdfOpen}
        onNextInvoice={handleNextInvoice}
        onPrevInvoice={handlePrevInvoice}
        auditItems={auditItems}
        dataType={selectedDataType}
        jobType={jobData?.type}
      />

      {/* Item Details Sidebar */}
      <ItemDetailsSidebar 
        open={isItemSidebarOpen}
        onOpenChange={setIsItemSidebarOpen}
        itemData={selectedItem}
        layoutMode={itemSidebarLayoutMode}
        initialPdfOpen={itemSidebarPdfOpen}
        onNextItem={handleNextItem}
        onPrevItem={handlePrevItem}
        auditItems={auditItems}
        isExport={jobData?.type === 'Export'}
      />

      {/* Floating Audit Report */}
      <FloatingAuditReport 
        isOpen={isAuditSidebarFloating}
        onClose={handleFloatingAuditReportClose}
        onDock={handleFloatingAuditReportDock}
        onViewClick={handleAuditErrorViewClick}
        auditItems={auditItems}
      />

      {/* Footer - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-[60]">
        <Footer 
          jobDate={jobData?.jobDate || "21/04/2025"}
          mot={jobData?.modeOfTransport || "Sea"}
          beType={jobData?.beType || (jobData?.type === 'Export' ? "White-Free DEEC" : "H-Home Consumption")}
          customsHouseCode={jobData?.customsHouseCd || "INDEL4"}
          beNo={jobData?.beNumber || "2345664"}
          beDate={jobData?.beDate || "21/04/2025"}
          type={jobData?.priorBE || "Prior BE"}
          importer={jobData?.cbBranch || "Schneider Electrical Private Ltd"}
          isExport={jobData?.type === 'Export'}
        />
      </div>

      {/* Onboarding */}
      <Onboarding
        isOpen={showOnboarding}
        onComplete={handleOnboardingComplete}
        onSkip={handleOnboardingComplete}
        tourType={currentTourType}
      />
    </div>
  );
}