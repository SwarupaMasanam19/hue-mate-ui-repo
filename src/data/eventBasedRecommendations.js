// Event-based fashion recommendations
const eventBasedRecommendations = {
    'wedding': {
      description: "Elegant, celebratory attire appropriate for wedding ceremonies and receptions.",
      formalityLevel: "Formal to Semi-formal",
      women: {
        western: {
          recommendedItems: [
            "floor-length gown", "formal cocktail dress", "elegant jumpsuit", 
            "structured dress", "coordinated separates"
          ],
          colors: [
            "pastels", "jewel tones", "metallics", "rich colors", 
            "avoid white unless specified", "black for evening"
          ],
          fabrics: ["silk", "chiffon", "velvet", "satin", "lace"],
          accessories: [
            "statement jewelry", "clutch purse", "elegant heels", 
            "dressy flats", "formal wraps or shawls"
          ],
          tips: [
            "Consider the wedding venue and time of day",
            "Respect cultural dress codes if applicable",
            "Avoid anything too revealing or attention-grabbing",
            "Opt for elegant rather than trendy pieces"
          ]
        },
        traditional: {
          recommendedItems: [
            "heavy silk saree", "embellished lehenga", "designer anarkali", 
            "elegant banarasi saree", "formal silk salwar kameez"
          ],
          colors: [
            "rich reds", "royal blues", "emerald greens", "royal purples", 
            "metallics", "pastels for daytime"
          ],
          fabrics: ["silk", "banarasi", "kanjeevaram", "georgette with embroidery", "velvet"],
          accessories: [
            "statement jewelry sets", "embellished clutch", "embroidered juttis", 
            "elegant heels", "silk potli bags"
          ],
          tips: [
            "Choose richer fabrics and embellishments for evening ceremonies",
            "Consider the regional or religious customs",
            "Drape style matters - choose formal draping for sarees",
            "Invest in good quality jewelry that complements the outfit"
          ]
        }
      },
      men: {
        western: {
          recommendedItems: [
            "tailored suit", "tuxedo for black tie", "blazer with dress pants", 
            "dress shirt with tie", "formal shoes"
          ],
          colors: [
            "navy", "charcoal", "black for evening", "subtle patterns", 
            "coordinated but not matching accessories"
          ],
          fabrics: ["wool", "linen for daytime", "cotton blends", "silk blends"],
          accessories: [
            "quality tie", "pocket square", "cufflinks", 
            "dress watch", "formal leather shoes"
          ],
          tips: [
            "Ensure proper fit - tailoring makes a difference",
            "Match leathers (belt and shoes)",
            "Consider the wedding location and climate",
            "When in doubt, a navy suit is versatile and appropriate"
          ]
        },
        traditional: {
          recommendedItems: [
            "embroidered sherwani", "designer kurta pajama", "bandhgala suit", 
            "silk kurta with churidar", "dhoti kurta for certain ceremonies"
          ],
          colors: [
            "rich maroons", "royal blues", "deep greens", "elegant beige", 
            "cream with gold work", "pastels for daytime"
          ],
          fabrics: ["silk", "brocade", "jamawar", "velvet", "linen for day ceremonies"],
          accessories: [
            "embroidered juttis", "pearl or gemstone buttons", "silk pocket square", 
            "elegant stole", "traditional jewelry if appropriate"
          ],
          tips: [
            "Match the formality to the ceremony - more elaborate for main ceremonies",
            "Consider regional traditions and expectations",
            "Coordinate but don't match exactly with partner's outfit",
            "Pay attention to the quality of embroidery and detail work"
          ]
        }
      }
    },
    
    'corporate': {
      description: "Professional attire for office environments, business meetings, and formal workplace settings.",
      formalityLevel: "Formal to Business Casual",
      women: {
        western: {
          recommendedItems: [
            "tailored pantsuits", "pencil skirts", "button-down shirts", 
            "structured dresses", "blazers", "tailored trousers"
          ],
          colors: [
            "navy", "black", "gray", "burgundy", "forest green", 
            "neutral tones", "subtle patterns"
          ],
          fabrics: ["wool blends", "cotton", "linen blends", "silk blends", "tweed"],
          accessories: [
            "simple pearl or stud earrings", "structured handbag", "leather pumps", 
            "classic watch", "leather belt", "silk scarves"
          ],
          tips: [
            "Quality over quantity - invest in well-made basics",
            "Ensure proper fit for a professional appearance",
            "Consider your industry's specific dress code expectations",
            "Keep makeup and fragrance subtle"
          ]
        },
        traditional: {
          recommendedItems: [
            "cotton or silk sarees", "tailored salwar kameez", "kurta with trousers", 
            "straight-cut suits", "fusion jacket with traditional bottom"
          ],
          colors: [
            "muted tones", "navy", "maroon", "forest green", "beige", 
            "subtle prints", "solid colors"
          ],
          fabrics: ["cotton", "cotton silk", "linen", "light wool", "khadi"],
          accessories: [
            "simple jewelry", "structured bag", "comfortable formal footwear", 
            "simple watches", "minimal bindis"
          ],
          tips: [
            "Choose lightweight, breathable fabrics",
            "Opt for simpler embroidery and minimal embellishments",
            "Ensure the outfit allows ease of movement and comfort for all-day wear",
            "Balance between traditional and professional"
          ]
        }
      },
      men: {
        western: {
          recommendedItems: [
            "business suits", "dress shirts", "dress trousers", 
            "ties", "leather belts", "dress shoes"
          ],
          colors: [
            "navy", "charcoal", "gray", "black", "subtle pinstripes", 
            "conservative patterns", "white or light blue shirts"
          ],
          fabrics: ["wool", "cotton", "linen for summer", "high-quality blends"],
          accessories: [
            "quality leather shoes", "coordinated belt", "conservative tie", 
            "simple cufflinks", "professional watch"
          ],
          tips: [
            "Proper fit is crucial - shoulders and sleeve length matter",
            "Keep shoes well-polished and in good condition",
            "Match belt to shoes",
            "Consider a signature tie or subtle accessory to stand out appropriately"
          ]
        },
        traditional: {
          recommendedItems: [
            "bandhgala suits", "formal kurta pajama", "nehru jackets with trousers", 
            "straight-cut kurtas with formal pants", "formal jodhpuri suit"
          ],
          colors: [
            "navy", "black", "gray", "beige", "white", 
            "subtle textures", "minimal patterns"
          ],
          fabrics: ["cotton", "linen", "silk cotton", "wool blends", "khadi"],
          accessories: [
            "formal leather shoes", "leather belt", "simple buttons", 
            "professional watch", "minimal traditional elements"
          ],
          tips: [
            "Ensure neat and precise tailoring",
            "Keep embroidery and detail work minimal and sophisticated",
            "Consider fusion elements that balance tradition with professionalism",
            "Fabric choice should reflect the formality and climate"
          ]
        }
      }
    },
    
    'festive': {
      description: "Celebratory attire for cultural festivals, religious ceremonies, and festive gatherings.",
      formalityLevel: "Semi-formal to Casual",
      women: {
        western: {
          recommendedItems: [
            "colorful dresses", "embellished tops with skirts", "dressy jumpsuits", 
            "coordinated separates", "embroidered blouses"
          ],
          colors: [
            "bright festive colors", "metallics", "jewel tones", 
            "traditional colors for specific festivals", "vibrant patterns"
          ],
          fabrics: ["silk", "brocade", "embroidered cotton", "velvet", "organza"],
          accessories: [
            "statement jewelry", "embellished bags", "festive footwear", 
            "decorative hair accessories", "embroidered shawls"
          ],
          tips: [
            "Consider the specific festival's traditional colors",
            "Balance between festive and comfortable",
            "Layer for changing temperatures during day-to-night celebrations",
            "Incorporate traditional elements into western wear for fusion looks"
          ]
        },
        traditional: {
          recommendedItems: [
            "embellished sarees", "festive lehengas", "anarkali suits", 
            "traditional regional attire", "sharara or gharara sets"
          ],
          colors: [
            "auspicious reds and yellows", "bright oranges", "festive greens", 
            "royal blues", "vibrant pinks", "gold and silver accents"
          ],
          fabrics: ["silk", "banarasi", "bandhani", "brocade", "embroidered georgette"],
          accessories: [
            "traditional jewelry sets", "embellished potli bags", "decorative bindis", 
            "bangles and anklets", "embroidered juttis or heels"
          ],
          tips: [
            "Research traditional attire specific to the festival",
            "Consider comfort for participation in rituals",
            "Balance the weight of the outfit with the duration of the event",
            "Incorporate regional traditional elements"
          ]
        }
      },
      men: {
        western: {
          recommendedItems: [
            "embroidered shirts", "festive blazers", "patterned dress shirts", 
            "colorful accessories with neutral base", "dressy casual combinations"
          ],
          colors: [
            "festive brights", "traditional colors", "jewel tones", 
            "metallics as accents", "rich neutrals with colorful accessories"
          ],
          fabrics: ["silk blends", "textured cotton", "brocade elements", "linen blends"],
          accessories: [
            "festive pocket squares", "decorative cufflinks", "traditional jewelry if appropriate", 
            "festive shoes", "embroidered belts"
          ],
          tips: [
            "Add festive elements through accessories",
            "Consider traditional color significance",
            "Balance comfort with tradition",
            "Fusion elements can honor tradition while maintaining personal style"
          ]
        },
        traditional: {
          recommendedItems: [
            "embroidered kurta pajama", "festive sherwani", "dhoti kurta", 
            "traditional regional attire", "angarkha style kurtas"
          ],
          colors: [
            "festive yellows and reds", "royal blues", "rich maroons", 
            "festive greens", "cream and gold", "traditional combinations"
          ],
          fabrics: ["silk", "brocade", "jamawar", "embroidered cotton", "velvet for winter"],
          accessories: [
            "traditional turbans or headwear", "embroidered juttis", "festive stoles", 
            "traditional jewelry", "decorative buttons"
          ],
          tips: [
            "Research traditional attire specific to the festival and region",
            "Consider ease of movement for participation in rituals",
            "Balance elaborateness with comfort",
            "Incorporate family traditions if applicable"
          ]
        }
      }
    },
    
    'casual': {
      description: "Relaxed, comfortable attire for everyday wear, casual outings, and informal gatherings.",
      formalityLevel: "Casual",
      women: {
        western: {
          recommendedItems: [
            "jeans", "casual tops", "t-shirts", "casual dresses", 
            "skirts", "shorts", "casual jumpsuits"
          ],
          colors: [
            "versatile neutrals", "personal preference colors", "denim blues", 
            "casual prints", "seasonal colors"
          ],
          fabrics: ["cotton", "jersey", "denim", "linen", "knits"],
          accessories: [
            "everyday jewelry", "crossbody bags", "casual shoes", 
            "sunglasses", "casual hats", "scarves"
          ],
          tips: [
            "Focus on comfort while maintaining a put-together look",
            "Create a versatile base wardrobe that allows mixing and matching",
            "Consider your lifestyle and regular activities",
            "Incorporate personal style through accessories"
          ]
        },
        traditional: {
          recommendedItems: [
            "cotton kurtas", "casual salwar kameez", "palazzo pants", 
            "everyday sarees", "fusion tops with traditional bottoms"
          ],
          colors: [
            "everyday neutrals", "light pastels", "block prints", 
            "simple patterns", "vibrant casuals"
          ],
          fabrics: ["cotton", "khadi", "mulmul", "light linen", "jersey"],
          accessories: [
            "simple everyday jewelry", "comfortable flats", "casual juttis", 
            "everyday bags", "simple scarves or dupattas"
          ],
          tips: [
            "Choose breathable, easy-to-maintain fabrics",
            "Look for low-maintenance traditional wear",
            "Consider fusion options that blend comfort with tradition",
            "Opt for simpler embroidery and minimal embellishments for everyday wear"
          ]
        }
      },
      men: {
        western: {
          recommendedItems: [
            "jeans", "t-shirts", "casual shirts", "polo shirts", 
            "casual trousers", "shorts", "casual jackets"
          ],
          colors: [
            "versatile neutrals", "denim blues", "casual earth tones", 
            "simple patterns", "personal preference colors"
          ],
          fabrics: ["cotton", "denim", "jersey", "linen", "casual knits"],
          accessories: [
            "casual watches", "everyday belts", "sneakers", 
            "sunglasses", "casual hats", "backpacks or messenger bags"
          ],
          tips: [
            "Build a versatile collection of basics that can be mixed and matched",
            "Focus on fit even for casual clothes",
            "Consider your daily activities and lifestyle",
            "Express personality through subtle elements and accessories"
          ]
        },
        traditional: {
          recommendedItems: [
            "cotton kurtas", "casual kurta pajama", "short kurtas with jeans", 
            "nehru jacket with casual base", "fusion elements"
          ],
          colors: [
            "everyday neutrals", "pastels", "earth tones", 
            "simple patterns", "block prints"
          ],
          fabrics: ["cotton", "khadi", "linen", "mulmul", "jersey"],
          accessories: [
            "casual kolhapuris", "everyday shoes", "simple stoles", 
            "minimal everyday jewelry", "casual bags"
          ],
          tips: [
            "Look for low-maintenance traditional options",
            "Consider fusion styles that incorporate traditional elements",
            "Focus on breathable, comfortable fabrics",
            "Simple embroidery or detailing adds interest without being too formal"
          ]
        }
      }
    },
    
    'vacation': {
      description: "Practical yet stylish attire for travel, sightseeing, and holiday activities.",
      formalityLevel: "Casual to Semi-casual",
      women: {
        western: {
          recommendedItems: [
            "versatile dresses", "mix-and-match separates", "comfortable pants", 
            "shorts", "layering pieces", "swimwear where appropriate"
          ],
          colors: [
            "versatile neutrals", "destination-inspired colors", "bright accents", 
            "patterns that don't show wrinkles", "coordinating color scheme"
          ],
          fabrics: ["wrinkle-resistant cotton", "light linen", "jersey", "quick-dry materials", "breathable blends"],
          accessories: [
            "comfortable walking shoes", "sunglasses", "versatile bags", 
            "sun hats", "scarves that can double as wraps", "minimal jewelry"
          ],
          tips: [
            "Research destination climate and cultural expectations",
            "Choose versatile pieces that can be styled multiple ways",
            "Consider packability and wrinkle resistance",
            "Plan for layers to accommodate changing temperatures",
            "Select accessories that serve multiple purposes"
          ]
        },
        traditional: {
          recommendedItems: [
            "comfortable cotton kurtis", "lightweight sarees", "fusion dresses", 
            "mix-and-match separates", "palazzos with kurtas"
          ],
          colors: [
            "bright vacation-friendly colors", "destination-inspired hues", 
            "printed fabrics that hide wrinkles", "coordinating palette"
          ],
          fabrics: ["cotton", "lightweight silk", "rayon", "breathable blends", "pre-stitched options"],
          accessories: [
            "comfortable sandals or juttis", "sun hat", "lightweight jewelry", 
            "versatile bags", "light dupattas or stoles"
          ],
          tips: [
            "Choose easy-to-wear traditional options",
            "Consider pre-stitched sarees for convenience",
            "Opt for lightweight, breathable fabrics",
            "Pack versatile pieces that can be mixed and matched",
            "Research local cultural dress expectations for the destination"
          ]
        }
      },
      men: {
        western: {
          recommendedItems: [
            "shorts", "t-shirts", "casual shirts", "light pants", 
            "versatile jacket", "swimwear where appropriate"
          ],
          colors: [
            "versatile neutrals", "bright accents", "destination-appropriate colors", 
            "patterns that hide wrinkles and stains"
          ],
          fabrics: ["wrinkle-resistant cotton", "linen", "quick-dry materials", "breathable blends"],
          accessories: [
            "comfortable walking shoes", "sunglasses", "versatile hat", 
            "travel-friendly belt", "casual watch", "minimal day bag"
          ],
          tips: [
            "Research destination climate and cultural norms",
            "Choose versatile pieces that can be dressed up or down",
            "Focus on comfort without sacrificing style",
            "Pack items that can be layered for changing conditions",
            "Select easy-care fabrics that travel well"
          ]
        },
        traditional: {
          recommendedItems: [
            "light cotton kurtas", "kurta with jeans", "casual short kurtas", 
            "breathable pants", "light nehru jackets for evenings"
          ],
          colors: [
            "light neutrals", "vacation-friendly brights", "subtle patterns", 
            "colors appropriate to destination"
          ],
          fabrics: ["breathable cotton", "linen", "khadi", "light blends"],
          accessories: [
            "comfortable sandals or juttis", "sun hat", "light stoles", 
            "minimal bags", "simple everyday accessories"
          ],
          tips: [
            "Choose lightweight traditional options that are easy to pack",
            "Consider fusion pieces that blend well with western items",
            "Opt for low-maintenance fabrics and designs",
            "Pack versatile pieces that work for multiple occasions",
            "Research local cultural expectations"
          ]
        }
      }
    },
    
    'date': {
      description: "Special occasion attire for romantic outings, ranging from casual coffee dates to formal dinner engagements.",
      formalityLevel: "Casual to Formal (depends on specific date)",
      women: {
        western: {
          recommendedItems: [
            "flattering dresses", "stylish tops with well-fitted pants", "elegant jumpsuits", 
            "skirts with coordinated tops", "appropriate layers"
          ],
          colors: [
            "romantic pastels", "flattering jewel tones", "classic black", 
            "red for special occasions", "colors that complement your skin tone"
          ],
          fabrics: ["silk", "soft cotton", "cashmere for winter", "light wool", "quality blends"],
          accessories: [
            "tasteful jewelry", "quality handbag", "flattering shoes", 
            "subtle fragrance", "elegant wrap for evening"
          ],
          tips: [
            "Dress for the specific venue and activity",
            "Choose items that make you feel confident",
            "Balance comfort with style",
            "Consider the message your outfit sends",
            "When in doubt, slightly overdress rather than underdress"
          ]
        },
        traditional: {
          recommendedItems: [
            "elegant anarkali", "lightweight sarees", "stylish kurta sets", 
            "indo-western fusion dresses", "churidar with designer kurtis"
          ],
          colors: [
            "romantic pastels", "soft pinks", "elegant neutrals", 
            "flattering jewel tones", "subtle metallics"
          ],
          fabrics: ["georgette", "chiffon", "silk", "soft cotton", "light embroidery"],
          accessories: [
            "elegant jhumkas", "subtle bindis", "elegant clutch", 
            "comfortable heels or juttis", "light dupatta"
          ],
          tips: [
            "Choose outfits that are beautiful yet comfortable",
            "Select lighter traditional wear for easier movement",
            "Balance traditional elements with modern styling",
            "Consider the venue and activity when selecting outfit weight and length",
            "Opt for elegant rather than overly elaborate for date settings"
          ]
        }
      },
      men: {
        western: {
          recommendedItems: [
            "well-fitted button-downs", "quality t-shirts with blazers", "dark jeans", 
            "chinos", "casual suits for formal dates", "leather shoes"
          ],
          colors: [
            "classic blues", "neutrals", "subtle patterns", 
            "deep burgundy or green accents", "coordinated but not matchy"
          ],
          fabrics: ["cotton", "light wool", "quality denim", "cashmere for winter", "linen for summer"],
          accessories: [
            "quality watch", "nice belt", "good shoes", 
            "subtle cologne", "minimal quality jewelry if worn"
          ],
          tips: [
            "Focus on fit - well-fitted basics look better than ill-fitting luxury items",
            "Pay attention to grooming details",
            "Dress appropriately for the venue and activity",
            "Make sure your shoes are clean and in good condition",
            "When in doubt, a crisp button-down with dark jeans works for many occasions"
          ]
        },
        traditional: {
          recommendedItems: [
            "well-fitted kurtas", "elegant kurta pajama sets", "nehru jackets with basics", 
            "fusion traditional elements", "designer kurtas for special dates"
          ],
          colors: [
            "understated neutrals", "classic blues and grays", "rich jewel tones", 
            "subtle patterns", "elegant pastels"
          ],
          fabrics: ["cotton silk", "linen", "structured cotton", "light silk", "textured fabrics"],
          accessories: [
            "quality juttis or formal shoes", "elegant buttons", "minimal jewelry if worn", 
            "subtle cologne", "designer stoles for formal dates"
          ],
          tips: [
            "Choose well-fitted traditional wear rather than loose styles",
            "Balance traditional elements with contemporary styling",
            "Consider the venue and your date's likely attire",
            "Fusion pieces often work well for date settings",
            "Pay attention to details and finishing touches"
          ]
        }
      }
    }
  };
  
  export default eventBasedRecommendations;