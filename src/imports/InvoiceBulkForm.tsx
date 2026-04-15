import svgPaths from "./svg-qhk4pxolen";
import { imgIcon } from "./svg-hbo8h";
import { useState } from 'react';
import { AddChargesPopover } from '../components/figma/AddChargesPopover';
import { Plus } from 'lucide-react';

function Group() {
  return (
    <div className="absolute h-[16px] left-1/2 top-[4px] translate-x-[-50%] w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="Group 4339">
          <g filter="url(#filter0_i_1565_48275)" id="Rectangle 274261">
            <path d={svgPaths.pb26d980} fill="url(#paint0_linear_1565_48275)" />
          </g>
          <path d="M1.38456 6.25515H10.6154" data-figma-bg-blur-radius="4" id="Line 141" stroke="url(#paint1_linear_1565_48275)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 8.16778H10.6154" data-figma-bg-blur-radius="4" id="Line 142" stroke="url(#paint2_linear_1565_48275)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 10.0804H10.6154" data-figma-bg-blur-radius="4" id="Line 143" stroke="url(#paint3_linear_1565_48275)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 11.993H10.6154" data-figma-bg-blur-radius="4" id="Line 144" stroke="url(#paint4_linear_1565_48275)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M1.38456 13.9056H6" data-figma-bg-blur-radius="4" id="Line 145" stroke="url(#paint5_linear_1565_48275)" strokeLinecap="round" strokeWidth="0.9" />
          <path d={svgPaths.pcfd4e80} fill="url(#paint6_linear_1565_48275)" id="Rectangle 274262" />
          <path d={svgPaths.p1301ce00} fill="url(#paint7_linear_1565_48275)" id="Rectangle 274304" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_1565_48275" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.825477 0 0 0 0 0.187048 0 0 0 0 0.116112 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1565_48275" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1565_48275" x1="6" x2="6" y1="0" y2="16">
            <stop offset="0.0844957" stopColor="#FF9C8C" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1565_48275" x1="6" x2="6" y1="6.25515" y2="7.25515">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1565_48275" x1="6" x2="6" y1="8.16778" y2="9.16778">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1565_48275" x1="6" x2="6" y1="10.0804" y2="11.0804">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1565_48275" x1="6" x2="6" y1="11.993" y2="12.993">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1565_48275" x1="3.69228" x2="3.69228" y1="13.9056" y2="14.9056">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1565_48275" x1="10.571" x2="7.78375" y1="1.09782" y2="4.22608">
            <stop stopColor="#FF7667" />
            <stop offset="1" stopColor="#FFC0BA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1565_48275" x1="3" x2="3" y1="1" y2="5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.43" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChecklistIconsImports() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checklist Icons Imports">
      <Group />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="No. of Icons">
      <ChecklistIconsImports />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Heading">
      <NoOfIcons />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#050e25] text-[16px] text-nowrap whitespace-pre">Invoice Details</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="bg-[#dde3f2] h-[40px] relative rounded-tl-[4px] shrink-0 w-full" data-name="Section Header">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
      <Heading />
    </div>
  );
}

function SectionSubheader() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-1.5px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="1" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">Invoice INFO</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`Inv. No & Dt.(1/11)`}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Enter Invoice No</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#f44545] text-[12px]">
        <p className="leading-[18px] text-[7.74px]">●</p>
      </div>
    </div>
  );
}

function Textfield() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[12.5%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.375px_-2.25px] mask-size-[18px_18px]" data-name="icon" style={{ maskImage: `url('${imgIcon}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <g id="icon">
          <path d={svgPaths.p3e528100} fill="var(--fill-0, #626776)" id="calendar_today" />
          <rect fill="var(--fill-0, #626776)" height="3.375" id="Rectangle 1609" rx="0.5" width="3.375" x="5.625" y="7.875" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="date picker">
      <Icon />
    </div>
  );
}

function CalenderIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Calender icon">
      <DatePicker />
    </div>
  );
}

function DatePickerTextbox() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Date picker Textbox">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">Invoice Date</p>
          <CalenderIcon />
        </div>
      </div>
    </div>
  );
}

function FieldType() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field Type">
      <DatePickerTextbox />
    </div>
  );
}

function SingleMultiField() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field1 />
      <FieldType />
    </div>
  );
}

function GridHorizontal() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell />
      <SingleMultiField />
    </div>
  );
}

function FormLableCell1() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`AssVal. & Duty`}</p>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Assessable value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield1 />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Duty</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield2 />
    </div>
  );
}

function SingleMultiField1() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field3 />
      <Field2 />
    </div>
  );
}

function GridHorizontal1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell1 />
      <SingleMultiField1 />
    </div>
  );
}

function FormRow() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal />
      <GridHorizontal1 />
    </div>
  );
}

function FormLableCell2() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Terms of Invoice</p>
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
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
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select Terms of Invoice</p>
          <DropdownIcon />
        </div>
      </div>
    </div>
  );
}

function FieldType1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field Type">
      <Dropdown />
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <FieldType1 />
    </div>
  );
}

function GridHorizontal2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell2 />
      <Component />
    </div>
  );
}

function FormLableCell3() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Terms Place</p>
    </div>
  );
}

function Textfield3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Terms Place</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field />
    </div>
  );
}

function GridHorizontal3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell3 />
      <Component1 />
    </div>
  );
}

function FormRow1() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal2 />
      <GridHorizontal3 />
    </div>
  );
}

function FormLableCell4() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Nature of Transctn.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="content">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] whitespace-pre">Nature of Transaction</p>
      <p className="[white-space-collapse:collapse] basis-0 grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#f44545] text-[7.74px]">●</p>
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown1 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <Content1 />
          <DropdownIcon1 />
        </div>
      </div>
    </div>
  );
}

function FieldType2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field Type">
      <Dropdown1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <FieldType2 />
    </div>
  );
}

function GridHorizontal4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell4 />
      <Component2 />
    </div>
  );
}

function FormLableCell5() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Payment Terms</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="content">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] whitespace-pre">Payment terms</p>
      <p className="[white-space-collapse:collapse] basis-0 grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#f44545] text-[7.74px]">●</p>
    </div>
  );
}

function ArrowDropdown2() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown2 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <Content2 />
          <DropdownIcon2 />
        </div>
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Dropdown2 />
    </div>
  );
}

function SingleMultiField2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field4 />
    </div>
  );
}

function GridHorizontal5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell5 />
      <SingleMultiField2 />
    </div>
  );
}

function FormRow2() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal4 />
      <GridHorizontal5 />
    </div>
  );
}

function FormLableCell6() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Valuation Method</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="content">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] whitespace-pre">Valuation Method</p>
      <p className="[white-space-collapse:collapse] basis-0 grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#f44545] text-[7.74px]">●</p>
    </div>
  );
}

function ArrowDropdown3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown3 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <Content3 />
          <DropdownIcon3 />
        </div>
      </div>
    </div>
  );
}

function Field5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Dropdown3 />
    </div>
  );
}

function SingleMultiField3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field5 />
    </div>
  );
}

function GridHorizontal6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell6 />
      <SingleMultiField3 />
    </div>
  );
}

function FormLableCell7() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Other Related</p>
    </div>
  );
}

function Textfield4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Other Related</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield4 />
    </div>
  );
}

function Component3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field6 />
    </div>
  );
}

function GridHorizontal7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell7 />
      <Component3 />
    </div>
  );
}

function FormRow3() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal6 />
      <GridHorizontal7 />
    </div>
  );
}

function FormLableCell8() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Invoice Value</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Invoice Value</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#f44545] text-[12px]">
        <p className="leading-[18px] text-[7.74px]">●</p>
      </div>
    </div>
  );
}

function Textfield5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Field7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="content">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] whitespace-pre">Select Currency</p>
      <p className="[white-space-collapse:collapse] basis-0 grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#f44545] text-[7.74px]">●</p>
    </div>
  );
}

function ArrowDropdown4() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown4 />
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <Content5 />
          <DropdownIcon4 />
        </div>
      </div>
    </div>
  );
}

function Field8() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Dropdown4 />
    </div>
  );
}

function SingleMultiField4() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field7 />
      <Field8 />
    </div>
  );
}

function GridHorizontal8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell8 />
      <SingleMultiField4 />
    </div>
  );
}

function FormLableCell9() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Exchange Rate</p>
    </div>
  );
}

function Textfield6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Exchange Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield6 />
    </div>
  );
}

function Component4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field9 />
    </div>
  );
}

function GridHorizontal9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell9 />
      <Component4 />
    </div>
  );
}

function FormRow4() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal8 />
      <GridHorizontal9 />
    </div>
  );
}

function FormLableCell10() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`PO No. & Dt.`}</p>
    </div>
  );
}

function Textfield7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">PO No.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field10() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield7 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[12.5%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.375px_-2.25px] mask-size-[18px_18px]" data-name="icon" style={{ maskImage: `url('${imgIcon}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <g id="icon">
          <path d={svgPaths.p3e528100} fill="var(--fill-0, #626776)" id="calendar_today" />
          <rect fill="var(--fill-0, #626776)" height="3.375" id="Rectangle 1609" rx="0.5" width="3.375" x="5.625" y="7.875" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="date picker">
      <Icon1 />
    </div>
  );
}

function CalenderIcon1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Calender icon">
      <DatePicker1 />
    </div>
  );
}

function DatePickerTextbox1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Date picker Textbox">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">PO Date</p>
          <CalenderIcon1 />
        </div>
      </div>
    </div>
  );
}

function Field11() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <DatePickerTextbox1 />
    </div>
  );
}

function SingleMultiField5() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field10 />
      <Field11 />
    </div>
  );
}

function GridHorizontal10() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell10 />
      <SingleMultiField5 />
    </div>
  );
}

function FormLableCell11() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`Contract No & Dt.`}</p>
    </div>
  );
}

function Textfield8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Contract Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field12() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield8 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute inset-[12.5%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.375px_-2.25px] mask-size-[18px_18px]" data-name="icon" style={{ maskImage: `url('${imgIcon}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <g id="icon">
          <path d={svgPaths.p3e528100} fill="var(--fill-0, #626776)" id="calendar_today" />
          <rect fill="var(--fill-0, #626776)" height="3.375" id="Rectangle 1609" rx="0.5" width="3.375" x="5.625" y="7.875" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker2() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="date picker">
      <Icon2 />
    </div>
  );
}

function CalenderIcon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Calender icon">
      <DatePicker2 />
    </div>
  );
}

function DatePickerTextbox2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Date picker Textbox">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">Contract Date</p>
          <CalenderIcon2 />
        </div>
      </div>
    </div>
  );
}

function Field13() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <DatePickerTextbox2 />
    </div>
  );
}

function SingleMultiField6() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field12 />
      <Field13 />
    </div>
  );
}

function GridHorizontal11() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell11 />
      <SingleMultiField6 />
    </div>
  );
}

function FormRow5() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal10 />
      <GridHorizontal11 />
    </div>
  );
}

function FormLableCell12() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`LC Number & Dt.`}</p>
    </div>
  );
}

function Textfield9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">LC Number</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field14() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield9 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[12.5%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.375px_-2.25px] mask-size-[18px_18px]" data-name="icon" style={{ maskImage: `url('${imgIcon}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <g id="icon">
          <path d={svgPaths.p3e528100} fill="var(--fill-0, #626776)" id="calendar_today" />
          <rect fill="var(--fill-0, #626776)" height="3.375" id="Rectangle 1609" rx="0.5" width="3.375" x="5.625" y="7.875" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="date picker">
      <Icon3 />
    </div>
  );
}

function CalenderIcon3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Calender icon">
      <DatePicker3 />
    </div>
  );
}

function DatePickerTextbox3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Date picker Textbox">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">LC Date</p>
          <CalenderIcon3 />
        </div>
      </div>
    </div>
  );
}

function Field15() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <DatePickerTextbox3 />
    </div>
  );
}

function SingleMultiField7() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field14 />
      <Field15 />
    </div>
  );
}

function GridHorizontal12() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell12 />
      <SingleMultiField7 />
    </div>
  );
}

function FormLableCell13() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Agency Commi.</p>
    </div>
  );
}

function Textfield10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field16() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield10 />
    </div>
  );
}

function ArrowDropdown5() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown5 />
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Currency</p>
          <DropdownIcon5 />
        </div>
      </div>
    </div>
  );
}

function Field17() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Dropdown5 />
    </div>
  );
}

function Textfield11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field18() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield11 />
    </div>
  );
}

function SingleMultiField8() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field16 />
      <Field17 />
      <Field18 />
    </div>
  );
}

function GridHorizontal13() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell13 />
      <SingleMultiField8 />
    </div>
  );
}

function FormRow6() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal12 />
      <GridHorizontal13 />
    </div>
  );
}

function FormLableCell14() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Discount</p>
    </div>
  );
}

function Textfield12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field19() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield12 />
    </div>
  );
}

function ArrowDropdown6() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown6 />
    </div>
  );
}

function Dropdown6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Currency</p>
          <DropdownIcon6 />
        </div>
      </div>
    </div>
  );
}

function Field20() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Dropdown6 />
    </div>
  );
}

function Textfield13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field21() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield13 />
    </div>
  );
}

function SingleMultiField9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field19 />
      <Field20 />
      <Field21 />
    </div>
  );
}

function GridHorizontal14() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell14 />
      <SingleMultiField9 />
    </div>
  );
}

function FormLableCell15() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Loading Charges</p>
    </div>
  );
}

function Textfield14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Charges</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field22() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield14 />
    </div>
  );
}

function ArrowDropdown7() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown7 />
    </div>
  );
}

function Dropdown7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Currency</p>
          <DropdownIcon7 />
        </div>
      </div>
    </div>
  );
}

function Field23() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Dropdown7 />
    </div>
  );
}

function Textfield15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field24() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield15 />
    </div>
  );
}

function SingleMultiField10() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field22 />
      <Field23 />
      <Field24 />
    </div>
  );
}

function GridHorizontal15() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell15 />
      <SingleMultiField10 />
    </div>
  );
}

function FormRow7() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal14 />
      <GridHorizontal15 />
    </div>
  );
}

function FormLableCell16() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">HSS Load</p>
    </div>
  );
}

function Textfield16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field25() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield16 />
    </div>
  );
}

function Textfield17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field26() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield17 />
    </div>
  );
}

function SingleMultiField11() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field25 />
      <Field26 />
    </div>
  );
}

function GridHorizontal16() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell16 />
      <SingleMultiField11 />
    </div>
  );
}

function FormLableCell17() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Sales Condition 2</p>
    </div>
  );
}

function Textfield18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Sales Condition 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field27() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield18 />
    </div>
  );
}

function Component5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field27 />
    </div>
  );
}

function GridHorizontal17() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell17 />
      <Component5 />
    </div>
  );
}

function FormRow8() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal16 />
      <GridHorizontal17 />
    </div>
  );
}

function FormLableCell18() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Sales Condition 3</p>
    </div>
  );
}

function Textfield19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Sales Condition 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field28() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield19 />
    </div>
  );
}

function Component6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field28 />
    </div>
  );
}

function GridHorizontal18() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell18 />
      <Component6 />
    </div>
  );
}

function FormLableCell19() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Sales Condition 4</p>
    </div>
  );
}

function Textfield20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Sales Condition 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field29() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield20 />
    </div>
  );
}

function Component7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field29 />
    </div>
  );
}

function GridHorizontal19() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell19 />
      <Component7 />
    </div>
  );
}

function FormRow9() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal18 />
      <GridHorizontal19 />
    </div>
  );
}

function FormLableCell20() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Sales Condition 5</p>
    </div>
  );
}

function Textfield21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Sales Condition 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field30() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield21 />
    </div>
  );
}

function Component8() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field30 />
    </div>
  );
}

function GridHorizontal20() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell20 />
      <Component8 />
    </div>
  );
}

function FormLableCell21() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Sales Condition 5</p>
    </div>
  );
}

function Textfield22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Sales Condition 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field31() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield22 />
    </div>
  );
}

function Component9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field31 />
    </div>
  );
}

function GridHorizontal21() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell21 />
      <Component9 />
    </div>
  );
}

function FormRow10() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal20 />
      <GridHorizontal21 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <FormRow />
      <FormRow1 />
      <FormRow2 />
      <FormRow3 />
      <FormRow4 />
      <FormRow5 />
      <FormRow6 />
      <FormRow7 />
      <FormRow8 />
      <FormRow9 />
      <FormRow10 />
    </div>
  );
}

function NoOfRows() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Container />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SectionSubheader />
      <NoOfRows />
    </div>
  );
}

function SectionSubheader1() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-1.5px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="2" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">SUPPLIER DETAILS</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MasterSelection() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="master selection">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="master selection">
          <mask height="18" id="mask0_1565_48240" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48240)">
            <path d={svgPaths.p3d558af0} fill="var(--fill-0, #626776)" id="apps" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <MasterSelection />
    </div>
  );
}

function RightIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Right Icon">
      <NoOfIcons1 />
    </div>
  );
}

function FormLableCell22() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Name</p>
      <RightIcon />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Name</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#f44545] text-[12px]">
        <p className="leading-[18px] text-[7.74px]">●</p>
      </div>
    </div>
  );
}

function Textfield23() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Field32() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield23 />
    </div>
  );
}

function Component10() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field32 />
    </div>
  );
}

function GridHorizontal22() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell22 />
      <Component10 />
    </div>
  );
}

function FormLableCell23() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">ID/Branch</p>
    </div>
  );
}

function Textfield24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field33() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield24 />
    </div>
  );
}

function Textfield25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Branch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field34() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield25 />
    </div>
  );
}

function SingleMultiField12() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field33 />
      <Field34 />
    </div>
  );
}

function GridHorizontal23() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell23 />
      <SingleMultiField12 />
    </div>
  );
}

function FormRow11() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal22 />
      <GridHorizontal23 />
    </div>
  );
}

function FormLableCell24() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Address</p>
        </div>
      </div>
    </div>
  );
}

function LableCount() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-[150px]" data-name="Lable Count">
      <FormLableCell24 />
    </div>
  );
}

function Textfield26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field35() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield26 />
    </div>
  );
}

function Component11() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Component 5">
      <Field35 />
    </div>
  );
}

function FieldCount() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start min-h-px min-w-px relative shrink-0" data-name="Field Count">
      <Component11 />
    </div>
  );
}

function GridHorizontal24() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <LableCount />
      <FieldCount />
    </div>
  );
}

function FormLableCell25() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`City & Pin`}</p>
    </div>
  );
}

function ArrowDropdown8() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown8 />
    </div>
  );
}

function Dropdown8() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[30px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">City</p>
          <DropdownIcon8 />
        </div>
      </div>
    </div>
  );
}

function FieldType3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field Type">
      <Dropdown8 />
    </div>
  );
}

function Textfield27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Pin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field36() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield27 />
    </div>
  );
}

function SingleMultiField13() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <FieldType3 />
      <Field36 />
    </div>
  );
}

function MultiGridHorizontalGrid() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Multi Grid Horizontal/Grid5">
      <FormLableCell25 />
      <SingleMultiField13 />
    </div>
  );
}

function FormLableCell26() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`State & Country`}</p>
    </div>
  );
}

function ArrowDropdown9() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown9 />
    </div>
  );
}

function Dropdown9() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[30px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">State</p>
          <DropdownIcon9 />
        </div>
      </div>
    </div>
  );
}

function FieldType4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field Type">
      <Dropdown9 />
    </div>
  );
}

function ArrowDropdown10() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown10 />
    </div>
  );
}

function Dropdown10() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[30px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Country</p>
          <DropdownIcon10 />
        </div>
      </div>
    </div>
  );
}

function FieldType5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field Type">
      <Dropdown10 />
    </div>
  );
}

function SingleMultiField14() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <FieldType4 />
      <FieldType5 />
    </div>
  );
}

function MultiGridHorizontalGrid1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Multi Grid Horizontal/Grid5">
      <FormLableCell26 />
      <SingleMultiField14 />
    </div>
  );
}

function GridHorizontal25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <MultiGridHorizontalGrid />
      <MultiGridHorizontalGrid1 />
    </div>
  );
}

function FormRow12() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal24 />
      <GridHorizontal25 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <FormRow11 />
      <FormRow12 />
    </div>
  );
}

function NoOfRows1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Container1 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SectionSubheader1 />
      <NoOfRows1 />
    </div>
  );
}

function SectionSubheader2() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-2px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="3" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">SVB DETAILS</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell27() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Related</p>
    </div>
  );
}

function Switch() {
  return (
    <div className="h-[12px] relative shrink-0 w-[25px]" data-name="Switch">
      <div className="absolute bottom-[-8.33%] left-0 right-[-4%] top-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 14">
          <g id="Switch">
            <rect fill="var(--fill-0, #00B196)" height="12" id="Base" rx="6" width="25" y="1" />
            <g filter="url(#filter0_d_1576_29739)" id="Indicator">
              <circle cx="19" cy="7" fill="var(--fill-0, white)" r="4" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14" id="filter0_d_1576_29739" width="14" x="12" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1576_29739" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1576_29739" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon Skeleton 1">
      <Switch />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Yes</p>
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <IconSkeleton />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Left">
      <NoOfIcons2 />
    </div>
  );
}

function Textfield28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex gap-[4px] items-start px-[4px] py-[6px] relative w-full">
          <IconLeft />
        </div>
      </div>
    </div>
  );
}

function FieldType6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field Type">
      <Textfield28 />
    </div>
  );
}

function Component12() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <FieldType6 />
    </div>
  );
}

function GridHorizontal26() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell27 />
      <Component12 />
    </div>
  );
}

function FormLableCell28() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`SVB Ref No. & Dt.`}</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">SVB Ref No.</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#f44545] text-[12px]">
        <p className="leading-[18px] text-[7.74px]">●</p>
      </div>
    </div>
  );
}

function Textfield29() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Field37() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield29 />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="content">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] whitespace-pre">Date</p>
      <p className="[white-space-collapse:collapse] basis-0 grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#f44545] text-[7.74px]">●</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute inset-[12.5%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.375px_-2.25px] mask-size-[18px_18px]" data-name="icon" style={{ maskImage: `url('${imgIcon}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <g id="icon">
          <path d={svgPaths.p3e528100} fill="var(--fill-0, #626776)" id="calendar_today" />
          <rect fill="var(--fill-0, #626776)" height="3.375" id="Rectangle 1609" rx="0.5" width="3.375" x="5.625" y="7.875" />
        </g>
      </svg>
    </div>
  );
}

function DatePicker4() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="date picker">
      <Icon4 />
    </div>
  );
}

function CalenderIcon4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Calender icon">
      <DatePicker4 />
    </div>
  );
}

function DatePickerTextbox4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Date picker Textbox">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[6px] relative w-full">
          <Content8 />
          <CalenderIcon4 />
        </div>
      </div>
    </div>
  );
}

function FieldType7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field Type">
      <DatePickerTextbox4 />
    </div>
  );
}

function SingleMultiField15() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field37 />
      <FieldType7 />
    </div>
  );
}

function GridHorizontal27() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell28 />
      <SingleMultiField15 />
    </div>
  );
}

function FormRow13() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal26 />
      <GridHorizontal27 />
    </div>
  );
}

function FormLableCell29() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">SVB Flag</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="content">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] whitespace-pre">SVB Flag</p>
      <p className="[white-space-collapse:collapse] basis-0 grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#f44545] text-[7.74px]">●</p>
    </div>
  );
}

function ArrowDropdown11() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown11 />
    </div>
  );
}

function Dropdown11() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[30px] items-center px-[4px] py-[6px] relative w-full">
          <Content9 />
          <DropdownIcon11 />
        </div>
      </div>
    </div>
  );
}

function FieldType8() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field Type">
      <Dropdown11 />
    </div>
  );
}

function Component13() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <FieldType8 />
    </div>
  );
}

function GridHorizontal28() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell29 />
      <Component13 />
    </div>
  );
}

function FormLableCell30() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Cus. House</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] grow items-center leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="content">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] whitespace-pre">Customs House Code</p>
      <p className="[white-space-collapse:collapse] basis-0 grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#f44545] text-[7.74px]">●</p>
    </div>
  );
}

function ArrowDropdown12() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown12 />
    </div>
  );
}

function Dropdown12() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[30px] items-center px-[4px] py-[6px] relative w-full">
          <Content10 />
          <DropdownIcon12 />
        </div>
      </div>
    </div>
  );
}

function FieldType9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field Type">
      <Dropdown12 />
    </div>
  );
}

function Component14() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <FieldType9 />
    </div>
  );
}

function GridHorizontal29() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell30 />
      <Component14 />
    </div>
  );
}

function FormRow14() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal28 />
      <GridHorizontal29 />
    </div>
  );
}

function FormLableCell31() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">SVB Load(Assbl)</p>
    </div>
  );
}

function Textfield30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">SVB Load(Assbl) Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field38() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield30 />
    </div>
  );
}

function ArrowDropdown13() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown13 />
    </div>
  );
}

function Dropdown13() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[30px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Final/Provisional</p>
          <DropdownIcon13 />
        </div>
      </div>
    </div>
  );
}

function FieldType10() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field Type">
      <Dropdown13 />
    </div>
  );
}

function SingleMultiField16() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field38 />
      <FieldType10 />
    </div>
  );
}

function GridHorizontal30() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell31 />
      <SingleMultiField16 />
    </div>
  );
}

function FormLableCell32() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">SVB Load(Duty)</p>
    </div>
  );
}

function Textfield31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">SVB Load(Duty) Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field39() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield31 />
    </div>
  );
}

function ArrowDropdown14() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown14 />
    </div>
  );
}

function Dropdown14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Final/Provisional</p>
          <DropdownIcon14 />
        </div>
      </div>
    </div>
  );
}

function FieldType11() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field Type">
      <Dropdown14 />
    </div>
  );
}

function SingleMultiField17() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field39 />
      <FieldType11 />
    </div>
  );
}

function GridHorizontal31() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell32 />
      <SingleMultiField17 />
    </div>
  );
}

function FormRow15() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal30 />
      <GridHorizontal31 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <FormRow13 />
      <FormRow14 />
      <FormRow15 />
    </div>
  );
}

function NoOfRows2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Table />
    </div>
  );
}

function Form2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SectionSubheader2 />
      <NoOfRows2 />
    </div>
  );
}

function SectionSubheader3() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-1.5px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="4" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">BROKER DETAILS</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MasterSelection1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="master selection">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="master selection">
          <mask height="18" id="mask0_1565_48240" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48240)">
            <path d={svgPaths.p3d558af0} fill="var(--fill-0, #626776)" id="apps" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <MasterSelection1 />
    </div>
  );
}

function RightIcon1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Right Icon">
      <NoOfIcons3 />
    </div>
  );
}

function FormLableCell33() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Name</p>
      <RightIcon1 />
    </div>
  );
}

function Textfield32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field40() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield32 />
    </div>
  );
}

function Component15() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field40 />
    </div>
  );
}

function GridHorizontal32() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell33 />
      <Component15 />
    </div>
  );
}

function FormLableCell34() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">ID/Branch</p>
    </div>
  );
}

function Textfield33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field41() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield33 />
    </div>
  );
}

function Textfield34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Branch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field42() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield34 />
    </div>
  );
}

function SingleMultiField18() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Single/Multi Field">
      <Field41 />
      <Field42 />
    </div>
  );
}

function GridHorizontal33() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell34 />
      <SingleMultiField18 />
    </div>
  );
}

function FormRow16() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal32 />
      <GridHorizontal33 />
    </div>
  );
}

function FormLableCell35() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Address</p>
        </div>
      </div>
    </div>
  );
}

function LableCount1() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-[150px]" data-name="Lable Count">
      <FormLableCell35 />
    </div>
  );
}

function Textfield35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field43() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield35 />
    </div>
  );
}

function Component16() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Component 5">
      <Field43 />
    </div>
  );
}

function FieldCount1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start min-h-px min-w-px relative shrink-0" data-name="Field Count">
      <Component16 />
    </div>
  );
}

function GridHorizontal34() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <LableCount1 />
      <FieldCount1 />
    </div>
  );
}

function FormLableCell36() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`City & Pin`}</p>
    </div>
  );
}

function ArrowDropdown15() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown15 />
    </div>
  );
}

function Dropdown15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">City</p>
          <DropdownIcon15 />
        </div>
      </div>
    </div>
  );
}

function Field44() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Dropdown15 />
    </div>
  );
}

function Textfield36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Pin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field45() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield36 />
    </div>
  );
}

function Component17() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field44 />
      <Field45 />
    </div>
  );
}

function MultiGridHorizontalGrid2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Multi Grid Horizontal/Grid5">
      <FormLableCell36 />
      <Component17 />
    </div>
  );
}

function FormLableCell37() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`State & Country`}</p>
    </div>
  );
}

function ArrowDropdown16() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown16 />
    </div>
  );
}

function Dropdown16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">State</p>
          <DropdownIcon16 />
        </div>
      </div>
    </div>
  );
}

function Field46() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Dropdown16 />
    </div>
  );
}

function ArrowDropdown17() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown17 />
    </div>
  );
}

function Dropdown17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Country</p>
          <DropdownIcon17 />
        </div>
      </div>
    </div>
  );
}

function Field47() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Dropdown17 />
    </div>
  );
}

function Component18() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field46 />
      <Field47 />
    </div>
  );
}

function MultiGridHorizontalGrid3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Multi Grid Horizontal/Grid5">
      <FormLableCell37 />
      <Component18 />
    </div>
  );
}

function GridHorizontal35() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <MultiGridHorizontalGrid2 />
      <MultiGridHorizontalGrid3 />
    </div>
  );
}

function FormRow17() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal34 />
      <GridHorizontal35 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <FormRow16 />
      <FormRow17 />
    </div>
  );
}

function NoOfRows3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Container2 />
    </div>
  );
}

function Form3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SectionSubheader3 />
      <NoOfRows3 />
    </div>
  );
}

function SectionSubheader4() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-1.5px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="5" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">SELLEr DETAILS</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MasterSelection2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="master selection">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="master selection">
          <mask height="18" id="mask0_1565_48240" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48240)">
            <path d={svgPaths.p3d558af0} fill="var(--fill-0, #626776)" id="apps" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <MasterSelection2 />
    </div>
  );
}

function RightIcon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Right Icon">
      <NoOfIcons4 />
    </div>
  );
}

function FormLableCell38() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Name</p>
      <RightIcon2 />
    </div>
  );
}

function Textfield37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field48() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield37 />
    </div>
  );
}

function Component19() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field48 />
    </div>
  );
}

function GridHorizontal36() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell38 />
      <Component19 />
    </div>
  );
}

function FormLableCell39() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">ID / Branch</p>
    </div>
  );
}

function Textfield38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field49() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield38 />
    </div>
  );
}

function Textfield39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Branch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field50() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield39 />
    </div>
  );
}

function Component20() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field49 />
      <Field50 />
    </div>
  );
}

function GridHorizontal37() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell39 />
      <Component20 />
    </div>
  );
}

function FormRow18() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal36 />
      <GridHorizontal37 />
    </div>
  );
}

function FormLableCell40() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Address</p>
    </div>
  );
}

function Textfield40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field51() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield40 />
    </div>
  );
}

function Component21() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field51 />
    </div>
  );
}

function GridHorizontal38() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell40 />
      <Component21 />
    </div>
  );
}

function FormLableCell41() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`City & Pin`}</p>
    </div>
  );
}

function ArrowDropdown18() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown18 />
    </div>
  );
}

function Dropdown18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">City</p>
          <DropdownIcon18 />
        </div>
      </div>
    </div>
  );
}

function Field52() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Dropdown18 />
    </div>
  );
}

function Textfield41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Pin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field53() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield41 />
    </div>
  );
}

function Component22() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field52 />
      <Field53 />
    </div>
  );
}

function GridHorizontal39() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell41 />
      <Component22 />
    </div>
  );
}

function FormRow19() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal38 />
      <GridHorizontal39 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <FormRow18 />
      <FormRow19 />
    </div>
  );
}

function NoOfRows4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Container3 />
    </div>
  );
}

function Form4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SectionSubheader4 />
      <NoOfRows4 />
    </div>
  );
}

function SectionSubheader5() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-1.5px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="6" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">third party details</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MasterSelection3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="master selection">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="master selection">
          <mask height="18" id="mask0_1565_48240" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1565_48240)">
            <path d={svgPaths.p3d558af0} fill="var(--fill-0, #626776)" id="apps" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <MasterSelection3 />
    </div>
  );
}

function RightIcon3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Right Icon">
      <NoOfIcons5 />
    </div>
  );
}

function FormLableCell42() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Name</p>
      <RightIcon3 />
    </div>
  );
}

function Textfield42() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field54() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield42 />
    </div>
  );
}

function Component23() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field54 />
    </div>
  );
}

function GridHorizontal40() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell42 />
      <Component23 />
    </div>
  );
}

function FormLableCell43() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">ID / Branch</p>
    </div>
  );
}

function Textfield43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field55() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield43 />
    </div>
  );
}

function Textfield44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Branch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field56() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield44 />
    </div>
  );
}

function Component24() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field55 />
      <Field56 />
    </div>
  );
}

function GridHorizontal41() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell43 />
      <Component24 />
    </div>
  );
}

function FormRow20() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal40 />
      <GridHorizontal41 />
    </div>
  );
}

function FormLableCell44() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Address</p>
        </div>
      </div>
    </div>
  );
}

function LableCount2() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-[150px]" data-name="Lable Count">
      <FormLableCell44 />
    </div>
  );
}

function Textfield45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field57() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield45 />
    </div>
  );
}

function Component25() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Component 5">
      <Field57 />
    </div>
  );
}

function FieldCount2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start min-h-px min-w-px relative shrink-0" data-name="Field Count">
      <Component25 />
    </div>
  );
}

function GridHorizontal42() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <LableCount2 />
      <FieldCount2 />
    </div>
  );
}

function FormLableCell45() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`Ctry & Subdivision`}</p>
    </div>
  );
}

function ArrowDropdown19() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown19 />
    </div>
  );
}

function Dropdown19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Country</p>
          <DropdownIcon19 />
        </div>
      </div>
    </div>
  );
}

function Field58() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Dropdown19 />
    </div>
  );
}

function Textfield46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Subdivision</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field59() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield46 />
    </div>
  );
}

function Component26() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field58 />
      <Field59 />
    </div>
  );
}

function MultiGridHorizontalGrid4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Multi Grid Horizontal/Grid5">
      <FormLableCell45 />
      <Component26 />
    </div>
  );
}

function FormLableCell46() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`City & Pin`}</p>
    </div>
  );
}

function ArrowDropdown20() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown20 />
    </div>
  );
}

function Dropdown20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">City</p>
          <DropdownIcon20 />
        </div>
      </div>
    </div>
  );
}

function Field60() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Dropdown20 />
    </div>
  );
}

function Textfield47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Pin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field61() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Textfield47 />
    </div>
  );
}

function Component27() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field60 />
      <Field61 />
    </div>
  );
}

function MultiGridHorizontalGrid5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Multi Grid Horizontal/Grid5">
      <FormLableCell46 />
      <Component27 />
    </div>
  );
}

function GridHorizontal43() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <MultiGridHorizontalGrid4 />
      <MultiGridHorizontalGrid5 />
    </div>
  );
}

function FormRow21() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal42 />
      <GridHorizontal43 />
    </div>
  );
}

function FormLableCell47() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`AEO Code & Country`}</p>
    </div>
  );
}

function Textfield48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">AEO Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field62() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Field 1">
      <Textfield48 />
    </div>
  );
}

function ArrowDropdown21() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown21 />
    </div>
  );
}

function Dropdown21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">AEO Country</p>
          <DropdownIcon21 />
        </div>
      </div>
    </div>
  );
}

function Field63() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Field 2">
      <Dropdown21 />
    </div>
  );
}

function Component28() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field62 />
      <Field63 />
    </div>
  );
}

function GridHorizontal44() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[2]" data-name="Grid Horizontal">
      <FormLableCell47 />
      <Component28 />
    </div>
  );
}

function FormLableCell48() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[150px]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">AEO Role</p>
    </div>
  );
}

function Textfield49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">AEO Role</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field64() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <Textfield49 />
    </div>
  );
}

function Component29() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 5">
      <Field64 />
    </div>
  );
}

function GridHorizontal45() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 z-[1]" data-name="Grid Horizontal">
      <FormLableCell48 />
      <Component29 />
    </div>
  );
}

function FormRow22() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <GridHorizontal44 />
      <GridHorizontal45 />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <FormRow20 />
      <FormRow21 />
      <FormRow22 />
    </div>
  );
}

function NoOfRows5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Table1 />
    </div>
  );
}

function Form5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SectionSubheader5 />
      <NoOfRows5 />
    </div>
  );
}

function SectionSubheader6() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-2px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="7" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">charges</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell49() {
  return (
    <div className="bg-white h-[30px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell50() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[86px] z-[5]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Rate</p>
    </div>
  );
}

function FormLableCell51() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[4]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Amount</p>
        </div>
      </div>
    </div>
  );
}

function FormLableCell52() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[1]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Currency</p>
        </div>
      </div>
    </div>
  );
}

function FormRow23() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell49 />
      <FormLableCell50 />
      <FormLableCell51 />
      <FormLableCell52 />
    </div>
  );
}

function FormLableCell53() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Misc Charge</p>
    </div>
  );
}

function Textfield50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield50 />
    </div>
  );
}

function Textfield51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType13() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield51 />
    </div>
  );
}

function ArrowDropdown22() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown22 />
    </div>
  );
}

function Dropdown22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon22 />
        </div>
      </div>
    </div>
  );
}

function FieldType14() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown22 />
    </div>
  );
}

function FormRow24() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell53 />
      <FieldType12 />
      <FieldType13 />
      <FieldType14 />
    </div>
  );
}

function Switch1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[25px]" data-name="Switch">
      <div className="absolute bottom-[-8.33%] left-0 right-[-4%] top-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 14">
          <g id="Switch">
            <rect fill="var(--fill-0, #00B196)" height="12" id="Base" rx="6" width="25" y="1" />
            <g filter="url(#filter0_d_1576_29739)" id="Indicator">
              <circle cx="19" cy="7" fill="var(--fill-0, white)" r="4" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14" id="filter0_d_1576_29739" width="14" x="12" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1576_29739" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1576_29739" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ToogleSwitch() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toogle Switch">
      <Switch1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Yes</p>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="No. of Icons">
      <ToogleSwitch />
    </div>
  );
}

function RightIcon4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Right Icon">
      <NoOfIcons6 />
    </div>
  );
}

function FormLableCell54() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Freight</p>
      <RightIcon4 />
    </div>
  );
}

function Textfield52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield52 />
    </div>
  );
}

function Textfield53() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType16() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield53 />
    </div>
  );
}

function ArrowDropdown23() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown23 />
    </div>
  );
}

function Dropdown23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon23 />
        </div>
      </div>
    </div>
  );
}

function FieldType17() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown23 />
    </div>
  );
}

function FormRow25() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell54 />
      <FieldType15 />
      <FieldType16 />
      <FieldType17 />
    </div>
  );
}

function FormLableCell55() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Insurance</p>
    </div>
  );
}

function Textfield54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield54 />
    </div>
  );
}

function Textfield55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType19() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield55 />
    </div>
  );
}

function ArrowDropdown24() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown24 />
    </div>
  );
}

function Dropdown24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon24 />
        </div>
      </div>
    </div>
  );
}

function FieldType20() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown24 />
    </div>
  );
}

function FormRow26() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell55 />
      <FieldType18 />
      <FieldType19 />
      <FieldType20 />
    </div>
  );
}

function FormLableCell56() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">HSS</p>
    </div>
  );
}

function Textfield56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield56 />
    </div>
  );
}

function Textfield57() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType22() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield57 />
    </div>
  );
}

function ArrowDropdown25() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown25 />
    </div>
  );
}

function Dropdown25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon25 />
        </div>
      </div>
    </div>
  );
}

function FieldType23() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown25 />
    </div>
  );
}

function FormRow27() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell56 />
      <FieldType21 />
      <FieldType22 />
      <FieldType23 />
    </div>
  );
}

function FormLableCell57() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[306px] z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Discount</p>
    </div>
  );
}

function Textfield58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield58 />
    </div>
  );
}

function Textfield59() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType25() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield59 />
    </div>
  );
}

function ArrowDropdown26() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon26() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown26 />
    </div>
  );
}

function Dropdown26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon26 />
        </div>
      </div>
    </div>
  );
}

function FieldType26() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown26 />
    </div>
  );
}

function FormRow28() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell57 />
      <FieldType24 />
      <FieldType25 />
      <FieldType26 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <FormRow23 />
      <FormRow24 />
      <FormRow25 />
      <FormRow26 />
      <FormRow27 />
      <FormRow28 />
    </div>
  );
}

function NoOfRows6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Container4 />
    </div>
  );
}

function Form6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SectionSubheader6 />
      <NoOfRows6 />
    </div>
  );
}

function SectionSubheader7() {
  return (
    <div className="bg-[#ebeef7] h-[34px] relative shrink-0 w-full" data-name="Section Subheader">
      <div className="h-[34px] overflow-clip relative rounded-[inherit] w-full">
        <ol className="[white-space-collapse:collapse] absolute block font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-2px)] list-decimal text-[#050e25] text-[14px] text-center text-nowrap top-[calc(50%-9px)] translate-x-[-50%]" start="8" style={{ fontVariationSettings: "'wdth' 100" }}>
          <li className="list-inside ms-[21px]">
            <span className="leading-[18px]">misc sub charges</span>
          </li>
        </ol>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell58() {
  return (
    <div className="basis-0 bg-white grow h-[30px] min-h-px min-w-px relative shrink-0 z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FormLableCell59() {
  return (
    <div className="bg-[#f1f4f8] content-stretch flex items-center px-[4px] py-[6px] relative shrink-0 w-[86px] z-[5]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Rate</p>
    </div>
  );
}

function FormLableCell60() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[4]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Amount</p>
        </div>
      </div>
    </div>
  );
}

function FormLableCell61() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[1]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Currency</p>
        </div>
      </div>
    </div>
  );
}

function FormRow29() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell58 />
      <FormLableCell59 />
      <FormLableCell60 />
      <FormLableCell61 />
    </div>
  );
}

function FormLableCell62() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{`Brokerage & Commissions`}</p>
        </div>
      </div>
    </div>
  );
}

function Textfield60() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield60 />
    </div>
  );
}

function Textfield61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType28() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield61 />
    </div>
  );
}

function ArrowDropdown27() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon27() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown27 />
    </div>
  );
}

function Dropdown27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon27 />
        </div>
      </div>
    </div>
  );
}

function FieldType29() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown27 />
    </div>
  );
}

function FormRow30() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell62 />
      <FieldType27 />
      <FieldType28 />
      <FieldType29 />
    </div>
  );
}

function FormLableCell63() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Cost of Containers</p>
        </div>
      </div>
    </div>
  );
}

function Textfield62() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield62 />
    </div>
  );
}

function Textfield63() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType31() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield63 />
    </div>
  );
}

function ArrowDropdown28() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon28() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown28 />
    </div>
  );
}

function Dropdown28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon28 />
        </div>
      </div>
    </div>
  );
}

function FieldType32() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown28 />
    </div>
  );
}

function FormRow31() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell63 />
      <FieldType30 />
      <FieldType31 />
      <FieldType32 />
    </div>
  );
}

function FormLableCell64() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Cost of Packing</p>
        </div>
      </div>
    </div>
  );
}

function Textfield64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield64 />
    </div>
  );
}

function Textfield65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType34() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield65 />
    </div>
  );
}

function ArrowDropdown29() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon29() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown29 />
    </div>
  );
}

function Dropdown29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon29 />
        </div>
      </div>
    </div>
  );
}

function FieldType35() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown29 />
    </div>
  );
}

function FormRow32() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell64 />
      <FieldType33 />
      <FieldType34 />
      <FieldType35 />
    </div>
  );
}

function FormLableCell65() {
  return (
    <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[6]" data-name="Form Lable Cell">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">Handling Charges</p>
        </div>
      </div>
    </div>
  );
}

function Textfield66() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
        </div>
      </div>
    </div>
  );
}

function FieldType36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
      <Textfield66 />
    </div>
  );
}

function Textfield67() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
            <p className="leading-[18px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldType37() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
      <Textfield67 />
    </div>
  );
}

function ArrowDropdown30() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]" data-name="arrow_dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1565_48295)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" id="expand_more" />
        </g>
        <defs>
          <clipPath id="clip0_1565_48295">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon30() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
      <ArrowDropdown30 />
    </div>
  );
}

function Dropdown30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
          <DropdownIcon30 />
        </div>
      </div>
    </div>
  );
}

function FieldType38() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
      <Dropdown30 />
    </div>
  );
}

function FormRow33() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
      <FormLableCell65 />
      <FieldType36 />
      <FieldType37 />
      <FieldType38 />
    </div>
  );
}

const ChargeRow = ({ name }: { name: string }) => {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Form Row">
       <div className="basis-0 bg-[#f1f4f8] grow min-h-px min-w-px relative shrink-0 z-[6]" data-name="Form Lable Cell">
          <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[4px] py-[6px] relative w-full">
               <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-nowrap whitespace-pre">{name}</p>
            </div>
          </div>
       </div>
       <div className="content-stretch flex items-start relative shrink-0 w-[86px] z-[5]" data-name="Field Type">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
             <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
             <div className="size-full">
                <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
                   <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px]">1</p>
                </div>
             </div>
          </div>
       </div>
       <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="Field Type">
           <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Textfield">
              <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="size-full">
                 <div className="content-stretch flex items-start px-[4px] py-[6px] relative w-full">
                    <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[14px]">
                       <p className="leading-[18px]">Amount</p>
                    </div>
                 </div>
              </div>
           </div>
       </div>
       <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 z-[3]" data-name="Field Type">
           <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Dropdown">
              <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                 <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[6px] relative w-full">
                    <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[14px] text-nowrap">Select</p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Dropdown Icon">
                        <div className="ml-0 mt-0 relative size-[18px]">
                           <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <g clipPath="url(#clip0_1565_48295)">
                                 <path d={svgPaths.p1a435af0} fill="var(--fill-0, #626776)" />
                              </g>
                              <defs>
                                 <clipPath id="clip0_1565_48295"><rect fill="white" height="18" width="18" /></clipPath>
                              </defs>
                           </svg>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
       </div>
    </div>
  );
}

function Container5() {
  const [activeCharges, setActiveCharges] = useState([
    "Brokerage & Commissions",
    "Cost of Containers",
    "Cost of Packing",
    "Handling Charges"
  ]);

  const handleApplyCharges = (newCharges: string[]) => {
      setActiveCharges(newCharges);
  }

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <FormRow29 />
      {activeCharges.map((charge, index) => (
          <ChargeRow key={index} name={charge} />
      ))}
      <div className="w-full flex justify-start p-2 bg-white border-b border-[#d0d5e3]">
        <AddChargesPopover onApply={handleApplyCharges} currentCharges={activeCharges}>
             <button className="flex items-center gap-1 text-[#3874FF] text-[13px] font-medium hover:underline">
                <Plus className="w-4 h-4" /> Add Charge
            </button>
        </AddChargesPopover>
      </div>
    </div>
  );
}

function NoOfRows7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="No of Rows">
      <Container5 />
    </div>
  );
}

function Form7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <SectionSubheader7 />
      <NoOfRows7 />
    </div>
  );
}

function SubGroup() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sub Group">
      <Form />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <Form6 />
      <Form7 />
    </div>
  );
}

function Form8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Form">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <SectionHeader />
        <SubGroup />
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5e3] border-[1px_1px_1px_0px] border-solid bottom-[-1px] left-0 pointer-events-none right-[-1px] rounded-bl-[4px] rounded-br-[5px] rounded-tl-[4px] rounded-tr-[5px] top-[-1px]" />
    </div>
  );
}

export default function InvoiceBulkForm() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Invoice Bulk Form">
      <Form8 />
    </div>
  );
}