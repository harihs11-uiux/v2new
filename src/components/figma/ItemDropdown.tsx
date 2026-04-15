import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Loader2 } from "lucide-react";

export default function ItemDropdown({ value = "01", onChange }: { value?: string; onChange?: (val: string) => void }) {
  const items = ["01", "02", "03", "04", "05"];

  const handleValueChange = (newValue: string) => {
    onChange?.(newValue);
  };

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[130px] h-[32px] bg-transparent border-b border-white/40 rounded-none border-t-0 border-x-0 text-white hover:bg-white/10 focus:ring-0 focus:ring-offset-0 shadow-none px-2 gap-1 font-['Inter:Regular',sans-serif] text-[14px] [&>svg]:text-white/70">
        <SelectValue placeholder="Item" />
      </SelectTrigger>
      <SelectContent>
        {items.map(item => (
            <SelectItem key={item} value={item}>It Sr. No {item}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
