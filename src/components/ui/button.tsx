"use client";

import React, { ReactNode } from "react";

export interface ButtonProps {
  asChild?: boolean;
  variant?: "default" | "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button
      ref={ref}
      className="
        inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
        [&_]:hover-[&>span]:bg-accent [&_]:hover-[&>span]:text-accent-foreground
        [&_]:active-[&>span]:bg-accent [&_]:active-[&>span]:text-accent-foreground
        {className}
      "
      {...rest}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";