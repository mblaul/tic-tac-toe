import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { Col } from 'react-native-easy-grid';

export class GridCell extends Component {
  render() {
    const { cellYPosition, cellXPosition, playerInfo, updateCell, value } = this.props;

    return (
      <Col style={{ backgroundColor: 'white', height: 95, margin: 2.5 }}>
        <Button
          icon
          primary
          height={'100%'}
          transparent
          onPress={() => updateCell(cellYPosition, cellXPosition, playerInfo.mark)}
        >
          {value && (
            <Icon
              name="Ionicons"
              name={`${value === '❌' ? 'logo-xbox' : 'logo-playstation'}`}
              style={{ paddingLeft: 10, fontSize: 50, color: 'black' }}
            />
          )}
        </Button>
      </Col>
    );
  }
}

export default GridCell;
