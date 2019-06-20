import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import { mapstyle } from "../../../lib/assets/map-styling";
import CurrentLocation from './map_center';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 40.720310, lng: -73.913242 },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      errors: this.props.errors
    };
  }

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });

  // onClose = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

  render() {
    return (

      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      // <Map
      //   google = {this.props.google}
      //   zoom = {12}
      //   styles = {mapstyle}
      //   mapTypeControl = {false}
      //   disableDefaultUI = {true}
      //   zoomControl = {false}
      //   scaleControl = {false}
      //   streetViewControl = {false}
      //   rotateControl = {false}
      //   fullscreenControl = {true}
      //   initialCenter = {this.state.center}
      // />
    )
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQ1sVSKZozy7U7kxsWE2D1B6HgT9QsjH8'
})(MapContainer);