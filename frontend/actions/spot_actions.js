import * as SpotApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const REMOVE_SPOT = 'REMOVE_SPOT';

const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});
const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
});

const removeSpot = spotId => ({
  type: REMOVE_SPOT,
  spotId
});

export const fetchSpots = () => dispatch => {
 return SpotApiUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)));
};

export const fetchSpot = id => dispatch => (
  SpotApiUtil.fetchSpot(id).then(spot => dispatch(receiveSpot(spot)))
);

export const createSpot = spot => dispatch => (
  SpotApiUtil.createSpot(spot).then(spot => dispatch(receiveSpot(spot)))
);

export const updateSpot = spot => dispatch => (
  SpotApiUtil.updateSpot(spot).then(spot => dispatch(receiveSpot(spot)))
);

export const deleteSpot = spotId => dispatch => (
  SpotApiUtil.deleteSpot(spotId).then(() => dispatch(removeSpot(spotId)))
);