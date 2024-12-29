import PokemonImg from "./PokemonImg";
export default function App(){
    const key1=crypto.randomUUID();
    return (
        <>
        <PokemonImg key={key1}/>
        </>
    )
}