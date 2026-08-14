"use client";

import React, { ReactNode } from "react";

export interface TableRowProps {
  className?: string;
  children: ReactNode;
}

export interface TableHeaderProps {
  className?: string;
  children: ReactNode;
}

export interface TableCellProps {
  className?: string;
  children: ReactNode;
}

export interface TableHeaderCellProps {
  className?: string;
  children: ReactNode;
}

export const Table = React.forwardRef(
  <table
    className="w-full rounded-md border bg-background"
  >
    {props.children}
  </table>
);
Table.displayName = "Table";

export const TableHeader = React.forwardRef(
  <thead>
    {props.children}
  </thead>
);
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef(
  <tbody>
    {props.children}
  </tbody>
);
TableBody.displayName = "TableBody";

export const TableRow = React.forwardRef(
  <tr
    className="
      border-b border-border/10 focus-visible:bg-accent focus-visible:text-accent-foreground
    "
  >
    {props.children}
  </tr>
);
TableRow.displayName = "TableRow";

export const TableHeaderCell = React.forwardRef(
  <th
    className="
      px-6 py-3 text-left text-xs font-medium font-semibold text-foreground
      align-middle border-b border-border/10
    "
  >
    {props.children}
  </th>
);
TableHeaderCell.displayName = "TableHeaderCell";

export const TableCell = React.forwardRef(
  <td
    className="
      px-6 py-4 text-sm text-foreground
      align-middle
    "
  >
    {props.children}
  </td>
);
TableCell.displayName = "TableCell";