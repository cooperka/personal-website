import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import PROJECT_LINKS from '../../../projectLinks';
import ProjectLink from './ProjectLink/component';

const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(2),
    marginBottom: 0,
    color: '#444',
  },
  links: {
    margin: theme.spacing(2),
    marginTop: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ProjectLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Typography variant="h5">Hosted projects:</Typography>
      <div className={classes.links}>
        {PROJECT_LINKS.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProjectLink {...link} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectLinks;
