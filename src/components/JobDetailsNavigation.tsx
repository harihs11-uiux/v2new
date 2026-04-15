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
import { imgCheck, imgClockLoader20 } from '../imports/svg-vcw8g';

interface JobDetailsNavigationProps {
  isCollapsed: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionClick: (section: string) => void;
  expandedSections?: Set<string>;
  onExpandedSectionsChange?: (sections: Set<string>) => void;
  onNavigateToFirstField?: (section: string) => void;
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

// Navigation section mapping with expandable structure
const navigationSections: NavSection[] = [
  { 
    id: 'jobDetails', 
    label: 'Job Details', 
    icon: imgNoOfIcons161,
    progress: '100 % completed',
    isCompleted: true,
    isExpandable: true,
    subItems: [
      { id: 'hss', label: 'HSS', icon: imgNoOfIcons17 },
      { id: 'bondDetails', label: 'Bond Details', icon: imgNoOfIcons21 },
      { id: 'certificateDetails', label: 'Certificate Details', icon: imgNoOfIcons31 },
      { id: 'exchangeRate', label: 'Exchange Rate', icon: imgNoOfIcons41 },
    ]
  },
  { 
    id: 'igmDetails', 
    label: 'IGM Details', 
    icon: imgNoOfIcons191,
    progress: '80 % completed',
    isCompleted: false,
    isExpandable: true,
    subItems: [
      { id: 'containerDetails', label: 'Container Details', icon: imgNoOfIcons181 },
    ]
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
    isExpandable: true,
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
];

function NavigationToggleIcon({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer" 
      data-name="Icon"
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="double_arrow">
          <mask
            height="18"
            id={isCollapsed ? "mask0_1312_19704" : "mask0_594_128876"}
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask={isCollapsed ? "url(#mask0_1312_19704)" : "url(#mask0_594_128876)"}>
            <path
              d={isCollapsed ? svgPathsNewCollapsed.p2c139180 : svgPaths.p1cebca00}
              fill="var(--fill-0, #9497A1)"
              id="double_arrow_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}



function ExpandedNavigation({ activeSection, onSectionClick, expandedSections, onExpandedSectionsChange, onNavigateToFirstField }: { activeSection: string; onSectionClick: (section: string) => void; expandedSections?: Set<string>; onExpandedSectionsChange?: (sections: Set<string>) => void; onNavigateToFirstField?: (section: string) => void }) {
  const [localExpandedSections, setLocalExpandedSections] = React.useState<Set<string>>(new Set());
  const navigationRef = React.useRef<HTMLDivElement>(null);
  const sectionRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  // Sync with parent's expandedSections
  React.useEffect(() => {
    if (expandedSections) {
      setLocalExpandedSections(expandedSections);
    }
  }, [expandedSections]);

  // Scroll to active section when it changes
  React.useEffect(() => {
    // Find the parent section for the active section
    let parentSection: string | null = null;
    
    for (const section of navigationSections) {
      if (section.id === activeSection) {
        // Active section is a main section
        parentSection = activeSection;
        break;
      }
      if (section.subItems?.some(sub => sub.id === activeSection)) {
        // Active section is a subsection
        parentSection = section.id;
        break;
      }
    }

    // Scroll to the parent section or active section
    if (parentSection && sectionRefs.current[parentSection]) {
      setTimeout(() => {
        sectionRefs.current[parentSection]?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 100);
    }
  }, [activeSection, localExpandedSections]);

  // Removed keyboard navigation - now only click on arrow icon works

  const toggleSectionExpansion = (sectionId: string) => {
    if (navigationSections.find(s => s.id === sectionId)?.isExpandable) {
      const newSet = new Set(localExpandedSections);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      
      setLocalExpandedSections(newSet);
      
      if (onExpandedSectionsChange) {
        onExpandedSectionsChange(newSet);
      }
    }
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
  };

  const handleSubItemClick = (subItemId: string) => {
    onSectionClick(subItemId);
  };

  // Calculate total height for the vertical line based on expanded sections
  const calculateLineHeight = () => {
    let totalHeight = 0;
    
    navigationSections.forEach((section) => {
      // Main section height
      totalHeight += 60; // Main section height
      
      // Add sub-items height if section is expanded
      if (section.isExpandable && localExpandedSections.has(section.id) && section.subItems) {
        totalHeight += section.subItems.length * 32; // Each sub-item is 32px
      }
    });
    
    return totalHeight;
  };

  return (
    <div className="relative w-full h-full" style={{ backgroundColor: '#35405C' }}>
      {/* Dynamic Vertical line positioned relative to progress icons */}
      <div 
        className="absolute w-[1px]" 
        style={{ 
          left: '22px', // Centered on progress icons (13px + 9px to center of 18px icon)
          top: '21px', // Start from first progress icon center (10px + 9px)
          height: `${calculateLineHeight() - 20}px`, // Calculated height minus some padding
          backgroundColor: '#535D78'
        }} 
      />

      <div className="relative w-full h-full overflow-y-auto">
        <div className="relative pt-3 pb-3">
          {navigationSections.map((section, sectionIndex) => (
            <div 
              key={section.id} 
              className="relative mb-2"
              ref={(el) => { sectionRefs.current[section.id] = el; }}
            >
              {/* Main Section - 188px width, starting from left 40px */}
              <div
                className={`absolute cursor-pointer transition-all duration-200 ${
                  activeSection === section.id ? '' : 'hover:bg-[#35405c]'
                }`}
                style={{ left: '40px', width: '188px' }}
                onClick={() => handleSectionClick(section.id)}
              >
                <div 
                  className={`box-border content-stretch flex flex-col items-start justify-center p-[8px] rounded w-full ${
                    activeSection === section.id ? 'border border-[#3874ff] border-solid' : ''
                  }`}
                >
                  <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
                    <div 
                      className={`bg-center bg-cover bg-no-repeat shrink-0 size-6 transition-all duration-200 ${
                        activeSection === section.id ? '' : 'filter grayscale contrast-50'
                      }`} 
                      style={{ backgroundImage: `url('${section.icon}')` }} 
                    />
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                      <div className={`flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[14px] w-full ${
                        activeSection === section.id ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
                      }`}>
                        <p className="leading-[18px]">{section.label}</p>
                      </div>
                    </div>
                    {section.isExpandable && (
                      <div 
                        className="relative shrink-0 size-[18px] cursor-pointer z-10" 
                        data-name="arrow_dropdown"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSectionExpansion(section.id);
                        }}
                      >
                        <svg 
                          className={`block size-full transition-transform duration-200 ${
                            localExpandedSections.has(section.id) ? '' : 'rotate-180'
                          }`} 
                          fill="none" 
                          preserveAspectRatio="none" 
                          viewBox="0 0 18 18"
                        >
                          <g clipPath="url(#clip0_1312_19905)" id="arrow_dropdown">
                            <path d={svgPathsExpanded.p3dd41900} fill="var(--fill-0, #626776)" id="expand_more" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1312_19905">
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className={`font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap mt-1 ${
                    activeSection === section.id ? 'text-[#ffffff]' : 'text-[#9497a1]'
                  }`}>
                    <p className="[text-overflow:inherit] leading-[16px] overflow-inherit whitespace-pre">        {section.progress}</p>
                  </div>
                </div>
              </div>
              
              {/* Progress Icon positioned absolutely */}
              {section.isCompleted && (
                <div className="absolute left-[13px] top-[10px]">
                  <div className="size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <circle cx="9" cy="9" fill="var(--fill-0, #00B196)" r="9" />
                      <g>
                        <mask height="16" id={`mask_check_${sectionIndex}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="1" y="1">
                          <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" x="1" y="1" />
                        </mask>
                        <g mask={`url(#mask_check_${sectionIndex})`}>
                          <path d={svgPathsExpanded.pb636100} fill="var(--fill-0, white)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              )}
              
              {!section.isCompleted && (
                <div className="absolute left-[13px] top-[10px]">
                  <div className="size-5">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <circle cx="9.99929" cy="10" fill="var(--fill-0, #35405C)" r="7.27273" />
                      <mask height="20" id={`mask_clock_${sectionIndex}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="20" width="20" />
                      </mask>
                      <g mask={`url(#mask_clock_${sectionIndex})`}>
                        <path d={section.progress.includes('80') ? svgPathsExpanded.p12edc600 : svgPathsExpanded.p1528b00} fill="var(--fill-0, #6D758C)" />
                      </g>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add spacing for the main navigation item */}
              <div style={{ height: '60px' }}></div>

              {/* Sub Items */}
              {section.isExpandable && localExpandedSections.has(section.id) && section.subItems && (
                <div className="relative">
                  {section.subItems.map((subItem, subIndex) => (
                    <div
                      key={subItem.id}
                      className={`absolute cursor-pointer transition-all duration-200 rounded ${
                        activeSection === subItem.id 
                          ? 'border border-[#3874ff] border-solid shadow-[0px_0px_11px_1px_#272d3f]' 
                          : 'hover:bg-[#35405c]'
                      }`}
                      style={{ 
                        left: '62px', 
                        width: '158px',
                        top: `${subIndex * 32}px`
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubItemClick(subItem.id);
                      }}
                    >
                      <div className="box-border content-stretch flex gap-1 items-start justify-start p-1 relative w-full">
                        <div 
                          className={`bg-center bg-cover bg-no-repeat shrink-0 size-6 transition-all duration-200 ${
                            activeSection === subItem.id ? '' : 'filter grayscale contrast-50'
                          }`} 
                          style={{ backgroundImage: `url('${subItem.icon}')` }} 
                        />
                        <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                          <div className={`flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-6 justify-center leading-[0] not-italic relative shrink-0 text-[14px] w-full ${
                            activeSection === subItem.id ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
                          }`}>
                            <p className="leading-[18px]">{subItem.label}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Add spacing for sub-items */}
                  <div style={{ height: `${section.subItems.length * 32}px` }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CollapsedNavigation({ activeSection, onSectionClick }: { activeSection: string; onSectionClick: (section: string) => void }) {
  return (
    <div className="relative w-full h-full" style={{ backgroundColor: '#35405C' }}>
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start overflow-x-clip overflow-y-auto px-0 py-3 relative w-full h-full">
        {navigationSections.map((section) => (
          <div
            key={section.id}
            className={`relative box-border content-stretch flex flex-col items-center justify-center p-2 rounded shrink-0 cursor-pointer transition-all duration-200 w-[68px] min-h-[64px] gap-1 ${
              activeSection === section.id 
                ? 'border border-[#3874ff] border-solid shadow-[0px_0px_11px_1px_#272d3f] bg-[#32394c]' 
                : 'hover:bg-[#35405c]'
            }`}
            onClick={() => onSectionClick(section.id)}
          >
            <div 
              className={`bg-center bg-cover bg-no-repeat shrink-0 size-6 transition-all duration-200 ${
                activeSection === section.id ? '' : 'filter grayscale contrast-50'
              }`} 
              style={{ backgroundImage: `url('${section.icon}')` }} 
            />
            
            <span className={`text-[10px] text-center font-medium leading-tight break-words w-full ${
              activeSection === section.id ? 'text-white' : 'text-[#9497a1]'
            }`}>
              {section.label}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
}

export default function JobDetailsNavigation({ 
  isCollapsed, 
  onToggle, 
  activeSection, 
  onSectionClick,
  expandedSections,
  onExpandedSectionsChange,
  onNavigateToFirstField
}: JobDetailsNavigationProps) {
  return (
    <div className={`flex flex-col transition-all duration-300 h-full ${isCollapsed ? 'w-[76px]' : 'w-[240px]'}`} style={{ backgroundColor: '#35405C' }}>
      <div className="border-r border-solid h-full flex flex-col" style={{ borderColor: '#505767' }}>
        {/* Header */}
        <div className="h-12 overflow-clip relative shrink-0">
          <div className={`box-border content-stretch flex flex-row h-12 items-center overflow-clip px-2 py-3.5 relative ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!isCollapsed && (
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic text-[#ffffff] text-[16px] text-left text-nowrap">
                <p className="block leading-[20px] whitespace-pre">Navigation</p>
              </div>
            )}
            <NavigationToggleIcon isCollapsed={isCollapsed} onClick={onToggle} />
          </div>
          <div className="absolute border-solid inset-0 pointer-events-none" style={{ borderColor: '#505767', borderWidth: '0px 0px 1px' }} />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {isCollapsed ? (
            <CollapsedNavigation activeSection={activeSection} onSectionClick={onSectionClick} />
          ) : (
            <ExpandedNavigation activeSection={activeSection} onSectionClick={onSectionClick} expandedSections={expandedSections} onExpandedSectionsChange={onExpandedSectionsChange} onNavigateToFirstField={onNavigateToFirstField} />
          )}
        </div>
      </div>
    </div>
  );
}