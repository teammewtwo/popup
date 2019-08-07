import React from 'react';

import NavBarContainer from '../Wrappers/NavBarContainer.jsx'
import { connect } from 'react-redux';
// import * as actions from '../../actions/actions';
// import NavBar from '../Components/NavBar.jsx'
import HeaderImage from '../Components/HeaderImage.jsx'
import CardContainter from './CardCaontainer.jsx'
/* Bring in Specific Actions */
import { showModal } from '../../actions/actions'
/** Modal Type Constant */
import { CREATE_EVENT_MODAL, SIGN_UP_MODAL } from '../../constants/modaltypes.js';

export class PageContainer extends React.Component {
  constructor(props) {
    super(props);
      this.showLoginMenu = this.showLoginMenu.bind(this);
      this.showCreateEventBox = this.showCreateEventBox.bind(this);
  }

  showLoginMenu() {
    this.props.showModal(SIGN_UP_MODAL);
    //currently this is a "LOG-IN modal" sign up modal needs to be created.
  }

  showCreateEventBox() {
    this.props.showModal(SIGN_UP_MODAL)
   //currently this is a "LOG-IN modal" sign up modal needs to be created.
  }

  render() {
    return (
      <div>
      <NavBarContainer showLoginMenu={this.showLoginMenu}/>
      <HeaderImage showCreateEventBox={this.showCreateEventBox}/>
      <CardContainter />
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: modelType => dispatch(showModal(modelType))
});

export default connect(null, mapDispatchToProps)(PageContainer);
