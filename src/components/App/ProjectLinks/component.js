// @flow

import React from 'react';

import PROJECT_LINKS from '../../../projectLinks';
import ProjectLink from './ProjectLink/component';

const ProjectLinks = () => {
  return (
    <div className="main-section">
      <div className="main-subtitle">Hosted projects:</div>
      <ul className="links">
        {PROJECT_LINKS.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProjectLink {...link} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectLinks;
