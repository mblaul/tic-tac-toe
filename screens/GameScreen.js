import React from 'react';

import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';

import ContentContainer from '../components/ContentContainer';

const GameScreen = () => {
  return (
    <Container>
      <Header style={{ backgroundColor: 'rebeccapurple' }} androidStatusBarColor="rebeccapurple">
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={{ fontFamily: 'Righteous' }}>TicTacToesies</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <ContentContainer />
      </Content>
    </Container>
  );
};

export default GameScreen;
