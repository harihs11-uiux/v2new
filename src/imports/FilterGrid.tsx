import { useState, useMemo } from "react";
import svgPaths from "./svg-a3xum6s73w";
import { Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";

const MOCK_DATA: Record<string, string[]> = {
  // Imports Data
  "Invoice No.": ["INV-001", "INV-002", "INV-003", "INV-004", "INV-005"],
  "SVB Reference No.": ["SVB-101", "SVB-102", "SVB-103", "SVB-104", "SVB-105"],
  "Seller Details": ["Seller A", "Seller B", "Seller C", "Seller D", "Seller E"],
  "Broker Details": ["Broker X", "Broker Y", "Broker Z", "Broker W", "Broker V"],
  "Third Party Details": ["Third Party 1", "Third Party 2", "Third Party 3"],
  
  // Exports Data
  "Buyer Details": ["Buyer Alpha", "Buyer Beta", "Buyer Gamma", "Buyer Delta"],
  "Third party Details": ["Third Party X", "Third Party Y", "Third Party Z"],
};

function ArrowDropdown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5580_19855)" id="arrow_dropdown">
          <g id="Vector" />
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #CDCFD3)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5580_19855">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g clipPath="url(#clip0_5580_19855)" id="arrow_dropdown">
            <g id="Vector" />
            <path d={svgPaths.p1a435af0} fill={isSelected ? "#3874ff" : "#CDCFD3"} id="expand_more" />
          </g>
          <defs>
            <clipPath id="clip0_5580_19855">
              <rect fill="white" height="18" width="18" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function FilterTooltip({ 
  label, 
  selectedItems, 
  setSelectedItems, 
  onClose 
}: { 
  label: string; 
  selectedItems: string[]; 
  setSelectedItems: (val: string[]) => void; 
  onClose: () => void 
}) {
  const [search, setSearch] = useState("");
  const [tempSelection, setTempSelection] = useState<string[]>(selectedItems);

  const options = MOCK_DATA[label] || ["Option 1", "Option 2", "Option 3"];

  const filteredOptions = useMemo(() => {
    return options.filter(opt => opt.toLowerCase().includes(search.toLowerCase()));
  }, [search, options]);

  const toggleItem = (item: string) => {
    if (tempSelection.includes(item)) {
      setTempSelection(tempSelection.filter(b => b !== item));
    } else {
      setTempSelection([...tempSelection, item]);
    }
  };

  return (
    <div className="w-[300px] bg-[#050e25] border border-[#505767] rounded-[8px] shadow-xl flex flex-col overflow-hidden">
      <div className="px-4 py-4 flex flex-col gap-4 border-none bg-[#050e25]">
        <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative text-[#ffffff] text-[14px] text-left">
          <p className="block leading-[18px]">Filter by {label}</p>
        </div>
        <div className="bg-[#242c40] box-border content-stretch flex flex-row items-center justify-start p-[8px] relative rounded w-full">
          <Input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${label}`} 
            className="basis-0 bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal grow min-h-px min-w-px not-italic text-[#9497a1] text-[14px] text-left placeholder:text-[#9497a1] h-auto p-0 focus-visible:ring-0"
          />
          <Search className="w-4 h-4 text-[#9497A1] shrink-0" />
        </div>
      </div>
      <div className="bg-[#242c40] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full max-h-[200px] overflow-y-auto">
        {filteredOptions.length > 0 ? (
          filteredOptions.map(opt => (
            <div 
              key={opt}
              className="bg-[#050e25] relative shrink-0 w-full border-b border-[#505767] hover:bg-[#0a1635] cursor-pointer"
              onClick={() => toggleItem(opt)}
            >
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
                <Checkbox 
                  checked={tempSelection.includes(opt)} 
                  onCheckedChange={() => toggleItem(opt)}
                  className="border-[#626776] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] w-4 h-4 rounded-[2px]"
                />
                <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
                  <p className="block leading-[18px]">{opt}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-[#9497A1] text-[12px] bg-[#050e25] w-full">No results found</div>
        )}
      </div>
      <div className="bg-[#050e25] p-4 flex items-center justify-between border-none">
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-auto p-0 text-[12px] font-semibold text-[#3874ff] hover:text-[#3874ff] hover:bg-transparent"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button 
          size="sm" 
          className="bg-[#3874ff] hover:bg-[#2d5dd1] text-white text-[12px] font-semibold h-auto px-4 py-1.5 rounded"
          onClick={() => {
            setSelectedItems(tempSelection);
            onClose();
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

function FilterDropdown({ 
  label, 
  filters, 
  setFilters 
}: { 
  label: string; 
  filters: Record<string, string[]>; 
  setFilters: (val: Record<string, string[]>) => void 
}) {
  const [open, setOpen] = useState(false);
  const selectedItems = filters[label] || [];
  const isSelected = selectedItems.length > 0;

  const handleSetSelectedItems = (val: string[]) => {
    setFilters({
      ...filters,
      [label]: val
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div 
          className={`content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0 cursor-pointer transition-all border border-solid ${isSelected ? 'border-[#3874ff] bg-[#3874ff]/10' : 'border-[#545d76] bg-transparent'}`} 
          data-name="Filter dropdown"
        >
          <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[14px] ${isSelected ? 'text-[#3874ff]' : 'text-[#cdcfd3]'}`}>
            {isSelected ? `${label} (${selectedItems.length})` : label}
          </p>
          <ActionIcon isSelected={isSelected} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0 border-none w-auto z-[110]" align="start" sideOffset={4}>
        <FilterTooltip 
          label={label}
          selectedItems={selectedItems} 
          setSelectedItems={handleSetSelectedItems} 
          onClose={() => setOpen(false)} 
        />
      </PopoverContent>
    </Popover>
  );
}

export default function FilterGrid({ filters = {}, setFilters = () => {}, activeView = 'Imports' }: { filters?: Record<string, string[]>; setFilters?: (val: Record<string, string[]>) => void; activeView?: 'Imports' | 'Exports' }) {
  const labels = activeView === 'Exports' 
    ? ["Buyer Details", "Third party Details"]
    : ["Invoice No.", "SVB Reference No.", "Seller Details", "Broker Details", "Third Party Details"];

  return (
    <div className="content-stretch flex gap-[48px] items-start relative size-full" data-name="Filter Grid">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[147px] whitespace-pre-wrap mt-[4px]">Invoice Details</p>
      <div className="content-start flex flex-wrap gap-[8px_16px] items-start relative shrink-0 w-[867px]" data-name="Row Of Chips">
        {labels.map(label => (
          <FilterDropdown 
            key={label} 
            label={label} 
            filters={filters} 
            setFilters={setFilters} 
          />
        ))}
      </div>
    </div>
  );
}
