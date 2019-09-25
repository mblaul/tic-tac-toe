import React, { Component } from 'react';
import { AppLoading } from 'expo';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

import ContentContainer from './components/ContentContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Righteous: require('./assets/fonts/Righteous.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

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
  }
}
