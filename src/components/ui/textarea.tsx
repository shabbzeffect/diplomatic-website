"use client";

import React, { ReactNode } from "react";

export interface TextareaProps extends React.TextareaAttributes {
  className?: string;
}

export const Textarea = React.forwardRef(
  <textarea
    className="
      rounded-md border border-input bg-input p-2.5 text-sm shadow-sm outline-none placeholder:text-foreground/50 transition-colors focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none resize-none
      [&::placeholder]:text-foreground/50
    "
    {...props}
  />
);
Textarea.displayName = "Textarea";