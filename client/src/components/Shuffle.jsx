import React from 'react'


export default function Shuffle(props) {
      
  function shuffle() {
    let shuffledDeck = deck;
    let currentIndex = deck.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      temporaryValue = shuffledDeck[currentIndex]
  
      shuffledDeck[currentIndex] = shuffledDeck[randomIndex]
      shuffledDeck[randomIndex] = temporaryValue
    }
  
    return shuffledDeck
  }

  return (
    <div>
      
    </div>
  )
}
