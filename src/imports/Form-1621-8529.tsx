import React, { useState, useEffect } from 'react';
import { SectionHeader, FormRow, FormField, FigmaSwitch, EmptyField } from '../components/FigmaForm';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Calendar, Sun, Factory, AppWindow, Trash2, Plus, MoreVertical, FileText, ClipboardList, ScrollText, FolderOpen, ChevronDown, ChevronRight, Loader2, X, Lock, LayoutGrid, Database, Award, Briefcase, Box, Calculator } from 'lucide-react';
import InvoiceDropdown from '../components/figma/InvoiceDropdown';
import ItemDropdown from '../components/figma/ItemDropdown';
import BondDetails from './BondDetails';

const inputClass = "w-full h-full !border-none !outline-none rounded-none bg-transparent px-2 text-[14px] font-medium text-[#050e25] placeholder:text-[#9497a1] transition-none focus:!ring-1 focus:!ring-[#3874FF] focus:!ring-inset focus:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] focus-visible:!ring-1 focus-visible:!ring-[#3874FF] focus-visible:!ring-inset focus-visible:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] hover:ring-1 hover:ring-[#3874FF] hover:ring-inset data-[state=open]:!ring-1 data-[state=open]:!ring-[#3874FF] data-[state=open]:!ring-inset data-[state=open]:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)] hover:ring-1 hover:ring-[#3874FF] hover:ring-inset data-[state=open]:!ring-1 data-[state=open]:!ring-[#3874FF] data-[state=open]:!ring-inset data-[state=open]:!shadow-[0_2px_12px_0_rgba(113,144,214,0.47)]";
const dividerClass = "w-[1px] bg-[#d0d5e3] shrink-0";
const cellClass = "border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid relative flex items-center shrink-0 min-h-[32px]";
const headerClass = "bg-[#EBEEF7] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px] px-2";
const dataClass = "bg-white text-[#050e25] text-[13px] px-2";
const checkboxClass = "w-[18px] h-[18px] border-gray-400 data-[state=checked]:bg-black data-[state=checked]:text-white";

import { AddDutiesPopover } from '../components/figma/AddDutiesPopover';
import SupportingDocumentsTable from '../components/SupportingDocumentsTable';
import StatementsTable from '../components/StatementsTable';

const MASTER_TABLE_DATA = [
  { name: "Basic Customs Duty (BCD)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "0", dutyAmount: "34" },
  { name: "Aggregate Duty", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "SAPTA", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Customs Agri & Infrastructure Dev Cess", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Anti Dumping", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Tariff Value", stdRate: "66%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Additional Duty Notification", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
];

const MASTER_SECONDARY_DATA = [
  { name: "Social Welfare Chargres", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "0", dutyAmount: "34" },
  { name: "Safeguard Duty", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Counter Vailing Duty", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Additional Counter Vailing Duty", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Customs Health Cess(SBE Duty)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "0", dutyAmount: "34" },
  { name: "Customs Education Cess", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "+Edu Cess", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "National Calamity Contingent Duty (NCCD)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "515.86", dutyAmount: "34" },
];

const MASTER_EXCISE_DATA = [
  { name: "Additional Duty (Excise)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Additional Duty of Excise (GSI)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "515.86", dutyAmount: "34" },
  { name: "Special Excise Duty (Schedule II)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "515.86", dutyAmount: "34" },
  { name: "Additional Duty of Excise (TTA)", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "515.86", dutyAmount: "34" },
  { name: "S & HS EDU cess Notification", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "CVD (sub section 5) Notification", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Excise Health Cess Notification", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Excise cess Notification", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Excise Agri Infra Cess Notification", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "Infrastructure Cess Notification", stdRate: "2%", ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
];

const MASTER_GST_DATA = [
  { name: "IGST Value", rates: ["2%", "2%", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "IGST Exemption", rates: ["", "", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "IGST Levy", rates: ["", "", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "IGST Compensation Cess Levy", rates: ["", "", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
  { name: "IGST Compensation Cess Exemption", rates: ["", "", "2%"], ntnNo: "Select", srNo: "Select", effRate: "-", dutyAmount: "34" },
];

const Section65Table = ({ isFullPage }: { isFullPage?: boolean }) => {
  const data = [
    { sNo: 1, gstInvNo: "8384384834", gstInvDt: "23/05/2025", desc: "Desc", qty: "24434342", uom: "KGS", hsn: "2342566", snoGst: "22" },
    { sNo: 2, gstInvNo: "8384384834", gstInvDt: "23/05/2025", desc: "Desc", qty: "24434342", uom: "KGS", hsn: "2342566", 11: "11" },
    { sNo: 3, gstInvNo: "8384384834", gstInvDt: "23/05/2025", desc: "Desc", qty: "24434342", uom: "KGS", hsn: "2342566", snoGst: "2" },
    { sNo: 4, gstInvNo: "8384384834", gstInvDt: "23/05/2025", desc: "Desc", qty: "24434342", uom: "KGS", hsn: "2342566", snoGst: "4" },
  ];

  if (!isFullPage) {
    // Standard view (when scrolling through all sections)
    return (
        <div className="flex flex-col w-full overflow-x-auto bg-[#CAD2E5]">
          <div className="flex w-full min-w-max">
            <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 justify-center`}>S.No</div>
            <div className={`${cellClass} ${headerClass} w-[150px] shrink-0`}>GST Inv. No.</div>
            <div className={`${cellClass} ${headerClass} w-[120px] shrink-0`}>GST Inv. dt.</div>
            <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px]`}>Description</div>
            <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 text-right justify-end`}>Quantity</div>
            <div className={`${cellClass} ${headerClass} w-[80px] shrink-0`}>UOM</div>
            <div className={`${cellClass} ${headerClass} w-[100px] shrink-0`}>HSN</div>
            <div className={`${cellClass} ${headerClass} w-[150px] shrink-0`}>SNo of GST Invoice</div>
            <div className={`${cellClass} ${headerClass} w-[40px] shrink-0`}></div>
          </div>
          {data.map((row, index) => (
            <div key={index} className="flex w-full min-w-max">
              <div className={`${cellClass} ${dataClass} w-[50px] shrink-0 justify-center`}>{row.sNo}</div>
              <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>{row.gstInvNo}</div>
              <div className={`${cellClass} ${dataClass} w-[120px] shrink-0`}>{row.gstInvDt}</div>
              <div className={`${cellClass} ${dataClass} flex-1 min-w-[200px]`}>{row.desc}</div>
              <div className={`${cellClass} ${dataClass} w-[120px] shrink-0 justify-end`}>{row.qty}</div>
              <div className={`${cellClass} ${dataClass} w-[80px] shrink-0`}>{row.uom}</div>
              <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>{row.hsn}</div>
              <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>{row.snoGst || (row as any)[11]}</div>
              <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                <MoreVertical className="w-4 h-4 text-[#626776]" />
              </div>
            </div>
          ))}
          <div className="w-full flex justify-start p-2 bg-white border-b border-[#d0d5e3]">
            <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                <Plus className="w-4 h-4" /> Add
            </button>
          </div>
          <div className="w-full flex justify-start p-2 bg-[#f1f4f8] border-b border-[#d0d5e3]">
             <span className="text-[13px] font-semibold">Total Items: {data.length}</span>
          </div>
        </div>
    );
  }

  // Full page view (flex column with internal scroll)
  return (
    <div className="flex flex-col w-full h-full bg-[#CAD2E5] overflow-hidden pb-3">
        {/* Header Row */}
        <div className="flex w-full shrink-0">
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 justify-center`}>S.No</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0`}>GST Inv. No.</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0`}>GST Inv. dt.</div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px]`}>Description</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 text-right justify-end`}>Quantity</div>
        <div className={`${cellClass} ${headerClass} w-[80px] shrink-0`}>UOM</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0`}>HSN</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0`}>SNo of GST Invoice</div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0`}></div>
        </div>

        {/* Data Rows - Scrollable Area */}
        <div className="flex-1 overflow-y-auto w-full bg-[rgb(255,255,255)]">
            {data.map((row, index) => (
            <div key={index} className="flex w-full">
                <div className={`${cellClass} ${dataClass} w-[50px] shrink-0 justify-center`}>{row.sNo}</div>
                <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>{row.gstInvNo}</div>
                <div className={`${cellClass} ${dataClass} w-[120px] shrink-0`}>{row.gstInvDt}</div>
                <div className={`${cellClass} ${dataClass} flex-1 min-w-[200px]`}>{row.desc}</div>
                <div className={`${cellClass} ${dataClass} w-[120px] shrink-0 justify-end`}>{row.qty}</div>
                <div className={`${cellClass} ${dataClass} w-[80px] shrink-0`}>{row.uom}</div>
                <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>{row.hsn}</div>
                <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>{row.snoGst || (row as any)[11]}</div>
                <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                <MoreVertical className="w-4 h-4 text-[#626776]" />
                </div>
            </div>
            ))}
            <div className="w-full flex justify-start p-2 bg-white border-t border-[#d0d5e3]">
                <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                    <Plus className="w-4 h-4" /> Add
                </button>
            </div>
        </div>

        <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
             <span className="text-[13px] font-semibold">Total Items: {data.length}</span>
        </div>
    </div>
  );
};

const SezBeTypeTable = ({ isFullPage }: { isFullPage?: boolean }) => {
  // Common Header
  const Header = () => (
     <div className="flex w-full shrink-0">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center`}>
            <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0`}>S.No</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0`}>Sub It. SNo</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0`}>Z BE No.</div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0`}>Z BE date</div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px]`}>Z BE Filed Location</div>
     </div>
  );

  const renderContent = () => (
    <div className="flex flex-col w-full min-w-max">
        {/* Row 1 */}
        <div className="flex w-full">
            <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
            </div>
                <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                <Checkbox className={checkboxClass} />
            </div>
            <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>1</div>
            <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>1</div>
            <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>83929392323</div>
            <div className={`${cellClass} ${dataClass} w-[150px] shrink-0 items-center gap-2`}><LayoutGrid className="w-4 h-4 text-[#626776]" /> 22/04/2042</div>
            <div className={`${cellClass} ${dataClass} flex-1 min-w-[200px] flex items-center justify-between`}>
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-[#626776]" /> Chennai</span>
                <MoreVertical className="w-4 h-4 text-[#626776]" />
            </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-full">
            <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                <button><ChevronRight className="w-4 h-4 text-[#626776]" /></button>
            </div>
                <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                <Checkbox className={checkboxClass} />
            </div>
            <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>2</div>
            <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>2</div>
            <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>83929392323</div>
            <div className={`${cellClass} ${dataClass} w-[150px] shrink-0 items-center gap-2`}><LayoutGrid className="w-4 h-4 text-[#626776]" /> 22/04/2042</div>
            <div className={`${cellClass} ${dataClass} flex-1 min-w-[200px] flex items-center justify-between`}>
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-[#626776]" /> Chennai</span>
                <MoreVertical className="w-4 h-4 text-[#626776]" />
            </div>
        </div>

        {/* Nested Table (Total Import Items) */}
        <div className="flex flex-col w-full pl-[40px] py-2 bg-[#F1F4F8] border-b border-[#d0d5e3]">
            <p className="text-[13px] font-bold text-[#050E25] mb-2 px-2">Total Import Items: 5</p>
            <div className="w-full border border-[#d0d5e3] bg-white">
                {/* Header */}
                <div className="flex w-full bg-[#EBEEF7] border-b border-[#d0d5e3]">
                        <div className="w-[40px] h-[32px] flex items-center justify-center border-r border-[#d0d5e3] shrink-0">
                            <Checkbox className={checkboxClass} />
                        </div>
                        <div className="w-[50px] h-[32px] flex items-center px-2 text-[12px] font-semibold text-[#050e25] border-r border-[#d0d5e3] shrink-0">S.No</div>
                        <div className="w-[100px] h-[32px] flex items-center px-2 text-[12px] font-semibold text-[#050e25] border-r border-[#d0d5e3] shrink-0">Invoice Sr.No</div>
                        <div className="w-[100px] h-[32px] flex items-center px-2 text-[12px] font-semibold text-[#050e25] border-r border-[#d0d5e3] shrink-0">Item Sr.No</div>
                        <div className="w-[150px] h-[32px] flex items-center px-2 text-[12px] font-semibold text-[#050e25] border-r border-[#d0d5e3] shrink-0">Quantity</div>
                        <div className="flex-1 h-[32px] flex items-center px-2 text-[12px] font-semibold text-[#050e25]">Unit QuantityCode</div>
                </div>
                {/* Rows */}
                {[1,2,3,4,5].map((n) => (
                        <div key={n} className="flex w-full border-b border-[#d0d5e3] last:border-0">
                        <div className="w-[40px] h-[32px] flex items-center justify-center border-r border-[#d0d5e3] shrink-0">
                            <Checkbox className={checkboxClass} />
                        </div>
                        <div className="w-[50px] h-[32px] flex items-center px-2 text-[12px] text-[#050e25] border-r border-[#d0d5e3] shrink-0">{n}</div>
                        <div className="w-[100px] h-[32px] flex items-center px-2 text-[12px] text-[#050e25] border-r border-[#d0d5e3] shrink-0">{n}</div>
                        <div className="w-[100px] h-[32px] flex items-center px-2 text-[12px] text-[#050e25] border-r border-[#d0d5e3] shrink-0">1</div>
                        <div className="w-[150px] h-[32px] flex items-center px-2 text-[12px] text-[#050e25] border-r border-[#d0d5e3] shrink-0 flex justify-between">
                            <span>29929492</span>
                            {n === 4 && <span className="w-2 h-2 rounded-full border border-[#D12953]" />}
                        </div>
                        <div className="flex-1 h-[32px] flex items-center px-2 text-[12px] text-[#050e25] justify-between">
                            KGS
                            <MoreVertical className="w-4 h-4 text-[#626776]" />
                        </div>


                    </div>
                ))}
            </div>
        </div>

        {/* Row 3 (was in Inv 2) */}
        <div className="flex w-full">
            <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
            </div>
                <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                <Checkbox className={checkboxClass} />
            </div>
            <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>3</div>
            <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>1</div>
            <div className={`${cellClass} ${dataClass} w-[150px] shrink-0`}>Cell 83929392323</div>
            <div className={`${cellClass} ${dataClass} w-[150px] shrink-0 items-center gap-2`}><LayoutGrid className="w-4 h-4 text-[#626776]" /> 22/04/2042</div>
            <div className={`${cellClass} ${dataClass} flex-1 min-w-[200px] flex items-center justify-between`}>
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-[#626776]" /> Chennai</span>
                <MoreVertical className="w-4 h-4 text-[#626776]" />
            </div>
        </div>
        <div className="w-full flex justify-start p-2 bg-white border-t border-[#d0d5e3]">
            <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                <Plus className="w-4 h-4" /> Add
            </button>
        </div>
    </div>
  );

  return (
    <div className={`flex flex-col w-full bg-[#CAD2E5] ${isFullPage ? 'h-full overflow-hidden pb-3' : 'overflow-x-auto'}`}>
         {isFullPage ? (
            <>
                <Header />
                <div className="flex-1 overflow-y-auto w-full bg-[rgb(255,255,255)]">
                    {renderContent()}
                </div>
                <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                    <span className="text-[13px] font-semibold">Total Items: 3</span>
                </div>
            </>
         ) : (
            <>
               <Header />
               <div className="bg-white">
                 {renderContent()}
                 <div className="w-full flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                    <span className="text-[13px] font-semibold">Total Items: 3</span>
                </div>
               </div>
            </>
         )}
    </div>
  );
};

const LicenseTable = ({ isFullPage }: { isFullPage?: boolean }) => {
  // Form Section Component
  const FormSection = () => (
     <div className="flex flex-col w-full bg-white border-b border-[#d0d5e3] shrink-0 mb-[12px]">
          <FormRow>
              <FormField label="Scheme Code">
                 <Select>
                  <SelectTrigger className={inputClass}>
                    <SelectValue placeholder="Select Scheme Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scheme1">Scheme 1</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField label="Ntn No./Sr.No">
                 <div className="flex w-full h-full">
                    <Input className={`${inputClass} flex-1`} placeholder="Enter No" />
                    <div className={dividerClass} />
                    <Input className={`${inputClass} flex-1`} placeholder="Placeholder" />
                </div>
              </FormField>
          </FormRow>
          <FormRow>
              <FormField label="Policy Para & Year">
                 <div className="flex w-full h-full">
                    <Input className={`${inputClass} flex-1`} placeholder="Placeholder" />
                    <div className={dividerClass} />
                    <Input className={`${inputClass} flex-1`} placeholder="Placeholder" />
                </div>
              </FormField>
              <FormField label="Debit Val & Duty">
                 <div className="flex w-full h-full">
                    <Input className={`${inputClass} flex-1`} placeholder="Debit Value" />
                    <div className={dividerClass} />
                    <Input className={`${inputClass} flex-1`} placeholder="Debit Duty" />
                </div>
              </FormField>
          </FormRow>
          <FormRow>
              <FormField label="Total Debit Qty">
                    <Input className={inputClass} placeholder="Total Debit Qty" />
              </FormField>
              <FormField label="UOM">
                    <Input className={inputClass} placeholder="UOM" />
              </FormField>
          </FormRow>
     </div>
  );

  const Header = () => (
     <div className="flex w-full shrink-0 h-[32px] items-center bg-[#EBEEF7] border-b border-[#d0d5e3]">
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}></div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 justify-center !border-0 bg-transparent`}>
             <Checkbox className={checkboxClass} />
        </div>
        <div className={`${cellClass} ${headerClass} w-[50px] shrink-0 !border-0 bg-transparent`}>S.No</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 !border-0 bg-transparent`}>Sub It Sr.No</div>
        <div className={`${cellClass} ${headerClass} w-[200px] shrink-0 !border-0 bg-transparent`}>Licence Registration No.<span className="text-red-500 ml-1">*</span></div>
        <div className={`${cellClass} ${headerClass} w-[150px] shrink-0 !border-0 bg-transparent`}>Item Sr. No. In License<span className="text-red-500 ml-1">*</span></div>
        <div className={`${cellClass} ${headerClass} w-[180px] shrink-0 !border-0 bg-transparent`}>Licence Registration Date<span className="text-red-500 ml-1">*</span></div>
        <div className={`${cellClass} ${headerClass} flex-1 min-w-[200px] !border-0 bg-transparent`}>RA/Licence Registration Port</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent`}>Debit Value</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent`}>Debit Quantity</div>
        <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 !border-0 bg-transparent`}>Debit UOM</div>
        <div className={`${cellClass} ${headerClass} w-[120px] shrink-0 !border-0 bg-transparent`}>Debit Duty</div>
        <div className={`${cellClass} ${headerClass} w-[40px] shrink-0 !border-0 bg-transparent`}></div>
     </div>
  );

  const renderContent = () => (
      <div className="flex flex-col w-full min-w-max bg-white">
          {/* Mock Row 1 */}
           <div className="flex w-full border-b border-[#d0d5e3]">
                <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                   <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                </div>
                <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                   <Checkbox className={checkboxClass} />
                </div>
                <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>1</div>
                <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>1</div>
                <div className={`${cellClass} bg-white w-[200px] shrink-0`}>
                    <div className="flex items-center gap-2 w-full px-1">
                        <LayoutGrid className="w-4 h-4 text-[#626776] shrink-0" />
                        <Input className={inputClass} defaultValue="323242423" />
                    </div>
                </div>
                <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                     <Input className={inputClass} defaultValue="1" />
                </div>
                <div className={`${cellClass} bg-white w-[180px] shrink-0`}>
                     <div className="flex items-center gap-2 w-full px-1">
                        <Calendar className="w-4 h-4 text-[#626776] shrink-0" />
                        <Input className={inputClass} defaultValue="22/04/2025" />
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
           
           {/* Mock Row 2 */}
            <div className="flex w-full border-b border-[#d0d5e3]">
                <div className={`${cellClass} bg-white w-[40px] shrink-0 justify-center`}>
                   <button><ChevronDown className="w-4 h-4 text-[#626776]" /></button>
                </div>
                <div className={`${cellClass} ${dataClass} w-[40px] shrink-0 justify-center`}>
                   <Checkbox className={checkboxClass} />
                </div>
                <div className={`${cellClass} ${dataClass} w-[50px] shrink-0`}>2</div>
                <div className={`${cellClass} ${dataClass} w-[100px] shrink-0`}>1</div>
                <div className={`${cellClass} bg-white w-[200px] shrink-0`}>
                    <div className="flex items-center gap-2 w-full px-1">
                        <LayoutGrid className="w-4 h-4 text-[#626776] shrink-0" />
                        <Input className={inputClass} defaultValue="323242423" />
                    </div>
                </div>
                <div className={`${cellClass} bg-white w-[150px] shrink-0`}>
                     <Input className={inputClass} defaultValue="1" />
                </div>
                <div className={`${cellClass} bg-white w-[180px] shrink-0`}>
                     <div className="flex items-center gap-2 w-full px-1">
                        <Calendar className="w-4 h-4 text-[#626776] shrink-0" />
                        <Input className={inputClass} defaultValue="22/04/2025" />
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
           {/* Add Row */}
           <div className="flex w-full border-b border-[#d0d5e3]">
                <div className="w-full flex justify-start p-2 bg-white">
                    <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                        <Plus className="w-4 h-4" /> Add
                    </button>
                </div>
           </div>
      </div>
  );

  return (
    <div className={`flex flex-col w-full bg-[#CAD2E5] ${isFullPage ? 'h-full overflow-hidden pb-3' : 'overflow-x-auto'}`}>
         {/* Form Section at top */}
         <FormSection />

         {/* License Table Header Bar */}
         <div className="bg-[#EBEEF7] w-full flex items-center justify-center h-[40px] border-y border-[#d0d5e3] shrink-0 relative">
             <div className="flex items-center gap-2">
                 <Lock className="w-4 h-4 text-[#7B61FF]" />
                 <span className="text-[13px] font-bold text-[#050E25] uppercase">License Details</span>
             </div>
         </div>

         {isFullPage ? (
            <>
                <div className="flex-1 overflow-auto w-full bg-white relative">
                     <div className="min-w-max flex flex-col">
                          <div className="sticky top-0 z-10">
                              <Header />
                          </div>
                          {renderContent()}
                     </div>
                </div>
                <div className="w-full shrink-0 flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                    <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 2</span>
                </div>
            </>
         ) : (
            <div className="bg-white overflow-x-auto">
               <Header />
               {renderContent()}
               <div className="w-full flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                    <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 2</span>
                </div>
            </div>
         )}
    </div>
  );
};

  // Helper for tables
  const ExportTable = ({ title, icon, mainHeaders, nestedHeaders }: { title: string, icon: any, mainHeaders: string[], nestedHeaders?: string[] }) => {
      const [isExpanded, setIsExpanded] = useState(false);
      const isFlat = !nestedHeaders;
      return (
        <div className="flex flex-col w-full bg-[#CAD2E5]">
             <div className="bg-[#EBEEF7] w-full flex items-center justify-between h-[40px] border-y border-[#d0d5e3] px-3">
                 <div className="flex items-center gap-2 flex-1 justify-center">
                     {icon}
                     <span className="text-[13px] font-bold text-[#050E25] uppercase">{title}</span>
                 </div>
             </div>

             <div className="bg-white overflow-x-auto">
                {/* Main Header */}
                <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] h-[32px] items-center">
                    {!isFlat && <div className="w-[40px] border-r border-[#d0d5e3] h-full flex items-center justify-center"><ChevronDown className="w-4 h-4 text-[#626776]" /></div>}
                    <div className="w-[40px] border-r border-[#d0d5e3] h-full flex items-center justify-center"><Checkbox className={checkboxClass} /></div>
                    {mainHeaders.map((h, i) => (
                        <div key={i} className={`h-full flex items-center px-2 text-[12px] font-semibold text-[#050e25] border-r border-[#d0d5e3] whitespace-nowrap ${i === mainHeaders.length - 1 ? 'flex-1 min-w-[100px]' : 'w-[150px]'}`}>
                            {h}
                        </div>
                    ))}
                    <div className="w-[40px] h-full flex items-center justify-center">
                        {title.includes("DEPB") && <LayoutGrid className="w-4 h-4 text-[#626776]" />}
                    </div>
                </div>

                {/* Main Row 1 */}
                 <div className="flex min-w-max border-b border-[#d0d5e3] h-[32px] items-center">
                    {!isFlat && (
                        <div 
                          className="w-[40px] border-r border-[#d0d5e3] h-full flex items-center justify-center cursor-pointer hover:bg-gray-50"
                          onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <ChevronDown className={`w-4 h-4 text-[#626776] transition-transform ${isExpanded ? '' : '-rotate-90'}`} />
                        </div>
                    )}
                    <div className="w-[40px] border-r border-[#d0d5e3] h-full flex items-center justify-center"><Checkbox className={checkboxClass} /></div>
                    {mainHeaders.map((h, i) => (
                        <div key={i} className={`h-full flex items-center px-2 text-[12px] text-[#050e25] border-r border-[#d0d5e3] ${i === mainHeaders.length - 1 ? 'flex-1 min-w-[100px]' : 'w-[150px]'}`}>
                            {i === 0 ? "1" : i === 1 ? "1" : "Data"}
                        </div>
                    ))}
                    <div className="w-[40px] h-full flex items-center justify-center"><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                </div>

                {/* Main Row 2 (for flat tables to show populated state) */}
                {isFlat && (
                 <div className="flex min-w-max border-b border-[#d0d5e3] h-[32px] items-center">
                    <div className="w-[40px] border-r border-[#d0d5e3] h-full flex items-center justify-center"><Checkbox className={checkboxClass} /></div>
                    {mainHeaders.map((h, i) => (
                        <div key={i} className={`h-full flex items-center px-2 text-[12px] text-[#050e25] border-r border-[#d0d5e3] ${i === mainHeaders.length - 1 ? 'flex-1 min-w-[100px]' : 'w-[150px]'}`}>
                            {i === 0 ? "2" : i === 1 ? "2" : "Data"}
                        </div>
                    ))}
                    <div className="w-[40px] h-full flex items-center justify-center"><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                </div>
                )}

                {/* Nested Table */}
                {!isFlat && nestedHeaders && isExpanded && (
                <div className="w-full pl-[40px] bg-[#f1f4f8] py-2 border-b border-[#d0d5e3]">
                     <div className="flex items-center justify-between px-2 mb-2">
                        <span className="text-[13px] font-bold text-[#050E25]">Total Import Items: 1</span>
                        <button className="bg-[#3874FF] text-white text-[12px] font-medium px-2 py-1 rounded flex items-center gap-1 hover:bg-[#2c5bcf]">
                             Add Item
                        </button>
                     </div>
                     <div className="w-full bg-white border border-[#d0d5e3] overflow-x-auto">
                         {/* Nested Header */}
                         <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] h-[32px] items-center">
                             <div className="w-[40px] border-r border-[#d0d5e3] h-full flex items-center justify-center"><Checkbox className={checkboxClass} /></div>
                             {nestedHeaders.map((h, i) => (
                                <div key={i} className={`h-full flex items-center px-2 text-[12px] font-semibold text-[#050e25] border-r border-[#d0d5e3] whitespace-nowrap ${i === nestedHeaders.length - 1 ? 'flex-1 min-w-[100px]' : 'w-[150px]'}`}>
                                    {h}
                                </div>
                             ))}
                             <div className="w-[40px] h-full flex items-center justify-center"></div>
                         </div>
                         {/* Nested Row */}
                          <div className="flex min-w-max border-b border-[#d0d5e3] h-[32px] items-center">
                             <div className="w-[40px] border-r border-[#d0d5e3] h-full flex items-center justify-center"><Checkbox className={checkboxClass} /></div>
                             {nestedHeaders.map((h, i) => (
                                <div key={i} className={`h-full flex items-center px-2 text-[12px] text-[#050e25] border-r border-[#d0d5e3] ${i === nestedHeaders.length - 1 ? 'flex-1 min-w-[100px]' : 'w-[150px]'}`}>
                                    {i === 0 ? "1" : "Data"}
                                </div>
                             ))}
                             <div className="w-[40px] h-full flex items-center justify-center"><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                         </div>
                     </div>
                </div>
                )}
                
                {/* Add Row (Main) */}
                <div className="w-full flex justify-start p-2 bg-white">
                    <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                        <Plus className="w-4 h-4" /> Add
                    </button>
                </div>
             </div>

             {/* Footer for Flat Table */}
             {isFlat && (
                <div className="w-full flex justify-start p-2 bg-[#f1f4f8] border-t border-[#d0d5e3]">
                     <span className="text-[13px] font-semibold text-[#050e25] ml-8">Total Items: 2</span>
                </div>
             )}
        </div>
      );
  };

  const ExportLicenseTable = () => {
  // Scheme Code Section
  const SchemeCodeSection = () => (
     <div className="flex flex-col w-full bg-white border-b border-[#d0d5e3] shrink-0 mb-[12px]">
          <FormRow>
              <FormField label="Scheme Code">
                 <Select>
                  <SelectTrigger className={inputClass}>
                    <SelectValue placeholder="Select Scheme Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scheme1">Scheme 1</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0" />
          </FormRow>
     </div>
  );

  return (
    <div className="flex flex-col w-full h-full">
         <SchemeCodeSection />
         <div className="flex flex-col w-full gap-[12px] overflow-y-auto flex-1 pb-4">
             <ExportTable
                 title="DFIA" 
                 icon={<FileText className="w-4 h-4 text-[#7B61FF]" />}
                 mainHeaders={["S.No", "Sub It. SNo", "License No.", "License Date", "File No", "It. SNo(Pt E)", "Export Qty", "UOM"]}
                 nestedHeaders={["S.No", "License No.", "SION Group Code", "SION Sr. NO", "SION IO Norm Sr No", "Item Sr.No in Part C", "Import Qty", "Import UOM", "Item Description", "Technical Characteristics", "Whether Indigenous or Imported"]}
             />
             <ExportTable
                 title="EPCG License" 
                 icon={<Database className="w-4 h-4 text-[#00B196]" />}
                 mainHeaders={["S.No", "Sub It. SNo", "License Registration No", "Reg. Date", "It. SNo(Pt. E)", "Export Qty", "UOM"]}
                 nestedHeaders={["S.No", "License Registration No.", "Item Sr.No in Part C", "Description", "Import Qty", "UOM", "Whether Indigenous or Imported"]}
             />
             <ExportTable
                 title="DEEC" 
                 icon={<Award className="w-4 h-4 text-[#7B61FF]" />}
                 mainHeaders={["S.No", "Sub It. SNo", "License Registration No.", "Registration Date", "Item Sr.No in Part E", "Export Qty", "UOM"]}
                 nestedHeaders={["S.No", "License Registration No.", "Item S. No in Part C", "Description", "Import Qty", "UOM", "Whether Indigenous or Imported"]}
             />
             <ExportTable
                 title="DEPB Parent" 
                 icon={<ScrollText className="w-4 h-4 text-[#00B196]" />}
                 mainHeaders={["S.No", "Sub It. SNo", "Group Code", "Item Code", "Quantity", "UQC", "Quantity Percentage"]}
                 nestedHeaders={undefined}
             />
         </div>
    </div>
  );
};


// Notifications Section Component
function NotificationsSection({ expanded, onToggle, onRemove, required }: { expanded: boolean, onToggle: () => void, onRemove?: () => void, required?: boolean }) {
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

    const updateList = (currentList: any[], masterList: any[], itemsForThisSection: string[]) => {
       // Filter master list to only include selected items, preserving order
       // Or append new items? "if certain duties selected that row alone will shown".
       // This implies the list should EXACTLY match the selection (or at least contain it).
       // If I use checkboxes, usually it means "toggle".
       // If I clear everything and select specific ones, only those should show.
       // The `AddDutiesPopover` returns ALL currently selected items if I implemented `selectedDuties` state correctly in the parent?
       // No, `AddDutiesPopover` maintains its own state and returns "selectedDuties" on Apply.
       // So `handleAddDuties` receives the FULL LIST of desired duties.
       // Thus, I should rebuild the lists based on the selection.
       
       return masterList.filter(item => selectedNames.has(item.name));
    };

    // 1. Table Data
    setTableData(MASTER_TABLE_DATA.filter(d => selectedNames.has(d.name)));

    // 2. Secondary Data
    setSecondaryData(MASTER_SECONDARY_DATA.filter(d => selectedNames.has(d.name)));

    // 3. Excise Data
    setExciseData(MASTER_EXCISE_DATA.filter(d => selectedNames.has(d.name)));

    // 4. GST Data
    setGstData(MASTER_GST_DATA.filter(d => selectedNames.has(d.name)));
  };

  const showTariff = tableData.some(d => d.name === "Tariff Value");
  const showAntiDumping = tableData.some(d => d.name === "Anti Dumping");

  const renderRow = (item: any, index: number) => (
    <div key={index} className="flex w-full min-w-max">
      <div className={`${cellClass} ${headerClass} w-[306px] shrink-0`}>{item.name}</div>
      <div className={`${cellClass} ${dataClass} w-[100px] shrink-0 justify-center`}>{item.stdRate}</div>
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
    <div key={index} className="flex w-full min-w-max">
      <div className={`${cellClass} ${headerClass} ${item.name === "IGST Value" ? "w-[150px]" : "w-[306px]"} shrink-0`}>{item.name}</div>
      {item.name === "IGST Value" && (
        <>
          <div className={`${cellClass} ${dataClass} w-[60px] shrink-0 justify-center`}>2%</div>
          <div className={`${cellClass} ${dataClass} w-[60px] shrink-0 justify-center`}>2%</div>
        </>
      )}
      <div className={`${cellClass} ${dataClass} w-[100px] shrink-0 justify-center`}>{item.rates[2]}</div>
      
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
    <div className="flex flex-col w-full">
      <SectionHeader 
        title="2. NOTIFICATIONS" 
        expanded={expanded} 
        onToggle={onToggle} 
        required={required}
        rightContent={onRemove && (
          <button 
            onClick={(e) => { e.stopPropagation(); onRemove(); }} 
            className="p-1 hover:bg-[#D0D5E3] rounded-full transition-colors text-[#626776] hover:text-[#CF3B3B]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      />
      
      {expanded && (
        <>
          {/* Customs Section */}
          <div className="flex w-full">
            <div className="w-[30px] bg-[#EBEEF7] border-[#d0d5e3] border-[1px_0px_0px_1px] shrink-0 flex items-center justify-center">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px] whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Customs
              </span>
            </div>
            <div className="flex flex-col grow w-full overflow-x-auto">
              <div className="flex w-full min-w-max">
                <div className={`${cellClass} ${headerClass} w-[306px] shrink-0`}>Duty Name</div>
                <div className={`${cellClass} ${headerClass} w-[100px] shrink-0`}>Std. Rate</div>
                <div className={`${cellClass} ${headerClass} w-[120px] grow shrink-0`}>Ntn No.</div>
                <div className={`${cellClass} ${headerClass} w-[120px] grow shrink-0`}>Sr.No</div>
                <div className={`${cellClass} ${headerClass} w-[60px] grow shrink-0`}>Eff. Rate</div>
                <div className={`${cellClass} ${headerClass} w-[80px] grow shrink-0`}>Duty Amount</div>
              </div>
              {tableData.filter(d => d.name !== "Tariff Value").map((item, i) => renderRow(item, i))}
              
              {showAntiDumping && (
                <div className="flex w-full min-w-max">
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
                  <div className={`${cellClass} ${headerClass} w-[100px] shrink-0 p-0 flex`}>
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
                  <div className="flex w-full min-w-max">
                    <div className={`${cellClass} ${headerClass} w-[306px] shrink-0`}>Tariff Value</div>
                    <div className={`${cellClass} ${dataClass} w-[100px] shrink-0 justify-center`}>66%</div>
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
                  <div className="flex w-full min-w-max">
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

          <div className="w-full h-[1px] bg-[#d0d5e3]" />
        </>
      )}
    </div>
  );
}

function GridSectionHeader({ title, icon: Icon, onAdd, expanded, onToggle, onRemove, required }: { title: string, icon?: any, onAdd?: () => void, expanded?: boolean, onToggle?: () => void, onRemove?: () => void, required?: boolean }) {
  return (
    <div 
      className={`bg-[#DDE3F2] px-3 py-2 flex items-center justify-center border-b border-[#d0d5e3] border-t border-t-[#d0d5e3] relative min-h-[40px] ${onToggle ? 'cursor-pointer hover:bg-[#e2e6f2]' : ''}`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-[#E97330]" />}
        <span className="font-bold text-[#050E25] text-[13px] uppercase">
          {title}
          {required && <span className="text-[#CF3B3B] ml-1">*</span>}
        </span>
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

export default function ItemDetailsForm({ itemData, isLoading, activeTab, onMandatoryChange, isExport = false, onHsnChange }: { itemData?: any; isLoading?: boolean; activeTab?: string; onMandatoryChange?: (isMandatory: boolean) => void, isExport?: boolean, onHsnChange?: (hsn: string) => void }) {
  const [foc, setFoc] = useState(true);
  const [cusNtfn, setCusNtfn] = useState(true);
  const [svbRelated, setSvbRelated] = useState(true);
  const [sameAsSupplier, setSameAsSupplier] = useState(false);
  const [section65Enabled, setSection65Enabled] = useState(true);
  const [rspEnabled, setRspEnabled] = useState(true);
  const [hsn, setHsn] = useState('');
  const [isHsnLoading, setIsHsnLoading] = useState(false);
  
  const isHSN38363000 = hsn === '38363000';

  useEffect(() => {
    onMandatoryChange?.(isHSN38363000);
  }, [isHSN38363000, onMandatoryChange]);
  
  // Auto-populate data states
  const [statementsData, setStatementsData] = useState<any[]>([]);
  const [cooData, setCooData] = useState<any[]>([]);
  const [manufacturerData, setManufacturerData] = useState<any>({});
  const [swInfoData, setSwInfoData] = useState<any[]>([]);
  const [supportingDocsData, setSupportingDocsData] = useState<any[]>([]);
  const [showMandatory, setShowMandatory] = useState(false);
  
  useEffect(() => {
    if (itemData?.hsn) {
      setHsn(itemData.hsn);
    }
  }, [itemData]);
  
  // Navigation State
  const [sections, setSections] = useState({
    basic: true,
    notifications: true,
    svb: true,
    exim: true,
    manufacturer: true,
    general: true,
    rsp: true,
    fta: true,
    prevBe: true,
    reimport: true,
    swInfo: true,
    swProduction: true,
    swConstituent: true,
    swControl: true,
    section65: true,
    sez: true,
    statements: true,
    supportingDocs: true,
    bond: true
  });

  const toggleSection = (key: keyof typeof sections) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const SECTION_TITLES: Record<string, string> = {
    basic: "Basic item information",
    notifications: "Notifications",
    svb: "SVB details",
    exim: "EXIM",
    manufacturer: "Item manufacturer",
    general: "General details",
    rsp: "RSP",
    fta: "FTA",
    prevBe: "Previous BE details",
    reimport: "Reimport details",
    swInfo: "Single window info",
    swProduction: "Single window production",
    swConstituent: "Single window constituent",
    swControl: "SW control",
    section65: "Section 65",
    sez: "SEZ-Z BE Type",
    statements: "Statements",
    supportingDocs: "Supporting documents",
    bond: "Bond Details"
  };

  const toggleableSections: (keyof typeof sections)[] = [
    'manufacturer', 'general', 'rsp', 'fta', 'prevBe',
    'reimport', 'swInfo', 'swProduction', 'swConstituent', 'swControl', 'section65', 'sez',
    'statements', 'supportingDocs', 'bond'
  ];

  const handleHsnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setHsn(val);
    onHsnChange?.(val);

    if (val === '38063000') {
      setIsHsnLoading(true);

      setTimeout(() => {
        setIsHsnLoading(false);
        // Auto-populate data for HSN 38063000
        setShowMandatory(true);
        
        setStatementsData([{
          sNo: 1,
          type: 'DESC',
          code: 'AO000',
          text: 'I/We importer/exporter or the authorized agent of the importer/exporter declare that the information furnished, to the best of my knowledge and belief, is true, correct and complete in every respect.'
        }]);
        
        setCooData([{
          sNo: 1,
          manufactureCntry: 'CN - CHINA',
          transitCountry: 'CN - CHINA'
        }]);
        
        setManufacturerData({
          name: 'DBFID PRIVATE LIMITED',
          add1: '41-TOWER C,GROUND FLOOR',
          add2: 'RAITTHA TEK, MEADOWS ROAD, SRICK-ANAKALLI CHENNAI',
          city: '600118',
          country: 'IN - INDIA'
        });
        
        setSwInfoData([
          {
            sNo: 1,
            pgaCode: 'FSSAI - Food Safety and Standards Authority of Ind',
            infoType: 'CHR - Item Characteristics',
            qfr: 'STC - Storage Condition',
            infoCode: 'STCNR - Normal - Storage Condition',
            infoText: '',
            infoDate: '',
            infoMsr: '',
            infoUqc: ''
          },
          {
            sNo: 2,
            pgaCode: 'FSSAI - Food Safety and Standards Authority of Ind',
            infoType: 'PPS - Category',
            qfr: 'FSP - Foods & Supplement Propriety Status',
            infoCode: 'FC0101 - Dairy Products & Analogues (Milk)',
            infoText: '',
            infoDate: '',
            infoMsr: '',
            infoUqc: ''
          },
          {
            sNo: 3,
            pgaCode: 'FSSAI - Food Safety and Standards Authority of Ind',
            infoType: 'IDT - Identification',
            qfr: 'RFA - Retail Pre-pack Food Article',
            infoCode: 'RFAN - Retail Pre-pack Food Article – NO',
            infoText: '',
            infoDate: '',
            infoMsr: '',
            infoUqc: ''
          }
        ]);
        
        setSupportingDocsData([
          {
            id: '101',
            sNo: 1,
            documentType: '911001 - FSSAI Import License',
            documentInformation: 'FSSAI Import License',
            irnNo: '3435353564645534',
            drnNo: 'INV857675765576',
            issuePlace: 'Chennai',
            issueDate: '2025-12-18',
            expiryDate: '',
            issuingPartyCode: '0',
            issuingPartyName: 'UNIFO PRIVATE LIMITED',
            issuingPartyID: 'TJ114281',
            issuingPartyAddress1: '51, TOWER C',
            issuingPartyAddress2: 'RATTHA TEK MEADOWS',
            issuingPartyCity: 'CHENNAI',
            issuingPartyPincode: '600119',
            beneficiaryPartyCode: '0',
            beneficiaryPartyName: 'UNIFO PRIVATE LIMITED',
            beneficiaryPartyID: 'TJ114281',
            beneficiaryPartyAddress1: '51, TOWER C',
            beneficiaryPartyAddress2: 'RATTHA TEK MEADOWS',
            beneficiaryPartyCity: 'CHENNAI',
            beneficiaryPartyPincode: '600119',
            submittedBy: 'Custom Broker',
            icegateID: 'outlookUser',
            fileType: 'PDF',
            invItemSrNo: '',
            isSelected: false
          },
          {
            id: '102',
            sNo: 2,
            documentType: '0110FS - Specimen Copy of Label',
            documentInformation: 'Specimen Copy of Label',
            irnNo: '3554564564565656',
            drnNo: 'INV857675765576',
            issuePlace: 'Chennai',
            issueDate: '2025-12-18',
            expiryDate: '',
            issuingPartyCode: '0',
            issuingPartyName: 'UNIFO PRIVATE LIMITED',
            issuingPartyID: 'TJ114281',
            issuingPartyAddress1: '51, TOWER C',
            issuingPartyAddress2: 'RATTHA TEK MEADOWS',
            issuingPartyCity: 'CHENNAI',
            issuingPartyPincode: '600119',
            beneficiaryPartyCode: '0',
            beneficiaryPartyName: 'UNIFO PRIVATE LIMITED',
            beneficiaryPartyID: 'TJ114281',
            beneficiaryPartyAddress1: '51, TOWER C',
            beneficiaryPartyAddress2: 'RATTHA TEK MEADOWS',
            beneficiaryPartyCity: 'CHENNAI',
            beneficiaryPartyPincode: '600119',
            submittedBy: 'Custom Broker',
            icegateID: 'outlookUser',
            fileType: 'PDF',
            invItemSrNo: '',
            isSelected: false
          },
          {
            id: '103',
            sNo: 3,
            documentType: '861000 - Certificate of origin',
            documentInformation: 'Certificate of origin',
            irnNo: '5434534656565656',
            drnNo: 'INV857675765576',
            issuePlace: 'Chennai',
            issueDate: '2025-12-18',
            expiryDate: '',
            issuingPartyCode: '0',
            issuingPartyName: 'UNIFO PRIVATE LIMITED',
            issuingPartyID: 'TJ114281',
            issuingPartyAddress1: '51, TOWER C',
            issuingPartyAddress2: 'RATTHA TEK MEADOWS',
            issuingPartyCity: 'CHENNAI',
            issuingPartyPincode: '600119',
            beneficiaryPartyCode: '0',
            beneficiaryPartyName: 'UNIFO PRIVATE LIMITED',
            beneficiaryPartyID: 'TJ114281',
            beneficiaryPartyAddress1: '51, TOWER C',
            beneficiaryPartyAddress2: 'RATTHA TEK MEADOWS',
            beneficiaryPartyCity: 'CHENNAI',
            beneficiaryPartyPincode: '600119',
            submittedBy: 'Custom Broker',
            icegateID: 'outlookUser',
            fileType: 'PDF',
            invItemSrNo: '',
            isSelected: false
          }
        ]);
        
        // Expand relevant sections
        setSections({
          basic: true,
          notifications: true,
          svb: true,
          exim: true,
          manufacturer: true,
          general: true,
          rsp: true,
          fta: true,
          prevBe: true,
          reimport: true,
          swInfo: true,
          swProduction: true,
          swConstituent: true,
          swControl: true,
          statements: true,
          supportingDocs: true,
          bond: true
        });
      }, 1500);
    } else if (val === '12345678') {
      // Collapse everything except specific sections (e.g. Basic, SVB, Previous BE)
      setShowMandatory(false);
      setStatementsData([]);
      setCooData([]);
      setManufacturerData({});
      setSwInfoData([]);
      setSupportingDocsData([]);
      
      setSections({
        basic: true,
        notifications: true,
        svb: true,
        exim: true,
        manufacturer: true,
        general: true,
        rsp: true,
        fta: true,
        prevBe: true,
        reimport: true,
        swInfo: true,
        swProduction: true,
        swConstituent: true,
        swControl: true,
        statements: true,
        supportingDocs: true,
        bond: true
      });
    } else {
      // Default state: Keep all expanded
      setShowMandatory(false);
      setStatementsData([]);
      setCooData([]);
      setManufacturerData({});
      setSwInfoData([]);
      setSupportingDocsData([]);
      
      setSections({
        basic: true,
        notifications: true,
        svb: true,
        exim: true,
        manufacturer: true,
        general: true,
        rsp: true,
        fta: true,
        prevBe: true,
        reimport: true,
        swInfo: true,
        swProduction: true,
        swConstituent: true,
        swControl: true,
        statements: true,
        supportingDocs: true,
        bond: true
      });
    }
  };

  const isSection65Tab = activeTab === 'section65';
  const isSezTab = activeTab === 'sez';
  const isEximTab = activeTab === 'exim';
  const isReimportTab = activeTab === 'reimport';
  const isStatementsTab = activeTab === 'statements';
  const isSupportingDocsTab = activeTab === 'supporting-documents';
  const isFullPageTab = isSezTab || isEximTab || isStatementsTab || isSupportingDocsTab;

  const handleManufacturerChange = (field: string, value: string) => {
    setManufacturerData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // simplified handling: put everything in add1 if manually edited
      setManufacturerData((prev: any) => ({ ...prev, add1: e.target.value, add2: '' }));
  };

  return (
    <div className="flex flex-col w-full bg-[#CAD2E5] h-full relative">
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-white/50 flex items-center justify-center backdrop-blur-[1px]">
          <Loader2 className="w-8 h-8 animate-spin text-[#3874FF]" />
        </div>
      )}
      
      <div className={`flex-1 min-h-0 ${isFullPageTab ? 'overflow-hidden' : 'overflow-y-auto'}`}>
      <div className={`flex flex-col w-full gap-[12px] p-0.5 ${isFullPageTab ? 'h-full' : ''}`}>
          
          {/* SECTION 1: BASIC INFO */}
             {(activeTab === 'info' || !activeTab) && (
               <div className="flex flex-col w-full">
                 <SectionHeader 
                   title={SECTION_TITLES.basic}
                   expanded={sections.basic}
                   onToggle={() => toggleSection('basic')}
                   required={isHSN38363000}
                 />
                 {sections.basic && (
                  <div className="flex flex-col w-full">
                   <FormRow>
                    <div className="content-stretch flex items-center relative shrink-0 h-full">
                    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[58px] h-full">
                      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">Sr.No</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-[69px] h-full">
                      <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 h-full">
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 h-full">
                          <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="size-full bg-white">
                            <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full h-full">
                              <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px]">{itemData?.sNo || '1/1'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 <FormField label="Part Code" required={isHSN38363000}>
                   <Input key={itemData?.id ? `${itemData.id}-partCode` : 'default-partCode'} className={`${inputClass} text-[#7E22CE]`} placeholder="Enter Part Code" defaultValue={itemData?.partCode} />
                 </FormField>
                 <FormField label="HSN" required={isHSN38363000}>
                   <div className="relative w-full h-full">
                      <Input className={`${inputClass} text-[#7E22CE]`} placeholder="Enter HSN" value={hsn} onChange={handleHsnChange} />
                      {isHsnLoading && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <Loader2 className="w-4 h-4 animate-spin text-[#3874FF]" />
                        </div>
                      )}
                   </div>
                 </FormField>
               </FormRow>

               <FormRow>
                 <FormField label="Description" required={isHSN38363000}>
                   <Input key={itemData?.id ? `${itemData.id}-desc` : 'default-desc'} className={`${inputClass} text-[#7E22CE]`} placeholder="Enter Description" defaultValue={itemData?.invoiceDescription} />
                 </FormField>
               </FormRow>
               
               <FormRow>
                 <FormField label="Concat Description" required={isHSN38363000}>
                   <Input key={itemData?.id ? `${itemData.id}-concat` : 'default-concat'} className={`${inputClass} text-[#3874FF]`} placeholder="Enter Concat Description" defaultValue={itemData?.concatenatedDescription} />
                 </FormField>
               </FormRow>

               <FormRow>
                 <FormField label="End Use" required={isHSN38363000}>
                   <Input key={itemData?.id ? `${itemData.id}-endUse` : 'default-endUse'} className={inputClass} placeholder="Enter End Use" defaultValue={itemData?.endUse} />
                 </FormField>
                 {!isExport && (
                   <FormField label="CETH" required={isHSN38363000}>
                      <Input key={itemData?.id ? `${itemData.id}-ceth` : 'default-ceth'} className={inputClass} placeholder="Enter CETH" defaultValue={itemData?.ceth} />
                   </FormField>
                 )}
               </FormRow>

               <FormRow>
                 <FormField label="Quantity & UOM" required={isHSN38363000}>
                   <div className="flex w-full h-full">
                     <Input key={itemData?.id ? `${itemData.id}-qty` : 'default-qty'} className={`${inputClass} flex-1`} placeholder="Enter Quantity" defaultValue={itemData?.quantity} />
                     <div className={dividerClass} />
                     <Select key={itemData?.id ? `${itemData.id}-uom` : 'default-uom'} defaultValue={itemData?.uom?.toLowerCase()}>
                       <SelectTrigger className={`${inputClass} w-[100px] border-l border-[#d0d5e3]`}>
                         <SelectValue placeholder="Select UOM" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="nos">NOS</SelectItem>
                         <SelectItem value="kgs">KGS</SelectItem>
                         <SelectItem value="mtr">MTR</SelectItem>
                         <SelectItem value="pcs">PCS</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </FormField>
                 <FormField label="Custom Qty & UOM" required={isHSN38363000}>
                   <div className="flex w-full h-full">
                     <Input key={itemData?.id ? `${itemData.id}-custQty` : 'default-custQty'} className={`${inputClass} flex-1`} placeholder="Enter Custom Qty" defaultValue={itemData?.custQty} />
                     <div className={dividerClass} />
                     <Select key={itemData?.id ? `${itemData.id}-custUom` : 'default-custUom'} defaultValue={itemData?.custUom?.toLowerCase()}>
                       <SelectTrigger className={`${inputClass} w-[100px] border-l border-[#d0d5e3]`}>
                         <SelectValue placeholder="Select UOM" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="nos">NOS</SelectItem>
                         <SelectItem value="kgs">KGS</SelectItem>
                         <SelectItem value="mtr">MTR</SelectItem>
                         <SelectItem value="pcs">PCS</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </FormField>
               </FormRow>

               <FormRow>
                 <FormField label="Unit Price" required={isHSN38363000}>
                   <Input key={itemData?.id ? `${itemData.id}-unitPrice` : 'default-unitPrice'} className={inputClass} placeholder="Enter Unit Price" defaultValue={itemData?.unitPrice} />
                 </FormField>
                 {isExport ? (
                    <FormField label="No of Unit Per" required={isHSN38363000}>
                       <Input key={itemData?.id ? `${itemData.id}-noOfUnitPer` : 'default-noOfUnitPer'} className={inputClass} placeholder="Enter No of Unit Per" defaultValue={itemData?.noOfUnitPer} />
                    </FormField>
                 ) : (
                    <FormField label="Amount" required={isHSN38363000}>
                       <Input key={itemData?.id ? `${itemData.id}-amount` : 'default-amount'} className={inputClass} placeholder="Enter Amount" defaultValue={itemData?.amount} />
                    </FormField>
                 )}
               </FormRow>

               {isExport && (
                  <FormRow>
                     <FormField label="Amount" required={isHSN38363000}>
                        <Input key={itemData?.id ? `${itemData.id}-amount` : 'default-amount'} className={inputClass} placeholder="Enter Amount" defaultValue={itemData?.amount} />
                     </FormField>
                     <FormField label="Reward Item" required={isHSN38363000}>
                       <div className="flex items-center px-2 h-full">
                          <FigmaSwitch checked={foc} onCheckedChange={setFoc} fieldId="foc" />
                       </div>
                     </FormField>
                  </FormRow>
               )}

               {!isExport && (
                 <FormRow>
                   <FormField label="FOC" required={isHSN38363000}>
                     <div className="flex items-center px-2 h-full">
                        <FigmaSwitch checked={foc} onCheckedChange={setFoc} fieldId="foc" />
                     </div>
                   </FormField>
                   <FormField label="Pref./Standard" required={isHSN38363000}>
                      <Select>
                         <SelectTrigger className={inputClass}>
                           <SelectValue placeholder="Select Preferential/Standard" />
                         </SelectTrigger>
                         <SelectContent>
                           <SelectItem value="preferential">Preferential</SelectItem>
                           <SelectItem value="standard">Standard</SelectItem>
                         </SelectContent>
                       </Select>
                   </FormField>
                 </FormRow>
               )}

               {!isExport && (
                   <FormRow>
                     <FormField label="Country of Origin" required={showMandatory || isHSN38363000}>
                        <Select value={cooData[0]?.manufactureCntry ? 'cn' : undefined}>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cn">{cooData[0]?.manufactureCntry || 'CN - CHINA'}</SelectItem>
                            <SelectItem value="opt1">Option 1</SelectItem>
                          </SelectContent>
                        </Select>
                     </FormField>
                     <FormField label="Assbl Val & Duty">
                        <div className="flex w-full h-full"><Input value="125000.50" className={`${inputClass} flex-1`} /><div className={dividerClass} /><Input value="8500.75" className={`${inputClass} w-[80px]`} /></div>
                     </FormField>
                   </FormRow>
               )}

               {isExport && (
                  <>
                     <div className="mt-[12px]">
                        <SectionHeader title="Origin" />
                     </div>
                     <FormRow>
                        <FormField label="PTA Code" required={true}>
                           <Select>
                              <SelectTrigger className={inputClass}>
                                 <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="opt1">Option 1</SelectItem>
                              </SelectContent>
                           </Select>
                        </FormField>
                        <FormField label="Origin District" required={true}>
                           <Select>
                              <SelectTrigger className={inputClass}>
                                 <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="opt1">Option 1</SelectItem>
                              </SelectContent>
                           </Select>
                        </FormField>
                     </FormRow>
                     <FormRow>
                        <FormField label="Source State" required={true}>
                           <Select>
                              <SelectTrigger className={inputClass}>
                                 <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="opt1">Option 1</SelectItem>
                              </SelectContent>
                           </Select>
                        </FormField>
                        <FormField label="Transit Country" required={true}>
                           <Select>
                              <SelectTrigger className={inputClass}>
                                 <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="opt1">Option 1</SelectItem>
                              </SelectContent>
                           </Select>
                        </FormField>
                     </FormRow>

                     <div className="mt-[12px]">
                        <SectionHeader title="Present Market Value" />
                     </div>
                     <FormRow>
                        <FormField label="Present Market Value">
                           <Input className={inputClass} placeholder="Enter Value" />
                        </FormField>
                        <FormField label="Calculation Method">
                           <Select>
                              <SelectTrigger className={inputClass}>
                                 <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="opt1">Option 1</SelectItem>
                              </SelectContent>
                           </Select>
                        </FormField>
                     </FormRow>
                     <FormRow>
                        <FormField label="Rate">
                           <Input className={inputClass} placeholder="Enter Rate" />
                        </FormField>
                        <FormField label="PMV per unit">
                           <Input className={inputClass} placeholder="Enter PMV" />
                        </FormField>
                     </FormRow>
                  </>
               )}
              </div>
                 )}
            </div>
           )}
         


         {/* SECTION 4: EXIM */}
         {(activeTab === 'exim' || !activeTab) && (
            <div className={`flex flex-col w-full ${isEximTab ? 'flex-1 min-h-0' : ''}`}>
               {isExport ? (
                   isEximTab ? (
                        <ExportLicenseTable />
                   ) : (
                       <>
                           <SectionHeader title={SECTION_TITLES.exim} expanded={sections.exim} onToggle={() => toggleSection('exim')} required={isHSN38363000} rightContent={<button onClick={(e) => { e.stopPropagation(); toggleSection('exim'); }} className="p-1 hover:bg-[#D0D5E3] rounded-full transition-colors text-[#626776] hover:text-[#CF3B3B]"><X className="w-4 h-4" /></button>} />
                           {sections.exim && <ExportLicenseTable />}
                       </>
                   )
               ) : (
                   isEximTab ? (
                       <LicenseTable isFullPage={true} />
                   ) : (
                       <>
                           <SectionHeader title={SECTION_TITLES.exim} expanded={sections.exim} onToggle={() => toggleSection('exim')} required={isHSN38363000} rightContent={<button onClick={(e) => { e.stopPropagation(); toggleSection('exim'); }} className="p-1 hover:bg-[#D0D5E3] rounded-full transition-colors text-[#626776] hover:text-[#CF3B3B]"><X className="w-4 h-4" /></button>} />
                           {sections.exim && <LicenseTable />}
                       </>
                   )
               )}
            </div>
         )}

         {/* SECTION 65 */}
         {!isExport && (activeTab === 'others' || !activeTab) && (
            <div className="flex flex-col w-full">
               <SectionHeader 
                  title={SECTION_TITLES.section65} 
                  expanded={sections.section65} 
                  onToggle={() => toggleSection('section65')}
                  required={isHSN38363000}
                  rightContent={
                     <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-2">
                       <FigmaSwitch checked={section65Enabled} onCheckedChange={setSection65Enabled} />
                     </div>
                  }
               />
               {sections.section65 && <Section65Table isFullPage={false} />}
            </div>
         )}

         {/* SEZ SECTION */}
         {(activeTab === 'sez' || !activeTab) && (
            <div className={`flex flex-col w-full ${isSezTab ? 'flex-1 min-h-0' : ''}`}>
               <SectionHeader 
                  title={SECTION_TITLES.sez} 
                  expanded={sections.sez} 
                  onToggle={() => toggleSection('sez')}
                  icon={Factory}
                  required={isHSN38363000}
               />
               {sections.sez && <SezBeTypeTable isFullPage={isSezTab} />}
            </div>
         )}

          {/* SECTION 2: NOTIFICATIONS */}
          {(!isExport && (activeTab === 'info' || !activeTab)) && <NotificationsSection expanded={sections.notifications} onToggle={() => toggleSection('notifications')} onRemove={() => toggleSection('notifications')} required={isHSN38363000} />}



          {/* SECTION 6: COO - REMOVED */}


          {/* SECTION 7: GENERAL DETAILS (Reordered) */}
          {!isExport && (activeTab === 'general-tab' || !activeTab) && (
            <div className="flex flex-col">
              <SectionHeader title={SECTION_TITLES.general} expanded={sections.general} onToggle={() => toggleSection('general')} required={isHSN38363000} />
              {sections.general && (
               <div className="flex flex-col">
                  <FormRow>
                      <FormField label="Generic Description" required={isHSN38363000}>
                         <Input className={inputClass} placeholder="Enter Generic Description" />
                      </FormField>
                      <FormField label="Model & Brand" required={isHSN38363000}>
                          <div className="flex w-full h-full">
                            <Input key={itemData?.id ? `${itemData.id}-model` : 'default-model'} className={`${inputClass} flex-1`} placeholder="Enter Model" defaultValue={itemData?.model} />
                            <div className={dividerClass} />
                            <Input key={itemData?.id ? `${itemData.id}-brand` : 'default-brand'} className={`${inputClass} flex-1`} placeholder="Enter Brand" defaultValue={itemData?.brand} />
                        </div>
                      </FormField>
                  </FormRow>
                  <FormRow>
                      <FormField label="Accessories" required={isHSN38363000}>
                         <Input key={itemData?.id ? `${itemData.id}-accessories` : 'default-accessories'} className={inputClass} placeholder="Enter Accessorties" defaultValue={itemData?.accessories} />
                      </FormField>
                      <FormField label="Accessory Status" required={isHSN38363000}>
                        <Select>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opt1">Option 1</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormField>
                  </FormRow>
                  <FormRow>
                     <FormField label="Source Country" required={isHSN38363000}>
                        <Select>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opt1">Option 1</SelectItem>
                          </SelectContent>
                        </Select>
                     </FormField>
                     <FormField label="Transit Country" required={showMandatory || isHSN38363000}>
                        <Select value={cooData[0]?.transitCountry ? 'cn' : undefined}>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cn">{cooData[0]?.transitCountry || 'CN - CHINA'}</SelectItem>
                            <SelectItem value="opt1">Option 1</SelectItem>
                          </SelectContent>
                        </Select>
                     </FormField>
                  </FormRow>
                  <FormRow>
                    <FormField label="Spec. Qty & UOM 1" required={isHSN38363000}>
                      <div className="flex w-full h-full">
                        <Input className={`${inputClass} flex-1`} placeholder="Enter Spec. Qty" />
                        <div className={dividerClass} />
                        <Select>
                          <SelectTrigger className={`${inputClass} w-[100px] border-l border-[#d0d5e3]`}>
                            <SelectValue placeholder="Select UOM 1" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nos">NOS</SelectItem>
                            <SelectItem value="kgs">KGS</SelectItem>
                            <SelectItem value="mtr">MTR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </FormField>
                    <FormField label="Spec. Qty & UOM 2" required={isHSN38363000}>
                      <div className="flex w-full h-full">
                        <Input className={`${inputClass} flex-1`} placeholder="Enter Spec. Qty" />
                        <div className={dividerClass} />
                        <Select>
                          <SelectTrigger className={`${inputClass} w-[100px] border-l border-[#d0d5e3]`}>
                            <SelectValue placeholder="Select UOM 2" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nos">NOS</SelectItem>
                            <SelectItem value="kgs">KGS</SelectItem>
                            <SelectItem value="mtr">MTR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </FormField>
                  </FormRow>
                  <FormRow>
                    <FormField label="Cus. Ntfn. Expting. Central Exc Flag" required={isHSN38363000}>
                      <div className="flex items-center px-2 h-full">
                         <FigmaSwitch checked={cusNtfn} onCheckedChange={setCusNtfn} fieldId="cus-ntfn" />
                      </div>
                    </FormField>
                    <FormField label="Batch No" required={isHSN38363000}>
                       <Input key={itemData?.id ? `${itemData.id}-batchNo` : 'default-batchNo'} className={inputClass} placeholder="Enter Batch No" defaultValue={itemData?.batchNo} />
                    </FormField>
                  </FormRow>
               </div>
              )}
            </div>
          )}

          {/* SECTION 9: FTA (Moved) */}
          {!isExport && (activeTab === 'general-tab' || !activeTab) && sections.fta && (
            <div className="flex flex-col">
              <SectionHeader title={SECTION_TITLES.fta} expanded={true} onToggle={() => toggleSection('fta')} required={isHSN38363000} rightContent={<button onClick={(e) => { e.stopPropagation(); toggleSection('fta'); }} className="p-1 hover:bg-[#D0D5E3] rounded-full transition-colors text-[#626776] hover:text-[#CF3B3B]"><X className="w-4 h-4" /></button>} />
              <FormRow>
                  <FormField label="COO No" required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Enter COO No." />
                  </FormField>
                  <FormField label="Date of Issue" required={isHSN38363000}>
                    <div className="w-full h-full relative">
                       <Input className={inputClass} placeholder="Select" />
                       <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </FormField>
              </FormRow>
              <FormRow>
                  <FormField label="Country of Issue" required={isHSN38363000}>
                    <Select>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opt1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Origin Criteria" required={isHSN38363000}>
                    <Select>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opt1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
              </FormRow>
              <FormRow>
                  <FormField label="Tarrif Shift" required={isHSN38363000}>
                    <Select>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opt1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Accu/Cumulation" required={isHSN38363000}>
                    <Select>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opt1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
              </FormRow>
              <FormRow>
                  <FormField label="Cert. It." required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Cert. It. Sr. No" />
                  </FormField>
                  <FormField label="If Others Specify" required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Enter" />
                  </FormField>
              </FormRow>
              <FormRow>
                  <FormField label="Retroactive Issur." required={isHSN38363000}>
                    <Select>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opt1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Direct Consignment" required={isHSN38363000}>
                    <Select>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opt1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
              </FormRow>
            </div>
          )}

          {/* SECTION 5: MANUFACTURER (Moved) */}
          {!isExport && (activeTab === 'general-tab' || !activeTab) && (
            <div className="flex flex-col">
              <SectionHeader 
                title={SECTION_TITLES.manufacturer} 
                expanded={sections.manufacturer} 
                onToggle={() => toggleSection('manufacturer')} 
                required={isHSN38363000} 
                rightContent={
                  <div className="flex items-center gap-2 mr-2">
                    <Checkbox 
                      id="sameAsSupplier" 
                      checked={sameAsSupplier} 
                      onCheckedChange={(checked) => {
                        const isChecked = !!checked;
                        setSameAsSupplier(isChecked);
                        if (isChecked) {
                          setManufacturerData({
                            name: 'SUMITOMO ELECTRIC HARDMETAL',
                            add1: '1-1-1, KOYADAI, ITAMI',
                            add2: 'HYOGO 664-0016',
                            city: '664-0016',
                            country: 'JP - JAPAN'
                          });
                        }
                      }} 
                    />
                    <label htmlFor="sameAsSupplier" className="text-[12px] font-medium text-[#050e25] whitespace-nowrap cursor-pointer">
                      Same as Supplier
                    </label>
                  </div>
                }
              />
              {sections.manufacturer && (
               <div className="flex flex-col">
                  <FormRow>
                      <FormField label="Name" required={showMandatory || isHSN38363000}>
                         <Input 
                            className={inputClass} 
                            placeholder="Enter name" 
                            value={manufacturerData.name || ''} 
                            onChange={(e) => handleManufacturerChange('name', e.target.value)}
                            readOnly={!!manufacturerData.name && manufacturerData.name !== ''} 
                         />
                      </FormField>
                      <FormField label="City & Pin" required={showMandatory || isHSN38363000}>
                          <div className="flex w-full h-full">
                            <Select value={manufacturerData.city ? 'city1' : undefined}>
                              <SelectTrigger className={`${inputClass} flex-1`}>
                                <SelectValue placeholder="Select City" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="city1">{manufacturerData.city || 'City 1'}</SelectItem>
                              </SelectContent>
                            </Select>
                            <div className={dividerClass} />
                            <Input 
                                className={`${inputClass} flex-1`} 
                                placeholder="Enter Pin" 
                                value={manufacturerData.city || ''} 
                                onChange={(e) => handleManufacturerChange('city', e.target.value)}
                                readOnly={!!manufacturerData.city && manufacturerData.city !== ''} 
                            />
                        </div>
                      </FormField>
                  </FormRow>
                  
                  <div className="flex w-full min-h-[64px] border-b border-[#d0d5e3]">
                      <div className="flex-1 flex border-r border-[#d0d5e3]">
                          <div className="w-[150px] bg-[#f1f4f8] shrink-0 border-[#d0d5e3] border-[1px_0px_0px_1px] flex items-center px-[4px] py-[6px]">
                              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[14px]">
                                Address{showMandatory && <span className="text-red-500 ml-1">*</span>}
                              </p>
                          </div>
                          <div className="grow bg-white border-[#d0d5e3] border-[1px_0px_0px_1px] relative">
                              <Textarea 
                                className="w-full h-full border-none resize-none p-2 text-[14px] focus-visible:ring-0" 
                                placeholder="Enter Address" 
                                value={manufacturerData.add1 && manufacturerData.add2 ? `${manufacturerData.add1}\n${manufacturerData.add2}` : (manufacturerData.add1 || '')} 
                                onChange={handleAddressChange}
                                readOnly={!!manufacturerData.add1 && !!manufacturerData.add2} 
                              />
                          </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                         <div className="h-[32px] w-full flex">
                             <div className="w-[150px] bg-[#f1f4f8] shrink-0 border-[#d0d5e3] border-[1px_0px_0px_1px] flex items-center px-[4px] py-[6px]">
                                 <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[14px] truncate" title="Ctry & Sub division">
                                   Ctry & Sub division{showMandatory && <span className="text-red-500 ml-1">*</span>}
                                 </p>
                             </div>
                             <div className="grow bg-white border-[#d0d5e3] border-[1px_0px_0px_1px] flex">
                                 <Select value={manufacturerData.country ? 'in' : undefined}>
                                  <SelectTrigger className={`${inputClass} flex-1`}>
                                    <SelectValue placeholder="Select Country" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="in">{manufacturerData.country || 'Country 1'}</SelectItem>
                                  </SelectContent>
                                </Select>
                                <div className={dividerClass} />
                                <Input className={`${inputClass} flex-1`} placeholder="Enter sub division" />
                             </div>
                         </div>
                         
                         <div className="h-[32px] w-full flex">
                              <div className="w-[150px] bg-[#f1f4f8] shrink-0 border-[#d0d5e3] border-[1px_0px_0px_1px] flex items-center px-[4px] py-[6px]">
                                 <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[14px] truncate" title="Code & Code Type">Code & Code Type</p>
                             </div>
                             <div className="grow bg-white border-[#d0d5e3] border-[1px_0px_0px_1px] flex">
                                 <Input className={`${inputClass} flex-1`} placeholder="Placeholder" />
                                 <div className={dividerClass} />
                                 <Select>
                                  <SelectTrigger className={`${inputClass} flex-1`}>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="opt1">Option 1</SelectItem>
                                  </SelectContent>
                                </Select>
                             </div>
                         </div>
                      </div>
                  </div>
               </div>
              )}
            </div>
          )}

          {/* SECTION 3: SVB DETAILS (Moved) */}
          {(activeTab === 'general-tab' || !activeTab) && (
            <div className="flex flex-col w-full">
              <SectionHeader title="3. SVB DETAILS" expanded={sections.svb} onToggle={() => toggleSection('svb')} required={isHSN38363000} rightContent={<button onClick={(e) => { e.stopPropagation(); toggleSection('svb'); }} className="p-1 hover:bg-[#D0D5E3] rounded-full transition-colors text-[#626776] hover:text-[#CF3B3B]"><X className="w-4 h-4" /></button>} />
              {sections.svb && (
               <div className="flex flex-col w-full">
                  <FormRow>
                    <FormField label="Related" required={isHSN38363000}>
                       <div className="flex items-center px-2 h-full">
                         <FigmaSwitch checked={svbRelated} onCheckedChange={setSvbRelated} fieldId="svb-related" />
                      </div>
                    </FormField>
                    <FormField label="SVB Ref No. & Dt." required={isHSN38363000}>
                      <div className="flex w-full h-full">
                        <Input className={`${inputClass} flex-1`} placeholder="Enter SVB Ref No." />
                        <div className={dividerClass} />
                        <div className="flex-1 relative">
                           <Input className={inputClass} placeholder="Select Date" />
                           <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </FormField>
                  </FormRow>
                  <FormRow>
                    <FormField label="SVB Flag" required={isHSN38363000}>
                        <Select>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select SVB Flag" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="flag1">Flag 1</SelectItem>
                          </SelectContent>
                        </Select>
                    </FormField>
                    <FormField label="Cus. House" required={isHSN38363000}>
                        <Select>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Select Customs House Code" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="code1">Code 1</SelectItem>
                          </SelectContent>
                        </Select>
                    </FormField>
                  </FormRow>
                  <FormRow>
                     <FormField label="SVB Load(Assbl)" required={isHSN38363000}>
                        <div className="flex w-full h-full">
                            <Input className={`${inputClass} flex-1`} placeholder="Enter SVB Load" />
                            <div className={dividerClass} />
                            <Select>
                              <SelectTrigger className={`${inputClass} flex-1 border-l border-[#d0d5e3]`}>
                                <SelectValue placeholder="Select Final/Provis." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="final">Final</SelectItem>
                                <SelectItem value="provis">Provis.</SelectItem>
                              </SelectContent>
                            </Select>
                        </div>
                     </FormField>
                     <FormField label="SVB Load(Duty)" required={isHSN38363000}>
                        <div className="flex w-full h-full">
                            <Input className={`${inputClass} flex-1`} placeholder="Enter SVB Load" />
                            <div className={dividerClass} />
                            <Select>
                              <SelectTrigger className={`${inputClass} flex-1 border-l border-[#d0d5e3]`}>
                                <SelectValue placeholder="Select Final/Provis." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="final">Final</SelectItem>
                                <SelectItem value="provis">Provis.</SelectItem>
                              </SelectContent>
                            </Select>
                        </div>
                     </FormField>
                  </FormRow>
               </div>
              )}
            </div>
          )}

          {/* SECTION 10: PREVIOUS BE (Moved) */}
          {!isExport && (activeTab === 'general-tab' || !activeTab) && sections.prevBe && (
            <div className="flex flex-col">
              <SectionHeader title={SECTION_TITLES.prevBe} expanded={true} onToggle={() => toggleSection('prevBe')} required={isHSN38363000} />
              <FormRow>
                  <FormField label="Previous BE No" required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Enter BE No." />
                  </FormField>
                  <FormField label="Previous BE Date" required={isHSN38363000}>
                     <div className="w-full h-full relative">
                       <Input className={inputClass} placeholder="Select" />
                       <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </FormField>
              </FormRow>
              <FormRow>
                  <FormField label="Previous unit price" required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Enter Unit Price" />
                  </FormField>
                  <FormField label="Previous Curr. Cd">
                    <Select>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opt1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
              </FormRow>
              <FormRow>
                  <FormField label="Custom House Cd." required={isHSN38363000}>
                    <Select>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opt1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
                  <div className="basis-0 content-stretch flex grow items-stretch min-h-px min-w-px relative shrink-0 z-[2]" />
              </FormRow>
            </div>
          )}

          {/* SECTION 8: RSP */}
          {!isExport && (activeTab === 'others' || !activeTab) && sections.rsp && (
            <div className="flex flex-col">
              <SectionHeader 
                  title={SECTION_TITLES.rsp} 
                  expanded={true} 
                  onToggle={() => toggleSection('rsp')} 
                  required={isHSN38363000}
                  rightContent={
                     <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-2">
                       <FigmaSwitch checked={rspEnabled} onCheckedChange={setRspEnabled} />
                     </div>
                  }
               />
              <FormRow>
                  <FormField label="Item in RSP" required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Enter Item Sr. No." />
                  </FormField>
                  <FormField label="RS/unit & Qty" required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Enter RS unit & Qty" />
                  </FormField>
              </FormRow>
              <FormRow>
                  <FormField label="Description" required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Enter Description" />
                  </FormField>
                  <div className="basis-0 content-stretch flex grow items-stretch min-h-px min-w-px relative shrink-0 z-[2]" />
              </FormRow>
              <FormRow>
                  <FormField label="Ntfn. No /Sr.no" required={isHSN38363000}>
                     <div className="flex w-full h-full">
                        <Select>
                          <SelectTrigger className={`${inputClass} flex-1`}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opt1">Option 1</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className={dividerClass} />
                        <Select>
                          <SelectTrigger className={`${inputClass} flex-1`}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opt1">Option 1</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                  </FormField>
                  <FormField label="Total Sale Amount" required={isHSN38363000}>
                     <Input className={inputClass} placeholder="Enter Total sale amount" />
                  </FormField>
              </FormRow>
            </div>
          )}





          {/* SECTION: REIMPORT */}
          {!isExport && (activeTab === 'others' || !activeTab) && sections.reimport && (
            <div className="flex flex-col w-full">
             <GridSectionHeader title={SECTION_TITLES.reimport} expanded={true} onToggle={() => toggleSection('reimport')} required={isHSN38363000} />
           <div className="w-full overflow-x-auto">
               <div className="flex w-full min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3] shrink-0 h-[34px]">
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[40px] justify-center sticky left-0 z-10 border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[50px] sticky left-[40px] z-10 border-r border-[#d0d5e3]`}>S.No</div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[100px] sticky left-[90px] z-10 border-r border-[#d0d5e3]`}>Sub It. SNo</div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>SB No. <span className="text-red-500 ml-1">*</span></div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>SB Date <span className="text-red-500 ml-1">*</span></div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Port of Export</div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Invoice Sr. No. in SB</div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Item Sr. No. in SB</div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Notification No.</div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Notification Sr. No.</div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Export Freight <span className="text-red-500 ml-1">*</span></div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Exp. Insurance <span className="text-red-500 ml-1">*</span></div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Cus. Duty <span className="text-red-500 ml-1">*</span></div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[150px]`}>Excise Duty <span className="text-red-500 ml-1">*</span></div>
                   <div className={`${cellClass} bg-[#EBEEF7] font-['Inter',sans-serif] font-semibold text-[#050e25] text-[12px] px-3 uppercase tracking-wider w-[40px] sticky right-0 z-10 border-l border-[#d0d5e3]`} />
               </div>
               <div className="w-full bg-white">
                 <div className="min-w-max flex flex-col">
                   {/* Row 1 */}
                   <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white h-[34px]">
                       <div className={`${cellClass} w-[40px] justify-center sticky left-0 z-10 bg-white border-r border-[#d0d5e3]`}><Checkbox className={checkboxClass} /></div>
                       <div className={`${cellClass} w-[50px] sticky left-[40px] z-10 bg-white border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
                       <div className={`${cellClass} w-[100px] sticky left-[90px] z-10 bg-white border-r border-[#d0d5e3]`}><Input className={inputClass} defaultValue="1" /></div>
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
                       <div className={`${cellClass} w-[40px] justify-center sticky right-0 z-10 bg-white border-l border-[#d0d5e3]`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                   </div>
                   
                   {/* Add Row */}
                   <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white h-[32px] items-center px-2">
                      <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                          <Plus className="w-4 h-4" /> Add
                      </button>
                   </div>
                 </div>
               </div>
               {/* Footer Row */}
               <div className="flex w-full min-w-max border-t border-[#d0d5e3] bg-[#f1f4f8] h-[32px] items-center px-2 shrink-0">
                   <div className="w-[40px] border-r border-[#d0d5e3] flex justify-center items-center h-full mr-2"><Checkbox className={checkboxClass} /></div>
                   <span className="text-[13px] font-semibold text-[#050e25]">Total Items: 1</span>
               </div>
           </div>
           </div>
         )}

         {/* SECTION: SW INFO */}
         {(activeTab === 'single-window' || !activeTab) && sections.swInfo && (
           <div className="flex flex-col">
            <GridSectionHeader title={SECTION_TITLES.swInfo} expanded={true} onToggle={() => toggleSection('swInfo')} required={isHSN38363000} />
            <div className="w-full overflow-x-auto bg-[#f1f4f8]">
               <div className="flex w-full min-w-max bg-[#f1f4f8] border-b border-[#d0d5e3]">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[60px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    S.No{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25] whitespace-nowrap">
                    Sub It. SNo{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[300px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    PGA Code{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[200px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    Info Type{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    Qfr{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[150px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    Info Code{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[250px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    Info Text{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[150px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    Info Date{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    Info msr{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">
                    Info UQC{showMandatory && <span className="text-red-500 ml-1">*</span>}
                  </div>
                  <div className="w-[30px] p-1"></div>
               </div>
               {/* Data Rows */}
               {swInfoData.length > 0 ? (
                 swInfoData.map((info, index) => (
                   <div key={index} className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                      <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                      <div className="w-[60px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">{info.sNo}</div>
                      <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                      <div className="w-[300px] border-r border-[#d0d5e3] p-1">
                          <p className="text-[13px] text-[#050E25] truncate">{info.pgaCode}</p>
                      </div>
                      <div className="w-[200px] border-r border-[#d0d5e3] p-1">
                          <p className="text-[13px] text-[#050E25] truncate">{info.infoType}</p>
                      </div>
                      <div className="w-[100px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select Qfr" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="qfr1">Qfr 1</SelectItem>
                              <SelectItem value="qfr2">Qfr 2</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[150px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select Code" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="code1">Code 1</SelectItem>
                              <SelectItem value="code2">Code 2</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[250px] border-r border-[#d0d5e3]">
                          <Input className={inputClass} placeholder="Enter Info Text" />
                      </div>
                      <div className="w-[150px] border-r border-[#d0d5e3] relative">
                          <Input className={inputClass} placeholder="DD/MM/YYYY" />
                          <Calendar className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
                      </div>
                      <div className="w-[120px] border-r border-[#d0d5e3]">
                          <Input className={inputClass} placeholder="Enter msr" />
                      </div>
                      <div className="w-[100px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select UQC" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kg">KG</SelectItem>
                              <SelectItem value="ltr">LTR</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                      </div>
                   </div>
                 ))
               ) : (
                 <>
                   <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                      <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                      <div className="w-[60px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                      <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                      <div className="w-[300px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="AQCS - Animal Quarantine And Certification Services" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="aqcs">AQCS - Animal Quarantine And Certification Services</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[200px] border-r border-[#d0d5e3]">
                           <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="CHR - Item Characteristics" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="chr">CHR - Item Characteristics</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[100px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select Qfr" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="qfr1">Qfr 1</SelectItem>
                              <SelectItem value="qfr2">Qfr 2</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[150px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select Code" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="code1">Code 1</SelectItem>
                              <SelectItem value="code2">Code 2</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[250px] border-r border-[#d0d5e3]">
                          <Input className={inputClass} placeholder="Enter Info Text" />
                      </div>
                      <div className="w-[150px] border-r border-[#d0d5e3] relative">
                          <Input className={inputClass} placeholder="DD/MM/YYYY" />
                          <Calendar className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
                      </div>
                      <div className="w-[120px] border-r border-[#d0d5e3]">
                          <Input className={inputClass} placeholder="Enter msr" />
                      </div>
                      <div className="w-[100px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select UQC" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kg">KG</SelectItem>
                              <SelectItem value="ltr">LTR</SelectItem>
                              <SelectItem value="mtr">MTR</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                      </div>
                   </div>
                   <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                      <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                      <div className="w-[60px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">2</div>
                      <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                      <div className="w-[300px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="AQCS - Animal Quarantine And Certification Services" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="aqcs">AQCS - Animal Quarantine And Certification Services</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[200px] border-r border-[#d0d5e3]">
                           <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="CHR - Item Characteristics" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="chr">CHR - Item Characteristics</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[100px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select Qfr" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="qfr1">Qfr 1</SelectItem>
                              <SelectItem value="qfr2">Qfr 2</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[150px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select Code" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="code1">Code 1</SelectItem>
                              <SelectItem value="code2">Code 2</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[250px] border-r border-[#d0d5e3]">
                          <Input className={inputClass} placeholder="Enter Info Text" />
                      </div>
                      <div className="w-[150px] border-r border-[#d0d5e3] relative">
                          <Input className={inputClass} placeholder="DD/MM/YYYY" />
                          <Calendar className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
                      </div>
                      <div className="w-[120px] border-r border-[#d0d5e3]">
                          <Input className={inputClass} placeholder="Enter msr" />
                      </div>
                      <div className="w-[100px] border-r border-[#d0d5e3]">
                          <Select>
                            <SelectTrigger className={inputClass + " !h-[30px]"}>
                              <SelectValue placeholder="Select UQC" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kg">KG</SelectItem>
                              <SelectItem value="ltr">LTR</SelectItem>
                              <SelectItem value="mtr">MTR</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>
                      <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                      </div>
                   </div>
                 </>
               )}
               {/* Add Row */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white h-[32px] items-center px-2">
                  <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                      <Plus className="w-4 h-4" /> Add
                  </button>
               </div>
               {/* Footer Row */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-[#f1f4f8] h-[30px] items-center px-2">
                   <span className="text-[13px] font-semibold ml-8 w-full">Total Items: {swInfoData.length > 0 ? swInfoData.length : 2}</span>
               </div>
           </div>
           </div>
         )}

         {/* SECTION: SW PRODUCTION */}
         {(activeTab === 'single-window' || !activeTab) && sections.swProduction && (
           <div className="flex flex-col">
            <GridSectionHeader title={SECTION_TITLES.swProduction} expanded={true} onToggle={() => toggleSection('swProduction')} required={isHSN38363000} />
            <div className="w-full overflow-x-auto">
               <div className="flex w-full min-w-max bg-[#f1f4f8] border-b border-[#d0d5e3]">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">S.No</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25] whitespace-nowrap">Sub It. SNo</div>
                  <div className="w-[150px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Batch Idfr.</div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Batch Qty</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">UQC</div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Dt. of Mfg</div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Date of Expiry</div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Best Before</div>
                  <div className="w-[30px] p-1"></div>
               </div>
               {/* Row 1 */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[150px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Identifieer" value="Identifieer" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="333" value="333" readOnly />
                  </div>
                  <div className="w-[80px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="KGS" value="KGS" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="12/03/2034" value="12/03/2034" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Expiry Date" />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Best Before" />
                  </div>
                  <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                  </div>
               </div>
               {/* Row 2 */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">2</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[150px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Identifieer" value="Identifieer" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="2342" value="2342" readOnly />
                  </div>
                  <div className="w-[80px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="KGS" value="KGS" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="12/03/2034" value="12/03/2034" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Expiry Date" />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Best Before" />
                  </div>
                  <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                  </div>
               </div>
               {/* Add Row */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white h-[32px] items-center px-2">
                  <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                      <Plus className="w-4 h-4" /> Add
                  </button>
               </div>
               {/* Footer Row */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-[#f1f4f8] h-[30px] items-center px-2">
                   <span className="text-[13px] font-semibold ml-8">Total Items: 2</span>
               </div>
           </div>
           </div>
         )}

         {/* SECTION: SW CONSTITUENT */}
         {(activeTab === 'single-window' || !activeTab) && sections.swConstituent && (
           <div className="flex flex-col">
            <GridSectionHeader title={SECTION_TITLES.swConstituent} expanded={true} onToggle={() => toggleSection('swConstituent')} required={isHSN38363000} />
            <div className="w-full overflow-x-auto">
               <div className="flex w-full min-w-max bg-[#f1f4f8] border-b border-[#d0d5e3]">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">S.No</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25] whitespace-nowrap">Sub It. SNo</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Const. SNo</div>
                  <div className="w-[150px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Element Name</div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Code</div>
                  <div className="w-[100px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Percentage</div>
                  <div className="w-[120px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Yield Percentage</div>
                  <div className="w-[120px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Active Ingredient</div>
                  <div className="w-[30px] p-1"></div>
               </div>
               {/* Row 1 */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[150px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Name" value="Name" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Code" value="Code" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="2" value="2" readOnly />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Yield" />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Ingredient" />
                  </div>
                  <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                  </div>
               </div>
               {/* Row 2 */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">2</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[150px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Name" value="Name" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Code" value="Code" readOnly />
                  </div>
                  <div className="w-[100px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="2" value="2" readOnly />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Yield" />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Ingredient" />
                  </div>
                  <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                  </div>
               </div>
               {/* Add Row */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white h-[32px] items-center px-2">
                  <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                      <Plus className="w-4 h-4" /> Add
                  </button>
               </div>
               {/* Footer Row */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-[#f1f4f8] h-[30px] items-center px-2">
                   <span className="text-[13px] font-semibold ml-8">Total Items: 2</span>
               </div>
           </div>
           </div>
         )}

         {/* SECTION: SW CONTROL */}
         {(activeTab === 'single-window' || !activeTab) && sections.swControl && (
           <div className="flex flex-col">
            <GridSectionHeader title={SECTION_TITLES.swControl} expanded={true} onToggle={() => toggleSection('swControl')} required={isHSN38363000} />
            <div className="w-full overflow-x-auto">
               <div className="flex w-full min-w-max bg-[#f1f4f8] border-b border-[#d0d5e3]">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">S.No</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25] whitespace-nowrap">Sub It. SNo</div>
                  <div className="w-[300px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Type Code</div>
                  <div className="w-[150px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Location</div>
                  <div className="w-[120px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Start Date</div>
                  <div className="w-[120px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">End Date</div>
                  <div className="w-[120px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Result Code</div>
                  <div className="w-[200px] border-r border-[#d0d5e3] p-1 text-[13px] font-semibold text-[#050E25]">Result Text</div>
                  <div className="w-[30px] p-1"></div>
               </div>
               {/* Row 1 */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">1</div>
                  <div className="w-[300px] border-r border-[#d0d5e3]">
                      <Select>
                        <SelectTrigger className={inputClass + " !h-[30px]"}>
                          <SelectValue placeholder="003F01 - Fumigation Control" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fumigation">003F01 - Fumigation Control</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>
                  <div className="w-[150px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Chennai" value="Chennai" readOnly />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3] relative">
                      <Input className={inputClass} placeholder="22/04/2002" value="22/04/2002" readOnly />
                      <Calendar className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3] relative">
                      <Input className={inputClass} placeholder="End Date" />
                      <Calendar className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Result Code" />
                  </div>
                  <div className="w-[200px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Result Text" />
                  </div>
                  <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                  </div>
               </div>
               {/* Row 2 */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white">
                  <div className="w-[30px] border-r border-[#d0d5e3] p-1 flex justify-center items-center"><Checkbox className={checkboxClass} /></div>
                  <div className="w-[40px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">2</div>
                  <div className="w-[80px] border-r border-[#d0d5e3] p-1 text-[13px] text-[#050E25]">2</div>
                  <div className="w-[300px] border-r border-[#d0d5e3]">
                       <Select>
                        <SelectTrigger className={inputClass + " !h-[30px]"}>
                          <SelectValue placeholder="003F01 - Fumigation Control" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fumigation">003F01 - Fumigation Control</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>
                  <div className="w-[150px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Chennai" value="Chennai" readOnly />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3] relative">
                       <Input className={inputClass} placeholder="22/04/2002" value="22/04/2002" readOnly />
                       <Calendar className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3] relative">
                      <Input className={inputClass} placeholder="End Date" />
                      <Calendar className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
                  </div>
                  <div className="w-[120px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Result Code" />
                  </div>
                  <div className="w-[200px] border-r border-[#d0d5e3]">
                      <Input className={inputClass} placeholder="Result Text" />
                  </div>
                  <div className="w-[30px] flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                  </div>
               </div>
               {/* Add Row */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-white h-[32px] items-center px-2">
                  <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                      <Plus className="w-4 h-4" /> Add
                  </button>
               </div>
               {/* Footer Row */}
               <div className="flex w-full min-w-max border-b border-[#d0d5e3] bg-[#f1f4f8] h-[30px] items-center px-2">
                   <span className="text-[13px] font-semibold ml-8">Total Items: 2</span>
               </div>
           </div>
           </div>
         )}

          {/* EXPORT SECTIONS */}
          {isExport && (activeTab === 'drawback' || !activeTab) && (
              <div className="flex flex-col w-full gap-[12px]">
                  {/* Drawback Section */}
                  <div className="flex flex-col w-full">
                      <SectionHeader title="Drawback Details" expanded={true} onToggle={() => {}} />
                      <div className="flex flex-col w-full">
                          <FormRow>
                              <FormField label="Drawback Schedule No">
                                  <Input className={inputClass} placeholder="Schedule No" />
                              </FormField>
                              <FormField label="Drawback Quantity">
                                  <Input className={inputClass} placeholder="Quantity" />
                              </FormField>
                          </FormRow>
                          <FormRow>
                              <FormField label="Drawback Unit">
                                  <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Unit" /></SelectTrigger>
                                      <SelectContent>
                                          <SelectItem value="kgs">KGS</SelectItem>
                                          <SelectItem value="nos">NOS</SelectItem>
                                      </SelectContent>
                                  </Select>
                              </FormField>
                              <FormField label="Drawback Under">
                                  <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent>
                                          <SelectItem value="74">Sec 74</SelectItem>
                                          <SelectItem value="75">Sec 75</SelectItem>
                                      </SelectContent>
                                  </Select>
                              </FormField>
                          </FormRow>
                          <FormRow>
                              <FormField label="Draw St. Rt.">
                                  <Input className={inputClass} placeholder="Rate" />
                              </FormField>
                              <FormField label="Drawback Value">
                                  <Input className={inputClass} placeholder="Value" />
                              </FormField>
                          </FormRow>
                          <FormRow>
                              <FormField label="Drawback Cap">
                                  <Input className={inputClass} placeholder="Cap" />
                              </FormField>
                              <FormField label="Drawback per">
                                  <Input className={inputClass} placeholder="Per" />
                              </FormField>
                          </FormRow>
                          <FormRow>
                              <FormField label="Drawback Amount">
                                  <Input className={inputClass} placeholder="Amount" />
                              </FormField>
                              <FormField label="Drawback Description">
                                  <Input className={inputClass} placeholder="Description" />
                              </FormField>
                          </FormRow>
                      </div>
                  </div>

                  {/* RoSCTL Section */}
                  <div className="flex flex-col w-full">
                      <SectionHeader title="RoSCTL Details" expanded={true} onToggle={() => {}} />
                      <div className="flex flex-col w-full">
                          <FormRow>
                              <FormField label="RoSCTL Schedule No">
                                  <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent>
                                          <SelectItem value="sched1">Schedule 1</SelectItem>
                                          <SelectItem value="sched2">Schedule 2</SelectItem>
                                      </SelectContent>
                                  </Select>
                              </FormField>
                              <FormField label="RoSCTL Description">
                                  <Input className={inputClass} placeholder="Description" />
                              </FormField>
                          </FormRow>
                          
                          <SectionHeader title="State levy" isSubHeader={true} />
                          <FormRow>
                              <FormField label="RoSCTL St Rate">
                                  <Input className={inputClass} placeholder="Rate" />
                              </FormField>
                              <FormField label="RoSCTL Value">
                                  <Input className={inputClass} placeholder="Value" />
                              </FormField>
                          </FormRow>
                          <FormRow>
                              <FormField label="RoSCTL Cap">
                                  <Input className={inputClass} placeholder="Cap" />
                              </FormField>
                              <FormField label="RoSCTL Per">
                                  <Input className={inputClass} placeholder="Per" />
                              </FormField>
                          </FormRow>
                          <FormRow>
                              <FormField label="RoSCTL Qty code">
                                  <Input className={inputClass} placeholder="Qty code" />
                              </FormField>
                              <FormField label="RoSCTL Amount">
                                  <Input className={inputClass} placeholder="Amount" />
                              </FormField>
                          </FormRow>

                          <SectionHeader title="Central levy" isSubHeader={true} />
                          <FormRow>
                              <FormField label="RoSCTL Cen Rate">
                                  <Input className={inputClass} placeholder="Rate" />
                              </FormField>
                              <FormField label="RoSCTL Value">
                                  <Input className={inputClass} placeholder="Value" />
                              </FormField>
                          </FormRow>
                          <FormRow>
                              <FormField label="RoSCTL Cap">
                                  <Input className={inputClass} placeholder="Cap" />
                              </FormField>
                              <FormField label="RoSCTL Per">
                                  <Input className={inputClass} placeholder="Per" />
                              </FormField>
                          </FormRow>
                          <FormRow>
                              <FormField label="RoSCTL Amount">
                                  <Input className={inputClass} placeholder="Amount" />
                              </FormField>
                              <FormField label="RoSCTL Qty code">
                                  <Input className={inputClass} placeholder="Qty code" />
                              </FormField>
                          </FormRow>

                          <SectionHeader title="Total Amount" isSubHeader={true} />
                          <FormRow>
                              <FormField label="RoSCTL Total Amount">
                                  <Input className={inputClass} placeholder="Total Amount" />
                              </FormField>
                          </FormRow>
                      </div>
                  </div>

                  {/* RODTEP Section */}
                  <div className="flex flex-col w-full">
                      <SectionHeader title="RODTEP Details" expanded={true} onToggle={() => {}} />
                      <div className="flex flex-col w-full">
                           <FormRow>
                              <FormField label="RODTEP Applicability">
                                  <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent>
                                          <SelectItem value="yes">Yes</SelectItem>
                                          <SelectItem value="no">No</SelectItem>
                                      </SelectContent>
                                  </Select>
                              </FormField>
                              <FormField label="RODTEP Quantity">
                                  <Input className={inputClass} placeholder="Quantity" />
                              </FormField>
                           </FormRow>
                           <FormRow>
                              <FormField label="RODTEP UOM">
                                  <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="UOM" /></SelectTrigger>
                                      <SelectContent>
                                          <SelectItem value="kgs">KGS</SelectItem>
                                          <SelectItem value="nos">NOS</SelectItem>
                                      </SelectContent>
                                  </Select>
                              </FormField>
                              <FormField label="RODTEP Description">
                                  <Input className={inputClass} placeholder="Description" />
                              </FormField>
                           </FormRow>
                      </div>
                  </div>
              </div>
          )}

          {isExport && (activeTab === 'igst' || !activeTab) && (
              <div className="flex flex-col w-full">
                  <SectionHeader title="IGST Payment Details" expanded={true} onToggle={() => {}} />
                  <FormRow>
                      <FormField label="IGST Payment Status" required>
                           <Select>
                              <SelectTrigger className={inputClass}>
                                  <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="paid">Paid</SelectItem>
                                  <SelectItem value="pending">Pending</SelectItem>
                              </SelectContent>
                           </Select>
                      </FormField>
                      <FormField label="Taxable Value">
                          <Input className={inputClass} placeholder="Value" />
                      </FormField>
                  </FormRow>
                  <FormRow>
                      <FormField label="IGST Rate (%)">
                           <Select>
                              <SelectTrigger className={inputClass}>
                                  <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="5">5%</SelectItem>
                                  <SelectItem value="12">12%</SelectItem>
                                  <SelectItem value="18">18%</SelectItem>
                              </SelectContent>
                           </Select>
                      </FormField>
                      <FormField label="IGST Amount">
                          <Input className={inputClass} placeholder="Amount" />
                      </FormField>
                  </FormRow>
                  <FormRow>
                      <FormField label="GST Comp Cess Rate">
                          <Input className={inputClass} placeholder="Rate" />
                      </FormField>
                      <FormField label="GST Comp Cess Amount">
                          <Input className={inputClass} placeholder="Amount" />
                      </FormField>
                  </FormRow>

                  <div className="flex flex-col w-full mt-4">
                      <div className="h-[34px] bg-[#DDE3F2] flex items-center justify-center border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid relative">
                          <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-[#F97316]" />
                              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Reexport</span>
                          </div>
                      </div>
                      <div className="overflow-x-auto bg-white border-l border-[#d0d5e3]">
                          <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                              {["S.No", "Sub It. SNo", "Manual BE", "BE Site", "BE No", "BE Date", "BE Invoice Serial No", "BE Item Serial No", "BE Quantity Utilized", "BE Item Description", "BE Quantity", "BE UQC", "BE Assessable Value (INR)", "BE Duty Paid", "BE Duty Payment Date", "BE Other Identifiable Parameter", "BE Assessable Value (Claim)", "BE Item Used", "Commissioner Permission", "Import Credit", "Personal Used", "Modvat Availed", "Modvat Repaid"].map((h, i) => (
                                  <div key={i} className={`${cellClass} ${headerClass} ${i === 0 ? "w-[50px] justify-center" : "w-[150px]"}`}>{h}</div>
                              ))}
                               <div className={`${cellClass} ${headerClass} w-[40px]`} />
                          </div>
                          <div className="flex min-w-max border-b border-[#d0d5e3]">
                               <div className={`${cellClass} w-[50px] justify-center bg-white`}>1</div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="yes">Yes</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="site1">INBG1 - Airbag</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1234548" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><div className="flex items-center px-2 gap-2 w-full">08/08/2025 <Calendar className="w-3 h-3 ml-auto text-gray-400"/></div></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="2" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="2" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="yes">Yes</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="Screw parts" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="65" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="bag">BAG</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="7654.34" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="7654" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><div className="flex items-center px-2 gap-2 w-full">09/08/2025 <Calendar className="w-3 h-3 ml-auto text-gray-400"/></div></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1234545" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="7654.34" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="yes">Yes</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="yes">Yes</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="yes">Yes</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="yes">Yes</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="yes">Yes</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="yes">Yes</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[40px] justify-center bg-white`}>
                                   <MoreVertical className="w-4 h-4 text-[#626776]" />
                               </div>
                          </div>
                           <div className="flex items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer border-b border-[#d0d5e3] bg-white gap-1">
                                <Plus className="w-3 h-3" /> Add
                           </div>
                      </div>
                  </div>

                  <div className="flex flex-col w-full mt-4">
                      <div className="h-[34px] bg-[#DDE3F2] flex items-center justify-center border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid relative">
                          <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-[#F97316]" />
                              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Job Work Details</span>
                          </div>
                      </div>
                      <div className="overflow-x-auto bg-white border-l border-[#d0d5e3]">
                          <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                              {["S.No", "Sub It. SNo", "Job work Notf No.", "BE Number", "BE Date", "BE Invoice Sr. No.", "BE Invoice No.", "BE Item Number", "BE Port Code", "BE Qty Used", "Qty Units"].map((h, i) => (
                                  <div key={i} className={`${cellClass} ${headerClass} ${i === 0 ? "w-[50px] justify-center" : "w-[150px]"}`}>{h}</div>
                              ))}
                               <div className={`${cellClass} ${headerClass} w-[40px]`} />
                          </div>
                          <div className="flex min-w-max border-b border-[#d0d5e3]">
                               <div className={`${cellClass} w-[50px] justify-center bg-white`}>1</div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="12345432" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1234567" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><div className="flex items-center px-2 gap-2 w-full">08/08/2025 <Calendar className="w-3 h-3 ml-auto text-gray-400"/></div></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1234567" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="123456" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="ACODE" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="858.5" /></div>
                               <div className={`${cellClass} w-[150px] bg-white`}>
                                   <Select>
                                      <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                      <SelectContent><SelectItem value="kgs">KGS</SelectItem></SelectContent>
                                   </Select>
                               </div>
                               <div className={`${cellClass} w-[40px] justify-center bg-white`}>
                                   <MoreVertical className="w-4 h-4 text-[#626776]" />
                               </div>
                          </div>
                           <div className="flex items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer border-b border-[#d0d5e3] bg-white gap-1">
                                <Plus className="w-3 h-3" /> Add
                           </div>
                      </div>
                  </div>
              </div>
          )}

          {isExport && (activeTab === 'ar4' || !activeTab) && (
              <div className="flex flex-col w-full">
                   <div className="flex flex-col w-full mb-4">
                        <div className="h-[34px] bg-[#EBEEF7] flex items-center justify-center px-2 border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid relative">
                            <div className="flex justify-center items-center gap-2">
                                <FileText className="w-4 h-4 text-[#3874FF]" />
                                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px] uppercase">AR4 Details</span>
                            </div>
                        </div>
                        <div className="overflow-x-auto bg-white border-l border-[#d0d5e3]">
                            <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                                 <div className={`${cellClass} ${headerClass} w-[30px] justify-center`}>
                                     <Checkbox className="w-4 h-4" />
                                 </div>
                                 {["S.No", "Sub Item Sr.No.", "AR4 Number *", "AR4 Date", "Commissionerate *", "Division *", "Range *", "Remarks"].map((h, i) => (
                                     <div key={i} className={`${cellClass} ${headerClass} ${i === 0 ? "w-[50px] justify-center" : "w-[150px]"}`}>
                                         {h.includes('*') ? (
                                             <>
                                                 {h.replace(' *', '')}
                                                 <span className="text-[#CF3B3B] ml-1">*</span>
                                             </>
                                         ) : (
                                             h
                                         )}
                                     </div>
                                 ))}
                                 <div className={`${cellClass} ${headerClass} w-[40px]`} />
                            </div>
                            <div className="flex min-w-max border-b border-[#d0d5e3]">
                                 <div className={`${cellClass} w-[30px] justify-center bg-white`}>
                                     <Checkbox className="w-4 h-4" />
                                 </div>
                                 <div className={`${cellClass} w-[50px] justify-center bg-white`}>1</div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={`${inputClass} border-red-500`} defaultValue="" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><div className="flex items-center px-2 gap-2 w-full">08/08/2025 <Calendar className="w-3 h-3 ml-auto text-gray-400"/></div></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}>
                                     <Select>
                                        <SelectTrigger className={`${inputClass} border-red-500`}><SelectValue placeholder="Select" /></SelectTrigger>
                                        <SelectContent><SelectItem value="comm1">Commissioner 1</SelectItem></SelectContent>
                                     </Select>
                                 </div>
                                 <div className={`${cellClass} w-[150px] bg-white`}>
                                     <Select>
                                        <SelectTrigger className={`${inputClass} border-red-500`}><SelectValue placeholder="Select" /></SelectTrigger>
                                        <SelectContent><SelectItem value="div1">Division 1</SelectItem></SelectContent>
                                     </Select>
                                 </div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={`${inputClass} border-red-500`} defaultValue="" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="There are remarks" /></div>
                                 <div className={`${cellClass} w-[40px] justify-center bg-white`}>
                                     <MoreVertical className="w-4 h-4 text-[#626776]" />
                                 </div>
                            </div>
                            <div className="flex min-w-max border-b border-[#d0d5e3]">
                                 <div className={`${cellClass} w-[30px] justify-center bg-white`}>
                                     <Checkbox className="w-4 h-4" />
                                 </div>
                                 <div className={`${cellClass} w-[50px] justify-center bg-white`}>2</div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="2" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={`${inputClass} border-red-500`} defaultValue="" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><div className="flex items-center px-2 gap-2 w-full">08/08/2025 <Calendar className="w-3 h-3 ml-auto text-gray-400"/></div></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}>
                                     <Select>
                                        <SelectTrigger className={`${inputClass} border-red-500`}><SelectValue placeholder="Select" /></SelectTrigger>
                                        <SelectContent><SelectItem value="comm1">Commissioner 1</SelectItem></SelectContent>
                                     </Select>
                                 </div>
                                 <div className={`${cellClass} w-[150px] bg-white`}>
                                     <Select>
                                        <SelectTrigger className={`${inputClass} border-red-500`}><SelectValue placeholder="Select" /></SelectTrigger>
                                        <SelectContent><SelectItem value="div1">Division 1</SelectItem></SelectContent>
                                     </Select>
                                 </div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={`${inputClass} border-red-500`} defaultValue="" /></div>
                                 <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="There are remarks" /></div>
                                 <div className={`${cellClass} w-[40px] justify-center bg-white`}>
                                     <MoreVertical className="w-4 h-4 text-[#626776]" />
                                 </div>
                            </div>
                            <div className="flex items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer border-b border-[#d0d5e3] bg-white gap-1">
                                <Plus className="w-3 h-3" /> Add
                            </div>
                        </div>
                   </div>
                   <div className="flex flex-col w-full">
                      <div className="bg-[#EBEEF7] h-[34px] flex items-center justify-center px-3 gap-2 border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid relative">
                           <div className="flex items-center gap-2">
                               <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px] uppercase">
                                   Service Tax Refund
                               </span>
                           </div>
                      </div>
                      
                      <div className="grid grid-cols-1 mb-4">
                          <FormField label="Item Code">
                              <Input className={inputClass} placeholder="Item Code as per STR Directory" />
                          </FormField>
                      </div>
                   </div>
              </div>
          )}

          {isExport && (activeTab === 'other-info' || !activeTab) && (
              <div className="flex flex-col w-full">
                   <div className="flex flex-col w-full bg-[rgba(255,255,255,0)] border border-[#d0d5e3] border-b-0 gap-3 p-[0px] mb-[-1px]">
                        {/* DEPB */}
                        <div className="flex flex-col w-full">
                            <SectionHeader title="DEPB" isSubHeader={true} />
                            <div className="flex flex-col w-full">
                                <FormRow>
                                    <FormField label="Group Code">
                                        <Input className={inputClass} placeholder="Group Code" />
                                    </FormField>
                                    <FormField label="Item Code">
                                        <Input className={inputClass} placeholder="Item Code" />
                                    </FormField>
                                </FormRow>
                                <FormRow>
                                    <FormField label="Quantity">
                                        <Input className={inputClass} placeholder="Quantity" />
                                    </FormField>
                                    <EmptyField />
                                </FormRow>
                            </div>
                        </div>

                        {/* Packaging */}
                        <div className="flex flex-col w-full">
                            <SectionHeader title="Packaging" isSubHeader={true} />
                            <div className="flex flex-col w-full">
                                <FormRow>
                                    <FormField label="Hawb No.">
                                        <Input className={inputClass} placeholder="Hawb No." />
                                    </FormField>
                                    <FormField label="Total Package">
                                        <Input className={inputClass} placeholder="Total Package" />
                                    </FormField>
                                </FormRow>
                            </div>
                        </div>

                        {/* Raw Material Table */}
                        <div className="flex flex-col w-full mt-2">
                             <div className="flex items-center justify-center px-3 h-[34px] bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                                 <div className="flex items-center gap-2">
                                     <Box className="w-4 h-4 text-[#FF6F61]" />
                                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">Raw Material</span>
                                 </div>
                             </div>
                             <div className="w-full overflow-x-auto border border-[#d0d5e3] bg-white">
                                 <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                                     <div className={`${cellClass} ${headerClass} w-[40px] justify-center`}><Checkbox className={checkboxClass} /></div>
                                     <div className={`${cellClass} ${headerClass} w-[50px]`}>S.No</div>
                                     <div className={`${cellClass} ${headerClass} w-[120px]`}>Sub Item Sr.No.</div>
                                     <div className={`${cellClass} ${headerClass} w-[300px]`}>Raw Material Code</div>
                                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Quantity</div>
                                     <div className={`${cellClass} ${headerClass} w-[40px]`} />
                                 </div>
                                 <div className="flex flex-col w-full">
                                     {/* Data Row */}
                                     <div className="flex min-w-max border-b border-[#d0d5e3]">
                                         <div className={`${cellClass} w-[40px] justify-center bg-white`}><Checkbox className={checkboxClass} /></div>
                                         <div className={`${cellClass} w-[50px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                                         <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                                         <div className={`${cellClass} w-[300px] bg-white`}><Input className={inputClass} defaultValue="KGS" /></div>
                                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="345" /></div>
                                         <div className={`${cellClass} w-[40px] justify-center bg-white`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                                     </div>
                                     {/* Add Row Button */}
                                     <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1">
                                         <Plus className="w-3 h-3" /> Add
                                     </div>
                                 </div>
                                 {/* Footer */}
                                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px]">
                                     <div className="w-[40px] border-r border-[#d0d5e3]" />
                                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold">1</div>
                                     <div className="flex-1" />
                                 </div>
                             </div>
                        </div>

                        {/* CESS Table */}
                        <div className="flex flex-col w-full mt-4">
                             <div className="flex items-center justify-center px-3 h-[34px] bg-[#EBEEF7] border border-[#d0d5e3] border-b-0">
                                 <div className="flex items-center gap-2">
                                     <Calculator className="w-4 h-4 text-[#A855F7]" />
                                     <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] text-[13px]">CESS</span>
                                 </div>
                             </div>
                             <div className="w-full overflow-x-auto border border-[#d0d5e3] bg-white">
                                 <div className="flex min-w-max bg-[#EBEEF7] border-b border-[#d0d5e3]">
                                     <div className={`${cellClass} ${headerClass} w-[40px] justify-center`}><Checkbox className={checkboxClass} /></div>
                                     <div className={`${cellClass} ${headerClass} w-[50px]`}>S.No</div>
                                     <div className={`${cellClass} ${headerClass} w-[120px]`}>Sub Item Sr. No.</div>
                                     <div className={`${cellClass} ${headerClass} w-[350px]`}>Cess Act Code/ Item Serial No. in Export Tariff</div>
                                     <div className={`${cellClass} ${headerClass} w-[150px]`}>Quantity</div>
                                     <div className={`${cellClass} ${headerClass} w-[40px]`} />
                                 </div>
                                 <div className="flex flex-col w-full">
                                     {/* Row 1 */}
                                     <div className="flex min-w-max border-b border-[#d0d5e3]">
                                         <div className={`${cellClass} w-[40px] justify-center bg-white`}><Checkbox className={checkboxClass} /></div>
                                         <div className={`${cellClass} w-[50px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                                         <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="1" /></div>
                                         <div className={`${cellClass} w-[350px] bg-white`}><Input className={inputClass} defaultValue="01" /></div>
                                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="808" /></div>
                                         <div className={`${cellClass} w-[40px] justify-center bg-white`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                                     </div>
                                     {/* Row 2 */}
                                     <div className="flex min-w-max border-b border-[#d0d5e3]">
                                         <div className={`${cellClass} w-[40px] justify-center bg-white`}><Checkbox className={checkboxClass} /></div>
                                         <div className={`${cellClass} w-[50px] bg-white`}><Input className={inputClass} defaultValue="2" /></div>
                                         <div className={`${cellClass} w-[120px] bg-white`}><Input className={inputClass} defaultValue="2" /></div>
                                         <div className={`${cellClass} w-[350px] bg-white`}><Input className={inputClass} defaultValue="02" /></div>
                                         <div className={`${cellClass} w-[150px] bg-white`}><Input className={inputClass} defaultValue="808" /></div>
                                         <div className={`${cellClass} w-[40px] justify-center bg-white`}><MoreVertical className="w-4 h-4 text-[#626776]" /></div>
                                     </div>
                                     {/* Add Row Button */}
                                     <div className="flex w-full items-center p-2 text-[#3874FF] text-xs font-medium cursor-pointer bg-white gap-1">
                                         <Plus className="w-3 h-3" /> Add
                                     </div>
                                 </div>
                                 {/* Footer */}
                                 <div className="flex w-full bg-[#F1F4F8] border-t border-[#d0d5e3] h-[32px]">
                                     <div className="w-[40px] border-r border-[#d0d5e3]" />
                                     <div className="w-[50px] border-r border-[#d0d5e3] flex items-center px-2 text-[12px] font-semibold">2</div>
                                     <div className="flex-1" />
                                 </div>
                             </div>
                        </div>
                   </div>
              </div>
          )}
          {isExport && (activeTab === 'other-info' || !activeTab) && (
              <div className="flex flex-col w-full">
                  <SectionHeader title="Other Info" expanded={true} onToggle={() => {}} />
                   <div className="flex flex-col w-full bg-[rgba(255,255,255,0)] border border-[#d0d5e3] border-t-0 gap-3 p-[0px]">
                       
                       {/* Item Manufacturer */}
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
                           <FormRow>
                               <FormField label="Address 2">
                                   <Input className={inputClass} placeholder="Address 2" />
                               </FormField>
                               <FormField label="City">
                                   <Select>
                                       <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                       <SelectContent><SelectItem value="city1">City 1</SelectItem></SelectContent>
                                   </Select>
                               </FormField>
                           </FormRow>
                           <FormRow>
                               <FormField label="Country Subdivision">
                                   <Input className={inputClass} placeholder="Country Subdivision" />
                               </FormField>
                               <FormField label="Pin">
                                   <Input className={inputClass} placeholder="Pin" />
                               </FormField>
                           </FormRow>
                           <FormRow>
                               <FormField label="Country">
                                   <Select>
                                       <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                       <SelectContent><SelectItem value="in">India</SelectItem></SelectContent>
                                   </Select>
                               </FormField>
                               <EmptyField />
                           </FormRow>
                       </div>

                       {/* Third Party Export */}
                       <div className="flex flex-col w-full">
                           <SectionHeader title="Third Party Export" isSubHeader={true} />
                           <div className="flex flex-col w-full">
                               <FormRow>
                                   <FormField label="Name">
                                       <div className="relative w-full h-full">
                                           <Input className={inputClass} placeholder="Name" />
                                           <LayoutGrid className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                       </div>
                                   </FormField>
                                   <FormField label="ID">
                                       <div className="relative w-full h-full">
                                           <Input className={inputClass} placeholder="ID" />
                                           <LayoutGrid className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                       </div>
                                   </FormField>
                               </FormRow>
                               <FormRow>
                                   <FormField label="IEC">
                                       <Input className={inputClass} placeholder="IEC" />
                                   </FormField>
                                   <FormField label="Branch SI No">
                                       <Input className={inputClass} placeholder="Branch SI No" />
                                   </FormField>
                               </FormRow>
                               <FormRow>
                                   <FormField label="Address 1">
                                       <Input className={inputClass} placeholder="Address 1" />
                                   </FormField>
                                   <FormField label="Address 2">
                                       <Input className={inputClass} placeholder="Address 2" />
                                   </FormField>
                               </FormRow>
                               <FormRow>
                                   <FormField label="City">
                                       <Input className={inputClass} placeholder="City" />
                                   </FormField>
                                   <FormField label="Third Party Country Subdivision">
                                       <Select>
                                           <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                           <SelectContent><SelectItem value="opt1">Option 1</SelectItem></SelectContent>
                                       </Select>
                                   </FormField>
                               </FormRow>
                               <FormRow>
                                   <FormField label="Third Party Country Code">
                                       <Select>
                                           <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                           <SelectContent><SelectItem value="opt1">Option 1</SelectItem></SelectContent>
                                       </Select>
                                   </FormField>
                                   <FormField label="Third Party Pin">
                                       <Input className={inputClass} placeholder="Pin" />
                                   </FormField>
                               </FormRow>
                               <FormRow>
                                   <FormField label="GSTIN Type">
                                       <Select>
                                           <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                           <SelectContent><SelectItem value="opt1">Option 1</SelectItem></SelectContent>
                                       </Select>
                                   </FormField>
                                   <FormField label="GSTIN ID">
                                       <Input className={inputClass} placeholder="ID" />
                                   </FormField>
                               </FormRow>
                           </div>
                       </div>

                       {/* Accessories */}
                       <div className="flex flex-col w-full">
                           <SectionHeader title="Accessories" isSubHeader={true} />
                           <div className="flex flex-col w-full">
                               <FormRow>
                                   <FormField label="Description of Accessories">
                                       <Input className={inputClass} placeholder="Description" />
                                   </FormField>
                                   <FormField label="Accessory Status">
                                       <Select>
                                           <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                           <SelectContent><SelectItem value="opt1">Option 1</SelectItem></SelectContent>
                                       </Select>
                                   </FormField>
                               </FormRow>
                               <FormRow>
                                   <FormField label="UOM">
                                       <Select>
                                           <SelectTrigger className={inputClass}><SelectValue placeholder="Select" /></SelectTrigger>
                                           <SelectContent><SelectItem value="opt1">Option 1</SelectItem></SelectContent>
                                       </Select>
                                   </FormField>
                                   <EmptyField />
                               </FormRow>
                           </div>
                       </div>
                   </div>
              </div>
           )}

         {/* SECTION: STATEMENTS */}
         {(activeTab === 'statements' || !activeTab) && sections.statements && (
           <div className={`flex flex-col w-full ${activeTab === 'statements' ? 'flex-1 min-h-0' : ''}`}>
            <GridSectionHeader title={SECTION_TITLES.statements} expanded={true} onToggle={() => toggleSection('statements')} required={isHSN38363000} />
            <div className={`w-full bg-white border-b border-[#d0d5e3] ${activeTab === 'statements' ? 'flex-1 overflow-hidden pb-3' : 'h-[200px] overflow-auto'}`}>
               <StatementsTable showHeader={false} propData={statementsData} enableGrouping={false} />
            </div>
           </div>
         )}

         {/* SECTION: SUPPORTING DOCS */}
         {(activeTab === 'supporting-documents' || !activeTab) && sections.supportingDocs && (
           <div className={`flex flex-col w-full ${activeTab === 'supporting-documents' ? 'flex-1 min-h-0' : ''}`}>
            <GridSectionHeader title={SECTION_TITLES.supportingDocs} expanded={true} onToggle={() => toggleSection('supportingDocs')} required={isHSN38363000} />
            <div className={`w-full bg-white border-b border-[#d0d5e3] ${activeTab === 'supporting-documents' ? 'flex-1 overflow-hidden pb-3' : 'h-[185px]'}`}>
              <SupportingDocumentsTable propData={supportingDocsData} showHeader={false} enableGrouping={false} />
            </div>
            </div>
          )}
      </div>
    </div>
    </div>
  );
}
