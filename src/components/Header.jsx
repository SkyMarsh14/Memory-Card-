import pokemonLogo from "../assets/pokemon-logo.svg";
import "../styles/header.css";
const Header = () => {
  return (
    <header>
      <h1>Pokemon Memory Game</h1>
      <img src={pokemonLogo} alt="Pokemon Logo" className="header-logo" />
    </header>
  );
};

export default Header;
