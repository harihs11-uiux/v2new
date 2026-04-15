interface CollapsedCardProps {
  isActive?: boolean;
  onClick?: () => void;
  label?: string;
}

function CollapsedCardTitle({ isActive, label = "CL 01" }: { isActive?: boolean; label?: string }) {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0" data-name="Collapsed Card Title">
      <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${
        isActive ? 'text-[#ffffff]' : 'text-[#CDCFD3]'
      }`}>
        <p className="leading-[20px] whitespace-pre">{label}</p>
      </div>
    </div>
  );
}

export default function CollapsedCard({ isActive = false, onClick, label = "CL 01" }: CollapsedCardProps) {
  return (
    <div 
      className={`bg-[#32394c] relative rounded size-full cursor-pointer transition-all duration-200 ${
        isActive ? 'border border-[#3874ff] border-solid' : ''
      }`} 
      data-name="Collapsed Card"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded shadow-[0px_0px_13px_1px_rgba(26,38,120,0.08)]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative size-full">
          <CollapsedCardTitle isActive={isActive} label={label} />
        </div>
      </div>
    </div>
  );
}