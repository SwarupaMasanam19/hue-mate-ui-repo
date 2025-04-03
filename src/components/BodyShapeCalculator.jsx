import React, { useState } from 'react';
import { X, Triangle, Circle, Square, Hourglass, ChevronUp } from 'lucide-react';

const BodyShapeCalculator = ({ gender = 'female', onCalculate, onClose, videoPageUrl, onOpenVideo }) => {
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
  };

  const calculateBodyType = () => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      let calculatedResult = '';

      if (gender === 'female') {
        const { bust, waist, hips } = measurements;
        const bustVal = parseFloat(bust);
        const waistVal = parseFloat(waist);
        const hipsVal = parseFloat(hips);

        if (isNaN(bustVal) || isNaN(waistVal) || isNaN(hipsVal)) {
          setError('Please enter all measurements');
          setLoading(false);
          return;
        }

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
          calculatedResult = 'hourglass';
        }
      } else {
        const { shoulders, chest, waist } = measurements;
        const shouldersVal = parseFloat(shoulders);
        const chestVal = parseFloat(chest);
        const waistVal = parseFloat(waist);

        if (isNaN(shouldersVal) || isNaN(chestVal) || isNaN(waistVal)) {
          setError('Please enter all measurements');
          setLoading(false);
          return;
        }

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
          calculatedResult = 'trapezoid';
        }
      }

      setResult(calculatedResult);
      setLoading(false);
      onCalculate(calculatedResult);
    }, 2000);
  };

  const getIcon = (result) => {
    switch (result) {
      case 'hourglass': return <Hourglass size={50} />;
      case 'pear': return <Triangle size={50} />;
      case 'inverted-triangle': return <ChevronUp size={50} />;
      case 'rectangle': return <Square size={50} />;
      case 'apple': return <Circle size={50} />;
      case 'oval': return <Circle size={50} />;
      case 'trapezoid': return <ChevronUp size={50} />;
      default: return null;
    }
  };

  const handleOpenVideoPage = () => {
    if (onOpenVideo) {
      onOpenVideo(); // Call the onOpenVideo function from the parent
    } else {
      console.error("onOpenVideo function is not provided.");
    }
  };

  return (
    <div className="calculator-content">
      <button onClick={onClose} className="close-calculator">
        <X size={24} />
      </button>
      <h2 className="calculator-title">Body Shape Calculator</h2>

      <div className="measurement-inputs">
        {gender === 'female' ? (
          <>
            <div className="measurement-row">
              <label>Bust (inches)</label>
              <input
                type="number"
                name="bust"
                value={measurements.bust}
                onChange={handleChange}
                className="measurement-input"
              />
            </div>
            <div className="measurement-row">
              <label>Waist (inches)</label>
              <input
                type="number"
                name="waist"
                value={measurements.waist}
                onChange={handleChange}
                className="measurement-input"
              />
            </div>
            <div className="measurement-row">
              <label>Hips (inches)</label>
              <input
                type="number"
                name="hips"
                value={measurements.hips}
                onChange={handleChange}
                className="measurement-input"
              />
            </div>
          </>
        ) : (
          <>
            <div className="measurement-row">
              <label>Shoulders (inches)</label>
              <input
                type="number"
                name="shoulders"
                value={measurements.shoulders}
                onChange={handleChange}
                className="measurement-input"
              />
            </div>
            <div className="measurement-row">
              <label>Chest (inches)</label>
              <input
                type="number"
                name="chest"
                value={measurements.chest}
                onChange={handleChange}
                className="measurement-input"
              />
            </div>
            <div className="measurement-row">
              <label>Waist (inches)</label>
              <input
                type="number"
                name="waist"
                value={measurements.waist}
                onChange={handleChange}
                className="measurement-input"
              />
            </div>
          </>
        )}
      </div>

      <button
        onClick={calculateBodyType}
        disabled={loading}
        className="calculator-button"
      >
        {loading ? (
          <>
            <div className="loading-spinner"></div> Calculating...
          </>
        ) : (
          'Calculate My Body Shape'
        )}
      </button>

      {error && <p className="measurement-errors">{error}</p>}

      {result && (
        <div className="result-container">
          <div className="result-icon">{getIcon(result)}</div>
          <h3 className="result-title">Your Body Shape is: {result}</h3>
        </div>
      )}

      <div className="video-section">
        <p className="video-prompt">
          Don't know your measurements? Watch a video:
        </p>
        <button className="video-toggle-button" onClick={handleOpenVideoPage}>
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default BodyShapeCalculator;