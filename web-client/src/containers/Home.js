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
import Navbar from "../components/Navbar"
import TestComponent from "./TestComponent";
import { throws } from "assert";
import { Nav } from "react-bootstrap";


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
    console.log(prevState);
    this.state.locationId++;
    this.state.locations.push(
    <TestComponent 
    locationId={this.state.locationId}
    lat={this.props.childReducer.text}
    lng={this.props.childReducer.text2}
    />);
  }

  // <PlusButton count={this.state.count} increaseCount={(count) => this.setState({count})}/>

  render() {
    return (
      <div className="Home">
        <div className="lander"> 
        <Navbar />
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
