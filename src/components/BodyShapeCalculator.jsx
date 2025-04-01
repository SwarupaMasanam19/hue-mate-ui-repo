import React, { useState } from 'react';

const BodyShapeCalculator = ({ gender = 'female', onClose, onCalculate }) => {
  const [measurements, setMeasurements] = useState({
    shoulders: '',
    bust: '',
    chest: '',
    waist: '',
    hips: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleOpenVideo = () => {
    // Open the YouTube video in a new tab
    window.open('https://www.youtube.com/watch?v=wV9a_ERkXlE', '_blank');
  };
  
  const calculateBodyType = () => {
    setLoading(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      let result = '';
      
      if (gender === 'female') {
        const { bust, waist, hips } = measurements;
        const bustVal = parseFloat(bust);
        const waistVal = parseFloat(waist);
        const hipsVal = parseFloat(hips);
        
        if (isNaN(bustVal) || isNaN(waistVal) || isNaN(hipsVal)) {
          alert('Please enter all measurements');
          setLoading(false);
          return;
        }
        
        const bustHipDiff = Math.abs(bustVal - hipsVal);
        const waistBustRatio = waistVal / bustVal;
        const waistHipRatio = waistVal / hipsVal;
        
        if (bustHipDiff <= 5 && waistBustRatio < 0.75) {
          result = 'hourglass';
        } else if (hipsVal > bustVal + 5) {
          result = 'pear';
        } else if (bustVal > hipsVal + 5) {
          result = 'inverted-triangle';
        } else if (waistBustRatio >= 0.8 && waistHipRatio >= 0.8) {
          result = 'rectangle';
        } else if (waistVal > bustVal && waistVal > hipsVal) {
          result = 'apple';
        } else {
          result = 'hourglass'; // Default
        }
      } else {
        // For men
        const { shoulders, chest, waist } = measurements;
        const shouldersVal = parseFloat(shoulders);
        const chestVal = parseFloat(chest);
        const waistVal = parseFloat(waist);
        
        if (isNaN(shouldersVal) || isNaN(chestVal) || isNaN(waistVal)) {
          alert('Please enter all measurements');
          setLoading(false);
          return;
        }
        
        const shoulderWaistRatio = shouldersVal / waistVal;
        
        if (shoulderWaistRatio > 1.2) {
          result = 'inverted-triangle';
        } else if (shoulderWaistRatio < 0.9) {
          result = 'triangle';
        } else if (shoulderWaistRatio >= 0.9 && shoulderWaistRatio <= 1.1) {
          result = 'rectangle';
        } else if (waistVal > shouldersVal && waistVal > chestVal) {
          result = 'oval';
        } else {
          result = 'trapezoid'; // Default
        }
      }
      
      setLoading(false);
      setResult(result);
    }, 2000);
  };
  
  const handleApplyResult = () => {
    if (result && onCalculate) {
      onCalculate(result);
    }
  };
  
  // Button styles without requiring Button component
  const primaryButtonStyles = "w-full py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium transition-colors shadow-lg";
  const secondaryButtonStyles = "w-full py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors";
  const disabledButtonStyles = "opacity-50 cursor-not-allowed";
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      {result ? (
        <div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 rounded-2xl p-8 max-w-md w-full animate-fade-in border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <h2 className="text-xl font-bold">Body Shape Calculated</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">
              {result === 'hourglass' && '⌛'}
              {result === 'pear' && '🍐'}
              {result === 'rectangle' && '▭'}
              {result === 'apple' && '🍎'}
              {result === 'inverted-triangle' && '🔻'}
              {result === 'triangle' && '▲'}
              {result === 'oval' && '⭕'}
              {result === 'trapezoid' && '⏢'}
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">
              {result.charAt(0).toUpperCase() + result.slice(1)}
            </h3>
            <p className="text-white/80">
              {result === 'hourglass' && 'Your bust and hips are about the same width, with a well-defined waist.'}
              {result === 'pear' && 'Your hips are wider than your shoulders, creating a feminine silhouette.'}
              {result === 'rectangle' && 'Your shoulders, waist, and hips are about the same width with little waist definition.'}
              {result === 'apple' && 'You carry weight around your midsection, with slimmer legs.'}
              {result === 'inverted-triangle' && 'Your shoulders are broader than your hips.'}
              {result === 'triangle' && 'Your lower body is wider than your upper body.'}
              {result === 'oval' && 'You carry weight in your midsection.'}
              {result === 'trapezoid' && 'Your shoulders are slightly wider than your waist, with a gradual taper.'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-8">
            {Object.entries(measurements).map(([key, value]) => {
              if (!value) return null;
              return (
                <div key={key} className="bg-white/5 p-3 rounded-lg">
                  <div className="text-white/60 text-xs uppercase mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                  <div className="font-bold">{value} inches</div>
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => setResult(null)}
              className={secondaryButtonStyles}
            >
              Recalculate
            </button>
            
            <button
              onClick={handleApplyResult}
              className={primaryButtonStyles}
            >
              Apply Result
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 rounded-2xl p-6 max-w-md w-full shadow-xl border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-amber-400">🧮</span>
              <h2 className="text-xl font-bold">Body Shape Calculator</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>
          
          <p className="text-white/70 mb-6">Enter your measurements in inches to determine your body shape</p>
          
          <div className="space-y-4 mb-6">
            {gender === 'female' ? (
              <>
                <div className="space-y-2">
                  <label className="block text-white/80 font-medium">Bust (inches)</label>
                  <input 
                    type="number"
                    name="bust"
                    value={measurements.bust}
                    onChange={handleChange}
                    placeholder="Measure around the fullest part"
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/80 font-medium">Waist (inches)</label>
                  <input 
                    type="number"
                    name="waist"
                    value={measurements.waist}
                    onChange={handleChange}
                    placeholder="Measure around the narrowest part"
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/80 font-medium">Hips (inches)</label>
                  <input 
                    type="number"
                    name="hips"
                    value={measurements.hips}
                    onChange={handleChange}
                    placeholder="Measure around the widest part"
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="block text-white/80 font-medium">Shoulders (inches)</label>
                  <input 
                    type="number"
                    name="shoulders"
                    value={measurements.shoulders}
                    onChange={handleChange}
                    placeholder="Measure across shoulders"
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/80 font-medium">Chest (inches)</label>
                  <input 
                    type="number"
                    name="chest"
                    value={measurements.chest}
                    onChange={handleChange}
                    placeholder="Measure around the fullest part"
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/80 font-medium">Waist (inches)</label>
                  <input 
                    type="number"
                    name="waist"
                    value={measurements.waist}
                    onChange={handleChange}
                    placeholder="Measure around the navel"
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </>
            )}
          </div>
          
          <button
            onClick={calculateBodyType}
            disabled={loading}
            className={`${primaryButtonStyles} ${loading ? disabledButtonStyles : ''}`}
          >
            {loading ? (
              <>
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2 inline-block"></span>
                <span>Calculating...</span>
              </>
            ) : (
              <span>Calculate My Body Shape</span>
            )}
          </button>
          
          <div className="flex justify-center mt-4">
            <button 
              onClick={handleOpenVideo} 
              className="text-amber-400 hover:text-amber-300 text-sm"
            >
              Need help measuring? Watch our video guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyShapeCalculator;