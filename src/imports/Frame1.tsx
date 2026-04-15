import svgPaths from "./svg-bc7jx2ycv4";

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
    <div className="bg-[#f6f9ff] content-stretch flex items-center leading-[0] p-[8px] relative rounded-[4px] shrink-0 w-[324px]" data-name="Search Textbox">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Search by Part Code</p>
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
    <div className="bg-[#f6f9ff] content-stretch flex items-center leading-[0] p-[8px] relative rounded-[4px] shrink-0 w-[1254px]" data-name="Search Textbox">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Customs Description</p>
      </div>
      <IconRight1 />
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
            <p className="leading-[18px] whitespace-pre-wrap">Search by HSN</p>
          </div>
          <IconRight2 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full">
      <SearchTextbox />
      <SearchTextbox1 />
      <SearchTextbox2 />
    </div>
  );
}