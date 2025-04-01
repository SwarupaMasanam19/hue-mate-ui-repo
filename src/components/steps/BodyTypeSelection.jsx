import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const BodyTypeSelection = () => {
  const { goToNextStep } = useChatbot();
  const [bodyType, setBodyType] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  // Body type options
  const bodyTypeOptions = [
    { id: 'hourglass', label: 'Hourglass', icon: '⌛', description: 'Balanced bust and hips with defined waist' },
    { id: 'pear', label: 'Pear', icon: '🍐', description: 'Hips wider than shoulders' },
    { id: 'rectangle', label: 'Rectangle', icon: '▭', description: 'Straight silhouette with little waist definition' },
    { id: 'apple', label: 'Apple', icon: '🍎', description: 'Fuller midsection with slender legs' },
    { id: 'inverted-triangle', label: 'Inverted Triangle', icon: '🔻', description: 'Shoulders wider than hips' }
  ];

  const handleSelectBodyType = (type) => {
    setBodyType(type);
  };

  const handleWatchVideo = () => {
    // Open video in a new tab instead of inline
    window.open('https://www.youtube.com/watch?v=wV9a_ERkXlE', '_blank');
  };

  const handleOpenCalculator = () => {
    // Toggle the calculator display
    setShowCalculator(true);
  };

  const handleContinue = () => {
    if (bodyType) {
      goToNextStep('bodyType', { bodyType });
    }
  };

  const closeCalculator = () => {
    setShowCalculator(false);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Select Your Body Type
      </h2>
      
      <p className="text-lg mb-8">
        Knowing your body type helps us recommend clothes that flatter your natural shape.
      </p>
      
      {/* Body type selection grid - horizontal layout */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl mb-8">
        {bodyTypeOptions.map((option) => (
          <div
            key={option.id}
            className={`flex flex-col items-center py-4 px-3 rounded-lg cursor-pointer transition-all ${
              bodyType === option.id 
                ? 'bg-amber-500/20 border-2 border-amber-500' 
                : 'bg-white/5 hover:bg-white/10 border-2 border-transparent hover:-translate-y-1'
            }`}
            onClick={() => handleSelectBodyType(option.id)}
          >
            <div className="text-3xl mb-2">{option.icon}</div>
            <h3 className="text-lg font-medium mb-1">{option.label}</h3>
            <p className="text-xs text-white/70">{option.description}</p>
          </div>
        ))}
      </div>

      {/* Helper options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-8">
        <div 
          className="bg-white/5 hover:bg-white/10 p-5 rounded-lg flex flex-col items-center cursor-pointer transition-all hover:-translate-y-1"
          onClick={handleWatchVideo}
        >
          <div className="text-2xl mb-2">📹</div>
          <h3 className="text-lg font-medium mb-1">Need Help?</h3>
          <p className="text-sm text-white/70 mb-2">Watch our video guide on measuring your body type</p>
          <span className="text-amber-400 text-sm">Watch Video in New Tab</span>
        </div>
        
        <div 
          className="bg-white/5 hover:bg-white/10 p-5 rounded-lg flex flex-col items-center cursor-pointer transition-all hover:-translate-y-1"
          onClick={handleOpenCalculator}
        >
          <div className="text-2xl mb-2">🧮</div>
          <h3 className="text-lg font-medium mb-1">Not Sure?</h3>
          <p className="text-sm text-white/70 mb-2">Use our calculator to determine your body type</p>
          <span className="text-amber-400 text-sm">Open Calculator</span>
        </div>
      </div>

      {/* Continue button */}
      <Button
        primary
        onClick={handleContinue}
        disabled={!bodyType}
      >
        Continue
      </Button>

      {/* Modal for calculator - would open in a new "page" */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 rounded-2xl p-6 max-w-md w-full shadow-xl border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Body Shape Calculator</h2>
              <button 
                onClick={closeCalculator}
                className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full"
              >
                ✕
              </button>
            </div>
            
            <p className="text-white/70 mb-6">Enter your measurements to determine your body type</p>
            
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <label className="block text-white/80 font-medium">Bust (inches)</label>
                <input 
                  type="number"
                  placeholder="Measure around the fullest part"
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-white/80 font-medium">Waist (inches)</label>
                <input 
                  type="number"
                  placeholder="Measure around the narrowest part"
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-white/80 font-medium">Hips (inches)</label>
                <input 
                  type="number"
                  placeholder="Measure around the widest part"
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white"
                />
              </div>
            </div>
            
            <button
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium"
            >
              Calculate My Body Shape
            </button>
            
            <div className="flex justify-center mt-4">
              <button 
                onClick={handleWatchVideo} 
                className="text-amber-400 hover:text-amber-300 text-sm"
              >
                Need help measuring? Watch our video guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyTypeSelection;