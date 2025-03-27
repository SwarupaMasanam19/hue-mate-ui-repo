import React from 'react';
import ChatbotContent from './ChatbotContent';
import { useChatbot } from '../context/ChatbotContext';

const ChatbotContainer = ({ isOpen }) => {
  const { toggleChatbot } = useChatbot();

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mr-3">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C70 85 85 70 85 50C85 30 70 15 50 15Z" stroke="white" strokeWidth="2" />
                  <path d="M35 40C38 35 45 30 50 30C55 30 62 35 65 40C70 45 70 55 65 60C62 65 55 70 50 70C45 70 38 65 35 60C30 55 30 45 35 40Z" stroke="white" strokeWidth="2" />
                  <circle cx="50" cy="40" r="3" fill="#FF4DA6" />
                  <circle cx="40" cy="50" r="3" fill="#4DA6FF" />
                  <circle cx="60" cy="50" r="3" fill="#FFD54D" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold">HueMate</h1>
                <p className="text-sm text-gray-300">Your Perfect Shade, Every Time</p>
              </div>
            </div>
            <button 
              onClick={toggleChatbot}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="chatbot-content">
            <ChatbotContent />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatbotContainer;