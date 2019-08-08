import React from 'react';
import NavBarContainer from './NavBarContainer.jsx'
import HeaderImage from '../Components/LandingPageCoverPhoto/HeaderImage.jsx';
import LandingPageCardContainter from './LandingPageCardContainer.jsx';
import { connect } from 'react-redux';
/* Bring in Specific Actions */
import { showModal } from '../actions/actions';
import { login } from '../actions/actions';
/** Modal Type Constant */
import { SIGN_UP_MODAL } from '../constants/modaltypes';
import { LOGIN } from '../constants/actionTypes.js';

 class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
      this.showLoginMenu = this.showLoginMenu.bind(this);
      this.showCreateEventBox = this.showCreateEventBox.bind(this);
      this.loginTheUser = this.loginTheUser.bind(this);
 
  }

  showLoginMenu() {
    this.props.showModal(SIGN_UP_MODAL);
    //currently this is a "LOG-IN modal" sign up modal needs to be created.
  }

  loginTheUser(username,password) { 
    console.log("This was clicked!")
    console.log(username);
    console.log(password);
    this.props.login(username,password);
  }

  showCreateEventBox() {

    this.props.showModal(SIGN_UP_MODAL);

  }

  render() {
    return (
      <div>
      <NavBarContainer loginTheUser={this.loginTheUser} showLoginMenu={this.showLoginMenu}/>
      <HeaderImage showCreateEventBox={this.showCreateEventBox}/>
      <LandingPageCardContainter />
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: modelType => dispatch(showModal(modelType)),
  login: (username,password) => dispatch(login(username,password)), 
});

export default connect(null, mapDispatchToProps)(LandingPageContainer);
