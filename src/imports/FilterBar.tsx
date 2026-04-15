import svgPaths from "./svg-rp20ddods";

function ArrowDropdown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
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
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Branch : Chennai</p>
      <ActionIcon />
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
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
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Mode of Transport : All</p>
      <ActionIcon1 />
    </div>
  );
}

function ArrowDropdown2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3007_16921)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_16921">
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
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#626776] text-[14px] text-nowrap">Importer : All</p>
      <ActionIcon2 />
    </div>
  );
}

function FilterChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filter Chips">
      <FilterDropdown />
      <FilterDropdown1 />
      <FilterDropdown2 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">Apply Filter</p>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[26px]" data-name="seperator">
              {/* Removed separator line */}
            </div>
          </div>
        </div>
      </div>
      <FilterChips />
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

function ClearFIlter() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Clear FIlter">
      <FilterListOff />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <ClearFIlter />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px]">Clear Filter</p>
      </div>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_3007_17096" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_3007_17096)">
            <path d={svgPaths.p1345fc00} fill="var(--fill-0, white)" id="file_download" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3874ff] content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Download</p>
      </div>
    </div>
  );
}

export default function FilterBar() {
  return (
    <div className="bg-[#ebeef7] relative rounded-[8px] size-full" data-name="Filter bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Content />
          <Button />
        </div>
      </div>
    </div>
  );
}