import * as Constants from '../../constants/';
const initsatte = {
  SuccessMessageSinUP: [],
};
const reducer = (state = initsatte, actions) => {
  switch (actions.type) {
    case Constants.Driver_SignUp: {
      return {
        ...state,
        SuccessMessageSinUP: [actions.payload],
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
