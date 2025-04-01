import React, { useState } from 'react';
import { useChatbot } from '../context/ChatbotContext';

// Import Step Components
import Welcome from './steps/Welcome';
import UploadPhoto from './steps/UploadPhoto';
import SkinToneAnalysis from './steps/SkinToneAnalysis';
import GenderSelection from './steps/GenderSelection';
import BodyTypeSelection from './steps/BodyTypeSelection';
import OccasionSelection from './steps/OccasionSelection';
import StyleSelection from './steps/StyleSelection';
import SeasonSelection from './steps/SeasonSelection';
import ColorPreference from './steps/ColorPreference';
import BudgetInput from './steps/BudgetInput';
import ItemSelection from './steps/ItemSelection';
import FinalOutfit from './steps/FinalOutfit';

// Import Modal Components
import YouTubeVideoPlayer from './YouTubeVideoPlayer';
import BodyShapeCalculator from './BodyShapeCalculator';

const ChatbotContainer = ({ isOpen }) => {
  const { toggleChatbot, currentStep, formData } = useChatbot();
  const [showVideo, setShowVideo] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  
  // Video player controllers
  const handleOpenVideo = () => {
    // Instead of setting state, open in a new tab directly
    window.open('https://www.youtube.com/watch?v=wV9a_ERkXlE', '_blank');
  };
  
  const handleCloseVideo = () => {
    setShowVideo(false);
  };
  
  // Calculator controllers
  const handleOpenCalculator = () => {
    setShowCalculator(true);
  };
  
  const handleCloseCalculator = () => {
    setShowCalculator(false);
  };
  
  const handleCalculatorResult = (result) => {
    // Use ChatbotContext to update the body type
    // Then close the calculator
    setShowCalculator(false);
  };

  // Component mapping based on current step
  const stepComponents = {
    welcome: Welcome,
    uploadPhoto: UploadPhoto,
    skinToneAnalysis: SkinToneAnalysis,
    gender: GenderSelection,
    bodyType: () => (
      <BodyTypeSelection 
        onVideoOpen={handleOpenVideo} 
        onCalculatorOpen={handleOpenCalculator}
      />
    ),
    occasion: OccasionSelection,
    style: StyleSelection,
    season: SeasonSelection,
    colorPreference: ColorPreference,
    budget: BudgetInput,
    topSelection: () => <ItemSelection itemType="tops" />,
    bottomSelection: () => <ItemSelection itemType="bottoms" />,
    jewelrySelection: () => <ItemSelection itemType="jewelry" />,
    footwearSelection: () => <ItemSelection itemType="footwear" />,
    finalOutfit: FinalOutfit
  };

  // Render current step component
  const CurrentStepComponent = stepComponents[currentStep] || Welcome;

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mr-3">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C70 85 85 70 85 50C85 30 70 15 50 15Z" stroke="white" strokeWidth="2" />
                  <path d="M35 40C38 35 45 30 50 30C55 30 62 35 65 40C70 45 70 55 65 60C62 65 55 70 50 70C45 70 38 65 35 60C30 55 30 45 35 40Z" stroke="white" strokeWidth="2" />
                  <circle cx="50" cy="40" r="3" fill="#FF4DA6" />
                  <circle cx="40" cy="50" r="3" fill="#4DA6FF" />
                  <circle cx="60" cy="50" r="3" fill="#FFD54D" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold">HueMate</h1>
                <p className="text-sm text-gray-300">Your Perfect Shade, Every Time</p>
              </div>
            </div>
            <button 
              onClick={toggleChatbot}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="chatbot-content">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <CurrentStepComponent formData={formData} />
            </div>
          </div>
          
          {/* Modals - these will appear as "new pages" */}
          {showVideo && (
            <YouTubeVideoPlayer 
              videoId="wV9a_ERkXlE" 
              onClose={handleCloseVideo}
              onOpenCalculator={handleOpenCalculator}
            />
          )}
          
          {showCalculator && (
            <BodyShapeCalculator 
              gender={formData.gender || 'female'}
              onClose={handleCloseCalculator}
              onCalculate={handleCalculatorResult}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ChatbotContainer;