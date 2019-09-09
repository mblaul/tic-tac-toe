import React, { Component, Fragment } from 'react';
import { Alert } from 'react-native';
import GameGrid from './GameGrid';

import _ from 'lodash';

import { checkHorizontalWin, checkVerticalWin, checkDiagonalWin } from '../helpers/winConditionHelper';
import { Button, Text } from 'native-base';

class GameStateContainer extends Component {
  state = {
    cellValues: {
      0: [ null, null, null ],
      1: [ null, null, null ],
      2: [ null, null, null ],
    },
    isGameOver: false,
    playerInfo: {
      activePlayer: 1,
      mark: `❌`,
    },
    winnerInfo: null,
  };

  checkForWinner = (cellValues) => {
    const { playerInfo } = this.state;
    const hasSomeoneWon = checkHorizontalWin(cellValues); //|| checkVerticalWin(cellValues) || checkDiagonalWin(cellValues);

    if (hasSomeoneWon) {
      this.setState({
        isGameOver: true,
        winnerInfo: playerInfo,
      });
    }
  };

  updateCell = (cellYPosition, cellXPosition, cellValue) => {
    const { playerInfo: { activePlayer }, cellValues } = this.state;

    let cellValuesClone = _.cloneDeep(cellValues);
    cellValuesClone[cellYPosition][cellXPosition] = cellValue;

    let nextActivePlayer = {
      activePlayer: activePlayer === 1 ? 2 : 1,
      mark: activePlayer === 1 ? '⭕' : `❌`,
    };

    this.setState({
      cellValues: cellValuesClone,
      playerInfo: nextActivePlayer,
    });

    this.checkForWinner(cellValuesClone);
  };

  render() {
    const { setCurrentGame } = this.props;
    const { cellValues, playerInfo, winnerInfo } = this.state;

    return (
      <Fragment>
        <Text style={{ textAlign: `center` }}>Player {playerInfo.activePlayer}'s Turn!</Text>
        <GameGrid cellValues={cellValues} updateCell={this.updateCell} playerInfo={playerInfo} />
        {winnerInfo && (
          <Fragment>
            <Text>Player {winnerInfo.activePlayer} is the winner!</Text>
            <Button onPress={setCurrentGame}>
              <Text>Rematch?</Text>
            </Button>
            {Alert.alert(
              ``,
              `🎉🎉 Player ${winnerInfo.activePlayer} has won! 🎉🎉`,
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'Rematch', onPress: setCurrentGame },
              ],
              { cancelable: false },
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default GameStateContainer;
