import React, { createContext } from "react";

export type ColorStop = {
  color: string;
  position: number;
};

export type GradientState = {
  type: "linear" | "radial";
  angle: number;
  colorStops: ColorStop[];
  darkMode: boolean;
};

export type GradientContextType = {
  gradient: GradientState;
  setGradient: React.Dispatch<React.SetStateAction<GradientState>>;
  toggleDarkMode: () => void;
  addColorStop: (color: string) => void;
  updateColorStop: (index: number, color: string, position?: number) => void;
  removeColorStop: (index: number) => void;
  generateCssCode: () => string;
};

export const GradientContext = createContext<GradientContextType | undefined>(
  undefined
);
