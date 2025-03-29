import React, { useState } from 'react';
import { X, Calculator } from 'lucide-react';

const BodyShapeCalculator = ({ gender, onCalculate, onClose }) => {
  const [measurements, setMeasurements] = useState({
    shoulders: '',
    bust: '',
    chest: '',
    waist: '',
    hips: ''
  });
  
  const [loading, setLoading] = useState(false);
  
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
        
        if (bustHipDiff <= 5 && waistBustRatio < 0.75) {
          result = 'hourglass-women';
        } else if (hipsVal > bustVal + 5) {
          result = 'pear-women';
        } else if (bustVal > hipsVal + 5) {
          result = 'inverted-triangle-women';
        } else if (waistBustRatio >= 0.8 && waistHipRatio >= 0.8) {
          result = 'rectangle-women';
        } else if (waistVal > bustVal && waistVal > hipsVal) {
          result = 'apple-women';
        } else {
          result = 'hourglass-women'; // Default
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
          result = 'inverted-triangle-men';
        } else if (shoulderWaistRatio < 0.9) {
          result = 'triangle-men';
        } else if (shoulderWaistRatio >= 0.9 && shoulderWaistRatio <= 1.1) {
          result = 'rectangle-men';
        } else if (waistVal > shouldersVal && waistVal > chestVal) {
          result = 'oval-men';
        } else {
          result = 'trapezoid-men'; // Default
        }
      }
      
      setLoading(false);
      onCalculate(result);
    }, 2000);
  };
  
  return (
    <div className="calculator-modal" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="calculator-content" style={{
        background: 'linear-gradient(135deg, #1e1e3f, #2d2d6d)',
        padding: '24px',
        borderRadius: '16px',
        width: '90%',
        maxWidth: '500px',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '12px',
            top: '12px',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>
        
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          <Calculator size={40} color="#f59e0b" />
          <h3 style={{fontSize: '24px', marginTop: '8px'}}>Body Shape Calculator</h3>
          <p>Enter your measurements to determine your body shape</p>
        </div>
        
        <div style={{marginBottom: '20px'}}>
          {gender === 'female' ? (
            <>
              <div style={{marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Bust (inches)</label>
                <input 
                  type="number"
                  name="bust"
                  value={measurements.bust}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  placeholder="Measure around the fullest part"
                />
              </div>
              
              <div style={{marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Waist (inches)</label>
                <input 
                  type="number"
                  name="waist"
                  value={measurements.waist}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  placeholder="Measure around the smallest part"
                />
              </div>
              
              <div style={{marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Hips (inches)</label>
                <input 
                  type="number"
                  name="hips"
                  value={measurements.hips}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  placeholder="Measure around the widest part"
                />
              </div>
            </>
          ) : (
            <>
              <div style={{marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Shoulders (inches)</label>
                <input 
                  type="number"
                  name="shoulders"
                  value={measurements.shoulders}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  placeholder="Measure across shoulders"
                />
              </div>
              
              <div style={{marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Chest (inches)</label>
                <input 
                  type="number"
                  name="chest"
                  value={measurements.chest}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  placeholder="Measure around the fullest part"
                />
              </div>
              
              <div style={{marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Waist (inches)</label>
                <input 
                  type="number"
                  name="waist"
                  value={measurements.waist}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  placeholder="Measure around the navel"
                />
              </div>
            </>
          )}
        </div>
        
        <button
          onClick={calculateBodyType}
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            background: loading ? 'rgba(245, 158, 11, 0.5)' : '#f59e0b',
            borderRadius: '8px',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            cursor: loading ? 'wait' : 'pointer'
          }}
        >
          {loading ? 'Calculating...' : 'Calculate My Body Shape'}
        </button>
      </div>
    </div>
  );
};

export default BodyShapeCalculator;