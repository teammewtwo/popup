import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DashboardEventCard from './DashboardEventCard.jsx';

const Events = (props) => {
  console.log(JSON.stringify(props.events));
  const eventsArr = [];
  for (let i = 0; i < props.events.length; i++) {
    hostedEventsArr.push(<EventCard key={i} 
      {...props.events[i]}
    />);
  }

  return (
    <div className='eventsWrapper'>
      {/* <p>hello from inside of events container</p> */}
      <h3>Events In Your Area</h3>
      <DashboardEventCard />
      <DashboardEventCard />
      <DashboardEventCard />
    </div>
  );
};

export default Events;
