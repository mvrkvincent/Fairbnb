import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  rating: 4, 
                    body: '',
                    spot_id: null,
                    reviewCount: null,
                    ratingAve: null
                  }; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {

    if (prevProps.spotId !== this.props.spotId) {
      const spot = this.props.spotId;
      const rating = this.props.rating;
      this.setState({spot_id: spot, ratingAve: rating});
      this.props.fetchReviews(spot);
    }

    if (this.props.reviews[0] && this.state.ratingAve === null) {
      this.calculateRating();
    }
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      rating: this.state.rating,
      body: this.state.body,
      spot_id: this.state.spot_id
    };

    this.props.createReview(newReview);
  }

  calculateRating() {
    const reviews = this.props.reviews;
    let reviewCount = 0;
    let ratingSum = 0;
    let ratingAve = 0;
    reviews.forEach(review => {reviewCount += 1; ratingSum += review.rating;});

    ratingAve = Math.floor(ratingSum/reviewCount);
    this.setState({ reviewCount: reviewCount, ratingAve: ratingAve });

    if (this.props.rating !== ratingAve) {
      this.props.updateSpot({id: this.state.spot_id, ave_rating: ratingAve});
    }

  }

  // renderErrors(field) {
  //   const errors = this.props.errors;
  //   const fieldError = [];

  //   errors.forEach((error) => (error[0] === field) ? fieldError.push(error) : null);

  //   return (
  //     <ul>{fieldError.map((error, idx) => (<li key={idx}>{error}</li>))}</ul>
  //   )
  // }


  render() {
    const { reviews } = this.props;
    const { ratingAve } = this.state;
    let numReviews = 0;
    reviews.forEach(() => { numReviews += 1; });
    const s1 = numReviews > 1 ? 's' : '';
    const reviewIndexItems = reviews.map(review => <ReviewIndexItem key={review.id} review={review} />)

    let stars = [];
    let k = 0;

    for (let i = 1; i <= ratingAve; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    while (stars.length < 5) {
      stars.push(<i key={k} className="far fa-star"></i>);
      k++
    }

    const reviewForm = 
      <form className="modal-form" onSubmit={this.handleSubmit}>
        <div className="field-wrapper">
          <div className="form-field">
            <textarea
              className="form-input"
              placeholder="Tell us about your stay..."
              value={this.state.body}
              onChange={this.handleInput('body')} />
          </div>
          {/* <div className="modal-errors">{this.renderErrors('B')}</div> */}
        </div>
        <button>Submit Review</button>
      </form>

    const showReviewForm = (this.props.currentUser) ? reviewForm : null;
    const reviewText = (numReviews > 0) ? `${numReviews} Review${s1}` : `No current reviews${'  '}`
    return (
      <div>
        <div className="section-head">{reviewText}
            <div className="large-rating">{stars}</div>
        </div>
        {showReviewForm}
      <div className="review-index" >
        {reviewIndexItems}
      </div>
      </div>
    );
  }
}

export default ReviewIndex;
