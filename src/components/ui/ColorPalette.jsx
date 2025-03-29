import React, { useState } from 'react';
import skinToneRecommendations from '../data/skinToneRecommendations';

const ColorPalette = ({ skinTone, recommendedColors, onSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorInfo, setShowColorInfo] = useState(false);
  
  // Color palettes with sample colors
  const colorPalettes = {
    warm: ['#FF9E80', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722'],
    cool: ['#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1'],
    light: ['#F8BBD0', '#E1BEE7', '#C5CAE9', '#B3E5FC', '#B2DFDB'],
    bright: ['#FF4081', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF'],
    neutral: ['#F5F5F5', '#E0E0E0', '#9E9E9E', '#616161', '#212121']
  };
  
  // Get skin tone specific recommendations
  const skinToneRecs = skinTone ? skinToneRecommendations[skinTone] : null;
  
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onSelect(color);
  };
  
  const getColorDescription = (colorType) => {
    const descriptions = {
      warm: "Warm colors include shades of red, orange, yellow, and warm gold. These colors complement warm undertones in skin.",
      cool: "Cool colors include blues, purples, emeralds, and cool pinks. These colors complement cool undertones in skin.",
      light: "Light colors are soft, pastel versions of colors with white added. These create a gentle, airy feel.",
      bright: "Bright colors are vivid and saturated, making bold statements. These include jewel tones and vibrant primary colors.",
      neutral: "Neutral colors include black, white, gray, beige, navy, and earth tones. These versatile colors pair well with almost anything."
    };
    
    return descriptions[colorType] || '';
  };
  
  return (
    <div className="color-palette-container">
      <h2>Choose Your Color Palette</h2>
      
      {skinTone && (
        <div className="skin-tone-recommendations">
          <p>Based on your {skinTone} skin tone, we recommend:</p>
          {skinToneRecs && (
            <div className="recommendation-notes">
              <p>{skinToneRecs.description}</p>
            </div>
          )}
        </div>
      )}
      
      <div className="color-options">
        {Object.entries(recommendedColors).map(([colorType, recommended]) => (
          <div 
            key={colorType}
            className={`color-option ${selectedColor === colorType ? 'selected' : ''} ${!recommended ? 'not-recommended' : ''}`}
            onClick={() => handleColorSelect(colorType)}
          >
            <div className="color-samples">
              {colorPalettes[colorType].map((color, index) => (
                <div 
                  key={index} 
                  className="color-sample" 
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
            <h3 style={{ color: colorPalettes[colorType][2] }}>{colorType.charAt(0).toUpperCase() + colorType.slice(1)} Colors</h3>
            <button 
              className="info-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowColorInfo(showColorInfo === colorType ? null : colorType);
              }}
            >
              i
            </button>
            
            {showColorInfo === colorType && (
              <div className="color-info-tooltip">
                <p>{getColorDescription(colorType)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;