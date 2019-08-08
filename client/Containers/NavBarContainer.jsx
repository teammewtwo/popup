import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/NavBar/NavBar.jsx';

import * as actions from '../actions/actions.js'



const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(actions.login(user)),
})

// function submitFunc(props) {
//   this.props.login()
// }
const NavBarContainer = (props) => (
  //change classname to navBar.
  <div className='allcards'>
   <NavBar loginTheUser={props.login} showLoginMenu={props.showLoginMenu} />
  </div>
);


export default connect(null, mapDispatchToProps)(NavBarContainer);