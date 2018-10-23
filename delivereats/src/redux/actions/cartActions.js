import {
  INCREASE_QUANTITY,
  REDUCE_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './types';

export const addToCart = meal => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: meal.id,
      title: meal.title,
      price: meal.price,
      quantity: 1,
    },
  });
};

export const removeFromCart = meal => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: meal.id,
  });
};

export const increaseQuantity = id => dispatch => {
  dispatch({
    type: INCREASE_QUANTITY,
    payload: id,
  });
};

export const reduceQuantity = id => dispatch => {
  dispatch({
    type: REDUCE_QUANTITY,
    payload: id,
  });
};
