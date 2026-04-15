function UserQuestion() {
  return (
    <div className="bg-[rgba(255,255,255,0.77)] content-stretch flex h-[48px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0" data-name="User Question">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] max-w-[200px] not-italic relative shrink-0 text-[#050e25] text-[14px]">Chat Support</p>
    </div>
  );
}

export default function UserPov() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative size-full" data-name="User Pov">
      <UserQuestion />
    </div>
  );
}