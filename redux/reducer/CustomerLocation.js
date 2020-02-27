import * as Constants from '../constants';
const initState = {
  Show: false,
  LodationDetails: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.Customer_Location_Screen: {
      return {
        ...state,
        Show: action.payload,
        LodationDetails: [action.LodationDetails],
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
