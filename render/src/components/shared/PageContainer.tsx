import type { HTMLAttributes } from "react";

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function PageContainer({ children, className = "", ...rest }: PageContainerProps) {
  return (
    <div className={`max-w-content mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
}
