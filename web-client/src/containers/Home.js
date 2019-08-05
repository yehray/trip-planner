import React, { Component } from "react";
import "../styles/Home.css";
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
import Map from "../containers/Map";
import Navbar from "../components/Navbar"
import TestComponent from "./TestComponent";
import { throws } from "assert";
import { Nav } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import DraggableList from "../components/DraggableList"


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      locationId: 0,
      selectedLocation: '',
      locations: [],
      testLocations: []
    };
  }


  // handleOnClick = () => {
  //   store.dispatch(addText('this button is clicked'));
  //   console.log(store.getState())
  // };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState);
    this.state.locationId++;
    this.state.locations.push({
    id: Date.now(),
    content: <TestComponent 
    locationId={this.state.locationId}
    lat={this.props.childReducer.text}
    lng={this.props.childReducer.text2}
    addLocation={this.addNewLocation.bind(this)}
    />});
  }

  addNewLocation(prevProps, prevState, snapshot) {
    console.log("test");
  }

  // <PlusButton count={this.state.count} increaseCount={(count) => this.setState({count})}/>

  render() {
    return (
      <div className="Home">
        <div className="lander"> 
        <Navbar />
          <h1>Scratch</h1>
          <SearchBar></SearchBar>
          <p>A simple note taking app</p>
          <p>{this.state.username}</p>
          <button onClick={this.handleOnClick}>Submit</button>
          <p>{this.props.childReducer.text}</p>
          <DraggableList locations={this.state.locations}></DraggableList>
          <Map></Map>

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
