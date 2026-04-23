import Image from "next/image";

export default function Servicostrabalho() {
  const servicos = [
    {
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864356/Img_serv1_mfyahr.webp",
      title: "Exames Admissionais",
      descricao: "Avaliação da aptidão física e mental para o exercício da função.",
    },
    {
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864360/Img_serv2_cofnph.png",
      title: "Exames Periódicos",
      descricao: "Monitorização contínua da saúde dos colaboradores.",
    },
    {
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864361/Img_serv3_oo3sj8.png",
      title: "Exames Demissionais",
      descricao: "Avaliação do estado de saúde no momento da desvinculação.",
    },
    {
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864372/Img_serv5_dmkhn5.png",
      title: "Mudança de Função",
      descricao: "Avaliação para novas funções com diferentes riscos.",
    },
    {
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864375/Img_serv4_jts1mp.png",
      title: "Retorno ao Trabalho",
      descricao: "Verificação da aptidão após afastamento prolongado.",
    },
  ];

  return (
    <section className=" py-8 md:py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Serviços de{" "}
            <span className="text-[#0a68a7d8]">Medicina do Trabalho</span>
          </h2>

          <p className="text-gray-600 mt-4 text-base lg:text-lg">
            Soluções completas para proteger colaboradores e garantir conformidade legal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a68a7d8] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm lg:text-base">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}