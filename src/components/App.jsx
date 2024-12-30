import CardList from "./CardList";
import Header from "./Header";
import {useState} from "react";
import CardContext from "../util.js/CardContext";

export default function App() {
  const [cardList,updateCardList]=useState([]);
  return (
    <CardContext.Provider value={{cardList,updateCardList}}>
      <Header />
      <CardList />
    </CardContext.Provider>
  );
}
