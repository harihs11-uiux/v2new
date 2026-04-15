import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import JobListPage from "./components/JobListPage";
import JobDetailsPage from "./components/JobDetailsPage";
import PartyDetailsPage from "./components/PartyDetailsPage";
import LoginPageComponent from "./imports/1-35-25483";
import { Toaster } from "./components/ui/sonner";

// Lazy load VerificationPage to reduce initial bundle size
const VerificationPage = lazy(() => import("./components/VerificationPage"));

// File interface for better typing
interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  url?: string;
  uploadedAt?: string;
}

// Job data interface
interface JobData {
  type?: 'Import' | 'Export';
  jobNumber: string;
  createdAt: string;
  status: string;
  isNewJob: boolean; // Flag to indicate this is a newly created job
  cbBranch: string;
  cbCode: string;
  branch: string;
  city: string;
  address: string;
  state: string;
  country: string;
  pincode: string;
  branchName: string;
  aeoRegNo: string;
  aeoRole: string;
  submittedBy: string;
  assignedTo: string[];
  jobNo: string;
  jobDate: string;
  beNumber: string;
  beDate: string;
  priorBE: string;
  modeOfTransport: string;
  beType: string;
  transactionRefNo: string;
  customsHouseCd: string;
  customerRefNo: string;
  assessableValue: string;
  dutyPayable: string;
  ucrNo: string;
  ucrType: string;
  kacchaBE: string;
  greenChannel: string;
  section48: string;
  section48Reason: string;
  firstCheck: string;
  firstCheckReason: string;
  provisionalAssess: string;
  paReason: string;
  miscLoad: string;
  paytMthodCd: string;
  portOfOrigin: string;
  countryOfOrigin: string;
  portOfShipment: string;
  consCountry: string;
  remarks: string;
  addCharges: string;
  hssTransaction: string;
  importerAddress: string;
  iec: string;
  pan: string;
  iecPanBr: string;
  importerId: string;
  importerBranch: string;
  importerCity: string;
  importerPincode: string;
  countryPin: string;
  importerState: string;
  importerCountry: string;
  adCode: string;
  importerType: string;
  files: FileItem[];
}

// Extend Window interface for Maze integration
declare global {
  interface Window {
    mazeUniversalSnippetApiKey?: string;
  }
}

// Functional Login Wrapper Component
function FunctionalLoginPage({
  onLogin,
}: {
  onLogin: () => void;
}) {
  const [credentials, setCredentials] = useState({
    org: "",
    username: "",
    password: "",
  });

  const handleLogin = () => {
    // Check hardcoded credentials
    if (
      credentials.org === "UNI" &&
      credentials.username === "admin" &&
      credentials.password === "admin"
    ) {
      onLogin();
    } else {
      alert(
        "Invalid credentials. Please enter:\n• Organization: UNI\n• Username: admin\n• Password: admin",
      );
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* Base Login Component with functional textfield */}
      <LoginPageComponent
        orgValue={credentials.org}
        onOrgChange={(value: string) =>
          setCredentials((prev) => ({ ...prev, org: value }))
        }
        usernameValue={credentials.username}
        onUsernameChange={(value: string) =>
          setCredentials((prev) => ({
            ...prev,
            username: value,
          }))
        }
        passwordValue={credentials.password}
        onPasswordChange={(value: string) =>
          setCredentials((prev) => ({
            ...prev,
            password: value,
          }))
        }
        onSignIn={handleLogin}
      />

      {/* Make Sign In Button Functional */}
      <div
        className="absolute cursor-pointer pointer-events-auto z-10"
        style={{
          left: "calc(50% + 222px)",
          top: "calc(50% + 150px)",
          width: "444px",
          height: "44px",
          transform: "translateX(-50%)",
        }}
        onClick={handleLogin}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleLogin();
          }
        }}
      >
        {/* Invisible clickable area over the Sign In button */}
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<
    "jobList" | "jobDetails" | "partyDetails"
  >("jobList");
  const [initialListTab, setInitialListTab] = useState<'Dashboard' | 'Imports' | 'Exports' | 'Party'>('Dashboard');
  const [currentJobData, setCurrentJobData] =
    useState<JobData | null>(null);
  const [currentPartyData, setCurrentPartyData] = useState<any>(null);
  // Version state management
  const [versions, setVersions] = useState<string[]>(["live", "cl01"]);
  const [activeVersion, setActiveVersion] = useState<string>("live");

  const handleLogin = () => {
    setInitialListTab("Dashboard");
    setIsLoggedIn(true);
    setCurrentPage("jobList");
  };

  const handleLogout = () => {
    setInitialListTab("Dashboard");
    setIsLoggedIn(false);
    setCurrentPage("jobList");
    setCurrentJobData(null);
    // Reset version to live when logging out
    setVersions(["live", "cl01"]);
    setActiveVersion("live");
  };

  const handleCreateJob = (initialData?: Partial<JobData>) => {
    // Generate a new job with default CB Details and navigate directly to Job Details page
    const baseJobNumber = `ICB/${Math.floor(Math.random() * 99999) + 10000}/2025-26`;
    
    const newJobData: JobData = {
      jobNumber: baseJobNumber,
      createdAt: new Date().toISOString(),
      status: "In Progress",
      isNewJob: true, // Flag to indicate this is a newly created job

      // CB Details - Default Values
      cbBranch: "Unifo Private Limited",
      cbCode: "AABLI4333MCH001",
      branch: "001",
      city: "Chennai",
      address:
        "Unifo Private Limited.\n5th-Floor, Tower C, Rattha Tek Meadows,\nNo. 51, Rajiv Gandhi Salai, Sholinganallur, Chennai, Tamil Nadu, India.",
      state: "Tamil Nadu",
      country: "India",
      pincode: "600119",
      branchName: "",
      aeoRegNo: "",
      aeoRole: "",
      submittedBy: "",
      assignedTo: [],

      // Job Info - Empty by default except for job number which matches main job number
      jobNo: baseJobNumber,
      jobDate: "",
      beNumber: "",
      beDate: "",
      priorBE: "",
      modeOfTransport: "",
      beType: "",
      transactionRefNo: "",
      customsHouseCd: "",
      customerRefNo: "",
      assessableValue: "",
      dutyPayable: "",
      ucrNo: "",
      ucrType: "",
      kacchaBE: "",
      greenChannel: "",
      section48: "",
      section48Reason: "",
      firstCheck: "",
      firstCheckReason: "",
      provisionalAssess: "",
      paReason: "",
      miscLoad: "",
      paytMthodCd: "",
      portOfOrigin: "",
      countryOfOrigin: "",
      portOfShipment: "",
      consCountry: "",
      remarks: "",
      addCharges: "",
      hssTransaction: "",
      importerAddress: "",
      iec: "",
      pan: "",
      iecPanBr: "",
      importerId: "",
      importerBranch: "",
      importerCity: "",
      importerPincode: "",
      countryPin: "",
      importerState: "",
      importerCountry: "",
      adCode: "",
      importerType: "",
      files: [],
      ...initialData, // Override with any initial data passed
    };

    // If initialData has a jobNumber, update jobNo as well
    if (initialData?.jobNumber) {
      newJobData.jobNo = initialData.jobNumber;
    }
    
    // Ensure type is set if present in initialData
    if (initialData?.type) {
      newJobData.type = initialData.type;
    }

    setCurrentJobData(newJobData);
    setCurrentPage("jobDetails");
    // Reset version to live and default versions when creating new job
    setVersions(["live", "cl01"]);
    setActiveVersion("live");
  };

  const handleBackToJobList = () => {
    setInitialListTab("Imports");
    setCurrentPage("jobList");
    setCurrentJobData(null);
    // Reset version to live when going back to job list
    setVersions(["live", "cl01"]);
    setActiveVersion("live");
  };

  const handleCreateParty = (partyData?: any) => {
    setCurrentPartyData(partyData || null);
    setCurrentPage("partyDetails");
  };

  const handleVersionChange = (version: string) => {
    setActiveVersion(version);
  };

  const handleGenerateVersion = () => {
    setVersions(prev => {
      // Find the next version number
      const clVersions = prev.filter(v => v.startsWith('cl'));
      let nextNum = 1;
      if (clVersions.length > 0) {
        const nums = clVersions.map(v => parseInt(v.replace('cl', ''), 10));
        nextNum = Math.max(...nums) + 1;
      } else {
        nextNum = 1;
      }
      
      const newVersion = `cl${nextNum.toString().padStart(2, '0')}`;
      if (!prev.includes(newVersion)) {
        const newVersions = [...prev, newVersion];
        setActiveVersion(newVersion);
        return newVersions;
      }
      return prev;
    });
  };

  // Initialize Maze research tool
  useEffect(() => {
    // Maze Universal Snippet with proper TypeScript support
    const initializeMaze = () => {
      let sessionValue: string | null = null;

      try {
        sessionValue = window.sessionStorage.getItem("maze-us");
      } catch (error) {
        // Silently handle sessionStorage errors
        sessionValue = null;
      }

      if (!sessionValue) {
        sessionValue = new Date().getTime().toString();
        try {
          window.sessionStorage.setItem(
            "maze-us",
            sessionValue,
          );
        } catch (error) {
          // Silently handle sessionStorage errors
        }
      }

      const script = document.createElement("script");
      script.src =
        "https://snippet.maze.co/maze-universal-loader.js?apiKey=f5d0d3ba-f6de-4441-83a6-06ce331c3c54";
      script.async = true;

      const head = document.getElementsByTagName("head")[0];
      if (head) {
        head.appendChild(script);
      }

      window.mazeUniversalSnippetApiKey =
        "f5d0d3ba-f6de-4441-83a6-06ce331c3c54";
    };

    initializeMaze();
  }, []);

  // Initialize Hotjar tracking
  useEffect(() => {
    // Hotjar Tracking Code for https://v2sentinel.figma.site/
    const initializeHotjar = () => {
      (function (
        h: any,
        o: Document,
        t: string,
        j: string,
        a: HTMLElement | null,
        r: HTMLScriptElement,
      ) {
        h.hj =
          h.hj ||
          function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: 6503098, hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        if (a) {
          a.appendChild(r);
        }
      })(
        window,
        document,
        "https://static.hotjar.com/c/hotjar-",
        ".js?sv=",
      );
    };

    initializeHotjar();
  }, []);

  // Listen for job number navigation events
  useEffect(() => {
    const handleJobNavigation = (event: CustomEvent) => {
      const { jobData, activeTab } = event.detail;
      setCurrentJobData(jobData);
      setCurrentPage("jobDetails");
      setActiveVersion("live");
    };

    window.addEventListener(
      "navigateToJobDetails",
      handleJobNavigation as EventListener,
    );

    return () => {
      window.removeEventListener(
        "navigateToJobDetails",
        handleJobNavigation as EventListener,
      );
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <div className="w-screen h-screen">
                <FunctionalLoginPage onLogin={handleLogin} />
              </div>
            ) : currentPage === "jobDetails" ? (
              <div className="w-screen h-screen">
                <JobDetailsPage
                  onLogout={handleLogout}
                  onBackToJobList={handleBackToJobList}
                  onCreateJob={handleCreateJob}
                  onGenerateVersion={handleGenerateVersion}
                  jobData={currentJobData}
                  activeVersion={activeVersion}
                  versions={versions}
                  onVersionChange={handleVersionChange}
                />
                <Toaster />
              </div>
            ) : currentPage === "partyDetails" ? (
              <div className="w-screen h-screen">
                <PartyDetailsPage
                  onLogout={handleLogout}
                  onClose={() => {
                    setInitialListTab("Party");
                    setCurrentPage("jobList");
                    setCurrentPartyData(null);
                  }}
                  initialData={currentPartyData}
                />
                <Toaster />
              </div>
            ) : (
              <div className="w-screen h-screen">
                <JobListPage
                  onLogout={handleLogout}
                  onCreateJob={handleCreateJob}
                  onCreateParty={handleCreateParty}
                  initialTab={initialListTab}
                />
                <Toaster />
              </div>
            )
          }
        />
        <Route
          path="/verify"
          element={
            isLoggedIn ? (
              <Suspense fallback={
                <div className="w-screen h-screen bg-[#242C40] flex items-center justify-center">
                  <div className="text-white text-[16px]">Loading verification page...</div>
                </div>
              }>
                <VerificationPage 
                  jobData={currentJobData}
                  onBackToJobList={handleBackToJobList}
                  onLogout={handleLogout}
                />
              </Suspense>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;