import { useState, useEffect, useContext } from "react";
import CardContext from "../util.js/CardContext";
import "../styles/loader.css";

const PokemonImg = ({ pokemonId }) => {
  if (typeof pokemonId !== "number"){
    throw new Error(`Pokemon Id has an incorrect value. ${pokemonId}`)
  }
  const cardList=useContext(CardContext);
  const [imageUrl, setImageUrl] = useState(null);
  const [alt, setAlt] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchPokemonImage = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
          { signal }
        );
        const json = await response.json();
        const image = json.sprites.other["official-artwork"].front_default;
        setAlt(json.name);
        setImageUrl(image);
      } catch (error) {
        console.error("Error fetching Pokemon", error);
      }
    };
    fetchPokemonImage();
    return () => {
      controller.abort();
    };
  }, [pokemonId]);
  return (
    <>
      {imageUrl ? (
        <button className="card"><img src={imageUrl} alt={`Pokemon: ${alt}`}></img></button>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default PokemonImg;
