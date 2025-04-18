import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import RecommendationEngine from './utils/RecommendationEngine';
import BodyTypeSelector from './components/steps/BodyTypeSelection';
import BodyShapeCalculator from './components/BodyShapeCalculator';
import Welcome from './components/steps/Welcome';
import YouTubeVideoPlayer from './components/YouTubeVideoPlayer';
import { useChatbot } from './context/ChatbotContext';
import CalculatorPage from './components/CalculatorPage';
import OutfitRecommendationPage from './components/OutfitRecommendationPage';
import femaleOutfits from './data/femaleOutfits';
import ReactConfetti from 'react-confetti';
import DynamicOutfitSuggestions from './components/DynamicOutfitSuggestions';

import {
    Camera, X, ArrowRight, Info, AlertCircle, Flower, Sun, Leaf,
    Snowflake, RefreshCw, Shirt, Briefcase, Sparkles, Heart,
    Music, Landmark, Palmtree, ShoppingBag, Scissors,
    Feather, Wallet, CreditCard, Diamond, Layers, Square, Triangle,
    Footprints, Glasses, Palette, Ruler, Calculator, ChevronUp, Circle, Hourglass
} from 'lucide-react';

// CameraCapture Component (unchanged)
function CameraCapture({ onCapture, onCancel }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(document.createElement('canvas'));
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

        const canvas = canvasRef.current;
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

// Gender Selection Component (unchanged)
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
                    style={{ cursor: selectedGender ? 'pointer' : 'not-allowed' }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

// Season Selection Component (unchanged)
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

// Occasion Selection Component (unchanged)
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

// Style Selection Component (unchanged)
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

// Color Preference Component (unchanged)
function ColorPreferenceSelection({ onSelect }) {
    return (
        <div className="color-preference-screen">
            <h2 className="gradient-text">Choose Your Color Palette</h2>
            <p>Select colors that complement your skin tone.</p>

            <div className="color-options">
                <div
                    className="color-option-card"
                    onClick={() => onSelect('warm')}
                    style={{ background: 'linear-gradient(to right, #ff9966, #ff5e62)' }}
                >
                    <h3>Warm Colors</h3>
                    <p>Reds, oranges, yellows, amber, gold</p>
                </div>

                <div
                    className="color-option-card"
                    onClick={() => onSelect('cool')}
                    style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)' }}
                >
                    <h3>Cool Colors</h3>
                    <p>Blues, purples, greens, silver, cool pinks</p>
                </div>

                <div
                    className="color-option-card"
                    onClick={() => onSelect('neutral')}
                    style={{ background: 'linear-gradient(to right, #E0E0E0, #BDBDBD)' }}
                >
                    <h3>Neutral Colors</h3>
                    <p>Black, white, gray, beige, navy</p>
                </div>
            </div>
        </div>
    );
}

// Budget Input Component (unchanged)
function BudgetInput({ onSubmit }) {
    const [budget, setBudget] = useState("");
    const [range, setRange] = useState("");

    const handleRangeSelect = (selectedRange) => {
        setRange(selectedRange);

        // Set default budget based on range
        switch (selectedRange) {
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

// Outfit Type Selection Component (unchanged)
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

// Main App Component
function App() {
    const [recommender] = useState(new RecommendationEngine());
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState('welcome');
    const [capturedImage, setCapturedImage] = useState(null);
    const [gender, setGender] = useState(null);
    const [bodyType, setBodyType] = useState(null);
    const [outfitDisplayCount, setOutfitDisplayCount] = useState(3);
    const [season, setSeason] = useState(null);
    const [occasion, setOccasion] = useState(null);
    const [style, setStyle] = useState(null);
    const [colorPreference, setColorPreference] = useState("warm");
    const [budget, setBudget] = useState(null);
    const [outfitType, setOutfitType] = useState(null);
    const [specificItem, setSpecificItem] = useState(null);
    const [selectedItems, setSelectedItems] = useState({});
    const [showCalculatorReminder, setShowCalculatorReminder] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [videoId, setVideoId] = useState("420TbEabNzY");
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [showOutfitPage, setShowOutfitPage] = useState(false);
    const [showOutfitModal, setShowOutfitModal] = useState(false);
    const [selectedOutfit, setSelectedOutfit] = useState(null);
    const [skinToneInfo, setSkinToneInfo] = useState({
        name: "Warm Medium",
        hex: "#D4A76A",
        colorType: "warm",
        description: "A beautiful warm undertone with golden highlights"
    });
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const bodyTypeIcons = {
        'pear': Triangle,
        'apple': Circle,
        'rectangle': Square,
        'hourglass': Hourglass,
        'inverted-triangle': ChevronUp,
        'oval': Circle,
        'trapezoid': ChevronUp,
    };

    // Function to filter outfits based on user preferences
    const getFilteredOutfits = () => {
        return femaleOutfits.filter(outfit => {
            // Filter by gender
            if (gender && outfit.gender !== gender) {
                return false;
            }

            // Filter by budget (if specified)
            if (budget && budget.amount && outfit.price > parseInt(budget.amount)) {
                return false;
            }

            // Filter by occasion if specified
            if (occasion && outfit.occasions && !outfit.occasions.includes(occasion)) {
                return false;
            }

            // Filter by body type if specified
            if (bodyType && outfit.bodyTypes && !outfit.bodyTypes.includes(bodyType.split('-')[0])) {
                return false;
            }

            // Filter by color type based on skin tone
            if (colorPreference && outfit.colorType && outfit.colorType !== colorPreference) {
                return false;
            }

            return true;
        });
    };

    const handleOutfitSelect = (outfit) => {
        setSelectedOutfit(outfit);
        setShowOutfitModal(true);
    };

    // Function to convert base64 to blob for file upload
    const dataURLtoBlob = (dataURL) => {
        const parts = dataURL.split(';base64,');
        const contentType = parts[0].split(':')[1];
        const raw = window.atob(parts[1]);
        const uInt8Array = new Uint8Array(raw.length);

        for (let i = 0; i < raw.length; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], { type: contentType });
    };

    // Skin tone mapping table
    const skinToneMapping = {
        "Fair": {
            name: "Fair",
            hex: "#F8D5C2", 
            colorType: "light", 
            description: "A light skin tone"
        },
        "Light Brown": {
            name: "Light Brown",
            hex: "#C68642",
            colorType: "warm", 
            description: "A light brown skin tone"
        },
        "Medium Brown": {
            name: "Medium Brown",
            hex: "#A06540", 
            colorType: "warm",
            description: "A medium brown skin tone"
        },
        "Ebony": {
            name: "Ebony",
            hex: "#7B625C", 
            colorType: "deep", 
            description: "A very dark brown skin tone"
        },
        "Tan": {
            name: "Tan",
            hex: "#D4A76A",
            colorType: "warm",
            description: "A tan skin tone"
        },
        "Deep Dark": {
            name: "Deep Dark",
            hex: "#3D2B28",
            colorType: "deep", 
            description: "A deep, dark skin tone"
        },
        "Dark Brown": {
            name: "Dark Brown",
            hex: "#5C3821",
            colorType: "warm",
            description: "A dark brown skin tone"
        },
        "Rich Dark": {
            name: "Rich Dark",
            hex: "#4A3C39", 
            colorType: "deep", 
            description: "A rich, dark skin tone"
        }
    };

    const performSkinToneAnalysis = async (imageData) => {
        try {
            setIsAnalyzing(true);

            // Extract the base64 data from the dataURL
            const imageBlob = dataURLtoBlob(imageData);

            // Create FormData to send the image
            const formData = new FormData();
            formData.append('image', imageBlob);

            // Call your Flask API endpoint
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("API Response:", result);

            // Get the predicted skin tone
            const predictedTone = result.predicted_skin_tone;
            console.log("Predicted skin tone:", predictedTone);

            // Use the mapping to get detailed skin tone info
            const toneInfo = skinToneMapping[predictedTone] || {
                name: "Warm Medium",
                hex: "#D4A76A",
                colorType: "warm",
                description: "A beautiful warm undertone with golden highlights"
            };

            // Update skin tone info
            setSkinToneInfo({
                name: toneInfo.name,
                hex: toneInfo.hex,
                colorType: toneInfo.colorType,
                description: toneInfo.description
            });

            // Update color preference based on detected tone
            setColorPreference(toneInfo.colorType);

            // Proceed to next step
            setStep('analysis');
        } catch (error) {
            console.error("Error analyzing skin tone:", error);
            // Fall back to default if API call fails
            setSkinToneInfo({
                name: "Warm Medium",
                hex: "#D4A76A",
                colorType: "warm",
                description: "A beautiful warm undertone with golden highlights"
            });
            setStep('analysis');
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleCapture = (imageData) => {
        setCapturedImage(imageData);
        performSkinToneAnalysis(imageData);
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
        setShowVideo(false);
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

    const handleOpenVideo = (id = "420TbEabNzY") => {
        setShowCalculator(false); // Close calculator if open
        if (id) setVideoId(id);
        setShowVideo(true);
    };

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
                    <img src="/chatbot-logo.png" alt="HueMate" onError={(e) => { e.target.src = "/chatbot-logo.png"; }} />
                </div>
            </button>

            {isOpen && (
                <div className="chatbot-fullscreen">
                    <div className="chatbot-header">
                        <div className="header-logo">
                            <img src="/chatbot-logo.png" alt="HueMate" className="header-logo-image" onError={(e) => { e.target.src = "/chatbot-logo.png"; }} />
                        </div>
                        <h1>HueMate - Your Perfect Shade, Every Time</h1>
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
                                {isAnalyzing && (
                                    <div className="analyzing-overlay">
                                        <div className="spinner"></div>
                                        <p>Analyzing your skin tone...</p>
                                    </div>
                                )}
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
                                            <div className="color-circle" style={{ backgroundColor: skinToneInfo.hex }}>
                                                <span className="hex-code">{skinToneInfo.hex}</span>
                                            </div>
                                            <div className="tone-info">
                                                <h3 className="tone-name">{skinToneInfo.name}</h3>
                                                <p className="tone-description">{skinToneInfo.description}</p>
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
                                onOpenCalculator={handleOpenCalculator}
                                onOpenVideo={handleOpenVideo}
                            />
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
                                <BodyShapeCalculator
                                    gender={gender || 'female'}
                                    onCalculate={(result) => {
                                        setBodyType(result); // Assuming you have this state
                                        setShowCalculator(false);
                                    }}
                                    onClose={handleCloseCalculator}
                                    onOpenVideo={handleOpenVideo}
                                />
                            )}
                            {showVideo && (
                                <YouTubeVideoPlayer
                                    videoId={videoId}
                                    onClose={handleCloseVideo}
                                    onOpenCalculator={handleCalculatorOpen}
                                />
                            )}



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
          <div className="tone-chip" style={{ backgroundColor: skinToneInfo.hex }}>
            {skinToneInfo.name} <span className="hex-small">{skinToneInfo.hex}</span>
          </div>
        </div>
        
        <div className="result-item">
          <h3>Body Type</h3>
          <div className="body-type-result">
            {bodyType ? bodyType.split('-')[0].charAt(0).toUpperCase() + bodyType.split('-')[0].slice(1) : 'Pear'}
          </div>
        </div>
        
        <div className="result-item">
          <h3>Occasion</h3>
          <div className="occasion-result">
            {occasion ? occasion.charAt(0).toUpperCase() + occasion.slice(1) : 'Work'}
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
    
    {/* Replace the static outfit grid with DynamicOutfitSuggestions component */}
    <DynamicOutfitSuggestions
      gender={gender}
      skinTone={skinToneInfo.name.toLowerCase()}
      bodyType={bodyType}
      budget={budget}
      occasion={occasion}
      style={style}
      colorPreference={colorPreference}
      onOutfitSelect={handleOutfitSelect}
    />
    
    <div className="results-actions">
      <button className="primary-button" onClick={() => setStep('welcome')}>
        Start Over <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"></path></svg>
      </button>
      <button className="secondary-button" onClick={() => handleEditInfo('skinTone')}>
        Change Skin Tone <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
      </button>
    </div>
  </div>
             )}

                        {selectedOutfit && (
                            <div className="selected-outfit-overlay">
                                {/* Add confetti effect that automatically stops after a few seconds */}
                                <ReactConfetti
                                    width={window.innerWidth}
                                    height={window.innerHeight}
                                    recycle={false}
                                    numberOfPieces={200}
                                    tweenDuration={10000}
                                />

                                <div className="selected-outfit-modal">
                                    <button className="close-button" onClick={() => setSelectedOutfit(null)}>×</button>

                                    {/* Add Great Choice! heading */}
                                    <div className="great-choice-heading">
                                        <h1>Great Choice!</h1>
                                    </div>

                                    <div className="selected-outfit-content">
                                        <div className="selected-outfit-image">
                                            <img
                                                src={selectedOutfit.image}
                                                alt={selectedOutfit.name}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/400x600?text=Outfit+Image";
                                                }}
                                            />
                                        </div>

                                        <div className="selected-outfit-details">
                                            <h3>You've Selected</h3>
                                            <h2>{selectedOutfit.name}</h2>

                                            <div className="outfit-specs">
                                                <div className="spec-item">
                                                    <span className="spec-label">Price:</span>
                                                    <span className="spec-value">₹{selectedOutfit.price}</span>
                                                </div>

                                                <div className="spec-item">
                                                    <span className="spec-label">Style:</span>
                                                    <span className="spec-value">{selectedOutfit.style || "Traditional"}</span>
                                                </div>

                                                <div className="spec-item">
                                                    <span className="spec-label">Occasion:</span>
                                                    <span className="spec-value">{selectedOutfit.occasions?.[0] || "Formal"}</span>
                                                </div>

                                                <div className="spec-item">
                                                    <span className="spec-label">Body Type:</span>
                                                    <span className="spec-value">{selectedOutfit.bodyTypes?.join(', ') || "All body types"}</span>
                                                </div>
                                            </div>

                                            <p className="outfit-description">
                                                {selectedOutfit.description || `A beautiful ${selectedOutfit.name} perfect for special occasions. This outfit complements your skin tone and body type.`}
                                            </p>

                                            <div className="outfit-actions">
                                                <a
                                                    href={selectedOutfit.shopLinks?.flipkart || "https://flipkart.com"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shop-now-button"
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
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