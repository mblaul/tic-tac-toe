import React, { Component } from 'react';
import GameStateContainer from './GameStateContainer';

export class ContentContainer extends Component {
  state = {
    gameId: 0,
  };

  setCurrentGame = () => {
    const { gameId } = this.state;
    this.setState({
      gameId: gameId + 1,
    });
  };

  render() {
    const { gameId } = this.state;
    return <GameStateContainer key={gameId} setCurrentGame={this.setCurrentGame} />;
  }
}

export default ContentContainer;
