import { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import useStyles from './styles';

function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const handleKeyPress = () => {

  };

  return (
    <div
      className={classes.searchContainer}
    >
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
      />
    </div>
  );
}

export default Search;
