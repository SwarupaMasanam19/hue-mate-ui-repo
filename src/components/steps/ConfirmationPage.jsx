import React from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';
import { ArrowLeft } from 'lucide-react';

const ConfirmationPage = () => {
  const { 
    formData, 
    userImage, 
    goToStep,
    goToNextStep
  } = useChatbot();
  
  const { 
    gender, 
    skinTone, 
    bodyType, 
    occasion, 
    style, 
    season, 
    colorPreference, 
    budget 
  } = formData;
  
  // Handle continue to results
  const handleContinue = () => {
    goToNextStep('confirmation', {});
  };
  
  // Go back to previous step
  const handleBack = () => {
    goToStep('budget'); // Go back to the last step before confirmation
  };
  
  // Navigate to specific editing screens
  const handleEditSkinTone = () => {
    goToStep('camera');
  };
  
  const handleEditBodyType = () => {
    goToStep('bodyType');
  };
  
  const handleEditOccasion = () => {
    goToStep('occasion');
  };
  
  const handleEditStyle = () => {
    goToStep('style');
  };
  
  const handleEditSeason = () => {
    goToStep('season');
  };
  
  const handleEditBudget = () => {
    goToStep('budget');
  };
  
  // Helper to format text with first letter capitalized
  const formatText = (text) => {
    if (!text) return 'Not specified';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  // Helper to format body type
  const formatBodyType = () => {
    if (!bodyType) return 'Not specified';
    return bodyType.split('-')[0].charAt(0).toUpperCase() + bodyType.split('-')[0].slice(1);
  };
  
  // Format budget
  const formatBudget = () => {
    if (!budget) return 'Not specified';
    if (budget.range === 'unlimited') return 'Unlimited';
    return `₹${budget.amount || budget.budget || '0'} (${budget.range || 'Not specified'})`;
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <button 
          onClick={handleBack} 
          className="back-arrow mr-3 bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
          Confirm Your Preferences
        </h2>
      </div>
      
      <p className="text-center text-lg mb-8">
        Please review your selections before we generate your personalized outfit recommendations.
      </p>
      
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Photo and Skin Tone */}
          <div className="flex flex-col md:flex-row items-start gap-4 col-span-1 md:col-span-2">
            {userImage && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500/50 flex-shrink-0">
                <img src={userImage} alt="You" className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Skin Tone</h3>
                  <div className="flex items-center">
                    {skinTone && (
                      <div className="w-6 h-6 rounded-full mr-2" style={{ 
                        backgroundColor: formData.skinToneInfo?.hex || '#D4A76A'
                      }}></div>
                    )}
                    <span>{formatText(skinTone)}</span>
                  </div>
                </div>
                <button 
                  onClick={handleEditSkinTone} 
                  className="text-sm bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full hover:bg-amber-500/30 transition-colors"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
          
          {/* Body Type */}
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium mb-2">Body Type</h3>
                <p>{formatBodyType()}</p>
              </div>
              <button 
                onClick={handleEditBodyType} 
                className="text-sm bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full hover:bg-amber-500/30 transition-colors"
              >
                Change
              </button>
            </div>
          </div>
          
          {/* Occasion */}
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium mb-2">Occasion</h3>
                <p>{formatText(occasion)}</p>
              </div>
              <button 
                onClick={handleEditOccasion} 
                className="text-sm bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full hover:bg-amber-500/30 transition-colors"
              >
                Change
              </button>
            </div>
          </div>
          
          {/* Style */}
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium mb-2">Style</h3>
                <p>{formatText(style)}</p>
              </div>
              <button 
                onClick={handleEditStyle} 
                className="text-sm bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full hover:bg-amber-500/30 transition-colors"
              >
                Change
              </button>
            </div>
          </div>
          
          {/* Season */}
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium mb-2">Season</h3>
                <p>{formatText(season)}</p>
              </div>
              <button 
                onClick={handleEditSeason} 
                className="text-sm bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full hover:bg-amber-500/30 transition-colors"
              >
                Change
              </button>
            </div>
          </div>
          
          {/* Budget */}
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium mb-2">Budget</h3>
                <p>{formatBudget()}</p>
              </div>
              <button 
                onClick={handleEditBudget} 
                className="text-sm bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full hover:bg-amber-500/30 transition-colors"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button 
          secondary
          onClick={handleBack}
        >
          Back
        </Button>
        
        <Button 
          primary
          onClick={handleContinue}
        >
          Continue to Results
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationPage;