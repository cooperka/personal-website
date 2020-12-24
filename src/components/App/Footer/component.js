import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <Typography>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        &copy; 2020 Kevin Cooper &bull;{' '}
        <a href="https://github.com/cooperka/personal-website">View source</a>
      </Typography>
    </footer>
  );
};

export default Footer;
