import React, { PureComponent } from 'react';
import Tiles from './Tiles';
import PropTypes from 'prop-types';
import { startGame } from '../../services/api';
import qs from 'query-string';

class Game extends PureComponent {
  state = {
    tilesGuessed: null,
    guessesRemaining: null
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  init = () => {
    startGame().then(res => {
      console.log('RESPONSE', res);
      this.setState({ ...res }, () => {
        this.props.history.push({
          pathname: '/',
          search: qs.stringify({ game: this.state.key })
        });
      });
    });
  };

  render() { 
    return (
      <div>
        <button onClick={this.init}>Start Game</button>
        {this.state.tilesGuessed &&
          <Tiles tiles={this.state.tilesGuessed}/>
        }
      </div>
    );
  }
}
 
export default Game;