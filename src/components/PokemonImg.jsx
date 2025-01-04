import { useState, useEffect, useContext } from "react";
import CardContext from "../util.js/CardContext";
import "../styles/loader.css";
import shuffle from "../util.js/shuffule";
import genPokemonData from "../util.js/genPokemonData";

const PokemonImg = ({ pokemonIndex, setCardArr }) => {
  if (typeof pokemonIndex !== "number") {
    throw new Error(`Pokemon Id has an incorrect value. ${pokemonIndex}`);
  }
  const { updateCardList, setBestScore } = useContext(CardContext);
  const [cardData, setCardData] = useState(null);
  function handleClick(e) {
    updateCardList((prev) => {
      const clickedSrc = e.target.src;
      if (prev.has(clickedSrc) || prev.size === 10) {
        setBestScore(prev.size);
        setCardArr(genPokemonData(10, 1, 30));
        return new Set();
      }
      const newSet = new Set(prev);
      newSet.add(clickedSrc);
      return newSet;
    });
    setCardArr((prev) => {
      return shuffle(prev);
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
        setCardData({ image: image, name: json.name });
      } catch (error) {
        console.error("Error fetching Pokemon", error);
      }
    };
    fetchPokemonImage();
    return () => {
      controller.abort();
    };
  }, [pokemonIndex, cardData]);
  return (
    <>
      {cardData ? (
        <button onClick={handleClick} type="button" className="card">
          <img src={cardData.image} alt={`Pokemon: ${cardData.name}`}></img>
          <div className="pokemonName">{cardData.name}</div>
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
