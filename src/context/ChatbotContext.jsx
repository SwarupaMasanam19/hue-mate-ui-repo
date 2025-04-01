import React, { createContext, useState, useContext } from 'react';

// Create context
const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  // State for managing the chatbot interface
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userImage, setUserImage] = useState(null);
  const [formData, setFormData] = useState({
    gender: '',
    skinTone: '',
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
      'budget': 'topSelection',
      'topSelection': 'bottomSelection',
      'bottomSelection': 'jewelrySelection',
      'jewelrySelection': 'footwearSelection',
      'footwearSelection': 'finalOutfit'
    };

    // Set the next step
    setCurrentStep(stepMap[currentStepName] || 'welcome');
  };

  // Go back to a specific step
  const goToStep = (stepName) => {
    setCurrentStep(stepName);
  };

  // Reset the chatbot
  const resetChatbot = () => {
    setCurrentStep('welcome');
    setUserImage(null);
    setFormData({
      gender: '',
      skinTone: '',
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

  // Set user image
  const setImage = (imageUrl) => {
    setUserImage(imageUrl);
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
        goToStep,
        resetChatbot,
        setImage
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