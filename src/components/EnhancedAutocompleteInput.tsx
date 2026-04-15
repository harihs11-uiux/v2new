import React, { useState, useRef, useEffect } from 'react';

interface ImporterOption {
  name: string;
  iec: string;
  id: string;
}

const MOCK_OPTIONS: ImporterOption[] = [
  { name: 'XYZ Logistics', iec: 'NF00005632', id: 'TJ888485' },
  { name: 'ABC Logs Pvt Ltd', iec: 'NF00005633', id: 'TJ888486' },
  { name: 'Ocean Freight', iec: 'NF00005698', id: 'TJ888466' },
  { name: 'Kite Freight', iec: 'NF00005644', id: 'TJ888434' },
  { name: 'ImpexFreight', iec: 'NF00005683', id: 'TJ888422' },
  { name: 'OOC Pvt Ltd', iec: 'NF00005609', id: 'TJ888498' },
  { name: 'KsA private Ltd', iec: 'NF00005612', id: 'TJ888443' },
];

interface EnhancedAutocompleteInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  fieldId: string;
  onSelectImporter?: (importer: ImporterOption) => void;
  required?: boolean;
  displayField?: 'name' | 'iec' | 'id';
  onFocus?: () => void;
  onBlur?: () => void;
  isHighlighted?: boolean;
}

export default function EnhancedAutocompleteInput({ 
  value, 
  onChange, 
  placeholder, 
  fieldId, 
  onSelectImporter,
  required,
  displayField = 'name',
  onFocus,
  onBlur,
  isHighlighted = false
}: EnhancedAutocompleteInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Filter options based on input value
  const filteredOptions = value.trim() === '' 
    ? MOCK_OPTIONS 
    : MOCK_OPTIONS.filter(option =>
        option.name.toLowerCase().includes(value.toLowerCase()) ||
        option.iec.toLowerCase().includes(value.toLowerCase()) ||
        option.id.toLowerCase().includes(value.toLowerCase())
      );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
    setSelectedIndex(-1);
  };

  const handleOptionSelect = (importer: ImporterOption) => {
    const newValue = importer[displayField];
    const syntheticEvent = {
      target: { value: newValue }
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
    
    if (onSelectImporter) {
      onSelectImporter(importer);
    }
    
    setIsDropdownOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    } else if (e.key === 'ArrowDown') {
      if (!isDropdownOpen) {
        setIsDropdownOpen(true);
      } else {
        setSelectedIndex(prev => Math.min(prev + 1, filteredOptions.length - 1));
      }
    } else if (e.key === 'ArrowUp' && isDropdownOpen) {
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && isDropdownOpen && selectedIndex >= 0) {
      e.preventDefault();
      handleOptionSelect(filteredOptions[selectedIndex]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full h-full">
      <input
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        onFocus={() => {
          setIsFocused(true);
          setIsDropdownOpen(true);
          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);
          // Small delay to allow clicking options
          setTimeout(() => setIsDropdownOpen(false), 200);
          onBlur?.();
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full h-full px-2 py-1.5 outline-none bg-white text-[14px] text-[#050E25]"
        style={{
          borderTop: (isFocused || isHighlighted) ? '1px solid #3874FF' : '1px solid #D0D5E3',
          borderRight: (isFocused || isHighlighted) ? '1px solid #3874FF' : 'none',
          borderBottom: (isFocused || isHighlighted) ? '1px solid #3874FF' : 'none',
          transition: 'all 0.2s ease'
        }}
      />
      {isDropdownOpen && filteredOptions.length > 0 && (
        <div 
          ref={dropdownRef}
          className="absolute z-[9999] w-[450px] bg-[#050E25] border border-[#505767] rounded shadow-2xl mt-0 overflow-y-auto max-h-[300px]"
          style={{
            top: '100%',
            left: fieldId.includes('name') ? '0' : 'auto',
            right: fieldId.includes('name') ? 'auto' : '0'
          }}
        >
          {/* Header */}
          <div className="flex bg-[#242c40] border-b border-[#36415a] sticky top-0 z-10">
            <div className="flex-1 px-3 py-2 text-[12px] font-semibold text-[#cdcfd3]">Name</div>
            <div className="w-24 px-3 py-2 text-[12px] font-semibold text-[#cdcfd3] border-l border-[#36415a]">IEC</div>
            <div className="w-24 px-3 py-2 text-[12px] font-semibold text-[#cdcfd3] border-l border-[#36415a]">ID</div>
          </div>
          {/* Rows */}
          {filteredOptions.map((option, index) => (
            <div
              key={`${option.iec}-${option.id}`}
              className={`flex cursor-pointer transition-colors ${index === selectedIndex ? 'bg-[#3874FF]' : 'hover:bg-[#36415a]'}`}
              onClick={() => handleOptionSelect(option)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="flex-1 px-3 py-2 text-[12px] text-white border-b border-[#36415a] truncate">{option.name}</div>
              <div className="w-24 px-3 py-2 text-[12px] text-white border-l border-b border-[#36415a]">{option.iec}</div>
              <div className="w-24 px-3 py-2 text-[12px] text-white border-l border-b border-[#36415a]">{option.id}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
