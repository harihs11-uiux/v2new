import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function InvoiceDropdown() {
  return (
    <Select defaultValue="inv1">
      <SelectTrigger className="w-[230px] h-[32px] bg-transparent border-b border-white/40 rounded-none border-t-0 border-x-0 text-white hover:bg-white/10 focus:ring-0 focus:ring-offset-0 shadow-none px-2 gap-1 font-['Inter:Regular',sans-serif] text-[14px] [&>svg]:text-white/70">
        <SelectValue placeholder="Select Invoice" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="inv1">Inv Sr. No 1 : 3534334353</SelectItem>
        <SelectItem value="inv2">Inv Sr. No 2 : 8475839201</SelectItem>
        <SelectItem value="inv3">Inv Sr. No 3 : 9384750293</SelectItem>
      </SelectContent>
    </Select>
  );
}
