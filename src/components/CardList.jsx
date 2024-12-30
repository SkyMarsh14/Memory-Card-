import PokemonImg from "./PokemonImg";
import getUniqueNumber from "../genPokemonIDs";

const CardList = () => {
  const pokeIndexs = getUniqueNumber(10, 1, 30);
  return (
    <div className="card-container">
      {pokeIndexs.map((index) => (
        <PokemonImg pokemonId={index} key={crypto.randomUUID()} />
      ))}
    </div>
  );
};
export default CardList;
