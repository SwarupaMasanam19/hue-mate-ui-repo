// src/data/femaleOutfits.js
// Sample data for female outfits

const femaleOutfits = [
  // Traditional/Formal outfits (₹2000-3000 range)
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
  
  // Casual outfits (₹1000-2000 range)
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
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744029651/casual-denim-outfit-women_hnslwj.jpg',
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
  
  // Work outfits (₹2000-3000 range)
  {
    id: 'outfit-6',
    name: 'Professional Saree',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744029815/professional-saree-office_jeygrp.jpg',
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
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744029932/formal-shirt-trousers-women_mnywmo.jpg',
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
  
  // Indo-western outfits (₹2000-3000 range)
  {
    id: 'outfit-8',
    name: 'Indo-Western Fusion Dress',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744030088/indo-western-fusion-women_d4gzna.jpg',
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
  
  // Casual ethnic (Under ₹2000)
  {
    id: 'outfit-9',
    name: 'Casual Palazzo Set',
    image: 'https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744030212/palazzo-set-casual-women_dxuokk.jpg',
    price: 1699,
    gender: 'female',
    style: 'casual',
    occasions: ['casual', 'daily', 'college'],
    bodyTypes: ['pear', 'apple', 'rectangle', 'hourglass'],
    colorType: 'cool',
    color: 'blue',
    description: 'A comfortable and stylish palazzo set that is perfect for daily wear with a touch of ethnic charm.',
    shopLinks: { flipkart: 'https://flipkart.com' }
  }
];

export default femaleOutfits;