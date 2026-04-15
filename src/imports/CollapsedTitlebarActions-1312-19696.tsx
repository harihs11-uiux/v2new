import svgPaths from "./svg-w9wmr5e79y";

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="double_arrow">
          <mask height="18" id="mask0_1312_19704" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1312_19704)">
            <path d={svgPaths.p2c139180} fill="var(--fill-0, #9497A1)" id="double_arrow_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="No. of Icons">
      <Icon />
    </div>
  );
}

export default function CollapsedTitlebarActions() {
  return (
    <div className="content-stretch flex items-start justify-start relative size-full" data-name="Collapsed Titlebar Actions">
      <NoOfIcons />
    </div>
  );
}