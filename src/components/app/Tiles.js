import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

const Tiles = (props) => (
  <ul>
    {props.tiles.map((tile, i) => (
      <Tile
        key={i}
        tile={tile}
      />
    ))}
  </ul>
);

Tiles.propTypes = {
  tiles: PropTypes.array
};

export default Tiles;