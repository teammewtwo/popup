import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { ButtonGroup } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const DashboardEventCard = (props) => {
  //console.log('props')
  console.log('im going in the dashboard props')
  console.log(props);
  return (
    <div>
      <Card body className="eventCard">
        <CardTitle>title</CardTitle>
        <div className="eventData">
          <CardSubtitle>host {props.host}</CardSubtitle>
          <CardSubtitle>location {props.location}</CardSubtitle>
          <CardSubtitle>date {props.date}</CardSubtitle>
          <CardSubtitle>cuisine_type {props.cuisine_type}</CardSubtitle>
          <CardSubtitle>start time {props.start}</CardSubtitle>
          <CardSubtitle>end time {props.end}</CardSubtitle>
          <CardSubtitle>price {props.price}</CardSubtitle>
        </div>
        <CardText>
          {console.log("hello")}
          {props.title}
        </CardText>
        <ButtonGroup>
          <Button>Cancel</Button>
          <Button>Contact Host</Button>
          <Button>Pay Now</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default DashboardEventCard;
