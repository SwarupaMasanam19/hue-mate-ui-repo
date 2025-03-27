import React, { useState, useEffect } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const SkinToneAnalysis = () => {
  const { userImage, goToNextStep, formData } = useChatbot();
  const [analyzing, setAnalyzing] = useState(true);
  const { gender } = formData;

  // Simulate skin tone analysis with loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // For demo purposes, we're using these static skin tone results
  // In a real application, this would come from AI analysis
  const skinToneResults = [
    { tone: 'warm', label: 'Warm', colorHex: '#E3B98F', description: 'golden or yellow undertones' },
    { tone: 'cool', label: 'Cool', colorHex: '#D6A186', description: 'pink, red, or bluish undertones' },
    { tone: 'neutral', label: 'Neutral', colorHex: '#D7A989', description: 'balanced undertones' },
    { tone: 'olive', label: 'Olive', colorHex: '#BDAE91', description: 'greenish or greyish undertones' },
    { tone: 'deep', label: 'Deep', colorHex: '#966646', description: 'rich, deep undertones' }
  ];

  // Randomly select a skin tone for demo purposes
  const skinToneResult = skinToneResults[Math.floor(Math.random() * skinToneResults.length)];

  const handleConfirm = () => {
    goToNextStep('skinToneAnalysis', { skinTone: skinToneResult.tone });
  };

  const handleRetake = () => {
    goToNextStep('welcome');
  };

  // Determine compliment based on gender
  const getCompliment = () => {
    if (gender === 'male') return "Hey Hero!";
    if (gender === 'female') return "Hey Gorgeous!";
    return "Hey Superstar!"; // Default or non-binary
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Skin Tone Analysis
      </h2>
      
      {analyzing ? (
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-amber-400 mb-4">
            {userImage && <img src={userImage} alt="User" className="w-full h-full object-cover filter blur-sm" />}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-500 border-solid"></div>
            </div>
          </div>
          <p className="text-lg">Analyzing your skin tone...</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center mb-8 animate-fade-in">
          <div className="w-40 h-40 rounded-full overflow-hidden mr-0 md:mr-6 mb-4 md:mb-0 border-4 border-amber-400">
            {userImage && <img src={userImage} alt="User" className="w-full h-full object-cover" />}
          </div>
          
          <div className="text-left">
            <div className="mb-4">
              <p className="text-xl font-semibold mb-2">{getCompliment()} ✨</p>
              <p className="text-lg mb-2">Your skin tone appears to be:</p>
              <div className="flex items-center mb-2">
                <div 
                  className="w-12 h-12 rounded-full mr-3 flex items-center justify-center border-2 border-white/20"
                  style={{ backgroundColor: skinToneResult.colorHex }}
                >
                  <span className="text-xs font-mono text-center text-white/80 bg-black/30 px-1 rounded">
                    {skinToneResult.colorHex}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium capitalize">{skinToneResult.label}</p>
                  <p className="text-sm text-gray-300">With {skinToneResult.description}</p>
                </div>
              </div>
            </div>
            <p>Is this correct?</p>
          </div>
        </div>
      )}
      
      {!analyzing && (
        <div className="flex space-x-4 animate-fade-in">
          <Button 
            primary
            onClick={handleConfirm}
          >
            Yes, Let's Continue
          </Button>
          
          <Button 
            secondary
            onClick={handleRetake}
          >
            Try Another Photo
          </Button>
        </div>
      )}
    </div>
  );
};

export default SkinToneAnalysis;