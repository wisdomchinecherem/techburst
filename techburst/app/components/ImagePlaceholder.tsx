import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

const aspectMap: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * Drop-in placeholder for real images. Swap this out for a
 * Next.js <Image> component once assets are ready — the label
 * tells you exactly what should go here.
 */
export default function ImagePlaceholder({
  label,
  aspect = "video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex ${aspectMap[aspect]} w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-surface/60 text-center ${className}`}
    >
      <ImageIcon className="h-6 w-6 text-white/25" strokeWidth={1.5} />
      <span className="px-4 text-xs font-medium uppercase tracking-wide text-white/30">
        {label}
      </span>
    </div>
  );
}
