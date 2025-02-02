import React from 'react';

const Alert = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = "relative w-full rounded-lg border p-4";
  const variantStyles = {
    default: "bg-background text-foreground",
    destructive: "border-red-500 text-red-600 bg-red-50",
    success: "border-green-500 text-green-600 bg-green-50",
    warning: "border-yellow-500 text-yellow-600 bg-yellow-50"
  };

  return (
    <div 
      role="alert"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertDescription = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`text-sm mt-1 flex items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Alert, AlertDescription };