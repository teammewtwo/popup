import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DashboardEventCard from './DashboardEventCard.jsx';

const Events = (props) => {
  console.log("im in Events Prop")
  //console.log(JSON.stringify(props.events));
  console.log('also event props is ',props.events)
  const eventsArr = [];
  for (let i = 0; i < props.events.length; i++) {
    eventsArr.push(<DashboardEventCard key={i} 
      {...props.events[i]}
    />);
  }
  console.log(eventsArr);
  return (
    <div className='eventsWrapper'>
      {/* <p>hello from inside of events container</p> */}
      <h3>Events In Your Area</h3>
      {/* <DashboardEventCard dog="cat" /> */}
      {eventsArr}
      {/* <DashboardEventCard />
      <DashboardEventCard /> */}
    </div>
  );
};

export default Events;
