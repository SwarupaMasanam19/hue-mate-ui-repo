import React, { useState } from 'react';
import { X, Calculator, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import BodyShapeCalculator from './BodyShapeCalculator'; // Import BodyShapeCalculator

const YouTubeVideoPlayer = ({ videoId, onClose }) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showCalculatorReminder, setShowCalculatorReminder] = useState(true); // show by default.
  const [calculatorResult, setCalculatorResult] = useState(null);
  const [gender, setGender] = useState('female'); // default gender

  const handleCalculatorOpen = () => {
    setShowCalculator(true);
    setShowCalculatorReminder(false);
  };

  const handleCloseCalculator = () => {
    setShowCalculator(false);
  };

  const handleCalculatorResult = (result) => {
    setCalculatorResult(result);
    setShowCalculator(false);
  };

  if (!videoId) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
        <div className="text-white">Invalid YouTube video ID</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          aria-label="Close video"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex w-full max-w-5xl justify-center">
        <div className="flex justify-center" style={{ width: '48%', margin: '0 auto' }}>
          <div className="bg-black/50 rounded-xl overflow-hidden shadow-2xl" style={{ height: '500px', aspectRatio: '9 / 16' }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="bg-amber-500/20 border border-amber-500/40 p-4 rounded-xl text-center flex flex-col justify-center">
          <h3 className="font-medium text-xl mb-2">Learn About Your Body Type</h3>
          <p className="text-white/80 mb-4">
            After watching this video, you'll get a better understanding of your body type.
            If you're still unsure, use our smart body shape finder calculator.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button primary onClick={handleCalculatorOpen}>
              <Calculator size={20} /> Open Body Shape Calculator
            </Button>
            <Button secondary onClick={onClose}>
              Close Video
            </Button>
          </div>
        </div>
      </div>

      {showCalculator && (
        <BodyShapeCalculator
          gender={gender}
          onCalculate={handleCalculatorResult}
          onClose={handleCloseCalculator}
        />
      )}

      {showCalculatorReminder && (
        <div className="calculator-reminder">
          <AlertCircle size={16} />
          <p>
            Still having issues determining your body type?
            Try our calculator to get more accurate results!
          </p>
        </div>
      )}

      {calculatorResult && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
          <div className="bg-amber-500/20 border border-amber-500/40 p-4 rounded-xl text-center">
            <h3 className="font-medium text-xl mb-2">Your Body Shape</h3>
            <p className="text-white/80 mb-4">
              Your body shape is: {calculatorResult}
            </p>
            <Button secondary onClick={() => setCalculatorResult(null)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideoPlayer;