import React, { useState } from 'react';

const ResultsScreen = ({ formData, userImage, recommendations, onReset }) => {
  const { gender, skinTone, bodyType, season, occasion, style, budget } = formData;
  const [activeTab, setActiveTab] = useState('recommendations');
  
  // Helper function to get body type name
  const getBodyTypeName = () => {
    if (!bodyType) return '';
    
    // Extract name portion from ID
    const baseName = bodyType.split('-')[0];
    return baseName.charAt(0).toUpperCase() + baseName.slice(1);
  };
  
  // Generate color palette based on skin tone
  const getRecommendedColors = () => {
    if (skinTone === 'warm') {
      return [
        { color: '#D4A76A', name: 'Gold' },
        { color: '#8B4513', name: 'Saddle Brown' },
        { color: '#CD5C5C', name: 'Indian Red' },
        { color: '#DAA520', name: 'Goldenrod' },
      ];
    } else if (skinTone === 'cool') {
      return [
        { color: '#4682B4', name: 'Steel Blue' },
        { color: '#800080', name: 'Purple' },
        { color: '#2E8B57', name: 'Sea Green' },
        { color: '#DB7093', name: 'Pale Violet Red' },
      ];
    } else if (skinTone === 'neutral') {
      return [
        { color: '#708090', name: 'Slate Gray' },
        { color: '#556B2F', name: 'Olive' },
        { color: '#8FBC8F', name: 'Dark Sea Green' },
        { color: '#BC8F8F', name: 'Rosy Brown' },
      ];
    } else {
      return [
        { color: '#D4A76A', name: 'Gold' },
        { color: '#4682B4', name: 'Steel Blue' },
        { color: '#BC8F8F', name: 'Rosy Brown' },
        { color: '#556B2F', name: 'Olive' },
      ];
    }
  };
  
  const recommendedColors = getRecommendedColors();
  
  // Generate clothing recommendations based on body type
  const getBodyTypeRecommendations = () => {
    if (bodyType) {
      if (bodyType.includes('hourglass')) {
        return [
          "Fitted dresses that accentuate your waist",
          "Wrap dresses and tops",
          "High-waisted bottoms",
          "V-neck and scoop necklines",
          "Belted outfits to emphasize your waist"
        ];
      } else if (bodyType.includes('pear')) {
        return [
          "A-line skirts and dresses",
          "Boat neck and cowl tops to balance proportions",
          "Structured jackets that hit at the hip",
          "Wide-leg pants",
          "Statement tops with detail to draw attention upward"
        ];
      } else if (bodyType.includes('rectangle')) {
        return [
          "Peplum tops to create waist definition",
          "Belted dresses and tops",
          "Layered clothing to add dimension",
          "Tops with ruffles or embellishments",
          "Jackets that nip in at the waist"
        ];
      } else if (bodyType.includes('apple') || bodyType.includes('oval')) {
        return [
          "Empire waist dresses and tops",
          "V-neck or scoop necklines to elongate",
          "Flowy fabrics that don't cling",
          "A-line dresses that flow from the bust",
          "Structured jackets to create shape"
        ];
      } else if (bodyType.includes('inverted-triangle')) {
        return [
          "Full or A-line skirts to balance proportions",
          "Wide-leg pants to balance shoulders",
          "Scoop and round necklines",
          "Clothing that creates volume at the hips",
          "Detailed bottoms to draw attention downward"
        ];
      } else if (bodyType.includes('trapezoid')) {
        return [
          "Tapered or slim-fit pants",
          "Structured jackets",
          "V-neck shirts to elongate the torso",
          "Layered tops for added dimension",
          "Mid-rise pants that sit comfortably at the waist"
        ];
      } else if (bodyType.includes('triangle')) {
        return [
          "Structured or padded shoulders",
          "Patterns and details on upper body",
          "Layered tops to add dimension",
          "Straight or slim-leg pants",
          "Jackets with structured shoulders"
        ];
      } else {
        return [
          "Balanced proportions with well-fitted clothing",
          "Layering to create visual interest",
          "Clothes that highlight your best features",
          "Well-tailored garments for a polished look",
          "Experiment with different silhouettes to find what feels best"
        ];
      }
    }
    
    return [];
  };
  
  const bodyTypeRecommendations = getBodyTypeRecommendations();

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6 text-center">
        Your Personal Style Profile
      </h2>
      
      {/* Profile summary */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500/50 flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            {userImage && <img src={userImage} alt="You" className="w-full h-full object-cover" />}
          </div>
          
          <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Body Type */}
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <h3 className="text-xs uppercase tracking-wider text-white/70 mb-1">Body Type</h3>
              <p className="font-medium text-amber-400">{getBodyTypeName()}</p>
            </div>
            
            {/* Skin Tone */}
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <h3 className="text-xs uppercase tracking-wider text-white/70 mb-1">Skin Tone</h3>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: recommendedColors[0].color }}></div>
                <p className="font-medium">{skinTone || "Warm"}</p>
              </div>
            </div>
            
            {/* Style */}
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <h3 className="text-xs uppercase tracking-wider text-white/70 mb-1">Style</h3>
              <p className="font-medium capitalize">{style || "Casual"}</p>
            </div>
            
            {/* Season */}
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <h3 className="text-xs uppercase tracking-wider text-white/70 mb-1">Season</h3>
              <p className="font-medium capitalize">{season || "All Seasons"}</p>
            </div>
            
            {/* Occasion */}
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <h3 className="text-xs uppercase tracking-wider text-white/70 mb-1">Occasion</h3>
              <p className="font-medium capitalize">{occasion || "Casual"}</p>
            </div>
            
            {/* Budget */}
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <h3 className="text-xs uppercase tracking-wider text-white/70 mb-1">Budget</h3>
              <p className="font-medium">₹{budget || "Not specified"}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-6">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'recommendations' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-white/70 hover:text-white'}`}
          onClick={() => setActiveTab('recommendations')}
        >
          Outfit Recommendations
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'colors' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-white/70 hover:text-white'}`}
          onClick={() => setActiveTab('colors')}
        >
          Color Palette
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'tips' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-white/70 hover:text-white'}`}
          onClick={() => setActiveTab('tips')}
        >
          Style Tips
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="mb-10">
        {/* Recommendations Tab */}
        {activeTab === 'recommendations' && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-medium mb-6 text-center">Recommended Outfits For You</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recommendations && recommendations.length > 0 ? (
                recommendations.map((outfit, index) => (
                  <div key={index} className="bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden transition-all hover:-translate-y-1">
                    <div className="h-56 bg-gray-800 flex items-center justify-center">
                      {outfit.imageUrl ? (
                        <img src={outfit.imageUrl} alt={outfit.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-white/30 text-lg">Outfit Image</div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-lg mb-1">{outfit.name || `Outfit ${index + 1}`}</h4>
                      <p className="text-white/70 text-sm mb-2">{outfit.description || `Perfect for ${occasion || 'casual'} occasions`}</p>
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-amber-400">₹{outfit.price || (1499 * (index + 1))}</p>
                        <button className="text-sm bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 transition-colors">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-10 bg-white/5 rounded-xl">
                  <p className="text-white/70">Based on your preferences, we recommend:</p>
                  <ul className="mt-4 space-y-2">
                    <li> A fitted {style || 'casual'} outfit in {recommendedColors[0].name.toLowerCase()} or {recommendedColors[1].name.toLowerCase()}</li>
                    <li>{gender === 'female' ? 'A stylish dress' : 'A well-tailored shirt'} that accentuates your {bodyType ? getBodyTypeName().toLowerCase() : ''} body type</li>
                    <li>Accessories in complementary colors to complete your look</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-medium mb-6 text-center">Your Personalized Color Palette</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="font-medium mb-4 text-center">Recommended Colors</h4>
                <div className="grid grid-cols-2 gap-4">
                  {recommendedColors.map((color, index) => (
                    <div key={index} className="flex items-center p-2 bg-white/5 rounded-lg">
                      <div 
                        className="w-10 h-10 rounded-md mr-3 border border-white/20" 
                        style={{ backgroundColor: color.color }}
                      ></div>
                      <div>
                        <p className="font-medium">{color.name}</p>
                        <p className="text-xs text-white/70">{color.color}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="font-medium mb-4 text-center">How To Use Your Colors</h4>
                <ul className="space-y-2 text-white/80">
                  <li>✓ Use {recommendedColors[0].name.toLowerCase()} as your primary color</li>
                  <li>✓ Accent with {recommendedColors[1].name.toLowerCase()} for contrast</li>
                  <li>✓ {recommendedColors[2].name} works well for accessories</li>
                  <li>✓ Mix and match within this palette for a coordinated look</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-medium mb-4 text-center">Outfit Color Combinations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Everyday Casual", colors: [recommendedColors[0], recommendedColors[3]] },
                  { name: "Elegant Evening", colors: [recommendedColors[1], recommendedColors[2]] },
                  { name: "Statement Look", colors: [recommendedColors[2], recommendedColors[0]] }
                ].map((combo, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg text-center">
                    <h5 className="text-sm font-medium mb-3">{combo.name}</h5>
                    <div className="flex justify-center gap-2 mb-2">
                      {combo.colors.map((color, i) => (
                        <div 
                          key={i} 
                          className="w-8 h-8 rounded-full border border-white/20"
                          style={{ backgroundColor: color.color }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-white/70">
                      {combo.colors[0].name} + {combo.colors[1].name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Style Tips Tab */}
        {activeTab === 'tips' && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-medium mb-6 text-center">Style Tips For Your Body Type</h3>
            
            <div className="bg-white/5 p-6 rounded-xl mb-6">
              <h4 className="font-medium text-center mb-4">
                Recommendations for {getBodyTypeName()} Body Type
              </h4>
              <ul className="space-y-3">
                {bodyTypeRecommendations.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="font-medium text-center mb-4">Do's</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Choose fabrics that flatter your body type</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Dress for the occasion while maintaining your personal style</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Use your color palette to create coordinated outfits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Invest in quality pieces that fit well</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="font-medium text-center mb-4">Don'ts</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Wear colors that clash with your skin tone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Choose styles that don't complement your body shape</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Sacrifice comfort for style</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Follow trends that don't suit your personal style</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Actions */}
      <div className="flex justify-center mb-10">
        <button 
          onClick={onReset}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:-translate-y-1 shadow-lg"
        >
          Start New Style Analysis
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;