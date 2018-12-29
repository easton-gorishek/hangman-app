import React, { PureComponent } from 'react';
import Tiles from './Tiles';
import { startGame } from '../../services/api';

class Game extends PureComponent {
  state = {
    tiles: null
  };

  init = () => {
    startGame().then(res => {
      console.log('RESPONSE', res);
      this.setState({
        tiles: res
      });
    });
  };

  render() { 
    return (
      <div>
        <button onClick={this.init}>Start Game</button>
        {this.state.tiles &&
          <Tiles tiles={this.state.tiles}/>
        }
      </div>
    );
  }
}
 
export default Game;