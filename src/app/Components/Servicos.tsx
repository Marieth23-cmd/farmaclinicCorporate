import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Servicos() {
  return (
   <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 lg:pb-16">

  <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">

    {/* Lado esquerdo */}
    <div>

      <h1
        className="leading-tight mb-4 text-[#1b73a0] font-semibold"
        style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)",
        }}
      >
        Porquê investir na
        <span className="font-bold"> saúde ocupacional?</span>
      </h1>

      <p
        className="text-gray-600 mb-4 leading-relaxed"
        style={{
          fontSize: "clamp(0.95rem, 1vw, 1.05rem)",
        }}
      >
        Investir na saúde ocupacional é proteger os seus
        colaboradores e fortalecer a sua empresa.
      </p>

      <p
        className="text-gray-600 leading-relaxed"
        style={{
          fontSize: "clamp(0.95rem, 1vw, 1.05rem)",
        }}
      >
        Com o acompanhamento adequado, é possível prevenir
        riscos, melhorar o desempenho das equipas e garantir
        um ambiente de trabalho mais seguro e produtivo.
      </p>

      {/* Caixa benefícios */}
      <div className="lg:w-[80%] mt-8 bg-black/10 px-4 py-5 rounded-tr-[80px]">

        <h2
          className="font-bold mb-5 text-[#1b73a0]"
          style={{
            fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)",
          }}
        >
          Benefícios
        </h2>

        <div className="space-y-3">

          <p
            className="flex gap-2 text-gray-600 leading-relaxed"
            style={{
              fontSize: "clamp(0.92rem, 1vw, 1rem)",
            }}
          >
            <FaCheck className="text-[#1b73a0] shrink-0 mt-1" />
            Aumento da produtividade
          </p>

          <p
            className="flex gap-2 text-gray-600 leading-relaxed"
            style={{
              fontSize: "clamp(0.92rem, 1vw, 1rem)",
            }}
          >
            <FaCheck className="text-[#1b73a0] shrink-0 mt-1" />
            Redução do absentismo
          </p>

          <p
            className="flex gap-2 text-gray-600 leading-relaxed"
            style={{
              fontSize: "clamp(0.92rem, 1vw, 1rem)",
            }}
          >
            <FaCheck className="text-[#1b73a0] shrink-0 mt-1" />
            Prevenção de doenças ocupacionais
          </p>

          <p
            className="flex gap-2 text-gray-600 leading-relaxed"
            style={{
              fontSize: "clamp(0.92rem, 1vw, 1rem)",
            }}
          >
            <FaCheck className="text-[#1b73a0] shrink-0 mt-1" />
            Maior segurança no ambiente de trabalho
          </p>

        </div>
      </div>
    </div>

    {/* Lado direito - Imagem */}
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[650px]">
      <Image
        src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776782372/Img_logo_ykulq6.png"
        alt="Saúde ocupacional"
        fill
        className="object-contain hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>

  </div>
</section>
  );
}
