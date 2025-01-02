import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Sobre Nós</h3>
            <img src='/one.png' className="w-44 mb-5"/>
            <p className="text-sm text-muted-foreground">
              Especialistas em desenvolvimento de aplicativos móveis, transformando ideias em soluções digitais inovadoras.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Desenvolvimento iOS</li>
              <li>Desenvolvimento Android</li>
              <li>UI/UX Design</li>
              <li>Consultoria Mobile</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@onnecode.com.br</li>
              <li>+55 (98) 98611-8891</li>
              <li>São Luís, MA</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/onnecode" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/onnecode" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Onne Code. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};