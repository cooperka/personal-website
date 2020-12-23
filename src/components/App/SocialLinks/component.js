// @flow

import React from 'react';

import SOCIAL_LINKS from '../../../socialLinks';
import SocialLink from './SocialLink/component';

const SocialLinks = () => {
  return (
    <div className="main-section">
      <div className="main-subtitle">Find out more:</div>
      <ul className="links">
        {SOCIAL_LINKS.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SocialLink {...link} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
