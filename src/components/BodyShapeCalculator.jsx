import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle } from 'lucide-react';

const BodyShapeCalculator = ({ gender, onCalculate, onClose }) => {
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
        
        // More accurate calculation
        if (bustHipDiff <= 5 && waistBustRatio < 0.75) {
          result = 'hourglass-women';
        } else if (hipsVal > bustVal + 5 && waistHipRatio < 0.75) {
          result = 'pear-women';
        } else if (bustVal > hipsVal + 5 && waistBustRatio < 0.75) {
          result = 'inverted-triangle-women';
        } else if (waistBustRatio >= 0.8 && waistHipRatio >= 0.8) {
          result = 'rectangle-women';
        } else if (waistVal > bustVal && waistVal > hipsVal) {
          result = 'apple-women';
        } else {
          result = 'hourglass-women'; // Default
        }
      } else {
        // For men - more accurate calculation
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
        const chestWaistRatio = chestVal / waistVal;
        
        if (shoulderWaistRatio > 1.2 && chestWaistRatio > 1.1) {
          result = 'inverted-triangle-men';
        } else if (shoulderWaistRatio < 0.9) {
          result = 'triangle-men';
        } else if (shoulderWaistRatio >= 0.9 && shoulderWaistRatio <= 1.1 && chestWaistRatio >= 0.9 && chestWaistRatio <= 1.1) {
          result = 'rectangle-men';
        } else if (waistVal > shouldersVal && waistVal > chestVal) {
          result = 'oval-men';
        } else {
          result = 'trapezoid-men';
        }
      }
      
      setLoading(false);
      setResult(result);
    }, 1500);
  };
  
  const getBodyTypeDescription = (type) => {
    const descriptions = {
      'hourglass-women': "Your bust and hips are about the same width, with a well-defined waist. Clothes that accentuate your waist will look fantastic on you.",
      'pear-women': "Your hips are wider than your shoulders, creating a beautiful feminine silhouette. Tops that add volume to your shoulders can help balance your proportions.",
      'inverted-triangle-women': "Your shoulders are broader than your hips. Clothes that add volume to your lower half will create a balanced silhouette.",
      'rectangle-women': "Your shoulders, waist, and hips are about the same width. Creating definition at the waist with your clothing will add curves.",
      'apple-women': "You carry weight around your midsection, with slimmer legs and often a great bust. Empire waistlines and V-necks are flattering choices.",
      'inverted-triangle-men': "Your shoulders and chest are broader than your waist. This athletic build is flattered by straight-leg pants and fitted shirts.",
      'triangle-men': "Your lower body is wider than your upper body. Structured jackets and detailed tops help balance your proportions.",
      'rectangle-men': "Your shoulders, chest, and waist are similar in width. Layering and texture can add dimension to this balanced frame.",
      'oval-men': "You carry weight around your midsection. Vertical patterns and straight-cut shirts are flattering choices.",
      'trapezoid-men': "Your shoulders are slightly wider than your waist, with a gradual taper. This balanced build works well with most styles."
    };
    
    return descriptions[type] || "Based on your measurements, we've determined your body shape.";
  };

  const getBodyTypeName = (type) => {
    return type.split('-')[0].charAt(0).toUpperCase() + type.split('-')[0].slice(1);
  };

  const getBodyTypeIcon = (type) => {
    if (type.includes('hourglass')) return '⌛';
    if (type.includes('pear')) return '🔻';
    if (type.includes('apple') || type.includes('oval')) return '⭕';
    if (type.includes('rectangle')) return '◻️';
    if (type.includes('triangle') && !type.includes('inverted')) return '▼';
    if (type.includes('inverted-triangle')) return '▲';
    if (type.includes('trapezoid')) return '⏢';
    return '📏';
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
      {result ? (
        <div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 rounded-2xl p-8 max-w-md w-full animate-fade-in border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-green-400" />
              <h2 className="text-xl font-bold">Body Shape Calculated</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{getBodyTypeIcon(result)}</div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">
              {getBodyTypeName(result)}
            </h3>
            <p className="text-white/80">{getBodyTypeDescription(result)}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-8">
            {Object.entries(measurements).map(([key, value]) => {
              if (!value) return null;
              return (
                <div key={key} className="bg-white/5 p-3 rounded-lg">
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
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
              className="flex-1 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <Calculator size={18} />
              Recalculate
            </button>
            
            <button
              onClick={() => onCalculate(result)}
              className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <ArrowRight size={18} />
              Apply Result
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 rounded-2xl p-6 max-w-md w-full shadow-xl border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Calculator size={24} className="text-amber-400" />
              <h2 className="text-xl font-bold">Body Shape Calculator</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
            >
              <X size={18} />
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
            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Calculating...</span>
              </>
            ) : (
              <>
                <Calculator size={18} />
                <span>Calculate My Body Shape</span>
              </>
            )}
          </button>
          
          <p className="text-white/50 text-xs text-center mt-4">
            For accurate results, use a measuring tape and measure directly against your body.
          </p>
        </div>
      )}
    </div>
  );
};

export default BodyShapeCalculator;