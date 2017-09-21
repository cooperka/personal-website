// @flow

import React, { Component } from 'react';

import profilePhoto from '../../images/profile-2017-web@800.jpg';
import SOCIAL_LINKS from '../../socialLinks';

import SocialLink from '../SocialLink';

import './styles.css';

const APP_CONFIG = {
  id: 'cooperka.www',
  name: 'cooperka\'s personal site',
  vendor: 'cooperka',
};

const PERMISSIONS = {
  _public: ['Read', 'Insert'],
};

function safeInit() {
  if (!window.safeApp) {
    return Promise.reject('No window.safeApp');
  }

  return window.safeApp.initialise(APP_CONFIG)
    .then((appToken) => {
      console.log('Application Token received:', appToken);
      window.safeApp.authorise(appToken, PERMISSIONS)
        .then((authURI) => {
          console.log('Application was authorised by user. Auth URI received:', authURI);
          window.safeApp.connectAuthorised(appToken, authURI)
            .then(() => {
              console.log('Application is now registered in the network.');
              return appToken;
            });
        }, (error) => {
          console.warn('Application authorisation was rejected:', error);
        });
    });
}

function safeCleanup(appToken) {
  // Make sure that SAFEApp instance is freed from memory.
  if (appToken) {
    window.safeApp.free(appToken);
    console.log('SAFEApp instance freed.');
  }
}

type Props = {};

class App extends Component<Props> {

  componentDidMount() {
    safeInit()
      .then((appToken) => { this.currAppToken = appToken; })
      .catch((error) => console.log('Could not init:', error));
  }

  componentWillUnmount() {
    safeCleanup(this.currAppToken);
  }

  currAppToken = undefined;

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
      </div>
    );
  }

}

export default App;
