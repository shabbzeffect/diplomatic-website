"use client";

import { ReactNode } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
  placeholder?: string;
}

export interface SelectOptionProps {
  value: string;
  label: string;
  disabled?: boolean;
}

export const Select = React.forwardRef(
  <div className="relative inline-block">
    <select
      className="
        rounded-md border border-input bg-input p-2.5 text-sm shadow-sm outline-none placeholder:text-foreground/50 transition-colors focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-[length:0.5em_1em] [&>option]:bg-white [&>option]:select-none [&>option]:pointer-events-none
        peer-select-none
      "
      {...props}
    >
      {props.children}
    </select>
    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40"
      viewBox="0 0 10 10"
      fill="currentColor"
    >
      <path d="M1 5h8M5 1l5 5L1 9" />
    </svg>
  </div>
);
Select.displayName = "Select";

export const SelectTrigger = React.forwardRef(
  <div className="relative">
    <svg
      className="h-4 w-4 text-foreground/40 absolute right-3 top-1/2 -translate-y-1/2"
      viewBox="0 0 10 10"
      fill="currentColor"
    >
      <path d="M1 5h8M5 1l5 5L1 9" />
    </svg>
  </div>
);
SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = React.forwardRef(
  <div
    className="
      absolute z-10 rounded-md border border-divide bg-popover p-2 shadow-lg ring-1 ring-black ring-opacity-5 data-[state=open]:data-[state=closed]:invisible data-[state=open]:block data-[state=closed]:data-[state=open]:invisible
    "
  >
    {props.children}
  </div>
);
SelectContent.displayName = "SelectContent";

export const SelectValue = React.forwardRef(
  <span
    className="
      line-clamp-2 flex min-h-[1.6em] select-none 
    "
  >
    {props.children}
  </span>
);
SelectValue.displayName = "SelectValue";

export const SelectSeparator = React.forwardRef(
  <span
    className="
      h-[1px] my-1 bg-accent
    "
  />
);
SelectSeparator.displayName = "SelectSeparator";

export const Option = React.forwardRef(
  <option
    className="
      rounded-md bg-white px-3 py-1.5 text-sm select-none 
    "
  >
    {props.children}
  </option>
);
Option.displayName = "Option";