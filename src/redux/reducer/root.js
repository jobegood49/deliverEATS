import { combineReducers } from 'redux';
import menusReducer from './menusReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  menus: menusReducer,
  cart: cartReducer,
});
