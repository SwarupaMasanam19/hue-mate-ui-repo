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
  const baseStyles = "py-3 px-8 rounded-full font-medium transition-all";
  
  const primaryStyles = "bg-amber-500 hover:bg-amber-600 text-white shadow-lg";
  const secondaryStyles = "bg-indigo-700/50 hover:bg-indigo-600/50 text-white";
  const disabledStyles = "opacity-50 cursor-not-allowed";
  
  const styles = `
    ${baseStyles}
    ${primary ? primaryStyles : secondary ? secondaryStyles : ''}
    ${disabled ? disabledStyles : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;
  
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={styles}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;