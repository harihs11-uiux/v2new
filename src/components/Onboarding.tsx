import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

interface OnboardingStep {
  title: string;
  description: string;
  target?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  highlightElement?: boolean;
}

export type TourType = 'welcome' | 'create-job' | 'imports-exports' | 'search' | 'table-scroll' | 'dashboard' | 'job-files' | 'job-details-info' | 'job-status' | 'invoice-edit';

const tourSteps: Record<TourType, OnboardingStep[]> = {
  'invoice-edit': [
    {
      title: 'Editing Invoice',
      description: 'Refine all aspects of your invoice from here. We have organized the form into logical sections for faster data entry.',
      position: 'center',
    },
    {
      title: 'Section Management',
      description: 'Use these chips to quickly jump to a section or toggle its visibility. This helps you focus on what matters.',
      target: '[data-onboarding="section-chips"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Buyer & Supplier Details',
      description: 'Buyer details are now conveniently located right below supplier details to maintain the flow of information.',
      target: '#supplier-details',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Item Details',
      description: 'View and edit items associated with this invoice. You can also dock this section to the right or split it to the bottom.',
      target: '#item-details',
      position: 'top',
      highlightElement: true,
    },
    {
      title: 'Save & Next',
      description: 'Once you are done, save your changes or navigate to the next invoice using the header controls.',
      target: '[data-onboarding="invoice-header-controls"]',
      position: 'bottom',
      highlightElement: true,
    }
  ],
  'job-files': [
    {
      title: 'Managing Files',
      description: 'View and manage all documents associated with this job, including Invoices, Packing Lists, and more.',
      position: 'center',
    },
    {
      title: 'Upload Documents',
      description: 'Click here to upload new documents. Drag and drop files or browse your computer.',
      target: '[data-onboarding="upload-files"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Split View',
      description: 'View documents side-by-side with your job details for easy data entry and verification.',
      position: 'center',
    }
  ],
  'job-details-info': [
    {
      title: 'Job Details Form',
      description: 'Review and edit all the comprehensive details of your job here.',
      position: 'center',
    },
    {
      title: 'Navigation Bar',
      description: 'Use the navigation bar to quickly jump between different sections like Invoice Details, Item Details, and more.',
      target: '[data-onboarding="job-nav-bar"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Audit & Suggestions',
      description: 'Check here for any errors, warnings, or AI-powered suggestions to improve your job filing accuracy.',
      target: '[data-onboarding="audit-sidebar-toggle"]',
      position: 'left',
      highlightElement: true,
    }
  ],
  'job-status': [
    {
      title: 'Track Status',
      description: 'Monitor the real-time status of your job from creation to clearance.',
      position: 'center',
    },
    {
      title: 'Status Timeline',
      description: 'View the complete history of status changes and events for this job.',
      target: '[data-onboarding="status-timeline"]',
      position: 'center',
      highlightElement: true,
    }
  ],
  dashboard: [
    {
      title: 'Welcome to Dashboard',
      description: 'Your Dashboard provides a comprehensive overview of all your import and export jobs with key analytics and insights.',
      position: 'center',
    },
    {
      title: 'Module Dropdown',
      description: 'Click on the "Jobs" dropdown to access other modules in the Sentinel platform. You can switch between different modules like Jobs, Master Data, and more.',
      target: '[data-onboarding="module-dropdown"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Imports and Exports Tabs',
      description: 'Click on the Imports or Exports tabs to view and manage your jobs in detail. Each tab provides job listings with search, filtering, and management tools.',
      target: '[data-onboarding="tabs"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Ready to Explore!',
      description: 'Click on the Imports or Exports tab to see detailed job listings. A guided tour will show you how to create jobs, search, and navigate the table.',
      position: 'center',
    },
  ],
  welcome: [
    {
      title: 'Welcome to Sentinel Jobs',
      description: 'Let\'s take a quick tour to help you get started with managing your import and export jobs efficiently.',
      position: 'center',
    },
    {
      title: 'Dashboard Overview',
      description: 'Your Dashboard provides a comprehensive view of all your jobs, including TAT analysis, filing due dates, and volume trends.',
      target: '[data-onboarding="dashboard-tab"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Import & Export Tabs',
      description: 'Switch between Imports and Exports tabs to view and manage specific job types. Each tab provides detailed job listings and filtering options.',
      target: '[data-onboarding="tabs"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Create New Jobs',
      description: 'Click the "Create Job" button to add new import or export jobs. Fill in the required details and submit to track your shipments.',
      target: '[data-onboarding="create-job"]',
      position: 'left',
      highlightElement: true,
    },
    {
      title: 'Search & Filter',
      description: 'Use the search bar to quickly find specific jobs, and add filters to narrow down your results by status, date, or other criteria.',
      target: '[data-onboarding="search"]',
      position: 'left',
      highlightElement: true,
    },
    {
      title: 'You\'re All Set!',
      description: 'You\'re ready to start managing your jobs. Click the Tour button anytime to access specific feature guides.',
      position: 'center',
    },
  ],
  'create-job': [
    {
      title: 'Creating Jobs',
      description: 'Learn how to create and manage import and export jobs in just a few simple steps.',
      position: 'center',
    },
    {
      title: 'Navigate to Jobs Tab',
      description: 'First, switch to either the Imports or Exports tab depending on the type of job you want to create.',
      target: '[data-onboarding="tabs"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Click Create Job',
      description: 'Click the "Create Job" button in the top toolbar to open the job creation form.',
      target: '[data-onboarding="create-job"]',
      position: 'left',
      highlightElement: true,
    },
    {
      title: 'Fill Job Details',
      description: 'A sidebar will appear where you can enter all the necessary information like customer details, origin, destination, BE type, customs house code, and more.',
      position: 'center',
    },
    {
      title: 'Submit Your Job',
      description: 'Once all required fields are filled, click the Submit button to create your job. It will appear in your job list immediately.',
      position: 'center',
    },
  ],
  'imports-exports': [
    {
      title: 'Managing Import & Export Jobs',
      description: 'Learn how to view, filter, and manage your import and export shipments effectively.',
      position: 'center',
    },
    {
      title: 'Switch Between Tabs',
      description: 'Use these tabs to switch between viewing Import jobs and Export jobs. Each tab shows only the relevant job type.',
      target: '[data-onboarding="tabs"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Create New Job',
      description: 'Click the "Create Job" button to add new import or export jobs. Fill in the required details and submit to track your shipments.',
      target: '[data-onboarding="create-job"]',
      position: 'left',
      highlightElement: true,
    },
    {
      title: 'Search Jobs',
      description: 'Use the search bar to quickly find specific jobs by typing any keyword. It searches across reference number, customer name, status, origin, destination, BE number, and more.',
      target: '[data-onboarding="search"]',
      position: 'left',
      highlightElement: true,
    },
    {
      title: 'Job List View',
      description: 'All your jobs are displayed in a table format. You can see details like reference number, status, customer, origin, destination, and more.',
      target: '[data-onboarding="table"]',
      position: 'top',
      highlightElement: true,
    },
    {
      title: 'Table Navigation - Scroll Required',
      description: 'The table contains many columns. Scroll horizontally to view all information and continue the tour. Use your mouse wheel, trackpad, or the scrollbar at the bottom.',
      target: '[data-onboarding="table-scroll-area"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'View Job Details',
      description: 'Click on any row to view complete job details. You can edit information or update the status of your shipments.',
      target: '[data-onboarding="table"]',
      position: 'top',
      highlightElement: true,
    },
    {
      title: 'Total Jobs Counter',
      description: 'The total count shows how many jobs are currently visible based on your active filters and search query.',
      target: '[data-onboarding="total-jobs"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'You\'re All Set!',
      description: 'You now know how to manage your import and export jobs. Start creating, searching, and tracking your shipments!',
      position: 'center',
    },
  ],
  search: [
    {
      title: 'Search & Filter Jobs',
      description: 'Quickly find specific jobs using our powerful search and filtering capabilities.',
      position: 'center',
    },
    {
      title: 'Search Bar',
      description: 'Type any keyword to search across all job fields including reference number, customer name, status, origin, destination, BE number, and more.',
      target: '[data-onboarding="search"]',
      position: 'left',
      highlightElement: true,
    },
    {
      title: 'Real-time Results',
      description: 'Results update instantly as you type. The search is case-insensitive and searches across multiple fields simultaneously.',
      target: '[data-onboarding="search"]',
      position: 'left',
      highlightElement: true,
    },
    {
      title: 'Add Filters',
      description: 'Click "Add Filter" to apply advanced filters by status, date range, customs house, or other criteria to narrow down your results.',
      target: '[data-onboarding="add-filter"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Clear Search',
      description: 'Click the X icon in the search bar to quickly clear your search and view all jobs again.',
      target: '[data-onboarding="search"]',
      position: 'left',
      highlightElement: true,
    },
  ],
  'table-scroll': [
    {
      title: 'Navigating the Job Table',
      description: 'Learn how to navigate and view all columns in the job table with horizontal scrolling.',
      position: 'center',
    },
    {
      title: 'Table Overview',
      description: 'The job table contains many columns with detailed information. Some columns may not be visible initially due to screen width.',
      target: '[data-onboarding="table"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Horizontal Scroll',
      description: 'Use your mouse wheel, trackpad, or click and drag on the scrollbar at the bottom of the table to scroll horizontally and view all columns.',
      target: '[data-onboarding="table-scroll-area"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Fixed Columns',
      description: 'Notice that the first few columns (like Reference Number and Status) stay fixed while scrolling, making it easy to keep track of which job you\'re viewing.',
      target: '[data-onboarding="table"]',
      position: 'bottom',
      highlightElement: true,
    },
    {
      title: 'Keyboard Navigation',
      description: 'You can also use Shift + Mouse Wheel to scroll horizontally, or use the arrow keys after clicking on the table.',
      target: '[data-onboarding="table"]',
      position: 'bottom',
      highlightElement: true,
    },
  ],
};

interface OnboardingProps {
  onComplete: () => void;
  onSkip: () => void;
  isOpen: boolean;
  tourType?: TourType;
}

export default function Onboarding({ onComplete, onSkip, isOpen, tourType = 'welcome' }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const onboardingSteps = tourSteps[tourType] || tourSteps.welcome;
  const step = onboardingSteps?.[currentStep];

  // Reset step to 0 when tour type changes
  useEffect(() => {
    setCurrentStep(0);
  }, [tourType]);

  // Reset scroll tracking when step changes
  useEffect(() => {
    setHasScrolled(false);
  }, [currentStep]);

  // Add scroll listener for table-scroll tour AND imports-exports tour
  useEffect(() => {
    if (!isOpen) return;
    
    // Only add listener for tours that have scroll step
    const hasScrollRequirement = tourType === 'table-scroll' || 
      (tourType === 'imports-exports' && step.title === 'Table Navigation - Scroll Required');
    
    if (!hasScrollRequirement) return;

    const scrollArea = document.querySelector('[data-onboarding="table-scroll-area"]');
    if (!scrollArea) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollLeft > 50) { // User has scrolled at least 50px horizontally
        setHasScrolled(true);
        
        // Auto-complete only for standalone table-scroll tour, not for imports-exports
        if (tourType === 'table-scroll') {
          setTimeout(() => {
            onComplete();
          }, 1000);
        }
      }
    };

    scrollArea.addEventListener('scroll', handleScroll);

    return () => {
      scrollArea.removeEventListener('scroll', handleScroll);
    };
  }, [tourType, isOpen, currentStep, onComplete, step.title]);

  if (!isOpen || !step) return null;

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Check if current step requires scroll interaction
  const isScrollStep = (tourType === 'table-scroll' && 
    (step.title === 'Horizontal Scroll' || step.title === 'Fixed Columns' || step.title === 'Keyboard Navigation')) ||
    (tourType === 'imports-exports' && step.title === 'Table Navigation - Scroll Required');
  
  const isNextDisabled = isScrollStep && !hasScrolled;

  const getTooltipPosition = () => {
    // Always position at bottom center regardless of target or position
    return { 
      bottom: '24px', 
      left: '50%', 
      transform: 'translateX(-50%)'
    };
  };

  const getHighlightStyle = () => {
    if (!step.target || !step.highlightElement) return null;

    const element = document.querySelector(step.target);
    if (!element) return null;

    const rect = element.getBoundingClientRect();

    return {
      top: `${rect.top - 4}px`,
      left: `${rect.left - 4}px`,
      width: `${rect.width + 8}px`,
      height: `${rect.height + 8}px`,
    };
  };

  const tooltipStyle = getTooltipPosition();
  const highlightStyle = getHighlightStyle();

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Overlay panels that create a "hole" for the highlighted element */}
      {highlightStyle && tourType === 'table-scroll' ? (
        <>
          {/* Top overlay */}
          <div 
            className="absolute left-0 right-0 bg-black/70 pointer-events-auto"
            style={{
              top: 0,
              height: highlightStyle.top,
            }}
          />
          {/* Bottom overlay */}
          <div 
            className="absolute left-0 right-0 bg-black/70 pointer-events-auto"
            style={{
              top: `calc(${highlightStyle.top} + ${highlightStyle.height})`,
              bottom: 0,
            }}
          />
          {/* Left overlay */}
          <div 
            className="absolute bg-black/70 pointer-events-auto"
            style={{
              top: highlightStyle.top,
              left: 0,
              width: highlightStyle.left,
              height: highlightStyle.height,
            }}
          />
          {/* Right overlay */}
          <div 
            className="absolute bg-black/70 pointer-events-auto"
            style={{
              top: highlightStyle.top,
              left: `calc(${highlightStyle.left} + ${highlightStyle.width})`,
              right: 0,
              height: highlightStyle.height,
            }}
          />
          {/* Blue border around highlighted element */}
          <div
            className="absolute rounded-lg border-4 border-[#3874ff] transition-all duration-300 pointer-events-none"
            style={{
              top: highlightStyle.top,
              left: highlightStyle.left,
              width: highlightStyle.width,
              height: highlightStyle.height,
              zIndex: 10000,
            }}
          />
        </>
      ) : (
        <>
          {/* Dark Overlay - only show if there's no highlight element, or use box-shadow for spotlight effect */}
          {!step.highlightElement && (
            <div className="absolute inset-0 bg-black/70 transition-opacity pointer-events-auto" />
          )}

          {/* Highlight Element with Spotlight Effect */}
          {highlightStyle && (
            <div
              className="absolute rounded-lg transition-all duration-300"
              style={{
                ...highlightStyle,
                boxShadow: '0 0 0 4px rgba(56, 116, 255, 0.6), 0 0 0 9999px rgba(0, 0, 0, 0.7)',
                zIndex: 10000,
                pointerEvents: 'none',
              }}
            />
          )}
        </>
      )}

      {/* Animated Scroll Arrows for table-scroll tour */}
      {isScrollStep && !hasScrolled && (
        <>
          {/* Left Arrow */}
          <div 
            className="fixed bottom-[200px] left-8 z-[10002] animate-pulse"
          >
            <div className="flex items-center gap-2">
              <div className="bg-[#3874ff] text-white rounded-full p-3 shadow-lg">
                <ArrowLeft className="w-6 h-6" />
              </div>
              <span className="text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                Scroll
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <div 
            className="fixed bottom-[200px] right-8 z-[10002] animate-pulse"
          >
            <div className="flex items-center gap-2">
              <span className="text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                Scroll
              </span>
              <div className="bg-[#3874ff] text-white rounded-full p-3 shadow-lg">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Tooltip */}
      <div
        className="absolute bg-white rounded-lg shadow-2xl max-w-md w-full transition-all duration-300 pointer-events-auto"
        style={{
          ...tooltipStyle,
          zIndex: 10001,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onSkip}
          className="absolute top-4 right-4 text-[#626776] hover:text-[#050e25] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Step Indicator */}
          <div className="flex gap-1 mb-6">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full flex-1 transition-colors ${
                  index === currentStep ? 'bg-[#3874ff]' : index < currentStep ? 'bg-[#3874ff]/40' : 'bg-[#e0e0e0]'
                }`}
              />
            ))}
          </div>

          {/* Title */}
          <h2 className="text-[24px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050e25] mb-3">
            {step.title}
          </h2>

          {/* Description */}
          <p className="text-[16px] font-['Inter',sans-serif] text-[#626776] leading-[24px] mb-6">
            {step.description}
          </p>

          {/* Interactive Instruction for scroll steps */}
          {isScrollStep && !hasScrolled && (
            <div className="mb-6 p-3 bg-[#fff4e6] border border-[#ffb951] rounded-lg">
              <p className="text-[14px] font-['Inter:Medium',sans-serif] font-medium text-[#d97706]">
                👆 Try scrolling the table horizontally to continue
              </p>
            </div>
          )}

          {isScrollStep && hasScrolled && (
            <div className="mb-6 p-3 bg-[#e6f7ed] border border-[#51cf66] rounded-lg">
              <p className="text-[14px] font-['Inter:Medium',sans-serif] font-medium text-[#2f9e44]">
                ✓ Great! You've scrolled the table
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={onSkip}
              className="text-[14px] font-['Inter:Medium',sans-serif] font-medium text-[#626776] hover:text-[#050e25] transition-colors"
            >
              Skip Tour
            </button>

            <div className="flex gap-2">
              {currentStep > 0 && (
                <button
                  onClick={handlePrevious}
                  className="flex items-center gap-2 px-4 py-2 bg-[#f5f6f8] hover:bg-[#e8eaed] text-[#050e25] rounded-lg transition-colors font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>
              )}

              <button
                onClick={handleNext}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] ${
                  isNextDisabled 
                    ? 'bg-[#d1d5db] text-[#9ca3af] cursor-not-allowed' 
                    : 'bg-[#3874ff] hover:bg-[#2563eb] text-white'
                }`}
                disabled={isNextDisabled}
              >
                {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}