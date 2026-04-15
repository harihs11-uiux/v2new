import svgPaths from "./svg-bzyw58z0q0";

interface FooterProps {
  partyName?: string;
  partyId?: string;
  iecCode?: string;
  gstinType?: string;
  panNo?: string;
}

function FooterField({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-white">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 w-full">
        <p className="leading-[18px] whitespace-pre-wrap">{label}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 w-full">
        <p className="leading-[18px] whitespace-pre-wrap">{value || '—'}</p>
      </div>
    </div>
  );
}

function VerticalDivider() {
  return (
    <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18.796875" } as React.CSSProperties}>
      <div className="flex-none h-full rotate-90">
        <div className="h-full relative w-[44px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
              <line stroke="var(--stroke-0, #545D76)" x2="44" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserModifiedIndicator() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #050E25)" r="5.5" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[18px]">User Modified</p>
      </div>
    </div>
  );
}

function MandatoryIndicator() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[11px]" data-name="Error">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g>
            <mask height="11" id="mask0_footer_err" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="11" width="11" />
            </mask>
            <g mask="url(#mask0_footer_err)">
              <path d={svgPaths.p32c90a00} fill="var(--fill-0, #F44545)" />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Mandatory</p>
      </div>
    </div>
  );
}

export default function Footer({ partyName, partyId, iecCode, gstinType, panNo }: FooterProps) {
  return (
    <div className="bg-[#2d364d] content-stretch flex items-center justify-between px-[12px] py-[16px] relative w-full shrink-0" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#545d76] border-t border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0">
          <FooterField label="Party Name" value={partyName || ''} />
          <VerticalDivider />
          <FooterField label="Party ID" value={partyId || ''} />
          <VerticalDivider />
          <FooterField label="IEC Code" value={iecCode || ''} />
          <VerticalDivider />
          <FooterField label="GSTIN Type" value={gstinType || ''} />
          <VerticalDivider />
          <FooterField label="PAN No." value={panNo || ''} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[265px]">
        <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
          <UserModifiedIndicator />
        </div>
        <div className="content-stretch flex gap-[52px] items-center relative shrink-0">
          <MandatoryIndicator />
        </div>
      </div>
    </div>
  );
}
