import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  primary = false, 
  secondary = false, 
  disabled = false,
  fullWidth = false,
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 focus:outline-none";
  
  const variantStyles = primary
    ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg hover:shadow-amber-500/20"
    : secondary
      ? "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 shadow-lg hover:shadow-white/10"
      : "bg-gray-700 text-white hover:bg-gray-600";
  
  const widthStyles = fullWidth ? "w-full" : "";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed hover:transform-none" : "cursor-pointer";
  
  return (
    
      {children}
    
  );

  <button 
  className="chatbot-button"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Open HueMate Assistant"
>
  <div className="chatbot-button-inner">
    <img src="/huemate-logo.png" alt="HueMate" />
  </div>
</button>
};

export default Button;