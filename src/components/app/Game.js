import React, { PureComponent } from 'react';
import Tiles from './Tiles';

class Game extends PureComponent {
  state = {
    tiles: ['h', 'a', 'n', 'g', 'm', 'a', 'n']
  };

  render() { 
    return (
      <Tiles tiles={this.state.tiles}/>
    );
  }
}
 
export default Game;