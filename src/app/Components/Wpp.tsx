"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phone = "244941326479";
  const message = "Olá, gostaria de obter mais informações.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#44a631] hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition duration-300"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}