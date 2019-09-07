import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import { Col } from 'react-native-easy-grid';

export class GridCell extends Component {
  render() {
    const { cellYPosition, cellXPosition, playerInfo, updateCell, value } = this.props;

    return (
      <Col style={{ backgroundColor: 'white', height: 95, margin: 2.5 }}>
        <Button
          height={'100%'}
          style={{ backgroundColor: 'white' }}
          onPress={() => updateCell(cellYPosition, cellXPosition, playerInfo.mark)}
        >
          <Text style={{ alignContent: 'center', justifyContent: 'center' }}>{value || ''}</Text>
        </Button>
      </Col>
    );
  }
}

export default GridCell;
