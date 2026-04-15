import svgPaths from "./svg-9p15up8gf7";

function ArrowDropdown() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown />
    </div>
  );
}

export default function Dropdown() {
  return (
    <div className="relative size-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center leading-[0] p-[4px] relative size-full">
          <ol className="basis-0 block font-['Inter:Regular',sans-serif] font-normal grow list-decimal min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap" start="1">
            <li className="ms-[21px]">
              <span className="leading-[18px]">Inv1 :3534334353</span>
            </li>
          </ol>
          <DropdownIcon />
        </div>
      </div>
    </div>
  );
}