import { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
};

export function SectionHeading({ label, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{label}</p>
      <div className={centered ? "brand-rule mx-auto" : "brand-rule"} />
      <h2 className="section-title mt-6">{title}</h2>
      {description ? (
        <p className={`lead-copy mt-5 ${centered ? "mx-auto" : ""}`}>{description}</p>
      ) : null}
    </div>
  );
}
