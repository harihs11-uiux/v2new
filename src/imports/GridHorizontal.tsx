function Content() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap">{`Sr.No `}</p>
    </div>
  );
}

function FormLableCell() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[58px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function Textfield() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1/1</p>
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
    <div className="content-stretch flex items-start relative shrink-0 w-[69px]" data-name="Component 5">
      <Field />
    </div>
  );
}

export default function GridHorizontal() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Grid Horizontal">
      <FormLableCell />
      <Component />
    </div>
  );
}