import React, { useState } from 'react';

const OutfitResultsGrid = ({ outfitItems = [], skinTone, bodyType, occasion, budget }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // If we don't have items, show a placeholder message
  if (!outfitItems || outfitItems.length === 0) {
    return (
      <div className="bg-indigo-900/50 rounded-lg p-8 text-center">
        <p className="text-gray-300">No outfit recommendations available for your criteria.</p>
      </div>
    );
  }
  
  // Get the currently selected outfit
  const selectedOutfit = outfitItems[selectedIndex];
  
  return (
    <div className="w-full">
      {/* Featured outfit */}
      <div className="bg-indigo-900/50 rounded-lg overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 p-4">
            <div className="aspect-[3/4] bg-gray-800 rounded-md overflow-hidden">
              <img 
                src={selectedOutfit.image || "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620203/Screenshot_2024-12-31_101310_em86l5.png"} 
                alt={selectedOutfit.name || "Fashion outfit"} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://i.imgur.com/1qYM16Y.jpg";
                }}
              />
            </div>
          </div>
          
          <div className="sm:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-amber-400 mb-2">{selectedOutfit.name || "Complete Outfit"}</h3>
            <p className="text-gray-300 mb-2">{selectedOutfit.description || "A beautiful outfit perfect for your style preferences."}</p>
            
            <div className="mb-4">
              <div className="flex items-center mb-1">
                <span className="text-gray-400 w-24">Price:</span>
                <span className="font-bold text-white">₹{selectedOutfit.price || 5999}</span>
              </div>
              <div className="flex items-center mb-1">
                <span className="text-gray-400 w-24">Style:</span>
                <span className="text-white">{selectedOutfit.style || "Casual"}</span>
              </div>
              <div className="flex items-center mb-1">
                <span className="text-gray-400 w-24">Color:</span>
                <span className="text-white">{selectedOutfit.color || "Multi"}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-24">Occasion:</span>
                <span className="text-white">{selectedOutfit.occasions?.[0] || occasion || "Casual"}</span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-2">
              {selectedOutfit.shopLinks?.amazon && (
                <a 
                  href={selectedOutfit.shopLinks.amazon} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded text-white text-sm font-medium"
                >
                  Amazon
                </a>
              )}
              {selectedOutfit.shopLinks?.flipkart && (
                <a 
                  href={selectedOutfit.shopLinks.flipkart} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded text-white text-sm font-medium"
                >
                  Flipkart
                </a>
              )}
              {selectedOutfit.shopLinks?.meesho && (
                <a 
                  href={selectedOutfit.shopLinks.meesho} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded text-white text-sm font-medium"
                >
                  Meesho
                </a>
              )}
              {(!selectedOutfit.shopLinks || Object.keys(selectedOutfit.shopLinks).length === 0) && (
                <a 
                  href="https://flipkart.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded text-white text-sm font-medium"
                >
                  Shop Now
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Outfit thumbnails for selection */}
      <h3 className="text-lg font-medium mb-3">More Recommendations</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {outfitItems.map((outfit, index) => (
          <div 
            key={outfit.id || index}
            className={`aspect-[3/4] bg-gray-800 rounded-md overflow-hidden cursor-pointer 
                      transition-all duration-300 transform hover:scale-105
                      ${selectedIndex === index ? 'ring-2 ring-amber-400' : ''}`}
            onClick={() => setSelectedIndex(index)}
          >
            <img 
              src={outfit.image || "https://res.cloudinary.com/dnwl4zmjv/image/upload/v1735620203/Screenshot_2024-12-31_101310_em86l5.png"} 
              alt={outfit.name || `Fashion outfit ${index+1}`} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://i.imgur.com/1qYM16Y.jpg";
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Virtual Try-On button */}
      <div className="mt-6 text-center">
        <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 
                          text-white px-6 py-3 rounded-full font-medium transition-all transform hover:-translate-y-1 
                          shadow-lg flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Virtual Try-On
        </button>
      </div>
    </div>
  );
};

export default OutfitResultsGrid;