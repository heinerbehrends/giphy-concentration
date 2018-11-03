import React, { useState, useEffect } from 'react';
import Board from './Board';
import Search from './Search'
import GphSdkClient from 'giphy-js-sdk-core'
import { omgLinks } from './imageLinks';
import {
  makeCards, makeNextCards, cardCount, flipCard, shouldFlip
} from './gameHelpers';

const Game = () => {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState(null);
  const handleChange = event => setInput(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(input)
  }
  useEffect(() => {
    if (searchTerm) {
      let searchParameters = {
        'limit': 12,
        'rating': 'y',
      };
      searchParameters['q'] = searchTerm;
      client.search('gifs', searchParameters)
      .then(response => {
        const getUrl = gifObject => gifObject.images.fixed_height_small.url;
        const links = response.data.map(gifObject => getUrl(gifObject));
        setCards(makeCards(links));
        setSearchTerm(null);
        setInput('');
      }).catch(err => {
        console.log(err);
      })
    }
  })
  const client = GphSdkClient('u5T3TKASE8a0GHUAPgOsc7FPuoGn6iyo');
  const [cards, setCards] = useState(null);
  const [flipCount, setFlipCount] = useState(0);

  if (cards && !cardCount(cards)) {
    setCards(null);
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
    <>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={input}
        cards={cards}
      />
      <Board
        cards={cards}
        flipCount={flipCount}
        clickCard={clickCard}
      />
    </>
  );
}

export default Game;
