import { combineReducers } from 'redux';
import menusReducer from './menusReducer';

export default combineReducers({
  menus: menusReducer,
});
