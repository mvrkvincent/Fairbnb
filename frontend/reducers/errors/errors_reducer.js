import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
// import spotErrorsReducer from './spot_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  // spot: spotErrorsReducer
});