// @flow

import React from 'react';

import profilePhoto from '../../../images/profile-2017-web@800.jpg';

const MainHeader = () => {
  return (
    <div className="main-section">
      {/* TODO: Add back shadow via MUI. */}
      <img className="profile-photo" src={profilePhoto} alt="profile" />
      <div className="main-title">Kevin Cooper</div>
      <div className="main-subtitle">
        Improv comedy. Social justice. Ethical technology. Software consultant.
      </div>
    </div>
  );
};

export default MainHeader;
