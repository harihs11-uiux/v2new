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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import svgPaths from '../imports/svg-muvsmcogsd';

import dropDownSvgPaths from '../imports/svg-mmq5e97gy9';

// Icon components for Dropdown Items
function FunctionsIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_functions" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_functions)">
          <path d={dropDownSvgPaths.p26ba5480} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function AutoFixIcon() {
  return (
    <div className="relative shrink-0 size-[18px] flex items-center justify-center">
       <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask0_autofix" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask0_autofix)">
          <path d={dropDownSvgPaths.p64db500} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function PercentIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_percent" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_percent)">
          <path d={dropDownSvgPaths.p1f4ec300} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function MergeIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_merge" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_merge)">
          <path d={dropDownSvgPaths.p304c5000} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function SyncIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <rect height="5.2" rx="0.6" stroke="#CDCFD3" strokeWidth="0.8" width="10.2" x="2.4" y="10.4" />
          <g>
            <path d={dropDownSvgPaths.pd2b7400} fill="#CDCFD3" stroke="#CDCFD3" strokeWidth="0.1" />
            <path d={dropDownSvgPaths.p2ce9fb00} fill="#CDCFD3" stroke="#CDCFD3" strokeWidth="0.1" />
            <path d={dropDownSvgPaths.p30857c00} fill="#CDCFD3" stroke="#CDCFD3" strokeWidth="0.1" />
          </g>
          <rect height="5.2" rx="0.6" stroke="#CDCFD3" strokeWidth="0.8" width="10.2" x="2.4" y="2.4" />
          <g>
            <path d={dropDownSvgPaths.p9f59a80} fill="#CDCFD3" stroke="#CDCFD3" strokeWidth="0.1" />
            <path d={dropDownSvgPaths.p376ba372} fill="#CDCFD3" stroke="#CDCFD3" strokeWidth="0.1" />
            <path d={dropDownSvgPaths.p278fb00} fill="#CDCFD3" stroke="#CDCFD3" strokeWidth="0.1" />
            <path d={dropDownSvgPaths.p310dc3b0} fill="#CDCFD3" stroke="#CDCFD3" strokeWidth="0.1" />
            <path d={dropDownSvgPaths.p2456d6c0} fill="#CDCFD3" stroke="#CDCFD3" strokeWidth="0.1" />
          </g>
          <path d={dropDownSvgPaths.p36cea300} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

// Icon components for Item Bulk Actions
function SuccessCheck() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" fill="#3874FF" r="8" />
        <rect fill="white" height="5.625" rx="0.5625" width="1.125" x="7.4375" y="6.1875" />
        <circle cx="8" cy="4.5" fill="white" r="0.5625" />
      </svg>
    </div>
  );
}

function MasterSelectionIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_bulk_master" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_bulk_master)">
          <path d={svgPaths.p3d558af0} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function AddSectionIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path clipRule="evenodd" d={svgPaths.p157df100} fill="#CDCFD3" fillRule="evenodd" />
        <path d={svgPaths.p36b2c2c0} fill="#CDCFD3" />
        <path clipRule="evenodd" d={svgPaths.p3586b8e0} fill="#CDCFD3" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function BulkUpdateIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_bulk_update" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_bulk_update)">
          <path d={svgPaths.p1e9a9080} fill="#CDCFD3" />
        </g>
      </svg>
    </div>
  );
}

function ConcatenateIcon() {
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

interface ItemTableBulkActionsProps {
  selectedCount: number;
  onAction?: (action: string) => void;
}

const BULK_UPDATE_OPTIONS = [
  { label: 'FTA', value: 'fta' },
  { label: 'General Details', value: 'general_details' },
  { label: 'Item Manufacturer', value: 'item_manufacturer' },
  { label: 'Notifications', value: 'notifications' },
  { label: 'Previous BE Details', value: 'previous_be_details' },
  { label: 'Reimport Details', value: 'reimport_details' },
  { label: 'RSP', value: 'rsp' },
  { label: 'Section 65', value: 'section_65' },
  { label: 'SEZBE', value: 'sezbe' },
  { label: 'Single Window Constituent', value: 'single_window_constituent' },
  { label: 'Single Window Control', value: 'single_window_control' },
  { label: 'Single Window Info', value: 'single_window_info' },
  { label: 'Single Window production', value: 'single_window_production' },
  { label: 'Statements', value: 'statements' },
  { label: 'Supporting Documents', value: 'supporting_documents' },
  { label: 'SVB Details', value: 'svb_details' },
];

export function ItemTableBulkActions({ selectedCount, onAction }: ItemTableBulkActionsProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="bg-[#050e25] rounded-[8px] h-[44px] flex items-center px-1 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.5)] border border-[#545D76]/30">
      {/* Selected Indicator */}
      <div className="flex items-center gap-1 px-3 shrink-0">
        <SuccessCheck />
        <span className="text-[#3874ff] text-[14px] font-semibold whitespace-nowrap">
          {selectedCount} selected
        </span>
      </div>

      {/* Primary Separator */}
      <div className="h-[26px] w-px bg-[#545D76] mx-1 shrink-0" />

      {/* Actions */}
      <div className="flex items-center gap-1 py-1">
        <button 
          onClick={() => onAction?.('master_selection')}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group"
        >
          <MasterSelectionIcon />
          <span className="text-[14px] font-semibold group-hover:text-white transition-colors">Master Selection</span>
        </button>

        <div className="h-[19px] w-px bg-[#545D76] mx-1 shrink-0" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group"
            >
              <AddSectionIcon />
              <span className="text-[14px] font-semibold group-hover:text-white transition-colors">Bulk Update</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[280px] bg-[#050e25] border-none p-0 shadow-[0px_0px_11px_0px_rgba(52,60,79,0.46)] rounded-[4px] overflow-hidden"
            align="start"
            side="top"
            sideOffset={8}
          >
            <Command className="bg-[#050e25] text-white">
              <CommandInput 
                placeholder="Search sections..." 
                className="h-9 border-b border-[#545D76]/30 text-white placeholder:text-gray-500"
              />
              <CommandList className="max-h-[300px] overflow-y-auto py-1">
                <CommandEmpty className="py-2 px-4 text-sm text-gray-500">No sections found.</CommandEmpty>
                <CommandGroup>
                  {BULK_UPDATE_OPTIONS.map((option) => (
                    <CommandItem
                      key={option.value}
                      onSelect={() => onAction?.(option.value)}
                      className="flex items-center px-2 py-1.5 text-white aria-selected:bg-[#3874ff] aria-selected:text-white data-[selected=true]:bg-[#3874ff] data-[selected=true]:text-white hover:bg-[#3874ff] hover:text-white outline-none cursor-pointer text-[14px] rounded-sm mx-1"
                    >
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-[19px] w-px bg-[#545D76] mx-1 shrink-0" />

        <button 
          onClick={() => onAction?.('concatenate')}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group"
        >
          <ConcatenateIcon />
          <span className="text-[14px] font-semibold group-hover:text-white transition-colors">Concatenate</span>
        </button>

        <div className="h-[19px] w-px bg-[#545D76] mx-1 shrink-0" />

        {/* More Options Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group">
              <MoreIcon />
              <span className="text-[14px] font-semibold group-hover:text-white transition-colors">More Options</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[240px] bg-[#050e25] border-none p-0 shadow-[0px_0px_11px_0px_rgba(52,60,79,0.46)] rounded-[4px] overflow-hidden py-2"
            align="end"
            side="top"
            sideOffset={8}
          >
             <DropdownMenuItem onClick={() => onAction?.('recalculate_duties')} className="flex items-center gap-2 px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">
               <FunctionsIcon />
               <span>Recalculate Duties</span>
             </DropdownMenuItem>
             
             <DropdownMenuItem onClick={() => onAction?.('advance_prediction')} className="flex items-center gap-2 px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">
               <AutoFixIcon />
               <span>Advance Prediction</span>
             </DropdownMenuItem>
             
             <DropdownMenuItem onClick={() => onAction?.('item_apportion')} className="flex items-center gap-2 px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">
               <PercentIcon />
               <span>Item Apportion</span>
             </DropdownMenuItem>
             
             <DropdownMenuItem onClick={() => onAction?.('merge')} className="flex items-center gap-2 px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">
               <MergeIcon />
               <span>Merge</span>
             </DropdownMenuItem>
             
             <DropdownMenuItem onClick={() => onAction?.('custom_qty_to_qty')} className="flex items-center gap-2 px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">
               <SyncIcon />
               <span>Custom Qty to Qty</span>
             </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-[19px] w-px bg-[#545D76] mx-1 shrink-0" />

        <button 
          onClick={() => onAction?.('delete')}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-[#cf3b3b] hover:text-white whitespace-nowrap outline-none group"
        >
          <DeleteIcon />
          <span className="text-[14px] font-semibold transition-colors">Delete</span>
        </button>
      </div>
    </div>
  );
}