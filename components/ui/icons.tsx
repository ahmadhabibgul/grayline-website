import { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function IconFrame({ children, className = "" }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function BrowserIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 8.5h18" />
      <path d="M7 6.2h.01" />
      <path d="M10 6.2h.01" />
    </IconFrame>
  );
}

export function ChartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m8 14 3-3 3 2 5-6" />
      <path d="M19 7v4h-4" />
    </IconFrame>
  );
}

export function RocketIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M5 15c2.8-6.2 7.2-10 14-11-1 6.8-4.8 11.2-11 14" />
      <path d="M8 16c-1.7.3-3 .8-4 2 1.2 0 2.4.1 3.6.5" />
      <path d="M8 16c-.4-1.2-.5-2.4-.5-3.6-1.2 1-1.7 2.3-2 4" />
      <circle cx="15.5" cy="8.5" r="1.3" />
    </IconFrame>
  );
}

export function LayersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="m12 4 8 4.5-8 4.5-8-4.5L12 4Z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </IconFrame>
  );
}

export function CompassIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.8 5.6-5.6 1.8 1.8-5.6 5.6-1.8Z" />
    </IconFrame>
  );
}

export function SparkIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M12 3.5 13.8 8l4.7.2-3.7 2.8 1.3 4.5L12 12.8l-4.1 2.7 1.3-4.5L5.5 8.2 10.2 8 12 3.5Z" />
    </IconFrame>
  );
}

export function CheckCircleIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.7 12 2.1 2.1 4.5-4.8" />
    </IconFrame>
  );
}
