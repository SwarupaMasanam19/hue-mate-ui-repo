import React from 'react';

const SelectedItems = ({ items, compact = false }) => {
  const { top, bottom, footwear, jewelry, outfit } = items;
  
  // Check if there are any selected items
  const hasSelectedItems = top || bottom || footwear || jewelry || outfit;
  
  if (!hasSelectedItems) {
    return null;
  }
  
  // If displaying a full outfit, just show that
  if (outfit) {
    return (
      <div className={`selected-items ${compact ? 'compact' : ''}`}>
        <div className="selected-item">
          <img src={outfit.imageUrl} alt={outfit.name} />
          <div className="item-info">
            <h3>Full Outfit</h3>
            <p>{outfit.name}</p>
            <p className="price">₹{outfit.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Otherwise display individual items
  return (
    <div className={`selected-items ${compact ? 'compact' : ''}`}>
      {top && (
        <div className="selected-item">
          <img src={top.imageUrl} alt={top.name} />
          <div className="item-info">
            <h3>Top</h3>
            <p>{top.name}</p>
            <p className="price">₹{top.price.toLocaleString()}</p>
          </div>
        </div>
      )}
      
      {bottom && (
        <div className="selected-item">
          <img src={bottom.imageUrl} alt={bottom.name} />
          <div className="item-info">
            <h3>Bottom</h3>
            <p>{bottom.name}</p>
            <p className="price">₹{bottom.price.toLocaleString()}</p>
          </div>
        </div>
      )}
      
      {footwear && (
        <div className="selected-item">
          <img src={footwear.imageUrl} alt={footwear.name} />
          <div className="item-info">
            <h3>Footwear</h3>
            <p>{footwear.name}</p>
            <p className="price">₹{footwear.price.toLocaleString()}</p>
          </div>
        </div>
      )}
      
      {jewelry && (
        <div className="selected-item">
          <img src={jewelry.imageUrl} alt={jewelry.name} />
          <div className="item-info">
            <h3>Jewelry</h3>
            <p>{jewelry.name}</p>
            <p className="price">₹{jewelry.price.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedItems;