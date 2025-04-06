import React, { useState } from 'react';
import { Box, Triangle, Circle, Square, Calculator, Youtube } from 'lucide-react';
import BodyShapeCalculator from '../components/ui/BodyShapeCalculator';

const BodyTypeSelector = ({ gender, onSelect, onOpenCalculator, onOpenVideo }) => {
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
  };
  
  const handleSubmit = () => {
    if (selectedType) {
      onSelect(selectedType);
    }
  };
  
  
  return (
    <div className="body-type-screen">
      <h2 className="gradient-text">Select Your Body Type</h2>
      <p>This helps us recommend clothes that flatter your natural shape.</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '16px',
        marginTop: '24px',
        marginBottom: '24px',
        maxWidth: '600px',
        width: '100%'
      }}>
        {getBodyTypeOptions().map(type => (
          <div 
            key={type.id}
            style={{
              background: selectedType === type.id ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: selectedType === type.id ? '2px solid #f59e0b' : '2px solid transparent'
            }}
            onClick={() => handleTypeSelect(type.id)}
          >
            <div style={{
              marginBottom: '16px',
              color: selectedType === type.id ? '#f59e0b' : 'white'
            }}>
              {type.icon}
            </div>
            <p style={{
              margin: 0,
              fontWeight: selectedType === type.id ? 'bold' : 'normal',
              color: selectedType === type.id ? '#f59e0b' : 'white'
            }}>{type.name}</p>
          </div>
        ))}
      </div>
      
      <div className="helper-options" style={{
        marginTop: '24px', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '16px',
        flexWrap: 'wrap',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div 
          className="calculator-option"
          style={{
            padding: '15px', 
            background: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            flex: '1',
            minWidth: '200px'
          }}
          onClick={() => setShowCalculator(true)}
        >
          <Calculator size={32} color="#f59e0b" />
          <p style={{marginTop: '8px', marginBottom: '4px'}}>Don't know your body shape?</p>
          <p style={{fontSize: '14px', color: '#f59e0b', margin: 0}}>Use our calculator</p>
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
            cursor: 'pointer',
            flex: '1',
            minWidth: '200px'
          }}
          onClick={() => window.open(gender === 'female' ? 
            'https://youtube.com/shorts/JaKLQQWeUro' : 
            'https://youtube.com/shorts/yDmUQhR2dKI', 
            '_blank')}
        >
          <Youtube size={32} color="#f59e0b" />
          <p style={{marginTop: '8px', marginBottom: '4px'}}>Learn how to measure</p>
          <p style={{fontSize: '14px', color: '#f59e0b', margin: 0}}>Watch quick video</p>
        </div>
      </div>
      
      {showCalculator && (
        <BodyShapeCalculator 
          gender={gender} 
          onCalculate={(calculatedType) => {
            setSelectedType(calculatedType);
            setShowCalculator(false);
          }}
          onClose={() => setShowCalculator(false)}
        />
      )}
      
      <div className="action-buttons">
        <button 
          className="primary-button"
          onClick={handleSubmit}
          disabled={!selectedType}
          style={{
            opacity: selectedType ? 1 : 0.6,
            cursor: selectedType ? 'pointer' : 'not-allowed'
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BodyTypeSelector;