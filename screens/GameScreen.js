import React, { Component } from 'react';

import { Container, Content } from 'native-base';

import ContentContainer from '../components/ContentContainer';
import TopBar from '../components/TopBar';

class GameScreen extends Component {
  static navigationOptions = {
    title: 'Game',
    header: null,
  };

  render() {
    return (
      <Container>
        <TopBar showBackButton navigation={this.props.navigation} title="Game" />
        <Content>
          <ContentContainer />
        </Content>
      </Container>
    );
  }
}

export default GameScreen;
