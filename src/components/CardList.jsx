import "../styles/cardList.css";
import PokemonImg from "./PokemonImg";
<<<<<<< HEAD
import genPokemonData from "../util.js/genPokemonData.js";
import { useState } from "react";
import randomizeArr from "../util.js/randomizeArr.js";

const CardList = () => {
  const [pokemonData, setPokemonData] = useState(genPokemonData(10, 1, 30));
  randomizeArr(pokemonData);
  return (
    <div className="card-container">
      {pokemonData.map((pokemon) => (
        <PokemonImg pokemonIndex={pokemon.index} key={pokemon.id} />
=======
import genPokemonData from "../util.js/genPokemonIDs";
const pokemonData=genPokemonData(10,1,30);
const CardList = () => {
  return (
    <div className="card-container">
      {pokemonData.map((pokemon) => (
        <PokemonImg pokemonId={pokemon.index} key={pokemon.id} />
>>>>>>> 6296e8117b45a4e66ffb169b636519ad0cfd4bb1
      ))}
    </div>
  );
};
export default CardList;
