// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export const Hero = () => {
//   const handleWhatsAppClick = () => {
//     window.open("https://wa.me/5598986118891", "_blank");
//   };

//   return (
//     <>
//       <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:py-20 mt-16">
//         <div className="container mx-auto grid gap-12 md:grid-cols-2 items-center">
//           {/* Texto */}
//           <div className="space-y-8 text-left fade-in">
//             <div className="space-y-4">
//               <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
//                 Transformamos Suas Ideias Em{" "}
//                 <span className="text-primary">Apps Excepcionais</span>
//               </h1>
//               <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
//                 Desenvolvimento de aplicativos móveis especializado para suas
//                 necessidades empresariais. Criamos soluções inovadoras que
//                 impulsionam o crescimento e o engajamento do usuário.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 items-start slide-up">
//               <Button onClick={handleWhatsAppClick} size="lg" className="group">
//                 Inicie Seu Projeto
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </div>
//           </div>

//           {/* Imagem e Indicadores */}
//           <div className="relative flex justify-center md:block">
//             <img
//               src="/banner.png"
//               alt="Desenvolvimento de Aplicativos Móveis"
//               className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[600px]"
//             />
//             {/* Indicadores */}
//             <div className="absolute -bottom-6 -left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-xs sm:text-sm font-medium">
//                   Projetos Ativos: 12+
//                 </span>
//               </div>
//             </div>
//             <div className="absolute -top-6 -right-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
//                 <span className="text-xs sm:text-sm font-medium">
//                   Clientes Satisfeitos: 50+
//                 </span>
//               </div>
//             </div>
//             <div className="absolute -top-6 -left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                 <span className="text-xs sm:text-sm font-medium">
//                   Anos de Experiência: 5+
//                 </span>
//               </div>
//             </div>
//             <div className="absolute -bottom-6 -right-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
//                 <span className="text-xs sm:text-sm font-medium">
//                   Projetos Concluídos: 100+
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Logos */}
//       <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-20 animate-fade-in">
//         <img
//           src="/aggenda.png"
//           alt="Company 1"
//           className="h-6 sm:h-8 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
//         />
//         <img
//           src="/breed.png"
//           alt="Company 2"
//           className="h-6 sm:h-8 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
//         />
//         <img
//           src="/cakke_origin.png"
//           alt="Company 3"
//           className="h-6 sm:h-8 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
//         />
//         <img
//           src="/drivelog.png"
//           alt="Company 4"
//           className="h-6 sm:h-8 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
//         />
//         <img
//           src="/reddituscinza.png"
//           alt="Company 5"
//           className="h-6 sm:h-8 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
//         />
//       </div>
//     </>
//   );
// };
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5598986118891", "_blank");
  };

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 items-center">
          {/* Texto */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl text-center md:text-start sm:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Transformamos Suas Ideias Em{" "}
                <span className="text-primary">Apps Excepcionais.</span>
              </h1>
              <p className="text-base  sm:text-lg lg:text-xl text-muted-foreground">
                Desenvolvimento de aplicativos móveis especializado para suas
                necessidades empresariais. Criamos soluções inovadoras que
                impulsionam o crescimento e o engajamento do usuário.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start slide-up">
              <Button onClick={handleWhatsAppClick} size="lg" className="group">
                Inicie Seu Projeto
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Imagem e Indicadores */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/banner.png"
              alt="Desenvolvimento de Aplicativos Móveis"
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[550px]"
            />
            {/* Indicadores */}
            <div className="absolute -bottom-6 -left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">
                  Projetos Ativos: 12+
                </span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">
                  Clientes Satisfeitos: 50+
                </span>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">
                  Anos de Experiência: 5+
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">
                  Projetos Concluídos: 100+
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-20 animate-fade-in">
        <img
          src="/aggenda.png"
          alt="Company 1"
          className="h-6 sm:h-8 lg:h-10 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
        <img
          src="/breed.png"
          alt="Company 2"
          className="h-6 sm:h-8 lg:h-10 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
        <img
          src="/cakke_origin.png"
          alt="Company 3"
          className="h-6 sm:h-8 lg:h-10 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
        <img
          src="/drivelog.png"
          alt="Company 4"
          className="h-6 sm:h-8 lg:h-10 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
        <img
          src="/reddituscinza.png"
          alt="Company 5"
          className="h-6 sm:h-8 lg:h-10 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
      </div>
    </>
  );
};
