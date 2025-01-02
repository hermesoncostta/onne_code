import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            We Transform Your Ideas Into
            <span className="text-primary"> Exceptional Apps</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert mobile app development tailored to your business needs. We create innovative solutions that drive growth and user engagement.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
          <Button size="lg" className="group">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};