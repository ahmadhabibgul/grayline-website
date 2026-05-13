import { ReactNode } from "react";
import { CheckCircleIcon } from "@/components/ui/icons";

type CheckItemProps = {
  children: ReactNode;
};

export function CheckItem({ children }: CheckItemProps) {
  return (
    <div className="check-row">
      <span className="check-icon">
        <CheckCircleIcon className="h-5 w-5" />
      </span>
      <span>{children}</span>
    </div>
  );
}
