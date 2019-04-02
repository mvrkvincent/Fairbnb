import React from 'react';

class SpotMap extends React.Component {



  initMap() {
    const lat = this.props.lat;
    const lng = this.props.lng;
    const spot = { lat: lat, lng: lng };

    const map = new google.maps.Map( document.getElementById('spot-map'), { zoom: 16, center: spot });
    var marker = new google.maps.Marker({ position: spot, map: map });

  }

  render() {

    return (
      <div className="module">{this.initMap()}</div>
    )

  }

}

export default SpotMap;