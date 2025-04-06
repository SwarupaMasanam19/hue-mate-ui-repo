import React, { useState } from 'react';
import { X, Triangle, Circle, Square, Hourglass, Youtube, Calculator } from 'lucide-react';
import Button from '../ui/Button';

const BodyShapeCalculator = ({ gender = 'female', onCalculate, onClose, onOpenVideo }) => {
  const [measurements, setMeasurements] = useState({
    shoulders: '',
    bust: '',
    chest: '',
    waist: '',
    hips: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any errors when user starts typing
    setError(null);
  };

  const calculateBodyType = () => {
    setLoading(true);
    setError(null);

    // Validate inputs first
    let hasError = false;
    if (gender === 'female') {
      const { bust, waist, hips } = measurements;
      if (!bust || !waist || !hips) {
        setError('Please enter all measurements');
        hasError = true;
      }
    } else {
      const { shoulders, chest, waist } = measurements;
      if (!shoulders || !chest || !waist) {
        setError('Please enter all measurements');
        hasError = true;
      }
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    // Simulate calculation delay
    setTimeout(() => {
      let calculatedResult = '';
      
      if (gender === 'female') {
        const { bust, waist, hips } = measurements;
        const bustVal = parseFloat(bust);
        const waistVal = parseFloat(waist);
        const hipsVal = parseFloat(hips);
        
        const bustHipDiff = Math.abs(bustVal - hipsVal);
        const waistBustRatio = waistVal / bustVal;
        const waistHipRatio = waistVal / hipsVal;
        
        if (bustHipDiff <= 5 && waistBustRatio < 0.75) {
          calculatedResult = 'hourglass';
        } else if (hipsVal > bustVal + 5) {
          calculatedResult = 'pear';
        } else if (bustVal > hipsVal + 5) {
          calculatedResult = 'inverted-triangle';
        } else if (waistBustRatio >= 0.8 && waistHipRatio >= 0.8) {
          calculatedResult = 'rectangle';
        } else if (waistVal > bustVal && waistVal > hipsVal) {
          calculatedResult = 'apple';
        } else {
          calculatedResult = 'hourglass'; // Default
        }
      } else {
        const { shoulders, chest, waist } = measurements;
        const shouldersVal = parseFloat(shoulders);
        const chestVal = parseFloat(chest);
        const waistVal = parseFloat(waist);
        
        const shoulderWaistRatio = shouldersVal / waistVal;
        
        if (shoulderWaistRatio > 1.2) {
          calculatedResult = 'inverted-triangle';
        } else if (shoulderWaistRatio < 0.9) {
          calculatedResult = 'triangle';
        } else if (shoulderWaistRatio >= 0.9 && shoulderWaistRatio <= 1.1) {
          calculatedResult = 'rectangle';
        } else if (waistVal > shouldersVal && waistVal > chestVal) {
          calculatedResult = 'oval';
        } else {
          calculatedResult = 'trapezoid'; // Default
        }
      }
      
      setResult(calculatedResult);
      setLoading(false);
      
      // Delay the callback slightly to show the result to the user
      setTimeout(() => {
        onCalculate(calculatedResult);
      }, 1500);
    }, 2000);
  };

  const getIcon = (bodyType) => {
    switch (bodyType) {
      case 'hourglass': return <Hourglass size={50} color="#f59e0b" />;
      case 'pear': return <Triangle size={50} color="#f59e0b" />;
      case 'inverted-triangle': return <Triangle size={50} color="#f59e0b" style={{transform: 'rotate(180deg)'}} />;
      case 'rectangle': return <Square size={50} color="#f59e0b" />;
      case 'apple': return <Circle size={50} color="#f59e0b" />;
      case 'oval': return <Circle size={50} color="#f59e0b" />;
      case 'trapezoid': return <Triangle size={50} color="#f59e0b" style={{transform: 'rotate(180deg)'}} />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-xl p-6 max-w-md w-full relative border border-indigo-700/50 shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator size={24} color="#f59e0b" />
          </div>
          <h2 className="text-xl font-bold text-amber-400">Body Shape Calculator</h2>
          <p className="text-white/70 text-sm mt-1">Enter your measurements to determine your body shape</p>
        </div>
        
        <div className="space-y-4 mb-6">
          {gender === 'female' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Bust (inches)</label>
                <input
                  type="number"
                  name="bust"
                  value={measurements.bust}
                  onChange={handleChange}
                  placeholder="Measure at the fullest part"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Waist (inches)</label>
                <input
                  type="number"
                  name="waist"
                  value={measurements.waist}
                  onChange={handleChange}
                  placeholder="Measure at the narrowest part"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Hips (inches)</label>
                <input
                  type="number"
                  name="hips"
                  value={measurements.hips}
                  onChange={handleChange}
                  placeholder="Measure at the widest part"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Shoulders (inches)</label>
                <input
                  type="number"
                  name="shoulders"
                  value={measurements.shoulders}
                  onChange={handleChange}
                  placeholder="Measure across shoulders"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Chest (inches)</label>
                <input
                  type="number"
                  name="chest"
                  value={measurements.chest}
                  onChange={handleChange}
                  placeholder="Measure at the fullest part"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Waist (inches)</label>
                <input
                  type="number"
                  name="waist"
                  value={measurements.waist}
                  onChange={handleChange}
                  placeholder="Measure at the narrowest part"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent"
                />
              </div>
            </>
          )}
        </div>
        
        {error && (
          <div className="bg-red-900/30 border border-red-500/30 text-red-200 rounded-lg px-4 py-2.5 mb-6 text-sm flex items-center">
            <X size={16} className="mr-2 flex-shrink-0" />
            {error}
          </div>
        )}
        
        {result && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6 flex items-center">
            <div className="mr-4">
              {getIcon(result)}
            </div>
            <div>
              <h3 className="text-amber-400 font-medium mb-1">Your Body Shape:</h3>
              <p className="text-lg font-bold capitalize">
                {result.replace('-', ' ')}
              </p>
            </div>
          </div>
        )}
        
        <Button
          primary
          onClick={calculateBodyType}
          disabled={loading}
          className="w-full mb-4"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Calculating...
            </div>
          ) : (
            'Calculate My Body Shape'
          )}
        </Button>
        
        {onOpenVideo && (
          <div className="text-center">
            <button
              onClick={onOpenVideo}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium"
            >
              <Youtube size={16} />
              Not sure how to measure? Watch our guide
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyShapeCalculator;