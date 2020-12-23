// @flow

import React, { Component } from 'react';
import { compose } from 'ramda';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import MainHeader from './MainHeader/component';
import SocialLinks from './SocialLinks/component';
import ProjectLinks from './ProjectLinks/component';
import Footer from './Footer/component';

import 'fontsource-roboto';
import theme from './theme';
import './styles.css';

const muiTheme = createMuiTheme(theme);

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div className="App">
          <MainHeader />
          <ProjectLinks />
          <SocialLinks />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {};

export default compose(withStyles(styles))(App);
