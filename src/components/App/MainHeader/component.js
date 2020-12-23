// @flow

import React from 'react';
import Box from '@material-ui/core/Box';

import profilePhoto from '../../../images/profile-2017-web@800.jpg';

const MainHeader = () => {
  return (
    <div className="main-section">
      <Box className="profile-photo" boxShadow={2}>
        <img className="profile-photo" src={profilePhoto} alt="profile" />
      </Box>
      <div className="main-title">Kevin Cooper</div>
      <div className="main-subtitle">
        Improv comedy. Social justice. Ethical technology. Software consultant.
      </div>
    </div>
  );
};

export default MainHeader;
