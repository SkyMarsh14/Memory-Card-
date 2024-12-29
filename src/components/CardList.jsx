import PokemonImg from "./PokemonImg";
import getUniqueNumber from "../genPokemonIDs";

const CardList = ()=>{
    const pokeIndexs=getUniqueNumber(10,1,20);
    console.log(pokeIndexs)
    return(
        <div className="card-container">
        </div>
    )
}
export default CardList;