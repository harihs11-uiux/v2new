import svgPaths from "./svg-fafqbj2ww6";

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 15.75">
        <g id="Success check">
          <circle cx="7.875" cy="7.875" fill="var(--fill-0, #3874FF)" id="Base" r="7.875" />
          <g id="icon">
            <rect fill="var(--fill-0, white)" height="5.625" id="Rectangle 1574" rx="0.5625" width="1.125" x="7.3125" y="6.1875" />
            <circle cx="7.875" cy="4.5" fill="var(--fill-0, white)" id="Ellipse 39" r="0.5625" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <SuccessCheck />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-bl-[29px] rounded-tl-[29px] shrink-0" data-name="Button">
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-nowrap">
        <p className="leading-[18px]">{`3 selected `}</p>
      </div>
    </div>
  );
}

function Merge() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="merge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_5101_1875" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5101_1875)">
            <path d={svgPaths.p304c5000} fill="var(--fill-0, #CDCFD3)" id="call_merge" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <Merge />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#242c40] content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shadow-[0px_0px_11px_1px_#272d3f] shrink-0" data-name="Button">
      <IconLeft1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Merge</p>
      </div>
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5105_4705" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5105_4705)">
            <path d={svgPaths.p3e097d00} fill="var(--fill-0, #CDCFD3)" id="ink_pen" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton1 />
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft2 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Sign Files</p>
      </div>
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5105_4709" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5105_4709)">
            <path d={svgPaths.p13d8bb00} fill="var(--fill-0, #CDCFD3)" id="person_edit" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton2 />
    </div>
  );
}

function IconLeft3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft3 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Send Signature Request</p>
      </div>
    </div>
  );
}

function IconSkeleton3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5105_4713" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #CDCFD3)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5105_4713)">
            <path clipRule="evenodd" d={svgPaths.p3ec95000} fill="var(--fill-0, #CDCFD3)" fillRule="evenodd" id="Union" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton3 />
    </div>
  );
}

function IconLeft4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons4 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft4 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Mapping</p>
      </div>
    </div>
  );
}

function IconSkeleton4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5105_4717" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5105_4717)">
            <path d={svgPaths.p1911a80} fill="var(--fill-0, #CDCFD3)" id="upload_file" />
            <path d={svgPaths.p3a484b00} fill="var(--fill-0, #CDCFD3)" id="e" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton4 />
    </div>
  );
}

function IconLeft5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons5 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft5 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18px]">Uploaded to E-sanchit</p>
      </div>
    </div>
  );
}

function IconSkeleton5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="delete">
          <mask height="18" id="mask0_5010_1918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5010_1918)">
            <path d={svgPaths.p5ce8b80} fill="var(--fill-0, #CF3B3B)" id="delete_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton5 />
    </div>
  );
}

function IconLeft6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons6 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft6 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#cf3b3b] text-[14px] text-nowrap">
        <p className="leading-[18px]">Delete</p>
      </div>
    </div>
  );
}

function BulkActions() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Bulk Actions">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

export default function RowCardTableControls() {
  return (
    <div className="bg-[#050e25] relative rounded-[4px] size-full" data-name="Row Card & Table  Controls">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[4px] py-0 relative size-full">
          <Button />
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-[90deg]">
                <div className="h-full relative w-[26px]" data-name="seperator">
                  <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(84, 93, 118, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 1">
                      <line id="seperator" stroke="var(--stroke-0, #545D76)" x2="26" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BulkActions />
        </div>
      </div>
    </div>
  );
}