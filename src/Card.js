import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px;
  opacity: ${props => props.belongsHere ? 100 : 0};
  object-fit: cover;
`;

function Card(props) {
  const {
    url, isFlipped, belongsHere,
    key, clickCard, flipCount,
  } = props;
  
  return (
    <CardStyled
      src={isFlipped ? url : 'backside.gif' }
      belongsHere={belongsHere}
      onClick={() => clickCard(key, flipCount)}
      key={key}
    />
  );
}

export default Card;
