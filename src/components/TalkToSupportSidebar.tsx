import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-luzgdyuey3';
import personSvgPaths from '../imports/svg-hr12wpbfvv';
import imgAsset12 from 'figma:asset/23ede0e5e2b2a7e8a2f17c11a0dca8fef11cbd46.png';

interface ChatMessage {
  id: number;
  type: 'user' | 'assistant' | 'connecting' | 'agent';
  content: string;
  agentName?: string;
}

function Back({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Back" 
      onClick={onClick}
    >
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
    <div 
      className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="close" 
      onClick={onClick}
    >
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
          <p className="leading-[20px]">Talk to support</p>
        </div>
      </div>
      <Close onClick={onClose} />
    </div>
  );
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

function PersonLogo() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0" data-name="Logo">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group 42083">
            <circle cx="12" cy="12" fill="var(--fill-0, #3874FF)" id="Ellipse 2" r="12" />
            <path d={personSvgPaths.pee6abb0} fill="var(--fill-0, white)" id="person" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconSkeleton() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon Skeleton 10">
          <mask height="18" id="mask0_5740_4856" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5740_4856)">
            <path d={svgPaths.p2816c8c0} fill="var(--fill-0, white)" id="file_upload" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="send">
          <mask height="18" id="mask0_5740_4844" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_5740_4844)">
            <path d={svgPaths.p18ec1900} fill="var(--fill-0, #5E62CE)" id="send_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// User Message Component (aligned right)
function UserMessage({ content }: { content: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center w-full">
      <div className="bg-[rgba(255,255,255,0.77)] content-stretch flex min-h-[48px] items-start overflow-clip p-[16px] rounded-[8px] shrink-0" data-name="User Question">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] max-w-[200px] not-italic shrink-0 text-[#050e25] text-[14px]">{content}</p>
      </div>
    </div>
  );
}

// Connecting Message Component
function ConnectingMessage() {
  return (
    <div className="content-stretch flex gap-[4px] items-start w-full">
      <Logo />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px" data-name="Message">
        <div className="bg-[rgba(255,255,255,0.24)] min-h-[50px] relative rounded-[16px] shrink-0 w-full" data-name="Box">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[14px] py-[16px] w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">Connecting....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Assistant Initial Message Component
function AssistantInitialMessage() {
  return (
    <div className="content-stretch flex gap-[4px] items-start w-full">
      <Logo />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px" data-name="Message">
        <div className="bg-[rgba(255,255,255,0.24)] min-h-[122px] relative rounded-[16px] shrink-0 w-full" data-name="Box">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[14px] py-[16px] w-full">
              <div className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[18px] not-italic shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
                <p className="mb-0">{`Thanks for reaching out!   `}</p>
                <p className="mb-0">{`We're connecting you with a support specialist. `}</p>
                <p>We'll reply here as soon as someone is available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Agent Message Component
function AgentMessage({ agentName }: { agentName: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start w-full">
      <PersonLogo />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-end min-h-px min-w-px" data-name="Message">
        <div className="bg-[rgba(255,255,255,0.24)] min-h-[104px] relative rounded-[16px] shrink-0 w-full" data-name="Box">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[14px] py-[16px] w-full">
              <div className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">{`Hi! I'm ${agentName}`}</p>
                <p className="mb-0">&nbsp;</p>
                <p>I'm here to help. How can I assist you today?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TalkToSupportSidebar({ onBack, onClose }: { onBack?: () => void; onClose?: () => void }) {
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll to bottom when new message appears
    if (messagesEndRef.current && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleChatSupportClick = () => {
    setIsChatActive(true);

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now(),
      type: 'user',
      content: 'Chat Support'
    };
    setMessages([userMessage]);

    // After 300ms, add connecting message
    setTimeout(() => {
      const connectingMsg: ChatMessage = {
        id: Date.now() + 1,
        type: 'connecting',
        content: 'Connecting....'
      };
      setMessages(prev => [...prev, connectingMsg]);

      // After 3 seconds, replace connecting with initial assistant message
      setTimeout(() => {
        const assistantMsg: ChatMessage = {
          id: Date.now() + 2,
          type: 'assistant',
          content: "Thanks for reaching out! We're connecting you with a support specialist. We'll reply here as soon as someone is available."
        };
        setMessages(prev => prev.slice(0, -1).concat([assistantMsg]));

        // Immediately add agent message
        setTimeout(() => {
          const agentMsg: ChatMessage = {
            id: Date.now() + 3,
            type: 'agent',
            content: "Hi! I'm Nagaraj. I'm here to help. How can I assist you today?",
            agentName: 'Nagaraj'
          };
          setMessages(prev => [...prev, agentMsg]);
        }, 300);
      }, 3000);
    }, 300);
  };

  return (
    <div className="relative size-full overflow-hidden" data-name="Glass" style={{ backgroundImage: "linear-gradient(61.7469deg, rgb(57, 52, 175) 15.358%, rgb(0, 0, 0) 73.273%)" }}>
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

      {/* Messages/Content Container - Fixed height, scrollable */}
      <div 
        ref={scrollContainerRef}
        className="absolute top-[52px] bottom-[82px] left-0 right-0 overflow-y-auto overflow-x-hidden z-10"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="px-[12px] pt-[24px] pb-[12px] min-h-full flex flex-col">
          {!isChatActive ? (
            /* Initial Cards - Centered */
            <div className="flex flex-col gap-[16px] items-center justify-center flex-grow">
              {/* Support Channel Card */}
              <div className="content-stretch flex gap-[8px] items-start w-[269px]">
                <Logo />
                <div className="bg-[rgba(255,255,255,0.24)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white w-full">Support Channel</p>
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.69)] w-full">Connect with our support team via live chat or phone</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Options Card */}
              <div className="content-stretch flex gap-[8px] items-start w-[269px]">
                <Logo />
                <div className="bg-[rgba(255,255,255,0.24)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[14px] py-[16px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                        {/* Call Button */}
                        <div className="relative rounded-[4px] shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" data-name="Button">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
                              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] whitespace-nowrap">
                                <p className="leading-[18px]">Call us +91 9876543210</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Chat Support Button */}
                        <div 
                          onClick={handleChatSupportClick}
                          className="bg-[rgba(56,116,255,0.1)] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[rgba(56,116,255,0.15)] transition-colors" 
                          data-name="Button"
                        >
                          <div aria-hidden="true" className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
                              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] whitespace-nowrap">
                                <p className="leading-[18px]">Chat Support</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Working Hours */}
                        <div className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white w-full whitespace-pre-wrap">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">{`Monday - Friday `}</p>
                          <p>9.30AM-6.30PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Chat Messages - Bottom aligned */
            <div className="flex flex-col gap-[16px] flex-grow justify-end">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {message.type === 'user' && <UserMessage content={message.content} />}
                    {message.type === 'connecting' && <ConnectingMessage />}
                    {message.type === 'assistant' && <AssistantInitialMessage />}
                    {message.type === 'agent' && <AgentMessage agentName={message.agentName || 'Agent'} />}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Input Field - Fixed at bottom */}
      <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-between left-[12px] px-[14px] py-[12px] rounded-[8px] bottom-[30px] w-[296px] z-20" data-name="Textfield">
        <div aria-hidden="true" className="absolute border border-[#825ed7] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[18px]">Ask me anything</p>
        </div>
        
        {/* Action Buttons */}
        <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0">
          {/* Upload Button */}
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Toolbar Actions">
            <div className="bg-[rgba(56,116,255,0.1)] content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.15)] transition-colors" data-name="Button">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon Left">
                <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons /1/12 px/18 px">
                  <IconSkeleton />
                </div>
              </div>
            </div>
          </div>

          {/* Send Button */}
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <div className="content-stretch flex items-center justify-center relative" data-name="Right Side Controls">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Toolbar Actions">
                  <div className="bg-white content-stretch flex items-center justify-center leading-[0] p-[6px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Button">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Icon Left">
                      <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1" data-name="No. of Icons /1/12 px/18 px">
                        <Send />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
}
