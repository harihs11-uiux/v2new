import React, { useState, useMemo } from 'react';
import svgPaths from '../imports/svg-auqjrqj069';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  pointerWithin,
  rectIntersection,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import {
  CSS,
} from '@dnd-kit/utilities';

interface ColumnConfig {
  key: string;
  title: string;
  width: number;
  minWidth: number;
  maxWidth: number;
  fixed?: 'left' | 'right';
  moveable?: boolean;
  visible: boolean;
}

interface ColumnCustomizationProps {
  isOpen: boolean;
  onClose: () => void;
  columns: ColumnConfig[];
  onSave: (columns: ColumnConfig[]) => void;
}

// Sortable Item Component
interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

function SortableItem({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 999 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

const ColumnCustomization: React.FC<ColumnCustomizationProps> = ({
  isOpen,
  onClose,
  columns,
  onSave
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [localColumns, setLocalColumns] = useState<ColumnConfig[]>(columns);
  const [expandedSections, setExpandedSections] = useState({
    leftFreezed: true,
    middleScrollable: true,
    rightFreezed: true
  });
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Filter columns based on search term
  const filteredColumns = useMemo(() => {
    return localColumns.filter(column =>
      column.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [localColumns, searchTerm]);

  // Group columns by their position
  const groupedColumns = useMemo(() => {
    return {
      leftFreezed: localColumns.filter(col => col.fixed === 'left' && col.visible),
      middleScrollable: localColumns.filter(col => !col.fixed && col.moveable !== false && col.visible),
      rightFreezed: localColumns.filter(col => col.fixed === 'right' && col.visible)
    };
  }, [localColumns]);

  const handleColumnToggle = (columnKey: string) => {
    setLocalColumns(prev => 
      prev.map(col => 
        col.key === columnKey 
          ? { ...col, visible: !col.visible }
          : col
      )
    );
  };

  const handleSectionToggle = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // Find the containers
    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId) || over.id as string;

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }

    setLocalColumns(prev => {
      const activeIndex = prev.findIndex(col => col.key === activeId);
      const overIndex = prev.findIndex(col => col.key === overId);
      
      if (activeIndex === -1) return prev;

      const newColumns = [...prev];
      const [activeColumn] = newColumns.splice(activeIndex, 1);
      
      // Update the fixed property based on the target container
      const updatedColumn = { 
        ...activeColumn, 
        fixed: getFixedValueForContainer(overContainer)
      };

      // If we're dropping into a specific position
      if (overIndex !== -1) {
        newColumns.splice(overIndex, 0, updatedColumn);
      } else {
        // If we're dropping into an empty container
        newColumns.push(updatedColumn);
      }

      return newColumns;
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId) || over.id as string;

    if (!activeContainer || !overContainer) {
      return;
    }

    if (activeContainer === overContainer) {
      // Reordering within the same container
      setLocalColumns(prev => {
        const containerColumns = getColumnsForContainer(prev, activeContainer);
        const activeIndex = containerColumns.findIndex(col => col.key === activeId);
        const overIndex = containerColumns.findIndex(col => col.key === overId);

        if (activeIndex !== activeIndex) {
          const reorderedColumns = arrayMove(containerColumns, activeIndex, overIndex);
          return prev.map(col => {
            const reorderedCol = reorderedColumns.find(rc => rc.key === col.key);
            return reorderedCol || col;
          });
        }

        return prev;
      });
    } else {
      // Moving between containers - already handled in handleDragOver
      setLocalColumns(prev => {
        const newColumns = [...prev];
        const activeColumn = newColumns.find(col => col.key === activeId);
        
        if (activeColumn) {
          activeColumn.fixed = getFixedValueForContainer(overContainer);
        }

        return newColumns;
      });
    }
  };

  // Helper functions
  const findContainer = (id: string): string | null => {
    const column = localColumns.find(col => col.key === id);
    if (!column || !column.visible) return null;
    
    if (column.fixed === 'left') return 'leftFreezed';
    if (column.fixed === 'right') return 'rightFreezed';
    return 'middleScrollable';
  };

  const getColumnsForContainer = (columns: ColumnConfig[], container: string): ColumnConfig[] => {
    switch (container) {
      case 'leftFreezed':
        return columns.filter(col => col.fixed === 'left' && col.visible);
      case 'rightFreezed':
        return columns.filter(col => col.fixed === 'right' && col.visible);
      case 'middleScrollable':
        return columns.filter(col => !col.fixed && col.moveable !== false && col.visible);
      default:
        return [];
    }
  };

  const getFixedValueForContainer = (container: string): 'left' | 'right' | undefined => {
    switch (container) {
      case 'leftFreezed':
        return 'left';
      case 'rightFreezed':
        return 'right';
      case 'middleScrollable':
      default:
        return undefined;
    }
  };

  const handleSave = () => {
    onSave(localColumns);
    onClose();
  };

  const handleCancel = () => {
    setLocalColumns(columns); // Reset to original state
    onClose();
  };

  if (!isOpen) return null;

  const Close = () => (
    <div className="relative shrink-0 size-[18px]" data-name="close">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g>
          <mask
            height="18"
            id="mask0_235_5369"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_235_5369)">
            <path
              d={svgPaths.p4280c0}
              fill="var(--fill-0, #9497A1)"
              id="close_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const Search = () => (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-4" data-name="search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="icon">
          <mask
            height="16"
            id="mask0_235_5365"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_235_5365)">
            <path
              d={svgPaths.p18195a80}
              fill="var(--fill-0, #626776)"
              id="search"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const ArrowDropdown = ({ isExpanded }: { isExpanded: boolean }) => (
    <div className="relative shrink-0 size-4 self-center translate-y-[1px]" data-name="arrow_dropdown">
      <svg
        className={`block size-full transition-transform duration-200 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_235_5377)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1ee4d500}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_235_5377">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );

  const DragList = () => (
    <div className="h-[18px] relative shrink-0 w-4" data-name="drag list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_235_5373"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_235_5373)">
            <path
              d={svgPaths.p211bf300}
              fill="var(--fill-0, #626776)"
              id="drag_indicator"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  // Helper function to render a sortable column section that hugs content
  const renderSortableSection = (
    sectionColumns: ColumnConfig[],
    sectionName: string,
    isExpanded: boolean,
    containerId: string
  ) => {
    if (!isExpanded) {
      return null;
    }

    return (
      <SortableContext 
        id={containerId}
        items={sectionColumns.map(col => col.key)} 
        strategy={verticalListSortingStrategy}
      >
        <div className="w-full">
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-3 pr-0 py-2 w-full">
            {sectionColumns.length === 0 ? (
              <div 
                id={containerId}
                className="w-full h-8 flex items-center justify-center text-[#9497a1] text-[12px] border-2 border-dashed border-[#d0d5e3] rounded bg-[#f8f9fa]"
              >
{containerId === 'leftFreezed' ? 'Drop columns here (Optional)' : 
                 containerId === 'rightFreezed' ? 'Drop columns here (Optional)' : 
                 'Drop columns here'}
              </div>
            ) : (
              sectionColumns.map((column) => (
                <SortableItem key={column.key} id={column.key}>
                  <div className="bg-[#ffffff] relative shrink-0 w-full cursor-move hover:bg-[#f8f9fa] transition-colors">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-1.5 relative w-full">
                        <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          <DragList />
                          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[12px] text-left text-nowrap">
                            <p className="[text-overflow:inherit] [text-wrap-mode:inherit] [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
                              {column.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SortableItem>
              ))
            )}
          </div>
        </div>
      </SortableContext>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={handleCancel}
      />
      
      {/* Modal - 800x800 dimensions */}
      <div className="relative bg-[#cad2e5] overflow-clip rounded-xl w-[800px] h-[800px] max-w-[800px] min-w-[800px] shadow-2xl">
        
        {/* Title Bar - 40px height */}
        <div className="absolute bg-[#1f2432] box-border content-stretch flex flex-row items-center justify-between left-0 px-[16px] right-0 top-0 h-[40px]">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-[156px]">
            <p className="block leading-[18px]">Customize Table View</p>
          </div>
          <button onClick={handleCancel} className="cursor-pointer">
            <Close />
          </button>
        </div>

        {/* Main Content - 768px width (800px - 32px padding), optimized height */}
        <div className="absolute box-border content-stretch flex flex-row gap-3 items-start justify-start left-4 p-0 top-[52px] w-[768px]">
          
          {/* Left Side - Column Selection */}
          <div className="bg-[#ebeef7] h-[688px] overflow-clip relative rounded w-[378px] min-w-[378px] max-w-[378px] shrink-0">
            
            {/* Header */}
            <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-4 not-italic text-[#050e25] text-[12px] text-left top-3 w-[340px]">
              <p className="block leading-[16px] text-[#626776]">Select Fields for the table</p>
            </div>

            {/* Search Box */}
            <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start left-4 p-[6px] right-4 rounded top-[32px]">
              <div className="absolute border border-[#d0d5e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[12px] text-left bg-transparent border-none outline-none"
              />
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <Search />
              </div>
            </div>

            {/* Column List - Optimized height for 800px modal */}
            <div className="absolute box-border content-stretch flex flex-col h-[620px] items-start justify-start left-4 overflow-auto p-0 pb-3 right-4 rounded shadow-[0px_0px_13.2px_0px_#d8dce9] top-[64px]">
              {filteredColumns.map((column, index) => (
                <div
                  key={column.key}
                  className="bg-[#ffffff] relative shrink-0 w-full"
                >
                  <div className="flex flex-row items-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-[6px] relative w-full">
                      <Checkbox
                        checked={column.visible}
                        onCheckedChange={() => handleColumnToggle(column.key)}
                        className="w-4 h-4 border-[#CDCFD3] bg-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:border-[#3874FF]"
                      />
                      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
                        <p className="block leading-[16px]">{column.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Selected Fields */}
          <div className="bg-[#e5e8f3] h-[688px] overflow-y-auto relative rounded w-[378px] min-w-[378px] max-w-[378px] shrink-0">
            
            {/* Header */}
            <div className="sticky top-0 bg-[#e5e8f3] z-10 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-4 not-italic text-[#050e25] text-[12px] text-left pt-3 pb-2 px-4 w-full">
              <p className="block leading-[16px] text-[#626776]">Selected fields for table view</p>
            </div>

            <DndContext
              sensors={sensors}
              collisionDetection={pointerWithin}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
            >
              {/* Content with 12px bottom spacing */}
              <div className="space-y-1.5 px-4 pb-3">
                
                {/* Left Freezed Pane - Compact height */}
                <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-1 items-start justify-start px-0 py-1.5 pb-2 rounded">
                  
                  {/* Section Header */}
                  <div className="bg-[#ffffff] relative shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <button
                        onClick={() => handleSectionToggle('leftFreezed')}
                        className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1 relative w-full cursor-pointer"
                      >
                        <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          <ArrowDropdown isExpanded={expandedSections.leftFreezed} />
                          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
                            <p className="block leading-[16px] pt-1">Left Freezed Pane ({groupedColumns.leftFreezed.length})</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Section Content - Compact */}
                  {renderSortableSection(
                    groupedColumns.leftFreezed,
                    'leftFreezed',
                    expandedSections.leftFreezed,
                    'leftFreezed'
                  )}
                </div>

                {/* Middle Scrollable Area - Compact height */}
                <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-1 items-start justify-start px-0 py-1.5 pb-2 rounded">
                  
                  {/* Section Header */}
                  <div className="bg-[#ffffff] relative shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <button
                        onClick={() => handleSectionToggle('middleScrollable')}
                        className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1 relative w-full cursor-pointer"
                      >
                        <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          <ArrowDropdown isExpanded={expandedSections.middleScrollable} />
                          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
                            <p className="block leading-[16px] pt-1">Middle Scrollable Area ({groupedColumns.middleScrollable.length})</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Section Content - Compact */}
                  {renderSortableSection(
                    groupedColumns.middleScrollable,
                    'middleScrollable',
                    expandedSections.middleScrollable,
                    'middleScrollable'
                  )}
                </div>

                {/* Right Freezed Pane - Compact height */}
                <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-1 items-start justify-start px-0 py-1.5 pb-2 rounded mb-2">
                  
                  {/* Section Header */}
                  <div className="bg-[#ffffff] relative shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <button
                        onClick={() => handleSectionToggle('rightFreezed')}
                        className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1 relative w-full cursor-pointer"
                      >
                        <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          <ArrowDropdown isExpanded={expandedSections.rightFreezed} />
                          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
                            <p className="block leading-[16px] pt-1">Right Freezed Pane ({groupedColumns.rightFreezed.length})</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Section Content - Compact */}
                  {renderSortableSection(
                    groupedColumns.rightFreezed,
                    'rightFreezed',
                    expandedSections.rightFreezed,
                    'rightFreezed'
                  )}
                </div>

              </div>
            </DndContext>
          </div>
        </div>

        {/* Footer - Reduced height to 60px */}
        <div className="bg-[#ebeef7] absolute bottom-0 left-0 right-0 size-full max-h-[60px]">
          <div className="flex flex-row items-center justify-end relative size-full">
            <div className="box-border content-stretch flex flex-row items-center justify-end px-6 py-2 relative size-full">
              <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
                {/* Cancel Button */}
                <button
                  onClick={handleCancel}
                  className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1.5 relative rounded shrink-0 cursor-pointer hover:bg-black/5 transition-colors"
                >
                  <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[12px] text-left text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">Cancel</p>
                  </div>
                </button>
                
                {/* Save Changes Button */}
                <button
                  onClick={handleSave}
                  className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1.5 relative rounded shrink-0 cursor-pointer hover:bg-[#2563eb] transition-colors"
                >
                  <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">Save Changes</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnCustomization;