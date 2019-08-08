import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // React Router
import { connect } from 'react-redux';
// // REQUIRED FOR ASYNC/AWAIT BUT NOT LISTED IN PACKAGE.JSON
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import SideBar from '../Components/DashboardSideBar/SideBar.jsx';
import Events from '../Components/DashboardEvents/Events.jsx';
import  {getEvents, getEventsAndDispatch} from '../actions/actions';

const mapStateToProps = store => ({
  events: store.events.events,
});

// TO TRY:
// const getEventsAndDispatch = () => async (dispatch) => {
//   const results = await fetch('/api/');
//   return dispatch(getEvents(events));
// }


const mapDispatchToProps = dispatch => ({
  loadEvents: () => dispatch(getEventsAndDispatch()),
});

class DashboardContainer extends Component {
  componentDidMount() {
    
    console.log("im in compWillMount")
    
    this.props.loadEvents()
  }
  
   render() {
    // console.log("rendering")
    // console.log('this is state', this.props.events)
    return(
      <div className="dashboardWrapper">
      
        {/* <p>hello from inside the wrapper</p> */}
        <SideBar />
        <Events events={this.props.events} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
