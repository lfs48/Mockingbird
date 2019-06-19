import React from 'react';
import { mapstyle } from "./lib/assets/map-styling";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: this.props.errors
    };
  }

  let map;

  initMap = {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.720310, lng: -73.913242 },
      zoom: 11,
      styles: mapstyle,
      mapTypeControl: false,
      disableDefaultUI: true,
      zoomControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true
    }
  }

componentDidMount() {
  initMap();
}

  render() {
    return (
      <div id="map">{map}</div>
    )
  }
}

export default Map;