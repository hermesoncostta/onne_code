import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Vitória",
    role: "CEO da TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "A Onne Code transformou nossa visão em um aplicativo móvel impressionante. A atenção aos detalhes e expertise em experiência do usuário é incomparável.",
    rating: 5
  },
  {
    name: "Douglas Duarte ",
    role: "Fundador da HealthTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content: "Trabalhar com a Onne Code foi um divisor de águas para nossa plataforma de saúde. Eles entregaram além das nossas expectativas.",
    rating: 5
  },
  {
    name: "Emanuelle Dias",
    role: "Gerente de Produto",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "A expertise técnica da equipe e o compromisso com a qualidade tornaram nossa jornada de desenvolvimento de aplicativo tranquila e bem-sucedida.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não acredite apenas em nossa palavra. Veja o que nossos clientes têm a dizer sobre sua experiência trabalhando conosco.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};