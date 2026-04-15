import React from 'react';
import { Info, X } from 'lucide-react';

interface HsnInfoData {
  hsnCode: string;
  isFree: boolean;
  ccr: string;
  description: string;
  antidumpingDuty: string;
  cvd: string;
  singleWindowInfo: { srNo: number; code: string; description: string }[];
  supportingDocuments: { srNo: number; code: string; description: string }[];
  saptaFta: { ntfnName: string; notification: string; srNo: string }[];
}

// Mock HSN data lookup
const HSN_DATA: Record<string, HsnInfoData> = {
  '38089199': {
    hsnCode: '38089199',
    isFree: true,
    ccr: 'IMPORT UNDER THIS CTI ARE SUBJECT TO ITC HS POLICY CONDITION NOS 1',
    description: 'Insecticides, fungicides, herbicides – Other',
    antidumpingDuty: '017/2025 – 1 – 1 – 1',
    cvd: '005/2024 – 1 – CN',
    singleWindowInfo: [
      { srNo: 1, code: 'CDRUG', description: 'Drug Controller' },
      { srNo: 2, code: 'CHEM', description: 'Chemicals' },
    ],
    supportingDocuments: [
      { srNo: 1, code: '911CI3', description: 'Import Permit for Non-Insecticidal use' },
      { srNo: 2, code: '0030DC', description: 'Batch Release Certificate' },
      { srNo: 3, code: '0110DC', description: 'Label of Consignment' },
      { srNo: 4, code: '101DC1', description: 'Registration Certificate (Drugs)' },
      { srNo: 5, code: '101DC2', description: 'Registration Certificate (Cosmetics)' },
      { srNo: 6, code: '861000', description: 'Certificate of origin' },
      { srNo: 7, code: '0010DC', description: 'Certificate of analysis – Drug' },
    ],
    saptaFta: [
      { ntfnName: 'BCD', notification: '046/2011', srNo: '427(II)' },
      { ntfnName: 'BCD', notification: '050/2018', srNo: 'A463' },
      { ntfnName: 'BCD', notification: '152/2009', srNo: '302' },
      { ntfnName: 'BCD', notification: '068/2012', srNo: '68(I)' },
      { ntfnName: 'BCD', notification: '096/2008', srNo: '(i)' },
      { ntfnName: 'BCD', notification: '068/2012', srNo: '72(I)' },
      { ntfnName: 'BCD', notification: '099/11', srNo: 'I' },
      { ntfnName: 'BCD', notification: '010/2008', srNo: '148' },
      { ntfnName: 'BCD', notification: '041/2025', srNo: 'I3248' },
    ],
  },
  '38063000': {
    hsnCode: '38063000',
    isFree: false,
    ccr: 'IMPORT UNDER THIS CTI ARE SUBJECT TO ITC HS POLICY CONDITION NOS 2',
    description: 'Rosin and resin acids, and derivatives thereof – Other',
    antidumpingDuty: '022/2024 – 1 – 2 – 1',
    cvd: '003/2024 – 1 – IN',
    singleWindowInfo: [
      { srNo: 1, code: 'CHEM', description: 'Chemicals' },
    ],
    supportingDocuments: [
      { srNo: 1, code: '861000', description: 'Certificate of origin' },
      { srNo: 2, code: '0030DC', description: 'Batch Release Certificate' },
    ],
    saptaFta: [
      { ntfnName: 'BCD', notification: '046/2011', srNo: '427(II)' },
      { ntfnName: 'BCD', notification: '050/2018', srNo: 'A463' },
    ],
  },
};

// Default data for any other HSN code (8+ digits)
const getDefaultHsnData = (code: string): HsnInfoData => ({
  hsnCode: code,
  isFree: false,
  ccr: 'STANDARD IMPORT CONDITIONS APPLY',
  description: 'Classification pending verification',
  antidumpingDuty: '—',
  cvd: '—',
  singleWindowInfo: [],
  supportingDocuments: [],
  saptaFta: [],
});

interface HsnInfoSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  hsnCode: string;
}

export default function HsnInfoSidebar({ isOpen, onClose, hsnCode }: HsnInfoSidebarProps) {
  if (!isOpen || !hsnCode) return null;

  const data = HSN_DATA[hsnCode] || getDefaultHsnData(hsnCode);

  return (
    <div className="flex flex-col h-full w-[380px] shrink-0 bg-white border-l border-[#D0D5E3] shadow-[-2px_0_8px_rgba(0,0,0,0.06)] z-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 h-[44px] shrink-0 bg-[#EBF0FF] border-b border-[#D0D5E3]">
        <Info className="w-[18px] h-[18px] text-[#3874FF]" />
        <span className="text-[14px] text-[#050E25]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>HSN Info</span>
        <div className="flex-1" />
        <button
          onClick={onClose}
          className="w-[24px] h-[24px] flex items-center justify-center rounded hover:bg-[#D0D5E3] transition-colors"
        >
          <X className="w-4 h-4 text-[#626776]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col px-4 py-3 gap-4">
          {/* HSN Code */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif" }}>HSN Code</span>
            <div className="flex items-center gap-3">
              <span className="text-[20px] text-[#050E25]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{data.hsnCode}</span>
              {data.isFree && (
                <span className="px-2 py-0.5 rounded text-[12px] bg-[#E6F9F5] text-[#00B196] border border-[#B3EDE3]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Free</span>
              )}
            </div>
          </div>

          {/* CCR */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif" }}>CCR</span>
            <span className="text-[13px] text-[#3874FF]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, lineHeight: '18px' }}>{data.ccr}</span>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif" }}>Description</span>
            <span className="text-[13px] text-[#050E25]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '18px' }}>{data.description}</span>
          </div>

          {/* Antidumping Duty & CVD */}
          <div className="flex gap-6">
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-[11px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif" }}>Antidumping Duty</span>
              <span className="text-[13px] text-[#050E25]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{data.antidumpingDuty}</span>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-[11px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif" }}>CVD</span>
              <span className="text-[13px] text-[#050E25]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{data.cvd}</span>
            </div>
          </div>

          {/* Single Window Info */}
          {data.singleWindowInfo.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-[12px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif" }}>Single Window Info</span>
              <div className="border border-[#D0D5E3] rounded-[4px] overflow-hidden">
                <div className="flex bg-[#F5F7FA] border-b border-[#D0D5E3]">
                  <div className="w-[50px] px-2 py-[6px] text-[11px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Sr. No.</div>
                  <div className="w-[80px] px-2 py-[6px] text-[11px] text-[#626776] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Code</div>
                  <div className="flex-1 px-2 py-[6px] text-[11px] text-[#626776] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Description</div>
                </div>
                {data.singleWindowInfo.map((row) => (
                  <div key={row.srNo} className="flex border-b border-[#D0D5E3] last:border-b-0">
                    <div className="w-[50px] px-2 py-[6px] text-[12px] text-[#050E25]" style={{ fontFamily: "'Inter', sans-serif" }}>{row.srNo}</div>
                    <div className="w-[80px] px-2 py-[6px] text-[12px] text-[#050E25] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif" }}>{row.code}</div>
                    <div className="flex-1 px-2 py-[6px] text-[12px] text-[#050E25] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif" }}>{row.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Supporting Documents */}
          {data.supportingDocuments.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-[12px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif" }}>Supporting Documents</span>
              <div className="border border-[#D0D5E3] rounded-[4px] overflow-hidden">
                <div className="flex bg-[#F5F7FA] border-b border-[#D0D5E3]">
                  <div className="w-[40px] px-2 py-[6px] text-[11px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Sr. No.</div>
                  <div className="w-[70px] px-2 py-[6px] text-[11px] text-[#626776] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Code</div>
                  <div className="flex-1 px-2 py-[6px] text-[11px] text-[#626776] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Description</div>
                </div>
                {data.supportingDocuments.map((row) => (
                  <div key={row.srNo} className="flex border-b border-[#D0D5E3] last:border-b-0">
                    <div className="w-[40px] px-2 py-[6px] text-[12px] text-[#050E25]" style={{ fontFamily: "'Inter', sans-serif" }}>{row.srNo}</div>
                    <div className="w-[70px] px-2 py-[6px] text-[12px] text-[#050E25] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif" }}>{row.code}</div>
                    <div className="flex-1 px-2 py-[6px] text-[12px] text-[#050E25] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '16px' }}>{row.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sapta / FTA (BCD) */}
          {data.saptaFta.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-[12px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif" }}>Sapta / FTA (BCD)</span>
              <div className="border border-[#D0D5E3] rounded-[4px] overflow-hidden">
                <div className="flex bg-[#F5F7FA] border-b border-[#D0D5E3]">
                  <div className="w-[80px] px-2 py-[6px] text-[11px] text-[#626776]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Ntfn. Name</div>
                  <div className="w-[100px] px-2 py-[6px] text-[11px] text-[#626776] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Notification</div>
                  <div className="flex-1 px-2 py-[6px] text-[11px] text-[#626776] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Sr. No.</div>
                </div>
                {data.saptaFta.map((row, idx) => (
                  <div key={idx} className="flex border-b border-[#D0D5E3] last:border-b-0">
                    <div className="w-[80px] px-2 py-[6px] text-[12px] text-[#050E25]" style={{ fontFamily: "'Inter', sans-serif" }}>{row.ntfnName}</div>
                    <div className="w-[100px] px-2 py-[6px] text-[12px] text-[#050E25] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif" }}>{row.notification}</div>
                    <div className="flex-1 px-2 py-[6px] text-[12px] text-[#050E25] border-l border-[#D0D5E3]" style={{ fontFamily: "'Inter', sans-serif" }}>{row.srNo}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
