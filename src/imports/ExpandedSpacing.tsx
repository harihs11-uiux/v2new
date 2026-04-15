import svgPaths from "./svg-41p5ud5w6x";

function Arrow() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="arrow">
          <mask height="16" id="mask0_5142_9538" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="8" />
          </mask>
          <g mask="url(#mask0_5142_9538)">
            <path d={svgPaths.p2dab2a00} fill="var(--fill-0, white)" id="arrow_right" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#3874ff] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] right-[1638px] rounded-[4px] top-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Upload to E-sanchit</p>
      </div>
      <div className="flex h-[8px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[8px]" data-name="seperator-line">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(80, 86, 102, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
                <line id="seperator-line" stroke="var(--stroke-0, #505666)" strokeOpacity="0.9" x2="8" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Arrow />
    </div>
  );
}

function Title() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Title">
      <Button />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#32394c] text-[14px] text-nowrap top-[4px]">Total : 10</p>
    </div>
  );
}

function TableSecondaryHeaderCell() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[55px]">S.No</p>
    </div>
  );
}

function TableSecondaryHeaderCell1() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[284px]">File Name</p>
    </div>
  );
}

function TableSecondaryHeaderCell2() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[284px]">IRN No.</p>
    </div>
  );
}

function TableSecondaryHeaderCell3() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[284px]">Status</p>
    </div>
  );
}

function TableSecondaryHeaderCell4() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap w-[134px]">File Size</p>
    </div>
  );
}

function SecondaryTableFrezzedHeader() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Secondary Table Frezzed Header">
      <TableSecondaryHeaderCell />
      <TableSecondaryHeaderCell1 />
      <TableSecondaryHeaderCell2 />
      <TableSecondaryHeaderCell3 />
      <TableSecondaryHeaderCell4 />
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <div className="absolute inset-[0_-22.22%_-22.22%_0]" style={{ "--stroke-0": "rgba(169, 195, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Icon Skeleton 1">
            <rect height="17.8" rx="3.9" stroke="var(--stroke-0, #A9C3FF)" strokeWidth="0.2" width="17.8" x="0.1" y="0.1" />
            <circle cx="12" cy="12" fill="var(--fill-0, #3874FF)" fillOpacity="0.1" id="Ellipse 3" r="9.9" stroke="var(--stroke-0, #A9C3FF)" strokeWidth="0.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function TableSecondaryHeaderCell5() {
  return (
    <div className="bg-[#ebeef7] relative shrink-0 w-full" data-name="Table Secondary Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
          <NoOfIcons />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableFrezzedHeaderOptions() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Secondary Table Frezzed Header Options">
      <TableSecondaryHeaderCell5 />
    </div>
  );
}

function SecondaryTableHeader() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Header">
      <SecondaryTableFrezzedHeader />
      <SecondaryTableFrezzedHeaderOptions />
    </div>
  );
}

function TableSecondaryBodyCell() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">1</p>
    </div>
  );
}

function TableSecondaryBodyCell1() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[284px]">Invoice 1 -Signed-1.pdf</p>
    </div>
  );
}

function TableSecondaryBodyCell2() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9497a1] text-[14px] w-[284px]">Enter IRN No.</p>
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <circle cx="9" cy="9" fill="var(--fill-0, #B48F43)" fillOpacity="0.2" id="Ellipse 230" r="6.75" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D7AC51)" id="Ellipse 229" r="3.375" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton1 />
    </div>
  );
}

function TableSecondaryBodyCell3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[262px]">Yet to Fetch IRN</p>
    </div>
  );
}

function TableSecondaryBodyCell4() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">200 KB</p>
    </div>
  );
}

function SecondaryTableFrezzedRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell />
      <TableSecondaryBodyCell1 />
      <TableSecondaryBodyCell2 />
      <TableSecondaryBodyCell3 />
      <TableSecondaryBodyCell4 />
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5142_9553" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5142_9553)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert />
    </div>
  );
}

function TableSecondaryBodyCell5() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons2 />
    </div>
  );
}

function SecondaryTableFrezzedRowOptions() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary Table Frezzed Row Options">
      <TableSecondaryBodyCell5 />
    </div>
  );
}

function SecondaryTableRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <SecondaryTableFrezzedRow />
      <SecondaryTableFrezzedRowOptions />
    </div>
  );
}

function TableSecondaryBodyCell6() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">2</p>
    </div>
  );
}

function TableSecondaryBodyCell7() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[284px]">Invoice 1 -Signed-1.pdf</p>
    </div>
  );
}

function TableSecondaryBodyCell8() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9497a1] text-[14px] w-[284px]">Enter IRN No.</p>
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <circle cx="9" cy="9" fill="var(--fill-0, #B48F43)" fillOpacity="0.2" id="Ellipse 230" r="6.75" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D7AC51)" id="Ellipse 229" r="3.375" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton2 />
    </div>
  );
}

function TableSecondaryBodyCell9() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[262px]">Yet to Fetch IRN</p>
    </div>
  );
}

function TableSecondaryBodyCell10() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">200 KB</p>
    </div>
  );
}

function SecondaryTableFrezzedRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell6 />
      <TableSecondaryBodyCell7 />
      <TableSecondaryBodyCell8 />
      <TableSecondaryBodyCell9 />
      <TableSecondaryBodyCell10 />
    </div>
  );
}

function MoreVert1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5142_9553" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5142_9553)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert1 />
    </div>
  );
}

function TableSecondaryBodyCell11() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons4 />
    </div>
  );
}

function SecondaryTableFrezzedRowOptions1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary Table Frezzed Row Options">
      <TableSecondaryBodyCell11 />
    </div>
  );
}

function SecondaryTableRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <SecondaryTableFrezzedRow1 />
      <SecondaryTableFrezzedRowOptions1 />
    </div>
  );
}

function TableSecondaryBodyCell12() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">3</p>
    </div>
  );
}

function TableSecondaryBodyCell13() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[284px]">Invoice 1 -Signed-1.pdf</p>
    </div>
  );
}

function TableSecondaryBodyCell14() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9497a1] text-[14px] w-[284px]">Enter IRN No.</p>
    </div>
  );
}

function IconSkeleton3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <circle cx="9" cy="9" fill="var(--fill-0, #B48F43)" fillOpacity="0.2" id="Ellipse 230" r="6.75" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D7AC51)" id="Ellipse 229" r="3.375" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton3 />
    </div>
  );
}

function TableSecondaryBodyCell15() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[262px]">Yet to Fetch IRN</p>
    </div>
  );
}

function TableSecondaryBodyCell16() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">200 KB</p>
    </div>
  );
}

function SecondaryTableFrezzedRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell12 />
      <TableSecondaryBodyCell13 />
      <TableSecondaryBodyCell14 />
      <TableSecondaryBodyCell15 />
      <TableSecondaryBodyCell16 />
    </div>
  );
}

function MoreVert2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5142_9553" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5142_9553)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert2 />
    </div>
  );
}

function TableSecondaryBodyCell17() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons6 />
    </div>
  );
}

function SecondaryTableFrezzedRowOptions2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary Table Frezzed Row Options">
      <TableSecondaryBodyCell17 />
    </div>
  );
}

function SecondaryTableRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <SecondaryTableFrezzedRow2 />
      <SecondaryTableFrezzedRowOptions2 />
    </div>
  );
}

function TableSecondaryBodyCell18() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">4</p>
    </div>
  );
}

function TableSecondaryBodyCell19() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[284px]">Invoice 1 -Signed-1.pdf</p>
    </div>
  );
}

function TableSecondaryBodyCell20() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9497a1] text-[14px] w-[284px]">Enter IRN No.</p>
    </div>
  );
}

function IconSkeleton4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <circle cx="9" cy="9" fill="var(--fill-0, #B48F43)" fillOpacity="0.2" id="Ellipse 230" r="6.75" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D7AC51)" id="Ellipse 229" r="3.375" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton4 />
    </div>
  );
}

function TableSecondaryBodyCell21() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[262px]">Yet to Fetch IRN</p>
    </div>
  );
}

function TableSecondaryBodyCell22() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">200 KB</p>
    </div>
  );
}

function SecondaryTableFrezzedRow3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell18 />
      <TableSecondaryBodyCell19 />
      <TableSecondaryBodyCell20 />
      <TableSecondaryBodyCell21 />
      <TableSecondaryBodyCell22 />
    </div>
  );
}

function MoreVert3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5142_9553" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5142_9553)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert3 />
    </div>
  );
}

function TableSecondaryBodyCell23() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons8 />
    </div>
  );
}

function SecondaryTableFrezzedRowOptions3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary Table Frezzed Row Options">
      <TableSecondaryBodyCell23 />
    </div>
  );
}

function SecondaryTableRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <SecondaryTableFrezzedRow3 />
      <SecondaryTableFrezzedRowOptions3 />
    </div>
  );
}

function TableSecondaryBodyCell24() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">5</p>
    </div>
  );
}

function TableSecondaryBodyCell25() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[284px]">Invoice 1 -Signed-1.pdf</p>
    </div>
  );
}

function TableSecondaryBodyCell26() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9497a1] text-[14px] w-[284px]">Enter IRN No.</p>
    </div>
  );
}

function IconSkeleton5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <circle cx="9" cy="9" fill="var(--fill-0, #B48F43)" fillOpacity="0.2" id="Ellipse 230" r="6.75" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D7AC51)" id="Ellipse 229" r="3.375" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton5 />
    </div>
  );
}

function TableSecondaryBodyCell27() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[262px]">Yet to Fetch IRN</p>
    </div>
  );
}

function TableSecondaryBodyCell28() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">200 KB</p>
    </div>
  );
}

function SecondaryTableFrezzedRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell24 />
      <TableSecondaryBodyCell25 />
      <TableSecondaryBodyCell26 />
      <TableSecondaryBodyCell27 />
      <TableSecondaryBodyCell28 />
    </div>
  );
}

function MoreVert4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5142_9553" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5142_9553)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert4 />
    </div>
  );
}

function TableSecondaryBodyCell29() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons10 />
    </div>
  );
}

function SecondaryTableFrezzedRowOptions4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary Table Frezzed Row Options">
      <TableSecondaryBodyCell29 />
    </div>
  );
}

function SecondaryTableRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <SecondaryTableFrezzedRow4 />
      <SecondaryTableFrezzedRowOptions4 />
    </div>
  );
}

function TableSecondaryBodyCell30() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[55px]">6</p>
    </div>
  );
}

function TableSecondaryBodyCell31() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#3874ff] text-[14px] w-[284px]">Invoice 1 -Signed-1.pdf</p>
    </div>
  );
}

function TableSecondaryBodyCell32() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9497a1] text-[14px] w-[284px]">Enter IRN No.</p>
    </div>
  );
}

function IconSkeleton6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <circle cx="9" cy="9" fill="var(--fill-0, #B48F43)" fillOpacity="0.2" id="Ellipse 230" r="6.75" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D7AC51)" id="Ellipse 229" r="3.375" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <IconSkeleton6 />
    </div>
  );
}

function TableSecondaryBodyCell33() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons11 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[262px]">Yet to Fetch IRN</p>
    </div>
  );
}

function TableSecondaryBodyCell34() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] w-[134px]">200 KB</p>
    </div>
  );
}

function SecondaryTableFrezzedRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary Table Frezzed Row">
      <TableSecondaryBodyCell30 />
      <TableSecondaryBodyCell31 />
      <TableSecondaryBodyCell32 />
      <TableSecondaryBodyCell33 />
      <TableSecondaryBodyCell34 />
    </div>
  );
}

function MoreVert5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_5142_9553" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5142_9553)">
            <path d={svgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <MoreVert5 />
    </div>
  );
}

function TableSecondaryBodyCell35() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Table Secondary Body cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons12 />
    </div>
  );
}

function SecondaryTableFrezzedRowOptions5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary Table Frezzed Row Options">
      <TableSecondaryBodyCell35 />
    </div>
  );
}

function SecondaryTableRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Secondary Table Row">
      <SecondaryTableFrezzedRow5 />
      <SecondaryTableFrezzedRowOptions5 />
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

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <SecondaryTableRowSet />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-[#fdfeff] relative rounded-[4px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SecondaryTableHeader />
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_1px_0px] border-solid inset-[-1px_-1px_0_-1px] pointer-events-none rounded-bl-[4px] rounded-br-[4px] rounded-tl-[5px] rounded-tr-[5px]" />
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

export default function ExpandedSpacing() {
  return (
    <div className="bg-[#f2f6ff] relative size-full" data-name="Expanded Spacing">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[34px] py-[12px] relative size-full">
          <SecondaryTable />
        </div>
      </div>
    </div>
  );
}