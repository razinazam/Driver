import * as Constants from '../constants';
const initState = {
  Show: false,
  data: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.SUCCESS_CARD: {
      return {
        ...state,
        Show: action.payload,
        data: [action.Data],
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
