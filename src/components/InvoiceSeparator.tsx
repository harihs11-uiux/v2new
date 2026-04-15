import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface InvoiceSeparatorProps {
  invoiceNumber: string;
  invoiceId: string;
  invoiceDate?: string;
  invoiceAmount?: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  style?: React.CSSProperties;
  showText?: boolean;
  showToggle?: boolean;
  showId?: boolean;
}

const InvoiceSeparator: React.FC<InvoiceSeparatorProps> = ({
  invoiceNumber,
  invoiceId,
  invoiceDate,
  invoiceAmount,
  isCollapsed,
  onToggleCollapse,
  style,
  showText = true,
  showToggle = true,
  showId = true
}) => {
  return (
    <div 
      className="flex items-center w-full px-2 gap-2 bg-[#F1F4F8]"
      style={{ 
        height: '35px',
        borderTop: '1px solid #D0D5E3',
        borderBottom: '1px solid #D0D5E3',
        ...style 
      }}
    >
      {showToggle && (
        <button 
          onClick={onToggleCollapse}
          className="p-1 hover:bg-[#DDE3F2] rounded focus:outline-none focus:ring-2 focus:ring-[#3874FF] focus:ring-opacity-50"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-[#626776]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#626776]" />
          )}
        </button>
      )}
      
      {showText && (
        <div className="flex items-center gap-4 text-[13px] text-[#050E25] font-semibold whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-1">
            <span className="text-[#626776]">Inv. No.</span>
            <span>{invoiceNumber}</span>
          </div>
          
          {showId && (
            <div className="flex items-center gap-1">
              <span className="text-[#626776]">ID:</span>
              <span className="font-normal">{invoiceId}</span>
            </div>
          )}
          
          {invoiceDate && (
            <div className="flex items-center gap-1">
              <span className="text-[#626776]">Date:</span>
              <span className="font-normal">{invoiceDate}</span>
            </div>
          )}
          
          {invoiceAmount && (
            <div className="flex items-center gap-1">
              <span className="text-[#626776]">Amt:</span>
              <span className="font-normal">{invoiceAmount}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InvoiceSeparator;
