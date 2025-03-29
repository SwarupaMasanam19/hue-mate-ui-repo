import React from 'react';

const CategorySelector = ({ onSelect }) => {
  const categories = [
    {
      id: 'full-outfit',
      name: 'Full Outfit',
      description: 'Complete head-to-toe looks for any occasion',
      icon: '/assets/icons/outfit.png'
    },
    {
      id: 'tops',
      name: 'Tops & Tees',
      description: 'Blouses, t-shirts, sweaters, and more',
      icon: '/assets/icons/tops.png'
    },
    {
      id: 'bottoms',
      name: 'Bottoms',
      description: 'Jeans, skirts, pants and shorts',
      icon: '/assets/icons/bottoms.png'
    },
    {
      id: 'jewelry',
      name: 'Jewelry',
      description: 'Earrings, necklaces, bracelets and more',
      icon: '/assets/icons/jewelry.png'
    },
    {
      id: 'footwear',
      name: 'Footwear',
      description: 'Shoes, sandals, boots and more',
      icon: '/assets/icons/footwear.png'
    }
  ];
  
  return (
    <div className="category-selector">
      <h2>What are you looking for today?</h2>
      <p>Select a category to get personalized recommendations</p>
      
      <div className="category-grid">
        {categories.map(category => (
          <div 
            key={category.id}
            className="category-card"
            onClick={() => onSelect(category.id)}
          >
            <img src={category.icon} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;