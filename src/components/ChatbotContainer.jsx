import React, { useState, useEffect } from 'react';
import { useChatbot } from '../context/ChatbotContext';
import { X } from 'lucide-react';

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
  const { toggleChatbot, currentStep, goToNextStep, formData } = useChatbot();
  const [showVideo, setShowVideo] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [videoId, setVideoId] = useState('420TbEabNzY'); // Default video ID
  
  // Set up global functions and event listeners to open calculator and video
  useEffect(() => {
    if (isOpen) {
      // Define global functions for direct access
      window.openCalculator = () => {
        setShowCalculator(true);
        setShowVideo(false); // Close video if open
      };
      
      window.openVideo = () => {
        setShowVideo(true);
        setShowCalculator(false); // Close calculator if open
      };
      
      // Add event listeners for component communication
      const handleOpenCalculator = () => {
        setShowCalculator(true);
        setShowVideo(false); // Close video if open
      };
      
      const handleOpenVideo = () => {
        setShowVideo(true);
        setShowCalculator(false); // Close calculator if open
      };
      
      document.addEventListener('openCalculator', handleOpenCalculator);
      document.addEventListener('openVideo', handleOpenVideo);
      
      // Return cleanup function
      return () => {
        // Remove global functions
        window.openCalculator = undefined;
        window.openVideo = undefined;
        
        // Remove event listeners
        document.removeEventListener('openCalculator', handleOpenCalculator);
        document.removeEventListener('openVideo', handleOpenVideo);
      };
    }
  }, [isOpen]);
  
  // Video player controllers
  const handleCloseVideo = () => {
    setShowVideo(false);
  };
  
  const handleOpenVideo = () => {
    setShowVideo(true);
    if (showCalculator) {
      setShowCalculator(false); // Close calculator if open
    }
  };
  
  // Calculator controllers
  const handleCloseCalculator = () => {
    setShowCalculator(false);
  };
  
  const handleOpenCalculator = () => {
    setShowCalculator(true);
    if (showVideo) {
      setShowVideo(false); // Close video if open
    }
  };
  
  const handleCalculatorResult = (result) => {
    // Use result in the next step
    goToNextStep('bodyType', { bodyType: result });
    setShowCalculator(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-indigo-950/95 backdrop-blur-md flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b border-white/10">
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
          <X size={24} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {currentStep === 'welcome' && <Welcome />}
        {currentStep === 'uploadPhoto' && <UploadPhoto />}
        {currentStep === 'skinToneAnalysis' && <SkinToneAnalysis />}
        {currentStep === 'gender' && <GenderSelection />}
        {currentStep === 'bodyType' && <BodyTypeSelection />}
        {currentStep === 'occasion' && <OccasionSelection />}
        {currentStep === 'style' && <StyleSelection />}
        {currentStep === 'season' && <SeasonSelection />}
        {currentStep === 'colorPreference' && <ColorPreference />}
        {currentStep === 'budget' && <BudgetInput />}
        {currentStep === 'topSelection' && <ItemSelection itemType="tops" />}
        {currentStep === 'bottomSelection' && <ItemSelection itemType="bottoms" />}
        {currentStep === 'jewelrySelection' && <ItemSelection itemType="jewelry" />}
        {currentStep === 'footwearSelection' && <ItemSelection itemType="footwear" />}
        {currentStep === 'finalOutfit' && <FinalOutfit />}
      </div>
      
      {/* Modal components */}
      {showVideo && (
        <YouTubeVideoPlayer 
          videoId={videoId}
          onClose={handleCloseVideo}
          onOpenCalculator={handleOpenCalculator}
        />
      )}
      
      {showCalculator && (
        <BodyShapeCalculator 
          gender={formData?.gender || 'female'}
          onClose={handleCloseCalculator}
          onCalculate={handleCalculatorResult}
          onOpenVideo={handleOpenVideo}
        />
      )}
    </div>
  );
};

export default ChatbotContainer;