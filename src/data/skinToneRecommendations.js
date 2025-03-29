// Skin tone-based recommendations
const skinToneRecommendations = {
    // Fair/Light skin tones
    'fair': {
      recommendedColors: {
        warm: true,    // Peach, coral, amber
        cool: true,    // Lavender, powder blue, soft pink
        light: true,   // Pastels and soft colors
        bright: false, // Can be overwhelming
        neutral: true  // Beige, taupe, soft white
      },
      description: "For fair skin tones, both cool and warm colors work well. Pastels and soft colors particularly complement this skin tone. Avoid colors that are too bright or neon as they can overwhelm.",
      idealFabrics: ["cotton", "linen", "silk", "cashmere"],
      avoidColors: ["neon", "extremely bright", "orange-red"]
    },
    
    // Medium/Olive skin tones
    'medium': {
      recommendedColors: {
        warm: true,    // Olive green, rich browns, terra cotta
        cool: true,    // Teal, raspberry, deep purple
        light: false,  // Can wash out
        bright: true,  // Works well
        neutral: true  // Camel, taupe, ivory
      },
      description: "Medium skin tones are versatile and can handle both warm and cool colors. Bright colors tend to look excellent, while very light pastels may wash out the complexion.",
      idealFabrics: ["cotton", "linen", "silk", "chambray", "denim"],
      avoidColors: ["pastel yellow", "light gray", "washed-out colors"]
    },
    
    // Tan/Honey skin tones
    'tan': {
      recommendedColors: {
        warm: true,    // Gold, amber, warm red
        cool: true,    // Emerald, deep purple
        light: false,  // Can wash out
        bright: true,  // Excellent choice
        neutral: true  // Cream, olive, taupe
      },
      description: "Tan or honey skin tones look fantastic with rich, vibrant colors. Both warm and cool tones work well, especially jewel tones. Very light colors may not provide enough contrast.",
      idealFabrics: ["linen", "cotton", "silk", "denim", "suede"],
      avoidColors: ["brown tones too close to skin tone", "washed-out pastels"]
    },
    
    // Deep/Dark skin tones
    'deep': {
      recommendedColors: {
        warm: true,    // Bright orange, rust, gold
        cool: true,    // Cobalt blue, magenta, emerald
        light: true,   // Creates nice contrast
        bright: true,  // Very flattering
        neutral: true  // Cream, white, gray
      },
      description: "Deep skin tones can rock nearly any color! Bright and vibrant colors look particularly stunning. Lighter colors create beautiful contrast, while rich jewel tones complement naturally.",
      idealFabrics: ["cotton", "silk", "satin", "velvet", "linen"],
      avoidColors: ["muddy browns", "muted tones that blend into skin"]
    }
  };
  
  export default skinToneRecommendations;