import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import OptionCard from '../ui/OptionCard';
import Button from '../ui/Button';

const OccasionSelection = () => {
  const { goToNextStep } = useChatbot();
  const [customOccasion, setCustomOccasion] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const occasionOptions = [
    { id: 'casual', label: 'Casual', icon: '🏡' },
    { id: 'work', label: 'Work', icon: '💼' },
    { id: 'formal', label: 'Formal Event', icon: '✨' },
    { id: 'date', label: 'Date Night', icon: '❤️' },
    { id: 'party', label: 'Party', icon: '🎉' },
    { id: 'vacation', label: 'Vacation', icon: '🏖️' },
    { id: 'wedding', label: 'Wedding', icon: '💍' },
    { id: 'workout', label: 'Workout', icon: '🏋️' },
    { id: 'custom', label: 'Other Occasion', icon: '✏️' }
  ];

  const handleSelect = (occasion) => {
    if (occasion === 'custom') {
      setShowCustomInput(true);
    } else {
      goToNextStep('occasion', { occasion });
    }
  };

  const handleCustomSubmit = () => {
    if (customOccasion.trim()) {
      goToNextStep('occasion', { occasion: customOccasion.trim() });
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        What's the Occasion?
      </h2>
      
      <p className="text-lg mb-8">
        Select an occasion to help us recommend the perfect outfit.
      </p>
      
      {!showCustomInput ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
          {occasionOptions.map((option) => (
            <OptionCard
              key={option.id}
              label={option.label}
              icon={option.icon}
              onClick={() => handleSelect(option.id)}
              size="medium"
            />
          ))}
        </div>
      ) : (
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6">
            <label htmlFor="custom-occasion" className="block text-left mb-2 font-medium">
              Tell us about your occasion
            </label>
            <input
              id="custom-occasion"
              type="text"
              value={customOccasion}
              onChange={(e) => setCustomOccasion(e.target.value)}
              placeholder="e.g., Beach Wedding, Job Interview, etc."
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex space-x-4">
            <Button
              secondary
              onClick={() => setShowCustomInput(false)}
            >
              Back
            </Button>
            <Button
              primary
              onClick={handleCustomSubmit}
              disabled={!customOccasion.trim()}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OccasionSelection;