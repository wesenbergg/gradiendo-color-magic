import GradientProvider from "@/context/GradientProvider";
import GradientCanvas from "@/components/GradientCanvas";
import ColorPicker from "@/components/ColorPicker";
import GradientControls from "@/components/GradientControls";
import GradientPresets from "@/components/GradientPresets";
import ExportOptions from "@/components/ExportOptions";
import ThemeToggle from "@/components/ThemeToggle";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <GradientProvider>
      <div className="min-h-screen w-full flex justify-center">
        <div className="max-w-7xl w-full p-4 md:p-6">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">
                Gradiendo
                <span className="text-primary ml-1">.</span>
              </h1>
              <p className="text-muted-foreground">
                Beautiful gradient builder
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <GradientCanvas />
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardContent className="p-4 md:p-6">
                  <GradientPresets />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <Card>
                <CardContent className="p-4 md:p-6 space-y-6">
                  <GradientControls />
                  <Separator />
                  <ColorPicker />
                  <Separator />
                  <ExportOptions />
                </CardContent>
              </Card>
            </div>
          </div>

          <footer className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Gradiendo by wesenbergg - Built
              with passion
            </p>
          </footer>
        </div>
      </div>
    </GradientProvider>
  );
};

export default Index;
