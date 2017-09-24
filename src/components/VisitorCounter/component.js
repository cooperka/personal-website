// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

async function safeInit(appConfig, permissions): Promise<string> {
  if (!window.safeApp) {
    return Promise.reject('No window.safeApp');
  }

  const appHandle = await window.safeApp.initialise(appConfig);
  console.log('Initialized. Handle:', appHandle);

  const authURI = await window.safeApp.authorise(appHandle, permissions);
  console.log('Authorised by user. Auth URI:', authURI);

  await window.safeApp.connectAuthorised(appHandle, authURI);
  console.log('Connected.');

  return appHandle;
}

function safeCleanup(appHandle): void {
  // Make sure that SAFEApp instance is freed from memory.
  if (appHandle) {
    window.safeApp.free(appHandle);
    console.log('SAFEApp instance freed.');
  }
}

type Props = {
  appConfig: { id: string, name: string, vendor: string },
  permissions: { [string]: string[] },
};

type State = {
  currAppHandle: ?string,
}

class VisitorCounter extends Component<Props, State> {

  static propTypes = {
    appConfig: PropTypes.object.isRequired,
    permissions: PropTypes.object.isRequired,
  };

  state = {
    currAppHandle: undefined,
  };

  componentDidMount() {
    const { appConfig, permissions } = this.props;

    safeInit(appConfig, permissions)
      .then((appHandle) => {
        console.log('VisitorCounter received appHandle:', appHandle);
        this.setState({ currAppHandle: appHandle });
      })
      .catch((error) => console.log('Could not init:', error));
  }

  componentWillUnmount() {
    safeCleanup(this.state.currAppHandle);
  }

  render() {
    const { currAppHandle } = this.state;

    return (
      <div className="visitor-counter">
        {`Handle: ${currAppHandle || 'N/A'}`}
      </div>
    );
  }

}

export default VisitorCounter;
