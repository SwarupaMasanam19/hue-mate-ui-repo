import React, { useState } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const BudgetInput = () => {
  const { goToNextStep } = useChatbot();
  const [budget, setBudget] = useState('');
  const [budgetRange, setBudgetRange] = useState('medium');

  const handleBudgetChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only digits
    setBudget(value);
  };

  const handleRangeSelect = (range) => {
    setBudgetRange(range);
    
    // Set default budget values based on range
    const defaultBudgets = {
      low: '2000',
      medium: '5000',
      high: '10000',
      unlimited: ''
    };
    
    setBudget(defaultBudgets[range]);
  };

  const handleSubmit = () => {
    const budgetValue = budgetRange === 'unlimited' ? 'unlimited' : budget;
    goToNextStep('budget', { budget: budgetValue });
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Set Your Budget
      </h2>
      
      <p className="text-lg mb-8">
        What's your budget for this outfit?
      </p>
      
      <div className="w-full max-w-md">
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { id: 'low', label: 'Budget', icon: '💰' },
            { id: 'medium', label: 'Mid-range', icon: '💰💰' },
            { id: 'high', label: 'Premium', icon: '💰💰💰' },
            { id: 'unlimited', label: 'No Limit', icon: '✨' }
          ].map((option) => (
            <div
              key={option.id}
              className={`flex flex-col items-center py-4 px-2 rounded-lg cursor-pointer transition-colors ${
                budgetRange === option.id 
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/50' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
              onClick={() => handleRangeSelect(option.id)}
            >
              <div className="text-2xl mb-2">{option.icon}</div>
              <div className="text-sm">{option.label}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6">
          <label className="block text-left mb-2 font-medium">
            Enter your budget amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
            <input
              type="text"
              value={budget}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
              disabled={budgetRange === 'unlimited'}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-8 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button
            primary
            onClick={handleSubmit}
            disabled={!budgetRange || (budgetRange !== 'unlimited' && !budget)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BudgetInput;