import React from 'react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from './ui/dropdown-menu';
import svgPaths from '../imports/svg-y333w2499x';

// Icon components
function SuccessCheck() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" fill="#3874FF" r="8" />
        <rect fill="white" height="5.625" rx="0.5625" width="1.125" x="7.4375" y="6.1875" />
        <circle cx="8" cy="4.5" fill="white" r="0.5625" />
      </svg>
    </div>
  );
}

function FormatIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_bulk_format" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_bulk_format)">
          <path d={svgPaths.p37312288} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function ConcatIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_bulk_concat" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_bulk_concat)">
          <path d={svgPaths.p21132000} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function ApportionIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_bulk_apportion" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_bulk_apportion)">
          <path d={svgPaths.p1f4ec300} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function UpdatePartyIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_bulk_party" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_bulk_party)">
          <path d={svgPaths.p3d558af0} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function MoreIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_bulk_more" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_bulk_more)">
          <path d={svgPaths.p3a06d000} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_bulk_delete" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_bulk_delete)">
          <path d={svgPaths.p5ce8b80} fill="#CF3B3B" />
        </g>
      </svg>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M6 12L10 8L6 4V12Z" fill="#CDCFD3" />
      </svg>
    </div>
  );
}

interface TableBulkActionsProps {
  selectedCount: number;
  onDelete?: () => void;
}

export default function TableBulkActions({ selectedCount, onDelete }: TableBulkActionsProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="bg-[#050e25] rounded-[8px] h-[44px] flex items-center px-1 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.5)]">
      {/* Selected Indicator */}
      <div className="flex items-center gap-1 px-2 shrink-0">
        <SuccessCheck />
        <span className="text-[#3874ff] text-[14px] font-semibold whitespace-nowrap">
          {selectedCount} selected
        </span>
      </div>

      {/* Separator */}
      <div className="h-[26px] w-px bg-[#545D76] mx-1 shrink-0" />

      {/* Actions */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
        <button className="flex items-center gap-1 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap">
          <FormatIcon />
          <span className="text-[14px] font-semibold">Format</span>
        </button>

        <div className="h-[19px] w-px bg-[#545D76] shrink-0" />

        <button className="flex items-center gap-1 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap">
          <ConcatIcon />
          <span className="text-[14px] font-semibold">Concat Customs Desx</span>
        </button>

        <div className="h-[19px] w-px bg-[#545D76] shrink-0" />

        <button className="flex items-center gap-1 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap">
          <ApportionIcon />
          <span className="text-[14px] font-semibold">Invoice Apportion</span>
        </button>

        <div className="h-[19px] w-px bg-[#545D76] shrink-0" />

        <button className="flex items-center gap-1 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap">
          <UpdatePartyIcon />
          <span className="text-[14px] font-semibold">Update Party</span>
        </button>

        <div className="h-[19px] w-px bg-[#545D76] shrink-0" />

        {/* More Options Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none">
              <MoreIcon />
              <span className="text-[14px] font-semibold">More Options</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[240px] bg-[#050e25] border-none p-0 shadow-[0px_0px_11px_0px_rgba(52,60,79,0.46)] rounded-[4px] overflow-hidden py-2"
            align="end"
          >
            {/* Add Sections with Submenu */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger 
                className="flex items-center justify-between w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none data-[state=open]:bg-[#3874ff] transition-colors"
              >
                <span className="text-[14px]">Add Sections</span>
                <ArrowIcon />
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent 
                  className="w-[200px] bg-[#050e25] border-none p-0 shadow-lg rounded-[4px] overflow-hidden py-2"
                >
                  <DropdownMenuItem 
                    className="flex items-center w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
                  >
                    <span className="text-[14px]">Statements</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="flex items-center w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
                  >
                    <span className="text-[14px]">Supporting documents</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuItem 
              className="flex items-center w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
            >
              <span className="text-[14px]">Bulk Update</span>
            </DropdownMenuItem>

            <DropdownMenuItem 
              className="flex items-center w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
            >
              <span className="text-[14px]">Reorder by Digitized Document</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-[19px] w-px bg-[#545D76] shrink-0" />

        <button 
          onClick={onDelete}
          className="flex items-center gap-1 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-[#cf3b3b] hover:text-white whitespace-nowrap"
        >
          <DeleteIcon />
          <span className="text-[14px] font-semibold">Delete</span>
        </button>
      </div>
    </div>
  );
}