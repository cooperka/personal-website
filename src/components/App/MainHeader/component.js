// @flow

import React from 'react';

import profilePhoto from '../../../images/profile-2017-web@800.jpg';

const MainHeader = () => {
  return (
    <div className="main-section">
      <img
        className="profile-photo material z-depth-1"
        src={profilePhoto}
        alt="profile"
      />
      <div className="main-title">Kevin Cooper</div>
      <div className="main-subtitle">
        Improv comedy. Social justice. Ethical technology. Software consultant.
      </div>
    </div>
  );
};

export default MainHeader;
