import * as Constants from '../constants';
const initState = {
  Show: false,
  ResturantOrderDetails: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.RESTURANT_ORDER_DETAILS_POPUP: {
      return {
        ...state,
        Show: action.payload,
        ResturantOrderDetails: [action.ResturantDetails],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
