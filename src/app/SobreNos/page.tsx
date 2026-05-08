"use client";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "next/image";
import Wpp from "../Components/Wpp" 
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Contactos() {
  return (
    <div >
        <Header />
      
        <div > 
           <Wpp/>
       <section className="relative w-full overflow-hidden">
      
            {/* ── DESKTOP ──GKIFUNSUNI */}
            <div className="relative w-full  lg:py-20">
              <Image
                src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1777995568/Img_banner_Sobre_nos_wzs3vf.png"
                alt="Hero"
                width={1600}
                height={560}
                priority
                className="w-full h-auto block"
              />
      
              <div className="absolute inset-0 z-10 flex items-center max-w-6xl mx-auto px-4">
               
                  <motion.h1
                  
                    className="text-white leading-tight max-w-xl mb-[2%] font-bold"
                    style={{ fontSize: "clamp(0.9rem, 2.6vw, 3rem)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Sobre Nós
                   
                  </motion.h1>
                 
               
              </div>
            </div>
          </section>




        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:pb-16 "
            >
        
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        
                {/* Lado esquerdo */}
                <div>
                  
        
                  <p className="text-gray-600 mb-4 sm:mb-6 text-base lg:text-lg">
                   A Farmaclinic Corporate conta com equipas de profissionais qualificados e unidades móveis totalmente equipadas para a realização de exames ocupacionais.
                  </p>
        
                  <p className="text-[#1b73a0] font-bold text-base lg:text-lg">
                   Levamos os nossos serviços até à sua empresa ,
                    evitando deslocações e garantindo maior comodidade e eficiência.
                  </p>
        
                  {/* Caixa benefícios */}
                  <div className="w-[80%] mt-6 sm:mt-10 bg-black/10 px-3 sm:px-4 py-3 sm:py-4 rounded-tr-[60px] sm:rounded-tr-[100px]">
                    
                    <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg text-gray-600">
                      <FaCheck className="text-[#1b73a0] shrink-0 mt-0.5" />
                      Atendimento in loco
                    </p>
        
                    <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg text-gray-600">
                      <FaCheck className="text-[#1b73a0] shrink-0 mt-0.5" />
                      Cobertura nacional
                    </p>
        
                    <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg text-gray-600">
                      <FaCheck className="text-[#1b73a0] shrink-0 mt-0.5" />
                      Equipamentos modernos
                    </p>
        
                    <p className="flex gap-2 text-base lg:text-lg text-gray-600">
                      <FaCheck className="text-[#1b73a0] shrink-0 mt-0.5" />
                      Equipa especializada 
                    </p>
                  </div>
                </div>
        
                {/* Lado direito - Imagem */}
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px]">
                  <Image
                    src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1777995565/Img_logo_Sobre_nos_seipcl.webp"
                    alt="Saúde ocupacional"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
        
              </div>
            </section>
        


      </div>
      <Footer />
    </div>
  );
}