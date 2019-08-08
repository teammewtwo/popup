import React from 'react';
import Modal from './Modal.jsx';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// see the modal container for information regarding how these props render thorugh the onclose method. 
// title, description, maxAttendees, host, location, cuisineType, start, end, date, price,

class CreateEventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        description: '',
        maxAttendees: '',
        host: '',
        location: '',
        cuisineType: '',
        start: '',
        end: '', 
        date: '',
        price: '',
    }
    this.onClose = this.onClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('dsajflahfd', this.state)
    this.props.createNewEvent(this.state);
  }

  onClose() {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal onClose={this.onClose}>
           <h1>Create Event</h1>
          <Form className="container" onSubmit={this.onSubmit}>
            <FormGroup>
             <Label for="title">Title</Label>
             <Input id="title" className="form-control" value={this.state.title} onChange={this.onChange} placeholder="Title Name"type="text" name="title" />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input className="form-control" onChange={this.onChange} value={this.state.description} type="textarea" name="description" id="description" placeholder="Description" />
            </FormGroup>
            <FormGroup>
          <Label for="maxAttendees">Max Attendees</Label>
          <Input className="form-control" onChange={this.onChange} type="select" value={this.state.maxAttendees} name="maxAttendees" id="maxAttendees">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
          </FormGroup>
          <FormGroup>
            <Label for="host">Host</Label>
            <Input className="form-control" onChange={this.onChange} value={this.state.host} type="text" name="host" id="host" placeholder="Host" />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input className="form-control" onChange={this.onChange} value={this.state.location} type="text" name="location" id="location" placeholder="Host" />
          </FormGroup>
          <FormGroup>
            <Label for="cuisinetype">Cuisine Type</Label>
            <Input className="form-control" onChange={this.onChange} value={this.state.cuisineType} type="text" name="cuisineType" id="cuisineType" placeholder="Cuisine Type" />
          </FormGroup>
          <FormGroup>
            <Label for="start">Start</Label>
            <Input className="form-control" onChange={this.onChange} value={this.state.start} type="text" name="start" id="start" placeholder="Start" />
          </FormGroup>
          <FormGroup>
            <Label for="end">End</Label>
            <Input className="form-control" onChange={this.onChange} value={this.state.end} type="text" name="end" id="end" placeholder="End" />
          </FormGroup>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input className="form-control" onChange={this.onChange} value={this.state.date} type="text" name="date" id="date" placeholder="Date" />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input className="form-control" onChange={this.onChange} value={this.state.price} type="text" name="price" id="price" placeholder="Price" />
          </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
      </Modal>
    );
  }
};

  


export default CreateEventModal;