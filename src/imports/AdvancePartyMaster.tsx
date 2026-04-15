import svgPaths from "./svg-lcnvxzrln4";

import ExpandedDetails from "../components/ExpandedDetails";
import React from "react";

const svgPathsLocal = {
  p3c33200: "M6.36649 11.7695L2.81009 8.21309L3.52291 7.50029L6.36649 10.3439L12.4767 4.23362L13.1896 4.94642L6.36649 11.7695Z",
};

function Done() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="done">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <mask height="16" id="mask0_5508_277" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5508_277)">
            <path d={svgPathsLocal.p3c33200} fill="var(--fill-0, #3874FF)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Action Icon">
      <Done />
    </div>
  );
}

function ChipSelected({ onClick, isSelected, label }: { onClick?: () => void; isSelected?: boolean; label: string }) {
  return (
    <div onClick={onClick} className={`content-stretch flex items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0 cursor-pointer gap-[8px] ${isSelected ? "bg-white" : "bg-white"}`} data-name="Chip Selected">
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[28px] ${isSelected ? "border-[#3874ff]" : "border-[#d0d5e3]"}`} />
      {isSelected && <ActionIcon />}
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">{label}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">Advance Party Master Selection</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Heading">
      <Text />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_5498_39927" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39927)">
            <path d={svgPaths.p4280c0} fill="var(--fill-0, #CDCFD3)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleBar() {
  return (
    <div className="absolute bg-[#10182c] content-stretch flex items-start justify-between left-0 px-[12px] py-[24px] right-0 top-0" data-name="Title Bar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <Heading />
      <Close />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="info">
          <mask height="18" id="mask0_5498_39911" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39911)">
            <path d={svgPaths.p8b4de80} fill="var(--fill-0, #626776)" id="info_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SelectedDetails({ selectedBranch, selectedAdCode, selectedPartyName }: { selectedBranch: string; selectedAdCode: string; selectedPartyName: string }) {
  return (
    <div className="flex gap-3 items-end w-full" data-name="Selected Details">
      <div className="flex flex-col gap-1" style={{ width: '70%' }}>
        <div className="flex items-center gap-2">
          <Info />
          <p className="font-['Inter:Regular',sans-serif] text-[#626776] text-[14px] leading-[18px]">Selected Party</p>
        </div>
        <input
          type="text"
          className="bg-white border border-[#d0d5e3] rounded px-3 py-1.5 text-[#050e25] text-[14px] h-[36px] w-full outline-none focus:border-[#3874ff]"
          defaultValue="-"
          value={selectedPartyName || "-"}
          readOnly
        />
      </div>

      <div className="flex flex-col gap-1" style={{ width: '15%' }}>
        <p className="font-['Inter:Regular',sans-serif] text-[#626776] text-[14px] leading-[18px]">Branch</p>
        <input
          type="text"
          className="bg-white border border-[#d0d5e3] rounded px-3 py-1.5 text-[#050e25] text-[14px] h-[36px] w-full outline-none focus:border-[#3874ff]"
          value={selectedBranch}
          readOnly
        />
      </div>

      <div className="flex flex-col gap-1" style={{ width: '15%' }}>
        <p className="font-['Inter:Regular',sans-serif] text-[#626776] text-[14px] leading-[18px]">AD Code</p>
        <input
          type="text"
          className="bg-white border border-[#d0d5e3] rounded px-3 py-1.5 text-[#050e25] text-[14px] h-[36px] w-full outline-none focus:border-[#3874ff]"
          value={selectedAdCode}
          readOnly
        />
      </div>
    </div>
  );
}

function SelectedDetails1({ selectedBranch, selectedAdCode, selectedPartyName }: { selectedBranch: string; selectedAdCode: string; selectedPartyName: string }) {
  return (
    <div className="flex-1 w-full mr-4" data-name="Selected Details">
      <SelectedDetails selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} selectedPartyName={selectedPartyName} />
    </div>
  );
}

function Cancel() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Cancel">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px]">
        <p className="css-ew64yg leading-[18px]">Cancel</p>
      </div>
    </div>
  );
}

function AcceptChanges() {
  return (
    <div className="bg-[#3874ff] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Accept Changes">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white">
        <p className="css-ew64yg leading-[18px]">Link</p>
      </div>
    </div>
  );
}

function ActionButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Action Button Group">
      <Cancel />
      <AcceptChanges />
    </div>
  );
}

function Footer({ selectedBranch, selectedAdCode, selectedPartyName }: { selectedBranch: string; selectedAdCode: string; selectedPartyName: string }) {
  return (
    <div className="absolute bg-[#ebeef7] bottom-[2px] content-stretch flex items-center justify-between left-0 px-[12px] py-[16px] right-0" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-solid border-t inset-0 pointer-events-none" />
      <SelectedDetails1 selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} selectedPartyName={selectedPartyName} />
      <ActionButtonGroup />
    </div>
  );
}

function Popup({ selectedBranch, selectedAdCode, selectedPartyName }: { selectedBranch: string; selectedAdCode: string; selectedPartyName: string }) {
  return (
    <div className="absolute bg-[#cad2e5] inset-0 overflow-clip rounded-[16px]" data-name="Popup">
      <TitleBar />
      <Footer selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} selectedPartyName={selectedPartyName} />
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function ExpandCell() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center justify-center p-[8px] relative self-stretch shrink-0" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center justify-center p-[8px] relative self-stretch shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox />
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[55px]">S.No</p>
    </div>
  );
}

function FilterList() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter_list">
          <mask height="16" id="mask0_5498_39890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5498_39890)">
            <path d={svgPaths.p8cd7480} fill="var(--fill-0, #626776)" id="filter_list_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList />
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Filters />
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex gap-[4px] items-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[212px]">Party Name</p>
      <NoOfIcons1 />
    </div>
  );
}

function FilterList1() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter_list">
          <mask height="16" id="mask0_5498_39890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5498_39890)">
            <path d={svgPaths.p8cd7480} fill="var(--fill-0, #626776)" id="filter_list_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList1 />
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Filters1 />
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex gap-[4px] items-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[112px]">Party Id</p>
      <NoOfIcons2 />
    </div>
  );
}

function TableFreezedHeader() {
  return (
    <div className="content-stretch flex items-start sticky left-0 shrink-0 z-20" data-name="Table Freezed Header">
      <ExpandCell />
      <CheckboxCell />
      <TableHeaderCell />
      <TableHeaderCell1 />
      <TableHeaderCell2 />
    </div>
  );
}

function FilterList2() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter_list">
          <mask height="16" id="mask0_5498_39890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5498_39890)">
            <path d={svgPaths.p8cd7480} fill="var(--fill-0, #626776)" id="filter_list_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList2 />
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Filters2 />
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[112px]">IEC Code</p>
      <NoOfIcons3 />
    </div>
  );
}

function FilterList3() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter_list">
          <mask height="16" id="mask0_5498_39890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5498_39890)">
            <path d={svgPaths.p8cd7480} fill="var(--fill-0, #626776)" id="filter_list_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList3 />
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Filters3 />
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[162px]">AD Code</p>
      <NoOfIcons4 />
    </div>
  );
}

function TableHeaderCell5() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[184px]">GSTIN Type</p>
    </div>
  );
}

function TableHeaderCell6() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[134px]">PAN No.</p>
    </div>
  );
}

function TableHeaderCell7() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[84px]">Party Type</p>
    </div>
  );
}

function TableHeaderCell8() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[134px]">Role</p>
    </div>
  );
}

function TableHeaderCell9() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[184px]">Created by</p>
    </div>
  );
}

function TableHeaderCell10() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[184px]">Updated by</p>
    </div>
  );
}

function TableScrollableHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative z-[2]" data-name="Table Scrollable Header">
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell6 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell7 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell10 />
      </div>
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
    </div>
  );
}

function TableEdit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="table edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="table edit">
          <rect fill="var(--fill-0, #626776)" height="12" id="Rectangle 3" width="1.2" x="5" y="3" />
          <path d={svgPaths.p3c1edf00} fill="var(--fill-0, #626776)" id="Subtract" />
          <path d={svgPaths.p6dabd00} fill="var(--fill-0, #626776)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0" data-name="No. of Icons">
      <TableEdit />
    </div>
  );
}

function TableHeaderCell11() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center justify-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons5 />
    </div>
  );
}

function TableFreezedHeaderOptions() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Table Freezed Header Options">
      <TableHeaderCell11 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-max min-w-full z-[3]" data-name="Table Header">
      <TableFreezedHeader />
      <TableScrollableHeader />
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton1 />
    </div>
  );
}

function ExpandCell1({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons6 />
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell1() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox1 />
    </div>
  );
}

function TableBodyCell() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">1</p>
    </div>
  );
}

function TableBodyCell1() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Lakeside International Imports</p>
    </div>
  );
}

function TableBodyCell2() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00098231</p>
    </div>
  );
}

function TableFreezedRow({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell1 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell1 />
        <TableBodyCell />
        <TableBodyCell1 />
        <TableBodyCell2 />
      </div>
    </div>
  );
}

function TableBodyCell3() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1002345678</p>
    </div>
  );
}

function ChipCount({ onSelect, selectedAdCode }: { onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  const adCodes = ["12445124"];
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      {adCodes.map((code) => (
        <ChipSelected
          key={code}
          label={code}
          onClick={(e) => { e.stopPropagation(); onSelect?.("-", code); }}
          isSelected={selectedAdCode === code}
        />
      ))}
    </div>
  );
}

function TableBodyCell4({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className={`content-stretch flex h-full items-start p-[8px] relative shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount onSelect={onSelect} selectedAdCode={selectedAdCode} />
    </div>
  );
}

function TableBodyCell5() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCDE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell6() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00001</p>
    </div>
  );
}

function TableBodyCell7() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Vendor</p>
    </div>
  );
}

function TableBodyCell8() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Foreign Party</p>
    </div>
  );
}

function AvatarAlphabet() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet />
    </div>
  );
}

function TableBodyCell9() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons7 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell3 />
        </div>
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell4 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell5 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell6 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell7 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell8 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          {[...Array(2).keys()].map((_, i) => (
            <TableBodyCell9 key={i} />
          ))}
        </div>
        <div className="flex flex-row items-center self-stretch" />
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert />
    </div>
  );
}

function TableBodyCell10() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons8 />
    </div>
  );
}

function TableFreezedRowOptions() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell10 />
      </div>
    </div>
  );
}

function TableRow({ isExpanded, onExpand, onSelect, selectedBranch, isSelected, selectedAdCode }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean; selectedAdCode?: string }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[17] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} />}
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton2 />
    </div>
  );
}

function ExpandCell2({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons9 />
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell2() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox2 />
    </div>
  );
}

function TableBodyCell11() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">2</p>
    </div>
  );
}

function TableBodyCell12() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Sierra Import Corporation</p>
    </div>
  );
}

function TableBodyCell13() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00067482</p>
    </div>
  );
}

function TableFreezedRow1({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell2 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell2 />
        <TableBodyCell11 />
        <TableBodyCell12 />
        <TableBodyCell13 />
      </div>
    </div>
  );
}

function TableBodyCell14() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1029384756</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">12445124</p>
    </div>
  );
}

function ChipSelected1() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label1 />
    </div>
  );
}

function ChipCount1({ onSelect, selectedAdCode }: { onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  const adCodes = ["12445124"];
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      {adCodes.map((code) => (
        <ChipSelected
          key={code}
          label={code}
          onClick={(e) => { e.stopPropagation(); onSelect?.("-", code); }}
          isSelected={selectedAdCode === code}
        />
      ))}
    </div>
  );
}

function TableBodyCell15({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isExpanded ? "!bg-[#F2F6FF]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount1 onSelect={onSelect} selectedAdCode={selectedAdCode} />
    </div>
  );
}

function TableBodyCell16() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCDE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell17() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00002</p>
    </div>
  );
}

function TableBodyCell18() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">None</p>
    </div>
  );
}

function TableBodyCell19() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Indian Party</p>
    </div>
  );
}

function AvatarAlphabet1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet1 />
    </div>
  );
}

function TableBodyCell20() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons10 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow1({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell14 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell15 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
        <TableBodyCell16 />
        <TableBodyCell17 />
        <TableBodyCell18 />
        <TableBodyCell19 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell20 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert1 />
    </div>
  );
}

function TableBodyCell21() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons11 />
    </div>
  );
}

function TableFreezedRowOptions1() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell21 />
      </div>
    </div>
  );
}

function TableRow1({ isExpanded, onExpand, onSelect, selectedBranch, isSelected, selectedAdCode }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean; selectedAdCode?: string }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[16] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow1 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow1 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} />}
    </div>
  );
}

function IconSkeleton3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton3 />
    </div>
  );
}

function ExpandCell3({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons12 />
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell3() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox3 />
    </div>
  );
}

function TableBodyCell22() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">4</p>
    </div>
  );
}

function TableBodyCell23() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">{`Vista Trade & Logistics`}</p>
    </div>
  );
}

function TableBodyCell24() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00048509</p>
    </div>
  );
}

function TableFreezedRow2({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell3 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell3 />
        <TableBodyCell22 />
        <TableBodyCell23 />
        <TableBodyCell24 />
      </div>
    </div>
  );
}

function TableBodyCell25() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1234509876</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">124451249323</p>
    </div>
  );
}

function ChipSelected2() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label2 />
    </div>
  );
}

function ChipCount2({ onSelect, selectedAdCode }: { onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  const adCodes = ["124451249323"];
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      {adCodes.map((code) => (
        <ChipSelected
          key={code}
          label={code}
          onClick={(e) => { e.stopPropagation(); onSelect?.("-", code); }}
          isSelected={selectedAdCode === code}
        />
      ))}
    </div>
  );
}

function TableBodyCell26({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isExpanded ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount2 onSelect={onSelect} selectedAdCode={selectedAdCode} />
    </div>
  );
}

function TableBodyCell27() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCDE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell28() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00004</p>
    </div>
  );
}

function TableBodyCell29() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Both</p>
    </div>
  );
}

function TableBodyCell30() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Air Line</p>
    </div>
  );
}

function AvatarAlphabet2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet2 />
    </div>
  );
}

function TableBodyCell31() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons13 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow2({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell25 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell26 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
        <TableBodyCell27 />
        <TableBodyCell28 />
        <TableBodyCell29 />
        <TableBodyCell30 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell31 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert2 />
    </div>
  );
}

function TableBodyCell32() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons14 />
    </div>
  );
}

function TableFreezedRowOptions2() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell32 />
      </div>
    </div>
  );
}

function TableRow2({ isExpanded, onExpand, onSelect, selectedBranch, isSelected, selectedAdCode }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean; selectedAdCode?: string }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[14] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow2 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow2 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} />}
    </div>
  );
}

function IconSkeleton4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton4 />
    </div>
  );
}

function ExpandCell4({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons15 />
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell4() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox4 />
    </div>
  );
}

function TableBodyCell33() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">5</p>
    </div>
  );
}

function TableBodyCell34() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Pinnacle Import Solutions</p>
    </div>
  );
}

function TableBodyCell35() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00023764</p>
    </div>
  );
}

function TableFreezedRow3({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell4 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell4 />
        <TableBodyCell33 />
        <TableBodyCell34 />
        <TableBodyCell35 />
      </div>
    </div>
  );
}

function TableBodyCell36() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">2456789012</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">12445124294</p>
    </div>
  );
}

function ChipSelected3() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label3 />
    </div>
  );
}

function ChipCount3({ onSelect, selectedAdCode }: { onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  const adCodes = ["24343553"];
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      {adCodes.map((code) => (
        <ChipSelected
          key={code}
          label={code}
          onClick={(e) => { e.stopPropagation(); onSelect?.("-", code); }}
          isSelected={selectedAdCode === code}
        />
      ))}
    </div>
  );
}

function TableBodyCell37({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isExpanded ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount3 onSelect={onSelect} selectedAdCode={selectedAdCode} />
    </div>
  );
}

function TableBodyCell38() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell39() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00005</p>
    </div>
  );
}

function TableBodyCell40() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Customer</p>
    </div>
  );
}

function TableBodyCell41() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Air Line</p>
    </div>
  );
}

function AvatarAlphabet3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet3 />
    </div>
  );
}

function TableBodyCell42() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons16 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow3({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell36 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell37 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
        <TableBodyCell38 />
        <TableBodyCell39 />
        <TableBodyCell40 />
        <TableBodyCell41 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell42 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert3 />
    </div>
  );
}

function TableBodyCell43() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons17 />
    </div>
  );
}

function TableFreezedRowOptions3() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell43 />
      </div>
    </div>
  );
}

function TableRow3({ isExpanded, onExpand, onSelect, selectedBranch, isSelected, selectedAdCode }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean; selectedAdCode?: string }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[13] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow3 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow3 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} />}
    </div>
  );
}

function IconSkeleton5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton5 />
    </div>
  );
}

function ExpandCell5({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons18 />
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell5() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox5 />
    </div>
  );
}

function TableBodyCell44() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">6</p>
    </div>
  );
}

function TableBodyCell45() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Blue Horizon Imports</p>
    </div>
  );
}

function TableBodyCell46() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00081259</p>
    </div>
  );
}

function TableFreezedRow4({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell5 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell5 />
        <TableBodyCell44 />
        <TableBodyCell45 />
        <TableBodyCell46 />
      </div>
    </div>
  );
}

function TableBodyCell47() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1357924680</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">12445124</p>
    </div>
  );
}

function ChipSelected4() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">24343553</p>
    </div>
  );
}

function ChipSelected5() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label5 />
    </div>
  );
}

function ChipCount4({ onSelect, selectedAdCode }: { onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  const adCodes = ["12445124", "24343553"];
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      {adCodes.map((code) => (
        <ChipSelected
          key={code}
          label={code}
          onClick={(e) => { e.stopPropagation(); onSelect?.("-", code); }}
          isSelected={selectedAdCode === code}
        />
      ))}
    </div>
  );
}

function TableBodyCell48({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isExpanded ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount4 onSelect={onSelect} selectedAdCode={selectedAdCode} />
    </div>
  );
}

function TableBodyCell49() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell50() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00006</p>
    </div>
  );
}

function TableBodyCell51() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">None</p>
    </div>
  );
}

function TableBodyCell52() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Air Line</p>
    </div>
  );
}

function AvatarAlphabet4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet4 />
    </div>
  );
}

function TableBodyCell53() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons19 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow4({ isSelected, isExpanded, onSelect, selectedAdCode }: { isSelected?: boolean; isExpanded?: boolean; onSelect?: (branch: string, adCode: string) => void; selectedAdCode?: string }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell47 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell48 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
        <TableBodyCell49 />
        <TableBodyCell50 />
        <TableBodyCell51 />
        <TableBodyCell52 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell53 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert4 />
    </div>
  );
}

function TableBodyCell54() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons20 />
    </div>
  );
}

function TableFreezedRowOptions4() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell54 />
      </div>
    </div>
  );
}

function TableRow4({ isExpanded, onExpand, onSelect, selectedBranch, isSelected, selectedAdCode }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean; selectedAdCode?: string }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[12] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow4 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow4 isSelected={isSelected} isExpanded={isExpanded} onSelect={onSelect} selectedAdCode={selectedAdCode} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} />}
    </div>
  );
}

function IconSkeleton6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton6 />
    </div>
  );
}

function ExpandCell6({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons21 />
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell6() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox6 />
    </div>
  );
}

function TableBodyCell55() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">7</p>
    </div>
  );
}

function TableBodyCell56() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Cypress Import Co.</p>
    </div>
  );
}

function TableBodyCell57() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00034578</p>
    </div>
  );
}

function TableFreezedRow5({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell6 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell6 />
        <TableBodyCell55 />
        <TableBodyCell56 />
        <TableBodyCell57 />
      </div>
    </div>
  );
}

function TableBodyCell58() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1478523690</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">24343553</p>
    </div>
  );
}

function ChipSelected6() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label6 />
    </div>
  );
}

function ChipCount5() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected6 />
    </div>
  );
}

function TableBodyCell59({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount5 />
    </div>
  );
}

function TableBodyCell60() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell61() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00007</p>
    </div>
  );
}

function TableBodyCell62() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Both</p>
    </div>
  );
}

function TableBodyCell63() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet5 />
    </div>
  );
}

function TableBodyCell64() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons22 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow5({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell58 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell59 isSelected={isSelected} />
        <TableBodyCell60 />
        <TableBodyCell61 />
        <TableBodyCell62 />
        <TableBodyCell63 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell64 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert5 />
    </div>
  );
}

function TableBodyCell65() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons23 />
    </div>
  );
}

function TableFreezedRowOptions5() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell65 />
      </div>
    </div>
  );
}

function TableRow5({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[11] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 7">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow5 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow5 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton7 />
    </div>
  );
}

function ExpandCell7({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons24 />
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell7() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox7 />
    </div>
  );
}

function TableBodyCell66() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">8</p>
    </div>
  );
}

function TableBodyCell67() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Eagle Eye International</p>
    </div>
  );
}

function TableBodyCell68() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00090341</p>
    </div>
  );
}

function TableFreezedRow6({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell7 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell7 />
        <TableBodyCell66 />
        <TableBodyCell67 />
        <TableBodyCell68 />
      </div>
    </div>
  );
}

function TableBodyCell69() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1597534862</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">24343553</p>
    </div>
  );
}

function ChipSelected7() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label7 />
    </div>
  );
}

function ChipCount6() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected7 />
    </div>
  );
}

function TableBodyCell70({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount6 />
    </div>
  );
}

function TableBodyCell71() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell72() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00008</p>
    </div>
  );
}

function TableBodyCell73() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Vendor</p>
    </div>
  );
}

function TableBodyCell74() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet6 />
    </div>
  );
}

function TableBodyCell75() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons25 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow6({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell69 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell70 isSelected={isSelected} />
        <TableBodyCell71 />
        <TableBodyCell72 />
        <TableBodyCell73 />
        <TableBodyCell74 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell75 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert6 />
    </div>
  );
}

function TableBodyCell76() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons26 />
    </div>
  );
}

function TableFreezedRowOptions6() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell76 />
      </div>
    </div>
  );
}

function TableRow6({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[10] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow6 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow6 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton8 />
    </div>
  );
}

function ExpandCell8({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons27 />
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell8() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox8 />
    </div>
  );
}

function TableBodyCell77() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">9</p>
    </div>
  );
}

function TableBodyCell78() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Oceanside Imports Group</p>
    </div>
  );
}

function TableBodyCell79() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00065829</p>
    </div>
  );
}

function TableFreezedRow7({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell8 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell8 />
        <TableBodyCell77 />
        <TableBodyCell78 />
        <TableBodyCell79 />
      </div>
    </div>
  );
}

function TableBodyCell80() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1680243579</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">3243535532</p>
    </div>
  );
}

function ChipSelected8() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label8 />
    </div>
  );
}

function ChipCount7() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected8 />
    </div>
  );
}

function TableBodyCell81({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount7 />
    </div>
  );
}

function TableBodyCell82() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell83() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00009</p>
    </div>
  );
}

function TableBodyCell84() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Customer</p>
    </div>
  );
}

function TableBodyCell85() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet7 />
    </div>
  );
}

function TableBodyCell86() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons28 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow7({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell80 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell81 isSelected={isSelected} />
        <TableBodyCell82 />
        <TableBodyCell83 />
        <TableBodyCell84 />
        <TableBodyCell85 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell86 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert7 />
    </div>
  );
}

function TableBodyCell87() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons29 />
    </div>
  );
}

function TableFreezedRowOptions7() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell87 />
      </div>
    </div>
  );
}

function TableRow7({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[9] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow7 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow7 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton9 />
    </div>
  );
}

function ExpandCell9({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons30 />
      </div>
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell9() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox9 />
    </div>
  );
}

function TableBodyCell88() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">10</p>
    </div>
  );
}

function TableBodyCell89() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Emerald Coast Imports</p>
    </div>
  );
}

function TableBodyCell90() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00078412</p>
    </div>
  );
}

function TableFreezedRow8({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell9 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell9 />
        <TableBodyCell88 />
        <TableBodyCell89 />
        <TableBodyCell90 />
      </div>
    </div>
  );
}

function TableBodyCell91() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1728394056</p>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">24345353</p>
    </div>
  );
}

function ChipSelected9() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label9 />
    </div>
  );
}

function ChipCount8() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected9 />
    </div>
  );
}

function TableBodyCell92({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount8 />
    </div>
  );
}

function TableBodyCell93() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell94() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00010</p>
    </div>
  );
}

function TableBodyCell95() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">None</p>
    </div>
  );
}

function TableBodyCell96() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet8 />
    </div>
  );
}

function TableBodyCell97() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons31 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow8({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell91 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell92 isSelected={isSelected} />
        <TableBodyCell93 />
        <TableBodyCell94 />
        <TableBodyCell95 />
        <TableBodyCell96 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell97 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert8 />
    </div>
  );
}

function TableBodyCell98() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons32 />
    </div>
  );
}

function TableFreezedRowOptions8() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell98 />
      </div>
    </div>
  );
}

function TableRow8({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[8] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow8 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow8 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton10 />
    </div>
  );
}

function ExpandCell10({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons33 />
      </div>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell10() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox10 />
    </div>
  );
}

function TableBodyCell99() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">11</p>
    </div>
  );
}

function TableBodyCell100() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Summit View Imports</p>
    </div>
  );
}

function TableBodyCell101() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00024967</p>
    </div>
  );
}

function TableFreezedRow9({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell10 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell10 />
        <TableBodyCell99 />
        <TableBodyCell100 />
        <TableBodyCell101 />
      </div>
    </div>
  );
}

function TableBodyCell102() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1849203765</p>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">12445124</p>
    </div>
  );
}

function ChipSelected10() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label10 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">1244512412445124</p>
    </div>
  );
}

function ChipSelected11() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label11 />
    </div>
  );
}

function ChipCount9() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected10 />
      <ChipSelected11 />
    </div>
  );
}

function TableBodyCell103({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount9 />
    </div>
  );
}

function TableBodyCell104() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell105() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00011</p>
    </div>
  );
}

function TableBodyCell106() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Both</p>
    </div>
  );
}

function TableBodyCell107() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet9 />
    </div>
  );
}

function TableBodyCell108() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons34 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow9({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell102 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.7524deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell103 isSelected={isSelected} />
        <TableBodyCell104 />
        <TableBodyCell105 />
        <TableBodyCell106 />
        <TableBodyCell107 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell108 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[76px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.7524deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert9 />
    </div>
  );
}

function TableBodyCell109() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons35 />
    </div>
  );
}

function TableFreezedRowOptions9() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell109 />
      </div>
    </div>
  );
}

function TableRow9({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[7] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 11">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow9 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow9 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton11 />
    </div>
  );
}

function ExpandCell11({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons36 />
      </div>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell11() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox11 />
    </div>
  );
}

function TableBodyCell110() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">12</p>
    </div>
  );
}

function TableBodyCell111() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Terra Nova Import Services</p>
    </div>
  );
}

function TableBodyCell112() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00037814</p>
    </div>
  );
}

function TableFreezedRow10({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell11 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell11 />
        <TableBodyCell110 />
        <TableBodyCell111 />
        <TableBodyCell112 />
      </div>
    </div>
  );
}

function TableBodyCell113() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">1962837450</p>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">1244512412445124</p>
    </div>
  );
}

function ChipSelected12() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label12 />
    </div>
  );
}

function ChipCount10() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected12 />
    </div>
  );
}

function TableBodyCell114({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount10 />
    </div>
  );
}

function TableBodyCell115() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell116() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00012</p>
    </div>
  );
}

function TableBodyCell117() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Vendor</p>
    </div>
  );
}

function TableBodyCell118() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet10 />
    </div>
  );
}

function TableBodyCell119() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons37 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow10({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell113 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell114 isSelected={isSelected} />
        <TableBodyCell115 />
        <TableBodyCell116 />
        <TableBodyCell117 />
        <TableBodyCell118 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell119 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert10 />
    </div>
  );
}

function TableBodyCell120() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons38 />
    </div>
  );
}

function TableFreezedRowOptions10() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell120 />
      </div>
    </div>
  );
}

function TableRow10({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[6] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 12">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow10 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow10 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton12 />
    </div>
  );
}

function ExpandCell12({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons39 />
      </div>
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell12() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox12 />
    </div>
  );
}

function TableBodyCell121() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">13</p>
    </div>
  );
}

function TableBodyCell122() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Riverstone Global Imports</p>
    </div>
  );
}

function TableBodyCell123() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00091648</p>
    </div>
  );
}

function TableFreezedRow11({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell12 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell12 />
        <TableBodyCell121 />
        <TableBodyCell122 />
        <TableBodyCell123 />
      </div>
    </div>
  );
}

function TableBodyCell124() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">2093847561</p>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">1244512412445124</p>
    </div>
  );
}

function ChipSelected13() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label13 />
    </div>
  );
}

function ChipCount11() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected13 />
    </div>
  );
}

function TableBodyCell125({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount11 />
    </div>
  );
}

function TableBodyCell126() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell127() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00013</p>
    </div>
  );
}

function TableBodyCell128() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Customer</p>
    </div>
  );
}

function TableBodyCell129() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet11 />
    </div>
  );
}

function TableBodyCell130() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons40 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow11({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell124 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell125 isSelected={isSelected} />
        <TableBodyCell126 />
        <TableBodyCell127 />
        <TableBodyCell128 />
        <TableBodyCell129 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell130 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert11 />
    </div>
  );
}

function TableBodyCell131() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons41 />
    </div>
  );
}

function TableFreezedRowOptions11() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell131 />
      </div>
    </div>
  );
}

function TableRow11({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[5] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 13">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow11 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow11 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton13 />
    </div>
  );
}

function ExpandCell13({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons42 />
      </div>
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell13() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox13 />
    </div>
  );
}

function TableBodyCell132() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">14</p>
    </div>
  );
}

function TableBodyCell133() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Nexus Import Partners</p>
    </div>
  );
}

function TableBodyCell134() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00053217</p>
    </div>
  );
}

function TableFreezedRow12({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell13 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell13 />
        <TableBodyCell132 />
        <TableBodyCell133 />
        <TableBodyCell134 />
      </div>
    </div>
  );
}

function TableBodyCell135() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">2123456789</p>
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">1244512412445124</p>
    </div>
  );
}

function ChipSelected14() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label14 />
    </div>
  );
}

function ChipCount12() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected14 />
    </div>
  );
}

function TableBodyCell136({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount12 />
    </div>
  );
}

function TableBodyCell137() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell138() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00014</p>
    </div>
  );
}

function TableBodyCell139() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">None</p>
    </div>
  );
}

function TableBodyCell140() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet12 />
    </div>
  );
}

function TableBodyCell141() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons43 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow12({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell135 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell136 isSelected={isSelected} />
        <TableBodyCell137 />
        <TableBodyCell138 />
        <TableBodyCell139 />
        <TableBodyCell140 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell141 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert12 />
    </div>
  );
}

function TableBodyCell142() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons44 />
    </div>
  );
}

function TableFreezedRowOptions12() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell142 />
      </div>
    </div>
  );
}

function TableRow12({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[4] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 14">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow12 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow12 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton14 />
    </div>
  );
}

function ExpandCell14({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons45 />
      </div>
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell14() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox14 />
    </div>
  );
}

function TableBodyCell143() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">15</p>
    </div>
  );
}

function TableBodyCell144() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Vertex International Trade</p>
    </div>
  );
}

function TableBodyCell145() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00067105</p>
    </div>
  );
}

function TableFreezedRow13({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell14 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell14 />
        <TableBodyCell143 />
        <TableBodyCell144 />
        <TableBodyCell145 />
      </div>
    </div>
  );
}

function TableBodyCell146() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">2233445566</p>
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">1244512412445124</p>
    </div>
  );
}

function ChipSelected15() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label15 />
    </div>
  );
}

function ChipCount13() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected15 />
    </div>
  );
}

function TableBodyCell147({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount13 />
    </div>
  );
}

function TableBodyCell148() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell149() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00015</p>
    </div>
  );
}

function TableBodyCell150() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Both</p>
    </div>
  );
}

function TableBodyCell151() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet13 />
    </div>
  );
}

function TableBodyCell152() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons46 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow13({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell146 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell147 isSelected={isSelected} />
        <TableBodyCell148 />
        <TableBodyCell149 />
        <TableBodyCell150 />
        <TableBodyCell151 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell152 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert13 />
    </div>
  );
}

function TableBodyCell153() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons47 />
    </div>
  );
}

function TableFreezedRowOptions13() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell153 />
      </div>
    </div>
  );
}

function TableRow13({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shrink-0 w-max min-w-full z-[3] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 15">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow13 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow13 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function IconSkeleton15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton15 />
    </div>
  );
}

function ExpandCell15({ onClick, isExpanded }: { onClick?: () => void; isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="content-stretch flex h-full items-start p-[8px] relative shrink-0 cursor-pointer" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
        <NoOfIcons48 />
      </div>
    </div>
  );
}

function Checkbox15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell15() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox15 />
    </div>
  );
}

function TableBodyCell154() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">16</p>
    </div>
  );
}

function TableBodyCell155() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[234px]">Unity Import Solutions</p>
    </div>
  );
}

function TableBodyCell156() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">NF00048263</p>
    </div>
  );
}

function TableFreezedRow14({ onExpand, isExpanded }: { onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className={`sticky left-0 z-10 self-stretch shrink-0 ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"}`} data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <ExpandCell15 onClick={onExpand} isExpanded={isExpanded} />
        <CheckboxCell15 />
        <TableBodyCell154 />
        <TableBodyCell155 />
        <TableBodyCell156 />
      </div>
    </div>
  );
}

function TableBodyCell157() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">2345678901</p>
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">1244512412445124</p>
    </div>
  );
}

function ChipSelected16() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label16 />
    </div>
  );
}

function ChipCount14() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected16 />
    </div>
  );
}

function TableBodyCell158({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[8px] relative shrink-0 ${isSelected ? "!bg-[#EBEFF7]" : ""}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount14 />
    </div>
  );
}

function TableBodyCell159() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">12ABCFE1234F1Z5</p>
    </div>
  );
}

function TableBodyCell160() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">PANUI00016</p>
    </div>
  );
}

function TableBodyCell161() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Vendor</p>
    </div>
  );
}

function TableBodyCell162() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">Shipping line</p>
    </div>
  );
}

function AvatarAlphabet14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet14 />
    </div>
  );
}

function TableBodyCell163() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons49 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[162px]">Arjith Kumar</p>
    </div>
  );
}

function TableScrollableRow14({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TableBodyCell157 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <TableBodyCell158 isSelected={isSelected} />
        <TableBodyCell159 />
        <TableBodyCell160 />
        <TableBodyCell161 />
        <TableBodyCell162 />
        {[...Array(2).keys()].map((_, i) => (
          <TableBodyCell163 key={i} />
        ))}
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert14 />
    </div>
  );
}

function TableBodyCell164() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons50 />
    </div>
  );
}

function TableFreezedRowOptions14() {
  return (
    <div className="bg-white relative self-stretch shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <TableBodyCell164 />
      </div>
    </div>
  );
}

function TableRow14({ isExpanded, onExpand, onSelect, selectedBranch, isSelected }: { isExpanded?: boolean; onExpand?: () => void; onSelect?: (branch: string, adCode: string) => void; selectedBranch?: string; isSelected?: boolean }) {
  return (
    <div className={`relative shadow-[0px_1px_6px_0px_rgba(26,38,120,0.12)] shrink-0 w-max min-w-full z-[2] ${isExpanded ? "bg-[#F2F6FF]" : "bg-white"} ${isSelected ? "border border-[#3874ff]" : ""}`} data-name="Table Row 16">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <TableFreezedRow14 onExpand={onExpand} isExpanded={isExpanded} />
        <TableScrollableRow14 isSelected={isSelected} />
      </div>
      {isExpanded && <ExpandedDetails onSelect={onSelect} selectedBranch={selectedBranch} />}
    </div>
  );
}

function RowSet({ expandedRowId, onExpand, onSelect, selectedBranch, selectedAdCode }: { expandedRowId: number | null; onExpand: (id: number, partyName: string) => void; onSelect: (branch: string, adCode: string) => void; selectedBranch: string; selectedAdCode: string }) {
  const getIsSelected = (id: number) => expandedRowId === id && selectedBranch !== "-";
  
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-max min-w-full" data-name="Row Set">
      <TableRow isExpanded={expandedRowId === 0} onExpand={() => onExpand(0, "Lakeside International Imports")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(0)} selectedAdCode={selectedAdCode} />
      <TableRow1 isExpanded={expandedRowId === 1} onExpand={() => onExpand(1, "Sierra Import Corporation")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(1)} selectedAdCode={selectedAdCode} />
      <TableRow2 isExpanded={expandedRowId === 2} onExpand={() => onExpand(2, "Vista Trade & Logistics")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(2)} selectedAdCode={selectedAdCode} />
      <TableRow3 isExpanded={expandedRowId === 3} onExpand={() => onExpand(3, "Nexus Import Partners")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(3)} selectedAdCode={selectedAdCode} />
      <TableRow4 isExpanded={expandedRowId === 4} onExpand={() => onExpand(4, "Vertex International Trade")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(4)} selectedAdCode={selectedAdCode} />
      <TableRow5 isExpanded={expandedRowId === 5} onExpand={() => onExpand(5, "Unity Import Solutions")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(5)} selectedAdCode={selectedAdCode} />
      <TableRow6 isExpanded={expandedRowId === 6} onExpand={() => onExpand(6, "Global Trade Links")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(6)} selectedAdCode={selectedAdCode} />
      <TableRow7 isExpanded={expandedRowId === 7} onExpand={() => onExpand(7, "Blue Ocean Traders")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(7)} selectedAdCode={selectedAdCode} />
      <TableRow8 isExpanded={expandedRowId === 8} onExpand={() => onExpand(8, "Skyline Imports")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(8)} selectedAdCode={selectedAdCode} />
      <TableRow9 isExpanded={expandedRowId === 9} onExpand={() => onExpand(9, "Horizon Exports")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(9)} selectedAdCode={selectedAdCode} />
      <TableRow10 isExpanded={expandedRowId === 10} onExpand={() => onExpand(10, "Pinnacle Trade Co")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(10)} selectedAdCode={selectedAdCode} />
      <TableRow11 isExpanded={expandedRowId === 11} onExpand={() => onExpand(11, "Summit International")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(11)} selectedAdCode={selectedAdCode} />
      <TableRow12 isExpanded={expandedRowId === 12} onExpand={() => onExpand(12, "Crestline Imports")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(12)} selectedAdCode={selectedAdCode} />
      <TableRow13 isExpanded={expandedRowId === 13} onExpand={() => onExpand(13, "Vantage Trade Group")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(13)} selectedAdCode={selectedAdCode} />
      <TableRow14 isExpanded={expandedRowId === 14} onExpand={() => onExpand(14, "Prime Import Export")} onSelect={onSelect} selectedBranch={selectedBranch} isSelected={getIsSelected(14)} selectedAdCode={selectedAdCode} />
    </div>
  );
}

function Body({ expandedRowId, onExpand, onSelect, selectedBranch, selectedAdCode }: { expandedRowId: number | null; onExpand: (id: number, partyName: string) => void; onSelect: (branch: string, adCode: string) => void; selectedBranch: string; selectedAdCode: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-max min-w-full z-[2]" data-name="Body">
      <RowSet expandedRowId={expandedRowId} onExpand={onExpand} onSelect={onSelect} selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} />
    </div>
  );
}

function IconSkeleton16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5498_39946)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5498_39946">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons51() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0" data-name="No. of Icons">
      <IconSkeleton16 />
    </div>
  );
}

function ExpandCell16() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center justify-center p-[8px] relative shrink-0" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-r border-solid border-t inset-0 pointer-events-none" />
      <NoOfIcons51 />
    </div>
  );
}

function Checkbox16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Checkbox" opacity="0">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell16() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center justify-center p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-r border-solid border-t inset-0 pointer-events-none" />
      <Checkbox16 />
    </div>
  );
}

function TableHeaderCell12() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-r border-solid border-t inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-center text-ellipsis w-[55px]">S.No</p>
    </div>
  );
}

function TableHeaderCell13() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-r border-solid border-t inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[234px]">Cell Name</p>
    </div>
  );
}

function TableHeaderCell14() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-r border-solid border-t inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[134px]">Cell Name</p>
    </div>
  );
}

function TableFreezedFooter() {
  return (
    <div className="content-stretch flex h-[40px] items-center sticky left-0 shrink-0 z-20" data-name="Table Freezed Footer">
      <ExpandCell16 />
      <CheckboxCell16 />
      <TableHeaderCell12 />
      <TableHeaderCell13 />
      <TableHeaderCell14 />
    </div>
  );
}

function TableHeaderCell15() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-r border-solid border-t inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[134px]">Cell Name</p>
    </div>
  );
}

function TableHeaderCell16() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-r border-solid border-t inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[184px]">Cell Name</p>
    </div>
  );
}

function TableHeaderCell17() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-r border-solid border-t inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[84px]">Cell Name</p>
    </div>
  );
}

function TableScrollableFooter() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex flex-[1_0_0] h-[40px] items-center min-h-px min-w-px relative z-[2]" data-name="Table Scrollable Footer">
      <TableHeaderCell15 />
      <TableHeaderCell16 />
      <TableHeaderCell16 />
      <TableHeaderCell15 />
      <TableHeaderCell17 />
      <TableHeaderCell15 />
      <TableHeaderCell16 />
      <TableHeaderCell17 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.5296deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[40px] rotate-[180deg] scale-y-[-100%] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.5296deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function TableEdit1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="table edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="table edit">
          <rect fill="var(--fill-0, #626776)" height="12" id="Rectangle 3" width="1.2" x="5" y="3" />
          <path d={svgPaths.p3c1edf00} fill="var(--fill-0, #626776)" id="Subtract" />
          <path d={svgPaths.p6dabd00} fill="var(--fill-0, #626776)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons52() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0" data-name="No. of Icons">
      <TableEdit1 />
    </div>
  );
}

function TableHeaderCell18() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center justify-center p-[8px] relative shrink-0 w-[34px]" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-l border-solid border-t inset-0 pointer-events-none" />
      <NoOfIcons52 />
    </div>
  );
}

function TableFreezedFooterOptions() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 z-[1]" data-name="Table Freezed Footer Options">
      <TableHeaderCell18 />
    </div>
  );
}

function TableFooter() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-max min-w-full z-[1]" data-name="Table Footer">
      <TableFreezedFooter />
      <TableScrollableFooter />
    </div>
  );
}

function CellTable({ expandedRowId, onExpand, onSelect, selectedBranch, selectedAdCode }: { expandedRowId: number | null; onExpand: (id: number, partyName: string) => void; onSelect: (branch: string, adCode: string) => void; selectedBranch: string; selectedAdCode: string }) {
  return (
    <div className="bg-[#fdfeff] content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px overflow-auto relative rounded-[4px] w-full" data-name="Cell Table">
      <TableHeader />
      <Body expandedRowId={expandedRowId} onExpand={onExpand} onSelect={onSelect} selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} />
      <TableFooter />
    </div>
  );
}

function PartyMaster({ expandedRowId, onExpand, onSelect, selectedBranch, selectedAdCode }: { expandedRowId: number | null; onExpand: (id: number, partyName: string) => void; onSelect: (branch: string, adCode: string) => void; selectedBranch: string; selectedAdCode: string }) {
  return (
    <div className="absolute content-stretch flex flex-col inset-[196px_12px_100px_12px] items-start overflow-clip rounded-[8px]" data-name="Party Master">
      <CellTable expandedRowId={expandedRowId} onExpand={onExpand} onSelect={onSelect} selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} />
    </div>
  );
}

function Search() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5498_39939" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39939)">
            <path d={svgPaths.p2c731080} fill="var(--fill-0, #626776)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconRight() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Icon Right">
      <Search />
    </div>
  );
}

function SearchTextbox() {
  return (
    <div className="bg-[#f6f9ff] content-stretch flex-[2_0_0] flex items-center leading-[0] p-[8px] relative rounded-[4px] shrink-0" data-name="Search Textbox">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
        <p className="css-4hzbpn leading-[18px]">Name</p>
      </div>
      <IconRight />
    </div>
  );
}

function Search1() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5498_39939" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39939)">
            <path d={svgPaths.p2c731080} fill="var(--fill-0, #626776)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconRight1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Icon Right">
      <Search1 />
    </div>
  );
}

function SearchTextbox1() {
  return (
    <div className="bg-[#f6f9ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Search Textbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center leading-[0] p-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
            <p className="css-4hzbpn leading-[18px]">ID</p>
          </div>
          <IconRight1 />
        </div>
      </div>
    </div>
  );
}

function Search2() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5498_39939" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39939)">
            <path d={svgPaths.p2c731080} fill="var(--fill-0, #626776)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconRight2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Icon Right">
      <Search2 />
    </div>
  );
}

function SearchTextbox2() {
  return (
    <div className="bg-[#f6f9ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Search Textbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center leading-[0] p-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
            <p className="css-4hzbpn leading-[18px]">IEC</p>
          </div>
          <IconRight2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[12px] right-[12px] top-[78px]">
      <SearchTextbox />
      <SearchTextbox1 />
      <SearchTextbox2 />
    </div>
  );
}

function FormLableCell() {
  return (
    <div className="bg-[#f1f4f8] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[4px] py-[6px] relative size-full">
        <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[142px]">
          <p className="css-4hzbpn mb-0">Party address as per</p>
          <p className="css-4hzbpn">Invoice</p>
        </div>
      </div>
    </div>
  );
}

function LableCount() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0" data-name="Lable Count">
      <FormLableCell />
    </div>
  );
}

function Textfield() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[4px] py-[6px] relative size-full">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
          <p className="css-4hzbpn leading-[18px]">Address</p>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Field">
      <Textfield />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Component 5">
      <Field />
    </div>
  );
}

function FieldCount() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[60px] items-start min-h-px min-w-px relative" data-name="Field Count">
      <Component />
    </div>
  );
}

function GridHorizontal() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[12px] right-[12px] overflow-clip rounded-[4px] top-[124px]" data-name="Grid Horizontal">
      <LableCount />
      <FieldCount />
    </div>
  );
}

export default function AdvancePartyMaster() {
  const [expandedRowId, setExpandedRowId] = React.useState<number | null>(null);
  const [selectedBranch, setSelectedBranch] = React.useState("-");
  const [selectedAdCode, setSelectedAdCode] = React.useState("-");
  const [selectedPartyName, setSelectedPartyName] = React.useState("");

  const handleExpand = (rowId: number, partyName: string) => {
    if (expandedRowId === rowId) {
      setExpandedRowId(null);
      setSelectedPartyName("");
      // Reset selection when collapsing? Maybe not required but cleaner UI
      setSelectedBranch("-");
      setSelectedAdCode("-");
    } else {
      setExpandedRowId(rowId);
      setSelectedPartyName(partyName);
      // Reset selection when changing rows
      setSelectedBranch("-");
      setSelectedAdCode("-");
    }
  };

  const handleSelect = (branch: string, adCode: string) => {
    setSelectedBranch(branch);
    setSelectedAdCode(adCode);
  };

  return (
    <div className="relative size-full" data-name="Advance party master">
      <Popup selectedBranch={selectedBranch} selectedAdCode={selectedAdCode} selectedPartyName={selectedPartyName} />
      <PartyMaster 
        expandedRowId={expandedRowId} 
        onExpand={handleExpand} 
        onSelect={handleSelect} 
        selectedBranch={selectedBranch}
        selectedAdCode={selectedAdCode} 
      />
      <Frame />
      <GridHorizontal />
    </div>
  );
}