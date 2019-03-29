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
      <div className="spot-index" >
        <div id="spot-index-head">Where to stay</div>
        {SpotIndexItems}
      </div>
    );
  }
}

export default SpotIndex;
