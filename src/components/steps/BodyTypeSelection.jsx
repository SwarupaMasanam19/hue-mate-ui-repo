import React, { useState } from 'react';
import { Box, Triangle, Circle, Square, Calculator, Youtube } from 'lucide-react';
import BodyShapeCalculator from '../BodyShapeCalculator';

const BodyTypeSelection = ({ gender, onSelect }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    onSelect(type);
  };
  
  const handleCalculatorOpen = () => {
    setShowCalculator(true);
  };
  
  const handleCalculatorResult = (result) => {
    setSelectedType(result);
    onSelect(result);
    setShowCalculator(false);
  };
  
  const handleVideoClick = () => {
    // Use the exact YouTube links you provided
    const videoUrl = gender === 'female' 
      ? 'https://youtube.com/shorts/420TbEabNzY?si=YjaKPrg4dMxa-YMn' 
      : 'https://www.youtube.com/watch?v=wV9a_ERkXlE&list=LL&index=1';
    
    window.open(videoUrl, '_blank');
  };
  
  // Get body type options based on gender
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
  
  return (
    <div className="body-type-screen">
      <h2 className="gradient-text">Select Your Body Type</h2>
      <p>This helps us recommend clothes that flatter your natural shape.</p>
      
      {/* Horizontal body type selection layout */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        margin: '30px 0'
      }}>
        {getBodyTypeOptions().map(type => (
          <div 
            key={type.id}
            data-type={type.id}
            className={`body-type-card ${selectedType === type.id ? 'selected' : ''}`}
            onClick={() => handleTypeSelect(type.id)}
            style={{
              width: '120px',
              height: '120px',
              background: selectedType === type.id ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: selectedType === type.id ? '2px solid #f59e0b' : '2px solid transparent'
            }}
          >
            <div style={{ marginBottom: '15px', color: selectedType === type.id ? '#f59e0b' : 'white' }}>
              {type.icon}
            </div>
            <p style={{ 
              margin: 0, 
              fontWeight: selectedType === type.id ? 'bold' : 'normal',
              color: selectedType === type.id ? '#f59e0b' : 'white'
            }}>
              {type.name}
            </p>
          </div>
        ))}
      </div>
      
      {/* Calculator and Video buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        <div 
          onClick={handleCalculatorOpen}
          style={{
            padding: '15px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            minWidth: '200px',
            transition: 'transform 0.3s ease, background-color 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <Calculator size={32} color="#f59e0b" />
          <p style={{ marginTop: '8px', marginBottom: '4px' }}>Don't know your body shape?</p>
          <p style={{ fontSize: '14px', color: '#f59e0b', margin: 0 }}>Use our calculator</p>
        </div>
        
        <div 
          onClick={handleVideoClick}
          style={{
            padding: '15px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            minWidth: '200px',
            transition: 'transform 0.3s ease, background-color 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <Youtube size={32} color="#f59e0b" />
          <p style={{ marginTop: '8px', marginBottom: '4px' }}>Learn how to measure</p>
          <p style={{ fontSize: '14px', color: '#f59e0b', margin: 0 }}>Watch quick video</p>
        </div>
      </div>
      
      {/* Render calculator modal if shown */}
      {showCalculator && (
        <BodyShapeCalculator 
          gender={gender} 
          onCalculate={handleCalculatorResult}
          onClose={() => setShowCalculator(false)}
        />
      )}
      
      <div className="action-buttons">
        <button 
          className="primary-button"
          onClick={() => onSelect(selectedType)}
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

export default BodyTypeSelection;