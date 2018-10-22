// @flow

import React from 'react';
import { render } from 'react-snapshot';

import App from './components/App/component';

import './vendor/materialize/sass/materialize.css';
import './styles.css';

render(<App />, document.getElementById('root'));
