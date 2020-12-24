import React from 'react';
import { makeStyles } from '@material-ui/core';

import PROJECT_LINKS from '../../../projectLinks';
import ProjectLink from './ProjectLink/component';

const useStyles = makeStyles({
  section: {
    margin: 10,
    marginBottom: 0,
    color: '#444',
  },
  mainSubtitle: {
    margin: 10,
    fontSize: 22,
  },
  links: {
    margin: 10,
    marginTop: 0,
    padding: 0,
    listStyle: 'none',
  },
});

const ProjectLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.mainSubtitle}>Hosted projects:</div>
      <ul className={classes.links}>
        {PROJECT_LINKS.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProjectLink {...link} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectLinks;
