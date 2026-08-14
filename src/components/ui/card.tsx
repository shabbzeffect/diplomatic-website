"use client";

import React, { ReactNode } from "react";

export interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, React.DivHTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className="
        rounded-lg border border-border/10 bg-background p-4 shadow-sm
        [&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg
        [&>hr]:my-4 [&>ul>li]:last-child:bottom-0
        {className}
      "
      {...rest}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

export interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, React.DivHTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className="
        p-0
      "
      {...rest}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export interface CardTitleProps {
  className?: string;
  children: ReactNode;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...rest }, ref) => (
    <h3
      ref={ref}
      className="
        text-lg font-medium
      "
      {...rest}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = "CardTitle";

export interface CardContentProps {
  className?: string;
  children: ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, React.DivHTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className="
        p-4
      "
      {...rest}
    >
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";