import React, { Component, Fragment } from 'react';
import { H1 } from 'native-base';

import _ from 'lodash';
import { checkHorizontalWin, checkVerticalWin, checkDiagonalWin } from '../helpers/winConditionHelper';
import { getPlayerMarks } from '../helpers/funHelpers';
import GameGrid from './GameGrid';
import EndGame from './EndGame';

class GameStateContainer extends Component {
  state = {
    cellValues: {
      0: [ null, null, null ],
      1: [ null, null, null ],
      2: [ null, null, null ],
    },
    turn: 1,
    isGameOver: false,
    playerInfo: { activePlayer: 1, mark: '' },
    playerMarks: [],
    winnerInfo: null,
  };

  componentDidMount() {
    const { playerInfo } = this.state;
    const playerMarks = getPlayerMarks();
    this.setState({ playerInfo: { ...playerInfo, mark: playerMarks[0] }, playerMarks });
  }

  checkForWinner = (cellValues, nextTurn) => {
    const { playerInfo } = this.state;
    const hasSomeoneWon =
      checkHorizontalWin(cellValues) || checkVerticalWin(cellValues) || checkDiagonalWin(cellValues);

    if (hasSomeoneWon) {
      this.setState({
        isGameOver: true,
        winnerInfo: playerInfo,
      });
    }

    if (nextTurn > 9 && !hasSomeoneWon) {
      this.setState({
        isGameOver: true,
      });
    }
  };

  updateCell = (cellYPosition, cellXPosition, cellValue) => {
    const { playerInfo: { activePlayer }, playerMarks, turn, cellValues } = this.state;

    let cellValuesClone = _.cloneDeep(cellValues);

    if (cellValuesClone[cellYPosition][cellXPosition] === null) {
      cellValuesClone[cellYPosition][cellXPosition] = cellValue;

      const nextActivePlayer = {
        activePlayer: activePlayer === 1 ? 2 : 1,
        mark: activePlayer === 1 ? playerMarks[1] : playerMarks[0],
      };

      const nextTurn = turn + 1;

      this.setState({
        cellValues: cellValuesClone,
        playerInfo: nextActivePlayer,
        turn: nextTurn,
      });

      this.checkForWinner(cellValuesClone, nextTurn);
    }
  };

  render() {
    const { setCurrentGame } = this.props;
    const { cellValues, isGameOver, playerInfo, winnerInfo } = this.state;

    return (
      <Fragment>
        <H1 style={{ textAlign: `center`, paddingTop: 10, fontFamily: 'Righteous', fontSize: 36, marginTop: 50 }}>
          {isGameOver ? `Game over!` : `Player ${playerInfo.activePlayer}'s Turn!`}
        </H1>
        <GameGrid cellValues={cellValues} updateCell={this.updateCell} playerInfo={playerInfo} />
        {isGameOver && <EndGame winnerInfo={winnerInfo} setCurrentGame={setCurrentGame} />}
      </Fragment>
    );
  }
}

export default GameStateContainer;
