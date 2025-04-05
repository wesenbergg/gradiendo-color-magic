
import { useGradient } from "@/context/GradientContext";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const GradientControls = () => {
  const { gradient, setGradient } = useGradient();

  const handleAngleChange = (values: number[]) => {
    setGradient((prev) => ({ ...prev, angle: values[0] }));
  };

  const handleTypeChange = (value: "linear" | "radial") => {
    setGradient((prev) => ({ ...prev, type: value }));
  };

  return (
    <div className="space-y-4 w-full">
      <div>
        <h3 className="text-lg font-medium mb-2">Gradient Type</h3>
        <RadioGroup
          value={gradient.type}
          onValueChange={(value) => handleTypeChange(value as "linear" | "radial")}
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="linear" id="linear" />
            <Label htmlFor="linear">Linear</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="radial" id="radial" />
            <Label htmlFor="radial">Radial</Label>
          </div>
        </RadioGroup>
      </div>

      {gradient.type === "linear" && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-medium">Angle</h3>
            <span className="font-mono text-sm">{gradient.angle}°</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="px-1">
                  <Slider
                    value={[gradient.angle]}
                    min={0}
                    max={360}
                    step={1}
                    onValueChange={handleAngleChange}
                    aria-label="Gradient angle"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Adjust gradient angle</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  );
};

export default GradientControls;
