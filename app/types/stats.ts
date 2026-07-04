import { Stat } from "@/types";

// Compact stats shown directly under the hero CTAs
export const heroStats: Stat[] = [
  { value: "257+", label: "Registrations Per Event" },
  { value: "826+", label: "Community Members" },
  { value: "6", label: "African Countries" },
  { value: "8+", label: "Protocol Partners" },
];

// Full "By The Numbers" section — row 1 confirmed, row 2 labels are placeholders
export const statsRowOne: Stat[] = [
  { value: "257", label: "Event Registrations" },
  { value: "110", label: "Active Participants" },
  { value: "826", label: "Community Members" },
  { value: "300", label: "Summit Attendees" },
];

export const statsRowTwo: Stat[] = [
  // PLACEHOLDER labels — replace with real copy
  { value: "20", label: "Campus Activations" },
  { value: "126", label: "Developers Onboarded" },
  { value: "49", label: "Partner Events" },
  { value: "1,000+", label: "Ecosystem Touchpoints" },
];
