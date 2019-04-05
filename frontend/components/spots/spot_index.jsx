import React from 'react';
import SpotIndexItem from './spot_index_item';
import IndexMap from './index_map';

class SpotIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    const { spots, city } = this.props;
    const indexMap = document.getElementById('index-map');
    let headText = (<span>Browse all {spots.length}+ spots</span>);
    let SpotIndexItems, locs, insertMap;

    if (city[0]) {
      const searchCity = city.join('');
      const cityName = searchCity.split(' ').map(part => (part[0].toUpperCase() + part.slice(1)));
      headText = (<span>Explore {cityName}</span>)
      SpotIndexItems = spots.map(spot => (spot.city.toLowerCase() === searchCity) ? <SpotIndexItem key={spot.id} spot={spot} /> : null);
    } else {
      SpotIndexItems = spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
      locs = spots.map(spot => ([spot.name, spot.lat, spot.lng, spot.id]));
      insertMap = (indexMap) ? (<IndexMap locs={locs} />) : null;
    }

    return (
      <div className="spot-index" >
        <div className="index-map-visible" id="index-map">{insertMap}</div>
        <ul><div id="spot-index-head">{headText}</div>{SpotIndexItems}</ul>
      </div>
    );
  }
}

export default SpotIndex;
