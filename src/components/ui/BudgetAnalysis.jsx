import React from 'react';

const BudgetAnalysis = ({ analysis }) => {
  const { totalCost, breakdown, withinBudget } = analysis;
  
  // Get all items with prices
  const items = Object.entries(breakdown).filter(([_, price]) => price > 0);
  
  return (
    <div className="budget-analysis">
      <h3>Budget Analysis</h3>
      
      <div className="cost-breakdown">
        {items.map(([type, price]) => (
          <div key={type} className="cost-item">
            <span className="item-type">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            <span className="item-price">₹{price.toLocaleString()}</span>
          </div>
        ))}
        
        <div className="total-cost">
          <span>Total</span>
          <span>₹{totalCost.toLocaleString()}</span>
        </div>
      </div>
      
      {!withinBudget && (
        <div className="budget-warning">
          <p>
            <span className="warning-icon">⚠️</span>
            This outfit exceeds your specified budget.
          </p>
        </div>
      )}
      
      {withinBudget && (
        <div className="budget-success">
          <p>
            <span className="success-icon">✅</span>
            This outfit is within your budget!
          </p>
        </div>
      )}
    </div>
  );
};

export default BudgetAnalysis;