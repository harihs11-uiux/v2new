import { EditingCell, NavigationCell, HoverState, TABLE_CONSTANTS } from './TableTypes';

// Scroll synchronization handlers
export const createScrollSyncHandlers = (
  headerRef: React.RefObject<HTMLDivElement>,
  dataRef: React.RefObject<HTMLDivElement>,
  footerRef: React.RefObject<HTMLDivElement>
) => {
  const syncScroll = (sourceRef: React.RefObject<HTMLDivElement>, targetRefs: React.RefObject<HTMLDivElement>[]) => {
    return (e: React.UIEvent<HTMLDivElement>) => {
      const scrollLeft = e.currentTarget.scrollLeft;
      targetRefs.forEach(ref => {
        if (ref.current) {
          ref.current.scrollLeft = scrollLeft;
        }
      });
    };
  };

  return {
    handleHeaderScroll: syncScroll(headerRef, [dataRef, footerRef]),
    handleDataScroll: syncScroll(dataRef, [headerRef, footerRef]),
    handleFooterScroll: syncScroll(footerRef, [headerRef, dataRef])
  };
};

// Hover state helpers
export const createHoverHandlers = (setHoverState: React.Dispatch<React.SetStateAction<HoverState>>) => ({
  handleCellHover: (rowId: string, cellId: string, columnIndex: number) => {
    setHoverState({ rowId, cellId, columnIndex });
  },
  handleCellLeave: () => {
    setHoverState({ rowId: null, cellId: null, columnIndex: null });
  }
});

// State check helpers
export const createStateCheckers = (hoverState: HoverState, editingCell: EditingCell | null) => ({
  shouldShowRowHover: (rowId: string) => hoverState.rowId === rowId,
  shouldShowRowActive: (rowId: string) => editingCell?.rowId === rowId,
  shouldShowRowHighlight: (rowId: string) => hoverState.rowId === rowId || editingCell?.rowId === rowId,
  shouldShowCellHover: (cellId: string) => hoverState.cellId === cellId,
  shouldShowColumnHeaderHover: (columnIndex: number) => hoverState.columnIndex === columnIndex
});

// Column header styling
export const getColumnHeaderHoverStyles = (columnIndex: number, shouldShowHover: boolean) => {
  if (shouldShowHover) {
    return {
      backgroundColor: TABLE_CONSTANTS.HOVER_BG,
      borderTop: `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}`,
      borderRight: `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}`,
      borderBottom: `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}`,
      borderLeft: `1px solid ${TABLE_CONSTANTS.ACTIVE_BORDER}`
    };
  }
  return { backgroundColor: '#EBEEF7' };
};

// Cell border styling
export const getCellBorderStyles = (isCellHovered: boolean) => ({
  borderTop: isCellHovered ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none',
  borderRight: isCellHovered ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
  borderBottom: isCellHovered ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : `1px solid ${TABLE_CONSTANTS.BORDER_COLOR}`,
  borderLeft: isCellHovered ? `1px solid ${TABLE_CONSTANTS.EDIT_BORDER}` : 'none'
});

// Cell background styling
export const getCellBackgroundColor = (isCellHovered: boolean, isRowHighlighted: boolean, customBg?: string) => {
  if (isCellHovered) return '#FFFFFF';
  if (isRowHighlighted) return TABLE_CONSTANTS.HOVER_BG;
  return customBg || 'transparent';
};

// Width calculation helpers
export const calculateTotalWidth = (widths: number[]) => widths.reduce((sum, width) => sum + width, 0);

// Resize handlers
export const createResizeHandlers = (
  setLeftColumnWidths: React.Dispatch<React.SetStateAction<number[]>>,
  setColumnWidths: React.Dispatch<React.SetStateAction<number[]>>
) => ({
  handleLeftColumnResize: (index: number, width: number) => {
    setLeftColumnWidths(prev => {
      const newWidths = [...prev];
      newWidths[index] = width;
      return newWidths;
    });
  },
  handleColumnResize: (index: number, width: number) => {
    setColumnWidths(prev => {
      const newWidths = [...prev];
      newWidths[index] = width;
      return newWidths;
    });
  }
});

// Selection handlers
export const createSelectionHandlers = <T extends { id: string; isSelected: boolean }>(
  data: T[],
  setData: React.Dispatch<React.SetStateAction<T[]>>,
  setSelectAll: React.Dispatch<React.SetStateAction<boolean>>
) => ({
  handleSelectAll: () => {
    const newSelectAll = !data.every(item => item.isSelected);
    setSelectAll(newSelectAll);
    setData(prev => prev.map(item => ({ ...item, isSelected: newSelectAll })));
  },
  handleRowSelect: (id: string) => {
    setData(prev => {
      const updated = prev.map(item => 
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      );
      const allSelected = updated.every(item => item.isSelected);
      setSelectAll(allSelected);
      return updated;
    });
  }
});