import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardStyled = styled.div`
  background: url(${props => props.isFlipped ? props.url : `backside.gif` });
  background-size: cover;
  background-position: center, center;
  display: inline-block;
  content: ' ';
  height: 100px;
  width: 100px;
  margin: 10px;
  opacity: ${props => props.belongsHere ? 100 : 0};
  &:after {
  content: '';
  background: url(${props => props.url});
  opacity: 0;
}
`;

function Card(props) {
  const {
    url, isFlipped, belongsHere, key, clickCard, flipCount,
  } = props;

  return (
    <CardStyled
      url={url}
      isFlipped={isFlipped}
      belongsHere={belongsHere}
      onClick={() => clickCard(key, flipCount)}
      key={key}
    />
  );
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  belongsHere: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  key: PropTypes.number.isRequired,
}


export default Card;
