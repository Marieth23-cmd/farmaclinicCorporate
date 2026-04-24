import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776698271/Img_banner_top_ptqnqd.webp"
        alt="imagem hero"
        fill
        className="object-cover"
      />


<div className="absolute inset-0 flex items-center">
  <div className="max-w-6xl mx-auto px-6 w-full">
    <div className="max-w-2xl  md:text-left">

      <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium text-white leading-snug mb-4">
        Cuidar da saúde dos seus colaboradores 
        <span className="font-bold"> é investimento no sucesso da sua empresa </span>
      </h1>

      <p className="text-gray-200 text-base  md:text-lg mb-6">
      Medicina Ocupacional com rigor , proximidade e soluções adaptadas à sua organização 
      </p>

      
       <div className="flex flex-wrap gap-4">
  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
    Solicitar Proposta
  </button>

 
</div>
    </div>
  </div>
</div>




</div>
     
      
      
   
  );
}