import React, { Component } from "react";
import { Button, Form} from "react-bootstrap";
import "./Login.css";
import axios from 'axios'

var header = {
  headers: {"Access-Control-Allow-Origin": "true"}
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit () {
    console.log("SS");

  }

  // handleSubmit = () =>  {
  // event.preventDefault();
  // this.setState({ username: event.target.value });
  // console.log("SS");
  // }
  // axios({
  //   method: 'post',
  //   url: 'http://localhost:8080/login',
  //   headers: {"Access-Control-Allow-Origin": "true"},
  //   data: {
  //     username: this.state.username,
  //     password: this.state.password
  //   }
  // }).then(response => {
  //   console.log(response);
  // });

 
  render() {
    return (
      <div className="Login">
        <Form>
          <Form.Group controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}