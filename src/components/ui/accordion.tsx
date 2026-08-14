"use client";

import React, { ReactNode, useState } from "react";

export interface AccordionItemProps {
  value: string;
  type?: "single" | "multiple";
}

export interface AccordionTriggerProps {
  className?: string;
  children: ReactNode;
}

export const Accordion = React.forwardRef(
  <div className="hidden">{/* Rendered via context */}</div>
);
Accordion.displayName = "Accordion";

export const AccordionItem = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full text-left rounded-md border border-transparent bg-background px-4 py-3 text-sm font-medium ring-1 ring-black disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground
          [&+.]:pt-2 [&+_]:pb-2 [&>span]:toggle-pointer-events-none
        "
      >
        <span className="flex justify-between items-center">
          <span>{children}</span>
          <svg
            className="h-4 w-4 rotate-180 duration-300"
            viewBox="0 0 10 10"
            fill="currentColor"
          >
            <path d="M1 5h8M5 1l5 5L1 9" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="overflow-hidden">
          <div className="p-4 mt-2 border-t border-border/10 text-sm text-foreground-foreground">
            {children instanceof Function ? children() : children}
          </div>
        </div>
      )}
    </div>
  );
};

AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <button
      className="
        w-full text-left rounded-md border border-transparent bg-background px-4 py-3 text-sm font-medium ring-1 ring-black disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground
        [&+.]:pt-2 [&+_]:pb-2 [&>span]:toggle-pointer-events-none
      "
      {...props}
    >
      {children}
    </button>
  );
};

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="
        overflow-hidden
      "
    >
      <div className="p-4 mt-2 border-t border-border/10 text-sm text-foreground-foreground">
        {children}
      </div>
    </div>
  );
};

AccordionContent.displayName = "AccordionContent";