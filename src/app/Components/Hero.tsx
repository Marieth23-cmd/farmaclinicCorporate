import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* ── DESKTOP ──GKIFUNSUNI */}
      <div className="relative w-full  lg:py-16">
        <Image
          src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776698271/Img_banner_top_ptqnqd.webp"
          alt="Hero"
          width={1600}
          height={560}
          priority
          className="w-full h-auto block"
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-16 sm:px-4 lg:px-8 w-full">
            <h1
              className="text-white leading-tight max-w-xl mb-[2%]"
              style={{ fontSize: "clamp(0.9rem, 2.6vw, 3rem)" }}
            >
              Cuidar da saúde dos seus colaboradores
              <span className="font-bold"> é investimento no sucesso da sua empresa</span>
            </h1>
            <p
              className="text-gray-200 mb-[3%] leading-relaxed max-w-xl"
              style={{ fontSize: "clamp(1rem, 2vw, 1.05rem)" }}
            >
              Medicina Ocupacional com rigor, proximidade e soluções adaptadas à sua organização
            </p>
            <button
              className="bg-[#44a631] hover:bg-[#3d8f2d] text-white rounded-full font-medium transition-colors"
              style={{
                fontSize: "clamp(0.5rem, 0.9vw, 1rem)",
                padding: "1% 4%",
              }}
            >
              Solicitar Proposta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}