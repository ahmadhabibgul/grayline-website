import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-[1220px] px-5 sm:px-7 lg:px-10 ${className}`}>{children}</div>;
}
