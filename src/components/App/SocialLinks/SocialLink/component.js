import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SocialLink = ({ name, url, Icon, HoverIcon }) => {
  return (
    <li className="social-link-item">
      <a className="social-link-anchor" href={url}>
        <Icon className={['social-icon', 'dark'].join(' ')} title={name} />
        <HoverIcon
          className={['social-icon', 'colorful'].join(' ')}
          title={name}
        />
      </a>
    </li>
  );
};

SocialLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  Icon: PropTypes.node,
  HoverIcon: PropTypes.node,
};

export default SocialLink;
