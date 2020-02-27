import * as Constants from '../../constants/';
const initsatte = {
  auth: false,
  useDetails: {},
};
const reducer = (state = initsatte, actions) => {
  switch (actions.type) {
    case Constants.Driver_Login: {
      return {
        ...state,
        auth: true,
        useDetails: actions.payload,
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
