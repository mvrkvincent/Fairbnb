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

  componentDidUpdate(prevProps) {
    const indexMap = document.getElementById('index-map');
    const button = document.getElementById('map-button');
    if ((prevProps.search.city !== this.props.search.city)) {
      indexMap.classList.add("index-map-visible");
      button.classList.add("active-button");
      this.renderMap();
    } 
    else if (this.props.search === undefined) {
      indexMap.classList.remove("index-map-visible");
      button.classList.remove("active-button");
    }
  }

  fetchMapLocations() {
    const { spots, search } = this.props;
    let searchCity = search.city;
    let zoom;
    let mapLocs = [];
    if (searchCity) {
      for (let i=0; i < spots.length; i++) {
        if (spots[i].city.toLowerCase() === searchCity) {
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
    const { spots, search } = this.props;
    let spotIndexItems, headText, s;

    if (search.city) {
      const searchCity = search.city;
      const cityName = searchCity.split(' ').map(part => (part[0].toUpperCase() + part.slice(1))).join(' ');
      spotIndexItems = spots.map(spot => (spot.city.toLowerCase() === searchCity) ? <SpotIndexItem key={spot.id} spot={spot} /> : null);
      s = (spotIndexItems.length > 1) ? 's' : '';
      headText = (<span>Explore {cityName}</span>)

    } else {
      spotIndexItems = spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
      headText = (<span>Browse all {spotIndexItems.length}+ spots</span>);
    }

    return (
      <div className="spot-index" >
        <div id="index-map" className="index-map-hidden">{this.state.map}</div>
        <ul><div id="spot-index-head">{headText}</div>{spotIndexItems}</ul>
      </div>
    );
  }
}

export default SpotIndex;
