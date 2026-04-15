import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import image from 'figma:asset/f495511eff1722ad47758f7e0195c5c4c1bda766.png';
import FunctionalGlobalNavigation from './FunctionalGlobalNavigation';

interface VerificationPageProps {
  jobData?: any;
  onBackToJobList?: () => void;
  onLogout?: () => void;
}

function VerificationPage({ jobData, onBackToJobList, onLogout }: VerificationPageProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fileName = searchParams.get('file') || 'Unknown File';
  
  const [activeTab, setActiveTab] = useState<'files' | 'jobDetails' | 'status' | 'auditChecklist'>('files');

  const handleImageClick = () => {
    // Save verification status to session storage so EnhancedFilesTable can pick it up
    sessionStorage.setItem(`verified_${fileName}`, 'true');
    // Also trigger a custom event for immediate update if the component is still mounted
    window.dispatchEvent(new CustomEvent('fileVerified', { detail: { fileName } }));
    
    navigate(-1);
  };

  const handleTabChange = (tab: 'files' | 'jobDetails' | 'status' | 'auditChecklist') => {
    setActiveTab(tab);
    // Navigate back to job details if that tab is clicked
    if (tab === 'jobDetails') {
      navigate(-1);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#242C40] flex flex-col overflow-hidden">
      <FunctionalGlobalNavigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onBackToJobList={onBackToJobList || (() => navigate(-1))}
        onLogout={onLogout || (() => {})}
        jobData={jobData}
      />

      {/* Main content area - Image Replacement */}
      <div className="flex-1 bg-[#1A2235] overflow-auto">
        <div 
          onClick={handleImageClick}
          className="cursor-pointer w-full min-h-full"
        >
          <img 
            src={image} 
            alt="Verification View" 
            className="w-full h-auto block"
          />
        </div>
      </div>
    </div>
  );
}

export default VerificationPage;
