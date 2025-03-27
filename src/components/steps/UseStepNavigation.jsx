import { useState, useCallback } from 'react';

const useStepNavigation = (initialStep = 'welcome') => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [stepHistory, setStepHistory] = useState([]);

  // Define the step flow sequence
  const stepSequence = [
    'welcome',
    'uploadPhoto',
    'skinToneAnalysis',
    'gender',
    'bodyType',
    'occasion',
    'style',
    'season',
    'colorPreference',
    'budget',
    'topSelection',
    'bottomSelection',
    'jewelrySelection',
    'footwearSelection',
    'finalOutfit'
  ];

  const goToStep = useCallback((step) => {
    setStepHistory(prev => [...prev, currentStep]);
    setCurrentStep(step);
  }, [currentStep]);

  const goToNextStep = useCallback(() => {
    const currentIndex = stepSequence.indexOf(currentStep);
    if (currentIndex < stepSequence.length - 1) {
      const nextStep = stepSequence[currentIndex + 1];
      goToStep(nextStep);
    }
  }, [currentStep, goToStep, stepSequence]);

  const goToPreviousStep = useCallback(() => {
    if (stepHistory.length > 0) {
      const previousStep = stepHistory[stepHistory.length - 1];
      setStepHistory(prev => prev.slice(0, -1));
      setCurrentStep(previousStep);
    } else {
      // If no history, go to previous step in sequence
      const currentIndex = stepSequence.indexOf(currentStep);
      if (currentIndex > 0) {
        const prevStep = stepSequence[currentIndex - 1];
        setCurrentStep(prevStep);
      }
    }
  }, [currentStep, stepHistory, stepSequence]);

  const resetSteps = useCallback(() => {
    setCurrentStep(initialStep);
    setStepHistory([]);
  }, [initialStep]);

  return {
    currentStep,
    goToStep,
    goToNextStep,
    goToPreviousStep,
    resetSteps
  };
};

export default useStepNavigation;