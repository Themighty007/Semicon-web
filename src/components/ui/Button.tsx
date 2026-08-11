import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
}

export function Button({ variant = "primary", className, children, as: Component = "button", ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center transition-all duration-250 ease-out px-6 py-3 rounded-full text-sm font-bold";
  const primaryClasses = "bg-accent text-void shadow-[0_0_20px_rgba(34,232,176,0.3)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,232,176,0.5)]";
  const secondaryClasses = "bg-white/5 border border-white/10 text-text-primary hover:bg-white/10";

  const classes = cn(
    baseClasses,
    variant === "primary" ? primaryClasses : secondaryClasses,
    className
  );

  if (Component === "a") {
    return (
      <a className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
