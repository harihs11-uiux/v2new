import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-xnfka8aiyg';
import svgPathsAttachment from '../imports/svg-hzfhbdpw53';
import imgAsset12 from 'figma:asset/23ede0e5e2b2a7e8a2f17c11a0dca8fef11cbd46.png';

interface Message {
  id: number;
  type: 'assistant' | 'user';
  content: string;
  subtitle?: string;
  fileList?: string[];
  issueDescription?: string;
}

interface AttachedFile {
  id: string;
  name: string;
  size: number;
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0" data-name="Logo">
      <div className="relative shrink-0 size-[24px]" data-name="Asset 1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset12} />
      </div>
    </div>
  );
}

function AssistantMessage({ content, subtitle }: { content: string; subtitle?: string }) {
  return (
    <div className="flex gap-[8px] items-start w-full">
      <Logo />
      <div className="bg-[rgba(255,255,255,0.24)] relative rounded-[16px] max-w-[75%]">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center justify-center">
          <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative">
            <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative whitespace-pre-wrap">
              {subtitle ? (
                <>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative text-[14px] text-white">{content}</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative text-[12px] text-[rgba(255,255,255,0.69)]">{subtitle}</p>
                </>
              ) : (
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative text-[14px] text-white">
                  {content.includes('attach any files') ? (
                    <>
                      Got it! 📎 Would you like to <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">attach any files</span> (screenshots, documents, videos)?
                    </>
                  ) : (
                    content
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-end w-full">
      <div className="bg-[rgba(255,255,255,0.77)] flex items-start p-[16px] relative rounded-[8px] max-w-[75%]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic text-[#050e25] text-[14px] text-left whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}

function Back({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" data-name="Back" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <mask height="18" id="mask0_5740_4848" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5740_4848)">
            <path d={svgPaths.p24caea00} fill="var(--fill-0, #CDCFD3)" id="arrow_back" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-80 transition-opacity" data-name="close" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <mask height="16" id="mask0_5740_4840" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5740_4840)">
            <path d={svgPaths.p299eaef0} fill="var(--fill-0, #9497A1)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChatSupportTitlebar({ onBack, onClose }: { onBack?: () => void; onClose?: () => void }) {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.11)] content-stretch flex items-center justify-between left-0 overflow-clip px-[12px] py-[16px] right-0 top-0 z-30" data-name="Chat Support Titlebar">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <Back onClick={onBack} />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Raise Ticket</p>
        </div>
      </div>
      <Close onClick={onClose} />
    </div>
  );
}

function AttachFileIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 1">
          <mask height="18" id="mask0_5814_2365" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5814_2365)">
            <path d={svgPathsAttachment.p771c900} fill="var(--fill-0, white)" id="attach_file" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RemoveFileIcon({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="cancel"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="cancel">
          <mask height="18" id="mask0_5817_4651" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5817_4651)">
            <path d={svgPathsAttachment.p2bb39d70} fill="var(--fill-0, white)" id="cancel_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FileChip({ file, onRemove }: { file: AttachedFile; onRemove: () => void }) {
  const displayName = file.name.length > 15 ? file.name.substring(0, 12) + '...' : file.name;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="bg-[#cfdeff] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[28px] shrink-0"
    >
      <AttachFileIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-white">
        {displayName}
      </p>
      <RemoveFileIcon onClick={onRemove} />
    </motion.div>
  );
}

function FilesAttachedState({ 
  files, 
  onRemove, 
  onAddMore, 
  onSubmit 
}: { 
  files: AttachedFile[]; 
  onRemove: (id: string) => void;
  onAddMore: () => void;
  onSubmit: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col gap-[8px] items-start px-[14px] py-[12px] rounded-[8px]"
    >
      <div aria-hidden="true" className="absolute border border-[#825ed7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      
      {/* Row of file chips */}
      <div className="content-start flex flex-wrap gap-[8px_6px] items-start relative shrink-0 w-full z-10">
        <AnimatePresence>
          {files.map((file) => (
            <FileChip key={file.id} file={file} onRemove={() => onRemove(file.id)} />
          ))}
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full z-10">
        <div 
          onClick={onAddMore}
          className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.34)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative w-full">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1">
                  <AttachFileIcon />
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                <p className="leading-[18px]">Attach Files here</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          onClick={onSubmit}
          className="bg-[rgba(56,116,255,0.4)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.5)] transition-colors"
        >
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[18px]">Submit</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TicketSummaryCard({ 
  description, 
  attachmentCount, 
  onCancel, 
  onCreate 
}: { 
  description: string; 
  attachmentCount: number;
  onCancel: () => void;
  onCreate: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col gap-[8px] items-start px-[14px] py-[12px] rounded-[8px]"
    >
      <div aria-hidden="true" className="absolute border border-[#825ed7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap z-10">
        Ticket Summary
      </p>
      
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap z-10">
        <span className="leading-[18px]">Description : </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[18px]">{description}</span>
      </p>
      
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap z-10">
        <span className="leading-[18px]">Attachments : </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[18px]">
          {attachmentCount} {attachmentCount === 1 ? 'file' : 'files'} added
        </span>
      </p>
      
      {/* Action buttons */}
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full z-10">
        <div 
          onClick={onCancel}
          className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.34)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                <p className="leading-[18px]">Cancel</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          onClick={onCreate}
          className="bg-[rgba(56,116,255,0.4)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] cursor-pointer hover:bg-[rgba(56,116,255,0.5)] transition-colors"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                <p className="leading-[18px]">Create Ticket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RaiseTicketSidebar({ onBack, onClose }: { onBack?: () => void; onClose?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: 'Raise a Ticket',
      subtitle: "I'll help you create a support ticket step by step."
    },
    {
      id: 2,
      type: 'assistant',
      content: "Please describe the issue you're facing in detail."
    }
  ]);
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [issueDescription, setIssueDescription] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Smooth scroll to bottom when new message appears
    if (messagesEndRef.current && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim() || isProcessing) return;

    setIsProcessing(true);

    // Store the issue description
    setIssueDescription(inputValue);

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // After 300ms, show assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: "Got it! 📎 Would you like to attach any files (screenshots, documents, videos)?"
      };
      setMessages(prev => [...prev, assistantMessage]);
      setCurrentStep(2);
      setIsProcessing(false);
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing) {
      handleSendMessage();
    }
  };

  const handleAttach = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newFiles: AttachedFile[] = Array.from(files).map(file => ({
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      size: file.size
    }));

    setAttachedFiles(prev => [...prev, ...newFiles]);
    setCurrentStep(3);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveFile = (fileId: string) => {
    setAttachedFiles(prev => prev.filter(f => f.id !== fileId));
    
    // If no files left, go back to attachment CTA state
    if (attachedFiles.length === 1) {
      setCurrentStep(2);
    }
  };

  const handleSkip = () => {
    setIsProcessing(true);

    // Show skip confirmation
    setTimeout(() => {
      const assistantFinal: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: "All set! Please review your ticket details and submit to create the ticket."
      };
      setMessages(prev => [...prev, assistantFinal]);
      setCurrentStep(4);
      setIsProcessing(false);
    }, 300);
  };

  const handleSubmitAttachments = () => {
    if (attachedFiles.length === 0) return;

    setIsProcessing(true);

    // Add user confirmation message with file list
    const fileListText = attachedFiles.map(f => `• ${f.name}`).join('\n');
    const userConfirmation: Message = {
      id: Date.now(),
      type: 'user',
      content: `Attachments added Successfully\n${fileListText}`,
      fileList: attachedFiles.map(f => f.name)
    };

    setMessages(prev => [...prev, userConfirmation]);

    // After 300ms, show assistant final message
    setTimeout(() => {
      const assistantFinal: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: "All set! Please review your ticket details and submit to create the ticket."
      };
      setMessages(prev => [...prev, assistantFinal]);
      setCurrentStep(4); // Changed from 4 to show the "Create Ticket" state
      setIsProcessing(false);
    }, 300);
  };

  const handleCreateTicket = () => {
    setIsProcessing(true);

    // After 300ms, show ticket creation confirmation
    setTimeout(() => {
      const ticketConfirmation: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: `Your ticket has been created successfully!\n\nTicket ID: #1234\nOur support team will review and prioritize your request.`
      };
      setMessages(prev => [...prev, ticketConfirmation]);
      setCurrentStep(5); // Back to input state
      setIsProcessing(false);
    }, 300);
  };

  const showInputField = currentStep === 1 || currentStep === 5;
  const showAttachmentActions = currentStep === 2;
  const showFilesAttached = currentStep === 3;
  const showCreateTicket = currentStep === 4;

  return (
    <div className="relative size-full overflow-hidden" data-name="Glass" style={{ backgroundImage: "linear-gradient(61.7469deg, rgb(57, 52, 175) 15.358%, rgb(0, 0, 0) 73.273%)" }}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*,video/*,.pdf,.doc,.docx"
      />

      {/* Background gradient glow */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[824.99px] items-center justify-center left-[calc(50%+10.13px)] top-[calc(50%-19.5px)] w-[776.251px] pointer-events-none" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-140.38deg] skew-x-[3.16deg]">
          <div className="h-[584.062px] relative w-[557.116px]">
            <div className="absolute inset-[-5.21%_-5.46%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 617.999 644.945">
                <g filter="url(#filter0_f_5740_4860)" id="Rectangle 39457">
                  <path d={svgPaths.p3061e000} fill="url(#paint0_linear_5740_4860)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="644.945" id="filter0_f_5740_4860" width="617.999" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_5740_4860" stdDeviation="15.2208" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5740_4860" x1="150.243" x2="390.205" y1="522.651" y2="304.456">
                    <stop stopColor="#F4E7DE" />
                    <stop offset="0.31" stopColor="#FFC0FF" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#99C2FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Titlebar - Fixed at top */}
      <ChatSupportTitlebar onBack={onBack} onClose={onClose} />

      {/* Messages Container - Fixed height, scrollable */}
      <div 
        ref={scrollContainerRef}
        className="absolute top-[52px] bottom-[82px] left-0 right-0 overflow-y-auto overflow-x-hidden z-10"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="px-[12px] pt-[24px] pb-[12px] min-h-full flex flex-col">
          <div className="flex flex-col gap-[16px] flex-grow justify-end">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {message.type === 'assistant' ? (
                    <AssistantMessage content={message.content} subtitle={message.subtitle} />
                  ) : (
                    <UserMessage content={message.content} />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Bottom Input/Action Bar - Fixed at bottom */}
      {!showCreateTicket && (
        <div className="absolute bottom-[30px] left-[12px] w-[296px] z-20">
          <AnimatePresence mode="wait">
            {showInputField && (
              <motion.div
                key="input"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-between px-[14px] py-[12px] rounded-[8px]"
              >
                <div aria-hidden="true" className="absolute border border-[#825ed7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <input 
                  type="text" 
                  placeholder="Type your issue..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isProcessing}
                  className="flex-1 bg-transparent border-none outline-none font-['Inter:Regular',sans-serif] text-[14px] text-white placeholder:text-white/60"
                />
                <div 
                  onClick={handleSendMessage}
                  className="bg-white content-stretch flex items-center justify-center leading-[0] p-[6px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity ml-[8px]"
                >
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d="M2.625 14.4375V3.5625L15.5336 9L2.625 14.4375ZM3.75 12.75L12.6375 9L3.75 5.25V8.01919L7.81725 9L3.75 9.98081V12.75Z" fill="#5E62CE" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}

            {showAttachmentActions && (
              <motion.div
                key="actions"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-between px-[14px] py-[12px] rounded-[8px]"
              >
                <div aria-hidden="true" className="absolute border border-[#825ed7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                
                {/* Attach Files Button */}
                <div 
                  onClick={handleAttach}
                  className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.34)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative w-full">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                        <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1">
                          <AttachFileIcon />
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        <p className="leading-[18px]">Attach Files here</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skip Button */}
                <div 
                  onClick={handleSkip}
                  className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                >
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                    <p className="leading-[18px]">Skip</p>
                  </div>
                </div>
              </motion.div>
            )}

            {showFilesAttached && (
              <FilesAttachedState
                key="files"
                files={attachedFiles}
                onRemove={handleRemoveFile}
                onAddMore={handleAttach}
                onSubmit={handleSubmitAttachments}
              />
            )}
          </AnimatePresence>
        </div>
      )}

      {showCreateTicket && (
        <div className="absolute bottom-[30px] left-[12px] w-[296px] z-20">
          <TicketSummaryCard
            description={issueDescription}
            attachmentCount={attachedFiles.length}
            onCancel={() => setCurrentStep(3)}
            onCreate={handleCreateTicket}
          />
        </div>
      )}
    </div>
  );
}