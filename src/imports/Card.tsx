import svgPaths from "./svg-9k8plnf56r";

function Label({ label = "CL : 01" }: { label?: string }) {
  return (
    <div className="box-border content-stretch flex items-start justify-start px-1 py-0 relative rounded-sm shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">{label.includes(':') ? label : `CL : ${label.replace('CL', '')}`}</p>
      </div>
    </div>
  );
}

function CardHeader({ label }: { label?: string }) {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0 w-full" data-name="Card Header">
      <Label label={label} />
    </div>
  );
}

function Title({ title = "Karthik Subburaj" }: { title?: string }) {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full" data-name="Title">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Karthik subburaj</p>
      </div>
    </div>
  );
}

function Textblock({ title }: { title?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Textblock">
      <Title title={title} />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] w-full">
        <p className="leading-[20px]">generated at Wed 30 Dec 2023, 5:30 pm</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-2 py-0 relative rounded-sm shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">BE No. : 2321442</p>
      </div>
      <div className="absolute bg-[#00d0b0] h-4 left-0 rounded-bl-[2px] rounded-tl-[2px] top-0 w-0.5" data-name="Indicator-shape" />
    </div>
  );
}

function Label2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-2 py-0 relative rounded-sm shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">BE Dt. : 22/04/24</p>
      </div>
      <div className="absolute bg-[#00d0b0] h-4 left-0 rounded-bl-[2px] rounded-tl-[2px] top-0 w-0.5" data-name="Indicator-shape" />
    </div>
  );
}

function Label3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-2 py-0 relative rounded-sm shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">Gatepass Received</p>
      </div>
      <div className="absolute bg-[#00d0b0] h-4 left-0 rounded-bl-[2px] rounded-tl-[2px] top-0 w-0.5" data-name="Indicator-shape" />
    </div>
  );
}

function ListOfStatus() {
  return (
    <div className="content-start flex flex-wrap gap-2.5 items-start justify-start relative shrink-0 w-full" data-name="List of Status">
      <Label1 />
      <Label2 />
      <Label3 />
    </div>
  );
}

function Accept() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-4" data-name="Accept">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Accept">
          <mask height="16" id="mask0_1312_9202" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1312_9202)">
            <path d={svgPaths.p365ecc80} fill="var(--fill-0, #00B196)" id="check_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
      <Accept />
    </div>
  );
}

function ApproveButton({ count = 0, onClick }: { count?: number; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <button 
      className="flex items-center justify-center bg-[#00B196] hover:bg-[#009b82] text-white text-[10px] font-bold py-1 px-2 rounded-sm transition-colors uppercase mr-2"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
    >
      Approve ({count})
    </button>
  );
}

function RejectButton({ count = 0, onClick }: { count?: number; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <button 
      className="flex items-center justify-center bg-[#F44545] hover:bg-[#d63a3a] text-white text-[10px] font-bold py-1 px-2 rounded-sm transition-colors uppercase"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
    >
      Reject ({count})
    </button>
  );
}

function AcceptRejectGroup({ approveCount, rejectCount, onApprove, onReject }: { approveCount: number, rejectCount: number, onApprove?: () => void, onReject?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0" data-name="Accept/ Reject Group">
      <ApproveButton count={approveCount} onClick={(e) => onApprove?.()} />
      <RejectButton count={rejectCount} onClick={(e) => onReject?.()} />
    </div>
  );
}

function DigitalSignature() {
  return (
    <div className="relative shrink-0 size-4" data-name="digital signature">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <mask height="16" id="mask0_1312_9198" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1312_9198)">
            <path d={svgPaths.p24e29500} fill="var(--fill-0, #9497A1)" id="ink_pen" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SignRequest() {
  return (
    <div className="overflow-clip relative shrink-0 size-4" data-name="Sign request">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <mask height="16" id="mask0_1312_9222" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1312_9222)">
            <path d={svgPaths.p17d6ba80} fill="var(--fill-0, #9497A1)" id="person_edit" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Transmit() {
  return (
    <div className="relative shrink-0 size-4" data-name="Transmit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <mask height="16" id="mask0_1312_9210" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1312_9210)">
            <path d={svgPaths.p23d4b480} fill="var(--fill-0, #505767)" id="send" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FileDownload() {
  return (
    <div className="relative shrink-0 size-4" data-name="file_download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="file_download">
          <mask height="16" id="mask0_1312_9218" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1312_9218)">
            <path d={svgPaths.p16e9500} fill="var(--fill-0, #9497A1)" id="file_download_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-4" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="more_vert">
          <mask height="16" id="mask0_1312_9214" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1312_9214)">
            <path d={svgPaths.pe754580} fill="var(--fill-0, #9497A1)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RightGroup() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Right group">
      <DigitalSignature />
      <SignRequest />
      <Transmit />
      <FileDownload />
      <MoreVert />
    </div>
  );
}

function ActionCenter({ 
  approveCount, 
  rejectCount, 
  onApprove, 
  onReject,
  showButtons = true
}: { 
  approveCount: number; 
  rejectCount: number; 
  onApprove?: () => void; 
  onReject?: () => void;
  showButtons?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 relative shrink-0 w-full" data-name="Action Center">
      {showButtons && (
        <AcceptRejectGroup approveCount={approveCount} rejectCount={rejectCount} onApprove={onApprove} onReject={onReject} />
      )}
      <div className="flex justify-start w-full">
        <RightGroup />
      </div>
    </div>
  );
}

export default function Card({ 
  label, 
  title,
  approveCount = 0,
  rejectCount = 0,
  onApprove,
  onReject,
  showButtons = true
}: { 
  label?: string; 
  title?: string;
  approveCount?: number;
  rejectCount?: number;
  onApprove?: () => void;
  onReject?: () => void;
  showButtons?: boolean;
}) {
  return (
    <div className="bg-[#32394c] relative rounded-lg shadow-[0px_0px_11px_1px_#272d3f] size-full" data-name="Card">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative size-full">
          <CardHeader label={label} />
          <Textblock title={title} />
          <ListOfStatus />
          <ActionCenter 
            approveCount={approveCount} 
            rejectCount={rejectCount} 
            onApprove={onApprove} 
            onReject={onReject}
            showButtons={showButtons}
          />
        </div>
      </div>
    </div>
  );
}