

/**
 * Simple skin tone detection in JavaScript
 * Extracts the dominant skin color from a captured image
 */

// Define skin tone colors with HEX codes
const SKIN_TONES = [
    { name: "Fair", hex: "#F5DBCB", colorType: "cool" },
    { name: "Light Brown", hex: "#E0B193", colorType: "warm" },
    { name: "Medium Brown", hex: "#C68B59", colorType: "warm" },
    { name: "Tan", hex: "#B67C4A", colorType: "warm" },
    { name: "Deep", hex: "#8D5524", colorType: "warm" },
    { name: "Dark Brown", hex: "#6B4423", colorType: "cool" },
    { name: "Rich Dark", hex: "#523624", colorType: "cool" },
    { name: "Ebony", hex: "#3D2314", colorType: "cool" }
  ];
  
  /**
   * Extract dominant color from an image
   * @param {string} imageDataUrl - Base64 encoded image data URL
   * @returns {Promise<{r: number, g: number, b: number}>} RGB values of dominant color
   */
  const extractDominantColor = (imageDataUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        try {
          // Create canvas to analyze pixels
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          const size = Math.min(img.width, img.height);
          
          // We'll sample from the center of the image where the face is likely to be
          const centerX = img.width / 2;
          const centerY = img.height / 2;
          
          // Draw only the center portion of the image 
          // (assume face is in center, reduces non-skin pixels)
          canvas.width = size / 2;
          canvas.height = size / 2;
          context.drawImage(
            img, 
            centerX - size/4, 
            centerY - size/4, 
            size/2, 
            size/2, 
            0, 
            0, 
            canvas.width, 
            canvas.height
          );
          
          // Get image data
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          
          // Filter pixels for skin tones
          let r = 0, g = 0, b = 0;
          let pixelCount = 0;
          
          for (let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];
            
            // Very basic skin tone filter (can be improved)
            if (isSkinTone(red, green, blue)) {
              r += red;
              g += green;
              b += blue;
              pixelCount++;
            }
          }
          
          // Average the filtered pixels
          if (pixelCount > 0) {
            resolve({
              r: Math.round(r / pixelCount),
              g: Math.round(g / pixelCount),
              b: Math.round(b / pixelCount)
            });
          } else {
            // Fallback if no skin pixels found
            reject("No skin pixels detected in image");
          }
        } catch (err) {
          reject(err);
        }
      };
      img.onerror = () => reject("Failed to load image");
      img.src = imageDataUrl;
    });
  };
  
  /**
   * Very basic skin tone detection heuristic
   * Can be improved with more sophisticated algorithms
   */
  const isSkinTone = (r, g, b) => {
    // Basic rule: R > G > B for most skin tones
    const isSkin = (r > g) && (g > b);
    
    // Additional constraints to filter non-skin pixels
    const rgDifference = r - g;
    const isNotRed = (rgDifference <= 50); // Not too red
    
    // We want warm tones, not grays
    const rgSum = r + g;
    const isWarm = (rgSum > b * 2.1);
    
    // Basic brightness check (not too dark or bright)
    const brightness = (r + g + b) / 3;
    const isMidtone = brightness > 30 && brightness < 230;
    
    return isSkin && isNotRed && isWarm && isMidtone;
  };
  
  /**
   * Convert RGB to HEX
   */
  const rgbToHex = ({ r, g, b }) => {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };
  
  /**
   * Find the nearest skin tone match for a given RGB value
   * @param {Object} rgb - RGB values
   * @returns {Object} Matched skin tone info
   */
  const findNearestSkinTone = (rgb) => {
    const hex = rgbToHex(rgb).toUpperCase();
    
    // Convert HEX to RGB for SKIN_TONES
    const skinTonesRGB = SKIN_TONES.map(tone => {
      const r = parseInt(tone.hex.slice(1, 3), 16);
      const g = parseInt(tone.hex.slice(3, 5), 16);
      const b = parseInt(tone.hex.slice(5, 7), 16);
      return { ...tone, r, g, b };
    });
    
    // Find closest match using color distance
    let closestTone = skinTonesRGB[0];
    let minDistance = Number.MAX_VALUE;
    
    for (const tone of skinTonesRGB) {
      const distance = Math.sqrt(
        Math.pow(rgb.r - tone.r, 2) +
        Math.pow(rgb.g - tone.g, 2) +
        Math.pow(rgb.b - tone.b, 2)
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        closestTone = tone;
      }
    }
    
    return {
      name: closestTone.name,
      hex: closestTone.hex,
      colorType: closestTone.colorType,
      detectedHex: hex,
      rgb: rgb
    };
  };
  
  /**
   * Analyze skin tone from an image data URL
   * @param {string} imageDataUrl - Base64 encoded image
   * @returns {Promise<Object>} Skin tone analysis result
   */
  export const analyzeSkinTone = async (imageDataUrl) => {
    try {
      const dominantColor = await extractDominantColor(imageDataUrl);
      const skinTone = findNearestSkinTone(dominantColor);
      
      return {
        ...skinTone,
        success: true
      };
    } catch (error) {
      console.error("Skin tone analysis failed:", error);
      return {
        success: false,
        error: error.toString(),
        // Fallback to a default tone
        name: "Medium Brown",
        hex: "#C68B59",
        colorType: "warm"
      };
    }
  };
  
  export default analyzeSkinTone;