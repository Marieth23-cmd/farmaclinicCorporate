import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-[500px] h-[80vh] sm:h-[85vh] md:h-[90vh] w-full overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776698271/Img_banner_top_ptqnqd.webp"
        alt="imagem hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl md:text-left">

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-snug mb-4">
              Cuidar da saúde dos seus colaboradores
              <span className="font-bold"> é investimento no sucesso da sua empresa </span>
            </h1>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6">
              Medicina Ocupacional com rigor, proximidade e soluções adaptadas à sua organização
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#44a631] hover:bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium shadow-lg text-sm sm:text-base transition-colors">
                Solicitar Proposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
