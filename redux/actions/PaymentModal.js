import * as constatnts from '../constants';
export const paymentOpeModal = Show => {
  return dispatch => {
    dispatch({
      type: constatnts.PAYMEMT_OPEN_MODAL,
      payload: Show,
    });
  };
};
