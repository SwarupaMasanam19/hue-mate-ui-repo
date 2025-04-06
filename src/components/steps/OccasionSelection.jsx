import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const OccasionSelection = () => {
  const { goToNextStep } = useChatbot();
  const [customOccasion, setCustomOccasion] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState(null);

  const occasionOptions = [
    { id: 'casual', label: 'Casual', icon: '🏡' },
    { id: 'work', label: 'Work', icon: '💼' },
    { id: 'formal', label: 'Formal Event', icon: '✨' },
    { id: 'date', label: 'Date Night', icon: '❤️' },
    { id: 'party', label: 'Party', icon: '🎉' },
    { id: 'vacation', label: 'Vacation', icon: '🏖️' },
    { id: 'wedding', label: 'Wedding', icon: '💍' },
    { id: 'workout', label: 'Workout', icon: '🏋️' },
    { id: 'custom', label: 'Other Occasion', icon: '✏️' }
  ];

  const handleSelect = (occasion) => {
    if (occasion === 'custom') {
      setShowCustomInput(true);
      setSelectedOccasion(null);
    } else {
      setSelectedOccasion(occasion);
    }
  };

  const handleCustomSubmit = () => {
    if (customOccasion.trim()) {
      goToNextStep('occasion', { occasion: customOccasion.trim() });
    }
  };

  const handleContinue = () => {
    if (selectedOccasion) {
      goToNextStep('occasion', { occasion: selectedOccasion });
    }
  };

  return (
    <div className="body-type-screen">
      <h2 className="gradient-text">What's the Occasion?</h2>
      <p>Select an occasion to help us recommend the perfect outfit.</p>
      
      {!showCustomInput ? (
        <>
          <div className="body-types-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {occasionOptions.map((option) => (
              <div 
                key={option.id}
                className={`body-type-card ${selectedOccasion === option.id ? 'selected' : ''}`}
                onClick={() => handleSelect(option.id)}
              >
                <div className="body-type-icon" style={{ fontSize: '28px' }}>{option.icon}</div>
                <p>{option.label}</p>
              </div>
            ))}
          </div>
          
          <div className="action-buttons">
            <Button 
              primary 
              onClick={handleContinue}
              disabled={!selectedOccasion}
            >
              Continue
            </Button>
            
            <Button 
              secondary 
              onClick={() => goToNextStep('bodyType')}
            >
              Back
            </Button>
          </div>
        </>
      ) : (
        <div className="custom-occasion-container" style={{ width: '100%', maxWidth: '500px' }}>
          <div className="body-type-card" style={{ padding: '20px' }}>
            <label htmlFor="custom-occasion" style={{ display: 'block', textAlign: 'left', marginBottom: '10px' }}>
              Tell us about your occasion
            </label>
            <input
              id="custom-occasion"
              type="text"
              value={customOccasion}
              onChange={(e) => setCustomOccasion(e.target.value)}
              placeholder="e.g., Beach Wedding, Job Interview, etc."
              style={{
                width: '100%',
                padding: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white'
              }}
            />
          </div>
          
          <div className="action-buttons">
            <Button
              primary
              onClick={handleCustomSubmit}
              disabled={!customOccasion.trim()}
            >
              Continue
            </Button>
            
            <Button
              secondary
              onClick={() => setShowCustomInput(false)}
            >
              Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OccasionSelection;