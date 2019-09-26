import React, { Component, Fragment } from 'react';
import { H1 } from 'native-base';

import _ from 'lodash';
import { checkHorizontalWin, checkVerticalWin, checkDiagonalWin } from '../helpers/winConditionHelper';
import { getPlayerMarks } from '../helpers/funHelpers';
import GameGrid from './GameGrid';
import EndGame from './EndGame';

class GameStateContainer extends Component {
  constructor() {
    super();
    const playerMarks = getPlayerMarks();

    this.state = {
      cellValues: {
        0: [ null, null, null ],
        1: [ null, null, null ],
        2: [ null, null, null ],
      },
      isGameOver: false,
      playerInfo: {
        activePlayer: 1,
        mark: playerMarks[0],
      },
      playerMarks,
      winnerInfo: null,
    };
  }

  componentDidMount() {}

  checkForWinner = (cellValues) => {
    const { playerInfo } = this.state;
    const hasSomeoneWon =
      checkHorizontalWin(cellValues) || checkVerticalWin(cellValues) || checkDiagonalWin(cellValues);

    if (hasSomeoneWon) {
      this.setState({
        isGameOver: true,
        winnerInfo: playerInfo,
      });
    }
  };

  updateCell = (cellYPosition, cellXPosition, cellValue) => {
    const { playerInfo: { activePlayer }, playerMarks, cellValues } = this.state;

    let cellValuesClone = _.cloneDeep(cellValues);

    if (cellValuesClone[cellYPosition][cellXPosition] === null) {
      cellValuesClone[cellYPosition][cellXPosition] = cellValue;

      let nextActivePlayer = {
        activePlayer: activePlayer === 1 ? 2 : 1,
        mark: activePlayer === 1 ? playerMarks[1] : playerMarks[0],
      };

      this.setState({
        cellValues: cellValuesClone,
        playerInfo: nextActivePlayer,
      });

      this.checkForWinner(cellValuesClone);
    }
  };

  render() {
    const { setCurrentGame } = this.props;
    const { cellValues, playerInfo, winnerInfo } = this.state;

    return (
      <Fragment>
        <H1 style={{ textAlign: `center`, paddingTop: 10, fontFamily: 'Righteous', fontSize: 36, marginTop: 50 }}>
          Player {playerInfo.activePlayer}'s Turn!
        </H1>
        <GameGrid cellValues={cellValues} updateCell={this.updateCell} playerInfo={playerInfo} />
        {/* Someone has won! */}
        {winnerInfo && <EndGame winnerInfo={winnerInfo} setCurrentGame={setCurrentGame} />}
      </Fragment>
    );
  }
}

export default GameStateContainer;
