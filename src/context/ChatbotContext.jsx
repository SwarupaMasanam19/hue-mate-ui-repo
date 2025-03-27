import React, { createContext, useState, useContext, useEffect } from 'react';

const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userImage, setUserImage] = useState(null);
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
    selectedFootwear: null
  });

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const setUserPhotoAndAnalyze = (imageData) => {
    setUserImage(imageData);
    setCurrentStep('skinToneAnalysis');
  };

  const goToNextStep = (currentStepName, data = {}) => {
    // Update form data with new values
    setFormData(prev => ({
      ...prev,
      ...data
    }));

    // Map to determine the next step based on current step
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
      'budget': 'topSelection',
      'topSelection': 'bottomSelection',
      'bottomSelection': 'jewelrySelection',
      'jewelrySelection': 'footwearSelection',
      'footwearSelection': 'finalOutfit'
    };

    const nextStep = stepMap[currentStepName] || 'welcome';
    setCurrentStep(nextStep);
  };

  const resetChatbot = () => {
    setCurrentStep('welcome');
    setUserImage(null);
    setFormData({
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
      selectedFootwear: null
    });
  };

  // Prevent body scrolling when chatbot is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        toggleChatbot,
        currentStep,
        userImage,
        formData,
        setUserPhotoAndAnalyze,
        goToNextStep,
        resetChatbot
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