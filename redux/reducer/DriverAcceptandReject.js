import * as Constants from '../constants';
const initState = {
  Show: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.Driver_Accept_and_Reject_modal: {
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
