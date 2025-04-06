import React from 'react';
import BodyShapeCalculator from './BodyShapeCalculator';
import { X } from 'lucide-react';

const CalculatorPage = ({ onClose, onCalculate }) => {
  // Function to open the YouTube video tutorial
  const handleOpenVideo = () => {
    // Close the calculator first
    if (onClose) onClose();
    
    // Dispatch global event to open the video
    document.dispatchEvent(new CustomEvent('openVideo', {
      detail: { videoId: '420TbEabNzY' }
    }));
  };
  
  return (
    <div className="calculator-modal">
      <div className="calculator-content">
        <button onClick={onClose} className="close-calculator">
          <X size={24} />
        </button>
        <BodyShapeCalculator 
          onClose={onClose} 
          onCalculate={onCalculate}
          videoPageUrl="#" 
          onOpenVideo={handleOpenVideo}
        />
      </div>
    </div>
  );
};

export default CalculatorPage;