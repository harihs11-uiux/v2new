import React from 'react';
import svgPaths from "../imports/svg-qzy7hb8u7n";

function Error() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Error">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Error">
          <circle
            cx="7.875"
            cy="7.875"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 37"
            r="7.875"
          />
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
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="error"
    >
      <Error />
    </div>
  );
}

function SelectionsCards() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0"
      data-name="Selections Cards"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Error1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="warning">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="warning">
          <path
            d={svgPaths.p25951b00}
            fill="var(--fill-0, #E97330)"
            id="Polygon 1"
          />
          <rect
            fill="var(--fill-0, white)"
            height="5.625"
            id="Rectangle 1574"
            rx="0.5625"
            width="1.125"
            x="8.4375"
            y="7.875"
          />
          <circle
            cx="9"
            cy="6.1875"
            fill="var(--fill-0, white)"
            id="Ellipse 39"
            r="0.5625"
          />
        </g>
      </svg>
    </div>
  );
}

function SelectionsCards1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0"
      data-name="Selections Cards"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Warning />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Success check">
          <circle
            cx="7.875"
            cy="7.875"
            fill="var(--fill-0, #FDCA5F)"
            id="Base"
            r="7.875"
          />
          <g id="icon">
            <rect
              fill="var(--fill-0, white)"
              height="5.625"
              id="Rectangle 1574"
              rx="0.5625"
              width="1.125"
              x="7.3125"
              y="6.1875"
            />
            <circle
              cx="7.875"
              cy="4.5"
              fill="var(--fill-0, white)"
              id="Ellipse 39"
              r="0.5625"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Format() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="format"
    >
      <SuccessCheck />
    </div>
  );
}

function SelectionsCards2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0"
      data-name="Selections Cards"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Format />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

export function Audit({ onAuditClick }: { onAuditClick?: () => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[22px] items-center justify-center p-[4px] relative rounded shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors"
      data-name="Audit"
      onClick={onAuditClick}
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Audit</p>
      </div>
      <SelectionsCards />
      <SelectionsCards1 />
      <SelectionsCards2 />
    </div>
  );
}
