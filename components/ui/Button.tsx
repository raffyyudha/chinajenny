import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center text-xs font-medium tracking-[0.25em] uppercase transition-colors duration-500 ease-out focus:outline-none overflow-hidden group";

  const variants = {
    primary: "bg-stone-900 text-brand px-12 py-6 hover:bg-stone-800 border border-brand/20 hover:border-brand",
    secondary: "bg-white text-stone-900 px-12 py-6 hover:bg-brand hover:text-white border border-stone-200 transition-colors duration-300",
    outline: "bg-transparent text-stone-900 px-12 py-6 border border-stone-900 hover:bg-brand hover:text-white hover:border-brand",
    ghost: "bg-transparent text-stone-900 p-0 hover:text-stone-500"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </motion.button>
  );
};