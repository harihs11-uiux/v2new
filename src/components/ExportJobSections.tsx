import React from 'react';
import { SectionHeader, FormRow, FormField } from './FigmaForm';
import { Input } from './ui/input';
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Box, Calculator, MoreVertical, Plus, Lock, LayoutGrid, Calendar, Award, FileText, Percent, Package, Briefcase, IndianRupee, Sun } from 'lucide-react';
import InvoiceSeparator from './InvoiceSeparator';
import ItemSeparator from './ItemSeparator';

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

// Helper for generic table structure - No separators built-in
const GenericTableSection = ({ title, icon: Icon, children }: { title: string, icon?: any, children?: React.ReactNode }) => (
  <div className="w-full h-full">
      {children || <div className="text-sm text-gray-500 italic">No data available</div>}
  </div>
);

// Helper for generic form structure - No separators built-in
const GenericFormSection = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="flex flex-col w-full h-full bg-[#f6f9ff]">
    <div className="flex flex-col w-full bg-white border border-[#d0d5e3] rounded-lg overflow-hidden">
        <SectionHeader title={title} expanded={true} onToggle={() => {}} />
        <div className="flex flex-col w-full p-4 gap-4">
            {children || <div className="p-4 text-sm text-gray-500 italic">No fields available</div>}
        </div>
    </div>
  </div>
);

export const CessSection = () => {
    return (
        <GenericTableSection title="Cess" icon={Calculator}>
             <div className="flex flex-col w-full h-full p-[12px]">
                 <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                     <div className="flex items-center gap-2">
                         <Calculator className="w-4 h-4 text-[#A855F7]" />
                         <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">CESS</span>
                     </div>
                 </div>
                 <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Sub Item Sr. No.</div>
                         <div className={`${cellClass} ${headerClass} w-[350px]`}>Cess Act Code/ Item Serial No. in Export Tariff</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Quantity</div>
                         <div className={`${cellClass} ${headerClass} w-[40px]`} />
                     </div>
                     <div className="flex flex-col w-full flex-1 overflow-auto">
                         {/* Invoice 1 */}
                         <InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1" />
                         <ItemSeparator {...defaultItemProps} />
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[350px] bg-white`}><Input className={inputClass} defaultValue="01" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="808" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3]">
                             <Plus className="w-3 h-3" /> Add
                         </div>

                         {/* Invoice 2 */}
                         <InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="2" isCollapsed={true} />

                         {/* Invoice 3 */}
                         <InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="3" isCollapsed={true} />

                         {/* Invoice 4 */}
                         <InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="4" isCollapsed={true} />
                         
                     </div>
                     {/* Footer */}
                     <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0">
                         <div className="w-[40px] border-r border-[#d0d5e3]" />
                         <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold">4</div>
                         <div className="flex-1" />
                     </div>
                 </div>
            </div>
        </GenericTableSection>
    );
};

export const RawMaterialsSection = () => {
    return (
        <GenericTableSection title="Raw Materials" icon={Box}>
             <div className="flex flex-col w-full h-full p-[12px]">
                 <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                     <div className="flex items-center gap-2">
                         <Box className="w-4 h-4 text-[#FF6F61]" />
                         <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Raw Material</span>
                     </div>
                 </div>
                 <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Sub Item Sr.No.</div>
                         <div className={`${cellClass} ${headerClass} w-[300px]`}>Raw Material Code</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Quantity</div>
                         <div className={`${cellClass} ${headerClass} w-[40px]`} />
                     </div>
                     <div className="flex flex-col w-full flex-1 overflow-auto">
                         {/* Invoice 1 */}
                         <InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1" />
                         <ItemSeparator {...defaultItemProps} />
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[300px] bg-white`}><Input className={inputClass} defaultValue="KGS" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="345" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3]">
                             <Plus className="w-3 h-3" /> Add
                         </div>

                         {/* Invoices 2-4 Collapsed */}
                         <InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="2" isCollapsed={true} />
                         <InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="3" isCollapsed={true} />
                         <InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="4" isCollapsed={true} />
                     </div>
                     {/* Footer */}
                     <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0">
                         <div className="w-[40px] border-r border-[#d0d5e3]" />
                         <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold">4</div>
                         <div className="flex-1" />
                     </div>
                 </div>
            </div>
        </GenericTableSection>
    );
};

export const ThirdPartyExporterSection = () => (
    <GenericTableSection title="Third Party Exporter Details">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <div className="flex items-center justify-center w-4 h-4 bg-[#FF7F50] rounded-[2px] text-white text-[10px] font-bold">R</div>
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Third Party Export Details</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[80px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Inv/It.Sr.No</div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>Name Of The Exporter</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>ID</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>IEC <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>Branch Sl No.</div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>Address <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>City <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[200px]`}>Third Party Country Subdivision</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Third Party Country Code</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>Third Party PIN</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>GSTIN Type <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>GSTIN ID <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Row 1 */}
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1/1" /></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={inputClass} defaultValue="Renault Nissan" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="TJ12938438" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="01" /></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-red-500 shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sel">Select</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[200px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="01-JAMMU AND KASHMIR" /></SelectTrigger><SelectContent><SelectItem value="jk">01-JAMMU AND KASHMIR</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="AD - ANDORRA" /></SelectTrigger><SelectContent><SelectItem value="ad">AD - ANDORRA</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="12345" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-red-500 shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sel">Select</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={`${inputClass} border-red-500`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>

                         {/* Row 2 */}
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1/2" /></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={inputClass} defaultValue="Renault Nissan" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="TJ12938438" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="01" /></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-red-500 shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sel">Select</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[200px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="01-JAMMU AND KASHMIR" /></SelectTrigger><SelectContent><SelectItem value="jk">01-JAMMU AND KASHMIR</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="AD - ANDORRA" /></SelectTrigger><SelectContent><SelectItem value="ad">AD - ANDORRA</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="76543" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-red-500 shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sel">Select</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={`${inputClass} border-red-500`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20">
                     <div className="w-[40px] border-r border-[#d0d5e3]" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold">2</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const Ar4Section = () => (
    <GenericTableSection title="AR4 Details">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <FileText className="w-4 h-4 text-[#3874FF]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">AR4 Details</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative rounded-none">
                 <div className="flex flex-col w-full flex-1 overflow-auto custom-scrollbar">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-30 h-[34px]">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[100px] sticky left-[90px] z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Sub Item Sr.No.</div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>AR4 Number <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>AR4 Date</div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>Commissionerate <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>Division <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>Range <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[200px]`}>Remarks</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-40 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Item 1 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1/1" /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3] h-[34px]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-20 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[150px] bg-white relative flex items-center`}>
                                <Input className={inputClass} defaultValue="08/08/2025" />
                                <Calendar className="w-3.5 h-3.5 text-gray-500 absolute right-2 pointer-events-none" />
                             </div>
                             <div className={`${cellClass} w-[180px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-red-500 shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sel">Select</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[180px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-red-500 shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sel">Select</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={inputClass} defaultValue="There are remarks" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-20 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>

                         {/* Item 2 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1/2" /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3] h-[34px]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-20 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[150px] bg-white relative flex items-center`}>
                                <Input className={inputClass} defaultValue="08/08/2025" />
                                <Calendar className="w-3.5 h-3.5 text-gray-500 absolute right-2 pointer-events-none" />
                             </div>
                             <div className={`${cellClass} w-[180px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-red-500 shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sel">Select</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[180px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-red-500 shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sel">Select</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} placeholder="Enter" /></div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={inputClass} defaultValue="There are remarks" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-20 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>

                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 items-center px-2">
                     <div className="flex items-center text-[#3874FF] text-xs font-medium cursor-pointer gap-1">
                         <Plus className="w-3 h-3" /> Add 100 more rows at the bottom
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
    </GenericTableSection>
);

export const DrawbackSection = () => (
    <GenericTableSection title="DBK Details">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <div className="w-4 h-4 bg-[#3874FF] rounded-full flex items-center justify-center">
                        <Percent className="w-2.5 h-2.5 text-white" />
                     </div>
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">DBK Details</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[80px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Inv/It.Sr.No</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Schdl. No. <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>DBK Qty <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>DBK Unit</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>DBK Cap</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>DBK Per</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>DBK Rate</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>DBK Amount</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>DBK Under</div>
                         <div className={`${cellClass} ${headerClass} w-[200px]`}>DBK Description</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>State Rate</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>State Cap</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>State Amount</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>Central Rate</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>Central Cap</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Central Amount</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>Rs Amt.</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Row 1 */}
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1/1" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} defaultValue="65467" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} defaultValue="45" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="KGS" /></SelectTrigger><SelectContent><SelectItem value="kgs">KGS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="543" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="543" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="10" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="65432" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Actual" /></SelectTrigger><SelectContent><SelectItem value="actual">Actual</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="Nuts and bold" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="10" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="20" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="234567" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="10" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="20" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="234567" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="543" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>

                         {/* Row 2 */}
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1/2" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} defaultValue="87657" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} border-red-500 rounded-none`} defaultValue="54" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="KGS" /></SelectTrigger><SelectContent><SelectItem value="kgs">KGS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="5432" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="432" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="10" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="65432" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Actual" /></SelectTrigger><SelectContent><SelectItem value="actual">Actual</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="Nuts and bold" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="10" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="20" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="2345" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="10" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="20" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="6543" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={`${inputClass} rounded-none`} defaultValue="6543" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20">
                     <div className="w-[40px] border-r border-[#d0d5e3]" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold">2</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const RodtepSection = () => (
    <GenericTableSection title="RoDTEP">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <Box className="w-4 h-4 text-[#FF7F50]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">RODTEP</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative rounded-none">
                 <div className="flex flex-col w-full flex-1 overflow-auto custom-scrollbar">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-30 h-[34px]">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[100px] sticky left-[90px] z-40 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Inv/It.Sr.No</div>
                         <div className={`${cellClass} ${headerClass} w-[250px]`}>RODTEP Applicability</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Quantity</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>UOM</div>
                         <div className={`${cellClass} ${headerClass} w-[250px]`}>RODTEP Description</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-40 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Row 1 */}
                         <div className="flex min-w-max border-b border-[#d0d5e3] h-[34px]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-20 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[250px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="avail">RODTEPY - RODTEPY is availed</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="888.55" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="nos">NOS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[250px] bg-white`}><Input className={inputClass} defaultValue="SUPPLY -EXPORT UNDER BOND" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-20 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>

                         {/* Row 2 */}
                         <div className="flex min-w-max border-b border-[#d0d5e3] h-[34px]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-20 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-20 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[250px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="avail">RODTEPY - RODTEPY is availed</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="888.55" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="nos">NOS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[250px] bg-white`}><Input className={inputClass} defaultValue="SUPPLY -EXPORT UNDER BOND" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-20 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 overflow-hidden">
                     <div className="w-[40px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">2</div>
                     <div className="w-[100px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[250px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">1080</div>
                     <div className="flex-1" />
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
    </GenericTableSection>
);

export const RawMaterialSection = () => (
    <GenericTableSection title="Raw Material">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <Package className="w-4 h-4 text-[#FF7F50]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Raw Material</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[100px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Sub Item Sr.No.</div>
                         <div className={`${cellClass} ${headerClass} w-[400px]`}>Raw Material Code</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Quantity</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Item 1 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1 / 1" /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[400px] bg-white`}><Input className={inputClass} defaultValue="KGS" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="345" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 overflow-hidden">
                     <div className="w-[40px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">1</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const JobWorkSection = () => (
    <GenericTableSection title="Job Work Details">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <Briefcase className="w-4 h-4 text-[#FF7F50]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Job Work Details</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[80px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Sub It. SNo</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Job work Notf No.</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>BE Number</div>
                         <div className={`${cellClass} ${headerClass} w-[130px]`}>BE Date</div>
                         <div className={`${cellClass} ${headerClass} w-[130px]`}>BE Invoice Sr. No.</div>
                         <div className={`${cellClass} ${headerClass} w-[130px]`}>BE Invoice No.</div>
                         <div className={`${cellClass} ${headerClass} w-[130px]`}>BE Item Number</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>BE Port Code</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>BE Qty Used</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>Qty Units</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Item 1/1 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1 / 1" /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="12345432" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1234567" /></div>
                             <div className={`${cellClass} w-[130px] bg-white relative`}>
                                <Input className={`${inputClass} pr-8`} defaultValue="08/08/2025" />
                                <Calendar className="w-3 h-3 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" />
                             </div>
                             <div className={`${cellClass} w-[130px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[130px] bg-white`}><Input className={inputClass} defaultValue="1234567" /></div>
                             <div className={`${cellClass} w-[130px] bg-white`}><Input className={inputClass} defaultValue="123456" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="ACODE" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="858.5" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="KGS" /></SelectTrigger><SelectContent><SelectItem value="kgs">KGS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>

                         {/* Item 1/2 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1 / 2" /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="12354334" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1234567" /></div>
                             <div className={`${cellClass} w-[130px] bg-white relative`}>
                                <Input className={`${inputClass} pr-8`} defaultValue="08/08/2025" />
                                <Calendar className="w-3 h-3 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" />
                             </div>
                             <div className={`${cellClass} w-[130px] bg-white`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[130px] bg-white`}><Input className={inputClass} defaultValue="1234567" /></div>
                             <div className={`${cellClass} w-[130px] bg-white`}><Input className={inputClass} defaultValue="123456" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="ACODE" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="858.5" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="KGS" /></SelectTrigger><SelectContent><SelectItem value="kgs">KGS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 overflow-hidden">
                     <div className="w-[40px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">2</div>
                     <div className="w-[80px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[150px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[150px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[130px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[130px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[130px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[130px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">1080.50</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const DepbSection = () => (
    <GenericTableSection title="DEPB">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <IndianRupee className="w-4 h-4 text-[#3874FF]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">DEPB</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[100px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Inv/It.Sr.No</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Group Code</div>
                         <div className={`${cellClass} ${headerClass} w-[200px]`}>Item Code</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Quantity</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1/1" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="KKM" /></div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={inputClass} defaultValue="STEELBOLD" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="44" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 overflow-hidden">
                     <div className="w-[40px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">1</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const DepbParentSection = () => (
    <GenericTableSection title="DEPB Parent">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <FileText className="w-4 h-4 text-[#10B981]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">DEPB Parent</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[80px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Sub It. SNo</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Group Code</div>
                         <div className={`${cellClass} ${headerClass} w-[200px]`}>Item Code</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>Quantity</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>UQC</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Quantity Percentage</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Item 1/1 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1 / 1" /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="GR008" /></div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={inputClass} defaultValue="Item008800" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="218.5" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="MTS" /></SelectTrigger><SelectContent><SelectItem value="mts">MTS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="65" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>

                         {/* Item 1/2 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1 / 2" /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="GR008" /></div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={inputClass} defaultValue="Item008800" /></div>
                             <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="218.5" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="MTS" /></SelectTrigger><SelectContent><SelectItem value="mts">MTS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="88" /></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 overflow-hidden">
                     <div className="w-[40px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">2</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const ItemManufacturerSection = () => (
    <GenericFormSection title="Item Manufacturer">
        <InvoiceSeparator {...defaultInvoiceProps} />
        <div className="flex flex-col w-full">
            <FormRow>
                <FormField label="Name">
                    <div className="relative w-full h-full">
                        <Input className={inputClass} placeholder="Name" />
                        <LayoutGrid className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                </FormField>
                <FormField label="Code type">
                    <Input className={inputClass} placeholder="Code type" />
                </FormField>
            </FormRow>
            <FormRow>
                <FormField label="Code">
                    <Input className={inputClass} placeholder="Code" />
                </FormField>
                <FormField label="Address 1">
                    <Input className={inputClass} placeholder="Address 1" />
                </FormField>
            </FormRow>
        </div>
    </GenericFormSection>
);

export const DeecSection = () => (
    <GenericTableSection title="DEEC">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <Award className="w-4 h-4 text-[#A855F7]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">DEEC</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[80px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Sub It. SNo</div>
                         <div className={`${cellClass} ${headerClass} w-[200px]`}>License Registration No. <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Registration Date</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Item Sr.No in Part E <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Export Qty <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>UOM</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Item 1/1 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1 / 1" /></div>
                         <div className="flex flex-col w-full border-b border-[#d0d5e3]">
                             <div className="flex min-w-max">
                                 <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                                 <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                                 <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                                 <div className={`${cellClass} w-[200px] bg-white`}><Input className={inputClass} defaultValue="32732321" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white relative`}>
                                     <Input className={`${inputClass} pr-8`} defaultValue="08/08/2025" />
                                     <Calendar className="w-3 h-3 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" />
                                 </div>
                                 <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="01" /></SelectTrigger><SelectContent><SelectItem value="01">01</SelectItem></SelectContent></Select></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="88.88" /></div>
                                 <div className={`${cellClass} w-[100px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="MTS" /></SelectTrigger><SelectContent><SelectItem value="mts">MTS</SelectItem></SelectContent></Select></div>
                                 <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                             </div>
                             {/* Nested Table */}
                             <div className="flex flex-col w-full bg-[#F8FAFC] p-2 border-t border-[#d0d5e3] sticky left-0 z-0 pl-[50px]">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-xs font-bold text-gray-700">Total : 10</div>
                                    <div className="bg-[#3874FF] text-white text-[10px] px-2 py-1 rounded cursor-pointer font-medium">Add Item</div>
                                </div>
                                <div className="border border-[#d0d5e3] rounded-sm overflow-hidden bg-white">
                                    <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                                        <div className="w-[30px] p-2 flex items-center justify-center border-r border-[#d0d5e3]"><Checkbox className="w-3 h-3" /></div>
                                        <div className="w-[40px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">S.No</div>
                                        <div className="w-[150px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">License Registration No.</div>
                                        <div className="w-[150px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Item S. No in Part C</div>
                                        <div className="w-[200px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Description</div>
                                        <div className="w-[100px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Import Qty</div>
                                        <div className="w-[120px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">UOM</div>
                                        <div className="w-[150px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Whether Indigenous or Imported</div>
                                        <div className="w-[30px] p-2 border-l border-[#d0d5e3]" />
                                    </div>
                                    {[1,2,3,4,5].map((i) => (
                                        <div key={i} className="flex min-w-max border-b border-[#d0d5e3] last:border-0">
                                            <div className="w-[30px] p-1 flex items-center justify-center border-r border-[#d0d5e3]"><Checkbox className="w-3 h-3" /></div>
                                            <div className="w-[40px] p-1 text-[11px] border-r border-[#d0d5e3] font-medium">{i}</div>
                                            <div className="w-[150px] p-0 border-r border-[#d0d5e3]"><Select><SelectTrigger className="h-[24px] border-none text-[11px] focus:ring-0 shadow-none"><SelectValue placeholder="65435654" /></SelectTrigger><SelectContent><SelectItem value="val">65435654</SelectItem></SelectContent></Select></div>
                                            <div className="w-[150px] p-1 text-[11px] border-r border-[#d0d5e3]">{i % 2 === 0 ? 1 : 2}</div>
                                            <div className="w-[200px] p-1 text-[11px] border-r border-[#d0d5e3]">Delivery against Acceptance</div>
                                            <div className="w-[100px] p-1 text-[11px] border-r border-[#d0d5e3]">{88 + i}</div>
                                            <div className="w-[120px] p-1 text-[11px] border-r border-[#d0d5e3]">{i % 2 === 0 ? "M - Imported" : "N - Indigenous"}</div>
                                            <div className="w-[150px] p-0 border-r border-[#d0d5e3]"><Select><SelectTrigger className="h-[24px] border-none text-[11px] focus:ring-0 shadow-none"><SelectValue placeholder={i % 2 === 0 ? "M - Imported" : "N - Indigenous"} /></SelectTrigger><SelectContent><SelectItem value="val">Option</SelectItem></SelectContent></Select></div>
                                            <div className="w-[30px] p-1 flex items-center justify-center border-l border-[#d0d5e3]"><MoreVertical className="w-3 h-3 text-gray-400" /></div>
                                        </div>
                                    ))}
                                </div>
                             </div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>

                         {/* Item 1/2 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1 / 2" /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={`${inputClass} border-red-500`} defaultValue="32732321" /></div>
                             <div className={`${cellClass} w-[150px] bg-white relative`}>
                                 <Input className={`${inputClass} pr-8`} defaultValue="08/08/2025" />
                                 <Calendar className="w-3 h-3 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" />
                             </div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0 text-red-500"><SelectValue placeholder="02" /></SelectTrigger><SelectContent><SelectItem value="02">02</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={`${inputClass} border-red-500`} defaultValue="88.88" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="MTS" /></SelectTrigger><SelectContent><SelectItem value="mts">MTS</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>

                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 overflow-hidden">
                     <div className="w-[40px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">2</div>
                     <div className="w-[80px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[200px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[150px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[150px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[150px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">108.80</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const DfiaSection = () => (
    <GenericTableSection title="DFIA">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <FileText className="w-4 h-4 text-[#3B82F6]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">DFIA</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[80px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Sub It. SNo</div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>License No. <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>License Date <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>File No <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>It. SNo(Pt E) <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>Export Qty <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>UOM <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Item 1/1 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1 / 1" /></div>
                         <div className="flex flex-col w-full border-b border-[#d0d5e3]">
                             <div className="flex min-w-max">
                                 <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                                 <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                                 <div className={`${cellClass} w-[80px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="8765444" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white relative`}>
                                     <Input className={`${inputClass} pr-8`} defaultValue="14/10/2025" />
                                     <Calendar className="w-3 h-3 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" />
                                 </div>
                                 <div className={`${cellClass} w-[150px] bg-white relative`}>
                                     <Input className={`${inputClass} pr-8`} defaultValue="6543" />
                                     <Calendar className="w-3 h-3 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" />
                                 </div>
                                 <div className={`${cellClass} w-[150px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="1" /></SelectTrigger><SelectContent><SelectItem value="1">1</SelectItem></SelectContent></Select></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="54" /></div>
                                 <div className={`${cellClass} w-[100px] bg-white`}><Input className={inputClass} defaultValue="KGS" /></div>
                                 <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                             </div>
                             {/* Nested Table */}
                             <div className="flex flex-col w-full bg-[#F8FAFC] p-2 border-t border-[#d0d5e3] sticky left-0 z-0 pl-[50px]">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-xs font-bold text-gray-700">Total Import Items: 01</div>
                                    <div className="bg-[#3874FF] text-white text-[10px] px-2 py-1 rounded cursor-pointer font-medium">Add Item</div>
                                </div>
                                <div className="border border-[#d0d5e3] rounded-sm overflow-hidden bg-white">
                                    <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                                        <div className="w-[30px] p-2 flex items-center justify-center border-r border-[#d0d5e3]"><Checkbox className="w-3 h-3" /></div>
                                        <div className="w-[40px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">S.No.</div>
                                        <div className="w-[120px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">License No.</div>
                                        <div className="w-[120px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">SION Group Code</div>
                                        <div className="w-[100px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">SION Sr. NO</div>
                                        <div className="w-[120px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">SION IO Norm Sr No</div>
                                        <div className="w-[120px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Item Sr.No in Part C</div>
                                        <div className="w-[100px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Import Qty</div>
                                        <div className="w-[100px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Import UOM</div>
                                        <div className="w-[150px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Item Description</div>
                                        <div className="w-[150px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Technical Characteristics</div>
                                        <div className="w-[150px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Whether Indigenous or Imported</div>
                                        <div className="w-[30px] p-2 border-l border-[#d0d5e3]" />
                                    </div>
                                    {[1,2,3].map((i) => (
                                        <div key={i} className="flex min-w-max border-b border-[#d0d5e3] last:border-0">
                                            <div className="w-[30px] p-1 flex items-center justify-center border-r border-[#d0d5e3]"><Checkbox className="w-3 h-3" /></div>
                                            <div className="w-[40px] p-1 text-[11px] border-r border-[#d0d5e3] font-medium">{i}</div>
                                            <div className="w-[120px] p-0 border-r border-[#d0d5e3]"><Select><SelectTrigger className="h-[24px] border-none text-[11px]"><SelectValue placeholder={i===1?"65432345": i===2?"8765476":"9876567"} /></SelectTrigger><SelectContent><SelectItem value="val">val</SelectItem></SelectContent></Select></div>
                                            <div className="w-[120px] p-1 text-[11px] border-r border-[#d0d5e3]">122324</div>
                                            <div className="w-[100px] p-1 text-[11px] border-r border-[#d0d5e3]">{i}</div>
                                            <div className="w-[120px] p-1 text-[11px] border-r border-[#d0d5e3]">{i===2?2:1}</div>
                                            <div className="w-[120px] p-1 text-[11px] border-r border-[#d0d5e3]">1</div>
                                            <div className="w-[100px] p-1 text-[11px] border-r border-[#d0d5e3]">{i===1?12: i===2?344:44}</div>
                                            <div className="w-[100px] p-1 text-[11px] border-r border-[#d0d5e3]">KGS</div>
                                            <div className="w-[150px] p-1 text-[11px] border-r border-[#d0d5e3]">STUD 1-1/4" X 6-1/2" LONG</div>
                                            <div className="w-[150px] p-1 text-[11px] border-r border-[#d0d5e3]">CARTRIDGE-REVERSE LOCK</div>
                                            <div className="w-[150px] p-1 text-[11px] border-r border-[#d0d5e3]">Imported</div>
                                            <div className="w-[30px] p-1 flex items-center justify-center border-l border-[#d0d5e3]"><MoreVertical className="w-3 h-3 text-gray-400" /></div>
                                        </div>
                                    ))}
                                </div>
                             </div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 overflow-hidden">
                     <div className="w-[40px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">1</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const EpcgSection = () => (
    <GenericTableSection title="EPCG">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <Award className="w-4 h-4 text-[#10B981]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">EPCG License</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[100px] sticky left-[90px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>Sub It. SNo</div>
                         <div className={`${cellClass} ${headerClass} w-[220px]`}>License Registration No <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[140px]`}>Reg. Date</div>
                         <div className={`${cellClass} ${headerClass} w-[140px]`}>It. SNo(Pt. E) <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[140px]`}>Export Qty <span className="text-red-500">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>UOM</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1. 98675645646453545" /></div>
                         
                         {/* Item 1/1 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1/1" /></div>
                         <div className="flex flex-col w-full border-b border-[#d0d5e3]">
                             <div className="flex min-w-max">
                                 <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                                 <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                                 <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                                 <div className={`${cellClass} w-[220px] bg-white`}>
                                     <div className="relative w-full h-full"><Input className={`${inputClass} pr-6`} defaultValue="121212" /><LayoutGrid className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" /></div>
                                 </div>
                                 <div className={`${cellClass} w-[140px] bg-white`}>
                                     <div className="relative w-full h-full"><Input className={`${inputClass} pr-6`} defaultValue="08/08/2025" /><Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" /></div>
                                 </div>
                                 <div className={`${cellClass} w-[140px] bg-white p-0`}>
                                     <Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="01" /></SelectTrigger><SelectContent><SelectItem value="01">01</SelectItem></SelectContent></Select>
                                 </div>
                                 <div className={`${cellClass} w-[140px] bg-white`}><Input className={inputClass} defaultValue="88.08" /></div>
                                 <div className={`${cellClass} w-[100px] bg-white p-0`}>
                                     <Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="KGS" /></SelectTrigger><SelectContent><SelectItem value="kgs">KGS</SelectItem></SelectContent></Select>
                                 </div>
                                 <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                             </div>
                             
                             {/* Nested Table Section for Item 1/1 */}
                             <div className="flex flex-col w-full bg-[#F8FAFC] p-2 border-t border-[#d0d5e3] sticky left-0 z-0 pl-[50px]">
                                 <div className="flex items-center justify-between mb-2">
                                     <div className="text-xs font-bold text-gray-700">Total Import Items: 00</div>
                                     <div className="bg-[#3874FF] text-white text-[10px] px-2 py-1 rounded cursor-pointer font-medium">Add Item</div>
                                 </div>
                                 <div className="border border-[#d0d5e3] rounded-sm overflow-hidden bg-white">
                                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                                         <div className="w-[30px] p-2 flex items-center justify-center border-r border-[#d0d5e3]"><Checkbox className="w-3 h-3" /></div>
                                         <div className="w-[40px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">S.No</div>
                                         <div className="w-[180px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">License Registration No.</div>
                                         <div className="w-[140px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Item Sr.No in Part C</div>
                                         <div className="w-[200px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Description</div>
                                         <div className="w-[100px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Import Qty</div>
                                         <div className="w-[80px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">UOM</div>
                                         <div className="w-[200px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Whether Indigenous or Imported</div>
                                         <div className="w-[30px] p-2 border-l border-[#d0d5e3]" />
                                     </div>
                                     <div className="p-4 text-center text-xs text-gray-500">No items added</div>
                                 </div>
                             </div>
                         </div>

                         {/* Item 1/2 */}
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} text="1/2" /></div>
                         <div className="flex flex-col w-full border-b border-[#d0d5e3]">
                             <div className="flex min-w-max">
                                 <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                                 <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                                 <div className={`${cellClass} w-[100px] bg-white sticky left-[90px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="2" /></div>
                                 <div className={`${cellClass} w-[220px] bg-white`}>
                                     <div className="relative w-full h-full"><Input className={`${inputClass} pr-6`} defaultValue="121212" /><LayoutGrid className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" /></div>
                                 </div>
                                 <div className={`${cellClass} w-[140px] bg-white`}>
                                     <div className="relative w-full h-full"><Input className={`${inputClass} pr-6`} defaultValue="08/08/2025" /><Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" /></div>
                                 </div>
                                 <div className={`${cellClass} w-[140px] bg-white p-0`}>
                                     <Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="02" /></SelectTrigger><SelectContent><SelectItem value="02">02</SelectItem></SelectContent></Select>
                                 </div>
                                 <div className={`${cellClass} w-[140px] bg-white`}><Input className={inputClass} defaultValue="88.08" /></div>
                                 <div className={`${cellClass} w-[100px] bg-white p-0`}>
                                     <Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="KGS" /></SelectTrigger><SelectContent><SelectItem value="kgs">KGS</SelectItem></SelectContent></Select>
                                 </div>
                                 <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                             </div>
                             
                             {/* Nested Table Section */}
                             <div className="flex flex-col w-full bg-[#F8FAFC] p-2 border-t border-[#d0d5e3] sticky left-0 z-0 pl-[50px]">
                                 <div className="flex items-center justify-between mb-2">
                                     <div className="text-xs font-bold text-gray-700">Total Import Items: 05</div>
                                     <div className="bg-[#3874FF] text-white text-[10px] px-2 py-1 rounded cursor-pointer font-medium">Add Item</div>
                                 </div>
                                 <div className="border border-[#d0d5e3] rounded-sm overflow-hidden bg-white">
                                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                                         <div className="w-[30px] p-2 flex items-center justify-center border-r border-[#d0d5e3]"><Checkbox className="w-3 h-3" /></div>
                                         <div className="w-[40px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">S.No</div>
                                         <div className="w-[180px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">License Registration No.</div>
                                         <div className="w-[140px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Item Sr.No in Part C</div>
                                         <div className="w-[200px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Description</div>
                                         <div className="w-[100px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Import Qty</div>
                                         <div className="w-[80px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">UOM</div>
                                         <div className="w-[200px] p-2 text-[11px] font-semibold border-r border-[#d0d5e3]">Whether Indigenous or Imported</div>
                                         <div className="w-[30px] p-2 border-l border-[#d0d5e3]" />
                                     </div>
                                     {[1, 2, 3, 4].map((i) => (
                                         <div key={i} className="flex min-w-max border-b border-[#d0d5e3] last:border-0">
                                              <div className="w-[30px] p-1 flex items-center justify-center border-r border-[#d0d5e3]"><Checkbox className="w-3 h-3" /></div>
                                              <div className="w-[40px] p-1 text-[11px] border-r border-[#d0d5e3] font-medium">{i}</div>
                                              <div className="w-[180px] p-0 border-r border-[#d0d5e3]"><Input className={`${inputClass} !text-[11px] h-6`} defaultValue="23242323443" /></div>
                                              <div className="w-[140px] p-0 border-r border-[#d0d5e3]"><Input className={`${inputClass} !text-[11px] h-6`} defaultValue={i+1} /></div>
                                              <div className="w-[200px] p-0 border-r border-[#d0d5e3]"><Input className={`${inputClass} !text-[11px] h-6`} defaultValue="Cell Name" /></div>
                                              <div className="w-[100px] p-0 border-r border-[#d0d5e3]"><Input className={`${inputClass} !text-[11px] h-6`} defaultValue="88.8" /></div>
                                              <div className="w-[80px] p-0 border-r border-[#d0d5e3]"><Select><SelectTrigger className="h-6 border-none text-[11px] shadow-none"><SelectValue placeholder="KGS" /></SelectTrigger><SelectContent><SelectItem value="kgs">KGS</SelectItem></SelectContent></Select></div>
                                              <div className="w-[200px] p-0 border-r border-[#d0d5e3]"><Select><SelectTrigger className="h-6 border-none text-[11px] shadow-none"><SelectValue placeholder={i%2===0 ? "M - Imported" : "N-Indigenous"} /></SelectTrigger><SelectContent><SelectItem value="imp">M - Imported</SelectItem><SelectItem value="ind">N-Indigenous</SelectItem></SelectContent></Select></div>
                                              <div className="w-[30px] p-1 flex items-center justify-center border-l border-[#d0d5e3]"><MoreVertical className="w-3 h-3 text-gray-400" /></div>
                                         </div>
                                     ))}
                                 </div>
                             </div>
                         </div>
                         
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20 overflow-hidden">
                     <div className="w-[40px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold shrink-0">2</div>
                     <div className="w-[100px] border-r border-[#d0d5e3] shrink-0" />
                     <div className="flex-1 text-center flex items-center justify-center font-bold text-[13px] text-[#050e25]">1080.05</div>
                 </div>
             </div>
        </div>
    </GenericTableSection>
);

export const ReexportSection = () => (
    <GenericTableSection title="Reexport">
        <div className="flex flex-col w-full h-full p-[12px]">
             <div className="flex items-center justify-center px-3 h-[34px] shrink-0 bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                 <div className="flex items-center gap-2">
                     <Box className="w-4 h-4 text-[#F97316]" />
                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Reexport</span>
                 </div>
             </div>
             <div className="flex flex-col w-full flex-1 min-h-0 border border-[#d0d5e3] bg-white relative">
                 <div className="flex flex-col w-full flex-1 overflow-auto">
                     <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 sticky top-0 z-20">
                         <div className={`${cellClass} ${headerClass} w-[40px] justify-center sticky left-0 z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                         <div className={`${cellClass} ${headerClass} w-[50px] sticky left-[40px] z-30 bg-[#EBEEF7] border-r border-[#d0d5e3]`}>S.No</div>
                         <div className={`${cellClass} ${headerClass} w-[80px]`}>Sub It. SNo</div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>Manual BE</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>BE Site <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>BE No. <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>BE Date <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>BE Invoice Serial No <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>BE Item Serial No <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>BE Quantity Utilized <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[200px]`}>BE Item Description <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>BE Quantity <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[100px]`}>BE UQC <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>BE Assessable Value (Rs) <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>BE Duty Paid <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[150px]`}>BE Duty Payment Date <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[200px]`}>BE Other Identifiable Parameter <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>BE Assessable Value Claim <span className="text-red-500 ml-1">*</span></div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>BE Item Used</div>
                         <div className={`${cellClass} ${headerClass} w-[180px]`}>Commissioner Permission</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Input Credit</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Personal Used</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Modvat Availed</div>
                         <div className={`${cellClass} ${headerClass} w-[120px]`}>Modvat Repaid</div>
                         <div className={`${cellClass} ${headerClass} w-[40px] sticky right-0 z-30 bg-[#EBEEF7] border-l border-[#d0d5e3]`} />
                     </div>
                     <div className="flex flex-col min-w-max">
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="1" /></div>
                         <div className="sticky left-0 z-10 w-full bg-white"><ItemSeparator {...defaultItemProps} /></div>
                         <div className="flex min-w-max border-b border-[#d0d5e3]">
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                             <div className={`${cellClass} w-[50px] bg-white sticky left-[40px] z-10 border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[80px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}>
                                 <Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Yes" /></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select>
                             </div>
                             <div className={`${cellClass} w-[120px] bg-white p-0`}>
                                <Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="BADDI - Allwag" /></SelectTrigger><SelectContent><SelectItem value="baddi">BADDI - Allwag</SelectItem></SelectContent></Select>
                             </div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="1234543" /></div>
                             <div className={`${cellClass} w-[120px] bg-white relative`}>
                                 <Input className={`${inputClass} pr-8`} defaultValue="04/04/2025" />
                                 <Calendar className="w-3 h-3 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" />
                             </div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="2" /></div>
                             <div className={`${cellClass} w-[150px] bg-white p-0`}>
                                 <Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Yes" /></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select>
                             </div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={inputClass} defaultValue="Screw parts" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="66" /></div>
                             <div className={`${cellClass} w-[100px] bg-white p-0`}>
                                  <Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="BAG" /></SelectTrigger><SelectContent><SelectItem value="bag">BAG</SelectItem></SelectContent></Select>
                             </div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={inputClass} defaultValue="7654.34" /></div>
                             <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="7654" /></div>
                             <div className={`${cellClass} w-[150px] bg-white relative`}>
                                 <Input className={`${inputClass} pr-8`} defaultValue="06/06/2025" />
                                 <Calendar className="w-3 h-3 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" />
                             </div>
                             <div className={`${cellClass} w-[200px] bg-white`}><Input className={inputClass} defaultValue="12345643" /></div>
                             <div className={`${cellClass} w-[180px] bg-white`}><Input className={inputClass} defaultValue="7654.34" /></div>
                             <div className={`${cellClass} w-[120px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Yes" /></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[180px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Yes" /></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[120px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Yes" /></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[120px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Yes" /></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[120px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Yes" /></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[120px] bg-white p-0`}><Select><SelectTrigger className="w-full h-full border-none shadow-none rounded-none focus:ring-0"><SelectValue placeholder="Yes" /></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select></div>
                             <div className={`${cellClass} w-[40px] justify-center bg-white sticky right-0 z-10 border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                         <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1 shrink-0 border-b border-[#d0d5e3] sticky left-0 z-10">
                             <Plus className="w-3 h-3" /> Add
                         </div>
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="2" isCollapsed={true} /></div>
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="3" isCollapsed={true} /></div>
                         <div className="sticky left-0 z-10 w-full bg-white"><InvoiceSeparator {...defaultInvoiceProps} invoiceNumber="4" isCollapsed={true} /></div>
                     </div>
                 </div>
                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px] shrink-0 z-20">
                     <div className="w-[40px] border-r border-[#d0d5e3]" />
                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold">2</div>
                     <div className="flex-1" />
                 </div>
             </div>
        </div>
    </GenericTableSection>
);
