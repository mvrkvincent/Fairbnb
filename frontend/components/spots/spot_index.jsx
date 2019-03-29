import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    const { spots } = this.props;

    const SpotIndexItems = spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)

    return (
      <div className="spot-index">
        <ul>{SpotIndexItems}</ul>
      </div>
    );
  }
}

export default SpotIndex;
