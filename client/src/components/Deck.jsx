import React from 'react'
import { useState } from 'react';

export default function Deck() {
  
  

  
    const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const deck = []
    for (let i = 0; i < ranks.length; i++) {
  
      for (let j = 0; j < suits.length; j++) {
  
        deck.push({ ranks: ranks[i], suits: suits[j], value: i });
  
      }
      
  
    }
    
  
  
    return (
      <div>
        
        {deck.map((card) => (
            <div>
            <p>{card.ranks}</p>
            <p>{card.suits}</p>
            
            </div>
            
          ))}
    
    </div>
  )
}
