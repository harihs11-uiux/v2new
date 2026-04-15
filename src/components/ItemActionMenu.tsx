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
import svgPaths from '../imports/svg-p56nymvocj';

// Icon components for Item Action Menu
function AddRowAboveIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.pa5a4a00} fill="currentColor" />
      </svg>
    </div>
  );
}

function AddRowBelowIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.p3ecff100} fill="currentColor" />
      </svg>
    </div>
  );
}

function RecalculateIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_rec" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_rec)">
          <path d={svgPaths.p26ba5480} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function AutomateIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask0_auto" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask0_auto)">
          <path d={svgPaths.p64db500} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function ConcatIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_concat" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_concat)">
          <path d={svgPaths.p21132000} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function SplitIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <mask height="18" id="mask0_split" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="16" />
        </mask>
        <g mask="url(#mask0_split)">
          <path d={svgPaths.pb960df0} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function QtyToQtyIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <rect height="5.2" rx="0.6" stroke="currentColor" strokeWidth="0.8" width="10.2" x="2.4" y="10.4" fill="none" />
        <path d={svgPaths.pd2b7400} fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
        <path d={svgPaths.p2ce9fb00} fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
        <path d={svgPaths.p30857c00} fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
        <rect height="5.2" rx="0.6" stroke="currentColor" strokeWidth="0.8" width="10.2" x="2.4" y="2.4" fill="none" />
        <path d={svgPaths.p9f59a80} fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
        <path d={svgPaths.p376ba372} fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
        <path d={svgPaths.p278fb00} fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
        <path d={svgPaths.p310dc3b0} fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
        <path d={svgPaths.p2456d6c0} fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
        <path d={svgPaths.p36cea300} fill="currentColor" />
      </svg>
    </div>
  );
}

function ReorderIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <mask height="18" id="mask0_reorder" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="16" />
        </mask>
        <g mask="url(#mask0_reorder)">
          <path d={svgPaths.p11ff7280} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function DuplicateIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_dup" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_dup)">
          <path d={svgPaths.p19afbe00} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function EditIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_edit" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_edit)">
          <path d={svgPaths.p21f4e080} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_del" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_del)">
          <path d={svgPaths.p5ce8b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M6 12L10 8L6 4V12Z" fill="currentColor" />
      </svg>
    </div>
  );
}

interface ItemActionMenuProps {
  onAction?: (action: string) => void;
  trigger: React.ReactNode;
}

export function ItemActionMenu({ onAction, trigger }: ItemActionMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[240px] bg-[#050e25] border-none p-0 shadow-[0px_0px_11px_0px_rgba(52,60,79,0.46)] rounded-[4px] overflow-hidden py-2"
        align="end"
      >
        <DropdownMenuItem 
          onClick={() => onAction?.('add_above')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#CDCFD3] group-hover:text-white group-focus:text-white">
            <AddRowAboveIcon />
          </div>
          <span className="text-[14px]">Add Row Above</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => onAction?.('add_below')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#CDCFD3]">
            <AddRowBelowIcon />
          </div>
          <span className="text-[14px]">Add Row Below</span>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger 
            className="flex items-center justify-between w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none data-[state=open]:bg-[#3874ff] transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="text-[#CDCFD3]">
                <RecalculateIcon />
              </div>
              <span className="text-[14px]">Recalculate</span>
            </div>
            <div className="text-[#CDCFD3]">
              <ArrowIcon />
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-[180px] bg-[#050e25] border-none p-0 shadow-lg rounded-[4px] overflow-hidden py-2">
              <DropdownMenuItem className="px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">Option 1</DropdownMenuItem>
              <DropdownMenuItem className="px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">Option 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger 
            className="flex items-center justify-between w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none data-[state=open]:bg-[#3874ff] transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="text-[#CDCFD3]">
                <AutomateIcon />
              </div>
              <span className="text-[14px]">Automate</span>
            </div>
            <div className="text-[#CDCFD3]">
              <ArrowIcon />
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-[180px] bg-[#050e25] border-none p-0 shadow-lg rounded-[4px] overflow-hidden py-2">
              <DropdownMenuItem className="px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">Option 1</DropdownMenuItem>
              <DropdownMenuItem className="px-2 py-2 text-white hover:bg-[#3874ff] focus:bg-[#3874ff] outline-none cursor-pointer text-[14px]">Option 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuItem 
          onClick={() => onAction?.('concat')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#CDCFD3]">
            <ConcatIcon />
          </div>
          <span className="text-[14px]">Concatenate Description</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => onAction?.('split')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#CDCFD3]">
            <SplitIcon />
          </div>
          <span className="text-[14px]">Split</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => onAction?.('qty_to_qty')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#CDCFD3]">
            <QtyToQtyIcon />
          </div>
          <span className="text-[14px]">Custom Qty to Qty</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => onAction?.('reorder')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#CDCFD3]">
            <ReorderIcon />
          </div>
          <span className="text-[14px]">Reorder</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => onAction?.('duplicate')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#CDCFD3]">
            <DuplicateIcon />
          </div>
          <span className="text-[14px]">Duplicate Item</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => onAction?.('edit')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-white hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#CDCFD3]">
            <EditIcon />
          </div>
          <span className="text-[14px]">Edit Item</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => onAction?.('delete')}
          className="flex items-center gap-2 w-full px-2 py-2 cursor-pointer focus:bg-[#3874ff] focus:text-white text-[#cf3b3b] hover:bg-[#3874ff] hover:text-white outline-none transition-colors"
        >
          <div className="text-[#cf3b3b] group-hover:text-white group-focus:text-white">
            <DeleteIcon />
          </div>
          <span className="text-[14px]">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
