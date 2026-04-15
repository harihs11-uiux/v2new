import React from 'react';
import svgPaths from "./svg-x984xqoem3";
import { Audit } from "../components/AuditToolbarItem";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const INVOICES = [
  { id: "1", label: "Inv1 :3534334353" },
  { id: "2", label: "Inv2 :7534334354" },
  { id: "3", label: "Inv3 :8534334355" },
  { id: "4", label: "Inv4 :9534334356" },
  { id: "5", label: "Inv5 :0534334357" },
];

function ArrowDropdown() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48306)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #CDCFD3)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48306">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown />
    </div>
  );
}

function Dropdown({ value, onValueChange }: { value?: string; onValueChange?: (value: string) => void }) {
  return (
    <div className="relative shrink-0 w-[248px]" data-name="Dropdown">
      <Select value={value} onValueChange={onValueChange} defaultValue="1">
        <SelectTrigger className="w-full h-auto p-[4px] bg-transparent border-0 border-b border-[#545d76] rounded-none focus:ring-0 shadow-none gap-[4px] text-white [&>svg]:hidden">
          <div className="flex items-center gap-[4px] overflow-hidden flex-1 text-left">
             <span className="text-[14px] font-['Inter'] leading-[18px] text-nowrap truncate">
               <SelectValue />
             </span>
          </div>
          <DropdownIcon />
        </SelectTrigger>
        <SelectContent className="bg-[#2d364d] border-[#545d76] text-white">
          {INVOICES.map((inv) => (
            <SelectItem key={inv.id} value={inv.id} className="focus:bg-[#37425a] focus:text-white cursor-pointer">
              {inv.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function PreviousNext() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="Previous & Next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1565_48103" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48103)">
            <path d={svgPaths.p35646680} fill="var(--fill-0, #CDCFD3)" id="arrow_back_ios" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Left">
      <PreviousNext />
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#37425a] content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[8px] py-[5px] relative rounded-[4px] shadow-[0px_0px_11px_1px_#272d3f] shrink-0 cursor-pointer hover:bg-[#465472] transition-colors" data-name="Button">
      <IconLeft />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1565_48133" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48133)">
            <path d={svgPaths.p22787570} fill="var(--fill-0, #CDCFD3)" id="arrow_back_ios" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <Icon />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons />
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#37425b] content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[8px] py-[5px] relative rounded-[4px] shadow-[0px_0px_11px_1px_#272d3f] shrink-0 cursor-pointer hover:bg-[#465472] transition-colors" data-name="Button">
      <IconLeft1 />
    </div>
  );
}

function Frame({ onPrev, onNext }: { onPrev?: () => void; onNext?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Button onClick={onPrev} />
      <Button1 onClick={onNext} />
    </div>
  );
}

function ViewPdfButton({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#37425a] content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[5px] relative rounded-[4px] shadow-[0px_0px_11px_1px_#272d3f] shrink-0 cursor-pointer hover:bg-[#465472] transition-colors" data-name="Button">
       <span className="text-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-white leading-[16px]">View PDF</span>
    </div>
  );
}

function LeftsideControls({ onPrev, onNext, currentInvoiceId, onPdfClick }: { onPrev?: () => void; onNext?: () => void; currentInvoiceId?: string; onPdfClick?: () => void }) {
  const [invoice, setInvoice] = React.useState("1");

  React.useEffect(() => {
    if (currentInvoiceId) {
      setInvoice(currentInvoiceId);
    }
  }, [currentInvoiceId]);

  const handlePrev = () => {
    const currentIndex = INVOICES.findIndex(inv => inv.id === invoice);
    if (currentIndex > 0) {
      setInvoice(INVOICES[currentIndex - 1].id);
    }
    onPrev?.();
  };

  const handleNext = () => {
    const currentIndex = INVOICES.findIndex(inv => inv.id === invoice);
    if (currentIndex < INVOICES.length - 1) {
      setInvoice(INVOICES[currentIndex + 1].id);
    }
    onNext?.();
  };

  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative shrink-0" data-name="Leftside Controls">
      <Dropdown value={invoice} onValueChange={setInvoice} />

      <Frame onPrev={handlePrev} onNext={handleNext} />
      <ViewPdfButton onClick={onPdfClick} />
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 3">
          <mask height="18" id="mask0_1565_48125" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48125)">
            <path d={svgPaths.p2e196900} fill="var(--fill-0, #CDCFD3)" id="shuffle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 2">
          <mask height="18" id="mask0_1565_48121" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48121)">
            <path d={svgPaths.p19afbe00} fill="var(--fill-0, #CDCFD3)" id="control_point_duplicate" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="delete">
          <mask height="18" id="mask0_1565_48231" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48231)">
            <path d={svgPaths.p5ce8b80} fill="var(--fill-0, #CF3B3B)" id="delete_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1({ onAuditClick }: { onAuditClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <Audit onAuditClick={onAuditClick} />
      <IconSkeleton2 />
      <IconSkeleton1 />
      <IconSkeleton3 />
    </div>
  );
}

function IconGroup({ onAuditClick }: { onAuditClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center relative rounded-[24px] shrink-0" data-name="Icon Group">
      <NoOfIcons1 onAuditClick={onAuditClick} />
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#3874ff] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#2c5bcf] transition-colors" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Save and Close</p>
      </div>
    </div>
  );
}

function ToolbarActions({ onSave }: { onSave?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Toolbar Actions">
      <Button2 onClick={onSave} />
    </div>
  );
}

function RightSideControls({ onAuditClick, onSave }: { onAuditClick?: () => void; onSave?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Right Side Controls">
      <IconGroup onAuditClick={onAuditClick} />

      <ToolbarActions onSave={onSave} />
    </div>
  );
}

export default function Toolbar({ onPrev, onNext, currentInvoiceId, onAuditClick, onPdfClick, onSave }: { onPrev?: () => void; onNext?: () => void; currentInvoiceId?: string; onAuditClick?: () => void; onPdfClick?: () => void; onSave?: () => void }) {
  return (
    <div className="bg-[#2d364d] relative w-full" data-name="Toolbar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center w-full">
        <div className="content-stretch flex items-center justify-between pl-0 pr-[12px] py-[11px] relative w-full">
          <LeftsideControls onPrev={onPrev} onNext={onNext} currentInvoiceId={currentInvoiceId} onPdfClick={onPdfClick} />
          <RightSideControls onAuditClick={onAuditClick} onSave={onSave} />
        </div>
      </div>
    </div>
  );
}
