// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import RecommendationEngine from './utils/RecommendationEngine';
import BodyTypeSelector from './components/steps/BodyTypeSelection'; 

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
            width: { ideal: 1920 },
            height: { ideal: 1080 }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const capturePhoto = () => {
    if (!videoRef.current) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const imageDataUrl = canvas.toDataURL('image/png');
    
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
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

// Gender Selection Component - defined outside App
function GenderSelection({ onGenderSelect, onContinue, selectedGender }) {
  return (
    <div className="gender-screen">
      <h2 className="gradient-text">Select Your Gender</h2>
      <p>This helps us provide more accurate styling recommendations.</p>
      
      <div className="gender-options">
        <div 
          className={`gender-card ${selectedGender === 'female' ? 'selected' : ''}`}
          onClick={() => onGenderSelect('female')}
        >
          <div className="avatar-container">
            <img 
              src="/girl-avatar.png" 
              alt="Female" 
              className="avatar-image" 
              onError={(e) => { 
                console.log("Image load error, using fallback");
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/120?text=Girl"; 
              }} 
            />
          </div>
          <p>Girl</p>
        </div>
        
        <div 
          className={`gender-card ${selectedGender === 'male' ? 'selected' : ''}`}
          onClick={() => onGenderSelect('male')}
        >
          <div className="avatar-container">
            <img 
              src="/boy-avatar.png" 
              alt="Male" 
              className="avatar-image" 
              onError={(e) => { 
                console.log("Image load error, using fallback");
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/120?text=Boy"; 
              }} 
            />
          </div>
          <p>Boy</p>
        </div>
      </div>
      
      <div className="action-buttons">
        <button 
          className="primary-button"
          onClick={onContinue}
          disabled={!selectedGender}
          style={{cursor: selectedGender ? 'pointer' : 'not-allowed'}}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [recommender] = useState(new RecommendationEngine());
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('welcome'); 
  const [capturedImage, setCapturedImage] = useState(null);
  const [gender, setGender] = useState(null);
  const [bodyType, setBodyType] = useState(null);

  const handleCapture = (imageData) => {
    setCapturedImage(imageData);
    setStep('analysis');
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    recommender.setGender(selectedGender);
  };
  
  const handleGenderContinue = () => {
    setStep('camera');
  };
  
  const handleBodyTypeSelect = (selectedBodyType) => {
    setBodyType(selectedBodyType);
    recommender.setBodyType(selectedBodyType);
    setStep('results');
  };

  useEffect(() => {
    // Animate chatbot button on load
    const chatbotButton = document.querySelector('.chatbot-button');
    if (chatbotButton) {
      // Add pulsing animation
      chatbotButton.classList.add('pulse-animation');
      
      // Create tooltip
      let tooltip = document.createElement('div');
      tooltip.className = 'chatbot-tooltip';
      tooltip.innerHTML = 'Click me to start! 👋';
      tooltip.style.position = 'absolute';
      tooltip.style.bottom = '120px';
      tooltip.style.right = '30px';
      tooltip.style.background = 'white';
      tooltip.style.color = '#1e1e3f';
      tooltip.style.padding = '8px 16px';
      tooltip.style.borderRadius = '16px';
      tooltip.style.fontWeight = 'bold';
      tooltip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      tooltip.style.animation = 'bounce 2s infinite';
      tooltip.style.zIndex = '999';
      
      document.body.appendChild(tooltip);
      
      // Cleanup on component unmount
      return () => {
        if (document.body.contains(tooltip)) {
          document.body.removeChild(tooltip);
        }
        chatbotButton.classList.remove('pulse-animation');
      };
    }
  }, []);

  return (
    <div className="App">
      <button 
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open HueMate Assistant"
      >
        <div className="chatbot-button-inner">
          <img src="/huemate-logo.png" alt="HueMate" onError={(e) => { e.target.src = "/chatbot-logo.png"; }} />
        </div>
      </button>

      {isOpen && (
        <div className="chatbot-fullscreen">
          <div className="chatbot-header">
            <div className="header-logo">
              <img src="/huemate-logo.png" alt="HueMate" className="header-logo-image" onError={(e) => { e.target.src = "/chatbot-logo.png"; }} />
            </div>
            <h1>HueMate - Your Perfect Shade</h1>
            <button onClick={() => setIsOpen(false)} className="close-button">×</button>
          </div>
          
          {/* Add greeting message */}
          {step === 'welcome' && (
            <div className="chatbot-greeting" style={{
              padding: '20px',
              background: 'rgba(245, 158, 11, 0.1)',
              borderRadius: '12px',
              margin: '20px',
              textAlign: 'center',
              animation: 'fadeIn 0.5s'
            }}>
              <h2 style={{color: '#f59e0b', marginBottom: '12px'}}>Hello there! 👋</h2>
              <p style={{marginBottom: '12px'}}>
                I'm HueMate, your personal AI fashion assistant. I'm here to help you find the perfect outfit based on your skin tone and body shape.
              </p>
              <p style={{marginBottom: '16px'}}>
                I can analyze your skin tone, recommend complementary colors, suggest styles that flatter your body type, and much more!
              </p>
              <p style={{fontWeight: 'bold'}}>
                Let's get started by learning a bit about you. Please select your gender to begin.
              </p>
              <button 
                onClick={() => setStep('gender')}
                style={{
                  padding: '10px 20px',
                  background: '#f59e0b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  marginTop: '16px',
                  cursor: 'pointer'
                }}
              >
                Let's Begin!
              </button>
            </div>
          )}

          <div className="chatbot-content">
            {step === 'features' && (
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
                  <div className="feature-card">
                    <div className="feature-icon">💼</div>
                    <h3>Occasion-Based Styling</h3>
                    <p>Get outfit ideas for any event.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📏</div>
                    <h3>Body Shape Analysis</h3>
                    <p>Learn what styles flatter your body type.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">💰</div>
                    <h3>Budget-Friendly Options</h3>
                    <p>Find stylish options within your budget.</p>
                  </div>
                </div>

                <button className="primary-button" onClick={() => setStep('gender')}>
                  Get Started
                </button>
              </div>
            )}

            {step === 'gender' && (
              <GenderSelection 
                onGenderSelect={handleGenderSelect}
                onContinue={handleGenderContinue}
                selectedGender={gender}
              />
            )}

            {step === 'camera' && (
              <div className="camera-screen">
                <h2 className="gradient-text">Take a Photo</h2>
                <p>For the best skin tone analysis, take a clear photo in good lighting without makeup.</p>

                <Camera 
                  onCapture={handleCapture}
                  onCancel={() => setStep('gender')}
                />
              </div>
            )}

            {step === 'analysis' && (
              <div className="analysis-screen">
                <h2 className="gradient-text">Skin Tone Analysis</h2>
                <div className="results-container">
                  <div className="results-photo-container">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={capturedImage} alt="Your photo" className="results-photo" />
                  </div>
                  <div className="skin-tone-result">
                    <p className="compliment">Looking great!</p>
                    <div className="tone-indicator">
                      <div className="color-circle" style={{ backgroundColor: '#D4A76A' }}>
                        <span className="hex-code">#D4A76A</span>
                      </div>
                      <div className="tone-info">
                        <h3 className="tone-name">Warm Medium</h3>
                        <p className="tone-description">A beautiful warm undertone with golden highlights</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="primary-button" onClick={() => setStep('bodyType')}>
                    Continue
                  </button>
                  <button className="secondary-button" onClick={() => setStep('camera')}>
                    Retake Photo
                  </button>
                </div>
              </div>
            )}

            {step === 'bodyType' && (
              <BodyTypeSelector 
                gender={gender} 
                onSelect={handleBodyTypeSelect}
              />
            )}

            {step === 'results' && (
              <div className="results-screen">
                <h2 className="gradient-text">Your Style Recommendations</h2>
                
                <div className="results-summary">
                  <div className="result-photo-container">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={capturedImage} alt="Your photo" className="result-photo" />
                  </div>
                  
                  <div className="results-details">
                    <div className="result-item">
                      <h3>Skin Tone</h3>
                      <div className="tone-chip" style={{ backgroundColor: '#D4A76A' }}>
                        Warm Medium <span className="hex-small">#D4A76A</span>
                      </div>
                    </div>
                    
                    <div className="result-item">
                      <h3>Body Type</h3>
                      <div>{bodyType ? bodyType.split('-')[0].charAt(0).toUpperCase() + bodyType.split('-')[0].slice(1) : 'Rectangle'}</div>
                    </div>
                    
                    <div className="result-item">
                      <h3>Best Colors For You</h3>
                      <div className="color-chips">
                        <div className="color-chip" style={{ backgroundColor: '#50C878' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#FF7F50' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#008080' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#FFD700' }}></div>
                        <div className="color-chip" style={{ backgroundColor: '#800020' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="demo-next-steps">
                  <p>Your full fashion recommendations would include:</p>
                  <ul>
                    <li>Personalized clothing items based on your skin tone and body shape</li>
                    <li>Specific fabric recommendations for your skin</li>
                    <li>Outfit combinations for different occasions</li>
                    <li>Accessory suggestions to complete your look</li>
                    <li>Shopping suggestions within your budget</li>
                  </ul>
                </div>
                
                <div className="action-buttons">
                  <button className="primary-button" onClick={() => setStep('welcome')}>
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