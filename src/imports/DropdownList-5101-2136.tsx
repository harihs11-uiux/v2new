function SupportingDocuments() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="Supporting Documents">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Reimport Details</p>
        </div>
      </div>
    </div>
  );
}

function Statements() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="Statements">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Section 65</p>
        </div>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="Option 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Single Window Info</p>
        </div>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="Option 4">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Single Window production</p>
        </div>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="Option 5">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Single Window Constituent</p>
        </div>
      </div>
    </div>
  );
}

function Option3() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="Option 6">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Single Window Control</p>
        </div>
      </div>
    </div>
  );
}

function Option4() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="Option 7">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Statements</p>
        </div>
      </div>
    </div>
  );
}

function Option5() {
  return (
    <div className="bg-[#3874ff] relative shrink-0 w-full" data-name="Option 8">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Supporting Documents</p>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="List">
      <SupportingDocuments />
      <Statements />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
    </div>
  );
}

export default function DropdownList() {
  return (
    <div className="bg-[#050e25] content-stretch flex items-start px-0 py-[8px] relative rounded-[4px] shadow-[0px_0px_11px_0px_rgba(52,60,79,0.46)] size-full" data-name="Dropdown List">
      <List />
    </div>
  );
}