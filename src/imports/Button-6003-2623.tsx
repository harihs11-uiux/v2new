export default function Button() {
  return (
    <div className="bg-[rgba(56,116,255,0.1)] relative rounded-[4px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] whitespace-nowrap">
            <p className="leading-[18px]">Edit Data</p>
          </div>
        </div>
      </div>
    </div>
  );
}