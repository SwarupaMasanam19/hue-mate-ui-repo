import React from 'react';

const StyleSelector = ({ category, onSelect }) => {
  // Style options based on the selected category
  const getStyleOptions = () => {
    switch (category) {
      case 'full-outfit':
        return [
          {
            id: 'western',
            name: 'Western',
            description: 'Modern styles with global fashion influence',
            icon: '/assets/icons/western-style.png'
          },
          {
            id: 'traditional',
            name: 'Traditional',
            description: 'Classic cultural styles and ethnic wear',
            icon: '/assets/icons/traditional-style.png'
          },
          {
            id: 'fusion',
            name: 'Fusion',
            description: 'Blend of traditional and western elements',
            icon: '/assets/icons/fusion-style.png'
          },
          {
            id: 'casual',
            name: 'Casual',
            description: 'Relaxed, comfortable everyday wear',
            icon: '/assets/icons/casual-style.png'
          },
          {
            id: 'formal',
            name: 'Formal',
            description: 'Elegant, sophisticated styles for special occasions',
            icon: '/assets/icons/formal-style.png'
          }
        ];
      
      case 'tops':
        return [
          {
            id: 'western',
            name: 'Western Tops',
            description: 'Blouses, shirts, tees, and more',
            icon: '/assets/icons/western-tops.png'
          },
          {
            id: 'traditional',
            name: 'Traditional Tops',
            description: 'Kurtis, blouses for sarees, and ethnic wear',
            icon: '/assets/icons/traditional-tops.png'
          },
          {
            id: 'formal',
            name: 'Formal Tops',
            description: 'Office wear and business attire',
            icon: '/assets/icons/formal-tops.png'
          },
          {
            id: 'casual',
            name: 'Casual Tops',
            description: 'Everyday comfortable wear',
            icon: '/assets/icons/casual-tops.png'
          }
        ];
      
      case 'bottoms':
        return [
          {
            id: 'western',
            name: 'Western Bottoms',
            description: 'Jeans, skirts, shorts, and pants',
            icon: '/assets/icons/western-bottoms.png'
          },
          {
            id: 'traditional',
            name: 'Traditional Bottoms',
            description: 'Salwars, lehengas, and ethnic wear',
            icon: '/assets/icons/traditional-bottoms.png'
          },
          {
            id: 'formal',
            name: 'Formal Bottoms',
            description: 'Work-appropriate pants and skirts',
            icon: '/assets/icons/formal-bottoms.png'
          },
          {
            id: 'casual',
            name: 'Casual Bottoms',
            description: 'Comfortable everyday wear',
            icon: '/assets/icons/casual-bottoms.png'
          }
        ];
      
      case 'jewelry':
        return [
          {
            id: 'western',
            name: 'Western Jewelry',
            description: 'Modern, minimalist designs',
            icon: '/assets/icons/western-jewelry.png'
          },
          {
            id: 'traditional',
            name: 'Traditional Jewelry',
            description: 'Ethnic designs and cultural pieces',
            icon: '/assets/icons/traditional-jewelry.png'
          },
          {
            id: 'statement',
            name: 'Statement Pieces',
            description: 'Bold, eye-catching designs',
            icon: '/assets/icons/statement-jewelry.png'
          },
          {
            id: 'delicate',
            name: 'Delicate Jewelry',
            description: 'Subtle, everyday pieces',
            icon: '/assets/icons/delicate-jewelry.png'
          }
        ];
      
      case 'footwear':
        return [
          {
            id: 'western',
            name: 'Western Footwear',
            description: 'Modern styles like sneakers, heels, and boots',
            icon: '/assets/icons/western-footwear.png'
          },
          {
            id: 'traditional',
            name: 'Traditional Footwear',
            description: 'Ethnic styles like juttis, kolhapuris',
            icon: '/assets/icons/traditional-footwear.png'
          },
          {
            id: 'formal',
            name: 'Formal Footwear',
            description: 'Office and occasion appropriate',
            icon: '/assets/icons/formal-footwear.png'
          },
          {
            id: 'casual',
            name: 'Casual Footwear',
            description: 'Comfortable everyday wear',
            icon: '/assets/icons/casual-footwear.png'
          }
        ];
      
      default:
        return [];
    }
  };
  
  const styleOptions = getStyleOptions();
  
  return (
    <div className="style-selector">
      <h2>Select Your Style Preference</h2>
      <p>Choose a style that reflects your personal taste</p>
      
      <div className="style-grid">
        {styleOptions.map(style => (
          <div 
            key={style.id}
            className="style-card"
            onClick={() => onSelect(style.id)}
          >
            <img src={style.icon} alt={style.name} />
            <h3>{style.name}</h3>
            <p>{style.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;