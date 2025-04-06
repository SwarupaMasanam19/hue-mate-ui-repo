import React, { useState, useEffect } from 'react';
import YouTubeVideoPlayer from './YouTubeVideoPlayer';
import CalculatorPage from './CalculatorPage';

const ParentComponent = ({ videoId, initialScreen, onClose }) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [calculatorResult, setCalculatorResult] = useState(null);

  useEffect(() => {
    if (initialScreen === 'video') {
      setShowVideo(true);
      setShowCalculator(false);
    } else if (initialScreen === 'calculator') {
      setShowCalculator(true);
      setShowVideo(false);
    } else {
      setShowVideo(false);
      setShowCalculator(false);
    }
  }, [initialScreen]);

  const openCalculatorFromVideo = () => {
    console.log("openCalculatorFromVideo called - before setShowVideo(false)");
    setShowCalculator(true);
    setShowVideo(false);
    console.log("openCalculatorFromVideo called - after setShowVideo(false)");
  };
  const closeCalculator = () => {
    setShowCalculator(false);
    if (onClose) {
      onClose();
    }
  };

  const openVideoFromCalculator = () => {
    setShowVideo(true);
    setShowCalculator(false);
  };

  const closeVideo = () => {
    setShowVideo(false);
    if (onClose) {
      onClose();
    }
  };

  const handleCalculatorResult = (result) => {
    setCalculatorResult(result);
    setShowCalculator(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      {showCalculator && (
        <CalculatorPage
          onClose={closeCalculator}
          onCalculate={handleCalculatorResult}
          onOpenVideo={openVideoFromCalculator}
        />
      )}

      {showVideo && (
        <YouTubeVideoPlayer
          videoId={videoId}
          onClose={closeVideo}
          onOpenCalculator={openCalculatorFromVideo}
        />
      )}

      {!showCalculator && !showVideo && (
        <button onClick={openVideoFromCalculator}>Watch Video</button>
      )}
    </div>
  );
};

export default ParentComponent;