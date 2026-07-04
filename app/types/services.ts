import { BookOpen, Users, Zap, Code2, Trophy, BarChart3 } from "lucide-react";
import { Service } from "@/types";

export const services: Service[] = [
  {
    number: "01",
    title: "Campus Activation & Masterclass Tours",
    description:
      "We bring live, hands-on masterclasses directly to university campuses — turning curious students into builders in a single session.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Decentralized Community Architecture",
    description:
      "We design governance-ready community structures — from Discord to DAO — built to run without a single point of failure.",
    icon: Users,
  },
  {
    number: "03",
    title: "The 90-Day Onboarding Pipeline",
    description:
      "Events are the beginning, not the end — we engineer post-event virtual pipelines that keep developers engaged long after the room empties, nightly check-ins included.",
    icon: Zap,
  },
  {
    // PLACEHOLDER — replace with real copy
    number: "04",
    title: "Protocol Integration & Technical Workshops",
    description:
      "[Placeholder] Hands-on technical sessions that get builders shipping directly on partner protocols — from first testnet transaction to mainnet deploy.",
    icon: Code2,
  },
  {
    // PLACEHOLDER — replace with real copy
    number: "05",
    title: "Hackathon Design & Execution",
    description:
      "[Placeholder] End-to-end hackathon production — problem statements, judging frameworks, and follow-through — so winning projects don't die after demo day.",
    icon: Trophy,
  },
  {
    // PLACEHOLDER — replace with real copy
    number: "06",
    title: "Ecosystem Reporting & Impact Analytics",
    description:
      "[Placeholder] Transparent, documented reporting on every activation — registrations, retention, and on-chain activity — delivered to partners as proof, not projections.",
    icon: BarChart3,
  },
];
