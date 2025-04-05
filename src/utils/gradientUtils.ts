
import { ColorStop } from "../context/GradientContext";

export const generateGradientStyle = (type: "linear" | "radial", angle: number, colorStops: ColorStop[]) => {
  const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);
  const colorStopsString = sortedStops
    .map((stop) => `${stop.color} ${stop.position}%`)
    .join(", ");

  if (type === "linear") {
    return `linear-gradient(${angle}deg, ${colorStopsString})`;
  } else {
    return `radial-gradient(circle, ${colorStopsString})`;
  }
};

export const exportGradientAsImage = (
  gradientStyle: string,
  width = 1200,
  height = 630
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      reject(new Error("Could not get canvas context"));
      return;
    }

    // Create a new image to hold our gradient
    const img = document.createElement("img");
    
    // Create a temporary div to render the gradient
    const tempDiv = document.createElement("div");
    tempDiv.style.background = gradientStyle;
    tempDiv.style.width = `${width}px`;
    tempDiv.style.height = `${height}px`;
    tempDiv.style.position = "absolute";
    tempDiv.style.left = "-9999px";
    
    document.body.appendChild(tempDiv);
    
    // Use html2canvas or similar library if available
    // For now, we'll use a simple approach with drawImage
    
    // Create a data URL from the div
    const svgData = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;background:${gradientStyle};"></div>
        </foreignObject>
      </svg>
    `;
    
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      document.body.removeChild(tempDiv);
      URL.revokeObjectURL(url);
      
      try {
        const dataUrl = canvas.toDataURL("image/png");
        resolve(dataUrl);
      } catch (e) {
        reject(e);
      }
    };
    
    img.onerror = () => {
      document.body.removeChild(tempDiv);
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    
    img.src = url;
  });
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false;
  }
};

export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const getContrastRatio = (hex: string): number => {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  
  // Calculate relative luminance
  const { r, g, b } = rgb;
  const luminance =
    0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
  
  // Calculate contrast ratio against white (1.0) and black (0.0)
  const whiteContrast = (luminance + 0.05) / 0.05;
  const blackContrast = (0.05) / (luminance + 0.05);
  
  return Math.max(whiteContrast, blackContrast);
};

export const getTextColorForBackground = (hex: string): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return '#000000';
  
  const { r, g, b } = rgb;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black for light colors, white for dark colors
  return luminance > 0.5 ? '#000000' : '#ffffff';
};
