import svgPaths from "./svg-5m65wy96qb";

function Done() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="done">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <mask height="16" id="mask0_5508_277" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5508_277)">
            <path d={svgPaths.p3c33200} fill="var(--fill-0, #3874FF)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Action Icon">
      <Done />
    </div>
  );
}

export default function ChipAdd() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] size-full" data-name="Chip add">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <ActionIcon />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">935003535</p>
    </div>
  );
}