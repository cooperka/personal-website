import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SocialLink = ({ name, url, icon, iconHover }) => {
  return (
    <li className="social-link-item">
      <a className="social-link-anchor" href={url}>
        <img
          className={['social-icon', 'dark'].join(' ')}
          src={icon}
          alt={name}
        />
        <img
          className={['social-icon', 'colorful'].join(' ')}
          src={iconHover}
          alt={name}
        />
      </a>
    </li>
  );
};

SocialLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
  iconHover: PropTypes.string,
};

export default SocialLink;
