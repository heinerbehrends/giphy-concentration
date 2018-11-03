import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styled from 'styled-components';

const BoardStyled = styled.div`
  display: flex-box;
`;

function Board(props) {
  if (!props.cards) {
    return null;
  }
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

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Board;
