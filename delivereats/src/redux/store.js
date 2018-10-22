import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import thunk from 'redux-thunk';

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);

export default store;
