type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark ${compact ? "brand-mark-compact" : ""}`}>
      <span className="brand-mark-icon" aria-hidden="true" />
      <span className="brand-mark-label">Grayline</span>
    </span>
  );
}
