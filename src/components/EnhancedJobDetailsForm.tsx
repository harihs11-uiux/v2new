import React, { useState, useRef, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ChevronDown, X, Calendar as CalendarIcon } from 'lucide-react';
import { format, isValid } from 'date-fns';
import svgPaths from '../imports/svg-7h4a1aafgj';
import imgEllipse2899Stroke from "figma:asset/9df4c21221efbbf7110355917e18e7dceb8e275e.png";
import { imgPersonAdd } from '../imports/svg-9eovo';
import ErrorSymbol from '../imports/Error';
import EnhancedAutocompleteInput from './EnhancedAutocompleteInput';
import ImporterDetailsSection from './ImporterDetailsSection';

// Grid Navigation Helper
function navigateGrid(currentElement: HTMLElement, direction: 'up' | 'down' | 'left' | 'right'): HTMLElement | null {
  const allFields = Array.from(document.querySelectorAll('[data-field-id]')) as HTMLElement[];
  const currentIndex = allFields.indexOf(currentElement);
  
  if (currentIndex === -1) return null;

  // Get the bounding rect of the current element
  const currentRect = currentElement.getBoundingClientRect();
  
  let targetField: HTMLElement | null = null;
  let minDistance = Infinity;

  for (let i = 0; i < allFields.length; i++) {
    if (i === currentIndex) continue;
    
    const fieldRect = allFields[i].getBoundingClientRect();
    
    // Define what "same row" and "same column" mean with a tolerance
    const tolerance = 5; // pixels
    const sameRow = Math.abs(fieldRect.top - currentRect.top) < tolerance;
    
    switch (direction) {
      case 'left':
        // Field must be in the same row and to the left
        if (sameRow && fieldRect.right <= currentRect.left) {
          const distance = currentRect.left - fieldRect.right;
          if (distance < minDistance) {
            minDistance = distance;
            targetField = allFields[i];
          }
        }
        break;
        
      case 'right':
        // Field must be in the same row and to the right
        if (sameRow && fieldRect.left >= currentRect.right) {
          const distance = fieldRect.left - currentRect.right;
          if (distance < minDistance) {
            minDistance = distance;
            targetField = allFields[i];
          }
        }
        break;
        
      case 'up':
        // Field must be in a row above and roughly in the same column
        if (fieldRect.bottom <= currentRect.top) {
          // Calculate horizontal and vertical distance
          const horizontalDistance = Math.abs(fieldRect.left - currentRect.left);
          const verticalDistance = currentRect.top - fieldRect.bottom;
          
          // Prefer fields that are closest horizontally, then vertically
          const distance = horizontalDistance + verticalDistance * 0.1;
          
          if (distance < minDistance) {
            minDistance = distance;
            targetField = allFields[i];
          }
        }
        break;
        
      case 'down':
        // Field must be in a row below and roughly in the same column
        if (fieldRect.top >= currentRect.bottom) {
          // Calculate horizontal and vertical distance
          const horizontalDistance = Math.abs(fieldRect.left - currentRect.left);
          const verticalDistance = fieldRect.top - currentRect.bottom;
          
          // Prefer fields that are closest horizontally, then vertically
          const distance = horizontalDistance + verticalDistance * 0.1;
          
          if (distance < minDistance) {
            minDistance = distance;
            targetField = allFields[i];
          }
        }
        break;
    }
  }
  
  return targetField;
}

interface EnhancedJobDetailsFormProps {
  jobData?: any;
  activeSection?: string;
  onFormChange?: (data: any) => void;
}

export interface EnhancedJobDetailsFormHandle {
  focusFirstField: (sectionId?: string) => void;
}

// Enhanced DatePicker with precise styling
interface DatePickerProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  fieldId: string;
  required?: boolean;
}

function EnhancedDatePicker({ value, onValueChange, placeholder = "Select", fieldId, required }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createSafeDate = (dateString: string): Date | undefined => {
    if (!dateString || dateString.trim() === '') return undefined;
    const date = new Date(dateString);
    return isValid(date) ? date : undefined;
  };

  React.useEffect(() => {
    const safeDate = createSafeDate(value);
    setSelectedDate(safeDate);
  }, [value]);

  const handleDateSelect = (date: Date | undefined) => {
    if (date && isValid(date)) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      setSelectedDate(date);
      onValueChange(formattedDate);
    } else {
      setSelectedDate(undefined);
      onValueChange('');
    }
    setIsOpen(false);
    setIsFocused(false); // Remove focus state after selection
    // Blur the button to remove focus
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.blur();
      }
    }, 0);
  };

  const getDisplayValue = (): string => {
    if (!selectedDate || !isValid(selectedDate)) return '';
    try {
      return format(selectedDate, 'dd-MM-yyyy');
    } catch (error) {
      return '';
    }
  };

  const displayValue = getDisplayValue();

  const getContainerStyle = () => {
    const isInvalid = required && (!value || value.trim() === '');
    
    if (isInvalid) {
      return {
        border: '1px solid #EF4444',
        boxShadow: isFocused ? '0 2px 12px 0 rgba(113, 144, 214, 0.47)' : 'none',
      };
    }

    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          ref={buttonRef}
          type="button"
          data-field-id={fieldId}
          tabIndex={0}
          className="flex items-center justify-between gap-1 w-full min-w-0 px-2 py-1.5 transition-all duration-200 bg-white"
          style={{
            height: '30px',
            borderRadius: '0px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            ...getContainerStyle(),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            // Handle Enter or Space to open calendar
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }
            // Handle arrow keys for field navigation when calendar is closed
            else if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
              e.preventDefault();
              const currentField = e.currentTarget as HTMLButtonElement;
              
              let direction: 'up' | 'down' | 'left' | 'right';
              if (e.key === 'ArrowDown') direction = 'down';
              else if (e.key === 'ArrowUp') direction = 'up';
              else if (e.key === 'ArrowLeft') direction = 'left';
              else direction = 'right';
              
              const targetField = navigateGrid(currentField, direction);
              if (targetField) {
                targetField.focus();
              }
            }
            // Escape to close calendar
            else if (e.key === 'Escape' && isOpen) {
              e.preventDefault();
              setIsOpen(false);
            }
          }}
        >
          <span className={`flex-1 min-w-0 text-left truncate ${displayValue ? 'text-[#050e25]' : 'text-gray-400'}`}>
            {displayValue || placeholder}
          </span>
          <CalendarIcon className="size-4 opacity-50 shrink-0 text-[#626776]" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white border border-[#d0d5e3]" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}

// Enhanced Input Component
interface EnhancedInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  fieldId: string;
  required?: boolean;
  style?: React.CSSProperties;
}

function EnhancedInput({ value, onChange, placeholder, fieldId, required, style }: EnhancedInputProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const getContainerStyle = () => {
    const isInvalid = required && (!value || value.trim() === '');
    
    if (isInvalid) {
      return {
        border: '1px solid #EF4444',
        boxShadow: isFocused ? '0 2px 12px 0 rgba(113, 144, 214, 0.47)' : 'none',
      };
    }

    if (isFocused && isEditMode) {
      return {
        border: '2px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <input
      data-field-id={fieldId}
      tabIndex={0}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={!isEditMode}
      className="w-full min-w-0 px-2 py-1.5 bg-white transition-all duration-200 outline-none"
      style={{
        height: '30px',
        borderRadius: '0px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#050e25',
        cursor: isEditMode ? 'text' : 'default',
        ...getContainerStyle(),
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false);
        setIsEditMode(false); // Exit edit mode when field loses focus
      }}
      onKeyDown={(e) => {
        const currentField = e.currentTarget as HTMLInputElement;
        
        // Handle Enter key to toggle edit mode
        if (e.key === 'Enter') {
          e.preventDefault();
          setIsEditMode(!isEditMode);
          return;
        }
        
        // Handle Escape to exit edit mode
        if (e.key === 'Escape' && isEditMode) {
          e.preventDefault();
          setIsEditMode(false);
          return;
        }
        
        // If in edit mode, allow normal arrow key behavior for text editing
        if (isEditMode) {
          // Let default behavior handle cursor movement within text
          return;
        }
        
        // Navigation mode: Handle arrow keys for 2D grid navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          // Up/Down navigate vertically in the grid
          e.preventDefault();
          const targetField = navigateGrid(currentField, e.key === 'ArrowDown' ? 'down' : 'up');
          if (targetField) {
            targetField.focus();
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          // Left/Right navigate horizontally in the grid
          e.preventDefault();
          const targetField = navigateGrid(currentField, e.key === 'ArrowRight' ? 'right' : 'left');
          if (targetField) {
            targetField.focus();
          }
        }
      }}
    />
  );
}

// Enhanced Textarea Component
interface EnhancedTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  fieldId: string;
}

function EnhancedTextarea({ value, onChange, placeholder, fieldId }: EnhancedTextareaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const getContainerStyle = () => {
    if (isFocused && isEditMode) {
      return {
        border: '2px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <textarea
      data-field-id={fieldId}
      tabIndex={0}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={!isEditMode}
      className="w-full min-w-0 px-2 py-1.5 bg-white transition-all duration-200 outline-none resize-none overflow-y-auto"
      style={{
        borderRadius: '0px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#050e25',
        lineHeight: '1.4',
        height: '60px',
        cursor: isEditMode ? 'text' : 'default',
        ...getContainerStyle(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false);
        setIsEditMode(false); // Exit edit mode when field loses focus
      }}
      onKeyDown={(e) => {
        const currentField = e.currentTarget as HTMLTextAreaElement;
        
        // Handle Enter key to toggle edit mode
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          setIsEditMode(!isEditMode);
          return;
        }
        
        // Handle Escape to exit edit mode
        if (e.key === 'Escape' && isEditMode) {
          e.preventDefault();
          setIsEditMode(false);
          return;
        }
        
        // If in edit mode, allow normal arrow and enter key behavior for text editing
        if (isEditMode) {
          // Shift+Enter for new line in edit mode
          if (e.key === 'Enter' && e.shiftKey) {
            // Allow default behavior (new line)
            return;
          }
          // Allow arrow keys for cursor movement and multi-line editing
          return;
        }
        
        // Navigation mode: Handle arrow keys for 2D grid navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          // Up/Down navigate vertically in the grid
          e.preventDefault();
          const targetField = navigateGrid(currentField, e.key === 'ArrowDown' ? 'down' : 'up');
          if (targetField) {
            targetField.focus();
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          // Left/Right navigate horizontally in the grid
          e.preventDefault();
          const targetField = navigateGrid(currentField, e.key === 'ArrowRight' ? 'right' : 'left');
          if (targetField) {
            targetField.focus();
          }
        }
      }}
    />
  );
}

// Enhanced Select Component
interface EnhancedSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  fieldId: string;
  required?: boolean;
  style?: React.CSSProperties;
}

function EnhancedSelect({ value, onValueChange, options, placeholder, fieldId, required, style }: EnhancedSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionsListRef = useRef<HTMLDivElement>(null);

  // Scroll selected option into view when using keyboard navigation
  useEffect(() => {
    if (isOpen && selectedIndex >= 0 && optionsListRef.current) {
      const selectedOption = optionsListRef.current.children[selectedIndex] as HTMLElement;
      if (selectedOption) {
        selectedOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
        setIsFocused(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getContainerStyle = () => {
    const isInvalid = required && (!value || value.trim() === '');
    
    if (isInvalid) {
      return {
        border: '1px solid #EF4444',
        boxShadow: isFocused ? '0 2px 12px 0 rgba(113, 144, 214, 0.47)' : 'none',
      };
    }

    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  // Keyboard navigation disabled

  return (
    <div ref={dropdownRef} className="relative w-full min-w-0">
      <button
        ref={buttonRef}
        type="button"
        data-field-id={fieldId}
        tabIndex={0}
        className="flex items-center justify-between gap-2 w-full min-w-0 px-2 py-1.5 bg-white transition-all duration-200"
        style={{
          height: '30px',
          borderRadius: '0px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          ...getContainerStyle(),
          ...style,
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
          if (!isOpen) {
            const currentIndex = value ? options.indexOf(value) : 0;
            setSelectedIndex(currentIndex >= 0 ? currentIndex : 0);
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          // Handle Enter key to open/close dropdown
          if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            
            if (isOpen) {
              // If dropdown is open and an option is selected, choose it
              if (selectedIndex >= 0 && selectedIndex < options.length) {
                onValueChange(options[selectedIndex]);
                setIsOpen(false);
                setSelectedIndex(-1);
              }
            } else {
              // Open dropdown
              setIsOpen(true);
              const currentIndex = value ? options.indexOf(value) : 0;
              setSelectedIndex(currentIndex >= 0 ? currentIndex : 0);
            }
          }
          // Handle Space key to open dropdown
          else if (e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            if (!isOpen) {
              setIsOpen(true);
              const currentIndex = value ? options.indexOf(value) : 0;
              setSelectedIndex(currentIndex >= 0 ? currentIndex : 0);
            }
          }
          // Handle arrow keys
          else if (e.key === 'ArrowDown') {
            e.preventDefault();
            
            if (isOpen) {
              // Navigate within dropdown options
              setSelectedIndex((prev) => Math.min(prev + 1, options.length - 1));
            } else {
              // Navigate vertically in grid
              const currentField = e.currentTarget as HTMLButtonElement;
              const targetField = navigateGrid(currentField, 'down');
              if (targetField) {
                targetField.focus();
              }
            }
          }
          else if (e.key === 'ArrowUp') {
            e.preventDefault();
            
            if (isOpen) {
              // Navigate within dropdown options
              setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else {
              // Navigate vertically in grid
              const currentField = e.currentTarget as HTMLButtonElement;
              const targetField = navigateGrid(currentField, 'up');
              if (targetField) {
                targetField.focus();
              }
            }
          }
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            if (!isOpen) {
              // Navigate horizontally in grid
              e.preventDefault();
              const currentField = e.currentTarget as HTMLButtonElement;
              const targetField = navigateGrid(currentField, e.key === 'ArrowRight' ? 'right' : 'left');
              if (targetField) {
                targetField.focus();
              }
            }
          }
          // Escape to close dropdown
          else if (e.key === 'Escape') {
            if (isOpen) {
              e.preventDefault();
              setIsOpen(false);
              setSelectedIndex(-1);
            }
          }
        }}
      >
        <span className={`text-left flex-1 min-w-0 truncate ${value ? 'text-[#050e25]' : 'text-gray-400'}`}>
          {value || placeholder}
        </span>
        <ChevronDown className="size-4 opacity-50 text-[#626776] flex-shrink-0" />
      </button>
      
      {isOpen && (
        <div ref={optionsListRef} className="absolute z-50 w-full mt-1 border border-[#d0d5e3] shadow-lg max-h-[200px] overflow-y-auto" style={{ backgroundColor: '#050E25' }}>
          {options.map((option, index) => (
            <div
              key={option}
              className={`px-2 py-1.5 text-[14px] cursor-pointer text-white ${
                index === selectedIndex ? '' : ''
              }`}
              style={{
                backgroundColor: index === selectedIndex ? '#3874FF' : 'transparent'
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onValueChange(option);
                setIsOpen(false);
                setSelectedIndex(-1);
                setIsFocused(false); // Remove focus state after selection
                // Blur the button to remove focus
                setTimeout(() => {
                  if (buttonRef.current) {
                    buttonRef.current.blur();
                  }
                }, 0);
              }}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseLeave={() => setSelectedIndex(-1)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Enhanced Switch Component
interface EnhancedSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  fieldId: string;
  transparent?: boolean;
}

function EnhancedSwitch({ checked, onCheckedChange, fieldId, transparent = false }: EnhancedSwitchProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getContainerStyle = () => {
    if (transparent) return {};
    
    if (isFocused) {
      return {
        border: '1px solid #3874FF',
        boxShadow: '0 2px 12px 0 rgba(113, 144, 214, 0.47)',
      };
    } else if (isHovered) {
      return {
        border: '1px solid #3874FF',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
      };
    }
  };

  return (
    <div
      data-field-id={fieldId}
      tabIndex={0}
      className={`flex items-center gap-2 px-2 py-1.5 transition-all duration-200 cursor-pointer min-w-0 ${transparent ? 'bg-transparent w-auto' : 'bg-white w-full'}`}
      style={{
        height: '30px',
        borderRadius: '0px',
        ...getContainerStyle(),
      }}
      onClick={() => onCheckedChange(!checked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={(e) => {
        // Handle Enter or Space to toggle
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          onCheckedChange(!checked);
        }
        // Handle arrow keys for 2D grid navigation
        else if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          const currentField = e.currentTarget as HTMLElement;
          
          let direction: 'up' | 'down' | 'left' | 'right';
          if (e.key === 'ArrowDown') direction = 'down';
          else if (e.key === 'ArrowUp') direction = 'up';
          else if (e.key === 'ArrowLeft') direction = 'left';
          else direction = 'right';
          
          const targetField = navigateGrid(currentField, direction);
          if (targetField) {
            targetField.focus();
          }
        }
      }}
    >
      <div className="relative h-3 w-[25px]">
        <div
          className={`w-full h-full rounded-full transition-colors duration-200 ${
            checked ? 'bg-[#00B196]' : 'bg-[#CF3B3B]'
          }`}
          style={{ borderRadius: '6px' }}
        >
          <div
            className={`absolute top-0 w-4 h-3 bg-white rounded-full transition-transform duration-200 shadow-lg ${
              checked ? 'translate-x-[9px]' : 'translate-x-0'
            }`}
            style={{ borderRadius: '6px' }}
          />
        </div>
      </div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#050e25' }}>
        {checked ? "Yes" : "No"}
      </span>
    </div>
  );
}

// Enhanced Label Component
interface EnhancedLabelProps {
  children: React.ReactNode;
  fieldId: string;
  hoveredFields: Set<string>;
  focusedFields: Set<string>;
  height?: string;
}

function EnhancedLabel({ children, fieldId, hoveredFields, focusedFields, height = '30px' }: EnhancedLabelProps) {
  const isHighlighted = hoveredFields.has(fieldId) || focusedFields.has(fieldId);

  const getLabelStyle = () => {
    if (isHighlighted) {
      return {
        background: '#CEF6F0',
        borderTop: '1px solid #02B196',
        borderRight: '1px solid #02B196',
        borderBottom: '1px solid #02B196',
        borderLeft: '1px solid #02B196',
      };
    } else {
      return {
        borderTop: '1px solid #D0D5E3',
        borderRight: '1px solid #D0D5E3',
        borderLeft: '1px solid #D0D5E3',
        background: '#F3F5FA',
      };
    }
  };

  return (
    <div
      className="flex items-center justify-start px-2 py-1.5 transition-all duration-200"
      style={{
        width: '150px',
        height: height,
        borderRadius: '0px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: '600',
        color: '#050e25',
        ...getLabelStyle(),
      }}
    >
      <span className="truncate">{children}</span>
      {fieldId === 'job-warehouse-unit' && <span className="text-red-500 ml-1">*</span>}
    </div>
  );
}

// Form Field Component
interface FormFieldProps {
  label: string | React.ReactNode;
  fieldId: string;
  hoveredFields: Set<string>;
  focusedFields: Set<string>;
  onFieldHover: (fieldId: string, isHovered: boolean) => void;
  onFieldFocus: (fieldId: string, isFocused: boolean) => void;
  children: React.ReactNode;
}

function FormField({ label, fieldId, hoveredFields, focusedFields, onFieldHover, onFieldFocus, children }: FormFieldProps) {
  return (
    <div className="flex items-center w-full min-w-0">
      <EnhancedLabel fieldId={fieldId} hoveredFields={hoveredFields} focusedFields={focusedFields}>
        {label}
      </EnhancedLabel>
      <div
        className="flex-1 min-w-0"
        onMouseEnter={() => onFieldHover(fieldId, true)}
        onMouseLeave={() => onFieldHover(fieldId, false)}
        onFocusCapture={() => onFieldFocus(fieldId, true)}
        onBlurCapture={() => onFieldFocus(fieldId, false)}
      >
        {children}
      </div>
    </div>
  );
}

// Section Header Component
interface SectionHeaderProps {
  title: string;
  number: number;
  sectionId?: string;
  onNavigateToFirstField?: () => void;
  onNavigateToSection?: (direction: 'up' | 'down') => void;
  rightContent?: React.ReactNode;
}

function SectionHeader({ title, number, sectionId, onNavigateToFirstField, onNavigateToSection, rightContent }: SectionHeaderProps) {
  return (
    <div
      data-section-id={sectionId}
      className="h-[34px] relative w-full flex items-center justify-center"
      style={{
        backgroundColor: '#EBEEF7',
        borderTop: '1px solid #D0D5E3',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#050e25',
      }}
    >
      <span style={{ fontVariant: 'small-caps' }}>
        {number}. {title}
      </span>
      {rightContent && (
        <div className="absolute right-2 flex items-center">
          {rightContent}
        </div>
      )}
    </div>
  );
}

const EnhancedJobDetailsForm = forwardRef<EnhancedJobDetailsFormHandle, EnhancedJobDetailsFormProps>((props, ref) => {
  const { jobData, activeSection } = props;
  const isExport = jobData?.type === 'Export';
  
  // Keyboard navigation state
  const [focusedFieldIndex, setFocusedFieldIndex] = useState(0);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const warehouseDetailsRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    // CB Details
    name: jobData?.cbBranch || 'Unifo',
    licenseNo: jobData?.cbCode || 'AABCF2133MCH015',
    brSlNo: jobData?.branch || '015',
    city: jobData?.city || 'NEW DELHI',
    address: jobData?.address || '516,517 VISHAL TOWERS,10,DISTRICT CENTRE,JANAKPURI (W)"',
    state: jobData?.state || 'NEW DELHI',
    country: jobData?.country || '07 – DELHI',
    pincode: jobData?.pincode || '5884345',
    branch: jobData?.branchName || 'NEW DELHI',
    aeoRegNo: jobData?.aeoRegNo || '-',
    aeoRole: jobData?.aeoRole || '-',
    icegateId: jobData?.icegateId || 'FLYMAANEW',
    submittedBy: jobData?.submittedBy || 'Custom Broker',
    assignedCb: jobData?.assignedTo || '',

    // Job Info
    jobNo: jobData?.jobNo || 'ICB/16453/2025-26',
    jobDate: jobData?.jobDate || '2025-02-19',
    beNo: jobData?.beNumber || '1234567',
    beDate: jobData?.beDate || '2025-02-19',
    sbNo: jobData?.sbNumber || '',
    sbDate: jobData?.sbDate || '',
    createdBy: jobData?.createdBy || 'Admin',
    createdOn: jobData?.createdOn || '2025-02-19',
    priorBe: jobData?.priorBE || 'Advance BE',
    mot: jobData?.modeOfTransport || 'A-Air',
    beType: jobData?.beType || 'H-Home Consumption',
    sbType: jobData?.sbType || 'White-Free DEEC',
    zBeType: jobData?.zBeType || '',
    transactionRefNo: jobData?.transactionRefNo || 'Transaction Ref No.',
    customsHouseCd: jobData?.customsHouseCd || 'INDEL4',
    customerRefNo: jobData?.customerRefNo || 'Customer Ref No.',
    assessableValue: jobData?.assessableValue || '747364736',
    dutyPayable: jobData?.dutyPayable || '677436476',
    ucrNo: jobData?.ucrNo || '747364736',
    ucrType: jobData?.ucrType || 'UCR Type',
    kacchaBe: jobData?.kacchaBE === 'Yes',
    greenChannel: jobData?.greenChannel === 'Yes',
    section48: jobData?.section48 === 'Yes',
    section48Reason: jobData?.section48Reason || 'Reason',
    firstCheck: jobData?.firstCheck === 'Yes',
    firstCheckReason: jobData?.firstCheckReason || 'Reason',
    provisionalAssess: jobData?.provisionalAssess === 'Yes',
    paReason: jobData?.paReason || 'Reason',
    miscLoad: jobData?.miscLoad || 'Misc. Load',
    paytMthodCd: jobData?.paytMthodCd || 'Transaction',
    portOfOrigin: jobData?.portOfOrigin || 'JPNRT - NARITA APT/TOKYO',
    countryOfOrigin: jobData?.countryOfOrigin || 'JP - JAPAN',
    portOfShipment: jobData?.portOfShipment || 'JPNRT - NARITA APT/TOKYO',
    consCountry: jobData?.consCountry || 'JP - JAPAN',
    remarks: jobData?.remarks || 'Remarks',
    hssTransaction: jobData?.hssTransaction === 'Yes',
    addCharges: jobData?.addCharges || 'Add. Charges',
    drawbackClaimBy: jobData?.drawbackClaimBy || '',
    warehouseUnit: jobData?.warehouseUnit || '',
    sezUnit: jobData?.sezUnit || '',

    // Importer/Exporter Details
    importerName: jobData?.importerName || 'SUMITOMO ELECTRIC HARDMETAL INDIA PVT LTD',
    exporterName: jobData?.exporterName || '',
    iecPan: jobData?.iec || 'ABICS9789G',
    importerId: jobData?.importerId || 'NF00031274',
    exporterId: jobData?.exporterId || '',
    importerBranch: '0',
    exporterBranch: '0',
    importerCity: jobData?.importerCity || 'MUMBAI',
    exporterCity: jobData?.exporterCity || '',
    importerPincode: jobData?.importerPincode || '400705',
    exporterPincode: jobData?.exporterPincode || '',
    importerAddress: jobData?.importerAddress || 'ARIHANT AURA B-WING 1301- 1303 TTC INDUSTRIAL AREA TURBHE MIDC',
    exporterAddress: jobData?.exporterAddress || '',
    importerState: jobData?.importerState || '27-MAHARASH..',
    exporterState: jobData?.exporterState || '',
    importerCountry: jobData?.importerCountry || 'IN - INDIA',
    exporterCountry: jobData?.exporterCountry || '',
    importerIcegateId: jobData?.importerIcegateId || 'Icegate ID',
    aeoStatus: jobData?.aeoStatus || 'AEO Status',
    importerType: jobData?.importerType || 'P-Private',
    adCode: jobData?.adCode || '5090001',
    gstinTypeId: jobData?.gstinTypeId || '',
    stOfOgnExporter: jobData?.stOfOgnExporter || '',
    epzCode: jobData?.epzCode || '',
    forexBankAcNo: jobData?.forexBankAcNo || '',
    drbkBankAcNo: jobData?.drbkBankAcNo || '',
    exporterClass: jobData?.exporterClass || '',

    // Supplier/Consignee Details
    supplierName: jobData?.supplierName || 'SUMITOMO ELECTRIC HARDMETAL',
    consigneeName: jobData?.consigneeName || '',
    supplierId: jobData?.supplierId || 'SUP12345',
    consigneeId: jobData?.consigneeId || '',
    supplierBranch: jobData?.supplierBranch || '0',
    consigneeBranch: jobData?.consigneeBranch || '',
    supplierAddress: jobData?.supplierAddress || '1-1-1, KOYADAI, ITAMI, HYOGO 664-0016',
    consigneeAddress: jobData?.consigneeAddress || '',
    supplierCity: jobData?.supplierCity || 'ITAMI',
    consigneeCity: jobData?.consigneeCity || '',
    supplierPincode: jobData?.supplierPincode || '664-0016',
    consigneePincode: jobData?.consigneePincode || '',
    supplierState: jobData?.supplierState || 'HYOGO',
    consigneeState: jobData?.consigneeState || '',
    supplierCountry: jobData?.supplierCountry || 'JP - JAPAN',
    consigneeCountry: jobData?.consigneeCountry || '',
    sameForBuyer: jobData?.sameForBuyer === true,

    // Commercial Tax Type
    stateCode: jobData?.stateCode || '01-JAMMU AND KASHMIR',
    taxType: jobData?.taxType || 'GST-IN-GSTIN Private',
    registrationNo: jobData?.registrationNo || '22',

    // Warehouse Details
    whBeNo: '1234567',
    whBeDate: '2025-02-16',
    whJobNo: 'ICB/163/2025-2026',
    whCode: 'INMAA1',
    whCustoms: 'INABG1 - Alibag',
    noPkgRel: '389',
    pkgCode: 'KGS',
    whGrossWght: '787',
    wghtCode: 'KGS',
  });

  // Sync initial state on mount
  useEffect(() => {
    if (props.onFormChange) {
      props.onFormChange(formData);
    }
  }, []);

  // Field hover and focus state for label highlighting
  const [hoveredFields, setHoveredFields] = useState<Set<string>>(new Set());
  const [focusedFields, setFocusedFields] = useState<Set<string>>(new Set());

  const handleFieldHover = useCallback((fieldId: string, isHovered: boolean) => {
    setHoveredFields(prev => {
      const newSet = new Set(prev);
      if (isHovered) {
        newSet.add(fieldId);
      } else {
        newSet.delete(fieldId);
      }
      return newSet;
    });
  }, []);

  const handleFieldFocus = useCallback((fieldId: string, isFocused: boolean) => {
    setFocusedFields(prev => {
      const newSet = new Set(prev);
      if (isFocused) {
        newSet.add(fieldId);
      } else {
        newSet.delete(fieldId);
      }
      return newSet;
    });
  }, []);

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      if (props.onFormChange) {
        props.onFormChange(newData);
      }
      return newData;
    });
  };

  const handleImporterSelect = (importer: { name: string; iec: string; id: string }) => {
    setFormData(prev => {
      const newData = {
        ...prev,
        importerName: importer.name,
        iecPan: importer.iec,
        importerId: importer.id
      };
      if (props.onFormChange) {
        props.onFormChange(newData);
      }
      return newData;
    });
  };

  // Options for dropdowns
  const cityOptions = ['NEW DELHI', 'MUMBAI', 'CHENNAI', 'KOLKATA'];
  const stateOptions = ['NEW DELHI', '27-MAHARASH..', 'GUJARAT', 'KARNATAKA'];
  const countryOptions = ['07 – DELHI', 'IN - INDIA', 'JP - JAPAN', 'US - USA'];
  const branchOptions = ['NEW DELHI', 'MUMBAI', 'CHENNAI', 'KOLKATA'];
  const submittedByOptions = ['Custom Broker', 'Importer', 'Agent'];
  const priorBeOptions = ['Advance BE', 'Normal', 'Prior'];
  const motOptions = ['A-Air', 'S-Sea', 'L-Land'];
  const beTypeOptions = ['H-Home Consumption', 'W-Warehouse', 'E-Ex-bond', 'SEZ - Z type', 'M-SEZ - M type', 'T-SEZ - T type', 'V-SEZ - V type', 'S-SEZ - S type'];
  const sbTypeOptions = ['White-Free DEEC', 'White-Free', 'Drawback', 'DEPB', 'EPCG', 'DFRC', 'Jobbing'];
  const zBeTypeOptions = ['Option 1', 'Option 2', 'Option 3'];
  const customsHouseOptions = ['INDEL4', 'INMAA1', 'INBOM1', 'INCHE1'];
  const paymentMethodOptions = ['Transaction', 'Cash', 'Credit'];
  const portOptions = ['JPNRT - NARITA APT/TOKYO', 'INBOM1 - MUMBAI'];
  const countryOfOriginOptions = ['JP - JAPAN', 'IN - INDIA', 'US - USA'];
  const importerCityOptions = ['MUMBAI', 'DELHI', 'CHENNAI', 'KOLKATA'];
  const importerStateOptions = ['27-MAHARASH..', 'NEW DELHI', 'GUJARAT'];
  const importerCountryOptions = ['IN - INDIA', 'JP - JAPAN', 'US - USA'];
  const aeoStatusOptions = ['AEO-T1', 'AEO-T2', 'AEO-T3', 'AEO-LO', 'None'];
  const importerTypeOptions = ['P-Private', 'G-Government', 'C-Corporation'];
  const supplierCityOptions = ['ITAMI', 'TOKYO', 'OSAKA'];
  const supplierStateOptions = ['HYOGO', 'TOKYO', 'OSAKA'];
  const supplierCountryOptions = ['JP - JAPAN', 'IN - INDIA', 'US - USA'];
  const stateCodeOptions = ['01-JAMMU AND KASHMIR', '27-MAHARASHTRA', '07-DELHI'];
  const taxTypeOptions = ['GST-IN-GSTIN Private', 'VAT', 'CST'];
  const whCodeOptions = ['INMAA1', 'INBOM1', 'INDEL4'];
  const packageCodeOptions = ['KGS', 'PCS', 'MTR'];

  // Define field navigation map - represents the form layout in a 2D grid
  const importFieldMap = [
    // CB Details section
    ['cb-name', 'cb-license'],
    ['cb-brno', 'cb-city'],
    ['cb-address', 'cb-state'],
    ['cb-address', 'cb-country'],
    ['cb-pincode', 'cb-branch'],
    ['cb-aeo-reg', 'cb-icegate'],
    ['cb-submitted', 'cb-assigned'],
    
    // Job Info section
    ['job-no', 'job-date'],
    ['job-be-no', 'job-be-date'],
    ['job-created-by', 'job-created-on'],
    ['job-prior-be', 'job-mot'],
    ['job-be-type', 'job-transaction-ref'],
    ['job-customs-house', 'job-customer-ref'],
    ['job-assessable-value', 'job-duty-payable'],
    ['job-ucr-no', 'job-ucr-type'],
    ['job-kaccha-be', 'job-green-channel'],
    ['job-section48', 'job-section48-reason'],
    ['job-first-check', 'job-first-check-reason'],
    ['job-provisional', 'job-pa-reason'],
    ['job-misc-load', 'job-payment-method'],
    ['job-port-origin', 'job-country-origin'],
    ['job-port-shipment', 'job-cons-country'],
    ['job-add-charges', 'job-hss-transaction'],
    ['job-remarks', ''],
    
    // Importer Details section
    ['importer-name', 'importer-iec'],
    ['importer-id', 'importer-branch'],
    ['importer-city', 'importer-pincode'],
    ['importer-address', 'importer-state'],
    ['importer-address', 'importer-country'],
    ['importer-icegate', 'importer-aeo-status'],
    ['importer-type', 'importer-ad-code'],

    // Supplier Details section
    ['supplier-name', 'supplier-id'],
    ['supplier-branch', ''],
    ['supplier-address', 'supplier-city'],
    ['supplier-address', 'supplier-pincode'],
    ['supplier-state', 'supplier-country'],
    
    // Commercial Tax section
    ['tax-state-code', 'tax-type'],
    ['tax-registration', ''],
    
    // Warehouse Details section  
    ['wh-be-no', 'wh-be-date'],
    ['wh-job-no', 'wh-code'],
    ['wh-customs', 'wh-no-pkg'],
    ['wh-pkg-code', 'wh-gross-weight'],
    ['wh-weight-code', '']
  ];

  const exportFieldMap = [
    // CB Details section (Same)
    ['cb-name', 'cb-license'],
    ['cb-brno', 'cb-city'],
    ['cb-address', 'cb-state'],
    ['cb-address', 'cb-country'],
    ['cb-pincode', 'cb-branch'],
    ['cb-aeo-reg', 'cb-icegate'],
    ['cb-submitted', 'cb-assigned'],
    
    // Job Info section (Export)
    ['job-no', 'job-date'],
    ['job-sb-no', 'job-sb-date'],
    ['job-sb-type', 'job-mot'],
    ['job-customs-house', 'job-transaction-ref'],
    ['job-customer-ref', 'job-sez-unit'],
    ['job-warehouse-unit', 'job-drawback-claim-by'],
    ['job-created-by', 'job-created-on'],
    ['job-remarks', ''],

    // Exporter Details section
    ['exporter-name', 'exporter-id'],
    ['exporter-id', 'exporter-branch'], // Assuming ID field splits
    ['exporter-iec', 'exporter-pan'],
    ['exporter-city', 'exporter-pincode'],
    ['exporter-address', 'exporter-state'],
    ['exporter-address', 'exporter-country'],
    ['exporter-type', 'exporter-class'],
    ['exporter-ad-code', 'exporter-gstin-type'],
    ['exporter-gstin-type', 'exporter-gstin-id'],
    ['exporter-state-origin', 'exporter-epz-code'],
    ['exporter-forex-ac', 'exporter-drbk-ac'],
    ['exporter-icegate', 'exporter-aeo-status'],

    // Consignee Details section
    ['consignee-same-buyer', ''],
    ['consignee-name', 'consignee-id'],
    ['consignee-id', 'consignee-branch'],
    ['consignee-address', 'consignee-city'],
    ['consignee-state', 'consignee-country'],
    ['consignee-pin', ''],

    // Commercial Tax section (Same)
    ['tax-state-code', 'tax-type'],
    ['tax-registration', ''],
     // Warehouse Details (Same logic if applicable)
    ['wh-be-no', 'wh-be-date'],
    ['wh-job-no', 'wh-code'],
    ['wh-customs', 'wh-no-pkg'],
    ['wh-pkg-code', 'wh-gross-weight'],
    ['wh-weight-code', '']
  ];

  const fieldMap = isExport ? exportFieldMap : importFieldMap;

  // Map sections to their first field
  const sectionToFirstField: Record<string, string> = {
    'section-cb-details': 'cb-name',
    'section-job-info': 'job-no',
    'section-importer-details': isExport ? 'exporter-name' : 'importer-name',
    'section-supplier-details': isExport ? 'consignee-name' : 'supplier-name',
    'section-commercial-tax': 'tax-state-code',
    'section-warehouse-details': 'wh-be-no',
  };

  // Flatten the field map for easier navigation
  const allFields = fieldMap.flat().filter(field => field !== '');

  // Keyboard navigation functions
  const getCurrentPosition = () => {
    const currentField = allFields[focusedFieldIndex];
    if (!currentField) return { row: 0, col: 0 };
    
    for (let row = 0; row < fieldMap.length; row++) {
      const col = fieldMap[row].indexOf(currentField);
      if (col !== -1) {
        return { row, col };
      }
    }
    return { row: 0, col: 0 };
  };

  const focusField = (fieldId: string) => {
    if (!formRef.current) return;
    
    const element = formRef.current.querySelector(`[data-field-id="${fieldId}"]`) as HTMLElement;
    if (element) {
      element.focus();
      const index = allFields.indexOf(fieldId);
      if (index !== -1) {
        setFocusedFieldIndex(index);
      }
    }
  };

  // Scroll to warehouse details section when BE Type is Warehouse or Ex-bond
  useEffect(() => {
    const shouldShowWarehouse = formData.beType === 'W-Warehouse' || formData.beType === 'E-Ex-bond';
    if (shouldShowWarehouse && warehouseDetailsRef.current) {
      setTimeout(() => {
        warehouseDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [formData.beType]);

  // Reset keyboard navigation flag on mouse interaction
  const handleMouseInteraction = () => {
    setIsKeyboardNavigation(false);
  };

  // Section navigation helpers
  const handleNavigateToFirstField = (sectionId: string) => {
    const firstField = sectionToFirstField[sectionId];
    if (firstField) {
      focusField(firstField);
      setIsKeyboardNavigation(true);
    }
  };

  const handleNavigateToSection = (currentSectionId: string, direction: 'up' | 'down') => {
    if (!formRef.current) return;
    const sections = Array.from(formRef.current.querySelectorAll('[data-section-id]'));
    const currentSection = sections.find(s => s.getAttribute('data-section-id') === currentSectionId);
    if (!currentSection) return;
    
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = direction === 'down' 
      ? Math.min(sections.length - 1, currentIndex + 1)
      : Math.max(0, currentIndex - 1);
    
    if (sections[nextIndex]) {
      (sections[nextIndex] as HTMLElement).focus();
    }
  };

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focusFirstField: (sectionId?: string) => {
      const targetSection = sectionId || activeSection;
      if (targetSection) {
        const firstField = sectionToFirstField[targetSection];
        if (firstField) {
          focusField(firstField);
          setIsKeyboardNavigation(true);
        }
      }
    }
  }), [activeSection, sectionToFirstField]);

  // Create helper function for FormField props
  const createFormFieldProps = (fieldId: string, label: string | React.ReactNode) => ({
    label,
    fieldId,
    hoveredFields,
    focusedFields,
    onFieldHover: handleFieldHover,
    onFieldFocus: handleFieldFocus,
  });

  return (
    <div 
      ref={formRef}
      className="w-full max-w-none"
      onMouseMove={handleMouseInteraction}
      onClick={handleMouseInteraction}
    >
      {/* 1. CB DETAILS */}
      <SectionHeader 
        title="CB DETAILS" 
        number={1} 
        sectionId="section-cb-details"
        onNavigateToFirstField={() => handleNavigateToFirstField('section-cb-details')}
        onNavigateToSection={(dir) => handleNavigateToSection('section-cb-details', dir)}
      />
      
      {/* Row 1: Name and License No */}
      <div className="flex">
        <FormField {...createFormFieldProps('cb-name', (
          <span className="flex items-center gap-1">
            Name
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedInput
            fieldId="cb-name"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            placeholder="Enter name"
            required={true}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('cb-license', (
          <span className="flex items-center gap-1">
            License No
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedInput
            fieldId="cb-license"
            value={formData.licenseNo}
            onChange={(e) => updateFormData('licenseNo', e.target.value)}
            placeholder="Enter license number"
            required={true}
          />
        </FormField>
      </div>

      {/* Row 2: BR. SL No and City */}
      <div className="flex">
        <FormField {...createFormFieldProps('cb-brno', (
          <span className="flex items-center gap-1">
            BR. SL No
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedInput
            fieldId="cb-brno"
            value={formData.brSlNo}
            onChange={(e) => updateFormData('brSlNo', e.target.value)}
            placeholder="Enter BR SL number"
            required={true}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('cb-city', 'City')}>
          <EnhancedSelect
            fieldId="cb-city"
            value={formData.city}
            onValueChange={(value) => updateFormData('city', value)}
            options={cityOptions}
            placeholder="Select city"
          />
        </FormField>
      </div>

      {/* Row 3: Address (left, spanning height) and State + Country (right, stacked) */}
      <div className="flex" style={{ height: '60px' }}>
        <div className="flex items-start w-full min-w-0">
          <EnhancedLabel 
            fieldId="cb-address" 
            hoveredFields={hoveredFields} 
            focusedFields={focusedFields}
            height="60px"
          >
            Address
          </EnhancedLabel>
          <div
            className="flex-1 min-w-0"
            onMouseEnter={() => handleFieldHover('cb-address', true)}
            onMouseLeave={() => handleFieldHover('cb-address', false)}
            onFocusCapture={() => handleFieldFocus('cb-address', true)}
            onBlurCapture={() => handleFieldFocus('cb-address', false)}
          >
            <EnhancedTextarea
              fieldId="cb-address"
              value={formData.address}
              onChange={(e) => updateFormData('address', e.target.value)}
              placeholder="Enter address"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-between w-full min-w-0" style={{ height: '60px' }}>
          <FormField {...createFormFieldProps('cb-state', 'State')}>
            <EnhancedSelect
              fieldId="cb-state"
              value={formData.state}
              onValueChange={(value) => updateFormData('state', value)}
              options={stateOptions}
              placeholder="Select state"
            />
          </FormField>
          
          <FormField {...createFormFieldProps('cb-country', 'Country')}>
            <EnhancedSelect
              fieldId="cb-country"
              value={formData.country}
              onValueChange={(value) => updateFormData('country', value)}
              options={countryOptions}
              placeholder="Select country"
            />
          </FormField>
        </div>
      </div>

      {/* Row 4: Pincode and Branch */}
      <div className="flex">
        <FormField {...createFormFieldProps('cb-pincode', 'Pincode')}>
          <EnhancedInput
            fieldId="cb-pincode"
            value={formData.pincode}
            onChange={(e) => updateFormData('pincode', e.target.value)}
            placeholder="Enter pincode"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('cb-branch', 'Branch')}>
          <EnhancedSelect
            fieldId="cb-branch"
            value={formData.branch}
            onValueChange={(value) => updateFormData('branch', value)}
            options={branchOptions}
            placeholder="Select branch"
          />
        </FormField>
      </div>

      {/* Row 5: AEO Reg No and ICEGATE ID */}
      <div className="flex">
        <FormField {...createFormFieldProps('cb-aeo-reg', 'AEO Reg No. /Role')}>
          <div className="flex w-full h-full">
            <div className="w-1/2 h-full border-r border-[#d0d5e3]">
              <EnhancedInput
                fieldId="cb-aeo-reg"
                value={formData.aeoRegNo}
                onChange={(e) => updateFormData('aeoRegNo', e.target.value)}
                placeholder="Reg No"
              />
            </div>
            <div className="w-1/2 h-full">
              <EnhancedInput
                fieldId="cb-aeo-role"
                value={formData.aeoRole}
                onChange={(e) => updateFormData('aeoRole', e.target.value)}
                placeholder="Role"
              />
            </div>
          </div>
        </FormField>
        
        <FormField {...createFormFieldProps('cb-icegate', 'ICEGATE ID')}>
          <EnhancedInput
            fieldId="cb-icegate"
            value={formData.icegateId}
            onChange={(e) => updateFormData('icegateId', e.target.value)}
            placeholder="Enter ICEGATE ID"
          />
        </FormField>
      </div>

      {/* Row 6: Submitted By and Assigned CB */}
      <div className="flex">
        <FormField {...createFormFieldProps('cb-submitted', 'Submitted By')}>
          <EnhancedSelect
            fieldId="cb-submitted"
            value={formData.submittedBy}
            onValueChange={(value) => updateFormData('submittedBy', value)}
            options={submittedByOptions}
            placeholder="Select submitted by"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('cb-assigned', 'Assigned CB')}>
          <EnhancedInput
            fieldId="cb-assigned"
            value={formData.assignedCb}
            onChange={(e) => updateFormData('assignedCb', e.target.value)}
            placeholder="Enter assigned CB"
          />
        </FormField>
      </div>

      {/* 2. JOB INFO */}
      <SectionHeader 
        title="JOB INFO" 
        number={2} 
        sectionId="section-job-info"
        onNavigateToFirstField={() => handleNavigateToFirstField('section-job-info')}
        onNavigateToSection={(dir) => handleNavigateToSection('section-job-info', dir)}
      />
      
      {/* Row 1: Job No and Job Date */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-no', 'Job No')}>
          <EnhancedInput
            fieldId="job-no"
            value={formData.jobNo}
            onChange={(e) => updateFormData('jobNo', e.target.value)}
            placeholder="Enter job number"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-date', 'Job Date')}>
          <EnhancedDatePicker
            fieldId="job-date"
            value={formData.jobDate}
            onValueChange={(value) => updateFormData('jobDate', value)}
            placeholder="Select date"
          />
        </FormField>
      </div>

      {/* Row 2: BE/SB No and BE/SB Date */}
      <div className="flex">
        <FormField {...createFormFieldProps(isExport ? 'job-sb-no' : 'job-be-no', isExport ? 'SB No' : 'BE No')}>
          <EnhancedInput
            fieldId={isExport ? 'job-sb-no' : 'job-be-no'}
            value={isExport ? formData.sbNo : formData.beNo}
            onChange={(e) => updateFormData(isExport ? 'sbNo' : 'beNo', e.target.value)}
            placeholder={isExport ? "Enter SB number" : "Enter BE number"}
          />
        </FormField>
        
        <FormField {...createFormFieldProps(isExport ? 'job-sb-date' : 'job-be-date', isExport ? 'Date' : 'BE Date')}>
          <EnhancedDatePicker
            fieldId={isExport ? 'job-sb-date' : 'job-be-date'}
            value={isExport ? formData.sbDate : formData.beDate}
            onValueChange={(value) => updateFormData(isExport ? 'sbDate' : 'beDate', value)}
            placeholder="Select date"
          />
        </FormField>
      </div>

      {/* Row 3: Created By and Created On (Import only, Export is at bottom) */}
      {!isExport && (
      <div className="flex">
        <FormField {...createFormFieldProps('job-created-by', 'Created by')}>
          <EnhancedInput
            fieldId="job-created-by"
            value={formData.createdBy}
            onChange={(e) => updateFormData('createdBy', e.target.value)}
            placeholder="Enter username"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-created-on', 'Created on')}>
          <EnhancedDatePicker
            fieldId="job-created-on"
            value={formData.createdOn}
            onValueChange={(value) => updateFormData('createdOn', value)}
            placeholder="Select date"
          />
        </FormField>
      </div>
      )}

      {/* Row 4: Prior BE/SB Type and MOT */}
      <div className="flex">
        <FormField {...createFormFieldProps(isExport ? 'job-sb-type' : 'job-prior-be', (
          <span className="flex items-center gap-1">
            {isExport ? 'SB Type' : 'Prior BE'}
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSelect
            fieldId={isExport ? 'job-sb-type' : 'job-prior-be'}
            value={isExport ? formData.sbType : formData.priorBe}
            onValueChange={(value) => updateFormData(isExport ? 'sbType' : 'priorBe', value)}
            options={isExport ? sbTypeOptions : priorBeOptions}
            placeholder={isExport ? "Select SB Type" : "Select prior BE"}
            required={true}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-mot', (
          <span className="flex items-center gap-1">
            MOT
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSelect
            fieldId="job-mot"
            value={formData.mot}
            onValueChange={(value) => updateFormData('mot', value)}
            options={motOptions}
            placeholder="Select mode of transport"
            required={true}
          />
        </FormField>
      </div>

      {/* Row 5: BE Type (Import) / Customs House (Export) and Transaction Ref No */}
      <div className="flex">
        {!isExport ? (
          <>
            <FormField {...createFormFieldProps('job-be-type', (
              <span className="flex items-center gap-1">
                BE Type
                <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                  <ErrorSymbol />
                </span>
              </span>
            ))}>
              <EnhancedSelect
                fieldId="job-be-type"
                value={formData.beType}
                onValueChange={(value) => updateFormData('beType', value)}
                options={beTypeOptions}
                placeholder="Select BE type"
                required={true}
              />
            </FormField>

            {formData.beType === 'T-SEZ - T type' && (
              <FormField {...createFormFieldProps('job-z-be-type', 'Z BE Type')}>
                <EnhancedSelect
                  fieldId="job-z-be-type"
                  value={formData.zBeType}
                  onValueChange={(value) => updateFormData('zBeType', value)}
                  options={zBeTypeOptions}
                  placeholder="Select Z BE type"
                />
              </FormField>
            )}
          </>
        ) : (
          <FormField {...createFormFieldProps('job-customs-house', (
            <span className="flex items-center gap-1">
              Customs House Cd
              <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                <ErrorSymbol />
              </span>
            </span>
          ))}>
            <EnhancedSelect
              fieldId="job-customs-house"
              value={formData.customsHouseCd}
              onValueChange={(value) => updateFormData('customsHouseCd', value)}
              options={customsHouseOptions}
              placeholder="Select customs house"
              required={true}
            />
          </FormField>
        )}
        
        <FormField {...createFormFieldProps('job-transaction-ref', 'Transaction Ref No.')}>
          <EnhancedInput
            fieldId="job-transaction-ref"
            value={formData.transactionRefNo}
            onChange={(e) => updateFormData('transactionRefNo', e.target.value)}
            placeholder="Enter transaction ref no"
          />
        </FormField>
      </div>

      {/* Row 6: Customs House (Import) / Customer Ref (Export) */}
      <div className="flex">
        {!isExport ? (
          <FormField {...createFormFieldProps('job-customs-house', (
            <span className="flex items-center gap-1">
              Customs House Cd
              <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                <ErrorSymbol />
              </span>
            </span>
          ))}>
            <EnhancedSelect
              fieldId="job-customs-house"
              value={formData.customsHouseCd}
              onValueChange={(value) => updateFormData('customsHouseCd', value)}
              options={customsHouseOptions}
              placeholder="Select customs house"
              required={true}
            />
          </FormField>
        ) : (
          <FormField {...createFormFieldProps('job-customer-ref', 'Customer Ref. No.')}>
            <EnhancedInput
              fieldId="job-customer-ref"
              value={formData.customerRefNo}
              onChange={(e) => updateFormData('customerRefNo', e.target.value)}
              placeholder="Enter customer reference"
            />
          </FormField>
        )}
        
        {!isExport ? (
          <FormField {...createFormFieldProps('job-customer-ref', 'Customer Ref No')}>
            <EnhancedInput
              fieldId="job-customer-ref"
              value={formData.customerRefNo}
              onChange={(e) => updateFormData('customerRefNo', e.target.value)}
              placeholder="Enter customer reference"
            />
          </FormField>
        ) : (
          <FormField {...createFormFieldProps('job-sez-unit', (
            <span className="flex items-center gap-1">
              SEZ Unit
              <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                <ErrorSymbol />
              </span>
            </span>
          ))}>
            <EnhancedInput
              fieldId="job-sez-unit"
              value={formData.sezUnit}
              onChange={(e) => updateFormData('sezUnit', e.target.value)}
              placeholder="Enter SEZ Unit"
              required={true}
            />
          </FormField>
        )}
      </div>

      {/* Row 7: Assessable Value (Import) / Warehouse Unit (Export) */}
      <div className="flex">
        {!isExport ? (
          <>
            <FormField {...createFormFieldProps('job-assessable-value', 'Assessable Value')}>
              <EnhancedInput
                fieldId="job-assessable-value"
                value={formData.assessableValue}
                onChange={(e) => updateFormData('assessableValue', e.target.value)}
                placeholder="Enter assessable value"
              />
            </FormField>
            
            <FormField {...createFormFieldProps('job-duty-payable', 'Duty Payable')}>
              <EnhancedInput
                fieldId="job-duty-payable"
                value={formData.dutyPayable}
                onChange={(e) => updateFormData('dutyPayable', e.target.value)}
                placeholder="Enter duty payable"
              />
            </FormField>
          </>
        ) : (
          <>
            <FormField {...createFormFieldProps('job-warehouse-unit', 'Warehouse Unit')}>
               <div className="flex items-center gap-1 w-full">
                <EnhancedInput
                  fieldId="job-warehouse-unit"
                  value={formData.warehouseUnit}
                  onChange={(e) => updateFormData('warehouseUnit', e.target.value)}
                  placeholder="Enter Warehouse Unit"
                />
               </div>
            </FormField>

            <FormField {...createFormFieldProps('job-drawback-claim-by', 'Drawback Claim By')}>
              <EnhancedInput
                fieldId="job-drawback-claim-by"
                value={formData.drawbackClaimBy}
                onChange={(e) => updateFormData('drawbackClaimBy', e.target.value)}
                placeholder="Enter Drawback Claim By"
              />
            </FormField>
          </>
        )}
      </div>

      {/* Export Only: Created By and Created On at bottom of section */}
      {isExport && (
        <div className="flex">
          <FormField {...createFormFieldProps('job-created-by', 'Created By')}>
            <EnhancedInput
              fieldId="job-created-by"
              value={formData.createdBy}
              onChange={(e) => updateFormData('createdBy', e.target.value)}
              placeholder="Created By"
              style={{ backgroundColor: '#F3F4F6' }}
              readOnly={true}
            />
          </FormField>
          
          <FormField {...createFormFieldProps('job-created-on', 'Created On')}>
            <EnhancedInput // Using Input instead of DatePicker for read-only view if desired, or DatePicker
              fieldId="job-created-on"
              value={formData.createdOn} // Assuming string
              onChange={() => {}} 
              placeholder="Created on"
              style={{ backgroundColor: '#F3F4F6' }}
              readOnly={true}
            />
          </FormField>
        </div>
      )}

      {/* Import Specific Rows */}
      {!isExport && (
        <>
      {/* Row 7: UCR No and UCR Type */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-ucr-no', 'UCR No')}>
          <EnhancedInput
            fieldId="job-ucr-no"
            value={formData.ucrNo}
            onChange={(e) => updateFormData('ucrNo', e.target.value)}
            placeholder="Enter UCR number"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-ucr-type', 'UCR Type')}>
          <EnhancedInput
            fieldId="job-ucr-type"
            value={formData.ucrType}
            onChange={(e) => updateFormData('ucrType', e.target.value)}
            placeholder="Enter UCR type"
          />
        </FormField>
      </div>

      {/* Row 8: Kaccha BE and Green Channel */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-kaccha-be', (
          <span className="flex items-center gap-1">
            Kaccha BE
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSwitch
            fieldId="job-kaccha-be"
            checked={formData.kacchaBe}
            onCheckedChange={(checked) => updateFormData('kacchaBe', checked)}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-green-channel', (
          <span className="flex items-center gap-1">
            Green Channel
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSwitch
            fieldId="job-green-channel"
            checked={formData.greenChannel}
            onCheckedChange={(checked) => updateFormData('greenChannel', checked)}
          />
        </FormField>
      </div>

      {/* Row 9: Section 48 and Section 48 Reason */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-section48', (
          <span className="flex items-center gap-1">
            Section 48
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSwitch
            fieldId="job-section48"
            checked={formData.section48}
            onCheckedChange={(checked) => updateFormData('section48', checked)}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-section48-reason', (
          <span className="flex items-center gap-1">
            Section 48 Reason
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedInput
            fieldId="job-section48-reason"
            value={formData.section48Reason}
            onChange={(e) => updateFormData('section48Reason', e.target.value)}
            placeholder="Enter reason"
            required={true}
          />
        </FormField>
      </div>

      {/* Row 10: First Check and First Check Reason */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-first-check', (
          <span className="flex items-center gap-1">
            First Check
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSwitch
            fieldId="job-first-check"
            checked={formData.firstCheck}
            onCheckedChange={(checked) => updateFormData('firstCheck', checked)}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-first-check-reason', (
          <span className="flex items-center gap-1">
            First Check Reason
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedInput
            fieldId="job-first-check-reason"
            value={formData.firstCheckReason}
            onChange={(e) => updateFormData('firstCheckReason', e.target.value)}
            placeholder="Enter reason"
            required={true}
          />
        </FormField>
      </div>

      {/* Row 11: Provisional Assess and PA Reason */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-provisional', 'Provisional Assess')}>
          <EnhancedSwitch
            fieldId="job-provisional"
            checked={formData.provisionalAssess}
            onCheckedChange={(checked) => updateFormData('provisionalAssess', checked)}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-pa-reason', 'PA Reason')}>
          <EnhancedInput
            fieldId="job-pa-reason"
            value={formData.paReason}
            onChange={(e) => updateFormData('paReason', e.target.value)}
            placeholder="Enter reason"
          />
        </FormField>
      </div>

      {/* Row 12: Misc. Load and Payt Method Cd */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-misc-load', 'Misc. Load')}>
          <EnhancedInput
            fieldId="job-misc-load"
            value={formData.miscLoad}
            onChange={(e) => updateFormData('miscLoad', e.target.value)}
            placeholder="Enter misc load"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-payment-method', (
          <span className="flex items-center gap-1">
            Payt Method Cd
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSelect
            fieldId="job-payment-method"
            value={formData.paytMthodCd}
            onValueChange={(value) => updateFormData('paytMthodCd', value)}
            options={paymentMethodOptions}
            placeholder="Select payment method"
            required={true}
          />
        </FormField>
      </div>

      {/* Row 13: Port of Origin and Country of Origin */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-port-origin', (
          <span className="flex items-center gap-1">
            Port of Origin
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSelect
            fieldId="job-port-origin"
            value={formData.portOfOrigin}
            onValueChange={(value) => updateFormData('portOfOrigin', value)}
            options={portOptions}
            placeholder="Select port of origin"
            required={true}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-country-origin', (
          <span className="flex items-center gap-1">
            Country of Origin
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSelect
            fieldId="job-country-origin"
            value={formData.countryOfOrigin}
            onValueChange={(value) => updateFormData('countryOfOrigin', value)}
            options={countryOfOriginOptions}
            placeholder="Select country of origin"
            required={true}
          />
        </FormField>
      </div>

      {/* Row 14: Port of Shipment and Cons Country */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-port-shipment', (
          <span className="flex items-center gap-1">
            Port of Shipment
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSelect
            fieldId="job-port-shipment"
            value={formData.portOfShipment}
            onValueChange={(value) => updateFormData('portOfShipment', value)}
            options={portOptions}
            placeholder="Select port of shipment"
            required={true}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-cons-country', (
          <span className="flex items-center gap-1">
            Cons Country
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSelect
            fieldId="job-cons-country"
            value={formData.consCountry}
            onValueChange={(value) => updateFormData('consCountry', value)}
            options={countryOfOriginOptions}
            placeholder="Select consignment country"
            required={true}
          />
        </FormField>
      </div>

      {/* Row 15: Add Charges and HSS Transaction */}
      <div className="flex">
        <FormField {...createFormFieldProps('job-add-charges', 'Add Charges')}>
          <EnhancedInput
            fieldId="job-add-charges"
            value={formData.addCharges}
            onChange={(e) => updateFormData('addCharges', e.target.value)}
            placeholder="Enter additional charges"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('job-hss-transaction', (
          <span className="flex items-center gap-1">
            HSS Transaction
            <span className="w-[11px] h-[11px] shrink-0 inline-flex">
              <ErrorSymbol />
            </span>
          </span>
        ))}>
          <EnhancedSwitch
            fieldId="job-hss-transaction"
            checked={formData.hssTransaction}
            onCheckedChange={(checked) => updateFormData('hssTransaction', checked)}
          />
        </FormField>
      </div>
      </>
      )}

      {/* Row 16: Remarks (full width) */}
      <div className="flex" style={{ height: '60px' }}>
        <div className="flex items-start w-full min-w-0">
          <EnhancedLabel 
            fieldId="job-remarks" 
            hoveredFields={hoveredFields} 
            focusedFields={focusedFields}
            height="60px"
          >
            Remarks
          </EnhancedLabel>
          <div
            className="flex-1 min-w-0"
            onMouseEnter={() => handleFieldHover('job-remarks', true)}
            onMouseLeave={() => handleFieldHover('job-remarks', false)}
            onFocusCapture={() => handleFieldFocus('job-remarks', true)}
            onBlurCapture={() => handleFieldFocus('job-remarks', false)}
          >
            <EnhancedTextarea
              fieldId="job-remarks"
              value={formData.remarks}
              onChange={(e) => updateFormData('remarks', e.target.value)}
              placeholder="Enter remarks"
              style={{ height: '30px', minHeight: '30px' }}
            />
          </div>
        </div>
      </div>

      {/* 3. IMPORTER/EXPORTER DETAILS */}
      <SectionHeader 
        title={isExport ? "EXPORTER DETAILS" : "IMPORTER DETAILS"} 
        number={3} 
        sectionId="section-importer-details"
        onNavigateToFirstField={() => handleNavigateToFirstField('section-importer-details')}
        onNavigateToSection={(dir) => handleNavigateToSection('section-importer-details', dir)}
        rightContent={!isExport && (
          <button 
            type="button"
            className="text-[12px] font-semibold text-[#3874FF] bg-transparent border-none cursor-pointer outline-none hover:underline flex items-center gap-1 px-2"
            onClick={(e) => {
              e.preventDefault();
              // Add to master functionality
            }}
          >
            + Add to Master
          </button>
        )}
      />
      
      {isExport ? (
        // EXPORT LAYOUT
        <>
          {/* Row 1: Name | ID & Branch */}
          <div className="flex">
            <FormField {...createFormFieldProps('exporter-name', (
              <span className="flex items-center gap-1">
                Name
                <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                  {/* Grid icon in image */}
                </span>
              </span>
            ))}>
              <EnhancedInput
                fieldId="exporter-name"
                value={formData.exporterName}
                onChange={(e) => updateFormData('exporterName', e.target.value)}
                placeholder="Enter Name"
              />
            </FormField>
            <FormField {...createFormFieldProps('exporter-id', (
              <span className="flex items-center gap-1">
                ID & Branch
                <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                  <ErrorSymbol />
                </span>
              </span>
            ))}>
              <div className="flex w-full h-full">
                <div className="flex-1 min-w-0">
                  <EnhancedInput
                    fieldId="exporter-id"
                    value={formData.exporterId}
                    onChange={(e) => updateFormData('exporterId', e.target.value)}
                    placeholder="Enter ID"
                    style={{ borderRight: 'none' }}
                  />
                </div>
                <div className="w-[1px] bg-[#d0d5e3] shrink-0" />
                <div className="w-[100px] shrink-0">
                  <EnhancedSelect
                    fieldId="exporter-branch"
                    value={formData.exporterBranch}
                    onValueChange={(value) => updateFormData('exporterBranch', value)}
                    options={branchOptions}
                    placeholder="Branch"
                  />
                </div>
              </div>
            </FormField>
          </div>

          {/* Row 2: IEC/PAN | City & PIN */}
          <div className="flex">
             <FormField {...createFormFieldProps('exporter-iec', (
                <span className="flex items-center gap-1">
                  IEC/ PAN
                  <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                    <ErrorSymbol />
                  </span>
                </span>
             ))}>
                <div className="flex w-full h-full">
                  <div className="flex-1">
                    <EnhancedInput
                      fieldId="exporter-iec"
                      value={formData.iecPan} // Reuse IEC field
                      onChange={(e) => updateFormData('iecPan', e.target.value)}
                      placeholder="Enter IEC"
                      style={{ borderRight: 'none' }}
                    />
                  </div>
                  <div className="w-[1px] bg-[#d0d5e3]" />
                  <div className="flex-1">
                    <EnhancedInput
                      fieldId="exporter-pan"
                      value={formData.iecPan} // Reuse or split? Image shows two boxes? Or just "Enter IEC" and "Enter PAN"? 
                      // Assuming one field for now or split if needed. Image has "Enter IEC" box and "Enter PAN" text. 
                      // Let's assume split logic later if needed, but for now simple input or split view.
                      // Actually image shows: [ Enter IEC ] [ Enter PAN ]
                      onChange={(e) => {}} 
                      placeholder="Enter PAN"
                      readOnly={true} // Maybe auto-derived
                    />
                  </div>
                </div>
             </FormField>

             <FormField {...createFormFieldProps('exporter-city-pin', 'City & PIN')}>
                <div className="flex w-full h-full">
                  <div className="flex-1">
                    <EnhancedSelect
                        fieldId="exporter-city"
                        value={formData.exporterCity}
                        onValueChange={(value) => updateFormData('exporterCity', value)}
                        options={cityOptions}
                        placeholder="Enter City"
                        style={{ borderRight: 'none' }}
                    />
                  </div>
                  <div className="w-[1px] bg-[#d0d5e3]" />
                  <div className="flex-1">
                    <EnhancedInput
                        fieldId="exporter-pincode"
                        value={formData.exporterPincode}
                        onChange={(e) => updateFormData('exporterPincode', e.target.value)}
                        placeholder="Enter PIN"
                    />
                  </div>
                </div>
             </FormField>
          </div>

          {/* Row 3: Address (Tall) | State & Country / Type/Class */}
          <div className="flex" style={{ height: '60px' }}>
            <div className="flex items-start w-full min-w-0">
               <EnhancedLabel 
                 fieldId="exporter-address" 
                 hoveredFields={hoveredFields} 
                 focusedFields={focusedFields}
                 height="60px"
               >
                 Address
               </EnhancedLabel>
               <div className="flex-1 min-w-0 h-full">
                 <EnhancedTextarea
                   fieldId="exporter-address"
                   value={formData.exporterAddress}
                   onChange={(e) => updateFormData('exporterAddress', e.target.value)}
                   placeholder="Enter Address"
                 />
               </div>
            </div>

            <div className="flex flex-col justify-between w-full min-w-0" style={{ height: '60px' }}>
               <div className="flex items-center w-full min-w-0 h-[30px]">
                  <FormField {...createFormFieldProps('exporter-state-country', 'State & Country')}>
                      <div className="flex w-full h-full">
                        <div className="flex-1">
                           <EnhancedSelect
                              fieldId="exporter-state"
                              value={formData.exporterState}
                              onValueChange={(value) => updateFormData('exporterState', value)}
                              options={stateOptions}
                              placeholder="Enter State"
                              style={{ borderRight: 'none', borderTop: '1px solid #D0D5E3' }}
                           />
                        </div>
                        <div className="w-[1px] bg-[#d0d5e3]" />
                        <div className="flex-1">
                           <EnhancedSelect
                              fieldId="exporter-country"
                              value={formData.exporterCountry}
                              onValueChange={(value) => updateFormData('exporterCountry', value)}
                              options={countryOptions}
                              placeholder="Enter Country"
                              style={{ borderTop: '1px solid #D0D5E3' }}
                           />
                        </div>
                      </div>
                  </FormField>
               </div>
               <div className="flex items-center w-full min-w-0 h-[30px]">
                  <FormField {...createFormFieldProps('exporter-type-class', (
                     <span className="flex items-center gap-1">
                       Type/ Class
                       <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                         <ErrorSymbol />
                       </span>
                     </span>
                  ))}>
                      <div className="flex w-full h-full">
                        <div className="flex-1">
                           <EnhancedSelect
                              fieldId="exporter-type"
                              value={formData.importerType} // Reuse
                              onValueChange={(value) => updateFormData('importerType', value)}
                              options={importerTypeOptions}
                              placeholder="Select Type"
                              style={{ borderRight: 'none' }}
                           />
                        </div>
                        <div className="w-[1px] bg-[#d0d5e3]" />
                        <div className="flex-1">
                           <EnhancedSelect
                              fieldId="exporter-class"
                              value={formData.exporterClass} 
                              onValueChange={(value) => updateFormData('exporterClass', value)}
                              options={['Private', 'Public']} // Mock options
                              placeholder="Select Class"
                           />
                        </div>
                      </div>
                  </FormField>
               </div>
            </div>
          </div>

          {/* Row 4: AD Code | GSTIN Type/ID */}
          <div className="flex">
             <FormField {...createFormFieldProps('exporter-ad-code', (
                <span className="flex items-center gap-1">
                  AD Code
                  <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                    <ErrorSymbol />
                  </span>
                </span>
             ))}>
                <EnhancedInput
                  fieldId="exporter-ad-code"
                  value={formData.adCode}
                  onChange={(e) => updateFormData('adCode', e.target.value)}
                  placeholder="Enter AD Code"
                />
             </FormField>
             <FormField {...createFormFieldProps('exporter-gstin', (
                <span className="flex items-center gap-1">
                  GSTIN Type/ ID
                  <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                    <ErrorSymbol />
                  </span>
                </span>
             ))}>
                <div className="flex w-full h-full">
                   <div className="w-1/2">
                      <EnhancedSelect
                          fieldId="exporter-gstin-type"
                          value={formData.gstinTypeId?.split('/')[0] || ''} 
                          onValueChange={(v) => updateFormData('gstinTypeId', v + '/' + (formData.gstinTypeId?.split('/')[1] || ''))}
                          options={['GSTIN', 'Passport']}
                          placeholder="Enter GSTIN Type"
                          style={{ borderRight: 'none' }}
                      />
                   </div>
                   <div className="w-[1px] bg-[#d0d5e3]" />
                   <div className="w-1/2">
                      <EnhancedInput
                          fieldId="exporter-gstin-id"
                          value={formData.gstinTypeId?.split('/')[1] || ''}
                          onChange={(e) => updateFormData('gstinTypeId', (formData.gstinTypeId?.split('/')[0]||'') + '/' + e.target.value)}
                          placeholder="Enter GSTIN ID"
                      />
                   </div>
                </div>
             </FormField>
          </div>

          {/* Row 5: St. of Ogn. Exporter | EPZ Code */}
          <div className="flex">
             <FormField {...createFormFieldProps('exporter-state-origin', (
                <span className="flex items-center gap-1">
                  St. of Ogn. Exporter
                  <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                    <ErrorSymbol />
                  </span>
                </span>
             ))}>
                <EnhancedInput
                  fieldId="exporter-state-origin"
                  value={formData.stOfOgnExporter}
                  onChange={(e) => updateFormData('stOfOgnExporter', e.target.value)}
                  placeholder="Enter State of Origin Exporter"
                />
             </FormField>
             <FormField {...createFormFieldProps('exporter-epz-code', 'EPZ Code')}>
                <EnhancedInput
                  fieldId="exporter-epz-code"
                  value={formData.epzCode}
                  onChange={(e) => updateFormData('epzCode', e.target.value)}
                  placeholder="Enter Code"
                />
             </FormField>
          </div>

          {/* Row 6: Forex Bank A/C No. | Drbk Bank A/C No. */}
          <div className="flex">
             <FormField {...createFormFieldProps('exporter-forex-ac', 'Forex Bank A/C No.')}>
                <EnhancedInput
                  fieldId="exporter-forex-ac"
                  value={formData.forexBankAcNo}
                  onChange={(e) => updateFormData('forexBankAcNo', e.target.value)}
                  placeholder="Enter Forex Bank A/C No"
                />
             </FormField>
             <FormField {...createFormFieldProps('exporter-drbk-ac', 'Drbk Bank A/C No.')}>
                <EnhancedInput
                  fieldId="exporter-drbk-ac"
                  value={formData.drbkBankAcNo}
                  onChange={(e) => updateFormData('drbkBankAcNo', e.target.value)}
                  placeholder="Enter Drbk Bank A/C no."
                />
             </FormField>
          </div>

          {/* Row 7: Icegate ID | AEO Status/Category */}
          <div className="flex">
             <FormField {...createFormFieldProps('exporter-icegate', 'Icegate ID')}>
                <EnhancedInput
                  fieldId="exporter-icegate"
                  value={formData.importerIcegateId} // Reuse
                  onChange={(e) => updateFormData('importerIcegateId', e.target.value)}
                  placeholder="Enter Icegate ID"
                />
             </FormField>
             <FormField {...createFormFieldProps('exporter-aeo-status', 'AEO Status/Category')}>
                <EnhancedSelect
                  fieldId="exporter-aeo-status"
                  value={formData.aeoStatus} // Reuse
                  onValueChange={(value) => updateFormData('aeoStatus', value)}
                  options={aeoStatusOptions}
                  placeholder="AEO Status/Category"
                />
             </FormField>
          </div>
        </>
      ) : (
        // IMPORT LAYOUT
        <ImporterDetailsSection 
          formData={{
            importerName: formData.importerName,
            iecPan: formData.iecPan,
            idBranch: `${formData.importerId}|${formData.importerBranch}`,
            importerAddress: formData.importerAddress,
            importerCityPin: `${formData.importerCity}|${formData.importerPincode}`,
            importerStateCountry: `${formData.importerState}|${formData.importerCountry}`,
            typeAdCode: `${formData.importerType}|${formData.adCode}`,
          }}
          updateFormData={(field, value) => {
            if (field === 'idBranch') {
              const parts = value.split('|');
              updateFormData('importerId', parts[0] || '');
              updateFormData('importerBranch', parts[1] || '0');
            } else if (field === 'importerCityPin') {
              const parts = value.split('|');
              updateFormData('importerCity', parts[0] || '');
              updateFormData('importerPincode', parts[1] || '');
            } else if (field === 'importerStateCountry') {
              const parts = value.split('|');
              updateFormData('importerState', parts[0] || '');
              updateFormData('importerCountry', parts[1] || '');
            } else if (field === 'typeAdCode') {
              const parts = value.split('|');
              updateFormData('importerType', parts[0] || '');
              updateFormData('adCode', parts[1] || '');
            } else {
              updateFormData(field, value);
            }
          }}
          hoveredLabels={hoveredFields}
          handleFieldHover={handleFieldHover}
        />
      )}

      {/* 4. SUPPLIER/CONSIGNEE DETAILS */}
      <SectionHeader 
        title={isExport ? "CONSIGNEE DETAILS" : "SUPPLIER DETAILS"} 
        number={4} 
        sectionId="section-supplier-details"
        onNavigateToFirstField={() => handleNavigateToFirstField('section-supplier-details')}
        onNavigateToSection={(dir) => handleNavigateToSection('section-supplier-details', dir)}
        rightContent={isExport && (
          <div className="flex items-center gap-2">
             <span className="text-sm text-[#050E25] font-normal normal-case">Same for Buyer</span>
             <EnhancedSwitch
               fieldId="consignee-same-buyer"
               checked={formData.sameForBuyer}
               onCheckedChange={(checked) => updateFormData('sameForBuyer', checked)}
               transparent={true}
             />
          </div>
        )}
      />

      {isExport ? (
         // EXPORT CONSIGNEE LAYOUT (Similar structure to Supplier but with Consignee fields if different, reusing generic Supplier fields for now as placeholders or state reuse)
         // Image shows: Name * | ID & Branch
         // Address | City/State | PIN/Country
         // Basically same structure as Supplier but with Consignee fields.
         <>
          {/* Row 1: Name and ID */}
          <div className="flex">
            <FormField {...createFormFieldProps('consignee-name', (
              <span className="flex items-center gap-1">
                 Name
                 <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                   <ErrorSymbol />
                 </span>
              </span>
            ))}>
              <EnhancedInput
                fieldId="consignee-name"
                value={formData.consigneeName}
                onChange={(e) => updateFormData('consigneeName', e.target.value)}
                placeholder="Enter Name"
                required={true}
              />
            </FormField>
            
            <FormField {...createFormFieldProps('consignee-id', 'ID & Branch')}>
              <div className="flex w-full h-full">
                <div className="flex-1 min-w-0">
                   <EnhancedInput
                    fieldId="consignee-id"
                    value={formData.consigneeId}
                    onChange={(e) => updateFormData('consigneeId', e.target.value)}
                    placeholder="Enter ID"
                    style={{ borderRight: 'none' }}
                  />
                </div>
                <div className="w-[1px] bg-[#d0d5e3] shrink-0" />
                <div className="w-[100px] shrink-0">
                   <EnhancedSelect
                    fieldId="consignee-branch"
                    value={formData.consigneeBranch}
                    onValueChange={(value) => updateFormData('consigneeBranch', value)}
                    options={branchOptions} // Reuse options
                    placeholder="Enter Branch"
                  />
                </div>
              </div>
            </FormField>
          </div>

          {/* Row 2: Address (left) | City/State | Pin/Country */}
          <div className="flex" style={{ height: '60px' }}>
            <div className="flex items-start w-full min-w-0">
              <EnhancedLabel 
                fieldId="consignee-address" 
                hoveredFields={hoveredFields} 
                focusedFields={focusedFields}
                height="60px"
              >
                Address
              </EnhancedLabel>
              <div className="flex-1 min-w-0 h-full">
                <EnhancedTextarea
                  fieldId="consignee-address"
                  value={formData.consigneeAddress}
                  onChange={(e) => updateFormData('consigneeAddress', e.target.value)}
                  placeholder="Enter Address"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-between w-full min-w-0" style={{ height: '60px' }}>
               <div className="flex items-center w-full min-w-0 h-[30px]">
                  <FormField {...createFormFieldProps('consignee-city-state', 'City/ State')}>
                      <div className="flex w-full h-full">
                        <div className="flex-1">
                           <EnhancedSelect
                              fieldId="consignee-city"
                              value={formData.consigneeCity}
                              onValueChange={(value) => updateFormData('consigneeCity', value)}
                              options={cityOptions}
                              placeholder="Select City"
                              style={{ borderRight: 'none', borderTop: '1px solid #D0D5E3' }}
                           />
                        </div>
                        <div className="w-[1px] bg-[#d0d5e3]" />
                        <div className="flex-1">
                           <EnhancedSelect
                              fieldId="consignee-state"
                              value={formData.consigneeState}
                              onValueChange={(value) => updateFormData('consigneeState', value)}
                              options={stateOptions}
                              placeholder="Select State"
                              style={{ borderTop: '1px solid #D0D5E3' }}
                           />
                        </div>
                      </div>
                  </FormField>
               </div>
               <div className="flex items-center w-full min-w-0 h-[30px]">
                  <FormField {...createFormFieldProps('consignee-pin-country', 'PIN/ Country')}>
                      <div className="flex w-full h-full">
                        <div className="flex-1">
                           <EnhancedInput
                              fieldId="consignee-pin"
                              value={formData.consigneePincode}
                              onChange={(e) => updateFormData('consigneePincode', e.target.value)}
                              placeholder="Enter PIN"
                              style={{ borderRight: 'none' }}
                           />
                        </div>
                        <div className="w-[1px] bg-[#d0d5e3]" />
                        <div className="flex-1">
                           <EnhancedSelect
                              fieldId="consignee-country"
                              value={formData.consigneeCountry}
                              onValueChange={(value) => updateFormData('consigneeCountry', value)}
                              options={countryOptions}
                              placeholder="Select Country"
                           />
                        </div>
                      </div>
                  </FormField>
               </div>
            </div>
          </div>
         </>
      ) : (
         // IMPORT SUPPLIER LAYOUT
         <>
      {/* Row 1: Name and ID */}
      <div className="flex">
        <FormField {...createFormFieldProps('supplier-name', 'Name')}>
          <EnhancedInput
            fieldId="supplier-name"
            value={formData.supplierName}
            onChange={(e) => updateFormData('supplierName', e.target.value)}
            placeholder="Enter supplier name"
            required={true}
          />
        </FormField>
        
        <FormField {...createFormFieldProps('supplier-id', 'ID')}>
          <div className="flex w-full h-full">
            <div className="flex-1 min-w-0">
               <EnhancedInput
                fieldId="supplier-id"
                value={formData.supplierId}
                onChange={(e) => updateFormData('supplierId', e.target.value)}
                placeholder="ID"
                style={{ borderRight: 'none' }}
              />
            </div>
            <div className="w-[1px] bg-[#d0d5e3] shrink-0" />
            <div className="w-[80px] shrink-0">
               <EnhancedInput
                fieldId="supplier-branch"
                value={formData.supplierBranch}
                onChange={(e) => updateFormData('supplierBranch', e.target.value)}
                placeholder="Br"
              />
            </div>
          </div>
        </FormField>
      </div>

      {/* Row 2: Address (left, spanning height) and Location details (right, stacked) */}
      <div className="flex" style={{ height: '60px' }}>
        <div className="flex items-start w-full min-w-0">
          <EnhancedLabel 
            fieldId="supplier-address" 
            hoveredFields={hoveredFields} 
            focusedFields={focusedFields}
            height="60px"
          >
            Address
          </EnhancedLabel>
          <div
            className="flex-1 min-w-0"
            onMouseEnter={() => handleFieldHover('supplier-address', true)}
            onMouseLeave={() => handleFieldHover('supplier-address', false)}
            onFocusCapture={() => handleFieldFocus('supplier-address', true)}
            onBlurCapture={() => handleFieldFocus('supplier-address', false)}
          >
            <EnhancedTextarea
              fieldId="supplier-address"
              value={formData.supplierAddress}
              onChange={(e) => updateFormData('supplierAddress', e.target.value)}
              placeholder="Enter address"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-between w-full min-w-0" style={{ height: '60px' }}>
          {/* City & Pin */}
          <div className="flex items-center w-full min-w-0 h-[30px]">
             <FormField {...createFormFieldProps('supplier-city', 'City & Pin')}>
                <div className="flex w-full h-full">
                    <div className="flex-1 min-w-0">
                        <EnhancedSelect
                            fieldId="supplier-city"
                            value={formData.supplierCity}
                            onValueChange={(value) => updateFormData('supplierCity', value)}
                            options={supplierCityOptions}
                            placeholder="City"
                            style={{ borderTop: '1px solid #D0D5E3', borderRight: 'none' }}
                        />
                    </div>
                    <div className="w-[1px] bg-[#d0d5e3] shrink-0" />
                    <div className="w-[80px] shrink-0">
                         <EnhancedInput
                            fieldId="supplier-pincode"
                            value={formData.supplierPincode}
                            onChange={(e) => updateFormData('supplierPincode', e.target.value)}
                            placeholder="Pin"
                            style={{ borderTop: '1px solid #D0D5E3' }}
                        />
                    </div>
                </div>
             </FormField>
          </div>
          
          {/* State & Country */}
          <div className="flex items-center w-full min-w-0 h-[30px]">
             <FormField {...createFormFieldProps('supplier-state', 'State & Country')}>
                 <div className="flex w-full h-full">
                    <div className="flex-1 min-w-0">
                        <EnhancedSelect
                            fieldId="supplier-state"
                            value={formData.supplierState}
                            onValueChange={(value) => updateFormData('supplierState', value)}
                            options={supplierStateOptions}
                            placeholder="State"
                            style={{ borderRight: 'none' }}
                        />
                    </div>
                    <div className="w-[1px] bg-[#d0d5e3] shrink-0" />
                    <div className="flex-1 min-w-0">
                         <EnhancedSelect
                            fieldId="supplier-country"
                            value={formData.supplierCountry}
                            onValueChange={(value) => updateFormData('supplierCountry', value)}
                            options={supplierCountryOptions}
                            placeholder="Country"
                        />
                    </div>
                 </div>
             </FormField>
          </div>
        </div>
      </div>
      </>
      )}

      {!isExport && (
        <>
          {/* 5. COMMERCIAL TAX TYPE */}
          <SectionHeader 
            title="COMMERCIAL TAX TYPE" 
            number={5} 
            sectionId="section-commercial-tax"
            onNavigateToFirstField={() => handleNavigateToFirstField('section-commercial-tax')}
            onNavigateToSection={(dir) => handleNavigateToSection('section-commercial-tax', dir)}
          />
          
          {/* Row 1: State Code and Tax Type */}
          <div className="flex">
            <FormField {...createFormFieldProps('tax-state-code', (
              <span className="flex items-center gap-1">
                State Code
                <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                  <ErrorSymbol />
                </span>
              </span>
            ))}>
              <EnhancedSelect
                fieldId="tax-state-code"
                value={formData.stateCode}
                onValueChange={(value) => updateFormData('stateCode', value)}
                options={stateCodeOptions}
                placeholder="Select state code"
                required={true}
              />
            </FormField>
            
            <FormField {...createFormFieldProps('tax-type', (
              <span className="flex items-center gap-1">
                Tax Type
                <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                  <ErrorSymbol />
                </span>
              </span>
            ))}>
              <EnhancedSelect
                fieldId="tax-type"
                value={formData.taxType}
                onValueChange={(value) => updateFormData('taxType', value)}
                options={taxTypeOptions}
                placeholder="Select tax type"
                required={true}
              />
            </FormField>
          </div>

          {/* Row 2: Registration No (single field) */}
          <div className="flex">
            <FormField {...createFormFieldProps('tax-registration', (
              <span className="flex items-center gap-1">
                Registration No
                <span className="w-[11px] h-[11px] shrink-0 inline-flex">
                  <ErrorSymbol />
                </span>
              </span>
            ))}>
              <EnhancedInput
                fieldId="tax-registration"
                value={formData.registrationNo}
                onChange={(e) => updateFormData('registrationNo', e.target.value)}
                placeholder="Enter registration number"
                required={true}
              />
            </FormField>
            
            {/* Empty second field for layout consistency */}
            <div className="flex items-center w-full min-w-0" style={{ backgroundColor: 'white', borderLeft: '1px solid #D0D5E3', borderTop: '1px solid #D0D5E3' }}>
              <div style={{ width: '150px', height: '30px' }} />
              <div className="flex-1 min-w-0" />
            </div>
          </div>
        </>
      )}

      {/* 6. WAREHOUSE DETAILS - Only shown for Warehouse or Ex-bond BE Types */}
      {(formData.beType === 'W-Warehouse' || formData.beType === 'E-Ex-bond') && (
        <div ref={warehouseDetailsRef}>
          <SectionHeader 
            title="WAREHOUSE DETAILS" 
            number={6} 
            sectionId="section-warehouse-details"
            onNavigateToFirstField={() => handleNavigateToFirstField('section-warehouse-details')}
            onNavigateToSection={(dir) => handleNavigateToSection('section-warehouse-details', dir)}
          />
      
      {/* Row 1: WH BE No and WH BE Date */}
      <div className="flex">
        <FormField {...createFormFieldProps('wh-be-no', 'WH BE No')}>
          <EnhancedInput
            fieldId="wh-be-no"
            value={formData.whBeNo}
            onChange={(e) => updateFormData('whBeNo', e.target.value)}
            placeholder="Enter warehouse BE number"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('wh-be-date', 'WH BE Date')}>
          <EnhancedDatePicker
            fieldId="wh-be-date"
            value={formData.whBeDate}
            onValueChange={(value) => updateFormData('whBeDate', value)}
            placeholder="Select date"
          />
        </FormField>
      </div>

      {/* Row 2: WH Job No and WH Code */}
      <div className="flex">
        <FormField {...createFormFieldProps('wh-job-no', 'WH Job No')}>
          <EnhancedInput
            fieldId="wh-job-no"
            value={formData.whJobNo}
            onChange={(e) => updateFormData('whJobNo', e.target.value)}
            placeholder="Enter warehouse job number"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('wh-code', 'WH Code')}>
          <EnhancedSelect
            fieldId="wh-code"
            value={formData.whCode}
            onValueChange={(value) => updateFormData('whCode', value)}
            options={whCodeOptions}
            placeholder="Select warehouse code"
          />
        </FormField>
      </div>

      {/* Row 3: WH Customs and No Pkg Rel */}
      <div className="flex">
        <FormField {...createFormFieldProps('wh-customs', 'WH Customs')}>
          <EnhancedInput
            fieldId="wh-customs"
            value={formData.whCustoms}
            onChange={(e) => updateFormData('whCustoms', e.target.value)}
            placeholder="Enter warehouse customs"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('wh-no-pkg', 'No Pkg Rel')}>
          <EnhancedInput
            fieldId="wh-no-pkg"
            value={formData.noPkgRel}
            onChange={(e) => updateFormData('noPkgRel', e.target.value)}
            placeholder="Enter number of packages"
          />
        </FormField>
      </div>

      {/* Row 4: Pkg Code and WH Gross Wght */}
      <div className="flex">
        <FormField {...createFormFieldProps('wh-pkg-code', 'Pkg Code')}>
          <EnhancedSelect
            fieldId="wh-pkg-code"
            value={formData.pkgCode}
            onValueChange={(value) => updateFormData('pkgCode', value)}
            options={packageCodeOptions}
            placeholder="Select package code"
          />
        </FormField>
        
        <FormField {...createFormFieldProps('wh-gross-weight', 'WH Gross Wght')}>
          <EnhancedInput
            fieldId="wh-gross-weight"
            value={formData.whGrossWght}
            onChange={(e) => updateFormData('whGrossWght', e.target.value)}
            placeholder="Enter gross weight"
          />
        </FormField>
      </div>

      {/* Row 5: Wght Code (single field) */}
      <div className="flex">
        <FormField {...createFormFieldProps('wh-weight-code', 'Wght Code')}>
          <EnhancedSelect
            fieldId="wh-weight-code"
            value={formData.wghtCode}
            onValueChange={(value) => updateFormData('wghtCode', value)}
            options={packageCodeOptions}
            placeholder="Select weight code"
          />
        </FormField>
        
        {/* Empty second field for layout consistency */}
        <div className="flex items-center w-full min-w-0" style={{ backgroundColor: 'white', borderLeft: '1px solid #D0D5E3', borderTop: '1px solid #D0D5E3' }}>
          <div style={{ width: '150px', height: '30px' }} />
          <div className="flex-1 min-w-0" />
        </div>
      </div>
        </div>
      )}
    </div>
  );
});

EnhancedJobDetailsForm.displayName = 'EnhancedJobDetailsForm';

export default EnhancedJobDetailsForm;