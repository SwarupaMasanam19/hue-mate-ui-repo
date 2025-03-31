import React, { useState, useEffect } from 'react';

const ChatbotButton = ({ onClick, isHomePage = true }) => {
  // If you're not using react-router-dom, you can pass isHomePage as a prop
  // from the parent component or implement a simpler check

  return (
    <button 
      className={`chatbot-button ${isHomePage ? 'pulse-animation' : ''}`}
      onClick={onClick}
      aria-label="Open HueMate Assistant"
    >
      <div className="chatbot-button-inner">
        {/* Transparent background for the inner button */}
        <div className="logo-container">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C70 85 85 70 85 50C85 30 70 15 50 15Z" stroke="white" strokeWidth="2" />
            <path d="M35 40C38 35 45 30 50 30C55 30 62 35 65 40C70 45 70 55 65 60C62 65 55 70 50 70C45 70 38 65 35 60C30 55 30 45 35 40Z" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="40" r="3" fill="#FF4DA6" />
            <circle cx="40" cy="50" r="3" fill="#4DA6FF" />
            <circle cx="60" cy="50" r="3" fill="#FFD54D" />
          </svg>
          <div className="logo-text">HueMate</div>
        </div>
      </div>
    </button>
  );
};

export default ChatbotButton;