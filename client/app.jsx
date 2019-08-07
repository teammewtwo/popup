import React, { Component } from 'react';
import LandingPageContainer from './Containers/LandingPageContainer.jsx'
import ModalContainer from './Containers/ModalsRootContainer.jsx'
import DashboardContainer from './Containers/DashboardContainer.jsx'
import { Route, Link } from 'react-router-dom'; // React Router Will use later

class App extends Component {
  render() {
  return (
    <div id="app">
      <LandingPageContainer />
      <DashboardContainer />
      <ModalContainer />
    </div>
  );
}
}

export default App;