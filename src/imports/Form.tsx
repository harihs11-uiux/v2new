function SectionSubheader() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-2px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="1" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">SUB-Header</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Label</p>
    </div>
  );
}

function Textfield() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield />
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field />
    </div>
  );
}

function GridHorizontal() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell />
      <Component />
    </div>
  );
}

function FormLableCell1() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Label</p>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field1 />
    </div>
  );
}

function GridHorizontal1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell1 />
      <Component1 />
    </div>
  );
}

function FormRow() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal />
      <GridHorizontal1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(12).keys()].map((_, i) => (
        <FormRow key={i} />
      ))}
    </div>
  );
}

function NoOfRows() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Container />
    </div>
  );
}

export default function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Form">
      <SectionSubheader />
      <NoOfRows />
    </div>
  );
}