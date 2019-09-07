import React, { Component } from 'react';
import { Row } from 'react-native-easy-grid';

import GridCell from './GridCell';

export class GridRow extends Component {
  render() {
    const rowHeight = 100;

    const { cellYPosition, rowValues, playerInfo, updateCell } = this.props;
    return (
      <Row height={rowHeight} width={rowHeight * 3}>
        {rowValues.map((value, index) => (
          <GridCell
            key={index}
            cellYPosition={cellYPosition}
            cellXPosition={index}
            playerInfo={playerInfo}
            updateCell={updateCell}
            value={value}
          />
        ))}
      </Row>
    );
  }
}

export default GridRow;
