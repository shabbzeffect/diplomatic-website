"use client";

import { ReactNode } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef(
  <input
    className="
      rounded-md border border-input bg-input p-2.5 text-sm shadow-sm outline-none placeholder:text-foreground/50 transition-colors focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
      [&:placeholder]:text-foreground/50
    "
    {...props}
  />
);
Input.displayName = "Input";