import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';
import { LayoutTemplate, RectangleHorizontal, CircleDot, Calculator, Youtube } from 'lucide-react';
const BodyTypeSelection = () => {
  const { goToNextStep } = useChatbot();
  const [selectedBodyType, setSelectedBodyType] = useState(null);

  const bodyTypeOptions = [
    {
      id: 'hourglass',
      label: 'Hourglass',
      icon: <LayoutTemplate size={48} color="#f8fafc" />,
      description: 'Balanced proportions with a defined waist.'
    },
    {
      id: 'pear',
      label: 'Pear',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3v18l6-6 6 6V3" />
          <path d="M12 12c-2 0-3-2-2-4 1-2 3-2 4 0 1 2 0 4-2 4z" />
        </svg>
      ),
      description: 'Wider hips than shoulders, defined waist.'
    },
    {
      id: 'rectangle',
      label: 'Rectangle',
      icon: <RectangleHorizontal size={48} color="#f8fafc" />,
      description: 'Shoulders, waist, and hips are relatively aligned.'
    },
    {
      id: 'apple',
      label: 'Apple',
      icon: <CircleDot size={48} color="#f8fafc" />,
      description: 'Fuller midsection with slimmer legs and hips.'
    }
  ];

  const handleSelectBodyType = (type) => {
    setSelectedBodyType(type);
  };

  const handleContinue = () => {
    if (selectedBodyType) {
      goToNextStep('bodyType', { bodyType: selectedBodyType });
    }
  };

  const handleOpenCalculator = () => {
    document.dispatchEvent(new CustomEvent('openCalculator'));
  };

  const handleOpenVideo = () => {
    document.dispatchEvent(new CustomEvent('openVideo'));
  };

  return (
    <div className="body-type-screen">
      <h2 className="gradient-text">Select Your Body Type</h2>
      <p>This helps us recommend clothes that flatter your natural shape.</p>

      <div className="body-types-container">
        {bodyTypeOptions.map((option) => (
          <div
            key={option.id}
            className={`body-type-card ${selectedBodyType === option.id ? 'selected' : ''}`}
            onClick={() => handleSelectBodyType(option.id)}
          >
            <div className="body-type-icon">{option.icon}</div>
            <p>{option.label}</p>
            <p className="text-sm text-gray-300 text-center">{option.description}</p>
          </div>
        ))}
      </div>

      <div className="helper-options">
        <div className="helper-card" onClick={handleOpenCalculator}>
          <Calculator size={28} color="#f59e0b" className="helper-icon" />
          <p>Don't know your body shape?</p>
          <p>Use our calculator</p>
        </div>

        <div className="helper-card" onClick={handleOpenVideo}>
          <Youtube size={28} color="#f59e0b" className="helper-icon" />
          <p>Learn how to measure</p>
          <p>Watch quick video</p>
        </div>
      </div>

      <div className="action-buttons">
        <Button primary onClick={handleContinue} disabled={!selectedBodyType}>
          Continue
        </Button>

        <Button secondary onClick={() => goToNextStep('gender')}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default BodyTypeSelection;
