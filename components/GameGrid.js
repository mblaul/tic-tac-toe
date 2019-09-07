import React, { Component } from 'react';
import _ from 'lodash';

import { Container } from 'native-base';
import GridRow from './GridRow';

class GameGrid extends Component {
  render() {
    const { cellValues, playerInfo, updateCell } = this.props;
    return (
      <Container style={{ backgroundColor: 'black', height: 300, width: 300, margin: 50 }}>
        {_.keys(cellValues).map((index) => (
          <GridRow
            key={index}
            cellYPosition={index}
            rowValues={cellValues[index]}
            playerInfo={playerInfo}
            updateCell={updateCell}
          />
        ))}
      </Container>
    );
  }
}

export default GameGrid;
