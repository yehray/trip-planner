import React, { Component } from "react";
import { Button, Form} from "react-bootstrap";
import "../styles/Login.css";
import axios from 'axios'
import {
  setActionTemplate,
  addText,
  addText2
} from '../actions';
import { connect } from 'react-redux';
import store from '../index.js';

var header = {
  headers: {"Access-Control-Allow-Origin": "true"}
};



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

   handleSubmit =(event, dispatch) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:8080/login',
      headers: {"Access-Control-Allow-Origin": "true"},
      data: {
        username: this.state.username,
        password: this.state.password
      }
    }).then(response => {
      console.log(response.data);  
      store.dispatch(addText(response.data.first_name));   
      store.dispatch(addText2(response.data.last_name));   
      console.log(store.getState());  
   
      if(response.data !== {}){
        this.props.history.push('/home')     
      }
    });
  }


  
 
  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" id="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}






