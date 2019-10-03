import React, { Component } from 'react';

import { Container, Header, Title, Content, Button, Text, Left, Right, Body, Icon } from 'native-base';
import { H1 } from 'native-base';

import TopBar from '../components/TopBar';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null, //used for removing blank space from top
  };

  startGame = () => {
    this.props.navigation.push('Game');
  };

  render() {
    return (
      <Container>
        <TopBar />
        <Content>
          <H1
            style={{
              textAlign: `center`,
              paddingTop: 10,
              fontFamily: 'Righteous',
              fontSize: 36,
              marginTop: 125,
              marginBottom: 50,
            }}
          >
            Welcome to #️⃣
          </H1>
          <Button full large onPress={this.startGame} style={{ color: `rebeccapurple`, marginHorizontal: 35 }}>
            <Text style={{ fontFamily: `Righteous` }}>New Game</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
