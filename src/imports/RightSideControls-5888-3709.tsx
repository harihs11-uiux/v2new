import { imgArrowRight } from "./svg-1yi6e";

export default function RightSideControls() {
  return (
    <div className="content-stretch flex items-center justify-end relative size-full" data-name="Right Side Controls">
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
                <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-6px] mask-size-[8px_16px] relative size-full" data-name="arrow_right" style={{ maskImage: `url('${imgArrowRight}')` }}>
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
  );
}