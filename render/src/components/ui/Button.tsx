import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonBase = {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-4 py-3 font-sans text-button-md rounded-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-50";

const variants = {
  primary: "bg-primary text-canvas border border-primary hover:brightness-110",
  secondary: "bg-canvas text-ink border border-hairline hover:border-ink",
  ghost: "bg-transparent text-primary-soft hover:text-primary",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
