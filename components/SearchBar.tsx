"use client";

import { useState } from "react"; // Importa o hook de estado do React
import SearchManufacturer from "./SearchManufacturer"; // Importa o componente de pesquisa de fabricantes

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState(""); // Estado que armazena o fabricante pesquisado

  // Função de busca (a ser implementada)
  const handleSearch = () => {
    // Lógica de pesquisa pode ser adicionada aqui
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      {/* Campo de busca para fabricante de carros */}
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer} // Passa o fabricante atual
          setManufacturer={setManufacturer} // Passa a função que atualiza o fabricante
        />
      </div>
    </form>
  );
};

export default SearchBar;
