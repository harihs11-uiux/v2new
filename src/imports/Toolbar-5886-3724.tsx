import svgPaths from "./svg-vv7c43wmzz";
import { imgToolbar } from "./svg-o2apf";

export default function Toolbar() {
  return (
    <div className="bg-[#2d364d] content-stretch flex items-center justify-between pr-[12px] py-[11px] relative size-full" data-name="Toolbar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-center leading-[0] pl-[12px] relative shrink-0" data-name="Leftside Controls">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Total Jobs">
          <p className="col-1 font-['Inter:Medium',sans-serif] font-medium leading-[18px] ml-0 mt-0 not-italic relative row-1 text-[14px] text-white">Total Party : 16</p>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
            <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons">
              <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Icon Skeleton 1">
                <div className="absolute left-0 size-[16px] top-0" data-name="filter_list">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="filter_list">
                      <mask height="16" id="mask0_5886_3889" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
                      </mask>
                      <g mask="url(#mask0_5886_3889)">
                        <path d={svgPaths.p8cd7480} fill="var(--fill-0, #3874FF)" id="filter_list_2" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] whitespace-nowrap">
            <p className="leading-[18px]">Add Filter</p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Right">
            <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons /No. of Icons/1/12 px/18 px">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[31.25%_18.75%]" data-name="expand_more">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 6.75">
                    <path d={svgPaths.p24768d00} fill="var(--fill-0, #3874FF)" id="expand_more" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Right Side Controls">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Toolbar Actions">
          <div className="bg-[#3874ff] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
              <p className="leading-[18px]">Create Party</p>
            </div>
            <div className="flex h-[8px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.1875" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[8px]" data-name="seperator-line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
                      <line id="seperator-line" stroke="var(--stroke-0, white)" strokeOpacity="0.4" x2="8" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[16px] relative shrink-0 w-[8px]" data-name="arrow">
              <div className="absolute bottom-[37.5%] flex items-center justify-center left-0 top-[37.5%] w-[8px]">
                <div className="flex-none h-[8px] rotate-90 w-[4px]">
                  <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-6px] mask-size-[8px_16px] relative size-full" data-name="arrow_right" style={{ maskImage: `url('${imgToolbar}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
                      <path d="M0 8V0L4 4L0 8Z" fill="var(--fill-0, white)" id="arrow_right" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}