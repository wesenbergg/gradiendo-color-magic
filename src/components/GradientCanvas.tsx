import { useGradient } from "@/context/GradientContext";
import { generateGradientStyle } from "@/utils/gradientUtils";

const GradientCanvas = () => {
  const { gradient } = useGradient();
  const gradientStyle = generateGradientStyle(
    gradient.type,
    gradient.angle,
    gradient.colorStops
  );

  return (
    <div
      className="gradient-canvas w-full aspect-video"
      style={{ background: gradientStyle }}
      role="img"
      aria-label="Gradient preview"
    />
  );
};

export default GradientCanvas;
