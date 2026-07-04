import { Web3Project, FeaturedStat } from "../types";

export const featuredStats: FeaturedStat[] = [
  { label: "Funding Secured", value: "$15,000" },
  { label: "Accelerator", value: "Founders Forge" },
  { label: "On-Chain Anchor", value: "NEAR Protocol" },
  { label: "Token", value: "$VOICE" },
];

export const featuredTech: string[] = [
  "NEAR Protocol",
  "Filecoin",
  "IPFS",
  "LLM Pipelines",
  "X Spaces API",
];

export const web3Projects: Web3Project[] = [
  {
    slug: "ridex",
    name: "RideX",
    vision:
      "A decentralized automobile marketplace where vehicle history is verified on-chain to eliminate fraud and middlemen.",
    technologies: ["Solidity", "IPFS/Filecoin", "React/Next.js", "Polygon", "Base"],
  },
  {
    slug: "nomadlink",
    name: "NomadLink",
    vision:
      "A decentralized travel network powering affordable journeys through on-chain bookings and community-offered lodging.",
    technologies: ["Solidity", "IPFS/Filecoin", "React/Next.js", "ENS", "WalletConnect"],
  },
  {
    slug: "lifeledger",
    name: "LifeLedger",
    vision:
      "A patient-owned medical records system providing resilient, private, and tamper-proof healthcare data.",
    technologies: ["Solidity", "IPFS/Filecoin", "React/Next.js", "Polygon", "Base"],
  },
  {
    slug: "enerlink",
    name: "EnerLink",
    vision:
      "A platform linking communities to solar power and internet connectivity via tokenized resources and micro-transactions.",
    technologies: ["Solidity", "IPFS/Filecoin", "React/Next.js", "Polygon", "Base"],
  },
];
