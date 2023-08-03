import React from 'react';

import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// Here useStyles are used as a hook
import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>

        {/* Typography is basically every single text element but we can change the variants */}
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>

        {/* In material-ui a box is basically a div */}
        <Box display="flex">

          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;