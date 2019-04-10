import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexMap extends React.Component {

  constructor(props) {
    super(props);

  }


  linkToSpot() {

  }

  initMap() {
    const {locs, zoom} = this.props;
    const map = new google.maps.Map(document.getElementById('index-map'), {
      zoom: zoom,
      center: new google.maps.LatLng(locs[0][1], locs[0][2]),
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

    let marker = withRouter(locs.map(loc => {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(loc[1], loc[2]),
        title: loc[0],
        map: map,
    });

      var infowindow = new google.maps.InfoWindow({
        content: loc[0]
      });

      marker.addListener('click', function () {
        window.location=`/#/spots/${loc[3]}`;
      });

      marker.addListener('mouseover', function () {
        infowindow.open(map, this);
      });

      marker.addListener('mouseout', function () {
        infowindow.close();
      });
      

  }));

  }

  render() {
    return (
      <div className="module">{this.initMap()}</div>
    )

  }

}

export default withRouter(IndexMap);