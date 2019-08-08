import React, { Component } from 'react';
import DashboardContainer from './Containers/DashboardContainer.jsx'
import { Route, Link } from 'react-router-dom'; // React Router Will use later
import Home from './Components/Home.js';

class App extends Component {
  render() {
  return (
    <div id="app">

      <LandingPageContainer cat={'man'}/>
      <DashboardContainer events={'fish'}/>
      <ModalContainer cat={'dog'}/>

    </div>
  );
}
}

export default App;