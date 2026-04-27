import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[100vh] md:min-h-[110vh] flex items-center">
        <Image
          src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776698271/Img_banner_top_ptqnqd.webp"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 " />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl lg:max-w-3xl">
           <h1 className="text-[clamp(2rem,4vw,4.5rem)]  text-white leading-tight mb-4">
              Cuidar da saúde dos seus colaboradores
              <span className="font-bold">
                {" "}é investimento no sucesso da sua empresa
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Medicina Ocupacional com rigor, proximidade e soluções adaptadas à sua organização
            </p>

            <button className="bg-[#44a631] hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium">
              Solicitar Proposta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}