import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import modalReducer from './ui/modal_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

export default combineReducers({
  entities: entitiesReducer,
  ui: modalReducer,
  errors: errorsReducer,
  session: sessionReducer
});