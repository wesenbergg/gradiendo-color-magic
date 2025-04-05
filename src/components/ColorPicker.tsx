
import React, { useState, useRef, useEffect } from "react";
import { useGradient } from "@/context/GradientContext";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ColorPicker = () => {
  const { gradient, addColorStop, updateColorStop, removeColorStop } = useGradient();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const handleColorChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    updateColorStop(index, e.target.value);
  };

  const handleRemoveColor = (index: number) => {
    removeColorStop(index);
  };

  const handleAddColor = () => {
    if (gradient.colorStops.length < 5) {
      addColorStop("#ffffff");
    }
  };

  const handleMouseDown = (index: number) => {
    setDraggingIndex(index);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggingIndex === null || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const position = Math.min(Math.max(0, ((e.clientX - rect.left) / rect.width) * 100), 100);

    updateColorStop(draggingIndex, gradient.colorStops[draggingIndex].color, position);
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
  };

  useEffect(() => {
    if (draggingIndex !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingIndex]);

  return (
    <div className="w-full mt-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">Color Stops</h3>
        <Button
          onClick={handleAddColor}
          disabled={gradient.colorStops.length >= 5}
          size="sm"
          aria-label="Add color stop"
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> Add Color
        </Button>
      </div>

      <div
        ref={sliderRef}
        className="relative h-8 w-full rounded-md bg-secondary mb-6"
        style={{
          background: `linear-gradient(to right, ${gradient.colorStops
            .map((stop) => `${stop.color} ${stop.position}%`)
            .join(", ")})`,
        }}
      >
        {gradient.colorStops.map((colorStop, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="color-stop"
                  style={{
                    left: `${colorStop.position}%`,
                    top: "50%",
                    backgroundColor: colorStop.color,
                    zIndex: draggingIndex === index ? 20 : 10,
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleMouseDown(index);
                  }}
                  role="slider"
                  aria-label={`Color stop ${index + 1}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={colorStop.position}
                ></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Position: {colorStop.position.toFixed(0)}%</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {gradient.colorStops.map((colorStop, index) => (
          <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-secondary/50 hover:bg-secondary">
            <input
              type="color"
              value={colorStop.color}
              onChange={(e) => handleColorChange(index, e)}
              className="w-8 h-8 rounded-md cursor-pointer"
              aria-label={`Select color for stop ${index + 1}`}
            />
            <div className="flex-1">
              <span className="text-sm font-mono">{colorStop.color}</span>
              <div className="text-xs opacity-70">{colorStop.position.toFixed(0)}%</div>
            </div>
            {gradient.colorStops.length > 2 && (
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => handleRemoveColor(index)}
                aria-label={`Remove color stop ${index + 1}`}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
