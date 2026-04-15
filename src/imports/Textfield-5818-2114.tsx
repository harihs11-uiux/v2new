function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.34)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[18px]">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(56,116,255,0.4)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[18px]">Create Ticket</p>
          </div>
        </div>
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">Ticket Summary</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
        <span className="leading-[18px]">{`Description : `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[18px]">I am having issue on my login</span>
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
        <span className="leading-[18px]">{`Attachments : `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[18px]">1 file added</span>
      </p>
      <Frame />
    </div>
  );
}