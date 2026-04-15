import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronDown, Plus, Trash2, FileText, ScrollText } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

// Styles from EnhancedJobDetailsForm.tsx
const INPUT_STYLES = {
  height: '30px',
  borderRadius: '0px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
};

const DEFAULT_BORDER = {
  borderTop: '1px solid #D0D5E3',
};

interface FormLabelProps {
  children: React.ReactNode;
  required?: boolean;
  fieldId: string;
  isHighlighted: boolean;
  className?: string;
}

const FormLabel = ({ children, required = false, fieldId, isHighlighted, className = '' }: FormLabelProps) => {
  const getStyle = () => {
    if (isHighlighted) {
      return {
        backgroundColor: '#CEF6F0',
        borderTop: '1px solid #02B196',
        borderRight: '1px solid #02B196',
        borderBottom: '1px solid #02B196',
        borderLeft: '1px solid #02B196',
        zIndex: 10
      };
    }
    return {
      backgroundColor: '#F3F5FA',
      borderTop: '1px solid #D0D5E3',
      borderRight: '1px solid #D0D5E3',
      borderLeft: '1px solid #D0D5E3',
      // No bottom border by default
    };
  };

  return (
    <div 
      className={`px-3 py-2 text-[14px] font-semibold text-[#050E25] flex items-center h-full whitespace-nowrap overflow-hidden text-ellipsis relative transition-colors duration-200 ${className}`}
      style={{
        ...INPUT_STYLES,
        ...getStyle(),
        height: '100%', // Fill the grid cell
      }}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </div>
  );
};

interface FormInputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  fieldId: string;
  onHover: (id: string, hover: boolean) => void;
  onFocus: (id: string, focus: boolean) => void;
  isFocused: boolean;
  isHovered: boolean;
}

const FormInput = ({ placeholder, type = "text", className = "", fieldId, onHover, onFocus, isFocused, isHovered }: FormInputProps) => {
  const getStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        zIndex: 20
      };
    }
    if (isHovered) {
      return {
        border: '1px solid #3874FF',
        zIndex: 20
      };
    }
    return {
      ...DEFAULT_BORDER,
    };
  };

  return (
    <input 
      type={type}
      placeholder={placeholder}
      className={`w-full px-2 py-1.5 outline-none bg-white placeholder:text-gray-400 relative transition-all duration-200 ${className}`}
      style={{
        ...INPUT_STYLES,
        ...getStyle(),
      }}
      onMouseEnter={() => onHover(fieldId, true)}
      onMouseLeave={() => onHover(fieldId, false)}
      onFocus={() => onFocus(fieldId, true)}
      onBlur={() => onFocus(fieldId, false)}
    />
  );
};

interface FormSelectProps {
  placeholder?: string;
  fieldId: string;
  onHover: (id: string, hover: boolean) => void;
  onFocus: (id: string, focus: boolean) => void;
  isFocused: boolean;
  isHovered: boolean;
}

const FormSelect = ({ placeholder, fieldId, onHover, onFocus, isFocused, isHovered }: FormSelectProps) => {
  const getStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        zIndex: 20
      };
    }
    if (isHovered) {
      return {
        border: '1px solid #3874FF',
        zIndex: 20
      };
    }
    return {
      ...DEFAULT_BORDER,
    };
  };

  return (
    <div 
      className="w-full h-full relative"
      onMouseEnter={() => onHover(fieldId, true)}
      onMouseLeave={() => onHover(fieldId, false)}
    >
      <Select onOpenChange={(open) => onFocus(fieldId, open)}>
        <SelectTrigger 
           className="w-full px-2 py-1.5 text-[14px] bg-white transition-all duration-200 border-none focus:ring-0"
           style={{
             ...INPUT_STYLES,
             ...getStyle(),
           }}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

interface DatePickerProps {
  placeholder?: string;
  fieldId: string;
  onHover: (id: string, hover: boolean) => void;
  onFocus: (id: string, focus: boolean) => void;
  isFocused: boolean;
  isHovered: boolean;
}

const DatePicker = ({ placeholder, fieldId, onHover, onFocus, isFocused, isHovered }: DatePickerProps) => {
  const [date, setDate] = React.useState<Date>();
  
  const getStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        zIndex: 20
      };
    }
    if (isHovered) {
      return {
        border: '1px solid #3874FF',
        zIndex: 20
      };
    }
    return {
      ...DEFAULT_BORDER,
    };
  };

  return (
    <Popover onOpenChange={(open) => onFocus(fieldId, open)}>
      <PopoverTrigger asChild>
        <button 
          className="w-full px-2 py-1.5 text-left text-[14px] bg-white flex items-center justify-between group outline-none relative transition-all duration-200"
          style={{
            ...INPUT_STYLES,
            ...getStyle(),
          }}
          onMouseEnter={() => onHover(fieldId, true)}
          onMouseLeave={() => onHover(fieldId, false)}
        >
          <span className={date ? "text-[#050E25]" : "text-gray-400"}>
            {date ? format(date, "dd-MM-yyyy") : placeholder}
          </span>
          <CalendarIcon className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
             setDate(d);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

interface ToggleProps {
  fieldId: string;
  defaultChecked?: boolean;
  onHover: (id: string, hover: boolean) => void;
  onFocus: (id: string, focus: boolean) => void;
  isFocused: boolean;
  isHovered: boolean;
}

const Toggle = ({ fieldId, defaultChecked = false, onHover, onFocus, isFocused, isHovered }: ToggleProps) => {
  const [checked, setChecked] = useState(defaultChecked);
  
  const getStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        zIndex: 20
      };
    }
    if (isHovered) {
      return {
        border: '1px solid #3874FF',
        zIndex: 20
      };
    }
    return {
      ...DEFAULT_BORDER,
    };
  };

  return (
    <div 
      className="w-full h-full px-2 flex items-center gap-2 bg-white relative transition-all duration-200 cursor-pointer"
      style={{
        ...INPUT_STYLES,
        ...getStyle(),
      }}
      onMouseEnter={() => onHover(fieldId, true)}
      onMouseLeave={() => onHover(fieldId, false)}
      onClick={() => {
        setChecked(!checked);
        onFocus(fieldId, true);
      }}
    >
       <div className="relative h-3 w-[25px]">
         <div
           className={`w-full h-full rounded-full transition-colors duration-200 ${
             checked ? 'bg-[#00B196]' : 'bg-[#CF3B3B]'
           }`}
           style={{ borderRadius: '6px' }}
         >
           <div
             className={`absolute top-0 w-4 h-3 bg-white rounded-full transition-transform duration-200 shadow-lg ${
               checked ? 'translate-x-[9px]' : 'translate-x-0'
             }`}
             style={{ borderRadius: '6px' }}
           />
         </div>
       </div>
       <span className="text-[14px] text-[#050E25] font-[Inter]">{checked ? "Yes" : "No"}</span>
    </div>
  );
};

export default function ShipmentDetailsForm() {
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // Package Rows State
  const [packageRows, setPackageRows] = useState([
    { id: 1, from: '', to: '', code: '' }
  ]);
  
  // Navigation State
  const [activeTab, setActiveTab] = useState<'main' | 'eou'>('main');

  const addPackageRow = () => {
    setPackageRows(prev => [
      ...prev,
      { id: prev.length > 0 ? Math.max(...prev.map(p => p.id)) + 1 : 1, from: '', to: '', code: '' }
    ]);
  };

  const removePackageRow = (id: number) => {
    if (packageRows.length > 1) {
       setPackageRows(prev => prev.filter(row => row.id !== id));
    }
  };

  const handleHover = (id: string, hover: boolean) => {
    if (hover) setHoveredField(id);
    else if (hoveredField === id) setHoveredField(null);
  };

  const handleFocus = (id: string, focus: boolean) => {
    if (focus) setFocusedField(id);
    else if (focusedField === id) setFocusedField(null);
  };

  const isHighlighted = (id: string) => hoveredField === id || focusedField === id;

  const renderLabel = (id: string, text: string, required: boolean = false) => (
    <FormLabel fieldId={id} isHighlighted={isHighlighted(id)} required={required}>
      {text}
    </FormLabel>
  );

  const renderInput = (id: string, placeholder: string) => (
    <FormInput 
      fieldId={id} 
      placeholder={placeholder} 
      onHover={handleHover} 
      onFocus={handleFocus}
      isHovered={hoveredField === id}
      isFocused={focusedField === id}
    />
  );

  const renderSelect = (id: string, placeholder: string) => (
    <FormSelect 
      fieldId={id} 
      placeholder={placeholder} 
      onHover={handleHover} 
      onFocus={handleFocus}
      isHovered={hoveredField === id}
      isFocused={focusedField === id}
    />
  );

  const renderDatePicker = (id: string, placeholder: string) => (
    <DatePicker 
      fieldId={id} 
      placeholder={placeholder} 
      onHover={handleHover} 
      onFocus={handleFocus}
      isHovered={hoveredField === id}
      isFocused={focusedField === id}
    />
  );

  const renderToggle = (id: string, defaultChecked: boolean = false, activeColor?: string, inactiveColor?: string) => (
    <Toggle 
      fieldId={id} 
      defaultChecked={defaultChecked}
      onHover={handleHover} 
      onFocus={handleFocus}
      isHovered={hoveredField === id}
      isFocused={focusedField === id}
    />
  );

  return (
    <div className="w-full h-full flex overflow-hidden absolute top-0 left-0">
      {/* Left Sidebar */}
      <div className="w-[80px] bg-[#36415A] border-r border-[#E2E8F0] h-full flex flex-col shrink-0 relative transition-all duration-300">
        <div className="flex-1 overflow-y-auto py-2 no-scrollbar bg-[rgb(54,65,90)]">
           <div
              className={`
                cursor-pointer transition-colors flex flex-col items-center justify-center py-4 px-1 gap-2 border-l-0
                ${activeTab === 'main' ? 'bg-[#2A3449] text-white' : 'text-[#A0AEC0] hover:bg-[#4A5568]'}
              `}
              onClick={() => setActiveTab('main')}
            >
               <FileText className="size-6 shrink-0" />
               <span className="text-[12px] text-center leading-tight font-medium">
                 Main Info
               </span>
            </div>

           <div
              className={`
                cursor-pointer transition-colors flex flex-col items-center justify-center py-4 px-1 gap-2 border-l-0
                ${activeTab === 'eou' ? 'bg-[#2A3449] text-white' : 'text-[#A0AEC0] hover:bg-[#4A5568]'}
              `}
              onClick={() => setActiveTab('eou')}
            >
               <ScrollText className="size-6 shrink-0" />
               <span className="text-[12px] text-center leading-tight font-medium">
                 EOU Details
               </span>
            </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white m-3 rounded-sm border border-[#D0D5E3] shadow-sm">
        {activeTab === 'main' ? (
          <div className="flex flex-col h-full">
        {/* SHIPMENT DETAILS HEADER */}
        <div className="bg-[#EBEEF7] py-2 text-center">
          <h2 className="text-[14px] font-bold text-[#050E25] uppercase tracking-wide">SHIPMENT DETAILS</h2>
        </div>

        {/* SHIPMENT DETAILS GRID */}
        <div className="grid grid-cols-[150px_1fr_150px_1fr] auto-rows-[30px]">
          {/* Row 1 */}
          <div>{renderLabel('pol', 'Port of Loading', true)}</div>
          <div>{renderSelect('pol', 'Enter Port of Loading')}</div>
          <div>{renderLabel('pod', 'Port of Discharge', true)}</div>
          <div>{renderSelect('pod', 'Enter Port of Discharge')}</div>

          {/* Row 2 */}
          <div>{renderLabel('country-discharge', 'Ctry of Discharge', true)}</div>
          <div>{renderSelect('country-discharge', 'Enter Country of Discharge')}</div>
          <div>{renderLabel('port-final', 'Port of Final Dest.', true)}</div>
          <div>{renderSelect('port-final', 'Enter Port of Final Destination')}</div>

          {/* Row 3 */}
          <div>{renderLabel('country-final', 'Ctry of Final Dest.', true)}</div>
          <div>{renderSelect('country-final', 'Enter Country of Final Destination')}</div>
          <div>{renderLabel('mawb-hawb', 'MAWB No/ HAWB No')}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
            <div className="flex-1">{renderInput('mawb', 'Enter MAWB No')}</div>
            <div className="flex-1">{renderInput('hawb', 'Enter HAWB No.')}</div>
          </div>

          {/* Row 4 */}
          <div>{renderLabel('rotation', 'Rotation No/ Date')}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
             <div className="flex-1">{renderInput('rotation-no', 'Enter Rotation No.')}</div>
             <div className="flex-1">{renderDatePicker('rotation-date', 'Enter Date')}</div>
          </div>
          <div>{renderLabel('liner', 'Liner/ Carrier')}</div>
          <div>{renderInput('liner', 'Enter Liner/ Carrier')}</div>

          {/* Row 5 */}
          <div>{renderLabel('forwarder', 'Forwarder')}</div>
          <div>{renderInput('forwarder', 'Enter Forwarded')}</div>
          <div>{renderLabel('leo', 'LEO Date')}</div>
          <div>{renderInput('leo', 'Enter LEO Date')}</div>

          {/* Row 6 */}
          <div>{renderLabel('egm', 'EGM no./ Date')}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
             <div className="flex-1">{renderInput('egm-no', 'Enter EGM No.')}</div>
             <div className="flex-1">{renderDatePicker('egm-date', 'Enter Date')}</div>
          </div>
          <div>{renderLabel('icegate', 'Icegate EGM Date')}</div>
          <div>{renderInput('icegate', 'Enter Icegate EGM Date')}</div>

          {/* Row 7 */}
          <div>{renderLabel('vessel', 'Vessel Name/ ETD')}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
             <div className="flex-1">{renderInput('vessel-name', 'Enter Vessel Name')}</div>
             <div className="flex-1">{renderInput('etd', 'Enter ETD')}</div>
          </div>
          <div>{renderLabel('customs', 'Customs Exmtn. Dt.')}</div>
          <div>{renderInput('customs', 'Enter Customs Examination date')}</div>

          {/* Row 8 */}
          <div>{renderLabel('rodtep', 'RODTEP/RoSCTL Scl')}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
             <div className="flex-1">{renderInput('scroll-no', 'Enter Scroll No.')}</div>
             <div className="flex-1">{renderInput('scroll-date', 'Enter Scroll Date')}</div>
          </div>
          <div>{renderLabel('dbk', 'Dbk Scroll No./ Dt')}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
             <div className="flex-1">{renderInput('dbk-scroll-no', 'Enter Dbk Scroll No.')}</div>
             <div className="flex-1">{renderInput('dbk-date', 'Enter Date')}</div>
          </div>

          {/* Row 9 */}
          <div>{renderLabel('igst', 'IGST Scroll No./ Dt')}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
             <div className="flex-1">{renderInput('igst-scroll-no', 'Enter IGST Scroll No.')}</div>
             <div className="flex-1">{renderInput('igst-date', 'Enter date')}</div>
          </div>
          <div>{renderLabel('hawb-date', 'HAWB/HBL Date')}</div>
          <div>{renderInput('hawb-date', 'Enter HAWB/ HBL Date')}</div>

          {/* Row 10 */}
          <div>{renderLabel('mawb-date', 'MAWB/MBL Date')}</div>
          <div>{renderInput('mawb-date', 'Enter MAWB/ MBL Date')}</div>
          <div>{renderLabel('remarks', 'Remarks')}</div>
          <div>{renderInput('remarks', 'Enter Remarks')}</div>
        </div>

        {/* CARGO DETAILS HEADER */}
        <div className="bg-[#EBEEF7] py-2 text-center border-t border-[#D0D5E3]">
          <h2 className="text-[14px] font-bold text-[#050E25] uppercase tracking-wide">CARGO DETAILS</h2>
        </div>

        {/* CARGO DETAILS GRID */}
        <div className="grid grid-cols-[150px_1fr_150px_1fr] auto-rows-[30px]">
          {/* Row 1 */}
          <div>{renderLabel('nature', 'Nature of Cargo')}</div>
          <div>{renderSelect('nature', 'Enter Nature of Cargo')}</div>
          <div>{renderLabel('gross-net-uom', 'Gross/Net Wt/ UOM')}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
             <div className="flex-1">{renderInput('gross-wt', 'Gross Wt.')}</div>
             <div className="flex-1">{renderInput('net-wt', 'Net Wt.')}</div>
             <div className="flex-[0.5]">{renderInput('uom', 'UOM')}</div>
          </div>

          {/* Row 2 */}
          <div>{renderLabel('chargable-weight', 'Chargable Weight', true)}</div>
          <div>{renderInput('chargable-weight', 'Enter Chargable Weight')}</div>
          <div>{renderLabel('loose-packets', 'No. of Loose Packets')}</div>
          <div>{renderInput('loose-packets', 'Enter No. of Loose Packets')}</div>

          {/* Row 3 */}
          <div>{renderLabel('total-packets', 'Ttl No.of Pkts/UOM', true)}</div>
          <div className="flex divide-x divide-[#D0D5E3]">
             <div className="flex-1">{renderInput('total-packets-count', 'Total no. of Packets')}</div>
             <div className="flex-1">{renderInput('total-packets-uom', 'Enter UOM')}</div>
          </div>
          <div>{renderLabel('containers', 'No. of Containers')}</div>
          <div>{renderInput('containers', 'Enter No. of Containers')}</div>

          {/* Row 4 */}
          <div>{renderLabel('marks', 'Marks & Numbers')}</div>
          <div className="col-span-3">{renderInput('marks', 'Enter Marks & Numbers')}</div>
        </div>

        {/* PACKAGE DETAILS HEADER */}
        <div className="bg-[#EBEEF7] py-2 text-center border-t border-[#D0D5E3]">
          <h2 className="text-[14px] font-bold text-[#050E25] uppercase tracking-wide">PACKAGE DETAILS</h2>
        </div>

        {/* PACKAGE DETAILS TABLE */}
        <div className="grid grid-cols-[50px_1fr_1fr_1fr] auto-rows-[30px]">
           {/* Table Header */}
           <div className="bg-[#F3F5FA] border-t border-r border-[#D0D5E3] px-3 py-2 text-[14px] font-semibold text-[#050E25] flex items-center justify-center h-full">
             Sr
           </div>
           <div className="bg-[#F3F5FA] border-t border-r border-[#D0D5E3] px-3 py-2 text-[14px] font-semibold text-[#050E25] flex items-center h-full">
             Packet No. From
           </div>
           <div className="bg-[#F3F5FA] border-t border-r border-[#D0D5E3] px-3 py-2 text-[14px] font-semibold text-[#050E25] flex items-center h-full">
             Packet No. To
           </div>
           <div className="bg-[#F3F5FA] border-t border-[#D0D5E3] px-3 py-2 text-[14px] font-semibold text-[#050E25] flex items-center h-full">
             Packing code
           </div>

           {/* Table Rows */}
           {packageRows.map((row, index) => (
             <React.Fragment key={row.id}>
               <div className="bg-[#F3F5FA] border-t border-r border-[#D0D5E3] flex items-center justify-center text-[14px] text-[#050E25]">
                 {index + 1}
               </div>
               <div className="border-r border-[#D0D5E3]">
                 {renderInput(`packet-from-${row.id}`, 'Enter Packet No. From')}
               </div>
               <div className="border-r border-[#D0D5E3]">
                 {renderInput(`packet-to-${row.id}`, 'Enter Packet No. To')}
               </div>
               <div>
                 {renderInput(`packing-code-${row.id}`, 'Enter Packing code')}
               </div>
             </React.Fragment>
           ))}
           
           {/* Add Row Button */}
           <div 
             className="col-span-4 border-t border-[#D0D5E3] flex items-center justify-start px-2 cursor-pointer hover:bg-gray-50 transition-colors bg-white h-full"
             onClick={addPackageRow}
           >
              <Button variant="ghost" size="sm" className="h-6 w-full justify-start text-[#3874FF] px-1 hover:bg-transparent hover:text-[#3874FF]">
                <Plus className="w-4 h-4 mr-2" />
                Add Package
              </Button>
           </div>
        </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
             {/* STUFF DETAILS HEADER */}
             <div className="bg-[#EBEEF7] py-2 text-center border-b border-[#D0D5E3]">
               <h2 className="text-[14px] font-bold text-[#050E25] uppercase tracking-wide">STUFF DETAILS</h2>
             </div>
             
             {/* STUFF DETAILS GRID */}
             <div className="grid grid-cols-[150px_1fr_150px_1fr] auto-rows-[30px]">
                <div>{renderLabel('factory-stuffing', 'Factory Stuffing')}</div>
                <div>{renderInput('factory-stuffing', 'Enter factory Stuffing')}</div>
                <div>{renderLabel('seal-type', 'Seal Type')}</div>
                <div>{renderSelect('seal-type', 'Select Seal Type')}</div>

                <div>{renderLabel('factory-address', 'Factory Address')}</div>
                <div>{renderInput('factory-address', 'Enter Factory Address')}</div>
                <div>{renderLabel('sample-accom', 'Sample Accom.')}</div>
                <div>{renderToggle('sample-accom', true, 'bg-green-500', 'bg-gray-200')}</div>
             </div>

             {/* EOU DETAILS HEADER */}
             <div className="bg-[#EBEEF7] py-2 text-center border-y border-[#D0D5E3]">
               <h2 className="text-[14px] font-bold text-[#050E25] uppercase tracking-wide">EOU DETAILS</h2>
             </div>
             
             {/* EOU DETAILS GRID */}
             <div className="grid grid-cols-[150px_1fr_150px_1fr] auto-rows-[30px]">
                <div>{renderLabel('eou-exports', 'EOU Exports')}</div>
                <div>{renderToggle('eou-exports', true, 'bg-green-500', 'bg-gray-200')}</div>
                <div>{renderLabel('ie-code-exp', 'IE Code of Exp', true)}</div>
                <div>{renderInput('ie-code-exp', 'Enter IE Code of Exp')}</div>

                <div>{renderLabel('branch-sno', 'Branch SNo of IE', true)}</div>
                <div>{renderInput('branch-sno', 'Enter Branch S No. of IE')}</div>
                <div>{renderLabel('exam-date', 'Examination Date')}</div>
                <div>{renderDatePicker('exam-date', 'Enter Examination Date')}</div>

                <div>{renderLabel('ex-off', 'Ex. Off. Name/ Des.')}</div>
                <div className="flex divide-x divide-[#D0D5E3]">
                   <div className="flex-1">{renderInput('ex-off-name', 'Enter Ex.Off. Name')}</div>
                   <div className="flex-1">{renderInput('ex-off-des', 'Enter Designation')}</div>
                </div>
                <div>{renderLabel('sv-off', 'SV. Off. Name/ Des.')}</div>
                <div className="flex divide-x divide-[#D0D5E3]">
                   <div className="flex-1">{renderInput('sv-off-name', 'Enter SV Off.Name')}</div>
                   <div className="flex-1">{renderInput('sv-off-des', 'Enter Designation')}</div>
                </div>

                <div>{renderLabel('commissionerate', 'Commissionerate')}</div>
                <div>{renderInput('commissionerate', 'Enter Commissionerate')}</div>
                <div>{renderLabel('division', 'Division')}</div>
                <div>{renderInput('division', 'Enter Division')}</div>
                
                <div>{renderLabel('range', 'Range')}</div>
                <div>{renderInput('range', 'Enter Range')}</div>
                <div>{renderLabel('seal-no', 'Seal No.', true)}</div>
                <div>{renderInput('seal-no', 'Enter Seal No.')}</div>

                <div>{renderLabel('item-value-verified', 'Item value Verified')}</div>
                <div>{renderToggle('item-value-verified', false, 'bg-green-500', 'bg-red-500')}</div>
                <div>{renderLabel('sample-forward', 'Sample Forward')}</div>
                <div>{renderToggle('sample-forward', false, 'bg-green-500', 'bg-red-500')}</div>
             </div>

             {/* NFEI SB DETAILS HEADER */}
             <div className="bg-[#EBEEF7] py-2 text-center border-y border-[#D0D5E3]">
               <h2 className="text-[14px] font-bold text-[#050E25] uppercase tracking-wide">NFEI SB Details</h2>
             </div>
             
             {/* NFEI SB DETAILS GRID */}
             <div className="grid grid-cols-[150px_1fr_150px_1fr] auto-rows-[30px]">
                <div>{renderLabel('nfei-category', 'Category of NFEISB')}</div>
                <div>{renderSelect('nfei-category', 'Select Category')}</div>
                <div>{renderLabel('rbi-waiver-no', 'RBI Waiver No.')}</div>
                <div>{renderInput('rbi-waiver-no', 'Enter RBI Waiver No.')}</div>

                <div>{renderLabel('rbi-waiver-date', 'RBI Waiver Date')}</div>
                <div>{renderDatePicker('rbi-waiver-date', 'Enter Date')}</div>
                {/* Empty Cells to fill row */}
                <div className="bg-[#F3F5FA] border-t border-l border-r border-[#D0D5E3]"></div>
                <div className="border-t border-[#D0D5E3]"></div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
