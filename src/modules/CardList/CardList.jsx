import React, { useState, useRef, useEffect } from "react";
import styles from "./CardList.module.css"
import ColorCard from "../ColorCard/ColorCard"

function useKey(key, callBack){
    const callBackRef = useRef(callBack);
  
    useEffect(() => {
      callBackRef.current = callBack;
    });
  
    useEffect(() => {
      function handle(event){
        if(event.code === key) {
          callBackRef.current(event);
        }
      }
  
      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, [key])
} 

const ColorList = () => {
    const [cards, setCards] = useState([
        { colorHex: "#FEF7EC", locked: true, id: 1 },
        { colorHex: "#FEB958", locked: true, id: 2 },
        { colorHex: "#FD6E50", locked: true, id: 3 },
        { colorHex: "#E15A8C", locked: true, id: 4 },
        { colorHex: "#5A5A95", locked: true, id: 5 }
      ]);
  
    useKey("Space", changeCard);

    function changeCard(){
      const copyCards = Object.assign([], cards);
      copyCards.forEach(el => {
        if(el.locked){
          el.colorHex = generatorRandomColor();
        }
      });
      setCards(copyCards);
    }
  
    function generatorRandomColor(){
      const hexText = "0123456789ABCDEF";
      const lengthTextColor = 5;
      let colorCard = "";
  
      for (let i = 0; i <= lengthTextColor; i++) {
          colorCard += hexText[~~(Math.random() * hexText.length)];
      }
      return "#" + colorCard;
    }

    return(
        <div className={styles.CardList}>
            {cards.map(item => (
                <ColorCard data={item} key={item.id}></ColorCard>
            ))}
        </div>
    )
}

export default ColorList;