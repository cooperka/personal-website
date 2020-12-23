// @flow

import React from 'react';
import { render } from 'react-snapshot';

import App from './components/App/component';

import './styles.css';

render(<App />, document.getElementById('root'));
