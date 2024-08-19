import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar} />
    </AppBar>
  );
}

export default NavBar;
