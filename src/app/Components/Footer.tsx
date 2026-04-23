import Image from "next/image";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#011b35d8] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Coluna 1 */}
          <div className="space-y-5">
            <Image
              src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776868935/Logo_branco_cd3dhn.png"
              alt="Logo"
              width={220}
              height={140}
            />

            <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
              Soluções completas em medicina do trabalho,
              garantindo saúde, segurança e conformidade legal
              para a sua empresa.
            </p>

            <div className="flex gap-3 text-lg">
              <span className="p-2 rounded-full bg-white/10 hover:bg-red-600 transition cursor-pointer">
                <FaYoutube />
              </span>

              <span className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition cursor-pointer">
                <FaInstagram />
              </span>

              <span className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition cursor-pointer">
                <GrFacebookOption />
              </span>

              <span className="p-2 rounded-full bg-white/10 hover:bg-blue-700 transition cursor-pointer">
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contacto</h3>

            <ul className="space-y-4 text-gray-200 text-sm lg:text-base">
              <li className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-[#4fb4ff]" />
                <span>
                  Rua 11 de Novembro, Casa S/N <br />
                  Bairro 1º de Maio, Viana - Luanda
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-[#4fb4ff]" />
                <span>+244 941 326 479</span>
              </li>

              <li className="flex items-center gap-3">
                <MdAlternateEmail className="text-[#4fb4ff]" />
                <span>dmt@farmaclinic.net</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Serviços</h3>

            <ul className="space-y-3 text-gray-200 text-sm lg:text-base">
              <li className="hover:text-white cursor-pointer">Exames Admissionais</li>
              <li className="hover:text-white cursor-pointer">Exames Periódicos</li>
              <li className="hover:text-white cursor-pointer">Exames Demissionais</li>
              <li className="hover:text-white cursor-pointer">Retorno ao Trabalho</li>
              <li className="hover:text-white cursor-pointer">Mudança de Função</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra Final */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} ITSALL4U. Todos os direitos reservados.
      </div>
    </footer>
  );
}