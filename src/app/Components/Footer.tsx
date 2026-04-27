import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#004662] text-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 lg:py-14 items-start">

          {/* Logo */}
          <div className="space-y-5">
            <Image
              src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776868935/Logo_branco_cd3dhn.png"
              alt="Logo"
              width={220}
              height={140}
              className="object-contain"
            />

            <div className="flex gap-3 text-white text-lg">
              <FaYoutube className="cursor-pointer hover:text-red-500 transition" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
              <GrFacebookOption className="cursor-pointer hover:text-blue-500 transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition" />
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>

            <ul className="space-y-4 text-sm lg:text-base">
              <li className="flex items-start gap-2">
                <FaLocationDot
                  className="p-1 bg-[#1b73a0] rounded-full shrink-0"
                  size={24}
                />
                <span>
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
            <h3 className="font-bold text-lg mb-4">Menu</h3>

            <ul className="space-y-3 text-sm lg:text-base">
              <li className="hover:text-gray-300 cursor-pointer">Início</li>
              <li className="hover:text-gray-300 cursor-pointer">Sobre Nós</li>
              <li className="hover:text-gray-300 cursor-pointer">Serviços</li>
              <li className="hover:text-gray-300 cursor-pointer">Contactos</li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>

            <ul className="space-y-3 text-sm lg:text-base">
              <li>Exames Admissionais</li>
              <li>Exames Periódicos</li>
              <li>Exames Demissionais</li>
              <li>Retorno ao Trabalho</li>
              <li>Mudança de Função</li>
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