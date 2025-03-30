import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import RecommendationEngine from './utils/RecommendationEngine';
import BodyTypeSelector from './components/steps/BodyTypeSelection';
import BodyShapeCalculator from './components/BodyShapeCalculator';
import Welcome from './components/steps/Welcome';

// Camera Component
function Camera({ onCapture, onCancel, onSwitchToUpload }) {
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
      <button onClick={onSwitchToUpload} className="switch-to-upload-button">
        Upload a photo instead
      </button>
    </div>
  );
}

// File Upload Component
function FileUpload({ onUpload, onCancel, onSwitchToCamera }) {
  const fileInputRef = useRef(null);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="file-upload-container">
      <div className="upload-area" onClick={() => fileInputRef.current.click()}>
        <div className="upload-icon">📁</div>
        <p>Click to select a photo or drag and drop</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>
      <div className="upload-controls">
        <button onClick={onCancel} className="cancel-button">
          Cancel
        </button>
        <button onClick={onSwitchToCamera} className="switch-to-camera-button">
          Take a photo instead
        </button>
      </div>
    </div>
  );
}

// Gender Selection Component
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

// Photo Option Selection Component
function PhotoOptionSelector({ onSelectOption }) {
  return (
    <div className="photo-option-screen">
      <h2 className="gradient-text">How would you like to proceed?</h2>
      <p>We need a photo to analyze your skin tone.</p>
      
      <div className="photo-options">
        <div 
          className="photo-option-card"
          onClick={() => onSelectOption('camera')}
        >
          <div className="option-icon">📸</div>
          <h3>Take a Photo Now</h3>
          <p>Use your camera to take a photo right now</p>
        </div>
        
        <div 
          className="photo-option-card"
          onClick={() => onSelectOption('upload')}
        >
          <div className="option-icon">📁</div>
          <h3>Upload a Photo</h3>
          <p>Select a photo from your device</p>
        </div>
      </div>
    </div>
  );
}

// Season Selection Component
function SeasonSelection({ onSelect }) {
  const seasons = [
    { id: 'spring', name: 'Spring', icon: '🌸' },
    { id: 'summer', name: 'Summer', icon: '☀️' },
    { id: 'fall', name: 'Fall', icon: '🍂' },
    { id: 'winter', name: 'Winter', icon: '❄️' },
    { id: 'all', name: 'All Seasons', icon: '🔄' }
  ];
  
  return (
    <div className="season-selection-screen">
      <h2 className="gradient-text">Which season are you shopping for?</h2>
      <p>This helps us recommend appropriate fabrics and styles.</p>
      
      <div className="season-options">
        {seasons.map(season => (
          <div 
            key={season.id}
            className="season-card"
            onClick={() => onSelect(season.id)}
          >
            <div className="season-icon">{season.icon}</div>
            <h3>{season.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

// Occasion Selection Component
function OccasionSelection({ onSelect }) {
  const occasions = [
    { id: 'casual', name: 'Casual', icon: '👕' },
    { id: 'work', name: 'Work/Office', icon: '💼' },
    { id: 'formal', name: 'Formal Event', icon: '✨' },
    { id: 'wedding', name: 'Wedding', icon: '💍' },
    { id: 'party', name: 'Party', icon: '🎉' },
    { id: 'festive', name: 'Festival/Celebration', icon: '🪔' },
    { id: 'vacation', name: 'Vacation', icon: '🏖️' },
    { id: 'date', name: 'Date Night', icon: '❤️' }
  ];
  
  return (
    <div className="occasion-selection-screen">
      <h2 className="gradient-text">What's the occasion?</h2>
      <p>Help us recommend outfits that are perfect for your event.</p>
      
      <div className="occasion-options">
        {occasions.map(occasion => (
          <div 
            key={occasion.id}
            className="occasion-card"
            onClick={() => onSelect(occasion.id)}
          >
            <div className="occasion-icon">{occasion.icon}</div>
            <h3>{occasion.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

// Style Selection Component
function StyleSelection({ onSelect }) {
  const styles = [
    { id: 'western', name: 'Western', icon: '👗' },
    { id: 'traditional', name: 'Traditional', icon: '👘' },
    { id: 'indo-western', name: 'Indo-Western', icon: '🎀' },
    { id: 'formal', name: 'Formal', icon: '👔' },
    { id: 'casual', name: 'Casual', icon: '👕' },
    { id: 'bohemian', name: 'Bohemian', icon: '🌸' }
  ];
  
  return (
    <div className="style-selection-screen">
      <h2 className="gradient-text">What style do you prefer?</h2>
      <p>Let us know your preferred fashion style.</p>
      
      <div className="style-options">
        {styles.map(style => (
          <div 
            key={style.id}
            className="style-card"
            onClick={() => onSelect(style.id)}
          >
            <div className="style-icon">{style.icon}</div>
            <h3>{style.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

// Budget Input Component
function BudgetInput({ onSubmit }) {
  const [budget, setBudget] = useState("");
  const [range, setRange] = useState("");
  
  const handleRangeSelect = (selectedRange) => {
    setRange(selectedRange);
    
    // Set default budget based on range
    switch(selectedRange) {
      case 'low':
        setBudget("1000");
        break;
      case 'medium':
        setBudget("3000");
        break;
      case 'high':
        setBudget("5000");
        break;
      case 'premium':
        setBudget("10000");
        break;
      default:
        setBudget("");
    }
  };
  
  return (
    <div className="budget-input-screen">
      <h2 className="gradient-text">What's your budget?</h2>
      <p>This helps us recommend items within your price range.</p>
      
      <div className="budget-ranges">
        <div 
          className={`budget-range-card ${range === 'low' ? 'selected' : ''}`}
          onClick={() => handleRangeSelect('low')}
        >
          <div className="budget-icon">💰</div>
          <h3>Budget</h3>
          <p>Around ₹1000</p>
        </div>
        
        <div 
          className={`budget-range-card ${range === 'medium' ? 'selected' : ''}`}
          onClick={() => handleRangeSelect('medium')}
        >
          <div className="budget-icon">💰💰</div>
          <h3>Medium</h3>
          <p>Around ₹3000</p>
        </div>
        
        <div 
          className={`budget-range-card ${range === 'high' ? 'selected' : ''}`}
          onClick={() => handleRangeSelect('high')}
        >
          <div className="budget-icon">💰💰💰</div>
          <h3>High</h3>
          <p>Around ₹5000</p>
        </div>
        
        <div 
          className={`budget-range-card ${range === 'premium' ? 'selected' : ''}`}
          onClick={() => handleRangeSelect('premium')}
        >
          <div className="budget-icon">💎</div>
          <h3>Premium</h3>
          <p>₹10000+</p>
        </div>
      </div>
      
      <div className="custom-budget">
        <label>Or specify exact amount (₹):</label>
        <input 
          type="number" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      
      <div className="action-buttons">
        <button 
          className="primary-button"
          onClick={() => onSubmit(budget, range)}
          disabled={!budget && !range}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Outfit Type Selection Component
function OutfitTypeSelection({ onSelect }) {
  return (
    <div className="outfit-type-screen">
      <h2 className="gradient-text">What are you looking for?</h2>
      <p>Let us know what we can help you find today.</p>
      
      <div className="outfit-type-options">
        <div 
          className="outfit-type-card"
          onClick={() => onSelect('full')}
        >
          <div className="outfit-type-icon">👔👖👞</div>
          <h3>Complete Outfit</h3>
          <p>Get recommendations for a full head-to-toe look</p>
        </div>
        
        <div 
          className="outfit-type-card"
          onClick={() => onSelect('specific')}
        >
          <div className="outfit-type-icon">🛍️</div>
          <h3>Specific Items</h3>
          <p>Find recommendations for individual pieces</p>
        </div>
      </div>
    </div>
  );
}

// Specific Item Selection Component
function SpecificItemSelection({ onSelect }) {
  const items = [
    { id: 'tops', name: 'Tops', icon: '👕' },
    { id: 'bottoms', name: 'Bottoms', icon: '👖' },
    { id: 'dresses', name: 'Dresses', icon: '👗' },
    { id: 'footwear', name: 'Footwear', icon: '👞' },
    { id: 'accessories', name: 'Accessories', icon: '👜' },
    { id: 'jewelry', name: 'Jewelry', icon: '💍' },
    { id: 'outerwear', name: 'Outerwear', icon: '🧥' }
  ];
  
  return (
    <div className="specific-item-screen">
      <h2 className="gradient-text">What specific item are you looking for?</h2>
      <p>Select what you'd like us to recommend.</p>
      
      <div className="specific-item-options">
        {items.map(item => (
          <div 
            key={item.id}
            className="specific-item-card"
            onClick={() => onSelect(item.id)}
          >
            <div className="specific-item-icon">{item.icon}</div>
            <h3>{item.name}</h3>
          </div>
        ))}
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
  const [showCalculator, setShowCalculator] = useState(false);
  const [season, setSeason] = useState(null);
  const [occasion, setOccasion] = useState(null);
  const [style, setStyle] = useState(null);
  const [budget, setBudget] = useState(null);
  const [outfitType, setOutfitType] = useState(null);
  const [specificItem, setSpecificItem] = useState(null);

  const handleCapture = (imageData) => {
    setCapturedImage(imageData);
    setStep('analysis');
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    recommender.setGender(selectedGender);
  };
  
  const handleGenderContinue = () => {
    setStep('photoOption');
  };
  
  const handlePhotoOptionSelect = (option) => {
    if (option === 'camera') {
      setStep('camera');
    } else if (option === 'upload') {
      setStep('upload');
    }
  };
  
  const handleSwitchToUpload = () => {
    setStep('upload');
  };
  
  const handleSwitchToCamera = () => {
    setStep('camera');
  };
  
  const handleFileUpload = (imageData) => {
    setCapturedImage(imageData);
    setStep('analysis');
  };
  
  const handleBodyTypeSelect = (selectedBodyType) => {
    setBodyType(selectedBodyType);
    recommender.setBodyType(selectedBodyType);
    setStep('confirmation');
  };
  
  const handleCalculatorOpen = () => {
    setShowCalculator(true);
  };
  
  const handleCalculatorResult = (result) => {
    setBodyType(result);
    setShowCalculator(false);
  };
  
  const handleVideoLink = () => {
    // Use the same video for both genders
    const videoUrl = 'https://www.youtube.com/watch?v=wV9a_ERkXlE&list=LL&index=2';
    
    // Ideally, you would embed this video in your app
    // For now, we'll open it in a new tab
    window.open(videoUrl, '_blank');
  };
  
  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      setStep('season');
    } else {
      // Let them change skin tone or body type
      setStep('editInfo');
    }
  };
  
  const handleEditInfo = (editType) => {
    if (editType === 'skinTone') {
      setStep('photoOption');
    } else if (editType === 'bodyType') {
      setStep('bodyType');
    }
  };
  
  const handleSeasonSelect = (selectedSeason) => {
    setSeason(selectedSeason);
    recommender.setSeason(selectedSeason);
    setStep('occasion');
  };
  
  const handleOccasionSelect = (selectedOccasion) => {
    setOccasion(selectedOccasion);
    recommender.setEvent(selectedOccasion);
    setStep('style');
  };
  
  const handleStyleSelect = (selectedStyle) => {
    setStyle(selectedStyle);
    recommender.setStyle(selectedStyle);
    setStep('budget');
  };
  
  const handleBudgetSubmit = (amount, range) => {
    setBudget({ amount, range });
    recommender.setBudget(amount);
    setStep('outfitType');
  };
  
  const handleOutfitTypeSelect = (type) => {
    setOutfitType(type);
    if (type === 'full') {
      setStep('results');
    } else {
      setStep('specificItem');
    }
  };
  
  const handleSpecificItemSelect = (item) => {
    setSpecificItem(item);
    setStep('results');
  };
  
  useEffect(() => {
    // Always add the pulsing animation to the chatbot button
    const chatbotButton = document.querySelector('.chatbot-button');
    if (chatbotButton) {
      chatbotButton.classList.add('pulse-animation');
    }
    
    // Remove the tooltip if we're past the welcome step
    if (step !== 'welcome' && document.querySelector('.chatbot-tooltip')) {
      const tooltip = document.querySelector('.chatbot-tooltip');
      if (tooltip && document.body.contains(tooltip)) {
        document.body.removeChild(tooltip);
      }
    }
  }, [step]);

  return (
    <div className="App">
      {/* Render the welcome component as the main page content */}
      <Welcome onStart={() => setIsOpen(true)} />
      
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
          
          {/* Welcome/greeting message */}
          {step === 'welcome' && (
            <div className="chatbot-greeting">
              <h2>Hello there!</h2>
              <p>
                I'm HueMate, your personal AI fashion assistant. I'm here to help you find the perfect outfit based on your skin tone and body shape.
              </p>
              <p>
                I can analyze your skin tone, recommend complementary colors, suggest styles that flatter your body type, and much more!
              </p>
              <p>
                Let's get started by learning a bit about you. Please select your gender to begin.
              </p>
              <button 
                onClick={() => setStep('gender')}
                className="greeting-button"
              >
                Let's Begin!
              </button>
            </div>
          )}

          <div className="chatbot-content">
            {step === 'gender' && (
              <GenderSelection 
                onGenderSelect={handleGenderSelect}
                onContinue={handleGenderContinue}
                selectedGender={gender}
              />
            )}
            
            {step === 'photoOption' && (
              <PhotoOptionSelector onSelectOption={handlePhotoOptionSelect} />
            )}

            {step === 'camera' && (
              <div className="camera-screen">
                <h2 className="gradient-text">Take a Photo</h2>
                <p>For the best skin tone analysis, take a clear photo in good lighting without makeup.</p>

                <Camera 
                  onCapture={handleCapture}
                  onCancel={() => setStep('photoOption')}
                  onSwitchToUpload={handleSwitchToUpload}
                />
              </div>
            )}
            
            {step === 'upload' && (
              <div className="upload-screen">
                <h2 className="gradient-text">Upload a Photo</h2>
                <p>For the best skin tone analysis, choose a clear photo in good lighting without makeup.</p>
                
                <FileUpload 
                  onUpload={handleFileUpload}
                  onCancel={() => setStep('photoOption')}
                  onSwitchToCamera={handleSwitchToCamera}
                />
              </div>
            )}

            {step === 'analysis' && (
              <div className="analysis-screen">
                <h2 className="gradient-text">Skin Tone Analysis</h2>
                <div className="results-container">
                  <div className="results-photo-container">
                    <img src={capturedImage} alt="Your photo" className="results-photo" />
                  </div>
                  <div className="skin-tone-result">
                    <p className="compliment">
                      {gender === 'female' ? 'Looking gorgeous!' : 'Looking handsome!'}
                    </p>
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
                  <button className="secondary-button" onClick={() => setStep('photoOption')}>
                    Retake Photo
                  </button>
                </div>
              </div>
            )}

            {step === 'bodyType' && (
              <BodyTypeSelector 
                gender={gender} 
                onSelect={handleBodyTypeSelect}
                onCalculatorOpen={handleCalculatorOpen}
                onVideoLink={handleVideoLink}
              />
            )}
            
            {showCalculator && (
              <BodyShapeCalculator 
                gender={gender}
                onCalculate={handleCalculatorResult}
                onClose={() => setShowCalculator(false)}
              />
            )}
            
            {step === 'confirmation' && (
              <div className="confirmation-screen">
                <h2 className="gradient-text">Let's Confirm Your Information</h2>
                <p>Is this information correct?</p>
                
                <div className="info-summary">
                  <div className="info-item">
                    <h3>Skin Tone:</h3>
                    <div className="skin-tone-chip" style={{ backgroundColor: '#D4A76A' }}>
                      Warm Medium
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <h3>Body Type:</h3>
                    <div className="body-type-chip">
                      {bodyType ? bodyType.split('-')[0].charAt(0).toUpperCase() + bodyType.split('-')[0].slice(1) : 'Not specified'}
                    </div>
                  </div>
                </div>
                
                <div className="action-buttons">
                  <button className="primary-button" onClick={() => handleConfirmation(true)}>
                    Yes, Continue
                  </button>
                  <button className="secondary-button" onClick={() => handleConfirmation(false)}>
                    No, I Need to Change Something
                  </button>
                </div>
              </div>
            )}
            
            {step === 'editInfo' && (
              <div className="edit-info-screen">
                <h2 className="gradient-text">What would you like to change?</h2>
                
                <div className="edit-options">
                  <div className="edit-option-card" onClick={() => handleEditInfo('skinTone')}>
                    <div className="edit-icon">🎨</div>
                    <h3>Change Skin Tone</h3>
                    <p>Take a new photo or upload a different one</p>
                  </div>
                  
                  <div className="edit-option-card" onClick={() => handleEditInfo('bodyType')}>
                    <div className="edit-icon">📏</div>
                    <h3>Change Body Type</h3>
                    <p>Select a different body shape</p>
                  </div>
                </div>
              </div>
            )}
            
            {step === 'season' && (
              <SeasonSelection onSelect={handleSeasonSelect} />
            )}
            
            {step === 'occasion' && (
              <OccasionSelection onSelect={handleOccasionSelect} />
            )}
            
            {step === 'style' && (
              <StyleSelection onSelect={handleStyleSelect} />
            )}
            
            {step === 'budget' && (
              <BudgetInput onSubmit={handleBudgetSubmit} />
            )}
            
            {step === 'outfitType' && (
              <OutfitTypeSelection onSelect={handleOutfitTypeSelect} />
            )}
            
            {step === 'specificItem' && (
              <SpecificItemSelection onSelect={handleSpecificItemSelect} />
            )}

            {step === 'results' && (
              <div className="results-screen">
                <h2 className="gradient-text">Your Style Recommendations</h2>
                
                <div className="results-summary">
                  <div className="result-photo-container">
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
                      <div className="body-type-result">
                        {bodyType ? bodyType.split('-')[0].charAt(0).toUpperCase() + bodyType.split('-')[0].slice(1) : 'Rectangle'}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="color-palette-container">
                  <h3>Your Recommended Color Palette</h3>
                  <div className="color-palette">
                    <div className="color-chip" style={{backgroundColor: '#D4A76A'}}>
                      <span className="color-name">Gold</span>
                    </div>
                  </div>
                </div>
                
                <div className="results-actions">
                  <button className="primary-button" onClick={() => setStep('welcome')}>
                    Start Over
                  </button>
                  <button className="secondary-button" onClick={() => handleEditInfo('skinTone')}>
                    Change Skin Tone
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