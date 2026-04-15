import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface SuggestionItem {
  id: string;
  code: string;
  description: string;
  value?: string;
  canRemove?: boolean;
}

interface SuggestionsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeCell?: {
    section: string;
    rowIndex: number;
    columnId: string;
  } | null;
}

// Dynamic suggestions data for different row indices
const itemSuggestionsData = {
  0: {
    fta: [
      {
        id: '1',
        code: '046/2011-230(I)',
        description: '861004 - COO-PTA-Malaysia',
        value: 'FTA Duty : 0',
        canRemove: false
      },
      {
        id: '2',
        code: '052/2018-45(II)',
        description: '873001 - COO-APTA-Thailand',
        value: 'FTA Duty : 0',
        canRemove: true
      }
    ],
    supportingDoc: [
      {
        id: '1',
        code: '001000',
        description: 'Certificate of analysis',
        canRemove: false
      },
      {
        id: '2',
        code: '002000',
        description: 'Certificate of conformity',
        canRemove: true
      },
      {
        id: '3',
        code: '003000',
        description: 'Test certificate',
        canRemove: false
      }
    ]
  },
  1: {
    fta: [
      {
        id: '1',
        code: '089/2019-120(III)',
        description: '854312 - COO-SAFTA-Bangladesh',
        value: 'FTA Duty : 2.5%',
        canRemove: true
      },
      {
        id: '2',
        code: '124/2020-67(I)',
        description: '854312 - COO-CEPA-Singapore',
        value: 'FTA Duty : 0',
        canRemove: false
      }
    ],
    supportingDoc: [
      {
        id: '1',
        code: '004000',
        description: 'Packing list',
        canRemove: true
      },
      {
        id: '2',
        code: '005000',
        description: 'Quality certificate',
        canRemove: false
      }
    ]
  },
  2: {
    fta: [
      {
        id: '1',
        code: '078/2017-89(II)',
        description: '392690 - COO-ASEAN-Vietnam',
        value: 'FTA Duty : 1.5%',
        canRemove: false
      },
      {
        id: '2',
        code: '156/2021-34(IV)',
        description: '392690 - COO-CEPA-Korea',
        value: 'FTA Duty : 0',
        canRemove: true
      }
    ],
    supportingDoc: [
      {
        id: '1',
        code: '006000',
        description: 'Manufacturing certificate',
        canRemove: true
      },
      {
        id: '2',
        code: '007000',
        description: 'Origin declaration',
        canRemove: false
      },
      {
        id: '3',
        code: '008000',
        description: 'Inspection report',
        canRemove: true
      }
    ]
  },
  3: {
    fta: [
      {
        id: '1',
        code: '203/2022-78(I)',
        description: '731511 - COO-MERCOSUR-Brazil',
        value: 'FTA Duty : 3.0%',
        canRemove: true
      },
      {
        id: '2',
        code: '045/2016-12(III)',
        description: '731511 - COO-APTA-China',
        value: 'FTA Duty : 0',
        canRemove: false
      },
      {
        id: '3',
        code: '178/2019-56(II)',
        description: '731511 - COO-SAFTA-Nepal',
        value: 'FTA Duty : 5.0%',
        canRemove: true
      }
    ],
    supportingDoc: [
      {
        id: '1',
        code: '009000',
        description: 'Material test certificate',
        canRemove: false
      },
      {
        id: '2',
        code: '010000',
        description: 'Calibration certificate',
        canRemove: true
      }
    ]
  }
};

// Fallback suggestions for rows without specific data
const defaultSuggestions = {
  fta: [
    {
      id: '1',
      code: '046/2011-230(I)',
      description: 'Standard FTA classification',
      value: 'FTA Duty : 0',
      canRemove: false
    }
  ],
  supportingDoc: [
    {
      id: '1',
      code: '001000',
      description: 'Standard document',
      canRemove: false
    }
  ]
};

function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="bg-[#3a4458] rounded p-3 space-y-2">
        <div className="h-4 bg-[#4a5468] rounded w-3/4"></div>
        <div className="h-3 bg-[#4a5468] rounded w-full"></div>
        <div className="h-3 bg-[#4a5468] rounded w-1/2"></div>
      </div>
      <div className="bg-[#3a4458] rounded p-3 space-y-2">
        <div className="h-4 bg-[#4a5468] rounded w-2/3"></div>
        <div className="h-3 bg-[#4a5468] rounded w-full"></div>
        <div className="h-3 bg-[#4a5468] rounded w-3/4"></div>
      </div>
    </div>
  );
}

function SuggestionCard({ suggestion, onRemove }: { 
  suggestion: SuggestionItem;
  onRemove?: (id: string) => void;
}) {
  const [isRemoved, setIsRemoved] = React.useState(false);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRemoved(true);
    onRemove?.(suggestion.id);
  };

  if (isRemoved) {
    return (
      <div className="bg-[#2a3340] rounded p-3 opacity-50 border border-[#505767] border-dashed">
        <div className="text-[#9497A1] font-['Inter:Medium',_sans-serif] font-medium text-[14px] leading-[18px] text-center">
          Removed from suggestions
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#3a4458] rounded p-3 cursor-pointer hover:bg-[#404a60] transition-colors relative group">
      <div className="text-[#ffffff] font-['Inter:Medium',_sans-serif] font-medium text-[14px] leading-[18px] mb-1">
        {suggestion.code}
      </div>
      <div className="text-[#cdcfd3] font-['Inter:Regular',_sans-serif] font-normal text-[14px] leading-[18px] mb-1">
        {suggestion.description}
      </div>
      {suggestion.value && (
        <div className="text-[#cdcfd3] font-['Inter:Regular',_sans-serif] font-normal text-[14px] leading-[18px]">
          {suggestion.value}
        </div>
      )}
      
      {suggestion.canRemove && (
        <button
          onClick={handleRemove}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#d4183d] hover:bg-[#b81529] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
          title="Remove from suggestions"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default function SuggestionsSidebar({ isOpen, onClose, activeCell }: SuggestionsSidebarProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [removedItems, setRemovedItems] = useState<Set<string>>(new Set());

  // Get suggestions based on row index and column with some randomization
  const getSuggestionsForRow = (rowIndex: number, columnId?: string) => {
    const suggestions = itemSuggestionsData[rowIndex as keyof typeof itemSuggestionsData] || defaultSuggestions;
    
    // Add some randomization - sometimes remove one or two items randomly
    const randomize = Math.random() < 0.4; // 40% chance to randomize
    
    if (randomize) {
      const ftaCopy = [...suggestions.fta];
      const supportingDocCopy = [...suggestions.supportingDoc];
      
      // Randomly remove 1-2 items from each array
      if (ftaCopy.length > 1 && Math.random() < 0.6) {
        ftaCopy.splice(Math.floor(Math.random() * ftaCopy.length), 1);
      }
      
      if (supportingDocCopy.length > 1 && Math.random() < 0.5) {
        supportingDocCopy.splice(Math.floor(Math.random() * supportingDocCopy.length), 1);
        
        // Sometimes remove another one
        if (supportingDocCopy.length > 1 && Math.random() < 0.3) {
          supportingDocCopy.splice(Math.floor(Math.random() * supportingDocCopy.length), 1);
        }
      }
      
      return {
        fta: ftaCopy,
        supportingDoc: supportingDocCopy
      };
    }
    
    // Column-specific filtering (sometimes show fewer suggestions for certain columns)
    if (columnId) {
      const ftaCopy = [...suggestions.fta];
      const supportingDocCopy = [...suggestions.supportingDoc];
      
      // For HSN column, sometimes show fewer FTA suggestions
      if (columnId === 'hsn' && Math.random() < 0.3) {
        return {
          fta: ftaCopy.slice(0, 1),
          supportingDoc: supportingDocCopy
        };
      }
      
      // For description column, sometimes show fewer supporting doc suggestions
      if ((columnId === 'invoiceDescription' || columnId === 'description') && Math.random() < 0.4) {
        return {
          fta: ftaCopy,
          supportingDoc: supportingDocCopy.slice(0, Math.max(1, supportingDocCopy.length - 1))
        };
      }
    }
    
    return suggestions;
  };

  const handleRemoveItem = (id: string) => {
    setRemovedItems(prev => new Set([...prev, id]));
  };

  // Simulate loading when active cell changes - only for itemDetails section
  useEffect(() => {
    if (activeCell && activeCell.section === 'itemDetails') {
      setIsLoading(true);
      setShowContent(false);
      setRemovedItems(new Set()); // Reset removed items for new cell
      
      // Random loading delay between 1-3 seconds
      const loadingDelay = Math.random() * 2000 + 1000;
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, loadingDelay);
      
      return () => clearTimeout(timer);
    } else {
      // If cell is not from itemDetails, reset everything
      setShowContent(false);
      setIsLoading(false);
      setRemovedItems(new Set());
    }
  }, [activeCell]);

  if (!isOpen) return null;

  const shouldShowContent = activeCell && activeCell.section === 'itemDetails' && showContent;

  return (
    <div className="w-[240px] bg-[#2d364d] flex flex-col h-full">
      <div
        aria-hidden="true"
        className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      {/* Header - matches AuditSidebar structure */}
      <div className="bg-[#2d364d] h-12 relative shrink-0 w-full flex items-center justify-between px-3 border-b border-[#505767]">
        <div className="flex items-center gap-2">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Suggestions</p>
          </div>
        </div>
        <button 
          className="text-[#9497A1] hover:text-[#ffffff] transition-colors cursor-pointer hover:opacity-80"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {!shouldShowContent ? (
          <div className="text-center text-[#9497A1] font-['Inter:Regular',_sans-serif] font-normal text-[14px] leading-[18px] mt-8 px-2">
            {isLoading ? (
              'Loading suggestions...'
            ) : activeCell && activeCell.section !== 'itemDetails' ? (
              'Suggestions are only available for Item Details table cells'
            ) : !activeCell ? (
              'Click on an Item Details table cell to see contextual suggestions'
            ) : (
              'Processing suggestions for this item...'
            )}
          </div>
        ) : (
          <>
            {/* Page indicator */}
            <div className="text-[#cdcfd3] font-['Inter:Regular',_sans-serif] font-normal text-[12px] leading-[16px] mb-4">
              1/1
            </div>

            {(() => {
              const currentSuggestions = getSuggestionsForRow(activeCell.rowIndex, activeCell.columnId);
              
              return (
                <>
                  {/* Row Info */}
                  <div className="mb-4 p-3 bg-[#242c40] rounded border border-[#505767]">
                    <div className="text-[#9497A1] font-['Inter:Regular',_sans-serif] font-normal text-[12px] leading-[16px] mb-1">
                      ITEM ROW {activeCell.rowIndex + 1}
                    </div>
                    <div className="text-[#ffffff] font-['Inter:Medium',_sans-serif] font-medium text-[14px] leading-[18px]">
                      Column: {activeCell.columnId}
                    </div>
                  </div>

                  {/* FTA Suggestions Section */}
                  <div className="mb-6">
                    <h3 className="text-[#ffffff] font-['Inter:Medium',_sans-serif] font-medium text-[14px] leading-[18px] mb-3">
                      FTA Suggestions
                    </h3>
                    
                    {isLoading ? (
                      <LoadingSkeleton />
                    ) : (
                      <div className="space-y-3">
                        {currentSuggestions.fta
                          .filter(suggestion => !removedItems.has(suggestion.id))
                          .map((suggestion) => (
                            <SuggestionCard 
                              key={suggestion.id} 
                              suggestion={suggestion}
                              onRemove={handleRemoveItem}
                            />
                          ))}
                        {currentSuggestions.fta.filter(suggestion => !removedItems.has(suggestion.id)).length === 0 && (
                          <div className="text-[#9497A1] text-[14px] text-center p-3">
                            No FTA suggestions available
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Supporting Doc Suggestions Section */}
                  <div className="mb-6">
                    <h3 className="text-[#ffffff] font-['Inter:Medium',_sans-serif] font-medium text-[14px] leading-[18px] mb-3">
                      Supporting Doc. Suggestions
                    </h3>
                    
                    {isLoading ? (
                      <LoadingSkeleton />
                    ) : (
                      <div className="space-y-3">
                        {currentSuggestions.supportingDoc
                          .filter(suggestion => !removedItems.has(suggestion.id))
                          .map((suggestion) => (
                            <SuggestionCard 
                              key={suggestion.id} 
                              suggestion={suggestion}
                              onRemove={handleRemoveItem}
                            />
                          ))}
                        {currentSuggestions.supportingDoc.filter(suggestion => !removedItems.has(suggestion.id)).length === 0 && (
                          <div className="text-[#9497A1] text-[14px] text-center p-3">
                            No supporting document suggestions available
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </>
        )}
      </div>
    </div>
  );
}