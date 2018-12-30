import React, { PureComponent, Fragment } from 'react';
import Tiles from './Tiles';
import Form from './Form';
import PropTypes from 'prop-types';
import { startGame, updateGuess, loadGame } from '../../services/api';
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

  componentDidMount() {
    this.loadGame();
  }

  componentDidUpdate({ location }) {
    const { game: oldSearch } = qs.parse(location.search);
    if(oldSearch === this.game) return;
    this.loadGame();
  }

  get game() {
    const { location } = this.props;
    const { game } = qs.parse(location.search);
    return game;
  }

  init = (e) => {
    e.preventDefault();
    startGame().then(res => {
      this.setState({ ...res }, () => {
        this.props.history.push({
          pathname: '/',
          search: qs.stringify({ game: this.state.key })
        });
      });
    });
  };

  handleSingleGuess = (e, guess) => {
    e.preventDefault();
    const { history, location } = this.props;
    const game = location.search.slice(6);
    updateGuess({ guess, game }).then(res => {
      this.setState({ ...res }, () => {
        history.push({
          pathname: '/',
          search: qs.stringify({ game: res.key })
        });
      });
    });
  };

  loadGame = () => {
    const { location } = this.props;
    const game = location.search;

    if(!game) return;
    loadGame(game).then(res => {
      this.setState({ ... res });
    });
  };

  render() { 
    const { tilesGuessed } = this.state;
    return (
      <div>
        {!tilesGuessed &&
          <button onClick={this.init}>Start Game</button>
        }
        
        {tilesGuessed &&
          <Fragment>
            <Tiles tiles={this.state.tilesGuessed}/>
            <Form onSubmit={this.handleSingleGuess}/>
          </Fragment>
        }
      </div>
    );
  }
}
 
export default Game;