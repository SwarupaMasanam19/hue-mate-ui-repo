import React from 'react';
import Button from './ui/Button';

const YouTubeVideoPlayer = ({ videoId, onClose, onOpenCalculator }) => {
  return (
    <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="absolute top-4 right-4">
        <button 
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          aria-label="Close video"
        >
          ✕
        </button>
      </div>
      
      <div className="w-full max-w-3xl aspect-video bg-black/50 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      
      <div className="mt-6 bg-amber-500/20 border border-amber-500/40 p-4 rounded-lg max-w-xl text-center">
        <h3 className="font-medium text-xl mb-2">How to Measure Your Body</h3>
        <p className="text-white/80 mb-4">
          After watching this video, you'll know exactly how to take the correct measurements for your body type.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            primary
            onClick={onOpenCalculator}
          >
            Open Body Shape Calculator
          </Button>
          <Button
            secondary
            onClick={onClose}
          >
            Close Video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideoPlayer;