"use client";
import {usePathname} from "next/navigation";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaBars, FaLinkedinIn } from "react-icons/fa6";
import { useState, useEffect, useCallback, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Header() {

  const email = "dmt@farmaclinic.net";
  const subject = "Solicitação de Proposta";
  const body = "";

  
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

      
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClickOutside]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsOpen(false);
  };

  return (

    

    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto"> 
          <Link href="/">
          <Image
            src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1778250544/FarmaClinic_Corporate_Horizontal_sxwgyn.png"
            alt="Logo"
            width={190}
            height={80}
            priority
          />
            </Link>

      { /*Button Mobile */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-2xl text-black hover:text-[#1b73a0] transition"
          >
            <FaBars />
          </button>
        </div>

        {/* Menu Desktop  enviando commit novamente */}
       <nav className="hidden lg:block">
              <ul className="flex items-center gap-8 text-base lg:text-lg font-medium">

                <Link
                  href="/"
                  className={`relative py-2 transition-colors  ${
                    isActive("/")
                      ? "text-[#1b73a0]"
                      : "text-gray-700 hover:text-[#1b73a0]"
                  }`}
                >
                  Início

                  {isActive("/") && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#1b73a0] rounded-full"></span>
                  )}
                </Link>

                <Link
                  href="/SobreNos"
                  className={`relative py-2 transition-colors ${
                    isActive("/SobreNos")
                      ? "text-[#1b73a0]"
                      : "text-gray-700 hover:text-[#1b73a0]"
                  }`}
                >
                  Sobre Nós

                  {isActive("/SobreNos") && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#1b73a0] rounded-full"></span>
                  )}
                </Link>

                <Link
                  href="/Servicos"
                  className={`relative py-2 transition-colors ${
                    isActive("/Servicos")
                      ? "text-[#1b73a0]"
                      : "text-gray-700 hover:text-[#1b73a0]"
                  }`}
                >
                  Serviços

                  {isActive("/Servicos") && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#1b73a0] rounded-full"></span>
                  )}
                </Link>

                <Link
                  href="/Contactos"
                  className={`relative py-2 transition-colors ${
                    isActive("/Contactos")
                      ? "text-[#1b73a0]"
                      : "text-gray-700 hover:text-[#1b73a0]"
                  }`}
                >
                  Contactos

                  {isActive("/Contactos") && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#1b73a0] rounded-full"></span>
                  )}
                </Link>

              </ul>
            </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4 text-lg text-[#1b73a0]">

          <Link 
           href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
           aria-label="Solicitar Proposta por Email"
           className="bg-[#44a631] hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg">
            Solicitar Proposta
          </Link>
          
           <a
                  href="https://www.instagram.com/farmaclinic.ao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer rounded-full hover:text-pink-500" />
                </a>

                <a
                  href="https://www.facebook.com/farmaclinicangola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrFacebookOption className="cursor-pointer hover:text-blue-600" />
                </a>

                <a
                  href="https://www.linkedin.com/company/farmaclinic-angola/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
              </a>
             


        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Sidebar */}
        <aside
          ref={boxRef}
          className={`absolute top-0 right-0 h-full w-[85%] sm:w-[70%] md:w-96 bg-white shadow-2xl transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Top */}
          <div className="flex justify-between items-center px-6 py-5 border-b">
            <span className="font-semibold text-gray-700">Menu</span>

            <button onClick={closeMenu}>
              <AiOutlineClose className="text-2xl text-gray-800" />
            </button>
          </div>

          {/* Links */}
          <nav className="px-6 py-6">
            <ul className="flex flex-col gap-5 text-base font-medium">
              <Link href="/" className="cursor-pointer hover:text-[#1b73a0] transition" onClick={closeMenu}>
                Início
              </Link>
              <Link href="/SobreNos" className="cursor-pointer hover:text-[#1b73a0] transition" onClick={closeMenu}>
                Sobre Nós
              </Link>
              <Link href="/Servicos" className="cursor-pointer hover:text-[#1b73a0] transition" onClick={closeMenu}>
                Serviços
              </Link>
              <Link href="/Contactos" className="cursor-pointer hover:text-[#1b73a0] transition" onClick={closeMenu}>
                Contactos
              </Link>
            </ul>
          </nav>

          {/* Bottom */}
          <div className="mt-auto px-6 pb-8">
            <div className="mt-auto px-6 pb-8">
            <Link 
             href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
           aria-label="Solicitar Proposta por Email"
            className="inline-block w-full bg-[#44a631] hover:bg-[#3d8f2d] text-white py-3 text-center
            rounded-full text-sm mb-1  transition-transform  duration-500 hover:scale-110">
              Solicitar Proposta
            </Link>
          </div>

            <div className="flex justify-center gap-4 text-xl text-[#1b73a0]">
              <a
                  href="https://www.instagram.com/farmaclinic.ao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer rounded-full hover:text-pink-500" />
                </a>

                <a
                  href="https://www.facebook.com/farmaclinicangola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrFacebookOption className="cursor-pointer hover:text-blue-600" />
                </a>

                <a
                  href="https://www.linkedin.com/company/farmaclinic-angola/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
              </a>
             
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}