import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Servicos() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-10 lg:py-16">
      
      <div className="grid lg:grid-cols-2 gap-10 ">
        
        {/* Lado esquerdo */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-[#0a68a7d8]">
            Porquê investir na
            <span className="font-bold"> saúde ocupacional?</span>
          </h1>

          <p className="text-gray-600 mb-6 text-base lg:text-lg">
            Investir na saúde ocupacional é proteger os seus
            colaboradores e fortalecer a sua empresa.
          </p>

          <p className="text-gray-600 text-base lg:text-lg">
            Com o acompanhamento adequado, é possível prevenir
            riscos, melhorar o desempenho das equipas e garantir
            um ambiente de trabalho mais seguro e produtivo.
          </p>

          {/* Caixa benefícios */}
          <div className="mt-10 bg-black/5 px-4 py-4 rounded-tr-[120px]">
            <h2 className="text-xl font-bold mb-6 text-[#0a68a7d8]">
              Benefícios
            </h2>

            <p className="flex gap-2 mb-3">
              <FaCheck className="text-[#0a68a7d8]" />
              Aumento da produtividade
            </p>

            <p className="flex gap-2 mb-3">
              <FaCheck className="text-[#0a68a7d8]" />
              Redução do absentismo
            </p>

            <p className="flex gap-2 mb-3">
              <FaCheck className="text-[#0a68a7d8]" />
              Prevenção de doenças ocupacionais
            </p>

            <p className="flex gap-2">
              <FaCheck className="text-[#0a68a7d8]" />
              Maior segurança no ambiente de trabalho
            </p>
          </div>
        </div>

        {/* Lado direito */}
        <div className="relative w-full md:h-[400px] lg:h-[500px] min-h-[350px]">
          <Image
            src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776782372/Img_logo_ykulq6.png"
            alt="Saúde ocupacional"
            fill
           
          />
        </div>

      </div>
    </section>
  );
}