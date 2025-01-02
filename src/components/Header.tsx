import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Company Logo" className="h-8" />
          <span className="text-xl font-bold text-primary">AppCraft</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          <Button variant="outline">Get Started</Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};