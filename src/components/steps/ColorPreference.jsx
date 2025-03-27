import React from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ColorPreference = () => {
  const { formData, goToNextStep } = useChatbot();
  const { skinTone } = formData;

  const colorOptions = [
    { 
      id: 'warm', 
      label: 'Warm Colors', 
      description: 'Reds, oranges, yellows, golden tones',
      gradient: 'bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400',
      recommended: skinTone === 'warm' || skinTone === 'deep'
    },
    { 
      id: 'cool', 
      label: 'Cool Colors', 
      description: 'Blues, purples, emerald greens, blue-based reds',
      gradient: 'bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400',
      recommended: skinTone === 'cool' || skinTone === 'olive'
    },
    { 
      id: 'neutral', 
      label: 'Neutral Colors', 
      description: 'Beiges, taupes, grays, navy, white, black',
      gradient: 'bg-gradient-to-r from-gray-400 via-stone-300 to-zinc-400',
      recommended: skinTone === 'neutral'
    }
  ];

  const handleSelect = (colorPreference) => {
    goToNextStep('colorPreference', { colorPreference });
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Color Preferences
      </h2>
      
      <p className="text-lg mb-8">
        Select color palette that you prefer for your outfit.
        {skinTone && (
          <span className="block mt-2 text-sm">
            Based on your skin tone, we recommend <span className="font-medium">{colorOptions.find(o => o.recommended)?.label || 'a balanced mix of colors'}</span>.
          </span>
        )}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-3xl">
        {colorOptions.map((option) => (
          <Card 
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className="flex flex-col items-center py-6 relative overflow-hidden"
          >
            <div className={`absolute inset-0 opacity-20 ${option.gradient}`}></div>
            
            <div className="z-10">
              <div className={`h-16 w-40 rounded-lg mb-4 shadow-lg ${option.gradient}`}></div>
              <h3 className="text-lg font-semibold mb-1">{option.label}</h3>
              <p className="text-sm text-gray-300">{option.description}</p>
              
              {option.recommended && (
                <div className="mt-3 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full inline-block">
                  Recommended for your skin tone
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ColorPreference;