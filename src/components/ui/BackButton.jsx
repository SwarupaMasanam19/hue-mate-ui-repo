import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useChatbot } from '../../context/ChatbotContext';

const BackButton = ({ to, className = '' }) => {
  const { goToStep, goToPreviousStep } = useChatbot();
  
  const handleBack = () => {
    if (to) {
      goToStep(to);
    } else {
      goToPreviousStep();
    }
  };
  
  return (
    <button 
      onClick={handleBack} 
      className={`back-arrow bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft size={20} />
    </button>
  );
};

export default BackButton;