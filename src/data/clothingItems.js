// Sample clothing items database
const clothingItems = [
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
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735627651/Screenshot_2024-12-31_121713_o3tehv.png",
    gender: "female",
    shopLinks: {

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
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735626959/Screenshot_2024-12-31_120536_t5she3.png",
    gender: "female",
    shopLinks: {

      meesho: "https://www.meesho.com/"
    }
  },
  {
    id: "top-11",
    name: "Traditional Saree",
    type: "top",
    category: "traditional",
    style: "saree",
    sleeveType: "varies",
    neckline: "varies",
    fabric: ["silk", "cotton"],
    colorType: "bright",
    color: "multiple",
    season: ["all-season"],
    price: 3499,
    description: "A beautiful traditional saree with intricate patterns and rich colors.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735626691/Screenshot_2024-12-31_115906_rit4i8.png",
    gender: "female",
    shopLinks: {

      meesho: "https://www.meesho.com/"
    }
  },
  {
    id: "top-12",
    name: "Festive Lehenga Set",
    type: "top",
    category: "traditional",
    style: "lehenga",
    sleeveType: "half-sleeve",
    neckline: "round",
    fabric: ["silk", "net"],
    colorType: "bright",
    color: "royal blue",
    season: ["winter", "fall"],
    price: 7999,
    description: "An elegant festive lehenga set with detailed embroidery work.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620203/Screenshot_2024-12-31_101310_em86l5.png",
    gender: "female",
    shopLinks: {

      meesho: "https://www.meesho.com/"
    }
  },
  {
    id: "top-13",
    name: "Embellished Anarkali",
    type: "top",
    category: "traditional",
    style: "anarkali",
    sleeveType: "full-sleeve",
    neckline: "v-neck",
    fabric: ["georgette", "net"],
    colorType: "warm",
    color: "maroon",
    season: ["winter", "fall"],
    price: 5999,
    description: "A stunning anarkali suit with intricate embellishments and flowing silhouette.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620073/Screenshot_2024-12-31_101055_ld1lql.png",
    gender: "female",
    shopLinks: {
  
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
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744004068/mohamad-khosravi-DuY4JP2M34Q-unsplash_sxhguj.jpg",
    gender: "male",
    shopLinks: {

      flipkart: "https://www.flipkart.com/",

    }
  },
  {
    id: "top-9",
    name: "Business Formal Suit",
    type: "top",
    category: "western",
    style: "formal",
    sleeveType: "full-sleeve",
    neckline: "collar",
    fabric: ["wool-blend"],
    colorType: "neutral",
    color: "navy",
    season: ["all-season"],
    price: 7999,
    description: "A professional navy suit perfect for business and formal settings.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744004653/ce2e5722d4fe2ecd68563b96ad2b4c8a_cu60rg.jpg",
    gender: "male",
    shopLinks: {

      flipkart: "https://www.flipkart.com/",

    }
  },
  {
    id: "top-14",
    name: "Modern Blazer",
    type: "top",
    category: "western",
    style: "formal",
    sleeveType: "full-sleeve",
    neckline: "lapel",
    fabric: ["polyester-blend"],
    colorType: "neutral",
    color: "gray",
    season: ["all-season"],
    price: 3999,
    description: "A stylish modern blazer in gray, perfect for business or semi-formal occasions.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744004681/7f956f373a6f8f1f2dc73c61f89baa57_aigknw.jpg",
    gender: "male",
    shopLinks: {

      flipkart: "https://www.flipkart.com/",

    }
  },
  {
    id: "top-15",
    name: "Casual Business Shirt",
    type: "top",
    category: "western",
    style: "business-casual",
    sleeveType: "full-sleeve",
    neckline: "collar",
    fabric: ["cotton"],
    colorType: "cool",
    color: "light blue",
    season: ["all-season"],
    price: 1799,
    description: "A versatile light blue shirt that transitions easily from office to casual settings.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744004069/ben-iwara-Rp85l4Y2khk-unsplash_yp18ta.jpg",
    gender: "male",
    shopLinks: {
  
      meesho: "https://www.meesho.com/"
    }
  },
  {
    id: "top-16",
    name: "Contemporary Formal Outfit",
    type: "top",
    category: "western",
    style: "formal",
    sleeveType: "full-sleeve",
    neckline: "collar",
    fabric: ["cotton-blend", "polyester"],
    colorType: "neutral",
    color: "charcoal",
    season: ["all-season"],
    price: 4999,
    description: "A contemporary formal outfit in charcoal, perfect for professional settings.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744004068/peter-chirkov-JGCDLWl7hc4-unsplash_ddnmu6.jpg",
    gender: "male",
    shopLinks: {
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
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744017283/Screenshot_2025-04-07_144415_e3lvex.png",
    gender: "female",
    shopLinks: {

      flipkart: "https://www.flipkart.com/",

    }
  },
  {
    id: "footwear-2",
    name: "Casual Flats",
    type: "footwear",
    category: "western",
    style: "flats",
    heelType: "flat",
    fabric: ["synthetic"],
    colorType: "neutral",
    color: "beige",
    season: ["all-season"],
    price: 999,
    description: "Comfortable and stylish flats in a neutral beige color, perfect for everyday wear.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744017364/Screenshot_2025-04-07_144537_yytrvi.png",
    gender: "female",
    shopLinks: {

      flipkart: "https://www.flipkart.com/",

    }
  },
  {
    id: "footwear-3",
    name: "Summer Wedges",
    type: "footwear",
    category: "western",
    style: "wedges",
    heelType: "wedge",
    fabric: ["synthetic", "fabric"],
    colorType: "warm",
    color: "brown",
    season: ["summer", "spring"],
    price: 1299,
    description: "Stylish and comfortable wedges, perfect for summer outings and casual occasions.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744017414/Screenshot_2025-04-07_144636_mdowbu.png",
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
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744017652/Screenshot_2025-04-07_144808_l249fk.png",
    gender: "male",
    shopLinks: {
      meesho: "https://www.meesho.com/"
    }
  },
  {
    id: "footwear-5",
    name: "Business Loafers",
    type: "footwear",
    category: "western",
    style: "semi-formal",
    heelType: "low",
    fabric: ["leather"],
    colorType: "neutral",
    color: "black",
    season: ["all-season"],
    price: 2299,
    description: "Sleek black leather loafers, perfect for business casual and formal settings.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744017752/Screenshot_2025-04-07_145137_tkh2qd.png",
    gender: "male",
    shopLinks: {
      flipkart: "https://www.flipkart.com/",
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
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-2",
    name: "Traditional Jhumka Earrings",
    type: "jewelry",
    category: "traditional",
    style: "jhumka",
    material: "gold-plated",
    colorType: "warm",
    color: "gold",
    season: ["all-season"],
    price: 1299,
    description: "Beautiful traditional jhumka earrings with intricate design, perfect for festive occasions.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744005862/e53886c0ed43e0218f9767402fd86390_fg5vcw.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-3",
    name: "Antique Kundan Earrings",
    type: "jewelry",
    category: "traditional",
    style: "kundan",
    material: "gold-plated",
    colorType: "warm",
    color: "gold-red",
    season: ["all-season"],
    price: 1599,
    description: "Elegant kundan earrings with antique finish, ideal for wedding and festive wear.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744005448/953214c5388e633befdf4c89833eacf8_fojtgg.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-4",
    name: "Pearl Drop Earrings",
    type: "jewelry",
    category: "traditional",
    style: "drop",
    material: "silver-plated",
    colorType: "neutral",
    color: "white-silver",
    season: ["all-season"],
    price: 1299,
    description: "Classic pearl drop earrings with silver work, perfect for special occasions.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744005444/23f1d2b6639ec1ab661770fae0b1bfc6_990x_vwbkcs.webp",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-5",
    name: "Stone-Studded Bridal Earrings",
    type: "jewelry",
    category: "traditional",
    style: "bridal",
    material: "gold-plated",
    colorType: "warm",
    color: "gold-red",
    season: ["all-season"],
    price: 2599,
    description: "Exquisite stone-studded bridal earrings with intricate detailing, perfect for wedding ceremonies.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744005440/b013e82e73da2b9b0673133dde14f7de_daq35o.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-6",
    name: "Gold Chain Bracelet - Women",
    type: "jewelry",
    category: "western",
    style: "bracelet",
    material: "gold-plated",
    colorType: "warm",
    color: "gold",
    season: ["all-season"],
    price: 899,
    description: "Stylish gold chain bracelet, perfect for adding a touch of elegance to casual and formal outfits.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744006216/0ff8910b165ff217b05dfc191a37c01b_oo3jf2.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-7",
    name: "Silver Stone Bracelet",
    type: "jewelry",
    category: "western",
    style: "bracelet",
    material: "silver-plated",
    colorType: "cool",
    color: "silver",
    season: ["all-season"],
    price: 799,
    description: "Elegant silver stone bracelet that adds a touch of sparkle to any outfit.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744006221/efbd4a01096c77dcbb79f333e2e9efca_i2iisp.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-8",
    name: "Pearl Bracelet",
    type: "jewelry",
    category: "western",
    style: "bracelet",
    material: "mixed",
    colorType: "neutral",
    color: "pearl-gold",
    season: ["all-season"],
    price: 699,
    description: "Classic pearl bracelet with gold accents, perfect for elegant occasions.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744006225/60515e4f9ed5a75c6111259554eb53de_g0cz5b.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-9",
    name: "Leather Bracelet - Men",
    type: "jewelry",
    category: "western",
    style: "bracelet",
    material: "leather-metal",
    colorType: "neutral",
    color: "brown-black",
    season: ["all-season"],
    price: 799,
    description: "Rugged leather bracelet with metal accents, perfect for casual everyday wear.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744006203/d110f20550a18053ba4cd3ac7062ae8e_fpoaje.jpg",
    gender: "male",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-10",
    name: "Beaded Bracelet - Men",
    type: "jewelry",
    category: "western",
    style: "bracelet",
    material: "beads-metal",
    colorType: "cool",
    color: "black",
    season: ["all-season"],
    price: 599,
    description: "Stylish beaded bracelet for men with metal elements, ideal for casual and semi-formal wear.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744006196/ad6e5ed4096f465ec49a328f266c1d51_pvkr7a.jpg",
    gender: "male",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-11",
    name: "Steel Link Bracelet - Men",
    type: "jewelry",
    category: "western",
    style: "bracelet",
    material: "stainless-steel",
    colorType: "cool",
    color: "silver",
    season: ["all-season"],
    price: 899,
    description: "Modern stainless steel bracelet with link design, perfect for everyday professional wear.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744006195/0d0edeaf9ae37d3c2beae247084cd7fb_blygjb.jpg",
    gender: "male",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-12",
    name: "Braided Leather Bracelet - Men",
    type: "jewelry",
    category: "western",
    style: "bracelet",
    material: "braided-leather",
    colorType: "neutral",
    color: "brown",
    season: ["all-season"],
    price: 699,
    description: "Casual braided leather bracelet with secure clasp, perfect for adding style to everyday looks.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744006190/887b05cfcd56336946df4fe0f45c3024_n6h4zv.jpg",
    gender: "male",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-13",
    name: "Women's Gold Watch",
    type: "jewelry",
    category: "western",
    style: "watch",
    material: "gold-plated",
    colorType: "warm",
    color: "gold",
    season: ["all-season"],
    price: 1999,
    description: "Elegant gold-plated watch with a minimalist design, perfect for both casual and formal occasions.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744008640/ff9398397d741c3beb4560c87fb718e1_glsarv.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-14",
    name: "Women's Silver Watch",
    type: "jewelry",
    category: "western",
    style: "watch",
    material: "silver-plated",
    colorType: "cool",
    color: "silver",
    season: ["all-season"],
    price: 1799,
    description: "Modern silver watch with a sleek design, versatile for daily wear and professional settings.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744008640/8b8573309f89a90a53becd61c9e7b701_m8m4wi.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  },
  {
    id: "jewelry-15",
    name: "Women's Brown Leather Watch",
    type: "jewelry",
    category: "western",
    style: "watch",
    material: "leather-metal",
    colorType: "neutral",
    color: "brown",
    season: ["all-season"],
    price: 1599,
    description: "Classic watch with brown leather strap and gold-tone accents for timeless elegance.",
    imageUrl: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744008640/d6a2fff65364a70477002d37c152a142_fbsd5m.jpg",
    gender: "female",
    shopLinks: {
      amazon: "https://www.amazon.in/"
    }
  }
];

export default clothingItems;