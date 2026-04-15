import React, { useState, useCallback } from 'react';
import svgPaths from '../imports/svg-ipu0wpqvz5';
import svgNavPaths from '../imports/svg-tdbv1ckh3q';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Checkbox } from './ui/checkbox';
import { Upload, ChevronDown, ArrowLeft, Plus, MoreVertical } from 'lucide-react';
import ArrowDropdown from '../imports/ArrowDropdown-335-131';
import newLogo from 'figma:asset/70031002c2d641f99778e91905aaf3765d0b07b6.png';
import LogoutDropdown from './LogoutDropdown';
import Footer from '../imports/Footer-5908-7758';
import BranchSidebar from '../imports/Sidebar-5908-11928';

interface PartyDetailsPageProps {
  onClose: () => void;
  onLogout?: () => void;
  initialData?: any;
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

// Branch Data for Branch Details tab
interface BranchRow {
  id: number;
  branchNo: string;
  nickname: string;
  address: string;
  city: string;
  cstRegNo: string;
  roles: string;
}

// AD Code Data
interface ADCodeRow {
  id: number;
  branchSrNo: string;
  adCode: string;
  bankName: string;
  bankAddress1: string;
  bankAddress2: string;
  forexAccNo: string;
  bankCountryCode: string;
  bankStateCode: string;
  bankAccountNo: string;
  ifscCode: string;
}

interface ADCodeSection {
  id: string;
  label: string;
  type: 'common' | 'branch';
  rows: ADCodeRow[];
}

// Dropdown options
const gstinTypeOptions = [
  { value: 'AADHAR-AADHAR No.', label: 'AADHAR-AADHAR No.' },
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

// Branch Details tab dropdown options
const branchRoleOptions = [
  { value: 'Indian Party', label: 'Indian Party' },
  { value: 'Foreign Party', label: 'Foreign Party' },
  { value: 'CHA', label: 'CHA' },
  { value: 'Shipping Line', label: 'Shipping Line' },
];

const cityOptions = [
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Kolkata', label: 'Kolkata' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Hyderabad', label: 'Hyderabad' },
];

const districtOptions = [
  { value: 'Mumbai City', label: 'Mumbai City' },
  { value: 'Mumbai Suburban', label: 'Mumbai Suburban' },
  { value: 'Thane', label: 'Thane' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Raigad', label: 'Raigad' },
];

const stateOptions = [
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Tamil Nadu', label: 'Tamil Nadu' },
  { value: 'Karnataka', label: 'Karnataka' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'West Bengal', label: 'West Bengal' },
  { value: 'Gujarat', label: 'Gujarat' },
];

const branchCountryOptions = [
  { value: 'India', label: 'India' },
  { value: 'United States', label: 'United States' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Japan', label: 'Japan' },
];

const statusOptions = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
  { value: 'Suspended', label: 'Suspended' },
];

const icegateIdOptions = [
  { value: 'ICE001', label: 'ICE001' },
  { value: 'ICE002', label: 'ICE002' },
  { value: 'ICE003', label: 'ICE003' },
];

// Branch form data interface
interface BranchFormData {
  branchNumber: string;
  nickname: string;
  gstinId: string;
  marksNos1: string;
  role: string;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  districtName: string;
  state: string;
  pin: string;
  country: string;
  countryCode: string;
  passportNo: string;
  aadharNo: string;
  vatRegNo: string;
  cstRegNo: string;
  status: string;
  updatedBy: string;
  createdBy: string;
  icegateId: string;
}

// Contact row interface
interface ContactRow {
  id: number;
  personInContact: string;
  emailAddress: string;
  address: string;
}

// Branch attachment rows
const branchAttachmentRows = [
  { id: 1, name: 'GST' },
  { id: 2, name: 'AD Code' },
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

const mockBranches: BranchRow[] = [
  { id: 1, branchNo: '01', nickname: 'HQ', address: '123 Main Street, Suite 100', city: 'Mumbai', cstRegNo: 'CST-MH-001', roles: 'Indian Party' },
  { id: 2, branchNo: '02', nickname: 'South Branch', address: '456 Anna Salai', city: 'Chennai', cstRegNo: 'CST-TN-002', roles: 'Indian Party' },
  { id: 3, branchNo: '03', nickname: 'North Branch', address: '789 Connaught Place', city: 'Delhi', cstRegNo: 'CST-DL-003', roles: 'Indian Party' },
];

const initialADCodeSections: ADCodeSection[] = [
  {
    id: 'common',
    label: 'Common AD Code',
    type: 'common',
    rows: [
      { id: 1, branchSrNo: '001', adCode: '3423243244', bankName: 'ABC Bank', bankAddress1: '123 Main St, Springfield, IL', bankAddress2: '-', forexAccNo: '8349992234', bankCountryCode: '22', bankStateCode: '33', bankAccountNo: '1234567890', ifscCode: 'QEJJ92922942' },
    ],
  },
  {
    id: 'branch-01',
    label: 'Branch 01',
    type: 'branch',
    rows: [
      { id: 2, branchSrNo: '001', adCode: '5566778899', bankName: 'State Bank of India', bankAddress1: 'Fort Branch, Mumbai', bankAddress2: 'Maharashtra 400001', forexAccNo: '9988776655', bankCountryCode: '22', bankStateCode: '27', bankAccountNo: '9876543210', ifscCode: 'SBIN0001234' },
    ],
  },
  {
    id: 'branch-02',
    label: 'Branch 02',
    type: 'branch',
    rows: [
      { id: 3, branchSrNo: '002', adCode: '1122334455', bankName: 'HDFC Bank', bankAddress1: 'Anna Salai, Chennai', bankAddress2: 'Tamil Nadu 600002', forexAccNo: '4455667788', bankCountryCode: '22', bankStateCode: '33', bankAccountNo: '5678901234', ifscCode: 'HDFC0005678' },
    ],
  },
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
  hasIndicator?: boolean;
}

const CustomInput: React.FC<InputProps> = ({ value, onChange, placeholder, className = "", hasIndicator = false }) => {
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
        className="w-full h-[34px] p-[8px] flex items-center"
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
        {hasIndicator && (
          <span className="text-[#CF3B3B] text-[14px] ml-1 shrink-0">*</span>
        )}
      </div>
    </div>
  );
};

// Section Header Icon (Party Details card icon)
function PartyDetailsIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Party Details Icon">
      <div className="absolute h-4 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
          <g>
            <path d={svgPaths.p39a43b00} fill="url(#paint0_pdp)" />
            <g>
              <g filter="url(#filter0_pdp)">
                <path d={svgPaths.p343ad000} fill="url(#paint1_pdp)" />
              </g>
              <path d={svgPaths.p34c1f400} stroke="url(#paint2_pdp)" strokeWidth="0.2" />
            </g>
            <path d={svgPaths.p2008ed00} fill="var(--fill-0, #F1A66A)" stroke="url(#paint3_pdp)" strokeWidth="0.2" />
            <g filter="url(#filter2_pdp)">
              <rect fill="url(#paint4_pdp)" height="2.66667" rx="1" shapeRendering="crispEdges" width="2.36842" x="8.05263" y="8.53333" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_pdp" width="18" x="0" y="2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.444444 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.0667" id="filter2_pdp" width="12.7684" x="2.85263" y="3.33333">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.818289 0 0 0 0 0.481499 0 0 0 0 0.208104 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_ds" />
              <feBlend in="SourceGraphic" in2="effect1_ds" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_pdp" x1="8.87" x2="9.23" y1="0" y2="11.68">
              <stop stopColor="#FF7200" /><stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_pdp" x1="9" x2="11.48" y1="-1.53" y2="27.03">
              <stop stopColor="#DD6200" /><stop offset="0.37" stopColor="#FF9846" /><stop offset="0.67" stopColor="#FF7100" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_pdp" x1="9" x2="9" y1="2.49" y2="16">
              <stop stopColor="#FFBD87" /><stop offset="1" stopColor="#D37222" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_pdp" x1="7.65" x2="7.3" y1="19.01" y2="0.67">
              <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_pdp" x1="9.24" x2="8.97" y1="8.53" y2="11.73">
              <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0.29" />
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
    <div className="overflow-clip relative shrink-0 size-6">
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
  hasBorderRight = true,
}: {
  label: string;
  children: React.ReactNode;
  isFirst?: boolean;
  hasBorderRight?: boolean;
}) {
  return (
    <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
      <div className="bg-[rgba(221,227,242,0.42)] group-hover:bg-[#CEF6F0] group-focus-within:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] group-focus-within:border group-focus-within:border-[#00B196] flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200">
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

// Logo Component
function Logo() {
  return (
    <div className="flex items-center justify-start p-0 relative shrink-0">
      <img src={newLogo} alt="Logo" className="h-8 w-auto object-contain" />
    </div>
  );
}

// Avatar
function AvatarAlphabet() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="#FE7C7C" r="12" />
        <g>
          <path d={svgNavPaths.p187c5080} fill="white" />
          <path d={svgNavPaths.p30fd8300} fill="white" />
        </g>
      </svg>
    </div>
  );
}

// Unifo Logo
function UnifoLogo() {
  return (
    <div className="h-[22px] relative shrink-0 w-[58px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 22">
        <rect fill="white" height="22" width="58" />
        <path d={svgNavPaths.p13e2be00} fill="url(#paint0_unifo_pdp)" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_unifo_pdp" x1="2" x2="55.02" y1="12.25" y2="11.34">
            <stop stopColor="#005575" /><stop offset="1" stopColor="#01314A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Nav icons
function NavIcons() {
  return (
    <div className="flex flex-row gap-3 items-center">
      {/* Campaign */}
      <div className="relative shrink-0 size-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <mask height="18" id="mask_camp_pdp" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" width="18" />
          </mask>
          <g mask="url(#mask_camp_pdp)">
            <path d={svgNavPaths.p30a00d00} fill="#9497A1" />
          </g>
        </svg>
      </div>
      {/* Chat support */}
      <div className="relative shrink-0 size-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <mask height="18" id="mask_chat_pdp" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" width="18" />
          </mask>
          <g mask="url(#mask_chat_pdp)">
            <path d={svgNavPaths.p37d2a380} fill="#9497A1" />
          </g>
        </svg>
      </div>
      {/* Notifications */}
      <div className="relative shrink-0 size-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <mask height="18" id="mask_notif_pdp" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" width="18" />
          </mask>
          <g mask="url(#mask_notif_pdp)">
            <path d={svgNavPaths.p28009c00} fill="#9497A1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function PartyDetailsPage({ onClose, onLogout, initialData }: PartyDetailsPageProps) {
  const [activeTab, setActiveTab] = useState<'Party Details' | 'Branch Details' | 'AD Code Details'>('Party Details');

  const [formData, setFormData] = useState<FormData>({
    partyName: initialData?.partyName || 'Toyota Private Limited',
    partyId: initialData?.partyId || '',
    iecCode: initialData?.iecCode || '',
    gstinType: initialData?.gstinType || 'AADHAR-AADHAR No.',
    panNo: initialData?.panNo || '',
    partyType: initialData?.partyType || '',
    role: initialData?.role || '',
    country: initialData?.country || '',
    importerType: initialData?.importerType || '',
    paymentMtdCode: initialData?.paymentMtdCode || '',
    paymentTerms: initialData?.paymentTerms || '',
    natureOfTransaction: initialData?.natureOfTransaction || '',
    valMtdApplicable: initialData?.valMtdApplicable || '',
    exporterType: initialData?.exporterType || '',
  });

  const [selectedAttachments, setSelectedAttachments] = useState<Set<number>>(new Set());
  const [selectedBranches, setSelectedBranches] = useState<Set<number>>(new Set());
  const [selectedADCodes, setSelectedADCodes] = useState<Set<number>>(new Set());
  const [adCodeSections, setAdCodeSections] = useState<ADCodeSection[]>(initialADCodeSections);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const toggleSectionCollapse = useCallback((sectionId: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev);
      if (next.has(sectionId)) next.delete(sectionId); else next.add(sectionId);
      return next;
    });
  }, []);

  const addADCodeRow = useCallback((sectionId: string) => {
    setAdCodeSections(prev => prev.map(section => {
      if (section.id !== sectionId) return section;
      const maxId = Math.max(...prev.flatMap(s => s.rows.map(r => r.id)), 0);
      const newRow: ADCodeRow = {
        id: maxId + 1,
        branchSrNo: '',
        adCode: '',
        bankName: '',
        bankAddress1: '',
        bankAddress2: '',
        forexAccNo: '',
        bankCountryCode: '',
        bankStateCode: '',
        bankAccountNo: '',
        ifscCode: '',
      };
      return { ...section, rows: [...section.rows, newRow] };
    }));
  }, []);

  // Branch Details form state
  const [branchFormData, setBranchFormData] = useState<BranchFormData>({
    branchNumber: '',
    nickname: 'Blue Imp',
    gstinId: '',
    marksNos1: '',
    role: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    districtName: '',
    state: '',
    pin: '',
    country: '',
    countryCode: '',
    passportNo: '',
    aadharNo: '',
    vatRegNo: '',
    cstRegNo: '',
    status: 'Active',
    updatedBy: '',
    createdBy: 'Arjith',
    icegateId: '',
  });

  const updateBranchField = (field: keyof BranchFormData, value: string) => {
    setBranchFormData(prev => ({ ...prev, [field]: value }));
  };

  // Contact Details state
  const [contactRows, setContactRows] = useState<ContactRow[]>([
    { id: 1, personInContact: '', emailAddress: '', address: '' },
  ]);

  const [selectedContacts, setSelectedContacts] = useState<Set<number>>(new Set());
  const [selectedBranchAttachments, setSelectedBranchAttachments] = useState<Set<number>>(new Set());

  const addContactRow = () => {
    const newId = contactRows.length > 0 ? Math.max(...contactRows.map(r => r.id)) + 1 : 1;
    setContactRows(prev => [...prev, { id: newId, personInContact: '', emailAddress: '', address: '' }]);
  };

  const updateContactRow = (id: number, field: keyof Omit<ContactRow, 'id'>, value: string) => {
    setContactRows(prev => prev.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

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

  const handleSave = useCallback(() => {
    console.log('Saving party data:', formData);
    onClose();
  }, [formData, onClose]);

  const tabs: Array<'Party Details' | 'Branch Details' | 'AD Code Details'> = ['Party Details', 'Branch Details', 'AD Code Details'];

  return (
    <div className="w-full h-full bg-[#CAD2E5] flex flex-col relative overflow-hidden">
      {/* Global Navigation Bar */}
      <div className="bg-[#1f2432] h-12 relative shrink-0 w-full z-50">
        <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />

        {/* Left side: Logo + Separator + Party Master + ← Edit Details */}
        <div className="absolute flex items-center top-1/2 translate-y-[-50%] gap-0" style={{ left: '21px' }}>
          <Logo />
          {/* Separator */}
          <div className="w-px h-12 bg-[#505767] mx-0" style={{ marginLeft: '12px' }} />
          {/* Party Master dropdown */}
          <div className="flex items-center gap-1 font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-[#cdcfd3] hover:text-white cursor-pointer select-none ml-3">
            Party Master
            <ChevronDown className="h-4 w-4" />
          </div>
          {/* Separator */}
          <div className="w-px h-6 bg-[#505767] mx-3" />
          {/* ← Edit Details */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-[#cdcfd3] hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            <ArrowLeft className="w-4 h-4" />
            Edit Details
          </button>
        </div>

        {/* Center Tabs */}
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`h-12 px-3 flex items-center justify-center cursor-pointer transition-colors relative ${activeTab === tab ? '' : 'hover:bg-[#333b4f]'}`}
              onClick={() => setActiveTab(tab)}
            >
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3874ff]" />
              )}
              <span className={`font-['Inter:${activeTab === tab ? 'Semi_Bold' : 'Medium'}',_sans-serif] ${activeTab === tab ? 'font-semibold text-[#ffffff]' : 'font-medium text-[#cdcfd3]'} text-[14px] leading-[18px] whitespace-nowrap`}>
                {tab}
              </span>
            </div>
          ))}
        </div>

        {/* Right side: Icons + Profile */}
        <div className="absolute right-3 top-1/2 translate-y-[-50%] flex items-center gap-3">
          <NavIcons />
          {/* Profile */}
          <LogoutDropdown onLogout={onLogout || (() => {})}>
            <div className="bg-[#242c40] relative rounded shrink-0">
              <div className="flex flex-row gap-2 items-center overflow-clip p-[4px]">
                <UnifoLogo />
                <AvatarAlphabet />
              </div>
              <div className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded" />
            </div>
          </LogoutDropdown>
        </div>
      </div>

      {/* Action Bar + Content wrapped with optional sidebar */}
      <div className="flex-1 flex flex-row overflow-hidden">
        {/* Branch Details Left Nav - spans action bar + content */}
        {activeTab === 'Branch Details' && (
          <div className="shrink-0 w-[78px]">
            <BranchSidebar />
          </div>
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Action Bar - Close/Save right after nav */}
          <div className="box-border flex flex-row items-center justify-between px-3 py-2 border-b border-[#d0d5e3] shrink-0 bg-[#2d364d]">
            <div />
            <div className="flex flex-row gap-4 items-center">
              <button
                onClick={onClose}
                className="flex items-center justify-center px-4 py-2 rounded border border-[#3874FF] bg-transparent cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#3874ff] text-[14px] leading-[18px]">Close</span>
              </button>
              <button
                onClick={handleSave}
                className="flex items-center justify-center px-4 py-2 rounded bg-[#3874ff] cursor-pointer hover:bg-[#2563eb] transition-colors border-none"
              >
                <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[14px] leading-[18px]">Save</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
          <div className="px-3 pt-6 pb-6 max-w-full">

          {/* Party Details Tab */}
          {activeTab === 'Party Details' && (
            <div className="flex flex-col">
              {/* Party Details Section Header */}
              <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg">
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
                <TwoColumnRow>
                  <FormRow label="Party Name">
                    <CustomInput value={formData.partyName} onChange={(v) => updateField('partyName', v)} placeholder="Enter Party Name" hasIndicator />
                  </FormRow>
                  <FormRow label="Party ID" hasBorderRight={false}>
                    <CustomInput value={formData.partyId} onChange={(v) => updateField('partyId', v)} placeholder="Enter ID" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="IEC Code">
                    <CustomInput value={formData.iecCode} onChange={(v) => updateField('iecCode', v)} placeholder="Enter IEC Code" />
                  </FormRow>
                  <FormRow label="GSTIN Type" hasBorderRight={false}>
                    <CustomDropdown value={formData.gstinType} onChange={(v) => updateField('gstinType', v)} options={gstinTypeOptions} placeholder="Select GSTIN Type" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="PAN No.">
                    <CustomInput value={formData.panNo} onChange={(v) => updateField('panNo', v)} placeholder="Enter PAN Number" />
                  </FormRow>
                  <FormRow label="Party Type" hasBorderRight={false}>
                    <CustomDropdown value={formData.partyType} onChange={(v) => updateField('partyType', v)} options={partyTypeOptions} placeholder="Party Type" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Role">
                    <CustomDropdown value={formData.role} onChange={(v) => updateField('role', v)} options={roleOptions} placeholder="Select Role" />
                  </FormRow>
                  <FormRow label="Country" hasBorderRight={false}>
                    <CustomDropdown value={formData.country} onChange={(v) => updateField('country', v)} options={countryOptions} placeholder="Country" />
                  </FormRow>
                </TwoColumnRow>
              </div>

              {/* 2. TRANSACTION IMPORTS */}
              <div>
                <SectionHeader number={2} title="Transaction Imports" />
                <TwoColumnRow>
                  <FormRow label="Importer Type">
                    <CustomDropdown value={formData.importerType} onChange={(v) => updateField('importerType', v)} options={importerTypeOptions} placeholder="Select Type" />
                  </FormRow>
                  <FormRow label="Payment Mtd Code" hasBorderRight={false}>
                    <CustomDropdown value={formData.paymentMtdCode} onChange={(v) => updateField('paymentMtdCode', v)} options={paymentMtdCodeOptions} placeholder="Select Payment Method Code" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Payment Terms">
                    <CustomDropdown value={formData.paymentTerms} onChange={(v) => updateField('paymentTerms', v)} options={paymentTermsOptions} placeholder="Select Terms" />
                  </FormRow>
                  <FormRow label="Nature of Transction" hasBorderRight={false}>
                    <CustomDropdown value={formData.natureOfTransaction} onChange={(v) => updateField('natureOfTransaction', v)} options={natureOfTransactionOptions} placeholder="Select Nature of Transaction" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Val. Mtd Applicable">
                    <CustomDropdown value={formData.valMtdApplicable} onChange={(v) => updateField('valMtdApplicable', v)} options={valMtdApplicableOptions} placeholder="Select Type" />
                  </FormRow>
                  <div className="flex-1 h-[34px]" />
                </TwoColumnRow>
              </div>

              {/* 3. TRANSACTION EXPORTS */}
              <div>
                <SectionHeader number={3} title="Transaction Exports" />
                <TwoColumnRow>
                  <FormRow label="Exporter Type">
                    <CustomDropdown value={formData.exporterType} onChange={(v) => updateField('exporterType', v)} options={exporterTypeOptions} placeholder="SelectExporter Type" />
                  </FormRow>
                  <div className="flex-1 h-[34px]" />
                </TwoColumnRow>
              </div>

              {/* Attachments Section */}
              <div className="mt-6">
                <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg">
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
                      <button className="bg-[#3874ff] flex flex-row gap-1 items-center justify-center px-2 py-1 rounded cursor-pointer hover:bg-[#2563eb] transition-colors border-none">
                        <Upload className="w-3.5 h-3.5 text-white" />
                        <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[12px] text-nowrap leading-[16px]">Upload</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Branch Details Tab */}
          {activeTab === 'Branch Details' && (
            <div className="flex flex-col">
              {/* Header */}
              <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg">
                <div className="flex items-center justify-center h-full gap-2">
                  <PartyDetailsIcon />
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[16px]">
                    <p className="leading-[20px]">Header</p>
                  </div>
                </div>
              </div>

              {/* 1. BRANCH DETAILS */}
              <div>
                <SectionHeader number={1} title="BRANCH DETAILS" />
                <TwoColumnRow>
                  <FormRow label="Branch Number">
                    <CustomInput value={branchFormData.branchNumber} onChange={(v) => updateBranchField('branchNumber', v)} placeholder="Enter Branch" />
                  </FormRow>
                  <FormRow label="Nickname" hasBorderRight={false}>
                    <CustomInput value={branchFormData.nickname} onChange={(v) => updateBranchField('nickname', v)} placeholder="Enter Nickname" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="GSTIN ID">
                    <CustomInput value={branchFormData.gstinId} onChange={(v) => updateBranchField('gstinId', v)} placeholder="Enter GSTIN Id" />
                  </FormRow>
                  <FormRow label="Mark & Nos 1" hasBorderRight={false}>
                    <CustomInput value={branchFormData.marksNos1} onChange={(v) => updateBranchField('marksNos1', v)} placeholder="Enter Marks & Nos" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Role">
                    <CustomDropdown value={branchFormData.role} onChange={(v) => updateBranchField('role', v)} options={branchRoleOptions} placeholder="Select Role" />
                  </FormRow>
                  <FormRow label="Address 1" hasBorderRight={false}>
                    <CustomInput value={branchFormData.address1} onChange={(v) => updateBranchField('address1', v)} placeholder="Enter Address 1" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Address 2">
                    <CustomInput value={branchFormData.address2} onChange={(v) => updateBranchField('address2', v)} placeholder="Enter Address 2" />
                  </FormRow>
                  <FormRow label="Address 3" hasBorderRight={false}>
                    <CustomInput value={branchFormData.address3} onChange={(v) => updateBranchField('address3', v)} placeholder="Enter Address 3" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="City">
                    <CustomDropdown value={branchFormData.city} onChange={(v) => updateBranchField('city', v)} options={cityOptions} placeholder="Select City" />
                  </FormRow>
                  <FormRow label="District Name" hasBorderRight={false}>
                    <CustomDropdown value={branchFormData.districtName} onChange={(v) => updateBranchField('districtName', v)} options={districtOptions} placeholder="Select District" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="State">
                    <CustomDropdown value={branchFormData.state} onChange={(v) => updateBranchField('state', v)} options={stateOptions} placeholder="Select State" />
                  </FormRow>
                  <FormRow label="Pin" hasBorderRight={false}>
                    <CustomInput value={branchFormData.pin} onChange={(v) => updateBranchField('pin', v)} placeholder="Enter Pin" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Country">
                    <CustomDropdown value={branchFormData.country} onChange={(v) => updateBranchField('country', v)} options={branchCountryOptions} placeholder="Select Country" />
                  </FormRow>
                  <FormRow label="Country Code" hasBorderRight={false}>
                    <CustomInput value={branchFormData.countryCode} onChange={(v) => updateBranchField('countryCode', v)} placeholder="Enter Country Code" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Passport No">
                    <CustomInput value={branchFormData.passportNo} onChange={(v) => updateBranchField('passportNo', v)} placeholder="Enter Passport No." />
                  </FormRow>
                  <FormRow label="Aadhar No." hasBorderRight={false}>
                    <CustomInput value={branchFormData.aadharNo} onChange={(v) => updateBranchField('aadharNo', v)} placeholder="Enter Aadhar No." />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="VAT Reg No.">
                    <CustomInput value={branchFormData.vatRegNo} onChange={(v) => updateBranchField('vatRegNo', v)} placeholder="Enter VAT Reg No." />
                  </FormRow>
                  <FormRow label="CST Reg No." hasBorderRight={false}>
                    <CustomInput value={branchFormData.cstRegNo} onChange={(v) => updateBranchField('cstRegNo', v)} placeholder="Enter CST Reg No." />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Status">
                    <CustomDropdown value={branchFormData.status} onChange={(v) => updateBranchField('status', v)} options={statusOptions} placeholder="Select Status" />
                  </FormRow>
                  <FormRow label="Updated by" hasBorderRight={false}>
                    <CustomInput value={branchFormData.updatedBy} onChange={(v) => updateBranchField('updatedBy', v)} placeholder="Placeholder" />
                  </FormRow>
                </TwoColumnRow>
                <TwoColumnRow>
                  <FormRow label="Created by">
                    <div className="flex items-center gap-2 px-2 w-full h-full">
                      <div className="relative shrink-0 size-5">
                        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="10" fill="#FE7C7C" />
                        </svg>
                      </div>
                      <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{branchFormData.createdBy}</span>
                    </div>
                  </FormRow>
                  <FormRow label="Icegate Id" hasBorderRight={false}>
                    <CustomDropdown value={branchFormData.icegateId} onChange={(v) => updateBranchField('icegateId', v)} options={icegateIdOptions} placeholder="Select" />
                  </FormRow>
                </TwoColumnRow>
              </div>

              {/* Contact Details Section */}
              <div className="mt-6">
                <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg">
                  <div className="flex items-center justify-center h-full gap-2">
                    <svg className="shrink-0 size-6" fill="none" viewBox="0 0 24 24">
                      <circle cx="8" cy="8" r="4" fill="#FF7C7C" />
                      <circle cx="16" cy="8" r="4" fill="#FF9E5C" />
                      <path d="M4 20c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6" stroke="#FF7C7C" strokeWidth="1.5" fill="none" />
                    </svg>
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[16px]">
                      <p className="leading-[20px]">Contact Details</p>
                    </div>
                  </div>
                </div>

                {/* Contact Details Table Header */}
                <div className="bg-[#ebeef7] flex flex-row items-center w-full h-[34px] border border-[#d0d5e3] border-t-0">
                  <div className="flex items-center justify-center w-[34px] h-[34px] border-r border-[#d0d5e3]">
                    <Checkbox
                      checked={selectedContacts.size === contactRows.length && contactRows.length > 0}
                      onCheckedChange={() => {
                        if (selectedContacts.size === contactRows.length) setSelectedContacts(new Set());
                        else setSelectedContacts(new Set(contactRows.map(r => r.id)));
                      }}
                      className="h-[18px] w-[18px] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] data-[state=checked]:text-white border-[#d0d5e3] bg-white"
                    />
                  </div>
                  <div className="w-[55px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px]">
                      <p className="leading-[18px]">S.No</p>
                    </div>
                  </div>
                  <div className="w-[250px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px]">
                      <p className="leading-[18px]">Person in Contact</p>
                    </div>
                  </div>
                  <div className="flex-1 px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px]">
                      <p className="leading-[18px]">Email Address</p>
                    </div>
                  </div>
                  <div className="flex-1 px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px]">
                      <p className="leading-[18px]">Address</p>
                    </div>
                  </div>
                  <div className="w-[34px] h-[34px]" />
                </div>

                {/* Contact Rows */}
                {contactRows.map((contact, idx) => (
                  <div key={contact.id} className="bg-[#ffffff] flex flex-row items-center w-full h-[34px] border border-[#d0d5e3] border-t-0 hover:bg-[#f9fafb] transition-colors">
                    <div className="flex items-center justify-center w-[34px] h-[34px] border-r border-[#d0d5e3]">
                      <Checkbox
                        checked={selectedContacts.has(contact.id)}
                        onCheckedChange={() => {
                          const s = new Set(selectedContacts);
                          if (s.has(contact.id)) s.delete(contact.id); else s.add(contact.id);
                          setSelectedContacts(s);
                        }}
                        className="h-[18px] w-[18px] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] data-[state=checked]:text-white border-[#d0d5e3] bg-white"
                      />
                    </div>
                    <div className="w-[55px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                      <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{idx + 1}</span>
                    </div>
                    <div className="w-[250px] h-[34px] border-r border-[#d0d5e3]">
                      <input
                        type="text"
                        value={contact.personInContact}
                        onChange={(e) => updateContactRow(contact.id, 'personInContact', e.target.value)}
                        placeholder=""
                        className="w-full h-full px-2 bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] placeholder:text-[#9497a1] focus:ring-1 focus:ring-[#3874ff]"
                      />
                    </div>
                    <div className="flex-1 h-[34px] border-r border-[#d0d5e3]">
                      <input
                        type="text"
                        value={contact.emailAddress}
                        onChange={(e) => updateContactRow(contact.id, 'emailAddress', e.target.value)}
                        placeholder="Enter email address"
                        className="w-full h-full px-2 bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] placeholder:text-[#9497a1] focus:ring-1 focus:ring-[#3874ff]"
                      />
                    </div>
                    <div className="flex-1 h-[34px] border-r border-[#d0d5e3]">
                      <input
                        type="text"
                        value={contact.address}
                        onChange={(e) => updateContactRow(contact.id, 'address', e.target.value)}
                        placeholder="Enter address"
                        className="w-full h-full px-2 bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] placeholder:text-[#9497a1] focus:ring-1 focus:ring-[#3874ff]"
                      />
                    </div>
                    <div className="flex items-center justify-center w-[34px] h-[34px]">
                      <MoreVertical className="w-4 h-4 text-[#9497a1] cursor-pointer hover:text-[#050e25]" />
                    </div>
                  </div>
                ))}

                {/* Add Button */}
                <div className="mt-2">
                  <button
                    onClick={addContactRow}
                    className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <Plus className="w-4 h-4 text-[#3874ff]" />
                    <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#3874ff] text-[14px] leading-[18px]">Add</span>
                  </button>
                </div>
              </div>

              {/* Attachments Section */}
              <div className="mt-6">
                <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg">
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
                      checked={selectedBranchAttachments.size === branchAttachmentRows.length && branchAttachmentRows.length > 0}
                      onCheckedChange={() => {
                        if (selectedBranchAttachments.size === branchAttachmentRows.length) setSelectedBranchAttachments(new Set());
                        else setSelectedBranchAttachments(new Set(branchAttachmentRows.map(r => r.id)));
                      }}
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

                {/* Attachment Rows */}
                {branchAttachmentRows.map((row) => (
                  <div key={row.id} className="bg-[#ffffff] flex flex-row items-center w-full h-[34px] border border-[#d0d5e3] border-t-0 hover:bg-[#f9fafb] transition-colors">
                    <div className="flex items-center justify-center w-[34px] h-[34px] border-r border-[#d0d5e3]">
                      <Checkbox
                        checked={selectedBranchAttachments.has(row.id)}
                        onCheckedChange={() => {
                          const s = new Set(selectedBranchAttachments);
                          if (s.has(row.id)) s.delete(row.id); else s.add(row.id);
                          setSelectedBranchAttachments(s);
                        }}
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
                      <button className="bg-[#3874ff] flex flex-row gap-1 items-center justify-center px-2 py-1 rounded cursor-pointer hover:bg-[#2563eb] transition-colors border-none">
                        <Upload className="w-3.5 h-3.5 text-white" />
                        <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[12px] text-nowrap leading-[16px]">Upload</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AD Code Details Tab */}
          {activeTab === 'AD Code Details' && (
            <div className="flex flex-col">
              {/* Section Title */}
              <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg">
                <div className="flex items-center justify-center h-full gap-2">
                  <PartyDetailsIcon />
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[16px]">
                    <p className="leading-[20px]">AD Code</p>
                  </div>
                </div>
              </div>

              {/* AD Code Table Header */}
              <div className="bg-[#ebeef7] flex flex-row items-center w-full min-h-[34px] border border-[#d0d5e3] border-t-0 overflow-x-auto">
                <div className="flex items-center justify-center min-w-[34px] w-[34px] h-[34px] border-r border-[#d0d5e3]">
                  <Checkbox
                    checked={selectedADCodes.size === adCodeSections.flatMap(s => s.rows).length && adCodeSections.flatMap(s => s.rows).length > 0}
                    onCheckedChange={() => {
                      const allIds = adCodeSections.flatMap(s => s.rows.map(r => r.id));
                      if (selectedADCodes.size === allIds.length) setSelectedADCodes(new Set());
                      else setSelectedADCodes(new Set(allIds));
                    }}
                    className="h-[18px] w-[18px] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] data-[state=checked]:text-white border-[#d0d5e3] bg-white"
                  />
                </div>
                {[
                  { label: 'S.No', width: 'min-w-[55px] w-[55px]' },
                  { label: 'Branch Sr.No', width: 'min-w-[100px] w-[100px]' },
                  { label: 'AD Code', width: 'min-w-[120px] w-[120px]' },
                  { label: 'Bank Name', width: 'min-w-[130px] flex-1' },
                  { label: 'Bank Address 1', width: 'min-w-[180px] flex-1' },
                  { label: 'Bank Address 2', width: 'min-w-[130px] flex-1' },
                  { label: 'Forex Acc No.', width: 'min-w-[120px] w-[120px]' },
                  { label: 'Bank Country Code', width: 'min-w-[130px] w-[130px]' },
                  { label: 'Bank State Code', width: 'min-w-[120px] w-[120px]' },
                  { label: 'Bank Account No.', width: 'min-w-[130px] w-[130px]' },
                  { label: 'IFSC Code', width: 'min-w-[120px] w-[120px]' },
                ].map((col, i, arr) => (
                  <div key={col.label} className={`${col.width} px-2 h-[34px] flex items-center ${i < arr.length - 1 ? 'border-r border-[#d0d5e3]' : ''}`}>
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px]">
                      <p className="leading-[18px] whitespace-nowrap">{col.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Collapsible Sections */}
              {adCodeSections.map((section) => {
                const isCollapsed = collapsedSections.has(section.id);
                return (
                  <div key={section.id}>
                    {/* Section Separator / Toggle */}
                    <div
                      className="bg-[#ebeef7] flex flex-row items-center w-full h-[32px] border border-[#d0d5e3] border-t-0 cursor-pointer select-none hover:bg-[#dde3f2] transition-colors"
                      onClick={() => toggleSectionCollapse(section.id)}
                    >
                      <div className="flex items-center gap-2 px-3 w-full">
                        <ChevronDown className={`w-4 h-4 text-[#505767] transition-transform ${isCollapsed ? '-rotate-90' : ''}`} />
                        <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[13px] leading-[18px]">{section.label}</span>
                        <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#505767] text-[12px] leading-[16px]">({section.rows.length})</span>
                      </div>
                    </div>

                    {/* Section Rows */}
                    {!isCollapsed && (
                      <>
                        {section.rows.map((row, idx) => (
                          <div key={row.id} className="bg-[#ffffff] flex flex-row items-center w-full min-h-[34px] border border-[#d0d5e3] border-t-0 hover:bg-[#f9fafb] transition-colors overflow-x-auto">
                            <div className="flex items-center justify-center min-w-[34px] w-[34px] h-[34px] border-r border-[#d0d5e3]">
                              <Checkbox
                                checked={selectedADCodes.has(row.id)}
                                onCheckedChange={() => {
                                  const s = new Set(selectedADCodes);
                                  if (s.has(row.id)) s.delete(row.id); else s.add(row.id);
                                  setSelectedADCodes(s);
                                }}
                                className="h-[18px] w-[18px] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] data-[state=checked]:text-white border-[#d0d5e3] bg-white"
                              />
                            </div>
                            <div className="min-w-[55px] w-[55px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{idx + 1}</span>
                            </div>
                            <div className="min-w-[100px] w-[100px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{row.branchSrNo}</span>
                            </div>
                            <div className="min-w-[120px] w-[120px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#3874ff] text-[14px] leading-[18px] bg-[#e8f0fe] px-1.5 py-0.5 rounded">{row.adCode}</span>
                            </div>
                            <div className="min-w-[130px] flex-1 px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] truncate">{row.bankName}</span>
                            </div>
                            <div className="min-w-[180px] flex-1 px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] truncate">{row.bankAddress1}</span>
                            </div>
                            <div className="min-w-[130px] flex-1 px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] truncate">{row.bankAddress2}</span>
                            </div>
                            <div className="min-w-[120px] w-[120px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{row.forexAccNo}</span>
                            </div>
                            <div className="min-w-[130px] w-[130px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{row.bankCountryCode}</span>
                            </div>
                            <div className="min-w-[120px] w-[120px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{row.bankStateCode}</span>
                            </div>
                            <div className="min-w-[130px] w-[130px] px-2 h-[34px] flex items-center border-r border-[#d0d5e3]">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{row.bankAccountNo}</span>
                            </div>
                            <div className="min-w-[120px] w-[120px] px-2 h-[34px] flex items-center">
                              <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px]">{row.ifscCode}</span>
                            </div>
                          </div>
                        ))}

                        {/* Add Row */}
                        <div className="bg-[#ffffff] flex flex-row items-center w-full h-[30px] border border-[#d0d5e3] border-t-0">
                          <div className="flex items-center px-3 gap-1 cursor-pointer group" onClick={() => addADCodeRow(section.id)}>
                            <Plus className="w-3.5 h-3.5 text-[#3874ff]" />
                            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#3874ff] text-[13px] leading-[18px] group-hover:underline">Add</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer
        partyName={formData.partyName}
        partyId={formData.partyId}
        iecCode={formData.iecCode}
        gstinType={formData.gstinType}
        panNo={formData.panNo}
      />

    </div>
  );
}