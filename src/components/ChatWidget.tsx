import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [screen, setScreen] = useState<'welcome' | 'form' | 'chat' | 'survey'>('welcome');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hello! Thank you for connecting with Byrne Company. How can we support your retail portfolio objectives today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [surveySelection, setSurveySelection] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Play a beautiful pop sound programmatically using the browser Web Audio API
  const playPopSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(550, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {
      console.warn("Audio Context playback prevented by browser auto-play policies.", e);
    }
  };

  const startConversation = () => {
    playPopSound();
    setScreen('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;
    playPopSound();
    setScreen('chat');
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    playPopSound();
    
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text
    };
    
    setMessages(prev => [...prev, userMsg]);
    setMessageText('');
    setIsTyping(true);

    // Simulate bot response after 1.5 seconds
    setTimeout(() => {
      setIsTyping(false);
      playPopSound();
      
      let botResponse = "Our investments desk has received your brief and will cross-reference our premier retail assets to match your specifications.";
      const textLower = text.toLowerCase();
      
      if (textLower.includes("listings") || textLower.includes("top listings") || textLower.includes("properties")) {
        botResponse = "We currently have premier retail centers like Bridwell Center ($4.2M) and Northwest Junction ($12.4M). Let us know if you want detailed offering memoranda.";
      } else if (textLower.includes("tour") || textLower.includes("schedule")) {
        botResponse = "Excellent. A senior partner will contact you directly to schedule an on-site or virtual property walkthrough.";
      } else if (textLower.includes("cap") || textLower.includes("rates")) {
        botResponse = "Cap rates in high-growth Sunbelt regions have stabilized between 6.2% and 6.8% for premium, grocery-anchored centers.";
      }
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse
      }]);
    }, 1500);
  };

  const handleCloseChat = () => {
    playPopSound();
    setScreen('survey');
  };

  const resetChat = () => {
    playPopSound();
    setMessages([
      { id: "1", sender: "bot", text: "Hello! Thank you for connecting with Byrne Company. How can we support your retail portfolio objectives today?" }
    ]);
    setUserName('');
    setUserEmail('');
    setUserPhone('');
    setSurveySelection('');
    setScreen('welcome');
    setIsOpen(false);
  };

  return (
    <>
      {/* Outer Floating Pill - strict layout */}
      <button
        id="open-chat-widget"
        onClick={() => {
          playPopSound();
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-40 bg-white text-black font-sans tracking-widest uppercase flex items-center justify-center gap-1.5 border border-neutral-200/50"
        style={{
          borderRadius: '999px',
          width: '120px',
          height: '36px',
          fontSize: '10px',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>BYRNE CO.</span>
      </button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgba(255,255,255,0.95)] backdrop-blur-xl flex flex-col justify-between"
          >
            {/* Top Centered Header - Minimal brand logo */}
            <div className="w-full flex flex-col items-center pt-10 pb-4 relative">
              <h1 className="font-cormorant text-2xl tracking-widest font-medium text-black">
                BYRNE COMPANY
              </h1>
              
              {/* Close Button at Header Top Right */}
              <button
                id="close-chat-overlay"
                onClick={handleCloseChat}
                className="absolute top-10 right-8 p-2 text-neutral-500 hover:text-black transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Central Dynamic Screen Holder */}
            <div className="flex-1 max-w-xl w-full mx-auto px-6 flex flex-col justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                
                {/* 1. Welcome Screen */}
                {screen === 'welcome' && (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="flex flex-col items-center text-center space-y-6"
                  >
                    <h2 className="font-cormorant text-4xl font-light text-black">
                      Welcome!
                    </h2>
                    <p className="font-sans text-base text-neutral-600 max-w-sm">
                      Text us. We are available to assist with your portfolio inquiries instantly.
                    </p>
                    <button
                      id="start-conversation-button"
                      onClick={startConversation}
                      className="bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest py-3 px-8 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      START CONVERSATION
                    </button>
                  </motion.div>
                )}

                {/* 2. User Detail Form Screen */}
                {screen === 'form' && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6 w-full"
                  >
                    <div className="text-center">
                      <h2 className="font-cormorant text-3xl font-light text-black">
                        Please enter your details
                      </h2>
                    </div>
                    <form onSubmit={handleFormSubmit} className="space-y-4 max-w-md mx-auto">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full bg-white border border-neutral-200 rounded-full py-3 px-5 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          className="w-full bg-white border border-neutral-200 rounded-full py-3 px-5 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number (Optional)"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          className="w-full bg-white border border-neutral-200 rounded-full py-3 px-5 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest py-3 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                      >
                        ENTER CHAT
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* 3. Real Interactive Chat Screen */}
                {screen === 'chat' && (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-[55vh] w-full"
                  >
                    {/* Message Log */}
                    <div data-lenis-prevent="" className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
                      {messages.map((msg) => {
                        const isUser = msg.sender === 'user';
                        return (
                          <div
                            key={msg.id}
                            className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-2xl py-3 px-4 text-sm leading-relaxed shadow-sm font-sans ${
                                isUser 
                                  ? 'bg-[#F97316] text-white rounded-tr-none' 
                                  : 'bg-white border border-neutral-100 text-black rounded-tl-none'
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        );
                      })}

                      {/* Typing indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-neutral-100 rounded-2xl rounded-tl-none py-3 px-5 shadow-sm">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </span>
                          </div>
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>

                    {/* Quick Ask Suggestion Pills */}
                    <div className="py-3 flex flex-wrap gap-2 justify-center">
                      {[
                        "Top Listings",
                        "Schedule a tour",
                        "Capitalization Rates"
                      ].map((pill) => (
                        <button
                          key={pill}
                          onClick={() => handleSendMessage(pill)}
                          className="bg-white border border-neutral-200 text-black text-xs font-sans font-medium py-1.5 px-3 rounded-full hover:border-black hover:bg-neutral-50 transition-colors cursor-pointer"
                        >
                          {pill}
                        </button>
                      ))}
                    </div>

                    {/* Chat Text Input */}
                    <div className="border-t border-neutral-200/55 pt-3 flex gap-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(messageText)}
                        className="flex-1 bg-white border border-neutral-200 rounded-full py-2.5 px-5 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black"
                      />
                      <button
                        onClick={() => handleSendMessage(messageText)}
                        className="bg-black text-white p-2.5 rounded-full hover:bg-neutral-800 transition-all cursor-pointer flex items-center justify-center"
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* 4. Survey / Closed Screen */}
                {screen === 'survey' && (
                  <motion.div
                    key="survey"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="flex flex-col items-center text-center space-y-6 max-w-md mx-auto"
                  >
                    <h2 className="font-cormorant text-4xl font-light text-black">
                      You have closed the chat
                    </h2>
                    <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                      We value your feedback. Please tell us briefly about your experience:
                    </p>

                    <div className="w-full text-left space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
                      {[
                        "Excellent, immediate responses",
                        "Satisfactory real estate guidance",
                        "Need additional custom portfolio options"
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer select-none py-1 text-sm font-sans text-neutral-700">
                          <input
                            type="radio"
                            name="survey"
                            value={option}
                            checked={surveySelection === option}
                            onChange={(e) => setSurveySelection(e.target.value)}
                            className="w-4 h-4 accent-black"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>

                    <button
                      id="close-chat-completely"
                      onClick={resetChat}
                      className="bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest py-3 px-8 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      SUBMIT &amp; CLOSE
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Bottom Branding - strict layout */}
            <div className="w-full text-center pb-8 pt-4 flex justify-center">
              <a 
                href="https://getgolive.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-sans uppercase tracking-widest hover:underline"
                style={{ fontSize: '12px', color: '#888888', textAlign: 'center', padding: '12px' }}
              >
                Powered by getGoLive.io
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
