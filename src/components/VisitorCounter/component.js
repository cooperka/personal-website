// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

async function safeInit(appConfig, permissions): Promise<string> {
  if (!window.safeApp) {
    return Promise.reject('No window.safeApp');
  }

  const appToken = await window.safeApp.initialise(appConfig);
  console.log('Application Token received:', appToken);

  const authURI = await window.safeApp.authorise(appToken, permissions);
  console.log('Application was authorised by user. Auth URI received:', authURI);

  await window.safeApp.connectAuthorised(appToken, authURI);
  console.log('Application is now registered in the network.');

  return appToken;
}

function safeCleanup(appToken): void {
  // Make sure that SAFEApp instance is freed from memory.
  if (appToken) {
    window.safeApp.free(appToken);
    console.log('SAFEApp instance freed.');
  }
}

type Props = {
  appConfig: { id: string, name: string, vendor: string },
  permissions: { [string]: string[] },
};

type State = {
  currAppToken: ?string,
}

class VisitorCounter extends Component<Props, State> {

  static propTypes = {
    appConfig: PropTypes.object.isRequired,
    permissions: PropTypes.object.isRequired,
  };

  state = {
    currAppToken: undefined,
  };

  componentDidMount() {
    const { appConfig, permissions } = this.props;

    safeInit(appConfig, permissions)
      .then((appToken) => {
        console.log('VisitorCounter received token:', appToken);
        this.setState({ currAppToken: appToken });
      })
      .catch((error) => console.log('Could not init:', error));
  }

  componentWillUnmount() {
    safeCleanup(this.state.currAppToken);
  }

  render() {
    const { currAppToken } = this.state;

    return (
      <div className="visitor-counter">
        {`Token: ${currAppToken || 'N/A'}`}
      </div>
    );
  }

}

export default VisitorCounter;
