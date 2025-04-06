import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  primary = false, 
  secondary = false,
  disabled = false,
  fullWidth = false,
  className = '',
  ...rest
}) => {
  // Base styles that apply to all buttons
  const baseStyles = "py-3 px-8 rounded-full font-medium transition-all";
  
  // Primary button styles (amber gradient for primary action)
  const primaryStyles = primary 
    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:from-amber-600 hover:to-amber-700" 
    : "";
  
  // Secondary button styles (subtle background for secondary actions)
  const secondaryStyles = secondary 
    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20" 
    : "";
  
  // Disabled state styling
  const disabledStyles = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer";
  
  // Full width option
  const widthStyles = fullWidth 
    ? "w-full" 
    : "";
  
  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${primaryStyles}
    ${secondaryStyles}
    ${disabledStyles}
    ${widthStyles}
    ${className}
  `.trim();
  
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={buttonStyles}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;