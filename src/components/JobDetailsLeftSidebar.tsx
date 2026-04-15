import React from 'react';
import imgNoOfIcons161 from "figma:asset/eecca1cd6e824042cfb97f25bdf2b96f22c83740.png";
import imgNoOfIcons17 from "figma:asset/67d7e24bd8cf09d83f8d0505925f5c32e4952dbf.png";
import imgNoOfIcons21 from "figma:asset/22548ec95132ab42ecc64cc9ad2095d713d3b802.png";
import imgNoOfIcons31 from "figma:asset/5e3b9783bba4c03b35cf8c66a5b0d31406ecfa60.png";
import imgNoOfIcons41 from "figma:asset/89f3f9e77c2ecf5d99c6340d702e109678b22766.png";

interface JobDetailsLeftSidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  isExport?: boolean;
}

const sections = [
  { id: 'jobDetails', label: 'Job Details', icon: imgNoOfIcons161 },
  { id: 'containerDetails', label: 'Container Details', icon: imgNoOfIcons17, hideForImport: true },
  { id: 'hss', label: 'HSS Details', icon: imgNoOfIcons17, hideForExport: true },
  { id: 'bondDetails', label: 'Bond Details', icon: imgNoOfIcons21, hideForExport: true },
  { id: 'certificateDetails', label: 'Certificate Details', icon: imgNoOfIcons31, hideForExport: true },
  { id: 'exchangeRate', label: 'Exchange Rate', icon: imgNoOfIcons41 },
];

export default function JobDetailsLeftSidebar({ activeSection, onSectionClick, isExport = false }: JobDetailsLeftSidebarProps) {
  return (
    <div className="w-[80px] bg-[#36415A] border-r border-[#E2E8F0] h-full flex flex-col shrink-0 relative transition-all duration-300">
      <div className="flex-1 overflow-y-auto py-2 no-scrollbar bg-[rgb(54,65,90)]">
        {sections.filter(section => isExport ? !section.hideForExport : !(section as any).hideForImport).map((section) => {
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
