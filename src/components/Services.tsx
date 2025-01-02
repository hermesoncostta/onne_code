import { Smartphone, Code, Gauge, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "iOS Development",
    description: "Native iOS apps with stunning UIs and smooth performance",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
  },
  {
    title: "Android Development",
    description: "Robust Android applications that users love",
    icon: <Code className="h-12 w-12 text-primary" />,
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
    icon: <Gauge className="h-12 w-12 text-primary" />,
  },
  {
    title: "Secure Solutions",
    description: "Built-in security and data protection",
    icon: <Shield className="h-12 w-12 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive mobile development solutions</p>
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