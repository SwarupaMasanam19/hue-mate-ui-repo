import React, { useState } from 'react';
import BodyShapeCalculator from './BodyShapeCalculator';
import YouTubeVideoPlayer from './YouTubeVideoPlayer';

const App = () => {
  const [showVideo, setShowVideo] = useState(false); // toggle screen

  return (
    <div>
      {showVideo ? (
        <YouTubeVideoPlayer
          videoId="420TbEabNzY"
          onClose={() => setShowVideo(false)}
        />
      ) : (
        <BodyShapeCalculator
          gender="female"
          onCalculate={(result) => console.log("Calculated Body Shape:", result)}
          onClose={() => console.log("Calculator closed")}
          onOpenVideo={() => setShowVideo(true)} // this gets called when Watch Video is clicked
        />
      )}
    </div>
  );
};

export default App;
