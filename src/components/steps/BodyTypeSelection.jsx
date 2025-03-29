import React, { useState } from 'react';
import { Box, Triangle, Circle, Square, Calculator, Youtube } from 'lucide-react';
import BodyShapeCalculator from '../ui/BodyShapeCalculator';

const BodyTypeSelection = ({ gender, onSelect }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  
  const getBodyTypeOptions = () => {
    if (gender === 'female') {
      return [
        { id: 'hourglass-women', name: 'Hourglass', icon: <Box size={40} /> },
        { id: 'pear-women', name: 'Pear', icon: <Triangle size={40} /> },
        { id: 'rectangle-women', name: 'Rectangle', icon: <Square size={40} /> },
        { id: 'apple-women', name: 'Apple', icon: <Circle size={40} /> }
      ];
    } else {
      return [
        { id: 'trapezoid-men', name: 'Trapezoid', icon: <Triangle size={40} /> },
        { id: 'inverted-triangle-men', name: 'Athletic', icon: <Triangle size={40} style={{transform: 'rotate(180deg)'}} /> },
        { id: 'rectangle-men', name: 'Rectangle', icon: <Square size={40} /> },
        { id: 'oval-men', name: 'Oval', icon: <Circle size={40} /> }
      ];
    }
  };
  
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    onSelect(type);
  };
  
  return (
    <div className="body-type-screen">
      <h2 className="gradient-text">Select Your Body Type</h2>
      <p>This helps us recommend clothes that flatter your natural shape.</p>
      
      <div className="body-type-grid">
        {getBodyTypeOptions().map(type => (
          <div 
            key={type.id}
            className={`body-type-card ${selectedType === type.id ? 'selected' : ''}`}
            onClick={() => handleTypeSelect(type.id)}
          >
            <div className="body-type-icon">
              {type.icon}
            </div>
            <p>{type.name}</p>
          </div>
        ))}
      </div>
      
      <div className="helper-options" style={{marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '16px'}}>
        <div 
          className="calculator-option"
          style={{
            padding: '15px', 
            background: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={() => setShowCalculator(true)}
        >
          <Calculator size={32} color="#f59e0b" />
          <p style={{marginTop: '8px'}}>Don't know your body shape?</p>
          <p style={{fontSize: '14px', color: '#f59e0b'}}>Use our calculator</p>
        </div>
        
        <div 
          className="video-option"
          style={{
            padding: '15px', 
            background: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={() => window.open(gender === 'female' ? 
            'https://youtube.com/shorts/JaKLQQWeUro' : 
            'https://youtube.com/shorts/yDmUQhR2dKI', 
            '_blank')}
        >
          <Youtube size={32} color="#f59e0b" />
          <p style={{marginTop: '8px'}}>Learn how to measure</p>
          <p style={{fontSize: '14px', color: '#f59e0b'}}>Watch quick video</p>
        </div>
      </div>
      
      {showCalculator && (
        <BodyShapeCalculator 
          gender={gender} 
          onCalculate={handleTypeSelect}
          onClose={() => setShowCalculator(false)}
        />
      )}
      
      <div className="action-buttons">
        <button 
          className="primary-button"
          onClick={() => onSelect(selectedType)}
          disabled={!selectedType}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BodyTypeSelection;