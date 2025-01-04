import "../styles/cardList.css";
import PokemonImg from "./PokemonImg";
import genPokemonData from "../util.js/genPokemonData.js";
import { useState } from "react";

const CardList = () => {
  const [pokemonData, setPokemonData] = useState(genPokemonData(10, 1, 30));
  return (
    <div className="card-container">
      {pokemonData.map((pokemon) => (
        <PokemonImg
          pokemonIndex={pokemon.index}
          key={pokemon.id}
          setPokemonData={setPokemonData}
        />
      ))}
    </div>
  );
};
export default CardList;
