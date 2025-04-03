import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChatbotProvider } from './context/ChatbotContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatbotProvider>
      <App />
    </ChatbotProvider>
  </React.StrictMode>
);