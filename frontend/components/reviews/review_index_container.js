import { connect } from 'react-redux';
import { fetchReviews, deleteReview, createReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id],
  reviews: Object.values(entities.reviews)
});

const mdp = dispatch => ({
  fetchReviews: spot_id => dispatch(fetchReviews(spot_id)),
  createReview: review => dispatch(createReview(review)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(msp, mdp)(ReviewIndex);