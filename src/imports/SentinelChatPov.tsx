import imgAsset12 from "figma:asset/23ede0e5e2b2a7e8a2f17c11a0dca8fef11cbd46.png";

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0" data-name="Logo">
      <div className="relative shrink-0 size-[24px]" data-name="Asset 1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset12} />
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] h-[86px] relative rounded-[16px] shrink-0 w-full" data-name="Box">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[14px] py-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">All set! Please review your ticket details and submit to create the ticket.</p>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px relative" data-name="Message">
      <Box />
    </div>
  );
}

export default function SentinelChatPov() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative size-full" data-name="Sentinel Chat Pov">
      <Logo />
      <Message />
    </div>
  );
}