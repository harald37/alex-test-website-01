import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'link' | 'white';
  dark?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  to, 
  onClick, 
  type = 'button',
  disabled = false,
  children, 
  className, 
  variant = 'primary',
  dark = false 
}) => {
  const baseStyles = "group relative inline-flex items-center justify-center overflow-hidden font-sans uppercase tracking-[0.3em] text-[9px] transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed";
  
  if (variant === 'link') {
    const linkContent = (
      <span className={cn(
        "group inline-flex items-center gap-6 font-sans uppercase tracking-[0.4em] text-[10px]",
        dark ? "text-white" : "text-zinc-900",
        disabled && "opacity-50 cursor-not-allowed"
      )}>
        <span className="relative">
          {children}
          <span className={cn(
            "absolute -bottom-2 left-0 w-full h-[1px] transition-colors duration-500",
            dark ? "bg-white/20 group-hover:bg-white" : "bg-zinc-900/20 group-hover:bg-zinc-900",
            disabled && "hidden"
          )} />
        </span>
        <ArrowRight aria-label="Weiter" className={cn(
          "w-4 h-4 transition-transform duration-500 stroke-[1px]",
          !disabled && "group-hover:translate-x-2"
        )} />
      </span>
    );

    if (to && !disabled) {
      return <Link to={to} className={cn("inline-block", className)}>{linkContent}</Link>;
    }
    return <button type={type} onClick={onClick} disabled={disabled} className={cn("inline-block", className)}>{linkContent}</button>;
  }

  const primaryStyles = cn(
    baseStyles,
    "px-16 py-6 md:px-20 md:py-7",
    variant === 'white'
      ? "bg-white text-zinc-900 hover:bg-zinc-100"
      : dark 
        ? "text-white/80 border-white/10" 
        : "text-zinc-900 border-zinc-900/10",
    disabled && "bg-zinc-100 text-zinc-400 border-zinc-200 hover:bg-zinc-100"
  );

  const content = variant === 'white' ? (
    <span className="relative z-10 flex items-center justify-center gap-3 whitespace-nowrap flex-nowrap">{children}</span>
  ) : (
    <>
      <div className={cn(
        "absolute inset-0 border transition-colors duration-500",
        dark ? "border-white/10 group-hover:border-white/30" : "border-zinc-900/10 group-hover:border-zinc-900/30",
        disabled && "border-zinc-200 group-hover:border-zinc-200"
      )} />
      {!disabled && (
        <div className={cn(
          "absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out",
          dark ? "bg-white" : "bg-zinc-900"
        )} />
      )}
      <span className={cn(
        "relative z-10 transition-colors duration-500 flex items-center justify-center gap-3 whitespace-nowrap flex-nowrap",
        dark ? "group-hover:text-zinc-900" : "group-hover:text-white",
        disabled && "group-hover:text-zinc-400"
      )}>
        {children}
      </span>
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={cn(primaryStyles, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(primaryStyles, className)}>
      {content}
    </button>
  );
};
