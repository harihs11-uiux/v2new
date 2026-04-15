import svgPaths from "./svg-hr12wpbfvv";

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 42083">
          <circle cx="12" cy="12" fill="var(--fill-0, #3874FF)" id="Ellipse 2" r="12" />
          <path d={svgPaths.pee6abb0} fill="var(--fill-0, white)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0" data-name="Logo">
      <Group />
    </div>
  );
}

function Box() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] h-[104px] relative rounded-[16px] shrink-0 w-full" data-name="Box">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[14px] py-[16px] relative size-full">
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">{`Hi! I'm Nagaraj`}</p>
            <p className="mb-0">&nbsp;</p>
            <p>I’m here to help. How can I assist you today?</p>
          </div>
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