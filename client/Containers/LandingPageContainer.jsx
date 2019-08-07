import React from 'react';
import NavBarContainer from './NavBarContainer.jsx'
import HeaderImage from '../Components/LandingPageCoverPhoto/HeaderImage.jsx';
import LandingPageCardContainter from './LandingPageCardContainer.jsx';
import { connect } from 'react-redux';
/* Bring in Specific Actions */
import { showModal } from '../actions/actions'
/** Modal Type Constant */
import { SIGN_UP_MODAL } from '../constants/modaltypes';

export class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.showLoginMenu = this.showLoginMenu.bind(this);
    this.showCreateEventBox = this.showCreateEventBox.bind(this);
  }

  showLoginMenu() {
    this.props.showModal(SIGN_UP_MODAL);
  }

  showCreateEventBox() {
    this.props.showModal(SIGN_UP_MODAL)
  }

  render() {
    return (
      <div>
      <NavBarContainer showLoginMenu={this.showLoginMenu}/>
      <HeaderImage showCreateEventBox={this.showCreateEventBox}/>
      <LandingPageCardContainter />
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: modelType => dispatch(showModal(modelType))
});

export default connect(null, mapDispatchToProps)(LandingPageContainer);
