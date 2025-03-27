import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const FinalOutfit = () => {
  const { formData, userImage, resetChatbot } = useChatbot();
  const { selectedTop, selectedBottom, selectedJewelry, selectedFootwear, budget } = formData;
  const [showOverlay, setShowOverlay] = useState(false);
  const [loading, setLoading] = useState(false);

  // Calculate total price
  const totalPrice = [selectedTop, selectedBottom, selectedJewelry, selectedFootwear]
    .filter(Boolean)
    .reduce((sum, item) => sum + item.price, 0);

  const handleTryOn = () => {
    setLoading(true);
    // Simulate loading for the overlay generation
    setTimeout(() => {
      setShowOverlay(true);
      setLoading(false);
    }, 3000);
  };

  const handleStartOver = () => {
    resetChatbot();
  };

  const renderShopLinks = (item) => {
    if (!item || !item.link) return null;
    
    return (
      <div className="flex space-x-2 mt-2">
        {Object.keys(item.link).map(store => (
          <a 
            key={store}
            href={item.link[store]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs px-2 py-1 bg-white/10 rounded-full capitalize hover:bg-white/20 transition-colors"
          >
            {store}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Your Perfect Outfit
      </h2>
      
      {showOverlay ? (
        <div className="w-full max-w-md mb-8">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-4 border-amber-400">
            {userImage && (
              <div className="relative w-full h-full">
                <img src={userImage} alt="You" className="w-full h-full object-cover" />
                
                {/* This would be replaced with actual outfit overlay in the real implementation */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white text-lg font-medium px-6 py-3 bg-black/50 rounded-lg">
                    Outfit Overlay Visualization
                    <br />
                    <span className="text-sm">(Would be implemented with actual AI tech)</span>
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <Button 
            primary
            onClick={() => setShowOverlay(false)}
            className="mt-6"
          >
            Back to Outfit Details
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
            {selectedTop && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="aspect-[3/4] bg-gray-800">
                  <img 
                    src={selectedTop.image || '/api/placeholder/300/400'} 
                    alt={selectedTop.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">Top: {selectedTop.name}</h3>
                  <p className="font-medium text-amber-400">₹{selectedTop.price}</p>
                  {renderShopLinks(selectedTop)}
                </div>
              </div>
            )}
            
            {selectedBottom && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="aspect-[3/4] bg-gray-800">
                  <img 
                    src={selectedBottom.image || '/api/placeholder/300/400'} 
                    alt={selectedBottom.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">Bottom: {selectedBottom.name}</h3>
                  <p className="font-medium text-amber-400">₹{selectedBottom.price}</p>
                  {renderShopLinks(selectedBottom)}
                </div>
              </div>
            )}
            
            {selectedJewelry && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="aspect-square bg-gray-800">
                  <img 
                    src={selectedJewelry.image || '/api/placeholder/200/200'} 
                    alt={selectedJewelry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">Jewelry: {selectedJewelry.name}</h3>
                  <p className="font-medium text-amber-400">₹{selectedJewelry.price}</p>
                  {renderShopLinks(selectedJewelry)}
                </div>
              </div>
            )}
            
            {selectedFootwear && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="aspect-square bg-gray-800">
                  <img 
                    src={selectedFootwear.image || '/api/placeholder/200/200'} 
                    alt={selectedFootwear.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">Footwear: {selectedFootwear.name}</h3>
                  <p className="font-medium text-amber-400">₹{selectedFootwear.price}</p>
                  {renderShopLinks(selectedFootwear)}
                </div>
              </div>
            )}
          </div>
          
          <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Outfit Summary</h3>
            
            <div className="flex justify-between mb-2">
              <span>Your Budget:</span>
              <span className="font-medium">₹{budget || 'Not specified'}</span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span>Total Cost:</span>
              <span className="font-medium">₹{totalPrice}</span>
            </div>
            
            {budget && (
              <div className="flex justify-between mb-4">
                <span>Remaining:</span>
                <span className={`font-medium ${parseInt(budget) >= totalPrice ? 'text-green-500' : 'text-red-500'}`}>
                  ₹{parseInt(budget) - totalPrice}
                </span>
              </div>
            )}
            
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                Note: All prices are approximate. Check retailer websites for current pricing.
              </p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Button 
              primary
              onClick={handleTryOn}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Try On Your Outfit"}
            </Button>
            
            <Button 
              secondary
              onClick={handleStartOver}
            >
              Start Over
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default FinalOutfit;