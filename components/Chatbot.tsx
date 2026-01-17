import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Loader2 } from 'lucide-react';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi, I'm Jenny. I hate seeing people waste money on bad renovations. Let me show you how to see the future before you build it. What is on your mind?" }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!question.trim()) return;

        const newMessages = [...messages, { role: 'user', content: question } as Message];
        setMessages(newMessages);
        setQuestion('');
        setIsLoading(true);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": window.location.href,
                    "X-Title": "BlessSpace"
                },
                signal: controller.signal,
                body: JSON.stringify({
                    "model": "deepseek/deepseek-chat",
                    "messages": [
                        {
                            "role": "system",
                            "content": "You are Jenny, the Principal Designer at BlessSpace. You are passionate, professional, and slightly obsessed with precision. You want to save homeowners from 'renovation nightmares' by selling them 3D visualization packages. Be friendly but authoritative. Do NOT use emojis. Do NOT use markdown formatting like asterisks (*) or bolding. Keep the text clean, professional, and plain."
                        },
                        ...newMessages
                    ]
                })
            });

            clearTimeout(timeoutId);

            const data = await response.json();
            if (data.choices && data.choices[0]?.message?.content) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
            } else {
                console.warn('API Error:', data);
                setMessages(prev => [...prev, { role: 'assistant', content: "I am having trouble connecting right now. Please try asking again." }]);
            }
        } catch (error: any) {
            console.error(error);
            let errorMessage = "Connection error. Please try again.";
            if (error.name === 'AbortError') {
                errorMessage = "The connection timed out. Please try again.";
            }
            setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-8 right-8 z-50 h-16 bg-stone-900/90 backdrop-blur-md border border-brand/50 text-stone-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center gap-3 pr-6 pl-2 cursor-pointer hover:bg-stone-800 transition-all group"
                    >
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-stone-800">
                                <img src="/jenny-avatar.webp" alt="Jenny" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-1 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-stone-900"></div>
                        </div>
                        <div className="text-left">
                            <span className="block font-serif font-bold text-lg leading-none group-hover:text-brand transition-colors">Ask Jenny</span>
                            <span className="text-[10px] text-brand uppercase tracking-widest leading-none">Online</span>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-stone-900/90 backdrop-blur-2xl border border-stone-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-stone-900/50 backdrop-blur-md">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-stone-800">
                                        <img src="/jenny-avatar.webp" alt="Jenny" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-stone-900"></div>
                                </div>
                                <div>
                                    <h3 className="text-stone-100 font-serif font-medium text-lg">Ask Jenny</h3>
                                    <p className="text-[10px] text-brand uppercase tracking-widest font-bold flex items-center gap-1">
                                        <span className="w-1 h-1 bg-brand rounded-full animate-pulse" />
                                        Principal Designer
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-stone-500 hover:text-white transition-colors p-2 hover:bg-stone-800 rounded-full"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar" ref={scrollRef}>
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-1">
                                            <img src="/jenny-avatar.webp" alt="Jenny" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                            ? 'bg-brand text-stone-900 rounded-br-none font-medium'
                                            : 'bg-stone-800/80 text-stone-100 rounded-bl-none border border-stone-700/50'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3 justify-start">
                                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-1">
                                        <img src="/jenny-avatar.webp" alt="Jenny" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-stone-800/80 border border-stone-700/50 p-4 rounded-2xl rounded-bl-none flex gap-2 items-center text-stone-400">
                                        <Loader2 size={16} className="animate-spin text-brand" />
                                        <span className="text-xs">Jenny is typing...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-stone-900/80 border-t border-stone-800 backdrop-blur-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ask Jenny anything..."
                                    className="w-full bg-stone-950/50 border border-stone-800 rounded-xl py-4 pl-4 pr-12 text-sm text-stone-200 focus:outline-none focus:border-brand/50 transition-colors placeholder:text-stone-600"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !question.trim()}
                                    className="absolute right-2 top-2 p-2 bg-brand text-stone-900 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <div className="mt-2 text-center flex justify-center items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
                                <Sparkles size={8} className="text-brand" />
                                <p className="text-[10px] text-stone-500">DeepSeek Intelligence</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
