import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/90",
        orange:  "bg-[hsl(var(--orange))] text-white hover:bg-[hsl(var(--orange-light))] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(240,96,32,0.32)]",
        glass:   "liquid-glass text-[hsl(var(--foreground))] hover:scale-[1.03]",
        ghost:   "hover:bg-[rgba(255,248,235,0.05)] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]",
        outline: "border border-[hsl(var(--orange))] text-[hsl(var(--orange))] hover:bg-[hsl(var(--orange))] hover:text-white hover:-translate-y-0.5",
      },
      size: {
        default: "px-6 py-2.5 text-sm",
        sm:      "px-4 py-2 text-xs",
        lg:      "px-8 py-3.5 text-base",
        xl:      "px-14 py-5 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
