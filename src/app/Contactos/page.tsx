"use client";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "next/image";
import Wpp from "../Components/Wpp" 
import { FaWhatsapp } from "react-icons/fa";
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
                src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1777995567/Img_banner_Contacto_weua9r.png"
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
                    Contacto
                   
                  </motion.h1>
                 
                
              </div>
            </div>
          </section>


        {/* conteudo da página  1 */}
        <section className="max-w-6xl mx-auto px-4 lg:pb-16">
          <div>

            <h1 className=" leading-tight mb-[3%] text-[#1b73a0] font-bold"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
              Fale Conosco
            </h1>
           
          <div className="flex items-start gap-24 mb-4">
           
        <div className="flex flex-col items-start mb-4">
  
 

        <div className="flex items-start gap-24 mb-10">

            <p className="text-gray-600 text-base lg:text-lg flex" 
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>
              <span className="font-bold">Telefones:</span>
              <span className="flex flex-col ml-1">
                <span>+244 947 885 316</span>
                <span>+244 912 907 048</span>
              </span>
            </p>

            <p className="text-gray-600 text-base lg:text-lg" style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>
              <span className="font-bold">Email:</span>
              <span className="ml-1">dmt@farmaclinic.net</span>
            </p>

          </div>

          <div className="flex flex-col items-start bg-black/5 px-3 sm:px-4 py-3 sm:py-4"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>
            
            <p className="text-gray-600 font-bold text-lg flex gap-2">
              <FaWhatsapp className="text-3xl text-[#44a631]"/>
              FALE CONOSCO
            </p>

            <span className="text-[#44a631]">+244 947 885 316</span>

          </div>
            
          </div>

                    
          </div>
          </div>
      </section>



        <section className="max-w-6xl mx-auto px-4 lg:pb-16">

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">

            {/* Texto */}
            <div className="flex flex-col justify-between lg:w-1/2">
              <h1
                className="leading-tight  text-[#1b73a0] font-bold"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
              >
                Localização
              </h1>

              <div className="flex flex-col gap-16 max-w-[280px] mt-6">
                <span style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>
                  <span className="font-bold block">Farmaclinic - Centro Médico </span>
                  <span> 
                    Rua 11 de Novembro, S/N BAIRRO 1º
                    Viana , Luanda-Angola
                  </span>
                </span> 
              
                <span style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>
                <span className="font-bold text-[#1b73a0] block">Como Chegar </span>
                  Estamos localizados numa das principais vias de
                  Luanda, com fácil acesso para toda zona de Luanda Sul
                </span>
              </div>
            </div>

            {/* Mapa */}
            <div className="lg:w-full w-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6!2d13.2341!3d-8.8368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15b4b4b4b4b%3A0x0!2sFarmaclinic%20Centro%20M%C3%A9dico%2C%20Rua%2011%20de%20Novembro%2C%20Luanda!5e0!3m2!1spt!2sao!4v1700000000000"
                className="w-full h-full"
                style={{ minHeight: "200px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </section>


      </div>
      <Footer />
    </div>
  );
}