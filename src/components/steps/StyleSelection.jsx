import React from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import OptionCard from '../ui/OptionCard';

const StyleSelection = () => {
  const { goToNextStep } = useChatbot();

  const styleOptions = [
    { id: 'casual', label: 'Casual', icon: '👕', description: 'Relaxed, everyday outfits' },
    { id: 'formal', label: 'Formal', icon: '👔', description: 'Sophisticated and elegant' },
    { id: 'trendy', label: 'Trendy', icon: '🔥', description: 'Latest fashion trends' },
    { id: 'classic', label: 'Classic', icon: '✨', description: 'Timeless, elegant pieces' },
    { id: 'bohemian', label: 'Bohemian', icon: '🌸', description: 'Free-spirited and artistic' },
    { id: 'minimal', label: 'Minimalist', icon: '⚪', description: 'Simple, clean designs' }
  ];

  const handleSelect = (style) => {
    goToNextStep('style', { style });
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Choose Your Style
      </h2>
      
      <p className="text-lg mb-8">
        What style of clothing do you prefer?
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
        {styleOptions.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            icon={option.icon}
            description={option.description}
            onClick={() => handleSelect(option.id)}
            size="medium"
          />
        ))}
      </div>
    </div>
  );
};

export default StyleSelection;