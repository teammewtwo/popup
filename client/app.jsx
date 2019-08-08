import React, { Component } from 'react';
import DashboardContainer from './Containers/DashboardContainer.jsx'
import LandingPageContainer from './Containers/LandingPageContainer.jsx'
import ModalsRootContainer from './Containers/ModalsRootContainer.jsx'
import { Route, Link } from 'react-router-dom'; // React Router Will use later
import Home from './Components/Home.js';
// import PageContainer from './LandingPage/Wrappers/PageContainer.jsx'
// import ModalContainer from './LandingPage/Wrappers/ModalsRootContainer.jsx'
class App extends Component {
  render() {
  return (
    <div id="app">
      <Home/>
      <LandingPageContainer cat={'man'}/>
      <DashboardContainer events={'fish'}/>
      <ModalsRootContainer cat={'dog'}/>
      <DashboardContainer />
   
    </div>
  );
}
}

export default App;