"use client";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "next/image";
import Wpp from "../Components/Wpp"
import {motion} from "framer-motion"
import Link from "next/link";


export default function Servicos() {


   const Servicos = [
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv1_jelxhz.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864356/Img_serv1_mfyahr.webp",
      title: "Exames Admissionais",
      subtitle1:"Descrição:",
      descricacao: "Avaliam o estado de saúde do candidato , determinando a sua aptidão sísica e mental para a funcão a desempenhar .",
      subtitle2:"Objectivo:",
      objectivio:"Garantir que o colaborador inicia a sua actividade profissional em condições adequadas ao cargo."
    },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv2_gbpgym.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864360/Img_serv2_cofnph.png",
      title: "Exames Periódicos",
      subtitle1:"Descrição:",
      descricacao: "Realizados regularmente , permitem acompanhar a evolução da saúde dos colaboradores e identificar possíveis impactos decorrentes da actividade profissional",
      subtitle2:"Objectivo:",
      objectivio:"Prevenir doenças ocupacionais e monitorizar a exposição a riscos ."
    },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv3_aftdc2.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864361/Img_serv3_oo3sj8.png",
      title: "Exames Demissionais",
      subtitle1:"Descrição:",
      descricacao: "Avaliam o estado do de saúde do colaborador no momento da cessação do vínculo laboral.",
      subtitle2:"Objectivo:",
      objectivio:"Assegurar transparência no processo de desligamento e salvaguardar tanto trabalhador como entidade empregadora."
    },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv5_mypu1r.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864372/Img_serv5_dmkhn5.png",
      title: "Retorno ao Trabalho",
      subtitle1:"Descrição:",
      descricacao: "Verificação da aptidão após afastamento prolongadRealizados após um período de afastamento superior a 30 dias por motivos de saúde.",
      subtitle2:"Objectivo:",
      objectivio:"Confirmar que o colaborador está apto para retornar às suas funções com segurança."
    },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864085/icon_serv5_mypu1r.png",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1776864375/Img_serv4_jts1mp.png",
      title: "Mudança de Função",
      subtitle1:"Descrição:",
      descricacao: "Avaliação necessária quando o colaborador passa a desempenhar uma nova função com diferentes riscos ocupacionais.",
      subtitle2:"Objectivo:",
      objectivio:"Garantir que o trabalhador possui condições físicas e mentais adequadas para nova actividade."
    },
  ]



    const email = "dmt@farmaclinic.net";
  const subject = "Solicitação de Proposta";
  const body = "";


  return (
   <div >
           <Header />
         
           <div > 
              <Wpp/>
          <section className="relative w-full overflow-hidden">
         
               {/* ── DESKTOP ──GKIFUNSUNI */}
               <div className="relative w-full hidden lg:block pt-20 lg:py-20">
                 <Image
                   src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1777995565/Img_banner_Servicos_b0jrc2.webp"
                   alt="Hero"
                   width={1600}
                   height={560}
                   priority
                   className="w-full h-auto block"
                 />
         
                 <div className="absolute inset-0 z-10 flex items-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                   
                     <motion.h1
                   
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                      
                       className="text-white leading-tight max-w-xl mb-[2%] font-bold"
                       style={{ fontSize: "clamp(0.9rem, 2.6vw, 3rem)" }}
                     >
                       Serviços
                      
                     </motion.h1>
                    
                 
                 </div>
               </div>


        {/* ── Mobile ──GKIFUNSUNI */}


         <div className="relative w-full block lg:hidden pt-20">
                 <Image
                   src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1778855665/Img_banner_Top_1_mlqpy9.webp"
                   alt="Hero"
                   width={1600}
                   height={560}
                   priority
                   className="w-full h-auto block"
                 />
         
                 <div className="absolute inset-0 z-10 flex items-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                   
                     <motion.h1
                   
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                      
                       className="text-white text-2xl leading-tight max-w-xl mb-[2%] font-bold"
                       
                     >
                       Serviços
                      
                     </motion.h1>
                    
                 
                 </div>
               </div>
             </section>
   
   
          

          {/* conteudo da página  3 */}
           <section className="max-w-6xl mx-auto py-10 px-4 sm:px-6 md:px-8 md:py-16 lg:pb-8 lg:py-0">
             <motion.div 
             initial={{ opacity: 0, filter: "blur(2px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
             className=" leading-tight mb-[3%] text-gray-600  md:max-w-3xl flex flex-col gap-6"
                 style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>
               
               
                  
                    <span> 
                      A saúde ocupacional desempenha um papel na prevenção de riscos profissionais
                       e na promoção de um ambiente de trabalho seguro , equilibrado e produtivo.
                        </span>

                        <span>
                          Através de um acompanhamento adequado , é possível proteger os colaboradores ,
                           reduzir riscos e contribuir para o crescimento sustentável da sua empresa. 
                        </span>
   
             </motion.div>
         </section>
   
   
   
    <section className="bg-[#cde2ea] pb-12 mb-12">
  
                  <div className="
                    flex flex-col md:flex-row
                    gap-6 md:gap-20
                    max-w-6xl mx-auto px-6 py-8
                    items-start
                  ">

                    {/* TÍTULO */}
                    <span
                      className="text-[#1b73a0] leading-tight"
                      style={{
                        fontSize: "clamp(1.2rem, 2.5vw, 2.5rem)",
                      }}
                    >
                      Cumprimento <span className="font-bold">da Lei Geral do Trabalho</span>
                    </span>

                    {/* TEXTO */}
                    <span
                      className="flex flex-col gap-4 max-w-[500px]"
                      style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
                    >
                      <span 
                      style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
                      className="text-gray-600">
                        Garantir a saúde dos colaboradores não é apenas uma boa prática - é uma exigência legal
                      </span>

                      
                      <span
                      style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
                      className="text-[#1b73a0] font-bold">
                        A Lei Geral do Trabalho estabelece a obrigatoriedade de acompanhamento da saúde dos trabalhadores
                      </span>
                    </span>

                  </div>
                </section>

   


          <div className="py-8 md:py-10 lg:pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 ">
                
                  
                  {/* Título */}
                  <div className="mb-14">
                    <h1 className="text-[#1b73a0] leading-tight mb-[2%] max-w-md"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)",}}>
                
                      Serviços de{" "}
                      <span className="font-bold ">
                        Medicina do Trabalho
                      </span>
                    </h1>
          
                    
                  </div>
          
             {/* Grid */}
                <div className="flex flex-col gap-12 lg:gap-10 rounded-xl">
                  {Servicos.map((index, key) => (
                    <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -2 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                              duration: 0.7,
                              delay: key * 0.2,
                              ease: "easeOut",
                            }}
                            className="flex flex-col md:flex-row  bg-white rounded-2xl shadow-sm border border-gray-300"
                          >
                    {/* Lado da imagem */}
                       <div className="relative w-full h-56 md:w-1/3 md:h-auto shrink-0 overflow-visible">
                          {/* Imagem */}
                          <div className="relative w-full h-full overflow-hidden rounded-l-xl">
                            <Image
                              src={index.image}
                              alt={index.title}
                              fill
                              className="object-cover rounded-l-xl scale-105 transition-transform duration-500 hover:scale-110"
                            />
                          </div>

                          {/* Ícone */}
                          <div
                            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20 border-x-8 lg:border-x-4 border-white rounded-full bg-white"
                          >
                            <Image
                              src={index.imageicon}
                              alt="icone"
                              width={50}
                              height={50}
                              className="object-contain h-20 w-16 lg:h-16 lg:w-14"
                            />
                          </div>
                        </div>
                      {/* Conteúdo ao lado */}
                      <div className="flex-1 p-6 flex max-w-[550px] flex-col justify-center gap-2">
                        <h2 className="text-xl lg:text-lg font-bold text-[#1b73a0]">
                          {index.title}
                        </h2>

                        <p className="text-sm lg:text-[15px] text-gray-600 mt-2 leading-relaxed">
                          <span className="block font-semibold">{index.subtitle1}</span>
                          {index.descricacao}
                        </p>

                        <p className="text-sm lg:text-[15px] text-gray-600 mt-2 leading-relaxed">
                          <span className="block font-semibold">{index.subtitle2}</span>
                          {index.objectivio}
                        </p>
                      </div>

                    </motion.div>
                  ))}
                </div>
                </div>




              

                  
                  
                  
               {/* última secção */}
<section className="pt-10 md:pt-10 lg:pt-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

    {/* TÍTULO (sempre em cima) */}
    <h1
      className="text-[#1b73a0] max-w-3xl mb-8 leading-tight"
      style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)",
        }}
    >
      Serviços prestados <span className="font-bold">directamente na sua Empresa</span>
    </h1>

    {/* CONTEÚDO */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

      {/* COLUNA ESQUERDA */}
      <div className="space-y-6" style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>
        <p className="text-gray-600">
          A farmaclinic corporate dispõe de equipas de profissionais qualificados e unidades
          móveis totalmente equipadas para a realização de exames de saúde ocupacional
        </p>

        <p className="text-gray-600">
          Os nossos serviços são prestados directamente nas instalações da sua empresa,
          evitando deslocações, reduzindo interrupções na actividade laboral e garantindo
          maior comodidade e eficiência no processo
        </p>
      </div>

      {/* COLUNA DIREITA */}
      <div className="space-y-6 " style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>

        <p className="font-bold text-[#1b73a0]">
          Garanta a conformidade e o bem estar da sua equipa
        </p>

        <p className="text-gray-600 mb-6">
          Entre em contacto com a nossa equipa e descubra soluções de saúde ocupacional
          ajustadas às necessidades da sua empresa
        </p>

        <Link
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        aria-label="Solicitar Proposta por Email"
        className="inline-block bg-[#44a631] hover:bg-[#3d8f2d] mt-8 text-white px-6 py-3 rounded-full text-sm transition">
          FALE CONOSCO
        </Link>

      </div>

    </div>
  </div>
</section>






   
   
         </div>
         <Footer />
       </div>
       </div>
  );
}