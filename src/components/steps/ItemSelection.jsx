import React, { useState, useEffect } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';
import fashionItems from '../../data/fashionItems';

const ItemSelection = ({ itemType }) => {
  const { formData, goToNextStep } = useChatbot();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Setup titles and steps based on item type
  const itemTypeInfo = {
    tops: { title: 'Select a Top', nextStep: 'topSelection', dataKey: 'selectedTop' },
    bottoms: { title: 'Select a Bottom', nextStep: 'bottomSelection', dataKey: 'selectedBottom' },
    jewelry: { title: 'Select Jewelry', nextStep: 'jewelrySelection', dataKey: 'selectedJewelry' },
    footwear: { title: 'Select Footwear', nextStep: 'footwearSelection', dataKey: 'selectedFootwear' }
  };

  const { title, nextStep, dataKey } = itemTypeInfo[itemType];

  // Filter items based on user preferences
  useEffect(() => {
    const { skinTone, bodyType, occasion, style, season, colorPreference } = formData;
    
    let filteredItems = fashionItems[itemType] || [];
    
    // Apply filters if values exist
    if (colorPreference) {
      filteredItems = filteredItems.filter(item => item.color === colorPreference);
    }
    
    if (bodyType && (itemType === 'tops' || itemType === 'bottoms')) {
      filteredItems = filteredItems.filter(item => 
        item.bodyType.includes(bodyType) || item.bodyType.includes('all')
      );
    }
    
    if (occasion) {
      filteredItems = filteredItems.filter(item => 
        item.occasions.includes(occasion) || item.occasions.includes('all')
      );
    }
    
    if (style) {
      filteredItems = filteredItems.filter(item => 
        item.style === style || item.style === 'all'
      );
    }
    
    if (season) {
      filteredItems = filteredItems.filter(item => 
        item.season === season || item.season === 'all'
      );
    }
    
    // If no items match all filters, show all items of this type
    if (filteredItems.length === 0) {
      filteredItems = fashionItems[itemType] || [];
    }
    
    // Limit to 3-4 items
    setItems(filteredItems.slice(0, 4));
  }, [itemType, formData]);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleContinue = () => {
    if (selectedItem) {
      goToNextStep(nextStep, { [dataKey]: selectedItem });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6 text-center">
        {title}
      </h2>
      
      <p className="text-lg mb-8 text-center">
        Choose an item that matches your style preference.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
        {items.map((item) => (
          <div 
            key={item.id}
            className={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedItem?.id === item.id ? 'ring-2 ring-amber-400' : ''}`}
            onClick={() => handleSelect(item)}
          >
            <div className="relative aspect-[3/4] bg-gray-800">
              <img 
                src={item.image || '/api/placeholder/300/400'} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 rounded text-sm">
                ₹{item.price}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-medium mb-1">{item.name}</h3>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: item.color === 'warm' 
                      ? '#F97316' 
                      : item.color === 'cool' 
                        ? '#0EA5E9' 
                        : '#94A3B8' 
                    }}
                  ></div>
                  <span className="text-sm capitalize">{item.color}</span>
                </div>
                
                <div className="text-xs px-2 py-1 bg-white/10 rounded-full">
                  {item.style}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <Button
          secondary
          onClick={() => {
            // Go back to previous step based on item type
            const previousStepMap = {
              tops: 'budget',
              bottoms: 'topSelection',
              jewelry: 'bottomSelection',
              footwear: 'jewelrySelection'
            };
            goToNextStep(previousStepMap[itemType] || 'budget');
          }}
        >
          Back
        </Button>
        
        <Button
          primary
          onClick={handleContinue}
          disabled={!selectedItem}
        >
          Continue
        </Button>
      </div>
      
      {selectedItem && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            Selected: <span className="font-medium text-white">{selectedItem.name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemSelection;