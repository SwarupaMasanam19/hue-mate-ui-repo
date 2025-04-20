// src/context/ChatbotContext.jsx - Updated with confirmation step
import React, { createContext, useState, useContext, useRef } from 'react';

// Create context
const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  // State for managing the chatbot interface
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userImage, setUserImage] = useState(null);
  const [stepHistory, setStepHistory] = useState([]);
  const [formData, setFormData] = useState({
    gender: '',
    skinTone: '',
    skinToneInfo: { name: 'Warm Medium', hex: '#D4A76A' },
    bodyType: '',
    occasion: '',
    style: '',
    season: '',
    colorPreference: '',
    budget: '',
    selectedTop: null,
    selectedBottom: null,
    selectedJewelry: null,
    selectedFootwear: null
  });

  // Toggle the chatbot open/closed
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Process to the next step with data
  const goToNextStep = (currentStepName, data = {}) => {
    // Add current step to history for back button
    setStepHistory(prev => [...prev, currentStep]);
    
    // Update form data with new values
    setFormData(prev => ({
      ...prev,
      ...data
    }));

    // Define step navigation flow
    const stepMap = {
      'welcome': 'uploadPhoto',
      'uploadPhoto': 'skinToneAnalysis',
      'skinToneAnalysis': 'gender',
      'gender': 'bodyType',
      'bodyType': 'occasion',
      'occasion': 'style',
      'style': 'season',
      'season': 'colorPreference',
      'colorPreference': 'budget',
      'budget': 'confirmation', 
      'confirmation': 'topSelection',
      'topSelection': 'bottomSelection',
      'bottomSelection': 'jewelrySelection',
      'jewelrySelection': 'footwearSelection',
      'footwearSelection': 'finalOutfit'
    };

    // Set the next step
    setCurrentStep(stepMap[currentStepName] || 'welcome');
  };
  
  // Go to previous step
  const goToPreviousStep = () => {
    if (stepHistory.length > 0) {
      const prevStep = stepHistory[stepHistory.length - 1];
      setStepHistory(prev => prev.slice(0, -1));
      setCurrentStep(prevStep);
    }
  };

  // Go back to a specific step
  const goToStep = (stepName) => {
    // Add current step to history
    setStepHistory(prev => [...prev, currentStep]);
    setCurrentStep(stepName);
  };

  // Reset the chatbot
  const resetChatbot = () => {
    setCurrentStep('welcome');
    setUserImage(null);
    setStepHistory([]);
    setFormData({
      gender: '',
      skinTone: '',
      skinToneInfo: { name: 'Warm Medium', hex: '#D4A76A' },
      bodyType: '',
      occasion: '',
      style: '',
      season: '',
      colorPreference: '',
      budget: '',
      selectedTop: null,
      selectedBottom: null,
      selectedJewelry: null,
      selectedFootwear: null
    });
  };

  // Set user image and analyze skin tone
  const setUserPhotoAndAnalyze = (imageUrl) => {
    setUserImage(imageUrl);
    // Normally you would analyze skin tone here
    // For now, just set a default
    setFormData(prev => ({
      ...prev,
      skinTone: 'warm',
      skinToneInfo: { name: 'Warm Medium', hex: '#D4A76A' }
    }));
    // After analysis, go to gender selection
    setCurrentStep('skinToneAnalysis');
  };

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        toggleChatbot,
        currentStep,
        userImage,
        formData,
        goToNextStep,
        goToPreviousStep,
        goToStep,
        resetChatbot,
        setUserPhotoAndAnalyze,
        stepHistory
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

// Custom hook to use the chatbot context
export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};