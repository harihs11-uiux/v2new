import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Audit } from "./AuditToolbarItem";

interface InvoiceHeaderProps {
  onClose?: () => void;
  progress?: string;
  onPrev?: () => void;
  onNext?: () => void;
  currentInvoiceId?: string;
  onAuditClick?: () => void;
  onPdfClick?: () => void;
  onVerificationClick?: () => void;
  onSave?: () => void;
  jobNumber?: string;
}

const INVOICES = [
  { id: "1", label: "Inv1 :3534334353" },
  { id: "2", label: "Inv2 :7534334354" },
  { id: "3", label: "Inv3 :8534334355" },
  { id: "4", label: "Inv4 :9534334356" },
  { id: "5", label: "Inv5 :0534334357" },
];

export function InvoiceHeader({
  onClose,
  progress,
  onPrev,
  onNext,
  currentInvoiceId,
  onAuditClick,
  onPdfClick,
  onVerificationClick,
  onSave,
  jobNumber = 'ICB/16453/2025-26'
}: InvoiceHeaderProps) {
  const [invoice, setInvoice] = React.useState("1");

  React.useEffect(() => {
    if (currentInvoiceId) {
      setInvoice(currentInvoiceId);
    }
  }, [currentInvoiceId]);

  const handlePrev = () => {
    const currentIndex = INVOICES.findIndex(inv => inv.id === invoice);
    if (currentIndex > 0) {
      const newId = INVOICES[currentIndex - 1].id;
      setInvoice(newId);
      onPrev?.();
    }
  };

  const handleNext = () => {
    const currentIndex = INVOICES.findIndex(inv => inv.id === invoice);
    if (currentIndex < INVOICES.length - 1) {
      const newId = INVOICES[currentIndex + 1].id;
      setInvoice(newId);
      onNext?.();
    }
  };

  return (
    <div className="bg-[#2D364D] w-full flex items-center justify-between px-[12px] h-[48px] border-b border-[#545d76] shrink-0">
      {/* Left Side: Title + Nav Controls */}
      <div className="flex items-center gap-4">
        {/* Title & Progress */}
        <div className="flex items-center gap-3 shrink-0">
          <p className="font-semibold text-[16px] text-white">Edit Invoice</p>
        </div>

        {/* Separator */}
        <div className="w-[1px] h-[24px] bg-[#545d76]" />

        {/* Invoice Dropdown */}
        <div className="w-[200px]">
          <Select value={invoice} onValueChange={(val) => { setInvoice(val); }}>
            <SelectTrigger className="w-full h-[32px] bg-transparent border-0 border-b border-[#545d76] rounded-none focus:ring-0 shadow-none gap-2 text-white px-0">
               <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2d364d] border-[#545d76] text-white">
              {INVOICES.map((inv) => (
                <SelectItem key={inv.id} value={inv.id} className="focus:bg-[#37425a] focus:text-white cursor-pointer">
                  {inv.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center gap-1">
          <button 
            onClick={handlePrev}
            className="bg-[#37425a] flex items-center justify-center w-[28px] h-[28px] rounded-[4px] hover:bg-[#465472] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#CDCFD3]" />
          </button>
          <button 
            onClick={handleNext}
            className="bg-[#37425a] flex items-center justify-center w-[28px] h-[28px] rounded-[4px] hover:bg-[#465472] transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-[#CDCFD3]" />
          </button>
        </div>

        {/* View PDF Button */}
        <button 
          onClick={onPdfClick}
          className="bg-[#37425a] px-3 py-1.5 rounded-[4px] hover:bg-[#465472] transition-colors text-white text-[12px] font-semibold"
        >
          View PDF
        </button>

        {/* Verification Station Button */}
        <button 
          onClick={onVerificationClick}
          className="bg-[#37425a] px-3 py-1.5 rounded-[4px] hover:bg-[#465472] transition-colors text-white text-[12px] font-semibold"
        >
          Verification Station
        </button>

        {progress && (
            <div className="flex items-center gap-2">
              <span className="text-[#9497a1] text-[12px] font-medium">|</span>
              <span className="text-[#02B196] text-[12px] font-medium">{progress} completed</span>
            </div>
        )}
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-3">
        {/* Audit Icons */}
        <div className="mr-2">
           <Audit onAuditClick={onAuditClick} />
        </div>

        {/* Save Button */}
        <button 
          onClick={onSave}
          className="bg-[#3874ff] px-4 py-1.5 rounded-[4px] hover:bg-[#2c5bcf] transition-colors text-white text-[14px] font-semibold"
        >
          Save
        </button>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="w-[28px] h-[28px] flex items-center justify-center hover:bg-[#37425a] rounded-full transition-colors group"
        >
          <X className="w-5 h-5 text-[#CDCFD3] group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
