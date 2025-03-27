import React from 'react';
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

const ChatbotContent = () => {
  const { currentStep, formData } = useChatbot();

  // Component mapping based on current step
  const stepComponents = {
    welcome: Welcome,
    uploadPhoto: UploadPhoto,
    skinToneAnalysis: SkinToneAnalysis,
    gender: GenderSelection,
    bodyType: BodyTypeSelection,
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
    <div className="max-w-4xl mx-auto animate-fade-in">
      <CurrentStepComponent formData={formData} />
    </div>
  );
};

export default ChatbotContent;