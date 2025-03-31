import React, { useState } from 'react';
import { Box, Triangle, Circle, Square, Calculator, Youtube, ChevronRight } from 'lucide-react';

const BodyTypeSelection = ({ gender, onSelect, onCalculatorOpen, onVideoOpen, onContinue }) => {
  const [selectedType, setSelectedType] = useState(null);
  
  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };
  
  // Get body type options based on gender
  const getBodyTypeOptions = () => {
    if (gender === 'female') {
      return [
        { id: 'hourglass-women', name: 'Hourglass', icon: <Box size={40} />, description: 'Balanced bust and hips with defined waist' },
        { id: 'pear-women', name: 'Pear', icon: <Triangle size={40} />, description: 'Hips wider than shoulders' },
        { id: 'rectangle-women', name: 'Rectangle', icon: <Square size={40} />, description: 'Straight silhouette with little waist definition' },
        { id: 'apple-women', name: 'Apple', icon: <Circle size={40} />, description: 'Fuller midsection with slender legs' },
        { id: 'inverted-triangle-women', name: 'Inverted Triangle', icon: <Triangle size={40} style={{transform: 'rotate(180deg)'}} />, description: 'Shoulders wider than hips' }
      ];
    } else {
      return [
        { id: 'trapezoid-men', name: 'Trapezoid', icon: <Triangle size={40} />, description: 'Shoulders slightly wider than waist' },
        { id: 'inverted-triangle-men', name: 'Athletic', icon: <Triangle size={40} style={{transform: 'rotate(180deg)'}} />, description: 'Broad shoulders and chest, narrow waist' },
        { id: 'rectangle-men', name: 'Rectangle', icon: <Square size={40} />, description: 'Straight up and down with little tapering' },
        { id: 'oval-men', name: 'Oval', icon: <Circle size={40} />, description: 'Fuller midsection with narrower shoulders' },
        { id: 'triangle-men', name: 'Triangle', icon: <Triangle size={40} style={{transform: 'rotate(0deg)'}} />, description: 'Narrower shoulders than waist and hips' }
      ];
    }
  };
  
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-4">
        Select Your Body Type
      </h2>
      <p className="text-lg text-white/80 mb-8 max-w-2xl">
        Identifying your body type helps us recommend clothes that flatter your natural shape.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full mb-10">
        {getBodyTypeOptions().map((type) => (
          <div 
            key={type.id}
            className={`flex flex-col items-center p-6 rounded-xl transition-all cursor-pointer hover:-translate-y-1 ${
              selectedType === type.id 
                ? 'bg-amber-500/20 border-2 border-amber-500 shadow-lg shadow-amber-500/10' 
                : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
            }`}
            onClick={() => handleTypeSelect(type.id)}
          >
            <div className={`mb-4 transition-colors ${selectedType === type.id ? 'text-amber-500' : 'text-white'}`}>
              {type.icon}
            </div>
            <p className={`font-medium text-lg mb-2 ${selectedType === type.id ? 'text-amber-500' : 'text-white'}`}>
              {type.name}
            </p>
            <p className="text-xs text-white/60">
              {type.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-10">
        <div 
          className="bg-white/5 hover:bg-white/10 p-6 rounded-xl flex flex-col items-center cursor-pointer transition-all hover:-translate-y-1"
          onClick={onCalculatorOpen}
        >
          <Calculator size={36} className="text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-2">Not Sure?</h3>
          <p className="text-white/70 mb-2">Let our calculator determine your body type based on measurements</p>
          <span className="text-amber-400 font-medium text-sm">Use Calculator</span>
        </div>
        
        <div 
          className="bg-white/5 hover:bg-white/10 p-6 rounded-xl flex flex-col items-center cursor-pointer transition-all hover:-translate-y-1"
          onClick={onVideoOpen}
        >
          <Youtube size={36} className="text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-2">How to Measure</h3>
          <p className="text-white/70 mb-2">Watch our quick video guide on taking the right measurements</p>
          <span className="text-amber-400 font-medium text-sm">Watch Video</span>
        </div>
      </div>
      
      <button 
        className={`px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all ${
          selectedType 
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:-translate-y-1 shadow-lg shadow-amber-500/20' 
            : 'bg-white/10 text-white/50 cursor-not-allowed'
        }`}
        onClick={() => selectedType && onContinue(selectedType)}
        disabled={!selectedType}
      >
        Continue to Next Step
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default BodyTypeSelection;