import React, { Component } from 'react';
import GameGrid from './GameGrid';

import _ from 'lodash';

class GameStateContainer extends Component {
  state = {
    cellValues: {
      0: [ null, null, null ],
      1: [ null, null, null ],
      2: [ null, null, null ],
    },
    playerInfo: {
      activePlayer: 1,
      mark: `❌`,
    },
  };

  checkForWinner = () => {};

  updateCell = (cellYPosition, cellXPosition, cellValue) => {
    const { playerInfo: { activePlayer }, cellValues } = this.state;

    let cellValuesClone = _.cloneDeep(cellValues);
    cellValuesClone[cellYPosition][cellXPosition] = cellValue;

    let switchPlayers = {
      activePlayer: activePlayer === 1 ? 2 : 1,
      mark: activePlayer === 1 ? '⭕' : `❌`,
    };

    this.setState({
      cellValues: cellValuesClone,
      playerInfo: switchPlayers,
    });
  };

  render() {
    const { cellValues, playerInfo } = this.state;

    return <GameGrid cellValues={cellValues} updateCell={this.updateCell} playerInfo={playerInfo} />;
  }
}

export default GameStateContainer;
