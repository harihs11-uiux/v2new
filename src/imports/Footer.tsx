import svgPaths from "./svg-51wb24vmbb";
import separatorLine from "figma:asset/9b3dd1a73015e5f76794628e5356572f569790cf.png";

interface FooterProps {
  jobDate?: string;
  mot?: string;
  beType?: string;
  customsHouseCode?: string;
  beNo?: string;
  beDate?: string;
  type?: string;
  importer?: string;
  isExport?: boolean;
}

export default function Footer({
  jobDate = "21/04/2025",
  mot = "Sea",
  beType = "Home Consumption",
  customsHouseCode = "INDEL4",
  beNo = "2345664",
  beDate = "21/04/2025",
  type = "Prior BE",
  importer = "Schneider Electrical Private Ltd",
  isExport = false
}: FooterProps) {
  return (
    <div className="bg-[#242c40] border-t border-b border-[#545d76] border-solid relative h-[60px] w-full" data-name="Footer">
      {/* Right side legend */}
      <div className="absolute content-stretch flex gap-[15px] items-center right-[9px] top-1/2 translate-y-[-50%] w-[220px]">
        {/* Master Selection & Digitization */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[8px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="#3874FF" r="3.75" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
            <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">Master Selection</p>
          </div>
          <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[8px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="#8E24AF" r="3.75" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
            <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">Digitization</p>
          </div>
        </div>

        {/* User Modified & Mandatory */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[8px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="#050E25" r="3.75" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
            <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">User Modified</p>
          </div>
          <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
            <div className="h-[8.3px] relative shrink-0 w-[8.719px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                <g>
                  <path d={svgPaths.p32417180} fill="#F44545" />
                </g>
              </svg>
            </div>
            <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">Mandatory</p>
          </div>
        </div>
      </div>

      {/* Left side data fields */}
      <div className="absolute content-stretch flex gap-[12px] items-center left-[7px] top-1/2 translate-y-[-50%]">
        {/* Job Date */}
        <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start not-italic relative shrink-0 text-[12px] w-[73px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-nowrap w-[min-content]">Job Date</p>
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white w-[73px]">
            <p className="leading-[18px]">{jobDate}</p>
          </div>
        </div>

        {/* Separator */}
        <img src={separatorLine} alt="" className="h-[39px] w-auto" />

        {/* MOT */}
        <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start not-italic relative shrink-0 text-[12px] w-[31px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-nowrap w-[31px]">MOT</p>
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white w-full">
            <p className="leading-[18px]">{mot}</p>
          </div>
        </div>

        {/* Separator */}
        <img src={separatorLine} alt="" className="h-[39px] w-auto" />

        {/* BE Type */}
        <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start not-italic relative shrink-0 text-[12px] w-[113px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-nowrap w-[min-content]">{isExport ? 'SB Type' : 'BE Type'}</p>
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white w-[113px]">
            <p className="leading-[18px] text-nowrap overflow-hidden text-ellipsis">{beType}</p>
          </div>
        </div>

        {/* Separator */}
        <img src={separatorLine} alt="" className="h-[39px] w-auto" />

        {/* Customs House Code */}
        <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start not-italic relative shrink-0 text-[12px] w-[108px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-nowrap w-full">Customs Hous Cd.</p>
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white w-full">
            <p className="leading-[18px]">{customsHouseCode}</p>
          </div>
        </div>

        {/* Separator */}
        <img src={separatorLine} alt="" className="h-[39px] w-auto" />

        {/* BE No. */}
        <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start not-italic relative shrink-0 text-[12px] w-[68px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-nowrap w-full">{isExport ? 'SB No.' : 'BE No.'}</p>
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white w-full">
            <p className="leading-[18px]">{beNo}</p>
          </div>
        </div>

        {/* Separator */}
        <img src={separatorLine} alt="" className="h-[39px] w-auto" />

        {/* BE Date */}
        <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start not-italic relative shrink-0 text-[12px] w-[78px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-nowrap w-full">{isExport ? 'SB Dt.' : 'BE Dt.'}</p>
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white w-full">
            <p className="leading-[18px]">{beDate}</p>
          </div>
        </div>

        {/* Separator */}
        <img src={separatorLine} alt="" className="h-[39px] w-auto" />

        {/* Type */}
        <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start not-italic relative shrink-0 text-[12px] w-[51px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-nowrap w-[36px]">Type</p>
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white w-[48px]">
            <p className="leading-[18px]">{type}</p>
          </div>
        </div>

        {/* Separator */}
        <img src={separatorLine} alt="" className="h-[39px] w-auto" />

        {/* Importer */}
        <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start not-italic relative shrink-0 text-[12px] w-[181px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-nowrap w-[58px]">{isExport ? 'Exporter' : 'Importer'}</p>
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white w-full">
            <p className="leading-[18px]">{importer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}