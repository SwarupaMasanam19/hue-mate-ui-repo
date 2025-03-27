import React from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Welcome = () => {
  const { goToNextStep } = useChatbot();

  const handleStart = () => {
    goToNextStep('welcome');
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Welcome to HueMate
      </h2>
      
      <p className="text-lg mb-6">
        Your AI-powered fashion assistant that helps you find the perfect outfit based on your skin tone, body type, and preferences.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
        <Card>
          <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Skin Tone Analysis</h3>
          <p className="text-gray-300">Upload your photo and let our AI analyze your skin tone for perfect color matches.</p>
        </Card>
        
        <Card>
          <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Personalized Styling</h3>
          <p className="text-gray-300">Get outfit recommendations tailored to your body type, occasion, and personal style.</p>
        </Card>
        
        <Card>
          <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Budget-Friendly Options</h3>
          <p className="text-gray-300">Find the perfect outfit within your budget with direct shopping links.</p>
        </Card>
      </div>
      
      <Button 
        primary
        onClick={handleStart}
      >
        Let's Get Started
      </Button>
    </div>
  );
};

export default Welcome;