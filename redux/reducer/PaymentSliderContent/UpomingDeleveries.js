import * as Constants from '../../constants';
const initState = {
  UpcomingDeleveries: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.Pyment_Modal_Slider_Data_upComing: {
      return {
        ...state,
        UpcomingDeleveries: action.payload,
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
