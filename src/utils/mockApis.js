// src/utils/mockApis.js
export const detectSkinTone = (imageData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          skinTone: 'warm',
          confidence: 0.92,
          hex: '#E3B98F'
        });
      }, 1000);
    });
  };
  
  export const virtualTryOn = (userImage, clothingItems) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(userImage); // Just return original image for demo
      }, 1000);
    });
  };
  
  export const detectBodyShape = (imageData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('hourglass-women');
      }, 1000);
    });
  };