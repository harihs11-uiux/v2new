import svgPaths from "./svg-k2nepjuw93";

function Arrow() {
  return (
    <div className="h-4 relative shrink-0 w-2" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="arrow">
          <mask
            height="16"
            id="mask0_1151_3343"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="8"
            x="0"
            y="0"
          >
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="8" />
          </mask>
          <g mask="url(#mask0_1151_3343)">
            <path d={svgPaths.p2dab2a00} fill="var(--fill-0, #626776)" id="arrow_right" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InvoiceSeperator() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Invoice Seperator">
      <div
        aria-hidden="true"
        className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[30px] items-center justify-start pl-1 pr-2 py-1.5 relative w-full">
          <Arrow />
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">{`Inv 1.  98675645646453545`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Freezed() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Freezed"
    >
      <InvoiceSeperator />
    </div>
  );
}

export default function TableRow1() {
  return (
    <div className="bg-[#f4f6fb] relative size-full" data-name="Table Row 1">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pl-2 pr-0 py-0 relative size-full">
          <Freezed />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_-2px_6px_0px_rgba(26,38,120,0.12)]"
      />
    </div>
  );
}