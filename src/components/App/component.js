// @flow

import React, { Component } from 'react';

import profilePhoto from '../../images/profile-2017-web@800.jpg';
import SOCIAL_LINKS from '../../socialLinks';

import SocialLink from '../SocialLink';
import VisitorCounter from '../VisitorCounter';

import './styles.css';

const APP_CONFIG = {
  id: 'cooperka.www',
  name: 'cooperka\'s personal site',
  vendor: 'cooperka',
};

const PERMISSIONS = {
  _public: ['Read', 'Insert'],
};

type Props = {};

class App extends Component<Props> {

  renderMainHeader() {
    return (
      <div className="main-header">
        <img className="profile-photo" src={profilePhoto} alt="profile" />
        <div className="main-title">Kevin Cooper</div>
        <div className="main-subtitle">Software Engineer</div>
      </div>
    );
  }

  renderSocialLinks() {
    return (
      <ul className="social-links">
        {SOCIAL_LINKS.map((data, index) =>
          // eslint-disable-next-line react/no-array-index-key
          <SocialLink key={index} name={data.name} url={data.url} icon={data.icon} iconHover={data.iconHover} />,
        )}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderMainHeader()}
        {this.renderSocialLinks()}
        <VisitorCounter appConfig={APP_CONFIG} permissions={PERMISSIONS} />
      </div>
    );
  }

}

export default App;
