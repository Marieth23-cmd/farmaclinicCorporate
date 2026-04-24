import Image from "next/image"

export default function Servicostrabalho() {
  const Servicos = [
    {
     imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv1_jelxhz.png",
      image:
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864356/Img_serv1_mfyahr.webp",
      title: "Exames Admissionais",
      descricacao:
        "Avaliação da aptidão física e mental para o exercício da função.",
    },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv2_gbpgym.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864360/Img_serv2_cofnph.png",
      title: "Exames Periódicos",
      descricacao: "Monitorização contínua da saúde dos colaboradores.",
    },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv3_aftdc2.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864361/Img_serv3_oo3sj8.png",
      title: "Exames Demissionais",
      descricacao: "Avaliação do estado de saúde no momento da desvinculação.",
    },
    {
      imageicon:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv5_mypu1r.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864372/Img_serv5_dmkhn5.png",
      title: "Mudança de função",
      descricacao: "Verificação da aptidão após afastamento prolongado.",
    },
    {
     imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv5_mypu1r.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864375/Img_serv4_jts1mp.png",
      title: "Retorno ao Trabalho",
      descricacao: "Avaliação para novas funções com diferentes riscos.",
    },
  ]

  return (
    <div className="py-8 md:py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-lg">
            Serviços de{" "}
            <span className="font-bold text-[#0a68a7d8]">Medicina do Trabalho</span>
          </h1>

          <p className="text-base lg:text-lg mt-3 text-gray-600">
            Soluções completas para garantir a saúde, segurança e conformidade
            legal da sua empresa.
          </p>
        </div>

        {/* GRID CORRIGIDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {Servicos.map((index, key) => (
           <div
            key={key}
            className="bg-white rounded-2xl shadow-sm border border-gray-300 relative"
            >
            {/* Imagem */}
            <div className="relative w-full h-52 rounded-t-2xl overflow-hidden">
                <Image
                src={index.image}
                alt={index.title}
                fill
                className="object-cover"
                />
            </div>

            {/* Ícone fora do card */}
            <div className="absolute  left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
                <Image
                src={index.imageicon}
                alt="icone"
                width={50}
                height={50}
                className="object-contain h-20 w-16"
                />
            </div>

            {/* Conteúdo */}
            <div className="p-6 pt-8">
                <h2 className="text-xl font-semibold text-[#0a68a7d8]">
                {index.title}
                </h2>

                <p className="text-sm lg:text-base text-gray-600 mt-2">
                {index.descricacao}
                </p>
            </div>

            
            </div>
          ))}
          
    
        </div>
         <div className=" mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
            VER TODOS OS SERVIÇOS
              </button>
                </div>
      </div>
    </div>
  )
} 