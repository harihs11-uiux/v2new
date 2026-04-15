import svgPaths from "./svg-xt6gnxzo5f";

function TotalJobs() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Total Jobs">
      <p className="col-1 font-['Inter:Medium',sans-serif] font-medium leading-[18px] ml-0 mt-0 not-italic relative row-1 text-[14px] text-white">Total Party : 16</p>
    </div>
  );
}

function FilterList() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="filter_list">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter_list">
          <mask height="16" id="mask0_5886_3889" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5886_3889)">
            <path d={svgPaths.p8cd7480} fill="var(--fill-0, #3874FF)" id="filter_list_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons">
        <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Icon Skeleton 1">
          <FilterList />
        </div>
      </div>
    </div>
  );
}

function IconRight() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Right">
      <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons /No. of Icons/1/12 px/18 px">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[31.25%_18.75%]" data-name="expand_more">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 6.75">
              <path d={svgPaths.p24768d00} fill="var(--fill-0, #3874FF)" id="expand_more" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeftsideControls() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] pl-[12px] relative size-full" data-name="Leftside Controls">
      <TotalJobs />
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
        <IconLeft />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] whitespace-nowrap">
          <p className="leading-[18px]">Add Filter</p>
        </div>
        <IconRight />
      </div>
    </div>
  );
}