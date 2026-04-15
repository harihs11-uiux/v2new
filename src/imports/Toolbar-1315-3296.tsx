import svgPaths from "./svg-vmne24ehdg";

function Share() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_1315_4225" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1315_4225)">
            <path d={svgPaths.p71d9700} fill="var(--fill-0, #9497A1)" id="share" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3874ff] box-border content-stretch flex gap-1 items-center justify-center px-2 py-1 relative rounded shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Add Status</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function ToolbarActions() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-center relative shrink-0" data-name="Toolbar Actions">
      <Button1 />
    </div>
  );
}

function RightSideControls() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-end relative shrink-0" data-name="Right Side Controls">
      <Share />
      <Button />
      <ToolbarActions />
    </div>
  );
}

function ListToolbar() {
  return (
    <div className="basis-0 grow h-12 min-h-px min-w-px relative shrink-0" data-name="List Toolbar">
      <div aria-hidden="true" className="absolute border-0 border-[#eff0f1] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-12 items-center justify-between px-3 py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">Total Status : 8</p>
          </div>
          <RightSideControls />
        </div>
      </div>
    </div>
  );
}

export default function Toolbar() {
  return (
    <div className="bg-[#2d364d] content-stretch flex items-center justify-between relative size-full" data-name="Toolbar">
      <ListToolbar />
    </div>
  );
}