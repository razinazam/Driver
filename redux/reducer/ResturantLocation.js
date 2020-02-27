import * as Constants from '../constants';
const initState = {
  Show: false,
  ResturantLocation: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.Resturant_LOCATION_SCREEN: {
      return {
        ...state,
        Show: action.payload,
        ResturantLocation: [action.Locationdata],
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
