"use client";

import { ReactNode } from "react";

export interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: ReactNode;
}

export const Form = React.forwardRef(
  <form
    className="space-y-4"
    onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit(e);
    }}
  >
    {props.children}
  </form>
);
Form.displayName = "Form";