import * as Constants from '../constants';
const initState = {
  Show: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.PAYMEMT_OPEN_MODAL: {
      return {
        ...state,
        Show: action.payload,
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
