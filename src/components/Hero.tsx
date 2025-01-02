import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5598986118891", "_blank");
  };
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20 mt-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-left fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transformamos Suas Ideias Em
              <span className="text-primary"> Apps Excepcionais</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Desenvolvimento de aplicativos móveis especializado para suas necessidades empresariais. Criamos soluções inovadoras que impulsionam o crescimento e o engajamento do usuário.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start slide-up">
            <Button onClick={handleWhatsAppClick} size="lg" className="group">
              Inicie Seu Projeto
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
          </div>
        </div>
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1608452964553-9b4d97b2752f"
            alt="Desenvolvimento de Aplicativos Móveis"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Projetos Ativos: 12+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};