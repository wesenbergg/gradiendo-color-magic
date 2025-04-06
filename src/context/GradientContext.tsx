import React, { createContext, useState, useContext, ReactNode } from "react";

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

type GradientContextType = {
  gradient: GradientState;
  setGradient: React.Dispatch<React.SetStateAction<GradientState>>;
  toggleDarkMode: () => void;
  addColorStop: (color: string) => void;
  updateColorStop: (index: number, color: string, position?: number) => void;
  removeColorStop: (index: number) => void;
  generateCssCode: () => string;
};

const GradientContext = createContext<GradientContextType | undefined>(
  undefined
);

export const useGradient = () => {
  const context = useContext(GradientContext);
  if (!context) {
    throw new Error("useGradient must be used within a GradientProvider");
  }
  return context;
};

export const GradientProvider = ({ children }: { children: ReactNode }) => {
  const [gradient, setGradient] = useState<GradientState>({
    type: "linear",
    angle: 90,
    colorStops: [
      { color: "#8B5CF6", position: 0 },
      { color: "#D946EF", position: 100 },
    ],
    darkMode: false,
  });

  const toggleDarkMode = () => {
    setGradient((prev) => {
      const newDarkMode = !prev.darkMode;
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return { ...prev, darkMode: newDarkMode };
    });
  };

  const addColorStop = (color: string) => {
    if (gradient.colorStops.length >= 5) return;

    // Calculate a position between the last two color stops or at the middle if only one exists
    let newPosition = 50;
    const stopsCount = gradient.colorStops.length;

    if (stopsCount > 0) {
      if (stopsCount === 1) {
        newPosition = gradient.colorStops[0].position < 50 ? 75 : 25;
      } else {
        // Sort stops by position
        const sortedStops = [...gradient.colorStops].sort(
          (a, b) => a.position - b.position
        );

        // Find largest gap
        let maxGap = 0;
        let gapPosition = 50;

        for (let i = 0; i < sortedStops.length - 1; i++) {
          const gap = sortedStops[i + 1].position - sortedStops[i].position;
          if (gap > maxGap) {
            maxGap = gap;
            gapPosition = sortedStops[i].position + gap / 2;
          }
        }

        newPosition = gapPosition;
      }
    }

    setGradient((prev) => ({
      ...prev,
      colorStops: [...prev.colorStops, { color, position: newPosition }],
    }));
  };

  const updateColorStop = (index: number, color: string, position?: number) => {
    setGradient((prev) => ({
      ...prev,
      colorStops: prev.colorStops.map((stop, i) => {
        if (i === index) {
          return {
            color: color || stop.color,
            position: position !== undefined ? position : stop.position,
          };
        }
        return stop;
      }),
    }));
  };

  const removeColorStop = (index: number) => {
    if (gradient.colorStops.length <= 2) return; // Minimum 2 colors for a gradient

    setGradient((prev) => ({
      ...prev,
      colorStops: prev.colorStops.filter((_, i) => i !== index),
    }));
  };

  const generateCssCode = () => {
    const sortedStops = [...gradient.colorStops].sort(
      (a, b) => a.position - b.position
    );
    const colorStopsString = sortedStops
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(", ");

    if (gradient.type === "linear") {
      return `background: linear-gradient(${gradient.angle}deg, ${colorStopsString});`;
    } else {
      return `background: radial-gradient(circle, ${colorStopsString});`;
    }
  };

  return (
    <GradientContext.Provider
      value={{
        gradient,
        setGradient,
        toggleDarkMode,
        addColorStop,
        updateColorStop,
        removeColorStop,
        generateCssCode,
      }}
    >
      {children}
    </GradientContext.Provider>
  );
};
