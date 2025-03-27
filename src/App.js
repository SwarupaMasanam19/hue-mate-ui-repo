// App.js
import React, { useState, useRef, useEffect } from 'react';
import './App.css';

// Camera Component
function Camera({ onCapture, onCancel }) {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  
  useEffect(() => {
    async function enableCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: {
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        });
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      } catch (err) {
        console.error("Error accessing camera:", err);
        alert("Could not access camera. Please allow camera access.");
      }
    }
    
    enableCamera();
    
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);
  
  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const imageDataUrl = canvas.toDataURL('image/png');
    
    // Stop camera immediately after capturing for security
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    
    onCapture(imageDataUrl);
  };
  
  return (
    <div className="camera-container">
      <video ref={videoRef} autoPlay playsInline className="camera-preview" />
      <div className="camera-controls">
        <button onClick={capturePhoto} className="capture-button">
          <div className="capture-button-inner"></div>
        </button>
        <button onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('welcome'); // welcome, camera, analysis, gender, styles, results
  const [capturedImage, setCapturedImage] = useState(null);
  const [gender, setGender] = useState(null);
  const [skinTone, setSkinTone] = useState({ tone: 'warm', hex: '#E3B98F' });
  const [analyzing, setAnalyzing] = useState(false);
  
  const handleCapture = (imageData) => {
    setCapturedImage(imageData);
    setStep('analysis');
    setAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      setAnalyzing(false);
    }, 2000);
  };
  
  const getCompliment = () => {
    if (gender === 'male') {
      return "Hey Hero! Looking Sharp! ✨";
    } else if (gender === 'female') {
      return "Hey Gorgeous! You Look Amazing! ✨";
    } else {
      return "Hey Superstar! ✨";
    }
  };
  
  // Handle back button
  const handleBack = () => {
    if (step === 'analysis') setStep('camera');
    else if (step === 'gender') setStep('analysis');
    else if (step === 'styles') setStep('gender');
    else if (step === 'results') setStep('styles');
    else setStep('welcome');
  };
  
  // Reset everything
  const handleReset = () => {
    setStep('welcome');
    setCapturedImage(null);
    setGender(null);
  };
  
  return (
    <div className="App">
      {/* Chatbot Button - Updated to use your logo */}
      <button 
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open HueMate Assistant"
      >
        <div className="chatbot-button-inner">
          <img src="/chatbot-logo.png" alt="HueMate" />
        </div>
      </button>
      
      {/* Chatbot Container */}
      {isOpen && (
        <div className="chatbot-fullscreen">
          <div className="chatbot-header">
            <div className="header-logo">
              <img src="/chatbot-logo.png" alt="HueMate" className="header-logo-image" />
            </div>
            <h1>HueMate - Your Perfect Shade</h1>
            <button onClick={() => setIsOpen(false)} className="close-button">×</button>
          </div>
          
          <div className="chatbot-content">
            {step === 'welcome' && (
              <div className="welcome-screen">
                <h2 className="gradient-text">Welcome to HueMate</h2>
                <p className="welcome-text">Your AI-powered fashion assistant that helps you find the perfect outfit based on your skin tone.</p>
                
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">📸</div>
                    <h3>Skin Tone Analysis</h3>
                    <p>Take a photo to analyze your unique skin tone.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">👗</div>
                    <h3>Style Recommendations</h3>
                    <p>Get personalized clothing suggestions.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🎨</div>
                    <h3>Color Matching</h3>
                    <p>Find colors that complement your skin.</p>
                  </div>
                </div>
                
                <button className="primary-button" onClick={() => setStep('camera')}>
                  Get Started
                </button>
              </div>
            )}
            
            {step === 'camera' && (
              <div className="camera-screen">
                <h2 className="gradient-text">Take a Photo</h2>
                <p>For the best skin tone analysis, take a clear photo in good lighting without makeup.</p>
                
                <Camera 
                  onCapture={handleCapture}
                  onCancel={() => setStep('welcome')}
                />
              </div>
            )}
            
            {step === 'analysis' && (
              <div className="analysis-screen">
                <h2 className="gradient-text">Skin Tone Analysis</h2>
                
                {analyzing ? (
                  <div className="analyzing-container">
                    <div className="analyzing-photo">
                      <img src={capturedImage} alt="Analyzing" className="blur-photo" />
                      <div className="spinner-overlay">
                        <div className="spinner"></div>
                      </div>
                    </div>
                    <p>Analyzing your skin tone...</p>
                  </div>
                ) : (
                  <div className="results-container">
                    <div className="results-photo-container">
                      <img src={capturedImage} alt="Your photo" className="results-photo" />
                    </div>
                    
                    <div className="skin-tone-result">
                      <p className="compliment">Hey Gorgeous! ✨</p>
                      <p>Your skin tone appears to be:</p>
                      <div className="tone-indicator">
                        <div className="color-circle" style={{ backgroundColor: skinTone.hex }}>
                          <span className="hex-code">{skinTone.hex}</span>
                        </div>
                        <div className="tone-info">
                          <p className="tone-name">Warm</p>
                          <p className="tone-description">With golden undertones</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="action-buttons">
                      <button className="primary-button" onClick={() => setStep('gender')}>
                        Continue
                      </button>
                      <button className="secondary-button" onClick={() => setStep('camera')}>
                        Retake Photo
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {step === 'gender' && (
              <div className="gender-screen">
                <h2 className="gradient-text">Select Your Gender</h2>
                <p>This helps us provide more accurate styling recommendations.</p>
                
                <div className="gender-options">
                  <div 
                    className={`gender-card ${gender === 'female' ? 'selected' : ''}`}
                    onClick={() => setGender('female')}
                  >
                    <div className="gender-icon">👩</div>
                    <p>Female</p>
                  </div>
                  <div 
                    className={`gender-card ${gender === 'male' ? 'selected' : ''}`}
                    onClick={() => setGender('male')}
                  >
                    <div className="gender-icon">👨</div>
                    <p>Male</p>
                  </div>
                  <div 
                    className={`gender-card ${gender === 'non-binary' ? 'selected' : ''}`}
                    onClick={() => setGender('non-binary')}
                  >
                    <div className="gender-icon">🧑</div>
                    <p>Non-Binary</p>
                  </div>
                </div>
                
                <div className="action-buttons">
                  <button 
                    className="primary-button" 
                    onClick={() => setStep('styles')}
                    disabled={!gender}
                  >
                    Continue
                  </button>
                  <button className="secondary-button" onClick={handleBack}>
                    Back
                  </button>
                </div>
              </div>
            )}
            
            {step === 'styles' && (
              <div className="styles-screen">
                <h2 className="gradient-text">Almost There!</h2>
                <p>The full HueMate experience awaits in the complete application.</p>
                <p>This demo showcases the camera functionality and skin tone analysis.</p>
                
                <div className="demo-next-steps">
                  <p>In the full application, you would continue to:</p>
                  <ul>
                    <li>Select your body type</li>
                    <li>Choose your style preferences</li>
                    <li>Set your budget</li>
                    <li>Receive personalized outfit recommendations</li>
                    <li>Try on outfits virtually</li>
                  </ul>
                </div>
                
                <div className="action-buttons">
                  <button className="primary-button" onClick={() => setStep('results')}>
                    See Results
                  </button>
                  <button className="secondary-button" onClick={handleReset}>
                    Start Over
                  </button>
                </div>
              </div>
            )}
            
            {step === 'results' && (
              <div className="results-screen">
                <h2 className="gradient-text">Your Analysis Results</h2>
                
                <div className="results-summary">
                  <div className="result-photo-container">
                    <img src={capturedImage} alt="Your photo" className="result-photo" />
                  </div>
                  
                  <div className="results-details">
                    <p className="compliment">{getCompliment()}</p>
                    
                    <div className="result-item">
                      <h3>Skin Tone</h3>
                      <div className="tone-chip" style={{ backgroundColor: skinTone.hex }}>
                        <span>Warm</span>
                        <span className="hex-small">{skinTone.hex}</span>
                      </div>
                    </div>
                    
                    <div className="result-item">
                      <h3>Recommended Colors</h3>
                      <div className="color-chips">
                        <div className="color-chip" style={{ backgroundColor: '#FF8C00' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#FFD700' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#A0522D' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#8B4513' }}></div>
                      </div>
                    </div>
                    
                    <div className="result-item">
                      <h3>Colors to Avoid</h3>
                      <div className="color-chips">
                        <div className="color-chip" style={{ backgroundColor: '#00BFFF' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#FF69B4' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#32CD32' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="action-buttons">
                  <button className="primary-button" onClick={handleReset}>
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;