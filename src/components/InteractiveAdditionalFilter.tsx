import { useState } from "react";
import InteractiveFilterChip from "./InteractiveFilterChip";

interface FilterState {
  [key: string]: string[];
}

function Sidebar({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const tabs = [
    { id: 'job', label: 'Job' },
    { id: 'invoice', label: 'Invoice' },
    { id: 'item', label: 'Item' }
  ];

  return (
    <div className="box-border flex flex-col items-start justify-start relative shrink-0 w-[120px] bg-[#242c40] h-full" data-name="Sidebar">
      {tabs.map(tab => (
        <div 
          key={tab.id}
          className={`box-border flex h-10 items-center justify-center relative w-full cursor-pointer transition-colors ${activeTab === tab.id ? 'bg-[#3874ff]' : 'hover:bg-[#333b4f]'}`}
          onClick={() => onTabChange(tab.id)}
        >
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-white text-[14px] text-center w-full">
            <p className="block leading-[18px]">{tab.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FilterGrid({ 
  title, 
  labels, 
  filters, 
  setFilters 
}: { 
  title: string; 
  labels: string[]; 
  filters: FilterState; 
  setFilters: (val: FilterState) => void 
}) {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Filter Grid">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[147px] whitespace-pre-wrap mt-1">{title}</p>
      <div className="content-start flex flex-wrap gap-[8px_16px] items-start relative shrink-0 flex-1" data-name="Row Of Chips">
        {labels.map(label => (
          <InteractiveFilterChip 
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

function JobDetails({ filters, setFilters }: { filters: FilterState; setFilters: (val: FilterState) => void }) {
  return (
    <div className="flex flex-col gap-[24px] items-start relative size-full">
      <div aria-hidden="true" className="absolute border-[#545d76] border-solid border-t inset-0 pointer-events-none" />
      <FilterGrid 
        title="Job Details" 
        labels={["Seal No.", "RBI Waiver No.", "Excise Seal No.", "Container No."]} 
        filters={filters} 
        setFilters={setFilters} 
      />
      <FilterGrid 
        title="Shipment Details" 
        labels={["Port of Discharge"]} 
        filters={filters} 
        setFilters={setFilters} 
      />
    </div>
  );
}

function InvoiceDetails({ filters, setFilters }: { filters: FilterState; setFilters: (val: FilterState) => void }) {
  return (
    <div className="flex flex-col gap-[24px] items-start relative size-full">
      <FilterGrid 
        title="Invoice Details" 
        labels={["Buyer Details", "Third party Details"]} 
        filters={filters} 
        setFilters={setFilters} 
      />
    </div>
  );
}

function ItemDetails({ filters, setFilters }: { filters: FilterState; setFilters: (val: FilterState) => void }) {
  return (
    <div className="flex flex-col gap-[24px] items-start relative size-full">
      <FilterGrid 
        title="Item Details" 
        labels={["Part Code", "Description", "HSN", "Reexport BE No.", "Third Party Exporter"]} 
        filters={filters} 
        setFilters={setFilters} 
      />
      <FilterGrid 
        title="License Details" 
        labels={["DFIA License No.", "DEEC License No.", "EPCG License No."]} 
        filters={filters} 
        setFilters={setFilters} 
      />
    </div>
  );
}

export default function InteractiveAdditionalFilter({ filters = {}, setFilters = () => {} }: { filters?: FilterState; setFilters?: (val: FilterState) => void }) {
  const [activeTab, setActiveTab] = useState('job');

  return (
    <div className="bg-[#2d364d] content-stretch flex flex-row items-start relative shadow-[0px_5px_11px_0px_#141c38] w-full h-[300px] overflow-hidden" data-name="Interactive Additional Filter">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 h-full px-[24px] py-[16px] relative overflow-y-auto">
        {activeTab === 'job' && <JobDetails filters={filters} setFilters={setFilters} />}
        {activeTab === 'invoice' && <InvoiceDetails filters={filters} setFilters={setFilters} />}
        {activeTab === 'item' && <ItemDetails filters={filters} setFilters={setFilters} />}
      </div>
    </div>
  );
}
