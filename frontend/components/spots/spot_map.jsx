import React from 'react';

class SpotMap extends React.Component {

  initMap() {
    const lat = this.props.lat;
    const lng = this.props.lng;
    const spot = { lat: lat, lng: lng };

    const map = new google.maps.Map( document.getElementById('spot-map'), { 
      zoom: 16, 
      center: spot,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
    });

    const circle = {
      path: ' M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z',
      fillColor: '#008489',
      fillOpacity: 0.2,
      strokeColor: '#008489',
      strokeWeight: 1,
      scale: 1.4
    };

    var marker = new google.maps.Marker({ position: spot, icon: circle, map: map });

  }

  render() {

    return (
      <div className="module">{this.initMap()}</div>
    )

  }

}

export default SpotMap;