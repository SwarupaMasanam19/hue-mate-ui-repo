import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const GenderSelection = () => {
  const { goToNextStep } = useChatbot();
  const [selectedGender, setSelectedGender] = useState(null);
  
  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };
  
  const handleContinue = () => {
    if (selectedGender) {
      goToNextStep('gender', { gender: selectedGender });
    }
  };
  
  return (
    <div className="body-type-screen">
      <h2 className="gradient-text">Select Your Gender</h2>
      <p>This helps us provide more accurate styling recommendations.</p>
      
      <div className="helper-options" style={{ maxWidth: '600px' }}>
        <div 
          className={`body-type-card ${selectedGender === 'female' ? 'selected' : ''}`}
          onClick={() => handleSelect('female')}
          style={{ padding: '30px 20px' }}
        >
          <div className="avatar-container" style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            marginBottom: '20px',
            border: '2px solid rgba(255, 255, 255, 0.2)' 
          }}>
            <img 
              src="/girl-avatar.png" 
              alt="Female" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => e.target.src = "https://via.placeholder.com/150?text=Girl"}
            />
          </div>
          <p>Girl</p>
        </div>
        
        <div 
          className={`body-type-card ${selectedGender === 'male' ? 'selected' : ''}`}
          onClick={() => handleSelect('male')}
          style={{ padding: '30px 20px' }}
        >
          <div className="avatar-container" style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            marginBottom: '20px',
            border: '2px solid rgba(255, 255, 255, 0.2)' 
          }}>
            <img 
              src="/boy-avatar.png" 
              alt="Male" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => e.target.src = "https://via.placeholder.com/150?text=Boy"}
            />
          </div>
          <p>Boy</p>
        </div>
      </div>
      
      <div className="action-buttons">
        <Button 
          primary 
          onClick={handleContinue} 
          disabled={!selectedGender}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default GenderSelection;