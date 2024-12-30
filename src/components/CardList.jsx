import "../styles/cardList.css";
import PokemonImg from "./PokemonImg";
import genPokemonData from "../util.js/genPokemonIDs";
const pokemonData=genPokemonData(10,1,30);
const CardList = () => {
  return (
    <div className="card-container">
      {pokemonData.map((pokemon) => (
        <PokemonImg pokemonId={pokemon.index} key={pokemon.id} />
      ))}
    </div>
  );
};
export default CardList;
