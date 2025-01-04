import CardList from "./CardList";
import Header from "./Header";
import { useState } from "react";
import CardContext from "../util.js/CardContext";

export default function App() {
  const [cardList, updateCardList] = useState(new Set());
  const [bestScore, setBestScore] = useState(0);
  return (
    <CardContext.Provider
      value={{ cardList, updateCardList, bestScore, setBestScore }}
    >
      <Header />
      <CardList />
    </CardContext.Provider>
  );
}
