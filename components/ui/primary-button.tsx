import Link from "next/link";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function PrimaryButton({ href, children, variant = "primary", className = "" }: PrimaryButtonProps) {
  return (
    <Link href={href} className={`${variant === "primary" ? "button-primary" : "button-secondary"} ${className}`}>
      {children}
    </Link>
  );
}
