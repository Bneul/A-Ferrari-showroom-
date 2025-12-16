import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToConcierge } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Scuderia Dubai. I am Enzo, your personal concierge. How may I assist you with our collection today?', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToConcierge(userMsg.text, history);
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-black/95 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col animate-slide-up rounded-sm overflow-hidden">
          {/* Header */}
          <div className="bg-ferrari-red px-6 py-4 flex justify-between items-center">
            <div>
              <h3 className="font-serif italic text-lg font-bold">Enzo</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/80">AI Concierge</p>
            </div>
            <button onClick={toggleChat} className="text-white hover:opacity-75">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-white/10 text-white rounded-tl-xl rounded-bl-xl rounded-tr-xl' 
                    : 'bg-ferrari-red/10 border border-ferrari-red/20 text-gray-200 rounded-tr-xl rounded-br-xl rounded-tl-xl'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-ferrari-red/10 border border-ferrari-red/20 p-4 rounded-tr-xl rounded-br-xl rounded-tl-xl flex gap-1">
                    <div className="w-2 h-2 bg-ferrari-red rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-ferrari-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-ferrari-red rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about specs, availability..."
                className="flex-1 bg-neutral-900 border border-white/20 px-4 py-2 text-sm text-white focus:outline-none focus:border-ferrari-red transition-colors"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="bg-ferrari-red px-4 py-2 text-white hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={toggleChat}
        className={`${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} transition-all duration-300 bg-ferrari-red hover:bg-red-700 text-white p-4 rounded-full shadow-lg border border-white/10 group`}
      >
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Ask Enzo
        </div>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default AIConcierge;
