import { combineReducers } from 'redux-loop';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  users : usersReducer,
  profile: profileReducer
})
