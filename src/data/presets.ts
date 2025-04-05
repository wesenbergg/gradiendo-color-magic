
import { GradientState } from "../context/GradientContext";

interface PresetCategory {
  name: string;
  presets: GradientState[];
}

export const presetCategories: PresetCategory[] = [
  {
    name: "Pastels",
    presets: [
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#F2FCE2", position: 0 },
          { color: "#E5DEFF", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 45,
        colorStops: [
          { color: "#FEF7CD", position: 0 },
          { color: "#FEC6A1", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#FFDEE2", position: 0 },
          { color: "#FDE1D3", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 180,
        colorStops: [
          { color: "#D3E4FD", position: 0 },
          { color: "#F1F0FB", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#F2FCE2", position: 0 },
          { color: "#FDE1D3", position: 50 },
          { color: "#FFDEE2", position: 100 },
        ],
        darkMode: false,
      },
    ],
  },
  {
    name: "Vibrant",
    presets: [
      {
        type: "linear",
        angle: 45,
        colorStops: [
          { color: "#8B5CF6", position: 0 },
          { color: "#D946EF", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#F97316", position: 0 },
          { color: "#0EA5E9", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#22C55E", position: 0 },
          { color: "#0EA5E9", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 180,
        colorStops: [
          { color: "#F97316", position: 0 },
          { color: "#D946EF", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#8B5CF6", position: 0 },
          { color: "#0EA5E9", position: 50 },
          { color: "#22C55E", position: 100 },
        ],
        darkMode: false,
      },
    ],
  },
  {
    name: "Sunset",
    presets: [
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#F97316", position: 0 },
          { color: "#C026D3", position: 50 },
          { color: "#4F46E5", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#FEF3C7", position: 0 },
          { color: "#F97316", position: 50 },
          { color: "#7C3AED", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 45,
        colorStops: [
          { color: "#FBBF24", position: 0 },
          { color: "#EF4444", position: 50 },
          { color: "#8B5CF6", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#FEF3C7", position: 0 },
          { color: "#FB923C", position: 33 },
          { color: "#E879F9", position: 66 },
          { color: "#6366F1", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "radial",
        angle: 0,
        colorStops: [
          { color: "#FBBF24", position: 0 },
          { color: "#FB923C", position: 25 },
          { color: "#EF4444", position: 50 },
          { color: "#DB2777", position: 75 },
          { color: "#8B5CF6", position: 100 },
        ],
        darkMode: false,
      },
    ],
  },
  {
    name: "Ocean",
    presets: [
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#0EA5E9", position: 0 },
          { color: "#2563EB", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#22D3EE", position: 0 },
          { color: "#0EA5E9", position: 50 },
          { color: "#2563EB", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 45,
        colorStops: [
          { color: "#0EA5E9", position: 0 },
          { color: "#3B82F6", position: 50 },
          { color: "#4F46E5", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "radial",
        angle: 0,
        colorStops: [
          { color: "#22D3EE", position: 0 },
          { color: "#0EA5E9", position: 50 },
          { color: "#1E3A8A", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#0C4A6E", position: 0 },
          { color: "#0EA5E9", position: 50 },
          { color: "#BAE6FD", position: 100 },
        ],
        darkMode: false,
      },
    ],
  },
  {
    name: "Forest",
    presets: [
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#22C55E", position: 0 },
          { color: "#16A34A", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#84CC16", position: 0 },
          { color: "#22C55E", position: 50 },
          { color: "#15803D", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 45,
        colorStops: [
          { color: "#A3E635", position: 0 },
          { color: "#16A34A", position: 50 },
          { color: "#14532D", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "radial",
        angle: 0,
        colorStops: [
          { color: "#A3E635", position: 0 },
          { color: "#22C55E", position: 50 },
          { color: "#14532D", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#365314", position: 0 },
          { color: "#16A34A", position: 50 },
          { color: "#D9F99D", position: 100 },
        ],
        darkMode: false,
      },
    ],
  },
  {
    name: "Night",
    presets: [
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#1E293B", position: 0 },
          { color: "#0F172A", position: 100 },
        ],
        darkMode: true,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#334155", position: 0 },
          { color: "#1E293B", position: 50 },
          { color: "#020617", position: 100 },
        ],
        darkMode: true,
      },
      {
        type: "linear",
        angle: 45,
        colorStops: [
          { color: "#475569", position: 0 },
          { color: "#1E293B", position: 50 },
          { color: "#020617", position: 100 },
        ],
        darkMode: true,
      },
      {
        type: "radial",
        angle: 0,
        colorStops: [
          { color: "#334155", position: 0 },
          { color: "#1E293B", position: 50 },
          { color: "#020617", position: 100 },
        ],
        darkMode: true,
      },
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#020617", position: 0 },
          { color: "#1E293B", position: 50 },
          { color: "#475569", position: 100 },
        ],
        darkMode: true,
      },
    ],
  },
  {
    name: "Fire",
    presets: [
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#EF4444", position: 0 },
          { color: "#F97316", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#FEF08A", position: 0 },
          { color: "#F97316", position: 50 },
          { color: "#B91C1C", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 45,
        colorStops: [
          { color: "#FBBF24", position: 0 },
          { color: "#EA580C", position: 50 },
          { color: "#991B1B", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "radial",
        angle: 0,
        colorStops: [
          { color: "#FBBF24", position: 0 },
          { color: "#F97316", position: 50 },
          { color: "#991B1B", position: 100 },
        ],
        darkMode: false,
      },
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#7F1D1D", position: 0 },
          { color: "#EA580C", position: 50 },
          { color: "#FEF08A", position: 100 },
        ],
        darkMode: false,
      },
    ],
  },
  {
    name: "Cosmic",
    presets: [
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#6D28D9", position: 0 },
          { color: "#4F46E5", position: 50 },
          { color: "#2563EB", position: 100 },
        ],
        darkMode: true,
      },
      {
        type: "linear",
        angle: 90,
        colorStops: [
          { color: "#8B5CF6", position: 0 },
          { color: "#6D28D9", position: 50 },
          { color: "#1E40AF", position: 100 },
        ],
        darkMode: true,
      },
      {
        type: "linear",
        angle: 45,
        colorStops: [
          { color: "#C026D3", position: 0 },
          { color: "#8B5CF6", position: 50 },
          { color: "#2563EB", position: 100 },
        ],
        darkMode: true,
      },
      {
        type: "radial",
        angle: 0,
        colorStops: [
          { color: "#8B5CF6", position: 0 },
          { color: "#6D28D9", position: 50 },
          { color: "#1E3A8A", position: 100 },
        ],
        darkMode: true,
      },
      {
        type: "linear",
        angle: 135,
        colorStops: [
          { color: "#1E3A8A", position: 0 },
          { color: "#7C3AED", position: 50 },
          { color: "#E879F9", position: 100 },
        ],
        darkMode: true,
      },
    ],
  },
];

// Flatten all presets for easy access
export const allPresets = presetCategories.reduce(
  (acc, category) => [...acc, ...category.presets],
  [] as GradientState[]
);

export const getRandomPreset = (): GradientState => {
  const randomIndex = Math.floor(Math.random() * allPresets.length);
  return { ...allPresets[randomIndex] };
};
