
import { useGradient } from "@/context/GradientContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { gradient, toggleDarkMode } = useGradient();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleDarkMode}
      aria-label={gradient.darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full"
    >
      {gradient.darkMode ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;
