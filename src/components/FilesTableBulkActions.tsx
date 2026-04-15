import React from 'react';
import svgPaths from "../imports/svg-fafqbj2ww6";

function SuccessCheck() {
  return (
    <div className="relative size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 15.75">
        <g id="Success check">
          <circle cx="7.875" cy="7.875" fill="#3874FF" id="Base" r="7.875" />
          <g id="icon">
            <rect fill="white" height="5.625" id="Rectangle 1574" rx="0.5625" width="1.125" x="7.3125" y="6.1875" />
            <circle cx="7.875" cy="4.5" fill="white" id="Ellipse 39" r="0.5625" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MergeIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_merge" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" width="18" />
          </mask>
          <g mask="url(#mask0_merge)">
            <path d={svgPaths.p304c5000} fill="#CDCFD3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SignFilesIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_sign" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" width="18" />
          </mask>
          <g mask="url(#mask0_sign)">
            <path d={svgPaths.p3e097d00} fill="#CDCFD3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SignatureRequestIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_sig_req" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" width="18" />
          </mask>
          <g mask="url(#mask0_sig_req)">
            <path d={svgPaths.p13d8bb00} fill="#CDCFD3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MappingIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_mapping" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#CDCFD3" height="18" width="18" />
          </mask>
          <g mask="url(#mask0_mapping)">
            <path clipRule="evenodd" d={svgPaths.p3ec95000} fill="#CDCFD3" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function UploadedIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_uploaded" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" width="18" />
          </mask>
          <g mask="url(#mask0_uploaded)">
            <path d={svgPaths.p1911a80} fill="#CDCFD3" />
            <path d={svgPaths.p3a484b00} fill="#CDCFD3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_delete" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" width="18" />
          </mask>
          <g mask="url(#mask0_delete)">
            <path d={svgPaths.p5ce8b80} fill="#CF3B3B" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface FilesTableBulkActionsProps {
  selectedCount: number;
  onAction?: (action: string) => void;
}

export function FilesTableBulkActions({ selectedCount, onAction }: FilesTableBulkActionsProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="bg-[#050e25] rounded-[4px] h-[34px] inline-flex items-center px-1 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.5)] border border-[#545D76]/30">
      {/* Selected Indicator */}
      <div className="flex items-center gap-1 px-2 shrink-0">
        <SuccessCheck />
        <span className="text-[#3874ff] text-[14px] font-semibold whitespace-nowrap">
          {selectedCount} selected
        </span>
      </div>

      {/* Separator */}
      <div className="h-[20px] w-px bg-[#545D76] mx-1 shrink-0" />

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button 
          onClick={() => onAction?.('merge')}
          className="flex items-center gap-2 px-2 py-1 bg-[#242c40] shadow-[0px_0px_11px_1px_#272d3f] hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group"
        >
          <MergeIcon />
          <span className="text-[14px] font-semibold group-hover:text-white transition-colors">Merge</span>
        </button>

        <button 
          onClick={() => onAction?.('sign_files')}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group"
        >
          <SignFilesIcon />
          <span className="text-[14px] font-semibold group-hover:text-white transition-colors">Sign Files</span>
        </button>

        <button 
          onClick={() => onAction?.('send_signature_request')}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group"
        >
          <SignatureRequestIcon />
          <span className="text-[14px] font-semibold group-hover:text-white transition-colors">Send Signature Request</span>
        </button>
        
        <button 
          onClick={() => onAction?.('mapping')}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group"
        >
          <MappingIcon />
          <span className="text-[14px] font-semibold group-hover:text-white transition-colors">Mapping</span>
        </button>

        <button 
          onClick={() => onAction?.('uploaded_to_esanchit')}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-white whitespace-nowrap outline-none group"
        >
          <UploadedIcon />
          <span className="text-[14px] font-semibold group-hover:text-white transition-colors">Uploaded to E-sanchit</span>
        </button>

        <button 
          onClick={() => onAction?.('delete')}
          className="flex items-center gap-2 px-2 py-1 hover:bg-[#3874ff] rounded transition-colors text-[#cf3b3b] hover:text-white whitespace-nowrap outline-none group"
        >
          <DeleteIcon />
          <span className="text-[14px] font-semibold transition-colors">Delete</span>
        </button>
      </div>
    </div>
  );
}
