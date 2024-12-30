import "../styles/cardList.css";
import PokemonImg from "./PokemonImg";
import genPokemonData from "../util.js/genPokemonData.js";

const pokemonData = genPokemonData(10, 1, 30);
console.log(pokemonData);
const CardList = () => {
  return (
    <div className="card-container">
      {pokemonData.map((pokemon) => (
        <PokemonImg pokemonIndex={pokemon.index} key={pokemon.id} />
      ))}
    </div>
  );
};
export default CardList;
