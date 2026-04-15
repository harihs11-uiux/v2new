import svgPaths from "./svg-f4tenzgqv2";

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="16" id="mask0_1494_17872" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1494_17872)">
            <path d={svgPaths.pe68900} fill="var(--fill-0, #3874FF)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[12px] items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Tab">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Audit Report</p>
      </div>
      <Button />
    </div>
  );
}

function LeftStack() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Left Stack">
      <div className="absolute inset-[-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Left Stack">
            <circle cx="12" cy="12" fill="var(--fill-0, #36415A)" id="hover-circle" r="12" />
            <path d={svgPaths.p3ca64e00} fill="var(--fill-0, white)" id="dock_to_left" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_1494_17907" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1494_17907)">
            <path d={svgPaths.p4280c0} fill="var(--fill-0, #CDCFD3)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <LeftStack />
      <Close />
    </div>
  );
}

function ExpandedTitlebarActions() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Expanded Titlebar Actions">
      <NoOfIcons1 />
    </div>
  );
}

function SidebarExpandedTitlebar() {
  return (
    <div className="absolute h-[48px] left-0 right-0 top-0" data-name="Sidebar Expanded  Titlebar">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[8px] py-[14px] relative rounded-[inherit] size-full">
        <Tab />
        <ExpandedTitlebarActions />
      </div>
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Error() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Error">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #F44545)" id="Ellipse 37" r="7.875" />
          <g id="Vector">
            <path d={svgPaths.p2e6e6f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e6e6f00} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Error1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="error">
      <Error />
    </div>
  );
}

function IndividualTab() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <div aria-hidden="true" className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Error1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">Errors (25)</p>
      </div>
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="warning">
          <path d={svgPaths.p25951b00} fill="var(--fill-0, #E97330)" id="Polygon 1" />
          <rect fill="var(--fill-0, white)" height="5.625" id="Rectangle 1574" rx="0.5625" width="1.125" x="8.4375" y="7.875" />
          <circle cx="9" cy="6.1875" fill="var(--fill-0, white)" id="Ellipse 39" r="0.5625" />
        </g>
      </svg>
    </div>
  );
}

function IndividualTab1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <Warning />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Warnings (0)</p>
      </div>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Success check">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #FDCA5F)" id="Base" r="7.875" />
          <g id="icon">
            <rect fill="var(--fill-0, white)" height="5.625" id="Rectangle 1574" rx="0.5625" width="1.125" x="7.3125" y="6.1875" />
            <circle cx="7.875" cy="4.5" fill="var(--fill-0, white)" id="Ellipse 39" r="0.5625" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Format() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format">
      <SuccessCheck />
    </div>
  );
}

function IndividualTab2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Individual Tab">
      <Format />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Data Formatting</p>
      </div>
    </div>
  );
}

function HorizontalTab() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Horizontal Tab">
      <IndividualTab />
      <IndividualTab1 />
      <IndividualTab2 />
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1494_17862)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #CDCFD3)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1494_17862">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown />
    </div>
  );
}

function FilterDropdown() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Table</p>
      <ActionIcon />
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1494_17935)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #9497A1)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1494_17935">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown1 />
    </div>
  );
}

function FilterDropdown1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Inv Sr.No</p>
      <ActionIcon1 />
    </div>
  );
}

function ArrowDropdown2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1494_17935)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #9497A1)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1494_17935">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown2 />
    </div>
  );
}

function FilterDropdown2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">It. Sr.No</p>
      <ActionIcon2 />
    </div>
  );
}

function ArrowDropdown3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1494_17935)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #9497A1)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1494_17935">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown3 />
    </div>
  );
}

function FilterDropdown3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Ref. No.</p>
      <ActionIcon3 />
    </div>
  );
}

function ArrowDropdown4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1494_17935)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #9497A1)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1494_17935">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionIcon4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <ArrowDropdown4 />
    </div>
  );
}

function FilterDropdown4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap whitespace-pre">Error Code</p>
      <ActionIcon4 />
    </div>
  );
}

function FilterListOff() {
  return (
    <div className="absolute h-[14px] left-[11.11%] right-[11.11%] top-1/2 translate-y-[-50%]" data-name="filter_list_off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="filter_list_off">
          <path d={svgPaths.pbf27c00} fill="var(--fill-0, #3874FF)" id="filter_list_off_2" />
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <FilterListOff />
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[12px] items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton1 />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Clear All</p>
      </div>
    </div>
  );
}

function AuditReportFilter() {
  return (
    <div className="bg-[#050e25] box-border content-start flex flex-wrap gap-[8px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Audit Report Filter">
      <FilterDropdown />
      <FilterDropdown1 />
      <FilterDropdown2 />
      <FilterDropdown3 />
      <FilterDropdown4 />
      <Button1 />
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div className="bg-[#222b42] box-border content-stretch flex gap-[4px] items-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white w-[55px]">S.No</p>
    </div>
  );
}

function TableFreezedHeader() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 z-[3]" data-name="Table Freezed Header">
      <TableHeaderCell />
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div className="bg-[#222b42] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[184px]">Invoice Sr.No / Item Sr.No</p>
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div className="bg-[#222b42] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[84px]">Error Code</p>
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div className="bg-[#222b42] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[134px]">Table</p>
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div className="bg-[#222b42] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[134px]">Reference No</p>
    </div>
  );
}

function TableHeaderCell5() {
  return (
    <div className="bg-[#222b42] box-border content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[424px]">Description</p>
    </div>
  );
}

function TableScrollableHeader() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0 z-[2]" data-name="Table Scrollable Header">
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell5 />
      </div>
      <div className="absolute bottom-0 flex items-center justify-center right-[195px] top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
    </div>
  );
}

function TableEdit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="table edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="table edit">
          <rect fill="var(--fill-0, #CDCFD3)" height="12" id="Rectangle 3" width="1.2" x="5" y="3" />
          <path d={svgPaths.p3c1edf00} fill="var(--fill-0, #CDCFD3)" id="Subtract" />
          <path d={svgPaths.p6dabd00} fill="var(--fill-0, #CDCFD3)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center opacity-0 relative shrink-0" data-name="No. of Icons">
      <TableEdit />
    </div>
  );
}

function TableHeaderCell6() {
  return (
    <div className="bg-[#222b42] box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative self-stretch shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons3 />
    </div>
  );
}

function TableFreezedHeaderOptions() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Table Freezed Header Options">
      <TableHeaderCell6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex isolate items-start overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full z-[3]" data-name="Table Header">
      <TableFreezedHeader />
      <TableScrollableHeader />
      <TableFreezedHeaderOptions />
    </div>
  );
}

function TableBodyCell() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white w-[55px]">1</p>
    </div>
  );
}

function TableFreezedRow() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell />
        </div>
      </div>
    </div>
  );
}

function TableBodyCell1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[184px]">0/0</p>
    </div>
  );
}

function TableBodyCell2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[84px]">608</p>
    </div>
  );
}

function TableBodyCell3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">IGM</p>
    </div>
  );
}

function TableBodyCell4() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">-</p>
    </div>
  );
}

function TableBodyCell5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[424px]">IGM/IR Number should NOT be NULL</p>
    </div>
  );
}

function TableScrollableRow() {
  return (
    <div className="basis-0 bg-[#2c364f] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-full">
        <TableBodyCell1 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
        <TableBodyCell2 />
        <TableBodyCell3 />
        <TableBodyCell4 />
        <TableBodyCell5 />
        <div className="absolute bottom-0 flex items-center justify-center right-[-167px] top-0 w-[5px]">
          <div className="flex-none h-[34px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="view file">
          <mask height="18" id="mask0_1494_17903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1494_17903)">
            <path d={svgPaths.p9838780} fill="var(--fill-0, #CDCFD3)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton2 />
    </div>
  );
}

function TableBodyCell6() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons4 />
    </div>
  );
}

function TableFreezedRowOptions() {
  return (
    <div className="bg-[#2c364f] relative shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-end relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell6 />
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#2c364f] relative shrink-0 w-full z-[8]" data-name="Table Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <TableFreezedRow />
        <TableScrollableRow />
        <TableFreezedRowOptions />
      </div>
    </div>
  );
}

function TableBodyCell7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white w-[55px]">2</p>
    </div>
  );
}

function TableFreezedRow1() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell7 />
        </div>
      </div>
    </div>
  );
}

function TableBodyCell8() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[184px]">0/0</p>
    </div>
  );
}

function TableBodyCell9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[84px]">608</p>
    </div>
  );
}

function TableBodyCell10() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">IGM</p>
    </div>
  );
}

function TableBodyCell11() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">-</p>
    </div>
  );
}

function TableBodyCell12() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[424px]">IGM/IR Number should NOT be NULL</p>
    </div>
  );
}

function TableScrollableRow1() {
  return (
    <div className="basis-0 bg-[#2c364f] grow h-[34px] min-h-px min-w-px relative shrink-0" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[34px] items-center relative w-full">
        <TableBodyCell8 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
        <TableBodyCell9 />
        <TableBodyCell10 />
        <TableBodyCell11 />
        <TableBodyCell12 />
        <div className="absolute bottom-0 flex items-center justify-center right-[-167px] top-0 w-[5px]">
          <div className="flex-none h-[34px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSkeleton3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="view file">
          <mask height="18" id="mask0_1494_17903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1494_17903)">
            <path d={svgPaths.p9838780} fill="var(--fill-0, #CDCFD3)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton3 />
    </div>
  );
}

function TableBodyCell13() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons5 />
    </div>
  );
}

function TableFreezedRowOptions1() {
  return (
    <div className="bg-[#2c364f] relative shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-end relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell13 />
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-[#2c364f] relative shrink-0 w-full z-[7]" data-name="Table Row 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <TableFreezedRow1 />
        <TableScrollableRow1 />
        <TableFreezedRowOptions1 />
      </div>
    </div>
  );
}

function TableBodyCell14() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white w-[55px]">3</p>
    </div>
  );
}

function TableFreezedRow2() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell14 />
        </div>
      </div>
    </div>
  );
}

function TableBodyCell15() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[184px]">0/0</p>
    </div>
  );
}

function TableBodyCell16() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[84px]">608</p>
    </div>
  );
}

function TableBodyCell17() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">IGM</p>
    </div>
  );
}

function TableBodyCell18() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">-</p>
    </div>
  );
}

function TableBodyCell19() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[424px]">IGM/IR Number should NOT be NULL</p>
    </div>
  );
}

function TableScrollableRow2() {
  return (
    <div className="basis-0 bg-[#2c364f] grow h-[34px] min-h-px min-w-px relative shrink-0" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[34px] items-center relative w-full">
        <TableBodyCell15 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
        <TableBodyCell16 />
        <TableBodyCell17 />
        <TableBodyCell18 />
        <TableBodyCell19 />
        <div className="absolute bottom-0 flex items-center justify-center right-[-167px] top-0 w-[5px]">
          <div className="flex-none h-[34px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSkeleton4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="view file">
          <mask height="18" id="mask0_1494_17903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1494_17903)">
            <path d={svgPaths.p9838780} fill="var(--fill-0, #CDCFD3)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton4 />
    </div>
  );
}

function TableBodyCell20() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons6 />
    </div>
  );
}

function TableFreezedRowOptions2() {
  return (
    <div className="bg-[#2c364f] relative shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-end relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell20 />
        </div>
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-[#2c364f] relative shrink-0 w-full z-[6]" data-name="Table Row 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <TableFreezedRow2 />
        <TableScrollableRow2 />
        <TableFreezedRowOptions2 />
      </div>
    </div>
  );
}

function TableBodyCell21() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white w-[55px]">4</p>
    </div>
  );
}

function TableFreezedRow3() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell21 />
        </div>
      </div>
    </div>
  );
}

function TableBodyCell22() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[184px]">0/0</p>
    </div>
  );
}

function TableBodyCell23() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[84px]">608</p>
    </div>
  );
}

function TableBodyCell24() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">IGM</p>
    </div>
  );
}

function TableBodyCell25() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">-</p>
    </div>
  );
}

function TableBodyCell26() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[424px]">IGM/IR Number should NOT be NULL</p>
    </div>
  );
}

function TableScrollableRow3() {
  return (
    <div className="basis-0 bg-[#2c364f] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-full">
        <TableBodyCell22 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
        <TableBodyCell23 />
        <TableBodyCell24 />
        <TableBodyCell25 />
        <TableBodyCell26 />
        <div className="absolute bottom-0 flex items-center justify-center right-[-167px] top-0 w-[5px]">
          <div className="flex-none h-[34px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSkeleton5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="view file">
          <mask height="18" id="mask0_1494_17903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1494_17903)">
            <path d={svgPaths.p9838780} fill="var(--fill-0, #CDCFD3)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton5 />
    </div>
  );
}

function TableBodyCell27() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons7 />
    </div>
  );
}

function TableFreezedRowOptions3() {
  return (
    <div className="bg-[#2c364f] relative shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-end relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell27 />
        </div>
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-[#2c364f] relative shrink-0 w-full z-[5]" data-name="Table Row 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <TableFreezedRow3 />
        <TableScrollableRow3 />
        <TableFreezedRowOptions3 />
      </div>
    </div>
  );
}

function TableBodyCell28() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white w-[55px]">5</p>
    </div>
  );
}

function TableFreezedRow4() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell28 />
        </div>
      </div>
    </div>
  );
}

function TableBodyCell29() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[184px]">0/0</p>
    </div>
  );
}

function TableBodyCell30() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[84px]">608</p>
    </div>
  );
}

function TableBodyCell31() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">IGM</p>
    </div>
  );
}

function TableBodyCell32() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">-</p>
    </div>
  );
}

function TableBodyCell33() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[424px]">IGM/IR Number should NOT be NULL</p>
    </div>
  );
}

function TableScrollableRow4() {
  return (
    <div className="basis-0 bg-[#2c364f] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-full">
        <TableBodyCell29 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
        <TableBodyCell30 />
        <TableBodyCell31 />
        <TableBodyCell32 />
        <TableBodyCell33 />
        <div className="absolute bottom-0 flex items-center justify-center right-[-167px] top-0 w-[5px]">
          <div className="flex-none h-[34px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSkeleton6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="view file">
          <mask height="18" id="mask0_1494_17903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1494_17903)">
            <path d={svgPaths.p9838780} fill="var(--fill-0, #CDCFD3)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton6 />
    </div>
  );
}

function TableBodyCell34() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons8 />
    </div>
  );
}

function TableFreezedRowOptions4() {
  return (
    <div className="bg-[#2c364f] relative shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-end relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell34 />
        </div>
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-[#2c364f] relative shrink-0 w-full z-[4]" data-name="Table Row 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <TableFreezedRow4 />
        <TableScrollableRow4 />
        <TableFreezedRowOptions4 />
      </div>
    </div>
  );
}

function TableBodyCell35() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white w-[55px]">6</p>
    </div>
  );
}

function TableFreezedRow5() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell35 />
        </div>
      </div>
    </div>
  );
}

function TableBodyCell36() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[184px]">0/0</p>
    </div>
  );
}

function TableBodyCell37() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[84px]">608</p>
    </div>
  );
}

function TableBodyCell38() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">IGM</p>
    </div>
  );
}

function TableBodyCell39() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">-</p>
    </div>
  );
}

function TableBodyCell40() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[424px]">IGM/IR Number should NOT be NULL</p>
    </div>
  );
}

function TableScrollableRow5() {
  return (
    <div className="basis-0 bg-[#2c364f] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-full">
        <TableBodyCell36 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
        <TableBodyCell37 />
        <TableBodyCell38 />
        <TableBodyCell39 />
        <TableBodyCell40 />
        <div className="absolute bottom-0 flex items-center justify-center right-[-167px] top-0 w-[5px]">
          <div className="flex-none h-[34px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSkeleton7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="view file">
          <mask height="18" id="mask0_1494_17903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1494_17903)">
            <path d={svgPaths.p9838780} fill="var(--fill-0, #CDCFD3)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton7 />
    </div>
  );
}

function TableBodyCell41() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons9 />
    </div>
  );
}

function TableFreezedRowOptions5() {
  return (
    <div className="bg-[#2c364f] relative shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-end relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell41 />
        </div>
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="bg-[#2c364f] relative shrink-0 w-full z-[3]" data-name="Table Row 6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <TableFreezedRow5 />
        <TableScrollableRow5 />
        <TableFreezedRowOptions5 />
      </div>
    </div>
  );
}

function TableBodyCell42() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white w-[55px]">7</p>
    </div>
  );
}

function TableFreezedRow6() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell42 />
        </div>
      </div>
    </div>
  );
}

function TableBodyCell43() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[184px]">0/0</p>
    </div>
  );
}

function TableBodyCell44() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[84px]">608</p>
    </div>
  );
}

function TableBodyCell45() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">IGM</p>
    </div>
  );
}

function TableBodyCell46() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[134px]">-</p>
    </div>
  );
}

function TableBodyCell47() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[424px]">IGM/IR Number should NOT be NULL</p>
    </div>
  );
}

function TableScrollableRow6() {
  return (
    <div className="basis-0 bg-[#2c364f] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-full">
        <TableBodyCell43 />
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" />
        <TableBodyCell44 />
        <TableBodyCell45 />
        <TableBodyCell46 />
        <TableBodyCell47 />
        <div className="absolute bottom-0 flex items-center justify-center right-[-167px] top-0 w-[5px]">
          <div className="flex-none h-[34px] rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSkeleton8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="view file">
          <mask height="18" id="mask0_1494_17903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1494_17903)">
            <path d={svgPaths.p9838780} fill="var(--fill-0, #CDCFD3)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton8 />
    </div>
  );
}

function TableBodyCell48() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons10 />
    </div>
  );
}

function TableFreezedRowOptions6() {
  return (
    <div className="bg-[#2c364f] relative shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-end relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell48 />
        </div>
      </div>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="bg-[#2c364f] relative shadow-[0px_0px_11px_0px_#272d3f] shrink-0 w-full z-[2]" data-name="Table Row 7">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <TableFreezedRow6 />
        <TableScrollableRow6 />
        <TableFreezedRowOptions6 />
      </div>
    </div>
  );
}

function RowSet() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Row Set">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col h-[593px] items-start overflow-clip relative shrink-0 w-full z-[2]" data-name="Body">
      <RowSet />
    </div>
  );
}

function CellTable() {
  return (
    <div className="bg-[#36415a] h-[271px] relative rounded-[4px] shrink-0 w-full" data-name="Cell Table">
      <div className="content-stretch flex flex-col h-[271px] isolate items-start overflow-clip relative rounded-[inherit] w-full">
        <TableHeader />
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] right-[12px] top-[48px]">
      <HorizontalTab />
      <AuditReportFilter />
      <CellTable />
    </div>
  );
}

function TooltipIndicatorAlignment() {
  return (
    <div className="h-[4px] relative shrink-0 w-full" data-name="Tooltip Indicator Alignment">
      <div className="absolute h-[4px] left-[calc(50%-19.5px)] top-0 translate-x-[-50%] w-[8px]" data-name="Polygon">
        <div className="absolute bottom-0 left-0 right-0 top-[10.36%]" style={{ "--fill-0": "rgba(5, 14, 37, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4">
            <path d={svgPaths.p369be250} fill="var(--fill-0, #050E25)" id="Polygon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[#050e25] box-border content-stretch flex gap-[10px] items-start px-[8px] py-[2px] relative rounded-[3px] shrink-0" data-name="Tooltip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Stack in right</p>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[778px] shadow-[0px_0px_11px_1px_#272d3f] top-[39px]" data-name="Tooltip">
      <TooltipIndicatorAlignment />
      <Tooltip />
    </div>
  );
}

export default function Tooltip2() {
  return (
    <div className="bg-[#050e25] relative rounded-[8px] size-full" data-name="Tooltip">
      <SidebarExpandedTitlebar />
      <Frame />
      <Tooltip1 />
    </div>
  );
}