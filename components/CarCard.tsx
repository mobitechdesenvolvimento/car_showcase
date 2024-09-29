"use client";

import { useState } from "react"; // Importa useState para gerenciar o estado do modal
import Image from "next/image"; // Importa o componente de imagem do Next.js

import { CarProps } from "@/types"; // Importa o tipo CarProps para tipar os dados do carro
import CustomButton from "./CustomButton"; // Importa o botão personalizado
import { calculateCarRent } from "@/utils"; // Função que calcula o aluguel do carro
import CarDetails from "./CarDetails"; // Componente para exibir detalhes do carro

interface CarCardProps {
  car: CarProps; // Define a tipagem para a propriedade do carro
}

const CarCard = ({ car }: CarCardProps) => {
  // Desestrutura as propriedades do carro para facilitar o uso
  const { city_mpg, year, make, model, transmission, drive } = car;

  // Estado para controlar se o modal de detalhes do carro está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Calcula o valor do aluguel do carro com base no consumo de combustível e ano
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      {/* Conteúdo do cartão do carro */}
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* Exibe o preço do aluguel do carro */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">R$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/dia</span>
      </p>

      {/* Exibe uma imagem do carro */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png" // Substitua por uma URL dinâmica se necessário
          alt="modelo de carro"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Exibe as informações adicionais como transmissão, tração e consumo de combustível */}
      <div className="relative flex w-full mt-2">
        {/* Informações do carro (transmissão, tração e MPG) */}
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="volante"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automático" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="pneu" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="consumo de combustível"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        {/* Botão para ver mais detalhes */}
        <div className="car-card__btn-container">
          <CustomButton
            title="Ver mais"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)} // Abre o modal ao clicar no botão
          />
        </div>
      </div>

      {/* Componente de detalhes do carro que abre como um modal */}
      <CarDetails
        isOpen={isOpen} // Controle de abertura do modal
        closeModal={() => setIsOpen(false)} // Função para fechar o modal
        car={car} // Passa os dados do carro para o componente de detalhes
      />
    </div>
  );
};

export default CarCard;
