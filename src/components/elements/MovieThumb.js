import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';


const MovieThumb = ({ image, movieId, clickable}) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img src={image} alt="movieThumb" className="clickable" />
      </Link>
    ) : (
      <img src={image} alt="movieThumb" />
    )}
  </StyledMovieThumb>
)

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
}

export default MovieThumb;
