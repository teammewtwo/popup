import { Container, Col, Form, FormGroup, Label, Inpu, Button, } from 'reactstrap';

import React, { Component } from 'react'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
    this.changeInput = this.changeInput.bind(this)
    this.onSubmitLogin = this.onSubmitLogin.bind(this)
  }

  changeInput(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  onSubmitLogin(){
    this.props.loginTheUser(this.state)
  }

  render() {
    console.log(this.state);
    return (
      <div className="navbar">
        <Button id='Home' color="primary">Home</Button>{' '}
        <span>
        <input onChange={this.changeInput} placeholder="myemail@email.com" name='username' value= {this.state.username} type="email"  id='username' className='login'></input>
        <input onChange={this.changeInput} placeholder="*******" name='password' value= {this.state.password} type="password" id='password' className='login'></input>
        <Button  type= 'submit' onClick={this.onSubmitLogin} id='login' color="primary">Log In</Button>{' '}
        <Button id='signup' onClick={this.props.showLoginMenu} color="primary">Sign Up</Button>{' '}
      </span>
    </div>
    )
  }
}


// const NavBar = (props) => (
//   <div className="navbar">
//     <Button id='Home' color="primary">Home</Button>{' '}
//     <span>
//     <input type='text' ref={input=>_name =input} id='username' className='login'></input>
//     <input type='text' id='password'className='login'></input>
//     <Button id='login' onClick={props.loginTheUser} color="primary">Log In</Button>{' '}
//     <Button id='signup' onClick={props.showLoginMenu} color="primary">Sign Up</Button>{' '}
//     </span>
//   </div>
// )

export default NavBar;
