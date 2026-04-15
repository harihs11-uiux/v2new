import svgPaths from "./svg-x1tjegafbd";
import { imgAddCircle } from "./svg-8zh2w";

function AddCircle() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[18px_18px]" data-name="add_circle" style={{ maskImage: `url('${imgAddCircle}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="add_circle">
          <mask height="18" id="mask0_1545_2123" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1545_2123)">
            <path d={svgPaths.p2027f100} fill="var(--fill-0, #3874FF)" id="add_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <AddCircle />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons />
    </div>
  );
}

export default function Button() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative size-full">
          <IconLeft />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">Add</p>
          </div>
        </div>
      </div>
    </div>
  );
}