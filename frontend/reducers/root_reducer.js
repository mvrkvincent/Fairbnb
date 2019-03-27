import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import modalReducer from './ui/modal_reducer';
import errorsReducer from './errors/errors_reducer';
import sessionReducer from './session/session_reducer';

export default combineReducers({
  entities: entitiesReducer,
  ui: modalReducer,
  errors: errorsReducer,
  session: sessionReducer
});