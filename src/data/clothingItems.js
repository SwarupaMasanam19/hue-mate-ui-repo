// Sample clothing items database
const clothingItems = [
    // TOPS - Western Style
    {
      id: "top-1",
      name: "V-Neck Puff Sleeve Blouse",
      type: "top",
      category: "western",
      style: "puff-sleeve",
      sleeveType: "puff-sleeve",
      neckline: "v-neck",
      fabric: ["cotton", "polyester-blend"],
      colorType: "warm",
      color: "coral",
      season: ["spring", "summer"],
      price: 1299,
      description: "A flattering V-neck blouse with trendy puff sleeves in a vibrant coral shade.",
      imageUrl: "/assets/clothing/tops/v-neck-puff-sleeve-blouse.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "top-2",
      name: "Fitted Turtleneck Sweater",
      type: "top",
      category: "western",
      style: "fitted",
      sleeveType: "full-sleeve",
      neckline: "turtleneck",
      fabric: ["wool", "cashmere-blend"],
      colorType: "cool",
      color: "teal",
      season: ["fall", "winter"],
      price: 1899,
      description: "A soft, fitted turtleneck sweater in rich teal, perfect for colder seasons.",
      imageUrl: "/assets/clothing/tops/fitted-turtleneck-sweater.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "top-3",
      name: "Off-Shoulder Ruffle Top",
      type: "top",
      category: "western",
      style: "off-shoulder",
      sleeveType: "short-sleeve",
      neckline: "off-shoulder",
      fabric: ["cotton", "chiffon"],
      colorType: "light",
      color: "pastel blue",
      season: ["spring", "summer"],
      price: 999,
      description: "A flirty off-shoulder top with ruffle details in a soft pastel blue.",
      imageUrl: "/assets/clothing/tops/off-shoulder-ruffle-top.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "top-4",
      name: "Structured Blazer Top",
      type: "top",
      category: "western",
      style: "structured",
      sleeveType: "long-sleeve",
      neckline: "lapel",
      fabric: ["polyester", "cotton-blend"],
      colorType: "neutral",
      color: "beige",
      season: ["spring", "fall"],
      price: 2499,
      description: "A sophisticated structured blazer in versatile beige that elevates any outfit.",
      imageUrl: "/assets/clothing/tops/structured-blazer-top.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "top-5",
      name: "Sleeveless Crop Top",
      type: "top",
      category: "western",
      style: "crop",
      sleeveType: "sleeveless",
      neckline: "round",
      fabric: ["cotton", "spandex"],
      colorType: "bright",
      color: "magenta",
      season: ["summer"],
      price: 699,
      description: "A trendy sleeveless crop top in eye-catching magenta, perfect for summer styling.",
      imageUrl: "/assets/clothing/tops/sleeveless-crop-top.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    
    // TOPS - Traditional Style
    {
      id: "top-6",
      name: "Embroidered Kurti",
      type: "top",
      category: "traditional",
      style: "kurti",
      sleeveType: "three-quarter",
      neckline: "round",
      fabric: ["cotton"],
      colorType: "bright",
      color: "turquoise",
      season: ["summer", "spring"],
      price: 1499,
      description: "A beautifully embroidered cotton kurti in turquoise with intricate thread work.",
      imageUrl: "/assets/clothing/tops/embroidered-kurti.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "top-7",
      name: "Silk Saree Blouse",
      type: "top",
      category: "traditional",
      style: "blouse",
      sleeveType: "short-sleeve",
      neckline: "sweetheart",
      fabric: ["silk"],
      colorType: "warm",
      color: "gold",
      season: ["winter", "fall"],
      price: 2299,
      description: "A luxurious silk blouse with sweetheart neckline, perfect for pairing with sarees.",
      imageUrl: "/assets/clothing/tops/silk-saree-blouse.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    
    // Men's Tops
    {
      id: "top-8",
      name: "Classic Oxford Shirt",
      type: "top",
      category: "western",
      style: "formal",
      sleeveType: "full-sleeve",
      neckline: "collar",
      fabric: ["cotton"],
      colorType: "neutral",
      color: "white",
      season: ["all-season"],
      price: 1499,
      description: "A timeless white Oxford shirt perfect for formal and business casual settings.",
      imageUrl: "/assets/clothing/tops/oxford-shirt.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "top-9",
      name: "Casual Henley T-Shirt",
      type: "top",
      category: "western",
      style: "casual",
      sleeveType: "short-sleeve",
      neckline: "henley",
      fabric: ["cotton"],
      colorType: "cool",
      color: "navy",
      season: ["summer", "spring"],
      price: 899,
      description: "A comfortable navy Henley T-shirt with a three-button placket.",
      imageUrl: "/assets/clothing/tops/henley-tshirt.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "top-10",
      name: "Embroidered Kurta",
      type: "top",
      category: "traditional",
      style: "kurta",
      sleeveType: "full-sleeve",
      neckline: "mandarin",
      fabric: ["cotton"],
      colorType: "warm",
      color: "maroon",
      season: ["winter", "fall"],
      price: 1899,
      description: "A handcrafted maroon kurta with subtle embroidery, perfect for festive occasions.",
      imageUrl: "/assets/clothing/tops/embroidered-kurta.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    
    // BOTTOMS - Western Style
    {
      id: "bottom-1",
      name: "High-Waisted Skinny Jeans",
      type: "bottom",
      category: "western",
      style: "skinny",
      length: "full",
      fit: "skinny",
      fabric: ["denim", "cotton-stretch"],
      colorType: "neutral",
      color: "dark blue",
      season: ["all-season"],
      price: 1899,
      description: "Classic high-waisted skinny jeans in dark blue wash, with just the right amount of stretch.",
      imageUrl: "/assets/clothing/bottoms/high-waisted-skinny-jeans.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "bottom-2",
      name: "A-Line Midi Skirt",
      type: "bottom",
      category: "western",
      style: "a-line",
      length: "midi",
      fit: "flared",
      fabric: ["polyester", "cotton-blend"],
      colorType: "cool",
      color: "navy",
      season: ["spring", "fall"],
      price: 1299,
      description: "An elegant A-line midi skirt in navy blue, versatile for both casual and formal occasions.",
      imageUrl: "/assets/clothing/bottoms/a-line-midi-skirt.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "bottom-3",
      name: "Wide-Leg Palazzo Pants",
      type: "bottom",
      category: "western",
      style: "wide-leg",
      length: "full",
      fit: "loose",
      fabric: ["rayon", "polyester"],
      colorType: "warm",
      color: "rust",
      season: ["summer", "spring"],
      price: 1099,
      description: "Flowy palazzo pants in rich rust color, offering comfort and style for warmer seasons.",
      imageUrl: "/assets/clothing/bottoms/wide-leg-palazzo.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "bottom-4",
      name: "Pencil Skirt",
      type: "bottom",
      category: "western",
      style: "pencil",
      length: "knee",
      fit: "fitted",
      fabric: ["polyester", "spandex"],
      colorType: "neutral",
      color: "black",
      season: ["all-season"],
      price: 999,
      description: "A classic black pencil skirt, form-fitting and perfect for professional settings.",
      imageUrl: "/assets/clothing/bottoms/pencil-skirt.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    
    // Men's Bottoms
    {
      id: "bottom-5",
      name: "Slim Fit Chinos",
      type: "bottom",
      category: "western",
      style: "chinos",
      length: "full",
      fit: "slim",
      fabric: ["cotton"],
      colorType: "neutral",
      color: "khaki",
      season: ["all-season"],
      price: 1499,
      description: "Classic khaki chinos with a modern slim fit, versatile for casual and business casual wear.",
      imageUrl: "/assets/clothing/bottoms/slim-fit-chinos.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "bottom-6",
      name: "Straight Fit Jeans",
      type: "bottom",
      category: "western",
      style: "jeans",
      length: "full",
      fit: "straight",
      fabric: ["denim"],
      colorType: "cool",
      color: "medium blue",
      season: ["all-season"],
      price: 1299,
      description: "Classic medium wash jeans with a comfortable straight fit.",
      imageUrl: "/assets/clothing/bottoms/straight-fit-jeans.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    
    // BOTTOMS - Traditional Style
    {
      id: "bottom-7",
      name: "Cotton Palazzo",
      type: "bottom",
      category: "traditional",
      style: "palazzo",
      length: "full",
      fit: "loose",
      fabric: ["cotton"],
      colorType: "bright",
      color: "mustard",
      season: ["summer"],
      price: 899,
      description: "Comfortable cotton palazzo pants in vibrant mustard with traditional block print.",
      imageUrl: "/assets/clothing/bottoms/cotton-palazzo.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "bottom-8",
      name: "Embellished Lehenga Skirt",
      type: "bottom",
      category: "traditional",
      style: "lehenga",
      length: "full",
      fit: "flared",
      fabric: ["silk", "net"],
      colorType: "bright",
      color: "royal blue",
      season: ["winter", "fall"],
      price: 6999,
      description: "A gorgeous lehenga skirt with intricate embellishments in royal blue, perfect for special occasions.",
      imageUrl: "/assets/clothing/bottoms/lehenga-skirt.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "bottom-9",
      name: "Cotton Churidar",
      type: "bottom",
      category: "traditional",
      style: "churidar",
      length: "full",
      fit: "fitted",
      fabric: ["cotton"],
      colorType: "neutral",
      color: "white",
      season: ["all-season"],
      price: 799,
      description: "Classic white cotton churidar, perfect for pairing with kurtas for any occasion.",
      imageUrl: "/assets/clothing/bottoms/cotton-churidar.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    
    // FOOTWEAR
    {
      id: "footwear-1",
      name: "Block Heel Sandals",
      type: "footwear",
      category: "western",
      style: "sandals",
      heelType: "block",
      fabric: ["synthetic"],
      colorType: "neutral",
      color: "tan",
      season: ["summer", "spring"],
      price: 1499,
      description: "Versatile block heel sandals in a neutral tan color, comfortable for all-day wear.",
      imageUrl: "/assets/clothing/footwear/block-heel-sandals.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "footwear-2",
      name: "Leather Ankle Boots",
      type: "footwear",
      category: "western",
      style: "boots",
      heelType: "low",
      fabric: ["leather"],
      colorType: "neutral",
      color: "black",
      season: ["winter", "fall"],
      price: 2999,
      description: "Classic black leather ankle boots with a low heel, a wardrobe essential for colder seasons.",
      imageUrl: "/assets/clothing/footwear/leather-ankle-boots.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "footwear-3",
      name: "Embroidered Juttis",
      type: "footwear",
      category: "traditional",
      style: "juttis",
      heelType: "flat",
      fabric: ["leather", "fabric"],
      colorType: "bright",
      color: "maroon",
      season: ["all-season"],
      price: 1299,
      description: "Traditional embroidered juttis in rich maroon with detailed needlework.",
      imageUrl: "/assets/clothing/footwear/embroidered-juttis.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "footwear-4",
      name: "Classic Leather Oxfords",
      type: "footwear",
      category: "western",
      style: "formal",
      heelType: "low",
      fabric: ["leather"],
      colorType: "neutral",
      color: "brown",
      season: ["all-season"],
      price: 2499,
      description: "Timeless brown leather oxford shoes, perfect for formal occasions and business wear.",
      imageUrl: "/assets/clothing/footwear/leather-oxfords.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "footwear-5",
      name: "Casual Canvas Sneakers",
      type: "footwear",
      category: "western",
      style: "casual",
      heelType: "flat",
      fabric: ["canvas"],
      colorType: "neutral",
      color: "white",
      season: ["all-season"],
      price: 999,
      description: "Classic white canvas sneakers, comfortable and versatile for everyday casual wear.",
      imageUrl: "/assets/clothing/footwear/canvas-sneakers.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    
    // JEWELRY
    {
      id: "jewelry-1",
      name: "Layered Gold Necklace",
      type: "jewelry",
      category: "western",
      style: "necklace",
      material: "gold-plated",
      colorType: "warm",
      color: "gold",
      season: ["all-season"],
      price: 899,
      description: "Elegant layered gold-plated necklace, perfect for adding sophistication to any outfit.",
      imageUrl: "/assets/clothing/jewelry/layered-gold-necklace.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "jewelry-2",
      name: "Silver Stud Earrings",
      type: "jewelry",
      category: "western",
      style: "studs",
      material: "sterling-silver",
      colorType: "cool",
      color: "silver",
      season: ["all-season"],
      price: 599,
      description: "Minimalist sterling silver stud earrings for everyday elegance.",
      imageUrl: "/assets/clothing/jewelry/silver-stud-earrings.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "jewelry-3",
      name: "Kundan Choker Necklace",
      type: "jewelry",
      category: "traditional",
      style: "choker",
      material: "gold-plated",
      colorType: "warm",
      color: "gold-red",
      season: ["all-season"],
      price: 2499,
      description: "Stunning kundan choker necklace with red stones, perfect for traditional occasions.",
      imageUrl: "/assets/clothing/jewelry/kundan-choker.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "jewelry-4",
      name: "Classic Steel Watch",
      type: "jewelry",
      category: "western",
      style: "watch",
      material: "stainless-steel",
      colorType: "cool",
      color: "silver",
      season: ["all-season"],
      price: 2999,
      description: "Timeless stainless steel watch with a minimalist design, perfect for any occasion.",
      imageUrl: "/assets/clothing/jewelry/steel-watch.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "jewelry-5",
      name: "Leather Bracelet",
      type: "jewelry",
      category: "western",
      style: "bracelet",
      material: "leather-metal",
      colorType: "neutral",
      color: "brown",
      season: ["all-season"],
      price: 599,
      description: "Stylish brown leather bracelet with metal accents, perfect for casual wear.",
      imageUrl: "/assets/clothing/jewelry/leather-bracelet.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    
    // FULL OUTFITS
    {
      id: "outfit-1",
      name: "Business Casual Ensemble",
      type: "outfit",
      category: "western",
      style: "business-casual",
      pieces: ["structured-blazer", "fitted-top", "pencil-skirt", "pumps"],
      fabric: ["cotton-blend", "polyester"],
      colorType: "neutral",
      color: "navy-beige",
      season: ["spring", "fall"],
      price: 4999,
      description: "Complete business casual look featuring a structured blazer, fitted top, pencil skirt, and matching shoes.",
      imageUrl: "/assets/clothing/outfits/business-casual-outfit.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "outfit-2",
      name: "Boho Summer Set",
      type: "outfit",
      category: "western",
      style: "boho",
      pieces: ["off-shoulder-top", "wide-leg-pants", "strappy-sandals", "layered-necklace"],
      fabric: ["cotton", "rayon"],
      colorType: "warm",
      color: "earth-tones",
      season: ["summer"],
      price: 3999,
      description: "Free-spirited boho outfit with flowy silhouettes in earth tones, perfect for summer days.",
      imageUrl: "/assets/clothing/outfits/boho-summer-outfit.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "outfit-3",
      name: "Traditional Festive Ensemble",
      type: "outfit",
      category: "traditional",
      style: "festive",
      pieces: ["embroidered-kurti", "lehenga-skirt", "dupatta", "juttis", "kundan-jewelry"],
      fabric: ["silk", "cotton", "net"],
      colorType: "bright",
      color: "turquoise-gold",
      season: ["winter", "fall"],
      price: 12999,
      description: "Complete traditional festive ensemble with coordinated pieces in rich turquoise and gold.",
      imageUrl: "/assets/clothing/outfits/traditional-festive-outfit.jpg",
      gender: "female",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "outfit-4",
      name: "Professional Suit",
      type: "outfit",
      category: "western",
      style: "formal",
      pieces: ["suit-jacket", "dress-shirt", "dress-pants", "leather-oxfords", "tie"],
      fabric: ["wool-blend", "cotton"],
      colorType: "neutral",
      color: "charcoal",
      season: ["all-season"],
      price: 7999,
      description: "Complete professional suit ensemble in classic charcoal, perfect for business and formal events.",
      imageUrl: "/assets/clothing/outfits/professional-suit.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    },
    {
      id: "outfit-5",
      name: "Traditional Wedding Ensemble",
      type: "outfit",
      category: "traditional",
      style: "wedding",
      pieces: ["sherwani", "churidar", "stole", "juttis", "brooch"],
      fabric: ["silk", "brocade"],
      colorType: "warm",
      color: "maroon-gold",
      season: ["winter", "fall"],
      price: 15999,
      description: "Luxurious wedding ensemble featuring a detailed sherwani in rich maroon with gold embellishments.",
      imageUrl: "/assets/clothing/outfits/wedding-sherwani.jpg",
      gender: "male",
      shopLinks: {
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        meesho: "https://www.meesho.com/"
      }
    }
  ];
  
  export default clothingItems;