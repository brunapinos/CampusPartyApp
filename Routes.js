import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import InitialScreen from './src/screens/InitialScreen';

const Routes = () => ({
  render() {
    return (
      <Router>
        <Drawer
          hideNavBar
          key="drawer"
          drawerLockMode="locked-closed"
          contentComponent={MenuContainer}
          drawerWidth={270}
          drawerPosition="right"
        >
          <Scene key="root">
          </Scene>
        </Drawer>
      </Router>
    );
  },
});

export default Routes;
