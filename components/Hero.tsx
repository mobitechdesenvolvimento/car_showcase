"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  // Função que rola a página até a próxima seção ao clicar no botão
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    // Verifica se a seção existe e faz a rolagem suave
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      {/* Seção de texto principal */}
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre o carro dos seus sonhos com facilidade e confiança!
        </h1>

        <p className="hero__subtitle">
          Explore nossa incrível seleção de carros e faça a compra ideal para
          você em apenas alguns cliques.
        </p>

        {/* Botão personalizado que ao clicar rola a página para a seção de descoberta */}
        <CustomButton
          title="Explore Carros"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll} // Chama a função de rolagem ao clicar
        />
      </div>

      {/* Seção da imagem principal */}
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png" // Caminho da imagem do "herói" da página
            alt="imagem herói"
            fill
            className="object-contain"
          />
        </div>

        {/* Overlay na imagem para um efeito visual */}
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
