import "../styles/cardList.css";
import PokemonImg from "./PokemonImg";
import genPokemonData from "../util.js/genPokemonData.js";
import { useState } from "react";

const CardList = () => {
  const [cardArr, setCardArr] = useState(genPokemonData(10, 1, 30));
  return (
    <div className="card-container">
      {cardArr.map((pokemon) => (
        <PokemonImg
          pokemonIndex={pokemon.index}
          key={pokemon.id}
          setCardArr={setCardArr}
        />
      ))}
    </div>
  );
};
export default CardList;
