import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import uiReducer from './ui/ui_reducer';
import errorsReducer from './errors/errors_reducer';
import sessionReducer from './session/session_reducer';

export default combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  errors: errorsReducer,
  session: sessionReducer
});