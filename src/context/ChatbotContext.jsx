// src/context/ChatbotContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import RecommendationEngine from '../utils/RecommendationEngine';

const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  // Keep your existing state variables
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userImage, setUserImage] = useState(null);
  const [recommender] = useState(new RecommendationEngine());
  
  // Expanded formData with our recommendation properties
  const [formData, setFormData] = useState({
    skinTone: '',
    gender: '',
    bodyType: '',
    occasion: '',
    style: '',
    season: '',
    colorPreference: '',
    budget: '',
    selectedTop: null,
    selectedBottom: null,
    selectedJewelry: null,
    selectedFootwear: null,
    // New fields for our enhanced recommendations
    seasonalColorType: '',
    event: ''
  });

  // Rest of your existing functions...

  // Enhanced goToNextStep that updates the recommendation engine
  const goToNextStep = (currentStepName, data = {}) => {
    // Update form data with new values
    setFormData(prev => {
      const newData = { ...prev, ...data };
      
      // Update recommendation engine with new data
      if (data.skinTone) recommender.setSkinTone(data.skinTone);
      if (data.gender) recommender.setGender(data.gender);
      if (data.bodyType) recommender.setBodyType(data.bodyType);
      if (data.season) recommender.setSeason(data.season);
      if (data.event) recommender.setEvent(data.event);
      if (data.style) recommender.setStyle(data.style);
      if (data.colorPreference) recommender.setColorPreference(data.colorPreference);
      if (data.seasonalColorType) recommender.setSeasonalColorType(data.seasonalColorType);
      if (data.budget) recommender.setBudget(data.budget);
      
      return newData;
    });

    // Your existing step navigation...
    const stepMap = {
      'welcome': 'uploadPhoto',
      'uploadPhoto': 'skinToneAnalysis',
      // Rest of your steps...
    };

    const nextStep = stepMap[currentStepName] || 'welcome';
    setCurrentStep(nextStep);
  };

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        currentStep,
        userImage,
        formData,
        recommender, // Make recommender available to components
        goToNextStep
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};