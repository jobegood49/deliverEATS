import { FETCH_MENUS } from '../actions/types';

const initialState = {
  menuItems: [],
  restaurant: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENUS:
      return {
        ...state,
        menuItems: action.payload.menus,
        restaurant: action.payload.restaurant,
      };
    default:
      return state;
  }
}
