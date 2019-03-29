import * as SpotApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const REMOVE_SPOT = 'REMOVE_SPOT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

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

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchSpots = () => dispatch => (
  SpotApiUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchSpot = id => dispatch => (
  SpotApiUtil.fetchSpot(id).then(spot => dispatch(receiveSpot(spot)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createSpot = spot => dispatch => (
  SpotApiUtil.createSpot(spot).then(spot => dispatch(receiveSpot(spot)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateSpot = spot => dispatch => (
  SpotApiUtil.updateSpot(spot).then(spot => dispatch(receiveSpot(spot)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteSpot = spotId => dispatch => (
  SpotApiUtil.deleteSpot(spotId).then(() => dispatch(removeSpot(spotId)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);