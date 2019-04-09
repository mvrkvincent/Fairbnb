import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  rating: 4, 
                    body: '',
                    spot_id: null,
                    reviewTotal: 0,
                    ratingAverage: 0
                  }; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.spotId !== this.props.spotId) {
      const spot = this.props.spotId;
      this.setState({spot_id: spot});
      this.props.fetchReviews(spot);
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
    let reviewTotal = 0;
    let ratingSum = 0;

    reviews.forEach(review => {reviewTotal += 1; ratingSum += review.rating;});

    return { reviewTotal, ratingSum };
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
    const { reviewTotal, ratingSum } = this.calculateRating();
    const ratingAve = (ratingSum / reviewTotal);
    const s1 = reviewTotal > 1 ? 's' : '';
    const reviewIndexItems = reviews.map(review => <ReviewIndexItem key={review.id} review={review} />)

    let stars = [];

    for (let i = 1; i <= ratingAve; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    while (stars.length < 5) {
      stars.push(<i className="far fa-star"></i>);
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
    const reviewText = (reviewTotal > 0) ? `${reviewTotal} Review${s1}` : `No current reviews${'  '}`
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
