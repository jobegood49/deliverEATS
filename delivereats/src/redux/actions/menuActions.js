import { FETCH_MENUS } from './types';
import axios from 'axios';

export const fetchMenus = () => dispatch => {
  axios
    .get(
      'https://s3-eu-west-1.amazonaws.com/lereacteurapp/react/deliveroo/deliveroo-cart.json',
    )
    .then(response =>
      dispatch({
        type: FETCH_MENUS,
        payload: {
          restaurant: response.data.restaurant,
          menus: response.data.menu,
        },
      }),
    );
};
