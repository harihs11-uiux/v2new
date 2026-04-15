import svgPaths from "./svg-bja508iiij";
import imgNoOfIcons161 from "figma:asset/eecca1cd6e824042cfb97f25bdf2b96f22c83740.png";
import imgNoOfIcons191 from "figma:asset/e7b6affc59c9dd1237c514aaf168d50f8d6dcb1d.png";
import imgNoOfIcons171 from "figma:asset/9a56aeba166b5503b7c81c7fa1192f518dbc3a45.png";
import imgNoOfIcons1 from "figma:asset/912bfa1c143d85dbf0440a4e931c78a240459127.png";
import imgNoOfIcons151 from "figma:asset/05863d2f56bc97e7183703618176d0a829a5422a.png";
import imgChecklistIconsImports21 from "figma:asset/85c8bfc3f95185bd9ed8fc222e7b9848bb47fc8b.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="double_arrow">
          <mask height="18" id="mask0_1312_17906" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1312_17906)">
            <path d={svgPaths.p2c139180} fill="var(--fill-0, #9497A1)" id="double_arrow_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="No. of Icons">
      <Icon />
    </div>
  );
}

function CollapsedTitlebarActions() {
  return (
    <div className="absolute content-stretch flex items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Collapsed Titlebar Actions">
      <NoOfIcons />
    </div>
  );
}

function SidebarCollapsedTitlebar() {
  return (
    <div className="h-12 relative shrink-0 w-[52px]" data-name="Sidebar Collapsed  Titlebar">
      <div className="h-12 overflow-clip relative w-[52px]">
        <CollapsedTitlebarActions />
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative rounded shrink-0" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded shadow-[0px_0px_11px_1px_#272d3f]" />
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" data-name="No. of Icons-16 1" style={{ backgroundImage: `url('${imgNoOfIcons161}')` }} />
    </div>
  );
}

function Header1() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative rounded shrink-0" data-name="Header">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" data-name="No. of Icons-19 1" style={{ backgroundImage: `url('${imgNoOfIcons191}')` }} />
    </div>
  );
}

function Header2() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative rounded shrink-0" data-name="Header">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" data-name="No. of Icons-17 1" style={{ backgroundImage: `url('${imgNoOfIcons171}')` }} />
    </div>
  );
}

function Header3() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative rounded shrink-0" data-name="Header">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" data-name="No. of Icons 1" style={{ backgroundImage: `url('${imgNoOfIcons1}')` }} />
    </div>
  );
}

function Header4() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative rounded shrink-0" data-name="Header">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" data-name="No. of Icons-15 1" style={{ backgroundImage: `url('${imgNoOfIcons151}')` }} />
    </div>
  );
}

function Header5() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative rounded shrink-0" data-name="Header">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-6" data-name="Checklist Icons Imports-2 1" style={{ backgroundImage: `url('${imgChecklistIconsImports21}')` }} />
    </div>
  );
}

function NoOfListCollapsed() {
  return (
    <div className="basis-0 bg-[#36415a] box-border content-stretch flex flex-col gap-1 grow items-center justify-start min-h-px min-w-px overflow-x-clip overflow-y-auto px-0 py-3 relative shrink-0 w-full" data-name="No of List Collapsed">
      <Header />
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
    </div>
  );
}

function NavigatingSections() {
  return (
    <div className="basis-0 bg-[#ffffff] content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[52px]" data-name="Navigating Sections">
      <NoOfListCollapsed />
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="basis-0 bg-[#36415a] grow min-h-px min-w-px relative shrink-0" data-name="Sidebar Skeleton">
      <div className="box-border content-stretch flex flex-col h-full items-center justify-start overflow-clip px-3 py-0 relative">
        <SidebarCollapsedTitlebar />
        <NavigatingSections />
      </div>
      <div aria-hidden="true" className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function NavigationBarCollapsed() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative size-full" data-name="Navigation bar Collapsed">
      <SidebarSkeleton />
    </div>
  );
}