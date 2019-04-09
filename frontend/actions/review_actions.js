import * as reviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const fetchReviews = spot_id => dispatch => {
  return reviewApiUtil.fetchReviews(spot_id).then(reviews => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => (
  reviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => (
  reviewApiUtil.deleteReview(reviewId).then(() => dispatch(removeReview(reviewId)))
);