import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FaWhatsapp } from "react-icons/fa";

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5598986118891", "_blank");
  };

  return (
    <section id='contact' className="py-20 px-4 bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground">Vamos discutir seu projeto</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input placeholder="Seu Nome" />
            </div>
            <div className="space-y-2">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
              <Textarea placeholder="Conte-nos sobre seu projeto" className="min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
        <div className="text-center">
          <p className="mb-4 text-muted-foreground">Ou fale conosco diretamente pelo WhatsApp</p>
          <Button onClick={handleWhatsAppClick} className="bg-[#25D366] hover:bg-[#20BD5A] gap-2">
            <FaWhatsapp />
            Conversar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};