import React from 'react';
import SpotIndexItem from './spot_index_item';
import IndexMap from './index_map';

class SpotIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { map: null };

  }

  componentDidMount() {
    this.props.fetchSpots().then(() => this.renderMap());
  }


  fetchMapLocations() {
    const { spots, city } = this.props;
    let citySearch = city.join('');
    let zoom;
    let mapLocs = [];
    if (city[0]) {
      for (let i=0; i < spots.length; i++) {
        if (spots[i].city.toLowerCase() === citySearch) {
          mapLocs.push(spots[i]);
        }
      }
      zoom = 12;
    } else {
      mapLocs = spots;
      zoom = 2;
    }
    return { mapLocs, zoom };
  }

  renderMap() {
    const { mapLocs, zoom } = this.fetchMapLocations();
    let locs = mapLocs.map(spot => ([spot.name, spot.lat, spot.lng, spot.id]));
    let insertMap = (<IndexMap zoom={zoom} locs={locs} />);
    this.setState({map: insertMap});
  }

  render() {
    const { spots, city } = this.props;
    let spotIndexItems, locs, insertMap, headText, s;

    if (city[0]) {
      const searchCity = city.join('');
      const cityName = searchCity.split(' ').map(part => (part[0].toUpperCase() + part.slice(1)));
      spotIndexItems = spots.map(spot => (spot.city.toLowerCase() === searchCity) ? <SpotIndexItem key={spot.id} spot={spot} /> : null);
      s = (spotIndexItems.length > 1) ? 's' : '';
      headText = (<span>Explore {cityName}</span>)
    } else {
      spotIndexItems = spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
      headText = (<span>Browse all {spotIndexItems.length}+ spots</span>);
    }

    return (
      <div className="spot-index" >
        <div className="index-map-visible" id="index-map">{this.state.map}</div>
        <ul><div id="spot-index-head">{headText}</div>{spotIndexItems}</ul>
      </div>
    );
  }
}

export default SpotIndex;
