import React from 'react';
import { ChevronDown, ChevronRight, LayoutGrid } from 'lucide-react';

interface ItemSeparatorProps {
  text: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  style?: React.CSSProperties;
}

const ItemSeparator: React.FC<ItemSeparatorProps> = ({
  text,
  isCollapsed,
  onToggleCollapse,
  style
}) => {
  return (
    <div 
      className="flex items-center w-full px-8 gap-2 bg-[#EBEEF7]"
      style={{ 
        height: '35px',
        borderTop: '1px solid #D0D5E3',
        borderBottom: '1px solid #D0D5E3',
        ...style 
      }}
    >
      <button 
        onClick={onToggleCollapse}
        className="p-1 hover:bg-[#D0D5E3] rounded focus:outline-none focus:ring-2 focus:ring-[#3874FF] focus:ring-opacity-50"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-[#626776]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#626776]" />
        )}
      </button>
      
      <div className="flex items-center gap-2 text-[13px] text-[#050E25] font-medium">
        <LayoutGrid className="w-4 h-4 text-[#626776]" />
        <span>Item {text}</span>
      </div>
    </div>
  );
};

export default ItemSeparator;
