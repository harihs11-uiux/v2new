import React from 'react';
import svgPaths from '../imports/svg-yai6ob9yip';
import svgPathsCollapsed from '../imports/svg-bja508iiij';
import svgPathsNewCollapsed from '../imports/svg-w9wmr5e79y';
import svgPathsExpanded from '../imports/svg-1ppqpckpj8';
import imgNoOfIcons161 from "figma:asset/eecca1cd6e824042cfb97f25bdf2b96f22c83740.png";
import imgNoOfIcons191 from "figma:asset/e7b6affc59c9dd1237c514aaf168d50f8d6dcb1d.png";
import imgNoOfIcons171 from "figma:asset/9a56aeba166b5503b7c81c7fa1192f518dbc3a45.png";
import imgNoOfIcons1 from "figma:asset/912bfa1c143d85dbf0440a4e931c78a240459127.png";
import imgNoOfIcons151 from "figma:asset/05863d2f56bc97e7183703618176d0a829a5422a.png";
import imgChecklistIconsImports21 from "figma:asset/85c8bfc3f95185bd9ed8fc222e7b9848bb47fc8b.png";
// Import all sub-item icons
import imgNoOfIcons17 from "figma:asset/67d7e24bd8cf09d83f8d0505925f5c32e4952dbf.png";
import imgNoOfIcons21 from "figma:asset/22548ec95132ab42ecc64cc9ad2095d713d3b802.png";
import imgNoOfIcons31 from "figma:asset/5e3b9783bba4c03b35cf8c66a5b0d31406ecfa60.png";
import imgNoOfIcons41 from "figma:asset/89f3f9e77c2ecf5d99c6340d702e109678b22766.png";
import imgNoOfIcons51 from "figma:asset/76f21bae0dec0ff5873449bf455bc5bf0ea5951a.png";
import imgNoOfIcons61 from "figma:asset/e2087d576c9801a832ecacfc4484d8d91991ed6a.png";
import imgNoOfIcons71 from "figma:asset/90975aed993f87673a1508ecbb8a48568d9ac1b3.png";
import imgNoOfIcons81 from "figma:asset/992a194177992532db0cd3fe0b5d0ad584ee63a5.png";
import imgNoOfIcons91 from "figma:asset/38e91977a8efb1a805ab2ea4b661f4ca8c5571f0.png";
import imgNoOfIcons101 from "figma:asset/cc9cad715cbe648db4403e30ae1b68edbe66c893.png";
import imgNoOfIcons111 from "figma:asset/02bcc0e5d161f1f34626e56008513e1d2ecbebc6.png";
import imgNoOfIcons121 from "figma:asset/648041825701dc0dfea534c36d372799e0ed3027.png";
import imgNoOfIcons131 from "figma:asset/7a9405cacc24b7bdd74e7cb09d8280713765cd31.png";
import imgNoOfIcons141 from "figma:asset/046abaf1b776c56343e3ebcedfd09e6a5dac19dd.png";
import imgChecklistIconsImports3 from "figma:asset/2957621d7846b7b2022d35101e9de68e6400d377.png";
import imgChecklistIconsImports11 from "figma:asset/8fa1403fe121b1b6e77c1ae323fe8cddcb1e9bf6.png";
import imgNoOfIcons181 from "figma:asset/e50adfd820575c8d52773e4d6baa55eb7e3e9204.png";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { ChevronDown, CheckCircle2, Clock, Save, X, FileCheck, FileSearch } from "lucide-react";
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


function Error() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 15.75">
        <g id="Error">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #F44545)" id="Ellipse 37" r="7.875" />
          <g id="Vector">
            <path d={svgPaths.p2e6e6f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e6e6f00} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Error1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="error">
      <Error />
    </div>
  );
}

function SelectionsCards() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Error1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">28</p>
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="warning">
          <path d={svgPaths.p25951b00} fill="var(--fill-0, #E97330)" id="Polygon 1" />
          <rect fill="var(--fill-0, white)" height="5.625" id="Rectangle 1574" rx="0.5625" width="1.125" x="8.4375" y="7.875" />
          <circle cx="9" cy="6.1875" fill="var(--fill-0, white)" id="Ellipse 39" r="0.5625" />
        </g>
      </svg>
    </div>
  );
}

function SelectionsCards1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Warning />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">28</p>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 15.75">
        <g id="Success check">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #FDCA5F)" id="Base" r="7.875" />
          <g id="icon">
            <rect fill="var(--fill-0, white)" height="5.625" id="Rectangle 1574" rx="0.5625" width="1.125" x="7.3125" y="6.1875" />
            <circle cx="7.875" cy="4.5" fill="var(--fill-0, white)" id="Ellipse 39" r="0.5625" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Format() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format">
      <SuccessCheck />
    </div>
  );
}

function SelectionsCards2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Format />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">28</p>
    </div>
  );
}

function DownloadButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      className="bg-[#3874ff]/10 content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 hover:bg-[#3874ff]/20 transition-colors border border-[#3874ff]" 
      data-name="Download Button"
      onClick={onClick}
      title="Download"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 3V12M9 12L12 9M9 12L6 9" stroke="#3874FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12V14C3 15.1046 3.89543 16 5 16H13C14.1046 16 15 15.1046 15 14V12" stroke="#3874FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function AuditButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-[8px] h-[22px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-white/10 transition-colors" 
      data-name="Audit"
      onClick={onClick}
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Audit</p>
      </div>
      <SelectionsCards />
      <SelectionsCards1 />
      <SelectionsCards2 />
    </div>
  );
}

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[rgba(56,116,255,0.1)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.2)] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px]">Close</p>
      </div>
    </div>
  );
}

function SaveButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#3874ff] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#2563eb] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Save</p>
      </div>
    </div>
  );
}

function ToolbarActions({ onSave, onClose }: { onSave?: () => void, onClose?: () => void }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    if (onSave) {
      setOpen(true);
    } else if (onClose) {
      onClose();
    }
  };

  const handleSaveAndQuit = () => {
    if (onSave) onSave();
    setOpen(false);
    if (onClose) onClose();
  };

  const handleDontSave = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Toolbar Actions">
        {onClose && <CloseButton onClick={handleClose} />}
        {onSave && <SaveButton onClick={onSave} />}
      </div>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
            <AlertDialogDescription>
              Do you want to save the job before quitting?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDontSave} className="bg-destructive hover:bg-destructive/90">
              Don't Save
            </AlertDialogAction>
            <AlertDialogAction onClick={handleSaveAndQuit} className="bg-[#3874ff] hover:bg-[#2563eb]">
              Save & Quit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

interface SubNavItem {
  id: string;
  label: string;
  icon: string;
}

interface NavSection {
  id: string;
  label: string;
  icon: string;
  progress: string;
  isCompleted: boolean;
  isExpandable: boolean;
  subItems?: SubNavItem[];
}

// Navigation section mapping moved inside component

interface HorizontalJobNavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  onAuditClick?: () => void;
  onSave?: () => void;
  onClose?: () => void;
  jobType?: string;
}

export default function HorizontalJobNavigation({ 
  activeSection, 
  onSectionClick,
  onAuditClick,
  onSave,
  onClose,
  jobType = 'Import'
}: HorizontalJobNavigationProps) {

  const navigationSections = React.useMemo<NavSection[]>(() => [
    { 
      id: 'jobDetails', 
      label: 'Job Details', 
      icon: imgNoOfIcons161,
      progress: '100 % completed',
      isCompleted: true,
      isExpandable: false,
      subItems: [
        { id: 'containerDetails', label: 'Container Details', icon: imgNoOfIcons17 },
        { id: 'hss', label: 'HSS', icon: imgNoOfIcons17 },
        { id: 'bondDetails', label: 'Bond Details', icon: imgNoOfIcons21 },
        { id: 'certificateDetails', label: 'Certificate Details', icon: imgNoOfIcons31 },
        { id: 'exchangeRate', label: 'Exchange Rate', icon: imgNoOfIcons41 },
      ]
    },
    { 
      id: 'igmDetails', 
      label: jobType === 'Export' ? 'Shipment Details' : 'IGM Details', 
      icon: imgNoOfIcons191,
      progress: '80 % completed',
      isCompleted: false,
      isExpandable: false
    },
    { 
      id: 'invoiceDetails', 
      label: 'Invoice Details', 
      icon: imgNoOfIcons171,
      progress: '75 % completed',
      isCompleted: false,
      isExpandable: false
    },
    { 
      id: 'itemDetails', 
      label: 'Item Details', 
      icon: imgNoOfIcons1,
      progress: '75 % completed',
      isCompleted: false,
      isExpandable: false,
      subItems: [
        { id: 'swInfo', label: 'SW Info', icon: imgNoOfIcons51 },
        { id: 'swProduction', label: 'SW Production', icon: imgNoOfIcons61 },
        { id: 'swControl', label: 'SW Control', icon: imgNoOfIcons71 },
        { id: 'swConstituent', label: 'SW Constituent', icon: imgNoOfIcons81 },
        { id: 'licenseDetails', label: 'License Details', icon: imgNoOfIcons91 },
        { id: 'sezBeType', label: 'SEZ BE Type', icon: imgNoOfIcons101 },
        { id: 'section65', label: 'Section 65', icon: imgNoOfIcons111 },
        { id: 'reimport', label: 'Reimport', icon: imgNoOfIcons121 },
        { id: 'rsp', label: 'RSP', icon: imgNoOfIcons131 },
        { id: 'fta', label: 'FTA', icon: imgNoOfIcons141 },
        { id: 'itemManufacturer', label: 'Item Manufacturer', icon: imgChecklistIconsImports3 },
        { id: 'previousBe', label: 'Previous BE', icon: imgChecklistIconsImports11 },
      ]
    },
    { 
      id: 'supportingDocs', 
      label: 'Supporting Docs', 
      icon: imgNoOfIcons151,
      progress: '50 % completed',
      isCompleted: false,
      isExpandable: false
    },
    { 
      id: 'statements', 
      label: 'Statements', 
      icon: imgChecklistIconsImports21,
      progress: '50 % completed',
      isCompleted: false,
      isExpandable: false
    }
  ], [jobType]);

  // Helper to determine if a section is active (either directly or via a child)
  const isSectionActive = (section: NavSection) => {
    if (section.id === activeSection) return true;
    if (section.subItems) {
      return section.subItems.some(sub => sub.id === activeSection);
    }
    return false;
  };

  const getActiveSubLabel = (section: NavSection) => {
    if (section.id === activeSection) return null; // Main section is active
    if (section.subItems) {
      const sub = section.subItems.find(s => s.id === activeSection);
      return sub ? sub.label : null;
    }
    return null;
  };

  // Flattened list for linear navigation (Arrow Keys)
  const linearIds = React.useMemo(() => {
    const ids: string[] = [];
    navigationSections.forEach(section => {
      ids.push(section.id);
      if (section.subItems) {
        section.subItems.forEach(sub => ids.push(sub.id));
      }
    });
    return ids;
  }, [navigationSections]);

  // Top level IDs for section jumping (Shift + Arrow)
  const topLevelIds = React.useMemo(() => navigationSections.map(s => s.id), [navigationSections]);

  // Map sub-items to their parent ID to help find current parent
  const parentMap = React.useMemo(() => {
    const map: Record<string, string> = {};
    navigationSections.forEach(section => {
      if (section.subItems) {
        section.subItems.forEach(sub => {
          map[sub.id] = section.id;
        });
      }
    });
    return map;
  }, [navigationSections]);

  const [openSectionId, setOpenSectionId] = React.useState<string | null>(null);

  // Sync popover state with active section to handle keyboard navigation
  React.useEffect(() => {
    // If active section is a sub-item, open its parent
    const parentId = parentMap[activeSection];
    if (parentId) {
      setOpenSectionId(parentId);
      return;
    }

    // If active section is an expandable parent, open it
    const section = navigationSections.find(s => s.id === activeSection);
    if (section?.isExpandable) {
      setOpenSectionId(section.id);
      return;
    }
    
    // Otherwise close all
    setOpenSectionId(null);
  }, [activeSection, parentMap, navigationSections]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable) {
        return;
      }

      if (e.key === 'ArrowRight') {
        if (e.shiftKey) {
          // Shift + Right: Next Top-Level Section
          const currentParentId = parentMap[activeSection] || activeSection;
          const currentIndex = topLevelIds.indexOf(currentParentId);
          if (currentIndex !== -1 && currentIndex < topLevelIds.length - 1) {
            onSectionClick(topLevelIds[currentIndex + 1]);
          }
        } else {
          // Right: Next Item (Linear)
          const currentIndex = linearIds.indexOf(activeSection);
          if (currentIndex !== -1 && currentIndex < linearIds.length - 1) {
            onSectionClick(linearIds[currentIndex + 1]);
          }
        }
      } else if (e.key === 'ArrowLeft') {
         if (e.shiftKey) {
          // Shift + Left: Prev Top-Level Section
          const currentParentId = parentMap[activeSection] || activeSection;
          const currentIndex = topLevelIds.indexOf(currentParentId);
          if (currentIndex > 0) {
            onSectionClick(topLevelIds[currentIndex - 1]);
          }
        } else {
          // Left: Prev Item (Linear)
          const currentIndex = linearIds.indexOf(activeSection);
          if (currentIndex > 0) {
            onSectionClick(linearIds[currentIndex - 1]);
          }
        }
      } else if (e.key === 'Enter') {
        // Enter: Close dropdown if open
        if (openSectionId) {
          setOpenSectionId(null);
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [activeSection, onSectionClick, linearIds, topLevelIds, parentMap, openSectionId]);

  return (
    <div className="w-full h-[60px] flex items-center px-4 shadow-md z-10 shrink-0 bg-[rgb(54,65,90)]">
      <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar h-full flex-1">
        {navigationSections.map((section) => {
          const isActive = isSectionActive(section);
          const activeSubLabel = getActiveSubLabel(section);

          return (
            <div key={section.id} className="relative h-full flex items-center">
              {section.isExpandable ? (
                <Popover 
                  open={openSectionId === section.id} 
                  onOpenChange={(open) => setOpenSectionId(open ? section.id : null)}
                >
                  <PopoverTrigger asChild>
                    <button
                      className={`
                        h-[40px] px-3 rounded flex flex-col justify-center items-start gap-1 transition-all whitespace-nowrap border-2
                        ${isActive 
                          ? 'bg-[#32394c] border-[#3874ff] text-white' 
                          : 'text-[#cdcfd3] hover:bg-[#4a5570] hover:text-white border-transparent'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className={`bg-center bg-cover bg-no-repeat size-4 ${isActive ? '' : 'filter grayscale contrast-50'}`}
                          style={{ backgroundImage: `url('${section.icon}')` }} 
                        />
                        <span className="text-sm font-medium text-[14px]">
                          {section.label}
                          {activeSubLabel && <span className="opacity-80"> / {activeSubLabel}</span>}
                        </span>
                        {section.isCompleted ? (
                           <CheckCircle2 size={12} className="text-[#00B196]" />
                        ) : (
                           <Clock size={12} className="text-[#6D758C]" />
                        )}
                        <ChevronDown size={14} className={isActive ? 'text-white' : 'text-[#9497a1]'} />
                      </div>
                      <span className={`text-xs leading-none ${isActive ? 'text-gray-300' : 'text-[#9497a1]'}`}>
                        100% completed
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-1 bg-[#35405C] border-[#505767] shadow-xl" align="start">
                    <div className="flex flex-col gap-1">
                      {/* Parent Item */}
                      <button
                         className={`
                           w-full text-left px-3 py-2 rounded text-sm flex items-center gap-2
                           ${activeSection === section.id ? 'bg-[#3874ff] text-white' : 'text-[#cdcfd3] hover:bg-[#4a5570]'}
                         `}
                         onClick={() => onSectionClick(section.id)}
                      >
                         <div 
                           className={`bg-center bg-cover bg-no-repeat size-4 ${activeSection === section.id ? '' : 'filter grayscale contrast-50'}`}
                           style={{ backgroundImage: `url('${section.icon}')` }} 
                         />
                         {section.label}
                      </button>
                      
                      {/* Divider */}
                      <div className="h-px bg-[#505767] my-1" />

                      {/* Sub Items */}
                      {section.subItems?.map(subItem => (
                        <button
                          key={subItem.id}
                          className={`
                            w-full text-left px-3 py-2 rounded text-sm flex items-center gap-2 pl-6
                            ${activeSection === subItem.id ? 'bg-[#3874ff] text-white' : 'text-[#cdcfd3] hover:bg-[#4a5570]'}
                          `}
                          onClick={() => {
                            onSectionClick(subItem.id);
                          }}
                        >
                          <div 
                            className={`bg-center bg-cover bg-no-repeat size-4 ${activeSection === subItem.id ? '' : 'filter grayscale contrast-50'}`}
                            style={{ backgroundImage: `url('${subItem.icon}')` }} 
                          />
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <button
                  className={`
                    h-[40px] px-3 rounded flex flex-col justify-center items-start gap-1 transition-all whitespace-nowrap border-2
                    ${isActive 
                      ? 'bg-[#32394c] border-[#3874ff] text-white' 
                      : 'text-[#cdcfd3] hover:bg-[#4a5570] hover:text-white border-transparent'
                    }
                  `}
                  onClick={() => onSectionClick(section.id)}
                >
                  <div className="flex items-center gap-2">
                    <div 
                      className={`bg-center bg-cover bg-no-repeat size-4 ${isActive ? '' : 'filter grayscale contrast-50'}`}
                      style={{ backgroundImage: `url('${section.icon}')` }} 
                    />
                    <span className="text-sm font-medium text-[14px]">{section.label}</span>
                    {section.isCompleted ? (
                       <CheckCircle2 size={12} className="text-[#00B196]" />
                    ) : (
                       <Clock size={12} className="text-[#6D758C]" />
                    )}
                  </div>
                  <span className={`text-xs leading-none ${isActive ? 'text-gray-300' : 'text-[#9497a1]'}`}>
                    100% completed
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Buttons - New Right Side Controls Design */}
      <div className="content-stretch flex gap-[12px] items-center justify-end relative ml-auto" data-name="Right Side Controls">
        <DownloadButton />
        
        {onAuditClick && <AuditButton onClick={onAuditClick} />}
        
        {/* Vertical Separator */}
        {(onAuditClick && (onSave || onClose)) && (
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-[90deg]">
                <div className="h-full relative w-[26px]" data-name="Seperator">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-[#545D76]" />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <ToolbarActions onSave={onSave} onClose={onClose} />
      </div>
    </div>
  );
}