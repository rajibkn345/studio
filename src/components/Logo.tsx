import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RTG Resto Tech Group Logo"
      height="24"
      width="auto"
    >
      <text 
        x="0" 
        y="30" 
        fontFamily="Montserrat, sans-serif" 
        fontSize="34" 
        fontWeight="bold" 
        fill="currentColor" 
        className="text-foreground"
      >
        R
      </text>
      <text 
        x="25" 
        y="30" 
        fontFamily="Montserrat, sans-serif" 
        fontSize="34" 
        fontWeight="bold" 
        fill="hsl(var(--primary))"
      >
        T
      </text>
      <text 
        x="47" 
        y="30" 
        fontFamily="Montserrat, sans-serif" 
        fontSize="34" 
        fontWeight="bold" 
        fill="hsl(var(--primary))"
      >
        G
      </text>
      <path
        d="M 12 38 L 40 18 L 125 1"
        stroke="currentColor"
        className="text-foreground"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
