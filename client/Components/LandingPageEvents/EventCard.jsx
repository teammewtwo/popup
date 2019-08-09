import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
// this is the event card used imported through reactstrap

alerting(){
  alert('hi')
}

const EventCard = (props) => {
  return (
    <div>
      <Card id='eventcard'>

        <CardImg top width="100%" src="http://placekitten.com/318/180" alt="Card image cap" />

        

        <CardBody>
        <button onClick={this.alerting}></button>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventCard;