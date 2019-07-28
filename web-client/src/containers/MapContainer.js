import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker, SearchBox } from 'google-maps-react';
import MarkersList from "../components/MarkersList";
import {
  setActionTemplate,
  addText,
  addText2
} from '../actions';
import store from '../index.js';

const mapStyles = {
  width: '100%',
  height: '100%'
};


const API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_JAVASCRIPT_API_KEY}`

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
      locations: []    
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  

  handleMapClick = (ref, map, ev) => {
    const location = ev.latLng;
    this.setState(prevState => ({
      locations: [...prevState.locations, location]
    }));
    map.panTo(location);
    store.dispatch(addText(location.lat()));   
    store.dispatch(addText2(location.lng()));   
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };  

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: -1.2884, lng: 36.8233 }}
        onClick={this.handleMapClick}
      >
        {/* <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        ></Marker>
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow> */}
        <MarkersList locations={this.state.locations} icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
        <SearchBox></SearchBox>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);