// @flow

import React from 'react';

import './styles.css';

type Props = {
  name: string,
  description: string,
  url: string,
};

const ProjectLink = (props: Props) => {
  const { name, description, url } = props;

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

export default ProjectLink;
