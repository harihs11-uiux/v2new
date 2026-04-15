import React from 'react';
import ManualLockIcon from './ManualLockIcon';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

// Demo component showing how to use the ManualLockIcon
const ManualLockDemo: React.FC = () => {
  const handleManualLock = (rowId: string) => {
    console.log(`Manual lock applied to row: ${rowId}`);
    // Add your manual lock logic here
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Manual Lock Icon Demo</h2>
      
      {/* Basic Usage */}
      <div className="flex items-center gap-2">
        <span>Basic Icon:</span>
        <ManualLockIcon />
      </div>

      {/* With custom styling */}
      <div className="flex items-center gap-2">
        <span>With custom color:</span>
        <ManualLockIcon className="text-blue-500" />
      </div>

      {/* In a dropdown menu (typical table usage) */}
      <div className="flex items-center gap-2">
        <span>In Dropdown Menu:</span>
        <DropdownMenu>
          <DropdownMenuTrigger className="p-2 hover:bg-gray-100 rounded">
            <MoreHorizontal size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleManualLock('row-1')}>
              <ManualLockIcon className="mr-2" />
              Manual Lock
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="mr-2">📝</span>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="mr-2">🗑️</span>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* As a button */}
      <div className="flex items-center gap-2">
        <span>As Button:</span>
        <button 
          onClick={() => handleManualLock('row-example')}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <ManualLockIcon className="text-white" />
          Manual Lock
        </button>
      </div>
    </div>
  );
};

export default ManualLockDemo;