import React from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import OptionCard from '../ui/OptionCard';

// Gender Selection Component with Avatar Images
const GenderSelection = () => {
    const { setGender } = useChatbot();
    const [selectedGender, setSelectedGender] = useState(null);
  
    const handleSelect = (gender) => {
      setSelectedGender(gender);
      setGender(gender);
    };
  
    const handleContinue = () => {
      if (selectedGender) {
        goToNextStep('gender', { gender: selectedGender });
      }
    };
  
    return (
      <div className="gender-screen">
        <h2 className="gradient-text">Select Your Gender</h2>
        <p>This helps us provide more accurate styling recommendations.</p>
        
        <div className="gender-options">
          <div 
            className={`gender-card ${selectedGender === 'male' ? 'selected' : ''}`}
            onClick={() => handleSelect('male')}
          >
            <div className="avatar-container">
              <img src="/boy-avatar.png" alt="Male" className="avatar-image" />
            </div>
            <p>Boy</p>
          </div>
          
          <div 
            className={`gender-card ${selectedGender === 'female' ? 'selected' : ''}`}
            onClick={() => handleSelect('female')}
          >
            <div className="avatar-container">
              <img src="/girl-avatar.png" alt="Female" className="avatar-image" />
            </div>
            <p>Girl</p>
          </div>
        </div>
        
        <div className="action-buttons">
          <button 
            className="primary-button" 
            onClick={handleContinue}
            disabled={!selectedGender}
          >
            Continue
          </button>
          <button className="secondary-button" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    );
  };
export default GenderSelection;