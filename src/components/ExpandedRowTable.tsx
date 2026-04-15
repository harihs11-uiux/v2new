import React from 'react';
import svgPaths from "../imports/svg-41p5ud5w6x";

export interface ExpandedRowProps {
  data: any[]; // Using any[] for flexibility, but ideally should match SubFileData
  onUploadToESanchit?: () => void;
}

function Arrow() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="arrow">
          <mask height="16" id="mask0_5142_9538" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="8" />
          </mask>
          <g mask="url(#mask0_5142_9538)">
            <path d={svgPaths.p2dab2a00} fill="var(--fill-0, white)" id="arrow_right" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#3874ff] flex gap-[8px] items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:bg-[#2563eb] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Upload to E-sanchit</p>
      </div>
      <div className="flex h-[8px] items-center justify-center relative shrink-0 w-0">
        <div className="h-[8px] w-[1px] bg-[#505666] opacity-90" />
      </div>
      <Arrow />
    </div>
  );
}

function HeaderCell({ width, text }: { width: string, text: string }) {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0 h-[26px]">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap" style={{ width }}>{text}</p>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <div className="absolute inset-[0_-22.22%_-22.22%_0]" style={{ "--stroke-0": "rgba(169, 195, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Icon Skeleton 1">
            <rect height="17.8" rx="3.9" stroke="var(--stroke-0, #A9C3FF)" strokeWidth="0.2" width="17.8" x="0.1" y="0.1" />
            <circle cx="12" cy="12" fill="var(--fill-0, #3874FF)" fillOpacity="0.1" id="Ellipse 3" r="9.9" stroke="var(--stroke-0, #A9C3FF)" strokeWidth="0.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex items-center w-full sticky top-0 z-10">
      <HeaderCell width="55px" text="S.No" />
      <HeaderCell width="284px" text="File Name" />
      <HeaderCell width="284px" text="IRN No." />
      <HeaderCell width="284px" text="Status" />
      <HeaderCell width="134px" text="File Size" />
      {/* Spacer for actions column */}
      <div className="bg-[#ebeef7] relative shrink-0 flex-1 h-[26px]">
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function StatusIndicator({ status }: { status: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative shrink-0 size-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Icon Skeleton 1">
            <circle cx="9" cy="9" fill="#B48F43" fillOpacity="0.2" r="6.75" />
            <circle cx="9" cy="9" fill="#D7AC51" r="3.375" />
          </g>
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[#050e25] text-[14px] truncate w-[262px]">
        {status || 'Yet to Fetch IRN'}
      </p>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[18px] cursor-pointer hover:bg-gray-100 rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <mask height="18" id="mask0_more_vert" maskUnits="userSpaceOnUse" width="18" x="0" y="0">
          <rect fill="#D9D9D9" height="18" width="18" />
        </mask>
        <g mask="url(#mask0_more_vert)">
          <path d={svgPaths.p3a06d000} fill="#626776" />
        </g>
      </svg>
    </div>
  );
}

function TableRow({ item, index }: { item: any, index: number }) {
  return (
    <div className="flex items-center w-full bg-white hover:bg-gray-50 transition-colors h-[34px]">
      {/* S.No */}
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative shrink-0 h-full">
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">
          {index + 1}
        </p>
      </div>
      
      {/* File Name */}
      <div className="content-stretch flex items-center px-[8px] py-[4px] relative shrink-0 h-full">
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[284px] truncate cursor-pointer hover:underline">
          {item.fileName}
        </p>
      </div>
      
      {/* IRN No. */}
      <div className="content-stretch flex items-center px-[8px] py-[4px] relative shrink-0 h-full">
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
        <input 
          type="text" 
          placeholder="Enter IRN No."
          className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[284px] outline-none bg-transparent placeholder-[#9497a1]"
        />
      </div>
      
      {/* Status */}
      <div className="content-stretch flex items-center px-[8px] py-[4px] relative shrink-0 h-full">
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
        <div className="w-[284px]">
          <StatusIndicator status={item.status} />
        </div>
      </div>
      
      {/* File Size */}
      <div className="content-stretch flex items-center px-[8px] py-[4px] relative shrink-0 h-full">
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">
          {item.fileSize || '200 KB'}
        </p>
      </div>
      
      {/* Actions */}
      <div className="content-stretch flex items-center px-[8px] py-[4px] relative shrink-0 flex-1 h-full bg-white">
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
        <MoreVert />
      </div>
    </div>
  );
}

export default function ExpandedRowTable({ data = [], onUploadToESanchit }: ExpandedRowProps) {
  return (
    <div className="bg-[#f2f6ff] relative w-full p-[12px] pl-[34px]">
      <div className="flex flex-col gap-[12px] w-full pr-[64px]">
        {/* Header with Button and Count */}
        <div className="h-[26px] relative shrink-0 w-full flex items-center justify-between">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic text-[#32394c] text-[14px]">
            Total : {data.length}
          </p>
          <div className="absolute left-[100px]">
             <Button onClick={onUploadToESanchit} />
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#fdfeff] relative rounded-[4px] w-full border border-[#d0d5e3] overflow-hidden">
          <div className="flex flex-col w-full">
            <TableHeader />
            <div className="flex flex-col">
              {data.map((item, index) => (
                <TableRow key={item.id || index} item={item} index={index} />
              ))}
              {data.length === 0 && (
                <div className="p-4 text-center text-gray-500 text-sm">No sub-files available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
