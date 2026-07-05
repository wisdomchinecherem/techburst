import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Partner {
  name: string;
}

export interface Web3Project {
  slug: string;
  name: string;
  vision: string;
  technologies: string[];
  image: StaticImageData;
}

export interface FeaturedStat {
  label: string;
  value: string;
}
