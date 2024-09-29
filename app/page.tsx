import { CarCard, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

// Função assíncrona principal da página Home
export default async function Home() {
  // Busca todos os carros através da função fetchCars()
  const allCars = await fetchCars();

  // Verifica se os dados recebidos estão vazios ou não são um array
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    // Define o layout principal da página com a classe overflow-hidden para esconder overflow de conteúdo
    <main className="overflow-hidden">
      {/* Componente Hero que provavelmente exibe uma seção principal com imagens ou promoções */}
      <Hero />

      {/* Div que contém a seção principal de catálogo de carros */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {/* Cabeçalho com título e descrição */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de Carros</h1>
          <p>Explore os carros que você pode gostar</p>
        </div>

        {/* Seção de filtros contendo o componente SearchBar para busca */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container"></div>
        </div>

        {/* Verifica se os dados não estão vazios */}
        {!isDataEmpty ? (
          // Se houver dados, renderiza a seção com os carros
          <section>
            <div className="home__cars-wrapper">
              {/* Mapeia sobre a lista de carros e exibe o componente CarCard para cada carro */}
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          // Caso os dados estejam vazios, exibe uma mensagem de erro
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Ops, nenhum resultado
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
