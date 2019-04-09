import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {

  calculateStars() {
    const ratingAve = this.props.spot.ave_rating;
    let stars = [];
    let k = 0;

    for (let i = 1; i <= ratingAve; i++) {

      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    while (stars.length < 5) {
      stars.push(<i key={k} className="far fa-star"></i>);
      k++
    }
    stars;
    return stars;
  }

  displayRatingText() {
    let rating = this.props.spot.ave_rating;
    let ratingText;
    if (rating === 0) {
      ratingText = 'No current reviews'
    } else if (rating > 0 && rating < 3) {
      ratingText = 'Good Spot'
    } else if (rating >= 3 && rating < 5) {
      ratingText = 'Great Spot'
    } else {
      ratingText = 'Excellent Spot'
    }

    return ratingText;
  }
  
  render() {
    const { id, name, accommodation, num_beds, img_url, rate } = this.props.spot;
    const spotImg = {backgroundImage: `url(${img_url})`};
    const s = (num_beds > 1) ? 's' : '';
    const stars = this.calculateStars();
    const ratingText = this.displayRatingText();
    return (
      <div className="spot-item">
        <Link className="spot-item" to={`/spots/${id}`}>
          <div className="spot-img" style={spotImg}></div>

          <div className="spot-accom">{accommodation} · {num_beds} bed{s}</div>
          <div className="spot-name">{name}</div>
          <div className="spot-terms"><i className="fas fa-wave-square"></i>{rate} per night · Free cancellation</div>
          <div className="rating">
            {stars}<div className="num-reviews">{ratingText}</div>
          </div>
        </Link>
      </div>
    );
  }
};

export default SpotIndexItem;

 