import Image from "next/image";
import { FaInstagram, FaWhatsapp} from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#004662] text-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-4 md:px-8 py-10 lg:py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 lg:py-14 items-start">

          {/* Logo */}
          <div className="space-y-6">
            <Image
              src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776868935/Logo_branco_cd3dhn.png"
              alt="Logo"
              width={220}
              height={140}
              className="object-contain"
            />

            <div className="flex gap-3 ml-36 text-white text-base lg:text-lg">
             
              <FaInstagram className="cursor-pointer  hover:text-pink-500 transition" />
              <GrFacebookOption className="cursor-pointer hover:text-blue-500 transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition" />
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="font-bold text-base lg:text-lg mb-4">Contacto</h3>

            <ul className="space-y-4 text-sm lg:text-base">
              <li className="flex items-start gap-2">
                <FaLocationDot
                  className="p-1 bg-[#1b73a0] rounded-full shrink-0"
                  size={24}
                />
                <span className="text-sme lg:text-base">
                  Rua 11 de Novembro, Casa S/N <br />
                  Bairro 1º de Maio, Viana - Luanda
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaWhatsapp
                  className="p-1 bg-[#1b73a0] rounded-full shrink-0"
                  size={24}
                />
                <span>+244 941 326 479</span>
              </li>

              <li className="flex items-center gap-2">
                <MdAlternateEmail
                  className="p-1 bg-[#0a68a7d8] rounded-full shrink-0"
                  size={24}
                />
                <span>dmt@farmaclinic.net</span>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold text-baselg:text-lg mb-4">Menu</h3>

            <ul className="space-y-3 text-sm lg:text-base flex flex-col ">
              <Link href="/" className="hover:text-gray-300 cursor-pointer">
                Início
              </Link>
              <Link href="/SobreNos" className="hover:text-gray-300 cursor-pointer">
                Sobre Nós
              </Link>
              <Link href="/Servicos" className="hover:text-gray-300 cursor-pointer">
                Serviços
              </Link>
              <Link href="/Contactos" className="hover:text-gray-300 cursor-pointer">
                Contactos
              </Link>
            </ul>
          </div>

         
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#1b73a0] text-center text-sm py-4 px-4">
        © {new Date().getFullYear()} ITSALL4U. Todos os direitos reservados.
      </div>
    </footer>
  );
}