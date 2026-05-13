import { ReactNode } from "react";

type FeatureTileProps = {
  icon: ReactNode;
  title: string;
  description: string;
  bordered?: boolean;
};

export function FeatureTile({ icon, title, description, bordered = false }: FeatureTileProps) {
  return (
    <div className={`feature-tile ${bordered ? "feature-tile-bordered" : ""}`}>
      <span className="feature-icon">{icon}</span>
      <div>
        <p className="feature-title">{title}</p>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}
