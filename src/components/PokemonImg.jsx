import { useState, useEffect } from "react";
import "../styles/loader.css";

const PokemonImg = () => {
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    const controller=new AbortController();
    const signal=controller.signal;
    const fetchPokemonImage=async()=>{
      try{
        const randomID = Math.ceil(Math.random() * 1025);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomID}/`,
            {signal}
        );
        const json = await response.json();
        console.log(json)
        const image = json.sprites.other["official-artwork"].front_default;
        setImageUrl(image);
      }catch(error){
        console.error("Error fetching Pokemon", error);
      }
    }
    fetchPokemonImage();
    return ()=>{
      controller.abort();
    }
  }, []);
  return (
    <>
      {imageUrl? <img src={imageUrl}></img>: <div className="loader"></div>}
    </>
  );
};

export default PokemonImg;
