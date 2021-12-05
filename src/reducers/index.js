import counterReducer from './counter';
import loggedReducer from './looged';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducer;
