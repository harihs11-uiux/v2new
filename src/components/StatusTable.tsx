import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Resizable } from 're-resizable';
import checkboxSvgPaths from '../imports/svg-avdz5wve3u';
import uncheckedCheckboxSvgPaths from '../imports/svg-88ttit90gd';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import avatar images
import avatarSP from 'figma:asset/ec9ab09f46bb0b98e2ab97d99072a998fc9fc3d5.png';
import avatarVJ from 'figma:asset/c62562e4bca3f2e54d6648f00ce7b53edd6cd8d7.png';
import avatarRK from 'figma:asset/8a51f1e72e0c7ba88733906dbd0c3e3af3253a4b.png';

// Import status icons
import jobCreatedIcon from 'figma:asset/93b76e57ca653b6d0d39ff7f8d3eb562c5b7f9cc.png';
import preAlertIcon from 'figma:asset/5d2a6725a9e593037e02e4b335d96ac1882858fc.png';
import jobSubmittedIcon from 'figma:asset/87717fa332fe847baf7af534266ce6ba67bc7311.png';
import positiveAckIcon from 'figma:asset/720c00476ba0ea35a9b43f56f4409d50ed2fb748.png';
import gatePassIcon from 'figma:asset/600a7567d3c172d8768b5bb1d706923bae765b63.png';
import negativeAckIcon from 'figma:asset/316aa9bb5f11507329216d934f1ee818d3bea936.png';
import outOfChargeIcon from 'figma:asset/1f7650dc1f522c9c8b0bf19e5ed0745e5e2753a2.png';
import cargoDeliveredIcon from 'figma:asset/c6e9dff90eae31d073a65b67632135c8a9aa2fbb.png';

// Function to get status icon based on status name
const getStatusIcon = (statusName: string) => {
  // Handle status names that might contain additional details
  if (statusName.startsWith('Positive Acknowledgement')) {
    return positiveAckIcon;
  }
  
  switch (statusName) {
    case 'Job Created':
      return jobCreatedIcon;
    case 'Pre Alert Document Received':
      return preAlertIcon;
    case 'Job Submitted to Icegate':
      return jobSubmittedIcon;
    case 'Gate pass Received':
      return gatePassIcon;
    case 'Negative Acknowledgement':
      return negativeAckIcon;
    case 'Out of Charge':
      return outOfChargeIcon;
    case 'Cargo Delivered Successfully':
      return cargoDeliveredIcon;
    default:
      return null;
  }
};

// Avatar Cell Component for "Captured by" column
interface AvatarCellProps {
  name: string;
  avatar: string;
  editable?: boolean;
  onChange?: (value: string) => void;
}

const AvatarCell: React.FC<AvatarCellProps> = ({ name, avatar, editable = false, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  React.useEffect(() => {
    setInputValue(name);
  }, [name]);

  const handleEdit = () => {
    if (!editable) return;
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    if (onChange) {
      onChange(inputValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setInputValue(name);
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <div className="flex items-center px-2 py-1">
        <img 
          src={avatar} 
          alt={name}
          className="w-6 h-6 rounded-full object-cover flex-shrink-0"
          style={{ marginRight: '4px' }}
        />
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
          className="flex-1 border border-[#3874FF] rounded focus:outline-none focus:ring-1 focus:ring-[#3874FF] bg-white px-1"
          style={{ minWidth: '0', fontSize: '14px' }}
        />
      </div>
    );
  }

  return (
    <div
      onClick={handleEdit}
      className={`flex items-center px-2 py-1 bg-white ${editable ? 'cursor-pointer hover:bg-gray-50' : ''}`}
      title={name}
      style={{ fontSize: '14px' }}
    >
      <img 
        src={avatar} 
        alt={name}
        className="w-6 h-6 rounded-full object-cover flex-shrink-0"
        style={{ marginRight: '4px' }}
      />
      <span className="truncate" style={{ fontSize: '14px' }}>
        {name || <span className="text-gray-400" style={{ fontSize: '14px' }}>Click to edit</span>}
      </span>
    </div>
  );
};

// Editable Cell Component
interface EditableCellProps {
  value: string;
  onChange: (value: string) => void;
  editable?: boolean;
  dataIndex: string;
  record: StatusData;
}

const EditableCell: React.FC<EditableCellProps> = ({ 
  value, 
  onChange, 
  editable = true,
  dataIndex,
  record 
}) => {
  // Special handling for "statusType" column to show chip
  if (dataIndex === 'statusType') {
    return (
      <div className="flex items-center px-3 py-1 w-full h-full">
        <div className="flex items-center justify-center bg-[#e0f2fe] px-[8px] py-[1px] rounded-[12px]">
          <p className="font-['Inter',sans-serif] font-medium leading-[14px] text-[#0369a1] text-[11px]">
            {value || 'Icegate'}
          </p>
        </div>
      </div>
    );
  }

  // Special handling for "capturedBy" column to show avatar
  if (dataIndex === 'capturedBy' && record.capturedByAvatar) {
    return (
      <AvatarCell
        name={value}
        avatar={record.capturedByAvatar}
        editable={editable}
        onChange={onChange}
      />
    );
  }

  // Special handling for "actions" column to show Edit and Download buttons
  if (dataIndex === 'actions') {
    const actions = value ? value.split(',') : ['edit'];
    const hasEdit = actions.includes('edit');
    const hasDownload = actions.includes('download');

    return (
      <div className="flex items-center justify-end px-1 py-1 w-full gap-1">
        {hasEdit && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(`Edit clicked for status: ${record.statusName}`);
              // Add edit functionality here
            }}
            className="bg-[#3874FF]/10 text-[#3874FF] border border-[#3874FF] hover:bg-[#3874FF]/20 hover:text-[#3874FF] transition-colors duration-150 flex items-center justify-center gap-1 rounded font-semibold"
            style={{ 
              fontSize: '14px',
              width: '75px',
              height: '28px',
              padding: '4px 8px'
            }}
            title="Edit status"
          >
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Edit
          </button>
        )}
        {hasDownload && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(`Download clicked for status: ${record.statusName}`);
              // Add download functionality here
            }}
            className="bg-[#3874FF] text-white hover:bg-[#2563EB] transition-colors duration-150 flex items-center justify-center gap-1 rounded"
            style={{ 
              fontSize: '14px',
              width: '75px',
              height: '28px',
              padding: '4px 8px'
            }}
            title="Download document"
          >
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </button>
        )}
      </div>
    );
  }

  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleEdit = () => {
    if (!editable) return;
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    onChange(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setInputValue(value);
      setEditing(false);
    }
  };

  if (editing) {
    const statusIcon = dataIndex === 'statusName' ? getStatusIcon(inputValue) : null;
    
    return (
      <div className={`flex items-center w-full h-full px-1 ${statusIcon ? 'gap-2' : ''}`}>
        {statusIcon && (
          <ImageWithFallback 
            src={statusIcon} 
            alt={`${inputValue} icon`}
            className="w-6 h-6 flex-shrink-0"
          />
        )}
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
          className="w-full h-[26px] border border-[#3874FF] rounded-none focus:outline-none focus:ring-0 bg-white px-2"
          style={{ fontSize: '12px' }}
        />
      </div>
    );
  }

  const statusIcon = dataIndex === 'statusName' ? getStatusIcon(value) : null;

  return (
    <div
      onClick={handleEdit}
      className={`px-3 py-1 truncate bg-white h-full flex items-center ${editable ? 'cursor-pointer hover:bg-gray-50' : ''} ${
        dataIndex === 'sNo' ? 'justify-center w-full' : 'justify-start'
      } ${statusIcon ? 'gap-2' : ''}`}
      style={{ fontSize: '13px', color: '#050E25' }}
      title={value}
    >
      {statusIcon && (
        <ImageWithFallback 
          src={statusIcon} 
          alt={`${value} icon`}
          className="w-6 h-6 flex-shrink-0"
        />
      )}
      <span className="truncate">
        {value || (editable && <span className="text-gray-400">Click to edit</span>)}
      </span>
    </div>
  );
};

export interface StatusData {
  key: string;
  sNo: number;
  statusName: string;
  remarks: string;
  statusCode: string;
  createdTime: string; // Changed from createdAt
  updatedTime: string; // New column
  capturedBy: string;
  received: string; // New column
  estimatedDate: string; // New column
  sequenceNo: string; // New column
  capturedByAvatar?: string;
  statusType?: string;
  actions?: string;
}

interface Column {
  key: keyof StatusData | 'actions';
  title: string;
  width: number;
  minWidth: number;
  maxWidth: number;
  fixed?: 'left' | 'right';
  visible: boolean;
  editable?: boolean;
}

interface StatusTableProps {
  data?: StatusData[];
  onDataChange?: (newData: StatusData[]) => void;
}

// Column definitions for the three sections
const defaultColumns: Column[] = [
  // Section 1: Sr.No., Status name (Left Fixed)
  { 
    key: 'sNo', 
    title: 'Sr.No', 
    width: 80, 
    minWidth: 60, 
    maxWidth: 120, 
    fixed: 'left', 
    visible: true,
    editable: false
  },
  { 
    key: 'statusName', 
    title: 'Status', 
    width: 350,  
    minWidth: 200, 
    maxWidth: 400, 
    fixed: 'left', 
    visible: true,
    editable: true
  },
  // Section 2: Middle Scrollable
  { 
    key: 'received',
    title: 'Status Received',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
    editable: true
  },
  { 
    key: 'estimatedDate',
    title: 'Estimated Date',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
    editable: true
  },
  { 
    key: 'sequenceNo',
    title: 'Sequence No',
    width: 120,
    minWidth: 100,
    maxWidth: 150,
    visible: true,
    editable: true
  },
  { 
    key: 'statusType',
    title: 'Status Type',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
    editable: true
  },
  { 
    key: 'remarks', 
    title: 'Remarks', 
    width: 250, 
    minWidth: 200, 
    maxWidth: 350, 
    visible: true,
    editable: true
  },
  { 
    key: 'statusCode', 
    title: 'Milestone Code', 
    width: 120,  
    minWidth: 100, 
    maxWidth: 150, 
    visible: true,
    editable: true
  },
  { 
    key: 'createdTime', 
    title: 'Created Time', 
    width: 150, 
    minWidth: 130, 
    maxWidth: 180, 
    visible: true,
    editable: false
  },
  { 
    key: 'updatedTime', 
    title: 'Updated Time', 
    width: 150, 
    minWidth: 130, 
    maxWidth: 180, 
    visible: true,
    editable: false
  },
  { 
    key: 'capturedBy', 
    title: 'Captured By', 
    width: 130, 
    minWidth: 110, 
    maxWidth: 160, 
    visible: true,
    editable: true
  },
  // Section 3: Actions (Right Fixed)
  { 
    key: 'actions', 
    title: 'Actions', 
    width: 180, 
    minWidth: 150, 
    maxWidth: 220, 
    fixed: 'right', 
    visible: true,
    editable: false
  }
];

// Sample data with Indian names and avatars
export const initialData: StatusData[] = Array.from({ length: 8 }, (_, i) => ({
  key: `${i}`,
  sNo: i + 1,
  statusName: [
    'Cargo Delivered Successfully',
    'Out of Charge', 
    'Gate pass Received',
    'Positive Acknowledgement with BE Number 1343242, BE Date 23/3/2023',
    'Negative Acknowledgement',
    'Job Submitted to Icegate',
    'Pre Alert Document Received',
    'Job Created'
  ][i] || `Milestone ${i + 1}`,
  remarks: [
    'Cargo delivery completed to final destination',
    'Cargo has been marked as out of charge',
    'Gatepass has been issued and received successfully',
    'Positive acknowledgement received with BE details',
    'Negative acknowledgement received from customs authorities',
    'Job has been submitted to ICEGATE portal for processing',
    'Pre alert documentation has been successfully received and verified',
    'New job has been created and initialized in the system'
  ][i] || `Remarks ${i + 1}`,
  statusCode: [
    '200',
    '301',
    '418',
    '302',
    '210',
    '204',
    '302',
    '201'
  ][i] || `${Math.floor(Math.random() * 399) + 200}`,
  createdTime: [
    '15/01/2025 10:30',
    '15/01/2025 11:15',
    '15/01/2025 14:45',
    '16/01/2025 09:20',
    '16/01/2025 16:30',
    '17/01/2025 08:45',
    '17/01/2025 13:15',
    '17/01/2025 15:30'
  ][i] || `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  updatedTime: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  received: i % 2 === 0 ? 'Yes' : 'No',
  estimatedDate: '20/01/2025',
  sequenceNo: `${i + 1}`,
  capturedBy: [
    'Suresh Patel',
    'Vijay Joshi',
    'Rajesh Kumar',
    'Suresh Patel',
    'Vijay Joshi',
    'Rajesh Kumar',
    'Suresh Patel',
    'Vijay Joshi'
  ][i] || `User ${i + 1}`,
  capturedByAvatar: [
    avatarSP,
    avatarVJ,
    avatarRK,
    avatarSP,
    avatarVJ,
    avatarRK,
    avatarSP,
    avatarVJ
  ][i] || avatarSP,
  statusType: 'Icegate',
  actions: [
    'edit', // Cargo Delivered Successfully - Edit button only
    'edit,download', // Out of Charge - Edit and Download buttons
    'edit', // Gate pass Received - Edit button only
    'edit,download', // Positive Acknowledgement - Edit and Download buttons
    'edit,download', // Negative Acknowledgement - Edit and Download buttons
    'edit', // Job Submitted to Icegate - Edit button only
    'edit', // Pre Alert Document Received - Edit button only
    'edit' // Job Created - Edit button only
  ][i] || 'edit'
}));

export default function StatusTable({ data: propData, onDataChange }: StatusTableProps) {
  const [internalData, setInternalData] = useState<StatusData[]>(initialData);
  
  // Use prop data if provided, otherwise use internal state
  const data = propData || internalData;
  const setData = onDataChange || setInternalData;

  const [columns, setColumns] = useState<Column[]>(defaultColumns);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  // Compute column groups
  const leftFixedColumns = useMemo(() => 
    columns.filter(col => col.fixed === 'left' && col.visible),
    [columns]
  );

  const scrollableColumns = useMemo(() => 
    columns.filter(col => !col.fixed && col.visible),
    [columns]
  );

  const rightFixedColumns = useMemo(() => 
    columns.filter(col => col.fixed === 'right' && col.visible),
    [columns]
  );

  const totalWidth = useMemo(() => 
    columns.reduce((sum, col) => sum + (col.visible ? col.width : 0), 0),
    [columns]
  );

  // Handle cell value changes
  const handleCellChange = useCallback((key: string, dataIndex: string, value: string) => {
    setData(prevData => 
      prevData.map(row => 
        row.key === key ? { ...row, [dataIndex]: value } : row
      )
    );
  }, [setData]);

  return (
    <div ref={tableRef} className="w-full h-full flex flex-col bg-white overflow-hidden border-[0.5px] border-[#D0D5E3] rounded-none">
      {/* Scrollable Container for the entire table */}
      <div className="flex-1 overflow-auto custom-scrollbar relative">
        <div style={{ minWidth: `${totalWidth}px` }} className="flex flex-col min-h-full">
          
          {/* Header Row */}
          <div className="flex sticky top-0 z-30 h-[34px] bg-[#EBEEF7] border-b-[0.5px] border-[#D0D5E3]">
            {/* Left Fixed Columns */}
            {leftFixedColumns.map((column, idx) => (
              <div 
                key={column.key}
                className={`sticky z-40 flex items-center bg-[#EBEEF7] border-r-[0.5px] border-[#D0D5E3] ${
                  column.key === 'statusName' ? 'shadow-[1px_0_2px_rgba(0,0,0,0.05)]' : ''
                }`}
                style={{ 
                  left: idx === 0 ? 0 : leftFixedColumns[0].width,
                  width: `${column.width}px`,
                  height: '34px'
                }}
              >
                <div className={`flex items-center ${column.key === 'sNo' ? 'justify-center' : 'justify-start'} px-3 w-full h-full`}>
                  <span className="font-semibold text-[#050E25] truncate select-none text-[12px] uppercase tracking-wider">
                    {column.title}
                  </span>
                </div>
              </div>
            ))}

            {/* Scrollable Middle Columns */}
            {scrollableColumns.map((column) => (
              <div 
                key={column.key}
                className="flex items-center bg-[#EBEEF7] border-r-[0.5px] border-[#D0D5E3]"
                style={{ width: `${column.width}px`, height: '34px' }}
              >
                <div className="flex items-center justify-start px-3 w-full h-full">
                  <span className="font-semibold text-[#050E25] truncate select-none text-[12px] uppercase tracking-wider">
                    {column.key === 'statusCode' ? 'Status code' : column.title}
                  </span>
                </div>
              </div>
            ))}

            {/* Right Fixed Columns */}
            {rightFixedColumns.map((column) => (
              <div 
                key={column.key}
                className="sticky right-0 z-40 flex items-center bg-[#EBEEF7] border-l-[0.5px] border-[#D0D5E3]"
                style={{ width: `${column.width}px`, height: '34px' }}
              >
                <div className="flex items-center justify-center px-3 w-full h-full">
                  <span className="font-semibold text-[#050E25] truncate select-none text-[12px] uppercase tracking-wider">
                    {column.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          <div className="flex flex-col flex-1">
            {data.map((row) => (
              <div 
                key={row.key}
                className="flex border-b-[0.5px] border-[#D0D5E3] hover:bg-[#F8F9FA] transition-colors duration-150 h-[34px] group"
              >
                {/* Left Fixed Columns */}
                {leftFixedColumns.map((column, idx) => (
                  <div
                    key={column.key}
                    className={`sticky z-20 flex items-center bg-white border-r-[0.5px] border-[#D0D5E3] group-hover:bg-[#F8F9FA] ${
                      column.key === 'statusName' ? 'shadow-[1px_0_2px_rgba(0,0,0,0.05)]' : ''
                    }`}
                    style={{ 
                      left: idx === 0 ? 0 : leftFixedColumns[0].width,
                      width: `${column.width}px`,
                      height: '34px'
                    }}
                  >
                    <EditableCell
                      value={String(row[column.key as keyof StatusData])}
                      onChange={(value) => handleCellChange(row.key, column.key as string, value)}
                      editable={column.editable}
                      dataIndex={column.key as string}
                      record={row}
                    />
                  </div>
                ))}

                {/* Scrollable Middle Columns */}
                {scrollableColumns.map((column) => (
                  <div
                    key={column.key}
                    className="flex items-center border-r-[0.5px] border-[#D0D5E3] bg-white group-hover:bg-[#F8F9FA]"
                    style={{ width: `${column.width}px`, height: '34px' }}
                  >
                    <EditableCell
                      value={String(row[column.key as keyof StatusData])}
                      onChange={(value) => handleCellChange(row.key, column.key as string, value)}
                      editable={column.editable}
                      dataIndex={column.key as string}
                      record={row}
                    />
                  </div>
                ))}

                {/* Right Fixed Columns */}
                {rightFixedColumns.map((column) => (
                  <div
                    key={column.key}
                    className="sticky right-0 z-20 flex items-center bg-white border-l-[0.5px] border-[#D0D5E3] group-hover:bg-[#F8F9FA]"
                    style={{ width: `${column.width}px`, height: '34px' }}
                  >
                    <EditableCell
                      value={String(row[column.key as keyof StatusData] || '')}
                      onChange={(value) => handleCellChange(row.key, column.key as string, value)}
                      editable={column.editable}
                      dataIndex={column.key as string}
                      record={row}
                    />
                  </div>
                ))}
              </div>
            ))}
            {/* Filler space to maintain grid if needed - optional but keeps background consistent */}
            <div className="flex-1 bg-white" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
          height: 10px;
          display: block !important;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3874FF;
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563EB;
        }
        /* Ensure sticky cells have correct background on hover */
        .flex:hover .sticky {
          background-color: #F8F9FA;
        }
      `}} />
    </div>
  );
}