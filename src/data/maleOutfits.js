const maleOutfits = [
    // Formal Outfits (Minimum 6)
    {
      id: 'male-formal-1',
      name: 'Classic Navy Suit',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745183239/Screenshot_2025-04-21_023650_qopmlv.png',
      price: 5999,
      gender: 'male',
      style: 'formal',
      occasions: ['work', 'business', 'interview', 'formal event'],
      bodyTypes: ['slim', 'athletic', 'tall', 'average'],
      colorType: 'neutral',
      color: 'navy blue',
      description: 'A timeless navy blue suit, a staple for any formal occasion.',
      shopLinks: { Myntra: 'https://www.myntra.com/suits/peter+england+elite/peter-england-elite-slim-fit-single-breasted-two-piece-formal-suit/26467792/buy' }
    },
    {
      id: 'male-formal-2',
      name: 'Charcoal Grey Suit',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745183446/Screenshot_2025-04-21_024032_yqizyn.png',
      price: 8499,
      gender: 'male',
      style: 'formal',
      occasions: ['work', 'business', 'formal event'],
      bodyTypes: ['slim', 'athletic', 'tall', 'average'],
      colorType: 'neutral',
      color: 'charcoal grey',
      description: 'A sophisticated charcoal grey suit, versatile for many formal settings.',
      shopLinks: { LouisPhilippe: 'https://louisphilippe.abfrl.in/p/men-grey-super-slim-fit-solid-casual-two-piece-suit-39683398.html?size=44&srsltid=AfmBOorliytAvZJqSnqSK13hFOxKNir3A9bDBjIDwMgLwMHpnSDeNWaABjw' }
    },
    {
      id: 'male-formal-3',
      name: 'Crisp White Dress Shirt',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745183574/Screenshot_2025-04-21_024242_h8y2m1.png',
      price: 1499,
      gender: 'male',
      style: 'formal',
      occasions: ['work', 'business', 'interview', 'formal event'],
      bodyTypes: ['all'],
      colorType: 'neutral',
      color: 'white',
      description: 'A crisp white dress shirt, essential for formal wear.',
      shopLinks: { Westside: 'https://www.westside.com/products/wes-formals-white-cotton-relaxed-fit-shirt-300932506?variant=42166110552117&srsltid=AfmBOopi5huCNU4DqFl74-zDAORJwEyA7nuU_y8q5Q9D7RrfO_EiFCtqSbA' }
    },
    {
      id: 'male-formal-4',
      name: 'Black Formal',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745203851/Screenshot_2025-04-21_082013_fqvnqb.png',
      price: 1999,
      gender: 'male',
      style: 'formal',
      occasions: ['work', 'business', 'interview', 'formal event'],
      bodyTypes: ['all'],
      colorType: 'neutral',
      color: 'black',
      description: 'Classic black leather oxford shoes, the epitome of formal footwear.',
      shopLinks: { flipkart: 'https://www.flipkart.com/dk-fashion-men-solid-formal-black-shirt/p/itm751790a83450e?pid=SHTGN5RBEZV3PBYW&cmpid=product.share.pp' }
    },
    {
      id: 'male-formal-5',
      name: 'Slim Fit Black Suit',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745183752/Screenshot_2025-04-21_024541_yfbtqk.png',
      price: 8999,
      gender: 'male',
      style: 'formal',
      occasions: ['formal event', 'party', 'wedding'],
      bodyTypes: ['slim', 'athletic'],
      colorType: 'neutral',
      color: 'black',
      description: 'A sleek slim fit black suit for a modern formal look.',
      shopLinks: { myntra: 'https://www.myntra.com/suits/rare+rabbit/rare-rabbit-single-breasted-slim-fit-two-piece-suit/24782510/buy' }
    },
    {
      id: 'male-formal-6',
      name: 'Ogee Patterned Suit',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745204279/Screenshot_2025-04-21_082732_gheozj.png',
      price: 11999,
      gender: 'male',
      style: 'formal',
      occasions: ['work', 'business', 'formal event', 'wedding'],
      bodyTypes: ['all'],
      colorType: 'cool',
      color: 'Sapphire Blue',
      description: 'A sophisticated silk tie and pocket square set to complement any formal suit.',
      shopLinks: { Manyavar: 'https://www.manyavar.com/en-in/suit-set/sapphire-blue-ogee-patterned-suit/M300237.html' }
    },
  
    // Business Casual Outfits (Minimum 6)
    {
      id: 'male-business-casual-2',
      name: 'Grey Chinos and Oxford Shirt',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745204692/Screenshot_2025-04-21_083439_ssexfi.png',
      price: 2999,
      gender: 'male',
      style: 'business-casual',
      occasions: ['work', 'business meeting', 'semi-formal event'],
      bodyTypes: ['slim', 'athletic', 'average'],
      colorType: 'neutral',
      color: 'grey and light blue',
      description: 'Stylish grey chinos with a light blue oxford shirt.',
      shopLinks: { Myntra: 'https://www.myntra.com/trousers/roadster/roadster-men-grey-pure-cotton-regularchinos/11354630/buy' }
    },
    {
      id: 'male-business-casual-4',
      name: 'V-Neck Sweater over Shirt',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745204880/Screenshot_2025-04-21_083747_mnpozz.png',
      price: 2799,
      gender: 'male',
      style: 'business-casual',
      occasions: ['work', 'business meeting', 'casual friday'],
      bodyTypes: ['slim', 'athletic', 'average'],
      colorType: 'cool',
      color: 'navy and white',
      description: 'A smart v-neck sweater layered over a button-down shirt.',
      shopLinks: { Myntra: 'https://www.myntra.com/sweaters/highlander/highlander-men-embroidered-cardigan/31773107/buy' }
    },
  
    // Casual Outfits (Minimum 6)
    {
      id: 'male-casual-1',
      name: 'Crew Neck T-Shirt and Jeans',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745205328/Screenshot_2025-04-21_084512_llflas.png',
      price: 999,
      gender: 'male',
      style: 'casual',
      occasions: ['daily wear', 'outing', 'casual gathering'],
      bodyTypes: ['all'],
      colorType: 'any',
      color: 'various',
      description: 'A comfortable crew neck t-shirt paired with classic jeans.',
      shopLinks: { AmericanCrew: 'https://www.americancrew.in/products/100-cotton-round-neck-t-shirt-for-men-regular-fit-white-ac715?variant=45147845656822&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOopuIeItWFJEOJAaqoi7wI2odNwQPopKSrCf_6xZwszOjwOjkeeivSo' }
    },
    {
      id: 'male-casual-2',
      name: 'Polo Shirt and Chinos',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745205440/Screenshot_2025-04-21_084705_e0iefm.png',
      price: 1199,
      gender: 'male',
      style: 'casual',
      occasions: ['daily wear', 'outing', 'casual gathering'],
      bodyTypes: ['all'],
      colorType: 'any',
      color: 'various',
      description: 'A smart polo shirt paired with comfortable chinos.',
      shopLinks: { Myntra: 'https://www.myntra.com/tshirts/moda+rapido/moda-rapido-men-solid-polo-collar-t-shirt/32421464/buy' }
    },
    {
      id: 'male-casual-3',
      name: 'Hoodie and Joggers',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745205556/Screenshot_2025-04-21_084850_mwhiqp.png',
      price: 1499,
      gender: 'male',
      style: 'casual',
      occasions: ['daily wear', 'loungewear', 'workout'],
      bodyTypes: ['all'],
      colorType: 'any',
      color: 'various',
      description: 'A comfortable hoodie and joggers set for relaxed wear.',
      shopLinks: { myntra: 'https://www.myntra.com/co-ords/outzidr/outzidr-oversized-hooded-sweatshirt-with-jogger-/33342197/buy' }
    },
    {
      id: 'male-casual-5',
      name: 'Short-Sleeve Button-Down and Shorts',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745205622/Screenshot_2025-04-21_085011_nx5z26.png',
      price: 1299,
      gender: 'male',
      style: 'casual',
      occasions: ['vacation', 'outing', 'summer wear'],
      bodyTypes: ['all'],
      colorType: 'cool',
      color: 'various',
      description: 'A relaxed short-sleeve button-down shirt with comfortable shorts.',
      shopLinks: { Flipkart: 'https://www.flipkart.com/indian-garage-co-men-solid-green-night-suit-set/p/itm3b1c3e8e27bf7?pid=NSTGTR9YTH8GZ35G&lid=LSTNSTGTR9YTH8GZ35GIIAFSX&marketplace=FLIPKART&cmpid=content_night-suit_8965229628_gmc&gPromoCode=nb-mp-03eb96cf04' }
    },
    {
      id: 'male-casual-6',
      name: 'Denim Jacket and T-Shirt',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745205729/Screenshot_2025-04-21_085157_gzjter.png',
      price: 2499,
      gender: 'male',
      style: 'casual',
      occasions: ['outing', 'casual gathering', 'spring/fall wear'],
      bodyTypes: ['all'],
      colorType: 'cool',
      color: 'denim blue and various',
      description: 'A classic denim jacket layered over a casual t-shirt.',
      shopLinks: { Amazon: 'https://www.amazon.in/JVX-Shirt-Denim-MS-15-Regular/dp/B0D96D6Y9F?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1WYWER0W24N8S&th=1&psc=1' }
    },
  
    // Traditional/Ethnic Outfits (Minimum 6)
    {
      id: 'male-ethnic-1',
      name: 'Classic Kurta Pajama',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745205811/Screenshot_2025-04-21_085320_ioy5nn.png',
      price: 2499,
      gender: 'male',
      style: 'traditional',
      occasions: ['festive', 'wedding', 'cultural event'],
      bodyTypes: ['all'],
      colorType: 'warm',
      color: 'various',
      description: 'A comfortable and classic kurta pajama set, perfect for traditional occasions.',
      shopLinks: { Myntra: 'https://www.myntra.com/kurta-sets/manyavar/manyavar-floral-woven-design-thread-work-mandarin-collar-straight-kurta-with-trousers/31258684/buy' }
    },
    {
      id: 'male-ethnic-2',
      name: 'Elegant Sherwani',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745205889/Screenshot_2025-04-21_085438_i1cnch.png',
      price: 9999,
      gender: 'male',
      style: 'traditional',
      occasions: ['wedding', 'ceremony'],
      bodyTypes: ['tall', 'average', 'stout'],
      colorType: 'warm',
      color: 'various',
      description: 'An elegant sherwani, ideal for weddings and grand celebrations.',
      shopLinks: { Manyavar: 'https://www.manyavar.com/en-in/sherwani/dusty-pink-grandeur-sherwani/UC135509.html' }
    },
    {
      id: 'male-ethnic-3',
      name: 'Pathani Suit',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745205980/Screenshot_2025-04-21_085551_wny3fk.png',
      price: 3499,
      gender: 'male',
      style: 'traditional',
      occasions: ['festive', 'cultural event'],
      bodyTypes: ['athletic', 'average', 'stout'],
      colorType: 'neutral',
      color: 'various',
      description: 'A stylish and comfortable Pathani suit.',
      shopLinks: { Myntra: 'https://www.myntra.com/kurta-sets/inddus/inddus-linen-pathani-kurta-with-dhoti-pants/22110772/buy' }
    },
    {
      id: 'male-ethnic-4',
      name: 'Nehru Jacket with Kurta',
      image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745206059/Screenshot_2025-04-21_085704_tgpxzd.png',
      price: 3999,
      gender: 'male',
      style: 'traditional',
      occasions: ['festive', 'semi-formal ethnic'],
      bodyTypes: ['slim', 'average'],
      colorType: 'warm',
      color: 'various',
      description: 'A smart Nehru jacket paired with a kurta.',
      shopLinks: { Amazon: 'https://www.amazon.in/Shvaas-Vastramay-Cotton-Jacket-Set-AA121_VSHVMJ201nMMK005CRnPANT006CR_36/dp/B0CP43PRXT?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1WYWER0W24N8S&th=1&psc=1' }
    },
  {
    id: 'male-party-1',
    name: 'Stylish Blazer and Dark Jeans',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 3999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'night out', 'social event'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'cool',
    color: 'black blazer, dark wash jeans',
    description: 'A stylish blazer paired with dark jeans for a fashionable party look.',
    shopLinks: { myntra: 'PLACEHOLDER_MYNTRA_LINK' }
  },
  {
    id: 'male-party-2',
    name: 'Printed Shirt and Chinos',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 1999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'casual gathering', 'social event'],
    bodyTypes: ['all'],
    colorType: 'warm',
    color: 'bold print shirt, neutral chinos',
    description: 'A trendy printed shirt with well-fitting chinos for a party vibe.',
    shopLinks: { ajio: 'PLACEHOLDER_AJIO_LINK' }
  },
  {
    id: 'male-party-3',
    name: 'Leather Jacket and Dark Trousers',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 5999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'night out', 'social event'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'cool',
    color: 'black leather jacket, black trousers',
    description: 'A cool leather jacket paired with dark trousers for a stylish party look.',
    shopLinks: { flipkart: 'PLACEHOLDER_FLIPKART_LINK' }
  },
  {
    id: 'male-party-4',
    name: 'Velvet Blazer',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 6999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'special occasion', 'night out'],
    bodyTypes: ['slim', 'average', 'tall'],
    colorType: 'warm',
    color: 'burgundy or deep blue velvet',
    description: 'A luxurious velvet blazer to make a statement at any party.',
    shopLinks: { meesho: 'PLACEHOLDER_MEESHO_LINK' }
  },
  {
    id: 'male-party-5',
    name: 'Sequined or Embellished Shirt',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'dance club', 'special event'],
    bodyTypes: ['slim', 'athletic'],
    colorType: 'cool',
    color: 'black or metallic embellished',
    description: 'A bold sequined or embellished shirt for a standout party look.',
    shopLinks: { amazon: 'PLACEHOLDER_AMAZON_LINK' }
  },
  {
    id: 'male-party-6',
    name: 'Stylish Dress Shoes or Boots',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2799,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'night out', 'social event'],
    bodyTypes: ['all'],
    colorType: 'neutral',
    color: 'black, brown, or metallic accents',
    description: 'A pair of stylish dress shoes or boots to complete a party outfit.',
    shopLinks: { myntra: 'PLACEHOLDER_MYNTRA_LINK' }
  },

  // Date Night Outfits (Minimum 6 in total now)
  {
    id: 'male-date-1',
    name: 'Smart Casual Shirt and Dark Jeans',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2299,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'dinner', 'evening out'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'cool',
    color: 'navy or burgundy shirt, dark wash jeans',
    description: 'A smart casual button-down shirt paired with dark jeans for a date night.',
    shopLinks: { ajio: 'PLACEHOLDER_AJIO_LINK' }
  },
  {
    id: 'male-date-2',
    name: 'Sweater and Chinos',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2599,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'casual dinner', 'evening stroll'],
    bodyTypes: ['all'],
    colorType: 'warm',
    color: 'olive or charcoal sweater, neutral chinos',
    description: 'A comfortable yet stylish sweater with well-fitting chinos for a relaxed date.',
    shopLinks: { flipkart: 'PLACEHOLDER_FLIPKART_LINK' }
  },
  {
    id: 'male-date-3',
    name: 'Polo Shirt and Dark Trousers',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 1799,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'casual dinner', 'evening outing'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'cool',
    color: 'dark colored polo, black or grey trousers',
    description: 'A smart polo shirt with dark trousers for a refined casual date look.',
    shopLinks: { meesho: 'PLACEHOLDER_MEESHO_LINK' }
  },
  {
    id: 'male-date-4',
    name: 'Light Jacket and Jeans',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 3499,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'evening out', 'movie night'],
    bodyTypes: ['all'],
    colorType: 'neutral',
    color: 'denim or bomber jacket, dark jeans',
    description: 'A stylish light jacket paired with jeans for a cool date night outfit.',
    shopLinks: { amazon: 'PLACEHOLDER_AMAZON_LINK' }
  },
  {
    id: 'male-date-5',
    name: 'Button-Down Shirt (rolled sleeves) and Jeans',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 1999,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'dinner', 'evening event'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'warm',
    color: 'patterned or solid color shirt, well-fitted jeans',
    description: 'A casually stylish button-down shirt with rolled-up sleeves and jeans.',
    shopLinks: { myntra: 'PLACEHOLDER_MYNTRA_LINK' }
  },
  {
    id: 'male-date-6',
    name: 'Smart Sneakers or Casual Boots',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2299,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'casual dinner', 'evening stroll'],
    bodyTypes: ['all'],
    colorType: 'neutral',
    color: 'various',
    description: 'A pair of smart sneakers or casual boots to complete a date night look.',
    shopLinks: { ajio: 'PLACEHOLDER_AJIO_LINK' }
  },
   // Party Outfits (Minimum 6 in total now)
   {
    id: 'male-party-1',
    name: 'Stylish Blazer and Dark Jeans',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 3999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'night out', 'social event'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'cool',
    color: 'black blazer, dark wash jeans',
    description: 'A stylish blazer paired with dark jeans for a fashionable party look.',
    shopLinks: { myntra: 'PLACEHOLDER_MYNTRA_LINK' }
  },
  {
    id: 'male-party-2',
    name: 'Printed Shirt and Chinos',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 1999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'casual gathering', 'social event'],
    bodyTypes: ['all'],
    colorType: 'warm',
    color: 'bold print shirt, neutral chinos',
    description: 'A trendy printed shirt with well-fitting chinos for a party vibe.',
    shopLinks: { ajio: 'PLACEHOLDER_AJIO_LINK' }
  },
  {
    id: 'male-party-3',
    name: 'Leather Jacket and Dark Trousers',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 5999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'night out', 'social event'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'cool',
    color: 'black leather jacket, black trousers',
    description: 'A cool leather jacket paired with dark trousers for a stylish party look.',
    shopLinks: { flipkart: 'PLACEHOLDER_FLIPKART_LINK' }
  },
  {
    id: 'male-party-4',
    name: 'Velvet Blazer',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 6999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'special occasion', 'night out'],
    bodyTypes: ['slim', 'average', 'tall'],
    colorType: 'warm',
    color: 'burgundy or deep blue velvet',
    description: 'A luxurious velvet blazer to make a statement at any party.',
    shopLinks: { meesho: 'PLACEHOLDER_MEESHO_LINK' }
  },
  {
    id: 'male-party-5',
    name: 'Sequined or Embellished Shirt',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2999,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'dance club', 'special event'],
    bodyTypes: ['slim', 'athletic'],
    colorType: 'cool',
    color: 'black or metallic embellished',
    description: 'A bold sequined or embellished shirt for a standout party look.',
    shopLinks: { amazon: 'PLACEHOLDER_AMAZON_LINK' }
  },
  {
    id: 'male-party-6',
    name: 'Stylish Dress Shoes or Boots',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2799,
    gender: 'male',
    style: 'party',
    occasions: ['party', 'night out', 'social event'],
    bodyTypes: ['all'],
    colorType: 'neutral',
    color: 'black, brown, or metallic accents',
    description: 'A pair of stylish dress shoes or boots to complete a party outfit.',
    shopLinks: { myntra: 'PLACEHOLDER_MYNTRA_LINK' }
  },

  // Date Night Outfits (Minimum 6 in total now)
  {
    id: 'male-date-1',
    name: 'Smart Casual Shirt and Dark Jeans',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2299,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'dinner', 'evening out'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'cool',
    color: 'navy or burgundy shirt, dark wash jeans',
    description: 'A smart casual button-down shirt paired with dark jeans for a date night.',
    shopLinks: { ajio: 'PLACEHOLDER_AJIO_LINK' }
  },
  {
    id: 'male-date-2',
    name: 'Sweater and Chinos',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2599,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'casual dinner', 'evening stroll'],
    bodyTypes: ['all'],
    colorType: 'warm',
    color: 'olive or charcoal sweater, neutral chinos',
    description: 'A comfortable yet stylish sweater with well-fitting chinos for a relaxed date.',
    shopLinks: { flipkart: 'PLACEHOLDER_FLIPKART_LINK' }
  },
  {
    id: 'male-date-3',
    name: 'Polo Shirt and Dark Trousers',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 1799,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'casual dinner', 'evening outing'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'cool',
    color: 'dark colored polo, black or grey trousers',
    description: 'A smart polo shirt with dark trousers for a refined casual date look.',
    shopLinks: { meesho: 'PLACEHOLDER_MEESHO_LINK' }
  },
  {
    id: 'male-date-4',
    name: 'Light Jacket and Jeans',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 3499,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'evening out', 'movie night'],
    bodyTypes: ['all'],
    colorType: 'neutral',
    color: 'denim or bomber jacket, dark jeans',
    description: 'A stylish light jacket paired with jeans for a cool date night outfit.',
    shopLinks: { amazon: 'PLACEHOLDER_AMAZON_LINK' }
  },
  {
    id: 'male-date-5',
    name: 'Button-Down Shirt (rolled sleeves) and Jeans',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 1999,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'dinner', 'evening event'],
    bodyTypes: ['slim', 'athletic', 'average'],
    colorType: 'warm',
    color: 'patterned or solid color shirt, well-fitted jeans',
    description: 'A casually stylish button-down shirt with rolled-up sleeves and jeans.',
    shopLinks: { myntra: 'PLACEHOLDER_MYNTRA_LINK' }
  },
  {
    id: 'male-date-6',
    name: 'Smart Sneakers or Casual Boots',
    image: 'PLACEHOLDER_IMAGE_URL',
    price: 2299,
    gender: 'male',
    style: 'date',
    occasions: ['date', 'casual dinner', 'evening stroll'],
    bodyTypes: ['all'],
    colorType: 'neutral',
    color: 'various',
    description: 'A pair of smart sneakers or casual boots to complete a date night look.',
    shopLinks: { ajio: 'PLACEHOLDER_AJIO_LINK' }
  },
];

export default maleOutfits;