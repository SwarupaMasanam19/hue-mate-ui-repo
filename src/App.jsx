import React, { useState } from 'react';
import './App.css';
import { Box, Triangle, Square, Circle, Calculator, Youtube } from 'lucide-react';
import Button from './components/ui/Button';

function App() {
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Body type options
  const bodyTypeOptions = [
    { id: 'hourglass', label: 'Hourglass', icon: <Box size={48} color="#f8fafc" /> },
    { id: 'pear', label: 'Pear', icon: <Triangle size={48} color="#f8fafc" /> },
    { id: 'rectangle', label: 'Rectangle', icon: <Square size={48} color="#f8fafc" /> },
    { id: 'apple', label: 'Apple', icon: <Circle size={48} color="#f8fafc" /> }
  ];

  return (
    <div className="App bg-indigo-950 min-h-screen text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-amber-500 mb-4">Select Your Body Type</h1>
        <p className="text-lg text-white mb-10">This helps us recommend clothes that flatter your natural shape.</p>
        
        <div className="bg-indigo-900/40 rounded-xl p-6 w-full max-w-4xl mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bodyTypeOptions.map((option) => (
              <div
                key={option.id}
                className={`bg-indigo-800/50 rounded-xl p-6 cursor-pointer transition-all flex flex-col items-center justify-center ${
                  selectedBodyType === option.id 
                    ? 'ring-2 ring-amber-500' 
                    : 'hover:bg-indigo-700/50'
                }`}
                onClick={() => setSelectedBodyType(option.id)}
                style={{ aspectRatio: '1' }}
              >
                <div className="mb-4">{option.icon}</div>
                <h3 className="text-xl font-medium text-white">{option.label}</h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 w-full max-w-xl">
          <div 
            className="bg-indigo-800/50 hover:bg-indigo-700/50 rounded-xl p-6 cursor-pointer transition-all flex flex-col items-center" 
            onClick={() => setShowCalculator(true)}
          >
            <Calculator size={36} color="#f59e0b" className="mb-2" />
            <h3 className="text-lg font-medium text-white mb-1">Don't know your body shape?</h3>
            <p className="text-amber-500">Use our calculator</p>
          </div>
          
          <div 
            className="bg-indigo-800/50 hover:bg-indigo-700/50 rounded-xl p-6 cursor-pointer transition-all flex flex-col items-center"
            onClick={() => setShowVideo(true)}
          >
            <Youtube size={36} color="#f59e0b" className="mb-2" />
            <h3 className="text-lg font-medium text-white mb-1">Learn how to measure</h3>
            <p className="text-amber-500">Watch quick video</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Button 
            primary
            onClick={() => console.log("Selected body type:", selectedBodyType)}
            disabled={!selectedBodyType}
          >
            Continue
          </Button>
          
          <Button 
            secondary
            onClick={() => console.log("Going back")}
          >
            Back
          </Button>
        </div>
      </div>

      {/* This part would show the calculator and video modals */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-indigo-900 p-8 rounded-xl max-w-md w-full relative">
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={() => setShowCalculator(false)}
            >
              Close
            </button>
            <h2 className="text-xl font-bold mb-4">Body Shape Calculator</h2>
            <p>Calculator UI would go here...</p>
          </div>
        </div>
      )}

      {showVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="max-w-3xl w-full relative">
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
              onClick={() => setShowVideo(false)}
            >
              Close
            </button>
            <div className="aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/420TbEabNzY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;