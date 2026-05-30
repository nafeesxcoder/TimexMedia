"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Default prices (fallback if JSON fails)
const defaultPrices = {
  photography: "$199 - $449",
  video: "$399 - $699",
  drone: "$249 - $449",
  threeD: "$349 - $549",
};

// Booking URL
const BOOKING_URL = "/book-now";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome1",
      role: "assistant",
      content: "✨ Namaste! I'm TimeX, your AI assistant for Timex Media.",
      timestamp: new Date(),
    },
    {
      id: "welcome2",
      role: "assistant",
      content: `💡 I can help with:\n📸 Photography (${defaultPrices.photography})\n🎥 Video (${defaultPrices.video})\n🚁 Drone (${defaultPrices.drone})\n🏠 3D Tours (${defaultPrices.threeD})\n\n📅 **Ready to book?** Click below!\n\nWhat would you like to know?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!hasAutoOpened && !isOpen && showCard) {
      const timer = setTimeout(() => {
        setShowCard(true);
        setHasAutoOpened(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened, isOpen, showCard]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply || getFallbackResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: getFallbackResponse(input),
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (message: string): string => {
    const msg = message.toLowerCase();

    if (msg.includes("book") || msg.includes("schedule") || msg.includes("appointment") || 
        msg.includes("booking") || msg.includes("confirm") || msg.includes("shoot") ||
        msg.includes("किंग") || msg.includes("बुकिंग") || msg.includes("book now") ||
        msg.includes("karo") || msg.includes("karna") || msg.includes("order")) {
      return `📅 **Book a Shoot with Timex Media**

Please fill out our online booking form below:

🔘 **Click the "Book Now" button below to get started!**

The form includes:
• Property details
• Service selection  
• Scheduling
• Contact information

📞 Need help? Call us: +1 (512) 555-0123
✉️ Email: info@timexmedia.com`;
    }

    if (msg.includes("photo") || msg.includes("photography")) {
      return `📸 **Photography Packages:**
• Basic: $199 (20 photos, 2 bedrooms)
• Standard: $299 (35 photos + floor plan)
• Premium: $449 (50+ photos + virtual staging)

📅 **Ready to book?** Click the Book Now button above!`;
    }

    if (msg.includes("drone") || msg.includes("aerial")) {
      return `🚁 **Drone Services:**
• Basic Aerial: $249 (10 photos)
• Full Property: $449 (25+ photos + video clips)

📅 **Book here using the Book Now button!**`;
    }

    if (msg.includes("video") || msg.includes("videography")) {
      return `🎥 **Video Packages:**
• Basic: $399 (60-sec walkthrough)
• Premium: $699 (2-3 min + drone + cinematic)

📅 **Book your video shoot - Click Book Now!**`;
    }

    if (msg.includes("3d") || msg.includes("virtual") || msg.includes("matterport")) {
      return `🏠 **3D Virtual Tours:**
• Standard: $349 (6 months hosting)
• Premium: $549 (4K + 12 months hosting)

📅 **Book your Matterport tour using the button above!**`;
    }

    if (msg.includes("price") || msg.includes("cost") || msg.includes("kitne") || msg.includes("rate")) {
      return `💰 **Our Pricing:**
• Photography: $199+
• Video: $399+
• Drone: $249+
• 3D Tours: $349+

📅 **Ready to book?** Click the Book Now button!`;
    }

    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey") || msg.includes("namaste")) {
      return `👋 Namaste! Welcome to Timex Media!

**Services we offer:**
📸 Photography ($199+)
🎥 Video ($399+)
🚁 Drone ($249+)
🏠 3D Tours ($349+)

📅 **Click the Book Now button below to schedule your shoot!**

What would you like to know about our services?`;
    }

    return `✨ Thanks for reaching out to Timex Media!

**Our Services:**
• Photography ($199+)
• Video ($399+)
• Drone ($249+)
• 3D Tours ($349+)

📅 **Click the Book Now button to get started!**

What can I help you with today?`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const closeCard = () => {
    setShowCard(false);
  };

  const openBookingPage = () => {
    window.location.href = BOOKING_URL;
  };

  return (
    <>
      {/* Popup Card */}
      {!isOpen && showCard && (
        <div className="fixed bottom-32 right-5 w-72 bg-white rounded-xl shadow-2xl z-[9998] overflow-hidden animate-slide-up border border-gray-200">
          <div className="bg-black text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              <span className="font-semibold text-sm">Customer Support</span>
            </div>
            <button onClick={closeCard} className="text-white/70 hover:text-white text-lg">
              ✕
            </button>
          </div>
          <div className="p-4 bg-white">
            <p className="text-green-600 text-xs font-medium mb-1">We usually reply in 5 mins</p>
            <p className="text-gray-500 text-xs mb-3">Support online 24/7</p>
            <p className="text-gray-700 text-sm mb-4">
              Need help with real estate photography, video, drone, or 3D tours? Let's chat!
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-black text-white py-2 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Start Chat <span>💬</span>
            </button>
          </div>
        </div>
      )}

      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-28 right-5 bg-black text-white rounded-full p-3 shadow-2xl hover:bg-gray-800 transition-all duration-300 z-[9999] flex items-center gap-2 group animate-bounce-in"
        >
          <span className="text-xl group-hover:scale-110 transition-transform duration-200">💬</span>
          <span className="hidden group-hover:inline text-sm font-medium whitespace-nowrap">
            Customer Support
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 h-[500px] bg-white rounded-xl shadow-2xl flex flex-col z-[9999] border border-gray-200 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-black text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">✨</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Customer Support</h3>
                <p className="text-[10px] opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online • Reply in 5 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-lg"
            >
              ✕
            </button>
          </div>

          {/* Animated Booking Button with Arrow - PURPLE VERSION */}
          <div className="px-3 pt-3 relative">
            {/* Animated Arrow pointing to button */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 animate-bounce-arrow">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Main Book Now Button - Purple Gradient */}
            <button
              onClick={openBookingPage}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-xl text-sm font-bold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-glow-purple shadow-lg"
            >
              <span className="text-lg">📅</span>
              BOOK NOW - FILL ORDER FORM
              <span className="text-lg animate-slide-right">→</span>
            </button>
            
            {/* Shine effect on button */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 mt-2">
            {messages.map((msg, idx) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-1.5 text-xs ${
                    msg.role === "user"
                      ? "bg-black text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.content.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "mt-0.5" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white rounded-xl rounded-bl-none px-3 py-2 shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-typing-dot" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-typing-dot" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-typing-dot" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-purple-500 transition-colors bg-white text-gray-800 placeholder-gray-400"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-purple-600 text-white rounded-lg px-3 py-1.5 text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
            >
              Send
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-[9px] text-gray-400 py-1.5 bg-white border-t">
            ✨ AI Assistant • 
            <button onClick={openBookingPage} className="text-purple-600 underline ml-1 font-medium">
              Book Now
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        
        .animate-typing-dot {
          animation: typing-dot 0.8s infinite;
        }
        
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        
        .animate-pulse-glow-purple {
          animation: pulse-glow-purple 2s infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 1s ease-in-out infinite;
        }
        
        .animate-bounce-arrow {
          animation: bounce-arrow 1s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 2.5s infinite;
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        
        @keyframes typing-dot {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes pulse-glow-purple {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.5);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.8);
            transform: scale(1.02);
          }
        }
        
        @keyframes slide-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        
        @keyframes bounce-arrow {
          0%, 100% { transform: translate(-50%, 0); opacity: 0.7; }
          50% { transform: translate(-50%, 8px); opacity: 1; }
        }
        
        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}

export default ChatBot;