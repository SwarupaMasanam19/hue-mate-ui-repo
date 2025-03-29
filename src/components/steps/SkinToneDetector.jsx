import React, { useState, useRef } from 'react';

/*
 * This component assumes you already have a skin tone detection implementation.
 * It provides a UI for users to upload photos and manually select their skin tone.
 */
const SkinToneDetector = ({ onSkinToneDetected }) => {
  const [selectedSkinTone, setSelectedSkinTone] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showManualSelection, setShowManualSelection] = useState(false);
  const fileInputRef = useRef(null);
  
  const skinTones = [
    { id: 'fair', name: 'Fair', color: '#F5DBCB' },
    { id: 'medium', name: 'Medium', color: '#E0B193' },
    { id: 'tan', name: 'Tan', color: '#C68B59' },
    { id: 'deep', name: 'Deep', color: '#8D5524' }
  ];
  
  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setUserImage(event.target.result);
      detectSkinTone(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  
  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  
  // Detect skin tone from image
  const detectSkinTone = (imageUrl) => {
    setIsProcessing(true);
    
    // Here you would integrate with your existing skin tone detection
    // For now, we'll simulate a detection process
    setTimeout(() => {
      // This is where your existing skin tone detection would run
      // For demonstration, we're randomly selecting a skin tone
      const tones = ['fair', 'medium', 'tan', 'deep'];
      const detectedTone = tones[Math.floor(Math.random() * tones.length)];
      
      setSelectedSkinTone(detectedTone);
      setIsProcessing(false);
      
      // Show manual selection option
      setShowManualSelection(true);
    }, 1500);
  };
  
  // Handle manual skin tone selection
  const handleManualSelect = (toneId) => {
    setSelectedSkinTone(toneId);
  };
  
  // Confirm selection and notify parent component
  const handleConfirm = () => {
    if (selectedSkinTone) {
      onSkinToneDetected(selectedSkinTone);
    }
  };
  
  return (
    <div className="skin-tone-detector">
      <h2>Let's Detect Your Skin Tone</h2>
      <p>Upload a well-lit photo of your face to automatically detect your skin tone, or select manually.</p>
      
      <div className="upload-container">
        <input 
          type="file" 
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        
        <button 
          className="upload-button"
          onClick={handleUploadClick}
        >
          Upload Photo
        </button>
        
        <button 
          className="manual-button"
          onClick={() => setShowManualSelection(true)}
        >
          Select Manually
        </button>
      </div>
      
      {isProcessing && (
        <div className="processing-indicator">
          <div className="spinner"></div>
          <p>Analyzing skin tone...</p>
        </div>
      )}
      
      {userImage && !isProcessing && (
        <div className="image-preview">
          <img src={userImage} alt="User uploaded" />
          {selectedSkinTone && (
            <div className="detection-result">
              <p>Detected skin tone: <strong>{skinTones.find(tone => tone.id === selectedSkinTone).name}</strong></p>
              <p className="note">Not accurate? Select manually below.</p>
            </div>
          )}
        </div>
      )}
      
      {showManualSelection && (
        <div className="manual-selection">
          <h3>Select Your Skin Tone</h3>
          <div className="skin-tone-options">
            {skinTones.map(tone => (
              <div 
                key={tone.id}
                className={`skin-tone-option ${selectedSkinTone === tone.id ? 'selected' : ''}`}
                onClick={() => handleManualSelect(tone.id)}
              >
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: tone.color }}
                ></div>
                <span>{tone.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {selectedSkinTone && (
        <button 
          className="confirm-button"
          onClick={handleConfirm}
        >
          Confirm & Continue
        </button>
      )}
    </div>
  );
};

export default SkinToneDetector;