function Box() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] h-[50px] relative rounded-[16px] shrink-0 w-full" data-name="Box">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[14px] py-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">Connecting....</p>
        </div>
      </div>
    </div>
  );
}

export default function Message() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative size-full" data-name="Message">
      <Box />
    </div>
  );
}