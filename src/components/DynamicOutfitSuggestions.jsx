// src/components/DynamicOutfitSuggestions.jsx - Fixed version
import React, { useState, useEffect } from 'react';
import femaleOutfits from '../data/femaleOutfits';
import maleOutfits from '../data/maleOutfits';

const DynamicOutfitSuggestions = ({ 
  gender, 
  skinTone, 
  bodyType, 
  budget, 
  occasion, 
  style,
  colorPreference,
  onOutfitSelect 
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const outfitData = gender === 'male' ? maleOutfits : femaleOutfits;

  // Get filtered outfits when component mounts or inputs change
  useEffect(() => {
    console.log("Filtering with criteria:", { gender, skinTone, bodyType, budget, occasion, style, colorPreference, outfitData });
    setLoading(true);
    
    // Small delay to show loading state
    setTimeout(() => {
      const filteredOutfits = getFilteredOutfits(
        outfitData,
        {
          skinTone: colorPreference || skinTone,
          bodyType,
          budget: parseBudgetFromBudgetObject(budget),
          occasion,
          style
        }, 
        3
      );
      console.log("Filtered outfits:", filteredOutfits);
      setSuggestions(filteredOutfits);
      setLoading(false);
    }, 300);
  }, [gender, skinTone, bodyType, budget, occasion, style, colorPreference]);

  // Parse budget from your existing budget object format
  const parseBudgetFromBudgetObject = (budgetObj) => {
    if (!budgetObj) return null;
    
    // Handle budget object with range property
    if (budgetObj.range) {
      const rangeMappings = {
        'low': { min: 0, max: 2000 },
        'medium': { min: 2000, max: 5000 },
        'high': { min: 5000, max: 10000 },
        'premium': { min: 10000, max: null },
        'unlimited': { min: 0, max: null }
      };
      
      return rangeMappings[budgetObj.range] || null;
    }
    
    // Handle budget object with amount property
    if (budgetObj.amount || budgetObj.budget) {
      const amount = parseInt(budgetObj.amount || budgetObj.budget);
      if (!isNaN(amount)) {
        return { min: 0, max: amount };
      }
    }
    
    // If it's just a string or number
    if (typeof budgetObj === 'string' || typeof budgetObj === 'number') {
      const amount = parseInt(budgetObj);
      if (!isNaN(amount)) {
        return { min: 0, max: amount };
      }
    }
    
    return null;
  };

  // Get filtered outfits based on user preferences
  const getFilteredOutfits = (outfits, filters, limit = 3) => {
    if (!outfits || !Array.isArray(outfits) || outfits.length === 0) {
      return [];
    }

    // Filter for female only (since male outfits not available)
    

    // Map skin tone to color type
    const skinToneToColorType = {
      'fair': 'cool',
      'light': 'cool',
      'medium': 'warm',
      'tan': 'warm',
      'deep': 'warm',
      'dark': 'cool',
      'warm': 'warm',
      'cool': 'cool',
      'neutral': 'neutral',
      'olive': 'cool'
    };

    const colorType = filters.skinTone ?
      (skinToneToColorType[filters.skinTone.toLowerCase()] || filters.skinTone) :
      'warm'; // Default to warm if not specified

    // Extract body type without gender suffix if present
    const bodyTypeValue = filters.bodyType ?
      filters.bodyType.split('-')[0] :
      null;

    // Map occasions to relevant styles
    const occasionStylePreference = {
      'wedding': ['traditional', 'indo-western', 'formal'],
      'marriage': ['traditional', 'indo-western', 'formal'],
      'festive': ['traditional', 'indo-western', 'casual'],
      'work': ['formal', 'casual'],
      'formal': ['formal', 'traditional', 'indo-western'],
      'business': ['formal'],
      'interview': ['formal'],
      'casual': ['casual', 'ethnic'],
      'daily': ['casual', 'ethnic'],
      'party': ['party', 'indo-western', 'formal', 'casual'],
      'date': ['date', 'indo-western', 'formal', 'casual'],
      'ceremony': ['traditional', 'indo-western', 'formal'],
      'outing': ['casual'],
      'college': ['casual', 'ethnic'],
      'vacation': ['casual', 'ethnic', 'indo-western'],
      'workout': ['casual'], // Adjust if you add specific workout styles
      'other occasion': ['casual', 'formal', 'traditional', 'indo-western', 'ethnic', 'party', 'date', 'work'] // Broad fallback
    };

    const preferredStylesForOccasion = filters.occasion ?
      (occasionStylePreference[filters.occasion.toLowerCase()] || ['casual', 'formal', 'traditional', 'indo-western', 'ethnic']) :
      ['casual', 'formal', 'traditional', 'indo-western', 'ethnic']; // Default to all styles

    // Filter outfits based on criteria
    let filteredOutfits = outfits.filter(outfit => {
      let matchesOccasion = outfit.occasions && filters.occasion ?
        outfit.occasions.map(o => o.toLowerCase()).includes(filters.occasion.toLowerCase()) : true;
      let matchesStyle = filters.style ? outfit.style === filters.style : preferredStylesForOccasion.includes(outfit.style);
      let matchesBodyType = bodyTypeValue ? (outfit.bodyTypes && (outfit.bodyTypes.includes(bodyTypeValue) || outfit.bodyTypes.includes('all'))) : true;
      let matchesColorType = colorType ? outfit.colorType === colorType : true;
      let matchesBudget = filters.budget && filters.budget.max ? outfit.price <= filters.budget.max : true;

      return matchesOccasion && matchesStyle && matchesBodyType && matchesColorType && matchesBudget;
    });

    // Sort outfits by relevance
    filteredOutfits.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;

      // Score for matching occasion
      const occasionA = a.occasions && a.occasions.map(o => o.toLowerCase()).includes(filters.occasion.toLowerCase());
      const occasionB = b.occasions && b.occasions.map(o => o.toLowerCase()).includes(filters.occasion.toLowerCase());
      if (occasionA) scoreA += 5;
      if (occasionB) scoreB += 5;

      // Score for matching style with occasion preference
      if (filters.occasion) {
        const isPreferredStyleA = preferredStylesForOccasion.includes(a.style);
        const isPreferredStyleB = preferredStylesForOccasion.includes(b.style);
        if (isPreferredStyleA) scoreA += 3;
        if (isPreferredStyleB) scoreB += 3;

        // Extra score for exact style match if specified by user
        if (filters.style) {
          if (a.style === filters.style) scoreA += 5;
          if (b.style === filters.style) scoreB += 5;
        }
      }

      // Score for matching color type
      if (colorType && a.colorType === colorType) scoreA += 2;
      if (colorType && b.colorType === colorType) scoreB += 2;

      // Score for matching body type
      if (bodyTypeValue && a.bodyTypes && a.bodyTypes.includes(bodyTypeValue)) scoreA += 1;
      if (bodyTypeValue && b.bodyTypes && b.bodyTypes.includes(bodyTypeValue)) scoreB += 1;

      return scoreB - scoreA;
    });

    // If more matches than limit, randomly select
    if (filteredOutfits.length > limit) {
      // Shuffle array using Fisher-Yates algorithm
      for (let i = filteredOutfits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredOutfits[i], filteredOutfits[j]] = [filteredOutfits[j], filteredOutfits[i]];
      }

      // Return the first 'limit' outfits
      return filteredOutfits.slice(0, limit);
    }

    return filteredOutfits;
  };

  // Handle refreshing suggestions
  const refreshSuggestions = () => {
    setLoading(true);
    setTimeout(() => {
      const filteredOutfits = getFilteredOutfits(
        femaleOutfits, 
        {
          skinTone: colorPreference || skinTone,
          bodyType,
          budget: parseBudgetFromBudgetObject(budget),
          occasion,
          style
        }, 
        3
      );
      setSuggestions(filteredOutfits);
      setLoading(false);
    }, 300);
  };



  if (loading) {
    return (
      <div className="outfit-suggestions-loading">
        <div className="loading-spinner"></div>
        <p>Finding the perfect outfits for you...</p>
      </div>
    );
  }

  if (suggestions.length === 0) {
    return (
      <div className="bg-white/5 rounded-xl p-6 text-center my-6">
        <p className="text-white/70">
          No outfits match your current criteria. Don't worry, we're expanding our collection!
        </p>
      </div>
    );
  }

  return (
    <div className="outfit-container">
      <h3 className="text-xl font-bold mb-6">Recommended Outfits For You</h3>
      
      <div className="outfit-grid">
        {suggestions.map((outfit) => (
          <div 
            key={outfit.id}
            className="outfit-card"
            onClick={() => onOutfitSelect(outfit)}
          >
            <div className="outfit-image">
              <img 
                src={outfit.image} 
                alt={outfit.name} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x400?text=Outfit+Image";
                }}
              />
            </div>
            <div className="outfit-info">
              <h4>{outfit.name}</h4>
              <p className="price">₹{outfit.price}</p>
              <div className="outfit-tags">
                {outfit.style && (
                  <span className="tag style-tag">{outfit.style}</span>
                )}
                {outfit.occasions && outfit.occasions[0] && (
                  <span className="tag occasion-tag">{outfit.occasions[0]}</span>
                )}
              </div>
              <div className="shop-button">
                <a 
                  href={outfit.shopLinks?.flipkart || "https://flipkart.com"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="refresh-suggestions"
        onClick={refreshSuggestions}
      >
        Show Me Different Options
      </button>
    </div>
  );
};

export default DynamicOutfitSuggestions;