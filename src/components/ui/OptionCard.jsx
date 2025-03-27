import React from 'react';
import Card from './Card';

const OptionCard = ({ 
  label, 
  icon, 
  description, 
  onClick, 
  active = false,
  size = 'small' // small, medium, large
}) => {
  const sizeClasses = {
    small: 'py-4',
    medium: 'py-5',
    large: 'py-6'
  };
  
  return (
    <Card 
      onClick={onClick} 
      active={active}
      className={`flex flex-col items-center justify-center text-center ${sizeClasses[size]}`}
    >
      {icon && (
        <div className="text-3xl mb-3">{icon}</div>
      )}
      <h3 className="text-lg font-semibold mb-1">{label}</h3>
      {description && (
        <p className="text-sm text-gray-300">{description}</p>
      )}
    </Card>
  );
};

export default OptionCard;