import svgPaths from "./svg-p9punt5lq";

function Error() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 15.75">
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

function SelectionsCards() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Error1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">28</p>
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

function SelectionsCards1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Warning />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">28</p>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 15.75">
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

function SelectionsCards2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Format />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">28</p>
    </div>
  );
}

function Audit() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Audit">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Audit</p>
      </div>
      <SelectionsCards />
      <SelectionsCards1 />
      <SelectionsCards2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(56,116,255,0.1)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px]">Close</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3874ff] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Save</p>
      </div>
    </div>
  );
}

function ToolbarActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Toolbar Actions">
      <Button />
      <Button1 />
    </div>
  );
}

export default function RightSideControls() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative size-full" data-name="Right Side Controls">
      <Audit />
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[26px]" data-name="Seperator">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(84, 93, 118, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 1">
                  <line id="Seperator" stroke="var(--stroke-0, #545D76)" x2="26" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToolbarActions />
    </div>
  );
}