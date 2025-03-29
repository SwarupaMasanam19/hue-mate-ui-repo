// src/components/steps/GenderSelection.jsx
import React, { useState } from 'react';

const GenderSelection = ({ onSelect, onContinue }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  
  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold text-amber-500 mb-4">Select Your Gender</h2>
      <p className="text-lg text-white mb-10">This helps us provide more accurate styling recommendations.</p>
      
      <div className="flex gap-6 mb-12">
        <div 
          className={`p-6 rounded-xl cursor-pointer transition-all w-48 h-64 flex flex-col items-center justify-center ${
            selectedGender === 'female' ? 'bg-amber-500/30 border-2 border-amber-500' : 'bg-white/5 border border-white/10'
          }`}
          onClick={() => handleSelect('female')}
        >
          <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-white/20">
            <img 
              src="/girl-avatar.png" 
              alt="Female" 
              className="w-full h-full object-cover"
              onError={(e) => e.target.src = "https://via.placeholder.com/150?text=Girl"}
            />
          </div>
          <p className="text-xl text-white">Girl</p>
        </div>
        
        <div 
          className={`p-6 rounded-xl cursor-pointer transition-all w-48 h-64 flex flex-col items-center justify-center ${
            selectedGender === 'male' ? 'bg-amber-500/30 border-2 border-amber-500' : 'bg-white/5 border border-white/10'
          }`}
          onClick={() => handleSelect('male')}
        >
          <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-white/20">
            <img 
              src="/boy-avatar.png" 
              alt="Male" 
              className="w-full h-full object-cover"
              onError={(e) => e.target.src = "https://via.placeholder.com/150?text=Boy"}
            />
          </div>
          <p className="text-xl text-white">Boy</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button 
          className={`px-12 py-3 rounded-full font-medium ${
            selectedGender 
              ? 'bg-amber-500 text-white' 
              : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
          }`}
          onClick={() => selectedGender && onContinue(selectedGender)}
          disabled={!selectedGender}
        >
          Continue
        </button>
        
        <button 
          className="px-12 py-3 rounded-full font-medium bg-white/10 text-white"
          onClick={() => onSelect(null)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default GenderSelection;