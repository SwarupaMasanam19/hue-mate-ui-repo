// Seasonal Color Analysis Guide
const seasonalColorAnalysis = {
    // Spring Color Season - Warm and Bright
    'spring': {
      description: "Spring color palettes are warm, fresh, and clear. People with Spring coloring typically have warm undertones, clear eyes, and hair with golden highlights.",
      characteristics: {
        skinTone: "Warm, golden or peachy undertones. Typically fair to medium.",
        eyes: "Clear, bright - blue, green, topaz, warm brown, or hazel with golden flecks.",
        hair: "Blonde (golden, strawberry), auburn, light to medium brown with golden highlights."
      },
      bestColors: {
        neutrals: ["ivory", "camel", "warm beige", "light to medium browns", "warm grays"],
        colors: ["coral", "peach", "warm orange", "golden yellow", "warm green", "periwinkle blue", "aqua"],
        metallics: ["gold", "copper", "bronze"]
      },
      worstColors: {
        avoid: ["black", "cool gray", "navy", "stark white", "cool icy colors", "burgundy"]
      },
      subtypes: {
        'light-spring': {
          description: "The lightest and most delicate of the Spring palette with less warmth.",
          bestColors: ["light apricot", "peach", "light warm yellow", "warm pink", "light aqua"]
        },
        'warm-spring': {
          description: "The warmest Spring palette with golden undertones.",
          bestColors: ["golden brown", "terracotta", "warm coral", "golden yellow", "olive green"]
        },
        'bright-spring': {
          description: "The most vibrant Spring palette with more contrast and clarity.",
          bestColors: ["bright coral", "clear yellow", "bright turquoise", "vivid green", "warm bright pink"]
        }
      },
      style: {
        fabrics: ["lightweight", "textured", "slightly shiny", "natural fibers with sheen"],
        patterns: ["floral", "organic", "watercolor", "warm-based prints"],
        jewelry: ["gold", "copper", "bronze", "coral", "amber", "pearl"],
        makeup: {
          lips: ["coral", "peach", "warm pink", "clear salmon"],
          cheeks: ["peach", "coral", "warm pink"],
          eyes: ["warm browns", "peach", "soft gold", "moss green", "aqua"]
        }
      }
    },
    
    // Summer Color Season - Cool and Soft
    'summer': {
      description: "Summer color palettes are cool, soft, and muted. People with Summer coloring typically have cool undertones, soft eyes, and hair with ash undertones.",
      characteristics: {
        skinTone: "Cool, pink or blue undertones. Typically fair to medium with a rosy hint.",
        eyes: "Soft, muted - blue, gray, cool brown, hazel with bluish flecks.",
        hair: "Blonde (ash), light to medium ash brown, graying brown/blonde."
      },
      bestColors: {
        neutrals: ["soft white", "cool beige", "taupe", "gray", "powder blue", "lavender", "mauve"],
        colors: ["soft blue", "periwinkle", "plum", "raspberry", "rose pink", "powder pink", "sage green"],
        metallics: ["silver", "white gold", "platinum"]
      },
      worstColors: {
        avoid: ["black", "orange", "bright yellow", "warm browns", "tomato red", "bright colors"]
      },
      subtypes: {
        'light-summer': {
          description: "The lightest and brightest of the Summer palette.",
          bestColors: ["powder blue", "light pink", "soft lavender", "pale aqua", "light gray"]
        },
        'cool-summer': {
          description: "The coolest Summer palette with blue undertones.",
          bestColors: ["blue-gray", "cool pink", "soft blue", "blue-green", "raspberry"]
        },
        'soft-summer': {
          description: "The most muted Summer palette with slightly more warmth.",
          bestColors: ["mauve", "dusty pink", "sage green", "soft gray-blue", "taupe"]
        }
      },
      style: {
        fabrics: ["matte", "soft textured", "lightweight", "cashmere", "cotton"],
        patterns: ["watercolor", "soft florals", "subtle patterns", "cool-based prints"],
        jewelry: ["silver", "white gold", "pearl", "rose quartz", "moonstone"],
        makeup: {
          lips: ["soft pink", "rose", "mauve", "plum"],
          cheeks: ["soft rose", "cool pink", "mauve"],
          eyes: ["soft gray", "mauve", "cool brown", "dusty blue", "lavender"]
        }
      }
    },
    
    // Autumn Color Season - Warm and Muted
    'autumn': {
      description: "Autumn color palettes are warm, rich, and muted. People with Autumn coloring typically have warm undertones, rich eyes, and hair with red, golden or brown tones.",
      characteristics: {
        skinTone: "Warm, golden or amber undertones. Typically ivory to deep bronze, often with freckles.",
        eyes: "Rich, warm - amber, hazel, green, deep brown, or warm blue with golden flecks.",
        hair: "Red, auburn, golden brown, chestnut, copper, or dark brown with warm highlights."
      },
      bestColors: {
        neutrals: ["ivory", "camel", "khaki", "olive", "chocolate", "warm brown", "moss"],
        colors: ["terracotta", "rust", "pumpkin", "olive green", "forest green", "teal", "mustard yellow"],
        metallics: ["gold", "bronze", "copper", "antiqued metals"]
      },
      worstColors: {
        avoid: ["stark white", "black", "fuchsia", "icy pastels", "clear bright colors", "cool blues"]
      },
      subtypes: {
        'soft-autumn': {
          description: "The softest and most muted Autumn palette with less intensity.",
          bestColors: ["soft olive", "dusty teal", "warm taupe", "dull gold", "muted rose"]
        },
        'warm-autumn': {
          description: "The warmest Autumn palette with most golden undertones.",
          bestColors: ["rust", "golden brown", "olive green", "mustard", "amber"]
        },
        'deep-autumn': {
          description: "The deepest Autumn palette with more intensity and contrast.",
          bestColors: ["burgundy", "deep teal", "forest green", "chocolate brown", "deep gold"]
        }
      },
      style: {
        fabrics: ["textured", "nubby", "suede", "leather", "matte", "tweed"],
        patterns: ["earthy", "nature-inspired", "paisley", "warm-based prints"],
        jewelry: ["gold", "copper", "bronze", "amber", "wooden", "earthy stones"],
        makeup: {
          lips: ["terracotta", "brick red", "warm berry", "cinnamon"],
          cheeks: ["terracotta", "warm peach", "soft coral"],
          eyes: ["olive", "copper", "bronze", "warm brown", "forest green"]
        }
      }
    },
    
    // Winter Color Season - Cool and Bright
    'winter': {
      description: "Winter color palettes are cool, clear, and high contrast. People with Winter coloring typically have cool undertones, clear eyes, and hair with ash or cool tones.",
      characteristics: {
        skinTone: "Cool, blue or pink undertones. Typically porcelain, olive, or deep ebony.",
        eyes: "Clear, contrasting - deep brown, black-brown, cool blue, icy blue, or clear green.",
        hair: "Black, dark to medium cool brown, ash brown, silver, or cool platinum blonde."
      },
      bestColors: {
        neutrals: ["pure white", "black", "navy", "charcoal", "cool gray", "ice blue"],
        colors: ["royal blue", "emerald green", "true red", "fuchsia", "purple", "ice pink", "lemon yellow"],
        metallics: ["silver", "platinum", "white gold", "chrome"]
      },
      worstColors: {
        avoid: ["muted colors", "warm browns", "orange", "gold", "mustard", "olive"]
      },
      subtypes: {
        'cool-winter': {
          description: "The coolest Winter palette with icy blue undertones.",
          bestColors: ["true blue", "magenta", "emerald", "icy blue", "blue-red"]
        },
        'deep-winter': {
          description: "The deepest Winter palette with slightly more richness.",
          bestColors: ["burgundy", "deep purple", "deep emerald", "ruby red", "dark navy"]
        },
        'bright-winter': {
          description: "The brightest Winter palette with more clarity and contrast.",
          bestColors: ["bright red", "hot pink", "electric blue", "lemon yellow", "bright purple"]
        }
      },
      style: {
        fabrics: ["smooth", "crisp", "high sheen", "silk", "satin", "glass-like"],
        patterns: ["geometric", "high contrast", "sharp", "graphic", "cool-based prints"],
        jewelry: ["silver", "platinum", "white gold", "diamonds", "clear stones", "sapphire"],
        makeup: {
          lips: ["blue-red", "true red", "fuchsia", "plum", "cool pink"],
          cheeks: ["cool pink", "clear red", "cool rose"],
          eyes: ["charcoal", "navy", "silver", "cool purple", "ice blue"]
        }
      }
    }
  };
  
  export default seasonalColorAnalysis;