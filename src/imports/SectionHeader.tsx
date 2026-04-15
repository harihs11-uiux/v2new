import React from 'react';
import { Button } from '../components/ui/button';
import { Plus, X } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  onAdd?: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  showSearch?: boolean;
}

export default function SectionHeader({ title, onAdd, searchValue = '', onSearchChange, showSearch = false }: SectionHeaderProps) {
  return (
    <div 
      className="w-full h-12 flex items-center justify-between pl-6 pr-2 border-b border-gray-300 relative"
      style={{ 
        backgroundColor: '#DDE3F2',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {/* Left spacer for centering */}
      <div className="w-20"></div>

      {/* Center-aligned section title */}
      <h2 
        className="text-black font-medium text-center flex-1"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontWeight: '500'
        }}
      >
        {title}
      </h2>

      {/* Right side - Search and Add button */}
      <div className="w-auto flex items-center gap-3 justify-end mr-[6px]">
        {showSearch && onSearchChange && (
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-white border border-[#D0D5E3] rounded px-3 h-[30px] text-black text-[14px] font-['Inter',_sans-serif] placeholder:text-[#9497A1] focus:outline-none focus:border-[#3874ff] w-[200px] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
            />
            {searchValue && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2 text-[#9497A1] hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}