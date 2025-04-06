import React, { useState } from 'react';
import BodyShapeCalculator from './BodyShapeCalculator';
import YouTubeVideoPlayer from './YouTubeVideoPlayer';

const BodyShapeTool = ({ onClose }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-indigo-900 p-8 rounded-xl w-full max-w-2xl">
      {showVideo ? (
        <YouTubeVideoPlayer 
          onClose={onClose}
          onOpenCalculator={() => setShowVideo(false)}
        />
      ) : (
        <BodyShapeCalculator 
          gender="female"
          onCalculate={() => onClose()}
          onClose={onClose}
          onOpenVideo={() => setShowVideo(true)}
        />
      )}
    </div>
  );
};

export default BodyShapeTool;
