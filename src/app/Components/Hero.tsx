"use client";
import Image from "next/image";
import {motion} from "framer-motion";

import Link from "next/link"

export default function Hero() {

   const email = "enfermagem@farmaclinic.net";
  const subject = "Solicitação de Proposta";
  const body = "";


  return (
    <section className="relative w-full overflow-hidden">

      {/* ── DESKTOP ──GKIFUNSUNI */}
      <div className="relative w-full md:pt-20  lg:py-16 hidden md:block">
        <Image
          src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776698271/Img_banner_top_ptqnqd.webp"
          alt="Hero"
          width={1600}
          height={560}
          priority
          className="w-full h-auto block"
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-16 sm:px-4 md:px-8 w-full">
            <motion.h1
              className="text-white leading-tight max-w-xl mb-[2%]"
              style={{ fontSize: "clamp(0.9rem, 2.6vw, 4rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Cuidar da saúde dos seus colaboradores 
              <span className="font-bold"> é investir no sucesso da sua empresa</span>
            </motion.h1>
            <motion.p
              className="text-gray-200 mb-[3%] leading-relaxed max-w-xl"
              style={{ fontSize: "clamp(1rem, 2vw, 1.05rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Medicina Ocupacional com rigor, proximidade e soluções adaptadas à sua organização
            </motion.p>
            <Link  href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  aria-label="Solicitar Proposta por Email"

              className="bg-[#44a631] hover:bg-[#3d8f2d] text-white rounded-full font-medium transition-colors"
              style={{
                fontSize: "clamp(0.5rem, 0.9vw, 1rem)",
                padding: "1% 4%",
              }}
            >
              Solicitar Proposta
            </Link>
          </div>
        </div>
      </div>


              {/* ── Mobile ──GKIFUNSUNI */}
      <div className="relative w-full   block md:hidden">
        <Image
          src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1778855665/Img_banner_Top_1_mlqpy9.webp"
          alt="Hero"
          width={1600}
          height={560}
          priority
          className="w-full h-auto block"
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-6xl mx-auto  py-16 px-4 sm:px-6 md:px-8 w-full">
            <motion.h1
              className="text-white text-2xl sm:text-2xl leading-tight max-w-xl mb-3"
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Cuidar da saúde dos seus colaboradores
              <span className="font-bold"> é investimento no sucesso da sua empresa</span>
            </motion.h1>
            <motion.p
              className="text-gray-200 mb-4 sm:text-base  leading-relaxed max-w-xl text-sm"
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Medicina Ocupacional com rigor, proximidade e soluções adaptadas à sua organização
            </motion.p>
            <Link
             href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
              aria-label="Solicitar Proposta por Email"

              className="
              bg-[#44a631]
              hover:bg-green-600
              text-white
              rounded-full
              font-medium
              transition-colors
              px-6
              py-3
              text-sm
              sm:text-base
              "
              
            >
              Solicitar Proposta
            </Link>
          </div>
        </div>
      </div>
 


    </section>
  );
}