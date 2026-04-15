import svgPaths from "./svg-lit7yiq5x5";

function Arrow() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="arrow">
          <mask height="16" id="mask0_1537_8619" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="8" />
          </mask>
          <g mask="url(#mask0_1537_8619)">
            <path d={svgPaths.p2dab2a00} fill="var(--fill-0, #626776)" id="arrow_right" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[193px]" data-name="Body">
      <Arrow />
      <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Inv 1.  98675645646453545`}</p>
      </div>
    </div>
  );
}

function InvoiceItemSeperator() {
  return (
    <div className="content-stretch flex h-[34px] items-center pl-[4px] pr-[8px] py-[8px] relative shrink-0" data-name="Invoice/Item Seperator">
      <div aria-hidden="true" className="absolute border-0 border-[#d0d5e3] border-solid inset-0 pointer-events-none" />
      <Body />
    </div>
  );
}

function Freezed() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Freezed">
      <InvoiceItemSeperator />
    </div>
  );
}

export default function TableRow() {
  return (
    <div className="bg-[#f1f4f8] relative size-full" data-name="Table Row 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[8px] pr-0 py-0 relative size-full">
          <Freezed />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}