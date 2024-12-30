import { createContext } from "react";
const CardContext=createContext({
    cardList:[],
    updateCardList:()=>{},
});

export default CardContext;