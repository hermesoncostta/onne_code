import { Smartphone, Code, Gauge, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Desenvolvimento iOS",
    description: "Apps nativos para iOS com interfaces incríveis e alto desempenho",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
  },
  {
    title: "Desenvolvimento Android",
    description: "Aplicativos Android robustos que os usuários adoram",
    icon: <Code className="h-12 w-12 text-primary" />,
  },
  {
    title: "Entrega Rápida",
    description: "Entrega rápida sem comprometer a qualidade",
    icon: <Gauge className="h-12 w-12 text-primary" />,
  },
  {
    title: "Soluções Seguras",
    description: "Segurança e proteção de dados integradas",
    icon: <Shield className="h-12 w-12 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground">Soluções completas para desenvolvimento mobile</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};