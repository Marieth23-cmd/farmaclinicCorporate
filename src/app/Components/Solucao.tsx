import Image from "next/image";

export default function Solucao() {
  return (
    <section className="relative py-8 md:py-10 lg:py-16">

      <Image
        src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776783831/Img_banner_Amb_wcwqyy.png"
        alt="solução"
        width={1600}
        height={700}
        className="w-full h-[500px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-white leading-snug">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Soluções que
              <span className="font-bold"> se adaptam à sua empresa</span>
            </h1>

            <p className="mb-4">
              A FarmaClinic Corporate conta com equipas de profissionais
              qualificados e unidades móveis totalmente equipadas para a
              realização de exames ocupacionais.
            </p>

            <p className="mb-6">
              Levamos os nossos serviços até à sua empresa, evitando
              deslocações e garantindo maior comodidade e eficiência.
            </p>

             
       <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
          Solicitar Proposta
         </button>

          </div>
        </div>
      </div>
    </section>
  );
}