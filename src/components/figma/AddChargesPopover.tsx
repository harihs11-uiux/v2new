import React, { useState, useMemo, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Checkbox } from "../ui/checkbox";
import { Search } from "lucide-react";

const MASTER_CHARGES = [
  "Brokerage & Commissions",
  "Cost of Containers",
  "Cost of Packing",
  "Handling Charges",
  "Cost Of Goods And Services",
  "Documentation",
  "Country Of Origin Certificate",
  "Royalties And Licence Fees",
  "Value Of Proceeds Which Accrue",
  "Cost Of Warranty Services",
  "Other Cost Or Payment",
  "Other Charges And Payments",
  "Loading Charges",
  "Unloading Charges"
];

interface AddChargesPopoverProps {
  children: React.ReactNode;
  onApply: (selectedCharges: string[]) => void;
  currentCharges: string[];
}

export function AddChargesPopover({ children, onApply, currentCharges }: AddChargesPopoverProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCharges, setSelectedCharges] = useState<Set<string>>(new Set(currentCharges));

  // Sync with currentCharges when opening
  useEffect(() => {
    if (open) {
      setSelectedCharges(new Set(currentCharges));
    }
  }, [open, currentCharges]);

  // Filter logic
  const filteredCharges = useMemo(() => {
    if (!searchQuery) return MASTER_CHARGES;
    return MASTER_CHARGES.filter(charge => 
      charge.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleToggleCharge = (charge: string) => {
    const newSelected = new Set(selectedCharges);
    if (newSelected.has(charge)) {
      newSelected.delete(charge);
    } else {
      newSelected.add(charge);
    }
    setSelectedCharges(newSelected);
  };

  const handleApply = () => {
    // Preserve the order from MASTER_CHARGES for the applied list
    const sortedSelected = MASTER_CHARGES.filter(c => selectedCharges.has(c));
    onApply(sortedSelected);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    setSearchQuery("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent 
        className="w-[320px] p-0 bg-white border border-[#d0d5e3] rounded-lg shadow-xl overflow-hidden z-[200]" 
        align="start"
        sideOffset={5}
      >
        <div className="flex flex-col h-[400px]">
          {/* Header */}
          <div className="px-4 py-3 border-b border-[#d0d5e3] bg-[#f8f9fc]">
            <div className="relative">
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search charges..."
                className="w-full bg-white text-[#050e25] text-[14px] border border-[#d0d5e3] rounded px-3 py-2 pr-8 placeholder:text-[#9497a1] focus:outline-none focus:ring-1 focus:ring-[#3874FF]"
              />
              <Search className="w-4 h-4 text-[#9497a1] absolute right-2.5 top-2.5" />
            </div>
          </div>

          {/* List Area */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="flex flex-col">
                   {filteredCharges.map((charge) => (
                      <div 
                        key={charge} 
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#f1f4f8] cursor-pointer border-b border-[#f1f4f8] last:border-0"
                        onClick={() => handleToggleCharge(charge)}
                      >
                         <Checkbox 
                            className="border-[#d0d5e3] data-[state=checked]:bg-[#3874FF] data-[state=checked]:border-[#3874FF]"
                            checked={selectedCharges.has(charge)}
                            onCheckedChange={() => handleToggleCharge(charge)}
                         />
                         <span className="text-[14px] text-[#050e25]">{charge}</span>
                      </div>
                   ))}
                   {filteredCharges.length === 0 && (
                       <div className="p-4 text-center text-[#9497a1] text-[13px]">
                           No charges found
                       </div>
                   )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-white border-t border-[#d0d5e3] flex justify-end items-center gap-2">
             <button 
                onClick={handleCancel}
                className="px-3 py-1.5 text-[13px] font-medium text-[#626776] hover:bg-[#f1f4f8] rounded"
             >
                Cancel
             </button>
             <button 
                onClick={handleApply}
                className="px-3 py-1.5 bg-[#3874FF] hover:bg-[#3874FF]/90 text-white text-[13px] font-medium rounded"
             >
                Apply
             </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
