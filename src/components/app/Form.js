import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Form extends PureComponent {
  
  state = {
    guess: ''
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    this.props.onSubmit(e, this.state.guess);
  };

  render() {
    const { guess } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input value={guess} name="guess" onChange={this.handleChange}/>
        <button>Submit Guess</button>
      </form>
    );
  }
}

export default Form;