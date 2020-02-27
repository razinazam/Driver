import * as Constants from '../constants';
const initState = {
  Show: false,
  PopUpDetails: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.DRIVER_POP_UP_RECIVE: {
      return {
        ...state,
        Show: action.payload,
        PopUpDetails: [action.Upcoming],
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
