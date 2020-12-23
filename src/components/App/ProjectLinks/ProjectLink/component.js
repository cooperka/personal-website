import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProjectLink = ({ name, description, url }) => {
  return (
    <li className="project-link-item">
      <div className="title">
        <a className="project-link-anchor" href={url}>
          {name}
        </a>
      </div>
      <div className="subtitle">{description}</div>
    </li>
  );
};

ProjectLink.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default ProjectLink;
