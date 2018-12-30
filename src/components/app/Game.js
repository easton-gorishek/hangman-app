import React, { PureComponent, Fragment } from 'react';
import Tiles from './Tiles';
import Form from './Form';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { 
  startGame, 
  updateGuess, 
  loadGame, 
  guessEntireWord,
  previousMove } from '../../services/api';

class Game extends PureComponent {
  state = {
    tilesGuessed: null,
    guessesRemaining: null,
    gameStatus: null,
    fullWord: false,
    history: []
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

  handleFullGuess = (e, guess) => {
    e.preventDefault();
    const { history, location } = this.props;
    const game = location.search.slice(6);
    guessEntireWord({ guess, game }).then(res => {
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

  undoMove = () => {
    const { location, history } = this.props;
    const game = location.search;

    if(!game) return;
    previousMove(game).then(res => {
      this.setState({ ... res }, () => {
        history.push({
          pathname: '/',
          search: qs.stringify({ game: res.key })
        });
      });
    });
  };

  render() { 
    const { 
      tilesGuessed, 
      guessesRemaining, 
      gameStatus,
      fullWord,
      history } = this.state;

    return (
      <div>
        {!tilesGuessed &&
          <button onClick={this.init}>Start Game</button>
        }
        
        {tilesGuessed &&
          <Fragment>
            <p>Guesses remaining: {guessesRemaining} </p>
            <Tiles tiles={this.state.tilesGuessed}/>
            <Form onSubmit={this.handleSingleGuess} text='Submit Guess'/>
          </Fragment>
        }

        {tilesGuessed && !fullWord  &&
          <Form onSubmit={this.handleFullGuess} text='Submit Entire Word'/>
        }
        
        {tilesGuessed &&
          <button disabled={history.length <= 0 ? true : false} onClick={this.undoMove}>Undo</button>
        }

        {gameStatus && 
          <p>{gameStatus}</p>
        }

      </div>
    );
  }
}
 
export default Game;