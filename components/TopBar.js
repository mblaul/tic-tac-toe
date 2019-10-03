import React from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

const TopBar = (props) => {
  const { showBackButton, navigation, title } = props;
  return (
    <Header style={{ backgroundColor: 'rebeccapurple' }} androidStatusBarColor="rebeccapurple">
      <Left>
        <Button transparent>
          {showBackButton && <Icon name="Ionicons" name="arrow-back" onPress={() => navigation.goBack()} />}
        </Button>
      </Left>

      <Body>
        <Title style={{ fontFamily: 'Righteous' }}>{title || `TicTacToesies`}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default TopBar;
