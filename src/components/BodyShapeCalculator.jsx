import React, { useState } from 'react';
import { X, Calculator, ArrowRight, PlayCircle } from 'lucide-react';

const BodyShapeCalculator = ({ gender, onCalculate, onClose }) => {
  const [measurements, setMeasurements] = useState({
    shoulders: '',
    bust: '',
    chest: '',
    waist: '',
    hips: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showCalculator, setShowCalculator] = useState(true);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const calculateBodyType = () => {
    setLoading(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      let result = '';
      
      if (gender === 'female') {
        const { bust, waist, hips } = measurements;
        const bustVal = parseFloat(bust);
        const waistVal = parseFloat(waist);
        const hipsVal = parseFloat(hips);
        
        if (isNaN(bustVal) || isNaN(waistVal) || isNaN(hipsVal)) {
          alert('Please enter all measurements');
          setLoading(false);
          return;
        }
        
        const bustHipDiff = Math.abs(bustVal - hipsVal);
        const waistBustRatio = waistVal / bustVal;
        const waistHipRatio = waistVal / hipsVal;
        
        // More accurate calculation
        if (bustHipDiff <= 5 && waistBustRatio < 0.75) {
          result = 'hourglass-women';
        } else if (hipsVal > bustVal + 5 && waistHipRatio < 0.75) {
          result = 'pear-women';
        } else if (bustVal > hipsVal + 5 && waistBustRatio < 0.75) {
          result = 'inverted-triangle-women';
        } else if (waistBustRatio >= 0.8 && waistHipRatio >= 0.8) {
          result = 'rectangle-women';
        } else if (waistVal > bustVal && waistVal > hipsVal) {
          result = 'apple-women';
        } else {
          result = 'hourglass-women'; // Default
        }
      } else {
        // For men - more accurate calculation
        const { shoulders, chest, waist } = measurements;
        const shouldersVal = parseFloat(shoulders);
        const chestVal = parseFloat(chest);
        const waistVal = parseFloat(waist);
        
        if (isNaN(shouldersVal) || isNaN(chestVal) || isNaN(waistVal)) {
          alert('Please enter all measurements');
          setLoading(false);
          return;
        }
        
        const shoulderWaistRatio = shouldersVal / waistVal;
        const chestWaistRatio = chestVal / waistVal;
        
        if (shoulderWaistRatio > 1.2 && chestWaistRatio > 1.1) {
          result = 'inverted-triangle-men';
        } else if (shoulderWaistRatio < 0.9) {
          result = 'triangle-men';
        } else if (shoulderWaistRatio >= 0.9 && shoulderWaistRatio <= 1.1 && chestWaistRatio >= 0.9 && chestWaistRatio <= 1.1) {
          result = 'rectangle-men';
        } else if (waistVal > shouldersVal && waistVal > chestVal) {
          result = 'oval-men';
        } else {
          result = 'trapezoid-men';
        }
      }
      
      setLoading(false);
      setResult(result);
      onCalculate(result);
    }, 1500);
  };
  
  const renderInputField = (name, label, placeholder) => (
    <div style={{marginBottom: '15px'}}>
      <label style={{
        display: 'block', 
        marginBottom: '6px', 
        fontWeight: '500', 
        color: 'white'
      }}>
        {label}
      </label>
      <input 
        type="number"
        name={name}
        value={measurements[name]}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '12px',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
          color: 'white',
          fontSize: '16px',
          transition: 'all 0.3s ease'
        }}
        placeholder={placeholder}
        onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
      />
    </div>
  );

  const renderFemaleInputs = () => (
    <>
      {renderInputField('bust', 'Bust (inches)', 'Measure around the fullest part')}
      {renderInputField('waist', 'Waist (inches)', 'Measure around the navel')}
      {renderInputField('hips', 'Hips (inches)', 'Measure around the widest part')}
    </>
  );

  const renderMaleInputs = () => (
    <>
      {renderInputField('shoulders', 'Shoulders (inches)', 'Measure across shoulders')}
      {renderInputField('chest', 'Chest (inches)', 'Measure around the fullest part')}
      {renderInputField('waist', 'Waist (inches)', 'Measure around the navel')}
    </>
  );
  
  const handleWatchVideo = () => {
    setShowVideo(true);
    setShowCalculator(false);
  };
  
  const handleCloseVideo = () => {
    setShowVideo(false);
    setShowCalculator(true);
  };
  
  const getVideoUrl = () => {
    return "https://www.youtube.com/embed/wV9a_ERkXlE?si=1XvWZLXjJoT5yKDy";
  };
  
  const getBodyTypeDescription = (type) => {
    const descriptions = {
      'hourglass-women': "Your bust and hips are about the same width, with a well-defined waist. Clothes that accentuate your waist will look fantastic on you.",
      'pear-women': "Your hips are wider than your shoulders, creating a beautiful feminine silhouette. Tops that add volume to your shoulders can help balance your proportions.",
      'inverted-triangle-women': "Your shoulders are broader than your hips. Clothes that add volume to your lower half will create a balanced silhouette.",
      'rectangle-women': "Your shoulders, waist, and hips are about the same width. Creating definition at the waist with your clothing will add curves.",
      'apple-women': "You carry weight around your midsection, with slimmer legs and often a great bust. Empire waistlines and V-necks are flattering choices.",
      'inverted-triangle-men': "Your shoulders and chest are broader than your waist. This athletic build is flattered by straight-leg pants and fitted shirts.",
      'triangle-men': "Your lower body is wider than your upper body. Structured jackets and detailed tops help balance your proportions.",
      'rectangle-men': "Your shoulders, chest, and waist are similar in width. Layering and texture can add dimension to this balanced frame.",
      'oval-men': "You carry weight around your midsection. Vertical patterns and straight-cut shirts are flattering choices.",
      'trapezoid-men': "Your shoulders are slightly wider than your waist, with a gradual taper. This balanced build works well with most styles."
    };
    
    return descriptions[type] || "Based on your measurements, we've determined your body shape.";
  };
  
  return (
    <div 
      className="calculator-modal" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.9)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'fadeIn 0.3s ease'
      }}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Existing component code remains the same */}
      {result ? (
        <div 
          style={{
            textAlign: 'center',
            animation: 'fadeInUp 0.5s ease'
          }}
        >
          {/* Result display section - existing code */}
          <div 
            style={{
              fontSize: '50px',
              marginBottom: '10px',
              animation: 'scaleIn 0.5s ease'
            }}
          >
            {(() => {
              if (result.includes('hourglass')) return '⌛';
              if (result.includes('pear')) return '🔻';
              if (result.includes('apple') || result.includes('oval')) return '⭕';
              if (result.includes('rectangle')) return '◻️';
              if (result.includes('triangle')) return '▼';
              if (result.includes('inverted-triangle')) return '▲';
              return '📐';
            })()}
          </div>
          
          <h3 
            style={{
              fontSize: '22px',
              marginBottom: '15px',
              color: '#f59e0b'
            }}
          >
            Your Body Shape: {result.split('-')[0].charAt(0).toUpperCase() + result.split('-')[0].slice(1)}
          </h3>
          
          <p 
            style={{
              marginBottom: '25px',
              color: 'rgba(255,255,255,0.8)',
              padding: '0 10px'
            }}
          >
            {getBodyTypeDescription(result)}
          </p>
          
          <div 
            style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={() => setResult(null)}
              style={{
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              Recalculate
            </button>
            
            <button
              onClick={() => onCalculate(result)}
              style={{
                padding: '12px 25px',
                background: 'linear-gradient(to right, #f59e0b, #d97706)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Apply Result <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : showVideo ? (
        // Video section remains the same
        <div 
          style={{
            width: '90%',
            maxWidth: '800px',
            background: 'rgba(0,0,0,0.7)',
            borderRadius: '20px',
            padding: '20px',
            animation: 'fadeIn 0.5s ease',
            position: 'relative'
          }}
        >
          {/* Existing video content */}
        </div>
      ) : (
        <div 
          className="calculator-content" 
          style={{
            background: 'linear-gradient(135deg, #1e1e3f, #2d2d6d)',
            padding: '30px',
            borderRadius: '20px',
            width: '90%',
            maxWidth: '500px',
            position: 'relative',
            animation: 'scaleIn 0.3s ease',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}
        >
          {/* Existing main calculator content */}
        </div>
      )}
    </div>
  );
};

export default BodyShapeCalculator;