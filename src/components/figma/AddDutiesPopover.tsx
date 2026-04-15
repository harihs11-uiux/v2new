import React, { useState, useMemo } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Search, ChevronRight, ChevronLeft, X } from "lucide-react";
import { cn } from "../../lib/utils";

const DUTIES_DATA: Record<string, string[]> = {
  "Customs": [
    "Basic Customs Duty (BCD)",
    "Aggregate Duty",
    "SAPTA",
    "Customs Agri & Infrastructure Dev Cess",
    "Anti Dumping",
    "Social Welfare Chargres",
    "Safeguard Duty",
    "Counter Vailing Duty",
    "Customs Health Cess(SBE Duty)",
    "Customs Education Cess",
    "+Edu Cess",
    "Tariff Value",
    "Additional Duty Notification",
    "Additional Counter Vailing Duty",
    "National Calamity Contingent Duty (NCCD)"
  ],
  "Excise": [
    "Additional Duty (Excise)",
    "Additional Duty of Excise (GSI)", 
    "Special Excise Duty (Schedule II)",
    "Additional Duty of Excise (TTA)",
    "S & HS EDU cess Notification",
    "CVD (sub section 5) Notification",
    "Excise Health Cess Notification",
    "Excise cess Notification",
    "Excise Agri Infra Cess Notification",
    "Infrastructure Cess Notification"
  ],
  "GST": [
    "IGST Value",
    "IGST Exemption",
    "IGST Levy",
    "IGST Compensation Cess Levy",
    "IGST Compensation Cess Exemption"
  ]
};

interface AddDutiesPopoverProps {
  children: React.ReactNode;
  onApply: (selectedDuties: { category: string; duty: string }[]) => void;
  currentSelection?: string[];
}

export function AddDutiesPopover({ children, onApply, currentSelection }: AddDutiesPopoverProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedDuties, setSelectedDuties] = useState<Record<string, Set<string>>>({
    "Customs": new Set(),
    "Excise": new Set(),
    "GST": new Set()
  });

  // Sync with currentSelection when opening
  React.useEffect(() => {
    if (open && currentSelection) {
      const newState: Record<string, Set<string>> = {
        "Customs": new Set(),
        "Excise": new Set(),
        "GST": new Set()
      };
      
      currentSelection.forEach(dutyName => {
        for (const [cat, duties] of Object.entries(DUTIES_DATA)) {
          if (duties.includes(dutyName)) {
            newState[cat].add(dutyName);
            break;
          }
        }
      });
      setSelectedDuties(newState);
    }
  }, [open, currentSelection]);

  const categories = Object.keys(DUTIES_DATA);

  // Filter logic
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;
    return categories.filter(cat => 
      cat.toLowerCase().includes(searchQuery.toLowerCase()) || 
      DUTIES_DATA[cat].some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, categories]);

  const getFilteredDuties = (category: string) => {
    const duties = DUTIES_DATA[category] || [];
    if (!searchQuery) return duties;
    return duties.filter(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const handleToggleDuty = (category: string, duty: string) => {
    const newSelected = new Set(selectedDuties[category]);
    if (newSelected.has(duty)) {
      newSelected.delete(duty);
    } else {
      newSelected.add(duty);
    }
    setSelectedDuties({ ...selectedDuties, [category]: newSelected });
  };

  const handleSelectAll = (category: string) => {
    const duties = getFilteredDuties(category);
    const currentSelected = selectedDuties[category];
    const allSelected = duties.every(d => currentSelected.has(d));
    
    const newSelected = new Set(currentSelected);
    if (allSelected) {
      duties.forEach(d => newSelected.delete(d));
    } else {
      duties.forEach(d => newSelected.add(d));
    }
    setSelectedDuties({ ...selectedDuties, [category]: newSelected });
  };

  const getTotalSelectedCount = () => {
    return Object.values(selectedDuties).reduce((acc, set) => acc + set.size, 0);
  };

  const handleApply = () => {
    const flattened: { category: string; duty: string }[] = [];
    Object.entries(selectedDuties).forEach(([category, set]) => {
      set.forEach(duty => {
        flattened.push({ category, duty });
      });
    });
    onApply(flattened);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    setActiveCategory(null);
    setSearchQuery("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent 
        className="w-[320px] p-0 bg-[#050e25] border border-[#545d76] text-white rounded-lg shadow-xl overflow-hidden z-[200]" 
        align="start"
        sideOffset={5}
      >
        <div className="flex flex-col h-[480px]">
          {/* Header */}
          <div className="px-4 py-3 border-b border-[#545d76]">
            <h3 className="text-[16px] font-semibold text-white mb-3">Add Duties</h3>
            <div className="relative">
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-[#242c40] text-white text-[14px] rounded px-3 py-2 pr-8 placeholder:text-[#9497a1] focus:outline-none focus:ring-1 focus:ring-[#3874FF]"
              />
              <Search className="w-4 h-4 text-[#9497a1] absolute right-2.5 top-2.5" />
            </div>
          </div>

          {/* Results Info */}
          <div className="px-4 py-2 flex justify-between items-center text-[13px] text-[#9497a1]">
            <span>{activeCategory ? getFilteredDuties(activeCategory).length : filteredCategories.length} results</span>
            {activeCategory && (
                <div className="flex items-center gap-2">
                     <span 
                        className="cursor-pointer hover:text-white"
                        onClick={() => handleSelectAll(activeCategory)}
                     >
                        Select All
                     </span>
                     <Checkbox 
                        className="border-[#626776] data-[state=checked]:bg-[#3874FF] data-[state=checked]:border-[#3874FF]"
                        checked={
                            getFilteredDuties(activeCategory).length > 0 && 
                            getFilteredDuties(activeCategory).every(d => selectedDuties[activeCategory]?.has(d))
                        }
                        onCheckedChange={() => handleSelectAll(activeCategory)}
                     />
                </div>
            )}
            {!activeCategory && (
                 <span>{getTotalSelectedCount()} items selected</span>
            )}
          </div>

          {/* List Area */}
          <ScrollArea className="flex-1">
            <div className="flex flex-col">
              {activeCategory ? (
                // Duties List (Sub-level)
                <div>
                   <div 
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#242c40] text-[#9497a1] text-[13px] border-b border-[#545d76]/50"
                      onClick={() => setActiveCategory(null)}
                   >
                      <ChevronLeft className="w-4 h-4 mr-1" /> Back to Categories
                   </div>
                   {getFilteredDuties(activeCategory).map((duty) => (
                      <div 
                        key={duty} 
                        className="flex items-center justify-between px-4 py-2.5 hover:bg-[#242c40] cursor-pointer group border-b border-[#545d76]/30 last:border-0"
                        onClick={() => handleToggleDuty(activeCategory, duty)}
                      >
                         <span className="text-[14px] text-white">{duty}</span>
                         <Checkbox 
                            className="border-[#626776] data-[state=checked]:bg-[#3874FF] data-[state=checked]:border-[#3874FF]"
                            checked={selectedDuties[activeCategory]?.has(duty)}
                            onCheckedChange={() => handleToggleDuty(activeCategory, duty)}
                         />
                      </div>
                   ))}
                </div>
              ) : (
                // Categories List (Top-level)
                filteredCategories.map((category) => (
                  <div 
                    key={category} 
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#242c40] cursor-pointer group border-b border-[#545d76]/30 last:border-0"
                    onClick={() => setActiveCategory(category)}
                  >
                     <div className="flex items-center gap-3">
                         <Checkbox 
                            className="border-[#626776] data-[state=checked]:bg-[#3874FF] data-[state=checked]:border-[#3874FF]"
                            checked={
                                DUTIES_DATA[category].length > 0 &&
                                DUTIES_DATA[category].every(d => selectedDuties[category]?.has(d))
                            }
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSelectAll(category);
                            }}
                         />
                         <span className="text-[14px] text-white">{category}</span>
                     </div>
                     <ChevronRight className="w-4 h-4 text-[#9497a1] group-hover:text-white" />
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 bg-[#050e25] border-t border-[#545d76] flex justify-between items-center">
             <button 
                onClick={handleCancel}
                className="px-3 py-1.5 text-[14px] font-semibold text-[#3874FF] hover:text-[#3874FF]/80"
             >
                Cancel
             </button>
             <button 
                onClick={handleApply}
                className="px-3 py-1.5 bg-[#3874FF] hover:bg-[#3874FF]/90 text-white text-[14px] font-semibold rounded"
             >
                Apply
             </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}