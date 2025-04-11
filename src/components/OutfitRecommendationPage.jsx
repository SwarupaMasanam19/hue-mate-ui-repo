import React, { useState } from 'react';

const OutfitRecommendationPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  const userProfile = {
    skinTone: "Warm Medium #D4A76A",
    bodyType: "Rectangle",
    occasion: "Festive",
    budget: "₹1000 (low)"
  };
  
  const colorPalette = ["Gold", "Brown", "Forest Green", "Indian Red", "Amber"];
  
  const recommendedOutfits = [
    {
      id: 1,
      name: "Traditional Lehenga Set",
      description: "A gorgeous lehenga skirt with intricate embellishments in royal blue, perfect for special occasions.",
      price: 5999,
      image: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620203/Screenshot_2024-12-31_101310_em86l5.png",
      shopLinks: { amazon: "https://www.amazon.in/" }
    },
    {
      id: 2,
      name: "Embellished Anarkali",
      description: "A stunning anarkali suit with intricate embellishments and flowing silhouette.",
      price: 5999,
      image: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620073/Screenshot_2024-12-31_101055_ld1lql.png",
      shopLinks: { amazon: "https://www.amazon.in/" }
    },
    {
      id: 3,
      name: "Traditional Saree",
      description: "A beautiful traditional saree with intricate patterns and rich colors.",
      price: 3499,
      image: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735626691/Screenshot_2024-12-31_115906_rit4i8.png",
      shopLinks: { amazon: "https://www.amazon.in/" }
    }
  ];
  
  const recommendedJewelry = [
    {
      id: 1,
      name: "Traditional Jhumka Earrings",
      description: "Beautiful traditional jhumka earrings with intricate design, perfect for festive occasions.",
      price: 1299,
      image: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744005862/e53886c0ed43e0218f9767402fd86390_fg5vcw.jpg",
      shopLinks: { amazon: "https://www.amazon.in/" }
    },
    {
      id: 2,
      name: "Antique Kundan Earrings",
      description: "Elegant kundan earrings with antique finish, ideal for wedding and festive wear.",
      price: 1599,
      image: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744005448/953214c5388e633befdf4c89833eacf8_fojtgg.jpg",
      shopLinks: { amazon: "https://www.amazon.in/" }
    }
  ];
  
  const recommendedFootwear = [
    {
      id: 1,
      name: "Block Heel Sandals",
      description: "Versatile block heel sandals in a neutral tan color, comfortable for all-day wear.",
      price: 1499,
      image: "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1744017283/Screenshot_2025-04-07_144415_e3lvex.png",
      shopLinks: { amazon: "https://www.amazon.in/" }
    }
  ];

  return (
    <div className="min-h-screen bg-indigo-950 text-white">
      {/* Header */}
      <header className="py-4 px-6 flex items-center gap-2 border-b border-indigo-800">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center">
          <span className="text-white text-xs">HM</span>
        </div>
        <h1 className="text-xl font-bold text-amber-500">HueMate - Your Perfect Shade</h1>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* User Profile Section */}
        <div className="bg-indigo-900 rounded-lg p-6 mb-8 flex items-start gap-8">
          <div className="shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-amber-500 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735619114/Screenshot_2024-12-31_095459_abfvue.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-lg font-bold">Skin Tone</p>
                <div className="bg-amber-600 text-white px-3 py-1 rounded w-max">
                  {userProfile.skinTone}
                </div>
              </div>
              
              <div>
                <p className="text-lg font-bold">Body Type</p>
                <p>{userProfile.bodyType}</p>
              </div>
              
              <div>
                <p className="text-lg font-bold">Occasion</p>
                <p>{userProfile.occasion}</p>
              </div>
              
              <div>
                <p className="text-lg font-bold">Budget</p>
                <p>{userProfile.budget}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Recommended Color Palette</h2>
          <div className="flex flex-col space-y-2">
            {colorPalette.map((color, index) => {
              const colorMap = {
                "Gold": "bg-amber-500",
                "Brown": "bg-amber-800",
                "Forest Green": "bg-green-800",
                "Indian Red": "bg-red-700",
                "Amber": "bg-amber-400"
              };
              
              return (
                <div key={index} className={`${colorMap[color]} h-8 flex items-center px-3 rounded`}>
                  {color}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Items */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Selected Items</h2>
          
          <div className="bg-indigo-900 rounded-lg p-6">
            <div className="w-full mb-4">
              <img 
                src="https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620203/Screenshot_2024-12-31_101310_em86l5.png" 
                alt="Full outfit" 
                className="max-w-full max-h-96 mx-auto object-contain"
              />
            </div>
            
            <h3 className="text-xl font-bold">Complete Outfit</h3>
            <p className="text-lg">Price: ₹5999</p>
            
            <div className="mt-4 flex gap-4">
              <a 
                href="#"
                className="bg-indigo-700 hover:bg-indigo-600 px-6 py-2 rounded-lg text-center"
              >
                View Details
              </a>
              <a 
                href="https://www.amazon.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-500 px-6 py-2 rounded-lg text-center"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>

        {/* Try On Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Want to see how it looks?</h2>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-amber-500 hover:bg-amber-400 px-6 py-3 rounded-full flex items-center gap-2">
              <span>Virtual Try-On</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className="bg-amber-500 hover:bg-amber-400 px-6 py-3 rounded-full flex items-center gap-2">
              <span>Start Over</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className="bg-indigo-700 hover:bg-indigo-600 px-6 py-3 rounded-full flex items-center gap-2">
              <span>Change Skin Tone</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* More Recommendations */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">More Recommendations</h2>
            <button 
              className="text-amber-500 hover:underline flex items-center gap-1"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide' : 'Show'} Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {showDetails && (
            <div className="space-y-8">
              {/* Outfits */}
              <div>
                <h3 className="text-xl font-bold mb-4">Outfits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedOutfits.map(item => (
                    <div key={item.id} className="bg-indigo-900 rounded-lg overflow-hidden">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold">{item.name}</h4>
                        <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                        <p className="font-bold">₹{item.price}</p>
                        <button className="mt-2 w-full bg-amber-600 hover:bg-amber-500 py-2 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Jewelry */}
              <div>
                <h3 className="text-xl font-bold mb-4">Jewelry</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedJewelry.map(item => (
                    <div key={item.id} className="bg-indigo-900 rounded-lg overflow-hidden">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold">{item.name}</h4>
                        <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                        <p className="font-bold">₹{item.price}</p>
                        <button className="mt-2 w-full bg-amber-600 hover:bg-amber-500 py-2 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footwear */}
              <div>
                <h3 className="text-xl font-bold mb-4">Footwear</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedFootwear.map(item => (
                    <div key={item.id} className="bg-indigo-900 rounded-lg overflow-hidden">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold">{item.name}</h4>
                        <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                        <p className="font-bold">₹{item.price}</p>
                        <button className="mt-2 w-full bg-amber-600 hover:bg-amber-500 py-2 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutfitRecommendationPage;