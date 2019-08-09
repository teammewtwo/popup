import React, { Component } from 'react';import LandingPageContainer from '../Containers/LandingPageContainer.jsx';
import ModalContainer from '../Containers/ModalsRootContainer.jsx';

 class Home extends Component {
   
   render() { 
     return (
        <div className="home">
          <LandingPageContainer />
          <ModalContainer />
        </div>
    )
  }
}

export default Home;