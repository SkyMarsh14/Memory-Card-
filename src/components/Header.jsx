import pokemonLogo from "../assets/pokemon-logo.svg";
import "../styles/header.css";
import CardContext from "../util.js/CardContext";
import { useContext } from "react";
const Header = () => {
  const { cardList } = useContext(CardContext);
  return (
    <header>
      <h1>Pokemon Memory Game</h1>
      <div>Score: {cardList.size}</div>
      <img src={pokemonLogo} alt="Pokemon Logo" className="header-logo" />
    </header>
  );
};

export default Header;
