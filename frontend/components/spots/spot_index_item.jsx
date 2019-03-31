import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {

  
  render() {
    const { id, name, accommodation, num_beds, img_url, rate } = this.props.spot;
    const spotImg = {backgroundImage: `url(${img_url})`};
    const s = (num_beds > 1) ? 's' : '';

    return (
      <div className="spot-item">
        <Link className="spot-item" to={`/spots/${id}`}>
          <div className="spot-img" style={spotImg}></div>

          <div className="spot-accom">{accommodation} · {num_beds} bed{s}</div>
          <div className="spot-name">{name}</div>
          <div className="spot-terms"><i className="fas fa-wave-square"></i>{rate} per night · Free cancellation</div>
          <div className="rating">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i> 
            <i className="far fa-star"></i> 
            <i className="far fa-star"></i> 
            <i className="far fa-star"></i>
            <div className="num-reviews">No current ratings</div>
          </div>
        </Link>
      </div>
    );
  }
};

export default SpotIndexItem;

 