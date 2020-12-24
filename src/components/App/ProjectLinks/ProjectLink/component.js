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
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
});

const ProjectLink = ({ name, description, url }) => {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <div className={classes.title}>
        <a className={classes.anchor} href={url}>
          {name}
        </a>
      </div>
      <div className={classes.subtitle}>{description}</div>
    </li>
  );
};

ProjectLink.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default ProjectLink;
