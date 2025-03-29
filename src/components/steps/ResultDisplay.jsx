// src/components/steps/ResultsDisplay.jsx
import React from 'react';

const ResultsDisplay = ({ formData, userImage, onReset }) => {
  const { gender, skinTone, bodyType } = formData;
  
  const getCompliment = () => {
    if (gender === 'male') {
      return "Hey Hero! You Look Amazing! ✨";
    } else {
      return "Hey Gorgeous! You Look Amazing! ✨";
    }
  };
  
  // Recommended colors based on skin tone
  const getRecommendedColors = () => {
    if (skinTone === 'warm') {
      return [
        { color: '#FF8C00', name: 'Orange' },
        { color: '#FFD700', name: 'Gold' },
        { color: '#A0522D', name: 'Sienna' },
        { color: '#8B4513', name: 'Saddle Brown' }
      ];
    }
    // Add other skin tones here...
    return [];
  };
  
  // Colors to avoid
  const getColorsToAvoid = () => {
    if (skinTone === 'warm') {
      return [
        { color: '#00BFFF', name: 'Deep Sky Blue' },
        { color: '#FF69B4', name: 'Hot Pink' },
        { color: '#32CD32', name: 'Lime Green' }
      ];
    }
    // Add other skin tones here...
    return [];
  };
  
  const getBodyTypeName = () => {
    if (!bodyType) return '';
    
    // Extract name portion from ID
    const baseName = bodyType.split('-')[0];
    return baseName.charAt(0).toUpperCase() + baseName.slice(1);
  };
  
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-amber-500 mb-6">Your Analysis Results</h2>
      
      <div className="bg-white/5 rounded-xl p-8 w-full max-w-2xl mb-8">
        <h3 className="text-2xl font-bold text-amber-500 text-center mb-6">{getCompliment()}</h3>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-amber-500/50 flex-shrink-0">
            {userImage && (
              <img src={userImage} alt="Your photo" className="w-full h-full object-cover" />
            )}
          </div>
          
          <div className="flex flex-col flex-grow">
            <div className="mb-6">
              <h4 className="text-xl text-white mb-2">Skin Tone</h4>
              <div className="inline-flex items-center px-4 py-2 bg-amber-500/30 rounded-full">
                <span className="text-white font-medium">Warm</span>
                <span className="ml-2 text-white/70 text-sm">#E3B98F</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl text-white mb-2">Recommended Colors</h4>
              <div className="flex flex-wrap gap-2">
                {getRecommendedColors().map((color, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white/20"
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl text-white mb-2">Colors to Avoid</h4>
              <div className="flex flex-wrap gap-2">
                {getColorsToAvoid().map((color, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white/20"
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl text-white mb-2">Body Type</h4>
              <p className="text-white font-medium">{getBodyTypeName()}</p>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="px-12 py-3 rounded-full font-medium bg-amber-500 text-white"
        onClick={onReset}
      >
        Start Over
      </button>
    </div>
  );
};

export default ResultsDisplay;