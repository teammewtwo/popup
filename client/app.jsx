import React, { Component } from 'react';
<<<<<<< HEAD
// import {Provider} from "react-redux"
import LandingPage from './LandingPage/Wrappers/PageContainer.jsx';
import ModalContainer from './LandingPage/Wrappers/ModalsRootContainer.jsx';
import { Route, Link } from 'react-router-dom';
//We're coming to come back and change this.
import './application.scss';
import Dashboard from './dashboard/Wrapper.jsx';
=======
import LandingPageContainer from './Containers/LandingPageContainer.jsx'
import ModalContainer from './Containers/ModalsRootContainer.jsx'
import DashboardContainer from './Containers/DashboardContainer.jsx'
import { Route, Link } from 'react-router-dom'; // React Router Will use later
>>>>>>> 4e04f901ee6513f9e6020947241964d5109f45de

class App extends Component {
  render() {
  return (
<<<<<<< HEAD
    <div id="main">
      <LandingPage />
      <Dashboard />
=======
    <div id="app">
      <LandingPageContainer />
      <DashboardContainer />
>>>>>>> 4e04f901ee6513f9e6020947241964d5109f45de
      <ModalContainer />
    </div>
  );
}
}

export default App;