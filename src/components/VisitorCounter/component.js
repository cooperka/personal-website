// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

// Current network conventions:
// * 15001 -> public id
// * 15002 -> web service
// * 15003 -> email service
// https://forum.safedev.org/t/how-to-upload-a-file-to-the-network/800/6
const TYPE_TAG = 15002;

async function testMutableData(appHandle) {
  const MUTABLE_DATA_ENTRIES = { visitCount: 0 };

  const name = 'name-public-01010101010101010101';
  const dataHandle = await window.safeMutableData.newPublic(appHandle, name, TYPE_TAG);

  await window.safeMutableData.quickSetup(dataHandle, MUTABLE_DATA_ENTRIES);


  const keys = await window.safeMutableData.getKeys(dataHandle);

  window.safeMutableDataKeys.forEach(keys, (key) => console.log('Key:', key.toString()));
  console.log('Keys iteration finished');

  window.safeMutableDataKeys.free(keys);
  console.log('MutableData Keys instance freed.');

  const values = await window.safeMutableData.getValues(dataHandle);

  window.safeMutableDataValues.forEach(values, (value) => console.log('Value:', value.buf.toString()));
  console.log('Values iteration finished');

  window.safeMutableDataValues.free(values);
  console.log('MutableData Values instance freed.');

  const entries = await window.safeMutableData.getEntries(dataHandle);

  window.safeMutableDataEntries.forEach(entries, (key, value) =>
    console.log('Entry: (', key.toString(), ',', value.buf.toString(), ')'));
  console.log('Entries iteration finished');

  window.safeMutableDataEntries.free(entries);
  console.log('MutableData Entries instance freed.');

  window.safeMutableData.free(dataHandle);
  console.log('MutableData instance freed.');
}

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

        testMutableData(appHandle)
          .catch((error) => console.log('MutableData error:', error));
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
