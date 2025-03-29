import skinToneRecommendations from '../data/skinToneRecommendations';
import bodyTypeRecommendations from '../data/bodyTypeRecommendations';
import seasonalRecommendations from '../data/seasonalRecommendations';
import eventBasedRecommendations from '../data/eventBasedRecommendations';
import seasonalColorAnalysis from '../data/seasonalColorAnalysis';
import clothingItems from '../data/clothingItems';

class RecommendationEngine {
  constructor() {
    this.userPreferences = {
      skinTone: null,
      bodyType: null,
      gender: null,
      budget: null,
      season: 'summer', // default
      event: null,
      category: null,
      style: null,
      colorPalette: null,
      seasonalColorType: null,
      selectedItems: {
        top: null,
        bottom: null,
        footwear: null,
        jewelry: null,
        outfit: null
      }
    };
  }

  setSkinTone(skinTone) {
    this.userPreferences.skinTone = skinTone;
    return this;
  }

  setBodyType(bodyType) {
    this.userPreferences.bodyType = bodyType;
    return this;
  }
  
  setGender(gender) {
    this.userPreferences.gender = gender;
    return this;
  }

  setBudget(budget) {
    this.userPreferences.budget = budget;
    return this;
  }

  setSeason(season) {
    this.userPreferences.season = season;
    return this;
  }
  
  setEvent(event) {
    this.userPreferences.event = event;
    return this;
  }

  setCategory(category) {
    this.userPreferences.category = category;
    return this;
  }

  setStyle(style) {
    this.userPreferences.style = style;
    return this;
  }

  setColorPalette(colorPalette) {
    this.userPreferences.colorPalette = colorPalette;
    return this;
  }
  
  setSeasonalColorType(seasonalColorType) {
    this.userPreferences.seasonalColorType = seasonalColorType;
    return this;
  }

  selectItem(type, item) {
    this.userPreferences.selectedItems[type] = item;
    return this;
  }

  getRecommendedColors() {
    // Get color recommendations based on skin tone and seasonal color type
    const { skinTone, seasonalColorType } = this.userPreferences;
    
    if (!skinTone) {
      return {
        warm: true,
        cool: true,
        light: true,
        bright: true,
        neutral: true
      };
    }
    
    // If seasonal color type is provided, use that to refine recommendations
    if (seasonalColorType) {
      const seasonalColors = seasonalColorAnalysis[seasonalColorType];
      const skinToneColors = skinToneRecommendations[skinTone].recommendedColors;
      
      // Combine the recommendations, prioritizing seasonal color analysis
      return {
        warm: seasonalColors.bestColors.colors.some(color => 
          ['coral', 'peach', 'orange', 'gold', 'amber', 'warm', 'terracotta', 'rust'].some(warmColor => 
            color.toLowerCase().includes(warmColor)
          )
        ),
        cool: seasonalColors.bestColors.colors.some(color => 
          ['blue', 'purple', 'emerald', 'teal', 'cool', 'lavender', 'mint'].some(coolColor => 
            color.toLowerCase().includes(coolColor)
          )
        ),
        light: ['spring', 'summer'].includes(seasonalColorType) || 
               seasonalColors.bestColors.colors.some(color => 
                 ['light', 'pale', 'soft', 'pastel'].some(lightColor => 
                   color.toLowerCase().includes(lightColor)
                 )
               ),
        bright: ['winter', 'bright-spring', 'bright-winter'].includes(seasonalColorType) || 
                seasonalColors.bestColors.colors.some(color => 
                  ['bright', 'clear', 'vivid'].some(brightColor => 
                    color.toLowerCase().includes(brightColor)
                  )
                ),
        neutral: seasonalColors.bestColors.neutrals && seasonalColors.bestColors.neutrals.length > 0
      };
    }
    
    // Otherwise just use skin tone recommendations
    return skinToneRecommendations[skinTone].recommendedColors;
  }

  getRecommendedFabrics() {
    // Get fabric recommendations based on season and event
    const { season, event, style, gender } = this.userPreferences;
    
    let recommendedFabrics = seasonalRecommendations[season].recommendedFabrics;
    
    // If event is provided, refine by event
    if (event) {
      // Determine traditional or western style
      const styleCategory = (style === 'traditional' || style === 'ethnic') ? 'traditional' : 'western';
      
      // Get event-specific fabric recommendations
      const eventFabrics = eventBasedRecommendations[event][gender][styleCategory].fabrics;
      
      // Find fabrics that match both season and event requirements
      recommendedFabrics = recommendedFabrics.filter(fabric => 
        eventFabrics.some(eventFabric => fabric.includes(eventFabric) || eventFabric.includes(fabric))
      );
      
      // If the intersection is empty, prioritize event fabrics
      if (recommendedFabrics.length === 0) {
        recommendedFabrics = eventFabrics;
      }
    }
    
    return recommendedFabrics;
  }

  getStyleOptions(category) {
    // Get available styles for a category
    const styles = new Set();
    
    clothingItems
      .filter(item => item.category === category && item.gender === this.userPreferences.gender)
      .forEach(item => styles.add(item.style));
    
    return Array.from(styles);
  }

  getRecommendedItems(type, limit = 4) {
    const { 
      skinTone, bodyType, gender, budget, season, event, 
      category, style, colorPalette, seasonalColorType 
    } = this.userPreferences;
    
    // Filter items based on user preferences
    let filteredItems = clothingItems.filter(item => {
      // Filter by type
      if (type && item.type !== type) return false;
      
      // Filter by gender
      if (gender && item.gender !== gender) return false;
      
      // Filter by category if specified
      if (category && item.category !== category) return false;
      
      // Filter by style if specified
      if (style && item.style !== style) return false;
      
      // Filter by budget if specified
      if (budget && item.price > budget) return false;
      
      // Filter by recommended colors for skin tone and seasonal color type
      if (colorPalette && skinTone) {
        const recommendedColors = this.getRecommendedColors();
        if (!recommendedColors[colorPalette] && item.colorType === colorPalette) return false;
      }
      
      // Filter by season-appropriate fabrics
      if (season) {
        const recommendedFabrics = this.getRecommendedFabrics();
        if (!item.fabric.some(fabric => 
          recommendedFabrics.some(recFabric => 
            fabric.includes(recFabric) || recFabric.includes(fabric)
          )
        )) {
          return false;
        }
      }
      
      // Filter by event appropriateness
      if (event) {
        const styleCategory = (style === 'traditional' || style === 'ethnic') ? 'traditional' : 'western';
        const eventRecommendations = eventBasedRecommendations[event][gender][styleCategory];
        
        // Check if item type matches recommended items for the event
        if (type !== 'outfit' && !eventRecommendations.recommendedItems.some(recItem => 
          item.name.toLowerCase().includes(recItem) || recItem.includes(item.name.toLowerCase())
        )) {
          return false;
        }
      }
      
      // Check if suitable for body type
      if (bodyType && item.type !== 'jewelry') {
        const bodyTypeKey = `${bodyType}-${gender}`;
        
        if (!bodyTypeRecommendations[bodyTypeKey]) {
          return true; // Skip body type filtering if the specific body type isn't found
        }
        
        const bodyTypeRecs = bodyTypeRecommendations[bodyTypeKey];
        
        // For tops
        if (item.type === 'top' && bodyTypeRecs.recommendedTops && 
            !bodyTypeRecs.recommendedTops.some(rec => item.style.includes(rec) || rec.includes(item.style))) {
          return false;
        }
        
        // For bottoms
        if (item.type === 'bottom' && bodyTypeRecs.recommendedBottoms && 
            !bodyTypeRecs.recommendedBottoms.some(rec => item.style.includes(rec) || rec.includes(item.style))) {
          return false;
        }
        
        // For traditional wear
        if (style === 'traditional' || style === 'ethnic') {
          if (!bodyTypeRecs.traditionalWear) return true; // Skip if no traditional recommendations
          
          // Match by traditional category
          if (item.traditionalCategory && bodyTypeRecs.traditionalWear[item.traditionalCategory] &&
              !bodyTypeRecs.traditionalWear[item.traditionalCategory].some(rec => 
                item.name.toLowerCase().includes(rec) || rec.includes(item.name.toLowerCase())
              )) {
            return false;
          }
        }
      }
      
      return true;
    });
    
    // Sort by relevance - items that match more criteria come first
    filteredItems.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      
      // Increase score for items that match color preference
      if (colorPalette && a.colorType === colorPalette) scoreA += 2;
      if (colorPalette && b.colorType === colorPalette) scoreB += 2;
      
      // Increase score for items that are highly recommended for body type
      if (bodyType && a.type !== 'jewelry') {
        const bodyTypeKey = `${bodyType}-${gender}`;
        if (bodyTypeRecommendations[bodyTypeKey] && 
            bodyTypeRecommendations[bodyTypeKey].highlyRecommended.some(rec => 
              a.style.includes(rec) || rec.includes(a.style)
            )) {
          scoreA += 3;
        }
      }
      
      if (bodyType && b.type !== 'jewelry') {
        const bodyTypeKey = `${bodyType}-${gender}`;
        if (bodyTypeRecommendations[bodyTypeKey] && 
            bodyTypeRecommendations[bodyTypeKey].highlyRecommended.some(rec => 
              b.style.includes(rec) || rec.includes(b.style)
            )) {
          scoreB += 3;
        }
      }
      
      // Prioritize items that match the season
      if (season && seasonalRecommendations[season].idealStyles.includes(a.style)) scoreA += 1;
      if (season && seasonalRecommendations[season].idealStyles.includes(b.style)) scoreB += 1;
      
      // Prioritize items appropriate for the event
      if (event) {
        const styleCategory = (style === 'traditional' || style === 'ethnic') ? 'traditional' : 'western';
        const eventRecommendations = eventBasedRecommendations[event][gender][styleCategory];
        
        if (eventRecommendations.recommendedItems.some(recItem => 
          a.name.toLowerCase().includes(recItem) || recItem.includes(a.name.toLowerCase())
        )) {
          scoreA += 2;
        }
        
        if (eventRecommendations.recommendedItems.some(recItem => 
          b.name.toLowerCase().includes(recItem) || recItem.includes(b.name.toLowerCase())
        )) {
          scoreB += 2;
        }
      }
      
      // Prioritize seasonal color matching
      if (seasonalColorType) {
        const seasonalColors = seasonalColorAnalysis[seasonalColorType].bestColors;
        
        // Check if item color matches recommended colors
        if (seasonalColors.colors.some(color => 
          a.color.toLowerCase().includes(color) || color.includes(a.color.toLowerCase())
        )) {
          scoreA += 2;
        }
        
        if (seasonalColors.colors.some(color => 
          b.color.toLowerCase().includes(color) || color.includes(b.color.toLowerCase())
        )) {
          scoreB += 2;
        }
      }
      
      return scoreB - scoreA;
    });
    
    // Return limited number of items
    return filteredItems.slice(0, limit);
  }

  getCompatibleItems(type, selectedItem, limit = 4) {
    // Get items that go well with already selected items
    // For example, if a top is selected, find bottoms that complement it
    
    const { skinTone, bodyType, gender, style, colorPalette, seasonalColorType } = this.userPreferences;
    let filteredItems = this.getRecommendedItems(type, limit * 2);
    
    // Additional filtering based on the selected item
    if (selectedItem) {
      // Filter based on color compatibility
      const selectedColor = selectedItem.colorType;
      
      // Sort by color compatibility
      filteredItems.sort((a, b) => {
        let scoreA = 0;
        let scoreB = 0;
        
        // Colors that complement the selected item color get higher score
        // This is a simplified color compatibility check
        if (this.areColorsCompatible(selectedColor, a.colorType)) scoreA += 2;
        if (this.areColorsCompatible(selectedColor, b.colorType)) scoreB += 2;
        
        // Style compatibility
        if (this.areStylesCompatible(selectedItem.style, a.style)) scoreA += 1;
        if (this.areStylesCompatible(selectedItem.style, b.style)) scoreB += 1;
        
        // If selectedItem is traditional, prioritize traditional complements
        if ((selectedItem.style === 'traditional' || selectedItem.style === 'ethnic') && 
            (a.style === 'traditional' || a.style === 'ethnic')) {
          scoreA += 1;
        }
        
        if ((selectedItem.style === 'traditional' || selectedItem.style === 'ethnic') && 
            (b.style === 'traditional' || b.style === 'ethnic')) {
          scoreB += 1;
        }
        
        return scoreB - scoreA;
      });
    }
    
    return filteredItems.slice(0, limit);
  }
  
  areColorsCompatible(color1, color2) {
    // Color compatibility logic
    // This is a simplified version - in reality, you'd have more sophisticated rules
    
    // Complementary colors
    const complementaryPairs = [
      ['warm', 'cool'],
      ['light', 'dark'],
      ['neutral', 'bright']
    ];
    
    // Check if colors are complementary
    for (const pair of complementaryPairs) {
      if ((color1 === pair[0] && color2 === pair[1]) || 
          (color1 === pair[1] && color2 === pair[0])) {
        return true;
      }
    }
    
    // Neutral colors go with everything
    if (color1 === 'neutral' || color2 === 'neutral') {
      return true;
    }
    
    // Same color family can work too
    if (color1 === color2) {
      return true;
    }
    
    return false;
  }
  
  areStylesCompatible(style1, style2) {
    // Style compatibility logic
    
    // Same style family is most compatible
    if (style1 === style2) {
      return true;
    }
    
    // Traditional styles go well together
    if ((style1 === 'traditional' || style1 === 'ethnic') && 
        (style2 === 'traditional' || style2 === 'ethnic')) {
      return true;
    }
    
    // Western styles go well together
    if ((style1 === 'western' || style1 === 'casual' || style1 === 'formal') && 
        (style2 === 'western' || style2 === 'casual' || style2 === 'formal')) {
      return true;
    }
    
    // Fusion styles are compatible with both traditional and western
    if (style1 === 'fusion' || style2 === 'fusion') {
      return true;
    }
    
    // Casual and formal can sometimes work together
    if ((style1 === 'casual' && style2 === 'formal') || 
        (style1 === 'formal' && style2 === 'casual')) {
      return true;
    }
    
    return false;
  }
  
  calculateBudget() {
    const { selectedItems, budget } = this.userPreferences;
    let totalCost = 0;
    let breakdown = {};
    
    // Calculate total cost and breakdown
    for (const [type, item] of Object.entries(selectedItems)) {
      if (item) {
        totalCost += item.price;
        breakdown[type] = item.price;
      }
    }
    
    return {
      totalCost,
      breakdown,
      withinBudget: budget ? totalCost <= budget : true
    };
  }
  
  getSkinToneBasedRecommendations() {
    const { skinTone, gender, style } = this.userPreferences;
    
    if (!skinTone) return null;
    
    const skinToneRecs = skinToneRecommendations[skinTone];
    
    // Get recommendations based on style preference
    const styleKey = (style === 'traditional' || style === 'ethnic') ? 'traditionalWear' : 'westernWear';
    
    return {
      description: skinToneRecs.description,
      colors: skinToneRecs.recommendedColors,
      specificRecommendations: skinToneRecs[styleKey] ? skinToneRecs[styleKey][gender] : null,
      avoidColors: skinToneRecs.avoidColors
    };
  }
  
  getBodyTypeBasedRecommendations() {
    const { bodyType, gender, style } = this.userPreferences;
    
    if (!bodyType) return null;
    
    const bodyTypeKey = `${bodyType}-${gender}`;
    if (!bodyTypeRecommendations[bodyTypeKey]) return null;
    
    const bodyTypeRecs = bodyTypeRecommendations[bodyTypeKey];
    
    // Get specific recommendations based on style preference
    const styleSpecificRecs = (style === 'traditional' || style === 'ethnic') ? 
      bodyTypeRecs.traditionalWear : 
      {
        tops: bodyTypeRecs.recommendedTops,
        bottoms: bodyTypeRecs.recommendedBottoms
      };
    
    return {
      description: bodyTypeRecs.description,
      generalRecommendations: bodyTypeRecs.highlyRecommended,
      specificRecommendations: styleSpecificRecs,
      thingsToAvoid: bodyTypeRecs.avoid
    };
  }
  
  getEventBasedRecommendations() {
    const { event, gender, style } = this.userPreferences;
    
    if (!event) return null;
    
    const styleCategory = (style === 'traditional' || style === 'ethnic') ? 'traditional' : 'western';
    
    return eventBasedRecommendations[event][gender][styleCategory];
  }
  
  getSeasonalColorRecommendations() {
    const { seasonalColorType } = this.userPreferences;
    
    if (!seasonalColorType) return null;
    
    return seasonalColorAnalysis[seasonalColorType];
  }
}

export default RecommendationEngine;