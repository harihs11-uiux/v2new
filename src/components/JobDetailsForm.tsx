import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown, X, Calendar as CalendarIcon } from 'lucide-react';
import { format, isValid } from 'date-fns';
import svgPaths from '../imports/svg-eck8mt5gi8';
import imgEllipse2899Stroke from "figma:asset/9df4c21221efbbf7110355917e18e7dceb8e275e.png";
import { imgPersonAdd } from '../imports/svg-j6s7v';
import EnhancedAutocompleteInput from './EnhancedAutocompleteInput';
import ImporterDetailsSection from './ImporterDetailsSection';

interface JobDetailsFormProps {
  jobData?: any;
  activeSection?: string;
}

// Navigation system for form fields
interface FormField {
  id: string;
  ref: React.RefObject<HTMLElement>;
  row: number;
  col: number;
  section: string;
}

// Custom DatePicker Component with hover/focus states and proper date validation
interface DatePickerProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  fieldId: string;
  onHover?: (isHovered: boolean) => void;
  onFocus?: (isFocused: boolean) => void;
}

function DatePicker({
  value,
  onValueChange,
  placeholder = "Select",
  className = "",
  fieldId,
  onHover,
  onFocus
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Helper function to safely create Date objects
  const createSafeDate = (dateString: string): Date | undefined => {
    if (!dateString || dateString.trim() === '') {
      return undefined;
    }
    
    const date = new Date(dateString);
    return isValid(date) ? date : undefined;
  };

  // Update selected date when value changes externally
  useEffect(() => {
    const safeDate = createSafeDate(value);
    setSelectedDate(safeDate);
  }, [value]);

  const handleDateSelect = (date: Date | undefined) => {
    if (date && isValid(date)) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      setSelectedDate(date);
      onValueChange(formattedDate);
    } else {
      setSelectedDate(undefined);
      onValueChange('');
    }
    setIsOpen(false);
  };

  // Safely format the display value
  const getDisplayValue = (): string => {
    if (!selectedDate || !isValid(selectedDate)) {
      return '';
    }
    
    try {
      return format(selectedDate, 'dd/MM/yyyy');
    } catch (error) {
      console.warn('Date formatting error:', error);
      return '';
    }
  };

  const displayValue = getDisplayValue();

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocus?.(false);
  };

  const getBoxShadowStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874ff',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874ff',
        backgroundColor: 'white'
      };
    } else {
      return {
        border: 'none',
        backgroundColor: 'white'
      };
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          ref={buttonRef}
          type="button"
          data-field-id={fieldId}
          className={`${className} flex items-center justify-between gap-2 w-full h-[32px] text-left px-2 py-1.5 transition-all duration-200`}
          style={getBoxShadowStyle()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
        >
          <span className={`text-[14px] font-['Inter:Regular',_sans-serif] font-normal overflow-x-auto overflow-y-hidden whitespace-nowrap min-w-0 flex-1 ${displayValue ? 'text-[#050e25]' : 'text-gray-400'}`} style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
            {displayValue || placeholder}
          </span>
          <CalendarIcon className="size-4 opacity-50 shrink-0 text-[#626776]" />
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

// ToggleSwitch Component for Yes/No fields
interface ToggleSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  fieldId: string;
  onHover?: (isHovered: boolean) => void;
  onFocus?: (isFocused: boolean) => void;
}

function ToggleSwitch({ checked, onCheckedChange, label = "No", fieldId, onHover, onFocus }: ToggleSwitchProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocus?.(false);
  };

  return (
    <div 
      ref={toggleRef}
      data-field-id={fieldId}
      className="flex items-center gap-2 px-2 py-1.5 h-[32px] focus:outline-none"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCheckedChange(!checked);
        }
      }}
    >
      <div className="relative h-3 w-[25px]">
        <div 
          className={`absolute inset-0 rounded-full transition-colors duration-200 cursor-pointer ${
            checked ? 'bg-[#00B196]' : 'bg-[#CF3B3B]'
          }`}
          style={{ borderRadius: '6px' }}
          onClick={() => onCheckedChange(!checked)}
        >
          <div 
            className={`absolute top-0 w-4 h-3 bg-white rounded-full transition-transform duration-200 shadow-lg ${
              checked ? 'translate-x-[9px]' : 'translate-x-0'
            }`}
            style={{ borderRadius: '6px' }}
          />
        </div>
      </div>
      <span className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#050e25]">
        {checked ? "Yes" : "No"}
      </span>
    </div>
  );
}

// SearchableMultiSelect Component for Assigned CB field
interface SearchableMultiSelectProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  options: string[];
  placeholder?: string;
  fieldId: string;
  onHover?: (isHovered: boolean) => void;
  onFocus?: (isFocused: boolean) => void;
}

function SearchableMultiSelect({
  value = [],
  onValueChange,
  options = [],
  placeholder = "Select User",
  fieldId,
  onHover,
  onFocus
}: SearchableMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase()) && !value.includes(option)
  );

  const addUser = (user: string) => {
    if (!value.includes(user)) {
      onValueChange([...value, user]);
    }
    setSearchTerm('');
  };

  const removeUser = (userToRemove: string) => {
    onValueChange(value.filter(user => user !== userToRemove));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      onFocus?.(false);
      setIsOpen(false);
    }, 150);
  };

  const getBoxShadowStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874ff',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874ff',
        backgroundColor: 'white'
      };
    } else {
      return {
        border: 'none',
        backgroundColor: 'white'
      };
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[32px]">
      <div 
        data-field-id={fieldId}
        className="flex items-center justify-between gap-2 h-[32px] w-full px-2 py-1.5 transition-all duration-200"
        style={getBoxShadowStyle()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <div className="flex items-center min-w-0 flex-1 h-full">
          <div className="flex-shrink-0 flex items-center h-full mr-2">
            <div
              className="relative w-[18px] h-[18px]"
              style={{
                maskImage: `url('${imgPersonAdd}')`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center'
              }}
            >
              <div className="w-full h-full bg-[#626776]" />
            </div>
            <img className="absolute w-[18px] h-[18px]" src={imgEllipse2899Stroke} alt="" />
          </div>
          
          <div className="flex items-center min-w-0 flex-1 h-full">
            {value.length > 0 && (
              <div className="flex items-center gap-1 h-full overflow-x-auto mr-1">
                {value.map((user) => (
                  <div
                    key={user}
                    className="inline-flex items-center gap-1 bg-[#E5FAF7] text-[#050E25] px-1.5 py-0.5 rounded text-[11px] flex-shrink-0 h-5"
                  >
                    <span className="truncate leading-none max-w-[60px]">{user}</span>
                    <button
                      type="button"
                      onClick={() => removeUser(user)}
                      className="hover:bg-[#00B196] hover:text-white rounded-full p-0.5 transition-colors w-3 h-3 flex items-center justify-center"
                    >
                      <X size={8} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => {
                handleFocus();
                setIsOpen(true);
              }}
              onBlur={handleBlur}
              placeholder={value.length === 0 ? placeholder : ""}
              className="flex-1 min-w-[60px] bg-transparent border-none outline-none text-[14px] font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] placeholder:text-[14px]"
            />
          </div>
        </div>
        <ChevronDown className="size-4 opacity-50 pointer-events-none shrink-0 text-[#626776]" />
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute z-[100] w-full mt-1 bg-[#050E25] border border-[#d0d5e3] rounded shadow-lg max-h-[200px] overflow-y-auto">
          {filteredOptions.map((option) => (
            <div
              key={option}
              className="px-3 py-2 text-[14px] cursor-pointer transition-colors text-white hover:bg-[#36415A]"
              onClick={() => addUser(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Custom Input with hover/focus states
interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  fieldId: string;
  onHover?: (isHovered: boolean) => void;
  onFocus?: (isFocused: boolean) => void;
}

function CustomInput({ value, onChange, placeholder, className = "", fieldId, onHover, onFocus }: CustomInputProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocus?.(false);
  };

  const getBoxShadowStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874ff',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874ff',
        backgroundColor: 'white'
      };
    } else {
      return {
        border: 'none',
        backgroundColor: 'white'
      };
    }
  };

  return (
    <Input
      ref={inputRef}
      data-field-id={fieldId}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} text-[#050E25] text-[14px] px-2 py-1.5 outline-none focus:outline-none transition-all duration-200 h-[32px] w-full rounded-none placeholder:text-[14px]`}
      style={getBoxShadowStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

// Custom Textarea with hover/focus states
interface CustomTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  fieldId: string;
  onHover?: (isHovered: boolean) => void;
  onFocus?: (isFocused: boolean) => void;
}

function CustomTextarea({ value, onChange, placeholder, className = "", fieldId, onHover, onFocus }: CustomTextareaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocus?.(false);
  };

  const getBoxShadowStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874ff',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874ff',
        backgroundColor: 'white'
      };
    } else {
      return {
        border: 'none',
        backgroundColor: 'white'
      };
    }
  };

  return (
    <Textarea
      ref={textareaRef}
      data-field-id={fieldId}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} text-[#050E25] text-[14px] px-2 py-2 outline-none focus:outline-none transition-all duration-200 w-full rounded-none h-[64px] resize-none placeholder:text-[14px]`}
      style={getBoxShadowStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

// Custom Select with hover/focus states
interface CustomSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
  fieldId: string;
  onHover?: (isHovered: boolean) => void;
  onFocus?: (isFocused: boolean) => void;
}

function CustomSelect({ value, onValueChange, options, placeholder, className = "", fieldId, onHover, onFocus }: CustomSelectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocus?.(false);
  };

  const getBoxShadowStyle = () => {
    if (isFocused) {
      return {
        border: '1px solid #3874ff',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874ff',
        backgroundColor: 'white'
      };
    } else {
      return {
        border: 'none',
        backgroundColor: 'white'
      };
    }
  };

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger 
        ref={triggerRef}
        data-field-id={fieldId}
        className={`${className} text-[#050E25] text-[14px] px-2 py-1.5 h-[32px] w-full rounded-none transition-all duration-200 placeholder:text-[14px]`}
        style={getBoxShadowStyle()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <SelectValue placeholder={placeholder} className="text-[14px] placeholder:text-[14px]" />
      </SelectTrigger>
      <SelectContent className="bg-[#050E25] border border-[#d0d5e3] text-white">
        {options.map((option) => (
          <SelectItem key={option} value={option} className="text-white hover:bg-[#36415A] cursor-pointer text-[14px]">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function JobDetailsForm({ jobData, activeSection }: JobDetailsFormProps) {
  const [formData, setFormData] = useState({
    // CB Details
    name: jobData?.cbBranch || 'Unifo Private Limited',
    licenseNo: jobData?.cbCode || 'AABLI4333MCH001',
    brSlNo: jobData?.branch || '001',
    address: jobData?.address || '516,517 VISHAL TOWERS,10,DISTRICT CENTRE,JANAKPURI (W)"',
    cityPin: jobData?.city || 'NEW DELHI',
    pincode: jobData?.pincode || '5884345',
    stateCountry: jobData?.state || 'NEW DELHI',
    country: jobData?.country || '07 – DELHI',
    branchCode: jobData?.branchName || 'NEW DELHI',
    aeoRegNo: jobData?.aeoRegNo || '-',
    aeoRole: jobData?.aeoRole || '-',
    icegateId: jobData?.icegateId || 'FLYMAANEW',
    submittedBy: jobData?.submittedBy || 'Custom Broker',
    assignedCb: jobData?.assignedTo || [],

    // Job Info - Use safe date values
    jobNoDate: `${jobData?.jobNo || 'ICB/16453/2025-26'}|${jobData?.jobDate || ''}`,
    beNoDate: `${jobData?.beNumber || '1234567'}|${jobData?.beDate || ''}`,
    priorBe: jobData?.priorBE || 'Advance BE',
    mot: jobData?.modeOfTransport || 'A-Air',
    beType: jobData?.beType || 'H-Home Consumption',
    transactionRefNo: jobData?.transactionRefNo || '747364736',
    customsHouseCd: jobData?.customsHouseCd || 'INDEL4',
    customerRefNo: jobData?.customerRefNo || 'Customer Ref No.',
    assessableValue: jobData?.assessableValue || '747364736',
    dutyPayable: jobData?.dutyPayable || '677436476',
    ucrNo: jobData?.ucrNo || '747364736',
    ucrType: jobData?.ucrType || 'UCR Type',
    kacchaBe: jobData?.kacchaBE === 'Yes',
    greenChannel: jobData?.greenChannel === 'Yes',
    section48: jobData?.section48 === 'Yes',
    section48Reason: jobData?.section48Reason || 'Reason',
    firstCheck: jobData?.firstCheck === 'Yes',
    firstCheckReason: jobData?.firstCheckReason || 'Reason',
    provisionalAssess: jobData?.provisionalAssess === 'Yes',
    paReason: jobData?.paReason || 'Reason',
    miscLoad: jobData?.miscLoad || 'Misc. Load',
    paytMethodCd: jobData?.paytMthodCd || 'Transaction',
    portOfOrigin: jobData?.portOfOrigin || 'JPNRT - NARITA APT/TOKYO',
    countryOfOrigin: jobData?.countryOfOrigin || 'JP - JAPAN',
    portOfShipment: jobData?.portOfShipment || 'JPNRT - NARITA APT/TOKYO',
    consCountry: jobData?.consCountry || 'JP - JAPAN',
    remarks: jobData?.remarks || 'Remarks',
    hssTransaction: jobData?.hssTransaction === 'Yes',
    addCharges: jobData?.addCharges || 'Add. Charges',

    // Importer Details
    importerName: jobData?.importerName || 'SUMITOMO ELECTRIC HARDMETAL INDIA PVT LTD',
    iecPan: jobData?.iec || 'ABICS9789G',
    idBranch: `${jobData?.importerId || 'NF00031274'}|0`,
    importerAddress: jobData?.importerAddress || 'ARIHANT AURA B-WING 1301- 1303 TTC INDUSTRIAL AREA TURBHE MIDC',
    importerCityPin: `${jobData?.importerCity || 'MUMBAI'}|${jobData?.importerPincode || '400705'}`,
    importerStateCountry: `${jobData?.importerState || '27-MAHARASH..'}|${jobData?.importerCountry || 'IN - INDIA'}`,
    typeAdCode: `${jobData?.importerType || 'P-Private'}|${jobData?.adCode || '5090001'}`,

    // Commercial Tax Type
    stateCode: jobData?.stateCode || '01-JAMMU AND KASHMIR',
    taxType: jobData?.taxType || 'GST-IN-GSTIN Private',
    registrationNo: jobData?.registrationNo || '22',

    // Warehouse Details - Use safe date values
    whBeNoDate: '1234567|',
    whJobNo: 'ICB/163/2025-2026',
    whCode: 'INMAA1',
    whCustoms: 'INABG1 - Alibag',
    noPkgRelCd: '389|KGS',
    whGrossWght: '787|KGS'
  });

  // Label highlighting state
  const [hoveredLabels, setHoveredLabels] = useState<Set<string>>(new Set());

  // Form field references and navigation
  const formFieldRefs = useRef<Map<string, HTMLElement>>(new Map());
  const navigationGrid = useRef<FormField[]>([]);
  const warehouseDetailsRef = useRef<HTMLDivElement>(null);

  const assignedToOptions = [
    'John Smith', 'Sarah Johnson', 'Mike Davis', 'Emily Brown', 'David Wilson',
    'Lisa Anderson', 'Chris Miller', 'Amanda Taylor', 'Kevin Moore', 'Jessica White'
  ];

  const priorBEOptions = ['Advance BE', 'Normal', 'Prior'];
  const motOptions = ['A-Air', 'S-Sea', 'L-Land'];
  const beTypeOptions = ['H-Home Consumption', 'W-Warehouse', 'E-Ex-bond', 'SEZ - Z type', 'M-SEZ - M type', 'T-SEZ - T type', 'V-SEZ - V type', 'S-SEZ - S type'];
  const customsHouseOptions = ['INDEL4', 'INMAA1', 'INBOM1', 'INCHE1'];
  const paymentMethodOptions = ['Transaction', 'Cash', 'Credit', 'Bank Transfer'];
  const portOptions = ['JPNRT - NARITA APT/TOKYO', 'INBOM1 - MUMBAI', 'INCHE1 - CHENNAI'];
  const countryOptions = ['JP - JAPAN', 'IN - INDIA', 'US - USA', 'DE - GERMANY'];
  const stateCodeOptions = ['01-JAMMU AND KASHMIR', '27-MAHARASHTRA', '07-DELHI'];
  const taxTypeOptions = ['GST-IN-GSTIN Private', 'VAT', 'CST', 'Service Tax'];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle field hover for label highlighting
  const handleFieldHover = useCallback((fieldId: string, isHovered: boolean) => {
    setHoveredLabels(prev => {
      const newSet = new Set(prev);
      if (isHovered) {
        newSet.add(fieldId);
      } else {
        newSet.delete(fieldId);
      }
      return newSet;
    });
  }, []);

  // Initialize navigation grid
  useEffect(() => {
    navigationGrid.current = [
      // CB Details section
      { id: 'cb-name', ref: React.createRef<HTMLElement>(), row: 0, col: 0, section: 'cb' },
      { id: 'cb-license', ref: React.createRef<HTMLElement>(), row: 0, col: 1, section: 'cb' },
      { id: 'cb-brno', ref: React.createRef<HTMLElement>(), row: 1, col: 0, section: 'cb' },
      { id: 'cb-city', ref: React.createRef<HTMLElement>(), row: 1, col: 1, section: 'cb' },
      { id: 'cb-address', ref: React.createRef<HTMLElement>(), row: 2, col: 0, section: 'cb' },
      { id: 'cb-state', ref: React.createRef<HTMLElement>(), row: 2, col: 1, section: 'cb' },
      { id: 'cb-country', ref: React.createRef<HTMLElement>(), row: 3, col: 1, section: 'cb' },
      { id: 'cb-pincode', ref: React.createRef<HTMLElement>(), row: 4, col: 0, section: 'cb' },
      { id: 'cb-branch', ref: React.createRef<HTMLElement>(), row: 4, col: 1, section: 'cb' },
      { id: 'cb-aeo-reg', ref: React.createRef<HTMLElement>(), row: 5, col: 0, section: 'cb' },
      { id: 'cb-aeo-role', ref: React.createRef<HTMLElement>(), row: 5, col: 0, section: 'cb' },
      { id: 'cb-icegate', ref: React.createRef<HTMLElement>(), row: 5, col: 1, section: 'cb' },
      { id: 'cb-submitted', ref: React.createRef<HTMLElement>(), row: 6, col: 0, section: 'cb' },
      { id: 'cb-assigned', ref: React.createRef<HTMLElement>(), row: 6, col: 1, section: 'cb' },
      
      // Job Info section
      { id: 'job-no', ref: React.createRef<HTMLElement>(), row: 0, col: 0, section: 'job' },
      { id: 'job-date', ref: React.createRef<HTMLElement>(), row: 0, col: 0, section: 'job' },
      { id: 'be-no', ref: React.createRef<HTMLElement>(), row: 0, col: 1, section: 'job' },
      { id: 'be-date', ref: React.createRef<HTMLElement>(), row: 0, col: 1, section: 'job' },
      // ... add more job fields as needed
    ];
  }, []);

  // Arrow key navigation handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      return;
    }

    e.preventDefault();
    
    const activeElement = document.activeElement as HTMLElement;
    const fieldId = activeElement?.getAttribute('data-field-id');
    
    if (!fieldId) return;

    const currentField = navigationGrid.current.find(field => field.id === fieldId);
    if (!currentField) return;

    let targetField: FormField | undefined;

    switch (e.key) {
      case 'ArrowUp':
        targetField = navigationGrid.current.find(field => 
          field.section === currentField.section && 
          field.col === currentField.col && 
          field.row === currentField.row - 1
        );
        break;
      case 'ArrowDown':
        targetField = navigationGrid.current.find(field => 
          field.section === currentField.section && 
          field.col === currentField.col && 
          field.row === currentField.row + 1
        );
        break;
      case 'ArrowLeft':
        targetField = navigationGrid.current.find(field => 
          field.section === currentField.section && 
          field.row === currentField.row && 
          field.col === currentField.col - 1
        );
        break;
      case 'ArrowRight':
        targetField = navigationGrid.current.find(field => 
          field.section === currentField.section && 
          field.row === currentField.row && 
          field.col === currentField.col + 1
        );
        break;
    }

    if (targetField) {
      const targetElement = document.querySelector(`[data-field-id="${targetField.id}"]`) as HTMLElement;
      if (targetElement) {
        targetElement.focus();
      }
    }
  }, []);

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Scroll to warehouse details section when BE Type is Warehouse or Ex-bond
  useEffect(() => {
    const shouldShowWarehouse = formData.beType === 'W-Warehouse' || formData.beType === 'E-Ex-bond';
    if (shouldShowWarehouse && warehouseDetailsRef.current) {
      setTimeout(() => {
        warehouseDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [formData.beType]);

  // Helper function to get label highlight class
  const getLabelHighlightClass = (fieldId: string) => {
    return hoveredLabels.has(fieldId) 
      ? 'border-[#02B196] bg-[#CEF6F0] transition-all duration-200' 
      : '';
  };

  return (
    <div className="bg-[#ffffff] w-full">
      {/* Section Header */}
      <div className="bg-[#dde3f2] h-10 relative w-full flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
              <g>
                <path d={svgPaths.p39a43b00} fill="url(#paint0_linear_1105_14157)" />
                <g filter="url(#filter0_i_1105_14157)">
                  <path d={svgPaths.pc8cec00} fill="url(#paint1_linear_1105_14157)" />
                </g>
                <path d={svgPaths.p203ac500} stroke="url(#paint2_linear_1105_14157)" strokeWidth="0.2" />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="13.3984"
                  id="filter0_i_1105_14157"
                  width="18"
                  x="0"
                  y="4.60156"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.444444 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1105_14157" />
                </filter>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1105_14157"
                  x1="8.86855"
                  x2="9.23037"
                  y1="-6.1943e-09"
                  y2="11.6804"
                >
                  <stop stopColor="#FF7200" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_1105_14157"
                  x1="9"
                  x2="10.6492"
                  y1="1.73038"
                  y2="25.0395"
                >
                  <stop stopColor="#FDA762" />
                  <stop offset="0.371712" stopColor="#FF9846" />
                  <stop offset="0.667431" stopColor="#FF7100" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1105_14157" x1="9" x2="9" y1="5" y2="16">
                  <stop stopColor="#FFBD87" />
                  <stop offset="1" stopColor="#D37222" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-[#050e25]">
            Job details
          </h2>
        </div>
      </div>

      {/* 1. CB DETAILS */}
      <div className="bg-[#ebeef7] h-[34px] border-b border-[#d0d5e3] flex items-center justify-center">
        <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[14px] text-[#050e25] small-caps">
          1. CB DETAILS
        </div>
      </div>

      {/* CB Details Content */}
      <div className="bg-white">
        {/* Name and License No */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-name')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Name</span>
              <div className="ml-auto">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p3d558af0} fill="#626776" />
                </svg>
              </div>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="cb-name"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Enter name"
                onHover={(isHovered) => handleFieldHover('cb-name', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-license')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">License No.</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="cb-license"
                value={formData.licenseNo}
                onChange={(e) => updateFormData('licenseNo', e.target.value)}
                placeholder="Enter license number"
                onHover={(isHovered) => handleFieldHover('cb-license', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Br. SI. No. and City */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-brno')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Br. SI. No.</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="cb-brno"
                value={formData.brSlNo}
                onChange={(e) => updateFormData('brSlNo', e.target.value)}
                placeholder="Enter branch number"
                onHover={(isHovered) => handleFieldHover('cb-brno', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-city')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">City</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="cb-city"
                value={formData.cityPin}
                onValueChange={(value) => updateFormData('cityPin', value)}
                options={['NEW DELHI', 'MUMBAI', 'CHENNAI', 'KOLKATA']}
                placeholder="Select city"
                onHover={(isHovered) => handleFieldHover('cb-city', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Address and State & Country */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-address')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Address</span>
            </div>
            <div className="flex-1 h-[64px]">
              <CustomTextarea
                fieldId="cb-address"
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                placeholder="Enter address"
                onHover={(isHovered) => handleFieldHover('cb-address', isHovered)}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex border-b border-[#d0d5e3]">
              <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-state')}`}>
                <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">State</span>
              </div>
              <div className="flex-1 h-[32px]">
                <CustomSelect
                  fieldId="cb-state"
                  value={formData.stateCountry}
                  onValueChange={(value) => updateFormData('stateCountry', value)}
                  options={['NEW DELHI', '07 – DELHI', 'MAHARASHTRA', 'TAMIL NADU']}
                  placeholder="Select state"
                  onHover={(isHovered) => handleFieldHover('cb-state', isHovered)}
                />
              </div>
            </div>
            <div className="flex">
              <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-country')}`}>
                <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Country</span>
              </div>
              <div className="flex-1 h-[32px]">
                <CustomSelect
                  fieldId="cb-country"
                  value={formData.country}
                  onValueChange={(value) => updateFormData('country', value)}
                  options={['07 – DELHI', 'IN - INDIA', 'US - USA']}
                  placeholder="Select country"
                  onHover={(isHovered) => handleFieldHover('cb-country', isHovered)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pincode and Branch */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-pincode')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Pincode</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="cb-pincode"
                value={formData.pincode}
                onChange={(e) => updateFormData('pincode', e.target.value)}
                placeholder="Enter pincode"
                onHover={(isHovered) => handleFieldHover('cb-pincode', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-branch')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Branch</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="cb-branch"
                value={formData.branchCode}
                onValueChange={(value) => updateFormData('branchCode', value)}
                options={['NEW DELHI', 'MUMBAI', 'CHENNAI']}
                placeholder="Select branch"
                onHover={(isHovered) => handleFieldHover('cb-branch', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* AEO Reg.No/Role and Icegate ID */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[rgba(221,227,242,0.42)] min-w-[150px] w-[150px] max-w-[150px] flex-shrink-0 px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-aeo-reg') || getLabelHighlightClass('cb-aeo-role')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">AEO Reg.No/Role</span>
            </div>
            <div className="flex w-1/2 h-[32px] border-r border-[#d0d5e3]">
              <CustomInput
                fieldId="cb-aeo-reg"
                value={formData.aeoRegNo}
                onChange={(e) => updateFormData('aeoRegNo', e.target.value)}
                placeholder="Reg No"
                onHover={(isHovered) => handleFieldHover('cb-aeo-reg', isHovered)}
              />
            </div>
            <div className="flex w-1/2 h-[32px]">
              <CustomInput
                fieldId="cb-aeo-role"
                value={formData.aeoRole}
                onChange={(e) => updateFormData('aeoRole', e.target.value)}
                placeholder="Role"
                onHover={(isHovered) => handleFieldHover('cb-aeo-role', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-icegate')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Icegate ID</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="cb-icegate"
                value={formData.icegateId}
                onChange={(e) => updateFormData('icegateId', e.target.value)}
                placeholder="Enter Icegate ID"
                onHover={(isHovered) => handleFieldHover('cb-icegate', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Submitted by and Assigned CB */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-submitted')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Submitted by</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="cb-submitted"
                value={formData.submittedBy}
                onValueChange={(value) => updateFormData('submittedBy', value)}
                options={['Custom Broker', 'Customer']}
                placeholder="Select submitter"
                onHover={(isHovered) => handleFieldHover('cb-submitted', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[rgba(221,227,242,0.42)] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cb-assigned')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Assigned CB</span>
            </div>
            <div className="flex-1 h-[32px]">
              <SearchableMultiSelect
                fieldId="cb-assigned"
                value={formData.assignedCb}
                onValueChange={(value) => updateFormData('assignedCb', value)}
                options={assignedToOptions}
                placeholder="Select User"
                onHover={(isHovered) => handleFieldHover('cb-assigned', isHovered)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. JOB INFO */}
      <div className="bg-[#ebeef7] h-[34px] border-b border-[#d0d5e3] flex items-center justify-center">
        <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[14px] text-[#050e25] small-caps">
          2. Job Info
        </div>
      </div>

      {/* Job Info Content */}
      <div className="bg-white">
        {/* Job No & Date, BE No & Date */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] min-w-[150px] w-[150px] max-w-[150px] flex-shrink-0 px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('job-no') || getLabelHighlightClass('job-date')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Job No & Date</span>
              <div className="ml-auto">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.pdb04d80} fill="#626776" />
                  <path d={svgPaths.p1e8abe70} fill="#626776" />
                </svg>
              </div>
            </div>
            <div className="flex w-1/2 h-[32px] border-r border-[#d0d5e3]">
              <CustomInput
                fieldId="job-no"
                value={formData.jobNoDate.split('|')[0]}
                onChange={(e) => updateFormData('jobNoDate', `${e.target.value}|${formData.jobNoDate.split('|')[1] || ''}`)}
                placeholder="Job number"
                onHover={(isHovered) => handleFieldHover('job-no', isHovered)}
              />
            </div>
            <div className="flex w-1/2 h-[32px]">
              <DatePicker
                fieldId="job-date"
                value={formData.jobNoDate.split('|')[1] || ''}
                onValueChange={(value) => updateFormData('jobNoDate', `${formData.jobNoDate.split('|')[0]}|${value}`)}
                placeholder="Select date"
                onHover={(isHovered) => handleFieldHover('job-date', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] min-w-[150px] w-[150px] max-w-[150px] flex-shrink-0 px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('be-no') || getLabelHighlightClass('be-date')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">BE No & Date</span>
            </div>
            <div className="flex w-1/2 h-[32px] border-r border-[#d0d5e3]">
              <CustomInput
                fieldId="be-no"
                value={formData.beNoDate.split('|')[0]}
                onChange={(e) => updateFormData('beNoDate', `${e.target.value}|${formData.beNoDate.split('|')[1] || ''}`)}
                placeholder="BE number"
                onHover={(isHovered) => handleFieldHover('be-no', isHovered)}
              />
            </div>
            <div className="flex w-1/2 h-[32px]">
              <DatePicker
                fieldId="be-date"
                value={formData.beNoDate.split('|')[1] || ''}
                onValueChange={(value) => updateFormData('beNoDate', `${formData.beNoDate.split('|')[0]}|${value}`)}
                placeholder="Select date"
                onHover={(isHovered) => handleFieldHover('be-date', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Prior BE, MOT */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('prior-be')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Prior BE</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="prior-be"
                value={formData.priorBe}
                onValueChange={(value) => updateFormData('priorBe', value)}
                options={priorBEOptions}
                placeholder="Select prior BE"
                onHover={(isHovered) => handleFieldHover('prior-be', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('mot')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">MOT</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="mot"
                value={formData.mot}
                onValueChange={(value) => updateFormData('mot', value)}
                options={motOptions}
                placeholder="Select MOT"
                onHover={(isHovered) => handleFieldHover('mot', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Continue with other Job Info fields... */}
        {/* BE Type, Transaction Ref No. */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('be-type')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">BE Type</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="be-type"
                value={formData.beType}
                onValueChange={(value) => updateFormData('beType', value)}
                options={beTypeOptions}
                placeholder="Select BE type"
                onHover={(isHovered) => handleFieldHover('be-type', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('transaction-ref')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">AEO Reg No. /Role</span>
            </div>
            <div className="flex-1 h-[32px] flex">
              <div className="w-1/2 h-full border-r border-[#d0d5e3]">
                <CustomInput
                  fieldId="aeo-reg-no-job"
                  value={formData.aeoRegNo}
                  onChange={(e) => updateFormData('aeoRegNo', e.target.value)}
                  placeholder="Reg No"
                  onHover={(isHovered) => handleFieldHover('aeo-reg-no-job', isHovered)}
                />
              </div>
              <div className="w-1/2 h-full">
                <CustomInput
                  fieldId="aeo-role-job"
                  value={formData.aeoRole}
                  onChange={(e) => updateFormData('aeoRole', e.target.value)}
                  placeholder="Role"
                  onHover={(isHovered) => handleFieldHover('aeo-role-job', isHovered)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Customs house Cd., Customer Ref No. */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('customs-house')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Customs house Cd.</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="customs-house"
                value={formData.customsHouseCd}
                onValueChange={(value) => updateFormData('customsHouseCd', value)}
                options={customsHouseOptions}
                placeholder="Select customs house"
                onHover={(isHovered) => handleFieldHover('customs-house', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('customer-ref')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Customer Ref No.</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="customer-ref"
                value={formData.customerRefNo}
                onChange={(e) => updateFormData('customerRefNo', e.target.value)}
                placeholder="Enter customer ref no"
                onHover={(isHovered) => handleFieldHover('customer-ref', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Assessable Value, Duty payable */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('assessable-value')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Assessable Value</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="assessable-value"
                value={formData.assessableValue}
                onChange={(e) => updateFormData('assessableValue', e.target.value)}
                placeholder="Enter assessable value"
                onHover={(isHovered) => handleFieldHover('assessable-value', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('duty-payable')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Duty payable</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="duty-payable"
                value={formData.dutyPayable}
                onChange={(e) => updateFormData('dutyPayable', e.target.value)}
                placeholder="Enter duty payable"
                onHover={(isHovered) => handleFieldHover('duty-payable', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* UCR No, UCR Type */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('ucr-no')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">UCR No</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="ucr-no"
                value={formData.ucrNo}
                onChange={(e) => updateFormData('ucrNo', e.target.value)}
                placeholder="Enter UCR number"
                onHover={(isHovered) => handleFieldHover('ucr-no', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('ucr-type')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">UCR Type</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="ucr-type"
                value={formData.ucrType}
                onChange={(e) => updateFormData('ucrType', e.target.value)}
                placeholder="Enter UCR type"
                onHover={(isHovered) => handleFieldHover('ucr-type', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Toggle switches row */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('kachcha-be')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Kachcha BE</span>
            </div>
            <div className="flex-1 h-[32px]">
              <ToggleSwitch 
                fieldId="kachcha-be"
                checked={formData.kacchaBe}
                onCheckedChange={(checked) => updateFormData('kacchaBe', checked)}
                onHover={(isHovered) => handleFieldHover('kachcha-be', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('green-channel')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Green Channel</span>
            </div>
            <div className="flex-1 h-[32px]">
              <ToggleSwitch 
                fieldId="green-channel"
                checked={formData.greenChannel}
                onCheckedChange={(checked) => updateFormData('greenChannel', checked)}
                onHover={(isHovered) => handleFieldHover('green-channel', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Section 48, Section 48 Reason */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('section-48')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Section 48</span>
            </div>
            <div className="flex-1 h-[32px]">
              <ToggleSwitch 
                fieldId="section-48"
                checked={formData.section48}
                onCheckedChange={(checked) => updateFormData('section48', checked)}
                onHover={(isHovered) => handleFieldHover('section-48', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('section-48-reason')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Section 48 Reason</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="section-48-reason"
                value={formData.section48Reason}
                onChange={(e) => updateFormData('section48Reason', e.target.value)}
                placeholder="Enter reason"
                onHover={(isHovered) => handleFieldHover('section-48-reason', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* First Check, First check Reason */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('first-check')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">First Check</span>
            </div>
            <div className="flex-1 h-[32px]">
              <ToggleSwitch 
                fieldId="first-check"
                checked={formData.firstCheck}
                onCheckedChange={(checked) => updateFormData('firstCheck', checked)}
                onHover={(isHovered) => handleFieldHover('first-check', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('first-check-reason')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">First check Reason</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="first-check-reason"
                value={formData.firstCheckReason}
                onChange={(e) => updateFormData('firstCheckReason', e.target.value)}
                placeholder="Enter reason"
                onHover={(isHovered) => handleFieldHover('first-check-reason', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Provisional Asses., P A Reason */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('provisional-assess')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Provisional Asses.</span>
            </div>
            <div className="flex-1 h-[32px]">
              <ToggleSwitch 
                fieldId="provisional-assess"
                checked={formData.provisionalAssess}
                onCheckedChange={(checked) => updateFormData('provisionalAssess', checked)}
                onHover={(isHovered) => handleFieldHover('provisional-assess', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('pa-reason')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">P A Reason</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="pa-reason"
                value={formData.paReason}
                onChange={(e) => updateFormData('paReason', e.target.value)}
                placeholder="Enter reason"
                onHover={(isHovered) => handleFieldHover('pa-reason', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Misc. Load, Payt Mthod Cd. */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('misc-load')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Misc. Load</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="misc-load"
                value={formData.miscLoad}
                onChange={(e) => updateFormData('miscLoad', e.target.value)}
                placeholder="Enter misc load"
                onHover={(isHovered) => handleFieldHover('misc-load', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('payt-method')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Payt Mthod Cd.</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="payt-method"
                value={formData.paytMethodCd}
                onValueChange={(value) => updateFormData('paytMethodCd', value)}
                options={paymentMethodOptions}
                placeholder="Select payment method"
                onHover={(isHovered) => handleFieldHover('payt-method', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Port of origin, Country of origin */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('port-origin')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Port of origin</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="port-origin"
                value={formData.portOfOrigin}
                onValueChange={(value) => updateFormData('portOfOrigin', value)}
                options={portOptions}
                placeholder="Select port of origin"
                onHover={(isHovered) => handleFieldHover('port-origin', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('country-origin')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Country of origin</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="country-origin"
                value={formData.countryOfOrigin}
                onValueChange={(value) => updateFormData('countryOfOrigin', value)}
                options={countryOptions}
                placeholder="Select country of origin"
                onHover={(isHovered) => handleFieldHover('country-origin', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Port of shipment, Cons. Country */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('port-shipment')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Port of shipment</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="port-shipment"
                value={formData.portOfShipment}
                onValueChange={(value) => updateFormData('portOfShipment', value)}
                options={portOptions}
                placeholder="Select port of shipment"
                onHover={(isHovered) => handleFieldHover('port-shipment', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('cons-country')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Cons. Country</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="cons-country"
                value={formData.consCountry}
                onValueChange={(value) => updateFormData('consCountry', value)}
                options={countryOptions}
                placeholder="Select country"
                onHover={(isHovered) => handleFieldHover('cons-country', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Remarks */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-full">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('remarks')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Remarks</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="remarks"
                value={formData.remarks}
                onChange={(e) => updateFormData('remarks', e.target.value)}
                placeholder="Enter remarks"
                onHover={(isHovered) => handleFieldHover('remarks', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* HSS Transaction, Add. charges */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('hss-transaction')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">HSS Transaction</span>
            </div>
            <div className="flex-1 h-[32px]">
              <ToggleSwitch 
                fieldId="hss-transaction"
                checked={formData.hssTransaction}
                onCheckedChange={(checked) => updateFormData('hssTransaction', checked)}
                onHover={(isHovered) => handleFieldHover('hss-transaction', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('add-charges')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Add. charges</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="add-charges"
                value={formData.addCharges}
                onChange={(e) => updateFormData('addCharges', e.target.value)}
                placeholder="Enter additional charges"
                onHover={(isHovered) => handleFieldHover('add-charges', isHovered)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Missing separator above Commercial TAX Type */}
      <div className="border-b border-[#d0d5e3] bg-white h-0"></div>

      {/* 3. IMPORTER DETAILS */}
      <div className="bg-[#ebeef7] h-[34px] border-b border-[#d0d5e3] flex items-center justify-center">
        <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[14px] text-[#050e25] small-caps">
          3. Importer Details
        </div>
      </div>

      <ImporterDetailsSection 
        formData={formData}
        updateFormData={updateFormData}
        hoveredLabels={hoveredLabels}
        handleFieldHover={handleFieldHover}
      />

      {/* 4. COMMERCIAL TAX TYPE */}
      <div className="bg-[#ebeef7] h-[34px] border-b border-[#d0d5e3] flex items-center justify-center">
        <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[14px] text-[#050e25] small-caps">
          4. Commercial TAX Type
        </div>
      </div>

      {/* Commercial Tax Type Content */}
      <div className="bg-white">
        {/* State Code, Tax Type */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('state-code')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">State Code</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="state-code"
                value={formData.stateCode}
                onValueChange={(value) => updateFormData('stateCode', value)}
                options={stateCodeOptions}
                placeholder="Select state code"
                onHover={(isHovered) => handleFieldHover('state-code', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('tax-type')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Tax Type</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomSelect
                fieldId="tax-type"
                value={formData.taxType}
                onValueChange={(value) => updateFormData('taxType', value)}
                options={taxTypeOptions}
                placeholder="Select tax type"
                onHover={(isHovered) => handleFieldHover('tax-type', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* Registration No. */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('registration-no')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">Registration No.</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="registration-no"
                value={formData.registrationNo}
                onChange={(e) => updateFormData('registrationNo', e.target.value)}
                placeholder="Enter registration number"
                onHover={(isHovered) => handleFieldHover('registration-no', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            {/* Empty space to match the design */}
          </div>
        </div>
      </div>

      {/* 5. WAREHOUSE DETAILS - Only shown for Warehouse or Ex-bond BE Types */}
      {(formData.beType === 'W-Warehouse' || formData.beType === 'E-Ex-bond') && (
        <div ref={warehouseDetailsRef}>
          <div className="bg-[#ebeef7] h-[34px] border-b border-[#d0d5e3] flex items-center justify-center">
        <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[14px] text-[#050e25] small-caps">
          5. Warehouse DETAILS
        </div>
      </div>

      {/* Warehouse Details Content */}
      <div className="bg-white">
        {/* W/H B/E No. & Dt., W/H Job No. */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] min-w-[150px] w-[150px] max-w-[150px] flex-shrink-0 px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('wh-be-no') || getLabelHighlightClass('wh-be-date')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">W/H B/E No. & Dt.</span>
            </div>
            <div className="flex w-1/2 h-[32px] border-r border-[#d0d5e3]">
              <CustomInput
                fieldId="wh-be-no"
                value={formData.whBeNoDate.split('|')[0]}
                onChange={(e) => updateFormData('whBeNoDate', `${e.target.value}|${formData.whBeNoDate.split('|')[1] || ''}`)}
                placeholder="BE Number"
                onHover={(isHovered) => handleFieldHover('wh-be-no', isHovered)}
              />
            </div>
            <div className="flex w-1/2 h-[32px]">
              <DatePicker
                fieldId="wh-be-date"
                value={formData.whBeNoDate.split('|')[1] || ''}
                onValueChange={(value) => updateFormData('whBeNoDate', `${formData.whBeNoDate.split('|')[0]}|${value}`)}
                placeholder="Select date"
                onHover={(isHovered) => handleFieldHover('wh-be-date', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('wh-job-no')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">W/H Job No.</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="wh-job-no"
                value={formData.whJobNo}
                onChange={(e) => updateFormData('whJobNo', e.target.value)}
                placeholder="Enter warehouse job number"
                onHover={(isHovered) => handleFieldHover('wh-job-no', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* W/H Code, W/H Customs */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('wh-code')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">W/H Code</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="wh-code"
                value={formData.whCode}
                onChange={(e) => updateFormData('whCode', e.target.value)}
                placeholder="Enter warehouse code"
                onHover={(isHovered) => handleFieldHover('wh-code', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] w-[150px] px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('wh-customs')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">W/H Customs</span>
            </div>
            <div className="flex-1 h-[32px]">
              <CustomInput
                fieldId="wh-customs"
                value={formData.whCustoms}
                onChange={(e) => updateFormData('whCustoms', e.target.value)}
                placeholder="Enter warehouse customs"
                onHover={(isHovered) => handleFieldHover('wh-customs', isHovered)}
              />
            </div>
          </div>
        </div>

        {/* No. Pkg Rel. & Cd., W/H Gross Wght */}
        <div className="flex border-b border-[#d0d5e3]">
          <div className="flex w-1/2 border-r border-[#d0d5e3]">
            <div className={`bg-[#f3f5fa] min-w-[150px] w-[150px] max-w-[150px] flex-shrink-0 px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('pkg-rel-1') || getLabelHighlightClass('pkg-rel-2')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">No. Pkg Rel. & Cd.</span>
            </div>
            <div className="flex w-1/2 h-[32px] border-r border-[#d0d5e3]">
              <CustomInput
                fieldId="pkg-rel-1"
                value={formData.noPkgRelCd.split('|')[0]}
                onChange={(e) => updateFormData('noPkgRelCd', `${e.target.value}|${formData.noPkgRelCd.split('|')[1]}`)}
                placeholder="Package number"
                onHover={(isHovered) => handleFieldHover('pkg-rel-1', isHovered)}
              />
            </div>
            <div className="flex w-1/2 h-[32px]">
              <CustomSelect
                fieldId="pkg-rel-2"
                value={formData.noPkgRelCd.split('|')[1]}
                onValueChange={(value) => updateFormData('noPkgRelCd', `${formData.noPkgRelCd.split('|')[0]}|${value}`)}
                options={['KGS', 'LBS', 'TON']}
                placeholder="Unit"
                onHover={(isHovered) => handleFieldHover('pkg-rel-2', isHovered)}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className={`bg-[#f3f5fa] min-w-[150px] w-[150px] max-w-[150px] flex-shrink-0 px-2 py-1.5 border-r border-[#d0d5e3] flex items-center ${getLabelHighlightClass('gross-wght-1') || getLabelHighlightClass('gross-wght-2')}`}>
              <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[14px] text-[#050e25]">W/H Gross Wght</span>
            </div>
            <div className="flex w-1/2 h-[32px] border-r border-[#d0d5e3]">
              <CustomInput
                fieldId="gross-wght-1"
                value={formData.whGrossWght.split('|')[0]}
                onChange={(e) => updateFormData('whGrossWght', `${e.target.value}|${formData.whGrossWght.split('|')[1]}`)}
                placeholder="Weight"
                onHover={(isHovered) => handleFieldHover('gross-wght-1', isHovered)}
              />
            </div>
            <div className="flex w-1/2 h-[32px]">
              <CustomSelect
                fieldId="gross-wght-2"
                value={formData.whGrossWght.split('|')[1]}
                onValueChange={(value) => updateFormData('whGrossWght', `${formData.whGrossWght.split('|')[0]}|${value}`)}
                options={['KGS', 'LBS', 'TON']}
                placeholder="Unit"
                onHover={(isHovered) => handleFieldHover('gross-wght-2', isHovered)}
              />
            </div>
          </div>
        </div>
      </div>
        </div>
      )}
    </div>
  );
}