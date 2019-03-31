import React from 'react';

class SpotShow extends React.Component {

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    const defaultSpot = {
      name: '', accommodation: '', rate: 0, num_guests: 0, num_beds: 0,
      num_baths: 0, city: 0, description: '', img_url: ''};
    
      const { name, accommodation, num_guests, num_beds, 
            num_baths, city, description, img_url } = this.props.spot || defaultSpot;

    const s1 = num_guests > 1 ? 's' : '';
    const s2 = num_beds > 1 ? 's' : '';
    const s3 = num_baths > 1 ? 's' : '';
    // const userId = host_id;
    // const hostImg = { backgroundImage: `url(${user.userId.img_url})` };
    // const hostName = user.userId.fname
    return (
      <div className="show">
  
      <div className="show-imgs">
          <div className="main-img"><img src={img_url}/></div>
          <div className="sub-imgs">
            <div><img src={img_url} /></div>
            <div><img src={img_url} /></div>
            <div><img src={img_url} /></div>
            <div><img src={img_url} /></div>
          </div>
      </div>

      <div className="show-content">

        <div className="show-content-left">
          <div className="name">
              <div className="name-head">{name}</div>
          {/* <div className="host-img" style={hostImg}></div>
          <div className="host-name">{hostName}</div> */}
          </div>
          <div className="detail">{city}</div>

          <div className="details">
            <div className="accommodation-head"><i className="fas fa-home"></i>{'  '}{accommodation}</div>
            <div className="main-detail">
              <div>{num_guests} guest{s1}</div>
              <div>{num_beds} bedroom{s2}</div>
              <div>{num_baths} bathroom{s3}</div>
            </div>
            <div className="section-head"></div>
            <div className="detail">{description}</div>
          </div>
          
          <div className="amenities">
              <div className="section-head">Amenitites</div>
          </div>

          <div className="availability">
              <div className="section-head">Availability</div>
          </div>

          <div className="Reviews">
            <div className="reviews-head">Reviews
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            </div>
          </div>
        </div>

        <div className="show-content-right">
        </div>



      </div>







    </div>
    );
  }
}

export default SpotShow;