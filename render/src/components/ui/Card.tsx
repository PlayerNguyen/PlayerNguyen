import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-6 transition-all duration-300 hover:border-zinc-500/50 hover:shadow-lg hover:shadow-black/20 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
