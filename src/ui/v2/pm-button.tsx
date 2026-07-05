import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { haptic } from "@/lib/haptics";

type Variant = "primary" | "secondary" | "ghost" | "danger";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary: "bg-pm-ink text-white shadow-pmSoft",
  secondary: "bg-pm-surface border border-pm-hairline text-pm-ink shadow-pmSoft",
  ghost: "bg-transparent text-pm-ink",
  danger: "bg-red-50 border border-red-100 text-pm-red"
};

export function PMButton({ className, variant = "primary", onClick, ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-black transition active:scale-[0.97] disabled:opacity-50",
        variants[variant],
        className
      )}
      onClick={(event) => {
        haptic("light");
        onClick?.(event);
      }}
      {...props}
    />
  );
}
