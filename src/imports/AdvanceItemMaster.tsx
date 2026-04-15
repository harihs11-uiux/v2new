import svgPaths from "./svg-m49589it3u";
import searchSvgPaths1 from "./svg-bc7jx2ycv4";
import searchSvgPaths2 from "./svg-6vce3vx1xh";
import { imgAddCircle } from "./svg-jda5q";

// --- Constants & Config ---
const COLUMN_WIDTHS = {
  partCode: "w-[162px]",
  description: "w-[262px]",
  hsn: "w-[120px]",
  shipper: "w-[162px]",
  customer: "w-[162px]",
  beDate: "w-[184px]",
  notifNo: "w-[134px]",
  srNo: "w-[84px]",
  endUse: "w-[184px]",
  manufacturer: "w-[134px]",
  brand: "w-[84px]",
  model: "w-[184px]",
  user: "w-[184px]",
};

const mockData = [
  { partCode: "PT-001", description: "Engine Valve", hsn: "8481", shipper: "ABC Corp", customer: "XYZ Ltd", beDate: "2023-01-01", bcdNotif: "N/A", bcdSrNo: "001", igstNotif: "N/A", igstSrNo: "002", endUse: "Industrial", manufacturer: "BrandA", brand: "BrandA", model: "V1", createdBy: "Admin", updatedBy: "Admin" },
  { partCode: "PT-002", description: "Brake Pad", hsn: "8708", shipper: "Def Corp", customer: "LMN Ltd", beDate: "2023-01-02", bcdNotif: "N/A", bcdSrNo: "003", igstNotif: "N/A", igstSrNo: "004", endUse: "Automotive", manufacturer: "BrandB", brand: "BrandB", model: "B2", createdBy: "User1", updatedBy: "User1" },
  { partCode: "PT-003", description: "Oil Filter", hsn: "8421", shipper: "GHI Corp", customer: "OPQ Ltd", beDate: "2023-01-03", bcdNotif: "N/A", bcdSrNo: "005", igstNotif: "N/A", igstSrNo: "006", endUse: "Industrial", manufacturer: "BrandC", brand: "BrandC", model: "F3", createdBy: "User2", updatedBy: "User2" },
  { partCode: "PT-004", description: "Air Filter", hsn: "8421", shipper: "JKL Corp", customer: "RST Ltd", beDate: "2023-01-04", bcdNotif: "N/A", bcdSrNo: "007", igstNotif: "N/A", igstSrNo: "008", endUse: "Automotive", manufacturer: "BrandD", brand: "BrandD", model: "A4", createdBy: "User3", updatedBy: "User3" },
  { partCode: "PT-005", description: "Spark Plug", hsn: "8511", shipper: "MNO Corp", customer: "UVW Ltd", beDate: "2023-01-05", bcdNotif: "N/A", bcdSrNo: "009", igstNotif: "N/A", igstSrNo: "010", endUse: "Industrial", manufacturer: "BrandE", brand: "BrandE", model: "S5", createdBy: "User4", updatedBy: "User4" },
];

// --- Sub-components ---

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">Advance Item Master Selection</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Heading">
      <Text />
    </div>
  );
}

function Close({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[18px] cursor-pointer" data-name="close" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <mask height="18" id="mask0_5498_39927" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39927)">
            <path d={svgPaths.p4280c0} fill="var(--fill-0, #CDCFD3)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleBar({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute bg-[#10182c] content-stretch flex items-start justify-between left-0 px-[12px] py-[24px] right-0 top-0" data-name="Title Bar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-b border-solid inset-0 pointer-events-none" />
      <Heading />
      <Close onClick={onClose} />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="info">
          <mask height="18" id="mask0_5498_39911" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39911)">
            <path d={svgPaths.p8b4de80} fill="var(--fill-0, #626776)" id="info_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SelectedDetails1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Selected Details">
      <Info />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Selected Party</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px]">-</p>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5e3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">|</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Branch</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#050e25] text-[12px]">-</p>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#d0d5e3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">|</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">AD Code</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#050e25] text-[12px]">-</p>
    </div>
  );
}

function SelectedDetails() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Selected Details">
      <SelectedDetails1 />
    </div>
  );
}

function Cancel({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="Cancel" onClick={onClick}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Cancel</p>
      </div>
    </div>
  );
}

function AcceptChanges() {
  return (
    <div className="bg-[#3874ff] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Accept Changes">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Link</p>
      </div>
    </div>
  );
}

function ActionButtonGroup({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Action Button Group">
      <Cancel onClick={onClose} />
      <AcceptChanges />
    </div>
  );
}

function Footer({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute bg-[#ebeef7] bottom-[2px] content-stretch flex items-center justify-between left-0 px-[12px] py-[16px] right-0" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-solid border-t inset-0 pointer-events-none" />
      <SelectedDetails />
      <ActionButtonGroup onClose={onClose} />
    </div>
  );
}

function Popup({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute bg-[#cad2e5] inset-0 overflow-clip rounded-[16px]" data-name="Popup">
      <TitleBar onClose={onClose} />
      <Footer onClose={onClose} />
    </div>
  );
}

function FormLableCell() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex h-full items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-l border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis">Desc as per Invoice</p>
    </div>
  );
}

function Textfield() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#050e25] text-[14px] whitespace-pre-wrap">218633108008 CAP SCREW 0636.102.066</p>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Field">
      <Textfield />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Component 5">
      <Field />
    </div>
  );
}

function GridHorizontal() {
  return (
    <div className="absolute bg-white bottom-[110px] content-stretch flex h-[45px] items-center justify-between left-0 right-0" data-name="Grid Horizontal">
      <FormLableCell />
      <Component />
    </div>
  );
}

function FormLableCell1() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex h-full items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-l border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis">Edit Description</p>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Textfield">
      <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
            <p className="leading-[18px] whitespace-pre-wrap">Enter Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Field">
      <Textfield1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Component 5">
      <Field1 />
    </div>
  );
}

function GridHorizontal1() {
  return (
    <div className="absolute bg-white bottom-[66px] content-stretch flex h-[44px] items-center justify-between left-0 right-0" data-name="Grid Horizontal">
      <FormLableCell1 />
      <Component1 />
    </div>
  );
}

function SearchIcon({ paths }: { paths: any }) {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5498_39939" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39939)">
            <path d={paths.p2c731080} fill="var(--fill-0, #626776)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SearchPartCode() {
  return (
    <div className="bg-[#f6f9ff] content-stretch flex items-center leading-[0] p-[8px] relative rounded-[4px] shrink-0 flex-1 min-w-[200px]" data-name="Search Textbox">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Search by Part Code</p>
      </div>
      <SearchIcon paths={searchSvgPaths1} />
    </div>
  );
}

function SearchCustomsDesc() {
  return (
    <div className="bg-[#f6f9ff] content-stretch flex items-center leading-[0] p-[8px] relative rounded-[4px] shrink-0 flex-[2] min-w-[300px]" data-name="Search Textbox">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Customs Description</p>
      </div>
      <SearchIcon paths={searchSvgPaths1} />
    </div>
  );
}

function SearchHSN() {
  return (
    <div className="bg-[#f6f9ff] flex-1 min-h-px min-w-[200px] relative rounded-[4px]" data-name="Search Textbox">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center leading-[0] p-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
            <p className="leading-[18px] whitespace-pre-wrap">Search by HSN</p>
          </div>
          <SearchIcon paths={searchSvgPaths1} />
        </div>
      </div>
    </div>
  );
}

function SearchImporterName() {
  return (
    <div className="bg-[#f6f9ff] content-stretch flex items-center leading-[0] p-[8px] relative rounded-[4px] shrink-0 flex-[1.5] min-w-[200px]" data-name="Search Textbox">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Importer Name</p>
      </div>
      <SearchIcon paths={searchSvgPaths2} />
    </div>
  );
}

function SearchImporterBranch() {
  return (
    <div className="bg-[#f6f9ff] content-stretch flex items-center leading-[0] p-[8px] relative rounded-[4px] shrink-0 flex-1 min-w-[150px]" data-name="Search Textbox">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Importer Branch</p>
      </div>
      <SearchIcon paths={searchSvgPaths2} />
    </div>
  );
}

function SearchSupplierName() {
  return (
    <div className="bg-[#f6f9ff] content-stretch flex items-center leading-[0] p-[8px] relative rounded-[4px] shrink-0 flex-[2] min-w-[250px]" data-name="Search Textbox">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[#9497a1] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Supplier Name</p>
      </div>
      <SearchIcon paths={searchSvgPaths2} />
    </div>
  );
}

function ClearAllButton() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-white/10" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Clear All</p>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute bg-[rgba(45,54,77,0)] content-stretch flex flex-col justify-center left-0 px-[12px] py-[11px] right-0 top-[66px] gap-[8px]" data-name="Toolbar">
      
      {/* Row 1 */}
      <div className="flex gap-[16px] w-full items-center">
        <SearchPartCode />
        <SearchCustomsDesc />
        <SearchHSN />
      </div>

      {/* Row 2 */}
      <div className="flex gap-[16px] w-full items-center">
        <SearchImporterName />
        <SearchImporterBranch />
        <SearchSupplierName />
        <ClearAllButton />
      </div>
    </div>
  );
}

function FilterList({ color = "#3874FF" }: { color?: string }) {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter_list">
          <mask height="16" id="mask0_5534_53339" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5534_53339)">
            <path d={svgPaths.p8cd7480} fill={`var(--fill-0, ${color})`} id="filter_list_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters({ color }: { color?: string }) {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="filters">
      <FilterList color={color} />
    </div>
  );
}

function NoOfIcons({ color }: { color?: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <Filters color={color} />
    </div>
  );
}

function HeaderCell({ label, width, showFilter = false, filterColor = "#626776" }: { label: string, width: string, showFilter?: boolean, filterColor?: string }) {
  return (
    <div className={`bg-[#ebeef7] content-stretch flex gap-[4px] h-full items-center p-[8px] relative shrink-0 ${width}`} data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-ellipsis flex-1 whitespace-nowrap">{label}</p>
      {showFilter && <NoOfIcons color={filterColor} />}
    </div>
  );
}

function TableFreezedHeader() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 z-30 sticky left-0" data-name="Table Freezed Header">
      <HeaderCell label="Part Code" width={COLUMN_WIDTHS.partCode} showFilter={true} filterColor="#3874FF" />
      <HeaderCell label="Description" width={COLUMN_WIDTHS.description} showFilter={true} />
    </div>
  );
}

function GroupHeader({ title, subCells }: { title: string, subCells: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-col h-full isolate items-start justify-center pb-px relative shrink-0" data-name="Header Group">
      {/* Title Row */}
      <div className="bg-[#ebeef7] mb-[-1px] relative shrink-0 w-full z-[2]" data-name="Table Header Cell">
        <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
        </div>
      </div>
      {/* Sub Cells Row */}
      <div className="content-stretch flex items-start mb-[-1px] overflow-clip relative shrink-0 z-[1]" data-name="Table Group Header">
        {subCells}
      </div>
    </div>
  );
}

function TableScrollableHeader() {
  return (
    <div className="content-stretch flex flex-none items-center min-h-px min-w-px relative z-20" data-name="Table Scrollable Header">
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="HSN" width={COLUMN_WIDTHS.hsn} showFilter={true} /></div>
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="Shipper" width={COLUMN_WIDTHS.shipper} showFilter={true} /></div>
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="Customer" width={COLUMN_WIDTHS.customer} showFilter={true} /></div>
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="BE Date" width={COLUMN_WIDTHS.beDate} /></div>
      
      {/* Groups */}
      <div className="flex flex-row items-center self-stretch">
        <GroupHeader 
          title="BCD Notification" 
          subCells={<>
            <HeaderCell label="BCD notification No." width={COLUMN_WIDTHS.notifNo} />
            <HeaderCell label="BCD Ntfn Sr.No" width={COLUMN_WIDTHS.srNo} />
          </>} 
        />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <GroupHeader 
          title="IGST Notification" 
          subCells={<>
            <HeaderCell label="IGST Notification No." width={COLUMN_WIDTHS.notifNo} />
            <HeaderCell label="IGST Ntfn Sr.No" width={COLUMN_WIDTHS.srNo} />
          </>} 
        />
      </div>

      <div className="flex flex-row items-center self-stretch"><HeaderCell label="End Use" width={COLUMN_WIDTHS.endUse} /></div>
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="Manufacturer" width={COLUMN_WIDTHS.manufacturer} /></div>
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="Brand" width={COLUMN_WIDTHS.brand} /></div>
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="Model" width={COLUMN_WIDTHS.model} /></div>
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="Created by" width={COLUMN_WIDTHS.user} /></div>
      <div className="flex flex-row items-center self-stretch"><HeaderCell label="Updated by" width={COLUMN_WIDTHS.user} /></div>
      
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[67px] rotate-180 w-[5px]">
          <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.7191deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.7191deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
    </div>
  );
}

function TableEdit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="table edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="table edit">
          <rect fill="var(--fill-0, #626776)" height="12" id="Rectangle 3" width="1.2" x="5" y="3" />
          <path d={svgPaths.p3c1edf00} fill="var(--fill-0, #626776)" id="Subtract" />
          <path d={svgPaths.p6dabd00} fill="var(--fill-0, #626776)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0" data-name="No. of Icons">
      <TableEdit />
    </div>
  );
}

function TableHeaderCell19() {
  return (
    <div className="bg-[#ebeef7] content-stretch flex h-full items-center justify-center p-[8px] relative shrink-0" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons5 />
    </div>
  );
}

function TableFreezedHeaderOptions() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-30" data-name="Table Freezed Header Options">
      <TableHeaderCell19 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-fit min-w-full z-[3]" data-name="Table Header">
      <TableFreezedHeader />
      <TableScrollableHeader />
      <TableFreezedHeaderOptions />
    </div>
  );
}

function GenericCell({ text, width }: { text: string; width: string }) {
  return (
    <div className={`content-stretch flex items-center p-[8px] relative shrink-0 ${width}`} data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
          <p className="leading-[18px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function TableFreezedRow({ data }: { data: any }) {
  return (
    <div className="bg-white relative shrink-0 sticky left-0 z-10" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <GenericCell text={data.partCode} width={COLUMN_WIDTHS.partCode} />
        <GenericCell text={data.description} width={COLUMN_WIDTHS.description} />
      </div>
    </div>
  );
}

function TableScrollableRow({ data }: { data: any }) {
  return (
    <div className="bg-white flex-none min-h-px min-w-px relative" data-name="Table Scrollable Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <GenericCell text={data.hsn} width={COLUMN_WIDTHS.hsn} />
        <GenericCell text={data.shipper} width={COLUMN_WIDTHS.shipper} />
        <GenericCell text={data.customer} width={COLUMN_WIDTHS.customer} />
        <GenericCell text={data.beDate} width={COLUMN_WIDTHS.beDate} />
        
        {/* BCD Notif Group */}
        <GenericCell text={data.bcdNotif} width={COLUMN_WIDTHS.notifNo} />
        <GenericCell text={data.bcdSrNo} width={COLUMN_WIDTHS.srNo} />
        
        {/* IGST Notif Group */}
        <GenericCell text={data.igstNotif} width={COLUMN_WIDTHS.notifNo} />
        <GenericCell text={data.igstSrNo} width={COLUMN_WIDTHS.srNo} />
        
        <GenericCell text={data.endUse} width={COLUMN_WIDTHS.endUse} />
        <GenericCell text={data.manufacturer} width={COLUMN_WIDTHS.manufacturer} />
        <GenericCell text={data.brand} width={COLUMN_WIDTHS.brand} />
        <GenericCell text={data.model} width={COLUMN_WIDTHS.model} />
        <GenericCell text={data.createdBy} width={COLUMN_WIDTHS.user} />
        <GenericCell text={data.updatedBy} width={COLUMN_WIDTHS.user} />
        
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
        <div className="absolute bottom-0 flex items-center justify-center right-[116px] top-0 w-[5px]">
          <div className="-scale-y-100 flex-none h-[34px] rotate-180 w-[5px]">
            <div className="size-full" style={{ backgroundImage: "linear-gradient(-89.4466deg, rgba(26, 38, 120, 0) 23.858%, rgba(26, 38, 120, 0.12) 163.63%)" }} />
          </div>
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
          <mask height="18" id="mask0_5498_39915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39915)">
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
      <MoreVert />
    </div>
  );
}

function TableBodyCell17() {
  return (
    <div className="content-stretch flex h-full items-start p-[8px] relative shrink-0" data-name="Table Body Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-l border-solid inset-0 pointer-events-none" />
      <NoOfIcons8 />
    </div>
  );
}

function TableFreezedRowOptions() {
  return (
    <div className="bg-white relative shrink-0 z-10" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell17 />
        </div>
      </div>
    </div>
  );
}

function TableRow1({ data }: { data: any }) {
  return (
    <div className="bg-white relative shrink-0 w-fit min-w-full z-[8] group" data-name="Table Row 14">
      <div aria-hidden="true" className="absolute border-[#3874ff] border-b border-solid border-t inset-0 pointer-events-none opacity-0 group-hover:opacity-100 z-20" />
      <div className="bg-clip-padding border-[transparent] border-b border-solid border-t content-stretch flex items-start relative w-full">
        <TableFreezedRow data={data} />
        <TableScrollableRow data={data} />
        <TableFreezedRowOptions />
      </div>
    </div>
  );
}

function AddCircle() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[18px_18px]" data-name="add_circle" style={{ maskImage: `url('${imgAddCircle}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="add_circle">
          <mask height="18" id="mask0_5498_39903" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5498_39903)">
            <path d={svgPaths.p2027f100} fill="var(--fill-0, #3874FF)" id="add_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <AddCircle />
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Icon Left">
      <NoOfIcons9 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Add</p>
      </div>
    </div>
  );
}

function Textfield2() {
  return (
    <div className="content-stretch flex items-start p-[4px] relative shrink-0 w-[43px]" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#050e25] text-[14px] whitespace-pre-wrap">100</p>
    </div>
  );
}

function AddRow() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shadow-[0px_0px_13px_0px_rgba(26,38,120,0.08)] shrink-0 w-full" data-name="Add Row">
      <Button1 />
      <Textfield2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#626776] text-[14px] w-[166px] whitespace-pre-wrap">more rows at the bottom</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="opacity-0 relative shrink-0 w-full z-[1]" data-name="Table Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[8px] relative w-full">
        <AddRow />
      </div>
    </div>
  );
}

function RowSet() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-fit min-w-full" data-name="Row Set">
      {mockData.map((data, index) => (
        <TableRow1 key={index} data={data} />
      ))}
      <TableRow />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-visible relative w-fit min-w-full z-[2]" data-name="Body">
      <RowSet />
    </div>
  );
}

function CellTable() {
  return (
    <div className="bg-[#fdfeff] content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative rounded-[4px] w-full overflow-x-auto" data-name="Cell Table">
      <TableHeader />
      <Body />
    </div>
  );
}

function ItemMaster() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[172px_12px_167px_12px] items-start overflow-hidden rounded-[8px]" data-name="Item Master">
      <CellTable />
    </div>
  );
}

export default function AdvanceItemMaster({ onClose }: { onClose?: () => void }) {
  return (
    <div className="relative size-full" data-name="Advance Item Master">
      <Popup onClose={onClose} />
      <GridHorizontal />
      <GridHorizontal1 />
      <Toolbar />
      <ItemMaster />
    </div>
  );
}
