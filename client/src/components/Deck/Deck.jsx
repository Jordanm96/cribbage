import React from "react";
import { useState } from "react";

export default function Deck() {
  const suits = ["spades", "hearts", "diamonds", "clubs"];
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const deck = [];
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({ ranks: ranks[i], suits: suits[j], value: i });
    }
  }
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
  }
  shuffle(deck)

  return (
    <div>
      {deck.map((card) => (
        <div>
        </div>
      ))}
    </div>
  );
}
