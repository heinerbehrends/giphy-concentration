import React, { useState, useEffect } from 'react';
import Board from './Board';
import { omgLinks } from './imageLinks';
import {
  makeCards, makeNextCards, cardCount, flipCard, shouldFlip
} from './gameHelpers';

const Game = () => {
  const [cards, setCards] = useState(makeCards(omgLinks));
  const [flipCount, setFlipCount] = useState(0);

  if (!cardCount(cards)) {
    setCards(makeCards(omgLinks));
  }

  useEffect(() => {
    if (flipCount === 2) {
      const nextCards = makeNextCards(cards);
      setTimeout(() => {
        setFlipCount(0);
        setCards(nextCards);
      }, 2500);
    }
  })

  const clickCard = (key, flipCount) => {
    if (shouldFlip(cards, key, flipCount)) {
      setFlipCount(flipCount + 1);
      setCards(flipCard(cards, key));
    }
  }

  return (
    <Board
      cards={cards}
      flipCount={flipCount}
      clickCard={clickCard}
    />
  );
}

export default Game;
