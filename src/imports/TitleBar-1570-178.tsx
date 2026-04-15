import svgPaths from "./svg-h8986yhggo";

function Text({ progress }: { progress?: string }) {
  return (
    <div className="content-stretch flex flex-row items-center gap-3 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-white">Edit Invoice</p>
      {progress && (
        <div className="flex items-center gap-2">
            <span className="text-[#9497a1] text-[12px] font-medium">|</span>
            <span className="text-[#02B196] text-[12px] font-medium">Progress {progress} completed</span>
        </div>
      )}
    </div>
  );
}

function Heading({ progress }: { progress?: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Heading">
      <Text progress={progress} />
    </div>
  );
}

function Close({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80" 
      data-name="close"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_1565_48299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48299)">
            <path d={svgPaths.p4280c0} fill="var(--fill-0, #CDCFD3)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function TitleBar({ onClose, progress }: { onClose?: () => void; progress?: string }) {
  return (
    <div className="bg-[#10182c] relative w-full" data-name="Title Bar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="w-full">
        <div className="content-stretch flex items-center justify-between px-[12px] h-[48px] relative w-full">
          <Heading progress={progress} />
          <Close onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
