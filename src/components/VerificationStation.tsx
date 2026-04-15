import React from 'react';
import exampleImage from 'figma:asset/941701165b91724e59067119c3da87a9a6952b86.png';

interface VerificationStationProps {
  onClose?: () => void;
}

export default function VerificationStation({ onClose }: VerificationStationProps) {
  return (
    <div className="w-full h-full bg-white relative flex flex-col overflow-hidden border-r border-[#d0d5e3]">
      <div className="h-full w-full overflow-auto flex">
        <img 
          src={exampleImage} 
          alt="Verification Station" 
          className="h-full w-auto max-w-none"
        />
      </div>
    </div>
  );
}
