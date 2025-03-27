import React from 'react';

const Card = ({ children, onClick, active = false, className = '', ...props }) => {
  const baseStyles = "bg-white/10 backdrop-blur-md p-6 rounded-xl transition-all duration-300";
  const interactiveStyles = onClick ? "cursor-pointer hover:bg-white/20" : "";
  const activeStyles = active ? "border-2 border-amber-400" : "";
  
  return (
    
      {children}
    
  );
};

export default Card;