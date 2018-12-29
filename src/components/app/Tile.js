import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => (
  <li>{props.tile}</li>
);

Tile.propTypes = {
  tile: PropTypes.string
};

export default Tile;