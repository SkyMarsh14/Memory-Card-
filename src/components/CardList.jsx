import PokemonImg from "./PokemonImg";
import getUniqueNumber from "../genPokemonIDs";

const CardList = ()=>{
    const pokeIndexs=getUniqueNumber(10,1,30);
    console.log(pokeIndexs);
    return(
        <div className="card-container">
            {pokeIndexs.map((index)=>(
                <PokemonImg pokemonId={index} />
            ))}
        </div>
    )
}
export default CardList;