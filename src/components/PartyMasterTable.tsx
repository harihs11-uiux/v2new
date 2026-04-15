import React, { useState } from 'react';
import { MoreVertical, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import svgPaths from '../imports/svg-xkhl016h09';
import svgToolbar from '../imports/svg-xt6gnxzo5f';

// Custom Filter Icon Component
const FilterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      d={svgPaths.p8cd7480}
      fill="currentColor"
    />
  </svg>
);

interface BranchData {
  branchNo: string;
  nickname: string;
  address1: string;
  city: string;
  cstRegNo: string;
  roles: string;
  adCode: string[];
}

interface PartyData {
  id: string;
  sNo: number;
  partyName: string;
  partyId: string;
  iecCode: string;
  adCodes: string[];
  gstinType: string;
  panNo: string;
  partyType: 'Vendor' | 'Customer' | 'Both' | 'None';
  role: 'Foreign Party' | 'Indian Party' | 'Air Line' | 'Shipping line';
  createdBy: { name: string; avatarColor: string };
  updatedBy: { name: string; avatarColor: string };
  branches?: BranchData[];
}

const mockBranches: BranchData[] = [
  { branchNo: '01', nickname: 'BOI', address1: 'Row 1 - 123 Maple St.', city: 'New York', cstRegNo: 'Item B - XY123457', roles: 'Foreign Party', adCode: ['83959353', 'V83959353'] },
  { branchNo: '02', nickname: 'BluO', address1: 'Row 2 - 456 Oak Ave.', city: 'Tokyo', cstRegNo: 'Item C - XY123458', roles: 'Foreign Party', adCode: ['83959353'] },
  { branchNo: '03', nickname: 'BOcean', address1: 'Row 3 - 789 Pine Rd.', city: 'Paris', cstRegNo: 'Item D - XY123459', roles: 'Foreign Party', adCode: ['83959353'] },
  { branchNo: '04', nickname: 'BlueImp', address1: 'Row 4 - 321 Birch Blvd.', city: 'Sydney', cstRegNo: 'Item E - XY123460', roles: 'Foreign Party', adCode: ['83959353'] },
  { branchNo: '05', nickname: 'The Blue', address1: 'Row 5 - 654 Cedar Ct.', city: 'Rio de Janeiro', cstRegNo: 'Item F - XY123461', roles: 'Foreign Party', adCode: ['839593538'] },
  { branchNo: '06', nickname: 'Big Blue', address1: 'Row 6 - 987 Elm Way.', city: 'Cairo', cstRegNo: 'Item G - XY123462', roles: 'Foreign Party', adCode: ['83959353'] },
];

const mockPartyData: PartyData[] = [
  {
    id: '1', sNo: 1, partyName: 'Lakeside International Imports', partyId: 'NF00098231', iecCode: '1002345678', adCodes: ['12445124'], gstinType: '12ABCDE1234F1Z5', panNo: 'PANUI00001', partyType: 'Vendor', role: 'Foreign Party', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' },
    branches: mockBranches
  },
  {
    id: '2', sNo: 2, partyName: 'Sierra Import Corporation', partyId: 'NF00067482', iecCode: '1029384756', adCodes: ['12445124'], gstinType: '12ABCDE1234F1Z5', panNo: 'PANUI00002', partyType: 'None', role: 'Indian Party', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' },
    branches: mockBranches
  },
  {
    id: '3', sNo: 3, partyName: 'Celestial Trade Co.', partyId: 'NF00015973', iecCode: '1029384756', adCodes: ['4254645'], gstinType: '12ABCDE1234F1Z5', panNo: 'PANUI00003', partyType: 'Vendor', role: 'Indian Party', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' },
    branches: mockBranches
  },
  {
    id: '4', sNo: 4, partyName: 'Vista Trade & Logistics', partyId: 'NF00048509', iecCode: '1234509876', adCodes: ['124451249323'], gstinType: '12ABCDE1234F1Z5', panNo: 'PANUI00004', partyType: 'Both', role: 'Air Line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '5', sNo: 5, partyName: 'Pinnacle Import Solutions', partyId: 'NF00023764', iecCode: '2456789012', adCodes: ['12445124294'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00005', partyType: 'Customer', role: 'Air Line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '6', sNo: 6, partyName: 'Blue Horizon Imports', partyId: 'NF00081259', iecCode: '1357924680', adCodes: ['12445124', '24343553'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00006', partyType: 'None', role: 'Air Line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '7', sNo: 7, partyName: 'Cypress Import Co.', partyId: 'NF00034578', iecCode: '1478523690', adCodes: ['24343553'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00007', partyType: 'Both', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '8', sNo: 8, partyName: 'Eagle Eye International', partyId: 'NF00090341', iecCode: '1597534862', adCodes: ['24343553'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00008', partyType: 'Vendor', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '9', sNo: 9, partyName: 'Oceanside Imports Group', partyId: 'NF00065829', iecCode: '1680243579', adCodes: ['3243535532'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00009', partyType: 'Customer', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '10', sNo: 10, partyName: 'Emerald Coast Imports', partyId: 'NF00078412', iecCode: '1728394056', adCodes: ['24345353'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00010', partyType: 'None', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '11', sNo: 11, partyName: 'Summit View Imports', partyId: 'NF00024967', iecCode: '1849203765', adCodes: ['12445124', '12ABCFE1234F1Z5', '1244512412445124'], gstinType: 'PANUI00011', panNo: 'PANUI00011', partyType: 'Both', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '12', sNo: 12, partyName: 'Terra Nova Import Services', partyId: 'NF00037814', iecCode: '1962837450', adCodes: ['1244512412445124'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00012', partyType: 'Vendor', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '13', sNo: 13, partyName: 'Riverstone Global Imports', partyId: 'NF00091648', iecCode: '2093847561', adCodes: ['1244512412445124'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00013', partyType: 'Customer', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '14', sNo: 14, partyName: 'Nexus Import Partners', partyId: 'NF00053217', iecCode: '2123456789', adCodes: ['1244512412445124'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00014', partyType: 'None', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '15', sNo: 15, partyName: 'Vertex International Trade', partyId: 'NF00067105', iecCode: '2233445566', adCodes: ['1244512412445124'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00015', partyType: 'Both', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  },
  {
    id: '16', sNo: 16, partyName: 'Unity Import Solutions', partyId: 'NF00048263', iecCode: '2345678901', adCodes: ['1244512412445124'], gstinType: '12ABCFE1234F1Z5', panNo: 'PANUI00016', partyType: 'Vendor', role: 'Shipping line', createdBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }, updatedBy: { name: 'Arjith Kumar', avatarColor: '#FE7C7C' }
  }
];

export default function PartyMasterTable() {
  const [data, setData] = useState(mockPartyData);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (expandedRows.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(data.map(row => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div className="flex flex-col h-full bg-[#F2F4F8]">
      {/* Table */}
      <div className="flex-1 overflow-hidden bg-white border border-[#D0D5E3] flex flex-col">
        {/* Toolbar inside table container */}
        
        <div className="overflow-auto flex-1 relative">
          <table className="w-full border-separate border-spacing-0 min-w-[1200px]">
            <thead className="sticky top-0 z-40 bg-[#EBEEF7] text-[#050E25] text-xs font-semibold">
              <tr>
                <th className="w-[34px] min-w-[34px] max-w-[34px] px-0 py-2 border-b border-[#D0D5E3] text-center sticky left-0 z-50 bg-[#EBEEF7] shadow-[inset_-1px_0_0_0_#D0D5E3]">
                  <div className="flex items-center justify-center w-full h-full">
                    <ChevronDown className="w-4 h-4 text-[#9497A1]" />
                  </div>
                </th>
                <th className="w-[34px] min-w-[34px] max-w-[34px] px-0 py-2 border-b border-[#D0D5E3] text-center sticky left-[34px] z-50 bg-[#EBEEF7] shadow-[inset_-1px_0_0_0_#D0D5E3]">
                  <div className="flex items-center justify-center w-full h-full">
                    <Checkbox 
                      checked={selectedRows.size === data.length && data.length > 0}
                      onCheckedChange={handleSelectAll}
                      className="border-[#9497A1]"
                    />
                  </div>
                </th>
                <th className="w-[48px] min-w-[48px] max-w-[48px] p-2 border-b border-[#D0D5E3] text-center sticky left-[68px] z-50 bg-[#EBEEF7] shadow-[inset_-1px_0_0_0_#D0D5E3]">S.No</th>
                <th className="p-2 border-b border-[#D0D5E3] text-left min-w-[200px] group cursor-pointer hover:bg-[#E2E6F2] sticky left-[116px] z-50 bg-[#EBEEF7] shadow-[inset_-1px_0_0_0_#D0D5E3]">
                  <div className="flex items-center justify-between">
                    Party Name
                    <FilterIcon className="w-3 h-3 text-[#9497A1] opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[120px] group cursor-pointer hover:bg-[#E2E6F2]">
                  <div className="flex items-center justify-between">
                    Party Id
                    <FilterIcon className="w-3 h-3 text-[#9497A1] opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[120px] group cursor-pointer hover:bg-[#E2E6F2]">
                  <div className="flex items-center justify-between">
                    IEC Code
                    <FilterIcon className="w-3 h-3 text-[#9497A1] opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[120px] group cursor-pointer hover:bg-[#E2E6F2]">
                  <div className="flex items-center justify-between">
                    AD Code
                    <FilterIcon className="w-3 h-3 text-[#9497A1] opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[150px] group cursor-pointer hover:bg-[#E2E6F2]">
                  <div className="flex items-center justify-between">
                    GSTIN Type
                    <FilterIcon className="w-3 h-3 text-[#9497A1] opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[120px] group cursor-pointer hover:bg-[#E2E6F2]">
                  <div className="flex items-center justify-between">
                    PAN No.
                    <FilterIcon className="w-3 h-3 text-[#9497A1] opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[100px] group cursor-pointer hover:bg-[#E2E6F2]">
                  <div className="flex items-center justify-between">
                    Party Type
                    <FilterIcon className="w-3 h-3 text-[#9497A1] opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[120px] group cursor-pointer hover:bg-[#E2E6F2]">
                  <div className="flex items-center justify-between">
                    Role
                    <FilterIcon className="w-3 h-3 text-[#9497A1] opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[150px]">Created by</th>
                <th className="p-2 border-r border-b border-[#D0D5E3] text-left min-w-[150px]">Updated by</th>
                <th className="w-10 p-2 border-b border-[#D0D5E3] text-center sticky right-0 z-50 bg-[#EBEEF7] shadow-[inset_1px_0_0_0_#D0D5E3]"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => [
                <tr key={row.id} className="hover:bg-[#F8FAFC] group relative">
                  <td className="w-[34px] min-w-[34px] max-w-[34px] px-0 py-2 border-b border-[#D0D5E3] text-center sticky left-0 z-30 bg-white group-hover:bg-[#F8FAFC] shadow-[inset_-1px_0_0_0_#D0D5E3]">
                    <div className="flex items-center justify-center w-full h-full">
                      <Button variant="ghost" className="h-6 w-6 p-0 ml-0 hover:bg-transparent" onClick={() => toggleRow(row.id)}>
                        <ChevronDown className={`w-4 h-4 text-[#9497A1] transition-transform duration-200 ${expandedRows.has(row.id) ? 'rotate-180' : ''}`} />
                      </Button>
                    </div>
                  </td>
                  <td className="w-[34px] min-w-[34px] max-w-[34px] px-0 py-2 border-b border-[#D0D5E3] text-center sticky left-[34px] z-30 bg-white group-hover:bg-[#F8FAFC] shadow-[inset_-1px_0_0_0_#D0D5E3]">
                    <div className="flex items-center justify-center w-full h-full">
                      <Checkbox 
                        checked={selectedRows.has(row.id)}
                        onCheckedChange={(checked) => handleSelectRow(row.id, checked as boolean)}
                        className="border-[#9497A1]"
                      />
                    </div>
                  </td>
                  <td className="w-[48px] min-w-[48px] max-w-[48px] p-2 border-b border-[#D0D5E3] text-sm text-[#050E25] font-semibold text-center sticky left-[68px] z-30 bg-white group-hover:bg-[#F8FAFC] shadow-[inset_-1px_0_0_0_#D0D5E3]">{row.sNo}</td>
                  <td className="p-2 border-b border-[#D0D5E3] text-sm text-[#3874FF] cursor-pointer hover:underline font-medium sticky left-[116px] z-30 bg-white group-hover:bg-[#F8FAFC] shadow-[inset_-1px_0_0_0_#D0D5E3]">{row.partyName}</td>
                  <td className="p-2 border-r border-b border-[#D0D5E3] text-sm text-[#050E25] font-medium">{row.partyId}</td>
                  <td className="p-2 border-r border-b border-[#D0D5E3] text-sm text-[#050E25] font-medium">{row.iecCode}</td>
                  <td className="p-2 border-r border-b border-[#D0D5E3]">
                    <div className="flex flex-wrap gap-1">
                      {row.adCodes.map((code, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-white border border-[#D0D5E3] text-[#050E25] shadow-sm">
                          {code}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-2 border-r border-b border-[#D0D5E3] text-sm text-[#050E25] font-medium">{row.gstinType}</td>
                  <td className="p-2 border-r border-b border-[#D0D5E3] text-sm text-[#050E25] font-medium">{row.panNo}</td>
                  <td className="p-2 border-r border-b border-[#D0D5E3] text-sm text-[#050E25] font-medium">{row.partyType}</td>
                  <td className="p-2 border-r border-b border-[#D0D5E3] text-sm text-[#050E25] font-medium">{row.role}</td>
                  <td className="p-2 border-r border-b border-[#D0D5E3]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold" style={{ backgroundColor: row.createdBy.avatarColor }}>
                        {row.createdBy.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-[#050E25] font-medium">{row.createdBy.name}</span>
                    </div>
                  </td>
                  <td className="p-2 border-r border-b border-[#D0D5E3]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold" style={{ backgroundColor: row.updatedBy.avatarColor }}>
                        {row.updatedBy.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-[#050E25] font-medium">{row.updatedBy.name}</span>
                    </div>
                  </td>
                  <td className="p-2 border-b border-[#D0D5E3] text-center sticky right-0 z-30 bg-white group-hover:bg-[#F8FAFC] shadow-[inset_1px_0_0_0_#D0D5E3]">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-6 w-6 p-0 hover:bg-transparent">
                          <MoreVertical className="h-4 w-4 text-[#9497A1]" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>,
                expandedRows.has(row.id) && row.branches ? (
                  <tr key={`${row.id}-expanded`} className="bg-[#F4F5FF]">
                    <td colSpan={14} className="p-4 sticky left-0 z-20">
                      <div className="flex flex-col gap-4 sticky left-0 w-[calc(100vw-120px)] max-w-full">
                        <h3 className="text-sm font-bold text-[#050E25]">Total Branches : {row.branches.length}</h3>
                        <div className="border border-[#D0D5E3] rounded-sm overflow-x-auto bg-white shadow-sm">
                          <table className="w-full text-sm min-w-[1200px]">
                            <thead className="bg-[#F8FAFC] border-b border-[#D0D5E3]">
                              <tr>
                                <th className="p-2 w-[120px] text-left font-semibold text-[#050E25] border-r border-[#D0D5E3] sticky left-0 z-10 bg-[#F8FAFC] shadow-[inset_-1px_0_0_0_#D0D5E3]">Branch No.</th>
                                <th className="p-2 min-w-[150px] text-left font-semibold text-[#050E25] border-r border-[#D0D5E3]">Nickname</th>
                                <th className="p-2 min-w-[200px] text-left font-semibold text-[#050E25] border-r border-[#D0D5E3]">Address 1</th>
                                <th className="p-2 min-w-[120px] text-left font-semibold text-[#050E25] border-r border-[#D0D5E3]">City</th>
                                <th className="p-2 min-w-[150px] text-left font-semibold text-[#050E25] border-r border-[#D0D5E3]">CST Reg No.</th>
                                <th className="p-2 min-w-[150px] text-left font-semibold text-[#050E25] border-r border-[#D0D5E3]">Roles</th>
                                <th className="p-2 min-w-[250px] text-left font-semibold text-[#050E25]">AD Code</th>
                              </tr>
                            </thead>
                            <tbody>
                              {row.branches.map((branch, idx) => (
                                <tr key={idx} className="border-b border-[#D0D5E3] last:border-0 hover:bg-gray-50 group/branch">
                                  <td className="p-2 w-[120px] border-b border-r border-[#D0D5E3] text-[#050E25] sticky left-0 z-10 bg-white group-hover/branch:bg-gray-50 shadow-[inset_-1px_0_0_0_#D0D5E3]">{branch.branchNo}</td>
                                  <td className="p-2 border-r border-[#D0D5E3] text-[#050E25]">{branch.nickname}</td>
                                  <td className="p-2 border-r border-[#D0D5E3] text-[#050E25]">{branch.address1}</td>
                                  <td className="p-2 border-r border-[#D0D5E3] text-[#050E25]">{branch.city}</td>
                                  <td className="p-2 border-r border-[#D0D5E3] text-[#050E25]">{branch.cstRegNo}</td>
                                  <td className="p-2 border-r border-[#D0D5E3] text-[#050E25]">{branch.roles}</td>
                                  <td className="p-2">
                                    <div className="flex flex-wrap gap-1">
                                      {branch.adCode.map((code, cIdx) => (
                                        <span key={cIdx} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-white border border-[#D0D5E3] text-[#050E25]">
                                          {code}
                                        </span>
                                      ))}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : null
              ])}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}