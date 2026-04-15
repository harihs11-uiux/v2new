function HeaderCell() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Part Code</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[204px] whitespace-pre-wrap">Description</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">HSN</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Customer</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[80px] whitespace-pre-wrap">BE Date</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">BCD Notfn No</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">BCD Notfn Sr.No</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">IGST Notfn No.</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="bg-[#242c40] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Header Cell">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">IGST Notfn Sr.No.</p>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
    </div>
  );
}

function BodyCell() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">1323244423</p>
    </div>
  );
}

function BodyCell1() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[204px] whitespace-pre-wrap">S000.100.00,26.06.1 - ARAG</p>
    </div>
  );
}

function BodyCell2() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">4434444</p>
    </div>
  );
}

function BodyCell3() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Schneider</p>
    </div>
  );
}

function BodyCell4() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[80px] whitespace-pre-wrap">22/03/2025</p>
    </div>
  );
}

function BodyCell5() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell6() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">11</p>
    </div>
  );
}

function BodyCell7() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell8() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">23</p>
    </div>
  );
}

function BodyRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full bg-[#050e25] hover:bg-[#3874FF] cursor-pointer" data-name="Body Row">
      <BodyCell />
      <BodyCell1 />
      <BodyCell2 />
      <BodyCell3 />
      <BodyCell4 />
      <BodyCell5 />
      <BodyCell6 />
      <BodyCell7 />
      <BodyCell8 />
    </div>
  );
}

function BodyCell9() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">1323244423</p>
    </div>
  );
}

function BodyCell10() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[204px] whitespace-pre-wrap">FRAME STEEL(S006000000212 S 6X2</p>
    </div>
  );
}

function BodyCell11() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">4434444</p>
    </div>
  );
}

function BodyCell12() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Schneider</p>
    </div>
  );
}

function BodyCell13() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[80px] whitespace-pre-wrap">22/03/2025</p>
    </div>
  );
}

function BodyCell14() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell15() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">11</p>
    </div>
  );
}

function BodyCell16() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell17() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">24</p>
    </div>
  );
}

function BodyRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full bg-[#050e25] hover:bg-[#3874FF] cursor-pointer" data-name="Body Row">
      <BodyCell9 />
      <BodyCell10 />
      <BodyCell11 />
      <BodyCell12 />
      <BodyCell13 />
      <BodyCell14 />
      <BodyCell15 />
      <BodyCell16 />
      <BodyCell17 />
    </div>
  );
}

function BodyCell18() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">6432456765</p>
    </div>
  );
}

function BodyCell19() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[204px] whitespace-pre-wrap">700540447 SPRING UHP S.S</p>
    </div>
  );
}

function BodyCell20() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">43435434</p>
    </div>
  );
}

function BodyCell21() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Schneider</p>
    </div>
  );
}

function BodyCell22() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[80px] whitespace-pre-wrap">22/03/2025</p>
    </div>
  );
}

function BodyCell23() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell24() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">11</p>
    </div>
  );
}

function BodyCell25() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell26() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">22</p>
    </div>
  );
}

function BodyRow2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full bg-[#050e25] hover:bg-[#3874FF] cursor-pointer" data-name="Body Row">
      <BodyCell18 />
      <BodyCell19 />
      <BodyCell20 />
      <BodyCell21 />
      <BodyCell22 />
      <BodyCell23 />
      <BodyCell24 />
      <BodyCell25 />
      <BodyCell26 />
    </div>
  );
}

function BodyCell27() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">6432456724</p>
    </div>
  );
}

function BodyCell28() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[204px] whitespace-pre-wrap">700540447 SPRING UHP S.S</p>
    </div>
  );
}

function BodyCell29() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">34534445</p>
    </div>
  );
}

function BodyCell30() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Schneider</p>
    </div>
  );
}

function BodyCell31() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[80px] whitespace-pre-wrap">22/03/2025</p>
    </div>
  );
}

function BodyCell32() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell33() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">11</p>
    </div>
  );
}

function BodyCell34() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell35() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">12</p>
    </div>
  );
}

function BodyRow3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full bg-[#050e25] hover:bg-[#3874FF] cursor-pointer" data-name="Body Row">
      <BodyCell27 />
      <BodyCell28 />
      <BodyCell29 />
      <BodyCell30 />
      <BodyCell31 />
      <BodyCell32 />
      <BodyCell33 />
      <BodyCell34 />
      <BodyCell35 />
    </div>
  );
}

function BodyCell36() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">6432456234</p>
    </div>
  );
}

function BodyCell37() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[204px] whitespace-pre-wrap">[W2TPP99SWGS9] 2G S.WALL INPX2 W.GLASS</p>
    </div>
  );
}

function BodyCell38() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">234553433</p>
    </div>
  );
}

function BodyCell39() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Schneider</p>
    </div>
  );
}

function BodyCell40() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[80px] whitespace-pre-wrap">22/03/2025</p>
    </div>
  );
}

function BodyCell41() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell42() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">11</p>
    </div>
  );
}

function BodyCell43() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell44() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">32</p>
    </div>
  );
}

function BodyRow4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full bg-[#050e25] hover:bg-[#3874FF] cursor-pointer" data-name="Body Row">
      <BodyCell36 />
      <BodyCell37 />
      <BodyCell38 />
      <BodyCell39 />
      <BodyCell40 />
      <BodyCell41 />
      <BodyCell42 />
      <BodyCell43 />
      <BodyCell44 />
    </div>
  );
}

function BodyCell45() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">6432456234</p>
    </div>
  );
}

function BodyCell46() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[204px] whitespace-pre-wrap">[W2TPP99SWGS9] 2G S.WALL INPX2 W.GLASS</p>
    </div>
  );
}

function BodyCell47() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">28382848484</p>
    </div>
  );
}

function BodyCell48() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Schneider</p>
    </div>
  );
}

function BodyCell49() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[80px] whitespace-pre-wrap">22/03/2025</p>
    </div>
  );
}

function BodyCell50() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell51() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">11</p>
    </div>
  );
}

function BodyCell52() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell53() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">22</p>
    </div>
  );
}

function BodyRow5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full bg-[#050e25] hover:bg-[#3874FF] cursor-pointer" data-name="Body Row">
      <BodyCell45 />
      <BodyCell46 />
      <BodyCell47 />
      <BodyCell48 />
      <BodyCell49 />
      <BodyCell50 />
      <BodyCell51 />
      <BodyCell52 />
      <BodyCell53 />
    </div>
  );
}

function BodyCell54() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">6432456234</p>
    </div>
  );
}

function BodyCell55() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[204px] whitespace-pre-wrap">[W2TPP99SWGS9] 2G S.WALL INPX2 W.GLASS</p>
    </div>
  );
}

function BodyCell56() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">28382848484</p>
    </div>
  );
}

function BodyCell57() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">Schneider</p>
    </div>
  );
}

function BodyCell58() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[80px] whitespace-pre-wrap">22/03/2025</p>
    </div>
  );
}

function BodyCell59() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell60() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">11</p>
    </div>
  );
}

function BodyCell61() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">2023/23</p>
    </div>
  );
}

function BodyCell62() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Body Cell">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[152px] whitespace-pre-wrap">12</p>
    </div>
  );
}

function BodyRow6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full bg-[#050e25] hover:bg-[#3874FF] cursor-pointer" data-name="Body Row">
      <BodyCell54 />
      <BodyCell55 />
      <BodyCell56 />
      <BodyCell57 />
      <BodyCell58 />
      <BodyCell59 />
      <BodyCell60 />
      <BodyCell61 />
      <BodyCell62 />
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Rows">
      <BodyRow />
      <BodyRow1 />
      <BodyRow2 />
      <BodyRow3 />
      <BodyRow4 />
      <BodyRow5 />
      <BodyRow6 />
    </div>
  );
}

function ScrollBarVariant() {
  return (
    <div className="absolute h-[22px] right-[4px] top-[30px] w-[6px]" data-name="Scroll Bar/Variant2">
      <div className="absolute bg-[#32394c] inset-0 rounded-[22px]" data-name="Vertical Bar" />
    </div>
  );
}

export default function TooltipRowTable() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Tooltip Row Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <HeaderRow />
        <Rows />
        <ScrollBarVariant />
      </div>
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}