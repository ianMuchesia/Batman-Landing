// app/components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  // Base styles
  const baseStyles = "inline-block font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
  
  // Variant styles
  const variantStyles = {
    primary: "bg-red-600 hover:bg-red-700 text-white transform hover:scale-105",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white",
    outline: "bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    ghost: "bg-transparent hover:bg-gray-800 text-white",
  };
  
  // Size styles
  const sizeStyles = {
    sm: "text-xs py-2 px-4",
    md: "text-sm py-3 px-6",
    lg: "text-base py-4 px-8",
  };
  
  // Width style
  const widthStyle = fullWidth ? "w-full" : "";
  
  // Disabled style
  const disabledStyle = disabled ? "opacity-60 cursor-not-allowed" : "";
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;

  // If href is provided, render a Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  // Otherwise, render a button
  return (
    <button 
      type={type} 
      className={buttonStyles} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;