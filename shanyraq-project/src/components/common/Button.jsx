import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 hover-gold';

  const variants = {
    primary: 'bg-accent text-primary hover:bg-accent-light shadow-lg',
    secondary: 'bg-primary-light text-text-primary hover:bg-primary border border-accent/30',
    outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
