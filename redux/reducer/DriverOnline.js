import * as Constants from '../constants';
const initState = {
  online: false,
  message: {},
  Switch: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.DRIVER_ONLINE: {
      return {
        ...state,
        message: action.payload,
        online: true,
      };
    }
    case Constants.DRIVER_OFFLINE: {
      return {
        ...state,
        Switch: action.Value,
        online: false,
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
