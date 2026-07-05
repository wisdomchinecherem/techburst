import Image, { StaticImageData } from "next/image";

interface ImagePlaceholderProps {
  label: string;
  src?: StaticImageData;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

const aspectMap: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export default function ImagePlaceholder({
  label,
  src,
  aspect = "video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {src ? (
        <Image
          src={src}
          alt={label}
          className={`overflow-hidden rounded-xl border border-border ${aspectMap[aspect]} ${className}`}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-surface text-white/40">
          {label}
        </div>
      )}
    </div>
  );
}
