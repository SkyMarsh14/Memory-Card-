import { useState, useEffect, useContext } from "react";
import CardContext from "../util.js/CardContext";
import "../styles/loader.css";
import shuffle from "../util.js/shuffule";

const PokemonImg = ({ pokemonIndex, setPokemonData }) => {
  if (typeof pokemonIndex !== "number") {
    throw new Error(`Pokemon Id has an incorrect value. ${pokemonIndex}`);
  }
  const { updateCardList } = useContext(CardContext);
  const [imageUrl, setImageUrl] = useState(null);
  const [alt, setAlt] = useState(null);
  function handleClick(e) {
    setPokemonData((prev) => {
      return shuffle(prev);
    });
    updateCardList((prev) => {
      const clickedSrc = e.target.src;
      const newSet = new Set(prev);
      newSet.add(clickedSrc);
      return newSet;
    });
  }
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchPokemonImage = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`,
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
  }, [pokemonIndex]);
  return (
    <>
      {imageUrl ? (
        <button onClick={handleClick} type="button" className="card">
          <img src={imageUrl} alt={`Pokemon: ${alt}`}></img>
        </button>
      ) : (
        <button type="button" className="card">
          <div className="loader"></div>
        </button>
      )}
    </>
  );
};

export default PokemonImg;
