import React, { useState, useEffect } from 'react';
import EnhancedFilesTable from './EnhancedFilesTable';
import EnhancedPdfViewer from './EnhancedPdfViewer';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import pdfIconActive from 'figma:asset/af23aeff11778c5dcbfeb3488dca2d258cf7b215.png';
import pdfIconInactive from 'figma:asset/fc1aef34e20afa4adc53177a0b00344e2307f634.png';
import xlsIconActive from 'figma:asset/98403181c2e075cac61c01060c4a7def411338b1.png';
import xlsIconInactive from 'figma:asset/5259d57a77bfe17ae34a0155872f5ee4b078338d.png';

interface SplitViewPdfLayoutProps {
  onUpload: () => void;
  onClose: () => void;
  onSave?: () => void;
  jobData?: any;
}

// Enhanced PDF Viewer Wrapper Component
function EnhancedPdfViewerWrapper({ 
  selectedPdf, 
  onClose,
  zoom,
  onZoomChange,
  rotation,
  onRotationChange
}: { 
  selectedPdf: string | null;
  onClose: () => void;
  zoom: number;
  onZoomChange: (zoom: number) => void;
  rotation: number;
  onRotationChange: (rotation: number) => void;
}) {
  return (
    <div className="w-full h-full bg-[#f6f9ff] relative">
      <EnhancedPdfViewer 
        selectedPdf={selectedPdf}
        onClose={onClose}
        initialZoom={zoom}
        initialRotation={rotation}
      />
    </div>
  );
}

// Files Table Toolbar Component
function FilesToolbar({ 
  jobData, 
  onUpload, 
  onClose, 
  onSave,
  activeNav, 
  onNavigationChange,
  onDownloadTemplate
}: { 
  jobData?: any; 
  onUpload: () => void; 
  onClose: () => void; 
  onSave?: () => void;
  activeNav: 'pdf' | 'xls'; 
  onNavigationChange: (nav: 'pdf' | 'xls') => void;
  onDownloadTemplate?: () => void;
}) {
  const fileCount = jobData?.files?.length || 10; // This might need adjustment if counts differ by type
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    if (onSave) {
      setOpen(true);
    } else {
      onClose();
    }
  };

  const handleSaveAndQuit = () => {
    if (onSave) onSave();
    setOpen(false);
    onClose();
  };

  const handleDontSave = () => {
    setOpen(false);
    onClose();
  };
  
  return (
    <>
    <div
      className="absolute bg-[#2d364d] box-border content-stretch flex flex-row items-center justify-between p-0 top-0 z-10 transition-all duration-300 ease-in-out"
      style={{ 
        left: '0px', 
        right: '0px',
        height: '45px'
      }}
    >
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" style={{ height: '45px' }}>
        <div className="absolute border-0 border-[#eff0f1] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-0 relative w-full" style={{ height: '45px' }}>
            
            {/* Tabs */}
            <div className="flex flex-row items-center gap-6 h-full">
              <div 
                onClick={() => onNavigationChange('pdf')}
                className={`flex flex-col justify-center h-full cursor-pointer relative px-1 transition-colors ${
                  activeNav === 'pdf' ? 'text-white' : 'text-[#8F9BB3] hover:text-white'
                }`}
              >
                <p className="block leading-[18px] text-[14px] font-semibold whitespace-pre">
                  PDF Files
                </p>
                {activeNav === 'pdf' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3874ff] rounded-t-sm" />
                )}
              </div>

              <div 
                onClick={() => onNavigationChange('xls')}
                className={`flex flex-col justify-center h-full cursor-pointer relative px-1 transition-colors ${
                  activeNav === 'xls' ? 'text-white' : 'text-[#8F9BB3] hover:text-white'
                }`}
              >
                <p className="block leading-[18px] text-[14px] font-semibold whitespace-pre">
                  Data Capture Files
                </p>
                {activeNav === 'xls' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3874ff] rounded-t-sm" />
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-end p-0 relative shrink-0">
              {activeNav === 'xls' && onDownloadTemplate && (
                <button
                  onClick={onDownloadTemplate}
                  className="bg-[rgba(56,116,255,0.1)] border border-[#3874ff] text-[#3874ff] px-2 py-1 rounded text-[14px] font-semibold hover:bg-[rgba(56,116,255,0.2)] transition-colors"
                >
                  Download template
                </button>
              )}
              <button
                onClick={onUpload}
                className="bg-[#3874ff] text-white px-2 py-1 rounded text-[14px] font-semibold hover:bg-[#2563eb] transition-colors flex items-center gap-1"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M9 1.5L9 12.5M4.5 7L9 1.5L13.5 7M3 16.5L15 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                Upload
              </button>
              
              {/* Download Icon Button */}
              <button
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                title="Download"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1V11M8 11L11 8M8 11L5 8" stroke="#CDCFD3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 11V13C2 14.1046 2.89543 15 4 15H12C13.1046 15 14 14.1046 14 13V11" stroke="#CDCFD3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="w-px h-6 bg-[#505767]" />
              <button
                onClick={handleClose}
                className="bg-[rgba(56,116,255,0.1)] border border-[#3874ff] text-[#3874ff] px-2 py-1 rounded text-[14px] font-semibold hover:bg-[rgba(56,116,255,0.2)] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to save the job before quitting?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDontSave} className="bg-destructive hover:bg-destructive/90">
            Don't Save
          </AlertDialogAction>
          <AlertDialogAction onClick={handleSaveAndQuit}>
            Save & Quit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
}

export default function SplitViewPdfLayout({ onUpload, onClose, onSave, jobData }: SplitViewPdfLayoutProps) {
  const [activeNav, setActiveNav] = useState<'pdf' | 'xls'>('pdf');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [hasPdfFiles, setHasPdfFiles] = useState(false);
  const [hasXlsFiles, setHasXlsFiles] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  // Check if job has files when jobData changes
  useEffect(() => {
    // If it's a new job, keep files empty
    // If it's an existing job, show files
    const isNewJob = (jobData as any)?.isNewJob;
    if (isNewJob) {
      setHasPdfFiles(false);
      setHasXlsFiles(false);
    } else {
      setHasPdfFiles(true);
      setHasXlsFiles(true);
    }
  }, [jobData]);

  const handleNavigationChange = (nav: 'pdf' | 'xls') => {
    setActiveNav(nav);
    setSelectedPdf(null);
  };

  const handlePdfClick = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
    setZoom(100); // Reset zoom when opening new PDF
    setRotation(0); // Reset rotation when opening new PDF
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
    setZoom(100);
    setRotation(0);
  };

  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = activeNav === 'pdf' ? '.pdf' : '.xls,.xlsx';
    input.onchange = (event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        console.log(`Selected ${files.length} ${activeNav} files:`, Array.from(files).map(f => f.name));
        if (activeNav === 'pdf') {
          setHasPdfFiles(true);
        } else {
          setHasXlsFiles(true);
        }
      }
    };
    input.click();
  };

  const handleDownloadTemplate = () => {
    console.log('Download template clicked');
    // Create and download a template file
    const link = document.createElement('a');
    link.download = 'data_capture_template.xlsx';
    link.href = 'data:application/vnd.ms-excel;base64,UEsDBBQAAAAAAAAA';
    link.click();
  };

  return (
    <div className="h-full bg-[#CAD2E5]">
      {selectedPdf ? (
        // Resizable Split View when PDF is selected
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Left Panel - Files */}
          <ResizablePanel defaultSize={50} minSize={30} className="relative">
            <div className="h-full flex flex-col border-r border-[#D0D5E3] relative">
              
              {/* Toolbar - positioned at top: 0px */}
              <FilesToolbar
                jobData={jobData}
                onUpload={handleUploadClick}
                onClose={onClose}
                onSave={onSave}
                activeNav={activeNav}
                onNavigationChange={handleNavigationChange}
                onDownloadTemplate={activeNav === 'xls' ? handleDownloadTemplate : undefined}
              />

              {/* File Table - positioned with 12px spacing on all sides */}
              <div 
                className="absolute transition-all duration-300 ease-in-out"
                style={{ 
                  top: '57px', // 12px below 45px toolbar (45px + 12px = 57px)
                  left: '12px', // 12px from left boundary
                  right: '12px', // 12px from right boundary of left frame
                  bottom: '12px', // 12px from bottom boundary of left frame
                  height: 'calc(100% - 69px)' // Responsive height: total height - (57px top + 12px bottom)
                }}
              >
                <div className="h-full bg-white rounded-[8px] shadow-sm overflow-hidden">
                  <EnhancedFilesTable 
                    mode={activeNav}
                    onPdfClick={handlePdfClick}
                    isEmpty={activeNav === 'pdf' ? !hasPdfFiles : !hasXlsFiles}
                    onUploadClick={handleUploadClick}
                  />
                </div>
              </div>
            </div>
          </ResizablePanel>

          {/* Standard Resizable Handle */}
          <ResizableHandle withHandle className="w-[8px] bg-[#DDE3F2] hover:bg-blue-500 transition-colors duration-200" />

          {/* Right Panel - PDF Viewer */}
          <ResizablePanel defaultSize={50} minSize={20}>
            <div className="h-full bg-white relative">
              <EnhancedPdfViewerWrapper 
                selectedPdf={selectedPdf}
                onClose={handleClosePdf}
                zoom={zoom}
                onZoomChange={setZoom}
                rotation={rotation}
                onRotationChange={setRotation}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        // Full Width View when no PDF is selected
        <div className="h-full flex relative">
          <div className="w-full flex flex-col border-r border-[#D0D5E3] relative">
            
            {/* Toolbar - positioned at top: 0px */}
            <FilesToolbar
              jobData={jobData}
              onUpload={handleUploadClick}
              onClose={onClose}
              onSave={onSave}
              activeNav={activeNav}
              onNavigationChange={handleNavigationChange}
              onDownloadTemplate={activeNav === 'xls' ? handleDownloadTemplate : undefined}
            />

            {/* File Table - positioned with 12px spacing on all sides */}
            <div 
              className="absolute transition-all duration-300 ease-in-out"
              style={{ 
                top: '57px', // 12px below 45px toolbar (45px + 12px = 57px)
                left: '12px', // 12px from left boundary
                right: '12px', // 12px from right boundary of left frame
                bottom: '0px', // No spacing from bottom (table extends to footer)
                height: 'auto' // Auto height to fill available space
              }}
            >
              <div className="h-full bg-white rounded-[8px] shadow-sm overflow-hidden">
                <EnhancedFilesTable 
                  mode={activeNav}
                  onPdfClick={handlePdfClick}
                  isEmpty={activeNav === 'pdf' ? !hasPdfFiles : !hasXlsFiles}
                  onUploadClick={handleUploadClick}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}