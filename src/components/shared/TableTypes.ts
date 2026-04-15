// Shared interfaces and types for all table components
export interface EditingCell {
  rowId: string;
  columnKey: string;
}

export interface NavigationCell {
  rowIndex: number;
  columnIndex: number;
  rowId: string;
  columnKey: string;
}

export interface HoverState {
  rowId: string | null;
  cellId: string | null;
  columnIndex: number | null;
}

export interface BaseTableRow {
  id: string;
  sNo: number;
  isSelected: boolean;
}

// Common table constants
export const TABLE_CONSTANTS = {
  ROW_HEIGHT: '34px',
  MIN_COLUMN_WIDTH: 80,
  MAX_COLUMN_WIDTH: 500,
  LEFT_COLUMN_MIN_WIDTHS: [30, 60, 120],
  LEFT_COLUMN_MAX_WIDTHS: [80, 150, 400],
  BORDER_COLOR: '#D0D5E3',
  HOVER_BG: '#CEF6F0',
  ACTIVE_BORDER: '#02B196',
  EDIT_BORDER: '#3874FF',
  EDIT_SHADOW: '0 2px 12px 0 rgba(113, 144, 214, 0.47)'
} as const;

// CSS classes for scrollbar control
export const SCROLLBAR_CLASSES = {
  HIDDEN: 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
  VISIBLE: 'overflow-x-auto overflow-y-hidden [scrollbar-width:thin] [scrollbar-color:#9ca3af_#ffffff] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-white [&::-webkit-scrollbar-thumb:hover]:bg-gray-500'
} as const;