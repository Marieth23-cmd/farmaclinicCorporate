import Link from "next/link";


export default function Solucao() {

const email = "dmt@farmaclinic.net";
  const subject = "Solicitação de Proposta";
  const body = "";


  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative w-full hidden lg:block"
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
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
            <div className="w-[46%] min-w-[280px] md:w-[75%] lg:w-[80%]">
              <h1
                className="text-white leading-tight mb-5"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)",}}
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

              <Link
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  aria-label="Solicitar Proposta por Email"
                className="bg-[#44a631] hover:bg-green-600 text-white rounded-full font-medium transition-colors mb-4"
                style={{
                  fontSize: "clamp(0.9rem, 1vw, 1rem)",
                  padding: "2% 4.5%",
                }}
              >
                Solicitar Proposta
              </Link>
            </div>
          </div>
        </div>
      </div>


{/* ── MOBILE ── */}

<div
  className="relative w-full block lg:hidden min-h-[600px]"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dhpa1juyr/image/upload/v1778855667/Img_banner_Amb_1_n3jekt.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  }}
>
  <div className="absolute inset-0 z-10 flex items-start md:items-center">
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      <div className="w-full max-w-[350px] md:max-w-[450px] pt-16">

        <h1
          className="text-white leading-tight mb-4 font-semibold"
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2.4rem)",
          }}
        >
          Soluções que
          <span className="font-bold"> se adaptam à sua empresa</span>
        </h1>

        <p
          className="text-gray-200 leading-relaxed mb-4"
          style={{
            fontSize: "clamp(0.95rem, 1vw, 1.05rem)",
          }}
        >
          A FarmaClinic Corporate conta com equipas de profissionais
          qualificados e unidades móveis totalmente equipadas para a
          realização de exames ocupacionais.
        </p>

        <p
          className="text-gray-200 leading-relaxed mb-6"
          style={{
            fontSize: "clamp(0.95rem, 1vw, 1.05rem)",
          }}
        >
          Levamos os nossos serviços até à sua empresa, evitando
          deslocações e garantindo maior comodidade e eficiência.
        </p>

        <button
          className="bg-[#44a631] hover:bg-green-600 text-white rounded-full font-medium transition-colors px-6 py-3"
          style={{
            fontSize: "clamp(0.95rem, 1vw, 1rem)",
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