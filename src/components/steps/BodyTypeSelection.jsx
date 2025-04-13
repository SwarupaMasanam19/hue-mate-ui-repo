// src/components/steps/BodyTypeSelection.jsx - Updated
import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';
import BackButton from '../ui/BackButton';
import { LayoutTemplate, RectangleHorizontal, CircleDot, Calculator, Youtube } from 'lucide-react';

const BodyTypeSelection = () => {
  const { goToNextStep, goToStep } = useChatbot();
  const [selectedBodyType, setSelectedBodyType] = useState(null);

  const handleCalculatorOpen = () => {
    document.dispatchEvent(new CustomEvent('openCalculator'));
  };

  const handleVideoOpen = () => {
    document.dispatchEvent(new CustomEvent('openVideo'));
  };
  
  const bodyTypeOptions = [
    {
      id: 'hourglass',
      label: 'Hourglass',
      icon: <LayoutTemplate size={48} color="#f8fafc" />,
      description: 'Balanced proportions with a defined waist.'
    },
    {
      id: 'pear',
      label: 'Pear',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3v18l6-6 6 6V3" />
          <path d="M12 12c-2 0-3-2-2-4 1-2 3-2 4 0 1 2 0 4-2 4z" />
        </svg>
      ),
      description: 'Wider hips than shoulders, defined waist.'
    },
    {
      id: 'rectangle',
      label: 'Rectangle',
      icon: <RectangleHorizontal size={48} color="#f8fafc" />,
      description: 'Shoulders, waist, and hips are relatively aligned.'
    },
    {
      id: 'apple',
      label: 'Apple',
      icon: <CircleDot size={48} color="#f8fafc" />,
      description: 'Fuller midsection with slimmer legs and hips.'
    }
  ];

  const handleSelectBodyType = (type) => {
    setSelectedBodyType(type);
  };

  const handleContinue = () => {
    if (selectedBodyType) {
      goToNextStep('bodyType', { bodyType: `${selectedBodyType}-${gender || 'female'}` });
    }
  };

  const handleOpenCalculator = () => {
    document.dispatchEvent(new CustomEvent('openCalculator'));
  };

  const handleOpenVideo = () => {
    document.dispatchEvent(new CustomEvent('openVideo'));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <BackButton to="gender" className="mr-3" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
          Select Your Body Type
        </h2>
      </div>
      
      <p className="text-center text-lg mb-8">
        This helps us recommend clothes that flatter your natural shape.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {bodyTypeOptions.map((option) => (
          <div
            key={option.id}
            className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 transform hover:bg-white/10 hover:-translate-y-1 ${
              selectedBodyType === option.id 
                ? 'ring-2 ring-amber-500 bg-amber-500/10 relative' 
                : ''
            }`}
            onClick={() => handleSelectBodyType(option.id)}
          >
            {selectedBodyType === option.id && (
              <div className="absolute top-2 right-2 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-xs text-white">
                ✓
              </div>
            )}
            <div className="mb-4">{option.icon}</div>
            <h3 className="font-bold mb-2">{option.label}</h3>
            <p className="text-sm text-white/70">{option.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div 
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center cursor-pointer hover:bg-white/10 transition-all duration-300"
          onClick={handleOpenCalculator}
        >
          <Calculator size={28} color="#f59e0b" className="mb-3" />
          <h3 className="font-bold mb-1">Don't know your body shape?</h3>
          <p className="text-sm text-amber-400">Use our calculator</p>
        </div>

        <div 
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center cursor-pointer hover:bg-white/10 transition-all duration-300"
          onClick={handleOpenVideo}
        >
          <Youtube size={28} color="#f59e0b" className="mb-3" />
          <h3 className="font-bold mb-1">Learn how to measure</h3>
          <p className="text-sm text-amber-400">Watch quick video</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Button 
          secondary 
          onClick={() => goToStep('gender')}
        >
          Back
        </Button>
        
        <Button 
          primary 
          onClick={handleContinue} 
          disabled={!selectedBodyType}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BodyTypeSelection;