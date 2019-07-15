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
import MapContainer from "../containers/MapContainer";
import TestComponent from "./TestComponent";
import { throws } from "assert";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      locationId: 0,
      locations: []
    };
  }


  // handleOnClick = () => {
  //   store.dispatch(addText('this button is clicked'));
  //   console.log(store.getState())
  // };

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.state.locationId++;
    this.state.locations.push(<TestComponent locationId={this.state.locationId}/>);
    console.log(this.state.locations);

  }

  render() {
    return (
      <div className="Home">
        <div className="lander"> 
          <h1>Scratch</h1>
          <ul>
          {this.state.locations.map(item => (
            <li key={Date.now()}>{item}</li>
          ))}
          </ul>
          <MapContainer></MapContainer>
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
