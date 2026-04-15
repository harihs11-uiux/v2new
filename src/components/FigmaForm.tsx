import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Grid Navigation Helper
function navigateGrid(currentElement: HTMLElement, direction: 'up' | 'down' | 'left' | 'right'): HTMLElement | null {
  const allFields = Array.from(document.querySelectorAll('[data-field-id]')) as HTMLElement[];
  const currentIndex = allFields.indexOf(currentElement);
  
  if (currentIndex === -1) return null;

  const currentRect = currentElement.getBoundingClientRect();
  
  let targetField: HTMLElement | null = null;
  let minDistance = Infinity;

  for (let i = 0; i < allFields.length; i++) {
    if (i === currentIndex) continue;
    
    const fieldRect = allFields[i].getBoundingClientRect();
    const tolerance = 5; 
    const sameRow = Math.abs(fieldRect.top - currentRect.top) < tolerance;
    
    switch (direction) {
      case 'left':
        if (sameRow && fieldRect.right <= currentRect.left) {
          const distance = currentRect.left - fieldRect.right;
          if (distance < minDistance) { minDistance = distance; targetField = allFields[i]; }
        }
        break;
      case 'right':
        if (sameRow && fieldRect.left >= currentRect.right) {
          const distance = fieldRect.left - currentRect.right;
          if (distance < minDistance) { minDistance = distance; targetField = allFields[i]; }
        }
        break;
      case 'up':
        if (fieldRect.bottom <= currentRect.top) {
          const horizontalDistance = Math.abs(fieldRect.left - currentRect.left);
          const verticalDistance = currentRect.top - fieldRect.bottom;
          const distance = horizontalDistance + verticalDistance * 0.1;
          if (distance < minDistance) { minDistance = distance; targetField = allFields[i]; }
        }
        break;
      case 'down':
        if (fieldRect.top >= currentRect.bottom) {
          const horizontalDistance = Math.abs(fieldRect.left - currentRect.left);
          const verticalDistance = fieldRect.top - currentRect.bottom;
          const distance = horizontalDistance + verticalDistance * 0.1;
          if (distance < minDistance) { minDistance = distance; targetField = allFields[i]; }
        }
        break;
    }
  }
  return targetField;
}

export const FigmaSwitch = ({ checked, onCheckedChange, fieldId }: { checked: boolean; onCheckedChange: (checked: boolean) => void; fieldId?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getContainerStyle = () => {
    if (isFocused) {
      return {
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else {
      return {};
    }
  };

  return (
    <div
      data-field-id={fieldId}
      tabIndex={0}
      className="flex items-center gap-2 px-2 py-1.5 bg-transparent transition-all duration-200 cursor-pointer w-full min-w-0"
      style={{
        height: '30px',
        borderRadius: '0px',
        ...getContainerStyle(),
      }}
      onClick={(e) => {
        e.stopPropagation();
        onCheckedChange(!checked);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          onCheckedChange(!checked);
        } else if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
           e.preventDefault();
           const currentField = e.currentTarget as HTMLElement;
           let direction: 'up' | 'down' | 'left' | 'right' = 'down';
           if (e.key === 'ArrowDown') direction = 'down';
           else if (e.key === 'ArrowUp') direction = 'up';
           else if (e.key === 'ArrowLeft') direction = 'left';
           else if (e.key === 'ArrowRight') direction = 'right';
           
           const targetField = navigateGrid(currentField, direction);
           if (targetField) targetField.focus();
        }
      }}
    >
      <div className="relative h-3 w-[25px]">
        <div
          className={`w-full h-full rounded-full transition-colors duration-200 ${
            checked ? 'bg-[#00B196]' : 'bg-[#CF3B3B]'
          }`}
          style={{ borderRadius: '6px' }}
        >
          <div
            className={`absolute top-0 w-4 h-3 bg-white rounded-full transition-transform duration-200 shadow-lg ${
              checked ? 'translate-x-[9px]' : 'translate-x-0'
            }`}
            style={{ borderRadius: '6px' }}
          />
        </div>
      </div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#050e25' }}>
        {checked ? "Yes" : "No"}
      </span>
    </div>
  );
};

export function SectionHeader({ title, expanded, onToggle, rightContent, required, isSubHeader }: { title: string, expanded?: boolean, onToggle?: () => void, rightContent?: React.ReactNode, required?: boolean, isSubHeader?: boolean }) {
  return (
    <div 
      className={`bg-[#DDE3F2] h-[34px] relative shrink-0 w-full ${onToggle ? 'cursor-pointer hover:bg-[#e2e6f2]' : ''}`} 
      data-name="Section Subheader"
      onClick={(e) => {
        // Prevent toggle if clicking on rightContent
        if ((e.target as HTMLElement).closest('.section-header-right-content')) return;
        onToggle?.();
      }}
    >
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full flex items-center justify-center px-3">
        <span className={`font-['Roboto:Bold',sans-serif] font-bold text-[#050e25] ${isSubHeader ? 'text-[12px]' : 'text-[13px]'} uppercase tracking-wide text-center`}>
          {title}
          {required && <span className="text-[#CF3B3B] ml-1">*</span>}
        </span>
        <div className="absolute right-3 flex items-center gap-2">
           {rightContent && (
             <div className="section-header-right-content flex items-center" onClick={(e) => e.stopPropagation()}>
               {rightContent}
             </div>
           )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export function FormRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="content-stretch flex isolate items-stretch relative shrink-0 w-full min-h-[32px]" data-name="Form Row">
      {children}
    </div>
  );
}

export function FormField({ 
  label, 
  children, 
  className = "",
  required = false,
  hasError = false
}: { 
  label: string; 
  children?: React.ReactNode;
  className?: string; 
  required?: boolean;
  hasError?: boolean;
}) {
  return (
    <div className={`basis-0 content-stretch flex grow items-stretch justify-between min-h-px min-w-px relative shrink-0 z-[2] group ${className}`} data-name="Grid Horizontal">
      {/* Label Cell */}
      <div className="bg-[#EBEEF7] flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px] transition-colors duration-200 group-hover:bg-[#CEF6F0] group-focus-within:bg-[#CEF6F0]" data-name="Form Lable Cell">
        {/* Default Grid Border */}
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
        {/* Active Highlight Border (4 sides) */}
        <div aria-hidden="true" className="absolute border-[#02B196] border border-solid inset-0 pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 z-10" />
        
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre truncate w-full" title={label}>
          {label}
          {required && <span className="text-[#CF3B3B] ml-1">*</span>}
        </p>
      </div>
      
      {/* Input Cell */}
      <div className="basis-0 content-stretch flex grow items-stretch min-h-px min-w-px relative shrink-0 bg-white" data-name="Component">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Field">
           <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
           {/* Error Highlight Border (4 sides) */}
           {hasError && (
             <div aria-hidden="true" className="absolute border-[#CF3B3B] border border-solid inset-0 pointer-events-none z-20" />
           )}
           <div className="size-full flex items-center relative">
             {children || <div className="px-[4px] py-[6px] text-[#9497a1] text-[14px] w-full">Placeholder</div>}
           </div>
        </div>
      </div>
    </div>
  );
}

export function EmptyField() {
    return (
        <div className="basis-0 content-stretch flex grow items-stretch justify-between min-h-px min-w-px relative shrink-0 z-[2]">
            <div className="bg-[#f1f4f8] flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]">
                <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 bg-white">
                <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
            </div>
        </div>
    )
}
