import React from 'react';
import Modal from './Modal.jsx';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// see the modal container for information regarding how these props render thorugh the onclose method. 
class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
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
    this.props.createNewUser(this.state);
  }

  onClose() {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal onClose={this.onClose}>
           <h1>Sign Up</h1>
          <Form className="container" onSubmit={this.onSubmit}>
            <FormGroup>
             <Label for="firstname">First Name</Label>
             <Input id="firstname" className="form-control" value={this.state.FirstName} onChange={this.onChange} placeholder="First Name"type="text" name="firstName" />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input onChange={this.onChange} value={this.state.LastName} type="text" name="lastName" id="lastname" placeholder="Last Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
               <Input onChange={this.onChange} value={this.state.Enail} type="text" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
               <Label for="password">Password</Label>
              <Input onChange={this.onChange} value={this.state.Password} type="text" name="password" id="password" placeholder="Password" />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
      </Modal>
    );
  }
};


export default SignUpModal;