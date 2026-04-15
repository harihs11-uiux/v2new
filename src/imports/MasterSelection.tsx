import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import AdvancePartyMaster from './AdvancePartyMaster';
import svgPaths from "./svg-g7n59prj4a";

export default function MasterSelection() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="relative size-full cursor-pointer" data-name="master selection">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="master selection">
              <mask height="18" id="mask0_5489_444" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
              </mask>
              <g mask="url(#mask0_5489_444)">
                <path d={svgPaths.p3d558af0} fill="var(--fill-0, #626776)" id="apps" />
              </g>
            </g>
          </svg>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1280px] w-full h-[700px] p-0 border-none bg-transparent shadow-none [&>button]:hidden flex flex-col">
         <DialogTitle className="sr-only">Advance Party Master Selection</DialogTitle>
         <DialogDescription className="sr-only">Select a party from the list</DialogDescription>
         {/* Transparent overlay for Close button in the top-right corner of the AdvancePartyMaster header */}
         <div 
            className="absolute top-[24px] right-[12px] w-[30px] h-[30px] cursor-pointer z-[100] bg-transparent"
            onClick={() => setOpen(false)}
            role="button"
            aria-label="Close"
         />
         
         <div className="w-full h-full overflow-auto bg-white rounded-[16px]">
            <AdvancePartyMaster />
         </div>
      </DialogContent>
    </Dialog>
  );
}
