import React from 'react';
import imgNoOfIcons1 from "figma:asset/912bfa1c143d85dbf0440a4e931c78a240459127.png";
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

interface ItemDetailsLeftSidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  isExport?: boolean;
}

export const importSections = [
  { id: 'itemDetails', label: 'Item Details', icon: imgNoOfIcons1 },
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
];

export const exportSections = [
  { id: 'itemDetails', label: 'Item Details', icon: imgNoOfIcons1 },
  { id: 'swInfo', label: 'SW Info', icon: imgNoOfIcons51 },
  { id: 'swProduction', label: 'SW Production', icon: imgNoOfIcons61 },
  { id: 'swControl', label: 'SW Control', icon: imgNoOfIcons71 },
  { id: 'swConstituent', label: 'SW Constituent', icon: imgNoOfIcons81 },
  { id: 'cess', label: 'Cess', icon: imgNoOfIcons1 },
  { id: 'thirdPartyExporter', label: 'Third Party Exporter', icon: imgNoOfIcons1 },
  { id: 'ar4', label: 'AR4', icon: imgNoOfIcons1 },
  { id: 'drawback', label: 'Drawback Details', icon: imgNoOfIcons1 },
  { id: 'rodtep', label: 'RoDTEP', icon: imgNoOfIcons1 },
  { id: 'rawMaterials', label: 'Raw Materials', icon: imgNoOfIcons1 },
  { id: 'jobWork', label: 'Job Work Details', icon: imgNoOfIcons1 },
  { id: 'depb', label: 'DEPB', icon: imgNoOfIcons1 },
  { id: 'depbParent', label: 'DEPB Parent', icon: imgNoOfIcons1 },
  { id: 'deec', label: 'DEEC', icon: imgNoOfIcons1 },
  { id: 'dfia', label: 'DFIA', icon: imgNoOfIcons1 },
  { id: 'epcg', label: 'EPCG', icon: imgNoOfIcons1 },
  { id: 'reexport', label: 'Reexport', icon: imgNoOfIcons1 },
];

export const importSectionIds = importSections.map(s => s.id);
export const exportSectionIds = exportSections.map(s => s.id);

export default function ItemDetailsLeftSidebar({ activeSection, onSectionClick, isExport = false }: ItemDetailsLeftSidebarProps) {
  const sections = isExport ? exportSections : importSections;

  return (
    <div className="w-[80px] bg-[#36415A] border-r border-[#E2E8F0] h-full flex flex-col shrink-0 relative transition-all duration-300">
      <div className="flex-1 overflow-y-auto py-2 no-scrollbar bg-[rgb(54,65,90)]">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <div
              key={section.id}
              className={`
                cursor-pointer transition-colors flex flex-col items-center justify-center py-4 px-1 gap-2 border-l-0
                ${isActive ? 'bg-[#2A3449] text-white' : 'text-[#A0AEC0] hover:bg-[#4A5568]'}
              `}
              onClick={() => onSectionClick(section.id)}
            >
               {/* Icon */}
               <div 
                 className={`bg-center bg-cover bg-no-repeat size-6 shrink-0 ${isActive ? '' : 'brightness-200 contrast-0'}`}
                 style={{ backgroundImage: `url('${section.icon}')` }} 
               />
               
               {/* Label */}
               <span className="text-[12px] text-center leading-tight font-medium">
                 {section.label}
               </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
