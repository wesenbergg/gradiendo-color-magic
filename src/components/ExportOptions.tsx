import { useState } from "react";
import { useGradient } from "@/context/GradientContext";
import {
  generateGradientStyle,
  exportGradientAsImage,
  copyToClipboard,
} from "@/utils/gradientUtils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, Check, Monitor, Smartphone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ExportOptions = () => {
  const { gradient, generateCssCode } = useGradient();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [exportSize, setExportSize] = useState<"desktop" | "mobile">("desktop");
  const [exporting, setExporting] = useState(false);

  const gradientStyle = generateGradientStyle(
    gradient.type,
    gradient.angle,
    gradient.colorStops
  );

  const cssCode = generateCssCode();

  const handleCopyCSS = async () => {
    const success = await copyToClipboard(cssCode);

    if (success) {
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "CSS code has been copied to your clipboard",
      });

      setTimeout(() => setCopied(false), 2000);
    } else {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleExportImage = async () => {
    try {
      setExporting(true);
      let width, height;

      if (exportSize === "desktop") {
        width = 1920;
        height = 1080;
      } else {
        width = 390;
        height = 844;
      }

      const dataUrl = await exportGradientAsImage(gradientStyle, width, height);

      const link = document.createElement("a");
      link.download = `gradiendo-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();

      toast({
        title: "Export successful",
        description: "Gradient image has been downloaded",
      });
    } catch (error) {
      console.error("Export error:", error);
      toast({
        title: "Export failed",
        description: "Could not export image",
        variant: "destructive",
      });
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-2">Export</h3>
      <Tabs defaultValue="css">
        <TabsList className="mb-2">
          <TabsTrigger value="css">CSS Code</TabsTrigger>
          <TabsTrigger value="image">Image</TabsTrigger>
        </TabsList>

        <TabsContent value="css" className="mt-0">
          <div className="relative">
            <pre className="p-4 rounded-md bg-secondary/50 text-sm font-mono overflow-x-auto">
              {cssCode}
            </pre>
            <Button
              size="sm"
              onClick={handleCopyCSS}
              className="absolute top-2 right-2"
              aria-label="Copy CSS to clipboard"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="image" className="mt-0 space-y-4">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setExportSize("desktop")}
              variant={exportSize === "desktop" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <Monitor className="h-4 w-4" /> Desktop (1920×1080)
            </Button>
            <Button
              onClick={() => setExportSize("mobile")}
              variant={exportSize === "mobile" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <Smartphone className="h-4 w-4" /> Mobile (390×844)
            </Button>
          </div>

          <Button
            onClick={handleExportImage}
            className="w-full"
            disabled={exporting}
            aria-label="Export gradient as image"
          >
            {exporting ? (
              "Exporting..."
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" /> Export as PNG
              </>
            )}
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExportOptions;
