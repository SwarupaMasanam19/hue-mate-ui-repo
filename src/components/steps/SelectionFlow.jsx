import React, { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import StyleSelector from './StyleSelector';
import ColorPalette from './ColorPalette';
import ItemGrid from './ItemGrid';
import SelectedItems from './SelectedItems';
import BudgetAnalysis from './BudgetAnalysis';
import VirtualTryOn from './VirtualTryOn';
import RecommendationEngine from '../utils/RecommendationEngine';
import skinToneRecommendations from '../data/skinToneRecommendations';
import seasonalRecommendations from '../data/seasonalRecommendations';

const SelectionFlow = ({ skinTone, bodyType, onComplete }) => {
  // Initialize recommendation engine
  const [engine] = useState(new RecommendationEngine());
  
  // User preferences and selection states
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState(null);
  const [category, setCategory] = useState(null);
  const [style, setStyle] = useState(null);
  const [season, setSeason] = useState('summer');
  const [colorPalette, setColorPalette] = useState(null);
  const [selectedItems, setSelectedItems] = useState({
    top: null,
    bottom: null,
    footwear: null,
    jewelry: null,
    outfit: null
  });
  const [subOptions, setSubOptions] = useState({
    sleeveType: null,
    neckline: null,
    bottomType: null,
    bottomLength: null,
    jewelryStyle: null,
    footwearType: null
  });
  const [userImage, setUserImage] = useState(null);
  const [tryOnMode, setTryOnMode] = useState(false);
  
  // Update recommendation engine when preferences change
  useEffect(() => {
    engine.setSkinTone(skinTone);
    engine.setBodyType(bodyType);
    engine.setBudget(budget);
    engine.setSeason(season);
    engine.setCategory(category);
    engine.setStyle(style);
    engine.setColorPreference(colorPalette);
    
    // Update selected items in engine
    Object.entries(selectedItems).forEach(([type, item]) => {
      if (item) {
        engine.selectItem(type, item);
      }
    });
  }, [engine, skinTone, bodyType, budget, season, category, style, colorPalette, selectedItems]);
  
  // Handle category selection
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedItems({
      top: null,
      bottom: null,
      footwear: null,
      jewelry: null,
      outfit: null
    });
    setSubOptions({
      sleeveType: null,
      neckline: null,
      bottomType: null,
      bottomLength: null,
      jewelryStyle: null,
      footwearType: null
    });
    setStep(2);
  };
  
  // Handle style selection
  const handleStyleSelect = (selectedStyle) => {
    setStyle(selectedStyle);
    setStep(3);
  };
  
  // Handle season selection
  const handleSeasonSelect = (selectedSeason) => {
    setSeason(selectedSeason);
    setStep(4);
  };
  
  // Handle color palette selection
  const handleColorSelect = (selectedColor) => {
    setColorPalette(selectedColor);
    
    // Determine next step based on category
    if (category === 'full-outfit') {
      setStep(5); // Go to outfit selection
    } else if (category === 'tops') {
      setStep(6); // Go to sleeve type selection
    } else if (category === 'bottoms') {
      setStep(7); // Go to bottom type selection
    } else if (category === 'jewelry') {
      setStep(9); // Go to jewelry style selection
    } else if (category === 'footwear') {
      setStep(10); // Go to footwear type selection
    }
  };
  
  // Handle sub-option selection (sleeve type, bottom type, etc.)
  const handleSubOptionSelect = (optionType, value) => {
    setSubOptions({
      ...subOptions,
      [optionType]: value
    });
    
    if (optionType === 'sleeveType') {
      setStep(11); // Go to top selection
    } else if (optionType === 'neckline') {
      setStep(11); // Go to top selection
    } else if (optionType === 'bottomType' || optionType === 'bottomLength') {
      setStep(12); // Go to bottom selection
    } else if (optionType === 'jewelryStyle') {
      setStep(13); // Go to jewelry selection
    } else if (optionType === 'footwearType') {
      setStep(14); // Go to footwear selection
    }
  };
  
  // Handle item selection
  const handleItemSelect = (type, item) => {
    setSelectedItems({
      ...selectedItems,
      [type]: item
    });
    
    // Determine next step based on current selection
    if (type === 'top') {
      setStep(category === 'tops' ? 15 : 12); // Go to bottoms or completion
    } else if (type === 'bottom') {
      setStep(category === 'bottoms' ? 15 : 13); // Go to jewelry or completion
    } else if (type === 'jewelry') {
      setStep(category === 'jewelry' ? 15 : 14); // Go to footwear or completion
    } else if (type === 'footwear' || type === 'outfit') {
      setStep(15); // Go to completion
    }
  };
  
  // Handle budget setting
  const handleBudgetSet = (amount) => {
    setBudget(amount);
    setStep(1); // Go to category selection
  };
  
  // Handle try-on mode
  const handleTryOnToggle = () => {
    setTryOnMode(!tryOnMode);
  };
  
  // Handle image upload
  const handleImageUpload = (image) => {
    setUserImage(image);
  };
  
  // Handle completion
  const handleComplete = () => {
    if (onComplete) {
      onComplete({
        skinTone,
        bodyType,
        budget,
        category,
        style,
        season,
        colorPalette,
        selectedItems,
        subOptions,
        budgetAnalysis: engine.calculateBudget()
      });
    }
  };
  
  // Render appropriate step
  // Get color description for selected color palette
  const getColorDescription = (colorType) => {
    if (!colorType) return '';
    
    const descriptions = {
      warm: "Warm colors include shades of red, orange, yellow, and warm gold. These colors complement warm undertones in skin.",
      cool: "Cool colors include blues, purples, emeralds, and cool pinks. These colors complement cool undertones in skin.",
      light: "Light colors are soft, pastel versions of colors with white added. These create a gentle, airy feel.",
      bright: "Bright colors are vivid and saturated, making bold statements. These include jewel tones and vibrant primary colors.",
      neutral: "Neutral colors include black, white, gray, beige, navy, and earth tones. These versatile colors pair well with almost anything."
    };
    
    return descriptions[colorType] || '';
  };
  
  const renderStep = () => {
    switch (step) {
      case 0: // Budget entry
        return (
          <div className="budget-input-container">
            <h2>Set Your Budget</h2>
            <p>Enter your maximum budget to help us recommend items within your price range.</p>
            <input 
              type="number" 
              placeholder="Enter budget (₹)" 
              onChange={(e) => handleBudgetSet(Number(e.target.value))}
            />
          </div>
        );
      
      case 4: // Color palette selection
        return (
          <ColorPalette 
            skinTone={skinTone}
            recommendedColors={engine.getRecommendedColors()}
            onSelect={handleColorSelect}
          />
        );
        
      case 5: // Full outfit selection
        return (
          <ItemGrid 
            items={engine.getRecommendedItems('outfit')}
            type="outfit"
            title="Recommended Outfits"
            onSelect={(item) => handleItemSelect('outfit', item)}
          />
        );
        
      case 6: // Sleeve type selection for tops
        return (
          <div className="sub-option-selector">
            <h2>Select Sleeve Type</h2>
            <div className="option-grid">
              {['sleeveless', 'short-sleeve', 'three-quarter', 'full-sleeve', 'puff-sleeve', 'bell-sleeve'].map(sleeveType => (
                <div 
                  key={sleeveType}
                  className={`option-item ${subOptions.sleeveType === sleeveType ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('sleeveType', sleeveType)}
                >
                  <img src={`/assets/icons/sleeves-${sleeveType}.png`} alt={sleeveType} />
                  <p>{sleeveType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 7: // Bottom type selection
        return (
          <div className="sub-option-selector">
            <h2>Select Bottom Type</h2>
            <div className="option-grid">
              {['jeans', 'skirt', 'pants', 'shorts', 'palazzo', 'leggings'].map(bottomType => (
                <div 
                  key={bottomType}
                  className={`option-item ${subOptions.bottomType === bottomType ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('bottomType', bottomType)}
                >
                  <img src={`/assets/icons/bottom-${bottomType}.png`} alt={bottomType} />
                  <p>{bottomType.charAt(0).toUpperCase() + bottomType.slice(1)}</p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 8: // Bottom length selection
        return (
          <div className="sub-option-selector">
            <h2>Select Length</h2>
            <div className="option-grid">
              {['short', 'knee', 'midi', 'full', 'ankle'].map(length => (
                <div 
                  key={length}
                  className={`option-item ${subOptions.bottomLength === length ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('bottomLength', length)}
                >
                  <img src={`/assets/icons/length-${length}.png`} alt={length} />
                  <p>{length.charAt(0).toUpperCase() + length.slice(1)}</p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 9: // Jewelry style selection
        return (
          <div className="sub-option-selector">
            <h2>Select Jewelry Style</h2>
            <div className="option-grid">
              {['studs', 'hoops', 'drop', 'choker', 'pendant', 'layered', 'statement', 'traditional'].map(jewelryStyle => (
                <div 
                  key={jewelryStyle}
                  className={`option-item ${subOptions.jewelryStyle === jewelryStyle ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('jewelryStyle', jewelryStyle)}
                >
                  <img src={`/assets/icons/jewelry-${jewelryStyle}.png`} alt={jewelryStyle} />
                  <p>{jewelryStyle.charAt(0).toUpperCase() + jewelryStyle.slice(1)}</p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 10: // Footwear type selection
        return (
          <div className="sub-option-selector">
            <h2>Select Footwear Type</h2>
            <div className="option-grid">
              {['flats', 'heels', 'sneakers', 'boots', 'sandals', 'traditional'].map(footwearType => (
                <div 
                  key={footwearType}
                  className={`option-item ${subOptions.footwearType === footwearType ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('footwearType', footwearType)}
                >
                  <img src={`/assets/icons/footwear-${footwearType}.png`} alt={footwearType} />
                  <p>{footwearType.charAt(0).toUpperCase() + footwearType.slice(1)}</p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 11: // Top selection
        return (
          <ItemGrid 
            items={engine.getRecommendedItems('top')}
            type="top"
            title="Recommended Tops"
            onSelect={(item) => handleItemSelect('top', item)}
          />
        );
        
      case 12: // Bottom selection
        return (
          <ItemGrid 
            items={engine.getCompatibleItems('bottom', selectedItems.top)}
            type="bottom"
            title="Recommended Bottoms"
            subtitle={selectedItems.top ? `Complementary to your selected ${selectedItems.top.name}` : ''}
            onSelect={(item) => handleItemSelect('bottom', item)}
          />
        );
        
      case 13: // Jewelry selection
        return (
          <ItemGrid 
            items={engine.getCompatibleItems('jewelry', null)}
            type="jewelry"
            title="Recommended Jewelry"
            onSelect={(item) => handleItemSelect('jewelry', item)}
          />
        );
        
      case 14: // Footwear selection
        return (
          <ItemGrid 
            items={engine.getCompatibleItems('footwear', null)}
            type="footwear"
            title="Recommended Footwear"
            onSelect={(item) => handleItemSelect('footwear', item)}
          />
        );
        
      case 15: // Final summary
        const budgetAnalysis = engine.calculateBudget();
        return (
          <div className="recommendation-summary">
            <h2>Your Personalized Fashion Recommendations</h2>
            
            <SelectedItems items={selectedItems} />
            
            <BudgetAnalysis analysis={budgetAnalysis} />
            
            <div className="virtual-try-on-section">
              <h3>Want to see how it looks on you?</h3>
              <button onClick={handleTryOnToggle}>
                {tryOnMode ? 'Hide Virtual Try-On' : 'Virtual Try-On'}
              </button>
              
              {tryOnMode && (
                <div className="try-on-container">
                  <p>Upload your photo or use your previously uploaded image</p>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e.target.files[0])} />
                  
                  {userImage && (
                    <VirtualTryOn 
                      userImage={userImage} 
                      selectedItems={selectedItems} 
                    />
                  )}
                </div>
              )}
            </div>
            
            <div className="shop-links">
              <h3>Shop These Items:</h3>
              <div className="shop-buttons">
                <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer">Amazon</a>
                <a href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer">Flipkart</a>
                <a href="https://www.meesho.com/" target="_blank" rel="noopener noreferrer">Meesho</a>
              </div>
            </div>
            
            <button className="restart-button" onClick={() => setStep(0)}>
              Start New Outfit
            </button>
          </div>
        );
        
      default:
        return null;
    }
  };
        );
        
      case 1: // Category selection
        return (
          <CategorySelector 
            onSelect={handleCategorySelect} 
          />
        );
        
      case 2: // Style selection
        return (
          <StyleSelector 
            category={category} 
            onSelect={handleStyleSelect} 
          />
        );
        
      case 3: // Season selection
        return (
          <div className="season-selector">
            <h2>What season are you shopping for?</h2>
            <p>Select a season to get the most appropriate fabric and style recommendations.</p>
            <div className="season-options">
              {Object.keys(seasonalRecommendations).map(seasonOption => (
                <div 
                  key={seasonOption}
                  className={`season-option ${season === seasonOption ? 'selected' : ''}`}
                  onClick={() => handleSeasonSelect(seasonOption)}
                >
                  <img src={`/assets/icons/${seasonOption}.png`} alt={seasonOption} />
                  <h3>{seasonOption.charAt(0).toUpperCase() + seasonOption.slice(1)}</h3>
                  <p>{seasonalRecommendations[seasonOption].description.split('.')[0]}</p>
                </div>
              ))}
            </div>
          </div>