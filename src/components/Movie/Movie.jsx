import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function Movie({ movie, i }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          {movie.poster_path
            ? <img className={classes.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            : <img className={classes.image} src="https://www.fillmurray.com/200/300" alt={movie.title} />}
        </Link>
      </Grow>
      <Typography className={classes.title} variant="h5">{movie.title}</Typography>
    </Grid>
  );
}

export default Movie;
