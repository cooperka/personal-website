import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  listItem: {
    display: 'inline-block',
  },
  anchor: {
    margin: 5,
    padding: 5,
    display: 'inline-block',
    '&:hover': {
      WebkitFilter: 'drop-shadow(0 3px 3px rgba(0, 0, 0, 0.23))',
      filter: 'drop-shadow(0 3px 3px rgba(0, 0, 0, 0.23))',
      '& .dark': {
        opacity: 0,
        transform: 'scale(1.1)',
      },
      '& .colorful': {
        opacity: 1,
        transform: 'scale(1.1)',
      },
    },
  },
  icon: {
    height: 40,
    transition: 'all 0.2s ease',
  },
  dark: {
    opacity: 1,
    position: 'absolute',
  },
  colorful: {
    opacity: 0,
  },
});

const SocialLink = ({ name, url, icon, iconHover }) => {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <a className={classes.anchor} href={url}>
        <img
          className={[classes.icon, classes.dark, 'dark'].join(' ')}
          src={icon}
          alt={name}
        />
        <img
          className={[classes.icon, classes.colorful, 'colorful'].join(' ')}
          src={iconHover}
          alt={name}
        />
      </a>
    </li>
  );
};

SocialLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
  iconHover: PropTypes.string,
};

export default SocialLink;
