import svgPaths from "./svg-xy111e2unq";

interface ToolbarProps {
  onPdfClick?: () => void;
  onClose?: () => void;
}

function Button() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Nav</p>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-[9px] py-0 relative shrink-0 w-[76px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Label() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-end px-1 py-0 relative rounded-sm shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">CL 01</p>
      </div>
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1307_8912)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #9497A1)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1307_8912">
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

function Dropdown() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-start leading-[0] p-[4px] relative shrink-0" data-name="Dropdown">
      <div className="font-['Inter:Regular',_sans-serif] font-normal not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] leading-[18px] overflow-inherit whitespace-pre">{`Checklist `}</p>
      </div>
      <DropdownIcon />
    </div>
  );
}

function PdfIcon() {
  return (
    <div className="absolute inset-[7.25%_13.31%_8.19%_14.19%]" data-name="PDF icon">
      <div className="absolute bottom-[-2.63%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
          <g id="PDF icon">
            <path d={svgPaths.p23bc8c00} fill="var(--fill-0, #9597A1)" id="Path" />
            <path d={svgPaths.pe630c0} id="Path_2" stroke="var(--stroke-0, #9597A1)" strokeWidth="0.8" />
            <path d={svgPaths.p2d669f0} fill="var(--fill-0, #9597A1)" id="Path_3" />
            <path clipRule="evenodd" d={svgPaths.pfc1ef00} fill="var(--fill-0, #2D364D)" fillRule="evenodd" id="Shape" />
            <path clipRule="evenodd" d={svgPaths.p3ad3c880} fill="var(--fill-0, #2D364D)" fillRule="evenodd" id="Shape_2" />
            <path d={svgPaths.p1a059540} fill="var(--fill-0, #2D364D)" id="Path_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Pdf({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Pdf"
      onClick={onClick}
    >
      <PdfIcon />
    </div>
  );
}

function LeftsideControls({ onPdfClick }: { onPdfClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-3 h-12 items-center justify-start left-0 top-0" data-name="Leftside Controls">
      <Block />
      <Label />
      <div className="flex h-[26px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[26px]" data-name="Seperator">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(80, 87, 103, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 1">
                <line id="Seperator" stroke="var(--stroke-0, #505767)" x2="26" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Dropdown />
      <Pdf onClick={onPdfClick} />
    </div>
  );
}

function RightSideControls() {
  return <div className="absolute content-stretch flex gap-3 h-6 items-center justify-end right-[92px] top-[13px] w-[354px]" data-name="Right Side Controls" />;
}

function Error() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Error">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #F44545)" id="Ellipse 37" r="7.875" />
          <g id="Vector">
            <path d={svgPaths.p2e6e6f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e6e6f00} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Error1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="error">
      <Error />
    </div>
  );
}

function SelectionsCards() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Error1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="warning">
          <path d={svgPaths.p25951b00} fill="var(--fill-0, #E97330)" id="Polygon 1" />
          <rect fill="var(--fill-0, white)" height="5.625" id="Rectangle 1574" rx="0.5625" width="1.125" x="8.4375" y="7.875" />
          <circle cx="9" cy="6.1875" fill="var(--fill-0, white)" id="Ellipse 39" r="0.5625" />
        </g>
      </svg>
    </div>
  );
}

function SelectionsCards1() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Warning />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Success check">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #FDCA5F)" id="Base" r="7.875" />
          <g id="icon">
            <rect fill="var(--fill-0, white)" height="5.625" id="Rectangle 1574" rx="0.5625" width="1.125" x="7.3125" y="6.1875" />
            <circle cx="7.875" cy="4.5" fill="var(--fill-0, white)" id="Ellipse 39" r="0.5625" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Format() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="format">
      <SuccessCheck />
    </div>
  );
}

function SelectionsCards2() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Format />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function Audit() {
  return (
    <div className="relative box-border content-stretch flex gap-2 h-[22px] items-center justify-center" data-name="Audit">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Audit</p>
      </div>
      <SelectionsCards />
      <SelectionsCards1 />
      <SelectionsCards2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#cf3b3b] box-border content-stretch flex gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Reject</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#00d0b0] box-border content-stretch flex gap-1 items-center justify-center px-2 py-1 relative rounded shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Accept</p>
      </div>
    </div>
  );
}

function ToolbarActions() {
  return (
    <div className="absolute content-stretch flex gap-3 items-center justify-center left-[485px] top-0" data-name="Toolbar Actions">
      <Button1 />
      <Button2 />
    </div>
  );
}

function ZoomOut() {
  return (
    <div className="relative shrink-0 size-4" data-name="Zoom out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Zoom out">
          <g id="icon">
            <mask height="16" id="mask0_1307_8903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
            </mask>
            <g mask="url(#mask0_1307_8903)"></g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p1302d900} fill="var(--fill-0, #9497A1)" fillRule="evenodd" id="Line 107 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-4 relative shrink-0 w-[85px]" data-name="Slider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 16">
        <g id="Slider">
          <rect fill="var(--fill-0, #9497A1)" height="2" id="Base" rx="1" width="85" y="7" />
          <rect fill="var(--fill-0, #3874FF)" height="2" id="Fill" rx="1" width="26.1875" y="7" />
          <circle cx="24.5564" cy="8" fill="var(--fill-0, #3874FF)" id="Ellipse 1" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-4" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="add_circle">
          <mask height="16" id="mask0_1307_8936" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1307_8936)">
            <path d={svgPaths.p17180a00} fill="var(--fill-0, #9497A1)" id="add_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <ZoomOut />
      <Slider />
      <Add />
    </div>
  );
}

function IconSkeleton3() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Icon Skeleton 3">
      <Frame27 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">100 %</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <mask height="16" id="mask0_1307_8932" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1307_8932)">
            <path d={svgPaths.p5202000} fill="var(--fill-0, #9497A1)" id="refresh" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 2">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <mask height="16" id="mask0_1307_8928" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1307_8928)">
            <path d={svgPaths.p107e2600} fill="var(--fill-0, #9497A1)" id="refresh" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <Icon3 />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="No. of Icons">
      <IconSkeleton3 />
      <IconSkeleton2 />
      <IconSkeleton4 />
    </div>
  );
}

function ToolbarIcons() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="Toolbar Icons">
      <NoOfIcons />
    </div>
  );
}

function RightSideControls1() {
  return (
    <div className="relative content-stretch flex gap-3 items-center justify-start" data-name="Right Side Controls">
      <ToolbarIcons />
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative bg-[rgba(56,116,255,0.1)] box-border content-stretch flex gap-2 h-6 items-center justify-center px-2 py-1 rounded w-auto cursor-pointer hover:bg-[rgba(56,116,255,0.2)] transition-colors z-50" 
      data-name="Button"
      onClick={() => {
        console.log("Close button clicked");
        if (onClick) onClick();
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Close Invoice</p>
      </div>
    </div>
  );
}

function Frame42685({ onPdfClick, onClose }: { onPdfClick?: () => void; onClose?: () => void }) {
  return (
    <div className="absolute h-[26px] right-3 top-[11px] w-auto flex items-center justify-end gap-3">
      <RightSideControls1 />
      <Audit />
      <Button3 onClick={onClose} />
    </div>
  );
}

function ListToolbar({ onPdfClick, onClose }: { onPdfClick?: () => void; onClose?: () => void }) {
  return (
    <div className="absolute bg-[#2d364d] h-12 left-0 right-0 top-0 border-b border-[#505767]" data-name="List Toolbar">
      <div aria-hidden="true" className="absolute border-0 border-[#505767] border-solid inset-0 pointer-events-none" />
      <LeftsideControls onPdfClick={onPdfClick} />
      <RightSideControls />
      <Frame42685 onPdfClick={onPdfClick} onClose={onClose} />
    </div>
  );
}

function Toolbar({ onPdfClick, onClose }: { onPdfClick?: () => void; onClose?: () => void }) {
  return (
    <div className="absolute h-12 left-[76px] right-0 top-0" data-name="Toolbar">
      <ListToolbar onPdfClick={onPdfClick} onClose={onClose} />
    </div>
  );
}

function Frame42675() {
  return (
    <div className="absolute bg-[#242c40] h-12 left-0 top-0 w-[76px] border-b border-[#505767]">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex gap-2 items-center justify-center left-0 px-2 py-1 rounded top-3 w-[75px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Versions</p>
      </div>
    </div>
  );
}

function Frame42676() {
  return (
    <div className="absolute h-12 left-0 top-0 w-[76px]">
      <Frame42675 />
      <Button4 />
    </div>
  );
}

export default function Toolbar1309({ onPdfClick, onClose }: ToolbarProps) {
  return (
    <div className="relative size-full" data-name="Toolbar">
      <Toolbar onPdfClick={onPdfClick} onClose={onClose} />
      <Frame42676 />
    </div>
  );
}