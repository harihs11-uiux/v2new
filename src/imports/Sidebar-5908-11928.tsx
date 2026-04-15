import svgPaths from "./svg-gfyr8u8iqt";
import { imgAddCircle } from "./svg-95nsq";

function SidebarCollapsedTitlebar() {
  return (
    <div className="bg-[#242c40] h-[53px] relative shrink-0 w-[54px]" data-name="Sidebar Collapsed  Titlebar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-1/2 not-italic text-[#cdcfd3] text-[14px] text-center top-[17px] w-[50px] whitespace-pre-wrap">Tot : 01</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AddCircle() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[18px_18px]" data-name="add_circle" style={{ maskImage: `url('${imgAddCircle}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="add_circle">
          <mask height="18" id="mask0_5908_11964" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5908_11964)">
            <path d={svgPaths.p2027f100} fill="var(--fill-0, white)" id="add_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Left">
      <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons">
        <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
          <AddCircle />
        </div>
      </div>
    </div>
  );
}

function CollapsedSectionCount() {
  return (
    <div className="bg-[#242c40] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px overflow-x-clip overflow-y-auto py-[12px] relative w-full" data-name="Collapsed Section Count">
      <div className="bg-[#242c40] relative rounded-[4px] shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="bg-[#3874ff] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
              <IconLeft />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#242c40] content-stretch flex items-center px-[8px] relative rounded-[4px] shrink-0" data-name="Header">
        <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
          <div className="bg-[#242c40] content-stretch flex flex-col items-start relative shrink-0" data-name="Card List Collapsed">
            <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[50px]" data-name="Collapsed Card">
              <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_11px_0px_#272d3f]" />
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-[32px]" data-name="Collapsed Card Title">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px]">Br : 01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigatingSections() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-[52px]" data-name="Navigating Sections">
      <CollapsedSectionCount />
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="bg-[#242c40] flex-[1_0_0] min-h-px min-w-px relative" data-name="Sidebar Skeleton">
      <div className="content-stretch flex flex-col h-full items-center overflow-clip px-[12px] relative rounded-[inherit] bg-[#00000000]">
        <SidebarCollapsedTitlebar />
        <NavigatingSections />
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Sidebar">
      <SidebarSkeleton />
    </div>
  );
}