// src/utils/outfitUtils.js

import fashionItems from '../data/fashionItems';

/**
 * Creates sample outfit combinations from individual fashion items
 * @param {Object} params - Parameters for creating outfits
 * @param {string} params.gender - 'female' or 'male'
 * @param {string} params.skinTone - Skin tone (e.g., 'warm', 'cool')
 * @param {string} params.bodyType - Body type (e.g., 'hourglass', 'rectangle')
 * @param {string} params.occasion - Occasion (e.g., 'casual', 'formal')
 * @param {number} count - Number of outfits to generate
 * @returns {Array} Array of outfit objects
 */
export const createSampleOutfits = ({ gender, skinTone, bodyType, occasion, style, colorPreference }, count = 4) => {
  // Filter tops based on gender, occasion, etc.
  const filteredTops = fashionItems.tops.filter(item => 
    item.gender === gender && 
    (colorPreference ? item.colorType === colorPreference : true) &&
    (occasion ? item.occasions.includes(occasion) : true) &&
    (style ? item.style === style : true)
  );
  
  // Filter bottoms based on gender, occasion, etc.
  const filteredBottoms = fashionItems.bottoms.filter(item => 
    item.gender === gender && 
    (colorPreference ? item.colorType === colorPreference : true) &&
    (occasion ? item.occasions.includes(occasion) : true) &&
    (style ? item.style === style : true)
  );
  
  // Filter jewelry based on gender, occasion, etc.
  const filteredJewelry = fashionItems.jewelry.filter(item => 
    item.gender === gender &&
    (occasion ? item.occasions.includes(occasion) : true)
  );
  
  // Filter footwear based on gender, occasion, etc.
  const filteredFootwear = fashionItems.footwear.filter(item => 
    item.gender === gender &&
    (occasion ? item.occasions.includes(occasion) : true)
  );
  
  // If no items found after filtering, use all items for the gender
  const tops = filteredTops.length > 0 ? filteredTops : fashionItems.tops.filter(item => item.gender === gender);
  const bottoms = filteredBottoms.length > 0 ? filteredBottoms : fashionItems.bottoms.filter(item => item.gender === gender);
  const jewelry = filteredJewelry.length > 0 ? filteredJewelry : fashionItems.jewelry.filter(item => item.gender === gender);
  const footwear = filteredFootwear.length > 0 ? filteredFootwear : fashionItems.footwear.filter(item => item.gender === gender);
  
  // Generate outfits
  const outfits = [];
  
  for (let i = 0; i < count && i < tops.length; i++) {
    // Get items (use modulo to loop through available items)
    const top = tops[i % tops.length];
    const bottom = bottoms[i % bottoms.length];
    const jewel = jewelry[i % jewelry.length];
    const shoes = footwear[i % footwear.length];
    
    // Skip if we don't have enough items
    if (!top || !bottom) continue;
    
    // Create outfit object
    const outfit = {
      id: `outfit-${i+1}`,
      name: `${top.name} & ${bottom.name} Outfit`,
      image: top.image, // Use top's image as outfit image
      imageSecondary: bottom.image, // Secondary image
      items: {
        top,
        bottom,
        jewelry: jewel,
        footwear: shoes
      },
      price: top.price + bottom.price + (jewel ? jewel.price : 0) + (shoes ? shoes.price : 0),
      description: `A stylish outfit featuring a ${top.name} and ${bottom.name}, perfect for ${occasion || 'any occasion'}.`,
      occasions: occasion ? [occasion] : top.occasions,
      style: style || top.style,
      color: top.color,
      colorType: top.colorType,
      gender,
      bodyType: bodyType || top.bodyType,
      shopLinks: {
        ...(top.shopLinks || {}),
        ...(bottom.shopLinks || {})
      }
    };
    
    outfits.push(outfit);
  }
  
  // Fallback if we couldn't create enough outfits
  if (outfits.length === 0) {
    return [
      {
        id: 'fallback-outfit-1',
        name: "Stylish Ensemble",
        image: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620203/Screenshot_2024-12-31_101310_em86l5.png",
        price: 5999,
        description: "A beautiful outfit perfect for your preferences.",
        occasions: [occasion || 'casual'],
        style: style || 'casual',
        color: 'multiple',
        gender,
        bodyType,
        shopLinks: {
          flipkart: "https://www.flipkart.com/",
          meesho: "https://www.meesho.com/"
        }
      },
      {
        id: 'fallback-outfit-2',
        name: "Elegant Attire",
        image: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620073/Screenshot_2024-12-31_101055_ld1lql.png",
        price: 4999,
        description: "An elegant outfit that matches your style preferences.",
        occasions: [occasion || 'formal'],
        style: style || 'formal',
        color: 'multiple',
        gender,
        bodyType,
        shopLinks: {
          flipkart: "https://www.flipkart.com/",
          meesho: "https://www.meesho.com/"
        }
      }
    ];
  }
  
  return outfits;
};

/**
 * Creates complete outfit data including accessory recommendations
 * @param {Object} userPreferences - User's style preferences
 * @returns {Object} Complete outfit recommendations
 */
export const getCompleteOutfitRecommendations = (userPreferences) => {
  const outfits = createSampleOutfits(userPreferences, 4);
  
  // Generate accessory recommendations
  const accessories = {
    jewelry: fashionItems.jewelry.filter(item => 
      item.gender === userPreferences.gender
    ).slice(0, 2),
    
    footwear: fashionItems.footwear.filter(item => 
      item.gender === userPreferences.gender
    ).slice(0, 2)
  };
  
  return {
    outfits,
    accessories
  };
};