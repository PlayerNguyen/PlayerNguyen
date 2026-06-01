import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`bg-canvas border border-hairline rounded-md p-6 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
