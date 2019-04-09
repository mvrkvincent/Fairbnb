import React from 'react';

class ReviewIndexItem extends React.Component {


  render() {
    const { body } = this.props.review;

    return (
      <div className="review-item">
          <div className="review-head">Anonymous</div>
          <div className="review-body">{body}</div>
      </div>
    );
  }
};

export default ReviewIndexItem;
