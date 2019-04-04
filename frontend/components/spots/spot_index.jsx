import React from 'react';
import SpotIndexItem from './spot_index_item';
import { searchCity } from '../../actions/search_actions';

class SpotIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }


  render() {
    const { spots, city } = this.props;

    let SpotIndexItems;
    if (city[0]) {
      const searchCity = city.join('');
      SpotIndexItems = spots.map(spot => (spot.city === searchCity) ? <SpotIndexItem key={spot.id} spot={spot} /> : null);
    } else {
      SpotIndexItems = spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />);
    }

    return (
      <div className="spot-index" >
        
        <ul><div id="spot-index-head">Where to stay</div>{SpotIndexItems}</ul>
      </div>
    );
  }
}

export default SpotIndex;
