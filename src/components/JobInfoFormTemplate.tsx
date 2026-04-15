import React, { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import jobDetailsIcon from 'figma:asset/ce5fa9d874113f98e3b91bf210fa171674839fad.png';

// Custom DatePicker Component
interface DatePickerProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  inputRef?: (el: HTMLButtonElement | null) => void;
}

function DatePicker({
  value,
  onValueChange,
  placeholder = "Select",
  className = "",
  style = {},
  tabIndex,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  inputRef
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Update selected date when value changes externally
  useEffect(() => {
    setSelectedDate(value ? new Date(value) : undefined);
  }, [value]);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      setSelectedDate(date);
      onValueChange(formattedDate);
    } else {
      setSelectedDate(undefined);
      onValueChange('');
    }
    setIsOpen(false);
    
    // Return focus to the button and then blur it to return to normal state
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.focus();
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.blur();
          }
        }, 10);
      }
    }, 50);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open && onBlur) {
      // Small delay to ensure popover has closed before triggering blur
      setTimeout(() => {
        onBlur();
      }, 100);
    }
  };

  const handleButtonFocus = () => {
    if (onFocus) onFocus();
  };

  const handleButtonBlur = (e: React.FocusEvent) => {
    // Only trigger blur if we're not focusing on the popover content
    if (!isOpen && onBlur) {
      onBlur();
    }
  };

  const displayValue = selectedDate ? format(selectedDate, 'MMM dd, yyyy') : '';

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button
          ref={(el) => {
            buttonRef.current = el;
            if (inputRef) inputRef(el);
          }}
          type="button"
          className={`${className} flex items-center justify-between gap-2 w-full h-full text-left bg-transparent border-none outline-none focus:outline-none`}
          style={style}
          tabIndex={tabIndex}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={handleButtonFocus}
          onBlur={handleButtonBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            } else if (onKeyDown) {
              onKeyDown(e);
            }
          }}
        >
          <span className={`text-[14px] overflow-x-auto overflow-y-hidden whitespace-nowrap min-w-0 flex-1 ${displayValue ? 'text-[#050e25]' : 'text-gray-400'}`} style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
            {displayValue || placeholder}
          </span>
          <CalendarIcon className="size-4 opacity-50 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white border border-[#d0d5e3]" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}

// Job Info Form Data Interface
interface JobInfoFormData {
  // Basic Job Information
  jobNumber: string;
  jobDate: string;
  beNumber: string;
  beDate: string;
  priorBE: string;
  modeOfTransport: string;
  beType: string;
  
  // Transaction & Reference Details
  transactionRefNo: string;
  customsHouseCd: string;
  customerRefNo: string;
  
  // Value & Assessment Details
  assessableValue: string;
  dutyPayable: string;
  
  // UCR Details
  ucrNo: string;
  ucrType: string;
  
  // Special Processing Flags
  kacchaBE: string;
  greenChannel: string;
  
  // Section 48 Details
  section48: string;
  section48Reason: string;
  
  // First Check Details
  firstCheck: string;
  firstCheckReason: string;
  
  // Provisional Assessment Details
  provisionalAssess: string;
  paReason: string;
  
  // Additional Details
  miscLoad: string;
  paytMthodCd: string;
  
  // Location & Origin Details
  portOfOrigin: string;
  countryOfOrigin: string;
  portOfShipment: string;
  consCountry: string;
  
  // Additional Information
  remarks: string;
  addCharges: string;
  hssTransaction: string;

  // Importer Details - New fields for the third row
  iec?: string;
  pan?: string;
  importerId?: string;
  importerCity?: string;
  importerAddress?: string;
  stateCountry?: string;
}

// Props interface for the Job Info Form Template
interface JobInfoFormTemplateProps {
  formData: JobInfoFormData;
  setFormData: (data: JobInfoFormData) => void;
  className?: string;
  showHeader?: boolean;
  headerTitle?: string;
  headerNumber?: string;
}

export default function JobInfoFormTemplate({
  formData,
  setFormData,
  className = "",
  showHeader = true,
  headerTitle = "Job Info",
  headerNumber = "2"
}: JobInfoFormTemplateProps) {
  
  // Dropdown Options
  const priorBEOptions = ['Advance', 'Normal', 'Prior'];
  const modeOfTransportOptions = ['Air', 'Sea', 'Land'];
  const beTypeOptions = ['H-Home Consumption', 'W-Warehouse', 'E-Ex-bond'];
  const yesNoOptions = ['Yes', 'No'];
  const ucrTypeOptions = ['AWB', 'BL', 'TRN', 'Other'];
  const paymentMethodOptions = ['Cash', 'Credit', 'Bank Transfer', 'LC', 'Other'];
  
  // Indian Ports for dropdowns
  const indianPorts = [
    'Mumbai', 'Chennai', 'Kolkata', 'Cochin', 'Visakhapatnam', 'Kandla', 'Paradip',
    'New Mangalore', 'Mormugao', 'Tuticorin', 'Ennore', 'Kamarajar', 'Krishnapatnam',
    'Mundra', 'Pipavav', 'Dahej', 'Hazira', 'Haldia', 'Dhamra'
  ];
  
  // Countries for dropdown
  const countries = [
    'India', 'United States', 'United Kingdom', 'Germany', 'France', 'Japan', 'China', 
    'Australia', 'Canada', 'Brazil', 'Italy', 'Spain', 'Netherlands', 'Switzerland', 
    'Sweden', 'Norway', 'Denmark', 'Belgium', 'Austria', 'Finland', 'Ireland', 
    'Portugal', 'Greece', 'Poland', 'Czech Republic', 'Hungary', 'Slovakia', 'Slovenia', 
    'Croatia', 'Estonia', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Cyprus', 
    'Bulgaria', 'Romania', 'South Korea', 'Singapore', 'Malaysia', 'Thailand', 
    'Indonesia', 'Philippines', 'Vietnam', 'New Zealand', 'South Africa', 'Mexico'
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      {showHeader && (
        <div className="flex items-center gap-3 mb-6">
          <img src={jobDetailsIcon} alt="Job Info" className="w-5 h-5" />
          <h2 className="text-[16px] font-semibold text-[#050e25] small-caps">
            {headerNumber}. {headerTitle}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {/* Section 1: Basic Job Information */}
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#050e25] border-b border-[#d0d5e3] pb-2">
            Basic Information
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="jobNumber" className="text-[14px] block mb-2">
                Job Number
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="jobNumber"
                  value={formData.jobNumber}
                  onChange={(e) => setFormData({ ...formData, jobNumber: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter job number"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="jobDate" className="text-[14px] block mb-2">
                Job Date
              </Label>
              <div className="h-[30px] relative">
                <div className="bg-white border border-[#d0d5e3] px-3 py-1.5 h-full w-full rounded-none">
                  <DatePicker
                    value={formData.jobDate}
                    onValueChange={(value) => setFormData({ ...formData, jobDate: value })}
                    placeholder="Select job date"
                    className="text-[14px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="beNumber" className="text-[14px] block mb-2">
                BE Number
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="beNumber"
                  value={formData.beNumber}
                  onChange={(e) => setFormData({ ...formData, beNumber: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter BE number"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="beDate" className="text-[14px] block mb-2">
                BE Date
              </Label>
              <div className="h-[30px] relative">
                <div className="bg-white border border-[#d0d5e3] px-3 py-1.5 h-full w-full rounded-none">
                  <DatePicker
                    value={formData.beDate}
                    onValueChange={(value) => setFormData({ ...formData, beDate: value })}
                    placeholder="Select BE date"
                    className="text-[14px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="priorBE" className="text-[14px] block mb-2">
                Prior BE
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.priorBE}
                  onValueChange={(value) => setFormData({ ...formData, priorBE: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select prior BE" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {priorBEOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="modeOfTransport" className="text-[14px] block mb-2">
                Mode of Transport
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.modeOfTransport}
                  onValueChange={(value) => setFormData({ ...formData, modeOfTransport: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select transport mode" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {modeOfTransportOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="beType" className="text-[14px] block mb-2">
                BE Type
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.beType}
                  onValueChange={(value) => setFormData({ ...formData, beType: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select BE type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {beTypeOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Transaction & Reference Details */}
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#050e25] border-b border-[#d0d5e3] pb-2">
            Transaction & Reference Details
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="transactionRefNo" className="text-[14px] block mb-2">
                Transaction Ref No
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="transactionRefNo"
                  value={formData.transactionRefNo}
                  onChange={(e) => setFormData({ ...formData, transactionRefNo: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter transaction ref no"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="customsHouseCd" className="text-[14px] block mb-2">
                Customs House Code
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="customsHouseCd"
                  value={formData.customsHouseCd}
                  onChange={(e) => setFormData({ ...formData, customsHouseCd: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter customs house code"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="customerRefNo" className="text-[14px] block mb-2">
                Customer Ref No
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="customerRefNo"
                  value={formData.customerRefNo}
                  onChange={(e) => setFormData({ ...formData, customerRefNo: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter customer ref no"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Importer Details */}
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#050e25] border-b border-[#d0d5e3] pb-2">
            3. Importer Details
          </h3>
          
          {/* First Row - IEC and PAN */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="iec" className="text-[14px] block mb-2">
                IEC
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="iec"
                  value={formData.iec || ''}
                  onChange={(e) => setFormData({ ...formData, iec: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter IEC"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="pan" className="text-[14px] block mb-2">
                PAN
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="pan"
                  value={formData.pan || ''}
                  onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter PAN"
                />
              </div>
            </div>
          </div>

          {/* Second Row - ID & Branch and City & Pin */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="importerId" className="text-[14px] block mb-2">
                ID & Branch
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="importerId"
                  value={formData.importerId || ''}
                  onChange={(e) => setFormData({ ...formData, importerId: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter ID & Branch"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="importerCity" className="text-[14px] block mb-2">
                City & Pin
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="importerCity"
                  value={formData.importerCity || ''}
                  onChange={(e) => setFormData({ ...formData, importerCity: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter City & Pin"
                />
              </div>
            </div>
          </div>

          {/* Third Row - Address (Left) and Split Right Side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left Side - Address Field */}
            <div>
              <Label htmlFor="importerAddress" className="text-[14px] block mb-2">
                Address
              </Label>
              <div className="relative">
                <Textarea
                  id="importerAddress"
                  value={formData.importerAddress || ''}
                  onChange={(e) => setFormData({ ...formData, importerAddress: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-2 text-[14px] w-full rounded-none min-h-[68px] resize-none"
                  placeholder="Enter Address"
                />
              </div>
            </div>

            {/* Right Side - Two stacked fields */}
            <div className="space-y-2">
              {/* Top Sub-row - Select St.Cty */}
              <div>
                <Label htmlFor="stateCountry" className="text-[14px] block mb-2">
                  Select St.Cty
                </Label>
                <div className="h-[30px] relative">
                  <Input
                    id="stateCountry"
                    value={formData.stateCountry || ''}
                    onChange={(e) => setFormData({ ...formData, stateCountry: e.target.value })}
                    className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                    placeholder="Select State & Country"
                  />
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Section 4: Value & Assessment Details */}
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#050e25] border-b border-[#d0d5e3] pb-2">
            Value & Assessment Details
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="assessableValue" className="text-[14px] block mb-2">
                Assessable Value
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="assessableValue"
                  value={formData.assessableValue}
                  onChange={(e) => setFormData({ ...formData, assessableValue: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter assessable value"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="dutyPayable" className="text-[14px] block mb-2">
                Duty Payable
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="dutyPayable"
                  value={formData.dutyPayable}
                  onChange={(e) => setFormData({ ...formData, dutyPayable: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter duty payable"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: UCR & Processing Details */}
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#050e25] border-b border-[#d0d5e3] pb-2">
            UCR & Processing Details
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="ucrNo" className="text-[14px] block mb-2">
                UCR Number
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="ucrNo"
                  value={formData.ucrNo}
                  onChange={(e) => setFormData({ ...formData, ucrNo: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter UCR number"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="ucrType" className="text-[14px] block mb-2">
                UCR Type
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.ucrType}
                  onValueChange={(value) => setFormData({ ...formData, ucrType: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select UCR type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {ucrTypeOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="paytMthodCd" className="text-[14px] block mb-2">
                Payment Method
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.paytMthodCd}
                  onValueChange={(value) => setFormData({ ...formData, paytMthodCd: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {paymentMethodOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="kacchaBE" className="text-[14px] block mb-2">
                Kaccha BE
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.kacchaBE}
                  onValueChange={(value) => setFormData({ ...formData, kacchaBE: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {yesNoOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="greenChannel" className="text-[14px] block mb-2">
                Green Channel
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.greenChannel}
                  onValueChange={(value) => setFormData({ ...formData, greenChannel: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {yesNoOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="miscLoad" className="text-[14px] block mb-2">
                Misc Load
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="miscLoad"
                  value={formData.miscLoad}
                  onChange={(e) => setFormData({ ...formData, miscLoad: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter misc load"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Special Procedures */}
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#050e25] border-b border-[#d0d5e3] pb-2">
            Special Procedures
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="section48" className="text-[14px] block mb-2">
                Section 48
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.section48}
                  onValueChange={(value) => setFormData({ ...formData, section48: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {yesNoOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="section48Reason" className="text-[14px] block mb-2">
                Section 48 Reason
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="section48Reason"
                  value={formData.section48Reason}
                  onChange={(e) => setFormData({ ...formData, section48Reason: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter reason"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstCheck" className="text-[14px] block mb-2">
                First Check
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.firstCheck}
                  onValueChange={(value) => setFormData({ ...formData, firstCheck: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {yesNoOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="firstCheckReason" className="text-[14px] block mb-2">
                First Check Reason
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="firstCheckReason"
                  value={formData.firstCheckReason}
                  onChange={(e) => setFormData({ ...formData, firstCheckReason: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter reason"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="provisionalAssess" className="text-[14px] block mb-2">
                Provisional Assessment
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.provisionalAssess}
                  onValueChange={(value) => setFormData({ ...formData, provisionalAssess: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {yesNoOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="paReason" className="text-[14px] block mb-2">
                PA Reason
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="paReason"
                  value={formData.paReason}
                  onChange={(e) => setFormData({ ...formData, paReason: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter reason"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Location & Origin Details */}
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#050e25] border-b border-[#d0d5e3] pb-2">
            Location & Origin Details
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="portOfOrigin" className="text-[14px] block mb-2">
                Port of Origin
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.portOfOrigin}
                  onValueChange={(value) => setFormData({ ...formData, portOfOrigin: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select port" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {indianPorts.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="countryOfOrigin" className="text-[14px] block mb-2">
                Country of Origin
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.countryOfOrigin}
                  onValueChange={(value) => setFormData({ ...formData, countryOfOrigin: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {countries.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="portOfShipment" className="text-[14px] block mb-2">
                Port of Shipment
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.portOfShipment}
                  onValueChange={(value) => setFormData({ ...formData, portOfShipment: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select port" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {indianPorts.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="consCountry" className="text-[14px] block mb-2">
                Consignee Country
              </Label>
              <div className="h-[30px] relative">
                <Select
                  value={formData.consCountry}
                  onValueChange={(value) => setFormData({ ...formData, consCountry: value })}
                >
                  <SelectTrigger className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-[30px] w-full rounded-none">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
                    {countries.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Additional Information */}
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#050e25] border-b border-[#d0d5e3] pb-2">
            Additional Information
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="addCharges" className="text-[14px] block mb-2">
                Additional Charges
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="addCharges"
                  value={formData.addCharges}
                  onChange={(e) => setFormData({ ...formData, addCharges: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter additional charges"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="hssTransaction" className="text-[14px] block mb-2">
                HSS Transaction
              </Label>
              <div className="h-[30px] relative">
                <Input
                  id="hssTransaction"
                  value={formData.hssTransaction}
                  onChange={(e) => setFormData({ ...formData, hssTransaction: e.target.value })}
                  className="bg-white border border-[#d0d5e3] px-3 py-1.5 text-[14px] h-full w-full rounded-none"
                  placeholder="Enter HSS transaction"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="remarks" className="text-[14px] block mb-2">
              Remarks
            </Label>
            <div className="relative">
              <Textarea
                id="remarks"
                value={formData.remarks}
                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                className="bg-white border border-[#d0d5e3] px-3 py-2 text-[14px] w-full rounded-none min-h-[80px] resize-none"
                placeholder="Enter any additional remarks"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}