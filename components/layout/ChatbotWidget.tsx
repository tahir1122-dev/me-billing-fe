"use client";

import { useState, useEffect, useRef } from "react";

type Message = {
    id: string;
    role: "user" | "bot";
    text: string;
};

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isClient, setIsClient] = useState(false);
    
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial greeting & load from session storage
    useEffect(() => {
        setIsClient(true);
        const storedMessages = sessionStorage.getItem("mebilling-chat-history");
        if (storedMessages) {
            try {
                const parsed = JSON.parse(storedMessages);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed);
                } else {
                    setMessages([{ id: "1", role: "bot", text: "Hello! How can I help you today?" }]);
                }
            } catch {
                setMessages([{ id: "1", role: "bot", text: "Hello! How can I help you today?" }]);
            }
        } else {
            setMessages([
                { id: "1", role: "bot", text: "Hello! How can I help you today?" }
            ]);
        }
    }, []);

    // Save to session storage when messages change
    useEffect(() => {
        if (isClient && messages.length > 0) {
            sessionStorage.setItem("mebilling-chat-history", JSON.stringify(messages));
        }
    }, [messages, isClient]);

    // Auto scroll to bottom
    useEffect(() => {
        if (messagesEndRef.current && isOpen && !isMinimized) {
            // Use setTimeout to ensure DOM has updated before scrolling
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 50);
        }
    }, [messages, isOpen, isMinimized, isLoading]);

    const toggleChat = () => {
        if (isOpen) {
            setIsOpen(false);
            setIsMinimized(false);
        } else {
            setIsOpen(true);
            setIsMinimized(false);
        }
    };

    const handleMinimize = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMinimized(true);
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(false);
        setIsMinimized(false);
    };

    const handleClearChat = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (window.confirm("Are you sure you want to clear the chat history?")) {
            setMessages([{ id: Date.now().toString(), role: "bot", text: "Hello! How can I help you today?" }]);
            sessionStorage.removeItem("mebilling-chat-history");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            text: inputValue.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

            const response = await fetch("https://n8n.insightsol.net/webhook/mebilling-ch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ chatInput: userMessage.text }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.text();
            let botText = "Sorry, I couldn't understand the response.";
            
            if (data) {
                try {
                    const jsonData = JSON.parse(data);
                    if (typeof jsonData === 'string') {
                        botText = jsonData;
                    } else if (jsonData.output) {
                        botText = jsonData.output;
                    } else if (jsonData[0] && jsonData[0].output) {
                        botText = jsonData[0].output;
                    } else if (jsonData.message) {
                        botText = jsonData.message;
                    } else if (jsonData.response) {
                        botText = jsonData.response;
                    } else if (jsonData.chatOutput) {
                        botText = jsonData.chatOutput;
                    } else if (jsonData.text) {
                        botText = jsonData.text;
                    } else {
                        // Fallback, maybe they return an array with text or similar
                        botText = "I received a response, but it's in an unexpected format.";
                        console.log("Chat webhook JSON structure:", jsonData);
                        // try to find first string value
                        const values = Object.values(jsonData);
                        const firstString = values.find(v => typeof v === 'string');
                        if (firstString) botText = firstString as string;
                    }
                } catch {
                    // Plain text response
                    botText = data;
                }
            } else {
                botText = "Sorry, I received an empty response. Please try again.";
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                text: botText,
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error: unknown) {
            console.error("Chat API error:", error);
            const isTimeout = error instanceof Error && error.name === 'AbortError';
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                text: isTimeout 
                    ? "The request timed out. Please try again." 
                    : "Sorry, I'm having trouble connecting to the server right now. Please try again later.",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isClient) return null; // Avoid hydration mismatch

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            <div 
                className={`transition-all duration-300 ease-in-out transform origin-bottom-right ${
                    isOpen && !isMinimized 
                    ? "scale-100 opacity-100 mb-4 pointer-events-auto" 
                    : "scale-95 opacity-0 mb-0 pointer-events-none absolute bottom-0 right-0 h-0 w-0 overflow-hidden"
                } w-[350px] max-w-[calc(100vw-3rem)] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col`}
                style={{ height: '500px', maxHeight: 'calc(100vh - 8rem)' }}
            >
                {/* Header */}
                <div className="bg-[#0C3318] text-white p-4 rounded-t-2xl flex items-center justify-between shadow-sm shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#E8C030] flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C3318" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                <path d="M21 12h-2"></path>
                                <path d="M3 12h2"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold font-outfit text-sm">MeBilling Support</h3>
                            <p className="text-xs text-[#FBF2DC] opacity-90">Online & ready to help</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button 
                            onClick={handleClearChat} 
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#FBF2DC]"
                            aria-label="Clear chat"
                            title="Clear chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                        <button 
                            onClick={handleMinimize} 
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#FBF2DC]"
                            aria-label="Minimize chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                        <button 
                            onClick={handleClose} 
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#FBF2DC]"
                            aria-label="Close chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 bg-[#F7F9F3] scroll-smooth flex flex-col gap-3 min-h-0">
                    {messages.map((msg) => (
                        <div 
                            key={msg.id} 
                            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {msg.role === 'bot' && (
                                <div className="w-6 h-6 rounded-full bg-[#E8C030] flex items-center justify-center mr-2 mt-1 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C3318" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                    </svg>
                                </div>
                            )}
                            <div 
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
                                    msg.role === 'user' 
                                        ? 'bg-[#1A6B3A] text-white rounded-tr-sm shadow-md' 
                                        : 'bg-white text-gray-800 rounded-tl-sm border border-[#E4EAE0] shadow-sm'
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex w-full justify-start">
                            <div className="w-6 h-6 rounded-full bg-[#E8C030] flex items-center justify-center mr-2 mt-1 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C3318" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                </svg>
                            </div>
                            <div className="bg-white text-gray-500 p-3 rounded-2xl rounded-tl-sm border border-[#E4EAE0] shadow-sm flex items-center gap-1.5 h-10">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white border-t border-gray-100 rounded-b-2xl shrink-0">
                    <form 
                        onSubmit={handleSubmit}
                        className="flex items-end gap-2 bg-[#F7F9F3] border border-[#E4EAE0] rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-[#1A6B3A]/30 focus-within:border-[#1A6B3A] transition-all"
                    >
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit(e);
                                }
                            }}
                            placeholder="Type a message..."
                            className="flex-1 max-h-32 min-h-[40px] resize-none bg-transparent border-none focus:ring-0 text-sm px-2 py-2 text-gray-800 placeholder-gray-400"
                            rows={1}
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            className="p-2.5 bg-[#0C3318] text-white rounded-lg hover:bg-[#1A6B3A] transition-colors disabled:opacity-50 disabled:hover:bg-[#0C3318] flex items-center justify-center shrink-0 mb-0.5"
                            aria-label="Send message"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </form>
                    <div className="text-center mt-2">
                        <span className="text-[10px] text-gray-400">Replies generated by AI may be inaccurate.</span>
                    </div>
                </div>
            </div>

            {/* Chat Toggle Button */}
            <button
                onClick={toggleChat}
                className={`group flex items-center justify-center w-14 h-14 bg-[#0C3318] hover:bg-[#1A6B3A] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isOpen && !isMinimized ? 'rotate-90 scale-90 opacity-0 pointer-events-none absolute' : 'rotate-0 scale-100 opacity-100'
                }`}
                aria-label="Open chat"
            >
                {/* Ping animation effect */}
                <span className="absolute inset-0 w-full h-full rounded-full bg-[#1A6B3A] opacity-20 group-hover:animate-ping"></span>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    <path d="M21 12h-2"></path>
                    <path d="M3 12h2"></path>
                </svg>

                {/* Optional notification dot */}
                {(!isOpen || isMinimized) && messages.length > 1 && (
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-[#0C3318] rounded-full"></span>
                )}
            </button>
        </div>
    );
}
