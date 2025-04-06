import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const StyleSelection = () => {
  const { goToNextStep } = useChatbot();
  const [selectedStyle, setSelectedStyle] = useState(null);

  const styleOptions = [
    { id: 'casual', label: 'Casual', icon: '👕', description: 'Relaxed, everyday outfits' },
    { id: 'formal', label: 'Formal', icon: '👔', description: 'Sophisticated and elegant' },
    { id: 'trendy', label: 'Trendy', icon: '🔥', description: 'Latest fashion trends' },
    { id: 'classic', label: 'Classic', icon: '✨', description: 'Timeless, elegant pieces' },
    { id: 'bohemian', label: 'Bohemian', icon: '🌸', description: 'Free-spirited and artistic' },
    { id: 'minimal', label: 'Minimalist', icon: '⚪', description: 'Simple, clean designs' }
  ];

  const handleSelect = (style) => {
    setSelectedStyle(style);
  };

  const handleContinue = () => {
    if (selectedStyle) {
      goToNextStep('style', { style: selectedStyle });
    }
  };

  return (
    <div className="body-type-screen">
      <h2 className="gradient-text">Choose Your Style</h2>
      <p>What style of clothing do you prefer?</p>
      
      <div className="body-types-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {styleOptions.map((option) => (
          <div 
            key={option.id}
            className={`body-type-card ${selectedStyle === option.id ? 'selected' : ''}`}
            onClick={() => handleSelect(option.id)}
          >
            <div className="body-type-icon" style={{ fontSize: '28px' }}>{option.icon}</div>
            <p>{option.label}</p>
            <p className="text-sm text-gray-300 text-center">{option.description}</p>
          </div>
        ))}
      </div>
      
      <div className="action-buttons">
        <Button 
          primary 
          onClick={handleContinue}
          disabled={!selectedStyle}
        >
          Continue
        </Button>
        
        <Button 
          secondary 
          onClick={() => goToNextStep('occasion')}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default StyleSelection;