import React, { Fragment } from 'react';
import { Button, Text } from 'native-base';
import AlertDialog from './AlertDialog';

const EndGame = (props) => {
  const { winnerInfo, setCurrentGame } = props;

  const alertButtons = [
    {
      text: `Cancel`,
      onPress: () => {},
      style: `cancel`,
    },
    { text: `Rematch`, onPress: setCurrentGame },
  ];

  let endGameMessage;
  let endGameDialogTitle;

  if (winnerInfo) {
    endGameMessage = `Player ${winnerInfo.activePlayer} is the winner!`;
    endGameDialogTitle = `🎉🎉 Player ${winnerInfo.activePlayer} has won! 🎉🎉`;
  } else {
    endGameMessage = `Tie! 
    Looks like your skills are evenly matched`;
    endGameDialogTitle = `Tie! Want to give it another shot?`;
  }

  return (
    <Fragment>
      <Text style={{ fontFamily: `Righteous`, fontSize: 24, textAlign: `center`, marginBottom: 15 }}>
        {endGameMessage}
      </Text>
      <Button full large onPress={setCurrentGame} style={{ color: `rebeccapurple`, marginHorizontal: 35 }}>
        <Text style={{ fontFamily: `Righteous` }}>Rematch?</Text>
      </Button>
      <AlertDialog title={endGameDialogTitle} alertButtons={alertButtons} />
    </Fragment>
  );
};

export default EndGame;
