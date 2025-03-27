import React from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import OptionCard from '../ui/OptionCard';

const BodyTypeSelection = () => {
  const { formData, goToNextStep } = useChatbot();
  const { gender } = formData;

  // Body type options based on gender
  const bodyTypeOptions = {
    female: [
      { id: 'hourglass', label: 'Hourglass', description: 'Balanced top and bottom with a defined waist' },
      { id: 'pear', label: 'Pear', description: 'Narrower shoulders and wider hips' },
      { id: 'apple', label: 'Apple', description: 'Fuller midsection with slimmer legs' },
      { id: 'rectangle', label: 'Rectangle', description: 'Similar measurements at shoulders, waist, and hips' },
      { id: 'inverted-triangle', label: 'Inverted Triangle', description: 'Broader shoulders and narrower hips' }
    ],
    male: [
      { id: 'triangle', label: 'Triangle', description: 'Narrower shoulders and wider waist/hips' },
      { id: 'inverted-triangle', label: 'Athletic', description: 'Broader shoulders and chest with narrower waist' },
      { id: 'rectangle', label: 'Rectangle', description: 'Relatively straight up and down with less definition' },
      { id: 'oval', label: 'Oval', description: 'Fuller midsection with average shoulders' },
      { id: 'trapezoid', label: 'Trapezoid', description: 'Wider shoulders that taper to a narrower waist' }
    ],
    'non-binary': [
      { id: 'rectangle', label: 'Straight', description: 'Minimal difference between shoulders, waist, and hips' },
      { id: 'curve', label: 'Curved', description: 'More defined curves at hips or chest' },
      { id: 'balanced', label: 'Balanced', description: 'Proportional shoulders and hips with a defined waist' },
      { id: 'broad-shoulder', label: 'Broad Shoulder', description: 'Wider shoulders compared to hips' },
      { id: 'broad-hip', label: 'Broad Hip', description: 'Wider hips compared to shoulders' }
    ]
  };

  const bodyTypes = bodyTypeOptions[gender] || bodyTypeOptions.female;

  const handleSelect = (bodyType) => {
    goToNextStep('bodyType', { bodyType });
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Select Your Body Type
      </h2>
      
      <p className="text-lg mb-8">
        This helps us recommend clothing styles that complement your natural shape.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 w-full">
        {bodyTypes.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            description={option.description}
            onClick={() => handleSelect(option.id)}
            size="large"
          />
        ))}
      </div>
    </div>
  );
};

export default BodyTypeSelection;