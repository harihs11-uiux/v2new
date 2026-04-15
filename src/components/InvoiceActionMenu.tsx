import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import svgPaths from "../imports/svg-zjsobfe1pv";

// Icon components based on the Figma export
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

function EditIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_5010_1914" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="white" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_5010_1914)">
          <path d={svgPaths.p21f4e080} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function ReorderIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_5010_1906" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="white" height="18" width="16" />
        </mask>
        <g mask="url(#mask0_5010_1906)">
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
        <mask height="18" id="mask0_5010_1910" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="white" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_5010_1910)">
          <path d={svgPaths.p19afbe00} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_5010_1918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
          <rect fill="white" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_5010_1918)">
          <path d={svgPaths.p5ce8b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

interface InvoiceActionMenuProps {
  children: React.ReactNode;
  onAddAbove?: () => void;
  onAddBelow?: () => void;
  onEdit?: () => void;
  onReorder?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

export function InvoiceActionMenu({ 
  children,
  onAddAbove,
  onAddBelow,
  onEdit,
  onReorder,
  onDuplicate,
  onDelete
}: InvoiceActionMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[220px] bg-[#050e25] border-none p-0 shadow-[0px_0px_11px_0px_rgba(52,60,79,0.46)] rounded-[4px] overflow-hidden"
        align="end"
      >
        <DropdownMenuItem 
          onClick={onAddAbove}
          className="flex gap-[8px] items-center p-[8px] cursor-pointer focus:bg-[#3874ff] focus:text-white text-[#CDCFD3] hover:bg-[#3874ff] hover:text-white outline-none rounded-none data-[highlighted]:bg-[#3874ff] data-[highlighted]:text-white transition-colors duration-150"
        >
          <AddRowAboveIcon />
          <span className="font-['Inter'] text-[14px] leading-[18px]">Add Invoice above</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={onAddBelow}
          className="flex gap-[8px] items-center p-[8px] cursor-pointer focus:bg-[#3874ff] focus:text-white text-[#CDCFD3] hover:bg-[#3874ff] hover:text-white outline-none rounded-none data-[highlighted]:bg-[#3874ff] data-[highlighted]:text-white transition-colors duration-150"
        >
          <AddRowBelowIcon />
          <span className="font-['Inter'] text-[14px] leading-[18px]">Add Invoice below</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={onEdit}
          className="flex gap-[8px] items-center p-[8px] cursor-pointer focus:bg-[#3874ff] focus:text-white text-[#CDCFD3] hover:bg-[#3874ff] hover:text-white outline-none rounded-none data-[highlighted]:bg-[#3874ff] data-[highlighted]:text-white transition-colors duration-150"
        >
          <EditIcon />
          <span className="font-['Inter'] text-[14px] leading-[18px]">Edit Invoice</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={onReorder}
          className="flex gap-[8px] items-center p-[8px] cursor-pointer focus:bg-[#3874ff] focus:text-white text-[#CDCFD3] hover:bg-[#3874ff] hover:text-white outline-none rounded-none data-[highlighted]:bg-[#3874ff] data-[highlighted]:text-white transition-colors duration-150"
        >
          <ReorderIcon />
          <span className="font-['Inter'] text-[14px] leading-[18px]">Reorder</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={onDuplicate}
          className="flex gap-[8px] items-center p-[8px] cursor-pointer focus:bg-[#3874ff] focus:text-white text-[#CDCFD3] hover:bg-[#3874ff] hover:text-white outline-none rounded-none data-[highlighted]:bg-[#3874ff] data-[highlighted]:text-white transition-colors duration-150"
        >
          <DuplicateIcon />
          <span className="font-['Inter'] text-[14px] leading-[18px]">Duplicate</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={onDelete}
          className="flex gap-[8px] items-center p-[8px] cursor-pointer focus:bg-[#3874ff] focus:text-white text-[#f44545] hover:bg-[#3874ff] hover:text-white outline-none rounded-none data-[highlighted]:bg-[#3874ff] data-[highlighted]:text-white transition-colors duration-150 group"
        >
          <div className="text-[#f44545] group-hover:text-white group-focus:text-white group-data-[highlighted]:text-white">
            <DeleteIcon />
          </div>
          <span className="font-['Inter'] text-[14px] leading-[18px]">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}