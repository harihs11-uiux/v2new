import React, { useState } from 'react';
import { SectionHeader, FormRow, FormField } from './FigmaForm';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from "./ui/checkbox";
import { Calendar, MoreVertical, Plus, ChevronDown, ChevronRight, LayoutGrid, Lock, Factory, X, Sun } from 'lucide-react';
import { AddDutiesPopover } from './figma/AddDutiesPopover';
import InvoiceSeparator from './InvoiceSeparator';
import ItemSeparator from './ItemSeparator';

// Shared styles
const inputClass = "w-full h-full !border-none !outline-none rounded-none bg-transparent px-2 text-[14px] font-medium text-[#050e25] placeholder:text-[#9497a1] transition-none focus:!ring-1 focus:!ring-[#3874FF] focus:!ring-inset focus:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] focus-visible:!ring-1 focus-visible:!ring-[#3874FF] focus-visible:!ring-inset focus-visible:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] hover:ring-1 hover:ring-[#3874FF] hover:ring-inset data-[state=open]:!ring-1 data-[state=open]:!ring-[#3874FF] data-[state=open]:!ring-inset data-[state=open]:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] hover:ring-1 hover:ring-[#3874FF] hover:ring-inset data-[state=open]:!ring-1 data-[state=open]:!ring-[#3874FF] data-[state=open]:!ring-inset data-[state=open]:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)]";
const dividerClass = "w-[1px] bg-[#d0d5e3] shrink-0";
const cellClass = "border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid relative flex items-center shrink-0 min-h-[32px]";
const headerClass = "bg-[#EBEEF7] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px] px-2";
const dataClass = "bg-white text-[#050e25] text-[13px] px-2";
const checkboxClass = "w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white";

// Master Data for Notifications
const MASTER_TABLE_DATA = [
  { name: "Basic Customs Duty (BCD)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "0", dutyAmount: "34" },
  { name: "Aggregate Duty", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "SAPTA", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Customs Agri & Infrastructure Dev Cess", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Anti Dumping", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Tariff Value", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
];

const MASTER_SECONDARY_DATA = [
  { name: "Social Welfare Chargres", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "0", dutyAmount: "34" },
  { name: "Safeguard Duty", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Counter Vailing Duty", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Customs Health Cess(SBE Duty)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "0", dutyAmount: "34" },
  { name: "Customs Education Cess", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "+Edu Cess", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
];

const MASTER_EXCISE_DATA = [
  { name: "Additional Duty (Excise)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Additional Duty of Excise (GSI)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "515.86", dutyAmount: "34" },
  { name: "Special Excise Duty (Schedule II)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "515.86", dutyAmount: "34" },
  { name: "Additional Duty of Excise (TTA)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "515.86", dutyAmount: "34" },
  { name: "National Calamity Contingent Duty (NCCD)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "515.86", dutyAmount: "34" },
  { name: "Social Welfare Message", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
];

const MASTER_GST_DATA = [
  { name: "IGST Value", rates: ["2%", "2%", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "IGST Exemption", rates: ["", "", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "IGST Levy", rates: ["", "", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "IGST Compensation Cess Levy", rates: ["", "", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "IGST Compensation Cess Exemption", rates: ["", "", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
];

function GridSectionHeader({ title, icon: Icon, onAdd, expanded, onToggle, onRemove }: { title: string, icon?: any, onAdd?: () => void, expanded?: boolean, onToggle?: () => void, onRemove?: () => void }) {
  return (
    <div 
      className={`bg-[#DDE3F2] px-3 py-2 flex items-center justify-center border-b border-[#d0d5e3] border-t border-t-[#d0d5e3] relative min-h-[40px] ${onToggle ? 'cursor-pointer hover:bg-[#e2e6f2]' : ''}`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-[#E97330]" />}
        <span className="font-bold text-[#050E25] text-[13px] uppercase">{title}</span>
      </div>
      <div className="absolute right-3 flex items-center gap-3">
         {onRemove && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className="p-1 hover:bg-[#D0D5E3] rounded-full transition-colors text-[#626776] hover:text-[#CF3B3B]"
              title="Remove section"
            >
              <X className="w-4 h-4" />
            </button>
         )}
      </div>
    </div>
  );
}

// 1. License Details Section
export const LicenseDetailsSection = () => {
  const Header = () => (
     <div className="flex w-full shrink-0 h-[32px] items-center bg-[#EBEEF7] border-b border-[#d0d5e3]">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}>
             <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>S.No</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Sub It Sr.No</div>
        <div className={`${cellClass} ${headerClass} w-[200px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Licence Registration No.<span className="text-red-500 ml-1">*</span></div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Item Sr. No. In License<span className="text-red-500 ml-1">*</span></div>
        <div className={`${cellClass} ${headerClass} w-[180px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Licence Registration Date<span className="text-red-500 ml-1">*</span></div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px] !border-0 bg-transparent whitespace-nowrap`}>RA/Licence Registration Port</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Debit Value</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Debit Quantity</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Debit UOM</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Debit Duty</div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 !border-0 bg-transparent`}></div>
     </div>
  );

  const renderContent = () => {
    // Generate mock data for 2 Invoices, each with 4 Items, each with 4 Licenses
    const invoices = [1, 2].map(invIdx => ({
      id: invIdx,
      no: `INV-00${invIdx}`,
      date: '22/04/2025',
      amount: 'EUR 22,800.00',
      items: [1, 2, 3, 4].map(itemIdx => ({
        id: itemIdx,
        description: `ITEM DESCRIPTION ${itemIdx}`,
        licenses: [1, 2, 3, 4].map(licIdx => ({
           id: licIdx,
           regNo: '323242423',
           date: '22/04/2025'
        }))
      }))
    }));

    // Initialize state so only Invoice 1 and its Item 1 are expanded (others collapsed)
    const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        invoices.forEach(inv => {
            if (inv.id !== 1) initial[inv.id.toString()] = true;
        });
        return initial;
    });

    const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        invoices.forEach(inv => {
            inv.items.forEach(item => {
                const key = `${inv.id}-${item.id}`;
                if (key !== '1-1') initial[key] = true;
            });
        });
        return initial;
    });

    const toggleInvoiceCollapse = (id: string) => {
        setCollapsedInvoices(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleItemCollapse = (id: string) => {
        setCollapsedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
      <div className="flex flex-col w-full min-w-max bg-white">
        {invoices.map(invoice => {
          const invId = invoice.id.toString();
          return (
          <React.Fragment key={invoice.id}>
             {/* Invoice Separator */}
             <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                <InvoiceSeparator 
                    invoiceNumber={invoice.id.toString()}
                    invoiceId="986758498435345"
                    invoiceDate={invoice.date}
                    invoiceAmount={invoice.amount}
                    isCollapsed={collapsedInvoices[invId]} 
                    onToggleCollapse={() => toggleInvoiceCollapse(invId)} 
                />
             </div>

             {!collapsedInvoices[invId] && invoice.items.map(item => {
               const itemId = `${invId}-${item.id}`;
               return (
               <React.Fragment key={item.id}>
                  {/* Item Separator */}
                  <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                    <ItemSeparator 
                        text={`${invoice.id}/${item.id}`}
                        isCollapsed={collapsedItems[itemId]}
                        onToggleCollapse={() => toggleItemCollapse(itemId)}
                    />
                  </div>
  
                  {/* License Rows */}
                  {!collapsedItems[itemId] && (
                      <>
                        {item.licenses.map((lic, idx) => (
                            <div key={lic.id} className="flex w-full border-b border-[#d0d5e3]">
                                <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                   <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                                </div>
                                <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                                   <Checkbox className={checkboxClass} />
                                </div>
                                <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>{lic.id}</div>
                                <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>1</div>
                                <div className={`${cellClass} bg-white w-[200px] shrink-0`}>
                                    <div className="flex items-center gap-2 w-full px-1">
                                        <LayoutGrid className="w-4 h-4 text-[#626776] shrink-0" />
                                        <Input className={inputClass} defaultValue={lic.regNo} />
                                    </div>
                                </div>
                                <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                     <Input className={inputClass} defaultValue="1" />
                                </div>
                                <div className={`${cellClass} bg-white w-[180px] shrink-0`}>
                                     <div className="flex items-center gap-2 w-full px-1">
                                        <Calendar className="w-4 h-4 text-[#626776] shrink-0" />
                                        <Input className={inputClass} defaultValue={lic.date} />
                                    </div>
                                </div>
                                <div className={`${cellClass} bg-white flex-1 min-w-[200px]`}>
                                     <Select>
                                       <SelectTrigger className={inputClass}>
                                         <SelectValue placeholder="Port" />
                                       </SelectTrigger>
                                       <SelectContent>
                                         <SelectItem value="port">Port</SelectItem>
                                       </SelectContent>
                                     </Select>
                                </div>
                                <div className={`${cellClass} bg-white w-[120px] shrink-0`}>
                                     <Input className={inputClass} defaultValue="4343434" />
                                </div>
                                 <div className={`${cellClass} bg-white w-[120px] shrink-0`}>
                                     <Input className={inputClass} defaultValue="43434" />
                                </div>
                                <div className={`${cellClass} bg-white w-[100px] shrink-0`}>
                                     <Select>
                                       <SelectTrigger className={inputClass}>
                                         <SelectValue placeholder="KGS" />
                                       </SelectTrigger>
                                       <SelectContent>
                                         <SelectItem value="kgs">KGS</SelectItem>
                                       </SelectContent>
                                     </Select>
                                </div>
                                <div className={`${cellClass} ${dataClass} w-[120px] shrink-0`}>Cell Name</div>
                                 <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                    <MoreVertical className="w-4 h-4 text-[#626776]" />
                                </div>
                            </div>
                        ))}
                        {/* Add Button Row for this Item Group */}
                        <div className="flex w-full border-b border-[#d0d5e3]">
                            <div className="w-full flex justify-start p-2 bg-white">
                                <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                                    <Plus className="w-4 h-4" /> Add
                                </button>
                            </div>
                        </div>
                      </>
                  )}
               </React.Fragment>
             )})}
          </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
         <SectionHeader title="License Details" icon={Lock} />

         <div className="flex-1 overflow-auto w-full bg-white relative">
              <div className="min-w-max flex flex-col">
                   <div className="sticky top-0 z-10">
                       <Header />
                   </div>
                   {renderContent()}
              </div>
         </div>
         <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
             <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 32</span>
         </div>
    </div>
  );
};

// 2. SEZ BE Type Section
export const SezBeTypeSection = () => {
  const Header = () => (
     <div className="flex w-full shrink-0 h-[32px] items-center bg-[#EBEEF7] border-b border-[#d0d5e3]">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}>
            <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>S.No</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Sub It. SNo</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Z BE No.</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Z BE date</div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px] !border-0 bg-transparent whitespace-nowrap`}>Z BE Filed Location</div>
     </div>
  );

  const renderContent = () => {
    // Generate mock data for 2 Invoices, each with 4 Items
    const invoices = [1, 2].map(invIdx => ({
      id: invIdx,
      no: `INV-00${invIdx}`,
      date: '22/04/2025',
      amount: 'EUR 22,800.00',
      items: [1, 2, 3, 4].map(itemIdx => ({
        id: itemIdx,
        description: `ITEM DESCRIPTION ${itemIdx}`,
        rows: [1, 2] // 2 rows per item
      }))
    }));

    // Initialize state so only Invoice 1 and its Item 1 are expanded (others collapsed)
    const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        invoices.forEach(inv => {
            if (inv.id !== 1) initial[inv.id.toString()] = true;
        });
        return initial;
    });

    const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        invoices.forEach(inv => {
            inv.items.forEach(item => {
                const key = `${inv.id}-${item.id}`;
                if (key !== '1-1') initial[key] = true;
            });
        });
        return initial;
    });

    const toggleInvoiceCollapse = (id: string) => {
        setCollapsedInvoices(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleItemCollapse = (id: string) => {
        setCollapsedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
    <div className="flex flex-col w-full min-w-max bg-white">
         {invoices.map(invoice => {
          const invId = invoice.id.toString();
          return (
            <React.Fragment key={invoice.id}>
              {/* Invoice Separator */}
             <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                <InvoiceSeparator 
                    invoiceNumber={invoice.id.toString()}
                    invoiceId="986758498435345"
                    invoiceDate={invoice.date}
                    invoiceAmount={invoice.amount}
                    isCollapsed={collapsedInvoices[invId]} 
                    onToggleCollapse={() => toggleInvoiceCollapse(invId)} 
                />
             </div>

             {!collapsedInvoices[invId] && invoice.items.map(item => {
                const itemId = `${invId}-${item.id}`;
                return (
                  <React.Fragment key={item.id}>
                     {/* Item Separator */}
                      <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                        <ItemSeparator 
                            text={`${invoice.id}/${item.id}`}
                            isCollapsed={collapsedItems[itemId]}
                            onToggleCollapse={() => toggleItemCollapse(itemId)}
                        />
                      </div>
                      
                      {!collapsedItems[itemId] && (
                        <>
                           {item.rows.map(rowId => (
                              <div key={rowId} className="flex w-full border-b border-[#d0d5e3]">
                                  <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                     <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                                  </div>
                                  <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                                     <Checkbox className={checkboxClass} />
                                  </div>
                                  <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>{rowId}</div>
                                  <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>1</div>
                                  <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                      <Input className={inputClass} defaultValue="83929392323" />
                                  </div>
                                  <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                       <div className="flex items-center gap-2 w-full px-1">
                                          <Calendar className="w-4 h-4 text-[#626776] shrink-0" />
                                          <Input className={inputClass} defaultValue="22/04/2042" />
                                      </div>
                                  </div>
                                  <div className={`${cellClass} bg-white flex-1 min-w-[200px]`}>
                                       <div className="flex items-center gap-2 w-full px-1">
                                          <Input className={inputClass} defaultValue="Chennai" />
                                          <MoreVertical className="w-4 h-4 text-[#626776] shrink-0 ml-auto" />
                                       </div>
                                  </div>
                              </div>
                           ))}
                           {/* Add Button */}
                           <div className="flex w-full border-b border-[#d0d5e3]">
                                <div className="w-full flex justify-start p-2 bg-white">
                                    <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                                        <Plus className="w-4 h-4" /> Add
                                    </button>
                                </div>
                           </div>
                        </>
                      )}
                  </React.Fragment>
                );
             })}
            </React.Fragment>
          );
        })}
    </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
        <SectionHeader title="SEZ-Z BE Type" icon={Factory} />
        <div className="flex-1 overflow-y-auto w-full bg-white relative">
            <div className="min-w-max flex flex-col">
                <div className="sticky top-0 z-10">
                   <Header />
                </div>
                {renderContent()}
            </div>
        </div>
        <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
            <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 3</span>
        </div>
    </div>
  );
};

// 3. Section 65 Section
export const Section65Section = () => {
  const Header = () => (
     <div className="flex w-full shrink-0 h-[32px] items-center bg-[#EBEEF7] border-b border-[#d0d5e3]">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}>
            <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>S.No</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>GST Inv. No.</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>GST Inv. dt.</div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px] !border-0 bg-transparent whitespace-nowrap`}>Description</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 text-right justify-end !border-0 bg-transparent whitespace-nowrap`}>Quantity</div>
        <div className={`${cellClass} ${headerClass} w-[80px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>UOM</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>HSN</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>SNo of GST Invoice</div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 !border-0 bg-transparent`}></div>
     </div>
  );

  const renderContent = () => {
    // Generate mock data for 2 Invoices, each with 4 Items, each with rows
    const invoices = [1, 2].map(invIdx => ({
      id: invIdx,
      no: `INV-00${invIdx}`,
      date: '22/04/2025',
      amount: 'EUR 22,800.00',
      items: [1, 2, 3, 4].map(itemIdx => ({
        id: itemIdx,
        description: `ITEM DESCRIPTION ${itemIdx}`,
        rows: [
            { sNo: 1, gstInvNo: "8384384834", gstInvDt: "23/05/2025", desc: "Desc", qty: "24434342", uom: "KGS", hsn: "2342566", snoGst: "22" },
            { sNo: 2, gstInvNo: "8384384834", gstInvDt: "23/05/2025", desc: "Desc", qty: "24434342", uom: "KGS", hsn: "2342566", snoGst: "11" }
        ]
      }))
    }));

    // Initialize state
    const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        invoices.forEach(inv => {
            if (inv.id !== 1) initial[inv.id.toString()] = true;
        });
        return initial;
    });

    const [collapsedItems, setCollapsedItems] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        invoices.forEach(inv => {
            inv.items.forEach(item => {
                const key = `${inv.id}-${item.id}`;
                if (key !== '1-1') initial[key] = true;
            });
        });
        return initial;
    });

    const toggleInvoiceCollapse = (id: string) => {
        setCollapsedInvoices(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleItemCollapse = (id: string) => {
        setCollapsedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
    <div className="flex flex-col w-full min-w-max bg-white">
         {invoices.map(invoice => {
          const invId = invoice.id.toString();
          return (
            <React.Fragment key={invoice.id}>
              {/* Invoice Separator */}
             <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                <InvoiceSeparator 
                    invoiceNumber={invoice.id.toString()}
                    invoiceId="986758498435345"
                    invoiceDate={invoice.date}
                    invoiceAmount={invoice.amount}
                    isCollapsed={collapsedInvoices[invId]} 
                    onToggleCollapse={() => toggleInvoiceCollapse(invId)} 
                />
             </div>

             {!collapsedInvoices[invId] && invoice.items.map(item => {
                const itemId = `${invId}-${item.id}`;
                return (
                  <React.Fragment key={item.id}>
                     {/* Item Separator */}
                      <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                        <ItemSeparator 
                            text={`${invoice.id}/${item.id}`}
                            isCollapsed={collapsedItems[itemId]}
                            onToggleCollapse={() => toggleItemCollapse(itemId)}
                        />
                      </div>
                      
                      {!collapsedItems[itemId] && (
                        <>
                           {item.rows.map((row, idx) => (
                              <div key={idx} className="flex w-full border-b border-[#d0d5e3]">
                                  <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                     <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                                  </div>
                                  <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                                     <Checkbox className={checkboxClass} />
                                  </div>
                                  <div className={`${cellClass} ${dataClass} w-[50px] shrink-0 justify-center`}>{row.sNo}</div>
                                  <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>{row.gstInvNo}</div>
                                  <div className={`${cellClass} ${dataClass} w-[120px] shrink-0`}>{row.gstInvDt}</div>
                                  <div className={`${cellClass} ${dataClass} flex-1 min-w-[200px]`}>{row.desc}</div>
                                  <div className={`${cellClass} ${dataClass} w-[120px] shrink-0 justify-end`}>{row.qty}</div>
                                  <div className={`${cellClass} ${dataClass} w-[80px] shrink-0`}>{row.uom}</div>
                                  <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>{row.hsn}</div>
                                  <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>{row.snoGst}</div>
                                  <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                    <MoreVertical className="w-4 h-4 text-[#626776]" />
                                  </div>
                              </div>
                           ))}
                           {/* Add Button */}
                           <div className="flex w-full border-b border-[#d0d5e3]">
                                <div className="w-full flex justify-start p-2 bg-white">
                                    <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                                        <Plus className="w-4 h-4" /> Add
                                    </button>
                                </div>
                           </div>
                        </>
                      )}
                  </React.Fragment>
                );
             })}
            </React.Fragment>
          );
        })}
    </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
        <SectionHeader title="Section 65" />
        <div className="flex-1 overflow-y-auto w-full bg-white relative">
            <div className="min-w-max flex flex-col">
                <div className="sticky top-0 z-10">
                   <Header />
                </div>
                {renderContent()}
            </div>
        </div>
        <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
             <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 4</span>
        </div>
    </div>
  );
};

// 4. Notifications Section
export const NotificationsSection = () => {
  const [tableData, setTableData] = useState<any[]>(MASTER_TABLE_DATA.filter(d => 
    ["Basic Customs Duty (BCD)", "Customs Agri & Infrastructure Dev Cess"].includes(d.name)
  ));
  const [secondaryData, setSecondaryData] = useState<any[]>(MASTER_SECONDARY_DATA.filter(d => 
    ["Social Welfare Chargres", "Counter Vailing Duty"].includes(d.name)
  ));
  const [exciseData, setExciseData] = useState<any[]>([]);
  const [gstData, setGstData] = useState<any[]>(MASTER_GST_DATA.filter(d => 
    ["IGST Levy", "IGST Compensation Cess Levy"].includes(d.name)
  ));

  const handleAddDuties = (selectedItems: { category: string; duty: string }[]) => {
    const selectedNames = new Set(selectedItems.map(i => i.duty));
    setTableData(MASTER_TABLE_DATA.filter(d => selectedNames.has(d.name)));
    setSecondaryData(MASTER_SECONDARY_DATA.filter(d => selectedNames.has(d.name)));
    setExciseData(MASTER_EXCISE_DATA.filter(d => selectedNames.has(d.name)));
    setGstData(MASTER_GST_DATA.filter(d => selectedNames.has(d.name)));
  };

  const showTariff = tableData.some(d => d.name === "Tariff Value");
  const showAntiDumping = tableData.some(d => d.name === "Anti Dumping");

  const renderRow = (item: any, index: number) => (
    <div key={index} className="flex w-full min-w-max border-b border-[#d0d5e3]">
      <div className={`${cellClass} ${headerClass} w-[306px] shrink-0`}>{item.name}</div>
      <div className={`${cellClass} ${dataClass} w-[60px] shrink-0 justify-center`}>{item.stdRate}</div>
      <div className={`${cellClass} bg-white w-[120px] grow shrink-0`}>
        <Select>
           <SelectTrigger className={inputClass + " !h-[30px]"}>
             <SelectValue placeholder="Select" />
           </SelectTrigger>
           <SelectContent>
             <SelectItem value="opt1">Option 1</SelectItem>
             <SelectItem value="opt2">Option 2</SelectItem>
           </SelectContent>
        </Select>
      </div>
      <div className={`${cellClass} bg-white w-[120px] grow shrink-0`}>
        <Select>
           <SelectTrigger className={inputClass + " !h-[30px]"}>
             <SelectValue placeholder="Select" />
           </SelectTrigger>
           <SelectContent>
             <SelectItem value="opt1">Option 1</SelectItem>
             <SelectItem value="opt2">Option 2</SelectItem>
           </SelectContent>
        </Select>
      </div>
      <div className={`${cellClass} ${dataClass} w-[60px] grow shrink-0 justify-center`}>{item.effRate}</div>
      <div className={`${cellClass} ${dataClass} w-[80px] grow shrink-0 justify-center`}>{item.dutyAmount}</div>
    </div>
  );

  const renderGSTRow = (item: any, index: number) => (
    <div key={index} className="flex w-full min-w-max border-b border-[#d0d5e3]">
      <div className={`${cellClass} ${headerClass} ${item.name === "IGST Value" ? "w-[150px]" : "w-[306px]"} shrink-0`}>{item.name}</div>
      {item.name === "IGST Value" && (
        <>
          <div className={`${cellClass} ${dataClass} w-[60px] shrink-0 justify-center`}>2%</div>
          <div className={`${cellClass} ${dataClass} w-[60px] shrink-0 justify-center`}>2%</div>
        </>
      )}
      <div className={`${cellClass} ${dataClass} w-[60px] shrink-0 justify-center`}>{item.rates[2]}</div>
      
      <div className={`${cellClass} bg-white w-[120px] grow shrink-0`}>
        <Select>
           <SelectTrigger className={inputClass + " !h-[30px]"}>
             <SelectValue placeholder="Select" />
           </SelectTrigger>
           <SelectContent>
             <SelectItem value="opt1">Option 1</SelectItem>
             <SelectItem value="opt2">Option 2</SelectItem>
           </SelectContent>
        </Select>
      </div>
      <div className={`${cellClass} bg-white w-[120px] grow shrink-0`}>
        <Select>
           <SelectTrigger className={inputClass + " !h-[30px]"}>
             <SelectValue placeholder="Select" />
           </SelectTrigger>
           <SelectContent>
             <SelectItem value="opt1">Option 1</SelectItem>
             <SelectItem value="opt2">Option 2</SelectItem>
           </SelectContent>
        </Select>
      </div>
      <div className={`${cellClass} ${dataClass} w-[60px] grow shrink-0 justify-center`}>{item.effRate}</div>
      <div className={`${cellClass} ${dataClass} w-[80px] grow shrink-0 justify-center`}>{item.dutyAmount}</div>
    </div>
  );

  const allSelectedDutyNames = React.useMemo(() => [
    ...tableData,
    ...secondaryData,
    ...exciseData,
    ...gstData
  ].map(d => d.name), [tableData, secondaryData, exciseData, gstData]);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col">
       <SectionHeader title="2. NOTIFICATIONS" />
       <div className="flex-1 overflow-y-auto w-full bg-white p-2">
          {/* Customs Section */}
          <div className="flex w-full">
            <div className="w-[30px] bg-[#EBEEF7] border-[#d0d5e3] border-[1px_0px_0px_1px] shrink-0 flex items-center justify-center">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px] whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Customs
              </span>
            </div>
            <div className="flex flex-col grow w-full overflow-x-auto">
              <div className="flex w-full min-w-max border-b border-[#d0d5e3]">
                <div className={`${cellClass} ${headerClass} w-[306px] shrink-0`}>Duty Name</div>
                <div className={`${cellClass} ${headerClass} w-[60px] shrink-0`}>Std. Rate</div>
                <div className={`${cellClass} ${headerClass} w-[120px] grow shrink-0`}>Ntn No./Sr.No</div>
                <div className={`${cellClass} ${headerClass} w-[120px] grow shrink-0`}></div>
                <div className={`${cellClass} ${headerClass} w-[60px] grow shrink-0`}>Eff. Rate</div>
                <div className={`${cellClass} ${headerClass} w-[80px] grow shrink-0`}>Duty Amount</div>
              </div>
              {tableData.filter(d => d.name !== "Tariff Value").map((item, i) => renderRow(item, i))}
              
              {showAntiDumping && (
                <div className="flex w-full min-w-max border-b border-[#d0d5e3]">
                  <div className={`${cellClass} ${headerClass} w-[306px] shrink-0 p-0 flex`}>
                      <div className="flex items-center px-2 h-full border-r border-[#d0d5e3] shrink-0">CTH Sr. No.</div>
                      <div className="w-[60px] h-full shrink-0">
                        <Select>
                          <SelectTrigger className={inputClass + " !h-[30px]"}>
                            <SelectValue placeholder="1" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center px-2 h-full border-l border-r border-[#d0d5e3] shrink-0">Supplier Sr. No</div>
                      <div className="w-[60px] h-full shrink-0">
                          <Select>
                          <SelectTrigger className={inputClass + " !h-[30px]"}>
                            <SelectValue placeholder="1" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                  </div>
                  <div className={`${cellClass} ${headerClass} w-[60px] shrink-0 p-0 flex`}>
                      <div className="flex items-center px-1 h-full shrink-0">Quantity</div>
                  </div>
                  <div className={`${cellClass} bg-white w-[120px] grow shrink-0`}>
                      <div className="flex items-center px-2 h-full w-full">0</div>
                  </div>
                  <div className={`${cellClass} ${headerClass} w-[260px] grow-[3] shrink-0 p-0 flex`}>
                      <div className="flex items-center px-2 h-full border-r border-[#d0d5e3] shrink-0">Currency</div>
                      <div className="grow h-full bg-white">
                          <Select>
                          <SelectTrigger className={inputClass + " !h-[30px]"}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD</SelectItem>
                            <SelectItem value="inr">INR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                  </div>
                </div>
              )}
              
              {showTariff && (
                <>
                  <div className="flex w-full min-w-max border-b border-[#d0d5e3]">
                    <div className={`${cellClass} ${headerClass} w-[306px] shrink-0`}>Tariff Value</div>
                    <div className={`${cellClass} ${dataClass} w-[60px] shrink-0 justify-center`}>66%</div>
                    <div className={`${cellClass} bg-white w-[120px] grow shrink-0`}>
                        <Select>
                          <SelectTrigger className={inputClass + " !h-[30px]"}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opt1">Option 1</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                    <div className={`${cellClass} bg-white w-[120px] grow shrink-0`}>
                        <Select>
                          <SelectTrigger className={inputClass + " !h-[30px]"}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opt1">Option 1</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                    <div className={`${cellClass} ${dataClass} w-[60px] grow shrink-0 justify-center`}>-</div>
                    <div className={`${cellClass} ${dataClass} w-[80px] grow shrink-0 justify-center`}>34</div>
                  </div>
                  <div className="flex w-full min-w-max border-b border-[#d0d5e3]">
                    <div className={`${cellClass} ${headerClass} w-[306px] shrink-0`}>Tariff Quantity</div>
                    <div className={`${cellClass} bg-white grow flex-1`}>
                        <Input className={inputClass + " text-[#9497a1]"} placeholder="Enter Quantity" />
                    </div>
                  </div>
                </>
              )}

              {secondaryData.map((item, i) => renderRow(item, i + 10))}
            </div>
          </div>
          
          {/* Excise Section */}
          <div className="flex w-full">
            {exciseData.length > 0 && (
              <div className="w-[30px] bg-[#EBEEF7] border-[#d0d5e3] border-[1px_0px_0px_1px] shrink-0 flex items-center justify-center">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px] whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Excise
                </span>
              </div>
            )}
            <div className="flex flex-col grow w-full overflow-x-auto">
              {exciseData.map((item, i) => renderRow(item, i + 20))}
            </div>
          </div>

          {/* GST Section */}
          <div className="flex w-full">
            {gstData.length > 0 && (
              <div className="w-[30px] bg-[#EBEEF7] border-[#d0d5e3] border-[1px_0px_0px_1px] shrink-0 flex items-center justify-center">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px] whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  GST
                </span>
              </div>
            )}
            <div className="flex flex-col grow w-full overflow-x-auto">
              {gstData.map((item, i) => renderGSTRow(item, i + 30))}
            </div>
          </div>

          <div className="w-full flex justify-start p-2 bg-white border-b border-[#d0d5e3]">
            <AddDutiesPopover onApply={handleAddDuties} currentSelection={allSelectedDutyNames}>
                <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                  <Plus className="w-4 h-4" /> Add Duties
                </button>
            </AddDutiesPopover>
          </div>
       </div>
    </div>
  );
};

// 5. Item Manufacturer Section
export const ItemManufacturerSection = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const Header = () => (
     <div className="flex w-full shrink-0 h-[32px] items-center bg-[#EBEEF7] border-b border-[#d0d5e3]">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}>
            <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>S.No</div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px] !border-0 bg-transparent whitespace-nowrap`}>Name</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Address</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>City</div>
        <div className={`${cellClass} ${headerClass} w-[80px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Pin</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Country</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Sub Division</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Code</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Code Type</div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 !border-0 bg-transparent`}></div>
     </div>
    );

    const renderContent = () => {
        const invoices = [1, 2].map(invIdx => ({
            id: invIdx,
            no: `INV-00${invIdx}`,
            date: '22/04/2025',
            amount: 'EUR 22,800.00',
            items: [1, 2, 3, 4].map(itemIdx => ({
                id: itemIdx,
                description: `ITEM DESCRIPTION ${itemIdx}`,
                rows: [1]
            }))
        }));

        const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>(() => {
            const initial: Record<string, boolean> = {};
            invoices.forEach(inv => {
                if (inv.id !== 1) initial[inv.id.toString()] = true;
            });
            return initial;
        });

        const toggleInvoiceCollapse = (id: string) => {
            setCollapsedInvoices(prev => ({ ...prev, [id]: !prev[id] }));
        };

        return (
            <div className="flex flex-col w-full min-w-max bg-white">
                {invoices.map(invoice => {
                const invId = invoice.id.toString();
                return (
                    <React.Fragment key={invoice.id}>
                    {/* Invoice Separator */}
                    <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                        <InvoiceSeparator 
                            invoiceNumber={invoice.id.toString()}
                            invoiceId="986758498435345"
                            invoiceDate={invoice.date}
                            invoiceAmount={invoice.amount}
                            isCollapsed={collapsedInvoices[invId]} 
                            onToggleCollapse={() => toggleInvoiceCollapse(invId)} 
                        />
                    </div>

                    {!collapsedInvoices[invId] && (
                        <>
                        {invoice.items.map(item => (
                            <React.Fragment key={item.id}>
                                {item.rows.map(rowId => (
                                    <div key={rowId} className="flex w-full border-b border-[#d0d5e3]">
                                        <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                            <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                                        </div>
                                        <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                                            <Checkbox className={checkboxClass} />
                                        </div>
                                        <div className={`${cellClass} ${dataClass} w-[50px] shrink-0 justify-center`}>{invoice.id}/{item.id}</div>
                                        <div className={`${cellClass} bg-white flex-1 min-w-[200px]`}>
                                            <Input className={inputClass} defaultValue="DBFID PRIVATE LIMITED" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="41-TOWER C" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[120px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="c1">Chennai</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[80px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="600118" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[120px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="in">India</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[120px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="Sub Div" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[100px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="Code" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[100px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="t1">Type 1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                            <MoreVertical className="w-4 h-4 text-[#626776]" />
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                         {/* Add Button per invoice */}
                         <div className="flex w-full border-b border-[#d0d5e3]">
                            <div className="w-full flex justify-start p-2 bg-white">
                                <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                                    <Plus className="w-4 h-4" /> Add
                                </button>
                            </div>
                        </div>
                        </>
                    )}
                    </React.Fragment>
                );
                })}
            </div>
        );
    };

    return (
      <div className={`bg-white rounded-lg shadow-sm overflow-hidden w-full ${isExpanded ? 'h-full' : 'h-auto'} flex flex-col`}>
          <SectionHeader 
              title="Item Manufacturer" 
              expanded={isExpanded} 
              onToggle={() => setIsExpanded(!isExpanded)}
              rightContent={
                  <ChevronDown className={`w-4 h-4 text-[#050e25] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
              }
          />
          {isExpanded && (
            <>
              <div className="flex-1 overflow-y-auto w-full bg-white relative">
                <div className="min-w-max flex flex-col">
                    <div className="sticky top-0 z-10">
                       <Header />
                    </div>
                    {renderContent()}
                </div>
              </div>
               <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                 <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 4</span>
              </div>
            </>
          )}
      </div>
    );
};

// 6. Previous BE Section
export const PreviousBeSection = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const Header = () => (
     <div className="flex w-full shrink-0 h-[32px] items-center bg-[#EBEEF7] border-b border-[#d0d5e3]">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}>
            <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>S.No</div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px] !border-0 bg-transparent whitespace-nowrap`}>Previous BE No</div>
        <div className={`${cellClass} ${headerClass} w-[180px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Previous BE Date</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Custom House Code</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Previous unit price</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Previous Curr. Cd</div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 !border-0 bg-transparent`}></div>
     </div>
    );

    const renderContent = () => {
        const invoices = [1, 2].map(invIdx => ({
            id: invIdx,
            no: `INV-00${invIdx}`,
            date: '22/04/2025',
            amount: 'EUR 22,800.00',
            items: [1, 2, 3, 4].map(itemIdx => ({
                id: itemIdx,
                description: `ITEM DESCRIPTION ${itemIdx}`,
                rows: [1]
            }))
        }));

        const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>(() => {
            const initial: Record<string, boolean> = {};
            invoices.forEach(inv => {
                if (inv.id !== 1) initial[inv.id.toString()] = true;
            });
            return initial;
        });

        const toggleInvoiceCollapse = (id: string) => {
            setCollapsedInvoices(prev => ({ ...prev, [id]: !prev[id] }));
        };

        return (
            <div className="flex flex-col w-full min-w-max bg-white">
                {invoices.map(invoice => {
                const invId = invoice.id.toString();
                return (
                    <React.Fragment key={invoice.id}>
                    {/* Invoice Separator */}
                    <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                        <InvoiceSeparator 
                            invoiceNumber={invoice.id.toString()}
                            invoiceId="986758498435345"
                            invoiceDate={invoice.date}
                            invoiceAmount={invoice.amount}
                            isCollapsed={collapsedInvoices[invId]} 
                            onToggleCollapse={() => toggleInvoiceCollapse(invId)} 
                        />
                    </div>

                    {!collapsedInvoices[invId] && (
                        <>
                        {invoice.items.map(item => (
                            <React.Fragment key={item.id}>
                                {item.rows.map(rowId => (
                                    <div key={rowId} className="flex w-full border-b border-[#d0d5e3]">
                                        <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                            <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                                        </div>
                                        <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                                            <Checkbox className={checkboxClass} />
                                        </div>
                                        <div className={`${cellClass} ${dataClass} w-[50px] shrink-0 justify-center`}>{invoice.id}/{item.id}</div>
                                        <div className={`${cellClass} bg-white flex-1 min-w-[200px]`}>
                                            <Input className={inputClass} defaultValue="BE-123456" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[180px] shrink-0`}>
                                            <div className="flex items-center gap-2 w-full px-1">
                                                <Calendar className="w-4 h-4 text-[#626776] shrink-0" />
                                                <Input className={inputClass} defaultValue="22/04/2025" />
                                            </div>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="opt1">Option 1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="100.00" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="usd">USD</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                            <MoreVertical className="w-4 h-4 text-[#626776]" />
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                        <div className="flex w-full border-b border-[#d0d5e3]">
                            <div className="w-full flex justify-start p-2 bg-white">
                                <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                                    <Plus className="w-4 h-4" /> Add
                                </button>
                            </div>
                        </div>
                        </>
                    )}
                    </React.Fragment>
                );
                })}
            </div>
        );
    };

    return (
      <div className={`bg-white rounded-lg shadow-sm overflow-hidden w-full ${isExpanded ? 'h-full' : 'h-auto'} flex flex-col`}>
          <SectionHeader 
              title="Previous BE details" 
              expanded={isExpanded} 
              onToggle={() => setIsExpanded(!isExpanded)}
              rightContent={
                  <ChevronDown className={`w-4 h-4 text-[#050e25] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
              }
          />
          {isExpanded && (
            <>
              <div className="flex-1 overflow-y-auto w-full bg-white relative">
                <div className="min-w-max flex flex-col">
                    <div className="sticky top-0 z-10">
                       <Header />
                    </div>
                    {renderContent()}
                </div>
              </div>
               <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                 <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 4</span>
              </div>
            </>
          )}
      </div>
    );
};

// 7. Reimport Section
export const ReimportSection = () => {
  // Styles matching ExportJobSections high-density design
  const inputClass = "w-full h-full !border-none !outline-none rounded-none bg-transparent px-2 text-[14px] font-medium text-[#050e25] placeholder:text-[#9497a1] transition-none focus:!ring-1 focus:!ring-[#3874FF] focus:!ring-inset focus:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] focus-visible:!ring-1 focus-visible:!ring-[#3874FF] focus-visible:!ring-inset focus-visible:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] hover:ring-[0.5px] hover:ring-[#3874FF] hover:ring-inset data-[state=open]:!ring-1 data-[state=open]:!ring-[#3874FF] data-[state=open]:!ring-inset data-[state=open]:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)]";
  const cellClass = "border-[#d0d5e3] border-solid relative flex items-center shrink-0 min-h-[34px]";
  const headerClass = "bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider";
  const checkboxClass = "w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white";

  const defaultInvoiceProps = {
      invoiceNumber: "1",
      invoiceId: "1",
      isCollapsed: false,
      onToggleCollapse: () => {}
  };
    
  const defaultItemProps = {
      text: "1",
      isCollapsed: false,
      onToggleCollapse: () => {}
  };

  return (
    <div className="flex flex-col w-full h-full p-[12px]">
         <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
             <div className="flex items-center gap-2">
                 <Sun className="w-4 h-4 text-[#FDB022]" />
                 <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Reimport Details</span>
             </div>
         </div>
         <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative rounded-none">
             <div className="flex flex-col w-full flex-1 overflow-auto custom-scrollbar">
                 <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-30 h-[34px]">
                     <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                     <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                     <div className={`${cellClass} ${headerClass} w-[100px] sticky left-[90px] z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Sub It. SNo</div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>SB No. <span className="text-red-500">*</span></div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>SB Date <span className="text-red-500">*</span></div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Port of Export</div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Invoice Sr. No. in SB</div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Item Sr. No. in SB</div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Notification No.</div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Notification Sr. No.</div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Export Freight <span className="text-red-500">*</span></div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Exp. Insurance <span className="text-red-500">*</span></div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Cus. Duty <span className="text-red-500">*</span></div>
                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Excise Duty <span className="text-red-500">*</span></div>
                     <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-40 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                 </div>
                 <div className="flex flex-col min-w-max">
                     <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                     
                     {/* Row 1 */}
                     <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1/1" /></div>
                     <div className="flex min-w-max border-b border-[#d0d5e3] h-[34px]">
                         <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-20 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                         <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="48349939434" /></div>
                         <div className={`${cellClass} w-[150px] bg-white relative flex items-center`}>
                            <Input className={inputClass} defaultValue="22/04/2025" />
                            <Calendar className="w-3.5 h-3.5 text-gray-500 absolute right-2 pointer-events-none" />
                         </div>
                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="Port" /></div>
                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                         <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="20/2024" /></SelectTrigger><SelectContent><SelectItem value="20/2024">20/2024</SelectItem></SelectContent></Select></div>
                         <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="21" /></SelectTrigger><SelectContent><SelectItem value="21">21</SelectItem></SelectContent></Select></div>
                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="Freight" /></div>
                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="Insurance" /></div>
                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="Cust. Duty" /></div>
                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="Excise Duty" /></div>
                         <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-20 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                     </div>
                     <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                         <Plus className="w-3 h-3" /> Add
                     </div>

                 </div>
             </div>
             <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar {
                  width: 10px;
                  height: 10px;
                  display: block !important;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: #f1f1f1;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #3874FF;
                  border-radius: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #2563EB;
                }
              `}} />
         </div>
    </div>
  );
};

// 8. RSP Section
export const RspSection = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const Header = () => (
     <div className="flex w-full shrink-0 h-[32px] items-center bg-[#EBEEF7] border-b border-[#d0d5e3]">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}>
            <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>S.No</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Item in RSP</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>RS/unit & Qty</div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px] !border-0 bg-transparent whitespace-nowrap`}>Description</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Ntfn. No /Sr.no</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Total Sale Amount</div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 !border-0 bg-transparent`}></div>
     </div>
    );

    const renderContent = () => {
        const invoices = [1, 2].map(invIdx => ({
            id: invIdx,
            no: `INV-00${invIdx}`,
            date: '22/04/2025',
            amount: 'EUR 22,800.00',
            items: [1, 2, 3, 4].map(itemIdx => ({
                id: itemIdx,
                description: `ITEM DESCRIPTION ${itemIdx}`,
                rows: [1]
            }))
        }));

        const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>(() => {
            const initial: Record<string, boolean> = {};
            invoices.forEach(inv => {
                if (inv.id !== 1) initial[inv.id.toString()] = true;
            });
            return initial;
        });

        const toggleInvoiceCollapse = (id: string) => {
            setCollapsedInvoices(prev => ({ ...prev, [id]: !prev[id] }));
        };

        return (
            <div className="flex flex-col w-full min-w-max bg-white">
                {invoices.map(invoice => {
                const invId = invoice.id.toString();
                return (
                    <React.Fragment key={invoice.id}>
                    {/* Invoice Separator */}
                    <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                        <InvoiceSeparator 
                            invoiceNumber={invoice.id.toString()}
                            invoiceId="986758498435345"
                            invoiceDate={invoice.date}
                            invoiceAmount={invoice.amount}
                            isCollapsed={collapsedInvoices[invId]} 
                            onToggleCollapse={() => toggleInvoiceCollapse(invId)} 
                        />
                    </div>

                    {!collapsedInvoices[invId] && (
                        <>
                        {invoice.items.map(item => (
                            <React.Fragment key={item.id}>
                                {item.rows.map(rowId => (
                                    <div key={rowId} className="flex w-full border-b border-[#d0d5e3]">
                                        <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                            <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                                        </div>
                                        <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                                            <Checkbox className={checkboxClass} />
                                        </div>
                                        <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>{invoice.id}/{item.id}</div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="1" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="100" />
                                        </div>
                                        <div className={`${cellClass} bg-white flex-1 min-w-[200px]`}>
                                            <Input className={inputClass} defaultValue="Description" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="opt1">Option 1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="5000" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                            <MoreVertical className="w-4 h-4 text-[#626776]" />
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                        <div className="flex w-full border-b border-[#d0d5e3]">
                            <div className="w-full flex justify-start p-2 bg-white">
                                <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                                    <Plus className="w-4 h-4" /> Add
                                </button>
                            </div>
                        </div>
                        </>
                    )}
                    </React.Fragment>
                );
                })}
            </div>
        );
    };

    return (
      <div className={`bg-white rounded-lg shadow-sm overflow-hidden w-full ${isExpanded ? 'h-full' : 'h-auto'} flex flex-col`}>
          <SectionHeader 
              title="RSP" 
              expanded={isExpanded} 
              onToggle={() => setIsExpanded(!isExpanded)}
              rightContent={
                  <ChevronDown className={`w-4 h-4 text-[#050e25] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
              }
          />
          {isExpanded && (
            <>
              <div className="flex-1 overflow-y-auto w-full bg-white relative">
                <div className="min-w-max flex flex-col">
                    <div className="sticky top-0 z-10">
                       <Header />
                    </div>
                    {renderContent()}
                </div>
              </div>
               <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                 <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 4</span>
              </div>
            </>
          )}
      </div>
    );
};

// 9. FTA Section
export const FtaSection = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const Header = () => (
     <div className="flex w-full shrink-0 h-[32px] items-center bg-[#EBEEF7] border-b border-[#d0d5e3]">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}>
            <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>S.No</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>COO No</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Date of Issue</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Country of Issue</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Origin Criteria</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Tarrif Shift</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Accu/Cumulation</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Cert. It.</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>If Others Specify</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Retroactive Issur.</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent whitespace-nowrap`}>Direct Consignment</div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 !border-0 bg-transparent`}></div>
     </div>
    );

    const renderContent = () => {
        const invoices = [1, 2].map(invIdx => ({
            id: invIdx,
            no: `INV-00${invIdx}`,
            date: '22/04/2025',
            amount: 'EUR 22,800.00',
            items: [1, 2, 3, 4].map(itemIdx => ({
                id: itemIdx,
                description: `ITEM DESCRIPTION ${itemIdx}`,
                rows: [1]
            }))
        }));

        const [collapsedInvoices, setCollapsedInvoices] = useState<Record<string, boolean>>(() => {
            const initial: Record<string, boolean> = {};
            invoices.forEach(inv => {
                if (inv.id !== 1) initial[inv.id.toString()] = true;
            });
            return initial;
        });

        const toggleInvoiceCollapse = (id: string) => {
            setCollapsedInvoices(prev => ({ ...prev, [id]: !prev[id] }));
        };

        return (
            <div className="flex flex-col w-full min-w-max bg-white">
                {invoices.map(invoice => {
                const invId = invoice.id.toString();
                return (
                    <React.Fragment key={invoice.id}>
                    {/* Invoice Separator */}
                    <div style={{ width: '100%', borderTop: '1px solid #D0D5E3' }}>
                        <InvoiceSeparator 
                            invoiceNumber={invoice.id.toString()}
                            invoiceId="986758498435345"
                            invoiceDate={invoice.date}
                            invoiceAmount={invoice.amount}
                            isCollapsed={collapsedInvoices[invId]} 
                            onToggleCollapse={() => toggleInvoiceCollapse(invId)} 
                        />
                    </div>

                    {!collapsedInvoices[invId] && (
                        <>
                        {invoice.items.map(item => (
                            <React.Fragment key={item.id}>
                                {item.rows.map(rowId => (
                                    <div key={rowId} className="flex w-full border-b border-[#d0d5e3]">
                                        <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                            <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                                        </div>
                                        <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                                            <Checkbox className={checkboxClass} />
                                        </div>
                                        <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>{invoice.id}/{item.id}</div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="COO-123" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                             <div className="flex items-center gap-2 w-full px-1">
                                                <Calendar className="w-4 h-4 text-[#626776] shrink-0" />
                                                <Input className={inputClass} defaultValue="22/04/2025" />
                                            </div>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                             <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="in">India</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="opt1">Option 1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="opt1">Option 1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="opt1">Option 1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="1" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Input className={inputClass} defaultValue="Specify" />
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="opt1">Option 1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                                            <Select>
                                                <SelectTrigger className={inputClass}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="opt1">Option 1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                                            <MoreVertical className="w-4 h-4 text-[#626776]" />
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                        <div className="flex w-full border-b border-[#d0d5e3]">
                            <div className="w-full flex justify-start p-2 bg-white">
                                <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                                    <Plus className="w-4 h-4" /> Add
                                </button>
                            </div>
                        </div>
                        </>
                    )}
                    </React.Fragment>
                );
                })}
            </div>
        );
    };

    return (
      <div className={`bg-white rounded-lg shadow-sm overflow-hidden w-full ${isExpanded ? 'h-full' : 'h-auto'} flex flex-col`}>
          <SectionHeader 
              title="FTA" 
              expanded={isExpanded} 
              onToggle={() => setIsExpanded(!isExpanded)}
              rightContent={
                  <ChevronDown className={`w-4 h-4 text-[#050e25] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
              }
          />
          {isExpanded && (
            <>
              <div className="flex-1 overflow-y-auto w-full bg-white relative">
                <div className="min-w-max flex flex-col">
                    <div className="sticky top-0 z-10">
                       <Header />
                    </div>
                    {renderContent()}
                </div>
              </div>
               <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                 <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 4</span>
              </div>
            </>
          )}
      </div>
    );
};

