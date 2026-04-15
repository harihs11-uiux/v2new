import React from 'react';
import { Lock } from 'lucide-react';

interface ManualLockIconProps {
  className?: string;
}

// Manual Lock Icon Component - 24x24 size as specified
const ManualLockIcon: React.FC<ManualLockIconProps> = ({ className = "" }) => {
  return (
    <Lock 
      className={`${className}`}
      size={24}
      style={{ 
        width: '24px', 
        height: '24px',
        minWidth: '24px',
        minHeight: '24px'
      }}
    />
  );
};

export default ManualLockIcon;