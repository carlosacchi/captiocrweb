import React from 'react';

const Card = ({ 
    children, 
    className = '', 
    hover = false,
    padding = 'default',
    shadow = 'default',
    rounded = 'default',
    ...props 
}) => {
    const baseClasses = 'bg-white transition-all duration-300';
    
    const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
    
    const paddingClasses = {
        none: '',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
        xl: 'p-10'
    };
    
    const shadowClasses = {
        none: '',
        sm: 'shadow-sm',
        default: 'shadow-lg',
        lg: 'shadow-xl',
        xl: 'shadow-2xl'
    };
    
    const roundedClasses = {
        none: '',
        sm: 'rounded-lg',
        default: 'rounded-xl',
        lg: 'rounded-2xl',
        full: 'rounded-full'
    };
    
    const classes = `
        ${baseClasses}
        ${hoverClasses}
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${roundedClasses[rounded]}
        ${className}
    `.trim().replace(/\s+/g, ' ');
    
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

// Card components for specific use cases
const FeatureCard = ({ icon: Icon, title, description, className = '', ...props }) => (
    <Card 
        hover 
        className={`text-center bg-gradient-to-br from-white to-gray-50 border border-gray-100 ${className}`}
        {...props}
    >
        {Icon && (
            <div className="flex justify-center mb-6">
                <Icon className="h-12 w-12 text-blue-600" />
            </div>
        )}
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
    </Card>
);

const TestimonialCard = ({ 
    name, 
    role, 
    content, 
    avatar, 
    className = '',
    ...props 
}) => (
    <Card hover className={`${className}`} {...props}>
        <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {avatar || name?.charAt(0)}
            </div>
            <div className="ml-4">
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600 text-sm">{role}</p>
            </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{content}</p>
    </Card>
);

const StepCard = ({ 
    step, 
    title, 
    description, 
    className = '',
    ...props 
}) => (
    <div className={`text-center ${className}`} {...props}>
        <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
            {step}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
);

Card.Feature = FeatureCard;
Card.Testimonial = TestimonialCard;
Card.Step = StepCard;

export default Card;