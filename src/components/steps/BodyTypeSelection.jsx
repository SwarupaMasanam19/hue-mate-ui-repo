import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';
import { LayoutTemplate, RectangleHorizontal, CircleDot, Calculator, Youtube } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf, faAppleAlt, faSquare } from '@fortawesome/free-solid-svg-icons';
import SeasonSelection from '../steps/SeasonSelection';
const BodyTypeSelection = () => {
  const { goToNextStep } = useChatbot();
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSeasonSelection, setShowSeasonSelection] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const bodyTypeOptions = [
      {
        id: 'pear',
        label: 'Pear',
        icon: <img src="/assets/icons/pear_icon.png" alt="Pear Icon" style={{ width: '100px', height: '100px' }} />,
        description: 'Wider hips than shoulders, defined waist.'
      },
      {
        id: 'apple',
        label: 'Apple',
        icon: <FontAwesomeIcon icon={faAppleAlt} style={{ fontSize: '50px', color: '#f8fafc' }} />,
        description: 'Fuller midsection with slimmer legs and hips.'
      },
      {
        id: 'rectangle',
        label: 'Rectangle',
        icon: <FontAwesomeIcon icon={faSquare} style={{ fontSize: '50px', color: '#f8fafc', transform: 'scaleX(1.5)' }} />,
        description: 'Shoulders, waist, and hips are relatively aligned.'
      },
      {
        id: 'hourglass',
        label: 'Hourglass',
        icon: <FontAwesomeIcon icon={faHourglassHalf} style={{ fontSize: '50px', color: '#f8fafc' }} />,
        description: 'Balanced proportions with a defined waist.'
      }
    ];

  const handleSelectBodyType = (type) => {
    setSelectedBodyType(type);
    console.log("Selected Body Type:", type);
  };

  const handleContinue = () => {
    if (selectedBodyType) {
      goToNextStep('season', { bodyType: selectedBodyType });
      setShowSeasonSelection(true); // Show the season selection component
    } else {
      alert('Please select your body type to continue.');
    }
  };

  const handleSeasonSelect = (season) => {
    setShowSeasonSelection(false); // Hide season selection after selection
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
