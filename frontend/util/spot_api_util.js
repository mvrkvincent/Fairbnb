export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: '/api/spots'
  })
);

export const fetchSpot = id => (
  $.ajax({
    method: 'GET',
    url: `/api/spots/${id}`
  })
);

export const createSpot = spot => (
  $.ajax({
    method: 'POST',
    url: `/api/spots`,
    data: { spot }
  })
);

export const updateSpot = spot => (
  $.ajax({
    method: 'PATCH',
    url: `/api/spots/${spot.id}`
  })
);

export const deleteSpot = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/spots/${id}`
  })
);

