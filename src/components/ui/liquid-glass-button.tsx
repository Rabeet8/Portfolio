"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const liquidbuttonVariants = cva(
  "relative inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:scale-105 duration-300 transition text-primary",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 text-xs px-4",
        lg: "h-10 px-6",
        xl: "h-12 px-8",
        xxl: "h-14 px-10",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xxl",
    },
  }
);

export function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* Glass background */}
      <span
        className="absolute inset-0 rounded-full z-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
          backdropFilter: "blur(12px) saturate(1.4)",
          WebkitBackdropFilter: "blur(12px) saturate(1.4)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow:
            "0 4px 24px 0 rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.1)",
        }}
      />

      {/* Shine highlight */}
      <span
        className="absolute inset-0 rounded-full z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%, rgba(255,255,255,0.06) 100%)",
          opacity: 0.7,
        }}
      />

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Bottom shine line */}
      <span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] rounded-full z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
      />
    </Comp>
  );
}

export { liquidbuttonVariants };
