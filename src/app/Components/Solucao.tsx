

export default function Solucao() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative w-full"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dhpa1juyr/image/upload/v1776783831/Img_banner_Amb_wcwqyy.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          aspectRatio: "1920 / 640",
        }}
      >
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="w-[46%] min-w-[280px]">
              <h1
                className="text-white leading-tight mb-[4%]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
              >
                Soluções que
                <span className="font-bold"> se adaptam à sua empresa</span>
              </h1>

              <p
                className="text-gray-200 leading-relaxed mb-[4%]"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
              >
                A FarmaClinic Corporate conta com equipas de profissionais
                qualificados e unidades móveis totalmente equipadas para a
                realização de exames ocupacionais.
              </p>

              <p
                className="text-gray-200 leading-relaxed mb-[4%]"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
              >
                Levamos os nossos serviços até à sua empresa, evitando
                deslocações e garantindo maior comodidade e eficiência.
              </p>

              <button
                className="bg-[#44a631] hover:bg-green-600 text-white rounded-full font-medium transition-colors"
                style={{
                  fontSize: "clamp(0.9rem, 1vw, 1rem)",
                  padding: "2% 4.5%",
                }}
              >
                Solicitar Proposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}