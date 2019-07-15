import React, { Component } from "react";
import axios from 'axios'
import Routes from "./Routes";
import { connect } from 'react-redux'; 

var header = {
  headers: {"Access-Control-Allow-Origin": "true"}
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      message: "Loading...",
      username: ''
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:5000/")
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ message: data.message });
  //     });
  // }


  handleClick () {
    axios.get('http://localhost:8080/test', header)
    .then(response => {
    this.setState({username: response.data});
    })

  }

  render() {
    return <div>
      <div className='button__container'>
      <button className='button' onClick={this.handleClick}>Click Me</button>
      </div>
      <a href="/login">LOGIN</a> 
      <a href="/signup">SIGNUP</a> 
      <Routes />
    </div>;
  }
}


const mapStateToProps = (state) => {
  return { childReducer: state.childReducer };
};

export default connect(mapStateToProps)(App);

