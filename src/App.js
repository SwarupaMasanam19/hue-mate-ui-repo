import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import RecommendationEngine from './utils/RecommendationEngine';
import BodyTypeSelector from './components/steps/BodyTypeSelection';
import BodyShapeCalculator from './components/BodyShapeCalculator';
import Welcome from './components/steps/Welcome';
import YouTubeVideoPlayer from './components/YouTubeVideoPlayer';
import { useChatbot } from './context/ChatbotContext';
import CalculatorPage from './components/CalculatorPage';
import { 
  Camera, X, ArrowRight, Info, AlertCircle, Flower, Sun, Leaf, 
  Snowflake, RefreshCw, Shirt, Briefcase, Sparkles, Heart, 
  Music, Landmark, Palmtree, ShoppingBag, Scissors, 
  Feather, Wallet, CreditCard, Diamond, Layers, Square, Triangle,
  Footprints, Glasses, Palette, Ruler, Calculator, ChevronUp, Circle, Hourglass
} from 'lucide-react';

// CameraCapture Component

function CameraCapture({ onCapture, onCancel }) {
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
        onCancel(); // Go back if camera access fails
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
    
    // Stop the camera after capturing
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    
    onCapture(imageDataUrl);
  };
  
  return (
    <div className="camera-container" style={{
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#000',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
    }}>
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        style={{
          width: '100%',
          display: 'block',
          transform: 'scaleX(-1)' // Mirror effect for selfie
        }}
      />
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {/* Prominent circular capture button */}
        <button 
          onClick={capturePhoto}
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)'
          }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '4px solid #f59e0b',
            backgroundColor: 'white'
          }}></div>
        </button>
      </div>
      
      {/* Cancel button in top right */}
      <button 
        onClick={onCancel}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <X size={20} />
      </button>
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

// Season Selection Component
function SeasonSelection({ onSelect }) {
  const seasons = [
    { id: 'spring', name: 'Spring', icon: <Flower size={24} /> },
    { id: 'summer', name: 'Summer', icon: <Sun size={24} /> },
    { id: 'fall', name: 'Fall', icon: <Leaf size={24} /> },
    { id: 'winter', name: 'Winter', icon: <Snowflake size={24} /> },
    { id: 'all', name: 'All Seasons', icon: <RefreshCw size={24} /> }
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
    { id: 'casual', name: 'Casual', icon: <Shirt size={24} /> },
    { id: 'work', name: 'Work/Office', icon: <Briefcase size={24} /> },
    { id: 'formal', name: 'Formal Event', icon: <Sparkles size={24} /> },
    { id: 'wedding', name: 'Wedding', icon: <Heart size={24} /> },
    { id: 'party', name: 'Party', icon: <Music size={24} /> },
    { id: 'festive', name: 'Festival/Celebration', icon: <Landmark size={24} /> },
    { id: 'vacation', name: 'Vacation', icon: <Palmtree size={24} /> },
    { id: 'date', name: 'Date Night', icon: <Heart size={24} /> }
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
    { id: 'western', name: 'Western', icon: <ShoppingBag size={24} /> },
    { id: 'traditional', name: 'Traditional', icon: <Shirt size={24} /> },
    { id: 'indo-western', name: 'Indo-Western', icon: <Scissors size={24} /> },
    { id: 'formal', name: 'Formal', icon: <Briefcase size={24} /> },
    { id: 'casual', name: 'Casual', icon: <Shirt size={24} /> },
    { id: 'bohemian', name: 'Bohemian', icon: <Feather size={24} /> }
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

// Color Preference Component
function ColorPreferenceSelection({ onSelect }) {
  return (
    <div className="color-preference-screen">
      <h2 className="gradient-text">Choose Your Color Palette</h2>
      <p>Select colors that complement your skin tone.</p>
      
      <div className="color-options">
        <div 
          className="color-option-card"
          onClick={() => onSelect('warm')}
          style={{background: 'linear-gradient(to right, #ff9966, #ff5e62)'}}
        >
          <h3>Warm Colors</h3>
          <p>Reds, oranges, yellows, amber, gold</p>
        </div>
        
        <div 
          className="color-option-card"
          onClick={() => onSelect('cool')}
          style={{background: 'linear-gradient(to right, #4facfe, #00f2fe)'}}
        >
          <h3>Cool Colors</h3>
          <p>Blues, purples, greens, silver, cool pinks</p>
        </div>
        
        <div 
          className="color-option-card"
          onClick={() => onSelect('neutral')}
          style={{background: 'linear-gradient(to right, #E0E0E0, #BDBDBD)'}}
        >
          <h3>Neutral Colors</h3>
          <p>Black, white, gray, beige, navy</p>
        </div>
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
          <div className="budget-icon"><Wallet size={24} /></div>
          <h3>Budget</h3>
          <p>Around ₹1000</p>
        </div>
        
        <div 
          className={`budget-range-card ${range === 'medium' ? 'selected' : ''}`}
          onClick={() => handleRangeSelect('medium')}
        >
          <div className="budget-icon"><Wallet size={24} /></div>
          <h3>Medium</h3>
          <p>Around ₹3000</p>
        </div>
        
        <div 
          className={`budget-range-card ${range === 'high' ? 'selected' : ''}`}
          onClick={() => handleRangeSelect('high')}
        >
          <div className="budget-icon"><CreditCard size={24} /></div>
          <h3>High</h3>
          <p>Around ₹5000</p>
        </div>
        
        <div 
          className={`budget-range-card ${range === 'premium' ? 'selected' : ''}`}
          onClick={() => handleRangeSelect('premium')}
        >
          <div className="budget-icon"><Diamond size={24} /></div>
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
          <div className="outfit-type-icon"><Layers size={24} /></div>
          <h3>Complete Outfit</h3>
          <p>Get recommendations for a full head-to-toe look</p>
        </div>
        
        <div 
          className="outfit-type-card"
          onClick={() => onSelect('specific')}
        >
          <div className="outfit-type-icon"><ShoppingBag size={24} /></div>
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
    { id: 'tops', name: 'Tops', icon: <Shirt size={24} /> },
    { id: 'bottoms', name: 'Bottoms', icon: <Landmark size={24} /> },
    { id: 'dresses', name: 'Dresses', icon: <Shirt size={24} /> },
    { id: 'footwear', name: 'Footwear', icon: <Footprints size={24} /> },
    { id: 'accessories', name: 'Accessories', icon: <Glasses size={24} /> },
    { id: 'jewelry', name: 'Jewelry', icon: <Diamond size={24} /> },
    { id: 'outerwear', name: 'Outerwear', icon: <Shirt size={24} /> }
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

// Item Recommendation Component
function ItemRecommendations({ items, type, onSelect }) {
  return (
    <div className="recommendations-screen">
      <h2 className="gradient-text">Recommended {type}</h2>
      <p>Based on your preferences, we think these would look great on you!</p>
      
      <div className="recommendation-grid">
        {items.map(item => (
          <div 
            key={item.id}
            className="recommendation-card"
            onClick={() => onSelect(item)}
          >
            <div className="recommendation-image">
              <img 
                src={item.image || "/api/placeholder/300/400"} 
                alt={item.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x400?text=Fashion+Item";
                }}
              />
            </div>
            <div className="recommendation-details">
              <h3>{item.name}</h3>
              <p className="recommendation-price">₹{item.price}</p>
              <div className="recommendation-tags">
                <span className="recommendation-tag">{item.style}</span>
                <span className="recommendation-tag">{item.color}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="recommendation-actions">
        <button className="primary-button">Show More Options</button>
      </div>
    </div>
  );
}

// Final Outfit Component
function FinalOutfit({ outfit, skinTone, bodyType, onStartOver }) {
  return (
    <div className="final-outfit-screen">
      <h2 className="gradient-text">Your Perfect Outfit</h2>
      
      <div className="outfit-summary">
        <div className="outfit-details">
          <h3>Style Profile</h3>
          <div className="profile-item">
            <span className="profile-label">Skin Tone:</span>
            <span className="profile-value">{skinTone}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Body Type:</span>
            <span className="profile-value">{bodyType}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Total Price:</span>
            <span className="profile-value">₹{outfit.totalPrice}</span>
          </div>
        </div>
        
        <div className="outfit-items">
          {outfit.items.map(item => (
            <div key={item.id} className="outfit-item">
              <div className="outfit-item-image">
                <img 
                  src={item.image || "/api/placeholder/150/200"} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150x200?text=Item";
                  }}
                />
              </div>
              <div className="outfit-item-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="shopping-links">
        <h3>Shop this look at:</h3>
        <div className="shop-buttons">
          <a 
            href="https://amazon.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shop-button"
          >
            Amazon
          </a>
          <a 
            href="https://flipkart.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shop-button"
          >
            Flipkart
          </a>
          <a 
            href="https://meesho.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shop-button"
          >
            Meesho
          </a>
        </div>
      </div>
      
      <div className="final-actions">
        <button className="primary-button" onClick={onStartOver}>
          Start Over
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
  const [showCalculator, setShowCalculator] = useState(false);
  
  const [season, setSeason] = useState(null);
  const [occasion, setOccasion] = useState(null);
  const [style, setStyle] = useState(null);
  const [colorPreference, setColorPreference] = useState(null);
  const [budget, setBudget] = useState(null);
  const [outfitType, setOutfitType] = useState(null);
  const [specificItem, setSpecificItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});
  const [showCalculatorReminder, setShowCalculatorReminder] = useState(false);
  
  const bodyTypeIcons = {
    'pear': Triangle,
    'apple': Circle,
    'rectangle': Square,
    'hourglass': Hourglass,
    'inverted-triangle': ChevronUp,
    'oval': Circle,
    'trapezoid': ChevronUp,
};
  const handleCapture = (imageData) => {
    setCapturedImage(imageData);
    setStep('analysis');
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    recommender.setGender(selectedGender);
  };
  
  const handleGenderContinue = () => {
    // Skip photo option, go straight to camera
    setStep('camera');
  };
  
  const handleBodyTypeSelect = (selectedBodyType) => {
    setBodyType(selectedBodyType);
    recommender.setBodyType(selectedBodyType);
    setShowCalculatorReminder(true);
    setTimeout(() => {
      setShowCalculatorReminder(false);
      setStep('confirmation');
    }, 3000);
  };
  
  const handleOpenCalculator = () => {
    setShowCalculator(true);
  };

  const handleCloseCalculator = () => {
    setShowCalculator(false);
  };
  const handleCalculatorOpen = () => {
    setShowCalculator(true);
  };
  

  const handleVideoLink = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };
  useEffect(() => {
    const handleOpenVideoEvent = () => {
      handleVideoLink();
    };

    const handleOpenCalculatorEvent = () => {
      handleCalculatorOpen();
    };

    document.addEventListener('openVideo', handleOpenVideoEvent);
    document.addEventListener('openCalculator', handleOpenCalculatorEvent);

    return () => {
      document.removeEventListener('openVideo', handleOpenVideoEvent);
      document.removeEventListener('openCalculator', handleOpenCalculatorEvent);
    };
  }, []);
  const handleCalculatorResult = (result) => {
    setBodyType(result);
    setShowCalculator(false);
    // Show a message that body type has been calculated
    console.log('Calculator result: ', result);
    setShowCalculatorReminder(true);
    setTimeout(() => {
      setShowCalculatorReminder(false);
      setStep('confirmation');
    }, 3000);
  };
  
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleOpenVideoEvent = () => {
      handleVideoLink();
    };

    const handleOpenCalculatorEvent = () => {
      handleCalculatorOpen();
    };

    document.addEventListener('openVideo', handleOpenVideoEvent);
    document.addEventListener('openCalculator', handleOpenCalculatorEvent);

    return () => {
      document.removeEventListener('openVideo', handleOpenVideoEvent);
      document.removeEventListener('openCalculator', handleOpenCalculatorEvent);
    };
  }, []);
  
  
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
      // Go directly to camera instead of photo option
      setStep('camera'); 
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
    setStep('colorPreference');
  };
  
  const handleColorPreferenceSelect = (selected) => {
    setColorPreference(selected);
    recommender.setColorPalette(selected);
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
      // Get recommendations for a full outfit
      const recommendations = recommender.getRecommendedItems('outfit');
      setSelectedItems({ fullOutfit: recommendations[0] });
      setStep('results');
    } else {
      setStep('specificItem');
    }
  };
  
  const handleSpecificItemSelect = (item) => {
    setSpecificItem(item);
    // Get recommendations for this specific item type
    const recommendations = recommender.getRecommendedItems(item);
    setSelectedItems({ specificType: item, items: recommendations });
    setStep('itemRecommendations');
  };
  
  const handleItemSelect = (item) => {
    setSelectedItems(prev => ({
      ...prev,
      [specificItem]: item
    }));
    
    // Ask if they want to select another item
    if (specificItem === 'tops') {
      // Recommend bottoms to go with the top
      const bottomRecommendations = recommender.getCompatibleItems('bottom', item);
      setSelectedItems(prev => ({
        ...prev,
        bottomRecommendations
      }));
      setStep('bottomRecommendations');
    } else {
      setStep('results');
    }
  };
  
  const handleBottomSelect = (item) => {
    setSelectedItems(prev => ({
      ...prev,
      bottoms: item
    }));
    setStep('results');
  };
  
  const handleStartOver = () => {
    setStep('welcome');
    setCapturedImage(null);
    setGender(null);
    setBodyType(null);
    setSeason(null);
    setOccasion(null);
    setStyle(null);
    setColorPreference(null);
    setBudget(null);
    setOutfitType(null);
    setSpecificItem(null);
    setSelectedItems({});
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

  const getGreeting = () => {
    if (gender === 'female') {
      return "Hello Beautiful!";
    } else if (gender === 'male') {
      return "Hello Handsome!";
    } else {
      return "Hello there!";
    }
  };

  

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
            <button onClick={() => setIsOpen(false)} className="close-button"><X size={24} /></button>
          </div>
          
          {/* Welcome/greeting message */}
          {step === 'welcome' && (
            <div className="chatbot-greeting">
              <h2>{getGreeting()}</h2>
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
                Let's Begin! <ArrowRight size={16} />
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
            
            {step === 'camera' && (
              <div className="camera-screen">
                <h2 className="gradient-text">Take a Photo</h2>
                <p>For the best skin tone analysis, take a clear photo in good lighting without makeup.</p>

                <CameraCapture 
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
              <button 
                  className="primary-button" 
                  onClick={() => setStep('bodyType')}
              >
              Continue <ArrowRight size={16} />
              </button>
              <button 
              className="secondary-button" 
              onClick={() => setStep('camera')}
              >
              Retake Photo <Camera size={16} />
             </button>
            </div>
          </div>
           )}


        {step === 'bodyType' && (
         <BodyTypeSelector
          gender={gender}
          onSelect={handleBodyTypeSelect}
         >
      <div>
        
        {showCalculator && <CalculatorPage onClose={handleCloseCalculator} />}
      </div>
      </BodyTypeSelector>
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
          <div>
      
      {showCalculator && (
        <CalculatorPage 
        onClose={handleCloseCalculator}
        onCalculate={handleCalculatorResult}
        />
      )}
    </div>
          {showVideo && (
            <div className="video-full-page">
            <div className="video-box">
             <div className="video-container">
                <YouTubeVideoPlayer
                    videoId="420TbEabNzY"
                    onClose={handleCloseVideo}
                    onOpenCalculator={handleCalculatorOpen}
                />
            </div>
            <div className="video-message">
                <div>How to Measure Your Body</div>
                <div>After watching this video, you'll know exactly how to take the correct measurements for your body type.</div>
                <button onClick={handleCalculatorOpen}>
                    <Calculator size={20} /> Open Body Shape Calculator
                </button>
                <button onClick={handleCloseVideo}>Close Video</button>
            </div>
            <button onClick={handleCloseVideo} className="video-close">
                <X size={24} />
            </button>
          </div>
          </div>
           )}
            
            {
    step === 'confirmation' && (
        <div className="confirmation-screen">
            <h2 className="gradient-text">Confirm Body Shape Selection</h2>
            <p>Would you like to proceed with the automatic result or select manually?</p>

            <div className="info-summary">
                <div className="info-item">
                    <h3>Body Type:</h3>
                    <div className="body-type-chip">
                        {bodyType ? (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {React.createElement(bodyTypeIcons[bodyType.split('-')[0]], { size: 30 })}
                                <span style={{ marginLeft: '10px' }}>
                                    {bodyType.split('-')[0].charAt(0).toUpperCase() + bodyType.split('-')[0].slice(1)}
                                </span>
                            </div>
                        ) : (
                            'Not specified'
                        )}
                    </div>
                </div>
            </div>

            <div className="action-buttons">
                <button className="secondary-button" onClick={() => setStep('bodyType')}>
                    Manual Selection
                </button>
                <button className="primary-button" onClick={() => handleConfirmation(true)}>
                    Automatic Result
                </button>
            </div>
        </div>
    )
}
            {step === 'editInfo' && (
              <div className="edit-info-screen">
                <h2 className="gradient-text">What would you like to change?</h2>
                
                <div className="edit-options">
                  <div className="edit-option-card" onClick={() => handleEditInfo('skinTone')}>
                    <div className="edit-icon"><Palette size={24} /></div>
                    <h3>Change Skin Tone</h3>
                    <p>Take a new photo with the camera</p>
                  </div>
                  
                  <div className="edit-option-card" onClick={() => handleEditInfo('bodyType')}>
                    <div className="edit-icon"><Ruler size={24} /></div>
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
            
            {step === 'colorPreference' && (
              <ColorPreferenceSelection onSelect={handleColorPreferenceSelect} />
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
            
            {step === 'itemRecommendations' && selectedItems.items && (
              <ItemRecommendations 
                items={selectedItems.items}
                type={specificItem}
                onSelect={handleItemSelect}
              />
            )}
            
            {step === 'bottomRecommendations' && selectedItems.bottomRecommendations && (
              <ItemRecommendations 
                items={selectedItems.bottomRecommendations}
                type="bottoms"
                onSelect={handleBottomSelect}
              />
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
                    
                    <div className="result-item">
                      <h3>Occasion</h3>
                      <div className="occasion-result">
                        {occasion ? occasion.charAt(0).toUpperCase() + occasion.slice(1) : 'Casual'}
                      </div>
                    </div>
                    
                    <div className="result-item">
                      <h3>Budget</h3>
                      <div className="budget-result">
                        ₹{budget ? budget.amount : '3000'} ({budget ? budget.range : 'medium'})
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
                    <div className="color-chip" style={{backgroundColor: '#8B4513'}}>
                      <span className="color-name">Brown</span>
                    </div>
                    <div className="color-chip" style={{backgroundColor: '#228B22'}}>
                      <span className="color-name">Forest Green</span>
                    </div>
                    <div className="color-chip" style={{backgroundColor: '#CD5C5C'}}>
                      <span className="color-name">Indian Red</span>
                    </div>
                    <div className="color-chip" style={{backgroundColor: '#E3963E'}}>
                      <span className="color-name">Amber</span>
                    </div>
                  </div>
                </div>
                
                {/* Display selected items or outfit */}
                <div className="outfit-container">
                  <h3>Selected Items</h3>
                  
                  {outfitType === 'full' ? (
                    <div className="full-outfit">
                      <img 
                        src="/api/placeholder/500/600"
                        alt="Full outfit"
                        className="outfit-image"
                      />
                      <div className="outfit-details">
                        <h4>Complete Outfit</h4>
                        <p>Price: ₹5999</p>
                        <div className="shop-links">
                          <a href="https://amazon.in" target="_blank" rel="noopener noreferrer">Amazon</a>
                          <a href="https://flipkart.com" target="_blank" rel="noopener noreferrer">Flipkart</a>
                          <a href="https://meesho.com" target="_blank" rel="noopener noreferrer">Meesho</a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="specific-items">
                      {selectedItems.tops && (
                        <div className="selected-item">
                          <img 
                            src={selectedItems.tops.image || "/api/placeholder/200/250"}
                            alt={selectedItems.tops.name}
                            className="item-image"
                          />
                          <div className="item-details">
                            <h4>Top: {selectedItems.tops.name}</h4>
                            <p>Price: ₹{selectedItems.tops.price}</p>
                          </div>
                        </div>
                      )}
                      
                      {selectedItems.bottoms && (
                        <div className="selected-item">
                          <img 
                            src={selectedItems.bottoms.image || "/api/placeholder/200/250"}
                            alt={selectedItems.bottoms.name}
                            className="item-image"
                          />
                          <div className="item-details">
                            <h4>Bottom: {selectedItems.bottoms.name}</h4>
                            <p>Price: ₹{selectedItems.bottoms.price}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="virtual-try-on">
                  <h3>Want to see how it looks?</h3>
                  <button className="primary-button">
                    Virtual Try-On <Camera size={16} />
                  </button>
                </div>
                
                <div className="results-actions">
                  <button className="primary-button" onClick={() => setStep('welcome')}>
                    Start Over <RefreshCw size={16} />
                  </button>
                  <button className="secondary-button" onClick={() => handleEditInfo('skinTone')}>
                    Change Skin Tone <Palette size={16} />
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