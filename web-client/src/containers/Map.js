import React, { Component, createRef } from 'react'
import "../styles/GoogleMap.css";
 

const API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_JAVASCRIPT_API_KEY}`

export default class Map extends Component {

  googleMapRef = React.createRef()

  constructor(props) {
    super(props);
    this.state = {
      googleMap: ''
    };
  }

  componentDidMount() {
    const googleMapScript = document.createElement('script')
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`
    window.document.body.appendChild(googleMapScript)
    googleMapScript.addEventListener('load', () => {
      this.state.googleMap = this.createGoogleMap()
      this.createSearchBar()
    })
  }

  createSearchBar(){
    var input = document.getElementById('pac-input');
    var map = this.state.googleMap;
    var searchBox = new window.google.maps.places.SearchBox(input);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.   
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new window.google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new window.google.maps.Size(71, 71),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(17, 34),
          scaledSize: new window.google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new window.google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
    
  }


  createGoogleMap = () =>
  new window.google.maps.Map(this.googleMapRef.current, {
    zoom: 16,
    center: {
      lat: 43.642567,
      lng: -79.387054,
    },
    disableDefaultUI: true,
})

  render() {
    return (
      <div>
      <input id="pac-input" className="search-box" type="text" placeholder="Search Box"></input>
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '1000px', height: '1000px' }}
      />
      </div>
    )
  }
  
}
