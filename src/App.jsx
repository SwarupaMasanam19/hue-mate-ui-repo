import React from 'react';
import ChatbotButton from './components/ChatbotButton';
import ChatbotContainer from './components/ChatbotContainer';
import { useChatbot } from './context/ChatbotContext';

function App() {
  const { isOpen, toggleChatbot } = useChatbot();

  return (
    <div className="App">
      <ChatbotButton onClick={toggleChatbot} />
      <ChatbotContainer isOpen={isOpen} />
    </div>
  );
}

export default App;