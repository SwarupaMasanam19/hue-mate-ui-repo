import React, { useState } from 'react';
import BodyTypeSelection from './components/steps/BodyTypeSelection';
import BodyShapeCalculator from './components/ui/BodyShapeCalculator';
import YouTubeVideoPlayer from './components/YouTubeVideoPlayer';

const BodyTypeScreen = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedBodyType, setSelectedBodyType] = useState(null);

  // Make the calculator and video functions available globally for the BodyTypeSelection component
  window.openCalculator = () => setShowCalculator(true);
  window.openVideo = () => setShowVideo(true);

  const handleCalculatorResult = (bodyType) => {
    setSelectedBodyType(bodyType);
    setShowCalculator(false);
  };

  const handleContinue = () => {
    // Handle continue logic with the selected body type
    console.log("Continue with body type:", selectedBodyType);
  };

  return (
    <div className="min-h-screen bg-indigo-950 text-white flex flex-col items-center justify-center p-4">
      <BodyTypeSelection />

      {showCalculator && (
        <BodyShapeCalculator 
          gender="female"
          onClose={() => setShowCalculator(false)}
          onCalculate={handleCalculatorResult}
        />
      )}

      {showVideo && (
        <YouTubeVideoPlayer 
          videoId="420TbEabNzY"
          onClose={() => setShowVideo(false)}
          onOpenCalculator={() => {
            setShowVideo(false);
            setShowCalculator(true);
          }}
        />
      )}
    </div>
  );
};

export default BodyTypeScreen;