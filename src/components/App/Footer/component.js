import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  footerContainer: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
  },
  footerInner: {
    fontSize: 12,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerInner}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        &copy; 2020 Kevin Cooper &bull;{' '}
        <a href="https://github.com/cooperka/personal-website">View source</a>
      </div>
    </div>
  );
};

export default Footer;
