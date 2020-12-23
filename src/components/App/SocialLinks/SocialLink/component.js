// @flow

import React from 'react';

import './styles.css';

type Props = {
  name: string,
  url: string,
  Icon: React.Node,
  HoverIcon: React.Node,
};

const SocialLink = (props: Props) => {
  const { name, url, Icon, HoverIcon } = props;

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

export default SocialLink;
