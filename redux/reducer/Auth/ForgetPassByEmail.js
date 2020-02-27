import * as Constants from '../../constants/';
const initsatte = {
  message: '',
};
const reducer = (state = initsatte, actions) => {
  switch (actions.type) {
    case Constants.Forget_password_BY_Email: {
      return {
        ...state,
        message: actions.payload,
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
