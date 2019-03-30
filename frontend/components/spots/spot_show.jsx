import React from 'react';

class SpotShow extends React.Component {

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    debugger
    const { name, city, accommodation, num_guests, num_beds, num_baths, description, img_url } = this.props.spot;
    debugger
    const spotImg = { backgroundImage: `url(${img_url})` };
    const s1 = num_beds > 1 ? 's' : '';
    const s2 = num_baths > 1 ? 's' : '';
    // const userId = spot.host_id;
    // const hostImg = { backgroundImage: `url(${user.userId.img_url})` };
    // const hostName = user.userId.fname
    return (
      <div className="spot-show">

        <div className="spot-imgs" style={spotImg}></div>

        <div className="spot-name">
            <div className="name-head">{name}</div>
            <div className="detail">{city}</div>
            {/* <div className="host-img" style={hostImg}></div>
            <div className="host-name">{hostName}</div> */}
        </div>

        <div className="spot-details">
          <div className="section-head"><i className="fas fa-home"></i>   {accommodation}</div>
          <div className="detail">{num_guests}guests {num_beds}bed{s1} {num_baths}bath{s2}</div>
          <div className="section-head"><i class="fas fa-info-circle"></i>  About the Space</div>
          <div className="detail">{description}</div>
        </div>
        
        <div className="amenities">
            <div className="section-head">Amenitites</div>
        </div>

        <div className="availability">
            <div className="section-head">Availability</div>
        </div>

        <div className="Reviews">
          <div className="reviews-head">Reviews<div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div></div>
        </div>
        


      </div>
    );
  }
}

export default SpotShow;