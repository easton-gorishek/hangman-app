import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Game from './Game';

class App extends PureComponent {
  state = {};

  render() { 
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Hangman</h1>
          </header>
          <main>
            <Route exact path="/" component={Game} />
          </main>
        </div>
      </Router>
    );
  }
}
 
export default App;