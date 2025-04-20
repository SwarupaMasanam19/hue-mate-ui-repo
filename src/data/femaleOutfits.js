// src/data/femaleOutfits.js
// Contains outfit data for the outfit recommendation system

const femaleOutfits = [
  // Traditional/Festive Outfits
  {
    id: 'outfit-1',
    name: 'Traditional Lehenga Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735626691/Screenshot_2024-12-31_115906_rit4i8.png',
    price: 2999,
    gender: 'female',
    style: 'traditional',
    occasions: ['wedding', 'festive'],
    bodyTypes: ['pear', 'hourglass', 'rectangle'],
    colorType: 'warm',
    color: 'light pink',
    description: 'A beautiful traditional lehenga set with intricate embroidery, perfect for festive occasions and celebrations.',
    shopLinks: { Ajio: 'https://www.ajio.com/fusionic-embellished-flared-lehenga-choli-set-with-dupatta/p/466230391_pink' }
  },
  {
    id: 'outfit-2',
    name: 'Embellished Anarkali',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745145620/Screenshot_2025-04-20_161001_lapku3.png',
    price: 1899,
    gender: 'female',
    style: 'traditional',
    occasions: ['festive', 'ceremony'],
    bodyTypes: ['hourglass', 'rectangle', 'apple'],
    colorType: 'warm',
    color: 'red',
    description: 'A stunning anarkali suit with intricate embellishments and flowing silhouette, ideal for special occasions.',
    shopLinks: { Myntra: 'https://www.myntra.com/kurtas/kalini/kalini-women-embellished-georgette-anarkali-kurta/31153455/buy' }
  },
  {
    id: 'outfit-3',
    name: 'Traditional Saree',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745146309/Screenshot_2025-04-20_162132_y7lgix.png',
    price: 2499,
    gender: 'female',
    style: 'traditional',
    occasions: ['wedding', 'work', 'formal'],
    bodyTypes: ['hourglass', 'pear', 'rectangle'],
    colorType: 'warm',
    color: 'pink',
    description: 'A beautiful traditional saree with intricate patterns and rich colors, versatile for many occasions.',
    shopLinks: { Myntra: 'https://www.myntra.com/sarees/kalini/kalini-ethnic-motifs-woven-design-zari-banarasi-saree/28207802/buy' }
  },
  
  // Casual Outfits
  {
    id: 'outfit-4',
    name: 'Casual Kurti Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745146449/Screenshot_2025-04-20_162355_sj4mdf.png',
    price: 1189,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'work'],
    bodyTypes: ['rectangle', 'hourglass', 'pear'],
    colorType: 'cool',
    color: 'turquoise',
    description: 'A comfortable and stylish casual kurti set perfect for everyday wear and office settings.',
    shopLinks: { Myntra: 'https://www.myntra.com/kurta-sets/anouk/anouk-floral-embroidered-regular-sequinned-kurta-with-trousers--dupatta/28980354/buy' }
  },
  {
    id: 'outfit-5',
    name: 'Casual Denim Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745146777/Screenshot_2025-04-20_162855_jtuyig.png',
    price: 1029,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'outing'],
    bodyTypes: ['hourglass', 'rectangle', 'inverted-triangle'],
    colorType: 'cool',
    color: 'denim blue',
    description: 'A trendy denim outfit that combines comfort and style for casual outings and everyday wear.',
    shopLinks: { Amazon: 'https://www.amazon.in/Aarika-Womens-Casual-Colour-Co-ord/dp/B0DTKF8S6X/ref=sr_1_10?crid=2MOJSRQ1FJS74&dib=eyJ2IjoiMSJ9.XFquZWnhNC-V8OI3qT5BNHPm3oByQvyF7PvtZwf8dcIL7hh9ubh5jkjJQT-vi1smivfHCNqZu5bDJu7rHhtOgNyqoJLs2z_6dI0OysIQh5Y9gd2Un9U1TIWTrxnT-TO_WcSPFXV77xIpzpULH-z4vI4tyHY8Jmuz_DEW_86HOntmxhQsA-NOYDyXjUgNXJO-FfyZRq6wvIBl0ZllHhbUzLw-gf2uEl7aHtB5fU3q36wtywfAe2UhcKFLBV0lLJ3saaFziR6vOIOCbb3PSPSOM0oZUyjAbjPg1uaZH6qHSoQ.yDDwvN0hB1lGR8v7il1MN9dvUn_bbTOcz-kZFHwODNg&dib_tag=se&keywords=Casual%2BDenim%2BSet%2Bwomen&qid=1745146697&sprefix=casual%2Bdenim%2Bset%2Bwome%2Caps%2C276&sr=8-10&th=1&psc=1' }
  },
  
  // Work Outfits
  {
    id: 'outfit-6',
    name: 'Professional Saree',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745146984/Screenshot_2025-04-20_163202_puqazy.png',
    price: 785,
    gender: 'female',
    style: 'formal',
    occasions: ['work', 'business', 'formal'],
    bodyTypes: ['hourglass', 'pear', 'rectangle', 'apple'],
    colorType: 'neutral',
    color: 'navy blue',
    description: 'An elegant professional saree that perfectly balances tradition with office-appropriate style.',
    shopLinks: { Amazon: 'https://www.amazon.in/Uniform-Sarees-Corp-Polycotton-Teachers/dp/B08FMC67RQ/ref=sr_1_18?crid=1WYNTDO1KQHPU&dib=eyJ2IjoiMSJ9.lzBknATu8qQtM3QY7YseReF9fwWQt1hY-IjqF5ONzxYgl_E7OgAnA0lHy2hf5AIK_TJc3fbeiu87H3VuFNncCxuV0eAJpjVxs5WNWmYS97UbQPAQjBlrGAoz7EprATeUIAA112rUljAwxvQYkyo_vXvnD34gWK8Q66t_7Iv4Vo0h-Vup-KpnqYxA2Q7-dagp8Fog1v3ZJYqnboWB4dK_j3gqNPUliYYAXYViNxk5Wi8XksHWWWvECHDeFjEtVC7VesHZjWW0HA52fA41YLZkpkFEfXtPgR5wbPMqA8RUmcI.vn3ZASA2L6P67FMWImjlfiPs-LUmeNAQLnnmwT_lMeA&dib_tag=se&keywords=professional%2Bsaree%2Bnavy%2Bblue%2Bcolor&qid=1745146836&sprefix=professional%2Bsaree%2Bnavy%2Bblue%2Bcol%2Caps%2C246&sr=8-18&th=1' }
  },
  {
    id: 'outfit-7',
    name: 'Formal Shirt & Trousers',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745147145/Screenshot_2025-04-20_163504_femsku.png',
    price: 999,
    gender: 'female',
    style: 'formal',
    occasions: ['work', 'business', 'interview'],
    bodyTypes: ['rectangle', 'hourglass', 'inverted-triangle'],
    colorType: 'neutral',
    color: 'white and black',
    description: 'A sharp and professional formal outfit with a well-fitted shirt and trousers, perfect for business settings.',
    shopLinks: { meesho: 'https://www.meesho.com/womengirls-formal-white-shirt-and-black-pant-set-no-compromise-in-quality/p/3wpkel' }
  },
  
  // Indo-Western Outfits
  {
    id: 'outfit-8',
    name: 'Indo-Western Fusion Dress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745147377/Screenshot_2025-04-20_163844_ufugvl.png',
    price: 1930,
    gender: 'female',
    style: 'indo-western',
    occasions: ['party', 'festive', 'date'],
    bodyTypes: ['hourglass', 'pear', 'rectangle'],
    colorType: 'warm',
    color: 'maroon',
    description: 'A beautiful fusion of Indian and Western styles in this unique dress, perfect for parties and special events.',
    shopLinks: { Nykaa: 'https://www.nykaafashion.com/mabish-by-sonal-jain-maroon-printed-crop-top-with-sharara-frill-dupatta-set-of-3/p/13542203?adsource=shopping_india&skuId=13542140&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_Catchall&gad_source=1&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVrahfF5xDl2zhh_qlWtPVcDGxD7DhwQMf2nG5Hh1hrfXMPW88tCJOAaAn-YEALw_wcB' }
  },
  
  // Casual Ethnic
  {
    id: 'outfit-9',
    name: 'Casual Palazzo Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745147490/Screenshot_2025-04-20_164114_ssmx2v.png',
    price: 769,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'college'],
    bodyTypes: ['pear', 'apple', 'rectangle', 'hourglass'],
    colorType: 'cool',
    color: 'blue',
    description: 'A comfortable and stylish palazzo set that is perfect for daily wear with a touch of ethnic charm.',
    shopLinks: { Myntra: 'https://www.myntra.com/co-ords/stylum/stylum-blue-puff-sleeves-top-with-palazzos-/24742838/buy' }
  },
  
  // Budget Outfits
  {
    id: 'outfit-10',
    name: 'Affordable Kurta Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745147611/Screenshot_2025-04-20_164319_u2wbsg.png',
    price: 950,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'college'],
    bodyTypes: ['all', 'hourglass', 'rectangle', 'pear', 'apple'],
    colorType: 'warm',
    color: 'yellow',
    description: 'An affordable yet stylish kurta set that offers great value without compromising on quality or appearance.',
    shopLinks: { Nykaa: 'https://www.nykaafashion.com/libas-women-mustard-solid-kurta-with-pant-and-dupatta-set-of-3/p/16452925?adsource=shopping_india&skuId=16452925&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_Catchall&gad_source=1&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVpn8k0cS45xgWdiYX95-uZ9c2hA7ZBKf6y7CIFzSkceHxjCJusLO5IaAuSlEALw_wcB' }
  },
  {
    id: 'outfit-11',
    name: 'Budget Saree',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745147793/Screenshot_2025-04-20_164618_srb18u.png',
    price: 499,
    gender: 'female',
    style: 'traditional',
    occasions: ['festive', 'casual', 'college'],
    bodyTypes: ['hourglass', 'pear', 'rectangle'],
    colorType: 'neutral',
    color: 'beige',
    description: 'A beautiful yet affordable saree that delivers the perfect traditional look without breaking the bank.',
    shopLinks: { Myntra: 'https://www.myntra.com/sarees/moda+rapido/moda-rapido-zari-designer-kanjeevaram-saree/33044285/buy?utm_source=dms_google&utm_medium=pmax_cpc&utm_campaign=dms_google_pmax_cpc_Myntra_SOK_KPI_Traffic_New&keyword=&matchtype=&target=&placement=&gad_source=1&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVpTWkI-0LFCzFb80vIIclu5MPof9ZAq6623SGSUh5lA6XRGJd9ymnsaAlMsEALw_wcB' }
  },
  
  // Premium Outfits
  {
    id: 'outfit-12',
    name: 'Designer Wedding Lehenga',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745147943/Screenshot_2025-04-20_164839_cmrqjg.png',
    price: 7999,
    gender: 'female',
    style: 'traditional',
    occasions: ['wedding', 'ceremony'],
    bodyTypes: ['hourglass', 'pear'],
    colorType: 'warm',
    color: 'red gold',
    description: 'A stunning designer lehenga with exquisite handcrafted details, perfect for your special wedding day.',
    shopLinks: { Myntra: 'https://www.myntra.com/lehenga-choli/atsevam/atsevam-women-red--gold-embroidered--semi-stitched-lehenga--unstitched-blouse--dupatta/20002512/buy?utm_source=dms_google&utm_medium=pmax_cpc&utm_campaign=dms_google_pmax_cpc_Myntra_SOK_KPI_Traffic_New&keyword=&matchtype=&target=&placement=&gad_source=1&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVoIKDi3hIva0aWyVxhNC2KjfbC08LlGyRMFGnw2jiPI_M_9Wub_7_kaAkt2EALw_wcB' }
  },
  {
    id: 'outfit-13',
    name: 'Luxury Evening Gown',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745148426/Screenshot_2025-04-20_165654_nt6zsc.png',
    price: 9999,
    gender: 'female',
    style: 'formal',
    occasions: ['party', 'formal'],
    bodyTypes: ['hourglass', 'rectangle', 'inverted-triangle'],
    colorType: 'cool',
    color: 'navy blue',
    description: 'An elegant evening gown designed to make a statement at formal events and high-end parties.',
    shopLinks: { Myntra: 'https://www.myntra.com/dresses/trendyol/trendyol-women-puff-sleeve-maxi-dress/33181245/buy' }
  },
  
  // For Apple Body Type
  {
    id: 'outfit-14',
    name: 'A-Line Dress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745148752/Screenshot_2025-04-20_165932_f56ary.png',
    price: 2499,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'date', 'work'],
    bodyTypes: ['apple', 'pear'],
    colorType: 'neutral',
    color: 'black',
    description: 'A flattering A-line dress that creates a balanced silhouette, perfect for apple body types.',
    shopLinks: { Westside: 'https://www.westside.com/products/gia-black-high-low-linen-blend-a-line-dress-301002926?variant=44145173856309&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOopiliilO-BmkmehWOeIttMV6rSQD5-Zpc3lFNzo5H2ATGkY-qq2c5w' }
  },
  
  // For Rectangle Body Type
  {
    id: 'outfit-15',
    name: 'Peplum Style Top & Skirt',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745149274/Screenshot_2025-04-20_171054_flua80.png',
    price: 1499,
    gender: 'female',
    style: 'formal',
    occasions: ['work', 'formal', 'party'],
    bodyTypes: ['rectangle'],
    colorType: 'cool',
    color: 'Yellow',
    description: 'A sophisticated peplum top and skirt combination that creates curves and definition for rectangle body types.',
    shopLinks: { Myntra: 'https://www.myntra.com/co-ords/taavi/taavi-women-dabu-cotton-smocked-detail-peplum-top-with-high-slit-skirt/21513860/buy' }
  },
  
  // For Inverted Triangle Body Type
  {
    id: 'outfit-16',
    name: 'A-Line Skirt Outfit',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745153404/Screenshot_2025-04-20_181840_w1fwgv.png',
    price: 2299,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'work'],
    bodyTypes: ['inverted-triangle'],
    colorType: 'neutral',
    color: 'beige',
    description: 'An outfit featuring an A-line skirt that balances proportions perfectly for inverted triangle body types.',
    shopLinks: { Myntra: 'https://www.myntra.com/kurta-sets/idalia/idalia-women-beige--off-white-ethnic-motifs-printed-gotta-patti-cotton-kurta-with-skirt/15116498/buy' }
  },
  
  // For Pear Body Type
  {
    id: 'outfit-17',
    name: 'Fit and Flare Dress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745153638/Screenshot_2025-04-20_182339_br71kv.png',
    price: 2899,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'date', 'party'],
    bodyTypes: ['pear'],
    colorType: 'warm',
    color: 'coral',
    description: 'A beautiful fit and flare dress that accentuates the waist and creates a balanced silhouette for pear body types.',
    shopLinks: { Ajio: 'https://www.ajio.com/fabindia--women-fit-and-flare-dress/p/701020889_coral?srsltid=AfmBOooVWrLEvT22KlcEfC9bzzMNSjatSeAniiqi_Tg1j5m7TNF5cnJBi0k&gPromoCode=New_Repeat_Customers#gmf' }
  },
  
  // Budget Options by Color Type
  {
    id: 'outfit-18',
    name: 'Budget Warm Tone Outfit',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745153832/Screenshot_2025-04-20_182659_bkxc7m.png',
    price: 499,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily'],
    bodyTypes: ['all', 'rectangle', 'hourglass', 'pear', 'apple', 'inverted-triangle'],
    colorType: 'warm',
    color: 'rust orange',
    description: 'An affordable casual outfit in warm tones that flatters most body types and skin tones.',
    shopLinks: { Myntra: 'https://www.myntra.com/dresses/dressberry/dressberry-burnt-orange-ribbed-reverie-fit--flare-mini-dress/30447023/buy' }
  },
  {
    id: 'outfit-19',
    name: 'Budget Cool Tone Outfit',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745153976/Screenshot_2025-04-20_182923_hlum9o.png',
    price: 599,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily'],
    bodyTypes: ['all', 'rectangle', 'hourglass', 'pear', 'apple', 'inverted-triangle'],
    colorType: 'cool',
    color: 'blue teal',
    description: 'An affordable casual outfit in cool tones that complements cool skin tones beautifully.',
    shopLinks: { Amazon: 'https://www.amazon.in/TADKEE-Womens-Two-Piece-Sleeve-FN-Full-Sleeve-Cord-125-Teal-S/dp/B0DPHB3VKG?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1WYWER0W24N8S&th=1&psc=1' }
  },
  {
    id: 'outfit-20',
    name: 'Budget Neutral Tone Outfit',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745154135/Screenshot_2025-04-20_183133_vn5jvz.png',
    price: 599,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'work'],
    bodyTypes: ['all', 'rectangle', 'hourglass', 'pear', 'apple', 'inverted-triangle'],
    colorType: 'neutral',
    color: 'beige cream',
    description: 'An affordable casual outfit in neutral tones that works with any skin tone and is perfect for everyday wear.',
    shopLinks: { Amazon: 'https://www.amazon.in/Varanga-Women-Beige-Shirt-Collar/dp/B0CTMWL9NG?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1WYWER0W24N8S&th=1&psc=1' }
  },

  //Sarees
  {
    id: 'outfit-21',
    name: 'Zari Banarasi Saree',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744524702/Screenshot_2025-04-13_114050_funkx5.png',
    price: 799,
    gender: 'female',
    style: 'traditional',
    occasions: ['festive', 'ceremony', 'wedding'],
    bodyTypes: ['hourglass', 'rectangle', 'apple'],
    colorType: 'warm',
    color: 'red',
    description: 'A stunning Woven Design Zari Banarasi Saree, ideal for special occasions.',
    shopLinks: { Myntra: 'https://www.myntra.com/sarees/divastri/divastri-ethnic-woven-design-zari-banarasi-saree/23293458/buy' }
  },

  {
    id: 'outfit-22',
    name: 'Zari Silk Cotton Saree',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744779489/Screenshot_2025-04-16_102751_ix5h21.png',
    price: 999,
    gender: 'female',
    style: 'traditional',
    occasions: ['festive', 'ceremony', 'wedding'],
    bodyTypes: ['hourglass', 'rectangle', 'apple'],
    colorType: 'warm',
    color: 'red',
    description: 'A stunning Zari Silk Cotton Banarasi Saree, ideal for special occasions.',
    shopLinks: { Myntra: 'https://www.myntra.com/sarees/marziyaa/marziyaa-ethnic-woven-design-zari-silk-cotton-banarasi-saree/27439636/buy' }
  },

  //date night dressess

  {
    id: 'outfit-23',
    name: 'Chic Date Night Dress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745168996/Screenshot_2025-04-20_223911_n6qqei.png',
    price: 2599,
    gender: 'female',
    style: 'casual',
    occasions: ['date', 'party'],
    bodyTypes: ['hourglass', 'rectangle', 'pear', 'inverted-triangle'],
    colorType: 'cool',
    color: 'burgundy',
    description: 'A stylish and comfortable midi dress perfect for a romantic date night or a casual party.',
    shopLinks: { Myntra: 'https://www.myntra.com/dresses/stylecast/stylecast-square-neck-bodycon-maxi-dress/30454462/buy' }
  },
  {
    id: 'outfit-24',
    name: 'Elegant Interview Suit',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745169470/Screenshot_2025-04-20_224656_xsbg55.png',
    price: 2750,
    gender: 'female',
    style: 'formal',
    occasions: ['interview', 'business', 'work'],
    bodyTypes: ['rectangle', 'hourglass', 'inverted-triangle'],
    colorType: 'neutral',
    color: 'charcoal grey',
    description: 'A sophisticated pant suit that exudes professionalism and confidence, ideal for interviews and business settings.',
    shopLinks: { Myntra: 'https://www.myntra.com/suits/rare+rabbit/rare-rabbit-self-design-single-breasted-slim-fit-two-piece-suit/24782516/buy' }
  },
  {
    id: 'outfit-25',
    name: 'Sophisticated Business Dress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745169745/Screenshot_2025-04-20_225211_kntlqe.png',
    price: 2199,
    gender: 'female',
    style: 'formal',
    occasions: ['business', 'work', 'formal'],
    bodyTypes: ['apple', 'hourglass', 'rectangle'],
    colorType: 'neutral',
    color: 'navy blue',
    description: 'A classic and elegant sheath dress suitable for important business meetings and formal work environments.',
    shopLinks: { Amazon: 'https://www.amazon.in/CAMLA-Barcelona-Accented-Shimmery-Dress/dp/B0DJ544T9G?th=1&psc=1' }
  },
  {
    id: 'outfit-26',
    name: 'Glamorous Party Gown',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745170227/Screenshot_2025-04-20_230010_vqsnpl.png',
    price: 6499,
    gender: 'female',
    style: 'formal',
    occasions: ['party', 'formal', 'evening'],
    bodyTypes: ['hourglass', 'inverted-triangle', 'rectangle'],
    colorType: 'cool',
    color: 'emerald green',
    description: 'A stunning and glamorous gown that will make you the star of any party or formal evening event.',
    shopLinks: { Myntra: 'https://www.myntra.com/dresses/trendyol/trendyol-v-neck-sleeveless-ruffled-maxi-dress/24506456/buy' }
  },
  {
    id: 'outfit-27',
    name: 'Flattering Top for Apple Shape',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745170526/Screenshot_2025-04-20_230513_neopgm.png',
    price: 899,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'work'],
    bodyTypes: ['apple'],
    colorType: 'warm',
    color: 'olive green',
    description: 'A flowy and comfortable top designed to flatter the apple body shape, perfect for everyday wear or a relaxed work environment.',
    shopLinks: { Myntra: 'https://www.myntra.com/tops/roadster/the-roadster-lifestyle-co-olive-green-shirt-style-top/10336777/buy' }
  },
  {
    id: 'outfit-28',
    name: 'Balancing Skirt for Inverted Triangle',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745171092/Screenshot_2025-04-20_231415_ihbkep.png',
    price: 1250,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'work', 'college'],
    bodyTypes: ['inverted-triangle'],
    colorType: 'cool',
    color: 'floral print',
    description: 'An A-line or flared skirt that adds volume to the lower body, creating a balanced silhouette for inverted triangle body types.',
    shopLinks: { meesho: 'https://www.meesho.com/oomph-womens-floral-a-line-blue-skirts/p/6071db' }
  },
  
  // More Wedding & Ceremony Outfits
  {
    id: 'outfit-29',
    name: 'Elegant Wedding Saree',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745171441/Screenshot_2025-04-20_231953_eig8dg.png',
    price: 3499,
    gender: 'female',
    style: 'traditional',
    occasions: ['wedding', 'ceremony'],
    bodyTypes: ['hourglass', 'pear', 'rectangle'],
    colorType: 'warm',
    color: 'gold',
    description: 'A luxurious silk saree with intricate zari work, perfect for making a statement at weddings and ceremonies.',
    shopLinks: { nykaafashion: 'webhttps://www.nykaafashion.com/kasee-women-gold-solid-saree-with-unstitched/p/16823331?skuId=16823331&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_Catchall&gad_source=1&gbraid=0AAAAAC968R0jmujosgRUmetsklfgcp4OX&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVpPc8iStEQGhWdLuqeKBuroT2vujKBN8InrnhK7QuiMsIx8DmuGrXMaAktHEALw_wcB' }
  },
  {
    id: 'outfit-30',
    name: 'Graceful Ceremony Gown',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745171722/Screenshot_2025-04-20_232506_hhj0mn.png',
    price: 4250,
    gender: 'female',
    style: 'formal',
    occasions: ['ceremony', 'formal'],
    bodyTypes: ['hourglass', 'rectangle', 'apple'],
    colorType: 'cool',
    color: 'silver grey',
    description: 'A sophisticated and flowing gown ideal for formal ceremonies and elegant events.',
    shopLinks: { Amazon: 'https://www.amazon.in/WEDDING-SUTRA-Designer-Dupatta-Size_Grey/dp/B0DTQ7MJSP?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2M4414QBJM5RV' }
  },

  // More Outing Outfits
  {
    id: 'outfit-31',
    name: 'Trendy Casual Jumpsuit',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745172189/Screenshot_2025-04-20_233252_u0cjx6.png',
    price: 1299,
    gender: 'female',
    style: 'casual',
    occasions: ['outing', 'casual', 'date'],
    bodyTypes: ['rectangle', 'hourglass', 'inverted-triangle'],
    colorType: 'cool',
    color: 'olive',
    description: 'A comfortable and stylish jumpsuit perfect for a fun day out or a casual date.',
    shopLinks: { Myntra: 'https://www.myntra.com/jumpsuit/dressberry/dressberry-women-olive-green-solid-basic-jumpsuit/9922977/buy' }
  },
  {
    id: 'outfit-32',
    name: 'Chic Skirt and Top Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745172728/Screenshot_2025-04-20_234151_teeyo2.png',
    price: 979,
    gender: 'female',
    style: 'casual',
    occasions: ['outing', 'casual', 'college'],
    bodyTypes: ['pear', 'hourglass', 'rectangle'],
    colorType: 'warm',
    color: 'mustard',
    description: 'A fashionable skirt and top set that’s great for casual outings and college wear.',
    shopLinks: { meesho: 'https://www.meesho.com/oomph-stretchable-lycra-coord-crop-top-and-pencil-skirt-set-for-women-yellow-coordmt854msk124/p/7cqfbi' }
  },
  {
    id: 'outfit-33',
    name: 'Relaxed Sundress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745172871/Screenshot_2025-04-20_234418_cgttpi.png',
    price: 849,
    gender: 'female',
    style: 'casual',
    occasions: ['outing', 'casual', 'daily'],
    bodyTypes: ['all', 'hourglass', 'pear', 'rectangle'],
    colorType: 'cool',
    color: 'printed',
    description: 'A breezy and comfortable sundress perfect for warm weather outings and everyday wear.',
    shopLinks: { Amazon: 'https://www.amazon.in/Sheetal-Associates-Womens-Georgette-Printed/dp/B0CWVK6KB4?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1WYWER0W24N8S&th=1&psc=1' }
  },
  { 
    id: 'outfit-34',
    name: 'Stylish Co-ord Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745173010/Screenshot_2025-04-20_234634_g9a8r9.png',
    price: 1150,
    gender: 'female',
    style: 'casual',
    occasions: ['outing', 'casual', 'date'],
    bodyTypes: ['inverted-triangle', 'rectangle', 'hourglass'],
    colorType: 'neutral',
    color: 'beige',
    description: 'A chic and versatile co-ord set that’s perfect for stepping out in style.',
    shopLinks: { Amazon: 'https://www.amazon.in/TADKEE-Womens-Two-Piece-Sleeve-FN-Full-Sleeve-Cord-125-Cream-XXL/dp/B0DPH99RYQ?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1WYWER0W24N8S&th=1&psc=1' }
  },

  // More College Outfits
  {
    id: 'outfit-35',
    name: 'Comfortable Jeans and Top',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745173180/Screenshot_2025-04-20_234907_f8h1lf.png',
    price: 1399,
    gender: 'female',
    style: 'casual',
    occasions: ['college', 'casual', 'daily'],
    bodyTypes: ['all', 'hourglass', 'pear', 'rectangle', 'apple', 'inverted-triangle'],
    colorType: 'cool',
    color: 'blue and white',
    description: 'A classic and comfortable jeans and top combination, a staple for college wear.',
    shopLinks: { Myntra: 'https://www.myntra.com/co-ords/here%26now/herenow-v-neck-top-and-jeans/32653830/buy' }
  },
  {
    id: 'outfit-36',
    name: 'Trendy Dungaree Dress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745173596/Screenshot_2025-04-20_235555_ji83bf.png',
    price: 1550,
    gender: 'female',
    style: 'casual',
    occasions: ['college', 'casual', 'outing'],
    bodyTypes: ['pear', 'rectangle', 'hourglass'],
    colorType: 'cool',
    color: 'denim',
    description: 'A fun and trendy dungaree dress that’s perfect for a youthful college look.',
    shopLinks: { Myntra: 'https://www.myntra.com/dresses/chemistry/chemistry-shoulder-straps-denim-pinafore-dress/28308338/buy' }
  },

  // More Date Night Outfits
  
  {
    id: 'outfit-46',
    name: 'Velvet Evening Dress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1745173735/Screenshot_2025-04-20_235841_wc3yi1.png',
    price: 5200,
    gender: 'female',
    style: 'formal',
    occasions: ['evening', 'formal'],
    bodyTypes: ['hourglass', 'pear', 'rectangle'],
    colorType: 'warm',
    color: 'deep green',
    description: 'A luxurious velvet dress that exudes elegance and sophistication for evening galas.',
    shopLinks: { Myntra: 'https://www.myntra.com/dresses/aask/aask-velvet-a-line-midi-dress/28102836/buy' }
  }
];

export default femaleOutfits;