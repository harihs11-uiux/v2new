function HeaderCell() {
  return (
    <div className="bg-[#242c40] box-border content-stretch flex gap-1 items-center justify-start px-2 py-1 relative shrink-0" data-name="Header Cell">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] w-[204px]">
        <p className="leading-[16px]">Name</p>
      </div>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="bg-[#242c40] box-border content-stretch flex gap-1 items-center justify-start px-2 py-1 relative shrink-0" data-name="Header Cell">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] w-20">
        <p className="leading-[16px]">IEC</p>
      </div>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="bg-[#242c40] box-border content-stretch flex gap-1 items-center justify-start px-2 py-1 relative shrink-0" data-name="Header Cell">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] w-20">
        <p className="leading-[16px]">ID</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Header Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
    </div>
  );
}

function BodyCell() {
  return (
    <div className="bg-[#050e25] relative self-stretch shrink-0" data-name="Body Cell">
      <div className="box-border content-stretch flex gap-1 h-full items-start justify-start overflow-clip px-2 py-1 relative">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-[204px]">
          <p className="leading-[16px]">XYZ Logistics</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BodyCell1() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">NF00005632</p>
      </div>
    </div>
  );
}

function BodyCell2() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">TJ888485</p>
      </div>
    </div>
  );
}

function BodyRow() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body Row">
      <BodyCell />
      <BodyCell1 />
      <BodyCell2 />
    </div>
  );
}

function BodyCell3() {
  return (
    <div className="bg-[#050e25] relative self-stretch shrink-0" data-name="Body Cell">
      <div className="box-border content-stretch flex gap-1 h-full items-start justify-start overflow-clip px-2 py-1 relative">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-[204px]">
          <p className="leading-[16px]">ABC Logs Pvt Ltd</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BodyCell4() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">NF00005633</p>
      </div>
    </div>
  );
}

function BodyCell5() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">TJ888486</p>
      </div>
    </div>
  );
}

function BodyRow1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body Row">
      <BodyCell3 />
      <BodyCell4 />
      <BodyCell5 />
    </div>
  );
}

function BodyCell6() {
  return (
    <div className="bg-[#3874ff] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-[204px]">
        <p className="leading-[16px]">Ocean Freight</p>
      </div>
    </div>
  );
}

function BodyCell7() {
  return (
    <div className="bg-[#3874ff] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">NF00005698</p>
      </div>
    </div>
  );
}

function BodyCell8() {
  return (
    <div className="bg-[#3874ff] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">TJ888466</p>
      </div>
    </div>
  );
}

function BodyRow2() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body Row">
      <BodyCell6 />
      <BodyCell7 />
      <BodyCell8 />
    </div>
  );
}

function BodyCell9() {
  return (
    <div className="bg-[#050e25] relative self-stretch shrink-0" data-name="Body Cell">
      <div className="box-border content-stretch flex gap-1 h-full items-start justify-start overflow-clip px-2 py-1 relative">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-[204px]">
          <p className="leading-[16px]">Kite Freight</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BodyCell10() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">NF00005644</p>
      </div>
    </div>
  );
}

function BodyCell11() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">TJ888434</p>
      </div>
    </div>
  );
}

function BodyRow3() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body Row">
      <BodyCell9 />
      <BodyCell10 />
      <BodyCell11 />
    </div>
  );
}

function BodyCell12() {
  return (
    <div className="bg-[#050e25] relative self-stretch shrink-0" data-name="Body Cell">
      <div className="box-border content-stretch flex gap-1 h-full items-start justify-start overflow-clip px-2 py-1 relative">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-[204px]">
          <p className="leading-[16px]">ImpexFreight</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BodyCell13() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">NF00005683</p>
      </div>
    </div>
  );
}

function BodyCell14() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">TJ888422</p>
      </div>
    </div>
  );
}

function BodyRow4() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body Row">
      <BodyCell12 />
      <BodyCell13 />
      <BodyCell14 />
    </div>
  );
}

function BodyCell15() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-[204px]">
        <p className="leading-[16px]">OOC Pvt Ltd</p>
      </div>
    </div>
  );
}

function BodyCell16() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">NF00005609</p>
      </div>
    </div>
  );
}

function BodyCell17() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">TJ888498</p>
      </div>
    </div>
  );
}

function BodyRow5() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body Row">
      <BodyCell15 />
      <BodyCell16 />
      <BodyCell17 />
    </div>
  );
}

function BodyCell18() {
  return (
    <div className="bg-[#050e25] relative self-stretch shrink-0" data-name="Body Cell">
      <div className="box-border content-stretch flex gap-1 h-full items-start justify-start overflow-clip px-2 py-1 relative">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-[204px]">
          <p className="leading-[16px]">KsA private Ltd</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BodyCell19() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">NF00005612</p>
      </div>
    </div>
  );
}

function BodyCell20() {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex gap-1 items-start justify-start px-2 py-1 relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] w-20">
        <p className="leading-[16px]">TJ888443</p>
      </div>
    </div>
  );
}

function BodyRow6() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body Row">
      <BodyCell18 />
      <BodyCell19 />
      <BodyCell20 />
    </div>
  );
}

function ScrollBarVariant2() {
  return (
    <div className="absolute h-[22px] right-1 top-[30px] w-1.5" data-name="Scroll Bar/Variant2">
      <div className="absolute bg-[#32394c] inset-0 rounded-[22px]" data-name="Vertical Bar" />
    </div>
  );
}

export default function TooltipRowTable() {
  return (
    <div className="relative rounded size-full" data-name="Tooltip Row Table">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative size-full">
        <HeaderRow />
        <BodyRow />
        <BodyRow1 />
        <BodyRow2 />
        <BodyRow3 />
        <BodyRow4 />
        <BodyRow5 />
        <BodyRow6 />
        <ScrollBarVariant2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}