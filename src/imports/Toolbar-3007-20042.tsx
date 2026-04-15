import svgPaths from "./svg-zwb3ntppvv";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

function ArrowDropdown() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[16px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3007_20046)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p32976780} fill="var(--fill-0, #CDCFD3)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_3007_20046">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown />
    </div>
  );
}

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Imports");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="content-stretch flex items-center px-[2px] py-[4px] relative shrink-0 w-[64px] cursor-pointer" data-name="Dropdown">
          <p className="font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px not-italic relative shrink-0 text-[14px] text-nowrap text-white">
            {selectedOption}
          </p>
          <DropdownIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setSelectedOption("Imports")}>
          Imports
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedOption("Exports")}>
          Exports
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Block() {
  return (
    <div className="bg-[#242c40] content-stretch flex flex-col h-[48px] items-center justify-center px-0 py-[11px] relative shrink-0 w-[96px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Dropdown />
    </div>
  );
}

function Refresh() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Refresh">
          <mask height="16" id="mask0_3007_20050" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_3007_20050)">
            <path d={svgPaths.pe68900} fill="var(--fill-0, #CDCFD3)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DownloadButton() {
  return (
    null
  );
}

function RightSideControls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Right Side Controls">
      <DownloadButton />
    </div>
  );
}

function ListToolbar() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="List Toolbar">
      <div aria-hidden="true" className="absolute border-0 border-[#545d76] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] py-0 relative size-full bg-[rgb(45,54,77)]">
          <RightSideControls />
        </div>
      </div>
    </div>
  );
}

export default function Toolbar() {
  return (
    <div className="bg-[#2d364d] content-stretch flex items-center relative size-full" data-name="Toolbar">
      <div aria-hidden="true" className="absolute border-[#545d76] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Block />
      <ListToolbar />
    </div>
  );
}