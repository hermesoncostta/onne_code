import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground">Vamos discutir seu projeto</p>
        </div>
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
    </section>
  );
};