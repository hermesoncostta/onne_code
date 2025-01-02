import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5598986118891", "_blank");
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/one.png" alt="Logo da Empresa" className="h-6" />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Depoimentos</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
          <Button variant="outline" onClick={handleWhatsAppClick}>Começar Agora</Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};