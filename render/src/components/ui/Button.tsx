import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonBase = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-zinc-900";

const variants = {
  primary:
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95",
  secondary:
    "border-2 border-zinc-600 text-zinc-300 hover:bg-white hover:text-black hover:border-white active:bg-zinc-400 active:border-black active:text-black",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={anchorProps.href} className={classes} {...anchorProps}>
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
