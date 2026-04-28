import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Servicos() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:pb-16 "
    >

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

        {/* Lado esquerdo */}
        <div>
          <h1 
          className=" leading-tight mb-[4%] text-[#1b73a0]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
            Porquê investir na
            <span className="font-bold"> saúde ocupacional?</span>
          </h1>

          <p className="text-gray-600 mb-4 sm:mb-6 text-base lg:text-lg">
            Investir na saúde ocupacional é proteger os seus
            colaboradores e fortalecer a sua empresa.
          </p>

          <p className="text-gray-600 text-base lg:text-lg">
            Com o acompanhamento adequado, é possível prevenir
            riscos, melhorar o desempenho das equipas e garantir
            um ambiente de trabalho mais seguro e produtivo.
          </p>

          {/* Caixa benefícios */}
          <div className="mt-6 sm:mt-10 bg-black/5 px-3 sm:px-4 py-3 sm:py-4 rounded-tr-[60px] sm:rounded-tr-[120px]">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#1b73a0]">
              Benefícios
            </h2>

            <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg">
              <FaCheck className="text-[#1b73a0] shrink-0 mt-0.5" />
              Aumento da produtividade
            </p>

            <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg">
              <FaCheck className="text-[#1b73a0] shrink-0 mt-0.5" />
              Redução do absentismo
            </p>

            <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg">
              <FaCheck className="text-[#1b73a0] shrink-0 mt-0.5" />
              Prevenção de doenças ocupacionais
            </p>

            <p className="flex gap-2 text-base lg:text-lg">
              <FaCheck className="text-[#1b73a0] shrink-0 mt-0.5" />
              Maior segurança no ambiente de trabalho
            </p>
          </div>
        </div>

        {/* Lado direito - Imagem */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
          <Image
            src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776782372/Img_logo_ykulq6.png"
            alt="Saúde ocupacional"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
