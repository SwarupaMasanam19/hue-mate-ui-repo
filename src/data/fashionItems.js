// Sample fashion items data for the application
// In a production application, this would likely come from an API

const fashionItems = {
  tops: [
    {
      id: 't1',
      name: 'Ruffled Sleeve Blouse',
      image: '/api/placeholder/300/400', // Replace with actual image path
      price: 1299,
      color: 'warm',
      style: 'casual',
      season: 'summer',
      sleeveType: 'ruffled',
      bodyType: ['hourglass', 'pear', 'rectangle'],
      occasions: ['casual', 'work', 'date'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 't2',
      name: 'Classic White Button-Up',
      image: '/api/placeholder/300/400',
      price: 999,
      color: 'cool',
      style: 'formal',
      season: 'all',
      sleeveType: 'full',
      bodyType: ['all'],
      occasions: ['work', 'formal', 'interview'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 't3',
      name: 'Floral Sleeveless Top',
      image: '/api/placeholder/300/400',
      price: 799,
      color: 'warm',
      style: 'casual',
      season: 'summer',
      sleeveType: 'sleeveless',
      bodyType: ['hourglass', 'inverted-triangle'],
      occasions: ['casual', 'vacation', 'party'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 't4',
      name: 'Cold Shoulder Top',
      image: '/api/placeholder/300/400',
      price: 899,
      color: 'cool',
      style: 'trendy',
      season: 'summer',
      sleeveType: 'cold-shoulder',
      bodyType: ['hourglass', 'apple', 'rectangle'],
      occasions: ['party', 'date', 'casual'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 't5',
      name: 'V-Neck Sweater',
      image: '/api/placeholder/300/400',
      price: 1499,
      color: 'neutral',
      style: 'casual',
      season: 'winter',
      sleeveType: 'full',
      bodyType: ['apple', 'inverted-triangle', 'rectangle'],
      occasions: ['casual', 'work', 'date'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    }
  ],
  
  bottoms: [
    {
      id: 'b1',
      name: 'High-Waisted Skinny Jeans',
      image: '/api/placeholder/300/400',
      price: 1599,
      color: 'cool',
      style: 'casual',
      season: 'all',
      type: 'jeans',
      fit: 'skinny',
      bodyType: ['hourglass', 'pear', 'rectangle'],
      occasions: ['casual', 'work', 'date'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'b2',
      name: 'A-Line Midi Skirt',
      image: '/api/placeholder/300/400',
      price: 1299,
      color: 'warm',
      style: 'formal',
      season: 'all',
      type: 'skirt',
      fit: 'a-line',
      bodyType: ['pear', 'apple', 'hourglass'],
      occasions: ['work', 'formal', 'date'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'b3',
      name: 'Wide-Leg Palazzo Pants',
      image: '/api/placeholder/300/400',
      price: 1399,
      color: 'neutral',
      style: 'trendy',
      season: 'summer',
      type: 'pants',
      fit: 'wide-leg',
      bodyType: ['hourglass', 'inverted-triangle', 'apple'],
      occasions: ['casual', 'work', 'vacation'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'b4',
      name: 'Pencil Skirt',
      image: '/api/placeholder/300/400',
      price: 1199,
      color: 'cool',
      style: 'formal',
      season: 'all',
      type: 'skirt',
      fit: 'pencil',
      bodyType: ['hourglass', 'rectangle'],
      occasions: ['work', 'formal', 'interview'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'b5',
      name: 'Boyfriend Jeans',
      image: '/api/placeholder/300/400',
      price: 1499,
      color: 'warm',
      style: 'casual',
      season: 'all',
      type: 'jeans',
      fit: 'relaxed',
      bodyType: ['hourglass', 'pear', 'apple'],
      occasions: ['casual', 'vacation'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    }
  ],
  
  jewelry: [
    {
      id: 'j1',
      name: 'Statement Chandelier Earrings',
      image: '/api/placeholder/200/200',
      price: 599,
      color: 'gold',
      style: 'statement',
      type: 'earrings',
      occasions: ['party', 'wedding', 'formal'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'j2',
      name: 'Minimalist Stud Earrings',
      image: '/api/placeholder/200/200',
      price: 399,
      color: 'silver',
      style: 'minimal',
      type: 'earrings',
      occasions: ['casual', 'work', 'daily'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'j3',
      name: 'Layered Necklace',
      image: '/api/placeholder/200/200',
      price: 799,
      color: 'gold',
      style: 'trendy',
      type: 'necklace',
      occasions: ['casual', 'date', 'party'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'j4',
      name: 'Pearl Bracelet',
      image: '/api/placeholder/200/200',
      price: 499,
      color: 'pearl',
      style: 'classic',
      type: 'bracelet',
      occasions: ['work', 'formal', 'wedding'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    }
  ],
  
  footwear: [
    {
      id: 'f1',
      name: 'Classic Stiletto Heels',
      image: '/api/placeholder/300/300',
      price: 1999,
      color: 'black',
      style: 'formal',
      type: 'heels',
      height: 'high',
      occasions: ['formal', 'work', 'party'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'f2',
      name: 'White Sneakers',
      image: '/api/placeholder/300/300',
      price: 1499,
      color: 'white',
      style: 'casual',
      type: 'sneakers',
      height: 'flat',
      occasions: ['casual', 'workout'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'f3',
      name: 'Ankle Boots',
      image: '/api/placeholder/300/300',
      price: 2499,
      color: 'brown',
      style: 'trendy',
      type: 'boots',
      height: 'medium',
      occasions: ['casual', 'date', 'work'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    },
    {
      id: 'f4',
      name: 'Ballet Flats',
      image: '/api/placeholder/300/300',
      price: 999,
      color: 'nude',
      style: 'classic',
      type: 'flats',
      height: 'flat',
      occasions: ['casual', 'work', 'daily'],
      link: {
        amazon: 'https://amazon.com',
        meesho: 'https://meesho.com',
        flipkart: 'https://flipkart.com'
      }
    }
  ]
};

export default fashionItems;