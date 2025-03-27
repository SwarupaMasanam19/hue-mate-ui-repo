import React from 'react';

const ChatbotButton = ({ onClick }) => {
  return (
    <button 
      className="chatbot-button"
      onClick={onClick}
      aria-label="Open HueMate Assistant"
    >
      <div className="w-full h-full flex items-center justify-center relative">
        {/* Circular gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full">
          {/* Circular gradient border with color swatches */}
          <div 
            className="absolute inset-0 rounded-full" 
            style={{ 
              background: 'conic-gradient(from 0deg, #F59E0B, #F97316, #EAB308, #A3E635, #10B981, #0EA5E9, #8B5CF6, #EC4899, #F59E0B)', 
              opacity: 0.6,
              transform: 'scale(1.05)'
            }}
          ></div>
        </div>
        
        {/* HueMate Logo and Content */}
        <div className="z-10 flex flex-col items-center">
          {/* Brain icon with colored nodes */}
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C70 85 85 70 85 50C85 30 70 15 50 15Z" stroke="white" strokeWidth="2" />
            <path d="M35 40C38 35 45 30 50 30C55 30 62 35 65 40C70 45 70 55 65 60C62 65 55 70 50 70C45 70 38 65 35 60C30 55 30 45 35 40Z" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="40" r="3" fill="#FF4DA6" />
            <circle cx="40" cy="50" r="3" fill="#4DA6FF" />
            <circle cx="60" cy="50" r="3" fill="#FFD54D" />
          </svg>
          <div className="text-white text-xs font-bold mt-1">HueMate</div>
        </div>
      </div>
    </button>
  );
};

export default ChatbotButton;