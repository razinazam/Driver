import * as constatnts from '../constants';
export const SuccessCard = (Show, v) => {
  return dispatch => {
    dispatch({
      type: constatnts.SUCCESS_CARD,
      payload: Show,
      Data: v,
    });
  };
};
