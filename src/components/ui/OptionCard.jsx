import React from 'react';

const OptionCard = ({ 
  label, 
  icon, 
  description, 
  onClick, 
  active = false,
  size = 'small', // small, medium, large
  className = ''
}) => {
  // Size variants
  const sizeClasses = {
    small: 'py-3 px-4',
    medium: 'py-5 px-5',
    large: 'py-6 px-6'
  };
  
  // Active state styling
  const activeStyles = active
    ? 'ring-2 ring-amber-500 bg-amber-500/10'
    : 'hover:bg-white/10';
  
  // Combine styles
  const cardStyles = `
    bg-white/5 
    backdrop-blur-md 
    rounded-xl 
    cursor-pointer 
    transition-all 
    flex 
    flex-col 
    items-center 
    text-center
    ${sizeClasses[size]}
    ${activeStyles}
    ${className}
  `.trim();
  
  return (
    <div 
      className={cardStyles}
      onClick={onClick}
    >
      {icon && (
        <div className="mb-3 text-3xl flex justify-center">
          {typeof icon === 'string' ? icon : icon}
        </div>
      )}
      
      <h3 className="text-lg font-medium mb-1">{label}</h3>
      
      {description && (
        <p className="text-sm text-white/70">{description}</p>
      )}
    </div>
  );
};

export default OptionCard;