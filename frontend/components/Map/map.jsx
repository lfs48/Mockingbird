import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { mapstyle } from "../../../lib/assets/map-styling";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {},
      errors: this.props.errors
    };
  }

  // let map;

  // initMap = {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: { lat: 40.720310, lng: -73.913242 },
  //     zoom: 11,
  //     styles: mapstyle,
  //     mapTypeControl: false,
  //     disableDefaultUI: true,
  //     zoomControl: false,
  //     scaleControl: false,
  //     streetViewControl: false,
  //     rotateControl: false,
  //     fullscreenControl: true
  //   }
  // }

// componentDidMount() {
//   initMap();
// }

  render() {
    return (
      <Map
        google = {this.props.google}
        zoom = {8}
        styles = {mapstyle}
        mapTypeControl = {false}
        disableDefaultUI = {true}
        zoomControl = {false}
        scaleControl = {false}
        streetViewControl = {false}
        rotateControl = {false}
        fullscreenControl = {true}
        initialCenter = {{ lat: 47.444, lng: -122.176 }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQ1sVSKZozy7U7kxsWE2D1B6HgT9QsjH8'
})(MapContainer)