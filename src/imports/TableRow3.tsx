import svgPaths from "./svg-nlhf5ql9w3";

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_5505_16810)" id="Icon Skeleton 1">
          <g id="Vector"></g>
          <path d={svgPaths.p3dd41900} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_5505_16810">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function ExpandCell() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Expand cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxCell() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Checkbox cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Checkbox />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[55px]" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">3</p>
      </div>
    </div>
  );
}

function TableBodyCell() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[234px]" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px]">
        <p className="css-ew64yg leading-[18px]">{` Trade & Logistics`}</p>
      </div>
    </div>
  );
}

function TableBodyCell1() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[134px]" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">NF00067482</p>
      </div>
    </div>
  );
}

function TableBodyCell2() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function TableFreezedRow() {
  return (
    <div className="bg-[#f2f6ff] content-stretch flex h-full items-center relative shrink-0" data-name="Table Freezed Row">
      <ExpandCell />
      <CheckboxCell />
      <TableBodyCell />
      <TableBodyCell1 />
      <TableBodyCell2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[134px]" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">1029384756</p>
      </div>
    </div>
  );
}

function TableBodyCell3() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Content3 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">424553535353</p>
    </div>
  );
}

function ChipSelected() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label />
    </div>
  );
}

function ChipCount() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected />
    </div>
  );
}

function TableBodyCell4() {
  return (
    <div className="content-stretch flex items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[184px]" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">12ABCDE1234F1Z5</p>
      </div>
    </div>
  );
}

function TableBodyCell5() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[134px]" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">PANUI00002</p>
      </div>
    </div>
  );
}

function TableBodyCell6() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">None</p>
      </div>
    </div>
  );
}

function TableBodyCell7() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[134px]" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">Indian Party</p>
      </div>
    </div>
  );
}

function TableBodyCell8() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function AvatarAlphabet() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p249178c0} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[162px]" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">Arjith Kumar</p>
      </div>
    </div>
  );
}

function TableBodyCell9() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <NoOfIcons1 />
      <Content8 />
    </div>
  );
}

function AvatarAlphabet1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Avatar (Alphabet)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Avatar (Alphabet)">
          <circle cx="9" cy="9" fill="var(--fill-0, #FE7C7C)" id="Shape" r="9" />
          <g id="AK">
            <path d={svgPaths.p26f13d00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3275ab80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <AvatarAlphabet1 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="content">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px]">
        <p className="css-ew64yg leading-[18px]">Arjith Kumar</p>
      </div>
    </div>
  );
}

function TableBodyCell10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[4px] items-start p-[8px] relative size-full">
        <NoOfIcons2 />
        <Content9 />
      </div>
    </div>
  );
}

function TableScrollableRow() {
  return (
    <div className="bg-[#f2f6ff] content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Table Scrollable Row">
      <TableBodyCell3 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <TableBodyCell4 />
      <TableBodyCell5 />
      <TableBodyCell6 />
      <TableBodyCell7 />
      <TableBodyCell8 />
      <TableBodyCell9 />
      <TableBodyCell10 />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[42px] rotate-[180deg] scale-y-[-100%] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.552deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5505_16817" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5505_16817)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert />
    </div>
  );
}

function TableBodyCell11() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons3 />
    </div>
  );
}

function TableFreezedRowOptions() {
  return (
    <div className="bg-[#f2f6ff] content-stretch flex h-full items-center relative shrink-0" data-name="Table Freezed Row Options">
      <TableBodyCell11 />
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <div className="flex flex-row items-center self-stretch">
          <TableFreezedRow />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableScrollableRow />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableFreezedRowOptions />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Title">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#050e25] text-[14px] top-[4px]">Total Branches : 10</p>
    </div>
  );
}

function TableSecondaryHeaderCell() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#32394c] text-[14px] text-ellipsis w-[84px]">Branch No.</p>
    </div>
  );
}

function SecondaryTableFrezzedHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary Table Frezzed Header">
      <TableSecondaryHeaderCell />
    </div>
  );
}

function TableSecondaryHeaderCell1() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[84px]">Nickname</p>
    </div>
  );
}

function TableSecondaryHeaderCell2() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[234px]">Address 1</p>
    </div>
  );
}

function TableSecondaryHeaderCell3() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[184px]">City</p>
    </div>
  );
}

function TableSecondaryHeaderCell4() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[184px]">CST Reg No.</p>
    </div>
  );
}

function TableSecondaryHeaderCell5() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[234px]">Roles</p>
    </div>
  );
}

function TableSecondaryHeaderCell6() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[184px]">AD Code</p>
    </div>
  );
}

function TableSecondaryHeaderCell7() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[234px]">{`Address 2 `}</p>
    </div>
  );
}

function TableSecondaryHeaderCell8() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[234px]">Address 3</p>
    </div>
  );
}

function TableSecondaryHeaderCell9() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[184px]">Sate Code</p>
    </div>
  );
}

function TableSecondaryHeaderCell10() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[84px]">Pin Code</p>
    </div>
  );
}

function TableSecondaryHeaderCell11() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[134px]">Country Code</p>
    </div>
  );
}

function TableSecondaryHeaderCell12() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-g0mm18 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis w-[84px]">TAN</p>
    </div>
  );
}

function SecondaryTableScrollableHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Secondary Table Scrollable Header">
      <TableSecondaryHeaderCell1 />
      <TableSecondaryHeaderCell2 />
      <TableSecondaryHeaderCell3 />
      <TableSecondaryHeaderCell4 />
      <TableSecondaryHeaderCell5 />
      <TableSecondaryHeaderCell6 />
      <TableSecondaryHeaderCell7 />
      <TableSecondaryHeaderCell8 />
      <TableSecondaryHeaderCell9 />
      <TableSecondaryHeaderCell10 />
      <TableSecondaryHeaderCell11 />
      <TableSecondaryHeaderCell12 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.2763deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[26px] rotate-[180deg] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.2763deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableHeader() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Header">
      <SecondaryTableFrezzedHeader />
      <SecondaryTableScrollableHeader />
    </div>
  );
}

function TableSecondaryBodyCell() {
  return (
    <div className="bg-white content-stretch flex h-full items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">01</p>
    </div>
  );
}

function SecondaryTableFrezzedRow() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell />
    </div>
  );
}

function TableSecondaryBodyCell1() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">BOI</p>
    </div>
  );
}

function TableSecondaryBodyCell2() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Row 1 - 123 Maple St.</p>
    </div>
  );
}

function TableSecondaryBodyCell3() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">New York</p>
    </div>
  );
}

function TableSecondaryBodyCell4() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Item B - XY123457</p>
    </div>
  );
}

function TableSecondaryBodyCell5() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Foreign Party</p>
    </div>
  );
}

function ChipAdd() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip add">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">935003535</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">935003535</p>
    </div>
  );
}

function ChipSelected1() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">V83959353</p>
    </div>
  );
}

function ChipSelected2() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label2 />
    </div>
  );
}

function ChipCount1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipAdd />
      <ChipSelected1 />
      <ChipSelected2 />
    </div>
  );
}

function TableSecondaryBodyCell6() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount1 />
    </div>
  );
}

function TableSecondaryBodyCell7() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">-</p>
    </div>
  );
}

function TableSecondaryBodyCell8() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">22</p>
    </div>
  );
}

function TableSecondaryBodyCell9() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">604124</p>
    </div>
  );
}

function TableSecondaryBodyCell10() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">01</p>
    </div>
  );
}

function TableSecondaryBodyCell11() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">88</p>
    </div>
  );
}

function SecondaryTableScrollableRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Secondary Table Scrollable Row">
      <TableSecondaryBodyCell1 />
      <TableSecondaryBodyCell2 />
      <TableSecondaryBodyCell3 />
      <TableSecondaryBodyCell4 />
      <TableSecondaryBodyCell5 />
      <TableSecondaryBodyCell6 />
      {[...Array(2).keys()].map((_, i) => (
        <TableSecondaryBodyCell7 key={i} />
      ))}
      <TableSecondaryBodyCell8 />
      <TableSecondaryBodyCell9 />
      <TableSecondaryBodyCell10 />
      <TableSecondaryBodyCell11 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.8155deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[102px] rotate-[180deg] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.8155deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <div className="flex flex-row items-center self-stretch">
        <SecondaryTableFrezzedRow />
      </div>
      <SecondaryTableScrollableRow />
    </div>
  );
}

function TableSecondaryBodyCell12() {
  return (
    <div className="bg-white content-stretch flex h-full items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">02</p>
    </div>
  );
}

function SecondaryTableFrezzedRow1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell12 />
    </div>
  );
}

function TableSecondaryBodyCell13() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">BluO</p>
    </div>
  );
}

function TableSecondaryBodyCell14() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Row 2 - 456 Oak Ave.</p>
    </div>
  );
}

function TableSecondaryBodyCell15() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Tokyo</p>
    </div>
  );
}

function TableSecondaryBodyCell16() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Item C - XY123458</p>
    </div>
  );
}

function TableSecondaryBodyCell17() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Foreign Party</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">83959353</p>
    </div>
  );
}

function ChipSelected3() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label3 />
    </div>
  );
}

function ChipCount2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected3 />
    </div>
  );
}

function TableSecondaryBodyCell18() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount2 />
    </div>
  );
}

function TableSecondaryBodyCell19() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">-</p>
    </div>
  );
}

function TableSecondaryBodyCell20() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">33</p>
    </div>
  );
}

function TableSecondaryBodyCell21() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">604124</p>
    </div>
  );
}

function TableSecondaryBodyCell22() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">02</p>
    </div>
  );
}

function TableSecondaryBodyCell23() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">99</p>
    </div>
  );
}

function SecondaryTableScrollableRow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Secondary Table Scrollable Row">
      <TableSecondaryBodyCell13 />
      <TableSecondaryBodyCell14 />
      <TableSecondaryBodyCell15 />
      <TableSecondaryBodyCell16 />
      <TableSecondaryBodyCell17 />
      <TableSecondaryBodyCell18 />
      {[...Array(2).keys()].map((_, i) => (
        <TableSecondaryBodyCell19 key={i} />
      ))}
      <TableSecondaryBodyCell20 />
      <TableSecondaryBodyCell21 />
      <TableSecondaryBodyCell22 />
      <TableSecondaryBodyCell23 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <div className="flex flex-row items-center self-stretch">
        <SecondaryTableFrezzedRow1 />
      </div>
      <SecondaryTableScrollableRow1 />
    </div>
  );
}

function TableSecondaryBodyCell24() {
  return (
    <div className="bg-white content-stretch flex h-full items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">03</p>
    </div>
  );
}

function SecondaryTableFrezzedRow2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell24 />
    </div>
  );
}

function TableSecondaryBodyCell25() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">BOcean</p>
    </div>
  );
}

function TableSecondaryBodyCell26() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Row 3 - 789 Pine Rd.</p>
    </div>
  );
}

function TableSecondaryBodyCell27() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Paris</p>
    </div>
  );
}

function TableSecondaryBodyCell28() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Item D - XY123459</p>
    </div>
  );
}

function TableSecondaryBodyCell29() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Foreign Party</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">83959353</p>
    </div>
  );
}

function ChipSelected4() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label4 />
    </div>
  );
}

function ChipCount3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected4 />
    </div>
  );
}

function TableSecondaryBodyCell30() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount3 />
    </div>
  );
}

function TableSecondaryBodyCell31() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">-</p>
    </div>
  );
}

function TableSecondaryBodyCell32() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">44</p>
    </div>
  );
}

function TableSecondaryBodyCell33() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">604124</p>
    </div>
  );
}

function TableSecondaryBodyCell34() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">03</p>
    </div>
  );
}

function TableSecondaryBodyCell35() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">93</p>
    </div>
  );
}

function SecondaryTableScrollableRow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Secondary Table Scrollable Row">
      <TableSecondaryBodyCell25 />
      <TableSecondaryBodyCell26 />
      <TableSecondaryBodyCell27 />
      <TableSecondaryBodyCell28 />
      <TableSecondaryBodyCell29 />
      <TableSecondaryBodyCell30 />
      {[...Array(2).keys()].map((_, i) => (
        <TableSecondaryBodyCell31 key={i} />
      ))}
      <TableSecondaryBodyCell32 />
      <TableSecondaryBodyCell33 />
      <TableSecondaryBodyCell34 />
      <TableSecondaryBodyCell35 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <div className="flex flex-row items-center self-stretch">
        <SecondaryTableFrezzedRow2 />
      </div>
      <SecondaryTableScrollableRow2 />
    </div>
  );
}

function TableSecondaryBodyCell36() {
  return (
    <div className="bg-white content-stretch flex h-full items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">04</p>
    </div>
  );
}

function SecondaryTableFrezzedRow3() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell36 />
    </div>
  );
}

function TableSecondaryBodyCell37() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">BlueImp</p>
    </div>
  );
}

function TableSecondaryBodyCell38() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Row 4 - 321 Birch Blvd.</p>
    </div>
  );
}

function TableSecondaryBodyCell39() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Sydney</p>
    </div>
  );
}

function TableSecondaryBodyCell40() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Item E - XY123460</p>
    </div>
  );
}

function TableSecondaryBodyCell41() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Foreign Party</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">83959353</p>
    </div>
  );
}

function ChipSelected5() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label5 />
    </div>
  );
}

function ChipCount4() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected5 />
    </div>
  );
}

function TableSecondaryBodyCell42() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount4 />
    </div>
  );
}

function TableSecondaryBodyCell43() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">-</p>
    </div>
  );
}

function TableSecondaryBodyCell44() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">123</p>
    </div>
  );
}

function TableSecondaryBodyCell45() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">604124</p>
    </div>
  );
}

function TableSecondaryBodyCell46() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">04</p>
    </div>
  );
}

function TableSecondaryBodyCell47() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">99</p>
    </div>
  );
}

function SecondaryTableScrollableRow3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Secondary Table Scrollable Row">
      <TableSecondaryBodyCell37 />
      <TableSecondaryBodyCell38 />
      <TableSecondaryBodyCell39 />
      <TableSecondaryBodyCell40 />
      <TableSecondaryBodyCell41 />
      <TableSecondaryBodyCell42 />
      {[...Array(2).keys()].map((_, i) => (
        <TableSecondaryBodyCell43 key={i} />
      ))}
      <TableSecondaryBodyCell44 />
      <TableSecondaryBodyCell45 />
      <TableSecondaryBodyCell46 />
      <TableSecondaryBodyCell47 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <div className="flex flex-row items-center self-stretch">
        <SecondaryTableFrezzedRow3 />
      </div>
      <SecondaryTableScrollableRow3 />
    </div>
  );
}

function TableSecondaryBodyCell48() {
  return (
    <div className="bg-white content-stretch flex h-full items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">05</p>
    </div>
  );
}

function SecondaryTableFrezzedRow4() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell48 />
    </div>
  );
}

function TableSecondaryBodyCell49() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">The Blue</p>
    </div>
  );
}

function TableSecondaryBodyCell50() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Row 5 - 654 Cedar Ct.</p>
    </div>
  );
}

function TableSecondaryBodyCell51() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Rio de Janeiro</p>
    </div>
  );
}

function TableSecondaryBodyCell52() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Item F - XY123461</p>
    </div>
  );
}

function TableSecondaryBodyCell53() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Foreign Party</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">8395935383959353</p>
    </div>
  );
}

function ChipSelected6() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label6 />
    </div>
  );
}

function ChipCount5() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected6 />
    </div>
  );
}

function TableSecondaryBodyCell54() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount5 />
    </div>
  );
}

function TableSecondaryBodyCell55() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">-</p>
    </div>
  );
}

function TableSecondaryBodyCell56() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">11</p>
    </div>
  );
}

function TableSecondaryBodyCell57() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">602124</p>
    </div>
  );
}

function TableSecondaryBodyCell58() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">04</p>
    </div>
  );
}

function TableSecondaryBodyCell59() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">976</p>
    </div>
  );
}

function SecondaryTableScrollableRow4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Secondary Table Scrollable Row">
      <TableSecondaryBodyCell49 />
      <TableSecondaryBodyCell50 />
      <TableSecondaryBodyCell51 />
      <TableSecondaryBodyCell52 />
      <TableSecondaryBodyCell53 />
      <TableSecondaryBodyCell54 />
      {[...Array(2).keys()].map((_, i) => (
        <TableSecondaryBodyCell55 key={i} />
      ))}
      <TableSecondaryBodyCell56 />
      <TableSecondaryBodyCell57 />
      <TableSecondaryBodyCell58 />
      <TableSecondaryBodyCell59 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <div className="flex flex-row items-center self-stretch">
        <SecondaryTableFrezzedRow4 />
      </div>
      <SecondaryTableScrollableRow4 />
    </div>
  );
}

function TableSecondaryBodyCell60() {
  return (
    <div className="bg-white content-stretch flex h-full items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">06</p>
    </div>
  );
}

function SecondaryTableFrezzedRow5() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell60 />
    </div>
  );
}

function TableSecondaryBodyCell61() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">Big Blue</p>
    </div>
  );
}

function TableSecondaryBodyCell62() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Row 6 - 987 Elm Way.</p>
    </div>
  );
}

function TableSecondaryBodyCell63() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Cairo</p>
    </div>
  );
}

function TableSecondaryBodyCell64() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">Item G - XY123462</p>
    </div>
  );
}

function TableSecondaryBodyCell65() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">Foreign Party</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">83959353</p>
    </div>
  );
}

function ChipSelected7() {
  return (
    <div className="content-stretch flex items-center px-[6px] py-[4px] relative rounded-[28px] shrink-0" data-name="Chip Selected">
      <div aria-hidden="true" className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Label7 />
    </div>
  );
}

function ChipCount6() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[184px]" data-name="Chip count">
      <ChipSelected7 />
    </div>
  );
}

function TableSecondaryBodyCell66() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <ChipCount6 />
    </div>
  );
}

function TableSecondaryBodyCell67() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[234px]">-</p>
    </div>
  );
}

function TableSecondaryBodyCell68() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative self-stretch shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[184px]">23</p>
    </div>
  );
}

function TableSecondaryBodyCell69() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">604124</p>
    </div>
  );
}

function TableSecondaryBodyCell70() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">02</p>
    </div>
  );
}

function TableSecondaryBodyCell71() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[84px]">9765</p>
    </div>
  );
}

function SecondaryTableScrollableRow5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Secondary Table Scrollable Row">
      <TableSecondaryBodyCell61 />
      <TableSecondaryBodyCell62 />
      <TableSecondaryBodyCell63 />
      <TableSecondaryBodyCell64 />
      <TableSecondaryBodyCell65 />
      <TableSecondaryBodyCell66 />
      {[...Array(2).keys()].map((_, i) => (
        <TableSecondaryBodyCell67 key={i} />
      ))}
      <TableSecondaryBodyCell68 />
      <TableSecondaryBodyCell69 />
      <TableSecondaryBodyCell70 />
      <TableSecondaryBodyCell71 />
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <div className="flex flex-row items-center self-stretch">
        <SecondaryTableFrezzedRow5 />
      </div>
      <SecondaryTableScrollableRow5 />
    </div>
  );
}

function SecondaryTableRowSet() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Secondary Table Row Set">
      <SecondaryTableRow />
      <SecondaryTableRow1 />
      <SecondaryTableRow2 />
      <SecondaryTableRow3 />
      <SecondaryTableRow4 />
      <SecondaryTableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-[#fdfeff] relative rounded-[4px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SecondaryTableHeader />
        <SecondaryTableRowSet />
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-l border-r border-solid border-t inset-[-1px_-1px_0_-1px] pointer-events-none rounded-bl-[4px] rounded-br-[4px] rounded-tl-[5px] rounded-tr-[5px]" />
    </div>
  );
}

function SecondaryTable() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Secondary Table">
      <Title />
      <Table />
    </div>
  );
}

function ExpandedSpacing() {
  return (
    <div className="bg-[#f2f6ff] relative shrink-0 w-full" data-name="Expanded Spacing">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[34px] py-[12px] relative w-full">
        <SecondaryTable />
      </div>
    </div>
  );
}

export default function TableRow() {
  return (
    <div className="relative size-full" data-name="Table Row 3">
      <div className="content-stretch flex flex-col items-start py-px relative size-full">
        <Row />
        <ExpandedSpacing />
      </div>
      <div aria-hidden="true" className="absolute border-[#3874ff] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}