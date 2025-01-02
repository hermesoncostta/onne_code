import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export const FAQ = () => {
    return (
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quanto tempo leva para desenvolver um aplicativo?</AccordionTrigger>
              <AccordionContent>
                O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Em média, um aplicativo pode levar de 3 a 6 meses para ser desenvolvido.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quais plataformas vocês desenvolvem?</AccordionTrigger>
              <AccordionContent>
                Desenvolvemos para iOS (iPhone) e Android, utilizando tecnologias modernas que permitem criar aplicativos para ambas as plataformas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como funciona o processo de desenvolvimento?</AccordionTrigger>
              <AccordionContent>
                Nosso processo inclui planejamento, design, desenvolvimento, testes e lançamento. Mantemos você envolvido em cada etapa do processo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Vocês oferecem suporte após o lançamento?</AccordionTrigger>
              <AccordionContent>
                Sim, oferecemos suporte contínuo e manutenção após o lançamento do aplicativo para garantir seu funcionamento adequado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    );
  };