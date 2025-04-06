import { useGradient } from "@/context/useGradient";
import { presetCategories } from "@/data/presets";
import { generateGradientStyle } from "@/utils/gradientUtils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const GradientPresets = () => {
  const { setGradient } = useGradient();

  const handlePresetClick = (presetIndex: number, categoryIndex: number) => {
    setGradient({ ...presetCategories[categoryIndex].presets[presetIndex] });
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-2">Presets</h3>
      <Tabs defaultValue={presetCategories[0].name.toLowerCase()}>
        <div className="relative">
          <ScrollArea className="w-full max-w-full">
            <div className="flex pb-4">
              <TabsList className="mb-2 flex flex-nowrap min-w-max">
                {presetCategories.map((category) => (
                  <TabsTrigger
                    key={category.name}
                    value={category.name.toLowerCase()}
                    className="whitespace-nowrap"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <ScrollBar orientation="horizontal" className="h-2" />
          </ScrollArea>
        </div>

        {presetCategories.map((category, categoryIndex) => (
          <TabsContent
            key={category.name}
            value={category.name.toLowerCase()}
            className="mt-0"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {category.presets.map((preset, presetIndex) => (
                <button
                  key={presetIndex}
                  onClick={() => handlePresetClick(presetIndex, categoryIndex)}
                  className="preset-item overflow-hidden"
                  style={{
                    background: generateGradientStyle(
                      preset.type,
                      preset.angle,
                      preset.colorStops
                    ),
                  }}
                  aria-label={`${category.name} preset ${presetIndex + 1}`}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default GradientPresets;
