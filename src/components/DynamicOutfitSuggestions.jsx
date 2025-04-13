// src/components/DynamicOutfitSuggestions.jsx - Fixed version
import React, { useState, useEffect } from 'react';
import femaleOutfits from '../data/femaleOutfits';

/**
 * Component that shows filtered outfit suggestions based on the user's existing inputs
 * Designed to fit directly into the existing App.jsx results step
 */
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

  // Get filtered outfits when component mounts or inputs change
  useEffect(() => {
    console.log("Filtering with criteria:", { gender, skinTone, bodyType, budget, occasion, style, colorPreference });
    setLoading(true);
    
    // Small delay to show loading state
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
    if (gender !== 'female') {
      return [];
    }

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

    // Map occasions to standard values
    const occasionMapping = {
      'wedding': ['wedding', 'ceremony'],
      'marriage': ['wedding', 'ceremony'],
      'festive': ['festive', 'ceremony', 'wedding'],
      'work': ['work', 'formal', 'business'],
      'casual': ['casual', 'daily'],
      'party': ['party', 'festive'],
      'date': ['date', 'party']
    };

    // Get expanded occasion values
    const occasionValues = filters.occasion ? 
      (occasionMapping[filters.occasion.toLowerCase()] || [filters.occasion.toLowerCase()]) : 
      null;
    
    console.log("Expanded occasion values:", occasionValues);

    // Filter outfits based on criteria
    let filteredOutfits = outfits.filter(outfit => {
      // For debugging - log each outfit's evaluation
      let matchesOccasion = true;
      let matchesStyle = true;
      let matchesBodyType = true;
      let matchesColorType = true;
      let matchesBudget = true;

      // Filter by color type (skin tone)
      if (colorType && outfit.colorType && outfit.colorType !== colorType) {
        matchesColorType = false;
      }

      // Filter by body type (if specified)
      if (bodyTypeValue && outfit.bodyTypes && 
          !outfit.bodyTypes.includes(bodyTypeValue) && 
          !outfit.bodyTypes.includes('all')) {
        matchesBodyType = false;
      }

      // Filter by budget (if specified)
      if (filters.budget && filters.budget.max && outfit.price > filters.budget.max) {
        matchesBudget = false;
      }

      // Filter by occasion (if specified) - match any of the expanded occasion values
      if (occasionValues && outfit.occasions) {
        matchesOccasion = outfit.occasions.some(outfitOccasion => 
          occasionValues.includes(outfitOccasion.toLowerCase())
        );
      }

      // Filter by style (if specified)
      if (filters.style && outfit.style && outfit.style !== filters.style) {
        matchesStyle = false;
      }

      // For wedding/ceremony occasions, prioritize traditional style
      if ((occasionValues && occasionValues.includes('wedding')) && 
          outfit.style === 'traditional') {
        // Strong preference for traditional wedding outfits
        matchesStyle = true;
      }

      // Log the evaluation results for this outfit
      console.log(`Outfit ${outfit.name}: occasion=${matchesOccasion}, style=${matchesStyle}, bodyType=${matchesBodyType}, colorType=${matchesColorType}, budget=${matchesBudget}`);
      
      // Prioritize occasion and style for wedding settings
      if (occasionValues && occasionValues.includes('wedding')) {
        // For wedding, we care most about having appropriate occasion and style
        return matchesOccasion && (outfit.style === 'traditional' || matchesStyle);
      }

      return matchesOccasion && matchesStyle && matchesBodyType && matchesColorType && matchesBudget;
    });

    console.log(`Found ${filteredOutfits.length} outfits matching all criteria`);

    // If no outfits match all criteria, prioritize traditional wedding outfits
    if (filteredOutfits.length === 0 && filters.occasion && 
        (filters.occasion.toLowerCase() === 'wedding' || filters.occasion.toLowerCase() === 'marriage')) {
      console.log("No matches - trying to find traditional wedding outfits");
      filteredOutfits = outfits.filter(outfit => 
        outfit.style === 'traditional' && 
        outfit.occasions && 
        outfit.occasions.some(occ => ['wedding', 'ceremony', 'festive'].includes(occ))
      );
    }

    // If still no matches, try to match just occasion and style
    if (filteredOutfits.length === 0 && filters.occasion) {
      console.log("No matches - trying with just occasion and style");
      filteredOutfits = outfits.filter(outfit => {
        // Match occasion
        const matchesOccasion = occasionValues && outfit.occasions ? 
          outfit.occasions.some(outfitOccasion => 
            occasionValues.includes(outfitOccasion.toLowerCase())
          ) : true;
          
        // Match style if specified
        const matchesStyle = filters.style && outfit.style ? 
          outfit.style === filters.style : true;
          
        return matchesOccasion && matchesStyle;
      });
    }

    // If still no outfits match, fallback to any traditional or formal outfits
    if (filteredOutfits.length === 0) {
      console.log("No matches - falling back to any traditional or formal outfits");
      filteredOutfits = outfits.filter(outfit => 
        outfit.style === 'traditional' || outfit.style === 'formal'
      );
    }

    // If still no matches, return any outfits up to the limit
    if (filteredOutfits.length === 0) {
      console.log("No matches at all - returning first few outfits");
      return outfits.slice(0, limit);
    }

    console.log(`After fallbacks, found ${filteredOutfits.length} outfits`);

    // Sort outfits by relevance
    filteredOutfits.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      
      // Prioritize traditional style for wedding
      if (filters.occasion && 
          (filters.occasion.toLowerCase() === 'wedding' || 
           filters.occasion.toLowerCase() === 'marriage')) {
        if (a.style === 'traditional') scoreA += 5;
        if (b.style === 'traditional') scoreB += 5;
        
        // And matching occasions
        if (a.occasions && a.occasions.includes('wedding')) scoreA += 3;
        if (b.occasions && b.occasions.includes('wedding')) scoreB += 3;
      }
      
      // General style match
      if (filters.style) {
        if (a.style === filters.style) scoreA += 2;
        if (b.style === filters.style) scoreB += 2;
      }
      
      // Body type match
      if (bodyTypeValue) {
        if (a.bodyTypes && a.bodyTypes.includes(bodyTypeValue)) scoreA += 1;
        if (b.bodyTypes && b.bodyTypes.includes(bodyTypeValue)) scoreB += 1;
      }
      
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

  if (gender !== 'female') {
    return (
      <div className="bg-white/5 rounded-xl p-6 text-center my-6">
        <p className="text-white/70">Outfit suggestions are currently only available for women.</p>
      </div>
    );
  }

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