import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';

import MainHeader from './MainHeader/component';
import SocialLinks from './SocialLinks/component';
import ProjectLinks from './ProjectLinks/component';
import Footer from './Footer/component';

import 'fontsource-roboto';
import theme from '../../theme';

const muiTheme = createMuiTheme(theme);

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
});

class AppRoot extends React.Component {
  componentDidMount() {
    // Remove the temporary statically injected CSS (added by react-static-plugin-jss).
    // const jssStyles = document.getElementById('jss-server-side');
    // if (jssStyles && jssStyles.parentNode) {
    //   jssStyles.parentNode.removeChild(jssStyles);
    // }
  }

  render() {
    return <App />;
  }
}

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={classes.container}>
        <MainHeader />
        <ProjectLinks />
        <SocialLinks />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AppRoot;
