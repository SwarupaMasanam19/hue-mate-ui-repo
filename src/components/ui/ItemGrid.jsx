import React, { useState } from 'react';

const ItemGrid = ({ items, type, title, subtitle, onSelect }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  if (!items || items.length === 0) {
    return (
      <div className="empty-item-grid">
        <h2>{title}</h2>
        <p>No items found matching your criteria. Try adjusting your preferences.</p>
      </div>
    );
  }
  
  return (
    <div className="item-grid-container">
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      
      <div className="item-grid">
        {items.map(item => (
          <div 
            key={item.id}
            className="item-card"
            onClick={() => onSelect(item)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="item-image">
              <img src={item.imageUrl} alt={item.name} />
              
              {hoveredItem === item.id && (
                <div className="quick-view">
                  <span>Quick View</span>
                </div>
              )}
            </div>
            
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-price">₹{item.price.toLocaleString()}</p>
              <p className="item-color">{item.color}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="item-selection-tip">
        <p>Select an item to continue</p>
      </div>
    </div>
  );
};

export default ItemGrid;