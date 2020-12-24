import React from 'react';
import { makeStyles } from '@material-ui/core';

import SOCIAL_LINKS from '../../../socialLinks';
import SocialLink from './SocialLink/component';

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

const SocialLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.mainSubtitle}>Find out more:</div>
      <ul className={classes.links}>
        {SOCIAL_LINKS.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SocialLink {...link} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
