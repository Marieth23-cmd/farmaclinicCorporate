"use client";

import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaBarsStaggered, FaLinkedinIn } from "react-icons/fa6";
import { useState, useEffect, useCallback, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
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
  }, [isMenuOpen, handleClickOutside]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Image
            src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776776517/Logo_Horizontal4_zujep7.png"
            alt="Logo"
            width={190}
            height={80}
            priority
          />

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-2xl text-black hover:text-[#1b73a0] transition"
          >
            <FaBarsStaggered />
          </button>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 text-base lg:text-lg ">
            <li className="cursor-pointer hover:text-[#1b73a0] transition">Início</li>
            <li className="cursor-pointer hover:text-[#1b73a0] transition">Sobre Nós</li>
            <li className="cursor-pointer hover:text-[#1b73a0] transition">Serviços</li>
            <li className="cursor-pointer hover:text-[#1b73a0] transition">Contactos</li>
          </ul>
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4 text-lg text-[#1b73a0]">
           
      <button className="bg-[#44a631] hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg">
        Solicitar Proposta
        </button>
         <FaYoutube className="cursor-pointer hover:text-red-600 text-base lg:text-lg" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 text-base lg:text-lg" />
              <GrFacebookOption className="cursor-pointer hover:text-blue-600 text-base lg:text-lg" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700 text-base lg:text-lg" />

        
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Sidebar */}
        <aside
          ref={boxRef}
          className={`absolute top-0 right-0 h-full w-[85%] sm:w-[70%] md:w-96 bg-white shadow-2xl transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
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
              <li onClick={closeMenu} className="cursor-pointer hover:text-[#1b73a0]">Início</li>
              <li onClick={closeMenu} className="cursor-pointer hover:text-[#1b73a0]">Sobre Nós</li>
              <li onClick={closeMenu} className="cursor-pointer hover:text-[#1b73a0]">Serviços</li>
              <li onClick={closeMenu} className="cursor-pointer hover:text-[#1b73a0]">Contactos</li>
            </ul>
          </nav>

          {/* Bottom */}
          <div className="mt-auto px-6 pb-8">
            <button className="w-full bg-[#44a631] hover:bg-green-600 text-white py-2 rounded-full text-sm mb-5 transition">
              Solicitar Proposta
            </button>

            <div className="flex justify-center gap-4 text-xl text-[#1b73a0]">
              <FaYoutube className="cursor-pointer hover:text-red-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <GrFacebookOption className="cursor-pointer hover:text-blue-600" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}