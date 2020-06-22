import React, { useState, useEffect } from 'react';
import Board from './Board';
import Search from './Search';
import { GiphyFetch } from '@giphy/js-fetch-api';

import {
  makeCards,
  makeNextCards,
  cardCount,
  flipCard,
  shouldFlip,
} from './gameHelpers';

const gf = new GiphyFetch('u5T3TKASE8a0GHUAPgOsc7FPuoGn6iyo');
const options = { sort: 'recent', limit: 12, rating: 'g' };
const Game = () => {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState(null);
  const [cards, setCards] = useState(null);
  const [flipCount, setFlipCount] = useState(0);

  const handleChange = (event) => setInput(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(input);
  };

  async function search(searchTerm, options) {
    try {
      const result = await gf.search(searchTerm, options);
      const getURL = (giphObj) => giphObj.images.fixed_height.url;
      const URLs = result.data.map((resultObj) => getURL(resultObj));
      setCards(makeCards(URLs));
    } catch (error) {
      console.error(`search`, error);
    }
  }

  useEffect(() => {
    if (searchTerm) {
      search(searchTerm, options);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (flipCount === 2) {
      const nextCards = makeNextCards(cards);
      setTimeout(() => {
        setFlipCount(0);
        setCards(nextCards);
      }, 2500);
    }
  });

  if (cards && !cardCount(cards)) {
    setCards(null);
    setInput('');
  }

  function clickCard(key, flipCount) {
    if (shouldFlip(cards, key, flipCount)) {
      setFlipCount(flipCount + 1);
      setCards(flipCard(cards, key));
    }
  }

  return (
    <>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={input}
        cards={cards}
      />
      <Board cards={cards} flipCount={flipCount} clickCard={clickCard} />
    </>
  );
};

export default Game;
