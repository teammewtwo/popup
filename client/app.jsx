import React, { Component } from 'react';
// import {Provider} from "react-redux"
import LandingPage from './LandingPage/Wrappers/PageContainer.jsx';
import ModalContainer from './LandingPage/Wrappers/ModalsRootContainer.jsx';
import { Route, Link } from 'react-router-dom';
//We're coming to come back and change this.
import './application.scss';
import Dashboard from './dashboard/Wrapper.jsx';

class App extends Component {
  render() {
  return (
    <div id="main">
      <LandingPage />
      <Dashboard />
      <ModalContainer />
    </div>
  );
}
}

export default App;