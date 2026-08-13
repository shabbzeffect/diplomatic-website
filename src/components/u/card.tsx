"use client";

import { ReactNode } from "react";

export interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = React.forwardRef(
  <div
    className="
      rounded-lg border border-border/10 bg-background p-4 shadow-sm
      [&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg
      [&>hr]:my-4 [&>ul>li]:last-child:bottom-0
    "
    {...props}
  >
    {props.children}
  </div>
);
Card.displayName = "Card";

export interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}

export const CardHeader = React.forwardRef(
  <div
    className="
      p-0
    "
    {...props}
  >
    {props.children}
  </div>
);
CardHeader.displayName = "CardHeader";

export interface CardTitleProps {
  className?: string;
  children: ReactNode;
}

export const CardTitle = React.forwardRef(
  <h3
    className="
      text-lg font-medium
    "
    {...props}
  >
    {props.children}
  </h3>
);
CardTitle.displayName = "CardTitle";

export interface CardContentProps {
  className?: string;
  children: ReactNode;
}

export const CardContent = React.forwardRef(
  <div
    className="
      p-4
    "
    {...props}
  >
    {props.children}
  </div>
);
CardContent.displayName = "CardContent";