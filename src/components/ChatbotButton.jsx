import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatbotButton = ({ onClick, isHomePage = true }) => {
  return (
    <button 
      className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg z-50 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all flex items-center justify-center ${isHomePage ? 'animate-pulse' : ''}`}
      onClick={onClick}
      aria-label="Open HueMate Assistant"
    >
      <div className="flex flex-col items-center">
        <MessageSquare size={24} color="white" />
        <span className="text-xs text-white mt-1">HueMate</span>
      </div>
    </button>
  );
};

export default ChatbotButton;