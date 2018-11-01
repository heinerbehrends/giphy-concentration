export const makeCards = linkArray => {
  const links = shuffledDuplicateLinks(linkArray);
  return links.map((link, i) => ({
    key: i,
    url: link,
    isFlipped: false,
    belongsHere: true,
  }));
}

export const makeNextCards = cards => isPair(cards) ?
  changeFlipped(cards, 'belongsHere') :
  changeFlipped(cards, 'isFlipped');

export const cardCount = cards => cards.filter(
  card => card.belongsHere
).length;

export const flipCard = (cards, key) => cards.map(
  card => card.key === key ?
    { ...card, isFlipped: true } :
    card
);

export const shouldFlip = (cards, key, flipCount) => (
  flipCount < 2 && (!cards[key].isFlipped && cards[key].belongsHere)
);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
}

const duplicateLinks = linkArray => linkArray
  .map((string) => [string, string]).flat();

const shuffledDuplicateLinks = linkArray =>
  shuffleArray(duplicateLinks(linkArray));

const getFlipped = cards => cards.filter(
  card => card.isFlipped && card.belongsHere
);

const isPair = cards => {
  const flippedCards = getFlipped(cards);
  const [flippedOne, flippedTwo] = flippedCards;
  return flippedOne.url === flippedTwo.url;
}

const changeFlipped = (cards, key) => cards.map(
  card => {
    if (card.isFlipped) {
      switch (key) {
        case 'isFlipped':
          return { ...card, isFlipped: false };
        case 'belongsHere':
          return { ...card, belongsHere: false };
        default:
          return card
      }
    }
    return card;
  }
);
