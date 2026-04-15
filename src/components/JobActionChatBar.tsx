import React, { useState } from 'react';
import { Send, Sparkles, Command } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from "sonner@2.0.3";

export default function JobActionChatBar() {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCommand = async () => {
    if (!input.trim()) return;

    setIsProcessing(true);
    const command = input.toLowerCase();

    try {
      // Simulate processing time for "AI" feel
      await new Promise(resolve => setTimeout(resolve, 600));

      // Parse commands
      if (command.includes('add') && command.includes('item')) {
        if ((window as any).addItemDetailsRow) {
          (window as any).addItemDetailsRow();
          toast.success("Added new item to Item Details table");
          
          // Scroll to item table
          const section = document.getElementById('itemDetails');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
          toast.error("Item Details table not available");
        }
      } 
      else if (command.includes('delete') && command.includes('item')) {
        if ((window as any).deleteItemDetailsRow) {
          // Extract number if present
          let indexToDelete: number | undefined = undefined;
          
          // Check for word numbers
          const wordMap: {[key: string]: number} = {
            'first': 0, 'second': 1, 'third': 2, 'fourth': 3, 'fifth': 4,
            'sixth': 5, 'seventh': 6, 'eighth': 7, 'ninth': 8, 'tenth': 9
          };
          
          for (const [word, index] of Object.entries(wordMap)) {
            if (command.includes(word)) {
              indexToDelete = index;
              break;
            }
          }
          
          // Check for digits if no word found
          if (indexToDelete === undefined) {
            const match = command.match(/(\d+)(?:st|nd|rd|th)?/);
            if (match) {
              const num = parseInt(match[1]);
              if (num > 0) indexToDelete = num - 1; // 0-based index
            }
          }

          (window as any).deleteItemDetailsRow(indexToDelete);
          
          if (indexToDelete !== undefined) {
            toast.success(`Deleted item #${indexToDelete + 1}`);
          } else {
            toast.success("Deleted last item");
          }

          // Scroll to item table
          const section = document.getElementById('itemDetails');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
          toast.error("Item Details table not available");
        }
      }
      else if (command.includes('add') && command.includes('invoice')) {
        if ((window as any).addInvoiceDetailsRow) {
          (window as any).addInvoiceDetailsRow();
          toast.success("Added new invoice to Invoice Details table");
          
          // Scroll to invoice table
          const section = document.getElementById('invoiceDetails');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
          toast.error("Invoice Details table not available");
        }
      }
      else {
        toast.info("Command not recognized. Try 'add item', 'delete second item', or 'add invoice'");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to execute command");
    } finally {
      setIsProcessing(false);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCommand();
    }
  };

  return (
    <div className="bg-white border-t border-slate-200 p-3 shadow-lg z-40">
      <div className="max-w-4xl mx-auto relative flex items-center gap-2">
        <div className="absolute left-3 text-blue-600">
          <Sparkles size={18} className={isProcessing ? "animate-pulse" : ""} />
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask AI to update job details (e.g., 'Add a new invoice', 'Delete second item')..."
          className="w-full pl-10 pr-12 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
          disabled={isProcessing}
        />
        <div className="absolute right-2">
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 rounded-full hover:bg-blue-50 text-blue-600"
            onClick={handleCommand}
            disabled={!input.trim() || isProcessing}
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
      {/* Quick suggestion chips */}
      <div className="max-w-4xl mx-auto mt-2 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button 
          onClick={() => setInput("Add a new item in the item table")}
          className="text-[11px] px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md whitespace-nowrap transition-colors"
        >
          Add item
        </button>
        <button 
          onClick={() => setInput("Delete the second item")}
          className="text-[11px] px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md whitespace-nowrap transition-colors"
        >
          Delete 2nd item
        </button>
        <button 
          onClick={() => setInput("Add a new invoice")}
          className="text-[11px] px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md whitespace-nowrap transition-colors"
        >
          Add invoice
        </button>
      </div>
    </div>
  );
}
