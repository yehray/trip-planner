import React, { Component } from "react";
import "./Home.css";
import rootReducer from "../reducers/index.js";
import {
  setActionTemplate,
  addText,
  addText2
} from '../actions';
import { createStore } from 'redux';
import store from '../index.js';
import { connect } from 'react-redux'; 


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  // handleOnClick = () => {
  //   store.dispatch(addText('this button is clicked'));
  //   console.log(store.getState())
  // };


  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          <p> ddd {this.state.username}</p>
          <button onClick={this.handleOnClick}>Submit</button>
          <p>{this.props.childReducer.text}</p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return { childReducer: state.childReducer };
};

export default connect(mapStateToProps)(Home);
