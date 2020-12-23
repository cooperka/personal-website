// @flow

import React, { Component } from 'react';

import MainHeader from './MainHeader/component';
import SocialLinks from './SocialLinks/component';
import ProjectLinks from './ProjectLinks/component';
import Footer from './Footer/component';

import './styles.css';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <ProjectLinks />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
