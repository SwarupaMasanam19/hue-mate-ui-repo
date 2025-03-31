import React, { useState, useEffect } from 'react';
import { X, Video, AlertCircle, ExternalLink, Calendar, Calculator } from 'lucide-react';

const YouTubeVideoPlayer = ({ videoId, onClose, onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  
  // Handle video load errors
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setError('Video is taking longer than expected to load. Please check your internet connection.');
      }
    }, 10000); // 10 seconds timeout
    
    return () => clearTimeout(timer);
  }, [isLoading]);
  
  // Auto-hide message after a few seconds
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showMessage]);
  
  const handleMessageComplete = () => {
    setShowMessage(false);
  };
  
  return (
    <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="absolute top-4 right-4">
        <button 
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          aria-label="Close video"
        >
          <X size={24} />
        </button>
      </div>
      
      {showMessage && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-amber-500/20 border border-amber-500/40 rounded-lg px-4 py-2 flex items-center gap-2 animate-fade-in">
          <Calendar size={16} />
          <p className="text-sm">After watching, use our calculator to find your body type</p>
          <button 
            onClick={handleMessageComplete}
            className="ml-2 bg-white/10 hover:bg-white/20 rounded-full p-1"
          >
            <X size={14} />
          </button>
        </div>
      )}
      
      <div className="w-full max-w-3xl aspect-video bg-black/50 rounded-xl overflow-hidden shadow-2xl relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-center p-6">
            <AlertCircle size={40} className="text-amber-500 mb-4" />
            <p className="text-white mb-4">{error}</p>
            <div className="flex gap-4">
              <button 
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <X size={16} /> Close
              </button>
              <a 
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <ExternalLink size={16} /> Watch on YouTube
              </a>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        )}
      </div>
      
      <div className="mt-6 bg-amber-500/20 border border-amber-500/40 p-4 rounded-lg max-w-xl text-center animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Video size={18} />
          <h3 className="font-medium">How to Measure Your Body</h3>
        </div>
        <p className="text-white/80 mb-4">
          After watching this video, you'll know exactly how to take the correct measurements for your body type.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={onComplete} 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Calculator size={16} /> Open Body Shape Calculator
          </button>
          <button 
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <X size={16} /> Close Video
          </button>
        </div>
      </div>
    </div>
  );
};

// Add event listener for YouTube API messages
// This helps detect when the video ends and can trigger onComplete
if (typeof window !== 'undefined') {
  window.addEventListener('message', (event) => {
    // Check if the message is from YouTube
    if (event.origin.startsWith('https://www.youtube.com') && 
        typeof event.data === 'string') {
      try {
        const data = JSON.parse(event.data);
        // Check if this is a video ended event
        if (data.event === 'onStateChange' && data.info === 0) {
          // Video has ended - find any active YouTubeVideoPlayer components and trigger their onComplete
          const playerContainers = document.querySelectorAll('.youtube-video-player-container');
          playerContainers.forEach(container => {
            if (container.dataset.onComplete) {
              // Call the onComplete function if it exists
              window[container.dataset.onComplete]();
            }
          });
        }
      } catch (e) {
        // Not JSON or not the format we expect
      }
    }
  });
}

export default YouTubeVideoPlayer;