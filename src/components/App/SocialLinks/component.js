import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import SOCIAL_LINKS from '../../../socialLinks';
import SocialLink from './SocialLink/component';

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
    listStyle: 'none',
  },
}));

const SocialLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Typography variant="h5">Find out more</Typography>
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
