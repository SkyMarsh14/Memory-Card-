import { useState, useEffect } from "react";
import "../styles/loader.css";

const PokemonImg = ({ pokemonId }) => {
  if (typeof pokemonId !== "number") return;
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
        <img src={imageUrl} alt={`Pokemon: ${alt}`}></img>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default PokemonImg;
