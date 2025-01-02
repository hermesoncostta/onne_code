import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20 mt-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-left fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              We Transform Your Ideas Into
              <span className="text-primary"> Exceptional Apps</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert mobile app development tailored to your business needs. We create innovative solutions that drive growth and user engagement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start slide-up">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Mobile App Development"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Active Projects: 12+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};