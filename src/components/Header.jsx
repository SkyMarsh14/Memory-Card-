import pokemonLogo from "../assets/pokemon-logo.svg";
import "../styles/header.css";
import CardContext from "../util.js/CardContext";
import { useContext } from "react";
const Header = () => {
  const { cardList, bestScore } = useContext(CardContext);
  return (
    <header>
      <h1>Pokemon Memory Game</h1>
      <div className="score">
        <div>Score: {cardList.size}</div>
        <div>Best Score: {bestScore}</div>
      </div>
      <img src={pokemonLogo} alt="Pokemon Logo" className="header-logo" />
    </header>
  );
};

export default Header;
