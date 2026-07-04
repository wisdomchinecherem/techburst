interface TechChipProps {
  label: string;
}

export default function TechChip({ label }: TechChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-white/70">
      {label}
    </span>
  );
}
