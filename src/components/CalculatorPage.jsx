import React from 'react';
import BodyShapeCalculator from './BodyShapeCalculator';
import { X } from 'lucide-react';

const CalculatorPage = ({ onClose, onCalculate }) => {
  return (
    <div className="calculator-modal">
      <div className="calculator-content">
        <button onClick={onClose} className="close-calculator">
          <X size={24} />
        </button>
        <BodyShapeCalculator onClose={onClose} onCalculate={onCalculate} />
      </div>
    </div>
  );
};

export default CalculatorPage;