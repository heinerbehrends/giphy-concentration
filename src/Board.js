import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const BoardStyled = styled.div`
  display: flex-box;
`;

function Board(props) {
  const getRenderedCards = props => props.cards
    .map((propsObj) => {
      const { clickCard, flipCount } = props;
      propsObj = { ...propsObj, clickCard, flipCount}
      return Card(propsObj);
    })
  const renderedCards = getRenderedCards(props);

  return (
    <BoardStyled>
      {renderedCards}
    </BoardStyled>
  );
}

export default Board;
