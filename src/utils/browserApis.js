// src/utils/browserApis.js

// Use built-in canvas API for basic image manipulation
export const overlayClothes = (userImageSrc, clothingImageSrc) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      const userImg = new Image();
      userImg.src = userImageSrc;
      
      userImg.onload = () => {
        canvas.width = userImg.width;
        canvas.height = userImg.height;
        ctx.drawImage(userImg, 0, 0);
        
        const clothingImg = new Image();
        clothingImg.src = clothingImageSrc;
        
        clothingImg.onload = () => {
          // Simple overlay at center position
          ctx.globalAlpha = 0.8; // Semi-transparent
          ctx.drawImage(
            clothingImg,
            canvas.width/2 - clothingImg.width/2,
            canvas.height/2 - clothingImg.height/2
          );
          
          // Return the combined image as data URL
          resolve(canvas.toDataURL('image/png'));
        };
      };
    });
  };