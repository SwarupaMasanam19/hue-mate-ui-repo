import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const SeasonSelection = () => {
  const { goToNextStep } = useChatbot();
  const [selectedSeason, setSelectedSeason] = useState(null);

  const seasonOptions = [
    { id: 'spring', label: 'Spring', icon: '🌱', description: 'Light, breathable clothing' },
    { id: 'summer', label: 'Summer', icon: '☀️', description: 'Hot weather clothing' },
    { id: 'fall', label: 'Fall/Autumn', icon: '🍂', description: 'Layered, warm clothing' },
    { id: 'winter', label: 'Winter', icon: '❄️', description: 'Cold weather outfits' },
    { id: 'all', label: 'All Seasons', icon: '🔄', description: 'Versatile outfits for any season' }
  ];

  const handleSelect = (season) => {
    setSelectedSeason(season);
  };

  const handleContinue = () => {
    if (selectedSeason) {
      goToNextStep('season', { season: selectedSeason });
    }
  };

  return (
    <div className="season-selection-screen">
      <h2 className="gradient-text">Select a Season</h2>
      <p>What season are you shopping for?</p>
      
      <div className="season-options-container">
        {seasonOptions.map((option) => (
          <div 
            key={option.id}
            className={`season-option-card ${selectedSeason === option.id ? 'selected' : ''}`}
            onClick={() => handleSelect(option.id)}
          >
            <div className="season-option-icon" style={{ fontSize: '28px' }}>{option.icon}</div>
            <p>{option.label}</p>
            <p className="text-sm text-gray-300 text-center">{option.description}</p>
          </div>
        ))}
      </div>
      
      <div className="action-buttons">
        <Button 
          primary 
          onClick={handleContinue}
          disabled={!selectedSeason}
        >
          Continue
        </Button>
        
        <Button 
          secondary 
          onClick={() => goToNextStep('style')}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default SeasonSelection;