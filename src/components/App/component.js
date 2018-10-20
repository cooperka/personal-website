// @flow

import React, { Component } from 'react';

import profilePhoto from '../../images/profile-2017-web@800.jpg';
import SOCIAL_LINKS from '../../socialLinks';

import SocialLink from '../SocialLink';

import './styles.css';

type Props = {
};

class App extends Component<Props> {

  renderMainHeader() {
    return (
      <div className="main-header">
        <img className="profile-photo material z-depth-1" src={profilePhoto} alt="profile" />
        <div className="main-title">Kevin Cooper</div>
        <div className="main-subtitle">Software Engineer</div>
        <div className="main-subtitle">I run <a href="https://lsrfocus.com">LSR</a>, providing freelance software development and strategic planning.</div>
      </div>
    );
  }

  renderSocialLinks() {
    return (
      <ul className="social-links">
        {SOCIAL_LINKS.map(
          (data, index) =>
            // eslint-disable-next-line react/no-array-index-key
            <SocialLink key={index} name={data.name} url={data.url} icon={data.icon} iconHover={data.iconHover} />,
        )}
      </ul>
    );
  }

  renderFooter() {
    return (
      <div className="footer">
        <div>&copy; 2018 Kevin Cooper</div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderMainHeader()}
        {this.renderSocialLinks()}
        {this.renderFooter()}
      </div>
    );
  }

}

export default App;
