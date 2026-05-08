"use client";
import Image from "next/image"
import {motion} from "framer-motion"

export default function Servicostrabalho() {
  const Servicos = [
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv1_jelxhz.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864356/Img_serv1_mfyahr.webp",
      title: "Exames Admissionais",
      descricacao: "Avaliação da aptidão física e mental para o exercício da função.",
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
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv5_mypu1r.png",
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
      <div className="max-w-6xl mx-auto px-4"
      >
        
        {/* Título */}
        <div className="mb-14">
          <h1 className="text-black leading-tight mb-[2%]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
            Serviços de{" "}
            <span className="font-bold text-[#1b73a0]">
              Medicina do Trabalho
            </span>
          </h1>

          <p className="text-base lg:text-lg mt-3 text-gray-600">
            Soluções completas para garantir a saúde, segurança e conformidade
            legal da sua empresa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          {Servicos.map((index, key) => (
            <motion.div
              key={key}
              className="bg-white rounded-2xl shadow-sm border border-gray-300 relative"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: key * 0.2,
                ease: "easeOut",
              }}
            >
              {/* Imagem */}
              <div className="relative w-full h-52 rounded-t-2xl overflow-hidden">
                <Image
                  src={index.image}
                  alt={index.title}
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Ícone */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20 border-x-4 border-white rounded-full bg-white">
                <Image
                  src={index.imageicon}
                  alt="icone"
                  width={50}
                  height={50}
                  className="object-contain h-20 w-16 lg:h-16 lg:w-14"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 pt-8">
                <h2 className="text-xl lg:text-lg font-semibold text-[#1b73a0]">
                  {index.title}
                </h2>

                <p className="text-sm lg:text-[15px] text-gray-600 mt-2 leading-relaxed">
                  {index.descricacao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão */}
        <div className="mt-6">
          <button className="bg-[#44a631] hover:bg-[#3d8f2d] text-white px-6 py-3 rounded-full font-medium shadow-lg">
            VER TODOS OS SERVIÇOS
          </button>
        </div>
      </div>
    </div>
  )
}