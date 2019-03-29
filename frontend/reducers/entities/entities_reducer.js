import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import spotsReducer from './spots_reducer';

export default combineReducers({
  users: usersReducer,
  spots: spotsReducer
});