import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useRef } from 'react';
import { Movies, Actors, MovieInformation, Navbar, Profile } from './index';

import useStyles from './styles';
import useAlan from './Alan';

function App() {
  const classes = useStyles();
  useAlan();
  const alanBtnContainer = useRef();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />

    </div>
  );
}

export default App;
