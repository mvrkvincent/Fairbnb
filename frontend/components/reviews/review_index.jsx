import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  rating: null, 
                    body: '',
                    spot_id: null,
                    ratingAve: null
                  }; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.spotId !== this.props.spotId) {
      const spot = this.props.spotId;
      const rating = this.props.rating;
      this.setState({spot_id: spot, ratingAve: rating});
      this.props.fetchReviews(spot);
    }

    if (this.props.reviews[0] && this.state.ratingAve !== prevState.ratingAve) {
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
    this.calculateRating();
    this.clearValues();
  }

  calculateRating() {
    const reviews = this.props.reviews;
    let reviewCount = 0;
    let ratingSum = 0;
    let ratingAve = 0;

    for (let i=0; i < reviews.length; i++) {
      reviewCount++;
      ratingSum += reviews[i].rating;
    }

    ratingAve = Math.ceil(ratingSum/reviewCount);
    this.setState({ratingAve: ratingAve });

    if (this.props.rating !== ratingAve) {
      this.props.updateSpot({id: this.state.spot_id, ave_rating: ratingAve});
    }

  }

  generateRatingOptions() {
    const ratingOptions = [];
    
    for (let i = 5; i > 0; i--) {
      ratingOptions.push((<option key={i} value={i}>{i}</option>))
    }
    return ratingOptions;
  }

  clearValues() {
    this.setState({body: ''});
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
    const { reviews, stars } = this.props;
    let numReviews = 0;
    reviews.forEach(() => { numReviews += 1; });
    const s1 = numReviews > 1 ? 's' : '';
    const reviewIndexItems = reviews.map(review => <ReviewIndexItem key={review.id} review={review} />)

    const reviewForm = 
      <form className="modal-form" onSubmit={this.handleSubmit}>
        <div className="field-wrapper">
          <div className="form-field">
            <textarea
              className="form-input"
              placeholder="Tell us about your stay..."
              value={this.state.body}
              onChange={this.handleInput('body')} />
            <select
              className="form-input"
              placeholder="rating"
              onChange={this.handleInput('rating')}>
              <option value="" disabled selected>Give this spot some stars</option>
              {this.generateRatingOptions()}
            </select>
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
