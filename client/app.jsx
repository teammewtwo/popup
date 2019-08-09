import React, { Component } from 'react';
import LandingPageContainer from './Containers/LandingPageContainer.jsx'
import ModalContainer from './Containers/ModalsRootContainer.jsx'
import DashboardContainer from './Containers/DashboardContainer.jsx'
import { Route, Link } from 'react-router-dom'; // React Router Will use later
import Home from './Components/Home';
import { connect } from 'react-redux';
const mapStateToProps = store => ({
  users: store.users.renderState,
  loggedIn: store.users.loggedIn,
});
class App extends Component {
  constructor(props){
    super(props);
  }
  
  
  render() {
    if(this.props.users){
      return (
    
        <div id="app">
          helloooooooo
          <DashboardContainer/>
          
        </div>
      );
    }
    else{
      return(
        <div id="app">
          byeeeeeeee
          <Home />
        </div>
      )
    }
}
}
export default connect(mapStateToProps, null)(App);
