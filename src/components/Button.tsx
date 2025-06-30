// Use React.ButtonHTMLAttributes to inherit all the standard button props
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * button content (text, icons, etc.)
   */
  children: React.ReactNode;
  /**
   * style buttons (e.g. "primary", "secondary", "danger")
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /**
   * determine buttnon style depending on general class
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * add more taiwind or other classes
   */
  className?: string;
  /**
   * set disable status when necessary
   */
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...rest // Other button's HTML-attribute (onClick, type, etc.)
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-200',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? disabledStyles : ''} ${className}`}
      disabled={disabled}
      {...rest} // Pass all other props (e.g. onClick, type="submit")
    >
      {children}
    </button>
  );
}
