// @flow

import React, { Component } from 'react';

import profilePhoto from '../../images/profile-2017-web@800.jpg';
import SOCIAL_LINKS from '../../socialLinks';
import PROJECT_LINKS from '../../projectLinks';

import SocialLink from '../SocialLink/component';
import ProjectLink from '../ProjectLink/component';

import './styles.css';

type Props = {};

class App extends Component<Props> {
  renderMainHeader() {
    return (
      <div className="main-section">
        <img
          className="profile-photo material z-depth-1"
          src={profilePhoto}
          alt="profile"
        />
        <div className="main-title">Kevin Cooper</div>
        <div className="main-subtitle">
          Improv comedy. Social justice. Ethical technology. Software
          consultant.
        </div>
      </div>
    );
  }

  renderSocialLinks() {
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
  }

  renderProjects() {
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
  }

  renderFooter() {
    return (
      <div className="footer">
        <div>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          &copy; 2020 Kevin Cooper &bull;{' '}
          <a href="https://github.com/cooperka/personal-website">View source</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderMainHeader()}
        {this.renderProjects()}
        {this.renderSocialLinks()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;
