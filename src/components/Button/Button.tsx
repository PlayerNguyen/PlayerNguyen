import React from "react";
import classNames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

export default function Button({ text, className, ...children }: ButtonProps) {
  return (
    <button
      className={classNames(
        "bg-neutral-900 text-neutral-400 px-4 py-1 text-lg rounded-md transition-colors",
        "hover:bg-neutral-700 hover:text-neutral-200",
        className && className
      )}
      {...children}
    >
      {text}
    </button>
  );
}
