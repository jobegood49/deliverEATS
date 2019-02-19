import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REDUCE_QUANTITY,
  INCREASE_QUANTITY,
} from '../actions/types';

const initialState = {
  cartItems: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      let afterRemovedItems = state.cartItems.filter(
        ({ id }) => id !== action.payload,
      );
      return {
        ...state,
        cartItems: [...afterRemovedItems],
      };
    case REDUCE_QUANTITY:
      let afterReduceItems = state.cartItems.map(item => {
        if (item.id === action.payload) {
          item.quantity--;
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...afterReduceItems],
      };
    case INCREASE_QUANTITY:
      let afterIncreasedItems = state.cartItems.map(item => {
        if (item.id === action.payload) {
          item.quantity++;
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...afterIncreasedItems],
      };
    default:
      return state;
  }
}
