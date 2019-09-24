import React, { Fragment } from 'react';
import { Button, Text } from 'native-base';
import AlertDialog from './AlertDialog';

const EndGame = (props) => {
  const { winnerInfo, setCurrentGame } = props;

  const alertButtons = [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'Rematch', onPress: setCurrentGame },
  ];

  return (
    <Fragment>
      <Text>Player {winnerInfo.activePlayer} is the winner!</Text>
      <Button onPress={setCurrentGame}>
        <Text>Rematch?</Text>
      </Button>
      <AlertDialog title={`🎉🎉 Player ${winnerInfo.activePlayer} has won! 🎉🎉`} alertButtons={alertButtons} />
    </Fragment>
  );
};

export default EndGame;
