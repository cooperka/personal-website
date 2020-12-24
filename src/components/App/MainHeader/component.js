import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

import profilePhoto from '../../../images/profile-2017-web@800.jpg';

const useStyles = makeStyles((theme) => ({
  profilePhoto: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  section: {
    margin: theme.spacing(2),
    marginBottom: 0,
    color: '#444',
  },
}));

const MainHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Box className={classes.profilePhoto} boxShadow={2}>
        <img
          className={classes.profilePhoto}
          src={profilePhoto}
          alt="profile"
        />
      </Box>
      <Typography variant="h3">Kevin Cooper</Typography>
      <Typography variant="h6">
        Improv comedy. Social justice. Ethical technology. Software consultant.
      </Typography>
    </div>
  );
};

export default MainHeader;
