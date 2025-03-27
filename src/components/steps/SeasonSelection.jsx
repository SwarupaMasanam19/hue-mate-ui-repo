import React from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import OptionCard from '../ui/OptionCard';

const SeasonSelection = () => {
  const { goToNextStep } = useChatbot();

  const seasonOptions = [
    { id: 'summer', label: 'Summer', icon: '☀️', description: 'Hot weather clothing' },
    { id: 'winter', label: 'Winter', icon: '❄️', description: 'Cold weather outfits' },
    { id: 'spring', label: 'Spring', icon: '🌱', description: 'Light, breathable clothing' },
    { id: 'fall', label: 'Fall/Autumn', icon: '🍂', description: 'Layered, warm clothing' },
    { id: 'all', label: 'All Seasons', icon: '🔄', description: 'Versatile outfits for any season' }
  ];

  const handleSelect = (season) => {
    goToNextStep('season', { season });
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Select a Season
      </h2>
      
      <p className="text-lg mb-8">
        What season are you shopping for?
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
        {seasonOptions.map((option) => (
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

export default SeasonSelection;