import * as Constants from '../constants';
const initState = {
  Show: false,
  Details: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.SUCCESS_CARD_Details: {
      return {
        ...state,
        Show: action.payload,
        Details: [action.Details],
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
