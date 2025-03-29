// Seasonal fashion recommendations
const seasonalRecommendations = {
    'summer': {
      description: "Lightweight, breathable fabrics and brighter colors are perfect for summer fashion.",
      recommendedFabrics: [
        "cotton", "linen", "chambray", "rayon", "lightweight-denim", 
        "silk", "chiffon", "jersey", "eyelet", "seersucker"
      ],
      recommendedColors: [
        "white", "pastels", "bright", "neon", "tropical", 
        "coral", "turquoise", "yellow", "lime", "aqua"
      ],
      idealStyles: [
        "sleeveless", "short-sleeve", "off-shoulder", "crop-top", 
        "shorts", "skirts", "sundress", "sandals", "open-toe", 
        "straw-hat", "light-wash-denim"
      ],
      layeringTips: "Minimal layering with light cardigans or kimonos for evenings",
      avoidItems: [
        "heavy fabrics", "dark colors", "long sleeves", "high necklines", 
        "heavy boots", "thick knits", "wool", "velvet"
      ]
    },
    
    'spring': {
      description: "Spring calls for light to medium-weight fabrics and fresh, floral-inspired colors.",
      recommendedFabrics: [
        "cotton", "linen", "light-denim", "chiffon", "jersey", 
        "lightweight-wool", "silk", "poplin", "chambray"
      ],
      recommendedColors: [
        "pastels", "light green", "lavender", "blush", "sky blue", 
        "coral", "mint", "peach", "yellow", "light neutrals"
      ],
      idealStyles: [
        "floral prints", "light layers", "midi skirts", "cropped pants", 
        "light jackets", "cardigans", "trench coats", "ballet flats", 
        "loafers", "low heels"
      ],
      layeringTips: "Light cardigans, denim jackets, and blazers for versatile layering",
      avoidItems: [
        "heavy winter fabrics", "extremely dark colors", "overly bulky items", 
        "very heavy boots", "thick scarves", "winter accessories"
      ]
    },
    
    'fall': {
      description: "Fall fashion embraces rich, warm colors and medium-weight fabrics for comfortable layering.",
      recommendedFabrics: [
        "denim", "corduroy", "flannel", "tweed", "medium-weight wool", 
        "suede", "leather", "knit", "cotton blends"
      ],
      recommendedColors: [
        "burgundy", "mustard", "olive", "navy", "terracotta", 
        "plum", "rust", "forest green", "pumpkin", "chocolate"
      ],
      idealStyles: [
        "layered", "turtleneck", "sweaters", "blazers", "boots", 
        "leather jackets", "trench coats", "scarves", "ankle boots", 
        "loafers"
      ],
      layeringTips: "Master the art of layering with button-downs under sweaters, light jackets, and scarves",
      avoidItems: [
        "extremely lightweight fabrics", "overly bright summery colors", 
        "open-toe shoes without tights", "tropical prints"
      ]
    },
    
    'winter': {
      description: "Winter fashion focuses on warmth with heavier fabrics, rich textures, and sophisticated darker colors.",
      recommendedFabrics: [
        "wool", "cashmere", "tweed", "flannel", "velvet", 
        "heavy knits", "corduroy", "leather", "faux fur", "fleece"
      ],
      recommendedColors: [
        "black", "gray", "navy", "burgundy", "forest green", 
        "charcoal", "camel", "cream", "chocolate", "plum"
      ],
      idealStyles: [
        "turtlenecks", "sweaters", "long sleeves", "boots", "coats", 
        "scarves", "gloves", "hats", "tights", "layered"
      ],
      layeringTips: "Focus on insulating layers: thermal base, wool mid-layer, and weatherproof outer layer",
      avoidItems: [
        "very thin fabrics", "summer-only items", "open-toe shoes", 
        "exposing too much skin", "insufficient layering"
      ]
    }
  };
  
  export default seasonalRecommendations;