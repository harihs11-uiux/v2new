import svgPaths from "./svg-hzfhbdpw53";

function AttachFile() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="attach_file">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="attach_file">
          <mask height="18" id="mask0_5817_4643" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5817_4643)">
            <path d={svgPaths.p771c900} fill="var(--fill-0, white)" id="attach_file_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <AttachFile />
    </div>
  );
}

function Cancel() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="cancel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="cancel">
          <mask height="18" id="mask0_5817_4651" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5817_4651)">
            <path d={svgPaths.p2bb39d70} fill="var(--fill-0, white)" id="cancel_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionIcon1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <Cancel />
    </div>
  );
}

function FilterDropdown() {
  return (
    <div className="bg-[#cfdeff] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <ActionIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-white">Loginissue.png</p>
      <ActionIcon1 />
    </div>
  );
}

function AttachFile1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="attach_file">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="attach_file">
          <mask height="18" id="mask0_5817_4643" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5817_4643)">
            <path d={svgPaths.p771c900} fill="var(--fill-0, white)" id="attach_file_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionIcon2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <AttachFile1 />
    </div>
  );
}

function Cancel1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="cancel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="cancel">
          <mask height="18" id="mask0_5817_4651" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5817_4651)">
            <path d={svgPaths.p2bb39d70} fill="var(--fill-0, white)" id="cancel_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionIcon3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Action Icon">
      <Cancel1 />
    </div>
  );
}

function FilterDropdown1() {
  return (
    <div className="bg-[#cfdeff] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[28px] shrink-0" data-name="Filter dropdown">
      <ActionIcon2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-white">Loginis...</p>
      <ActionIcon3 />
    </div>
  );
}

function RowOfChips() {
  return (
    <div className="content-start flex flex-wrap gap-[8px_6px] items-start relative shrink-0 w-full" data-name="Row Of Chips">
      <FilterDropdown />
      <FilterDropdown1 />
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_5814_2365" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5814_2365)">
            <path d={svgPaths.p771c900} fill="var(--fill-0, white)" id="attach_file" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons">
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

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.34)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative w-full">
          <IconLeft />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[18px]">Attach Files here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(56,116,255,0.4)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Submit</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Textfield() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col gap-[8px] items-start px-[14px] py-[12px] relative rounded-[8px] size-full" data-name="Textfield">
      <div aria-hidden="true" className="absolute border border-[#825ed7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <RowOfChips />
      <Frame />
    </div>
  );
}