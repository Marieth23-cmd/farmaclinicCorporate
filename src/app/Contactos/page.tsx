"use client";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "next/image";
import Wpp from "../Components/Wpp" 
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Contactos() {
const phone = "244941326479";
const message = "Olá, gostaria de obter mais informações.";
const email = "dmt.farmaclinic.net";
const subject = "Solicitação de Proposta";

  return (
    <div >
        <Header />
      
        <div > 
           <Wpp/>
       <section className="relative w-full overflow-hidden">
      
            {/* ── DESKTOP ──GKIFUNSUNI */}
            <div className="relative w-full mt-20 hidden lg:block">
              <Image
                src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1777995567/Img_banner_Contacto_weua9r.png"
                alt="Hero"
                width={1600}
                height={560}
                priority
                className="w-full h-auto block"
              />

              
           
      
              <div className="absolute inset-0 z-10 flex items-center max-w-6xl mx-auto px-4  sm:px-6 md:px-8">
               
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



      {/* ── Mobile ──GKIFUNSUNI */}
          <div className="relative mt-20 w-full block lg:hidden">
              <Image
                src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1778855663/Img_banner_Contacto_phk9b6.webp"
                alt="Hero"
                width={1600}
                height={560}
                priority
                className="w-full h-auto block overflow-hidden"
              />

              
           
      
              <div className="absolute inset-0 z-10 flex items-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
               
                  <motion.h1
                    className="text-white text-2xl max-w-xl mb-4 font-bold"
                   
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Contacto
                   
                  </motion.h1>
                 
                
              </div>
            </div>
</section>





<section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 ">
  <h1
    className="mb-8 font-bold text-[#1b73a0] leading-tight"
   style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)",
        }}
  >
    Fale Conosco
  </h1>

  {/* GRID principal (resolve todos os problemas de responsividade) */}
  <div className="grid md:grid-cols-2 gap-8 md:gap-16">

    {/* CONTACTOS */}
    <div className="space-y-6">

      {/* Telefones + Email */}
      <div className="space-y-4">

        <p
          className="text-gray-600 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2"
          style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
        >
          <span className="font-bold">Telefones:</span>
          <span className="flex flex-col">
            <span>+244 947 885 316</span>
            <span>+244 912 907 048</span>
          </span>
        </p>

        <p
          className="text-gray-600 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2"
          style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
        >
          <span className="font-bold">Email:</span>
          <a className="cursor-pointer" href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} target="_blank" rel="noopener noreferrer">
            dmt@farmaclinic.net
          </a>
        </p>

      </div>

      {/* WhatsApp box */}
      <div className="flex flex-col items-start bg-black/5 px-4 py-4 rounded-lg">
        <p
          className="font-bold flex items-center gap-2 text-gray-700"
          style={{ fontSize: "clamp(1rem, 1.1vw, 1.25rem)" }}
        >
          <FaWhatsapp className="text-[1.25rem] md:text-2xl text-[#44a631]" />
          FALE CONOSCO
        </p>

        <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"
          className="text-[#44a631] mt-1"
          style={{ fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
        >
          +244 941 326 479
        </a>
      </div>
    </div>

  </div>
</section>



       

       <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-8 md:pb-16">
  <div className="flex flex-col lg:flex-row gap-8 items-stretch">

    {/* Texto */}
    <div className="flex flex-col justify-between lg:w-1/2">

      <h1
      style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)",
        }}
       className="text-[#1b73a0] font-bold  lg:text-4xl leading-tight mb-4 lg:mb-0">
        Localização
      </h1>

      <div className="flex flex-col gap-10 sm:gap-12  max-w-md">

        {/* Endereço */}
        <div className="max-w-72 md:max-w-none">
          <p className="font-bold text-base sm:text-lg">
            Farmaclinic - Centro Médico
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Rua 11 de Novembro, S/N BAIRRO 1º Viana, Luanda - Angola
          </p>
        </div>

        {/* Como chegar */}
        <div className="space-y-1">
          <p className="font-bold text-[#1b73a0] text-base sm:text-lg">
            Como Chegar
          </p>
          <p className="text-gray-600 text-sm max-w-72 md:max-w-none  sm:text-base leading-relaxed">
            Estamos localizados numa das principais vias de Luanda, com fácil acesso para toda zona de Luanda Sul.
          </p>
        </div>

      </div>
    </div>

    {/* Mapa */}
    <div className="lg:w-1/2 w-full min-h-[300px] sm:min-h-[350px] md:min-h-[250px]">
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.567756791385!2d13.363646176069674!3d-8.919713691586741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f823b9724561%3A0x6f5d0146fdfae64c!2sFARMACLINIC!5e0!3m2!1spt-PT!2sus!4v1781606143307!5m2!1spt-PT!2sus"
      className="w-full h-full rounded-lg"
      style={{ border: 0, minHeight: "300px" }}
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