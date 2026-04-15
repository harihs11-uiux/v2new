import svgPaths from "./svg-c8pf7hsgw8";
import imgFrame42089 from "figma:asset/99e55445d88486cd505da6eab4df04addb36a57d.png";
import { imgArrowBack2 } from "./svg-qy9oa";

function ArrowBack() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+1px)] top-[calc(50%-0.5px)]" data-name="arrow_back_2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[16.922px] items-center justify-center left-[calc(50%+1px)] top-[calc(50%-0.5px)] w-[13.296px]">
        <div className="flex-none rotate-180">
          <div className="h-[16.922px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.352px_-3.539px] mask-size-[24px_24px] relative w-[13.296px]" data-name="arrow_back_2" style={{ maskImage: `url('${imgArrowBack2}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2957 16.9217">
              <path d={svgPaths.p32e56c00} fill="var(--fill-0, white)" id="arrow_back_2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+0.5px)]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[44px] top-[calc(50%+0.5px)]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" fill="var(--fill-0, #3874FF)" id="Ellipse 3" r="22" />
        </svg>
      </div>
      <ArrowBack />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[139px] mb-[-1px] overflow-clip relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-0.06%] max-w-none top-[0.37%] w-[123.22%]" src={imgFrame42089} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
      </div>
      <Group />
    </div>
  );
}

function Alarm() {
  return (
    <div className="h-[17.333px] relative shrink-0 w-[16px]" data-name="alarm">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.3333">
        <g id="alarm">
          <mask height="18" id="mask0_5741_33" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="17.3333" id="Bounding box" width="16" y="0.00016278" />
          </mask>
          <g mask="url(#mask0_5741_33)">
            <path d={svgPaths.p34e90600} fill="var(--fill-0, #CDCFD3)" id="alarm_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0">
      <Alarm />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">1-min tutorial</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] mb-[-1px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <Frame2 />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
            <p className="leading-[16px] whitespace-pre-wrap">How to Create a job?</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[16px] size-full">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] size-full">
        <Frame3 />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}