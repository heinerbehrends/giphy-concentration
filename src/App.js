import React, { Component } from 'react';
import styled from 'styled-components';
import Game from './Game';

const GameStyled = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <GameStyled>
        <Game />
      </GameStyled>
    );
  }
}

export default App;
