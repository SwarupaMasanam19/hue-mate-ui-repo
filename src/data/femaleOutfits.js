// src/data/femaleOutfits.js
// Contains outfit data for the outfit recommendation system

const femaleOutfits = [
  // Traditional/Festive Outfits
  {
    id: 'outfit-1',
    name: 'Traditional Lehenga Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620203/Screenshot_2024-12-31_101310_em86l5.png',
    price: 2999,
    gender: 'female',
    style: 'traditional',
    occasions: ['wedding', 'festive'],
    bodyTypes: ['pear', 'hourglass', 'rectangle'],
    colorType: 'warm',
    color: 'light pink',
    description: 'A beautiful traditional lehenga set with intricate embroidery, perfect for festive occasions and celebrations.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  {
    id: 'outfit-2',
    name: 'Embellished Anarkali',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620073/Screenshot_2024-12-31_101055_ld1lql.png',
    price: 2799,
    gender: 'female',
    style: 'traditional',
    occasions: ['festive', 'ceremony'],
    bodyTypes: ['hourglass', 'rectangle', 'apple'],
    colorType: 'warm',
    color: 'red',
    description: 'A stunning anarkali suit with intricate embellishments and flowing silhouette, ideal for special occasions.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  {
    id: 'outfit-3',
    name: 'Traditional Saree',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735626691/Screenshot_2024-12-31_115906_rit4i8.png',
    price: 2499,
    gender: 'female',
    style: 'traditional',
    occasions: ['wedding', 'work', 'formal'],
    bodyTypes: ['hourglass', 'pear', 'rectangle'],
    colorType: 'warm',
    color: 'pink',
    description: 'A beautiful traditional saree with intricate patterns and rich colors, versatile for many occasions.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // Casual Outfits
  {
    id: 'outfit-4',
    name: 'Casual Kurti Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735627651/Screenshot_2024-12-31_121713_o3tehv.png',
    price: 1499,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'work'],
    bodyTypes: ['rectangle', 'hourglass', 'pear'],
    colorType: 'cool',
    color: 'turquoise',
    description: 'A comfortable and stylish casual kurti set perfect for everyday wear and office settings.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  {
    id: 'outfit-5',
    name: 'Casual Denim Set',
    image: 'https://i.pinimg.com/originals/fb/62/13/fb62131f2f5cc1b674a6da9df3fee167.jpg',
    price: 1799,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'outing'],
    bodyTypes: ['hourglass', 'rectangle', 'inverted-triangle'],
    colorType: 'cool',
    color: 'denim blue',
    description: 'A trendy denim outfit that combines comfort and style for casual outings and everyday wear.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // Work Outfits
  {
    id: 'outfit-6',
    name: 'Professional Saree',
    image: 'https://i.pinimg.com/originals/18/25/3a/18253a3e3f2facbd5e85afe0edc943d9.jpg',
    price: 2299,
    gender: 'female',
    style: 'formal',
    occasions: ['work', 'business', 'formal'],
    bodyTypes: ['hourglass', 'pear', 'rectangle', 'apple'],
    colorType: 'neutral',
    color: 'navy blue',
    description: 'An elegant professional saree that perfectly balances tradition with office-appropriate style.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  {
    id: 'outfit-7',
    name: 'Formal Shirt & Trousers',
    image: 'https://i.pinimg.com/originals/b1/71/23/b17123fea7daa24a3d88604940b8be3a.jpg',
    price: 2599,
    gender: 'female',
    style: 'formal',
    occasions: ['work', 'business', 'interview'],
    bodyTypes: ['rectangle', 'hourglass', 'inverted-triangle'],
    colorType: 'neutral',
    color: 'white and black',
    description: 'A sharp and professional formal outfit with a well-fitted shirt and trousers, perfect for business settings.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // Indo-Western Outfits
  {
    id: 'outfit-8',
    name: 'Indo-Western Fusion Dress',
    image: 'https://i.pinimg.com/originals/aa/52/bd/aa52bd01af3c28bd7d851c7ac8328df4.jpg',
    price: 2899,
    gender: 'female',
    style: 'indo-western',
    occasions: ['party', 'festive', 'date'],
    bodyTypes: ['hourglass', 'pear', 'rectangle'],
    colorType: 'warm',
    color: 'maroon',
    description: 'A beautiful fusion of Indian and Western styles in this unique dress, perfect for parties and special events.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // Casual Ethnic
  {
    id: 'outfit-9',
    name: 'Casual Palazzo Set',
    image: 'https://i.pinimg.com/originals/e9/2c/62/e92c625fcc5d5f7087bd3cc775947a4d.jpg',
    price: 1699,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'college'],
    bodyTypes: ['pear', 'apple', 'rectangle', 'hourglass'],
    colorType: 'cool',
    color: 'blue',
    description: 'A comfortable and stylish palazzo set that is perfect for daily wear with a touch of ethnic charm.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // Budget Outfits
  {
    id: 'outfit-10',
    name: 'Affordable Kurta Set',
    image: 'https://i.pinimg.com/originals/bc/b0/f3/bcb0f3b9d4c05c3b9010063ab833bad9.jpg',
    price: 999,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'college'],
    bodyTypes: ['all', 'hourglass', 'rectangle', 'pear', 'apple'],
    colorType: 'warm',
    color: 'yellow',
    description: 'An affordable yet stylish kurta set that offers great value without compromising on quality or appearance.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  {
    id: 'outfit-11',
    name: 'Budget Saree',
    image: 'https://i.pinimg.com/originals/19/a3/64/19a364d40d3fef3dab76ca15377f7e2a.jpg',
    price: 1199,
    gender: 'female',
    style: 'traditional',
    occasions: ['festive', 'casual', 'college'],
    bodyTypes: ['hourglass', 'pear', 'rectangle'],
    colorType: 'neutral',
    color: 'beige',
    description: 'A beautiful yet affordable saree that delivers the perfect traditional look without breaking the bank.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // Premium Outfits
  {
    id: 'outfit-12',
    name: 'Designer Wedding Lehenga',
    image: 'https://i.pinimg.com/originals/cb/73/42/cb7342d8dc0f8b3f817c7d79f5c81331.jpg',
    price: 8999,
    gender: 'female',
    style: 'traditional',
    occasions: ['wedding', 'ceremony'],
    bodyTypes: ['hourglass', 'pear'],
    colorType: 'warm',
    color: 'red gold',
    description: 'A stunning designer lehenga with exquisite handcrafted details, perfect for your special wedding day.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  {
    id: 'outfit-13',
    name: 'Luxury Evening Gown',
    image: 'https://i.pinimg.com/originals/1e/93/a7/1e93a7bc0f15f13dca5f5f6250d9597d.jpg',
    price: 7599,
    gender: 'female',
    style: 'formal',
    occasions: ['party', 'formal'],
    bodyTypes: ['hourglass', 'rectangle', 'inverted-triangle'],
    colorType: 'cool',
    color: 'navy blue',
    description: 'An elegant evening gown designed to make a statement at formal events and high-end parties.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // For Apple Body Type
  {
    id: 'outfit-14',
    name: 'A-Line Dress',
    image: 'https://i.pinimg.com/originals/90/e2/05/90e2050575744da9e59599a91e7167eb.jpg',
    price: 2499,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'date', 'work'],
    bodyTypes: ['apple', 'pear'],
    colorType: 'neutral',
    color: 'black',
    description: 'A flattering A-line dress that creates a balanced silhouette, perfect for apple body types.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // For Rectangle Body Type
  {
    id: 'outfit-15',
    name: 'Peplum Style Top & Skirt',
    image: 'https://i.pinimg.com/originals/76/b6/ca/76b6ca72d96f398eba58fe05a5f5af4d.jpg',
    price: 2699,
    gender: 'female',
    style: 'formal',
    occasions: ['work', 'formal', 'party'],
    bodyTypes: ['rectangle'],
    colorType: 'cool',
    color: 'blue',
    description: 'A sophisticated peplum top and skirt combination that creates curves and definition for rectangle body types.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // For Inverted Triangle Body Type
  {
    id: 'outfit-16',
    name: 'A-Line Skirt Outfit',
    image: 'https://i.pinimg.com/originals/91/91/12/919112cddd3f0cdc9b57c91b1c4cdb5c.jpg',
    price: 2299,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'work'],
    bodyTypes: ['inverted-triangle'],
    colorType: 'neutral',
    color: 'beige',
    description: 'An outfit featuring an A-line skirt that balances proportions perfectly for inverted triangle body types.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // For Pear Body Type
  {
    id: 'outfit-17',
    name: 'Fit and Flare Dress',
    image: 'https://i.pinimg.com/originals/8a/26/57/8a2657adcce8c029d7b9c2db7ef56ddf.jpg',
    price: 2899,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'date', 'party'],
    bodyTypes: ['pear'],
    colorType: 'warm',
    color: 'coral',
    description: 'A beautiful fit and flare dress that accentuates the waist and creates a balanced silhouette for pear body types.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  
  // Budget Options by Color Type
  {
    id: 'outfit-18',
    name: 'Budget Warm Tone Outfit',
    image: 'https://i.pinimg.com/originals/f9/42/8c/f9428cb5723cffcc81c8be220953b965.jpg',
    price: 1499,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily'],
    bodyTypes: ['all', 'rectangle', 'hourglass', 'pear', 'apple', 'inverted-triangle'],
    colorType: 'warm',
    color: 'rust orange',
    description: 'An affordable casual outfit in warm tones that flatters most body types and skin tones.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  {
    id: 'outfit-19',
    name: 'Budget Cool Tone Outfit',
    image: 'https://i.pinimg.com/originals/0a/76/aa/0a76aa46894b7eb5c1f3e6b4a7d7cc20.jpg',
    price: 1399,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily'],
    bodyTypes: ['all', 'rectangle', 'hourglass', 'pear', 'apple', 'inverted-triangle'],
    colorType: 'cool',
    color: 'blue teal',
    description: 'An affordable casual outfit in cool tones that complements cool skin tones beautifully.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },
  {
    id: 'outfit-20',
    name: 'Budget Neutral Tone Outfit',
    image: 'https://i.pinimg.com/originals/28/76/0c/28760c3bb8b0417614d11f8198564257.jpg',
    price: 1299,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'work'],
    bodyTypes: ['all', 'rectangle', 'hourglass', 'pear', 'apple', 'inverted-triangle'],
    colorType: 'neutral',
    color: 'beige cream',
    description: 'An affordable casual outfit in neutral tones that works with any skin tone and is perfect for everyday wear.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  },

  //Sarees
  {
    id: 'outfit-2',
    name: 'Ethnic Woven Design Zari Banarasi Saree',
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
];

export default femaleOutfits;