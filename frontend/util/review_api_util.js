export const fetchReviews = spot_id => (
  $.ajax({
    method: 'GET',
    url: `/api/spots/${spot_id}/reviews`,
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: `/api/spots/:spot_id/reviews`,
    data: { review }
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/spots/:spot_id/reviews/${id}`
  })
);
