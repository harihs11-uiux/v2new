import React from 'react';
import svgPaths from "../../imports/svg-wx81yye35w";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

function ZoomOut() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Zoom out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Zoom out">
          <g id="icon">
            <mask height="16" id="mask0_5113_2686" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
            </mask>
            <g mask="url(#mask0_5113_2686)"></g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p2cb74d80} fill="var(--fill-0, #CDCFD3)" fillRule="evenodd" id="Line 107 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85px]" data-name="Slider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 16">
        <g id="Slider">
          <rect fill="var(--fill-0, #545D76)" height="2" id="Base" rx="1" width="85" y="7" />
          <rect fill="var(--fill-0, #3874FF)" height="2" id="Fill" rx="1" width="26.1875" y="7" />
          <circle cx="24.5564" cy="8" fill="var(--fill-0, #3874FF)" id="Ellipse 1" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="add_circle">
          <mask height="16" id="mask0_5113_2699" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5113_2699)">
            <path d={svgPaths.p17180a00} fill="var(--fill-0, #CDCFD3)" id="add_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <mask height="16" id="mask0_5113_2695" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5113_2695)">
            <path d={svgPaths.p135439f0} fill="var(--fill-0, #CDCFD3)" id="refresh" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Rotate() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Rotate">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <mask height="16" id="mask0_5113_2682" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5113_2682)">
            <path d={svgPaths.p126fee80} fill="var(--fill-0, #CDCFD3)" id="refresh" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Rotate1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Rotate">
      <Icon1 />
    </div>
  );
}

function Error() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 15.75">
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

function SelectionsCards({ count = 28 }: { count?: number }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Error1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">{count}</p>
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

function SelectionsCards1({ count = 28 }: { count?: number }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Warning />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">{count}</p>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 15.75">
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

function SelectionsCards2({ count = 28 }: { count?: number }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Selections Cards">
      <div aria-hidden="true" className="absolute border border-[#545d76] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Format />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">{count}</p>
    </div>
  );
}

function DownloadButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      className="bg-[rgba(56,116,255,0.1)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 hover:bg-[rgba(56,116,255,0.2)] transition-colors" 
      data-name="Download Button"
      onClick={onClick}
      title="Download"
    >
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 3V12M9 12L12 9M9 12L6 9" stroke="#3874FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12V14C3 15.1046 3.89543 16 5 16H13C14.1046 16 15 15.1046 15 14V12" stroke="#3874FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

interface AuditProps {
  errors?: number;
  warnings?: number;
  formatted?: number;
  onClick?: () => void;
}

function Audit({ errors = 28, warnings = 28, formatted = 28, onClick }: AuditProps) {
  return (
    <div 
      className="content-stretch flex gap-[8px] h-[22px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#32394c] transition-colors" 
      data-name="Audit"
      onClick={onClick}
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Audit</p>
      </div>
      <SelectionsCards count={errors} />
      <SelectionsCards1 count={warnings} />
      <SelectionsCards2 count={formatted} />
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      className="bg-[rgba(56,116,255,0.1)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 hover:bg-[rgba(56,116,255,0.2)] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px]">Close</p>
      </div>
    </button>
  );
}

function ToolbarActions({ onClose, onSave }: { onClose?: () => void, onSave?: () => void }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    if (onSave) {
      setOpen(true);
    } else if (onClose) {
      onClose();
    }
  };

  const handleSaveAndQuit = () => {
    if (onSave) onSave();
    setOpen(false);
    if (onClose) onClose();
  };

  const handleDontSave = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Toolbar Actions">
        <Button onClick={handleClose} />
      </div>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
            <AlertDialogDescription>
              Do you want to save the job before quitting?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDontSave} className="bg-destructive hover:bg-destructive/90">
              Don't Save
            </AlertDialogAction>
            <AlertDialogAction onClick={handleSaveAndQuit}>
              Save & Quit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

interface ChecklistToolbarProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRotateLeft?: () => void;
  onRotateRight?: () => void;
  auditStats?: {
    errors: number;
    warnings: number;
    formatted: number;
  };
  onAuditClick?: () => void;
  onClose?: () => void;
  onSave?: () => void;
  onDownload?: () => void;
}

function ZoomPage({ zoomLevel, onZoomIn, onZoomOut }: { zoomLevel: number, onZoomIn: () => void, onZoomOut: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Zoom Page">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <button className="cursor-pointer hover:opacity-80" onClick={onZoomOut}>
          <ZoomOut />
        </button>
        <Slider />
        <button className="cursor-pointer hover:opacity-80" onClick={onZoomIn}>
          <Add />
        </button>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        {Math.round(zoomLevel * 100)} %
      </p>
    </div>
  );
}

export default function ChecklistToolbar({ 
  zoomLevel, 
  onZoomIn, 
  onZoomOut, 
  onRotateLeft, 
  onRotateRight,
  auditStats,
  onAuditClick,
  onClose,
  onSave,
  onDownload
}: ChecklistToolbarProps) {
  return (
    <div className="bg-[#2d364d] relative w-full h-[48px]" data-name="Toolbar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-0 relative size-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <ZoomPage zoomLevel={zoomLevel} onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
            <button className="cursor-pointer hover:opacity-80" onClick={onRotateLeft}>
              <Rotate />
            </button>
            <button className="cursor-pointer hover:opacity-80" onClick={onRotateRight}>
              <Rotate1 />
            </button>
          </div>
          
          <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Right Side Controls">
            <DownloadButton onClick={onDownload} />
            
            <Audit 
              errors={auditStats?.errors} 
              warnings={auditStats?.warnings} 
              formatted={auditStats?.formatted}
              onClick={onAuditClick}
            />

            <ToolbarActions onClose={onClose} onSave={onSave} />
          </div>
        </div>
      </div>
    </div>
  );
}