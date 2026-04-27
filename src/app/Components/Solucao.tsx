import Image from "next/image";

export default function Solucao() {
  return (
    <section className="relative overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">

      <Image
        src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776783831/Img_banner_Amb_wcwqyy.png"
        alt="solução"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white leading-snug">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Soluções que
              <span className="font-bold"> se adaptam à sua empresa</span>
            </h1>

            <p className="text-sm sm:text-base mb-4">
              A FarmaClinic Corporate conta com equipas de profissionais
              qualificados e unidades móveis totalmente equipadas para a
              realização de exames ocupacionais.
            </p>

            <p className="text-sm sm:text-base mb-6">
              Levamos os nossos serviços até à sua empresa, evitando
              deslocações e garantindo maior comodidade e eficiência.
            </p>

            <button className="bg-[#44a631] hover:bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium shadow-lg text-sm sm:text-base transition-colors">
              Solicitar Proposta
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
