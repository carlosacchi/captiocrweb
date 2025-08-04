import React from 'react';

const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    href,
    target,
    rel,
    onClick,
    disabled = false,
    icon: Icon,
    iconPosition = 'left',
    ...props 
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
        primary: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500 shadow-lg hover:shadow-xl',
        secondary: 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50 focus:ring-blue-500 shadow-md hover:shadow-lg',
        outline: 'bg-transparent text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-500',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl'
    };
    
    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-2xl',
        xl: 'px-10 py-5 text-xl rounded-2xl'
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    
    const content = (
        <>
            {Icon && iconPosition === 'left' && <Icon className={`${size === 'sm' ? 'h-4 w-4' : size === 'lg' || size === 'xl' ? 'h-6 w-6' : 'h-5 w-5'} ${children ? 'mr-2' : ''}`} />}
            {children}
            {Icon && iconPosition === 'right' && <Icon className={`${size === 'sm' ? 'h-4 w-4' : size === 'lg' || size === 'xl' ? 'h-6 w-6' : 'h-5 w-5'} ${children ? 'ml-2' : ''}`} />}
        </>
    );
    
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={classes}
                {...props}
            >
                {content}
            </a>
        );
    }
    
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classes}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;