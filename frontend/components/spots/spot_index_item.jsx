import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {

  
  render() {
    const spot = this.props.spot;

    const spotImg = {backgroundImage: `url(${spot.img_url})`};

    return (
      <div className="spot-item">
        <Link to={`/spots/${spot.id}`}>
          <div className="spot-img" style={spotImg}></div>
          <div className="spot_type">{spot.type}{spot.num_beds} BEDS</div>
          <div className="spot_name">{spot.name}</div>
          <div className="spot_terms">{spot.rate} per night</div>
          <div className="rating">***** (100)</div>
        </Link>
      </div>
    );
  }
};

export default SpotIndexItem;

 