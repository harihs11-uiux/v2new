import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import { format, isValid } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import ErrorSymbol from '../imports/Error';

// --- Shared Types ---
interface BaseFieldProps {
  fieldId: string;
  value: string;
  onChange: (value: any) => void;
  placeholder?: string;
  required?: boolean;
}

// --- Enhanced Label ---
interface EnhancedLabelProps {
  children: React.ReactNode;
  fieldId: string;
  isHovered: boolean;
  isFocused: boolean;
  height?: string;
  width?: string;
}

export function EnhancedLabel({ children, fieldId, isHovered, isFocused, height = '30px', width = '150px' }: EnhancedLabelProps) {
  const isHighlighted = isHovered || isFocused;

  const getLabelStyle = () => {
    if (isHighlighted) {
      return {
        background: '#CEF6F0',
        borderTop: '1px solid #02B196',
        borderRight: '1px solid #02B196',
        borderBottom: '1px solid #02B196',
        borderLeft: '1px solid #02B196',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
        borderRight: '1px solid #D0D5E3',
        borderLeft: '1px solid #D0D5E3',
        background: '#F3F5FA',
      };
    }
  };

  return (
    <div
      className="flex items-center justify-start px-2 py-1.5 transition-all duration-200"
      style={{
        width: width,
        height: height,
        minWidth: width,
        borderRadius: '0px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: '600',
        color: '#050e25',
        ...getLabelStyle(),
      }}
    >
      <span className="truncate">{children}</span>
    </div>
  );
}

// --- Enhanced Input ---
export function EnhancedInput({ value, onChange, placeholder, fieldId, required }: BaseFieldProps & { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  // Simple edit mode simulation for styling match
  const [isEditMode, setIsEditMode] = useState(false);

  const getContainerStyle = () => {
    const isInvalid = required && (!value || value.trim() === '');
    
    if (isInvalid) {
      return {
        border: '1px solid #EF4444',
        boxShadow: isFocused ? '0 2px 12px 0 rgba(113, 144, 214, 0.47)' : 'none',
      };
    }

    if (isFocused && isEditMode) {
      return {
        border: '2px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <input
      data-field-id={fieldId}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full min-w-0 px-2 py-1.5 bg-white transition-all duration-200 outline-none"
      style={{
        height: '30px',
        borderRadius: '0px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#050e25',
        ...getContainerStyle(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => { setIsFocused(true); setIsEditMode(true); }}
      onBlur={() => { setIsFocused(false); setIsEditMode(false); }}
    />
  );
}

// --- Enhanced Textarea ---
export function EnhancedTextarea({ value, onChange, placeholder, fieldId }: BaseFieldProps & { onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getContainerStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <textarea
      data-field-id={fieldId}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full min-w-0 px-2 py-1.5 bg-white transition-all duration-200 outline-none resize-none overflow-y-auto"
      style={{
        borderRadius: '0px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#050e25',
        lineHeight: '1.4',
        height: '60px',
        ...getContainerStyle(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

// --- Enhanced Select ---
interface EnhancedSelectProps extends Omit<BaseFieldProps, 'onChange'> {
  options: string[];
  onChange: (value: string) => void;
}

export function EnhancedSelect({ value, onChange, options, placeholder, fieldId, required }: EnhancedSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const getContainerStyle = () => {
    const isInvalid = required && (!value || value.trim() === '');
    if (isInvalid) {
      return {
        border: '1px solid #EF4444',
        boxShadow: isFocused ? '0 2px 12px 0 rgba(113, 144, 214, 0.47)' : 'none',
      };
    }
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-full min-w-0">
      <button
        type="button"
        data-field-id={fieldId}
        className="flex items-center justify-between gap-2 w-full min-w-0 px-2 py-1.5 bg-white transition-all duration-200"
        style={{
          height: '30px',
          borderRadius: '0px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          ...getContainerStyle(),
        }}
        onClick={() => { setIsOpen(!isOpen); setIsFocused(true); }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`text-left flex-1 min-w-0 truncate ${value ? 'text-[#050e25]' : 'text-gray-400'}`}>
          {value || placeholder}
        </span>
        <ChevronDown className="size-4 opacity-50 text-[#626776] flex-shrink-0" />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 border border-[#d0d5e3] shadow-lg max-h-[200px] overflow-y-auto bg-[#050E25]">
          {options.map((option) => (
            <div
              key={option}
              className="px-2 py-1.5 text-[14px] cursor-pointer text-white hover:bg-[#3874FF]"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
                setIsFocused(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Enhanced DatePicker ---
export function EnhancedDatePicker({ value, onChange, placeholder = "Select", fieldId, required }: Omit<BaseFieldProps, 'onChange'> & { onChange: (value: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getContainerStyle = () => {
    const isInvalid = required && (!value || value.trim() === '');
    if (isInvalid) {
      return {
        border: '1px solid #EF4444',
        boxShadow: isFocused ? '0 2px 12px 0 rgba(113, 144, 214, 0.47)' : 'none',
      };
    }
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          data-field-id={fieldId}
          className="flex items-center justify-between gap-1 w-full min-w-0 px-2 py-1.5 transition-all duration-200 bg-white"
          style={{
            height: '30px',
            borderRadius: '0px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            ...getContainerStyle(),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsFocused(true)}
        >
          <span className={`flex-1 min-w-0 text-left truncate ${value ? 'text-[#050e25]' : 'text-gray-400'}`}>
            {value || placeholder}
          </span>
          <CalendarIcon className="size-4 opacity-50 shrink-0 text-[#626776]" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white border border-[#d0d5e3]" align="start">
        <Calendar
          mode="single"
          selected={value ? new Date(value) : undefined}
          onSelect={(date) => {
            onChange(date ? format(date, 'yyyy-MM-dd') : '');
            setIsOpen(false);
            setIsFocused(false);
          }}
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}

// --- Enhanced Switch ---
export function EnhancedSwitch({ checked, onChange, fieldId }: { checked: boolean, onChange: (c: boolean) => void, fieldId: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getContainerStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <div
      data-field-id={fieldId}
      className="flex items-center gap-2 px-2 py-1.5 bg-white transition-all duration-200 cursor-pointer w-full min-w-0"
      style={{
        height: '30px',
        borderRadius: '0px',
        ...getContainerStyle(),
      }}
      onClick={() => { onChange(!checked); setIsFocused(true); }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
}

// --- Section Header ---
export function SectionHeader({ title, number, sectionId }: { title: string, number: string | number, sectionId?: string }) {
  return (
    <div
      data-section-id={sectionId}
      className="h-[34px] relative w-full flex items-center justify-center mb-0"
      style={{
        backgroundColor: '#EBEEF7',
        borderTop: '1px solid #D0D5E3',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#050e25',
      }}
    >
      <span style={{ fontVariant: 'small-caps' }}>
        {number}. {title}
      </span>
    </div>
  );
}

// --- Form Field Wrapper (Layout) ---
export function FormField({ 
  label, 
  children, 
  required,
  labelWidth = '150px',
  height = '30px'
}: { 
  label: React.ReactNode; 
  children: React.ReactNode; 
  required?: boolean;
  labelWidth?: string;
  height?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center w-full min-w-0">
      <EnhancedLabel 
        fieldId="label" 
        isHovered={isHovered} 
        isFocused={isFocused}
        width={labelWidth}
        height={height}
      >
        <span className="flex items-center gap-1">
          {label}
          {required && (
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          )}
        </span>
      </EnhancedLabel>
      <div
        className="flex-1 min-w-0 flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={() => setIsFocused(false)}
      >
        {children}
      </div>
    </div>
  );
}
