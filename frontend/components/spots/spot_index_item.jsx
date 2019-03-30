import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {

  
  render() {
    const spot = this.props.spot;
    const spotImg = {backgroundImage: `url(${spot.img_url})`};
    const s = (spot.num_beds > 1) ? 's' : '';

    return (
      <div className="spot-item">
        <Link className="spot-item"to={`/spots/${spot.id}`}>
          <div className="spot-img" style={spotImg}></div>

          <div className="spot-accom">{spot.accommodation} · {spot.num_beds} bed{s}</div>
          <div className="spot-name">{spot.name}</div>
          <div className="spot-terms"><i className="fas fa-wave-square"></i>{spot.rate} per night · Free cancellation</div>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i> 
            <i className="fas fa-star"></i> 
            <i className="fas fa-star"></i> 
            <i className="far fa-star"></i>
          </div>
        </Link>
      </div>
    );
  }
};

export default SpotIndexItem;

 