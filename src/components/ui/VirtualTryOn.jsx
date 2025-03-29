import React, { useState, useEffect, useRef } from 'react';

const VirtualTryOn = ({ userImage, selectedItems }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  
  // Convert file to data URL
  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  
  // Load images for items
  const loadItemImages = async () => {
    const itemImages = {};
    const { top, bottom, footwear, jewelry, outfit } = selectedItems;
    
    try {
      // If it's a full outfit, just load that
      if (outfit) {
        const outfitImg = await loadImage(outfit.imageUrl);
        itemImages.outfit = outfitImg;
      } else {
        // Otherwise load individual items
        if (top) {
          const topImg = await loadImage(top.imageUrl);
          itemImages.top = topImg;
        }
        
        if (bottom) {
          const bottomImg = await loadImage(bottom.imageUrl);
          itemImages.bottom = bottomImg;
        }
        
        if (footwear) {
          const footwearImg = await loadImage(footwear.imageUrl);
          itemImages.footwear = footwearImg;
        }
        
        if (jewelry) {
          const jewelryImg = await loadImage(jewelry.imageUrl);
          itemImages.jewelry = jewelryImg;
        }
      }
      
      return itemImages;
    } catch (err) {
      throw new Error('Failed to load item images');
    }
  };
  
  // Helper function to load an image
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  };
  
  // Overlay clothes on user image
  const overlayClothes = async () => {
    try {
      setLoading(true);
      
      // Get canvas context
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Load user image
      let userImg;
      if (typeof userImage === 'string') {
        userImg = await loadImage(userImage);
      } else {
        const userImageUrl = await fileToDataUrl(userImage);
        userImg = await loadImage(userImageUrl);
      }
      
      // Resize canvas to match user image aspect ratio
      const aspectRatio = userImg.width / userImg.height;
      canvas.width = 500;
      canvas.height = 500 / aspectRatio;
      
      // Draw user image on canvas
      ctx.drawImage(userImg, 0, 0, canvas.width, canvas.height);
      
      // Load item images
      const itemImages = await loadItemImages();
      
      // Overlay clothes
      // Note: In a real implementation, you would use body segmentation to
      // accurately place clothing items on the user's body.
      // This is a simplified version for demonstration purposes.
      
      // Draw outfit or individual items
      if (itemImages.outfit) {
        // Overlay full outfit (simplified)
        const outfitImg = itemImages.outfit;
        ctx.globalAlpha = 0.8; // Semi-transparent for demo
        ctx.drawImage(
          outfitImg, 
          canvas.width * 0.1, 
          canvas.height * 0.2, 
          canvas.width * 0.8, 
          canvas.height * 0.7
        );
        ctx.globalAlpha = 1.0;
      } else {
        // Draw individual items
        
        // Top (upper body)
        if (itemImages.top) {
          ctx.globalAlpha = 0.8;
          ctx.drawImage(
            itemImages.top,
            canvas.width * 0.15,
            canvas.height * 0.2,
            canvas.width * 0.7,
            canvas.height * 0.3
          );
          ctx.globalAlpha = 1.0;
        }
        
        // Bottom (lower body)
        if (itemImages.bottom) {
          ctx.globalAlpha = 0.8;
          ctx.drawImage(
            itemImages.bottom,
            canvas.width * 0.15,
            canvas.height * 0.5,
            canvas.width * 0.7,
            canvas.height * 0.4
          );
          ctx.globalAlpha = 1.0;
        }
        
        // Footwear
        if (itemImages.footwear) {
          ctx.globalAlpha = 0.8;
          ctx.drawImage(
            itemImages.footwear,
            canvas.width * 0.3,
            canvas.height * 0.85,
            canvas.width * 0.4,
            canvas.height * 0.13
          );
          ctx.globalAlpha = 1.0;
        }
        
        // Jewelry (simplified placement)
        if (itemImages.jewelry) {
          ctx.globalAlpha = 0.9;
          ctx.drawImage(
            itemImages.jewelry,
            canvas.width * 0.4,
            canvas.height * 0.1,
            canvas.width * 0.2,
            canvas.height * 0.1
          );
          ctx.globalAlpha = 1.0;
        }
      }
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  
  // Trigger overlay process when component mounts or when selected items change
  useEffect(() => {
    if (userImage && canvasRef.current) {
      overlayClothes();
    }
  }, [userImage, selectedItems]);
  
  return (
    <div className="virtual-try-on">
      <h3>Virtual Try-On</h3>
      
      {loading && (
        <div className="loading-overlay">
          <p>Processing your image...</p>
          <div className="spinner"></div>
        </div>
      )}
      
      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      )}
      
      <div className="try-on-canvas-container">
        <canvas ref={canvasRef} />
      </div>
      
      <div className="try-on-notes">
        <p>
          This is a simplified virtual try-on. For the most accurate results, 
          upload a front-facing, full-body photo with a neutral background.
        </p>
        <p>
          <small>
            Note: This is a basic overlay. A production app would use advanced body 
            segmentation algorithms for precise placement.
          </small>
        </p>
      </div>
    </div>
  );
};

export default VirtualTryOn;