import { ADD_TO_CART, DELETE_FROM_CART, FETCH_CART } from '../actions/types';

const initialState = {
  cart: [],
  cartItem: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItem: action.payload,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItem: action.payload,
      };
    case FETCH_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
