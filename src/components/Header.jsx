import pokemonLogo from "../assets/pokemon-logo.svg";
import "../styles/header.css";
import CardContext from "../util.js/CardContext";
import { useContext } from "react";
const Header = () => {
  const { cardList, bestScore } = useContext(CardContext);
  return (
    <header>
      <div className="logo">
        <img src={pokemonLogo} alt="Pokemon Logo" />
        <p>Do not click the same card twice!</p>
      </div>
      <div className="score">
        <div>Score: {cardList.size}</div>
        <div>Best Score: {bestScore}</div>
      </div>
    </header>
  );
};

export default Header;
