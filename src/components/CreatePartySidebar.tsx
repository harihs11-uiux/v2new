import React, { useState } from 'react';
import svgPaths from '../imports/svg-ipu0wpqvz5';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Checkbox } from './ui/checkbox';
import { Upload } from 'lucide-react';
import ArrowDropdown from '../imports/ArrowDropdown-335-131';

interface CreatePartySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

interface FormData {
  partyName: string;
  partyId: string;
  iecCode: string;
  gstinType: string;
  panNo: string;
  partyType: string;
  role: string;
  country: string;
  importerType: string;
  paymentMtdCode: string;
  paymentTerms: string;
  natureOfTransaction: string;
  valMtdApplicable: string;
  exporterType: string;
}

// Dropdown options
const gstinTypeOptions = [
  { value: 'Regular', label: 'Regular' },
  { value: 'Composition', label: 'Composition' },
  { value: 'Casual', label: 'Casual' },
  { value: 'SEZ', label: 'SEZ' },
  { value: 'Input Service Distributor', label: 'Input Service Distributor' },
];

const partyTypeOptions = [
  { value: 'Vendor', label: 'Vendor' },
  { value: 'Customer', label: 'Customer' },
  { value: 'Both', label: 'Both' },
  { value: 'None', label: 'None' },
];

const roleOptions = [
  { value: 'Foreign Party', label: 'Foreign Party' },
  { value: 'Indian Party', label: 'Indian Party' },
  { value: 'Air Line', label: 'Air Line' },
  { value: 'Shipping line', label: 'Shipping line' },
];

const countryOptions = [
  { value: 'India', label: 'India' },
  { value: 'United States', label: 'United States' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'China', label: 'China' },
  { value: 'Japan', label: 'Japan' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Australia', label: 'Australia' },
];

const importerTypeOptions = [
  { value: 'Type 1', label: 'Type 1' },
  { value: 'Type 2', label: 'Type 2' },
  { value: 'Type 3', label: 'Type 3' },
];

const paymentMtdCodeOptions = [
  { value: 'LC', label: 'LC' },
  { value: 'TT', label: 'TT' },
  { value: 'DA', label: 'DA' },
  { value: 'DP', label: 'DP' },
  { value: 'CAD', label: 'CAD' },
];

const paymentTermsOptions = [
  { value: 'Advance', label: 'Advance' },
  { value: 'Net 30', label: 'Net 30' },
  { value: 'Net 60', label: 'Net 60' },
  { value: 'Net 90', label: 'Net 90' },
  { value: 'COD', label: 'COD' },
];

const natureOfTransactionOptions = [
  { value: 'Purchase', label: 'Purchase' },
  { value: 'Sale', label: 'Sale' },
  { value: 'Consignment', label: 'Consignment' },
  { value: 'Job Work', label: 'Job Work' },
];

const valMtdApplicableOptions = [
  { value: 'Transaction Value', label: 'Transaction Value' },
  { value: 'Identical Goods', label: 'Identical Goods' },
  { value: 'Similar Goods', label: 'Similar Goods' },
  { value: 'Deductive Value', label: 'Deductive Value' },
  { value: 'Computed Value', label: 'Computed Value' },
];

const exporterTypeOptions = [
  { value: 'Manufacturer', label: 'Manufacturer' },
  { value: 'Merchant', label: 'Merchant' },
  { value: 'Service Provider', label: 'Service Provider' },
];

const attachmentRows = [
  { id: 1, name: 'Add Customer Registration Form' },
  { id: 2, name: 'Add PAN' },
  { id: 3, name: 'Add TAN' },
  { id: 4, name: 'Add Authorization Letter' },
  { id: 5, name: 'Add IEC' },
  { id: 6, name: 'Add Memorandum' },
  { id: 7, name: 'Add Articles of Association' },
];

// Custom Dropdown Component (matches CreateJobSidebar)
interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

const CustomDropdown: React.FC<DropdownProps> = ({ value, onChange, options, placeholder, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  const showBorder = isHovered || isFocused || isOpen;
  const showShadow = isFocused || isOpen;

  const displayText = selectedOption?.label || placeholder || 'Select...';

  return (
    <div className="relative w-full h-full">
      {showBorder && (
        <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none z-10" />
      )}
      {showShadow && (
        <div 
          className="absolute inset-0 pointer-events-none z-5" 
          style={{ boxShadow: '0px 2px 12px 0px rgba(113, 144, 214, 0.47)' }} 
        />
      )}
      <Popover open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        setIsFocused(open);
      }}>
        <PopoverTrigger asChild>
          <div 
            className={`flex flex-row gap-1 items-center justify-start cursor-pointer transition-all duration-200 p-[8px] w-full h-full ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            tabIndex={0}
          >
            <div className="flex-1 font-['Inter:Regular',_sans-serif] font-normal text-[14px]" style={{ color: selectedOption ? '#050e25' : '#9497a1' }}>
              <p className="leading-[18px]">{displayText}</p>
            </div>
            <div className="relative shrink-0 size-[18px]">
              <ArrowDropdown />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0 bg-[#050E25] border-[#626776]" side="bottom" align="start">
          <div className="max-h-64 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className="px-3 py-2 cursor-pointer hover:bg-[#1a1a2e] text-white text-[14px] border-b border-[#626776] last:border-b-0"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                  setIsFocused(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

// Custom Input Component (matches CreateJobSidebar)
interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomInput: React.FC<InputProps> = ({ value, onChange, placeholder, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showBorder = isHovered || isFocused;
  const showShadow = isFocused;

  return (
    <div className="relative w-full h-full">
      {showBorder && (
        <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none z-10" />
      )}
      {showShadow && (
        <div 
          className="absolute inset-0 pointer-events-none z-5" 
          style={{ boxShadow: '0px 2px 12px 0px rgba(113, 144, 214, 0.47)' }} 
        />
      )}
      <div 
        className="w-full h-[34px] p-[8px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full h-full bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] placeholder:text-[#9497a1] ${className}`}
        />
      </div>
    </div>
  );
};

// Section Header Icon (Party Details card icon)
function PartyDetailsIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Party Details Icon">
      <div className="absolute h-4 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Shapes">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
          <g id="Shapes">
            <path d={svgPaths.p39a43b00} fill="url(#paint0_party)" id="Ellipse" />
            <g id="Rectangle">
              <g filter="url(#filter0_party)">
                <path d={svgPaths.p343ad000} fill="url(#paint1_party)" />
              </g>
              <path d={svgPaths.p34c1f400} stroke="url(#paint2_party)" strokeWidth="0.2" />
            </g>
            <foreignObject height="15.6" width="26" x="-4" y="-1.99997">
              <div style={{ backdropFilter: "blur(2px)", clipPath: "url(#bgblur_party_clip)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p2008ed00} data-figma-bg-blur-radius="4" fill="var(--fill-0, #F1A66A)" id="Rect2" stroke="url(#paint3_party)" strokeWidth="0.2" />
            <foreignObject height="13.0667" width="12.7684" x="2.85263" y="3.33333">
              <div style={{ backdropFilter: "blur(2.6px)", clipPath: "url(#bgblur_party_clip2)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g data-figma-bg-blur-radius="5.2" filter="url(#filter2_party)" id="Rect3">
              <rect fill="url(#paint4_party)" height="2.66667" rx="1" shapeRendering="crispEdges" width="2.36842" x="8.05263" y="8.53333" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_party" width="18" x="0" y="2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.444444 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1" />
            </filter>
            <clipPath id="bgblur_party_clip" transform="translate(4 1.99997)">
              <path d={svgPaths.p2008ed00} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.0667" id="filter2_party" width="12.7684" x="2.85263" y="3.33333">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.818289 0 0 0 0 0.481499 0 0 0 0 0.208104 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_party_clip2" transform="translate(-2.85263 -3.33333)">
              <rect height="2.66667" rx="1" width="2.36842" x="8.05263" y="8.53333" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_party" x1="8.86855" x2="9.23037" y1="0" y2="11.6804">
              <stop stopColor="#FF7200" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_party" x1="9" x2="11.4817" y1="-1.52649" y2="27.0303">
              <stop stopColor="#DD6200" />
              <stop offset="0.371712" stopColor="#FF9846" />
              <stop offset="0.667431" stopColor="#FF7100" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_party" x1="9" x2="9" y1="2.48938" y2="16">
              <stop stopColor="#FFBD87" />
              <stop offset="1" stopColor="#D37222" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_party" x1="7.65" x2="7.29872" y1="19.0145" y2="0.673446">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_party" x1="9.23684" x2="8.9676" y1="8.53333" y2="11.7306">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.29" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Attachments Icon
function AttachmentsIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Attachments Icon">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" rx="2" fill="#3874FF" fillOpacity="0.15" />
        <path d="M14 2L20 8H16C14.9 8 14 7.1 14 6V2Z" fill="#3874FF" fillOpacity="0.3" />
        <rect x="8" y="12" width="8" height="1.5" rx="0.75" fill="#3874FF" fillOpacity="0.6" />
        <rect x="8" y="15" width="5" height="1.5" rx="0.75" fill="#3874FF" fillOpacity="0.4" />
      </svg>
    </div>
  );
}

// Form Row with label + input
function FormRow({ 
  label, 
  children, 
  isFirst = false,
  hasBorderRight = true 
}: { 
  label: string; 
  children: React.ReactNode; 
  isFirst?: boolean;
  hasBorderRight?: boolean;
}) {
  return (
    <div className={`flex-1 flex flex-row h-[34px] items-start justify-start group ${hasBorderRight ? '' : ''}`}>
      <div className={`bg-[rgba(221,227,242,0.42)] group-hover:bg-[#CEF6F0] group-focus-within:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] group-focus-within:border group-focus-within:border-[#00B196] flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200`}>
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
          <p className="leading-[18px]">{label}</p>
        </div>
      </div>
      <div className={`flex-1 flex flex-col h-[34px] items-start justify-start ${hasBorderRight ? 'border-r border-[#d0d5e3]' : ''}`}>
        <div className="flex flex-row items-start justify-start w-full h-full">
          <div className="flex-1 h-full flex items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Two-column row
function TwoColumnRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#ffffff] flex flex-row items-start justify-start w-full h-[34px] border border-[#d0d5e3] border-t-0">
      {children}
    </div>
  );
}

// Section numbered header
function SectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="bg-[#ebeef7] h-10 w-full border border-[#d0d5e3] border-t-0">
      <div className="h-10 overflow-clip relative w-full">
        <div className="absolute font-['Roboto:Bold',_sans-serif] font-bold text-[#050e25] text-[14px] text-center translate-x-[-50%] top-1/2 left-1/2 transform -translate-y-1/2">
          <ol className="list-decimal" start={number}>
            <li className="list-inside mb-0 ms-[21px]">
              <span className="leading-[18px]">{title}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default function CreatePartySidebar({ isOpen, onClose, onSubmit }: CreatePartySidebarProps) {
  const [formData, setFormData] = useState<FormData>({
    partyName: '',
    partyId: '',
    iecCode: '',
    gstinType: '',
    panNo: '',
    partyType: '',
    role: '',
    country: '',
    importerType: '',
    paymentMtdCode: '',
    paymentTerms: '',
    natureOfTransaction: '',
    valMtdApplicable: '',
    exporterType: '',
  });

  const [selectedAttachments, setSelectedAttachments] = useState<Set<number>>(new Set());

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleAttachment = (id: number) => {
    const newSet = new Set(selectedAttachments);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedAttachments(newSet);
  };

  const handleSelectAllAttachments = () => {
    if (selectedAttachments.size === attachmentRows.length) {
      setSelectedAttachments(new Set());
    } else {
      setSelectedAttachments(new Set(attachmentRows.map(r => r.id)));
    }
  };

  const handleSubmit = () => {
    onSubmit?.(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-50"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        onClick={onClose}
      />
      
      {/* Sidebar - Fixed to right side */}
      <div className="fixed right-0 top-0 h-full w-[1017px] bg-[#cad2e5] shadow-lg z-50 flex flex-col" data-name="Sidebar">
        
        {/* Title Bar */}
        <div className="bg-[#1f2432] box-border content-stretch flex flex-row items-start justify-between p-[16px] h-24 border-b border-[#505767]" data-name="Title Bar">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic text-left" data-name="Text">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[16px] w-full">
              <p className="block leading-[18px]">Create new Party</p>
            </div>
            <div className="font-['Inter:Regular',_sans-serif] font-normal text-[#cdcfd3] text-[14px] w-full">
              <p className="block leading-[18px]">Enter the basic details to create a new Party</p>
            </div>
          </div>
          <button onClick={onClose} className="cursor-pointer bg-transparent border-none p-0">
            <div className="relative shrink-0 size-[18px]" data-name="close">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
                <g>
                  <mask height="18" id="mask0_party_close" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
                  </mask>
                  <g mask="url(#mask0_party_close)">
                    <path d={svgPaths.p4280c0} fill="var(--fill-0, #9497A1)" id="close" />
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>

        {/* Content Area - Scrollable */}
        <div 
          className="flex-1 flex flex-col px-6 pt-6 pb-3 overflow-y-auto table-container" 
          style={{ height: 'calc(100vh - 96px - 80px)' }}
        >
          <div className="flex flex-col">
            
            {/* Party Details Section Header */}
            <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg" data-name="Section Header">
              <div className="flex items-center justify-center h-full gap-2">
                <PartyDetailsIcon />
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[16px]">
                  <p className="leading-[20px]">Party Details</p>
                </div>
              </div>
            </div>

            {/* 1. PARTY DETAILS */}
            <div>
              <SectionHeader number={1} title="Party Details" />

              {/* Row: Party Name | Party ID */}
              <TwoColumnRow>
                <FormRow label="Party Name">
                  <CustomInput
                    value={formData.partyName}
                    onChange={(v) => updateField('partyName', v)}
                    placeholder="Enter Party Name"
                  />
                </FormRow>
                <FormRow label="Party ID" hasBorderRight={false}>
                  <CustomInput
                    value={formData.partyId}
                    onChange={(v) => updateField('partyId', v)}
                    placeholder="Enter ID"
                  />
                </FormRow>
              </TwoColumnRow>

              {/* Row: IEC Code | GSTIN Type */}
              <TwoColumnRow>
                <FormRow label="IEC Code">
                  <CustomInput
                    value={formData.iecCode}
                    onChange={(v) => updateField('iecCode', v)}
                    placeholder="Enter IEC Code"
                  />
                </FormRow>
                <FormRow label="GSTIN Type" hasBorderRight={false}>
                  <CustomDropdown
                    value={formData.gstinType}
                    onChange={(v) => updateField('gstinType', v)}
                    options={gstinTypeOptions}
                    placeholder="Select GSTIN Type"
                  />
                </FormRow>
              </TwoColumnRow>

              {/* Row: PAN No. | Party Type */}
              <TwoColumnRow>
                <FormRow label="PAN No.">
                  <CustomInput
                    value={formData.panNo}
                    onChange={(v) => updateField('panNo', v)}
                    placeholder="Enter PAN Number"
                  />
                </FormRow>
                <FormRow label="Party Type" hasBorderRight={false}>
                  <CustomDropdown
                    value={formData.partyType}
                    onChange={(v) => updateField('partyType', v)}
                    options={partyTypeOptions}
                    placeholder="Select Party Type"
                  />
                </FormRow>
              </TwoColumnRow>

              {/* Row: Role | Country */}
              <TwoColumnRow>
                <FormRow label="Role">
                  <CustomDropdown
                    value={formData.role}
                    onChange={(v) => updateField('role', v)}
                    options={roleOptions}
                    placeholder="Select Role"
                  />
                </FormRow>
                <FormRow label="Country" hasBorderRight={false}>
                  <CustomDropdown
                    value={formData.country}
                    onChange={(v) => updateField('country', v)}
                    options={countryOptions}
                    placeholder="Select Country"
                  />
                </FormRow>
              </TwoColumnRow>
            </div>

            {/* 2. TRANSACTION IMPORTS */}
            <div>
              <SectionHeader number={2} title="Transaction Imports" />

              {/* Row: Importer Type | Payment Mtd Code */}
              <TwoColumnRow>
                <FormRow label="Importer Type">
                  <CustomDropdown
                    value={formData.importerType}
                    onChange={(v) => updateField('importerType', v)}
                    options={importerTypeOptions}
                    placeholder="Select Importer Type"
                  />
                </FormRow>
                <FormRow label="Payment Mtd Code" hasBorderRight={false}>
                  <CustomDropdown
                    value={formData.paymentMtdCode}
                    onChange={(v) => updateField('paymentMtdCode', v)}
                    options={paymentMtdCodeOptions}
                    placeholder="Select Payment Mtd Code"
                  />
                </FormRow>
              </TwoColumnRow>

              {/* Row: Payment Terms | Nature of Transaction */}
              <TwoColumnRow>
                <FormRow label="Payment Terms">
                  <CustomDropdown
                    value={formData.paymentTerms}
                    onChange={(v) => updateField('paymentTerms', v)}
                    options={paymentTermsOptions}
                    placeholder="Select Payment Terms"
                  />
                </FormRow>
                <FormRow label="Nature of Transction" hasBorderRight={false}>
                  <CustomDropdown
                    value={formData.natureOfTransaction}
                    onChange={(v) => updateField('natureOfTransaction', v)}
                    options={natureOfTransactionOptions}
                    placeholder="Select Nature of Transaction"
                  />
                </FormRow>
              </TwoColumnRow>

              {/* Row: Val. Mtd Applicable (single) */}
              <TwoColumnRow>
                <FormRow label="Val. Mtd Applicable">
                  <CustomDropdown
                    value={formData.valMtdApplicable}
                    onChange={(v) => updateField('valMtdApplicable', v)}
                    options={valMtdApplicableOptions}
                    placeholder="Select Valuation Method"
                  />
                </FormRow>
                <div className="flex-1 h-[34px]" />
              </TwoColumnRow>
            </div>

            {/* 3. TRANSACTION EXPORTS */}
            <div>
              <SectionHeader number={3} title="Transaction Exports" />

              {/* Row: Exporter Type (single) */}
              <TwoColumnRow>
                <FormRow label="Exporter Type">
                  <CustomDropdown
                    value={formData.exporterType}
                    onChange={(v) => updateField('exporterType', v)}
                    options={exporterTypeOptions}
                    placeholder="Select Exporter Type"
                  />
                </FormRow>
                <div className="flex-1 h-[34px]" />
              </TwoColumnRow>
            </div>

            {/* Attachments Section */}
            <div className="mt-6">
              {/* Attachments Header */}
              <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg" data-name="Attachments Header">
                <div className="flex items-center justify-center h-full gap-2">
                  <AttachmentsIcon />
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[16px]">
                    <p className="leading-[20px]">Attachments</p>
                  </div>
                </div>
              </div>

              {/* Attachments Table Header */}
              <div className="bg-[#ebeef7] flex flex-row items-center w-full h-[34px] border border-[#d0d5e3] border-t-0">
                <div className="flex items-center justify-center w-[34px] h-[34px] border-r border-[#d0d5e3]">
                  <Checkbox
                    checked={selectedAttachments.size === attachmentRows.length && attachmentRows.length > 0}
                    onCheckedChange={handleSelectAllAttachments}
                    className="h-[18px] w-[18px] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] data-[state=checked]:text-white border-[#d0d5e3] bg-white"
                  />
                </div>
                <div className="w-[55px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px]">
                    <p className="leading-[18px]">S.No</p>
                  </div>
                </div>
                <div className="flex-1 px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px]">
                    <p className="leading-[18px]">Name</p>
                  </div>
                </div>
                <div className="w-[120px] px-2 h-[34px] flex items-center">
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px]">
                    <p className="leading-[18px]">Action</p>
                  </div>
                </div>
              </div>

              {/* Attachments Table Rows */}
              {attachmentRows.map((row) => (
                <div key={row.id} className="bg-[#ffffff] flex flex-row items-center w-full h-[34px] border border-[#d0d5e3] border-t-0 hover:bg-[#f9fafb] transition-colors">
                  <div className="flex items-center justify-center w-[34px] h-[34px] border-r border-[#d0d5e3]">
                    <Checkbox
                      checked={selectedAttachments.has(row.id)}
                      onCheckedChange={() => toggleAttachment(row.id)}
                      className="h-[18px] w-[18px] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] data-[state=checked]:text-white border-[#d0d5e3] bg-white"
                    />
                  </div>
                  <div className="w-[55px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                    <div className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px]">
                      <p className="leading-[18px]">{row.id}</p>
                    </div>
                  </div>
                  <div className="flex-1 px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                    <div className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px]">
                      <p className="leading-[18px]">{row.name}</p>
                    </div>
                  </div>
                  <div className="w-[120px] px-2 h-[34px] flex items-center">
                    <button className="bg-[#3874ff] box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1 rounded cursor-pointer hover:bg-[#2563eb] transition-colors">
                      <Upload className="w-3.5 h-3.5 text-white" />
                      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[12px] text-nowrap">
                        <p className="leading-[16px]">Upload</p>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between p-[16px] border-t border-[#eff0f1] flex-shrink-0 h-20" data-name="Footer">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start" />
          <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start">
            <button onClick={onClose} className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 rounded cursor-pointer hover:bg-gray-50 transition-colors bg-transparent border border-[#d0d5e3]">
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center text-[#3874ff] text-[14px] text-left text-nowrap">
                <p className="leading-[18px]">Cancel</p>
              </div>
            </button>
            <button onClick={handleSubmit} className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 rounded cursor-pointer hover:bg-[#2563eb] transition-colors">
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center text-[#ffffff] text-[14px] text-left text-nowrap">
                <p className="leading-[18px]">Create</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
