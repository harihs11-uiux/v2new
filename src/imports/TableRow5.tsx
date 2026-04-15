import svgPaths from "./svg-hu8mb1qpzq";

function Arrow() {
  return (
    <div className="h-4 relative shrink-0 w-2" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="arrow">
          <mask height="16" id="mask0_1347_2894" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="8" />
          </mask>
          <g mask="url(#mask0_1347_2894)">
            <path d={svgPaths.p2dab2a00} fill="var(--fill-0, #626776)" id="arrow_right" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-[193px]" data-name="Body">
      <Arrow />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`Inv 1.  98675645646453545`}</p>
      </div>
    </div>
  );
}

function InvoiceSeperator() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Invoice Seperator">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
      </div>
    </div>
  );
}

function Freezed() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Freezed">
      <InvoiceSeperator />
    </div>
  );
}

export default function TableRow5() {
  return (
    <div className="bg-[#f3f5fa] relative size-full" data-name="Table Row 5">
      <div className="box-border content-stretch flex flex-row items-center justify-start pl-2 pr-0 py-0 relative size-full">
        <Freezed />
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_-2px_6px_0px_rgba(26,38,120,0.12)]" />
    </div>
  );
}