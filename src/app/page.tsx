import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Servicos from "./Components/Servicos";
import Servicostrabalho from "./Components/Servicostrabalho";
import Solucao from "./Components/Solucao";
import Wpp from "./Components/Wpp"

export default function Home() {
  return (
    <div > 
      <Header />
      
  <div>
    <Hero/>
       <Servicos/>
       <Solucao/>
       <Servicostrabalho/>
       <Wpp/>

    </div>
    <Footer/>
</div>
  );
}
